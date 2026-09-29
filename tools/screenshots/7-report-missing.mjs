#!/usr/bin/env node
/**
 * report-missing.mjs — Genera un Excel (MISSING-IMAGES.xlsx) con todos los
 * screenshots faltantes (refs rotas en los .md cuyos archivos no existen en
 * static/img/), una fila por shot, listo para triaje humano.
 *
 * Columnas:
 *   1. URL del manual          — https://docs.zauru.com/<ruta>#<ancla>
 *   2. URL que playwright intentó — de failures.log o del manifiesto
 *   3. URL correcta             — la llena el humano
 *   4. Screenshot completo      — el humano llena true/false
 *   5. Imagen (referencia)      — nombre del archivo esperado (no se edita)
 *
 * Uso:
 *   node report-missing.mjs
 *   node report-missing.mjs --out /tmp/otro.xlsx
 *
 * No hace llamadas LLM ni red; solo analiza docs/, manifest.json y
 * failures.log. La URL base del manual y de Zauru salen de docusaurus.config.js
 * y manifest.json respectivamente.
 */
import fs from 'node:fs';
import path from 'node:path';
import ExcelJS from 'exceljs';
import GitHubSlugger from 'github-slugger';
import { TOOL_DIR, REPO_ROOT } from './lib/env.mjs';
import { findBrokenRefDocs, parseImageRefs } from './lib/gaps.mjs';

const args = process.argv.slice(2);
const outArg = args.indexOf('--out');
const outPath = outArg !== -1 && args[outArg + 1]
  ? path.resolve(args[outArg + 1])
  : path.join(TOOL_DIR, 'MISSING-IMAGES.xlsx');

const docsDir = path.join(REPO_ROOT, 'docs');
const manifestPath = path.join(TOOL_DIR, 'manifest.json');
const failuresPath = path.join(TOOL_DIR, 'failures.log');

