# AGENTS.md

## Cursor Cloud specific instructions

This repository is a [Docusaurus 3](https://docusaurus.io) documentation site (the Zauru ERP user manual, mostly Spanish Markdown under `docs/`). It is a static site generator — there is no backend, database, or auth.

### Services

There is a single service: the Docusaurus site.

- Dev server: `npm start` (serves at http://localhost:3000/, hot-reloads on save). It runs with `--no-open` (see `package.json`), so no browser auto-launch.
- Production build: `npm run build` (outputs to `build/`), then `npm run serve` to preview the built site.
- There is no lint or test script defined in `package.json`; `npm run build` is the effective correctness check (it fails on broken links and MDX/Markdown errors).

### Non-obvious notes

- Node version: `.nvmrc` pins Node 22.17.1; any Node 18+ works.
- Search is powered by Algolia DocSearch (configured in `docusaurus.config.js`). It requires network access to Algolia to return results; if offline, the search modal opens but returns nothing.
- Standard setup/run instructions live in `README.md`; deployment (Netlify) is documented in `DEPLOY.md`.
