/**
 * capture.mjs — Piezas puras de captura de un shot del manifiesto.
 *
 * Reglas de corrección que implemente aquí:
 *   1. VERIFICACIÓN DE URL: tras navegar, el pathname final DEBE coincidir
 *      con el zauruPath pedido. Zauru redirige cuando falta permiso o el
 *      registro no existe; capturar la página destino era la causa de las
 *      "pantallas equivocadas". Mismatch → error, sin captura.
 *   2. resolveId GENERALIZADO: para "/recurso/:id", "/recurso/:id/edit" o
 *      anidados "/clients/:id/credit_cards/:id", resuelve cada segmento de
 *      id contra el listado real que lo precede. Sin registros → error,
 *      sin captura (antes: disparaba al id=1 → 404).
 *   3. ACTIONS: click/fill/select/waitFor/waitMs antes de capturar, para
 *      diferenciar estados de una misma página.
 *
 * El orquestador (navegar → checks → ocultar → screenshot) vive en
 * 5-run-screenshots.mjs.
 */
import { baseUrl, isSignInUrl } from './session.mjs';
import { classifyLoadedPage, intersectsViewport } from './page-state.mjs';
import { clickIsMutating } from './safety.mjs';

/** Error de captura con categoría (para agrupar en failures.log). */
export class CaptureError extends Error {
  constructor(kind, message) {
    super(message);
    this.kind = kind; // 'http' | 'url-mismatch' | 'access' | 'no-id' | 'actions' | 'navigate' | 'session' | 'listing' | 'blocked' | 'framing' | 'selector'
  }
}

export const DEFAULT_HIDE_SELECTORS = ['#logo', '#communication_toolbar', '#user_toolbar'];

/** Espera al primer selector visible de la lista; devuelve cuál o null. */
export async function waitForAny(page, selectors, totalTimeout = 15000) {
  const per = Math.max(2000, Math.floor(totalTimeout / Math.max(selectors.length, 1)));
  for (const sel of selectors) {
    try {
      await page.waitForSelector(sel, { timeout: per, state: 'visible' });
      return sel;
    } catch {
      // prueba el siguiente candidato
    }
  }
  return null;
}

/** Oculta elementos por selector (barras de encabezado, etc.). */
export async function hideElements(page, selectors) {
  if (!selectors.length) return;
  await page.evaluate((sels) => {
    for (const sel of sels) {
      document.querySelectorAll(sel).forEach((el) => {
        el.style.display = 'none';
      });
    }
  }, selectors);
}

/** Texto del flash de error de Zauru ("Acceso Restringido", etc.) o null. */
export async function findDangerFlash(page) {
  return page.evaluate(() => {
    const el = document.querySelector('p.danger .flash-alert-excerpt, .flash-alert-excerpt, .alert-danger');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : null;
  });
}

/** Detecta páginas de error de Rails (a veces renderizan con HTTP 200). */
export async function findRailsErrorPage(page) {
  return page.evaluate(() => {
    const title = document.title || '';
    const body = document.body?.innerText?.slice(0, 2000) || '';
    if (
      /the page you were looking for|la página (que buscas|que estás buscando)|error de servidor|we're sorry, but something went wrong/i.test(
        body + ' ' + title
      )
    ) {
      return (title || 'página de error Rails').trim();
    }
    return null;
  });
}

/**
 * Divide "/a/b/1/c/d" en grupos por id:
 *   [{ literals: ['a','b'], tail: ['c','d'] }]
 * Acepta ids numéricos Y marcadores de patrón (":client_id", ":id").
 * Para "/sales/clients/:client_id/credit_cards/new":
 *   [{ literals: ['sales','clients'], tail: ['credit_cards','new'] }]
 * null si no hay segmento de id.
 */
