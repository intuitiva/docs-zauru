/**
 * gaps.mjs — Detección de huecos de imágenes en la docs y resolución de
 * rutas Zauru (nav.json / rutas API del markdown) para el manifiesto.
 */
import fs from 'node:fs';
import path from 'node:path';

export const DEFAULT_WAIT_SELECTORS = [
  'table',
  'form',
  '.dataTables_wrapper',
  'main',
  '#content',
];

const GENERIC_CAPTION = /^(imagen\s*\d*|image\s*\d*|img\s*\d*|foto\s*\d*|)$/i;

/** Normaliza texto para comparar slug/sección/etiquetas del menú. */
export function normalizeToken(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Heurística: docs de API/código sin UI (graphql, curl, etc.).
 * true → no generar capturas con el LLM.
 */
export function isApiCodeDoc(mdPath, content) {
  const base = path.basename(mdPath, '.md');
  if (/api|graphql|curl/i.test(base)) return true;

  const lines = content.split('\n');
  const nonEmpty = lines.filter((l) => l.trim());
  if (!nonEmpty.length) return true;

  let inFence = false;
  let codeLines = 0;
  let uiHints = 0;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) codeLines++;
    if (/\b(clic|hacer clic|formulario|listado|pantalla|men[uú]|bot[oó]n)\b/i.test(line)) {
      uiHints++;
    }
  }
  const codeRatio = codeLines / Math.max(nonEmpty.length, 1);
  return codeRatio >= 0.45 && uiHints < 2;
}

const IMG_RE = /!\[([^\]]*)\]\((\/img\/([^/]+)\/([^/]+)-(\d+)\.([a-zA-Z0-9]+))\)/g;

/** Parsea ![caption](/img/section/slug-N.ext) del markdown. */
export function parseImageRefs(content) {
  const out = [];
  for (const m of content.matchAll(IMG_RE)) {
    out.push({
      caption: m[1],
      imgRef: m[2],
      section: m[3],
      slug: m[4],
      stepNumber: Number(m[5]),
      ext: m[6],
      fullMatch: m[0],
      index: m.index,
    });
  }
  return out;
}

function imageDiskPath(repoRoot, ref) {
  return path.join(
    repoRoot,
    'static',
    'img',
    ref.section,
    `${ref.slug}-${ref.stepNumber}.${ref.ext}`
  );
}

/** Docs con al menos una referencia /img/ cuyo archivo no existe en static/. */
export function findBrokenRefDocs(docsDir, repoRoot) {
  const results = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        const content = fs.readFileSync(p, 'utf8');
        const refs = parseImageRefs(content);
        const broken = refs.filter((r) => !fs.existsSync(imageDiskPath(repoRoot, r)));
        if (broken.length) {
          results.push({
            mdPath: p,
            section: path.basename(path.dirname(p)),
            slug: path.basename(p, '.md'),
            docPath: path.relative(repoRoot, p),
            content,
            brokenRefs: broken,
          });
        }
      }
    }
  })(docsDir);
  return results.sort((a, b) => a.docPath.localeCompare(b.docPath));
}

/** Docs sin ninguna imagen markdown (![). Excluye index.md. */
export function findNoImageDocs(docsDir) {
  const out = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        const content = fs.readFileSync(p, 'utf8');
        if (!content.includes('![')) out.push(p);
      }
    }
  })(docsDir);
  return out.sort();
}

function lineAtIndex(content, index) {
  return content.slice(0, index).split('\n').length - 1;
}

/**
 * Infiere shots desde refs rotas (o todas las del doc si brokenStepNumbers es null).
 * zauruPath queda vacío; el llamador lo resuelve.
 */
