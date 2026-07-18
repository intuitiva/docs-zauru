#!/usr/bin/env node
/**
 * run-screenshots.mjs — Ejecuta manifest.json: navega a cada zauruPath,
 * oculta las barras de encabezado y captura un viewport 16:9 (parte
 * superior de la página) en static/img/<sección>/<slug>-<N>.png
 *
 * Uso:
 *   node run-screenshots.mjs [--docs slug1,slug2] [--headed] [--force] [--debug-dom]
 *
 *   --docs       Solo procesa los slugs indicados.
 *   --headed     Muestra el navegador (útil para depurar selectores).
 *   --force      Recaptura aunque el archivo .png ya exista.
 *   --debug-dom  Imprime la estructura del primer doc y sale, para elegir
 *                los selectores de ZAURU_HIDE_SELECTORS.
 *
 * Los fallos (HTTP 4xx, selector no encontrado) se acumulan en failures.log
 * y NO detienen el resto de la corrida.
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT, envList } from './lib/env.mjs';
import { getAuthenticatedContext, baseUrl, isSignInUrl } from './lib/session.mjs';

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
  console.error('No existe manifest.json. Genera uno con generate-manifest.mjs o crea el manifiesto del piloto.');
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const format = manifest.imageFormat || 'png';
const quality = manifest.imageQuality || 80;
// Elementos superiores a ocultar (logo, notificaciones, usuario) conservando
// la barra de navegación de módulos visible en la captura
const hideSelectors = envList('ZAURU_HIDE_SELECTORS', [
  '#logo',
  '#communication_toolbar',
  '#user_toolbar',
]);

/** Espera al primer selector visible de la lista; devuelve cuál o null. */
async function waitForAny(page, selectors, totalTimeout = 15000) {
  const per = Math.max(2000, Math.floor(totalTimeout / selectors.length));
  for (const sel of selectors) {
    try {
      await page.waitForSelector(sel, { timeout: per, state: 'visible' });
      return sel;
    } catch {
      // prueba el siguiente candidato
    }
  }
  return null;
}

/** Oculta los elementos que coincidan con los selectores dados. */
async function hideElements(page, selectors) {
  if (!selectors.length) return;
  await page.evaluate((sels) => {
    for (const sel of sels) {
      document.querySelectorAll(sel).forEach((el) => {
        el.style.display = 'none';
      });
    }
  }, selectors);
}

/**
 * Detecta el flash de error de Zauru (p.danger .flash-alert-excerpt), p.ej.
 * "Acceso Restringido" cuando el usuario no tiene permisos y es redirigido.
 * Devuelve el texto del flash o null.
 */
async function findDangerFlash(page) {
  return page.evaluate(() => {
    const el = document.querySelector('p.danger .flash-alert-excerpt, .flash-alert-excerpt');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : null;
  });
}

/**
 * Para rutas de detalle "/recurso/<id>" con "resolveId": true:
 * visita el listado "/recurso" y toma el href del primer registro real,
 * evitando 404 por ids que no existen en el tenant. null si no resuelve.
 */
async function resolveDetailPath(page, zauruPath) {
  const m = zauruPath.match(/^(.*)\/\d+\/?$/);
  if (!m) return null;
  const listPath = m[1];
  try {
    await page.goto(baseUrl() + listPath, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    return await page.evaluate((base) => {
      const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`^${escaped}/\\d+$`);
      for (const a of document.querySelectorAll('a[href]')) {
        let pathname;
        try {
          pathname = new URL(a.href).pathname;
        } catch {
          continue;
        }
        if (re.test(pathname)) return pathname;
      }
      return null;
    }, listPath);
  } catch {
    return null;
  }
}

/** Captura directa en el formato del manifiesto (png o jpeg). */
async function saveShot(target, outPath, { fullPage = false } = {}) {
  const opts = { type: format };
  if (format === 'jpeg') opts.quality = quality;
  if (fullPage) opts.fullPage = true;
  const buffer = await target.screenshot(opts);
  fs.writeFileSync(outPath, buffer);
}

let { browser, context, relogin } = await getAuthenticatedContext({ headless: !headed });
const failures = [];
const warnings = [];
let captured = 0;
let skipped = 0;

const docs = manifest.docs.filter((d) => !docsFilter || docsFilter.includes(d.slug));

