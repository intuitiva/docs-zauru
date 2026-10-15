#!/usr/bin/env node
/**
 * 5-run-screenshots.mjs — Consulta Zauru y deja capturas candidatas.
 *
 * No escribe en static/img hasta --promote, y solo de imágenes aceptadas
 * en la revisión visual. No navega a rutas que modifican registros.
 *
 * Uso:
 *   node 5-run-screenshots.mjs --audit
 *   node 5-run-screenshots.mjs [--docs slug1,slug2] [--output-dir dir]
 *        [--retry-failed] [--force] [--headed] [--debug-dom]
 *   node 5-run-screenshots.mjs --promote
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT, envList } from './lib/env.mjs';
import { getAuthenticatedContext, baseUrl, isSignInUrl } from './lib/session.mjs';
import {
  DEFAULT_HIDE_SELECTORS,
  CaptureError,
  hideElements,
  findDangerFlash,
  findRailsErrorPage,
  resolveIdsInPath,
  runActions,
  pathnameMatches,
  requireAnySelector,
  assertInFrame,
  assertPageHasContent,
} from './lib/capture.mjs';
import { readManifest, readRoutes, validateManifest } from './lib/manifest.mjs';
import { shotImageRef, refToDisk, extensionOf, playwrightType } from './lib/images.mjs';
import {
  planSafeShot,
  decideRequest,
  installReadOnlyGate,
  baculoControllersDir,
  loadMutatingNamesFromControllers,
} from './lib/safety.mjs';
import { loadInventoryFromDisk, renderGallery } from './lib/inventory.mjs';
import { readResults, mergeResults, writeResults, hashBuffer, shouldCapture } from './lib/results.mjs';

const args = process.argv.slice(2);
const headed = args.includes('--headed');
const force = args.includes('--force');
const debugDom = args.includes('--debug-dom');
const audit = args.includes('--audit');
const promote = args.includes('--promote');
const retryFailed = args.includes('--retry-failed');

function flagValue(name) {
  const i = args.indexOf(name);
  if (i === -1 || !args[i + 1] || args[i + 1].startsWith('--')) return null;
  return args[i + 1];
}

const docsFilter = flagValue('--docs')?.split(',').map((s) => s.trim()).filter(Boolean) || null;
const mutatingNames = loadMutatingNamesFromControllers(baculoControllersDir(REPO_ROOT));
const resultsPath = path.join(TOOL_DIR, 'results.json');

const manifest = readManifest();
const format = manifest.imageFormat || 'png';
const quality = manifest.imageQuality || 80;
const hideSelectors = envList('ZAURU_HIDE_SELECTORS', DEFAULT_HIDE_SELECTORS);

if (audit) {
  const inventory = loadInventoryFromDisk({
    repoRoot: REPO_ROOT,
    docsDir: path.join(REPO_ROOT, 'docs'),
    manifest,
    format,
  });
  const validation = validateManifest(manifest, { routes: readRoutes(), mutatingNames });
  const report = {
    generatedAt: new Date().toISOString(),
    references: inventory.references.length,
    missing: inventory.missing.map((r) => ({ docPath: r.docPath, image: r.imgRef, numbered: r.numbered, indexDoc: r.indexDoc })),
    unmapped: inventory.unmapped.map((r) => ({ docPath: r.docPath, image: r.imgRef })),
    moved: inventory.moved,
    duplicateGroups: inventory.duplicateFiles.length,
    duplicates: inventory.duplicateFiles,
    sharedDestinations: inventory.sharedDestinations,
    noImageDocs: inventory.noImageDocs.length,
    validation: { errors: validation.errors, warnings: validation.warnings },
  };
  const reviewDir = path.join(TOOL_DIR, 'review');
  fs.mkdirSync(reviewDir, { recursive: true });
  fs.writeFileSync(path.join(reviewDir, 'audit-report.json'), JSON.stringify(report, null, 2) + '\n');
  fs.writeFileSync(path.join(reviewDir, 'gallery.html'), renderGallery(inventory));
  console.log(`Referencias: ${report.references}`);
  console.log(`Sin archivo: ${report.missing.length}`);
  console.log(`Fuera del manifiesto: ${report.unmapped.length}`);
  console.log(`Documentos movidos: ${report.moved.length}`);
  console.log(`Grupos de archivos idénticos: ${report.duplicateGroups}`);
  console.log(`Destinos compartidos incompatibles: ${report.sharedDestinations.length}`);
  console.log(`Documentos sin imágenes (no se les añade ninguna): ${report.noImageDocs}`);
  console.log(`Validador: ${validation.errors.length} error(es), ${validation.warnings.length} advertencia(s)`);
  console.log(`Informe: tools/screenshots/review/audit-report.json`);
  console.log(`Galería: tools/screenshots/review/gallery.html`);
  process.exit(validation.errors.length ? 1 : 0);
}

if (promote) {
  const data = readResults(resultsPath);
  let copied = 0;
  for (const [imageRef, row] of Object.entries(data.images)) {
    if (row.visualReview !== 'accepted' || (row.status !== 'candidate' && row.status !== 'verified')) continue;
    if (!row.candidatePath || !fs.existsSync(row.candidatePath)) {
      console.log(`✗ ${imageRef} — aceptada pero falta el archivo candidato`);
      continue;
    }
    const dest = refToDisk(REPO_ROOT, imageRef);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(row.candidatePath, dest);
    row.status = 'verified';
    row.promotedAt = new Date().toISOString();
    row.hash = hashBuffer(fs.readFileSync(dest));
    copied++;
    console.log(`✓ ${imageRef}`);
  }
  writeResults(resultsPath, data);
  console.log(`\nIncorporadas ${copied} capturas al manual.`);
  process.exit(0);
}

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputDir = path.resolve(flagValue('--output-dir') || path.join(TOOL_DIR, 'runs', stamp));
fs.mkdirSync(outputDir, { recursive: true });

const previous = readResults(resultsPath);
const updates = {};
const gateState = { blockedDocument: null, blockedOther: [] };
const docs = manifest.docs.filter((d) => !docsFilter || docsFilter.includes(d.slug));
let blocked = 0;
let skipped = 0;

for (const doc of docs) {
  for (const shot of doc.shots) {
    if (shot.captureMode !== 'blocked') continue;
    const imageRef = shotImageRef(doc, shot, format);
    const staticPath = refToDisk(REPO_ROOT, imageRef);
    const prev = previous.images[imageRef];
    if (!shouldCapture({ force, retryFailed, fileExists: fs.existsSync(staticPath), previous: prev })) {
      skipped++;
      continue;
    }
    updates[imageRef] = {
      status: 'blocked',
      visualReview: null,
      cause: shot.blockedCause,
      hash: null,
      candidatePath: null,
      config: {
        docPath: doc.docPath,
        slug: doc.slug,
        section: doc.section,
        stepNumber: shot.stepNumber,
        imageRef,
        zauruPath: shot.zauruPath,
        captureMode: 'blocked',
      },
      updatedAt: new Date().toISOString(),
    };
    blocked++;
    console.log(`⛔ ${imageRef} — ${shot.blockedCause}`);
  }
}

let browser;
let context;
let relogin;
try {
  ({ browser, context, relogin } = await getAuthenticatedContext({
    headless: !headed,
    onContext: (ctx) => installReadOnlyGate(ctx, { mutatingNames, state: gateState }),
  }));
} catch (err) {
  const cause = String(err.message || err).split('\n')[0];
  for (const doc of docs) {
    for (const shot of doc.shots) {
      if (shot.captureMode === 'blocked') continue;
      const imageRef = shotImageRef(doc, shot, format);
      const staticPath = refToDisk(REPO_ROOT, imageRef);
      const prev = previous.images[imageRef];
      if (!shouldCapture({ force, retryFailed, fileExists: fs.existsSync(staticPath), previous: prev }) && !force) continue;
      updates[imageRef] = {
        status: 'blocked',
        visualReview: null,
        cause: `autenticación: ${cause}`,
        hash: null,
        candidatePath: null,
        config: {
          docPath: doc.docPath,
          slug: doc.slug,
          section: doc.section,
          stepNumber: shot.stepNumber,
          imageRef,
          zauruPath: shot.zauruPath,
        },
        updatedAt: new Date().toISOString(),
      };
      console.log(`⛔ ${imageRef} — autenticación`);
    }
  }
  writeResults(resultsPath, mergeResults(previous, updates));
  console.log(`\nNo se consultó Zauru. ${Object.keys(updates).length} imagen(es) bloqueadas.`);
  process.exit(1);
}

if (debugDom) {
  const first = docs[0]?.shots.find((s) => s.zauruPath && s.captureMode !== 'blocked');
  if (!first) {
    console.error('No hay shots de consulta para depurar.');
    process.exit(1);
  }
  const page = await context.newPage();
  const plan = planSafeShot(first, mutatingNames);
  await page.goto(baseUrl() + plan.navigateTo, { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log(page.url());
  await browser.close();
  process.exit(0);
}

let captured = 0;
let failed = 0;

for (const doc of docs) {
  for (const shot of doc.shots) {
    if (shot.captureMode === 'blocked') continue;
    const imageRef = shotImageRef(doc, shot, format);
    const staticPath = refToDisk(REPO_ROOT, imageRef);
    const prev = previous.images[imageRef];
    if (!shouldCapture({ force, retryFailed, fileExists: fs.existsSync(staticPath), previous: prev })) {
      skipped++;
      continue;
    }
    const candidatePath = path.join(outputDir, imageRef.replace(/^\//, ''));
    fs.mkdirSync(path.dirname(candidatePath), { recursive: true });
    const result = await runShot(doc, shot, imageRef, candidatePath);
    updates[imageRef] = result.row;
    if (result.row.status === 'candidate') {
      captured++;
      console.log(`✓ ${imageRef}`);
    } else if (result.row.status === 'blocked') {
      blocked++;
      console.log(`⛔ ${imageRef} — ${result.row.cause}`);
    } else {
      failed++;
      console.log(`✗ ${imageRef} — ${result.row.cause}`);
    }
  }
}

await browser.close();
const merged = mergeResults(previous, updates);
writeResults(resultsPath, merged);
console.log(
  `\nCandidatas: ${captured}. Omitidas: ${skipped}. Fallos: ${failed}. Bloqueadas: ${blocked}.`
);
console.log(`Carpeta: ${path.relative(REPO_ROOT, outputDir)}`);
console.log('Las candidatas no reemplazan el manual hasta la revisión visual y --promote.');
if (failed) process.exitCode = 1;

function record(imageRef, shot, doc, status, extra) {
  return {
    row: {
      status,
      visualReview: status === 'candidate' ? 'pending' : extra.visualReview || null,
      cause: extra.cause || null,
      hash: extra.hash || null,
      candidatePath: extra.candidatePath || null,
      config: {
        docPath: doc.docPath,
        slug: doc.slug,
        section: doc.section,
        stepNumber: shot.stepNumber,
        imageRef,
        zauruPath: shot.zauruPath,
        resolvedPath: extra.resolvedPath || null,
        actions: extra.actions || shot.actions || [],
        focusSelector: extra.focusSelector || shot.focusSelector || null,
        captureMode: extra.captureMode || shot.captureMode || null,
        expectPath: extra.expectPath || shot.expectPath || null,
        listPath: shot.listPath || null,
        recordLink: shot.recordLink || null,
      },
      updatedAt: new Date().toISOString(),
    },
  };
}

async function runShot(doc, shot, imageRef, candidatePath) {
  const plan = planSafeShot(shot, mutatingNames);
  if (plan.captureMode === 'blocked') {
    return record(imageRef, shot, doc, 'blocked', { cause: plan.blockedCause, captureMode: 'blocked' });
  }
  const pre = decideRequest({ method: 'GET', url: baseUrl() + plan.navigateTo, mutatingNames });
  if (!pre.allow) {
    return record(imageRef, shot, doc, 'blocked', {
      cause: `no se solicitó ${plan.navigateTo} (${pre.reason})`,
      captureMode: 'preview',
    });
  }

  let attempt = 0;
  let lastError = null;
  while (attempt < 2) {
    const page = await context.newPage();
    try {
      const shotResult = await captureOnPage(page, doc, shot, plan, imageRef, candidatePath);
      return shotResult;
    } catch (err) {
      lastError = err;
      const kind = err instanceof CaptureError ? err.kind : 'navigate';
      if (kind === 'session' && attempt === 0) {
        attempt++;
        console.log('… sesión vencida; se reautentica una vez y se reinicia la captura');
        const previousContext = context;
        ({ browser, context, relogin } = await relogin());
        await previousContext.close().catch(() => {});
        continue;
      }
      const status = ['access', 'no-id', 'http', 'blocked'].includes(kind) ? 'blocked' : 'failed';
      return record(imageRef, shot, doc, status, {
        cause: `${kind}: ${String(err.message || err).split('\n')[0]}`,
        captureMode: plan.captureMode,
        focusSelector: plan.focusSelector,
        actions: plan.actions,
        expectPath: plan.expectPath,
      });
    } finally {
      await page.close().catch(() => {});
    }
  }
  return record(imageRef, shot, doc, 'failed', { cause: String(lastError?.message || lastError) });
}

async function captureOnPage(page, doc, shot, plan, imageRef, candidatePath) {
  gateState.blockedDocument = null;
  let target = plan.navigateTo;
  if (plan.resolveId) {
    target = await resolveIdsInPath(page, plan.navigateTo, {
      listPath: plan.listPath,
      recordLink: plan.recordLink,
    });
  }
  const gate = decideRequest({ method: 'GET', url: baseUrl() + target, mutatingNames });
  if (!gate.allow) {
    throw new CaptureError('blocked', `no se solicitó ${target} (${gate.reason})`);
  }

  const response = await page.goto(baseUrl() + target, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (gateState.blockedDocument) {
    throw new CaptureError('blocked', `la navegación a ${target} fue abortada antes de solicitarla (${gateState.blockedDocument.reason})`);
  }
  if (isSignInUrl(page.url())) throw new CaptureError('session', 'sesión vencida');
  await assertHealthy(page, response, target);

  if (plan.actions?.length) await runActions(page, plan.actions);
  if (gateState.blockedDocument) {
    throw new CaptureError('blocked', `una redirección de escritura fue abortada (${gateState.blockedDocument.url})`);
  }
  if (isSignInUrl(page.url())) throw new CaptureError('session', 'sesión vencida tras una acción');

  const wanted = plan.expectPath || target;
  const actual = new URL(page.url()).pathname;
  if (!pathnameMatches(actual, wanted)) {
    throw new CaptureError('url-mismatch', `aterrizó en ${actual} en vez de ${wanted}`);
  }
  await assertHealthy(page, null, actual);

  await requireAnySelector(page, shot.waitForSelector || []);
  if (plan.focusSelector) await assertInFrame(page, plan.focusSelector);
  await hideElements(page, shot.hideSelectors || hideSelectors);

  if (!pathnameMatches(new URL(page.url()).pathname, wanted)) {
    throw new CaptureError('url-mismatch', 'la URL cambió al ocultar las barras');
  }
  await assertHealthy(page, null, actual);
  await requireAnySelector(page, shot.waitForSelector || []);
  if (plan.focusSelector) await assertInFrame(page, plan.focusSelector);
  await assertPageHasContent(page);

  const ext = extensionOf(imageRef, format);
  const type = playwrightType(ext);
  const opts = { type };
  if (type === 'jpeg') opts.quality = quality;
  if (shot.fullPage) opts.fullPage = true;
  const buffer = await page.screenshot(opts);
  fs.writeFileSync(candidatePath, buffer);
  return record(imageRef, shot, doc, 'candidate', {
    hash: hashBuffer(buffer),
    candidatePath,
    resolvedPath: target,
    captureMode: plan.captureMode,
    focusSelector: plan.focusSelector,
    actions: plan.actions,
    expectPath: plan.expectPath || null,
    visualReview: 'pending',
  });
}

async function assertHealthy(page, response, where) {
  if (response && response.status() >= 400) {
    throw new CaptureError('http', `HTTP ${response.status()} en ${where}`);
  }
  const flash = await findDangerFlash(page);
  if (flash) throw new CaptureError('access', `acceso denegado en ${where}: "${flash}"`);
  const rails = await findRailsErrorPage(page);
  if (rails) throw new CaptureError('http', `página de error de Rails ("${rails}") en ${where}`);
}
