import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { parseDocument, buildSources, stagingUrl, selectTargets } from '../lib/sources.mjs';
import { refToDisk, candidatePathFor } from '../lib/images.mjs';
import { splitIdParts, resolveIdsInPath } from '../lib/capture.mjs';
import { assertTargetUrl } from '../lib/verification.mjs';
import { captureFingerprint, promotionProblem, shouldCapture, mergeResults, hashBuffer } from '../lib/results.mjs';
import { renderGallery } from '../lib/inventory.mjs';

const SOURCE = 'https://app.zauru.com';
const BASE = 'https://zauru.herokuapp.com';
function figure({ image = '/img/anidada/especial-0b.png', url = SOURCE + '/sales/clients', meta } = {}) {
  return `<figure>\n\n${meta ? '{/* screenshot: ' + JSON.stringify(meta) + ' */}\n\n' : ''}![Listado](${image})\n\n<figcaption><a href="${url}">{"visible"}</a></figcaption>\n</figure>`;
}
const document = (content, docPath = 'docs/ventas/clientes.md') => ({ content, docPath });
const settings = { baseUrl: BASE, scale: 2, hideSelectors: ['#logo'], viewport: { width: 1600, height: 900 } };

test('la asociación usa la propia figura e ignora ejemplos de código y frontmatter', () => {
  const content = '---\ntitle: "Clientes"\n---\n\n```md\n' + figure({ url: SOURCE + '/wrong' }) + '\n```\n\n' + figure() + '\n\nAPI: https://app.zauru.com/also-wrong';
  const parsed = parseDocument(content, 'docs/ventas/clientes.md');
  assert.equal(parsed.issues.length, 0);
  assert.equal(parsed.rows.length, 1);
  assert.equal(parsed.rows[0].zauruPath, '/sales/clients');
  assert.equal(parsed.rows[0].imageRef, '/img/anidada/especial-0b.png');
  assert.equal(content.slice(parsed.rows[0].offset).startsWith('<figure>'), true);
  assert.equal(parsed.rows[0].line, 14);
});

test('admite MDX, referencias Markdown y atributos de img literales', () => {
  const content = '<figure>\n\n![A][foto]\n\n<figcaption>[Origen](https://app.zauru.com/sales/clients)</figcaption>\n</figure>\n\n[foto]: /img/a.png';
  assert.equal(parseDocument(content, 'docs/a.mdx').rows[0].imageRef, '/img/a.png');
  const html = '<figure><img src="/img/a.jpg" alt="A" /><figcaption><a href="https://app.zauru.com/sales/clients">Origen</a></figcaption></figure>';
  assert.equal(parseDocument(html, 'docs/a.md').rows[0].eligible, true);
});

test('sustituye solo el origen y conserva ruta, query y fragmento', () => {
  assert.equal(stagingUrl(SOURCE + '/sales/clients?q=a%20b&scope=all#tab-2', BASE), BASE + '/sales/clients?q=a%20b&scope=all#tab-2');
  for (const url of ['https://evil.test/x', 'https://app.zauru.com.evil.test/x', 'http://app.zauru.com/x', 'https://user@app.zauru.com/x']) assert.throws(() => stagingUrl(url, BASE));
  assert.throws(() => stagingUrl(SOURCE + '/sales/clients', SOURCE));
});

test('faltantes de enlace, múltiples imágenes y SVG se reportan sin inferir una URL', () => {
  for (const content of [
    '<figure>\n\n![A](/img/a.png)\n\n</figure>',
    figure().replace('![Listado]', '![Otra](/img/b.png)\n\n![Listado]'),
    figure({ image: '/img/diagrama.svg' }),
  ]) {
    const s = buildSources([document(content)]);
    assert.equal(s.targets.length, 0);
    assert.equal(s.issues.some((i) => i.severity === 'error'), true);
  }
  const s = buildSources([document('![Manual](/img/manual.png)')]);
  assert.equal(s.targets.length, 0);
  assert.equal(s.issues[0].code, 'unmapped');
});

test('rutas de imágenes seguras, Unicode y nombres especiales', () => {
  assert.equal(refToDisk('/repo', '/img/ventas/importar-precios-0b.png'), '/repo/static/img/ventas/importar-precios-0b.png');
  assert.equal(refToDisk('/repo', '/img/contrase%C3%B1a.jpg'), '/repo/static/img/contraseña.jpg');
  for (const image of ['/img/../private.png', '/img/%2e%2e/private.png', '/img/%2fetc.png', '/img/a%5cb.png', '/elsewhere/a.png', '/img/a.png?q=x', '/img/%00.png']) assert.throws(() => refToDisk('/repo', image));
});

