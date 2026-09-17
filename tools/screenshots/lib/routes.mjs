/**
 * routes.mjs — Parser de config/routes.rb de baculo (DSL estándar de Rails)
 * y matcher de patrones para validar rutas web reales.
 *
 * Produce patrones tipo "/payroll/work_contracts/:id" con los mismos
 * segmentos que acepta Rails: literales + ":param". Solo interesan las
 * rutas GET (un screenshot es una navegación); post/put/patch/delete se
 * ignoran.
 *
 * Constructores soportados:
 *   - namespace :x / scope (con "(path)", module: o path opcional)
 *   - resources :x [path:, only:, except:, shallow:] (con o sin bloque)
 *   - resource :x (singular, sin :id)
 *   - recursos anidados (los hijos heredan el param del padre)
 *   - shallow: true (las rutas member del recurso suben a la raíz)
 *   - get/match con símbolo, literal o "a" => "ctrl#accion"; on: :collection/:member
 *   - bloques collection do ... end / member do ... end
 *   - match "modulo(/index)" (segmento opcional) → emite /modulo y /modulo/index
 *   - "(/index)" y "(index)" se normalizan a ambas variantes
 *
 * Lo no reconocido va a `skipped` (con nº de línea) sin frenar el parseo.
 */

const RESOURCE_ACTIONS = ['index', 'new', 'show', 'edit'];

/** Singulariza un nombre de recurso (heurística suficiente para params). */
function singularize(name) {
  return name.replace(/ies$/, 'y').replace(/ss$/, 's').replace(/s$/, '');
}

