/**
 * json-payload.mjs — extrae el objeto JSON de una respuesta de LLM.
 *
 * Los modelos suelen devolver JSON casi válido: comillas sin escapar
 * (líneas del manual como `Ir a "Contabilidad"`), comas faltantes,
 * comas finales, o texto después del objeto.
 */
import { jsonrepair } from 'jsonrepair';

function tryParse(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (error) {
    return { ok: false, error };
  }
}

/** Posición donde JSON.parse ya cerró un valor y encontró más texto. */
function unexpectedTrailingAt(error) {
  const match = String(error?.message || '').match(/after JSON at position (\d+)/);
  return match ? Number(match[1]) : null;
}

export function parseJsonPayload(text) {
  const fenced = String(text ?? '').match(/```(?:json)?\s*([\s\S]*?)```/i);
  const source = (fenced ? fenced[1] : String(text ?? '')).trim();
  const start = source.indexOf('{');
  if (start === -1) throw new Error(`Respuesta sin JSON: ${source.slice(0, 200)}`);

  const fromBrace = source.slice(start);
  const lastBrace = fromBrace.lastIndexOf('}');
  const slice = lastBrace === -1 ? fromBrace : fromBrace.slice(0, lastBrace + 1);

  const direct = tryParse(slice);
  if (direct.ok) return direct.value;

  const trailingAt = unexpectedTrailingAt(direct.error);
  if (trailingAt != null) {
    const head = tryParse(slice.slice(0, trailingAt));
    if (head.ok) return head.value;
  }

  let lastErr = direct.error;
  for (const candidate of [slice, fromBrace]) {
    try {
      return JSON.parse(jsonrepair(candidate));
    } catch (error) {
      lastErr = error;
    }
  }
  throw lastErr;
}
