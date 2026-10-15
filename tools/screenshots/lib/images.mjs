/**
 * images.mjs — Nombre estable de cada captura.
 *
 * El nombre por defecto sigue siendo `<imageSlug|slug>-<step>.<ext>`.
 * `imageRef` es opcional y conserva nombres especiales que no siguen esa
 * numeración (`importar-precios-0b.png`, jpg de otra carpeta, etc.).
 */
import path from 'node:path';

export function shotImageRef(doc, shot, format = 'png') {
  if (shot?.imageRef) {
    const raw = String(shot.imageRef).trim().split(/\s/)[0];
    if (raw.startsWith('/img/')) return raw;
    return `/img/${doc.section}/${raw.replace(/^\//, '')}`;
  }
  const base = doc.imageSlug || doc.slug;
  return `/img/${doc.section}/${base}-${shot.stepNumber}.${format}`;
}

/** `/img/compras/a.png` → `<repo>/static/img/compras/a.png`. */
export function refToDisk(repoRoot, imageRef) {
  const rel = String(imageRef || '').replace(/^\//, '');
  return path.join(repoRoot, 'static', rel);
}

export function extensionOf(imageRef, fallback = 'png') {
  const m = String(imageRef).match(/\.([a-zA-Z0-9]+)$/);
  return (m ? m[1] : fallback).toLowerCase();
}

/** Playwright usa `jpeg`, los archivos del manual usan `jpg`. */
export function playwrightType(ext) {
  const e = String(ext).toLowerCase();
  if (e === 'jpg' || e === 'jpeg') return 'jpeg';
  return 'png';
}
