/**
 * page-state.mjs — Distingue por qué un listado no entregó un registro.
 *
 * Sesión vencida, acceso denegado y error HTTP no son "no hay datos".
 * Un listado que sigue procesando (DataTables) tampoco lo es.
 */

export function classifyLoadedPage({ signIn = false, status = 200, flash = null, railsError = null } = {}) {
  if (signIn) return { kind: 'session', message: 'sesión vencida' };
  if (status >= 400) return { kind: 'http', message: `HTTP ${status}` };
  if (flash) return { kind: 'access', message: flash };
  if (railsError) return { kind: 'http', message: railsError };
  return { kind: 'ok' };
}

/**
 * Después de clasificar la página y de esperar a que el listado asiente.
 * `processingVisible` true → todavía no se puede afirmar que no hay filas.
 */
export function classifyListingProbe({
  signIn = false,
  status = 200,
  flash = null,
  railsError = null,
  processingVisible = false,
  href = null,
} = {}) {
  const state = classifyLoadedPage({ signIn, status, flash, railsError });
  if (state.kind !== 'ok') return state;
  if (processingVisible) {
    return { kind: 'listing', message: 'el listado sigue cargando; no se concluye que no hay datos' };
  }
  if (!href) return { kind: 'no-id', message: 'ausencia real de datos: el listado no tiene registros navegables' };
  return { kind: 'ok', href };
}

export function intersectsViewport(rect, viewport) {
  if (!rect || !viewport) return false;
  const visibleH = Math.min(rect.bottom, viewport.height) - Math.max(rect.top, 0);
  const visibleW = Math.min(rect.right, viewport.width) - Math.max(rect.left, 0);
  return visibleH > 8 && visibleW > 8;
}

/** Extrae el flash de error de un HTML de fixture (sin navegador). */
export function extractDangerFlash(html) {
  const m = String(html).match(/class="[^"]*(?:flash-alert-excerpt|alert-danger)[^"]*"[^>]*>([^<]+)/i);
  if (!m) return null;
  const text = m[1].replace(/\s+/g, ' ').trim();
  return text || null;
}

const RAILS_ERROR = /the page you were looking for|la página (que buscas|que estás buscando)|error de servidor|we're sorry, but something went wrong/i;

/**
 * Lee un HTML de fixture y devuelve la misma clasificación que el runner
 * usaría tras cargar un listado.
 */
export function probeHtml(html, { url = 'https://zauru.herokuapp.com/purchases/paid_charges', status = 200 } = {}) {
  const source = String(html);
  const signIn =
    /name=["']username["']/.test(source) && /name=["']password["']/.test(source) ||
    /\/login|\/users\/sign_in/.test(url);
  const flash = extractDangerFlash(source);
  const railsError = RAILS_ERROR.test(source) ? 'página de error Rails' : null;
  const hasProcessing = /dataTables_processing/.test(source);
  const hidden = /dataTables_processing[^>]*display:\s*none|display:\s*none[^>]*dataTables_processing/.test(source);
  const processingVisible = hasProcessing && !hidden;
  const link = source.match(/href="(\/[^"]+\/\d+(?:\/[^"]*)?)"/i);
  const href = link ? link[1] : null;
  return classifyListingProbe({ signIn, status, flash, railsError, processingVisible, href });
}