test('las candidatas no pueden escribir en static, tampoco mediante un enlace simbólico', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zauru-candidate-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, 'static', 'img'), { recursive: true });
  fs.symlinkSync(path.join(dir, 'static'), path.join(dir, 'alias'));
  for (const output of ['static', 'static/nested', 'alias']) assert.throws(() => candidatePathFor(dir, path.join(dir, output), '/img/a.png'), /dentro de static/);
  assert.equal(candidatePathFor(dir, path.join(dir, 'runs'), '/img/a.png'), path.join(dir, 'runs', 'img', 'a.png'));
});

test('los metadatos locales conservan acciones y foco sin repetir la URL', () => {
  const meta = { actions: [{ scrollTo: '#additional_data' }], focusSelector: '#additional_data', captureMode: 'preview' };
  const { rows, issues } = parseDocument(figure({ meta }), 'docs/a.md');
  assert.deepEqual(issues, []);
  assert.deepEqual(rows[0].actions, meta.actions);
  assert.equal(rows[0].focusSelector, '#additional_data');
  assert.equal(rows[0].zauruPath, '/sales/clients');
});

test('metadatos inválidos bloquean la imagen en lugar de ejecutar parcialmente', () => {
  for (const meta of [{ url: SOURCE }, { actions: [{ click: 'button' }] }, { actions: [{ click: '#a', waitMs: 1 }] }, { fullPage: 'false' }, { captureMode: 'blocked' }, { expectPath: '//evil.test' }]) {
    const s = buildSources([document(figure({ meta }))]);
    assert.equal(s.targets.length, 0);
    assert.equal(s.issues.some((i) => i.code === 'metadata'), true);
  }
});

test('conflictos se detectan globalmente incluso al filtrar un documento', () => {
  const s = buildSources([
    document(figure(), 'docs/a.md'),
    document(figure({ url: SOURCE + '/payroll/settings' }), 'docs/b.md'),
    document(figure({ image: '/img/valid.png' }), 'docs/c.md'),
  ]);
  assert.equal(selectTargets(s, ['docs/a.md']).length, 0);
  assert.equal(selectTargets(s, ['c']).length, 1);
  assert.equal(s.issues.filter((i) => i.code === 'conflict').length, 2);
});

test('archivo compartido con instrucciones incompatibles no se captura; misma receta se agrupa', () => {
  const duplicate = buildSources([document(figure(), 'docs/a.md'), document(figure(), 'docs/b.md')]);
  assert.equal(duplicate.targets.length, 1);
  assert.equal(duplicate.targets[0].uses.length, 2);
  assert.equal(selectTargets(duplicate, ['docs/b.md']).length, 1);
  const conflict = buildSources([document(figure()), document(figure({ meta: { actions: [{ scrollTo: '#detail' }] } }), 'docs/b.md')]);
  assert.equal(conflict.targets.length, 0);
});

test('un filtro inexistente o ambiguo no dispara una captura global', () => {
  const s = buildSources([document(figure(), 'docs/a/index.md'), document(figure({ image: '/img/b.png' }), 'docs/b/index.md')]);
  assert.throws(() => selectTargets(s, ['missing']), /no encontrado/);
  assert.throws(() => selectTargets(s, ['index']), /ambiguo/);
  assert.equal(selectTargets(s, ['a/index']).length, 1);
});

test('se resuelven marcadores de ID conservando los IDs concretos de la ruta', () => {
  const rows = parseDocument(figure({ url: SOURCE + '/sales/clients/42/cards/:card_id/edit?scope=all#tab' }), 'docs/a.md').rows;
  assert.equal(rows[0].resolveId, true);
  assert.equal(rows[0].search, '?scope=all');
  assert.equal(rows[0].hash, '#tab');
  assert.deepEqual(splitIdParts(rows[0].zauruPath, { placeholdersOnly: true }), [{ literals: ['sales', 'clients', '42', 'cards'], tail: ['edit'] }]);
  const literal = parseDocument(figure({ url: SOURCE + '/sales/clients/42' }), 'docs/a.md').rows[0];
  assert.equal(literal.resolveId, false);
  assert.equal(splitIdParts(literal.zauruPath, { placeholdersOnly: true }), null);
});

