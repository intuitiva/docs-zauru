# Screenshot Gaps Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand `tools/screenshots` so `generate-manifest.mjs --gaps` covers broken image refs (infer) and docs with no images (LLM + API skip), then capture PNG and rewrite `.jpg` refs.

**Architecture:** Extract gap helpers into `lib/gaps.mjs`. Extend `generate-manifest.mjs` with `--gaps` / `--dry-run`. Minimal runner + insert-refs changes. Keep pilot docs unless force-recaptured.

**Tech Stack:** Node 18+ ESM, Playwright (existing), OpenRouter (existing).

**Spec:** `docs/superpowers/specs/2026-07-18-screenshot-gaps-design.md`

## Global Constraints

- Always output/capture PNG (`imageFormat: "png"`).
- Never invent `zauruPath` when unresolved — use `""` and log.
- Upsert manifest by `docPath`; do not wipe unrelated entries.
- Skip API/GraphQL/curl-heavy docs before LLM.
- Leave docs alone when all referenced image files exist on disk.

## File map

| File | Responsibility |
|------|----------------|
| `tools/screenshots/lib/gaps.mjs` | Detect gaps, infer shots, score nav paths, API skip heuristic |
| `tools/screenshots/generate-manifest.mjs` | `--gaps` orchestration + LLM fallback for unresolved Tier A |
| `tools/screenshots/run-screenshots.mjs` | Skip empty `zauruPath` |
| `tools/screenshots/insert-image-refs.mjs` | Rewrite non-png refs → `.png`; keep insert behavior |
| `tools/screenshots/README.md` | Document `--gaps` workflow |
| `tools/screenshots/package.json` | Optional `gaps` script |

---

### Task 1: `lib/gaps.mjs` — detection, inference, path scoring, API skip

**Files:**
- Create: `tools/screenshots/lib/gaps.mjs`
- Test: run small node one-liners / inline asserts against real repo docs

**Interfaces:**
- Produces:
  - `normalizeToken(s: string): string`
  - `isApiCodeDoc(mdPath: string, content: string): boolean`
  - `findBrokenRefDocs(docsDir: string, repoRoot: string): Array<{mdPath, section, slug, docPath, brokenRefs}>`
  - `findNoImageDocs(docsDir: string): string[]` (absolute paths; excludes index.md and API skips when filtered by caller)
  - `inferShotsFromBrokenRefs(content: string, section: string, slug: string): ShotDraft[]`
  - `scoreNavPath(navEntry, {section, slug, headings}): number`
  - `resolveZauruPath({section, slug, content, nav}): {path: string, resolveId?: boolean, method: 'nav'|'api'|'none'}`
  - `DEFAULT_WAIT_SELECTORS: string[]`

- [ ] **Step 1: Create `lib/gaps.mjs` with helpers**

Implement:

