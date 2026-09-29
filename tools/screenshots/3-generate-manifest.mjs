#!/usr/bin/env node
/**
 * 3-generate-manifest.mjs — Genera (o actualiza) manifest.json.
 *
 * Diferencia clave con la versión vieja: el LLM ya NO inventa URLs.
 * Recibe como candidatos ÚNICAMENTE rutas reales de Zauru (routes.json,
 * extraído de baculo, filtrado por módulo según lib/sections.mjs) con sus
 * etiquetas de nav.json, y debe copiarlas verbatim. Todo path devuelto que
 * no exista en routes.json se descarta y queda en el log.
 *
 * Requiere OPENROUTER_API_KEY en .env. Modelo con MANIFEST_MODEL.
 *
 * Uso:
 *   node 3-generate-manifest.mjs --gaps [--dry-run]   # Tier A: refs rotas + Tier B: sin imágenes
 *   node 3-generate-manifest.mjs --docs docs/ventas/clientes.md [...]
 *   node 3-generate-manifest.mjs --missing            # todos los .md sin imágenes
 *
 * Después de generarlo, valida SIEMPRE: node 4-validate-manifest.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { REPO_ROOT, loadEnv, requireEnv } from './lib/env.mjs';
import {
  findBrokenRefDocs,
  findNoImageDocs,
  inferShotsFromBrokenRefs,
  isApiCodeDoc,
  looksLikeDetailPath,
  parseImageRefs,
  resolveZauruPath,
} from './lib/gaps.mjs';
import { readRoutes, readNav, readManifest, writeManifest, manifestPath, MAX_SHOTS_PER_DOC } from './lib/manifest.mjs';
import { candidateMatches } from './lib/routes.mjs';
import { prefixesForSection } from './lib/sections.mjs';

loadEnv();

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const docsDir = path.join(REPO_ROOT, 'docs');

const routesData = readRoutes();
if (!routesData) {
  console.error('No existe routes.json. Corre primero: node 1-extract-routes.mjs');
  process.exit(1);
}
const nav = readNav();
if (!nav.length) {
  console.error('nav.json está vacío o no existe. Corre primero: node 2-discover-nav.mjs');
  process.exit(1);
}

// ── Candidatos por módulo: patrones GET "fotografiables" + etiquetas del menú ──
const NON_UI_LAST_SEGMENT = /^(datatables.*|.*_datatables|datatables_.*)$|(^|_)(export|autocomplete|tag_cloud|download_pdf|print|gen_|check_|refresh_|fix_|get_|unmatched|associate|dissociate)(_|$)|_data(s|set)?$|^(voided|resume|unclose|rebound|retry_object_creation)$/;
const NON_UI_KIND = new Set(['custom-member']);

function screenshotCandidates(prefixes) {
  const navByPath = new Map(nav.map((n) => [n.path, n.label]));
  const out = [];
  for (const r of routesData.routes) {
    if (NON_UI_KIND.has(r.kind)) continue;
    if (prefixes.length && !prefixes.some((p) => r.path === `/${p}` || r.path.startsWith(`/${p}/`))) continue;
    const last = r.path.split('/').pop();
    if (last.startsWith(':') ? /\/(datatables|export)$/.test(r.path) : NON_UI_LAST_SEGMENT.test(last)) continue;
    // etiqueta: nav exacto, o nav del listado equivalente (para detalles con :id)
    let label = navByPath.get(r.path) || '';
    if (!label && r.path.includes(':id')) {
      const listing = r.path.replace(/\/:id(\/.*)?$/, '');
      const base = navByPath.get(listing);
      if (base) label = `${base} (detalle)`;
    }
    out.push({ path: r.path, kind: r.kind, ...(label ? { label } : {}) });
  }
  return out;
}

function docMeta(mdPath) {
  const rel = path.relative(REPO_ROOT, mdPath);
  // sección = primera carpeta bajo docs/ (soporta docs anidados)
  const section = path.relative(path.join(REPO_ROOT, 'docs'), mdPath).split(path.sep)[0];
  const slug = path.basename(mdPath, '.md');
  const content = fs.readFileSync(mdPath, 'utf8');
  const existing = content.match(new RegExp(`/img/${section}/${slug}-\\d+\\.`, 'g'));
  return { rel, section, slug, content, existingImageCount: existing ? existing.length : 0 };
}

function collectDocs() {
  const i = args.indexOf('--docs');
  if (i !== -1) {
    const list = [];
    for (let j = i + 1; j < args.length && !args[j].startsWith('--'); j++) {
      list.push(path.resolve(REPO_ROOT, args[j]));
    }
    return list;
  }
  if (args.includes('--missing')) return findNoImageDocs(docsDir);
  return null;
}

function loadOrCreateManifest() {
  const manifest = fs.existsSync(manifestPath())
    ? readManifest()
    : { generatedBy: '3-generate-manifest.mjs', zauruBaseUrl: process.env.ZAURU_BASE_URL || 'https://zauru.herokuapp.com', imageFormat: 'png', docs: [] };
  manifest.generatedBy = '3-generate-manifest.mjs';
  manifest.imageFormat = 'png';
  if (!Array.isArray(manifest.docs)) manifest.docs = [];
  return manifest;
}

function upsertDoc(manifest, entry) {
  const at = manifest.docs.findIndex((d) => d.docPath === entry.docPath);
  if (at === -1) manifest.docs.push(entry);
  else manifest.docs[at] = entry;
}

/** Sustituye :param por el primer nav-path real que case con el patrón. */
function navPathMatchesPattern(navPath, pattern) {
  const ps = pattern.split('/');
  const ns = navPath.split('/');
  if (ps.length !== ns.length) return false;
  return ps.every((seg, i) => (seg.startsWith(':') ? /^\d+$/.test(ns[i]) || ns[i] === seg : seg === ns[i]));
}

