/**
 * safety.mjs — La consulta no modifica registros.
 *
 * Las decisiones son puras y se aplican ANTES de goto, de un click y de
 * dejar pasar una petición (incluidas redirecciones y XHR). Se permite el
 * POST de autenticación y el POST de DataTables ya identificado. Todo otro
 * envío de escritura se aborta sin solicitarlo.
 */

import fs from 'node:fs';
import path from 'node:path';

export const MUTATING_GET_SEGMENTS = new Set([
  'rebound',
  'rebound_reception',
  'return_to_running',
  'unclose',
  'activate',
  'close',
  'void',
  'destroy',
  'delete',
  'send_email',
  'generate_arrears',
]);

const WRITE_BODY = /_method=(?:put|patch|delete)/i;

const WRITE_CALL =
  /\.(?:save!|save|update!|update|destroy!|destroy|delete|update_all|destroy_all|rebound)\b|\.return_to_running!|\.send_mail\b|\.close\(|\.void\(|\.unclose\b/;

/**
 * Nombres de acciones cuyo cuerpo escribe, a partir del fuente de un
 * controller (o de un fixture). No marca index/show/new/edit.
 */
export function mutatingActionNames(rubySource) {
  const names = new Set();
  const parts = String(rubySource).split(/\n(?=  def )/);
  for (const part of parts) {
    const m = part.match(/^  def ([a-z0-9_]+)/);
    if (!m) continue;
    const name = m[1];
    if (['index', 'show', 'new', 'edit', 'create', 'update', 'destroy'].includes(name)) continue;
    const body = part.split(/\n  def /)[0];
    if (WRITE_CALL.test(body)) names.add(name);
  }
  return names;
}

export function unionMutatingNames(extra) {
  const names = new Set(MUTATING_GET_SEGMENTS);
  if (!extra) return names;
  for (const n of extra) names.add(n);
  return names;
}

/** app/controllers de baculo: BACULO_DIR o el repo hermano de docs-zauru. */
export function baculoControllersDir(repoRoot) {
  return path.join(process.env.BACULO_DIR || path.resolve(repoRoot, '..', 'baculo'), 'app', 'controllers');
}

/** Une la lista fija con los métodos que escriben en app/controllers. */
export function loadMutatingNamesFromControllers(controllersDir) {
  const names = unionMutatingNames();
  if (!controllersDir || !fs.existsSync(controllersDir)) return names;
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const filePath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(filePath);
      else if (entry.name.endsWith('.rb')) {
        for (const name of mutatingActionNames(fs.readFileSync(filePath, 'utf8'))) names.add(name);
      }
    }
  })(controllersDir);
  return names;
}

export function lastSegment(pathname) {
  const segs = String(pathname || '').split('?')[0].split('/').filter(Boolean);
  return segs[segs.length - 1] || '';
}

export function isMutatingGetPath(pathname, mutatingNames = MUTATING_GET_SEGMENTS) {
  const last = lastSegment(pathname);
  if (!last || last.startsWith(':')) return false;
  return mutatingNames.has(last);
}

export function parentPath(pathname) {
  const segs = String(pathname || '').split('?')[0].split('/').filter(Boolean);
  segs.pop();
  return '/' + segs.join('/');
}

const AUTH_PATH = /\/(login|sign_in|sign_out|session|oauth|authorize|callback|auth)(\/|$)/i;

export function isAuthRequest(method, url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (String(method).toUpperCase() !== 'POST') return false;
  if (AUTH_PATH.test(u.pathname)) return true;
  if (/oauth|login|sign_in/i.test(u.host)) return true;
  return false;
}

function isWriteBody(postData) {
  return WRITE_BODY.test(String(postData || ''));
}

/**
 * POST de DataTables: la ruta contiene "datatable", o el cuerpo trae el
 * protocolo (draw/columns/start/length) y no un `_method` de escritura.
 */