export function inferShotsFromBrokenRefs(content, section, slug, brokenStepNumbers = null) {
  const lines = content.split('\n');
  const allow = brokenStepNumbers ? new Set(brokenStepNumbers) : null;
  const refs = parseImageRefs(content).filter(
    (r) => r.section === section && r.slug === slug && (!allow || allow.has(r.stepNumber))
  );

  const shots = [];
  for (const r of refs) {
    const lineIdx = lineAtIndex(content, r.index);
    let insertAfterText = '';
    for (let i = lineIdx - 1; i >= 0; i--) {
      const t = lines[i].trim();
      if (!t) continue;
      if (t.startsWith('![')) continue;
      insertAfterText = t;
      break;
    }

    let caption = (r.caption || '').trim();
    if (GENERIC_CAPTION.test(caption)) {
      caption =
        insertAfterText.replace(/^#+\s*/, '').slice(0, 120) || `Pantalla ${r.stepNumber}`;
    }

    shots.push({
      stepNumber: r.stepNumber,
      caption,
      zauruPath: '',
      waitForSelector: [...DEFAULT_WAIT_SELECTORS],
      insertAfterText,
    });
  }
  return shots.sort((a, b) => a.stepNumber - b.stepNumber);
}

export function extractHeadings(content) {
  return [...content.matchAll(/^#+\s+(.+)$/gm)].map((m) => m[1].trim());
}

/** Rutas estilo API del markdown (`/foo/bar.json` → `/foo/bar`). */
export function extractApiPaths(content) {
  const paths = [];
  for (const m of content.matchAll(/`(\/[a-z0-9_/-]+(?:\.json)?)`/gi)) {
    let p = m[1].replace(/\.json$/i, '');
    p = p.replace(/\/\d+$/, '');
    if (p.length > 1) paths.push(p);
  }
  return [...new Set(paths)];
}

/** Palabras demasiado genéricas para puntuar coincidencias de menú. */
const NAV_STOPWORDS = new Set([
  'de',
  'del',
  'la',
  'las',
  'los',
  'el',
  'y',
  'o',
  'en',
  'por',
  'para',
  'con',
  'un',
  'una',
  'al',
  'a',
  'ordenes',
  'orden',
  'orders',
  'order',
  'reportes',
  'reporte',
  'reports',
  'report',
  'configuraciones',
  'configuracion',
  'settings',
  'setting',
  'cerradas',
  'cerrados',
  'cerrada',
  'cerrado',
  'closed',
  'activos',
  'activo',
  'active',
  'nuevas',
  'nuevo',
  'new',
  'index',
  'lista',
  'listado',
]);

function distinctiveTokens(text) {
  return normalizeToken(text)
    .split(' ')
    .filter((w) => w.length > 3 && !NAV_STOPWORDS.has(w));
}

export function scoreNavPath(navEntry, { section, slug, headings }) {
  const label = normalizeToken(navEntry.label);
  const npath = normalizeToken(navEntry.path.replace(/\//g, ' '));
  const slugParts = distinctiveTokens(slug.replace(/-/g, ' '));
  const sectionParts = distinctiveTokens(section.replace(/-/g, ' '));
  const headingParts = distinctiveTokens(headings.slice(0, 3).join(' '));
  let score = 0;
  let distinctiveHits = 0;

  for (const w of slugParts) {
    if (label.includes(w)) {
      score += 4;
      distinctiveHits++;
    }
    if (npath.includes(w)) {
      score += 3;
      distinctiveHits++;
    }
  }
  // Sin al menos un token distintivo del slug en label/path → no es match fiable
  if (!distinctiveHits) return 0;

  for (const w of sectionParts) {
    if (npath.includes(w) || label.includes(w)) score += 2;
  }
  for (const w of headingParts) {
    if (label.includes(w) || npath.includes(w)) score += 1;
  }
  return score;
}

/**
 * Resuelve una ruta Zauru: nav.json (umbral claro) → rutas API del md → none.
 */
export function resolveZauruPath({ section, slug, content, nav }) {
  const headings = extractHeadings(content);
  const apiPaths = extractApiPaths(content);

  if (Array.isArray(nav) && nav.length) {
    const scored = nav
      .map((entry) => ({ entry, score: scoreNavPath(entry, { section, slug, headings }) }))
      .sort((a, b) => b.score - a.score);
    const best = scored[0];
    const second = scored[1];
    // Umbral + margen: evita empates genéricos (p.ej. "órdenes cerradas" → compras)
    if (best && best.score >= 6 && (!second || best.score >= second.score + 3)) {
      return { path: best.entry.path, resolveId: false, method: 'nav' };
    }
  }

  if (apiPaths.length === 1) {
    return { path: apiPaths[0], resolveId: false, method: 'api' };
  }
  if (apiPaths.length > 1) {
    const slugTok = normalizeToken(slug);
    const bestApi = apiPaths
      .map((p) => ({
        p,
        score: normalizeToken(p)
          .split(' ')
          .filter((w) => slugTok.includes(w) && w.length > 2).length,
      }))
      .sort((a, b) => b.score - a.score)[0];
    if (bestApi?.score > 0) {
      return { path: bestApi.p, resolveId: false, method: 'api' };
    }
  }

  return { path: '', resolveId: false, method: 'none' };
}

export function looksLikeDetailPath(zauruPath) {
  return /\/\d+\/?$/.test(zauruPath || '');
}