```js
// tools/screenshots/lib/gaps.mjs
import fs from 'node:fs';
import path from 'node:path';

export const DEFAULT_WAIT_SELECTORS = [
  'table',
  'form',
  '.dataTables_wrapper',
  'main',
  '#content',
];

export function normalizeToken(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const GENERIC_CAPTION = /^(imagen\s*\d*|image\s*\d*|img\s*\d*|foto\s*\d*|)$/i;

export function isApiCodeDoc(mdPath, content) {
  const base = path.basename(mdPath, '.md');
  if (/api|graphql|curl/i.test(base)) return true;
  const lines = content.split('\n');
  const nonEmpty = lines.filter((l) => l.trim());
  if (!nonEmpty.length) return true;
  let inFence = false;
  let codeLines = 0;
  let uiHints = 0;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) codeLines++;
    if (/\b(clic|hacer clic|formulario|listado|pantalla|men[uú]|bot[oó]n)\b/i.test(line)) uiHints++;
  }
  const codeRatio = codeLines / Math.max(nonEmpty.length, 1);
  return codeRatio >= 0.45 && uiHints < 2;
}

const IMG_RE = /!\[([^\]]*)\]\((\/img\/([^/]+)\/([^/]+)-(\d+)\.([a-zA-Z0-9]+))\)/g;

export function parseImageRefs(content) {
  const out = [];
  for (const m of content.matchAll(IMG_RE)) {
    out.push({
      caption: m[1],
      imgRef: m[2],
      section: m[3],
      slug: m[4],
      stepNumber: Number(m[5]),
      ext: m[6],
      fullMatch: m[0],
      index: m.index,
    });
  }
  return out;
}

export function findBrokenRefDocs(docsDir, repoRoot) {
  const results = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        const content = fs.readFileSync(p, 'utf8');
        const refs = parseImageRefs(content);
        const broken = refs.filter((r) => {
          const disk = path.join(repoRoot, 'static', r.imgRef.replace(/^\//, ''));
          // also try without leading img/ mishaps — imgRef is /img/...
          return !fs.existsSync(path.join(repoRoot, 'static', 'img', r.section, `${r.slug}-${r.stepNumber}.${r.ext}`));
        });
        if (broken.length) {
          results.push({
            mdPath: p,
            section: path.basename(path.dirname(p)),
            slug: path.basename(p, '.md'),
            docPath: path.relative(repoRoot, p),
            content,
            brokenRefs: broken,
          });
        }
      }
    }
  })(docsDir);
  return results.sort((a, b) => a.docPath.localeCompare(b.docPath));
}

export function findNoImageDocs(docsDir) {
  const out = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
        const content = fs.readFileSync(p, 'utf8');
        if (!content.includes('![')) out.push(p);
      }
    }
  })(docsDir);
  return out.sort();
}

function lineAtIndex(content, index) {
  const before = content.slice(0, index);
  return before.split('\n').length - 1;
}

export function inferShotsFromBrokenRefs(content, section, slug) {
  const lines = content.split('\n');
  const refs = parseImageRefs(content).filter((r) => r.section === section && r.slug === slug);
  // caller already filtered broken; pass only broken refs via content scan in generate-manifest
  const shots = [];
  for (const r of refs) {
    const lineIdx = lineAtIndex(content, r.index);
    let insertAfterText = '';
    for (let i = lineIdx - 1; i >= 0; i--) {
      const t = lines[i].trim();
      if (t && !t.startsWith('![') && !t.startsWith('#')) {
        insertAfterText = t;
        break;
      }
      if (t.startsWith('#')) {
        insertAfterText = t;
        break;
      }
    }
    let caption = (r.caption || '').trim();
    if (GENERIC_CAPTION.test(caption)) {
      caption = insertAfterText.replace(/^#+\s*/, '').slice(0, 120) || `Pantalla ${r.stepNumber}`;
    }
    shots.push({
      stepNumber: r.stepNumber,
      caption,
      zauruPath: '',
      waitForSelector: [...DEFAULT_WAIT_SELECTORS],
      insertAfterText,
    });
  }
  return shots.sort((a, b) => a.stepNumber - b.stepNumber);
}

export function extractHeadings(content) {
  return [...content.matchAll(/^#+\s+(.+)$/gm)].map((m) => m[1].trim());
}

export function extractApiPaths(content) {
  const paths = [];
  for (const m of content.matchAll(/`(\/[a-z0-9_/-]+(?:\.json)?)`/gi)) {
    let p = m[1].replace(/\.json$/i, '');
    p = p.replace(/\/\d+$/, '');
    if (p.length > 1) paths.push(p);
  }
  return [...new Set(paths)];
}

export function scoreNavPath(navEntry, { section, slug, headings }) {
  const label = normalizeToken(navEntry.label);
  const npath = normalizeToken(navEntry.path.replace(/\//g, ' '));
  const slugTok = normalizeToken(slug.replace(/-/g, ' '));
  const sectionTok = normalizeToken(section.replace(/-/g, ' '));
  const headingTok = normalizeToken(headings.slice(0, 3).join(' '));
  let score = 0;
  const slugParts = slugTok.split(' ').filter((w) => w.length > 2);
  for (const w of slugParts) {
    if (label.includes(w)) score += 3;
    if (npath.includes(w)) score += 2;
  }
  for (const w of sectionTok.split(' ').filter((w) => w.length > 2)) {
    if (npath.includes(w) || label.includes(w)) score += 1;
  }
  for (const w of headingTok.split(' ').filter((w) => w.length > 3)) {
    if (label.includes(w)) score += 2;
  }
  return score;
}

export function resolveZauruPath({ section, slug, content, nav }) {
  const headings = extractHeadings(content);
  const apiPaths = extractApiPaths(content);

  if (Array.isArray(nav) && nav.length) {
    const scored = nav
      .map((entry) => ({ entry, score: scoreNavPath(entry, { section, slug, headings }) }))
      .sort((a, b) => b.score - a.score);
    const best = scored[0];
    const second = scored[1];
    if (best && best.score >= 5 && (!second || best.score >= second.score + 2)) {
      let p = best.entry.path;
      const resolveId = false;
      return { path: p, resolveId, method: 'nav' };
    }
  }

  if (apiPaths.length === 1) {
    return { path: apiPaths[0], resolveId: false, method: 'api' };
  }
  // Prefer api path that shares most tokens with slug
  if (apiPaths.length > 1) {
    const slugTok = normalizeToken(slug);
    const bestApi = apiPaths
      .map((p) => ({
        p,
        score: normalizeToken(p).split(' ').filter((w) => slugTok.includes(w) && w.length > 2).length,
      }))
      .sort((a, b) => b.score - a.score)[0];
    if (bestApi?.score > 0) return { path: bestApi.p, resolveId: false, method: 'api' };
  }

  return { path: '', resolveId: false, method: 'none' };
}

export function looksLikeDetailPath(zauruPath) {
  return /\/\d+\/?$/.test(zauruPath);
}
```

