#!/usr/bin/env node
/**
 * 1-extract-routes.mjs — Lee config/routes.rb del repo baculo (el ERP real)
 * y genera routes.json: la lista de TODAS las rutas GET que existen en
 * Zauru. Es la "verdad" del pipeline: generate-manifest solo puede elegir
 * rutas de esta lista y run-screenshots verifica contra ella.
 *
 * Uso:
 *   node 1-extract-routes.mjs            # baculo en ../baculo (hermano del repo)
 *   BACULO_DIR=/ruta node 1-extract-routes.mjs
 *
 * Solo lectura de baculo; escribe tools/screenshots/routes.json.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { REPO_ROOT } from './lib/env.mjs';
import { parseRoutes } from './lib/routes.mjs';

const baculoDir = process.env.BACULO_DIR || path.resolve(REPO_ROOT, '..', 'baculo');
const routesPath = path.join(baculoDir, 'config', 'routes.rb');

if (!fs.existsSync(routesPath)) {
  console.error(`No se encontró ${routesPath}.`);
  console.error('Clona el repo baculo como hermano de docs-zauru o define BACULO_DIR.');
  process.exit(1);
}

let sha = null;
try {
  sha = execFileSync('git', ['-C', baculoDir, 'rev-parse', '--short', 'HEAD'], { encoding: 'utf8' }).trim();
} catch {
  sha = null;
}

const text = fs.readFileSync(routesPath, 'utf8');
const { routes, skipped } = parseRoutes(text);

const out = {
  generatedAt: new Date().toISOString().slice(0, 10),
  source: path.relative(path.dirname(REPO_ROOT), routesPath),
  sourceSha: sha,
  routeCount: routes.length,
  routes,
  skippedCount: skipped.length,
  skipped,
};
const outPath = path.join(REPO_ROOT, 'tools', 'screenshots', 'routes.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');

console.log(`✓ routes.json: ${routes.length} rutas GET (${skipped.length} líneas no reconocidas)`);
console.log(`  fuente: ${out.source}${sha ? ` @ ${sha}` : ''}`);

// Spot-checks contra hechos verificados del ERP
const has = (p) => routes.some((r) => r.path === p);
const checks = [
  ['/purchases/closed_purchase_orders', true, 'listado existe (index)'],
  ['/purchases/closed_purchase_orders/:id', true, 'show existe'],
  ['/purchases/closed_purchase_orders/:id/edit', false, 'edit NO existe (only index/show)'],
  ['/payroll/reports/payroll_run_pieceworks_costs', true, 'reporte real de nómina'],
  ['/payroll/work_contracts/:id', true, 'contrato de trabajo show'],
  ['/payroll/work_contracts/:work_contract_id/work_contract_terminations/new', true, 'terminación de contrato'],
  ['/production/production_orders/:id/start_production', true, 'iniciar orden de producción (member do)'],
  ['/accounting/entries/:id', true, 'transacción show'],
  ['/settings/tags', true, 'proyectos (tag_categories)'],
];
let fails = 0;
for (const [p, expected, why] of checks) {
  const got = has(p);
  const ok = got === expected;
  if (!ok) fails++;
  console.log(`  ${ok ? '✓' : '✗'} ${p} — esperado:${expected ? 'sí' : 'no'} → ${got ? 'sí' : 'no'} (${why})`);
}
if (skipped.length) {
  console.log(`\n  Primeras líneas no reconocidas (revisar si crecen):`);
  for (const s of skipped.slice(0, 10)) console.log(`    L${s.line}: ${s.text.slice(0, 90)}`);
}
if (fails) {
  console.error(`\n✗ ${fails} spot-check(s) fallaron — el parser necesita ajustes.`);
  process.exitCode = 1;
}
