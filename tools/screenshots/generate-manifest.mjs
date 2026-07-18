#!/usr/bin/env node
/**
 * generate-manifest.mjs — Genera (o actualiza) manifest.json usando un LLM vía
 * OpenRouter (API compatible con OpenAI). Lee cada .md, cuenta las imágenes
 * existentes y pide al modelo las capturas que faltan, eligiendo URLs reales
 * de nav.json (si existe).
 *
 * Uso:
 *   node generate-manifest.mjs --docs docs/contabilidad/beneficiarios.md [...]
 *   node generate-manifest.mjs --missing          # todos los .md sin imágenes
 *   node generate-manifest.mjs --gaps             # refs rotas + sin imágenes
 *   node generate-manifest.mjs --gaps --dry-run   # reporte sin escribir
 *
 * Requiere OPENROUTER_API_KEY en .env para llamadas LLM. Modelo configurable
 * con MANIFEST_MODEL (por defecto tencent/hy3:free).
 */
import fs from 'node:fs';
import path from 'node:path';
import { TOOL_DIR, REPO_ROOT, loadEnv, requireEnv } from './lib/env.mjs';
import {
  findBrokenRefDocs,
  findNoImageDocs,
  inferShotsFromBrokenRefs,
  isApiCodeDoc,
  looksLikeDetailPath,
  resolveZauruPath,
} from './lib/gaps.mjs';

loadEnv();

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const docsDir = path.join(REPO_ROOT, 'docs');

/** Recolecta los .md a procesar según los flags (--docs / --missing). */
function collectDocs() {
  const i = args.indexOf('--docs');
  if (i !== -1) {
    const list = [];
    for (let j = i + 1; j < args.length && !args[j].startsWith('--'); j++) {
      list.push(path.resolve(REPO_ROOT, args[j]));
    }
    return list;
  }
  if (args.includes('--missing')) {
    return findNoImageDocs(docsDir);
  }
  return null;
}

function docMeta(mdPath) {
  const rel = path.relative(REPO_ROOT, mdPath);
  const section = path.basename(path.dirname(mdPath));
  const slug = path.basename(mdPath, '.md');
  const content = fs.readFileSync(mdPath, 'utf8');
  const existing = content.match(new RegExp(`/img/${section}/${slug}-\\d+\\.`, 'g'));
  return { rel, section, slug, content, existingImageCount: existing ? existing.length : 0 };
}

function loadOrCreateManifest() {
  const manifestPath = path.join(TOOL_DIR, 'manifest.json');
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : {
        generatedBy: 'generate-manifest.mjs',
        zauruBaseUrl: process.env.ZAURU_BASE_URL || 'https://zauru.herokuapp.com',
        imageFormat: 'png',
        docs: [],
      };
  manifest.generatedAt = new Date().toISOString().slice(0, 10);
  manifest.imageFormat = 'png';
  if (!Array.isArray(manifest.docs)) manifest.docs = [];
  return { manifestPath, manifest };
}

function upsertDoc(manifest, entry) {
  const at = manifest.docs.findIndex((d) => d.docPath === entry.docPath);
  if (at === -1) manifest.docs.push(entry);
  else manifest.docs[at] = entry;
}

function applyResolvedPath(shots, resolved) {
  return shots.map((s) => {
    const zauruPath = s.zauruPath || resolved.path || '';
    const out = { ...s, zauruPath };
    if (zauruPath && (s.resolveId || looksLikeDetailPath(zauruPath))) {
      out.resolveId = true;
    } else {
      delete out.resolveId;
    }
    return out;
  });
}

