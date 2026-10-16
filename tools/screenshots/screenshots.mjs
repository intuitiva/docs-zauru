#!/usr/bin/env node
/** Capturar desde los enlaces del manual. No genera ni consume un manifest. */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT, envList, loadEnv } from './lib/env.mjs';
import { getAuthenticatedContext, baseUrl } from './lib/session.mjs';
import {
  DEFAULT_HIDE_SELECTORS, CaptureError,
} from './lib/capture.mjs';
import { captureOnPage } from './lib/capture-shot.mjs';
import { refToDisk, candidatePathFor } from './lib/images.mjs';
import { planSafeShot, decideRequest, installReadOnlyGate, baculoControllersDir, loadMutatingNamesFromControllers } from './lib/safety.mjs';
import { loadSources, selectTargets, resolveDocFilters } from './lib/sources.mjs';
import { auditSources, renderGallery } from './lib/inventory.mjs';
import { readResults, mergeResults, writeResults, hashBuffer, shouldCapture, captureFingerprint, promotionProblem } from './lib/results.mjs';
import { writeMissingReport } from './lib/report.mjs';

const args = process.argv.slice(2);
const command = args.shift();
if (!command || ['--help', '-h', 'help'].includes(command)) {
  console.log(`Uso: npm run screenshots -- <audit|capture|promote|report> [opciones]
  --docs docs/compras/cargos-pagados.md  Documento o slugs separados por coma
  --force                             Recapturar también candidatas vigentes
  --retry-failed                      Reintentar fallos y bloqueos
  --output-dir /tmp/capturas           Carpeta de candidatas
  --headed                            Mostrar Chromium
  --out /tmp/faltantes.xlsx            Destino del reporte Excel

capture valida los enlaces automáticamente. promote requiere visualReview: accepted en results.json.`);
  process.exit(0);
}
if (!['audit', 'capture', 'promote', 'report'].includes(command)) throw new Error(`comando desconocido: ${command}`);
function flagValue(name) {
  const i = args.indexOf(name);
  if (i === -1) return null;
  if (!args[i + 1] || args[i + 1].startsWith('--')) throw new Error(`falta un valor para ${name}`);
  return args[i + 1];
}
const valueFlags = new Set(['--docs', '--output-dir', '--out']);
const booleanFlags = new Set(['--force', '--retry-failed', '--headed']);
for (let i = 0; i < args.length; i++) {
  if (valueFlags.has(args[i])) { flagValue(args[i]); i++; }
  else if (!booleanFlags.has(args[i])) throw new Error(`opción desconocida: ${args[i]}`);
}
loadEnv();
const headed = args.includes('--headed');
const force = args.includes('--force');
const retryFailed = args.includes('--retry-failed');
const filters = flagValue('--docs')?.split(',').map((s) => s.trim()).filter(Boolean);
if (filters && !filters.length) throw new Error('--docs necesita al menos un documento');
const hideSelectors = envList('ZAURU_HIDE_SELECTORS', DEFAULT_HIDE_SELECTORS);
const quality = 80;
const scale = Number(process.env.SCREENSHOT_SCALE || 2);
if (!Number.isFinite(scale) || scale <= 0 || scale > 4) throw new Error('SCREENSHOT_SCALE debe ser mayor que 0 y máximo 4');
const mutatingNames = loadMutatingNamesFromControllers(baculoControllersDir(REPO_ROOT));
const settings = { baseUrl: baseUrl(), viewport: { width: 1600, height: 900 }, scale, hideSelectors, quality, mutatingNames: [...mutatingNames].sort() };
const sources = loadSources(REPO_ROOT, baseUrl());
const targets = selectTargets(sources, filters);
const selectedDocs = new Set(resolveDocFilters(sources, filters));
const resultsPath = path.join(TOOL_DIR, 'results.json');
const previous = readResults(resultsPath);
const report = auditSources(REPO_ROOT, sources);
const reviewDir = path.join(TOOL_DIR, 'review');
fs.mkdirSync(reviewDir, { recursive: true });
fs.writeFileSync(path.join(reviewDir, 'audit-report.json'), JSON.stringify(report, null, 2) + '\n');
function gallery(results) {
  fs.writeFileSync(path.join(reviewDir, 'gallery.html'), renderGallery({ ...sources, targets }, results, reviewDir, REPO_ROOT));
}
const scopedIssues = sources.issues.filter((i) => selectedDocs.has(i.docPath));
const errors = scopedIssues.filter((i) => i.severity === 'error');
console.log(`Inventario: ${sources.rows.length} referencias, ${sources.targets.length} destinos válidos, ${report.missing.length} referencias sin archivo.`);
for (const issue of scopedIssues) console.log(`${issue.severity === 'error' ? '✗' : '↷'} ${issue.docPath}:${issue.line} — ${issue.message}${issue.imageRef ? ' (' + issue.imageRef + ')' : ''}`);
console.log('Auditoría: tools/screenshots/review/audit-report.json');

