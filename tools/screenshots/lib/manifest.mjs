/**
 * manifest.mjs — Lectura/escritura y validación del manifiesto de
 * screenshots. Reglas que aplica 4-validate-manifest.mjs:
 *
 *   E1  docPath existe en el repo
 *   E2  zauruPath no vacío
 *   E3  zauruPath existe en routes.json (match por patrón)
 *   E4  resolveId solo en rutas con segmento numérico o :id
 *   E5  sin duplicados (zauruPath + actions reales) dentro de un doc.
 *       waitMs no diferencia dos pasos.
 *   E6  stepNumber único por doc
 *   E7  ruta GET que modifica registros, sin captureMode preview
 *   E8  mismo destino con instrucciones incompatibles
 *   E9  selector de click/scrollTo/waitFor inutilizable (vacío, no string,
 *       :contains(, paréntesis sin cerrar o una etiqueta suelta como "button")
 *   W1  insertAfterText no aparece exactamente una vez en el .md (solo
 *       shots capturables cuya imagen el .md todavía no referencia)
 *   W2  caption vacía
 *   W3  captureMode blocked sin blockedCause
 *   W4  la misma ruta de reporte en dos documentos distintos
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT } from './env.mjs';
import { candidateMatches } from './routes.mjs';
import { destinationKey, findIncompatibleSharedDestinations, findSharedReportRoutes } from './destinations.mjs';
import { isMutatingGetPath, MUTATING_GET_SEGMENTS } from './safety.mjs';
import { SELECTOR_ACTIONS, usableSelector } from './actions.mjs';
import { shotImageRef } from './images.mjs';

export const MAX_SHOTS_PER_DOC = 8;

export function manifestPath() {
  return path.join(TOOL_DIR, 'manifest.json');
}

export function readManifest() {
  return JSON.parse(fs.readFileSync(manifestPath(), 'utf8'));
}

export function writeManifest(manifest) {
  manifest.generatedAt = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(manifestPath(), JSON.stringify(manifest, null, 2) + '\n');
}

export function readRoutes() {
  const p = path.join(TOOL_DIR, 'routes.json');
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export function readNav() {
  const p = path.join(TOOL_DIR, 'nav.json');
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/** Firma comparable de las actions de un shot (para detección de duplicados). */
export function actionsSignature(actions) {
  return JSON.stringify(actions || []);
}

/**
 * Valida el manifiesto contra routes.json y el sistema de archivos.
 * Devuelve { errors: [{doc, shot, rule, message}], warnings: [...], stats }.
 */