const SYSTEM_PROMPT = `Generas el manifiesto de screenshots para la documentación de Zauru (ERP web en español).

Responde ÚNICAMENTE con JSON válido (sin markdown, sin explicaciones) con esta forma:
{"docs":[{"section":string,"slug":string,"docPath":string,"existingImageCount":number,"shots":[{"stepNumber":number,"caption":string,"zauruPath":string,"resolveId":boolean,"waitForSelector":[string],"insertAfterText":string}]}]}

Reglas:
- "zauruPath": ruta web REAL de Zauru (sin .json). PRIORIZA rutas del mapa de navegación provisto; si no hay coincidencia, infiere desde las rutas de API del propio documento (quita ".json"; "/recurso/1.json" → listado "/recurso"; "/recurso/new.json" → "/recurso/new").
- "resolveId": true SOLO para vistas de detalle con id numérico ("/recurso/1"); el runner visitará el listado y usará el primer registro real del tenant (evita 404). Omítelo o false en listados y formularios "/new".
- "caption": texto alternativo conciso en español que describa lo que muestra la captura.
- "insertAfterText": la línea EXACTA del markdown tras la cual debe insertarse la imagen. Cópiala textualmente, completa (normalmente la línea del paso o párrafo que describe esa pantalla).
- "stepNumber": empieza en existingImageCount+1 e incrementa de a uno.
- "waitForSelector": 2-4 selectores CSS candidatos que probablemente existan en esa página (tablas, formularios, contenedores). Se usa el primero visible.
- Solo captura pantallas que aporten valor (listados, formularios, vistas de detalle). No captures secciones de solo texto ni ejemplos de API (curl).
- Si el documento no necesita capturas, devuelve "shots": [].`;

const PATH_FILL_SYSTEM = `Completas zauruPath para shots de screenshots de Zauru ya inferidos.

Responde ÚNICAMENTE con JSON válido:
{"shots":[{"stepNumber":number,"zauruPath":string,"resolveId":boolean}]}

Reglas:
- "zauruPath": ruta web REAL de Zauru (sin .json). PRIORIZA el mapa de navegación; si no hay match, infiere de rutas API del documento.
- "resolveId": true solo si la ruta es detalle con id numérico (/recurso/1).
- Debe haber una entrada por cada stepNumber provisto.
- Si no puedes resolver una ruta con confianza, usa zauruPath "".`;

function buildUserPrompt(meta, nav) {
  let navBlock =
    'No hay mapa de navegación disponible (corre discover-nav.mjs primero para mejores resultados).';
  if (nav?.length) {
    const navJson = JSON.stringify(nav);
    navBlock = `Mapa de navegación real de Zauru (etiqueta → ruta):\n${navJson.slice(0, 15000)}`;
  }
  return `${navBlock}

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

function buildPathFillPrompt(meta, nav, shots) {
  let navBlock = 'Sin nav.json.';
  if (nav?.length) {
    navBlock = `Mapa de navegación:\n${JSON.stringify(nav).slice(0, 15000)}`;
  }
  return `${navBlock}

docPath: ${meta.rel}
section: ${meta.section}
slug: ${meta.slug}

Shots a completar (solo zauruPath / resolveId):
${JSON.stringify(shots, null, 2)}

Contenido markdown (contexto):
---
${meta.content.slice(0, 12000)}
---`;
}

async function openRouterChat(system, user) {
  const apiKey = requireEnv('OPENROUTER_API_KEY');
  const model = process.env.MANIFEST_MODEL || 'tencent/hy3:free';

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
      temperature: 0.2,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`OpenRouter HTTP ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || '';
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`Respuesta sin JSON: ${text.slice(0, 200)}`);
  return JSON.parse(text.slice(start, end + 1));
}

async function callOpenRouter(meta, nav) {
  return openRouterChat(SYSTEM_PROMPT, buildUserPrompt(meta, nav));
}

