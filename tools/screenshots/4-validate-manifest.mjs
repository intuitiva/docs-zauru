#!/usr/bin/env node
/**
 * 4-validate-manifest.mjs — Valida manifest.json SIN abrir el navegador
 * (reglas E1–E9 y W1–W4 en lib/manifest.mjs). Las rutas que escriben (E7)
 * salen del escaneo de los controllers de baculo, igual que en el runner.
 *
 * Requiere routes.json (corre antes 1-extract-routes.mjs).
 *
 * Uso:
 *   node 4-validate-manifest.mjs [--docs slug1,slug2] [--quiet]
 *   node 4-validate-manifest.mjs --fix   # aplica las correcciones automáticas y valida
 *
 * --fix corrige todo el manifiesto (selectores, anclas, rutas que escriben,
 * destinos repetidos) sin llamar al LLM; lo que no puede decidir lo deja
 * como captureMode "blocked" con su causa.
 *
 * Exit 1 si hay errores. Corrígelo a mano o regenera los docs rotos con
 * 3-generate-manifest.mjs --docs <archivo.md>.
 */
import fs from 'node:fs';
import path from 'node:path';
import { REPO_ROOT } from './lib/env.mjs';
import { readManifest, readRoutes, validateManifest, writeManifest } from './lib/manifest.mjs';
import { repairManifest } from './lib/repair.mjs';
import { existingImageRefs, walkMarkdown } from './lib/inventory.mjs';
import { baculoControllersDir, loadMutatingNamesFromControllers } from './lib/safety.mjs';

const args = process.argv.slice(2);
const quiet = args.includes('--quiet');
const fix = args.includes('--fix');
const docsFilter = (() => {
  const i = args.indexOf('--docs');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

const routes = readRoutes();
if (!routes) {
  console.error('No existe routes.json. Corre primero: node 1-extract-routes.mjs');
  process.exit(1);
}
const mutatingNames = loadMutatingNamesFromControllers(baculoControllersDir(REPO_ROOT));

let manifest = readManifest();
if (fix) {
  const docsDir = path.join(REPO_ROOT, 'docs');
  const docs = walkMarkdown(docsDir).map((p) => ({ docPath: path.relative(REPO_ROOT, p), content: fs.readFileSync(p, 'utf8') }));
  const { manifest: repaired, notes } = repairManifest(manifest, {
    docs,
    routes: routes.routes,
    mutatingNames,
    existingRefs: existingImageRefs(REPO_ROOT),
  });
  writeManifest(repaired);
  manifest = repaired;
  const blocked = notes.duplicates.filter((d) => d.action === 'blocked').length;
  console.log(
    `--fix: ${notes.anchors.length} ancla(s) alineada(s), ${notes.added.length} referencia(s) incorporada(s), ` +
      `${notes.duplicates.length - blocked} propuesta(s) repetida(s) descartada(s), ${blocked} paso(s) repetido(s) bloqueado(s).`
  );
}

const docs = docsFilter ? manifest.docs.filter((d) => docsFilter.includes(d.slug)) : manifest.docs;
const result = validateManifest({ docs }, { routes, mutatingNames });

console.log(`routes.json: ${routes.routeCount} rutas (${routes.source} @ ${routes.sourceSha})`);
console.log(`Manifiesto: ${result.stats.docs} docs · ${result.stats.shots} shots`);
console.log('');

if (!quiet) {
  const byDoc = new Map();
  for (const e of result.errors) {
    if (!byDoc.has(e.doc)) byDoc.set(e.doc, []);
    byDoc.get(e.doc).push({ level: 'error', ...e });
  }
  for (const w of result.warnings) {
    if (!byDoc.has(w.doc)) byDoc.set(w.doc, []);
    byDoc.get(w.doc).push({ level: 'warn', ...w });
  }
  const sorted = [...byDoc.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [doc, items] of sorted) {
    console.log(`${doc}`);
    for (const it of items) {
      const mark = it.level === 'error' ? '✗' : '⚠';
      const shot = it.shot != null ? ` shot ${it.shot}` : '';
      console.log(`  ${mark} [${it.rule}]${shot}: ${it.message}`);
    }
  }
  if (!sorted.length) console.log('Sin problemas.');
}

console.log('');
console.log(`Resumen: ${result.errors.length} error(es) en ${result.stats.docsAffected} doc(s), ${result.warnings.length} advertencia(s).`);
if (result.errors.length) {
  console.log('\nCorrige a mano en manifest.json, aplica las correcciones automáticas con');
  console.log('  node 4-validate-manifest.mjs --fix');
  console.log('o regenera el documento con:');
  console.log('  node 3-generate-manifest.mjs --docs docs/<sección>/<doc>.md');
}
process.exitCode = result.errors.length ? 1 : 0;
