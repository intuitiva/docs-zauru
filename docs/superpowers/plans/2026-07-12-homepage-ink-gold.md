---
draft: true
---

# Homepage Ink + Gold Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the docs homepage as search-first Ink + Gold dense rows, and replace teal with ink/gold across the full Docusaurus theme (light + dark).

**Architecture:** Keep Docusaurus classic preset. Drive the look entirely from CSS custom properties in `src/css/custom.css` (tokens → chrome → homepage). Rebuild `src/pages/index.js` markup to match the approved IA (hero search + grouped title rows; no role pills; no homepage cards). Verify with `npm run build` and targeted greps — this repo has no unit-test runner.

**Tech Stack:** Docusaurus 3.10, React 18, CSS custom properties, Algolia DocSearch (existing), Sora (`@fontsource/sora`), system UI body stack.

**Spec:** [`docs/superpowers/specs/2026-07-12-homepage-ink-gold-design.md`](../specs/2026-07-12-homepage-ink-gold-design.md)

**Commits:** Do not commit unless the user explicitly asks. Skip every “Commit” step below until then.

---

## File map

| File | Responsibility |
|------|----------------|
| `src/css/custom.css` | Design tokens (light/dark), typography, navbar/sidebar/markdown/admonitions/404/search, homepage hero + dense rows; delete role-pill styles |
| `src/pages/index.js` | Homepage structure: hero + `GROUPS` as dense rows; remove `ROLES` / cards |
| `docusaurus.config.js` | `theme-color` meta → `#0c0c0c` |
| `package.json` / `package-lock.json` | Remove `@fontsource/inter` dependency after CSS stops importing it |
| `docs/superpowers/_category_.json` + front matter on spec/plan | Keep internal specs/plans out of the public sidebar / production docs nav |

No new components required. Keep `src/components/Icon` for non-homepage uses; homepage rows do not use icons.

---

### Task 1: Hide internal superpowers docs from the public sidebar

**Files:**
- Create: `docs/superpowers/_category_.json`
- Modify: `docs/superpowers/specs/2026-07-12-homepage-ink-gold-design.md` (front matter)
- Modify: `docs/superpowers/plans/2026-07-12-homepage-ink-gold.md` (front matter — this plan file)

- [ ] **Step 1: Add category file**

```json
{
  "label": "Internal",
  "position": 999,
  "collapsed": true,
  "className": "zauru-internal-docs",
  "link": {
    "type": "generated-index",
    "title": "Internal",
    "description": "Agent specs and plans — not part of the user manual.",
    "slug": "/superpowers"
  }
}
```

- [ ] **Step 2: Add front matter to the spec and this plan**

At the top of both markdown files:

```markdown
---
draft: true
---
```

(`draft: true` keeps them out of production builds; `unlisted: true` avoids promoting them in listings.)

- [ ] **Step 3: Hide the category in CSS**

Append to `src/css/custom.css`:

```css
/* Hide agent-internal docs from sidebar */
.zauru-internal-docs {
  display: none !important;
}
```

- [ ] **Step 4: Verify sidebar**

Run: `npm start`  
Expected: sidebar has no “Internal” / “superpowers” section. Homepage and Contabilidad etc. still appear.

- [ ] **Step 5: Commit** — skip unless user asks

---

### Task 2: Swap design tokens (teal → ink + gold)

**Files:**
- Modify: `src/css/custom.css` (sections 1–2 tokens, typography imports, hero token vars)

- [ ] **Step 1: Drop Inter imports; keep Sora**

Replace the top import block with:

```css
@import "@fontsource/sora/400.css";
@import "@fontsource/sora/600.css";
@import "@fontsource/sora/700.css";
@import "@fontsource/sora/800.css";
```

Update the file header comment to: Ink + Gold (`#FDCA34`), Sora headings + system UI body.

- [ ] **Step 2: Replace `:root` brand tokens**

Replace the teal primary scale, warm neutrals, surfaces, hero vars, and font families in `:root` with:

