#!/usr/bin/env node
/**
 * insert-image-refs.mjs — Inserta las referencias ![caption](/img/...) en los
 * .md, justo después de la línea insertAfterText de cada shot del manifiesto.
 * Solo inserta o cambia una referencia cuando la imagen está verificada
 * (revisión visual aceptada) y insertAfterText aparece una sola vez.
 *
 * Uso:
 *   node 6-insert-image-refs.mjs [--dry-run] [--docs slug1,slug2]
 *
 *   --dry-run  Muestra qué insertaría/reescribiría, sin tocar los archivos.
 *   --docs     Solo procesa los slugs indicados.
 *
 * Es idempotente: si la referencia PNG ya existe, no inserta otra.
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT } from './lib/env.mjs';
import { planInsertion, isVerifiedResult } from './lib/insert.mjs';
import { shotImageRef, refToDisk } from './lib/images.mjs';
import { readResults } from './lib/results.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const docsFilter = (() => {
  const i = args.indexOf('--docs');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

const manifest = JSON.parse(fs.readFileSync(path.join(TOOL_DIR, 'manifest.json'), 'utf8'));
const format = manifest.imageFormat || 'png';
const results = readResults(path.join(TOOL_DIR, 'results.json'));

let totalInserted = 0;
let totalSkipped = 0;
const problems = [];

for (const doc of manifest.docs) {
  if (docsFilter && !docsFilter.includes(doc.slug)) continue;

  const mdPath = path.join(REPO_ROOT, doc.docPath);
  if (!fs.existsSync(mdPath)) {
    problems.push(`${doc.slug}: no existe ${doc.docPath}`);
    continue;
  }

  let content = fs.readFileSync(mdPath, 'utf8');
  const lines = content.split('\n');
  const insertions = [];

  for (const shot of doc.shots) {
    if (shot.captureMode === 'blocked') {
      totalSkipped++;
      continue;
    }
    const imageRef = shotImageRef(doc, shot, format);
    const verified = isVerifiedResult(results.images[imageRef]) && fs.existsSync(refToDisk(REPO_ROOT, imageRef));
    const decision = planInsertion({
      lines,
      needle: shot.insertAfterText,
      imageRef,
      verified,
    });
    if (decision.action !== 'insert') {
      totalSkipped++;
      if (decision.reason !== 'ya existe' && decision.reason !== 'sin imagen verificada') {
        problems.push(`${doc.slug}-${shot.stepNumber}: ${decision.reason}`);
      }
      continue;
    }
    insertions.push({ idx: decision.index, imgLine: `![${shot.caption}](${imageRef})`, stepNumber: shot.stepNumber });
  }

  if (insertions.length) {
    insertions.sort((a, b) => b.idx - a.idx);
    for (const { idx, imgLine } of insertions) {
      const nextIsBlank = lines[idx + 1] !== undefined && lines[idx + 1].trim() === '';
      const block = nextIsBlank ? ['', imgLine] : ['', imgLine, ''];
      lines.splice(idx + 1, 0, ...block);
      totalInserted++;
      if (dryRun) {
        console.log(`  ${doc.docPath}:${idx + 1}  →  ${imgLine.slice(0, 90)}`);
      }
    }
  }

  if (!dryRun && insertions.length) {
    fs.writeFileSync(mdPath, lines.join('\n'));
    console.log(`✓ ${doc.docPath} — ${insertions.length} insertada(s)`);
  }
}

if (dryRun) {
  console.log(`\n[dry-run] Se insertarían ${totalInserted}, ya existentes u omitidas ${totalSkipped}.`);
} else {
  console.log(`\nInsertadas ${totalInserted}, omitidas ${totalSkipped}.`);
}

if (problems.length) {
  console.log('\nProblemas:');
  for (const p of problems) console.log(`  ✗ ${p}`);
  process.exitCode = 1;
}