// ── URL base del manual (docusaurus.config.js) ───────────────────────────
function readManualBaseUrl() {
  const cfgPath = path.join(REPO_ROOT, 'docusaurus.config.js');
  const src = fs.readFileSync(cfgPath, 'utf8');
  const urlM = src.match(/url:\s*['"]([^'"]+)['"]/);
  const baseM = src.match(/baseUrl:\s*['"]([^'"]+)['"]/);
  const url = urlM ? urlM[1].replace(/\/$/, '') : 'https://docs.zauru.com';
  const base = baseM ? baseM[1].replace(/^\//, '').replace(/\/$/, '') : '';
  return base ? `${url}/${base}` : url;
}
const MANUAL_BASE = readManualBaseUrl();

// ── Carga manifest.json: (slug, stepNumber) → shot ───────────────────────
const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  : { docs: [] };
const manifestBySlug = new Map();
for (const d of manifest.docs || []) {
  for (const s of d.shots || []) {
    manifestBySlug.set(`${d.slug}|${s.stepNumber}`, { doc: d, shot: s });
  }
}
const ZAURU_BASE = manifest.zauruBaseUrl || 'https://zauru.herokuapp.com';

// ── Carga failures.log: (doc, shot) → entry (error gana sobre warn) ──────
const FAIL_SEVERITY = { error: 2, warn: 1 };
const failures = new Map();
if (fs.existsSync(failuresPath)) {
  for (const line of fs.readFileSync(failuresPath, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t) continue;
    try {
      const obj = JSON.parse(t);
      const key = `${obj.doc}|${obj.shot}`;
      const prev = failures.get(key);
      if (!prev || (FAIL_SEVERITY[obj.level] || 0) > (FAIL_SEVERITY[prev.level] || 0)) {
        failures.set(key, obj);
      }
    } catch {
      /* línea corrupta, ignorar */
    }
  }
}

// ── Ruta del manual desde docPath ────────────────────────────────────────
// docs/<section>/<slug>.md → <section>/<slug>  (sin slug: frontmatter —
// verificado que ningún doc lo usa; si apareciera, habría que ajustar).
function manualRoute(docPath) {
  return docPath.replace(/^docs\//, '').replace(/\.md$/, '');
}

// ── Anclas de un doc: array de { lineIndex, slug } en orden de aparición ─
function buildHeadingSlugs(content) {
  const slugger = new GitHubSlugger();
  const lines = content.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(#{2,6})\s+(.+)$/);
    if (m) {
      // Limpia markdown inline (negritas/código) antes de slugificar
      const clean = m[2].replace(/[*_`]/g, '').trim();
      out.push({ lineIndex: i, slug: slugger.slug(clean) });
    }
  }
  return out;
}

/** Ancla del heading más reciente antes de imgLine (o '' si no hay). */
function anchorForImage(headingSlugs, imgLine) {
  let anchor = '';
  for (const h of headingSlugs) {
    if (h.lineIndex < imgLine) anchor = h.slug;
    else break;
  }
  return anchor;
}

// ── Recolecta filas ──────────────────────────────────────────────────────
const broken = findBrokenRefDocs(docsDir, REPO_ROOT);
const rows = [];

for (const doc of broken) {
  const route = manualRoute(doc.docPath);
  const headingSlugs = buildHeadingSlugs(doc.content);
  const lines = doc.content.split('\n');

  for (const ref of doc.brokenRefs) {
    const imgLine = doc.content.slice(0, ref.index).split('\n').length - 1;
    const anchor = anchorForImage(headingSlugs, imgLine);
    const manualUrl = anchor
      ? `${MANUAL_BASE}/${route}#${anchor}`
      : `${MANUAL_BASE}/${route}`;

    const key = `${doc.slug}|${ref.stepNumber}`;
    const mEntry = manifestBySlug.get(key);
    const zauruPath = mEntry?.shot?.zauruPath || '';
    const failure = failures.get(key);

    let triedUrl = '';
    if (failure?.url) {
      triedUrl = failure.url;
    } else if (zauruPath) {
      triedUrl = `${ZAURU_BASE}${zauruPath}`;
    }

    const fileName = `${doc.slug}-${ref.stepNumber}.png`;

    rows.push({
      manualUrl,
      triedUrl,
      correctUrl: '',
      fullScreenshot: '',
      fileName,
    });
  }
}

// Ordena por URL del manual para agrupar secciones juntas
rows.sort((a, b) => a.manualUrl.localeCompare(b.manualUrl));

// ── Escribe el Excel ─────────────────────────────────────────────────────
const wb = new ExcelJS.Workbook();
wb.creator = 'report-missing.mjs';
wb.created = new Date();
const ws = wb.addWorksheet('Missing images', {
  views: [{ state: 'frozen', ySplit: 1, xSplit: 0 }],
});

ws.columns = [
  { header: 'URL del manual', key: 'manualUrl', width: 70 },
  { header: 'URL que playwright intentó', key: 'triedUrl', width: 60 },
  { header: 'URL correcta', key: 'correctUrl', width: 45 },
  { header: 'Screenshot completo', key: 'fullScreenshot', width: 18 },
  { header: 'Imagen (referencia)', key: 'fileName', width: 32 },
];

// Header en negrita
ws.getRow(1).font = { bold: true };
ws.getRow(1).alignment = { vertical: 'middle', wrapText: true };

// Hipervínculos en las columnas 1 y 2 para clic directo
const HYPERLINK_STYLE = {
  font: { color: { argb: 'FF0563C1' }, underline: true },
  vertical: 'top',
  wrapText: true,
};
const TEXT_STYLE = { vertical: 'top', wrapText: true };

for (const r of rows) {
  const row = ws.addRow(r);
  row.getCell(1).value = { text: r.manualUrl, hyperlink: r.manualUrl };
  row.getCell(1).style = HYPERLINK_STYLE;
  if (r.triedUrl) {
    row.getCell(2).value = { text: r.triedUrl, hyperlink: r.triedUrl };
    row.getCell(2).style = HYPERLINK_STYLE;
  } else {
    row.getCell(2).style = TEXT_STYLE;
  }
  row.getCell(3).style = TEXT_STYLE;
  row.getCell(4).alignment = { vertical: 'top', horizontal: 'center' };
  row.getCell(5).style = TEXT_STYLE;
  row.height = 30;
}

// Filtros automáticos en la fila de encabezado
ws.autoFilter = {
  from: { row: 1, column: 1 },
  to: { row: 1, column: 5 },
};

await wb.xlsx.writeFile(outPath);

console.log(`✓ Excel escrito en ${outPath}`);
console.log(`  ${rows.length} filas (shots faltantes) en ${broken.length} docs`);
console.log(`  URL base del manual: ${MANUAL_BASE}`);
console.log(`  URL base de Zauru:   ${ZAURU_BASE}`);
console.log(`  Filas con URL intentada vacía (definir ruta): ${rows.filter((r) => !r.triedUrl).length}`);
