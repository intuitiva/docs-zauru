#!/usr/bin/env node
/**
 * import_tutorials.mjs — Crea la base rag (si no existe), la tabla data,
 * carga los Markdown de docs/ (cuerpo sin frontmatter, más title,
 * sidebar_label y sidebar_position) y pide los embeddings que faltan
 * a EMBEDDING_URL. EMBEDDING_SERVER elige el formato: llamafile
 * ({"content"}) o lmstudio ({"input"}).
 *
 * Uso:
 *   node import_tutorials.mjs
 *   bun import_tutorials.mjs
 *   DOCS_PATH=/ruta/a/docs node import_tutorials.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import pg from 'pg';

const { Client } = pg;

const toolDir = import.meta.dirname;
const repoRoot = path.resolve(toolDir, '../..');

loadEnv(path.join(toolDir, '.env'));

function loadEnv(envPath) {
  if (!fs.existsSync(envPath)) return;
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile(envPath);
    return;
  }
  for (const rawLine of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    if (/^[A-Z0-9_]+$/.test(key) && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function env(name, fallback) {
  const value = process.env[name];
  if (value === undefined || value.length === 0) return fallback;
  return value;
}

function quoteIdent(identifier) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(identifier)) {
    throw new Error(`Identificador SQL inválido: ${identifier}`);
  }
  return `"${identifier}"`;
}

function unquoteYamlString(value) {
  if (value.length >= 2 && value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  if (value.length >= 2 && value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  return value;
}

function parseDocument(content, relPath) {
  const lines = content.split('\n');
  if (lines[0]?.trim() !== '---') {
    throw new Error(`${relPath}: falta el front matter`);
  }

  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]?.trim() === '---') {
      end = i;
      break;
    }
  }
  if (end === -1) {
    throw new Error(`${relPath}: el front matter no cierra`);
  }

  const fields = {};
  for (const line of lines.slice(1, end)) {
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed.startsWith('#')) continue;
    const colon = line.indexOf(':');
    if (colon === -1) {
      throw new Error(`${relPath}: línea de front matter inválida: ${line}`);
    }
    const key = line.slice(0, colon).trim();
    fields[key] = line.slice(colon + 1).trim();
  }

  const title = fields.title === undefined ? '' : unquoteYamlString(fields.title);
  const sidebarLabel =
    fields.sidebar_label === undefined ? '' : unquoteYamlString(fields.sidebar_label);
  const positionRaw = fields.sidebar_position;
  if (title.length === 0) throw new Error(`${relPath}: falta title`);
  if (sidebarLabel.length === 0) throw new Error(`${relPath}: falta sidebar_label`);
  if (positionRaw === undefined || !/^-?\d+(\.\d+)?$/.test(positionRaw)) {
    throw new Error(`${relPath}: sidebar_position inválido (${positionRaw ?? 'ausente'})`);
  }

  const tutorial = lines
    .slice(end + 1)
    .join('\n')
    .replace(/^\n+/, '');

  return {
    tutorial,
    title,
    sidebarLabel,
    sidebarPosition: Number(positionRaw),
  };
}

async function collectMarkdown(docsPath) {
  const results = [];

  async function walk(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const relPath = path.relative(docsPath, fullPath).split(path.sep).join('/');
        results.push({ fullPath, relPath });
      }
    }
  }

  await walk(docsPath);
  results.sort((a, b) => a.relPath.localeCompare(b.relPath));
  return results;
}

function clientConfig(database) {
  const password = process.env.PGPASSWORD;
  return {
    host: process.env.PGHOST || undefined,
    port: Number(env('PGPORT', '5432')),
    user: env('PGUSER', 'finanzas'),
    password: password === undefined || password.length === 0 ? undefined : password,
    database,
  };
}

async function ensureDatabase(database) {
  const admin = new Client(clientConfig(env('PGADMIN_DATABASE', 'postgres')));
  await admin.connect();
  try {
    const existing = await admin.query('SELECT 1 FROM pg_database WHERE datname = $1', [database]);
    if ((existing.rowCount ?? 0) > 0) {
      console.log(`Base de datos existente: ${database}`);
      return;
    }
    await admin.query(`CREATE DATABASE ${quoteIdent(database)}`);
    console.log(`Base de datos creada: ${database}`);
  } finally {
    await admin.end();
  }
}

const SCHEMA_SQL = `
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS data (
  id integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  path text NOT NULL,
  title text NOT NULL,
  sidebar_label text NOT NULL,
  sidebar_position double precision NOT NULL,
  tutorial text NOT NULL,
  embedding vector(1024),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE data ADD COLUMN IF NOT EXISTS title text;
ALTER TABLE data ADD COLUMN IF NOT EXISTS sidebar_label text;
ALTER TABLE data ADD COLUMN IF NOT EXISTS sidebar_position double precision;

ALTER TABLE data
  ALTER COLUMN embedding TYPE vector(1024);

CREATE UNIQUE INDEX IF NOT EXISTS data_path_uidx ON data (path);
CREATE INDEX IF NOT EXISTS data_tutorial_trgm_idx ON data USING gin (tutorial gin_trgm_ops);
`;

const EMBEDDING_DIM = 1024;

function errorMessage(error) {
  if (!(error instanceof Error)) return String(error);
  const cause = error.cause;
  if (cause instanceof Error && cause.message.length > 0) {
    return `${error.message}: ${cause.message}`;
  }
  return error.message;
}

function isNumberVector(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => typeof item === 'number')
  );
}

function embeddingVector(value, server) {
  let vector = value;
  if (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((row) => isNumberVector(row))
  ) {
    vector = value[value.length - 1];
  }
  if (!isNumberVector(vector)) {
    throw new Error(`${server} no devolvió un vector de números`);
  }
  return vector;
}

function embeddingFromLlamafile(payload) {
  if (isNumberVector(payload) || (Array.isArray(payload) && payload.every((row) => isNumberVector(row)))) {
    return embeddingVector(payload, 'llamafile');
  }

  const row = Array.isArray(payload) ? payload[0] : payload;
  if (!row || typeof row !== 'object' || Array.isArray(row) || !('embedding' in row)) {
    throw new Error('llamafile no devolvió un campo embedding');
  }
  return embeddingVector(row.embedding, 'llamafile');
}

function embeddingFromLmstudio(payload) {
  const data =
    payload && typeof payload === 'object' && !Array.isArray(payload) ? payload.data : undefined;
  const embedding = Array.isArray(data) ? data[0]?.embedding : undefined;
  if (!isNumberVector(embedding)) {
    throw new Error('LM Studio no devolvió data[0].embedding');
  }
  return embedding;
}

async function postEmbedding(url, body) {
  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120_000),
    });
  } catch (error) {
    throw new Error(`no se pudo conectar con ${url} (${errorMessage(error)})`);
  }

  if (!response.ok) {
    const text = await response.text();
    const detail = text.trim().slice(0, 300);
    throw new Error(`HTTP ${response.status}${detail.length > 0 ? `: ${detail}` : ''}`);
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error(`la respuesta no es JSON (${errorMessage(error)})`);
  }
}

async function fetchLlamafileEmbedding(url, content) {
  const payload = await postEmbedding(url, { content });
  return checkedEmbedding(embeddingFromLlamafile(payload));
}

async function fetchLmstudioEmbedding(url, content) {
  const payload = await postEmbedding(url, { input: content });
  return checkedEmbedding(embeddingFromLmstudio(payload));
}

function checkedEmbedding(vector) {
  if (vector.length !== EMBEDDING_DIM) {
    throw new Error(`dimensión ${vector.length}, se esperaba ${EMBEDDING_DIM}`);
  }
  if (!vector.every((value) => Number.isFinite(value))) {
    throw new Error('el vector contiene valores no numéricos');
  }
  return vector;
}

function embeddingClient() {
  const server = env('EMBEDDING_SERVER', '').trim().toLowerCase();
  switch (server) {
    case 'llamafile':
      return { name: 'llamafile', fetchEmbedding: fetchLlamafileEmbedding };
    case 'lmstudio':
      return { name: 'lmstudio', fetchEmbedding: fetchLmstudioEmbedding };
    default:
      throw new Error(
        `EMBEDDING_SERVER inválido (${server.length === 0 ? 'ausente' : server}). Usa llamafile o lmstudio`,
      );
  }
}

async function fillEmbeddings(client, url, fetchEmbedding) {
  const pending = await client.query(
    'SELECT id, path, tutorial FROM data WHERE embedding IS NULL ORDER BY path',
  );
  const rows = pending.rows;
  if (rows.length === 0) {
    console.log('Embeddings al día: no hay filas con embedding NULL');
    return;
  }

  console.log(`Calculando embeddings: ${rows.length} filas en ${url}`);
  let filled = 0;
  for (const row of rows) {
    if (row.tutorial.trim().length === 0) {
      console.log(`Sin texto, se omite: ${row.path}`);
      continue;
    }

    let vector;
    try {
      vector = await fetchEmbedding(url, row.tutorial);
    } catch (error) {
      throw new Error(
        `No se pudo calcular el embedding de ${row.path} (${filled}/${rows.length} listos): ${errorMessage(error)}`,
      );
    }

    await client.query('UPDATE data SET embedding = $1::vector WHERE id = $2', [
      `[${vector.join(',')}]`,
      row.id,
    ]);
    filled += 1;
    console.log(`Embedding ${filled}/${rows.length}: ${row.path}`);
  }
  console.log(`Embeddings listos: ${filled}`);
}

const UPSERT_SQL = `
INSERT INTO data (path, title, sidebar_label, sidebar_position, tutorial, updated_at)
VALUES ($1, $2, $3, $4, $5, $6)
ON CONFLICT (path) DO UPDATE
SET title = EXCLUDED.title,
    sidebar_label = EXCLUDED.sidebar_label,
    sidebar_position = EXCLUDED.sidebar_position,
    tutorial = EXCLUDED.tutorial,
    updated_at = EXCLUDED.updated_at,
    embedding = CASE
      WHEN data.tutorial IS DISTINCT FROM EXCLUDED.tutorial THEN NULL
      ELSE data.embedding
    END
`;

const REQUIRE_FRONTMATTER_SQL = `
ALTER TABLE data ALTER COLUMN title SET NOT NULL;
ALTER TABLE data ALTER COLUMN sidebar_label SET NOT NULL;
ALTER TABLE data ALTER COLUMN sidebar_position SET NOT NULL;
`;

async function main() {
  const database = env('PGDATABASE', 'rag');
  const docsPath =
    process.env.DOCS_PATH !== undefined && process.env.DOCS_PATH.length > 0
      ? path.resolve(process.env.DOCS_PATH)
      : path.join(repoRoot, 'docs');

  if (!fs.existsSync(docsPath)) {
    throw new Error(`No existe la carpeta de documentación: ${docsPath}`);
  }

  await ensureDatabase(database);

  const client = new Client(clientConfig(database));
  await client.connect();
  try {
    await client.query(SCHEMA_SQL);

    const files = await collectMarkdown(docsPath);
    if (files.length === 0) {
      throw new Error(`No se encontraron archivos .md en ${docsPath}`);
    }
    console.log(`Encontrados ${files.length} archivos .md`);

    await client.query('BEGIN');
    try {
      const paths = [];
      for (const file of files) {
        const raw = await fs.promises.readFile(file.fullPath, 'utf8');
        const doc = parseDocument(raw, file.relPath);
        const fileStat = await fs.promises.stat(file.fullPath);
        await client.query(UPSERT_SQL, [
          file.relPath,
          doc.title,
          doc.sidebarLabel,
          doc.sidebarPosition,
          doc.tutorial,
          fileStat.mtime,
        ]);
        paths.push(file.relPath);
        console.log(`Insertado: ${file.relPath}`);
      }

      await client.query('DELETE FROM data WHERE NOT (path = ANY($1::text[]))', [paths]);
      await client.query(REQUIRE_FRONTMATTER_SQL);
      await client.query('COMMIT');
      console.log(`Listo: ${paths.length} tutoriales en ${database}.data`);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    }

    const embeddingUrl = env('EMBEDDING_URL', '');
    if (embeddingUrl.length === 0) {
      console.log('EMBEDDING_URL vacío: los embeddings quedan en NULL');
    } else {
      const embeddings = embeddingClient();
      console.log(`Servidor de embeddings: ${embeddings.name}`);
      await fillEmbeddings(client, embeddingUrl, embeddings.fetchEmbedding);
    }
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
