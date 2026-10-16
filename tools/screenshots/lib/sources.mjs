/** El documento es la fuente: cada figure asocia una imagen con su figcaption. */
import fs from 'node:fs';
import path from 'node:path';
import { createProcessor } from '@mdx-js/mdx';
import { normalizeActions, usableSelector } from './actions.mjs';
import { refToDisk } from './images.mjs';

const processor = createProcessor();
const META_KEYS = new Set(['actions', 'focusSelector', 'waitForSelector', 'hideSelectors', 'fullPage', 'captureMode', 'blockedCause', 'expectPath', 'listPath', 'recordLink']);

export function walkMarkdown(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walkMarkdown(file) : /\.mdx?$/.test(entry.name) ? [file] : [];
  }).sort();
}

function descendants(node, predicate) {
  return (node.children || []).flatMap((child) => [...(predicate(child) ? [child] : []), ...descendants(child, predicate)]);
}

function literalAttribute(node, name) {
  const attr = node.attributes?.find((a) => a.type === 'mdxJsxAttribute' && a.name === name);
  return typeof attr?.value === 'string' ? attr.value : null;
}

export function stagingUrl(href, baseUrl) {
  const source = new URL(href);
  const base = new URL(baseUrl);
  if (source.origin !== 'https://app.zauru.com' || source.username || source.password) throw new Error('el enlace debe pertenecer a https://app.zauru.com');
  if (base.origin !== 'https://zauru.herokuapp.com' || base.pathname !== '/' || base.search || base.hash) throw new Error('ZAURU_BASE_URL debe ser https://zauru.herokuapp.com');
  return base.origin + source.pathname + source.search + source.hash;
}

