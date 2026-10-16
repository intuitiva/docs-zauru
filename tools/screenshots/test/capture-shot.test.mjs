import assert from 'node:assert/strict';
import test from 'node:test';
import { captureOnPage } from '../lib/capture-shot.mjs';
import { planSafeShot, MUTATING_GET_SEGMENTS } from '../lib/safety.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { REPO_ROOT } from '../lib/env.mjs';
import { parseDocument } from '../lib/sources.mjs';

function fixture({ status = 200, redirect, blank = false, clickTarget } = {}) {
  let url;
  const events = [];
  const page = {
    goto: async (target) => { url = redirect || target; events.push(['goto', target]); return { status: () => status }; },
    url: () => url,
    evaluate: async (fn, arg) => {
      const source = String(fn);
      if (Array.isArray(arg)) { events.push(['hide', arg]); return; }
      if (source.includes('length <')) throw new Error('comprobación inesperada');
      if (source.includes('.trim().length')) return blank ? 0 : 100;
      if (source.includes('dataTables_processing')) return false;
      return null;
    },
    waitForSelector: async () => {},
    waitForFunction: async () => {},
    waitForLoadState: async () => {},
    click: async (selector) => { events.push(['click', selector]); if (clickTarget) url = clickTarget; },
    screenshot: async (options) => { events.push(['screenshot', options]); return Buffer.from('fixture image'); },
  };
  return { page, events };
}

const options = () => ({ mutatingNames: MUTATING_GET_SEGMENTS, gateState: { blockedDocument: null }, hideSelectors: ['#logo'], quality: 80 });
const shot = (extra = {}) => ({ imageRef: '/img/a.png', zauruPath: '/sales/clients', search: '?scope=all', hash: '#details', ...extra });

test('la orquestación conserva filtros, ejecuta acciones y devuelve bytes de la candidata', async () => {
  const { page, events } = fixture();
  const config = shot({ actions: [{ click: '#details-tab' }] });
  const captured = await captureOnPage(page, config, planSafeShot(config), options());
  assert.deepEqual(events[0], ['goto', 'https://zauru.herokuapp.com/sales/clients?scope=all#details']);
  assert.equal(events.some(([event]) => event === 'click'), true);
  assert.equal(events.some(([event]) => event === 'hide'), true);
  assert.deepEqual(events.at(-1), ['screenshot', { type: 'png' }]);
  assert.equal(captured.buffer.toString(), 'fixture image');
  assert.equal(captured.resolvedPath, '/sales/clients');
});

test('un redirect inicial no ejecuta acciones ni guarda captura de otra página', async () => {
  const { page, events } = fixture({ redirect: 'https://zauru.herokuapp.com/sales/other' });
  const config = shot({ actions: [{ click: '#danger-on-wrong-screen' }] });
  await assert.rejects(captureOnPage(page, config, planSafeShot(config), options()), /aterrizó/);
  assert.equal(events.some(([event]) => ['click', 'screenshot'].includes(event)), false);
});

test('HTTP 500 y contenido vacío nunca producen una candidata', async () => {
  for (const failure of [{ status: 500 }, { blank: true }]) {
    const { page, events } = fixture(failure);
    const config = shot();
    await assert.rejects(captureOnPage(page, config, planSafeShot(config), options()), /HTTP 500|contenido visible/);
    assert.equal(events.some(([event]) => event === 'screenshot'), false);
  }
});

test('una referencia JPEG genera JPEG y conserva la opción de página completa', async () => {
  const { page, events } = fixture();
  const config = shot({ imageRef: '/img/a.jpg', fullPage: true });
  await captureOnPage(page, config, planSafeShot(config), options());
  assert.deepEqual(events.at(-1), ['screenshot', { type: 'jpeg', quality: 80, fullPage: true }]);
});

test('las recetas migradas de navegación esperan la página posterior al enlace', async () => {
  for (const [docPath, imageRef, target] of [
    ['docs/produccion/listas-de-materiales.md', '/img/produccion/listas-de-materiales-1.png', '/production/bill_of_materials/new'],
    ['docs/compras/ordenes-de-compra/consolidar-varias-ordenes-de-compra.md', '/img/compras/consolidar-varias-ordenes-de-compra-5.png', '/purchases/consolidates/new_for_special_invoice'],
  ]) {
    const config = parseDocument(fs.readFileSync(path.join(REPO_ROOT, docPath), 'utf8'), docPath).rows.find((r) => r.imageRef === imageRef);
    const plan = planSafeShot(config);
    assert.equal(plan.expectPath, target);
    const { page, events } = fixture({ clickTarget: 'https://zauru.herokuapp.com' + target });
    await captureOnPage(page, config, plan, options());
    assert.equal(events.at(-1)[0], 'screenshot');
  }
});