test('el resolvedor usa el ID del listado sin sustituir un ID padre literal', async () => {
  const visited = [];
  const page = {
    goto: async (url) => { visited.push(url); return { status: () => 200 }; },
    url: () => visited.at(-1),
    evaluate: async (fn, arg) => arg?.source ? '/sales/clients/42/cards/7/edit' : null,
    waitForTimeout: async () => {},
    waitForLoadState: async () => {},
    locator: () => ({ count: async () => 0 }),
  };
  const resolved = await resolveIdsInPath(page, '/sales/clients/42/cards/:card_id/edit', { placeholdersOnly: true });
  assert.equal(resolved, '/sales/clients/42/cards/7/edit');
  assert.deepEqual(visited, [BASE + '/sales/clients/42/cards']);
});

test('la comprobación de destino rechaza cambio de host, filtros o pestaña', () => {
  const expected = BASE + '/sales/clients/42?q=a#tab';
  assert.doesNotThrow(() => assertTargetUrl(expected, expected));
  for (const actual of [SOURCE + '/sales/clients/42?q=a#tab', BASE + '/sales/clients/42?q=b#tab', BASE + '/sales/clients/42?q=a#other', BASE + '/sales/clients']) assert.throws(() => assertTargetUrl(actual, expected), /aterrizó/);
});

test('captura inicial regenera archivos existentes y una corrección invalida los estados anteriores', () => {
  const shot = buildSources([document(figure())]).targets[0];
  const fingerprint = captureFingerprint(shot, settings);
  assert.equal(shouldCapture({ fileExists: true, fingerprint }), true);
  assert.equal(shouldCapture({ fileExists: true, fingerprint, previous: { status: 'blocked', fingerprint } }), false);
  assert.equal(shouldCapture({ retryFailed: true, fingerprint, previous: { status: 'blocked', fingerprint } }), true);
  for (const status of ['blocked', 'failed', 'verified', 'candidate']) assert.equal(shouldCapture({ fileExists: true, fingerprint, previous: { status, fingerprint: 'anterior', visualReview: 'accepted' } }), true);
});

test('fingerprint cubre URL, acciones, encuadre y configuración de captura', () => {
  const shot = buildSources([document(figure())]).targets[0];
  const fingerprint = captureFingerprint(shot, settings);
  for (const change of [{ targetUrl: shot.targetUrl + '?scope=all' }, { actions: [{ scrollTo: '#details' }] }, { fullPage: true }, { focusSelector: '#x' }]) assert.notEqual(captureFingerprint({ ...shot, ...change }, settings), fingerprint);
  for (const change of [{ scale: 1 }, { hideSelectors: [] }, { baseUrl: SOURCE }, { viewport: { width: 800, height: 600 } }]) assert.notEqual(captureFingerprint(shot, { ...settings, ...change }), fingerprint);
  assert.equal(captureFingerprint(shot, { ...settings, viewport: { height: 900, width: 1600 } }), fingerprint);
});

test('promoción exige aceptación, receta vigente y bytes originales', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'zauru-promote-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const candidatePath = path.join(dir, 'candidate.png');
  fs.writeFileSync(candidatePath, 'original');
  const shot = buildSources([document(figure())]).targets[0];
  const row = { status: 'candidate', visualReview: 'accepted', candidatePath, hash: hashBuffer('original'), fingerprint: captureFingerprint(shot, settings) };
  assert.equal(promotionProblem(row, shot, settings), null);
  assert.match(promotionProblem({ ...row, visualReview: 'pending' }, shot, settings), /revisión/);
  assert.match(promotionProblem(row, undefined, settings), /receta/);
  assert.match(promotionProblem(row, { ...shot, targetUrl: shot.targetUrl + '?a=1' }, settings), /cambiaron/);
  fs.writeFileSync(candidatePath, 'modificado');
  assert.match(promotionProblem(row, shot, settings), /archivo candidato cambió/);
});

test('una corrida parcial conserva otras imágenes pero nunca hereda aprobaciones', () => {
  const result = mergeResults({ version: 1, images: { a: { visualReview: 'accepted', promotedAt: 'ayer' }, b: { status: 'blocked' } } }, { a: { status: 'candidate', visualReview: 'pending' } });
  assert.deepEqual(result.images.a, { status: 'candidate', visualReview: 'pending' });
  assert.equal(result.images.b.status, 'blocked');
});

test('galería escapa texto del documento e incluye candidatas', () => {
  const s = buildSources([document(figure({ image: '/img/a.png' }))]);
  s.targets[0].caption = '<script>alert(1)</script>';
  const html = renderGallery(s, { images: {} }, '/tmp/review', '/repo');
  assert.equal(html.includes('<script>'), false);
  assert.equal(html.includes('&lt;script&gt;'), true);
});
