/**
 * actions.mjs — Forma válida de las `actions` de un shot.
 */

const BARE_TAG = /^(a|button|input|select|textarea|form|table|tbody|tr|td|div|span|li|ul)$/i;
export const SELECTOR_ACTIONS = new Set(['click', 'waitFor', 'scrollTo']);

/** Selector ejecutable: no vacío, balanceado y más específico que una etiqueta suelta. */
export function usableSelector(selector) {
  const s = typeof selector === 'string' ? selector.trim() : '';
  if (!s || BARE_TAG.test(s) || /:contains\(/.test(s)) return false;
  let parens = 0;
  let brackets = 0;
  let quote = null;
  for (const ch of s) {
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') parens++;
    else if (ch === ')' && --parens < 0) return false;
    else if (ch === '[') brackets++;
    else if (ch === ']' && --brackets < 0) return false;
  }
  return !quote && parens === 0 && brackets === 0;
}

/**
 * Actions tal como las escribe el LLM → actions ejecutables.
 * `{click: {selector}}` pasa a string y `:contains(` a `:has-text(`.
 * Lo que no se puede ejecutar se descarta y se devuelve en `dropped`.
 */
export function normalizeActions(actions) {
  const kept = [];
  const dropped = [];
  for (const action of Array.isArray(actions) ? actions : []) {
    const [key, raw] = Object.entries(action && typeof action === 'object' ? action : {})[0] || [];
    if (SELECTOR_ACTIONS.has(key)) {
      const value = raw && typeof raw === 'object' ? raw.selector : raw;
      const selector = typeof value === 'string' ? value.trim().replace(/:contains\(/g, ':has-text(') : '';
      if (usableSelector(selector)) kept.push({ [key]: selector });
      else dropped.push(action);
    } else if (key === 'fill' || key === 'select') {
      const selector = String(raw?.selector || '').trim();
      const value = raw?.value == null ? '' : String(raw.value);
      if (usableSelector(selector) && value !== '') kept.push({ [key]: { selector, value } });
      else dropped.push(action);
    } else if (key === 'waitMs') {
      kept.push({ waitMs: Number(raw) || 500 });
    } else if (key) {
      dropped.push(action);
    }
  }
  return { actions: kept.slice(0, 3), dropped: [...dropped, ...kept.slice(3)] };
}
