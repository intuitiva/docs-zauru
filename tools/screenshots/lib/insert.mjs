/**
 * insert.mjs — Una referencia solo se inserta o se cambia si la imagen está
 * verificada y el ancla aparece una sola vez.
 */

export function planInsertion({ lines, needle, imageRef, verified }) {
  if (!verified) return { action: 'skip', reason: 'sin imagen verificada' };
  const text = (needle || '').trim();
  if (!text) return { action: 'skip', reason: 'ancla vacía' };
  const hits = [];
  lines.forEach((line, index) => {
    if (line.trim() === text) hits.push(index);
  });
  if (hits.length !== 1) {
    return { action: 'skip', reason: hits.length === 0 ? 'ancla ausente' : 'ancla ambigua' };
  }
  if (lines.some((line) => line.includes(imageRef))) return { action: 'skip', reason: 'ya existe' };
  return { action: 'insert', index: hits[0] };
}

export function isVerifiedResult(row) {
  if (!row) return false;
  if (row.status === 'blocked' || row.status === 'failed' || row.status === 'candidate') return false;
  return row.status === 'verified' && row.visualReview === 'accepted';
}