```css
:root {
  /* Brand — primary maps to ink (links / strong UI) */
  --ifm-color-primary: #0c0c0c;
  --ifm-color-primary-dark: #000000;
  --ifm-color-primary-darker: #000000;
  --ifm-color-primary-darkest: #000000;
  --ifm-color-primary-light: #333333;
  --ifm-color-primary-lighter: #444444;
  --ifm-color-primary-lightest: #666666;

  --zauru-gold: #fdca34;
  --zauru-gold-soft: #ffe27a;
  --zauru-gold-deep: #e0a800;
  --zauru-gold-tint: rgba(253, 202, 52, 0.14);

  --zauru-ink: #0c0c0c;
  --zauru-ink-soft: #333333;
  --zauru-paper: #f6f5f1;
  --zauru-paper-2: #eeede8;
  --zauru-line: #d8d5cc;

  --ifm-font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --ifm-font-family-heading: "Sora", system-ui, sans-serif;
  --ifm-heading-font-family: var(--ifm-font-family-heading);
  --ifm-font-family-monospace: "SFMono-Regular", "JetBrains Mono", Menlo, Consolas, monospace;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.65;

  --ifm-h1-font-size: 2.2rem;
  --ifm-h2-font-size: 1.65rem;
  --ifm-h3-font-size: 1.3rem;
  --ifm-heading-letter-spacing: -0.01em;
  --ifm-heading-weight: 700;

  --ifm-background-color: var(--zauru-paper);
  --ifm-background-surface-color: #ffffff;
  --zauru-card-bg: #ffffff;
  --zauru-card-bg-hover: #fffcf3;
  --zauru-card-border: var(--zauru-line);
  --ifm-card-background: var(--zauru-card-bg);

  --ifm-heading-color: var(--zauru-ink);
  --ifm-font-color-base: var(--zauru-ink-soft);
  --ifm-color-emphasis-600: #555555;
  --ifm-color-emphasis-700: var(--zauru-ink);
  --ifm-color-emphasis-800: #000000;

  --ifm-global-radius: 4px;
  --ifm-code-border-radius: 4px;
  --zauru-radius-sm: 4px;
  --zauru-radius-md: 6px;
  --zauru-radius-lg: 8px;

  --ifm-global-shadow-l1: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ifm-global-shadow-l2: 0 4px 12px rgba(0, 0, 0, 0.08);
  --zauru-shadow-card: 0 1px 2px rgba(0, 0, 0, 0.06);
  --zauru-shadow-card-hover: 0 4px 16px rgba(0, 0, 0, 0.1);
  --zauru-halo-glow: none;

  --ifm-menu-link-sublist-icon-filter: invert(0%);

  --ifm-code-background: var(--zauru-paper-2);
  --ifm-code-color: var(--zauru-ink);

  /* Homepage hero — light: paper field, ink type */
  --zauru-hero-bg: var(--zauru-paper);
  --zauru-hero-text: var(--zauru-ink);
  --zauru-hero-text-soft: var(--zauru-ink-soft);
}
```

Delete unused `--zauru-hero-bg-start` / `--zauru-hero-bg-end` once hero CSS no longer references them (Task 4).

- [ ] **Step 3: Replace `[data-theme="dark"]` tokens**

```css
[data-theme="dark"] {
  --ifm-color-primary: #fdca34;
  --ifm-color-primary-dark: #e0a800;
  --ifm-color-primary-darker: #c99600;
  --ifm-color-primary-darkest: #a67c00;
  --ifm-color-primary-light: #ffe27a;
  --ifm-color-primary-lighter: #ffeba0;
  --ifm-color-primary-lightest: #fff3c4;

  --zauru-gold: #fdca34;
  --zauru-gold-soft: #ffe27a;
  --zauru-gold-deep: #e0a800;
  --zauru-gold-tint: rgba(253, 202, 52, 0.12);

  --zauru-ink: #f2f2ee;
  --zauru-ink-soft: #b0b0a8;
  --zauru-paper: #0c0c0c;
  --zauru-paper-2: #161616;
  --zauru-line: #2a2a2a;

  --ifm-background-color: var(--zauru-paper);
  --ifm-background-surface-color: var(--zauru-paper-2);
  --zauru-card-bg: #161616;
  --zauru-card-bg-hover: #1c1c1c;
  --zauru-card-border: var(--zauru-line);
  --ifm-card-background: var(--zauru-card-bg);

  --ifm-heading-color: var(--zauru-ink);
  --ifm-font-color-base: var(--zauru-ink-soft);
  --ifm-color-emphasis-600: #a8a89f;
  --ifm-color-emphasis-700: var(--zauru-ink);
  --ifm-color-emphasis-800: #ffffff;
  --ifm-color-emphasis-300: #3a3a3a;
  --ifm-color-emphasis-200: #2a2a2a;
  --ifm-color-emphasis-100: #1c1c1c;

  --ifm-code-background: #1c1c1c;
  --ifm-code-color: var(--zauru-ink);

  --zauru-shadow-card: 0 1px 3px rgba(0, 0, 0, 0.4);
  --zauru-shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 0 1px var(--zauru-gold-tint);
  --zauru-halo-glow: none;

  --zauru-hero-bg: #0c0c0c;
  --zauru-hero-text: #f2f2ee;
  --zauru-hero-text-soft: #b0b0a8;
}
```

