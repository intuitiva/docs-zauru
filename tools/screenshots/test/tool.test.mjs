import assert from 'node:assert/strict';
import test from 'node:test';
import {
  decideRequest,
  installReadOnlyGate,
  isDataTablesQuery,
  mutatingActionNames,
  planSafeShot,
  MUTATING_GET_SEGMENTS,
} from '../lib/safety.mjs';
import { classifyListingProbe, intersectsViewport, probeHtml } from '../lib/page-state.mjs';
import { pathnameMatches } from '../lib/capture.mjs';
import { shotImageRef } from '../lib/images.mjs';
import { buildInventory, parseAllImageRefs } from '../lib/inventory.mjs';
import { findIncompatibleSharedDestinations } from '../lib/destinations.mjs';
import { mergeResults, shouldCapture } from '../lib/results.mjs';
import { planInsertion, isVerifiedResult } from '../lib/insert.mjs';
import { matchAnchor, repairDocEntry, repairManifest, resolveDuplicateDestinations } from '../lib/repair.mjs';
import { validateManifest } from '../lib/manifest.mjs';
import { parseJsonPayload } from '../lib/json-payload.mjs';
import { normalizeActions, usableSelector } from '../lib/actions.mjs';
import { uncoveredRefs } from '../lib/gaps.mjs';

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

test('imageRef conserva nombres especiales', () => {
  const doc = { section: 'ventas', slug: 'precios-sugeridos' };
  assert.equal(
    shotImageRef(doc, { stepNumber: 1, imageRef: '/img/ventas/importar-precios-0b.png' }),
    '/img/ventas/importar-precios-0b.png'
  );
  const refs = parseAllImageRefs('![alt](/img/ventas/importar-precios-0b.png)\n![n](/img/compras/cargos-pagados-2.png)');
  assert.equal(refs[0].numbered, false);
  assert.equal(refs[1].stepNumber, 2);
});

test('destinos compartidos con instrucciones incompatibles', () => {
  const docs = [
    {
      slug: 'casos-abiertos',
      shots: [{ stepNumber: 1, zauruPath: '/support/cases', caption: 'Casos abiertos', insertAfterText: 'Listado' }],
    },
    {
      slug: 'casos-eliminar-un-caso',
      shots: [{ stepNumber: 1, zauruPath: '/support/cases', caption: 'Eliminar un caso', insertAfterText: 'basurero' }],
    },
  ];
  const conflicts = findIncompatibleSharedDestinations(docs);
  assert.equal(conflicts.length, 1);
  const distinguished = findIncompatibleSharedDestinations([
    docs[0],
    {
      slug: 'casos-eliminar-un-caso',
      shots: [{ ...docs[1].shots[0], captureMode: 'preview', focusSelector: 'a[data-method="delete"]' }],
    },
  ]);
  assert.equal(distinguished.length, 0);
});

test('la reparación mueve el documento, conserva imageRef y no pide la ruta que escribe', () => {
  const manifest = {
    docs: [
      {
        section: 'compras',
        slug: 'consolidar-varias-ordenes-de-compra',
        docPath: 'docs/compras/consolidar-varias-ordenes-de-compra.md',
        shots: [{ stepNumber: 1, caption: 'Consolidar', zauruPath: '/purchases/consolidates', insertAfterText: 'viejo' }],
      },
    ],
  };
  const docs = [
    {
      docPath: 'docs/compras/ordenes-de-compra/consolidar-varias-ordenes-de-compra.md',
      content: 'Paso único.\n\n![alt](/img/compras/consolidar-varias-ordenes-de-compra-1.png)\n',
    },
  ];
  const { manifest: next, notes } = repairManifest(manifest, {
    docs,
    routes: [{ path: '/purchases/consolidates' }],
    mutatingNames: NAMES,
    existingRefs: new Set(),
  });
  assert.equal(notes.moved.length, 1);
  assert.equal(next.docs[0].docPath, docs[0].docPath);
  assert.equal(next.docs[0].shots[0].insertAfterText, 'Paso único.');
  const rebound = planSafeShot(
    { zauruPath: '/production/closed_production_orders/:id/return_to_running', caption: 'Devolver a Ejecucion' },
    NAMES
  );
  assert.equal(rebound.navigateTo.includes('return_to_running'), false);
});

