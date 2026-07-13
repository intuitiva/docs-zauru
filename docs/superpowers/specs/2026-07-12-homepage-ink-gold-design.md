---
draft: true
---

# Homepage & Theme Redesign — Ink + Gold

**Date:** 2026-07-12  
**Status:** Approved design (pending implementation plan)  
**Scope:** Full theme overhaul + homepage UX rebuild for docs.zauru.com

## Problem

The current homepage feels weak and cluttered: a teal gradient hero, redundant role pills (“Soy contador”, etc.), and a dense card grid with icons + long descriptions. Users who already know what they need are not served well. The only mandatory brand color is aureola gold `#FDCA34`; teal is not required.

## Goals

1. **Search-first UX** — finding content is the primary job of the homepage.
2. **Bold visual presence** — Ink + Gold, strong contrast in light and dark mode.
3. **Remove role pills** — they duplicate the catalog and add noise.
4. **Dense, scannable catalog** — grouped title rows, no descriptive cards on the homepage.
5. **Site-wide consistency** — replace teal with ink/gold across chrome and docs styling (full overhaul).

## Non-goals

- Changing docs content, module IA, or sidebar structure of markdown docs
- Algolia index / crawler configuration
- Adding new fonts beyond dropping Inter if straightforward (keep Sora for headings)
- Marketing landing patterns unrelated to documentation findability

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Homepage primary job | Search-first |
| Visual mood | Ink + Gold (no teal) |
| Catalog density | Dense link rows (titles only) |
| Scope | Full theme overhaul (approach 3) |
| Mandatory color | `#FDCA34` aureola |

---

## 1. Homepage information architecture

### Hero (first viewport)

1. Eyebrow: `Documentación` (small, uppercase tracking)
2. Brand: `ZAURU` as the dominant heading (hero-level brand signal)
3. One short supporting line (e.g. find processes, modules, and reports)
4. Primary control: search button that triggers Algolia DocSearch (same behavior as today via clicking the DocSearch UI), with ⌘K / Ctrl+K hint when appropriate
5. Gold accent rule under the hero

### Removed

- Entire `ROLES` / `.zauru-roles` / `.zauru-role-pill` block

### Catalog (below hero)

Keep the existing four groups and their links from `GROUPS` in `src/pages/index.js`:

1. Empezar  
2. Módulos  
3. Reportes  
4. Herramientas  

Each group:

- Uppercase section label
- Dense rows: **title only** (no icon blocks, no description paragraphs on the homepage)
- Row affordance: trailing arrow; hover/focus gold left bar

### Contrast rule (critical)

- **Light mode:** near-black `#0c0c0c` text on white / paper `#f6f5f1`. Gold is never used as body/link text on light backgrounds.
- **Dark mode:** `#f2f2ee` text on `#0c0c0c` / `#161616`. Gold used for accents, focus, and (where needed) link emphasis.

---

## 2. Visual token system

Replace the teal primary scale with ink + gold.

### Light

| Token role | Value | Use |
|------------|-------|-----|
| Ink | `#0c0c0c` | Headings, primary links, strong UI |
| Ink soft | `#333333` | Body text |
| Paper | `#f6f5f1` | Page background |
| Surface | `#ffffff` | Navbar, sidebar, elevated surfaces |
| Line | `#d8d5cc` | Borders, row dividers |
| Gold | `#FDCA34` | Accent, focus, CTA fill, active marks |
| Gold tint | `rgba(253, 202, 52, 0.14)` | Hover washes |

### Dark

| Token role | Value | Use |
|------------|-------|-----|
| Ink | `#f2f2ee` | Headings / primary text |
| Ink soft | `#b0b0a8` | Body |
| Paper | `#0c0c0c` | Page background |
| Surface | `#161616` | Chrome |
| Line | `#2a2a2a` | Borders |
| Gold | `#FDCA34` | Accent, focus, primary link pop, CTA |
| Gold tint | `rgba(253, 202, 52, 0.12)` | Hover washes |

### Docusaurus mapping

- `--ifm-color-primary` and related scale → ink (light) / gold-led (dark) so links and active states stop using teal
- `--zauru-gold` remains `#fdca34`
- Remove or stop using teal-specific washes (`rgba(15, 118, 110, …)`)
- `theme-color` meta in `docusaurus.config.js` → `#0c0c0c`

### Typography

- Keep **Sora** for headings
- Drop **Inter** as the intentional body face; use a system UI stack for body to avoid generic Inter look (no new font package required unless already easy)

---

## 3. Components

### Homepage

| Component | Behavior |
|-----------|----------|
| Hero search | Max-width ~640px, high contrast border; light: gold offset shadow; dark: gold border; opens DocSearch |
| Section label | Uppercase, tracked; gold in dark, ink in light |
| Row link | Full-width hit target; title + →; hover: gold left bar + slight translateX; `:focus-visible` gold ring |
| Cards on homepage | Removed (do not use `.zauru-card` on home) |

### Global chrome

| Area | Change |
|------|--------|
| Navbar | Paper/surface; link hover gold tint; **Ingresar** = gold background + ink text |
| Sidebar | Active: gold left bar + weight; no teal wash |
| Markdown | h1 gold underline kept; links ink (light) / gold (dark) |
| Admonition tip | Gold-led (already partially); note/info lose teal dependency |
| DocSearch button | Gold focus/hover ring |
| 404 / footer | Same tokens; primary buttons gold or ink+gold, no teal |

### Motion (exactly these)

1. Search control hover — border/shadow 150ms  
2. Catalog row hover — gold bar + 2px translateX 120ms  
3. Navbar CTA hover — background shift 120ms  

No glow stacks, floating badges, or pill clusters.

---

## 4. Implementation surface

| File | Change |
|------|--------|
| `src/pages/index.js` | Remove `ROLES`; restyle hero; render dense rows instead of `SectionCard` cards |
| `src/css/custom.css` | Token overhaul; homepage styles; chrome/docs teal removal |
| `docusaurus.config.js` | `theme-color` meta update |

Related components (icons) may remain for sidebar/docs; homepage rows do not require icons.

---

## 5. Acceptance criteria

1. Homepage has no role pills.
2. First viewport communicates **ZAURU** + search as the primary action.
3. Catalog is grouped dense rows with titles only; light-mode row text is clearly readable (`#0c0c0c` on white/paper).
4. Light and dark modes both pass visual contrast for body text and row links.
5. No teal remains as a primary/brand color in CSS tokens or obvious chrome (navbar CTA, sidebar active, homepage hero).
6. `#FDCA34` is the sole brand accent color.
7. Search still opens Algolia DocSearch.
8. Existing doc routes in `GROUPS` remain reachable from the homepage.

## 6. Verification

- Manual: light + dark toggle on homepage, a doc page, navbar, sidebar active state
- Manual: click hero search → DocSearch opens
- Visual: confirm no low-contrast light-mode rows
- Grep: no remaining `#0f766e` / teal primary as active brand on homepage/chrome (cleanup of leftover teal in unused rules is in scope for the overhaul)

---

## Appendix — Rejected alternatives

- **Homepage-only restyle** — rejected; user chose full overhaul  
- **Slate + Gold / Gold field hero** — rejected; Ink + Gold selected  
- **Get-started-first / browse-first** — rejected; Search-first selected  
- **Compact tiles / descriptive cards** — rejected; dense rows selected  