export function splitIdParts(zauruPath) {
  const segs = zauruPath.replace(/\/+$/, '').split('/').filter(Boolean);
  const parts = [];
  let literals = [];
  for (const seg of segs) {
    if (/^\d+$/.test(seg) || seg.startsWith(':')) {
      parts.push({ literals: literals.slice(), tail: [] });
      literals = [];
    } else {
      literals.push(seg);
    }
  }
  if (!parts.length) return null;
  parts[parts.length - 1].tail = literals.slice();
  return parts;
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * En el listado `listPath` (ya cargado en `page`), devuelve el href del
 * primer registro real que case con "listPath/:id<tail>"; si no hay con
 * tail, acepta "listPath/:id". Ordena por id ascendente (más estable).
 */
async function firstRecordHref(page, listPath, tailSegs, recordLink) {
  const esc = escapeRe(listPath);
  const tails = tailSegs.map((s) => `/${escapeRe(s)}`).join('');
  const withTail = tailSegs.length ? new RegExp(`^${esc}/(\\d+)${tails}$`) : null;
  const bare = new RegExp(`^${esc}/(\\d+)$`);

  const collect = (re) =>
    page.evaluate(
      ({ source, recordLink: linkSel }) => {
        const rx = new RegExp(source);
        const hits = [];
        const nodes = linkSel ? document.querySelectorAll(linkSel) : document.querySelectorAll('a[href]');
        for (const a of nodes) {
          const raw = a.href || a.getAttribute('href');
          if (!raw) continue;
          let pathname;
          try {
            pathname = new URL(raw, location.origin).pathname;
          } catch {
            continue;
          }
          const m = pathname.match(rx);
          if (m) hits.push({ id: Number(m[1]), href: pathname });
        }
        if (!hits.length) return null;
        hits.sort((a, b) => a.id - b.id);
        return hits[0].href;
      },
      { source: re.source, recordLink: recordLink || '' }
    );

  if (withTail) {
    const href = await collect(withTail);
    if (href) return href;
  }
  return collect(bare);
}

/**
 * Resuelve ids reales nivel por nivel y devuelve el path final navegable.
 * Cada nivel navega al listado correspondiente y toma el primer registro;
 * si el listado anidado no existe como página propia (o está vacío), busca
 * los enlaces en la página del PADRE ya resuelta (donde suelen vivir los
 * links a los recursos anidados).
 */
export async function resolveIdsInPath(page, zauruPath, options = {}) {
  const parts = splitIdParts(zauruPath);
  if (!parts) throw new CaptureError('no-id', `resolveId pero ${zauruPath} no tiene segmento de id`);

  let resolved = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const computed = (resolved + '/' + part.literals.join('/')).replace(/\/{2,}/g, '/');
    const listPath = i === 0 && options.listPath ? options.listPath : computed;
    const parentUrl = resolved ? baseUrl() + resolved : null;
    const href = await resolveLevelHref(page, listPath, part.tail, parentUrl, i === 0 ? options.recordLink : null);
    if (!href) {
      throw new CaptureError('no-id', `ausencia real de datos: el listado ${listPath} no tiene registros navegables para ${zauruPath}`);
    }
    let next = href;
    const tailStr = part.tail.length ? '/' + part.tail.join('/') : '';
    if (tailStr && !next.endsWith(tailStr)) next += tailStr;
    resolved = next;
  }
  return resolved;
}

async function inspectLoaded(page, response) {
  const status = typeof response?.status === 'function' ? response.status() : response?.status || 0;
  if (isSignInUrl(page.url())) return classifyLoadedPage({ signIn: true, status });
  const flash = await findDangerFlash(page);
  const railsError = await findRailsErrorPage(page);
  return classifyLoadedPage({ status, flash, railsError });
}

function throwIfUnusable(state, where) {
  if (!state || state.kind === 'ok') return;
  throw new CaptureError(state.kind === 'session' ? 'session' : state.kind, `${state.message} en ${where}`);
}