- [ ] **Step 2: Verify helpers against the repo**

```bash
cd tools/screenshots && node --input-type=module -e "
import { findBrokenRefDocs, findNoImageDocs, isApiCodeDoc, resolveZauruPath } from './lib/gaps.mjs';
import fs from 'fs'; import path from 'path';
import { REPO_ROOT } from './lib/env.mjs';
const docsDir = path.join(REPO_ROOT, 'docs');
const broken = findBrokenRefDocs(docsDir, REPO_ROOT);
const missing = findNoImageDocs(docsDir);
console.log('broken docs', broken.length);
console.log('no-image docs', missing.length);
const gql = missing.find(p => p.includes('graphql'));
if (gql) console.log('graphql skip', isApiCodeDoc(gql, fs.readFileSync(gql,'utf8')));
const nav = JSON.parse(fs.readFileSync('./nav.json','utf8'));
const sample = broken[0];
if (sample) console.log('sample resolve', sample.docPath, resolveZauruPath({section:sample.section, slug:sample.slug, content:sample.content, nav}));
"
```

Expected: broken docs ~40+, no-image ~30+, graphql skip `true`, sample resolve prints a method.

- [ ] **Step 3: Commit**

```bash
git add tools/screenshots/lib/gaps.mjs
git commit -m "Add screenshot gap detection and path resolution helpers"
```

---

### Task 2: Extend `generate-manifest.mjs` with `--gaps`

**Files:**
- Modify: `tools/screenshots/generate-manifest.mjs`
- Consumes: all exports from `lib/gaps.mjs`

- [ ] **Step 1: Wire `--gaps` and `--dry-run`**

In `collectDocs` / main:

