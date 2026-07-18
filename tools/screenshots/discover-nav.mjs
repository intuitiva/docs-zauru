#!/usr/bin/env node
/**
 * discover-nav.mjs — Inicia sesión en Zauru y vuelca el menú de navegación
 * (sidebar + topnav) a nav.json: un mapa etiqueta → ruta que
 * generate-manifest.mjs usa para elegir URLs reales en vez de adivinarlas.
 *
 * Uso:
 *   node discover-nav.mjs [--headed]
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR } from './lib/env.mjs';
import { getAuthenticatedContext, baseUrl } from './lib/session.mjs';

const headed = process.argv.includes('--headed');

const { browser, context } = await getAuthenticatedContext({ headless: !headed });
const page = await context.newPage();

try {
  await page.goto(baseUrl(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

  // Recolecta todos los enlaces internos visibles u ocultos (los submenús
  // colapsados suelen estar en el DOM aunque no se vean).
  const links = await page.$$eval('a[href]', (anchors) =>
    anchors
      .map((a) => ({
        label: (a.innerText || a.getAttribute('aria-label') || a.title || '')
          .replace(/\s+/g, ' ')
          .trim(),
        href: a.getAttribute('href') || '',
      }))
      .filter(
        ({ label, href }) =>
          label &&
          href.startsWith('/') &&
          !href.startsWith('//') &&
          !href.startsWith('/users/') &&
          href.length > 1
      )
  );

  // Dedup por ruta, conservando la primera etiqueta
  const byPath = new Map();
  for (const { label, href } of links) {
    const clean = href.split(/[?#]/)[0];
    if (!byPath.has(clean)) byPath.set(clean, { label, path: clean });
  }

  const nav = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const outPath = path.join(TOOL_DIR, 'nav.json');
  fs.writeFileSync(outPath, JSON.stringify(nav, null, 2) + '\n');
  console.log(`✓ nav.json escrito con ${nav.length} rutas en ${outPath}`);
  console.log('  Revísalo: generate-manifest.mjs lo usará para elegir zauruPath.');
} finally {
  await browser.close();
}
