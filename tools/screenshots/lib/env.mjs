import fs from 'node:fs';
import path from 'node:path';

/** Directorio de esta herramienta (tools/screenshots) y raíz del repo. */
export const TOOL_DIR = path.resolve(import.meta.dirname, '..');
export const REPO_ROOT = path.resolve(TOOL_DIR, '..', '..');

/**
 * Carga variables de tools/screenshots/.env en process.env (sin sobrescribir
 * variables ya definidas en el entorno). Soporta valores con comillas internas.
 */
export function loadEnv() {
  const envPath = path.join(TOOL_DIR, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const rawLine of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    // Quita comillas solo si envuelven TODO el valor
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    if (/^[A-Z0-9_]+$/.test(key) && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

/** Lee una variable de entorno o lanza un error claro. */
export function requireEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Falta ${key}. Crea tools/screenshots/.env a partir de .env.example y define ${key}.`
    );
  }
  return value;
}

/** Lista separada por comas desde una variable de entorno. */
export function envList(key, fallback) {
  const value = process.env[key];
  if (!value) return fallback;
  return value.split(',').map((s) => s.trim()).filter(Boolean);
}
