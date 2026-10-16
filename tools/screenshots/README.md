# Capturas desde los enlaces del manual

La fuente de cada captura es su figura en `docs/**/*.md` o `.mdx`:

```mdx
<figure>

![Listado de clientes](/img/ventas/clientes-1.png)

<figcaption><a href="https://app.zauru.com/sales/clients">{"https://app.zauru.com/sales/clients"}</a></figcaption>
</figure>
```

La herramienta lee el `href` de ese `figcaption`, cambia el origen de
`https://app.zauru.com` a `https://zauru.herokuapp.com` y conserva la ruta,
los parámetros y el fragmento. La referencia de imagen determina el archivo
bajo `static/img/`, incluidos JPEG, nombres especiales y carpetas anidadas.
El documento y su enlace visible se conservan al capturar.

No requiere manifiesto, OpenRouter, extracción de rutas ni descubrimiento del menú.

## Instalar

Node 20.11+ (el repositorio fija Node 22 mediante `.nvmrc`). Instalar las
dependencias del sitio según su README y, para la herramienta:

```bash
cd tools/screenshots
npm install
npx playwright install chromium
cp .env.example .env
```

Completar `ZAURU_EMAIL` y `ZAURU_PASSWORD` en `.env` con una cuenta de staging.
La sesión OAuth se reutiliza en `storageState.json`. Ambos archivos son locales
ignorados por Git. `ZAURU_BASE_URL` debe ser `https://zauru.herokuapp.com`.

## Uso desde la raíz del repositorio

```bash
# Auditar enlaces, archivos ausentes, conflictos y duplicados, sin navegador.
npm run screenshots -- audit

# Capturar un documento; incluye la validación de enlaces automáticamente.
npm run screenshots -- capture --docs docs/compras/cargos-pagados.md

# También acepta el slug si es único, o varios documentos separados por coma.
npm run screenshots -- capture --docs cargos-pagados,casos-bitacora

# Capturar todo lo pendiente del manual.
npm run screenshots -- capture

# Volver a capturar un documento aunque tenga una candidata vigente.
npm run screenshots -- capture --docs cargos-pagados --force

# Reintentar fallos y bloqueos, por ejemplo después de reparar el login.
npm run screenshots -- capture --retry-failed

# Incorporar las candidatas cuya revisión visual se haya aceptado.
npm run screenshots -- promote --docs cargos-pagados

# Excel de pendientes; la URL correcta se corrige directamente en el documento.
npm run screenshots -- report --out /tmp/capturas-pendientes.xlsx
```

`--headed` muestra Chromium. `--output-dir /tmp/capturas` cambia la carpeta de
candidatas; se rechazan destinos dentro de `static`, incluidos enlaces simbólicos.
Desde `tools/screenshots/` también existen `npm run audit`,
`npm run capture -- --docs cargos-pagados`, `npm run promote` y `npm run report`.

La primera ejecución de `capture` recaptura las imágenes seleccionadas aunque
ya existan en el manual: los resultados del pipeline anterior no acreditan el
nuevo enlace. Después omite candidatas vigentes y archivos ya incorporados.
Corregir un enlace o cambiar las instrucciones/configuración vuelve a habilitar
la captura automáticamente. Los fallos con la misma configuración se reintentan
con `--retry-failed`; `--force` recaptura todos los destinos seleccionados.

Si un archivo se comparte entre documentos con distintas URLs o instrucciones,
se bloquea ese archivo y continúan los demás. La comprobación es global incluso
con `--docs`. Los filtros inexistentes o ambiguos producen un error.

## Revisar e incorporar

Las capturas se guardan en `tools/screenshots/runs/<corrida>/img/...`.
`tools/screenshots/review/gallery.html` muestra las candidatas con su documento,
línea y URL de origen. El informe completo queda en `review/audit-report.json`.

1. Abrir la galería y comparar cada candidata con el paso del manual.
2. En `results.json`, marcar `"visualReview": "accepted"` para cada candidata
   revisada (o `"rejected"` si hay que repetirla). No cambiar `status` ni `hash`.
