/**
 * destinations.mjs — Dos pasos que caen en el mismo destino no pueden
 * describir pantallas distintas. `waitMs` no cuenta como diferencia.
 */
import { meaningfulActions } from './safety.mjs';

const INTENTS = [
  ['eliminar', /elimin|borrar|basurero|destroy/i],
  ['reabrir', /reabr|devolver a ejecuci|rebound|return_to_running|unclose/i],
  ['enviar', /enviar por correo|send_email/i],
  ['rentabilidad', /rentabil/i],
  ['configuracion', /configuraci/i],
  ['cerrados', /cerrad/i],
  ['bitacora', /bit[aá]cora/i],
  ['editar', /\beditar\b|\bedit\b/i],
  ['imprimir', /imprimir|\bprint\b/i],
  ['detalle', /detalle|verificar/i],
  ['nuevo', /\bnuev[oa]\b/i],
];

export function instructionIntent(shot) {
  const text = `${shot?.caption || ''} ${shot?.insertAfterText || ''}`;
  const found = [];
  for (const [name, re] of INTENTS) if (re.test(text)) found.push(name);
  return found;
}

export function destinationKey(shot) {
  return JSON.stringify({
    path: shot?.zauruPath || '',
    actions: meaningfulActions(shot?.actions),
    focus: shot?.focusSelector || null,
    mode: shot?.captureMode || null,
    expect: shot?.expectPath || null,
  });
}

export function intentsConflict(a, b) {
  const ia = instructionIntent(a);
  const ib = instructionIntent(b);
  if (!ia.length && !ib.length) return false;
  if (ia.length !== ib.length) return true;
  return ia.some((x, i) => x !== ib[i]);
}

const REPORT_PATH = /^\/[a-z_]+\/reports\/[^/]+$/;

/**
 * Rutas de reporte (`/<módulo>/reports/<reporte>`) que usan dos o más
 * documentos distintos: casi siempre uno de ellos apunta al reporte equivocado.
 */
export function findSharedReportRoutes(docs) {
  const byPath = new Map();
  for (const doc of docs || []) {
    for (const shot of doc.shots || []) {
      if (shot.captureMode === 'blocked' || !REPORT_PATH.test(shot.zauruPath || '')) continue;
      if (!byPath.has(shot.zauruPath)) byPath.set(shot.zauruPath, new Map());
      const users = byPath.get(shot.zauruPath);
      if (!users.has(doc.docPath)) users.set(doc.docPath, { doc: doc.slug, step: shot.stepNumber });
    }
  }
  const shared = [];
  for (const [routePath, users] of byPath) {
    const [first, ...rest] = users.values();
    for (const user of rest) shared.push({ path: routePath, ...user, other: first.doc });
  }
  return shared;
}

/**
 * Shots capturables que comparten destino y piden pantallas incompatibles.
 * Los marcados `blocked` no se comparan: no se van a fotografiar.
 */
export function findIncompatibleSharedDestinations(docs) {
  const groups = new Map();
  for (const doc of docs || []) {
    for (const shot of doc.shots || []) {
      if (shot.captureMode === 'blocked') continue;
      const key = destinationKey(shot);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({ doc: doc.slug, shot });
    }
  }
  const conflicts = [];
  for (const [key, items] of groups) {
    if (items.length < 2) continue;
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        if (intentsConflict(items[i].shot, items[j].shot)) {
          conflicts.push({
            key,
            a: { doc: items[i].doc, step: items[i].shot.stepNumber, caption: items[i].shot.caption },
            b: { doc: items[j].doc, step: items[j].shot.stepNumber, caption: items[j].shot.caption },
          });
        }
      }
    }
  }
  return conflicts;
}