export function isDataTablesQuery(method, url, postData) {
  if (String(method).toUpperCase() !== 'POST') return false;
  if (isWriteBody(postData)) return false;
  let path = '';
  try {
    path = new URL(url).pathname.toLowerCase();
  } catch {
    return false;
  }
  if (path.includes('datatable')) return true;
  const body = String(postData || '');
  const draw = /(?:^|&)draw=/.test(body) || /"draw"\s*:/.test(body);
  const columns = /columns\[/.test(body) || /"columns"\s*:/.test(body);
  const paging = /(?:^|&)start=/.test(body) && /(?:^|&)length=/.test(body);
  const jsonPaging = /"start"\s*:/.test(body) && /"length"\s*:/.test(body);
  if (draw && (columns || paging || jsonPaging)) return true;
  if (columns && (paging || jsonPaging)) return true;
  return false;
}

/**
 * Decide si una petición puede salir. `allow: false` significa abortar
 * sin llamar a continue() — la petición no se solicita.
 */
export function decideRequest({ method, url, postData = '', mutatingNames = MUTATING_GET_SEGMENTS } = {}) {
  const m = String(method || 'GET').toUpperCase();
  let pathname = '';
  try {
    pathname = new URL(url).pathname;
  } catch {
    return { allow: false, reason: 'url-invalid' };
  }
  if (isAuthRequest(m, url)) return { allow: true, reason: 'auth' };
  if (m === 'GET' || m === 'HEAD' || m === 'OPTIONS') {
    if (isMutatingGetPath(pathname, mutatingNames)) return { allow: false, reason: 'mutating-get' };
    return { allow: true, reason: 'read' };
  }
  if (isDataTablesQuery(m, url, postData)) return { allow: true, reason: 'datatables' };
  return { allow: false, reason: 'write' };
}

const MUTATING_CLICK = /rebound|return_to_running|unclose|\/destroy|data-method=["']delete["']|send_email|generate_arrears/i;
const SUBMIT_CLICK = /type=["']submit["']|:has-text\(\s*["'](?:Crear|Guardar|Actualizar|Eliminar|Aprobar|Cerrar|Re-abrir|Reabrir|Devolver)/i;

export function clickIsMutating(selector) {
  const s = String(selector || '');
  return MUTATING_CLICK.test(s) || SUBMIT_CLICK.test(s);
}

const DESTRUCTIVE_INTENT = /elimin|reabr|devolver a ejecuci|rebound|return_to_running|basurero/i;

export function meaningfulActions(actions) {
  return (actions || []).filter((a) => a && !Object.prototype.hasOwnProperty.call(a, 'waitMs'));
}

/**
 * Plan de consulta. Si la ruta o el click escribirían, se fotografía el
 * botón o el formulario anterior y no se ejecuta la operación.
 */
export function planSafeShot(shot, mutatingNames = MUTATING_GET_SEGMENTS) {
  if (shot?.captureMode === 'blocked') {
    return {
      navigateTo: null,
      resolveId: false,
      listPath: null,
      recordLink: null,
      actions: [],
      focusSelector: null,
      expectPath: null,
      captureMode: 'blocked',
      blockedCause: shot.blockedCause || 'bloqueado',
      dropped: [],
    };
  }
  const path = String(shot?.zauruPath || '');
  const last = lastSegment(path);
  const mutatingPath = isMutatingGetPath(path, mutatingNames);
  const declaredPreview = shot?.captureMode === 'preview';
  const destructive = DESTRUCTIVE_INTENT.test(shot?.caption || '');
  const preview = mutatingPath || declaredPreview;

  let navigateTo = path;
  let focusSelector = shot?.focusSelector || null;
  if (mutatingPath) {
    navigateTo = parentPath(path);
    focusSelector = focusSelector || `a[href*="${last}"]`;
  } else if (preview && !focusSelector && destructive) {
    focusSelector = 'a[data-method="delete"], a[href*="destroy"], a[href*="unclose"], a[href*="rebound"], a[href*="return_to_running"]';
  }

  const dropped = [];
  const actions = [];
  let sawReal = false;
  for (const action of shot?.actions || []) {
    if (!action || typeof action !== 'object') continue;
    if (Object.prototype.hasOwnProperty.call(action, 'waitMs')) {
      if (sawReal) actions.push(action);
      else dropped.push('waitMs');
      continue;
    }
    if (action.click && clickIsMutating(action.click)) {
      dropped.push(action.click);
      focusSelector = focusSelector || String(action.click).replace(/:contains\(/g, ':has-text(');
      continue;
    }
    if (action.click && /:contains\(/.test(action.click)) {
      actions.push({ click: action.click.replace(/:contains\(/g, ':has-text(') });
      sawReal = true;
      continue;
    }
    actions.push(action);
    sawReal = true;
  }

  let expectPath = shot?.expectPath || null;
  if (!expectPath) {
    for (const action of actions) {
      const href = action.click && String(action.click).match(/href[*]?=["']([^"']+)["']/);
      if (href && href[1].startsWith('/')) expectPath = href[1];
    }
  }

  return {
    navigateTo,
    resolveId: Boolean(shot?.resolveId),
    listPath: shot?.listPath || null,
    recordLink: shot?.recordLink || null,
    actions,
    focusSelector,
    expectPath,
    captureMode: shot?.captureMode === 'blocked' ? 'blocked' : preview ? 'preview' : null,
    blockedCause: shot?.blockedCause || null,
    dropped,
  };
}

/**
 * Instala el filtro en un contexto de Playwright (o en un doble de prueba).
 * Las peticiones rechazadas se abortan; `continue` no se llama.
 */
export async function installReadOnlyGate(context, { mutatingNames = MUTATING_GET_SEGMENTS, onBlocked, state } = {}) {
  const bucket = state || { blockedDocument: null, blockedOther: [] };
  await context.route('**/*', async (route) => {
    const req = route.request();
    const decision = decideRequest({
      method: req.method(),
      url: req.url(),
      postData: req.postData?.() || '',
      mutatingNames,
    });
    if (!decision.allow) {
      const info = { ...decision, url: req.url(), method: req.method(), resourceType: req.resourceType?.() || '' };
      onBlocked?.(info);
      if (info.resourceType === 'document' || req.isNavigationRequest?.()) bucket.blockedDocument = info;
      else bucket.blockedOther.push(info);
      await route.abort('blockedbyclient');
      return;
    }
    await route.continue();
  });
  return bucket;
}
