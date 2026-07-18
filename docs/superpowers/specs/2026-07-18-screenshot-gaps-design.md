# Screenshot gaps pipeline — design

**Date:** 2026-07-18  
**Status:** Approved for implementation planning  
**Scope:** Expand `tools/screenshots` from the 3-doc pilot to cover documentation gaps across the repo.

## Goal

Fill two kinds of gaps without regenerating docs that already have all image files on disk:

1. **Broken refs** — markdown references `/img/...` but the file is missing under `static/`.
2. **No images** — markdown has no `![...]` at all (except API/code-only docs, which are skipped).

Approach: extend the existing scripts (Approach 1). Prefer inferring from existing markdown; use the LLM only when needed.

## Current baseline

- Pilot docs already correct: `beneficiarios`, `centro-de-costos`, `inventarios-configuracion`.
- Pipeline: `discover-nav.mjs` → `generate-manifest.mjs` → `run-screenshots.mjs` → `insert-image-refs.mjs`.
- Approx. scale: ~47 docs with broken refs, ~34 with no images (~144 missing files on disk, mostly `.jpg`).

## Architecture & workflow

```text
discover-nav.mjs              → nav.json (unchanged)
generate-manifest.mjs --gaps
  ├─ Tier A: broken refs      → infer shots from ![…](/img/…)
  │                             zauruPath via nav.json (LLM fallback)
  ├─ Tier B: no images        → existing LLM flow + API/code skip
  └─ merge into manifest.json (upsert by docPath)
run-screenshots.mjs           → capture PNG (existing behavior)
insert-image-refs.mjs         → insert new Tier-B refs; rewrite .jpg → .png
```

### Gap detection

| Kind | Rule |
|------|------|
| Broken ref | `![…](/img/<section>/<slug>-N.ext)` present and `static/img/...` file missing (any extension) |
| No images | No `![` in the file (same idea as `--missing`) |
| Leave alone | All referenced image files exist on disk |

Pilot entries stay as-is unless their files are missing or the runner is invoked with `--force`.

## Tier A — Infer from broken refs

For each missing image reference:

| Field | Source |
|-------|--------|
| `stepNumber` | `N` from the image path |
| `caption` | Alt text; if generic (`imagen1`, empty), use the previous non-empty content line |
| `insertAfterText` | Line immediately above the image (or nearest prior content line) |
| `waitForSelector` | Defaults: `["table", "form", ".dataTables_wrapper", "main", "#content"]` |
| Output path | Always `…-N.png` (ignore `.jpg` / other extensions in the md) |

### `zauruPath` resolution (ordered)

1. Score `nav.json` entries against doc **slug**, **section**, and nearby headings (normalize accents/hyphens; require a clear unique best match).
2. If the markdown mentions API-style paths (`/foo/bar.json`, `/foo/1.json`), strip `.json` and numeric detail ids as the existing generator already does.
3. If still ambiguous → **one LLM call for that doc only**, asking it to fill `zauruPath` for the already-inferred shots.
4. If still unresolved → set `zauruPath: ""`, log it; the runner records a failure and continues.

Detail-looking paths (`/resource/1`) may set `resolveId: true` so the runner picks a real tenant id from the list page.

## Tier B — Docs with no images

Reuse the existing OpenRouter manifest generation.

**API/code skip heuristic** (before calling the LLM):

- Skip (and log) if filename/title matches `/api|graphql|curl/i`, **or**
- Body is mostly fenced code / has almost no UI how-to steps.

Skipped docs are not added as empty noise unless useful for reporting; empty `shots: []` from the LLM remains valid for UI docs that truly need no screenshots.

## Merge rules

- Upsert manifest entries by `docPath`.
- Sort docs by `docPath`.
- Keep `imageFormat: "png"`.
- Do not wipe unrelated existing manifest entries.

## jpg → png rewrite

Always capture as PNG (same as the pilot).

In `insert-image-refs.mjs`, for each shot whose markdown still references `/img/.../slug-N.jpg` (or another non-png extension matching that section/slug/step):

- Rewrite the ref to `.png`.
- Idempotent; only touch matching refs.

That script remains responsible for inserting new Tier-B image lines after `insertAfterText`.

## CLI

```bash
node generate-manifest.mjs --gaps           # Tier A + Tier B
node generate-manifest.mjs --gaps --dry-run # report only, no write
# unchanged: --docs <files...>, --missing
```

Update `tools/screenshots/README.md` (and package script docs) so step 2 of the workflow uses `--gaps`.

## Runner changes

Minimal:

- Skip shots with empty `zauruPath` (log error into `failures.log`; do not abort the whole run).
- Otherwise keep current behavior: viewport 16:9 PNG, hide selectors, session reuse, access-denied detection, `--force`, `--docs` filter.

## Error reporting

`generate-manifest.mjs --gaps` prints a summary covering:

- Broken-ref docs: inferred / needs-LLM / unresolved path
- No-image docs: generated / skipped-as-API / LLM errors

Never invent URLs for unresolved paths.

## Out of scope

- Regenerating screenshots for docs that already have all image files on disk
- Changing default viewport / hide-selector behavior
- Capturing or committing screenshot binaries as part of the design/spec work itself

## Success criteria

1. `node generate-manifest.mjs --gaps` produces a manifest covering broken-ref and no-image UI docs.
2. API/GraphQL-style docs are skipped without LLM cost.
3. `run-screenshots.mjs` can process the expanded manifest without stopping on individual failures.
4. `insert-image-refs.mjs` inserts new refs and rewrites `.jpg` → `.png` for captured shots.
5. Pilot docs remain correct unless explicitly force-recaptured.
