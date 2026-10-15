/**
 * repair.mjs — Corrige el manifiesto sin renombrar referencias ya usadas.
 * No inventa capturas para documentos que no tienen ninguna imagen.
 */
import path from 'node:path';
import { parseAllImageRefs } from './inventory.mjs';
import { shotImageRef } from './images.mjs';
import { candidateMatches } from './routes.mjs';
import { clickIsMutating, isMutatingGetPath, parentPath } from './safety.mjs';
import { normalizeActions } from './actions.mjs';
import { destinationKey } from './destinations.mjs';

/** Rutas que el manual describe y el manifiesto tenía mal. */
export const PATH_OVERRIDES = {
  'casos-casos-cerrados:1': { zauruPath: '/support/closed_cases' },
  'casos-configuraciones:1': { zauruPath: '/support/settings/support_settings/new' },
  'casos-detalles-del-caso:1': { zauruPath: '/support/cases/:id', resolveId: true },
  'casos-eliminar-un-caso:1': {
    zauruPath: '/support/cases',
    captureMode: 'preview',
    focusSelector: 'a[data-method="delete"], a[href*="destroy"]',
  },
  'casos-enviar-por-correo:1': {
    zauruPath: '/support/cases/:id',
    resolveId: true,
    captureMode: 'preview',
    focusSelector: 'a[href*="send_email"]',
  },
  'casos-rentabilidad:1': { zauruPath: '/support/cases/:id/profit', resolveId: true },
  'ordenes-de-compra-cerradas:6': {
    zauruPath: '/purchases/closed_purchase_orders/:id',
    resolveId: true,
    captureMode: 'preview',
    focusSelector: 'a[href*="rebound"]',
  },
  'ordenes-de-produccion-cerradas:3': {
    zauruPath: '/production/closed_production_orders/:id',
    resolveId: true,
    captureMode: 'preview',
    focusSelector: 'a[href*="return_to_running"]',
  },
  'contratos-cerrados:2': {
    zauruPath: '/contracts/closed_contracts/:id',
    resolveId: true,
    captureMode: 'preview',
    focusSelector: 'a[href*="unclose"]',
  },
};

const SUCCESS_ONLY = /mensaje de [eé]xito|exitosamente|se creo exitosamente|se creó exitosamente/i;