/** Espera a que DataTables deje de procesar. Si no asienta, no es "sin datos". */
export async function waitForListingSettled(page) {
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
  const pending = await page.evaluate(() => {
    const el = document.querySelector('.dataTables_processing');
    if (!el) return false;
    const style = getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
  if (!pending) return;
  try {
    await page.waitForFunction(() => {
      const el = document.querySelector('.dataTables_processing');
      if (!el) return true;
      const style = getComputedStyle(el);
      return style.display === 'none' || style.visibility === 'hidden';
    }, { timeout: 15000 });
  } catch {
    throw new CaptureError('listing', 'el listado sigue cargando; no se concluye que no hay datos');
  }
}

async function resolveLevelHref(page, listPath, tailSegs, parentUrl, recordLink) {
  const response = await page.goto(baseUrl() + listPath, { waitUntil: 'domcontentloaded', timeout: 30000 });
  throwIfUnusable(await inspectLoaded(page, response), listPath);
  await waitForListingSettled(page);
  const href = await firstRecordHref(page, listPath, tailSegs, recordLink);
  if (href) return href;
  if (!parentUrl) return null;
  const parentResponse = await page.goto(parentUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  throwIfUnusable(await inspectLoaded(page, parentResponse), parentUrl);
  await waitForListingSettled(page);
  return firstRecordHref(page, listPath, tailSegs, recordLink);
}

/** Ejecuta las actions. Un scroll o un selector que no aparece aborta: no se guarda la captura. */
export async function runActions(page, actions) {
  for (const action of actions || []) {
    const [key, value] = Object.entries(action || {})[0] || [];
    try {
      if (key === 'click') {
        if (clickIsMutating(value)) {
          throw new CaptureError('blocked', `el click "${value}" escribiría un registro; no se solicitó`);
        }
        await page.click(value, { timeout: 8000 });
      } else if (key === 'fill') await page.fill(value.selector, String(value.value ?? ''), { timeout: 8000 });
      else if (key === 'select') await page.selectOption(value.selector, String(value.value ?? ''), { timeout: 8000 });
      else if (key === 'scrollTo') {
        const loc = page.locator(value).first();
        await loc.waitFor({ state: 'visible', timeout: 8000 });
        await loc.scrollIntoViewIfNeeded({ timeout: 8000 });
      } else if (key === 'waitFor') await page.waitForSelector(value, { timeout: 10000, state: 'visible' });
      else if (key === 'waitMs') await page.waitForTimeout(Number(value) || 500);
    } catch (err) {
      if (err instanceof CaptureError) throw err;
      const kind = key === 'scrollTo' ? 'framing' : 'actions';
      throw new CaptureError(kind, `acción ${key} falló: ${String(err).split('\n')[0]}`);
    }
  }
}

export async function requireAnySelector(page, selectors) {
  if (!selectors?.length) return null;
  const matched = await waitForAny(page, selectors);
  if (!matched) {
    throw new CaptureError('selector', `ningún selector obligatorio coincidió (${selectors.join(', ')})`);
  }
  return matched;
}

export async function assertInFrame(page, selector, viewport = { width: 1600, height: 900 }) {
  const loc = page.locator(selector).first();
  try {
    await loc.waitFor({ state: 'visible', timeout: 8000 });
    await loc.scrollIntoViewIfNeeded({ timeout: 8000 });
  } catch (err) {
    if (err instanceof CaptureError) throw err;
    throw new CaptureError('selector', `no se pudo enfocar ${selector}: ${String(err).split('\n')[0]}`);
  }
  const box = await loc.boundingBox();
  if (!box) throw new CaptureError('framing', `focusSelector ${selector} no tiene caja visible`);
  const rect = { top: box.y, bottom: box.y + box.height, left: box.x, right: box.x + box.width };
  if (!intersectsViewport(rect, viewport)) {
    throw new CaptureError('framing', `focusSelector ${selector} quedó fuera del encuadre`);
  }
}

export async function assertPageHasContent(page) {
  const length = await page.evaluate(() => (document.body?.innerText || '').replace(/\s+/g, ' ').trim().length);
  if (length < 40) throw new CaptureError('framing', 'la página no tiene contenido visible tras ocultar las barras');
}

/** ¿El pathname final corresponde al path pedido? Permite /index y segmentos :id. */
export function pathnameMatches(actualPathname, wantedPath) {
  const norm = (p) => ('/' + String(p).replace(/^\/+|\/+$/g, '')).replace(/\/index$/, '/');
  const a = norm(actualPathname);
  const w = norm(wantedPath);
  if (a === w || a === w + '/' || w === a + '/') return true;
  if (!String(wantedPath).includes(':')) return false;
  const as = a.split('/').filter(Boolean);
  const ws = w.split('/').filter(Boolean);
  if (as.length !== ws.length) return false;
  return ws.every((seg, i) => (seg.startsWith(':') ? /^[0-9A-Za-z_.:-]+$/.test(as[i]) : seg === as[i]));
}