- [ ] **Step 4: Grep for leftover teal**

Run:

```bash
rg -n "0f766e|0b5a54|083f3a|15, 118, 110|2ba298|114b48" src/css/custom.css || true
```

Expected: only matches you are about to rewrite in later tasks (navbar active wash, sidebar, markdown links, badges, hero). If tokens section itself still contains teal hexes, fix before continuing.

- [ ] **Step 5: Commit** — skip unless user asks

---

### Task 3: Restyle global chrome off teal

**Files:**
- Modify: `src/css/custom.css` (navbar, sidebar, links, markdown, admonitions, badges, 404, DocSearch)
- Modify: `docusaurus.config.js` (`theme-color`)

- [ ] **Step 1: Update theme-color**

In `docusaurus.config.js`, change:

```js
{ tagName: "meta", attributes: { name: "theme-color", content: "#0c0c0c" } },
```

- [ ] **Step 2: Navbar CTA → gold fill + ink text**

Replace the “Ingresar” CTA rules with:

```css
.navbar .navbar__item:last-child .navbar__link,
.navbar__inner .navbar__items--right .navbar__link:last-of-type {
  background-color: var(--zauru-gold);
  color: #0c0c0c;
  font-weight: 700;
  transition: background-color 120ms ease, color 120ms ease;
}
.navbar .navbar__item:last-child .navbar__link:hover,
.navbar__inner .navbar__items--right .navbar__link:last-of-type:hover {
  background-color: var(--zauru-gold-soft);
  color: #0c0c0c;
}
```

Keep link hover using `var(--zauru-gold-tint)` (already present).

- [ ] **Step 3: Sidebar active — gold bar, no teal wash**

Replace active menu styles:

```css
.menu__link--active:not(.menu__link--sublist) {
  background-color: var(--zauru-gold-tint);
  color: var(--zauru-ink);
  font-weight: 600;
}
.menu__link--active:not(.menu__link--sublist)::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 3px;
  border-radius: 2px;
  background-color: var(--zauru-gold);
}
```

Replace any `rgba(15, 118, 110, …)` in sidebar / badge / markdown link underlines with ink or gold-tint equivalents, e.g.:

```css
.markdown a {
  text-decoration: none;
  border-bottom: 1px solid rgba(12, 12, 12, 0.25);
}
[data-theme="dark"] .markdown a {
  border-bottom-color: rgba(253, 202, 52, 0.35);
}
```

```css
.admonition-note {
  border-left-color: var(--zauru-ink);
  background: rgba(12, 12, 12, 0.04);
}
[data-theme="dark"] .admonition-note {
  border-left-color: var(--zauru-gold);
  background: var(--zauru-gold-tint);
}
```

```css
.zauru-badge--rol {
  background: var(--zauru-gold-tint);
  border-color: rgba(253, 202, 52, 0.4);
  color: var(--zauru-ink);
}
```

```css
.zauru-404__btn--primary {
  background: var(--zauru-gold);
  color: #0c0c0c;
  border: 1px solid var(--zauru-gold);
}
.zauru-404__btn--primary:hover {
  background: var(--zauru-gold-soft);
  color: #0c0c0c;
}
```

