#!/usr/bin/env node
/**
 * 4-validate-manifest.mjs — Valida manifest.json SIN abrir el navegador:
 *
 *   E1  docPath existe en el repo
 *   E2  zauruPath no vacío
 *   E3  zauruPath existe en routes.json (rutas reales del ERP, de baculo)
 *   E4  resolveId solo se usa en rutas con segmento de id
 *   E5  sin URLs repetidas dentro de un doc (salvo que actions las diferencien)
 *   E6  stepNumber único por doc
 *   W1  insertAfterText no aparece en el .md
 *   W2  caption vacío
 *
 * Requiere routes.json (corre antes 1-extract-routes.mjs).
 *
 * Uso:
 *   node 4-validate-manifest.mjs [--docs slug1,slug2] [--quiet]
 *
 * Exit 1 si hay errores. Corrígelo a mano o regenera los docs rotos con
 * 3-generate-manifest.mjs --docs <archivo.md>.
 */
import fs from 'node:fs';
import path from 'node:path';
import { REPO_ROOT } from './lib/env.mjs';
import { readManifest, readRoutes, validateManifest, manifestPath } from './lib/manifest.mjs';

const args = process.argv.slice(2);
const quiet = args.includes('--quiet');
const docsFilter = (() => {
  const i = args.indexOf('--docs');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

const routes = readRoutes();
if (!routes) {
  console.error('No existe routes.json. Corre primero: node 1-extract-routes.mjs');
  process.exit(1);
}

const manifest = readManifest();
const docs = docsFilter ? manifest.docs.filter((d) => docsFilter.includes(d.slug)) : manifest.docs;
const result = validateManifest({ docs }, { routes });

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
  console.log('\nCorrige a mano en manifest.json o regenera con:');
  console.log('  node 3-generate-manifest.mjs --docs docs/<sección>/<doc>.md');
}
process.exitCode = result.errors.length ? 1 : 0;
