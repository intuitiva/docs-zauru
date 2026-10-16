import assert from 'node:assert/strict';
import test from 'node:test';
import { decideRequest, installReadOnlyGate, isDataTablesQuery, mutatingActionNames, planSafeShot, MUTATING_GET_SEGMENTS } from '../lib/safety.mjs';
import { classifyListingProbe, intersectsViewport, probeHtml } from '../lib/page-state.mjs';
import { pathnameMatches } from '../lib/capture.mjs';
const NAMES = MUTATING_GET_SEGMENTS;
const BASE = 'https://zauru.herokuapp.com';

test('una escritura se aborta antes de solicitarla', async () => {
  const events = [];
  const context = { route: async (_pattern, handler) => { context.handler = handler; } };
  await installReadOnlyGate(context, { mutatingNames: NAMES });
  await context.handler({
    request: () => ({
      method: () => 'POST',
      url: () => `${BASE}/purchases/paid_charges`,
      postData: () => 'paid_charge[invoice]=9',
      resourceType: () => 'document',
      isNavigationRequest: () => true,
    }),
    abort: async (reason) => events.push(`abort:${reason}`),
    continue: async () => events.push('continue'),
  });
  assert.deepEqual(events, ['abort:blockedbyclient']);
  assert.equal(decideRequest({ method: 'GET', url: `${BASE}/purchases/closed_purchase_orders/4/rebound`, mutatingNames: NAMES }).allow, false);
  assert.equal(decideRequest({ method: 'GET', url: `${BASE}/production/closed_production_orders/4/return_to_running`, mutatingNames: NAMES }).allow, false);
});

test('el POST de DataTables sí se solicita', () => {
  const url = `${BASE}/contracts/closed_contracts/datatables.json`;
  const body = JSON.stringify({ start: '0', length: '40', search: { value: '' }, order: { 0: { column: '3', dir: 'desc' } } });
  assert.equal(isDataTablesQuery('POST', url, body), true);
  assert.equal(decideRequest({ method: 'POST', url, postData: body, mutatingNames: NAMES }).reason, 'datatables');
  const form = 'draw=1&start=0&length=40&columns[0][data]=id';
  assert.equal(decideRequest({ method: 'POST', url: `${BASE}/contracts/closed_contracts`, postData: form, mutatingNames: NAMES }).allow, true);
});

test('el login está permitido y rebound no se navega', () => {
  assert.equal(decideRequest({ method: 'POST', url: 'https://zauru-oauth.herokuapp.com/login', postData: 'username=a&password=b', mutatingNames: NAMES }).reason, 'auth');
  const plan = planSafeShot(
    { zauruPath: '/purchases/closed_purchase_orders/:id/rebound', resolveId: true, caption: 'Reabrir' },
    NAMES
  );
  assert.equal(plan.navigateTo, '/purchases/closed_purchase_orders/:id');
  assert.equal(plan.captureMode, 'preview');
  assert.match(plan.focusSelector, /rebound/);
  assert.equal(decideRequest({ method: 'GET', url: BASE + plan.navigateTo, mutatingNames: NAMES }).allow, true);
});

test('el scanner de baculo reconoce rebound y return_to_running', () => {
  const ruby = [
    '  def index',
    '    @rows = Model.all',
    '  end',
    '  def rebound',
    '    @purchase_order.rebound(current_user.id)',
    '    @purchase_order.save',
    '  end',
    '  def return_to_running',
    '    @production_order.return_to_running!(current_user)',
    '  end',
    '  def show',
    '    @row = Model.find(params[:id])',
    '  end',
  ].join('\n');
  const names = mutatingActionNames(ruby);
  assert.equal(names.has('rebound'), true);
  assert.equal(names.has('return_to_running'), true);
  assert.equal(names.has('index'), false);
  assert.equal(names.has('show'), false);
});

test('sesión vencida no se confunde con un listado vacío', () => {
  const html = '<form action="/login"><input name="username"><input name="password"></form>';
  const probe = probeHtml(html, { url: 'https://zauru-oauth.herokuapp.com/login' });
  assert.equal(probe.kind, 'session');
  assert.equal(classifyListingProbe({ signIn: true, href: null }).kind, 'session');
});

test('un listado asíncrono que sigue procesando no es ausencia de datos', () => {
  const html = '<div class="dataTables_processing" style="display:block">Procesando</div>';
  assert.equal(probeHtml(html).kind, 'listing');
  const settled = '<div class="dataTables_processing" style="display:none"></div><a href="/purchases/paid_charges/8">8</a>';
  assert.equal(probeHtml(settled).kind, 'ok');
});

test('acceso denegado, error HTTP y lista vacía quedan separados', () => {
  const denied = '<p class="danger"><span class="flash-alert-excerpt">Acceso Restringido</span></p>';
  assert.equal(probeHtml(denied).kind, 'access');
  assert.equal(classifyListingProbe({ status: 500 }).kind, 'http');
  assert.equal(classifyListingProbe({ href: null, processingVisible: false }).kind, 'no-id');
});

test('una redirección a otra ruta no coincide', () => {
  assert.equal(pathnameMatches('/purchases/purchase_orders', '/purchases/closed_purchase_orders/:id'), false);
  assert.equal(pathnameMatches('/support/cases/15/profit', '/support/cases/:id/profit'), true);
});

test('un selector obligatorio fuera del encuadre no pasa', () => {
  assert.equal(intersectsViewport({ top: 940, bottom: 1100, left: 0, right: 200 }, { width: 1600, height: 900 }), false);
  assert.equal(intersectsViewport({ top: 40, bottom: 80, left: 10, right: 200 }, { width: 1600, height: 900 }), true);
});

test('el callback OAuth sin sesión no cuenta como autenticado', async () => {
  const { isSignInUrl } = await import('../lib/session.mjs');
  assert.equal(isSignInUrl('https://zauru.herokuapp.com/users/auth/zauru/callback?code=x'), true);
  assert.equal(isSignInUrl('https://zauru.herokuapp.com/purchases/paid_charges'), false);
});
