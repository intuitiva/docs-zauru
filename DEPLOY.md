# Documentación de Zauru — Docusaurus

This is the Docusaurus 3 site that renders the Zauru user manual. The site source
lives at the repository root.

## Quick start

```bash
npm install
npm start          # dev server at http://localhost:3000
npm run build      # production build into ./build
npm run serve      # serve the production build locally (port 3000)
```

## Folder layout

```
manual-de-usuario-zauru/
├── docusaurus.config.js        # Site config (title, navbar, footer, docs)
├── sidebars.js                 # Auto-generated sidebar (driven by docs/)
├── docs/                       # Documentation (source of truth)
│   ├── configuraciones-de-mi-usuario/
│   │   ├── _category_.json     #   category label, order, linked index
│   │   ├── index.md            #   section landing doc
│   │   └── ingresar-a-zauru.md #   child docs with sidebar_position
│   ├── primeros-pasos/
│   └── ...
├── src/
│   ├── css/custom.css          # theme overrides (kept minimal)
│   └── pages/index.js          # custom homepage listing all sections
├── static/img/logo.png         # site logo
├── netlify.toml                # Netlify build configuration
└── DEPLOY.md                   # ← this file
```

## Modifying the navigation

The sidebar is **auto-generated** from the directory structure inside `docs/`.
You don't edit `sidebars.js` — instead:

* To reorder a section: change the `position` in its `docs/<section>/_category_.json`.
* To reorder a child page: change the value of `sidebar_position` in the page's
  front matter (or rename the file's numeric prefix).
* To rename a page in the sidebar: change `sidebar_label` in the page's front matter.
* To add a new section: create a new folder under `docs/`, drop a `_category_.json`
  in it, and add a `index.md` for the landing page.

The slug of each page is automatically derived from the file path, so URLs match
the directory tree (e.g. `docs/ventas/clientes.md` → `/ventas/clientes`).

For details, see the official guide:
<https://docusaurus.io/docs/sidebar/items>

## Editing content

Edit the `.md` files directly inside `docs/`. The content there is the source of
truth — there is no separate "legacy" source to migrate from anymore.

## Notes about the initial migration

The current `docs/` tree was produced by a one-time migration from the legacy
Contentful markdown. The conversion did the following (already baked in, so you
don't need to do anything):

* Legacy `slug` fields were **dropped**; Docusaurus derives URLs from the file path.
* Legacy protocol-relative Contentful URLs `//images.ctfassets.net/...` were
  normalized to `https://images.ctfassets.net/...` so Docusaurus' link checker
  does not flag them as broken.
* Inline `style="..."` attributes on raw HTML were converted into JSX style objects
  (`style={{ ... }}`) so MDX can compile them.
* Self-closing tags (`<img>`, `<br>`) were rewritten to `<img ... />`, `<br />`.
* Each generated doc gets `format: md` so plain HTML pass-through is preserved.
* All remote `images.ctfassets.net` / `assets.ctfassets.net` / `res.cloudinary.com`
  assets were downloaded into `static/files/<hash>/<filename>` (76 MB, 553 assets)
  and the markdown rewritten to reference them locally as `/files/...`. Two assets
  were genuine 404s on the source servers and are left pointing at the (dead)
  original URL. One Cloudinary URL inside a JSON code-block sample was left
  untouched on purpose. See `download_images.py` for the importer (re-runnable;
  it skips already-downloaded files).

  Going forward, to add a new image: drop the file into `static/files/` (any
  subfolder is fine) and reference it in markdown as `/files/<subfolder>/<name>`.

## Build

`npm run build` outputs static HTML/JS/CSS to `./build`. The site is served
from the root path (`routeBasePath: "/"`), so:
* Home → `/`
* Section index → `/configuraciones-de-mi-usuario`
* Child doc → `/configuraciones-de-mi-usuario/ingresar-a-zauru`

# Deployment to Netlify — full walkthrough

## Prerequisites

* A Netlify account (<https://app.netlify.com/signup>) — free tier is enough.
* The repository pushed to GitHub (or GitLab / Bitbucket). Netlify defaults to "main".
* The repository root contains the Docusaurus site and a `netlify.toml`.

The `netlify.toml` file at the root tells Netlify everything it needs to know:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "22"
  NPM_FLAGS    = "--no-audit --no-fund"
```

## Option A — Connect via the Netlify UI (recommended)

1. Push this repository to GitHub.
2. Log into <https://app.netlify.com> and click **Add new site → Import an existing
   project**.
3. Pick your Git provider and select this repository.
4. **Netlify should auto-fill all build settings from `netlify.toml`.** If it does
   not, fill them in manually:
   * **Base directory:** (leave blank / root)
   * **Build command:** `npm run build`
   * **Publish directory:** `build`
   * **Environment variables:** `NODE_VERSION = 22`
5. Click **Deploy site**. Netlify runs `npm install` (auto-detected from
   `package.json`), then `npm run build`, and ships the contents of `build/`.
6. Within a minute you'll get a `*.netlify.app` URL. Open it — the homepage and
   every doc page (with sidebar) should render.

## Option B — Deploy from the CLI

For a one-off deploy without git integration:

```bash
npm install
npm run build
npx netlify deploy --dir=build --prod
```

The first time you'll be prompted to log in and to pick a Netlify site (or create
one with `--site <new-site-name>`).

## Custom domain

1. In Netlify: **Site → Domain settings → Add a custom domain**.
2. Enter `docs.zauru.com` (or your domain). Netlify guides you through adding the
   DNS records (CNAME pointing to your `*.netlify.app` host, or A record to
   Netlify's load balancer).
3. Once DNS resolves, Netlify provisions HTTPS automatically via Let's Encrypt.
4. Update `docusaurus.config.js` so `url` matches your production domain (already
   set to `https://docs.zauru.com` in this repo — change if your domain differs).

## Triggering deploys

* **Continuous deployment:** every push to `main` re-runs the build and ships a
  new production version. Pull-request branches generate preview deploys.
* **Manual deploy:** in the Netlify UI under **Deploys → Trigger deploy → Deploy
  site manually**.

## Troubleshooting

| Symptom | Fix |
|--|--|
| `Deploy failed: build script returned non-zero exit code` | Open the build log in Netlify. Most commonly: `NODE_VERSION` mismatch — verify `NODE_VERSION=22` is set as an env var (or trust the `.nvmrc`). |
| Broken links shown in build log | Docusaurus emits these as warnings; if you see `linking to /`, make sure `routeBasePath` is `/` and a homepage exists (`src/pages/index.js` here). |
| Images from `images.ctfassets.net` don't load | Confirm the markdown uses `https://` (the initial migration normalized these; new content should use `https://` too). |
| Sidebar order looks wrong | Adjust `position` in the section's `_category_.json` or `sidebar_position` in the doc front matter; commit and push. |
| Old page still present after renaming a doc | Delete the old `.md` file under `docs/` and commit. |

## Environment variables summary

Only one variable matters for the public deploy:

| Variable        | Value | Why |
|-----------------|-------|-----|
| `NODE_VERSION`  | `22`  | Docusaurus 3.x needs Node ≥ 18; pinned to match `.nvmrc`. |

No secrets, no API keys. The site is fully static and public-readable, so the
default public deploy key is enough.

## What the build actually produces

The Docusaurus `build/` folder is self-contained: HTML pages per doc, a single JS
bundle for the React shell, hashed `assets/_-*` files, and a `404.html`. Netlify
serves these straight from the CDN.