if (command === 'audit') {
  gallery(previous);
  process.exit(errors.length ? 1 : 0);
}
if (command === 'report') {
  const out = path.resolve(flagValue('--out') || path.join(TOOL_DIR, 'MISSING-IMAGES.xlsx'));
  await writeMissingReport({ repoRoot: REPO_ROOT, sources: { ...sources, rows: sources.rows.filter((r) => selectedDocs.has(r.docPath)), targets, issues: scopedIssues }, report, results: previous, settings, out });
  console.log(`Reporte: ${out}`);
  process.exit(0);
}
if (command === 'promote') {
  // Usar TODAS las claves seleccionadas, incluso las que ahora tienen conflicto.
  const selectedRefs = filters ? new Set([...sources.rows.filter((r) => selectedDocs.has(r.docPath)).map((r) => r.imageRef), ...targets.map((t) => t.imageRef)]) : null;
  const current = new Map(targets.map((t) => [t.imageRef, t]));
  let copied = 0;
  let refused = 0;
  for (const [imageRef, row] of Object.entries(previous.images)) {
    if (selectedRefs && !selectedRefs.has(imageRef)) continue;
    if (row.visualReview !== 'accepted' || !['candidate', 'verified'].includes(row.status)) continue;
    const problem = promotionProblem(row, current.get(imageRef), settings);
    if (problem) { console.log(`✗ ${imageRef} — ${problem}`); refused++; continue; }
    const dest = refToDisk(REPO_ROOT, imageRef);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(row.candidatePath, dest);
    row.status = 'verified';
    row.promotedAt = new Date().toISOString();
    copied++;
    console.log(`✓ ${imageRef}`);
  }
  writeResults(resultsPath, previous);
  gallery(previous);
  console.log(`Incorporadas ${copied} capturas al manual. Rechazadas: ${refused}.`);
  process.exit(refused ? 1 : 0);
}

const outputDir = path.resolve(flagValue('--output-dir') || path.join(TOOL_DIR, 'runs', new Date().toISOString().replace(/[:.]/g, '-')));
const candidatePaths = new Map(targets.map((shot) => [shot.imageRef, candidatePathFor(REPO_ROOT, outputDir, shot.imageRef)]));
const updates = {};
const gateState = { blockedDocument: null, blockedOther: [] };
let blocked = 0;
let skipped = 0;
const pending = [];
for (const shot of targets) {
  const prev = previous.images[shot.imageRef];
  const fileExists = fs.existsSync(refToDisk(REPO_ROOT, shot.imageRef));
  if (!shouldCapture({ force, retryFailed, fileExists, previous: prev, fingerprint: captureFingerprint(shot, settings) })) { skipped++; continue; }
  if (shot.captureMode === 'blocked') {
    updates[shot.imageRef] = record(shot, 'blocked', { cause: shot.blockedCause }).row;
    blocked++;
  } else pending.push(shot);
}
if (!pending.length) {
  const results = mergeResults(previous, updates);
  writeResults(resultsPath, results);
  gallery(results);
  console.log(`Nada que capturar. Omitidas: ${skipped}. Bloqueadas: ${blocked}.`);
  process.exit(errors.length || blocked ? 1 : 0);
}
let browser;
let context;
let relogin;
let sessionFailure = null;
try {
  ({ browser, context, relogin } = await getAuthenticatedContext({ headless: !headed, onContext: (ctx) => installReadOnlyGate(ctx, { mutatingNames, state: gateState }) }));
} catch (err) {
  for (const shot of pending) updates[shot.imageRef] = record(shot, 'blocked', { cause: `autenticación: ${String(err.message || err).split('\n')[0]}` }).row;
  const results = mergeResults(previous, updates);
  writeResults(resultsPath, results);
  gallery(results);
  console.error(`No se pudo iniciar la captura: ${String(err.message || err).split('\n')[0]}`);
  process.exit(1);
}
let captured = 0;
let failed = 0;
try {
  for (const shot of pending) {
    // Crear el destino solo cuando haya sesión y trabajo real.
    const candidatePath = candidatePaths.get(shot.imageRef);
    fs.mkdirSync(path.dirname(candidatePath), { recursive: true });
    const result = await runShot(shot, candidatePath);
    updates[shot.imageRef] = result.row;
    if (result.row.status === 'candidate') captured++;
    else if (result.row.status === 'blocked') blocked++;
    else failed++;
    console.log(`${result.row.status === 'candidate' ? '✓' : '✗'} ${shot.imageRef}${result.row.cause ? ' — ' + result.row.cause : ''}`);
    // Persistir cada captura: una interrupción no pierde el lote ya terminado.
    writeResults(resultsPath, mergeResults(previous, updates));
  }
} finally {
  await browser?.close();
  const results = mergeResults(previous, updates);
  writeResults(resultsPath, results);
  gallery(results);
}
console.log(`Candidatas: ${captured}. Omitidas: ${skipped}. Fallos: ${failed}. Bloqueadas: ${blocked}.`);
console.log(`Revisar: tools/screenshots/review/gallery.html. Candidatas: ${outputDir}`);
if (failed || blocked || errors.length) process.exitCode = 1;

