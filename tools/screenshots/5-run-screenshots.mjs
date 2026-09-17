#!/usr/bin/env node
/**
 * 5-run-screenshots.mjs — Ejecuta manifest.json con Playwright y captura
 * static/img/<sección>/<slug>-<N>.png.
 *
 * Garantías (vs. la versión vieja):
 *   - Verifica que la URL final coincida con la pedida; si Zauru redirigió
 *     (permisos, registro inexistente) aborta SIN capturar → nunca más
 *     pantallas equivocadas guardadas.
 *   - resolveId resuelve ids reales del listado (recursivo, sirve para
 *     "/1/edit" y rutas anidadas) y falla si el listado está vacío.
 *   - Soporta actions (click/fill/select/waitFor/waitMs) antes de capturar.
 *   - Detecta flashes de error y páginas de error de Rails.
 *
 * Uso:
 *   node 5-run-screenshots.mjs [--docs slug1,slug2] [--headed] [--force] [--debug-dom]
 *
 *   --docs       Solo procesa los slugs indicados.
 *   --headed     Muestra el navegador (depurar).
 *   --force      Recaptura aunque el archivo ya exista.
 *   --debug-dom  Imprime la estructura de la primera página y sale.
 *
 * Los fallos van a failures.log (con "kind" de error) y NO detienen la corrida.
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT, envList } from './lib/env.mjs';
import { getAuthenticatedContext, baseUrl, isSignInUrl } from './lib/session.mjs';
import {
  DEFAULT_HIDE_SELECTORS,
  CaptureError,
  waitForAny,
  hideElements,
  findDangerFlash,
  findRailsErrorPage,
  resolveIdsInPath,
  runActions,
  pathnameMatches,
} from './lib/capture.mjs';

const args = process.argv.slice(2);
const headed = args.includes('--headed');
const force = args.includes('--force');
const debugDom = args.includes('--debug-dom');
const docsFilter = (() => {
  const i = args.indexOf('--docs');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

const manifestPath = path.join(TOOL_DIR, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('No existe manifest.json. Genera uno con 3-generate-manifest.mjs o edítalo a mano.');
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const format = manifest.imageFormat || 'png';
const quality = manifest.imageQuality || 80;
// Elementos superiores a ocultar (logo, notificaciones, usuario) conservando
// la barra de navegación de módulos visible en la captura
const hideSelectors = envList('ZAURU_HIDE_SELECTORS', DEFAULT_HIDE_SELECTORS);

let { browser, context, relogin } = await getAuthenticatedContext({ headless: !headed });
const failures = [];
const warnings = [];
let captured = 0;
let skipped = 0;

const docs = manifest.docs.filter((d) => !docsFilter || docsFilter.includes(d.slug));

// ── --debug-dom: imprime la estructura de la primera página y sale ──────────
if (debugDom) {
  const first = docs[0]?.shots.find((s) => s.zauruPath);
  if (!first) {
    console.error('No hay shots con zauruPath en el manifiesto para depurar.');
    process.exit(1);
  }
  const page = await context.newPage();
  await page.goto(baseUrl() + first.zauruPath, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  const rows = await page.evaluate(() => {
    const out = [];
    const describe = (el, depth) => {
      const r = el.getBoundingClientRect();
      const cls = String(el.className?.baseVal ?? el.className ?? '').replace(/\s+/g, ' ').trim().slice(0, 70);
      out.push(
        `${'  '.repeat(depth)}<${el.tagName.toLowerCase()}> id="${el.id}" class="${cls}"  ${Math.round(r.width)}x${Math.round(r.height)} @y=${Math.round(r.y + window.scrollY)}`
      );
    };
    out.push('— Hijos directos de <body> —');
    [...document.body.children].forEach((c) => describe(c, 0));
    out.push('');
    out.push('— Candidatos header/nav (para ZAURU_HIDE_SELECTORS) —');
    const seen = new Set();
    for (const sel of ['header', 'nav', '.header', '#header', '.nav', '#nav', '.navbar', '.menu', '#menu', '.topbar', '#topbar', '.top-bar', '#top-bar']) {
      document.querySelectorAll(sel).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        out.push(`selector "${sel}":`);
        describe(el, 1);
      });
    }
    return out;
  });
  console.log(rows.join('\n'));
  await browser.close();
  process.exit(0);
}

for (const doc of docs) {
  const outDir = path.join(REPO_ROOT, 'static', 'img', doc.section);
  fs.mkdirSync(outDir, { recursive: true });

  for (const shot of doc.shots) {
    // imageSlug: cuando varios .md comparten las mismas imágenes (repo
    // reorganizado), el nombre de archivo se define en el doc entry
    const fileBase = doc.imageSlug || doc.slug;
    const fileName = `${fileBase}-${shot.stepNumber}.${format}`;
    const outPath = path.join(outDir, fileName);
    const relOut = path.relative(REPO_ROOT, outPath);

    if (!force && fs.existsSync(outPath)) {
      console.log(`↷ ${relOut} ya existe (--force para recapturar)`);
      skipped++;
      continue;
    }

    const result = await runShot(shot, outPath, doc.slug);
    if (result.ok) {
      captured++;
      console.log(`✓ ${relOut}`);
    } else {
      const entry = { doc: doc.slug, shot: shot.stepNumber, url: result.url, error: result.error, kind: result.kind };
      (result.kind === 'warn' ? warnings : failures).push(entry);
      console.log(`✗ ${relOut} — ${result.error}`);
    }
  }
}

await browser.close();

// ── failures.log (una corrida reemplaza la anterior; incluye warnings) ──────
const logPath = path.join(TOOL_DIR, 'failures.log');
const lines = [
  ...failures.map((f) => JSON.stringify({ level: 'error', ...f })),
  ...warnings.map((w) => JSON.stringify({ level: 'warn', ...w })),
];
fs.writeFileSync(path.join(TOOL_DIR, 'failures.log'), lines.join('\n') + (lines.length ? '\n' : ''));

console.log(
  `\nListo: ${captured} capturadas, ${skipped} omitidas, ${failures.length} errores, ${warnings.length} advertencias.` +
    (lines.length ? ` Detalles en tools/screenshots/failures.log` : '')
);

const denied = failures.filter((f) => f.kind === 'access');
if (denied.length) {
  console.log('\n⛔ Accesos denegados (configura estos permisos y re-corre):');
  for (const f of denied) console.log(`   - ${f.doc} shot ${f.shot}: ${f.url}`);
}
if (failures.length) process.exitCode = 1;

// ── Lógica de un shot ───────────────────────────────────────────────────────
async function runShot(shot, outPath, docSlug) {
  if (!shot.zauruPath || !String(shot.zauruPath).trim()) {
    return { ok: false, url: '', kind: 'manifest', error: 'zauruPath vacío en el manifiesto — corre 3-generate-manifest o edítalo a mano' };
  }

  const page = await context.newPage();
  try {
    // 1) resuelve ids reales si hace falta (recursivo, navega listados)
    let target = shot.zauruPath;
    if (shot.resolveId) {
      target = await resolveIdsInPath(page, shot.zauruPath);
      if (target !== shot.zauruPath) logShot(`  · id resuelto: ${shot.zauruPath} → ${target}`);
    }

    // 2) navega a la página final
    let resp = await page.goto(baseUrl() + target, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // 3) sesión expirada a mitad de corrida → re-login y reintento único
    if (isSignInUrl(page.url())) {
      await page.close();
      console.log('… sesión expirada, reintentando login');
      ({ browser, context, relogin } = await relogin());
      return runShotWithPage(await context.newPage(), shot, target, outPath, docSlug);
    }
    return await shootOnPage(page, resp, shot, target, outPath, docSlug);
  } catch (err) {
    const kind = err instanceof CaptureError ? err.kind : 'navigate';
    return { ok: false, url: baseUrl() + shot.zauruPath, kind, error: String(err).split('\n')[0] };
  } finally {
    await page.close().catch(() => {});
  }
}

async function runShotWithPage(page, shot, target, outPath, docSlug) {
  try {
    const resp = await page.goto(baseUrl() + target, { waitUntil: 'domcontentloaded', timeout: 30000 });
    if (isSignInUrl(page.url())) {
      throw new CaptureError('navigate', 'tras re-login seguimos fuera de la app; no se tomó captura');
    }
    return await shootOnPage(page, resp, shot, target, outPath, docSlug);
  } catch (err) {
    const kind = err instanceof CaptureError ? err.kind : 'navigate';
    return { ok: false, url: baseUrl() + target, kind, error: String(err).split('\n')[0] };
  } finally {
    await page.close().catch(() => {});
  }
}

/** Checks + acciones + captura sobre la página ya en la URL final. */
async function shootOnPage(pg, resp, shot, target, outPath, docSlug) {
  if (!resp || resp.status() >= 400) {
    throw new CaptureError('http', `HTTP ${resp ? resp.status() : 'sin respuesta'} en ${target}`);
  }
  await pg.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

  const denied = await findDangerFlash(pg);
  if (denied) {
    throw new CaptureError(
      'access',
      `acceso denegado en ${target} (aterrizó en ${pg.url()}): "${denied}". Configura los permisos del usuario y re-corre.`
    );
  }
  const railsErr = await findRailsErrorPage(pg);
  if (railsErr) {
    throw new CaptureError('http', `página de error de Rails ("${railsErr}") en ${target}`);
  }

  // 4) VERIFICACIÓN DE URL: el pathname final debe ser el pedido
  const wanted = target.replace(/^https?:\/\/[^/]+/, '');
  const actualPathname = new URL(pg.url()).pathname;
  if (!pathnameMatches(actualPathname, wanted)) {
    throw new CaptureError(
      'url-mismatch',
      `aterrizó en ${actualPathname} en vez de ${wanted} (redirect de Zauru); no se guardó captura. ` +
        `Si el redirect es legítimo, cambia zauruPath a la ruta final o usa "expectRedirectTo".`
    );
  }

  // actions del shot (pestañas, filtros, modales)
  if (shot.actions?.length) {
    await runActions(pg, shot.actions, {
      onSoftFail: (msg) => {
        warnings.push({ doc: docSlug, shot: shot.stepNumber, url: target, warning: msg });
        console.log(`  ⚠ ${msg}`);
      },
    });
  }

  // Congela animaciones para capturas estables
  await pg.addStyleTag({ content: '*{animation:none!important;transition:none!important}' }).catch(() => {});

  const matched = await waitForAny(pg, shot.waitForSelector || []);
  if (!matched) {
    warnings.push({
      doc: docSlug,
      shot: shot.stepNumber,
      url: target,
      warning: `ningún waitForSelector coincidió (${(shot.waitForSelector || []).join(', ')}) — se capturó de todos modos, revísala`,
    });
  }

  await hideElements(pg, shot.hideSelectors || hideSelectors);
  await pg.waitForTimeout(500);

  const opts = { type: format };
  if (format === 'jpeg') opts.quality = quality;
  if (shot.fullPage) opts.fullPage = true;
  fs.writeFileSync(outPath, await pg.screenshot(opts));
  return { ok: true, url: target };
}

function logShot(msg) {
  console.log(`  · ${msg}`);
}