- [ ] **Step 4: Confirm no teal left in chrome CSS**

Run:

```bash
rg -n "0f766e|15, 118, 110|2ba298|teal" src/css/custom.css docusaurus.config.js || true
```

Expected: no matches (or only historical comments you delete).

- [ ] **Step 5: Commit** — skip unless user asks

---

### Task 4: Rebuild homepage CSS (hero + dense rows)

**Files:**
- Modify: `src/css/custom.css` (section 7 hero / roles / section groups / grid)

- [ ] **Step 1: Replace hero block**

Delete the old teal gradient hero (`background: linear-gradient…`, `::before` aureola blur halo) and role-pill rules. Replace with:

```css
/* ============================================================
   7. HOMEPAGE — search-first hero + dense rows
   ============================================================ */
.zauru-hero {
  position: relative;
  background: var(--zauru-hero-bg);
  color: var(--zauru-hero-text);
  padding: 56px 24px 40px;
  text-align: left;
  max-width: 720px;
  margin: 0 auto;
}
.zauru-hero__eyebrow {
  font-family: var(--ifm-font-family-base);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--zauru-hero-text);
  margin: 0 0 12px;
}
[data-theme="dark"] .zauru-hero__eyebrow {
  color: var(--zauru-gold);
}
.zauru-hero__title {
  font-family: var(--ifm-font-family-heading);
  font-weight: 800;
  font-size: clamp(2.6rem, 8vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0 0 12px;
  color: var(--zauru-hero-text);
}
.zauru-hero__subtitle {
  font-size: 1.05rem;
  max-width: 36rem;
  margin: 0 0 28px;
  color: var(--zauru-hero-text-soft);
  line-height: 1.5;
}
.zauru-hero__search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 640px;
  padding: 14px 18px;
  background: var(--zauru-card-bg);
  border: 2px solid var(--zauru-ink);
  border-radius: var(--zauru-radius-sm);
  color: var(--zauru-ink-soft);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  box-shadow: 4px 4px 0 var(--zauru-gold);
  transition: border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
}
[data-theme="dark"] .zauru-hero__search {
  border-color: var(--zauru-gold);
  box-shadow: none;
  color: var(--zauru-ink-soft);
}
.zauru-hero__search:hover {
  background: var(--zauru-card-bg-hover);
  box-shadow: 6px 6px 0 var(--zauru-gold);
}
[data-theme="dark"] .zauru-hero__search:hover {
  box-shadow: 0 0 0 3px var(--zauru-gold-tint);
}
.zauru-hero__search:focus-visible {
  outline: 2px solid var(--zauru-gold);
  outline-offset: 3px;
}
.zauru-hero__search-kbd {
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ifm-color-emphasis-600);
  border: 1px solid var(--zauru-line);
  border-radius: 3px;
  padding: 2px 6px;
}
.zauru-hero__rule {
  height: 3px;
  background: var(--zauru-gold);
  border: 0;
  margin: 40px 0 0;
}

.zauru-home {
  max-width: 720px;
  margin: 0 auto;
  padding: 8px 24px 64px;
}

.zauru-section-group {
  margin-bottom: 36px;
}
.zauru-section-group__header {
  margin: 0 0 8px;
}
.zauru-section-group__title {
  font-family: var(--ifm-font-family-base);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--zauru-ink);
  margin: 0;
}
[data-theme="dark"] .zauru-section-group__title {
  color: var(--zauru-gold);
}

.zauru-row-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--zauru-line);
}
.zauru-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0 12px 8px;
  margin: 0;
  border-bottom: 1px solid var(--zauru-line);
  border-left: 3px solid transparent;
  color: var(--zauru-ink);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: border-color 120ms ease, transform 120ms ease, background-color 120ms ease;
}
.zauru-row:hover {
  border-left-color: var(--zauru-gold);
  transform: translateX(2px);
  color: var(--zauru-ink);
  text-decoration: none;
  background: transparent;
}
.zauru-row:focus-visible {
  outline: 2px solid var(--zauru-gold);
  outline-offset: 2px;
}
.zauru-row__arrow {
  color: var(--ifm-color-emphasis-600);
  flex-shrink: 0;
}

/* Remove obsolete homepage card / pill / teal-hero helpers if still present */
```

