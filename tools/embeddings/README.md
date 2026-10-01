# Importador de tutoriales

Carga los Markdown de `docs/` en Postgres para búsqueda y embeddings. Con un usuario que pueda crear bases, el script hace el resto: crea la base si no existe, crea la tabla y llena las filas.

## Qué hace

1. Se conecta a la base de mantenimiento (`postgres` por defecto) y crea `rag` si no existe.
2. En `rag` activa las extensiones `pg_trgm` y `vector`.
3. Crea la tabla `data` si no existe.
4. Recorre `docs/**/*.md`, separa el frontmatter (`title`, `sidebar_label`, `sidebar_position`) del cuerpo y hace upsert por `path`.
5. Borra las filas cuyo archivo ya no está en `docs/`.
6. Pide un embedding por cada fila con `embedding` NULL y lo guarda. El texto ya quedó confirmado antes de este paso: si el servidor no responde, el import del Markdown no se revierte.

`updated_at` es la fecha de modificación del archivo. Si el texto del tutorial cambió, el embedding de esa fila se pone en `NULL` y se vuelve a pedir. Las filas que ya tienen vector no se recalculan.

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
SELECT id, title, sidebar_label, sidebar_position, left(tutorial, 50), embedding IS NOT NULL AS has_embedding, path
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
| `EMBEDDING_URL` | vacío | URL del `POST /embedding`. Vacío deja `embedding` en `NULL` |

## Tabla `data`

| Columna | Tipo | Notas |
| --- | --- | --- |
| `id` | `integer` | Primary key, identity |
| `path` | `text NOT NULL` | Ruta relativa al Markdown, por ejemplo `casos-de-soporte/casos-abiertos.md`. Única |
| `title` | `text NOT NULL` | `title` del front matter |
| `sidebar_label` | `text NOT NULL` | `sidebar_label` del front matter |
| `sidebar_position` | `double precision NOT NULL` | `sidebar_position` del front matter. Acepta decimales (`0.5`) |
| `tutorial` | `text NOT NULL` | Cuerpo del Markdown, sin front matter. Índice GIN trigram (`gin_trgm_ops`) |
| `embedding` | `vector(1024)` | Nullable. Lo llena este script con `EMBEDDING_URL` (Qwen3 embeddings 0.6B) |
| `updated_at` | `timestamptz NOT NULL` | `mtime` del archivo. Default `now()` |
