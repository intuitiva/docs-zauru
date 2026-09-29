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
import { baseUrl } from './session.mjs';

/** Error de captura con categoría (para agrupar en failures.log). */
export class CaptureError extends Error {
  constructor(kind, message) {
    super(message);
    this.kind = kind; // 'http' | 'url-mismatch' | 'access' | 'no-id' | 'actions' | 'navigate'
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
async function firstRecordHref(page, listPath, tailSegs) {
  const esc = escapeRe(listPath);
  const tails = tailSegs.map((s) => `/${escapeRe(s)}`).join('');
  const withTail = tailSegs.length ? new RegExp(`^${esc}/(\\d+)${tails}$`) : null;
  const bare = new RegExp(`^${esc}/(\\d+)$`);

  const collect = (re) =>
    page.evaluate(
      ({ source }) => {
        const rx = new RegExp(source);
        const hits = [];
        for (const a of document.querySelectorAll('a[href]')) {
          let pathname;
          try {
            pathname = new URL(a.href, location.origin).pathname;
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
      { source: re.source }
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
export async function resolveIdsInPath(page, zauruPath) {
  const parts = splitIdParts(zauruPath);
  if (!parts) throw new CaptureError('no-id', `resolveId pero ${zauruPath} no tiene segmento de id`);

  let resolved = '';
  for (const part of parts) {
    const listPath = (resolved + '/' + part.literals.join('/')).replace(/\/{2,}/g, '/');
    const parentUrl = resolved ? baseUrl() + resolved : null;
    const href = await resolveLevelHref(page, listPath, part.tail, parentUrl);
    if (!href) {
      throw new CaptureError('no-id', `el listado ${listPath} no tiene registros navegables para ${zauruPath}`);
    }
    let next = href;
    const tailStr = part.tail.length ? '/' + part.tail.join('/') : '';
    if (tailStr && !next.endsWith(tailStr)) next += tailStr;
    resolved = next;
  }
  return resolved;
}

async function resolveLevelHref(page, listPath, tailSegs, parentUrl) {
  // 1) el listado propio
  try {
    await page.goto(baseUrl() + listPath, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    const href = await firstRecordHref(page, listPath, tailSegs);
    if (href) return href;
  } catch (err) {
    // sigue con el fallback
  }
  // 2) fallback: la página del padre ya resuelta contiene los links anidados
  if (parentUrl) {
    try {
      await page.goto(parentUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      return await firstRecordHref(page, listPath, tailSegs);
    } catch {
      return null;
    }
  }
  return null;
}

/** Ejecuta las actions del shot en orden.
 *  scrollTo es cosmético: si falla, se omite (warning) y la captura continúa.
 *  click/fill/select/waitFor fallar abortan el shot (estado a medias no se captura). */
export async function runActions(page, actions, { onSoftFail } = {}) {
  for (const action of actions || []) {
    const [key, value] = Object.entries(action || {})[0] || [];
    try {
      if (key === 'click') await page.click(value, { timeout: 8000 });
      else if (key === 'fill') await page.fill(value.selector, String(value.value ?? ''), { timeout: 8000 });
      else if (key === 'select') await page.selectOption(value.selector, String(value.value ?? ''), { timeout: 8000 });
      else if (key === 'scrollTo') {
        await page.locator(value).first().scrollIntoViewIfNeeded({ timeout: 8000 });
      } else if (key === 'waitFor') await page.waitForSelector(value, { timeout: 10000, state: 'visible' });
      else if (key === 'waitMs') await page.waitForTimeout(Number(value) || 500);
    } catch (err) {
      if (key === 'scrollTo') {
        onSoftFail?.(`scrollTo "${value}" no encontró el elemento; se captura sin reposicionar`);
        continue;
      }
      throw new CaptureError('actions', `acción ${key} falló: ${String(err).split('\n')[0]}`);
    }
  }
}

/** ¿El pathname final corresponde al path pedido? Permite /index equivalente. */
export function pathnameMatches(actualPathname, wantedPath) {
  const norm = (p) => ('/' + String(p).replace(/^\/+|\/+$/g, '')).replace(/\/index$/, '/');
  const a = norm(actualPathname);
  const w = norm(wantedPath);
  return a === w || a === w + '/' || w === a + '/';
}
