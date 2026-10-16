/** Navegación y comprobaciones de una candidata, independiente del CLI. */
import { baseUrl, isSignInUrl } from './session.mjs';
import { CaptureError, hideElements, findDangerFlash, findRailsErrorPage, resolveIdsInPath, runActions, assertInFrame, assertPageHasContent } from './capture.mjs';
import { decideRequest } from './safety.mjs';
import { assertTargetUrl, waitForContent } from './verification.mjs';
import { extensionOf, playwrightType } from './images.mjs';

export async function captureOnPage(page, shot, plan, { mutatingNames, gateState, hideSelectors, quality = 80 }) {
  gateState.blockedDocument = null;
  let target = plan.navigateTo;
  if (plan.resolveId) {
    target = await resolveIdsInPath(page, plan.navigateTo, {
      listPath: plan.listPath,
      recordLink: plan.recordLink,
      placeholdersOnly: true,
    });
  }
  const gate = decideRequest({ method: 'GET', url: baseUrl() + target, mutatingNames });
  if (!gate.allow) {
    throw new CaptureError('blocked', `no se solicitó ${target} (${gate.reason})`);
  }

  const targetUrl = baseUrl() + target + shot.search + shot.hash;
  const response = await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (gateState.blockedDocument) {
    throw new CaptureError('blocked', `la navegación a ${target} fue abortada antes de solicitarla (${gateState.blockedDocument.reason})`);
  }
  if (isSignInUrl(page.url())) throw new CaptureError('session', 'sesión vencida');
  await assertHealthy(page, response, target);
  assertTargetUrl(page.url(), targetUrl);

  if (plan.actions?.length) await runActions(page, plan.actions);
  if (gateState.blockedDocument) {
    throw new CaptureError('blocked', `una redirección de escritura fue abortada (${gateState.blockedDocument.url})`);
  }
  if (isSignInUrl(page.url())) throw new CaptureError('session', 'sesión vencida tras una acción');

  const wanted = plan.expectPath || target;
  const expectedUrl = baseUrl() + wanted + shot.search + shot.hash;
  assertTargetUrl(page.url(), expectedUrl);
  const actual = new URL(page.url()).pathname;
  await assertHealthy(page, null, actual);

  await waitForContent(page, shot);
  if (plan.focusSelector) await assertInFrame(page, plan.focusSelector);
  await hideElements(page, shot.hideSelectors || hideSelectors);

  assertTargetUrl(page.url(), expectedUrl);
  await assertHealthy(page, null, actual);
  await waitForContent(page, shot);
  if (plan.focusSelector) await assertInFrame(page, plan.focusSelector);
  await assertPageHasContent(page);

  const ext = extensionOf(shot.imageRef, 'png');
  const type = playwrightType(ext);
  const opts = { type };
  if (type === 'jpeg') opts.quality = quality;
  if (shot.fullPage) opts.fullPage = true;
  const buffer = await page.screenshot(opts);
  return {
    buffer,
    resolvedPath: target,
    captureMode: plan.captureMode,
    focusSelector: plan.focusSelector,
    actions: plan.actions,
    expectPath: plan.expectPath || null,
  };
}

async function assertHealthy(page, response, where) {
  if (response && response.status() >= 400) {
    throw new CaptureError('http', `HTTP ${response.status()} en ${where}`);
  }
  const flash = await findDangerFlash(page);
  if (flash) throw new CaptureError('access', `acceso denegado en ${where}: "${flash}"`);
  const rails = await findRailsErrorPage(page);
  if (rails) throw new CaptureError('http', `página de error de Rails ("${rails}") en ${where}`);
}
