/**
 * inventory.mjs — Cruce de referencias, archivos y manifiesto.
 * Incluye documentos anidados, index.md y nombres sin numeración.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { shotImageRef } from './images.mjs';
import { findIncompatibleSharedDestinations } from './destinations.mjs';

const ANY_IMG_RE = /!\[([^\]]*)\]\((\/img\/[^)\s]+)\)/g;

export function parseAllImageRefs(content) {
  const out = [];
  for (const m of String(content).matchAll(ANY_IMG_RE)) {
    const imgRef = m[2];
    const parts = imgRef.split('/');
    const fileName = parts[parts.length - 1];
    const section = parts[2] || '';
    const numbered = fileName.match(/^(.*)-(\d+)\.([a-zA-Z0-9]+)$/);
    out.push({
      caption: m[1],
      imgRef,
      section,
      fileName,
      slug: numbered ? numbered[1] : fileName.replace(/\.[a-zA-Z0-9]+$/, ''),
      stepNumber: numbered ? Number(numbered[2]) : null,
      ext: (numbered ? numbered[3] : fileName.split('.').pop() || '').toLowerCase(),
      numbered: Boolean(numbered),
      index: m.index,
    });
  }
  return out;
}

export function walkMarkdown(docsDir) {
  const out = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md')) out.push(p);
    }
  })(docsDir);
  return out.sort();
}

function lineBefore(content, index) {
  const lines = content.slice(0, index).split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const t = lines[i].trim();
    if (!t || t.startsWith('![')) continue;
    return t;
  }
  return '';
}

/**
 * Inventario en memoria. `docs` son {docPath, content}; `files` es un Map
 * ref → hash (o true si no se hasheó). Así las pruebas no tocan el disco.
 */
export function buildInventory({ docs, files, manifest, format = 'png' }) {
  const present = files instanceof Map ? files : new Map();
  const references = [];
  for (const doc of docs) {
    for (const ref of parseAllImageRefs(doc.content)) {
      references.push({
        docPath: doc.docPath,
        slug: path.basename(doc.docPath, '.md'),
        nested: doc.docPath.split('/').length > 2,
        indexDoc: path.basename(doc.docPath) === 'index.md',
        ...ref,
        exists: present.has(ref.imgRef),
        hash: typeof present.get(ref.imgRef) === 'string' ? present.get(ref.imgRef) : null,
        anchor: lineBefore(doc.content, ref.index),
      });
    }
  }

  const shotRefs = [];
  for (const doc of manifest?.docs || []) {
    for (const shot of doc.shots || []) {
      shotRefs.push({ doc, shot, imageRef: shotImageRef(doc, shot, format) });
    }
  }
  const shotsByRef = new Map();
  for (const row of shotRefs) {
    if (!shotsByRef.has(row.imageRef)) shotsByRef.set(row.imageRef, []);
    shotsByRef.get(row.imageRef).push(row);
  }

  const missing = references.filter((r) => !r.exists);
  const unmapped = references.filter((r) => !shotsByRef.has(r.imgRef));
  const docPaths = new Set(docs.map((d) => d.docPath));
  const moved = (manifest?.docs || [])
    .filter((d) => d.docPath && !docPaths.has(d.docPath))
    .map((d) => ({ slug: d.slug, docPath: d.docPath }));

  const byHash = new Map();
  for (const ref of references) {
    if (!ref.hash) continue;
    if (!byHash.has(ref.hash)) byHash.set(ref.hash, []);
    byHash.get(ref.hash).push(ref.imgRef);
  }
  const duplicateFiles = [];
  for (const [hash, refs] of byHash) {
    const unique = [...new Set(refs)];
    if (unique.length > 1) duplicateFiles.push({ hash, refs: unique });
  }

  const sharedDestinations = findIncompatibleSharedDestinations(manifest?.docs || []);
  const noImageDocs = docs.filter((d) => !parseAllImageRefs(d.content).length && path.basename(d.docPath) !== 'index.md');

  return {
    references,
    missing,
    unmapped,
    moved,
    duplicateFiles,
    sharedDestinations,
    noImageDocs: noImageDocs.map((d) => d.docPath),
    shotsByRef,
  };
}

/** Refs `/img/...` de las imágenes que existen en static/img. */
export function existingImageRefs(repoRoot) {
  const refs = new Set();
  const imgRoot = path.join(repoRoot, 'static', 'img');
  if (!fs.existsSync(imgRoot)) return refs;
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.(png|jpe?g|gif|webp)$/i.test(entry.name)) refs.add('/img/' + path.relative(imgRoot, p).split(path.sep).join('/'));
    }
  })(imgRoot);
  return refs;
}

export function loadInventoryFromDisk({ repoRoot, docsDir, manifest, format = 'png' }) {
  const docs = walkMarkdown(docsDir).map((p) => ({
    docPath: path.relative(repoRoot, p),
    content: fs.readFileSync(p, 'utf8'),
  }));
  const files = new Map();
  const imgRoot = path.join(repoRoot, 'static', 'img');
  if (fs.existsSync(imgRoot)) {
    (function walk(dir) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (/\.(png|jpe?g|gif|webp)$/i.test(entry.name)) {
          const rel = '/img/' + path.relative(imgRoot, p).split(path.sep).join('/');
          const hash = crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
          files.set(rel, hash);
        }
      }
    })(imgRoot);
  }
  return buildInventory({ docs, files, manifest, format });
}

export function renderGallery(inventory) {
  const groups = inventory.duplicateFiles
    .map((g) => {
      const imgs = g.refs.map((r) => `<figure><img src="${r.replace('/img/', '../../../static/img/')}" alt=""><figcaption>${r}</figcaption></figure>`).join('');
      return `<section><h2>${g.hash.slice(0, 12)}</h2><div class="row">${imgs}</div></section>`;
    })
    .join('\n');
  const missing = inventory.missing.map((r) => `<li>${r.docPath} → ${r.imgRef}</li>`).join('');
  return `<!DOCTYPE html><meta charset="utf-8"><title>Revisión de capturas</title>
<style>body{font:14px/1.4 sans-serif;margin:24px} .row{display:flex;flex-wrap:wrap;gap:12px} figure{width:320px;margin:0} img{width:100%;border:1px solid #ccc} figcaption{font-size:12px;word-break:break-all}</style>
<h1>Duplicados (${inventory.duplicateFiles.length})</h1>
${groups}
<h1>Referencias sin archivo (${inventory.missing.length})</h1>
<ul>${missing}</ul>`;
}
