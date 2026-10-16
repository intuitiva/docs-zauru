/** Rutas y formatos de las imágenes existentes en el manual. */
import path from 'node:path';
import fs from 'node:fs';

/** `/img/compras/a.png` → `<repo>/static/img/compras/a.png`. */
export function refToDisk(repoRoot, imageRef) {
  if (typeof imageRef !== 'string' || !imageRef.startsWith('/img/') || /[?#\\\x00]/.test(imageRef) || /%2f|%5c/i.test(imageRef)) throw new Error('la imagen debe ser una ruta local bajo /img/');
  const ref = decodeURIComponent(imageRef);
  if (ref.split('/').some((s) => s === '.' || s === '..') || /[?#\\\x00]/.test(ref)) throw new Error('ruta de imagen inválida');
  const root = path.resolve(repoRoot, 'static', 'img');
  const dest = path.resolve(repoRoot, 'static', ref.slice(1));
  if (!dest.startsWith(root + path.sep)) throw new Error('la imagen sale de static/img');
  return dest;
}

/** Resolver también padres existentes para detectar directorios enlazados. */
function realDestination(file) {
  const suffix = [];
  let current = path.resolve(file);
  while (!fs.existsSync(current)) {
    const parent = path.dirname(current);
    if (parent === current) throw new Error(`no se pudo resolver ${file}`);
    suffix.unshift(path.basename(current));
    current = parent;
  }
  return path.join(fs.realpathSync(current), ...suffix);
}

export function candidatePathFor(repoRoot, outputDir, imageRef) {
  const candidate = path.join(outputDir, path.relative(path.join(repoRoot, 'static'), refToDisk(repoRoot, imageRef)));
  const published = realDestination(path.join(repoRoot, 'static'));
  const resolved = realDestination(candidate);
  if (resolved === published || resolved.startsWith(published + path.sep)) throw new Error('el directorio de candidatas no puede escribir dentro de static; usa runs/ o /tmp');
  return candidate;
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