export function readMetadata(figure) {
  const comments = descendants(figure, (n) => /Expression$/.test(n.type) && /^\s*\/\*\s*screenshot\s*:/.test(n.value || ''));
  if (!comments.length) return {};
  if (comments.length !== 1) throw new Error('solo se permite un comentario screenshot por figura');
  const match = comments[0].value.match(/^\s*\/\*\s*screenshot\s*:\s*([\s\S]*?)\*\/\s*$/);
  if (!match) throw new Error('comentario screenshot inválido');
  const meta = JSON.parse(match[1]);
  if (!meta || Array.isArray(meta) || typeof meta !== 'object') throw new Error('screenshot debe ser un objeto JSON');
  for (const key of Object.keys(meta)) if (!META_KEYS.has(key)) throw new Error(`opción screenshot desconocida: ${key}`);
  if (meta.actions !== undefined) {
    if (!Array.isArray(meta.actions) || meta.actions.some((a) => !a || Object.keys(a).length !== 1)) throw new Error('actions debe contener acciones con una sola operación');
    const normalized = normalizeActions(meta.actions);
    if (normalized.dropped.length || JSON.stringify(normalized.actions) !== JSON.stringify(meta.actions)) throw new Error('actions contiene operaciones o selectores inválidos (máximo 3)');
    if (meta.actions.some((a) => 'waitMs' in a && (!Number.isFinite(a.waitMs) || a.waitMs < 0 || a.waitMs > 30000))) throw new Error('waitMs debe estar entre 0 y 30000');
  }
  for (const key of ['focusSelector', 'recordLink']) if (key in meta && !usableSelector(meta[key])) throw new Error(`${key} debe ser un selector específico válido`);
  for (const key of ['waitForSelector', 'hideSelectors']) if (key in meta && (!Array.isArray(meta[key]) || meta[key].some((s) => typeof s !== 'string' || !s.trim()))) throw new Error(`${key} debe ser una lista de selectores`);
  for (const key of ['expectPath', 'listPath']) if (key in meta && (typeof meta[key] !== 'string' || !/^\/(?!\/)/.test(meta[key]) || /[?#]/.test(meta[key]))) throw new Error(`${key} debe ser una ruta relativa sin parámetros de consulta`);
  if ('fullPage' in meta && typeof meta.fullPage !== 'boolean') throw new Error('fullPage debe ser booleano');
  if ('captureMode' in meta && !['preview', 'blocked'].includes(meta.captureMode)) throw new Error('captureMode debe ser preview o blocked');
  if (meta.captureMode === 'blocked' && (typeof meta.blockedCause !== 'string' || !meta.blockedCause.trim())) throw new Error('una captura bloqueada necesita blockedCause');
  return meta;
}

/** Parsear MDX, nunca ejecutarlo. Los ejemplos de código no son figuras ni imágenes. */
export function parseDocument(content, docPath, baseUrl = 'https://zauru.herokuapp.com') {
  const issues = [];
  const rows = [];
  // Mantener offsets y líneas al retirar frontmatter del parser MDX.
  const source = content.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, (s) => s.replace(/[^\r\n]/g, ' '));
  let tree;
  try { tree = processor.parse(source); }
  catch (err) { return { rows, issues: [{ severity: 'error', code: 'document', docPath, line: err.line || 1, message: err.message }] }; }
  const definitions = new Map(descendants(tree, (n) => n.type === 'definition').map((n) => [n.identifier, n.url]));
  const isImage = (n) => n.type === 'image' || n.type === 'imageReference' || n.name === 'img';
  const allImages = descendants(tree, isImage);
  const figures = descendants(tree, (n) => n.name === 'figure');
  const insideFigure = new Set();
  for (const [index, figure] of figures.entries()) {
    const images = descendants(figure, isImage);
    images.forEach((n) => insideFigure.add(n));
    const row = { docPath, line: figure.position.start.line, offset: figure.position.start.offset, figureIndex: index + 1, caption: '', imageRef: null, sourceUrl: null, eligible: true };
    const problem = (code, message) => { row.eligible = false; issues.push({ severity: 'error', code, docPath, line: row.line, imageRef: row.imageRef, message }); };
    if (images.length !== 1) { problem('figure', 'la figura debe contener exactamente una imagen'); rows.push(row); continue; }
    const image = images[0];
    row.imageRef = image.type === 'image' ? image.url : image.type === 'imageReference' ? definitions.get(image.identifier) : literalAttribute(image, 'src');
    row.caption = image.alt || literalAttribute(image, 'alt') || '';
    try { refToDisk('/repository', row.imageRef); } catch (err) { problem('image-path', err.message); }
    if (!/\.(png|jpe?g)$/i.test(row.imageRef || '')) problem('format', 'solo se recapturan PNG y JPEG; conservar esta imagen manualmente');
    const captions = descendants(figure, (n) => n.name === 'figcaption');
    const links = captions.flatMap((n) => descendants(n, (c) => c.name === 'a' || c.type === 'link'));
    if (captions.length !== 1 || links.length !== 1) problem('source', 'se requiere un solo enlace dentro de figcaption');
    else {
      row.sourceUrl = links[0].type === 'link' ? links[0].url : literalAttribute(links[0], 'href');
      try {
        row.targetUrl = stagingUrl(row.sourceUrl, baseUrl);
        const url = new URL(row.targetUrl);
        row.zauruPath = url.pathname;
        row.search = url.search;
        row.hash = url.hash;
        row.resolveId = url.pathname.split('/').some((s) => /^:[a-z_][a-z0-9_]*$/i.test(s));
      } catch (err) { problem('source', err.message); }
    }
    try { Object.assign(row, readMetadata(figure)); } catch (err) { problem('metadata', err.message); }
    rows.push(row);
  }
  for (const image of allImages.filter((n) => !insideFigure.has(n))) {
    const imageRef = image.type === 'image' ? image.url : image.type === 'imageReference' ? definitions.get(image.identifier) : literalAttribute(image, 'src');
    rows.push({ docPath, line: image.position.start.line, imageRef, caption: image.alt || '', eligible: false, outsideFigure: true });
    issues.push({ severity: 'warning', code: 'unmapped', docPath, line: image.position.start.line, imageRef, message: 'imagen fuera de figure; se conserva sin recapturar' });
  }
  return { rows, issues };
}

export function recipeKey(row) {
  const { targetUrl, actions = [], focusSelector = null, waitForSelector = [], hideSelectors = null, fullPage = false, captureMode = null, blockedCause = null, expectPath = null, listPath = null, recordLink = null } = row;
  return JSON.stringify({ targetUrl, actions, focusSelector, waitForSelector, hideSelectors, fullPage, captureMode, blockedCause, expectPath, listPath, recordLink });
}

/** Agrupar globalmente antes de aplicar --docs: un archivo tiene una sola receta. */
export function buildSources(documents, baseUrl = 'https://zauru.herokuapp.com') {
  const parsed = documents.map((d) => parseDocument(d.content, d.docPath, baseUrl));
  const rows = parsed.flatMap((d) => d.rows);
  const issues = parsed.flatMap((d) => d.issues);
  const groups = new Map();
  for (const row of rows) {
    let disk;
    try { disk = refToDisk('/repository', row.imageRef); } catch { continue; }
    if (!groups.has(disk)) groups.set(disk, []);
    groups.get(disk).push(row);
  }
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    if (group.some((r) => !r.eligible) || new Set(group.map(recipeKey)).size > 1) {
      for (const row of group) {
        row.eligible = false;
        issues.push({ severity: 'error', code: 'conflict', docPath: row.docPath, line: row.line, imageRef: row.imageRef, message: 'archivo compartido con enlaces o instrucciones incompatibles', uses: group.map((r) => `${r.docPath}:${r.line}`) });
      }
    }
  }
  return { rows, issues, targets: [...groups.values()].filter((group) => group.every((r) => r.eligible)).map((group) => ({ ...group[0], uses: group.map(({ docPath, line }) => ({ docPath, line })) })), documents: documents.map((d) => d.docPath) };
}

export function loadSources(repoRoot, baseUrl) {
  return buildSources(walkMarkdown(path.join(repoRoot, 'docs')).map((file) => ({ docPath: path.relative(repoRoot, file).split(path.sep).join('/'), content: fs.readFileSync(file, 'utf8') })), baseUrl);
}

export function resolveDocFilters(sources, filters) {
  if (!filters?.length) return sources.documents;
  const matchingDocs = new Set();
  for (const filter of filters) {
    const matches = sources.documents.filter((d) => d === filter || d.replace(/^docs\//, '').replace(/\.mdx?$/, '') === filter || path.basename(d).replace(/\.mdx?$/, '') === filter);
    if (!matches.length) throw new Error(`documento no encontrado: ${filter}`);
    if (matches.length > 1) throw new Error(`documento ambiguo: ${filter}; usa la ruta completa (${matches.join(', ')})`);
    matchingDocs.add(matches[0]);
  }
  return [...matchingDocs];
}

export function selectTargets(sources, filters) {
  const matchingDocs = new Set(resolveDocFilters(sources, filters));
  return sources.targets.filter((t) => t.uses.some((u) => matchingDocs.has(u.docPath)));
}