export function validateManifest(manifest, { routes, docsDir = path.join(REPO_ROOT, 'docs'), mutatingNames = MUTATING_GET_SEGMENTS } = {}) {
  const errors = [];
  const warnings = [];
  const patterns = routes?.routes || [];

  for (const doc of manifest.docs) {
    const mdPath = path.join(REPO_ROOT, doc.docPath);
    let mdContent = null;
    if (!fs.existsSync(mdPath)) {
      errors.push({ doc: doc.slug, shot: null, rule: 'E1', message: `no existe ${doc.docPath}` });
    } else {
      mdContent = fs.readFileSync(mdPath, 'utf8');
    }

    const seenKeys = new Map();
    const seenSteps = new Set();

    for (const shot of doc.shots) {
      const n = shot.stepNumber;
      const blocked = shot.captureMode === 'blocked';

      if (seenSteps.has(n)) {
        errors.push({ doc: doc.slug, shot: n, rule: 'E6', message: `stepNumber ${n} duplicado en el doc` });
      }
      seenSteps.add(n);

      if (blocked) {
        if (!(shot.blockedCause || '').trim()) {
          warnings.push({ doc: doc.slug, shot: n, rule: 'W3', message: 'captureMode blocked sin blockedCause' });
        }
        continue;
      }

      if (!shot.zauruPath || !String(shot.zauruPath).trim()) {
        errors.push({ doc: doc.slug, shot: n, rule: 'E2', message: 'zauruPath vacío' });
        continue;
      }

      const route = routes ? candidateMatches(patterns, shot.zauruPath) : null;
      if (routes && !route) {
        errors.push({
          doc: doc.slug,
          shot: n,
          rule: 'E3',
          message: `la ruta ${shot.zauruPath} no existe en routes.json (rutas reales de baculo)`,
        });
      }

      if (isMutatingGetPath(shot.zauruPath, mutatingNames) && shot.captureMode !== 'preview') {
        errors.push({
          doc: doc.slug,
          shot: n,
          rule: 'E7',
          message: `${shot.zauruPath} modifica registros. Usa captureMode preview para fotografiar el botón sin ejecutarlo.`,
        });
      }

      if (shot.resolveId) {
        const segs = shot.zauruPath.split('/');
        const idSeg = segs.some((s) => /^\d+$/.test(s) || s.startsWith(':'));
        if (!idSeg) {
          errors.push({ doc: doc.slug, shot: n, rule: 'E4', message: `resolveId en ${shot.zauruPath} que no tiene segmento de id` });
        }
      }

      const key = destinationKey(shot);
      const prev = seenKeys.get(key);
      if (prev !== undefined) {
        errors.push({
          doc: doc.slug,
          shot: n,
          rule: 'E5',
          message: `mismo destino que el shot ${prev} (waitMs no cuenta como diferencia) — hace falta otra pantalla, un focusSelector o una acción real`,
        });
      } else {
        seenKeys.set(key, n);
      }

      for (const action of shot.actions || []) {
        const [k, v] = Object.entries(action || {})[0] || [];
        if (SELECTOR_ACTIONS.has(k) && !usableSelector(v)) {
          errors.push({ doc: doc.slug, shot: n, rule: 'E9', message: `selector inválido en ${k}: ${JSON.stringify(v)}` });
        }
      }

      const needle = (shot.insertAfterText || '').trim();
      const pendingInsert =
        shot.captureMode !== 'blocked' && mdContent && !mdContent.includes(shotImageRef(doc, shot, manifest.imageFormat || 'png'));
      if (pendingInsert && !needle) {
        warnings.push({ doc: doc.slug, shot: n, rule: 'W1', message: 'insertAfterText vacío — la imagen no se insertará en el .md' });
      } else if (pendingInsert) {
        const hits = mdContent.split('\n').filter((l) => l.trim() === needle).length;
        if (hits === 0) {
          warnings.push({ doc: doc.slug, shot: n, rule: 'W1', message: `insertAfterText no está en el .md: "${needle.slice(0, 70)}…"` });
        } else if (hits > 1) {
          warnings.push({ doc: doc.slug, shot: n, rule: 'W1', message: `insertAfterText aparece ${hits} veces; el punto de inserción es ambiguo` });
        }
      }

      if (!(shot.caption || '').trim()) {
        warnings.push({ doc: doc.slug, shot: n, rule: 'W2', message: 'caption vacío (texto alt)' });
      }
    }
  }

  for (const conflict of findIncompatibleSharedDestinations(manifest.docs)) {
    errors.push({
      doc: conflict.a.doc,
      shot: conflict.a.step,
      rule: 'E8',
      message: `mismo destino que ${conflict.b.doc} shot ${conflict.b.step}, con instrucciones incompatibles ("${conflict.a.caption}" / "${conflict.b.caption}")`,
    });
  }

  for (const shared of findSharedReportRoutes(manifest.docs)) {
    warnings.push({
      doc: shared.doc,
      shot: shared.step,
      rule: 'W4',
      message: `el reporte ${shared.path} también lo usa ${shared.other}; ¿documentan el mismo reporte?`,
    });
  }

  return {
    errors,
    warnings,
    stats: {
      docs: manifest.docs.length,
      shots: manifest.docs.reduce((n, d) => n + d.shots.length, 0),
      docsAffected: new Set(errors.map((e) => e.doc)).size,
    },
  };
}