// ── Prompts: el LLM solo ELIGE de la lista y redacta ────────────────────────
const SYSTEM_PROMPT = `Eres el asistente que define qué screenshots capturar para la documentación de Zauru (ERP web en español).

Responde ÚNICAMENTE con JSON válido (sin markdown, sin explicaciones) con esta forma:
{"docs":[{"shots":[{"stepNumber":number,"caption":string,"zauruPath":string,"resolveId":boolean,"actions":[],"waitForSelector":[string],"insertAfterText":string}]}]}

Reglas ESTRICTAS:
- "zauruPath": copia VERBATIM el campo "path" de UNO de los CANDIDATOS provistos (mantén el segmento ":id" tal cual está). Está PROHIBIDO inventar rutas. Si ningún candidato corresponde a la pantalla descrita, usa "" y no la pidas.
- "resolveId": true si el zauruPath elegido contiene ":id" (vista de detalle: el runner usará un registro real del listado). false/omitir para listados ("/recurso") y formularios ("/recurso/new").
- "actions": opcional. SOLO cuando el paso requiere un estado distinto de la misma página (pestaña, filtro, modal). Elementos válidos: {"click":"selector css"}, {"fill":{"selector":"css","value":"texto"}}, {"select":{"selector":"css","value":"valor"}}, {"waitFor":"selector css"}, {"waitMs":500}. Máximo 3 por shot. Si dos shots tienen el MISMO zauruPath, sus actions DEBEN diferir.
- "caption": descripción concisa en español de lo que muestra la captura.
- "insertAfterText": la línea EXACTA del markdown (completa) tras la cual insertar la imagen. Cópiala textualmente.
- "waitForSelector": 2-4 selectores CSS candidatos que existan en esa pantalla (tablas, formularios, contenedores).
- "stepNumber": empieza en existingImageCount+1 y avanza de a uno, sin saltos.
- Máximo ${MAX_SHOTS_PER_DOC} shots. Solo pantallas con valor (listados, formularios, vistas de detalle, reportes). No pidas secciones de solo texto ni ejemplos de API (curl).
- Si el documento no necesita capturas, devuelve "shots": [].`;