async function callOpenRouterForPaths(meta, nav, shots) {
  const result = await openRouterChat(PATH_FILL_SYSTEM, buildPathFillPrompt(meta, nav, shots));
  const filled = Array.isArray(result?.shots) ? result.shots : [];
  const byStep = new Map(filled.map((s) => [Number(s.stepNumber), s]));
  return shots.map((s) => {
    const f = byStep.get(s.stepNumber);
    const zauruPath = String(f?.zauruPath || s.zauruPath || '').trim();
    const out = { ...s, zauruPath };
    if (f?.resolveId || looksLikeDetailPath(zauruPath)) out.resolveId = true;
    else delete out.resolveId;
    return out;
  });
}

function normalizeLlmEntry(meta, entry) {
  return {
    section: meta.section,
    slug: meta.slug,
    docPath: meta.rel,
    existingImageCount: meta.existingImageCount,
    shots: (entry.shots || []).map((s, i) => ({
      stepNumber: meta.existingImageCount + 1 + i,
      caption: String(s.caption || '').trim(),
      zauruPath: String(s.zauruPath || '').trim(),
      ...(s.resolveId || looksLikeDetailPath(s.zauruPath) ? { resolveId: true } : {}),
      waitForSelector: Array.isArray(s.waitForSelector) ? s.waitForSelector.map(String) : [],
      insertAfterText: String(s.insertAfterText || '').trim(),
    })),
  };
}

async function processLlmDocs(mdFiles, nav, manifest, stats) {
  for (const mdPath of mdFiles) {
    const meta = docMeta(mdPath);
    if (isApiCodeDoc(mdPath, meta.content)) {
      stats.skippedApi.push(meta.rel);
      console.log(`↷ ${meta.rel} — omitido (API/código)`);
      continue;
    }
    process.stdout.write(`→ ${meta.rel} … `);
    try {
      const result = await callOpenRouter(meta, nav);
      const entry = result?.docs?.[0];
      if (!entry || !Array.isArray(entry.shots)) throw new Error('JSON sin docs[0].shots');
      const normalized = normalizeLlmEntry(meta, entry);
      upsertDoc(manifest, normalized);
      stats.generated++;
      console.log(`${normalized.shots.length} shots`);
    } catch (err) {
      stats.errors.push({ doc: meta.rel, error: String(err) });
      console.log(`ERROR: ${err}`);
    }
  }
}

async function processGaps(nav, manifest) {
  const stats = {
    brokenInferred: 0,
    brokenNeedsLlm: 0,
    brokenUnresolved: 0,
    generated: 0,
    skippedApi: [],
    errors: [],
  };

  const broken = findBrokenRefDocs(docsDir, REPO_ROOT);
  const brokenPaths = new Set(broken.map((b) => b.mdPath));

  console.log(`\n── Tier A: refs rotas (${broken.length} docs) ──`);
  for (const doc of broken) {
    const stepNums = doc.brokenRefs.map((r) => r.stepNumber);
    let shots = inferShotsFromBrokenRefs(doc.content, doc.section, doc.slug, stepNums);
    const resolved = resolveZauruPath({
      section: doc.section,
      slug: doc.slug,
      content: doc.content,
      nav,
    });

    if (resolved.path) {
      shots = applyResolvedPath(shots, resolved);
      stats.brokenInferred++;
      console.log(`✓ ${doc.docPath} — ${shots.length} shots (${resolved.method}: ${resolved.path})`);
    } else if (dryRun) {
      // Sin costo de LLM en dry-run: cuenta como pendiente de resolución
      stats.brokenNeedsLlm++;
      stats.brokenUnresolved++;
      console.log(`… ${doc.docPath} — ${shots.length} shots (sin ruta; LLM en corrida real)`);
    } else {
      stats.brokenNeedsLlm++;
      process.stdout.write(`→ ${doc.docPath} — rutas vía LLM … `);
      try {
        const meta = {
          rel: doc.docPath,
          section: doc.section,
          slug: doc.slug,
          content: doc.content,
          existingImageCount: 0,
        };
        shots = await callOpenRouterForPaths(meta, nav, shots);
        const unresolved = shots.filter((s) => !s.zauruPath).length;
        if (unresolved === shots.length) {
          stats.brokenUnresolved++;
          console.log(`sin rutas (${shots.length} shots vacíos)`);
        } else if (unresolved) {
          stats.brokenUnresolved++;
          console.log(`${shots.length - unresolved}/${shots.length} con ruta`);
        } else {
          stats.brokenInferred++;
          console.log(`${shots.length} shots`);
        }
      } catch (err) {
        stats.errors.push({ doc: doc.docPath, error: String(err) });
        stats.brokenUnresolved++;
        console.log(`ERROR: ${err}`);
      }
    }

    upsertDoc(manifest, {
      section: doc.section,
      slug: doc.slug,
      docPath: doc.docPath,
      existingImageCount: parseImageCount(doc.content, doc.section, doc.slug),
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
        stats.generated++; // conteo de candidatos en dry-run
      }
    }
  } else {
    await processLlmDocs(noImage, nav, manifest, stats);
  }

  return stats;
}

