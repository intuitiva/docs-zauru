/** Auditoría derivada exclusivamente de documentos y archivos. */
import fs from 'node:fs';
import path from 'node:path';
import { hashFile } from './results.mjs';
import { refToDisk } from './images.mjs';

export function imageFiles(repoRoot) {
  const root = path.join(repoRoot, 'static', 'img');
  const files = new Map();
  function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, e.name);
      if (e.isDirectory()) walk(file);
      else if (/\.(png|jpe?g|svg|webp|gif)$/i.test(e.name)) files.set('/img/' + path.relative(root, file).split(path.sep).join('/'), file);
    }
  }
  if (fs.existsSync(root)) walk(root);
  return files;
}

export function auditSources(repoRoot, sources) {
  const files = imageFiles(repoRoot);
  const refs = new Set();
  const missing = [];
  for (const row of sources.rows) {
    try {
      const file = refToDisk(repoRoot, row.imageRef);
      refs.add(file);
      if (!fs.existsSync(file)) missing.push({ docPath: row.docPath, line: row.line, imageRef: row.imageRef, sourceUrl: row.sourceUrl || null });
    } catch { /* La ruta inválida ya está reportada por el lector. */ }
  }
  const hashes = new Map();
  for (const [ref, file] of files) {
    if (!refs.has(file)) continue;
    const hash = hashFile(file);
    if (!hashes.has(hash)) hashes.set(hash, []);
    hashes.get(hash).push(ref);
  }
  return {
    generatedAt: new Date().toISOString(),
    documents: sources.documents.length,
    references: sources.rows.length,
    targets: sources.targets.length,
    missing,
    issues: sources.issues,
    duplicateFiles: [...hashes.values()].filter((refs) => refs.length > 1),
    orphans: [...files].filter(([, file]) => !refs.has(file)).map(([ref]) => ref),
    noImageDocs: sources.documents.filter((d) => !sources.rows.some((r) => r.docPath === d)),
  };
}

export const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderGallery(sources, results = { images: {} }, galleryDir, repoRoot) {
  const groups = sources.targets.map((shot) => {
    const result = results.images[shot.imageRef];
    const image = result?.candidatePath && fs.existsSync(result.candidatePath) ? result.candidatePath : refToDisk(repoRoot, shot.imageRef);
    const url = path.relative(galleryDir, image).split(path.sep).map(encodeURIComponent).join('/');
    return `<figure><img loading="lazy" src="${escapeHtml(url)}" alt="${escapeHtml(shot.caption)}"><figcaption>${escapeHtml(shot.imageRef)}<br>${escapeHtml(shot.docPath)}:${shot.line}<br>${escapeHtml(shot.sourceUrl)}<br>${escapeHtml(result?.status || 'sin captura')} / ${escapeHtml(result?.visualReview || '')}</figcaption></figure>`;
  }).join('\n');
  return `<!DOCTYPE html><meta charset="utf-8"><title>Revisión de capturas</title><style>body{font:14px/1.4 sans-serif;margin:24px}main{display:flex;flex-wrap:wrap;gap:16px}figure{width:440px;margin:0}img{width:100%;border:1px solid #ccc}figcaption{overflow-wrap:anywhere}</style><h1>Revisión de capturas</h1><p>Comparar cada candidata con su documento antes de aceptar la revisión en results.json.</p><main>${groups}</main>`;
}