const PATH_FILL_SYSTEM = `Completas zauruPath para shots de screenshots de Zauru ya inferidos. Cada shot tiene un stepNumber y un caption que describe la pantalla que el manual espera mostrar.

Responde ÚNICAMENTE con JSON válido:
{"shots":[{"stepNumber":number,"zauruPath":string,"resolveId":boolean,"actions":[]}]}

Reglas:
- "zauruPath": copia VERBATIM el "path" de uno de los CANDIDATOS (con ":id" tal cual). PROHIBIDO inventar rutas. Devuelve EXACTAMENTE un objeto por CADA stepNumber que recibiste, CONSERVANDO el valor del stepNumber (no reenumerar).
- Para cada shot, elige el candidato que corresponda a LO QUE DESCRIBE su caption en el contexto del documento.
- Si un shot ya viene con zauruPath NO vacío, CONSERVALO tal cual (es un ancla confiable) salvo que sea claramente incorrecto.
- Sub-estados del mismo módulo: si el caption habla de abrir el detalle/editar/pestañas del recurso que otro shot ya muestra, usa la ruta de DETALLE correspondiente (el patrón con ":id" del mismo listado, con "resolveId": true) o el formulario "/recurso/:id/edit"; si es una pestaña/sección de la MISMA pantalla, repite la ruta y diferénciala con "actions" (pestañas, botones, filtros): {"click":"selector css"}, {"fill":{"selector":"css","value":"texto"}}, {"select":{"selector":"css","value":"valor"}}, {"waitFor":"selector css"}, {"waitMs":500} (máximo 3 por shot).
- NO devuelvas "" si existe un candidato razonable; solo "" cuando NINGUNO corresponde de verdad.
- "resolveId": true si el path elegido contiene ":id" (vista de detalle).`;

function candidatesBlock(candidates, meta) {
  if (!candidates.length) {
    return 'No hay CANDIDATOS para esta sección. Si el documento necesita capturas de pantallas que no están en la lista, devuelve "shots": [].';
  }
  const list = candidates
    .map((c) => `${c.path} [${c.kind}]${c.label ? ` — ${c.label}` : ''}`)
    .join('\n');
  return `CANDIDATOS (rutas reales de Zauru para el módulo "${meta.section}"; usa SOLO estos):\n${list}`;
}

function buildUserPrompt(meta, candidates) {
  return `${candidatesBlock(candidates, meta)}

Documento a procesar:
- docPath: ${meta.rel}
- section: ${meta.section}
- slug: ${meta.slug}
- existingImageCount: ${meta.existingImageCount}

Contenido markdown:
---
${meta.content}
---`;
}

function buildPathFillPrompt(meta, candidates, shots) {
  return `${candidatesBlock(candidates, meta)}

docPath: ${meta.rel}
section: ${meta.section}
slug: ${meta.slug}

Shots a completar (stepNumber + caption describen la pantalla esperada; completa zauruPath / resolveId / actions):
${JSON.stringify(shots, null, 2)}

Contenido markdown (contexto completo):
---
${meta.content.slice(0, 14000)}
---`;
}

function parseJsonPayload(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`Respuesta sin JSON: ${text.slice(0, 200)}`);
  return JSON.parse(text.slice(start, end + 1));
}