Also delete unused rules for: `.zauru-roles`, `.zauru-role-pill`, `.zauru-grid` (if only used on homepage), `.zauru-card` usages on homepage (keep `.zauru-card` / related styles if still used by doc MDX components — grep before deleting).

Run:

```bash
rg -n "zauru-card|zauru-grid|zauru-roles" src docs || true
```

- If `zauru-card` appears outside `index.js`, keep card CSS.
- Delete role-pill CSS unconditionally after Task 5 removes markup.

Update responsive section: remove old `.zauru-hero::before` media tweaks; keep simple padding adjustments.

- [ ] **Step 2: Smoke-check CSS loads**

Run: `npm start`  
Open `/` — styles may look broken until Task 5 markup lands; no compile errors expected.

- [ ] **Step 3: Commit** — skip unless user asks

---

### Task 5: Rebuild `src/pages/index.js`

**Files:**
- Modify: `src/pages/index.js` (full homepage component)

- [ ] **Step 1: Replace homepage implementation**

Rewrite the file to:

```jsx
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Icon from "../components/Icon";

const GROUPS = [
  {
    key: "empezar",
    label: "Empezar",
    sections: [
      { href: "/primeros-pasos", title: "Primeros Pasos" },
      { href: "/configuraciones-de-mi-usuario", title: "Configuraciones de mi usuario" },
      { href: "/permisos-de-acceso", title: "Permisos de Acceso" },
    ],
  },
  {
    key: "modulos",
    label: "Módulos",
    sections: [
      { href: "/contabilidad", title: "Contabilidad" },
      { href: "/contabilizacion-de-proyectos", title: "Contabilización de Proyectos" },
      { href: "/inventarios", title: "Inventarios" },
      { href: "/ventas", title: "Ventas" },
      { href: "/compras", title: "Compras" },
      { href: "/casos-de-soporte", title: "Casos de Soporte" },
      { href: "/punto-de-venta", title: "Punto de Venta" },
      { href: "/contratos", title: "Contratos" },
      { href: "/e-commerce", title: "E-commerce" },
      { href: "/crm", title: "CRM" },
      { href: "/webapps", title: "Webapps" },
    ],
  },
  {
    key: "reportes",
    label: "Reportes",
    sections: [
      { href: "/reportes-de-contabilidad", title: "Reportes de Contabilidad" },
      { href: "/reportes-de-inventarios", title: "Reportes de Inventarios" },
      { href: "/reportes-de-ventas", title: "Reportes de Ventas" },
      { href: "/reportes-de-compras", title: "Reportes de Compras" },
      { href: "/reportes-de-casos-de-soporte", title: "Reportes de Casos de Soporte" },
      { href: "/reportes-de-puntos-de-venta", title: "Reportes de Puntos de Venta" },
      { href: "/reportes-de-contratos", title: "Reportes de Contratos" },
      { href: "/reportes-de-crm", title: "Reportes de CRM" },
    ],
  },
  {
    key: "herramientas",
    label: "Herramientas",
    sections: [
      {
        href: "/importaciones-masivas",
        title: "Importaciones masivas de datos históricos",
      },
    ],
  },
];

function SectionGroup({ group }) {
  return (
    <section className="zauru-section-group" aria-labelledby={`group-${group.key}`}>
      <header className="zauru-section-group__header">
        <h2 id={`group-${group.key}`} className="zauru-section-group__title">
          {group.label}
        </h2>
      </header>
      <ul className="zauru-row-list">
        {group.sections.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="zauru-row">
              <span>{s.title}</span>
              <span className="zauru-row__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function openDocSearch() {
  if (typeof document === "undefined") return;
  const btn =
    document.querySelector(".DocSearch-Button") ||
    document.querySelector(".navbar [class*=DocSearch]");
  if (btn) {
    btn.click();
  } else if (window.docsearch) {
    window.docsearch();
  }
}

function searchShortcutLabel() {
  if (typeof navigator === "undefined") return "Ctrl K";
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  return isMac ? "⌘K" : "Ctrl K";
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [kbd, setKbd] = React.useState("Ctrl K");
  React.useEffect(() => {
    setKbd(searchShortcutLabel());
  }, []);

  return (
    <Layout title={siteConfig.title} description="Manual de usuario de Zauru ERP/CRM">
      <section className="zauru-hero">
        <p className="zauru-hero__eyebrow">Documentación</p>
        <h1 className="zauru-hero__title">ZAURU</h1>
        <p className="zauru-hero__subtitle">
          Encuentra procesos, módulos y reportes del ERP.
        </p>
        <button
          type="button"
          className="zauru-hero__search"
          onClick={openDocSearch}
          aria-label="Buscar en la documentación">
          <Icon name="magnifying-glass" />
          Buscar en la documentación…
          <span className="zauru-hero__search-kbd">{kbd}</span>
        </button>
        <hr className="zauru-hero__rule" />
      </section>

      <main className="zauru-home">
        {GROUPS.map((g) => (
          <SectionGroup key={g.key} group={g} />
        ))}
      </main>
    </Layout>
  );
}
```