/** Texto de una línea sin marcas de lista/encabezado/negrita ni comillas escapadas. */
function plainLine(s) {
  return String(s)
    .trim()
    .replace(/^(?:\d+\.|[-*+]|#{1,6})\s+/, '')
    .replace(/\*\*|__/g, '')
    .replace(/\\+"/g, '"')
    .replace(/""/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Línea exacta del .md que corresponde a `needle`. El LLM suele escapar
 * comillas de más (`\"`, `""`), quitar el "4. " o las negritas, o copiar solo
 * un trozo de la línea; solo se acepta una coincidencia única. Si no la hay,
 * devuelve `needle` y el validador avisa.
 */
export function matchAnchor(content, needle) {
  const text = String(needle || '').trim();
  if (!text) return '';
  const lines = String(content).split('\n').map((l) => l.trim()).filter(Boolean);
  const unique = (pred) => {
    const hits = [...new Set(lines.filter(pred))];
    return hits.length === 1 ? hits[0] : null;
  };
  if (lines.includes(text)) return text;
  const plain = plainLine(text);
  const exact = unique((l) => plainLine(l) === plain);
  if (exact) return exact;
  const prefix = plain.replace(/[.…]+$/, '');
  if (prefix.length >= 12) {
    const partial = unique((l) => plainLine(l).startsWith(prefix));
    if (partial) return partial;
  }
  if (prefix.length >= 20) {
    const inside = unique((l) => plainLine(l).includes(prefix));
    if (inside) return inside;
  }
  return text;
}

function lineBeforeRef(content, imgRef) {
  const idx = content.indexOf(`](${imgRef})`);
  if (idx === -1) return null;
  const lines = content.slice(0, idx).split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const t = lines[i].trim();
    if (!t || t.startsWith('![')) continue;
    return t;
  }
  return null;
}

export function suggestZauruPath(content, imageIndex, routes) {
  const before = String(content).slice(Math.max(0, imageIndex - 2500), imageIndex);
  const found = [];
  for (const m of before.matchAll(/`(\/[a-z0-9_./:-]+)`/gi)) {
    let p = m[1].replace(/\.json$/i, '');
    p = p.replace(/\/\d+(?=\/|$)/g, '/:id');
    if (!found.includes(p)) found.push(p);
  }
  const ok = found.filter((p) => candidateMatches(routes, p));
  if (ok.length === 1) return ok[0];
  return '';
}

function normalizeId(pathname) {
  return String(pathname || '').replace(/\/\d+(?=\/|$)/g, '/:id');
}

function applyOverride(shot, slug) {
  const over = PATH_OVERRIDES[`${slug}:${shot.stepNumber}`];
  if (!over) return shot;
  const next = { ...shot, ...over };
  if (over.zauruPath && over.zauruPath !== shot.zauruPath) {
    next.actions = (shot.actions || []).filter((a) => !a.click);
  }
  return next;
}

function blockCosmeticDuplicates(originalShots, shots) {
  const groups = new Map();
  for (const shot of shots) {
    if (shot.captureMode === 'blocked') continue;
    const key = destinationKey(shot);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(shot);
  }
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    for (const shot of group) {
      const original = originalShots.find((s) => s.stepNumber === shot.stepNumber);
      const actions = original?.actions || [];
      const onlyCosmetic = actions.length > 0 && actions.every((a) => a.waitMs || a.scrollTo);
      if (!onlyCosmetic) continue;
      delete shot.actions;
      shot.captureMode = 'blocked';
      shot.blockedCause =
        'Este paso solo se distinguía con una espera. El aviso depende de crear o modificar un registro, y esa escritura no se ejecuta.';
    }
  }
  return shots;
}

function previewMutating(shot, mutatingNames) {
  if (shot.captureMode === 'blocked' || shot.captureMode === 'preview') return shot;
  if (!isMutatingGetPath(shot.zauruPath, mutatingNames)) return shot;
  const last = shot.zauruPath.split('/').filter(Boolean).pop();
  const parent = parentPath(shot.zauruPath);
  const next = {
    ...shot,
    zauruPath: parent,
    captureMode: 'preview',
    focusSelector: shot.focusSelector || `a[href*="${last}"]`,
  };
  if (normalizeId(parent).includes('/:id')) next.resolveId = true;
  else delete next.resolveId;
  return next;
}

function blockMissingPath(shot) {
  if (shot.captureMode === 'blocked' || String(shot.zauruPath || '').trim()) return shot;
  return {
    ...shot,
    zauruPath: '',
    captureMode: 'blocked',
    blockedCause: 'No hay una ruta de consulta inequívoca para este paso. No se adivinó una pantalla.',
  };
}

/**
 * Dos pasos del mismo documento con el mismo destino darían la misma foto.
 * Se conserva el primero; los siguientes se bloquean si el .md ya referencia
 * su imagen, o se descartan si eran propuestas nuevas.
 */
export function resolveDuplicateDestinations(docEntry, content) {
  const firstByKey = new Map();
  const kept = [];
  const notes = [];
  for (const shot of docEntry.shots) {
    if (shot.captureMode === 'blocked') {
      kept.push(shot);
      continue;
    }
    const key = destinationKey(shot);
    const first = firstByKey.get(key);
    if (first === undefined) {
      firstByKey.set(key, shot.stepNumber);
      kept.push(shot);
    } else if (String(content || '').includes(shotImageRef(docEntry, shot))) {
      kept.push({
        ...shot,
        captureMode: 'blocked',
        blockedCause: `Mismo destino que el paso ${first}: hace falta otra pantalla, un focusSelector o una acción real.`,
      });
      notes.push({ slug: docEntry.slug, step: shot.stepNumber, action: 'blocked' });
    } else {
      notes.push({ slug: docEntry.slug, step: shot.stepNumber, action: 'dropped' });
    }
  }
  docEntry.shots = kept;
  return notes;
}

const REPORTS_INDEX = /^\/[a-z_]+\/reports$/;

/**
 * Varios documentos fotografían el mismo índice `/<módulo>/reports`. Si el
 * documento también fotografía un reporte concreto, el shot del índice
 * enfoca el enlace a ese reporte y deja de ser la misma foto para todos.
 */
function focusReportLink(docEntry) {
  for (const shot of docEntry.shots) {
    if (shot.captureMode === 'blocked' || shot.focusSelector || shot.actions?.length) continue;
    if (!REPORTS_INDEX.test(shot.zauruPath || '')) continue;
    const prefix = `${shot.zauruPath}/`;
    const report = docEntry.shots.find(
      (s) => s.captureMode !== 'blocked' && s.zauruPath?.startsWith(prefix) && !s.zauruPath.slice(prefix.length).includes('/')
    );
    if (report) shot.focusSelector = `a[href$="${report.zauruPath}"]`;
  }
}

/** En un documento sin imágenes propias, numera las propuestas sin huecos. */
function renumberProposals(docEntry, content) {
  const text = String(content || '');
  if (docEntry.shots.some((s) => s.imageRef || text.includes(shotImageRef(docEntry, s)))) return;
  const start = (docEntry.existingImageCount || 0) + 1;
  docEntry.shots.forEach((shot, i) => {
    shot.stepNumber = start + i;
  });
}

function withoutWaits(actions) {
  return (actions || []).filter((a) => a && !Object.prototype.hasOwnProperty.call(a, 'waitMs'));
}

function stripFakeWaits(shot) {
  const actions = shot.actions || [];
  const text = `${shot.caption || ''} ${shot.insertAfterText || ''}`;
  const kept = withoutWaits(actions);
  const cosmetic = actions.length > 0 && kept.every((a) => a.scrollTo || a.waitFor);
  if (SUCCESS_ONLY.test(text) && (kept.length === 0 || cosmetic)) {
    const { actions: _ignored, ...rest } = shot;
    return {
      ...rest,
      captureMode: 'blocked',
      blockedCause:
        'El aviso de éxito solo aparece después de crear o modificar un registro. No se ejecuta esa escritura.',
    };
  }
  if (kept.length === actions.length) return shot;
  const next = { ...shot };
  if (kept.length) next.actions = kept;
  else delete next.actions;
  return next;
}

function fixSelectors(shot) {
  if (!shot.actions?.length) return shot;
  let focusSelector = shot.focusSelector || null;
  let captureMode = shot.captureMode || null;
  const actions = [];
  for (const action of normalizeActions(shot.actions).actions) {
    if (!action.click) {
      actions.push(action);
      continue;
    }
    if (clickIsMutating(action.click)) {
      focusSelector = focusSelector || action.click;
      captureMode = captureMode || 'preview';
      continue;
    }
    actions.push(action);
  }
  const next = { ...shot };
  if (actions.length) next.actions = actions;
  else delete next.actions;
  if (focusSelector) next.focusSelector = focusSelector;
  if (captureMode) next.captureMode = captureMode;
  return next;
}

function relocateMovedDocs(manifest, docs) {
  const byBase = new Map();
  for (const doc of docs) {
    const base = path.basename(doc.docPath);
    if (!byBase.has(base)) byBase.set(base, []);
    byBase.get(base).push(doc.docPath);
  }
  const notes = [];
  for (const doc of manifest.docs) {
    if (docs.some((d) => d.docPath === doc.docPath)) continue;
    const hits = byBase.get(path.basename(doc.docPath)) || [];
    if (hits.length === 1) {
      notes.push({ slug: doc.slug, from: doc.docPath, to: hits[0] });
      doc.docPath = hits[0];
      const section = hits[0].replace(/^docs\//, '').split('/')[0];
      if (section) doc.section = section;
    }
  }
  return notes;
}

function refInContent(content, docEntry, shot) {
  if (shot.imageRef && content.includes(shot.imageRef)) return shot.imageRef;
  const base = docEntry.imageSlug || docEntry.slug;
  const re = new RegExp(`/img/[^)\\s]*${base}-${shot.stepNumber}\\.[a-zA-Z0-9]+`);
  const m = content.match(re);
  return m ? m[0] : null;
}

function refreshAnchors(docEntry, content) {
  const notes = [];
  const lines = content.split('\n').map((l) => l.trim());
  for (const shot of docEntry.shots) {
    const ref = refInContent(content, docEntry, shot);
    if (!ref) continue;
    if (!shot.imageRef && ref !== shotImageRef(docEntry, shot, 'png')) shot.imageRef = ref;
    const anchor = lineBeforeRef(content, ref);
    if (!anchor) continue;
    const count = lines.filter((l) => l === anchor).length;
    if (count !== 1) continue;
    if (shot.insertAfterText !== anchor) {
      notes.push({ slug: docEntry.slug, step: shot.stepNumber });
      shot.insertAfterText = anchor;
    }
  }
  return notes;
}

function ensureReferencedShots(docEntry, content, routes, existingRefs) {
  const added = [];
  const refs = parseAllImageRefs(content).filter((ref) => !existingRefs?.has(ref.imgRef));
  if (!refs.length) return added;
  const have = new Set(docEntry.shots.map((s) => shotImageRef(docEntry, s, 'png')));
  // también el jpg declarado
  for (const shot of docEntry.shots) {
    if (shot.imageRef) have.add(shot.imageRef);
  }
  let nextStep = docEntry.shots.reduce((n, s) => Math.max(n, s.stepNumber || 0), 0);
  for (const ref of refs) {
    if (have.has(ref.imgRef)) continue;
    const numberedDefault = ref.numbered
      ? `/img/${docEntry.section}/${docEntry.imageSlug || docEntry.slug}-${ref.stepNumber}.${ref.ext}`
      : null;
    const imageRef = numberedDefault === ref.imgRef ? undefined : ref.imgRef;
    const stepNumber = ref.stepNumber && !docEntry.shots.some((s) => s.stepNumber === ref.stepNumber)
      ? ref.stepNumber
      : ++nextStep;
    const suggested = suggestZauruPath(content, ref.index, routes);
    const anchor = lineBeforeRef(content, ref.imgRef) || '';
    const anchorCount = anchor ? content.split('\n').filter((l) => l.trim() === anchor).length : 0;
    const shot = {
      stepNumber,
      caption: (ref.caption || '').trim() || `Pantalla ${stepNumber}`,
      zauruPath: suggested,
      ...(imageRef ? { imageRef } : {}),
      ...(normalizeId(suggested).includes('/:id') ? { resolveId: true } : {}),
      waitForSelector: ['table', 'form', '.dataTables_wrapper', 'main', '#content'],
      insertAfterText: anchorCount === 1 ? anchor : '',
    };
    if (!suggested) {
      shot.captureMode = 'blocked';
      shot.blockedCause = 'No hay una ruta de consulta inequívoca junto a la referencia. No se adivinó una pantalla.';
      shot.zauruPath = shot.zauruPath || '';
    }
    docEntry.shots.push(shot);
    have.add(ref.imgRef);
    added.push(ref.imgRef);
  }
  docEntry.shots.sort((a, b) => a.stepNumber - b.stepNumber);
  return added;
}

/**
 * Correcciones deterministas de un documento (muta `docEntry`): selectores,
 * rutas que escriben, esperas cosméticas, anclas y destinos repetidos.
 * Sin `content` solo corrige los shots.
 */
export function repairDocEntry(docEntry, { content = null, mutatingNames } = {}) {
  const text = content == null ? null : String(content);
  const referenced = (shot) => text != null && text.includes(shotImageRef(docEntry, shot));
  const originalShots = structuredClone(docEntry.shots);
  let shots = docEntry.shots.map((shot) => fixSelectors(applyOverride(shot, docEntry.slug)));
  if (text != null) {
    shots = shots.filter((s) => String(s.zauruPath || '').trim() || s.captureMode === 'blocked' || referenced(s));
  }
  shots = shots.map((shot) => stripFakeWaits(blockMissingPath(shot)));
  shots = shots.map((shot) => previewMutating(shot, mutatingNames));
  docEntry.shots = blockCosmeticDuplicates(originalShots, shots);
  focusReportLink(docEntry);
  if (text == null) return { anchors: [], duplicates: [] };
  for (const shot of docEntry.shots) shot.insertAfterText = matchAnchor(text, shot.insertAfterText);
  const anchors = refreshAnchors(docEntry, text);
  const duplicates = resolveDuplicateDestinations(docEntry, text);
  renumberProposals(docEntry, text);
  return { anchors, duplicates };
}

/**
 * Devuelve un manifiesto nuevo y notas de lo corregido.
 * `mutatingNames` viene del escaneo de baculo más la lista fija.
 */
export function repairManifest(manifest, { docs, routes, mutatingNames, format = 'png', existingRefs = new Set() }) {
  const copy = structuredClone(manifest);
  const moved = relocateMovedDocs(copy, docs);
  const anchors = [];
  const duplicates = [];
  const added = [];
  const byPath = new Map(docs.map((d) => [d.docPath, d]));
  for (const doc of copy.docs) {
    const notes = repairDocEntry(doc, { content: byPath.get(doc.docPath)?.content ?? null, mutatingNames });
    anchors.push(...notes.anchors);
    duplicates.push(...notes.duplicates);
  }
  for (const source of docs) {
    const missingRefs = parseAllImageRefs(source.content).filter((ref) => !existingRefs.has(ref.imgRef));
    if (!missingRefs.length) continue;
    let entry = copy.docs.find((d) => d.docPath === source.docPath);
    if (!entry) {
      const slug = path.basename(source.docPath, '.md');
      entry = {
        section: source.docPath.replace(/^docs\//, '').split('/')[0],
        slug,
        docPath: source.docPath,
        existingImageCount: missingRefs.length,
        shots: [],
        source: 'inventory',
      };
      copy.docs.push(entry);
    }
    added.push(...ensureReferencedShots(entry, source.content, routes, existingRefs));
  }
  for (const doc of copy.docs) {
    doc.shots = doc.shots.map((shot) => previewMutating(shot, mutatingNames));
    const content = byPath.get(doc.docPath)?.content;
    if (content) duplicates.push(...resolveDuplicateDestinations(doc, content));
  }
  copy.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));
  return { manifest: copy, notes: { moved, anchors, added, duplicates } };
}