// ── --debug-dom: imprime la estructura de la primera página y sale ──────────
if (debugDom) {
  const first = docs[0]?.shots[0];
  if (!first) {
    console.error('No hay shots en el manifiesto para depurar.');
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
    const fileName = `${doc.slug}-${shot.stepNumber}.${format}`;
    const outPath = path.join(outDir, fileName);
    const relOut = path.relative(REPO_ROOT, outPath);

    if (!force && fs.existsSync(outPath)) {
      console.log(`↷ ${relOut} ya existe (--force para recapturar)`);
      skipped++;
      continue;
    }

    if (!shot.zauruPath || !String(shot.zauruPath).trim()) {
      failures.push({
        doc: doc.slug,
        shot: shot.stepNumber,
        url: '',
        error: 'zauruPath vacío en el manifiesto — revisa generate-manifest / nav.json',
      });
      console.log(`✗ ${relOut} — zauruPath vacío`);
      continue;
    }

    const page = await context.newPage();
    let url = baseUrl() + shot.zauruPath;
    try {
      // Vista de detalle con id hardcodeado → resuelve un id real del listado
      if (shot.resolveId) {
        const resolved = await resolveDetailPath(page, shot.zauruPath);
        if (resolved) {
          url = baseUrl() + resolved;
          console.log(`  · id resuelto: ${resolved}`);
        } else {
          warnings.push({ doc: doc.slug, shot: shot.stepNumber, url, warning: `resolveId no encontró registros en el listado; se intenta ${shot.zauruPath}` });
        }
      }

      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

      // Sesión expirada a mitad de la corrida → re-login y reintento único
      if (isSignInUrl(page.url())) {
        await page.close();
        console.log('… sesión expirada, reintentando login');
        ({ browser, context, relogin } = await relogin());
        const retry = await context.newPage();
        const r2 = await retry.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await shoot(retry, r2);
        await retry.close();
      } else {
        await shoot(page, resp);
        await page.close();
      }
    } catch (err) {
      failures.push({ doc: doc.slug, shot: shot.stepNumber, url, error: String(err) });
      console.log(`✗ ${relOut} — ${err}`);
      await page.close().catch(() => {});
    }

    async function shoot(pg, resp) {
      if (!resp || resp.status() >= 400) {
        throw new Error(`HTTP ${resp ? resp.status() : 'sin respuesta'} en ${shot.zauruPath}`);
      }
      await pg.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

      // Sin permisos: Zauru redirige y muestra "Acceso Restringido" → error, sin captura
      const denied = await findDangerFlash(pg);
      if (denied) {
        throw new Error(
          `Acceso denegado en ${shot.zauruPath} (aterrizó en ${pg.url()}): "${denied}". ` +
            `Configura los permisos del usuario y vuelve a correr — no se tomó captura.`
        );
      }
      // Congela animaciones para capturas estables
      await pg
        .addStyleTag({ content: '*{animation:none!important;transition:none!important}' })
        .catch(() => {});

      const matched = await waitForAny(pg, shot.waitForSelector || []);
      if (!matched) {
        warnings.push({
          doc: doc.slug,
          shot: shot.stepNumber,
          url,
          warning: `ningún waitForSelector coincidió (${(shot.waitForSelector || []).join(', ')}) — se capturó de todos modos, revísala`,
        });
      }

      // Oculta barras de encabezado (logo, usuario, notificaciones) y captura
      // solo el viewport 16:9; "fullPage": true en el shot fuerza página completa
      await hideElements(pg, shot.hideSelectors || hideSelectors);
      await pg.waitForTimeout(500);

      await saveShot(pg, outPath, { fullPage: !!shot.fullPage });
      captured++;
      console.log(`✓ ${relOut}`);
    }
  }
}

await browser.close();

const logPath = path.join(TOOL_DIR, 'failures.log');
const lines = [
  ...failures.map((f) => JSON.stringify({ level: 'error', ...f })),
  ...warnings.map((w) => JSON.stringify({ level: 'warn', ...w })),
];
fs.writeFileSync(logPath, lines.join('\n') + (lines.length ? '\n' : ''));

console.log(
  `\nListo: ${captured} capturadas, ${skipped} omitidas, ${failures.length} errores, ${warnings.length} advertencias.` +
    (lines.length ? ` Detalles en tools/screenshots/failures.log` : '')
);

// Resalta los accesos denegados: son los permisos a configurar antes del 2° run
const denied = failures.filter((f) => f.error.includes('Acceso denegado'));
if (denied.length) {
  console.log('\n⛔ Accesos denegados (configura estos permisos y re-corre):');
  for (const f of denied) console.log(`   - ${f.doc} shot ${f.shot}: ${f.url}`);
}
if (failures.length) process.exitCode = 1;
