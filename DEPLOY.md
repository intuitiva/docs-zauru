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