function record(shot, status, extra) {
  return { row: {
    status,
    visualReview: status === 'candidate' ? 'pending' : null,
    cause: extra.cause || null,
    hash: extra.hash || null,
    candidatePath: extra.candidatePath || null,
    fingerprint: captureFingerprint(shot, settings),
    config: { docPath: shot.docPath, line: shot.line, imageRef: shot.imageRef, sourceUrl: shot.sourceUrl, targetUrl: shot.targetUrl, resolvedPath: extra.resolvedPath || null, captureMode: extra.captureMode || shot.captureMode || null, actions: extra.actions || shot.actions || [], focusSelector: extra.focusSelector || shot.focusSelector || null },
    updatedAt: new Date().toISOString(),
  } };
}

async function runShot(shot, candidatePath) {
  if (sessionFailure) return record(shot, 'blocked', { cause: sessionFailure });
  const plan = planSafeShot(shot, mutatingNames);
  if (plan.captureMode === 'blocked') {
    return record(shot, 'blocked', { cause: plan.blockedCause, captureMode: 'blocked' });
  }
  const pre = decideRequest({ method: 'GET', url: baseUrl() + plan.navigateTo, mutatingNames });
  if (!pre.allow) {
    return record(shot, 'blocked', {
      cause: `no se solicitó ${plan.navigateTo} (${pre.reason})`,
      captureMode: 'preview',
    });
  }

  let attempt = 0;
  let lastError = null;
  while (attempt < 2) {
    let page;
    try {
      page = await context.newPage();
      const captured = await captureOnPage(page, shot, plan, { mutatingNames, gateState, hideSelectors, quality });
      fs.writeFileSync(candidatePath, captured.buffer);
      return record(shot, 'candidate', { ...captured, hash: hashBuffer(captured.buffer), candidatePath });
    } catch (err) {
      lastError = err;
      const kind = err instanceof CaptureError ? err.kind : 'navigate';
      if (kind === 'session' && attempt === 0) {
        attempt++;
        console.log('… sesión vencida; se reautentica una vez y se reinicia la captura');
        const previousContext = context;
        try {
          ({ browser, context, relogin } = await relogin());
        } catch (authError) {
          sessionFailure = `autenticación: ${String(authError.message || authError).split('\n')[0]}`;
          return record(shot, 'blocked', { cause: sessionFailure });
        } finally {
          await previousContext.close().catch(() => {});
        }
        continue;
      }
      const status = ['access', 'no-id', 'http', 'blocked'].includes(kind) ? 'blocked' : 'failed';
      return record(shot, status, {
        cause: `${kind}: ${String(err.message || err).split('\n')[0]}`,
        captureMode: plan.captureMode,
        focusSelector: plan.focusSelector,
        actions: plan.actions,
        expectPath: plan.expectPath,
      });
    } finally {
      await page?.close().catch(() => {});
    }
  }
  return record(shot, 'failed', { cause: String(lastError?.message || lastError) });
}
