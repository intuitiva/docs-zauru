# Importador de tutoriales

Carga los Markdown de `docs/` en Postgres para búsqueda y embeddings. Con un usuario que pueda crear bases, el script hace el resto: crea la base si no existe, crea la tabla y llena las filas.

## Qué hace

1. Se conecta a la base de mantenimiento (`postgres` por defecto) y crea `rag` si no existe.
2. En `rag` activa las extensiones `pg_trgm` y `vector`.
3. Crea la tabla `data` si no existe.
4. Recorre `docs/**/*.md`, quita el frontmatter YAML y hace upsert por `path`.
5. Borra las filas cuyo archivo ya no está en `docs/`.

`updated_at` es la fecha de modificación del archivo. `embedding` queda en `NULL`: este script no calcula vectores. Si vuelves a correrlo y el texto del tutorial cambió, el embedding de esa fila se pone en `NULL` para que no quede desfasado.

## Requisitos

- Node 18+ (el repo fija Node 22 en `.nvmrc`)
- PostgreSQL con las extensiones `pg_trgm` y `vector` (pgvector) disponibles
- Un usuario con permiso para conectarse a `postgres` y crear bases (`CREATEDB`)

## Uso

```bash
cd tools/embeddings
cp .env.example .env   # opcional; los valores por defecto suelen bastar en local
npm install
npm run import
# o directamente:
node import_tutorials.mjs
bun import_tutorials.mjs
```

Por defecto usa el usuario `finanzas`, la base `rag` y la carpeta `docs/` de este repositorio.

Comprueba el resultado:

```sql
SELECT id, left(tutorial, 50), embedding, updated_at, path
FROM data
LIMIT 3;
```

## Variables

Copia `.env.example` a `.env`. El archivo `.env` no se sube al repositorio. Si una variable no está definida, se usa el valor de la tabla.

| Variable | Default | Para qué |
| --- | --- | --- |
| `PGHOST` | localhost | Host. En Postgres.app, `/tmp` usa el socket local |
| `PGPORT` | `5432` | Puerto |
| `PGUSER` | `finanzas` | Usuario de Postgres |
| `PGPASSWORD` | vacío | Contraseña. Vacío usa la autenticación local |
| `PGDATABASE` | `rag` | Base que se crea y se llena |
| `PGADMIN_DATABASE` | `postgres` | Base a la que se conecta para el `CREATE DATABASE` |
| `DOCS_PATH` | `<repo>/docs` | Carpeta de Markdown |

## Tabla `data`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | `integer` | Primary key, identity |
| `path` | `text NOT NULL` | Ruta relativa al Markdown, por ejemplo `casos-de-soporte/casos-abiertos.md`. Única |
| `tutorial` | `text NOT NULL` | Contenido sin frontmatter. Índice GIN trigram (`gin_trgm_ops`) |
| `embedding` | `vector(1024)` | Nullable. Lo llena otro proceso (Qwen3 embeddings 0.6B) |
| `updated_at` | `timestamptz NOT NULL` | `mtime` del archivo. Default `now()` |