function parseImageCount(content, section, slug) {
  const existing = content.match(new RegExp(`/img/${section}/${slug}-\\d+\\.`, 'g'));
  return existing ? existing.length : 0;
}

function printGapsSummary(stats) {
  console.log('\n── Resumen --gaps ──');
  console.log(`  Tier A inferidos (nav/api/llm ok): ${stats.brokenInferred}`);
  console.log(`  Tier A necesitaron LLM:           ${stats.brokenNeedsLlm}`);
  console.log(`  Tier A sin ruta resuelta:         ${stats.brokenUnresolved}`);
  console.log(`  Tier B generados:                 ${stats.generated}`);
  console.log(`  Omitidos API/código:              ${stats.skippedApi.length}`);
  if (stats.skippedApi.length) {
    for (const d of stats.skippedApi) console.log(`    · ${d}`);
  }
  if (stats.errors.length) {
    console.log(`  Errores: ${stats.errors.length}`);
    for (const e of stats.errors) console.log(`    ✗ ${e.doc}: ${e.error}`);
  }
}

// ── Main ────────────────────────────────────────────────────────────────────
const navPath = path.join(TOOL_DIR, 'nav.json');
const nav = fs.existsSync(navPath) ? JSON.parse(fs.readFileSync(navPath, 'utf8')) : null;
if (!nav) {
  console.log(
    '⚠ nav.json no existe; las rutas se inferirán de los .md (corre discover-nav.mjs para mejor precisión).'
  );
}

const { manifestPath, manifest } = loadOrCreateManifest();

if (args.includes('--gaps')) {
  const stats = await processGaps(nav, manifest);
  manifest.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));
  printGapsSummary(stats);

  if (dryRun) {
    console.log('\n[dry-run] No se escribió manifest.json');
  } else {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
    console.log(`\n✓ manifest.json actualizado (${manifest.docs.length} docs).`);
  }
  if (stats.errors.length) process.exitCode = 1;
  console.log('Revisa manifest.json y luego corre: node run-screenshots.mjs');
  process.exit();
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

const stats = { generated: 0, skippedApi: [], errors: [] };
await processLlmDocs(mdFiles, nav, manifest, stats);
manifest.docs.sort((a, b) => a.docPath.localeCompare(b.docPath));

if (dryRun) {
  console.log('\n[dry-run] No se escribió manifest.json');
} else {
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(
    `\n✓ manifest.json actualizado: ${stats.generated} doc(s).${stats.errors.length ? ` ${stats.errors.length} con error.` : ''}`
  );
}
if (stats.skippedApi.length) {
  console.log(`Omitidos API/código: ${stats.skippedApi.length}`);
  for (const d of stats.skippedApi) console.log(`  · ${d}`);
}
if (stats.errors.length) {
  for (const e of stats.errors) console.log(`  ✗ ${e.doc}: ${e.error}`);
  process.exitCode = 1;
}
console.log('Revisa manifest.json y luego corre: node run-screenshots.mjs');