Requirements encoded above:
- No `ROLES`
- No `SectionCard` / descriptions / per-row icons
- Same hrefs as before
- Search still calls `openDocSearch`

- [ ] **Step 2: Confirm Icon still exports `magnifying-glass`**

Run:

```bash
rg -n "magnifying-glass" src/components
```

Expected: icon key exists. If renamed, update the `Icon name=` prop.

- [ ] **Step 3: Manual homepage check**

With `npm start`:
1. `/` shows ZAURU + search, no role pills
2. Light mode: row titles are near-black on white/paper (readable)
3. Dark mode: rows readable; section labels gold
4. Click search → Algolia modal opens
5. Click Contabilidad → `/contabilidad`

- [ ] **Step 4: Commit** — skip unless user asks

---

### Task 6: Remove Inter package

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json` (via npm)

- [ ] **Step 1: Uninstall Inter**

Run:

```bash
npm uninstall @fontsource/inter
```

Expected: dependency removed from `package.json` / lockfile; `@fontsource/sora` remains.

- [ ] **Step 2: Confirm no Inter imports remain**

Run:

```bash
rg -n "@fontsource/inter|font-family: \"Inter\"|font-family: 'Inter'" src package.json || true
```

Expected: no matches.

- [ ] **Step 3: Commit** — skip unless user asks

---

### Task 7: Full verification against acceptance criteria

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run:

```bash
npm run build
```

Expected: exit 0. No broken links thrown (`onBrokenLinks: "throw"`).

- [ ] **Step 2: Teal purge grep**

Run:

```bash
rg -n "0f766e|0b5a54|083f3a|15, 118, 110|Soy contador|zauru-role-pill|zauru-roles" src docusaurus.config.js || true
```

Expected: no matches.

- [ ] **Step 3: Acceptance checklist**

| # | Criterion | Pass? |
|---|-----------|-------|
| 1 | No role pills | |
| 2 | First viewport = ZAURU + search | |
| 3 | Dense title rows only; light contrast OK | |
| 4 | Light + dark both readable | |
| 5 | No teal as brand/primary in chrome | |
| 6 | `#FDCA34` sole accent | |
| 7 | Search opens DocSearch | |
| 8 | All prior `GROUPS` hrefs still present | |

Compare href list to git history if unsure:

```bash
git show HEAD:src/pages/index.js | rg "href:"
```

- [ ] **Step 4: Commit** — skip unless user asks

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| Search-first hero | 4, 5 |
| Remove role pills | 4, 5, 7 |
| Dense title rows / no homepage cards | 4, 5 |
| Light contrast `#0c0c0c` on paper/white | 2, 4, 7 |
| Dark ink/gold tokens | 2 |
| Full teal → ink/gold overhaul | 2, 3, 7 |
| Navbar Ingresar gold+ink | 3 |
| Sidebar gold active bar | 3 |
| Motion: search / rows / CTA | 3, 4 |
| theme-color `#0c0c0c` | 3 |
| Drop Inter | 2, 6 |
| Keep GROUPS routes | 5, 7 |
| DocSearch still works | 5, 7 |
| Internal specs not polluting user docs | 1 |

No TBD placeholders. Commit steps intentionally skipped until the user requests commits.
