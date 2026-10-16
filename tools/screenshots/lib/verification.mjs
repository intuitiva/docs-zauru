import { CaptureError, pathnameMatches, requireAnySelector, waitForListingSettled } from './capture.mjs';

export function assertTargetUrl(actual, expected) {
  const a = new URL(actual);
  const e = new URL(expected);
  if (a.origin !== e.origin || !pathnameMatches(a.pathname, e.pathname) || a.search !== e.search || a.hash !== e.hash) {
    throw new CaptureError('url-mismatch', `aterrizó en ${a.href} en vez de ${e.href}`);
  }
}

/** Esperar tablas asincrónicas antes de fotografiar, incluso sin metadata especial. */
export async function waitForContent(page, shot) {
  await requireAnySelector(page, shot.waitForSelector || ['table', 'form', '.dataTables_wrapper', 'main', '#content']);
  await waitForListingSettled(page);
  await page.waitForFunction(() => {
    return [...document.querySelectorAll('.dataTables_processing, .dt-processing')].every((el) => {
      const style = getComputedStyle(el);
      return style.display === 'none' || style.visibility === 'hidden' || !el.getClientRects().length;
    });
  }, null, { timeout: 15000 });
}