test('las corridas parciales conservan resultados y la inserción exige ancla única', () => {
  const merged = mergeResults(
    { version: 1, images: { '/img/a.png': { status: 'blocked', cause: 'sin datos' } } },
    { '/img/b.png': { status: 'candidate', visualReview: 'pending' } }
  );
  assert.equal(merged.images['/img/a.png'].status, 'blocked');
  assert.equal(merged.images['/img/b.png'].status, 'candidate');
  assert.equal(shouldCapture({ previous: merged.images['/img/a.png'], fileExists: false }), false);
  assert.equal(shouldCapture({ retryFailed: true, previous: { status: 'failed' } }), true);
  assert.equal(shouldCapture({ retryFailed: true, previous: { status: 'blocked' } }), false);
  const lines = ['Única línea de ancla.', '', 'Otra.'];
  assert.equal(planInsertion({ lines, needle: 'Única línea de ancla.', imageRef: '/img/a.png', verified: false }).reason, 'sin imagen verificada');
  assert.equal(planInsertion({ lines, needle: 'Única línea de ancla.', imageRef: '/img/a.png', verified: true }).action, 'insert');
  assert.equal(planInsertion({ lines: ['Repetida', 'Repetida'], needle: 'Repetida', imageRef: '/img/a.png', verified: true }).reason, 'ancla ambigua');
  assert.equal(isVerifiedResult({ status: 'candidate', visualReview: 'pending' }), false);
  assert.equal(isVerifiedResult({ status: 'verified', visualReview: 'accepted' }), true);
});

test('el validador rechaza un destino compartido incompatible', () => {
  const result = validateManifest(
    {
      docs: [
        {
          slug: 'uno',
          docPath: 'docs/no-existe.md',
          shots: [
            { stepNumber: 1, caption: 'Casos abiertos', zauruPath: '/support/cases', insertAfterText: 'a' },
            { stepNumber: 2, caption: 'Eliminar un caso', zauruPath: '/support/cases', insertAfterText: 'b' },
          ],
        },
      ],
    },
    { routes: null }
  );
  assert.equal(result.errors.some((e) => e.rule === 'E8'), true);
  assert.equal(result.errors.some((e) => e.rule === 'E5'), true);
});

test('el callback OAuth sin sesión no cuenta como autenticado', async () => {
  const { isSignInUrl } = await import('../lib/session.mjs');
  assert.equal(isSignInUrl('https://zauru.herokuapp.com/users/auth/zauru/callback?code=x'), true);
  assert.equal(isSignInUrl('https://zauru.herokuapp.com/purchases/paid_charges'), false);
});

test('el inventario incluye index.md y documentos anidados', () => {
  const inventory = buildInventory({
    docs: [
      { docPath: 'docs/ventas/facturas/index.md', content: '![x](/img/ventas/ordenes-de-venta-o-facturas-7.png)' },
      { docPath: 'docs/compras/cargos-pagados.md', content: 'sin imagen' },
    ],
    files: new Map(),
    manifest: { docs: [] },
  });
  assert.equal(inventory.missing.length, 1);
  assert.equal(inventory.missing[0].indexDoc, true);
  assert.equal(inventory.missing[0].nested, true);
  assert.equal(inventory.noImageDocs.length, 1);
});