1. If `--gaps`:
   - Load nav.json
   - Load or create manifest (`imageFormat: 'png'`)
   - **Tier A:** for each `findBrokenRefDocs` result:
     - `shots = inferShotsFromBrokenRefs` filtered to only broken stepNumbers
     - `resolved = resolveZauruPath(...)`
     - If `resolved.path`, set all shots' `zauruPath` (and `resolveId` if `looksLikeDetailPath` — usually only for detail steps; for list screenshots use the list path for all shots unless LLM later differentiates)
     - If no path → call new `callOpenRouterForPaths(meta, nav, shots)` that returns shots with zauruPath filled (or empty)
     - Upsert into manifest
   - **Tier B:** for each `findNoImageDocs` path:
     - Skip if already in broken-ref set (shouldn't overlap)
     - Skip if `isApiCodeDoc` → log skipped-as-API
     - Else existing `callOpenRouter` flow
   - Print summary counts
   - Unless `--dry-run`, write `manifest.json`

2. Keep `--docs` and `--missing` working; for `--missing` also apply `isApiCodeDoc` skip.

Add LLM helper prompt for path-only fill:

```
System: Dado shots ya inferidos (caption, stepNumber, insertAfterText), completa solo zauruPath (ruta real de Zauru sin .json) y resolveId. Usa nav.json. Responde JSON {"shots":[{"stepNumber":n,"zauruPath":"...","resolveId":bool}]}
```

- [ ] **Step 2: Dry-run verification**

```bash
cd tools/screenshots && node generate-manifest.mjs --gaps --dry-run
```

Expected: summary with Tier A / Tier B / skipped API; no write if dry-run (manifest mtime unchanged) OR dry-run still prints but does not write — prefer no write.

- [ ] **Step 3: Commit**

```bash
git add tools/screenshots/generate-manifest.mjs
git commit -m "Add --gaps mode to generate screenshot manifests"
```

---

### Task 3: Runner skip empty `zauruPath`

**Files:**
- Modify: `tools/screenshots/run-screenshots.mjs`

- [ ] **Step 1: Before navigating, if `!shot.zauruPath` push failure and continue**

```js
if (!shot.zauruPath || !String(shot.zauruPath).trim()) {
  failures.push({
    doc: doc.slug,
    shot: shot.stepNumber,
    url: '',
    error: 'zauruPath vacío en el manifiesto — revisa generate-manifest / nav.json',
  });
  console.log(`✗ ${relOut} — zauruPath vacío`);
  continue;
}
```

- [ ] **Step 2: Commit**

```bash
git add tools/screenshots/run-screenshots.mjs
git commit -m "Skip screenshot shots with empty zauruPath"
```

---

### Task 4: `insert-image-refs.mjs` jpg→png rewrite

**Files:**
- Modify: `tools/screenshots/insert-image-refs.mjs`

- [ ] **Step 1: After loading each doc, rewrite matching non-png refs**

Before insert loop (or after), for each shot:

```js
const pngRef = `/img/${doc.section}/${doc.slug}-${shot.stepNumber}.${format}`;
const altExtRe = new RegExp(
  `(!\\[[^\\]]*\\]\\()/img/${doc.section}/${doc.slug}-${shot.stepNumber}\\.(?!${format})[a-zA-Z0-9]+(\\))`,
  'g'
);
// Also update caption if we want — only rewrite URL
content = content.replace(altExtRe, `$1${pngRef}$2`);
```

Apply on the string then split to lines for insertions. Count rewrites in summary. Idempotent when already png.

Also: when png ref already exists, `totalSkipped` for insert — but still allow rewrite of old jpg line to png (replace in place rather than insert duplicate).

Logic:

1. Read content as string.
2. For each shot, replace any `/img/section/slug-N.<otherExt>` with `.${format}`.
3. If png ref still missing as a full image line, insert after `insertAfterText` as today.
4. If jpg line was rewritten to png, do not also insert a second line.

- [ ] **Step 2: Dry-run on one doc with jpg refs**

```bash
cd tools/screenshots && node insert-image-refs.mjs --dry-run --docs requisiciones-de-compra
```

Expected: shows rewrite jpg→png and/or inserts.

- [ ] **Step 3: Commit**

```bash
git add tools/screenshots/insert-image-refs.mjs
git commit -m "Rewrite non-png image refs to png when inserting"
```

---

### Task 5: Docs & package script

**Files:**
- Modify: `tools/screenshots/README.md`
- Modify: `tools/screenshots/package.json`

- [ ] **Step 1: Update workflow step 2 to `--gaps`**, document Tier A/B briefly.
- [ ] **Step 2: Add `"gaps": "node generate-manifest.mjs --gaps"` script.**
- [ ] **Step 3: Commit**

```bash
git add tools/screenshots/README.md tools/screenshots/package.json
git commit -m "Document --gaps screenshot workflow"
```

---

### Task 6: End-to-end dry verification

- [ ] **Step 1: Run `node generate-manifest.mjs --gaps --dry-run`** and confirm summary numbers look sane (broken ~47, no-image after API skip ~25–30).
- [ ] **Step 2: Run real `node generate-manifest.mjs --gaps`** (needs `OPENROUTER_API_KEY` for Tier B / unresolved Tier A). If no key, run Tier A only path by ensuring nav resolves most broken refs and document remaining LLM-needed count.
- [ ] **Step 3: Spot-check `manifest.json`** — pilot docs still present; new entries have png intent; no invented empty-path spam without logging.
- [ ] **Step 4: Do NOT bulk-run Playwright captures unless user asks** (out of scope for this implementation task; tooling must be ready).

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| `--gaps` Tier A + B | 2 |
| Infer broken refs | 1, 2 |
| nav.json then LLM then empty | 1, 2 |
| API skip | 1, 2 |
| PNG + jpg rewrite | 4 |
| Runner empty path skip | 3 |
| README | 5 |
| No regen of complete docs | 1 (`findBrokenRefDocs` / `findNoImageDocs` only) |