3. Ejecutar `npm run screenshots -- promote`, opcionalmente con `--docs`.
4. Revisar el diff de imágenes y ejecutar `npm run build`.

La promoción verifica que sigan vigentes el enlace, las instrucciones y la
configuración, y que el archivo candidato conserve los bytes capturados.
Cambiar un enlace exige volver a capturar y revisar; una aprobación vieja no
se reutiliza. `results.json` registra ejecuciones: no aporta rutas ni configura
las capturas. Las corridas parciales conservan los resultados de otras imágenes.

## Pestañas, filtros y encuadres especiales

Si la URL ya determina la pantalla, no hace falta configurar nada más.
Cuando el paso requiere desplazarse o cambiar una pestaña, agregar un comentario
MDX oculto **dentro de su propia figura**, antes de la imagen:

```mdx
<figure>

{/* screenshot: {"actions":[{"scrollTo":"#additional_data"}],"focusSelector":"#additional_data"} */}

![Datos adicionales](/img/compras/cargos-pagados-3.png)

<figcaption><a href="https://app.zauru.com/purchases/paid_charges/:id">{"https://app.zauru.com/purchases/paid_charges/:id"}</a></figcaption>
</figure>
```

Se aceptan hasta tres acciones: `click`, `scrollTo`, `waitFor`, `waitMs`,
`fill: {selector, value}` y `select: {selector, value}`. Los selectores deben ser
específicos. Las acciones inválidas bloquean la figura completa.

Opciones adicionales: `focusSelector`, `waitForSelector` (primero visible de la
lista), `hideSelectors`, `fullPage`, `captureMode: "preview"`, o
`captureMode: "blocked"` con `blockedCause`. Para casos de navegación excepcionales
se admiten `listPath`, `recordLink` y `expectPath`. No se admiten URLs ni nombres
de imagen en el comentario: se obtienen siempre de la figura.

Los parámetros `:id` / `:client_id` se resuelven contra registros reales de staging,
incluso en rutas anidadas. Los IDs numéricos explícitos, como `/contracts/42`,
se conservan; si ese registro no existe, se informa el fallo.

Las excepciones migradas del proceso anterior están junto a sus figuras.
[MIGRACION.md](MIGRACION.md) enumera las instrucciones antiguas que no se copiaron
porque el enlace cambió; revisarlas si hace falta conservar un encuadre especial.

## Comprobaciones de captura

- Solo captura páginas de staging. La URL final debe coincidir con la esperada,
  incluidos filtros y fragmento; no se guarda una redirección a otra pantalla.
- Comprueba errores HTTP/Rails, permisos, contenido visible y carga de DataTables.
- Conserva la protección de peticiones y acciones frente a operaciones que
  modifican registros. Los GET conocidos que escriben se muestran como vista
  previa del enlace desde la página anterior.
- Si existe el repositorio hermano `baculo` (o `BACULO_DIR`), amplía la detección
  de GET que escriben mediante sus controllers, sin generar un archivo de rutas.
- Las imágenes fuera de figuras, los enlaces no utilizables y los formatos que
  no sean PNG/JPEG se informan para revisión manual. No se adivina una pantalla.
- El viewport es 1600×900, con escala 2 por defecto. `.env` permite ajustar
  `SCREENSHOT_SCALE` y `ZAURU_HIDE_SELECTORS`.

La auditoría termina con código 1 si encuentra errores de asociación; las imágenes
sin figura son advertencias. `capture` continúa con las imágenes válidas y termina
con código 1 si el alcance seleccionado contiene conflictos, fallos o bloqueos.

`node tools/screenshots/cleanup-orphan-images.mjs` lista archivos sin referencias;
no borra imágenes. La auditoría también los incluye en `orphans`.

## Verificar cambios en la herramienta

```bash
npm --prefix tools/screenshots test
npm run build
```