async function openRouterChat(system, user, { retries = 1, netRetries = 3 } = {}) {
  const apiKey = requireEnv('OPENROUTER_API_KEY');
  const model = process.env.MANIFEST_MODEL || 'z-ai/glm-5.2:free';
  let lastErr;

  let jsonRetried = false;
  for (let attempt = 0; attempt <= netRetries; attempt++) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://docs.zauru.com',
        'X-Title': 'docs-zauru screenshot manifest',
      },
      body: JSON.stringify({
        model,
        temperature: jsonRetried ? 0.1 : 0.2,
        messages: [
          { role: 'system', content: system },
          {
            role: 'user',
            content: jsonRetried
              ? `${user}\n\nIMPORTANTE: la respuesta anterior no era JSON válido. Responde SOLO con un objeto JSON válido, sin markdown.`
              : user,
          },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      // 429/5xx de proveedores gratuitos: reintenta con backoff breve
      if ((res.status === 429 || res.status >= 500) && attempt < netRetries) {
        const wait = Math.min(20000, 3000 * (attempt + 1));
        console.log(`(rate-limit ${res.status}, reintentando en ${wait / 1000}s)`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      throw new Error(`OpenRouter HTTP ${res.status}: ${body.slice(0, 300)}`);
    }
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    try {
      return parseJsonPayload(text);
    } catch (err) {
      lastErr = err;
      if (jsonRetried) break;
      jsonRetried = true;
      attempt--; // reintenta por JSON inválido sin consumir netRetries
    }
  }
  throw lastErr;
}

const ALLOWED_ACTIONS = new Set(['click', 'fill', 'select', 'waitFor', 'waitMs', 'scrollTo']);

/** Normaliza el shot del LLM y lo valida contra routes.json. null = descartar. */
function normalizeShot(rawShot, stepNumber, patterns) {
  const zauruPath = String(rawShot.zauruPath || '').trim();
  const route = zauruPath ? candidateMatches(patterns, zauruPath) : null;
  if (zauruPath && !route) return { shot: null, reason: `ruta no existente en routes.json: ${zauruPath}` };

  let actions = Array.isArray(rawShot.actions) ? rawShot.actions : undefined;
  if (actions) {
    actions = actions
      .map((a) => {
        if (typeof a !== 'object' || !a) return null;
        const [key, value] = Object.entries(a)[0] || [];
        if (!ALLOWED_ACTIONS.has(key)) return null;
        return { [key]: value };
      })
      .filter(Boolean)
      .slice(0, 3);
    if (!actions.length) actions = undefined;
  }

  const shot = {
    stepNumber,
    caption: String(rawShot.caption || '').trim(),
    zauruPath,
    ...(zauruPath && (rawShot.resolveId === true || looksLikeDetailPath(zauruPath)) ? { resolveId: true } : {}),
    ...(actions ? { actions } : {}),
    waitForSelector: Array.isArray(rawShot.waitForSelector) ? rawShot.waitForSelector.map(String).filter(Boolean) : [],
    insertAfterText: String(rawShot.insertAfterText || '').trim(),
  };
  return { shot, reason: null };
}

async function callLlmForDoc(meta, candidates) {
  const result = await openRouterChat(SYSTEM_PROMPT, buildUserPrompt(meta, candidates));
  return result?.docs?.[0];
}

async function callLlmForPaths(meta, candidates, shots) {
  const result = await openRouterChat(PATH_FILL_SYSTEM, buildPathFillPrompt(meta, candidates, shots));
  const filled = Array.isArray(result?.shots) ? result.shots : [];
  const byStep = new Map(filled.map((s) => [Number(s.stepNumber), s]));
  return shots.map((s, i) => {
    // match por stepNumber; si el LLM renumeró, casar por orden de respuesta
    const f = byStep.get(s.stepNumber) ?? (filled.length === shots.length ? filled[i] : undefined);
    const zauruPath = String(f?.zauruPath || s.zauruPath || '').trim();
    const route = zauruPath ? candidateMatches(routesData.routes, zauruPath) : null;
    if (zauruPath && !route) return { ...s, zauruPath: '' }; // enjaulado: descarta lo inventado
    let actions = Array.isArray(f?.actions) ? f.actions : undefined;
    if (actions) {
      actions = actions
        .map((a) => {
          if (typeof a !== 'object' || !a) return null;
          const [key, value] = Object.entries(a)[0] || [];
          if (!ALLOWED_ACTIONS.has(key)) return null;
          return { [key]: value };
        })
        .filter(Boolean)
        .slice(0, 3);
      if (!actions.length) actions = undefined;
    }
    return {
      ...s,
      zauruPath,
      ...(actions ? { actions } : {}),
      ...(zauruPath && (f?.resolveId || looksLikeDetailPath(zauruPath)) ? { resolveId: true } : {}),
    };
  });
}

function applyResolvedPath(shots, resolved) {
  return shots.map((s) => {
    const zauruPath = s.zauruPath || resolved.path || '';
    const out = { ...s, zauruPath };
    if (zauruPath && (s.resolveId || looksLikeDetailPath(zauruPath))) out.resolveId = true;
    else delete out.resolveId;
    return out;
  });
}

// ── Procesamiento por doc ───────────────────────────────────────────────────
const stats = {
  generated: 0,
  dropped: [], // shots descartados por ruta inexistente
  skippedApi: [],
  errors: [],
};

async function processLlmDocs(mdFiles, manifest) {
  for (const mdPath of mdFiles) {
    const meta = docMeta(mdPath);
    if (isApiCodeDoc(mdPath, meta.content)) {
      stats.skippedApi.push(meta.rel);
      console.log(`↷ ${meta.rel} — omitido (API/código)`);
      continue;
    }
    const candidates = screenshotCandidates(prefixesForSection(meta.section));
    process.stdout.write(`→ ${meta.rel} (${candidates.length} candidatos) … `);
    try {
      const entry = await callLlmForDoc(meta, candidates);
      if (!entry || !Array.isArray(entry.shots)) throw new Error('JSON sin docs[0].shots');
      const shots = [];
      for (let i = 0; i < Math.min(entry.shots.length, MAX_SHOTS_PER_DOC); i++) {
        const stepNumber = meta.existingImageCount + 1 + i;
        const { shot, reason } = normalizeShot(entry.shots[i], stepNumber, routesData.routes);
        if (shot) shots.push(shot);
        else if (reason) stats.dropped.push(`${meta.slug}: ${reason}`);
      }
      upsertDoc(manifest, {
        section: meta.section,
        slug: meta.slug,
        docPath: meta.rel,
        existingImageCount: meta.existingImageCount,
        shots,
        source: 'llm',
      });
      stats.generated++;
      console.log(`${shots.length} shots válidos${entry.shots.length > shots.length ? ` (${entry.shots.length - shots.length} descartados)` : ''}`);
    } catch (err) {
      stats.errors.push({ doc: meta.rel, error: String(err) });
      console.log(`ERROR: ${err}`);
    }
  }
}

async function processGaps(manifest) {
  const broken = findBrokenRefDocs(docsDir, REPO_ROOT);
  const brokenPaths = new Set(broken.map((b) => b.mdPath));

  console.log(`\n── Tier A: refs rotas (${broken.length} docs) ──`);
  for (const doc of broken) {
    const stepNums = doc.brokenRefs.map((r) => r.stepNumber);
    let shots = inferShotsFromBrokenRefs(doc.content, doc.section, doc.slug, stepNums);
    const candidates = screenshotCandidates(prefixesForSection(doc.section));

    // El LLM asigna ruta POR SHOT (la heurística nav a granel repetiría la
    // misma URL en todos los pasos → E5). nav entra como etiquetas de candidatos.
    if (dryRun) {
      console.log(`… ${doc.docPath} — ${shots.length} shots (pendiente LLM)`);
    } else {
      process.stdout.write(`→ ${doc.docPath} — rutas vía LLM (${candidates.length} candidatos) … `);
      try {
        const meta = { rel: doc.docPath, section: doc.section, slug: doc.slug, content: doc.content, existingImageCount: 0 };
        shots = await callLlmForPaths(meta, candidates, shots);
        // revalida cada ruta y normaliza
        shots = shots.map((s) => {
          const p = String(s.zauruPath || '').trim();
          if (p && !candidateMatches(routesData.routes, p)) {
            stats.dropped.push(`${doc.slug}-${s.stepNumber}: LLM devolvió ruta inexistente ${p}`);
            return { ...s, zauruPath: '' };
          }
          return s;
        });
        const unresolved = shots.filter((s) => !s.zauruPath).length;
        console.log(unresolved ? `${shots.length - unresolved}/${shots.length} con ruta (${unresolved} vacíos)` : `${shots.length} shots`);
      } catch (err) {
        stats.errors.push({ doc: doc.docPath, error: String(err) });
        console.log(`ERROR: ${err}`);
      }
    }

    upsertDoc(manifest, {
      section: doc.section,
      slug: doc.slug,
      docPath: doc.docPath,
      existingImageCount: doc.content.split('\n').filter((l) => l.includes(`/img/${doc.section}/${doc.slug}-`)).length,
      shots,
      source: 'broken-refs',
    });
  }

  const noImage = findNoImageDocs(docsDir).filter((p) => !brokenPaths.has(p));
  console.log(`\n── Tier B: sin imágenes (${noImage.length} docs) ──`);
  if (dryRun) {
    for (const mdPath of noImage) {
      const meta = docMeta(mdPath);
      if (isApiCodeDoc(mdPath, meta.content)) {
        stats.skippedApi.push(meta.rel);
        console.log(`↷ ${meta.rel} — omitido (API/código)`);
      } else {
        console.log(`… ${meta.rel} — pendiente LLM`);
      }
    }
  } else {
    await processLlmDocs(noImage, manifest);
  }
}

function printSummary() {
  console.log('\n── Resumen ──');
  console.log(`  Docs generados/actualizados: ${stats.generated}`);
  console.log(`  Shots descartados (ruta inexistente): ${stats.dropped.length}`);
  for (const d of stats.dropped) console.log(`    · ${d}`);
  console.log(`  Omitidos API/código: ${stats.skippedApi.length}`);
  for (const d of stats.skippedApi) console.log(`    · ${d}`);
  if (stats.errors.length) {
    console.log(`  Errores: ${stats.errors.length}`);
    for (const e of stats.errors) console.log(`    ✗ ${e.doc}: ${e.error}`);
  }
}

// ── Main ────────────────────────────────────────────────────────────────────
const manifest = loadOrCreateManifest();

// --regen slug1,slug2: repara docs completos. Trata TODAS sus refs como
// pendientes (captions/insertAfterText salen del .md; rutas vía nav o LLM
// enjaulado). Útil tras 4-validate para docs con errores.
const regenSlugs = (() => {
  const i = args.indexOf('--regen');
  return i !== -1 && args[i + 1] ? args[i + 1].split(',').map((s) => s.trim()) : null;
})();

if (regenSlugs) {
  const regenDocs = findDocsBySlug(regenSlugs);
  console.log(`── Regen: ${regenDocs.length} doc(s) ──`);
  for (const mdPath of regenDocs) {
    const meta = docMeta(mdPath);
    const refs = parseImageRefs(meta.content).filter(
      (r) => r.section === meta.section && r.slug === meta.slug
    );
    if (!refs.length) {
      console.log(`↷ ${meta.rel} — sin refs en el .md, nada que reparar`);
      continue;
    }
    const steps = [...new Set(refs.map((r) => r.stepNumber))].sort((a, b) => a - b);
    const shots = inferShotsFromBrokenRefs(meta.content, meta.section, meta.slug, steps);
    const candidates = screenshotCandidates(prefixesForSection(meta.section));

    // El LLM asigna ruta POR SHOT (la heurística nav a granel repetiría la
    // misma URL en todos los pasos → E5). nav entra como etiquetas de candidatos.
    if (dryRun) {
      console.log(`… ${meta.rel} — ${shots.length} shots (pendiente LLM)`);
    } else {
      process.stdout.write(`→ ${meta.rel} — rutas vía LLM (${candidates.length} candidatos) … `);
      try {
        const filled = await callLlmForPaths(meta, candidates, shots);
        const valid = filled.filter((s) => {
          const p = String(s.zauruPath || '').trim();
          if (p && !candidateMatches(routesData.routes, p)) {
            stats.dropped.push(`${meta.slug}-${s.stepNumber}: LLM devolvió ruta inexistente ${p}`);
            return false;
          }
          return true;
        });
        upsertDoc(manifest, {
          section: meta.section,
          slug: meta.slug,
          docPath: meta.rel,
          existingImageCount: refs.length,
          shots: valid,
          source: 'regen',
        });
        console.log(`${valid.length}/${shots.length} shots con ruta`);
      } catch (err) {
        stats.errors.push({ doc: meta.rel, error: String(err) });
        console.log(`ERROR: ${err}`);
      }
    }
  }
  manifest.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));
  if (!dryRun) {
    writeManifest(manifest);
    console.log(`\n✓ manifest.json actualizado.`);
  }
  printSummary();
  console.log('Valida el resultado: node 4-validate-manifest.mjs');
  process.exit(stats.errors.length ? 1 : 0);
}

