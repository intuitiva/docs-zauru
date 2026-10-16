import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { TOOL_DIR, loadEnv, requireEnv } from './env.mjs';

export const STORAGE_STATE_PATH = path.join(TOOL_DIR, 'storageState.json');

export const baseUrl = () =>
  (process.env.ZAURU_BASE_URL || 'https://zauru.herokuapp.com').replace(/\/$/, '');

/**
 * true si la URL actual es la página de login.
 * Con OAuth, la app redirige a otro dominio (p.ej. zauru-oauth-staging.*):
 * estar fuera del host de la app = no hay sesión. También cubre rutas de
 * login en el mismo host por compatibilidad.
 */
export const isSignInUrl = (url) => {
  try {
    const u = new URL(url);
    const base = new URL(baseUrl());
    if (u.host !== base.host) return true; // proveedor OAuth
    if (u.pathname.startsWith('/users/auth/')) return true; // ida o callback sin sesión
    return u.pathname.startsWith('/login') || u.pathname.startsWith('/users/sign_in');
  } catch {
    return false;
  }
};

/**
 * Lanza Chromium y devuelve un contexto autenticado en Zauru.
 * Reutiliza storageState.json si existe y sigue siendo válido; si no,
 * hace login con ZAURU_EMAIL / ZAURU_PASSWORD y lo guarda.
 */
export async function getAuthenticatedContext({ headless = true, onContext } = {}) {
  loadEnv();
  const browser = await chromium.launch({ headless });
  const scale = Number(process.env.SCREENSHOT_SCALE || 2);

  const newContext = async (storageState) => {
    const context = await browser.newContext({
      viewport: { width: 1600, height: 900 }, // 16:9
      deviceScaleFactor: scale,
      ...(storageState ? { storageState } : {}),
    });
    if (onContext) await onContext(context);
    return context;
  };

  // 1) Intenta reutilizar la sesión guardada
  if (fs.existsSync(STORAGE_STATE_PATH)) {
    const context = await newContext(STORAGE_STATE_PATH);
    const page = await context.newPage();
    try {
      await page.goto(baseUrl(), { waitUntil: 'domcontentloaded', timeout: 30000 });
      if (!isSignInUrl(page.url())) {
        await page.close();
        return { browser, context, relogin: () => login(browser, newContext) };
      }
    } catch {
      // ignora y reintenta con login fresco
    }
    await context.close();
  }

  // 2) Login fresco
  try {
    return await login(browser, newContext);
  } catch (err) {
    await browser.close();
    throw err;
  }
}

async function login(browser, newContext) {
  const email = requireEnv('ZAURU_EMAIL');
  const password = requireEnv('ZAURU_PASSWORD');
  // Formulario OAuth de Zauru: POST /login con campos "username" y "password"
  const emailInput = process.env.ZAURU_EMAIL_INPUT || 'input[name="username"]';
  const passwordInput = process.env.ZAURU_PASSWORD_INPUT || 'input[name="password"]';
  const submitInput = process.env.ZAURU_SUBMIT_INPUT || 'button[type="submit"]';

  const context = await newContext(undefined);
  const page = await context.newPage();
  // Sin sesión, la app redirige sola al proveedor OAuth con el formulario
  await page.goto(baseUrl(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForSelector(emailInput, { timeout: 30000 });
  await page.fill(emailInput, email);
  await page.fill(passwordInput, password);
  await Promise.all([
    page
      .waitForURL((u) => {
        const href = u.toString();
        try {
          return !isSignInUrl(href) || new URL(href).pathname.includes('/callback');
        } catch {
          return false;
        }
      }, { timeout: 45000 })
      .catch(() => {}),
    page.click(submitInput),
  ]);
  // El callback de OAuth puede pasar por varias redirecciones; espera a que asiente
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

  if (isSignInUrl(page.url())) {
    const title = await page.title().catch(() => '');
    const callback = new URL(page.url()).pathname.includes('/callback');
    await browser.close();
    if (callback || /doesn't exist|no existe|404/i.test(title)) {
      throw new Error(
        'el callback OAuth GET /users/auth/zauru/callback responde 404. No se inició sesión, no se consultó ninguna pantalla y no se modificó ningún registro.'
      );
    }
    throw new Error(
      'Login falló: seguimos en la página del proveedor OAuth. Revisa ZAURU_EMAIL/ZAURU_PASSWORD y los selectores ZAURU_*_INPUT en .env'
    );
  }

  await context.storageState({ path: STORAGE_STATE_PATH });
  await page.close();
  return { browser, context, relogin: () => login(browser, newContext) };
}
