#!/usr/bin/env node
/**
 * cleanup-orphan-images.mjs — Borra PNGs de static/img que ya nadie usa.
 *
 * Reglas conservadoras:
 *   - Solo considera archivos de docs presentes en manifest.json.
 *   - Un archivo es candidato si su stepNumber no está en los shots del
 *     manifiesto.
 *   - Solo se borra si NINGÚN .md del repo lo referencia (escaneo global).
 *   - Nunca toca archivos de docs fuera del manifiesto.
 *
 * Uso:
 *   node cleanup-orphan-images.mjs --dry-run   # solo lista
 *   node cleanup-orphan-images.mjs             # borra (git rm)
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { REPO_ROOT } from './lib/env.mjs';
import { readManifest } from './lib/manifest.mjs';

const dryRun = process.argv.includes('--dry-run');
const dryRunFlag = () => dryRun;
const imgDir = path.join(REPO_ROOT, 'static', 'img');

// Todas las refs /img/... de todos los .md del repo
const allRefs = new Set();
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) {
      const c = fs.readFileSync(p, 'utf8');
      for (const m of c.matchAll(/\/img\/[a-z0-9-]+\/[a-z0-9-]+-\d+\.[a-z]+/g)) {
        allRefs.add(m[0].split('/').slice(-2).join('/')); // "sección/archivo.ext"
      }
    }
  }
})(path.join(REPO_ROOT, 'docs'));

const m = readManifest();
const candidates = [];
for (const doc of m.docs) {
  const dir = path.join(REPO_ROOT, 'static/img', doc.section);
  if (!fs.existsSync(dir)) continue;
  const steps = new Set(doc.shots.map((s) => s.stepNumber));
  const esc = doc.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const f of fs.readdirSync(dir)) {
    const fm = f.match(new RegExp(`^${esc}-(\\d+)\\.png$`));
    if (fm && !steps.has(Number(fm[1]))) candidates.push(path.join(dir, f));
  }
}

let deleted = 0;
for (const f of candidates) {
  const rel = path.relative(path.join(REPO_ROOT, 'static/img'), f); // "sección/archivo.ext"
  if (allRefs.has(rel)) continue; // referenciado por algún .md → conservar
  deleted++;
  if (dryRun) {
    console.log(`[dry-run] borraría ${path.relative(REPO_ROOT, f)}`);
  } else {
    try {
      execFileSync('git', ['-C', REPO_ROOT, 'rm', '-q', f], { stdio: 'pipe' });
    } catch {
      fs.unlinkSync(f); // no estaba en git
    }
    console.log(`✓ borrado ${path.relative(REPO_ROOT, f)}`);
  }
}
console.log(`\n${deleted} archivo(s) ${dryRun ? 'se borrarían' : 'borrados'}.`);