test('parsea JSON de LLM con comillas sin escapar, comas faltantes y texto extra', () => {
  const quoted = parseJsonPayload(
    '{"docs":[{"shots":[{"stepNumber":1,"caption":"Pagos","zauruPath":"/accounting/reports/x","insertAfterText":"1. Ir a "Contabilidad"."}]}]}'
  );
  assert.equal(quoted.docs[0].shots[0].insertAfterText, '1. Ir a "Contabilidad".');

  const missingComma = parseJsonPayload(
    '{"docs":[{"shots":[{"stepNumber":1,"zauruPath":"/sales/y","waitForSelector":["#q" ".grid"],"insertAfterText":"rango"}]}]}'
  );
  assert.deepEqual(missingComma.docs[0].shots[0].waitForSelector, ['#q', '.grid']);

  const trailing = parseJsonPayload('{"docs":[{"shots":[]}]} y luego dice {fin}');
  assert.deepEqual(trailing, { docs: [{ shots: [] }] });

  const fenced = parseJsonPayload('```json\n{"docs":[{"shots":[{"stepNumber":2}]}]}\n```');
  assert.equal(fenced.docs[0].shots[0].stepNumber, 2);

  assert.throws(() => parseJsonPayload('sin objeto'), /Respuesta sin JSON/);
});

test('las actions del LLM quedan ejecutables o se descartan', () => {
  assert.equal(usableSelector('button'), false);
  assert.equal(usableSelector("button:has-text('Generar'"), false);
  assert.equal(usableSelector('a[href*="profit"]'), true);
  const { actions, dropped } = normalizeActions([
    { click: { selector: '#tab-pagos' } },
    { click: "button:contains('Generar')" },
    { click: 'button' },
    { fill: { selector: 'input[name="q"]', value: '' } },
    { hover: '#x' },
    { waitMs: 300 },
  ]);
  assert.deepEqual(actions, [{ click: '#tab-pagos' }, { click: "button:has-text('Generar')" }, { waitMs: 300 }]);
  assert.equal(dropped.length, 3);
});

test('el ancla se recupera aunque el LLM quite el número, las negritas o copie un trozo', () => {
  const md = [
    '3. Seleccionar **"Incidencias No Descontadas Correctamente"**.',
    '4. Seleccionar el proveedor y el rango de meses.',
    'Se requiere entrar a cada cuenta. Ya dentro de la cuenta se puede revisar si esta correcta la tipificacion.',
    'Repetida',
    'Repetida',
  ].join('\n');
  assert.equal(matchAnchor(md, 'Seleccionar el proveedor y el rango de meses.'), '4. Seleccionar el proveedor y el rango de meses.');
  assert.equal(
    matchAnchor(md, 'Seleccionar \\"Incidencias No Descontadas Correctamente\\".'),
    '3. Seleccionar **"Incidencias No Descontadas Correctamente"**.'
  );
  assert.equal(
    matchAnchor(md, 'Ya dentro de la cuenta se puede revisar si esta correcta la tipificacion.'),
    'Se requiere entrar a cada cuenta. Ya dentro de la cuenta se puede revisar si esta correcta la tipificacion.'
  );
  assert.equal(matchAnchor(md, 'Repetida'), 'Repetida');
  assert.equal(matchAnchor(md, 'No existe en el documento'), 'No existe en el documento');
});

test('un destino repetido se bloquea si el .md ya usa la imagen y se descarta si era propuesta', () => {
  const entry = {
    section: 'ventas',
    slug: 'clientes',
    shots: [
      { stepNumber: 1, caption: 'Listado', zauruPath: '/sales/clients' },
      { stepNumber: 2, caption: 'Otra vez', zauruPath: '/sales/clients' },
      { stepNumber: 3, caption: 'Y otra', zauruPath: '/sales/clients' },
    ],
  };
  const notes = resolveDuplicateDestinations(entry, '![a](/img/ventas/clientes-2.png)');
  assert.deepEqual(entry.shots.map((s) => [s.stepNumber, s.captureMode || 'ok']), [[1, 'ok'], [2, 'blocked']]);
  assert.deepEqual(notes.map((n) => n.action), ['blocked', 'dropped']);
});

