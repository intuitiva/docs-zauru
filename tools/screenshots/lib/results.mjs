/**
 * results.mjs — Resultado por imagen. Una corrida parcial no borra las
 * entradas que no volvió a intentar.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export function hashFile(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

export function hashBuffer(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

export function emptyResults() {
  return { version: 1, images: {} };
}

export function readResults(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return emptyResults();
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data || typeof data !== 'object' || !data.images) return emptyResults();
    return data;
  } catch {
    return emptyResults();
  }
}

/** `updates` pisa solo las claves presentes. El resto se conserva. */
export function mergeResults(previous, updates) {
  const base = previous && previous.images ? previous : emptyResults();
  const images = { ...base.images };
  for (const [key, value] of Object.entries(updates || {})) {
    images[key] = { ...(images[key] || {}), ...value };
  }
  return { version: 1, images };
}

export function writeResults(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

/**
 * ¿Hay que fotografiar esta imagen en esta corrida?
 * Un bloqueo previo (permiso, sin datos, error del servidor, escritura)
 * se conserva salvo `--force`. `--retry-failed` solo reintenta fallos
 * de captura y rechazos visuales.
 */
export function shouldCapture({ force = false, retryFailed = false, fileExists = false, previous = null } = {}) {
  if (previous?.captureMode === 'blocked' && !force) return false;
  if (force) return true;
  if (retryFailed) {
    return previous?.status === 'failed' || previous?.visualReview === 'rejected';
  }
  if (previous?.status === 'blocked') return false;
  if (previous?.status === 'failed') return false;
  if (!fileExists) return true;
  return false;
}