function findDocsBySlug(slugs) {
  const out = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && slugs.includes(path.basename(p, '.md'))) out.push(p);
    }
  })(docsDir);
  return out.sort();
}

if (args.includes('--gaps')) {
  await processGaps(manifest);
  manifest.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));
  printGapsSummaryCount(manifest);

  if (dryRun) {
    console.log('\n[dry-run] No se escribió manifest.json');
  } else {
    writeManifest(manifest);
    console.log(`\n✓ manifest.json actualizado (${manifest.docs.length} docs).`);
  }
  printSummary();
  console.log('Valida el resultado: node 4-validate-manifest.mjs');
  process.exit(stats.errors.length ? 1 : 0);
}

const mdFiles = collectDocs();
if (!mdFiles) {
  console.error('Indica --docs <archivos...>, --missing o --gaps');
  process.exit(1);
}
if (!mdFiles.length) {
  console.log('No hay documentos que procesar.');
  process.exit(0);
}

await processLlmDocs(mdFiles, manifest);
manifest.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));

if (dryRun) {
  console.log('\n[dry-run] No se escribió manifest.json');
} else {
  writeManifest(manifest);
  console.log(`\n✓ manifest.json actualizado: ${stats.generated} doc(s).`);
}
printSummary();
console.log('Valida el resultado: node 4-validate-manifest.mjs');
process.exit(stats.errors.length ? 1 : 0);

function printGapsSummaryCount(manifest) {
  const total = manifest.docs.reduce((n, d) => n + d.shots.length, 0);
  console.log(`Total shots en manifiesto: ${total} (tope ${MAX_SHOTS_PER_DOC}/doc)`);
}