/** Opciones Rails de una línea: only:, except:, path:, shallow:, module:, as:, via:. */
function parseOpts(rest) {
  const opts = {};
  const re = /:(\w+)\s*=>\s*("[^"]*"|'[^']*'|\[[^\]]*\]|:[\w.]+|true|false)|(\w+):\s*("[^"]*"|'[^']*'|\[[^\]]*\]|:[\w.]+|true|false)/g;
  for (const m of rest.matchAll(re)) {
    const key = m[1] || m[3];
    let value = m[2] ?? m[4] ?? '';
    if (value.startsWith('[')) {
      opts[key] = value.slice(1, -1).split(',').map((s) => s.trim().replace(/^:/, '').replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (value === 'true' || value === 'false') {
      opts[key] = value === 'true';
    } else {
      value = value.replace(/^:/, '').replace(/^["']|["']$/g, '');
      opts[key] = value;
    }
  }
  return opts;
}

/** "a/b/:c" → segmentos limpios (sin (.:format)). */
function cleanPath(p) {
  return p.replace(/\(\.:format\)/g, '').replace(/\/{2,}/g, '/');
}

export function parseRoutes(text) {
  const routes = [];
  const skipped = [];
  // Frames en pila. Cada uno sabe cómo construir rutas propias y de hijos.
  // base: prefijo con params de ancestros · litBase: prefijo sin params.
  const stack = [{ kind: 'root', base: '', litBase: '', childBase: '', childLitBase: '' }];

  const pushRoute = (p, kind) => {
    const path = cleanPath(p).replace(/^\/+/, '/');
    if (!path || path === '/') return; // la raíz no es un candidato útil
    routes.push({ path, kind });
  };
  // Listado + variante "/index" (los hrefs de Zauru suelen escribirla)
  const pushList = (base, kind) => {
    pushRoute(base, kind);
    pushRoute(base + '/index', 'index');
  };

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const lineNo = i + 1;
    const line = lines[i].trim();
    if (!line || line.startsWith('#')) continue;

    if (/^end\b/.test(line)) {
      if (stack.length > 1) stack.pop();
      continue;
    }

    const top = stack[stack.length - 1];

    // ── namespace :x [do] ────────────────────────────────────────────────
    let m = line.match(/^namespace\s+:(\w+)/);
    if (m) {
      const base = `${top.childBase}/${m[1]}`;
      const litBase = `${top.childLitBase}/${m[1]}`;
      stack.push({ kind: 'namespace', base, litBase, childBase: base, childLitBase: litBase });
      continue;
    }

    // ── scope ... do ────────────────────────────────────────────────────
    m = line.match(/^scope\b(.*)$/);
    if (m && /\bdo\b/.test(m[1])) {
      const args = m[1];
      const pathM = args.match(/["']([^"']+)["']/);
      const modM = /(?:module:\s*|:module\s*=>\s*)[:"']([\w/]+)/.exec(args);
      let base = top.childBase;
      let litBase = top.childLitBase;
      // scopes con segmentos opcionales ("(:locale)") quedan transparentes
      if (pathM && !pathM[1].includes('(')) {
        base = `${base}/${pathM[1].replace(/^\//, '')}`;
        litBase = `${litBase}/${pathM[1].replace(/^\//, '')}`;
      } else if (modM) {
        base = `${base}/${modM[1]}`;
        litBase = `${litBase}/${modM[1]}`;
      }
      stack.push({ kind: 'scope', base, litBase, childBase: base, childLitBase: litBase });
      continue;
    }

    // ── collection do / member do (dentro de un recurso) ────────────────
    m = line.match(/^(collection|member)\s+do\s*$/);
    if (m && (top.kind === 'resources' || top.kind === 'resource')) {
      stack.push({ kind: `${m[1]}-block`, parent: top, base: top.base, litBase: top.litBase, childBase: top.childBase, childLitBase: top.childLitBase });
      continue;
    }

    // ── resource/resources :x ... [do] (top-level o anidado) ────────────
    m = line.match(/^(resources|resource)\s+:(\w+)\s*(.*)$/);
    if (m) {
      const [, kind, name, restRaw] = m;
      const singular = kind === 'resource';
      let rest = restRaw;
      let opensBlock = false;
      const doMatch = rest.match(/\bdo(\s*\|.*)?$/);
      if (doMatch) { rest = rest.slice(0, doMatch.index); opensBlock = true; }
      const opts = parseOpts(rest);
      const resPath = String(opts.path || name).replace(/^\//, '');
      const base = top.childBase;
      const litBase = top.childLitBase;
      const ownParam = singular ? null : `:${singularize(name)}_id`;
      const shallow = !!opts.shallow || !!top.shallowAncestry;

      const frame = {
        kind,
        base,
        litBase,
        resPath,
        resName: name,
        ownParam,
        shallow,
        shallowAncestry: shallow,
        childBase: singular ? `${base}/${resPath}` : `${base}/${resPath}/${ownParam}`,
        childLitBase: `${litBase}/${resPath}`,
      };

      const only = Array.isArray(opts.only) ? opts.only : opts.only ? [opts.only] : null;
      const except = Array.isArray(opts.except) ? opts.except : opts.except ? [opts.except] : null;
      const wanted = RESOURCE_ACTIONS.filter(
        (a) => (!only || only.includes(a)) && (!except || !except.includes(a))
      );
      // member con shallow sube a la raíz del recurso
      const memberPrefix = singular
        ? `${base}/${resPath}`
        : shallow
          ? `/${resPath}/:id`
          : `${base}/${resPath}/:id`;
      const collectionPrefix = `${base}/${resPath}`;
      for (const action of wanted) {
        // OJO: los recursos anidados NO exponen "/x/index" en la app real
        // (solo los match "modulo(/index)" del nivel de módulo)
        if (action === 'index') pushRoute(collectionPrefix, 'index');
        else if (action === 'new') pushRoute(collectionPrefix + '/new', 'new');
        else if (action === 'show') pushRoute(singular ? collectionPrefix : memberPrefix, 'show');
        else if (action === 'edit') pushRoute(singular ? collectionPrefix + '/edit' : memberPrefix + '/edit', 'edit');
      }

      if (opensBlock) stack.push(frame);
      continue;
    }

    // ── get/match custom (en bloque de recurso o en bloque collection/member) ──
    if (/^(get|match)\b/.test(line) && (top.kind === 'resources' || top.kind === 'resource' || top.kind === 'collection-block' || top.kind === 'member-block')) {
      const res = top.kind === 'collection-block' || top.kind === 'member-block' ? top.parent : top;
      let on = null;
      if (top.kind === 'collection-block') on = 'collection';
      else if (top.kind === 'member-block') on = 'member';
      else {
        on = /on:\s*:collection|:\s*on\s*=>\s*:collection/.test(line) ? 'collection' : 'member';
      }
      const parsed = parseGetLine(line);
      if (!parsed || parsed.path == null) { skipped.push({ line: lineNo, text: line }); continue; }
      const memberPrefix = res.kind === 'resource'
        ? `${res.base}/${res.resPath}`
        : res.shallow
          ? `/${res.resPath}/:id`
          : `${res.base}/${res.resPath}/:id`;
      const collectionPrefix = `${res.base}/${res.resPath}`;
      if (on === 'collection') pushRoute(`${collectionPrefix}/${parsed.path}`, 'custom-collection');
      else pushRoute(`${memberPrefix}/${parsed.path}`, 'custom-member');
      continue;
    }

    // ── top-level: match "..." / get "..." ──────────────────────────────
    m = line.match(/^match\s+["']([^"']+)["']/);
    if (m) {
      const raw = m[1];
      const isGet = !/via/.test(line) || /via\s*(=>|:)\s*:get/.test(line) || /via:\s*\[[:\w,\s]*get/i.test(line);
      if (isGet) {
        if (/\(\s*\/?index\s*\)/.test(raw) || /\(index\)/.test(raw)) {
          const base = raw.replace(/\(\s*\/?index\s*\)/, '').replace(/\/+$/, '');
          pushList(base, 'custom');
        } else if (!/\(/.test(raw)) {
          pushRoute(raw, 'custom');
        } else {
          skipped.push({ line: lineNo, text: line });
        }
      }
      continue;
    }
    m = line.match(/^get\s+["']([^"']+)["']/);
    if (m) {
      const raw = m[1];
      if (!/\(/.test(raw)) pushRoute(raw, 'custom');
      else skipped.push({ line: lineNo, text: line });
      continue;
    }
    if (/^(root|post|put|patch|delete|direct|draw|devise|mount|require|as|authenticated|unauthenticated)\b/.test(line)) {
      // no-GET, redirecciones o envoltorios de devise → no útiles para navegación
      skipped.push({ line: lineNo, text: line });
      if (/\bdo\b/.test(line)) {
        stack.push({ kind: 'opaque', base: '', litBase: '', childBase: '', childLitBase: '' });
      }
      continue;
    }

    // constructores no reconocidos
    skipped.push({ line: lineNo, text: line });
    if (/\bdo\b/.test(line)) {
      stack.push({ kind: 'opaque', base: '', litBase: '', childBase: '', childLitBase: '' });
    }
  }

  // Dedupe por path conservando el primer kind
  const seen = new Map();
  for (const r of routes) if (!seen.has(r.path)) seen.set(r.path, r.kind);
  const unique = [...seen.entries()].map(([path, kind]) => ({ path, kind }));
  unique.sort((a, b) => a.path.localeCompare(b.path));
  return { routes: unique, skipped };
}

/** Extrae el path y el on: de una línea get/match dentro de un bloque. */
function parseGet(line) {
  let m = line.match(/^(get|match)\s+["']([^"']+)["']/);
  if (m) return { path: m[2], on: null };
  m = line.match(/^(get|match)\s+:([a-z0-9_]+)/);
  if (m) return { path: m[2], on: null };
  return null;
}

/** on: se deduce en el llamador; aquí solo el segmento de path. */
function parseGetLine(line) {
  const parsed = parseGet(line);
  if (!parsed) return null;
  const on = /on:\s*:collection|:\s*on\s*=>\s*:collection/.test(line) ? 'collection' : 'member';
  return { path: parsed.path, on };
}

/**
 * ¿`candidate` (path real del manifiesto, con o sin :params) es "instancia"
 * de algún patrón? Devuelve el patrón que casa o null.
 */
export function candidateMatches(routes, candidate) {
  const c = candidate.replace(/\/+$/, '') || '/';
  if (c === '/') return null;
  const cs = c.split('/');
  for (const r of routes) {
    const ps = r.path.split('/');
    if (ps.length !== cs.length) continue;
    let ok = true;
    for (let i = 0; i < ps.length; i++) {
      if (ps[i].startsWith(':')) {
        // el candidato puede traer el marcador ":id" o un segmento real
        if (!/^[0-9a-zA-Z_.:-]+$/.test(cs[i])) { ok = false; break; }
      } else if (ps[i] !== cs[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return r;
  }
  return null;
}

/**
 * ¿`pathname` (URL ya navegada) coincide con un patrón? Igual que
 * candidateMatches pero exige que los :param sean no vacíos sin "/".
 */
export function findRoute(routes, pathname) {
  return candidateMatches(routes, pathname);
}
