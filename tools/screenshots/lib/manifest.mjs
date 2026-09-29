/**
 * manifest.mjs — Lectura/escritura y validación del manifiesto de
 * screenshots. Reglas que aplica 4-validate-manifest.mjs:
 *
 *   E1  docPath existe en el repo
 *   E2  zauruPath no vacío
 *   E3  zauruPath existe en routes.json (match por patrón)
 *   E4  resolveId solo en rutas con segmento numérico o :id
 *   E5  sin duplicados (zauruPath + actions) dentro de un doc
 *       (dos shots iguales solo si sus actions los diferencian)
 *   E6  stepNumber único por doc
 *   W1  insertAfterText no aparece en el .md
 *   W2  caption vacía
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT } from './env.mjs';
import { candidateMatches } from './routes.mjs';

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
export function validateManifest(manifest, { routes, docsDir = path.join(REPO_ROOT, 'docs') } = {}) {
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

    const seenKeys = new Map(); // (zauruPath+actions) → stepNumber
    const seenSteps = new Set();

    for (const shot of doc.shots) {
      const n = shot.stepNumber;

      if (seenSteps.has(n)) {
        errors.push({ doc: doc.slug, shot: n, rule: 'E6', message: `stepNumber ${n} duplicado en el doc` });
      }
      seenSteps.add(n);

      // E2: ruta no vacía
      if (!shot.zauruPath || !String(shot.zauruPath).trim()) {
        errors.push({ doc: doc.slug, shot: n, rule: 'E2', message: 'zauruPath vacío' });
        continue;
      }

      // E3: la ruta existe en el ERP real
      const route = routes ? candidateMatches(patterns, shot.zauruPath) : null;
      if (routes && !route) {
        errors.push({
          doc: doc.slug,
          shot: n,
          rule: 'E3',
          message: `la ruta ${shot.zauruPath} no existe en routes.json (rutas reales de baculo)`,
        });
      }

      // E4: resolveId exige segmento de id
      if (shot.resolveId) {
        const hasIdSeg = /(^|\/)(\d+|:[a-z_]+(\/|$)|:id)/.test(shot.zauruPath) || /:\w+_id/.test(shot.zauruPath) || /(^|\/):?id(\/|$)|\/\d+(\/|$)/.test(shot.zauruPath);
        const segs = shot.zauruPath.split('/');
        const idSeg = segs.some((s) => /^\d+$/.test(s) || s.startsWith(':'));
        if (!idSeg) {
          errors.push({ doc: doc.slug, shot: n, rule: 'E4', message: `resolveId en ${shot.zauruPath} que no tiene segmento de id` });
        }
      }

      // E5: duplicado dentro del doc
      const key = `${shot.zauruPath}::${actionsSignature(shot.actions)}`;
      const prev = seenKeys.get(key);
      if (prev !== undefined) {
        errors.push({
          doc: doc.slug,
          shot: n,
          rule: 'E5',
          message: `misma URL ${shot.zauruPath} y actions que el shot ${prev} — una de las dos debe diferir (pestaña, filtro, modal vía actions)`,
        });
      } else {
        seenKeys.set(key, n);
      }

      // W1: insertAfterText debe existir en el .md
      const needle = (shot.insertAfterText || '').trim();
      if (mdContent && !needle) {
        warnings.push({ doc: doc.slug, shot: n, rule: 'W1', message: 'insertAfterText vacío — la imagen no se insertará en el .md' });
      } else if (mdContent && needle) {
        const found = mdContent.split('\n').some((l) => l.trim() === needle) || mdContent.includes(needle);
        if (!found) {
          warnings.push({ doc: doc.slug, shot: n, rule: 'W1', message: `insertAfterText no está en el .md: "${needle.slice(0, 70)}…"` });
        }
      }

      // W2: caption
      if (!(shot.caption || '').trim()) {
        warnings.push({ doc: doc.slug, shot: n, rule: 'W2', message: 'caption vacío (texto alt)' });
      }
    }
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