test('una ruta que escribe se fotografía desde su página padre sin inventar un id', () => {
  const names = new Set([...NAMES, 'fix_missing_entry_in_pieceworks']);
  const entry = {
    section: 'reportes-de-nominas',
    slug: 'partidas',
    shots: [
      { stepNumber: 1, caption: 'Corregir', zauruPath: '/payroll/reports/fix_missing_entry_in_pieceworks', resolveId: true },
      { stepNumber: 2, caption: 'Reabrir', zauruPath: '/purchases/closed_purchase_orders/:id/rebound' },
    ],
  };
  repairDocEntry(entry, { mutatingNames: names });
  const [fix, rebound] = entry.shots;
  assert.equal(fix.zauruPath, '/payroll/reports');
  assert.equal(fix.captureMode, 'preview');
  assert.equal(fix.resolveId, undefined);
  assert.equal(rebound.zauruPath, '/purchases/closed_purchase_orders/:id');
  assert.equal(rebound.resolveId, true);
});

test('el índice de reportes enfoca el enlace al reporte del documento', () => {
  const entry = {
    section: 'reportes-de-inventarios',
    slug: 'ultimos-movimientos',
    shots: [
      { stepNumber: 1, caption: 'Lista de reportes', zauruPath: '/inventories/reports' },
      { stepNumber: 2, caption: 'Reporte', zauruPath: '/inventories/reports/last_movements_per_agency' },
    ],
  };
  repairDocEntry(entry, { mutatingNames: NAMES });
  assert.equal(entry.shots[0].focusSelector, 'a[href$="/inventories/reports/last_movements_per_agency"]');
});

test('E7 usa las acciones que escriben según los controllers de baculo', () => {
  const manifest = {
    docs: [{ slug: 'x', docPath: 'docs/no-existe.md', shots: [{ stepNumber: 1, caption: 'x', zauruPath: '/payroll/reports/fix_deducted_incidents' }] }],
  };
  const routes = { routes: [{ path: '/payroll/reports/fix_deducted_incidents' }] };
  assert.equal(validateManifest(manifest, { routes }).errors.some((e) => e.rule === 'E7'), false);
  const withScan = validateManifest(manifest, { routes, mutatingNames: new Set([...NAMES, 'fix_deducted_incidents']) });
  assert.equal(withScan.errors.some((e) => e.rule === 'E7'), true);
});

test('el validador avisa de un reporte compartido y no exige ancla a imágenes ya insertadas', () => {
  const result = validateManifest(
    {
      docs: [
        { slug: 'a', docPath: 'docs/no-existe-a.md', shots: [{ stepNumber: 1, caption: 'A', zauruPath: '/sales/reports/monthly_item' }] },
        { slug: 'b', docPath: 'docs/no-existe-b.md', shots: [{ stepNumber: 1, caption: 'B', zauruPath: '/sales/reports/monthly_item' }] },
      ],
    },
    { routes: null }
  );
  assert.equal(result.warnings.filter((w) => w.rule === 'W4').length, 1);

  const anchors = validateManifest(
    {
      docs: [
        {
          section: 'compras',
          slug: 'cargos-pagados',
          docPath: 'docs/compras/cargos-pagados.md',
          shots: [
            { stepNumber: 1, caption: 'Ya insertada', zauruPath: '/purchases/paid_charges', insertAfterText: 'línea que no existe' },
            { stepNumber: 99, caption: 'Pendiente', zauruPath: '/purchases/paid_charges/new', insertAfterText: 'línea que no existe' },
          ],
        },
      ],
    },
    { routes: null }
  );
  assert.deepEqual(anchors.warnings.filter((w) => w.rule === 'W1').map((w) => w.shot), [99]);
});

test('--gaps solo pide las refs rotas que el manifiesto no cubre', () => {
  const entry = { section: 'contratos', slug: 'contratos-activos', shots: [{ stepNumber: 1 }, { stepNumber: 2, imageRef: '/img/contratos/especial.jpg' }] };
  const refs = [
    { imgRef: '/img/contratos/contratos-activos-1.png' },
    { imgRef: '/img/contratos/especial.jpg' },
    { imgRef: '/img/contratos/contratos-activos-3.png' },
  ];
  assert.deepEqual(uncoveredRefs(entry, refs).map((r) => r.imgRef), ['/img/contratos/contratos-activos-3.png']);
  assert.equal(uncoveredRefs(null, refs).length, 3);
});
