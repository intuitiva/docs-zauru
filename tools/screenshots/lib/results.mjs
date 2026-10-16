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
    // Cada intento reemplaza el estado completo: una aprobación antigua no se hereda.
    images[key] = value;
  }
  return { version: 1, images };
}

export function writeResults(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

/** Una receta nueva invalida resultados previos, incluidos bloqueos y aprobaciones. */
export function shouldCapture({ force = false, retryFailed = false, fileExists = false, previous = null, fingerprint } = {}) {
  if (force) return true;
  if (!previous || previous.fingerprint !== fingerprint || !fingerprint) return true;
  if (retryFailed) {
    return ['failed', 'blocked'].includes(previous.status) || previous.visualReview === 'rejected';
  }
  if (['blocked', 'failed'].includes(previous.status)) return false;
  if (previous.visualReview === 'rejected') return true;
  if (previous.status === 'candidate') return !previous.candidatePath || !fs.existsSync(previous.candidatePath);
  return !fileExists;
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  return value;
}

export function captureFingerprint(shot, settings) {
  const { imageRef, targetUrl, caption, actions = [], focusSelector = null, waitForSelector = [], hideSelectors = null, fullPage = false, captureMode = null, blockedCause = null, expectPath = null, listPath = null, recordLink = null } = shot;
  return hashBuffer(JSON.stringify(canonical({ version: 2, imageRef, targetUrl, caption, actions, focusSelector, waitForSelector, hideSelectors, fullPage, captureMode, blockedCause, expectPath, listPath, recordLink, settings })));
}

/** Ninguna candidata obsoleta o alterada puede incorporarse al manual. */
export function promotionProblem(row, shot, settings) {
  if (!shot) return 'la imagen ya no tiene una receta válida en los documentos';
  if (!['candidate', 'verified'].includes(row.status) || row.visualReview !== 'accepted') return 'falta revisión visual aceptada';
  if (row.fingerprint !== captureFingerprint(shot, settings)) return 'el enlace o las instrucciones cambiaron; vuelve a capturar y revisar';
  if (!row.candidatePath || !fs.existsSync(row.candidatePath)) return 'falta el archivo candidato';
  if (!row.hash || hashFile(row.candidatePath) !== row.hash) return 'el archivo candidato cambió después de capturarse';
  return null;
}
