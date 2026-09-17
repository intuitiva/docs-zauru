#!/usr/bin/env node
/**
 * insert-image-refs.mjs — Inserta las referencias ![caption](/img/...) en los
 * .md, justo después de la línea insertAfterText de cada shot del manifiesto.
 * También reescribe refs existentes con otra extensión (p.ej. .jpg) a .png.
 *
 * Uso:
 *   node insert-image-refs.mjs [--dry-run] [--docs slug1,slug2]
 *
 *   --dry-run  Muestra qué insertaría/reescribiría, sin tocar los archivos.
 *   --docs     Solo procesa los slugs indicados.
 *
 * Es idempotente: si la referencia PNG ya existe, no inserta otra.
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT } from './lib/env.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const docsFilter = (() => {
  const i = args.indexOf('--docs');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

const manifest = JSON.parse(fs.readFileSync(path.join(TOOL_DIR, 'manifest.json'), 'utf8'));
const format = manifest.imageFormat || 'png';

let totalInserted = 0;
let totalSkipped = 0;
let totalRewritten = 0;
const problems = [];

for (const doc of manifest.docs) {
  if (docsFilter && !docsFilter.includes(doc.slug)) continue;

  const mdPath = path.join(REPO_ROOT, doc.docPath);
  if (!fs.existsSync(mdPath)) {
    problems.push(`${doc.slug}: no existe ${doc.docPath}`);
    continue;
  }

  let content = fs.readFileSync(mdPath, 'utf8');
  let rewrittenHere = 0;

  // Reescribe /img/section/slug-N.<otraExt> → .<format> (png)
  for (const shot of doc.shots) {
    const pngRef = `/img/${doc.section}/${doc.slug}-${shot.stepNumber}.${format}`;
    const altExtRe = new RegExp(
      `(!\\[[^\\]]*\\]\\()(/img/${escapeRegExp(doc.section)}/${escapeRegExp(doc.slug)}-${shot.stepNumber}\\.)(?!${escapeRegExp(format)})[a-zA-Z0-9]+(\\))`,
      'g'
    );
    const next = content.replace(altExtRe, `$1${pngRef}$3`);
    if (next !== content) {
      rewrittenHere++;
      content = next;
    }
  }

  const lines = content.split('\n');
  const insertions = [];

  for (const shot of doc.shots) {
    const imgRef = `/img/${doc.section}/${doc.slug}-${shot.stepNumber}.${format}`;
    const imgLine = `![${shot.caption}](${imgRef})`;

    if (content.includes(imgRef)) {
      totalSkipped++;
      continue; // ya existe (tras posible rewrite)
    }

    const needle = (shot.insertAfterText || '').trim();
    if (!needle) {
      problems.push(`${doc.slug}-${shot.stepNumber}: insertAfterText vacío en el manifiesto`);
      continue;
    }

    let idx = lines.findIndex((l) => l.trim() === needle);
    if (idx === -1) idx = lines.findIndex((l) => l.includes(needle));
    if (idx === -1) {
      problems.push(
        `${doc.slug}-${shot.stepNumber}: no se encontró insertAfterText en ${doc.docPath}\n    → "${needle.slice(0, 80)}…"`
      );
      continue;
    }

    const imgDiskPath = path.join(
      REPO_ROOT,
      'static',
      'img',
      doc.section,
      `${doc.slug}-${shot.stepNumber}.${format}`
    );
    if (!fs.existsSync(imgDiskPath)) {
      if (dryRun) {
        console.log(`  ⚠ ${doc.slug}-${shot.stepNumber}: aún no existe ${path.relative(REPO_ROOT, imgDiskPath)}`);
      } else {
        problems.push(
          `${doc.slug}-${shot.stepNumber}: falta el archivo ${path.relative(REPO_ROOT, imgDiskPath)} (corre run-screenshots.mjs primero)`
        );
        continue;
      }
    }

    insertions.push({ idx, imgLine, stepNumber: shot.stepNumber });
  }

  if (rewrittenHere) {
    totalRewritten += rewrittenHere;
    if (dryRun) {
      console.log(`  ${doc.docPath}: reescribiría ${rewrittenHere} ref(s) → .${format}`);
    }
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

  if (!dryRun && (insertions.length || rewrittenHere)) {
    fs.writeFileSync(mdPath, lines.join('\n'));
    const parts = [];
    if (insertions.length) parts.push(`${insertions.length} insertada(s)`);
    if (rewrittenHere) parts.push(`${rewrittenHere} reescrita(s)→.${format}`);
    console.log(`✓ ${doc.docPath} — ${parts.join(', ')}`);
  }
}

if (dryRun) {
  console.log(
    `\n[dry-run] Se insertarían ${totalInserted}, reescribirían ${totalRewritten}, ya existentes ${totalSkipped}.`
  );
} else {
  console.log(
    `\nInsertadas ${totalInserted}, reescritas ${totalRewritten}, ya existentes ${totalSkipped}.`
  );
}

if (problems.length) {
  console.log('\nProblemas:');
  for (const p of problems) console.log(`  ✗ ${p}`);
  process.exitCode = 1;
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
