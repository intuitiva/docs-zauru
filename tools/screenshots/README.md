# Screenshots automáticos de Zauru

Pipeline para capturar pantallas de Zauru (https://zauru.herokuapp.com), guardarlas
en `static/img/<sección>/<documento>-<N>.png` e insertar las referencias en los
`.md` del manual.

## Cómo se conecta todo

```
baculo (ERP Rails)          Zauru web (app viva)
config/routes.rb            menú real de la app
      │                            │
      ▼                            ▼
1-extract-routes.mjs        2-discover-nav.mjs
      │                            │
   routes.json                 nav.json            docs/**/*.md
      │                            │                  │
      └────────────┬───────────────┴──────────────────┘
                   ▼
        3-generate-manifest.mjs  (LLM vía OpenRouter: SOLO ELIGE
                   │              rutas de la lista real y redacta)
           manifest.json          │
                   │              ▼
                   │     4-validate-manifest.mjs  (offline: rutas existen,
                   │      sin duplicados, insertAfterText presente)
                   ▼
        5-run-screenshots.mjs  (Playwright: navega, VERIFICA la URL final,
                   │            resuelve ids reales, ejecuta actions, captura)
                   ▼
        static/img/<sección>/<doc>-<N>.png
                   │
                   ▼
        6-insert-image-refs.mjs → referencias ![caption](/img/…) en los .md
                   │
                   ▼
        npm run build  →  commit en main  →  deploy

7-report-missing.mjs  (auxiliar: Excel de triaje con lo que falte)
```

## Los scripts, uno por uno

| # | Script | Qué lee | Qué escribe | Cuándo correrlo |
|---|--------|---------|-------------|-----------------|
| 1 | `1-extract-routes.mjs` | `baculo/config/routes.rb` | `routes.json` (1498 rutas GET reales) | Cuando cambien rutas del ERP |
| 2 | `2-discover-nav.mjs` | Zauru (login, menú de la home) | `nav.json` (etiqueta → ruta) | Antes de regenerar el manifiesto |
| 3 | `3-generate-manifest.mjs` | `docs/*.md` + routes + nav | `manifest.json` | Cuando falten pantallas en el manual |
| 4 | `4-validate-manifest.mjs` | manifest + routes + docs | (solo reporte) | SIEMPRE antes de capturar |
| 5 | `5-run-screenshots.mjs` | manifest + sesión Zauru | PNGs en `static/img/`, `failures.log` | Tras validar |
| 6 | `6-insert-image-refs.mjs` | manifest + PNGs | refs `![…]` dentro de los `.md` | Tras capturar |
| 7 | `7-report-missing.mjs` | refs rotas + failures.log | `MISSING-IMAGES.xlsx` | Para triaje manual |

## Por qué está hecho así (lo que la versión anterior hacía mal)

- **Rutas desde el ERP real, no inventadas.** La versión vieja dejaba que el
  LLM adivinara URLs (ej. `/payroll/reports/weekly_piecework_costs` que nunca
  existió) → lluvia de 404. Ahora `routes.json` se extrae de
  `baculo/config/routes.rb` y el generador está enjaulado: solo puede copiar
  rutas de esa lista; cualquier path inexistente se descarta.
- **Nunca más "la misma foto para pasos distintos".** El validador (regla E5)
  exige que dos shots de un mismo doc con la misma URL se diferencien con
  `actions` (pestaña, filtro, modal). El runner ejecuta esas acciones antes
  de capturar.
- **Nunca más "captura de la pantalla equivocada".** Zauru redirige cuando
  falta permiso o el registro no existe. El runner compara la URL final con
  la pedida y aborta si difiere (regla `url-mismatch`): lo que aterriza en
  otra página NO se guarda como si fuera la pantalla pedida.
- **`resolveId` que funciona.** Antes los paths tipo `/recurso/1/edit` no se
  resolvían (regex solo cubría `/1` final) y caían al id hardcodeado `1`
  (→ 404). Ahora resuelve cada segmento de id contra el listado real,
  recursivo (sirve para `/clients/1/credit_cards/2`), y si el listado está
  vacío aborta en lugar de disparar al id 1.

## Requisitos

- Node 18+ (el repo fija Node 22 vía `.nvmrc`)
- Repo `baculo` en `~/Documents/zauru/code/baculo` (hermano de este repo) —
  o define `BACULO_DIR`
- Cuenta de Zauru con datos de demo y permisos sobre todos los módulos
- `OPENROUTER_API_KEY` solo si vas a regenerar manifiesto con el LLM

## Instalación

```bash
cd tools/screenshots
npm install
npx playwright install chromium
cp .env.example .env   # completa ZAURU_EMAIL / ZAURU_PASSWORD
```

## Flujo de trabajo

```bash
# 0) Rutas reales del ERP (solo cuando cambie baculo)
node 1-extract-routes.mjs

# 1) Menú real de Zauru → nav.json
node 2-discover-nav.mjs

# 2) Manifiesto
node 3-generate-manifest.mjs --gaps          # huecos: refs rotas + sin imágenes
node 3-generate-manifest.mjs --regen slug1,slug2   # repara docs completos
node 3-generate-manifest.mjs --docs docs/ventas/clientes.md
#    Ajustes finos: edita manifest.json a mano.

# 3) Valida ANTES de capturar (offline, sin navegador)
node 4-validate-manifest.mjs                 # exit 1 si hay errores

# 4) Captura
node 5-run-screenshots.mjs                   # respeta los PNG ya existentes
node 5-run-screenshots.mjs --force           # recaptura TODO el manifiesto
node 5-run-screenshots.mjs --docs beneficiarios --headed   # depurar

# 5) Inserta refs nuevas en los .md
node 6-insert-image-refs.mjs --dry-run && node 6-insert-image-refs.mjs

# 6) Revisa con git diff, verifica el build y publica
cd ../.. && npm run build
```

## Formato del manifiesto

```jsonc
{
  "imageFormat": "png",          // o "jpeg" con "imageQuality": 80
  "docs": [
    {
      "section": "contabilidad",           // carpeta bajo docs/ y static/img/
      "slug": "beneficiarios",             // nombre del .md sin extensión
      "docPath": "docs/contabilidad/beneficiarios.md",
      "existingImageCount": 0,
      "shots": [
        {
          "stepNumber": 1,                 // → beneficiarios-1.png
          "caption": "Texto alternativo en español",
          "zauruPath": "/accounting/payees",   // DEBE existir en routes.json
          "resolveId": true,               // opcional: /recurso/:id → usa el
                                           //   primer registro real del listado
          "actions": [                     // opcional: estado distinto de la
            { "click": "a[href='#tab-2']" },   // misma página (pestañas, etc.)
            { "waitFor": ".tab-pane.active table" }
          ],
          "hideSelectors": ["#header"],    // opcional: sobreescribe ZAURU_HIDE_SELECTORS
          "fullPage": false,               // opcional: true = página completa
          "waitForSelector": ["table"],    // primero visible gana
          "insertAfterText": "Línea exacta del .md tras la cual insertar"
        }
      ]
    }
  ]
}
```

### Acciones soportadas en `actions`

| Acción | Valor | Ejemplo |
|--------|-------|---------|
| `click` | selector CSS | `{ "click": "a[href='#tab-2']" }` |
| `fill` | `{selector, value}` | `{ "fill": { "selector": "#q", "value": "ABC" } }` |
| `select` | `{selector, value}` | `{ "select": { "selector": "#mes", "value": "3" } }` |
| `waitFor` | selector CSS | `{ "waitFor": ".resultados table" }` |
| `waitMs` | milisegundos | `{ "waitMs": 800 }` |

Máximo 3 por shot. Si una acción falla, el shot aborta SIN captura (nunca
guarda un estado a medias).

## Notas

- **Login OAuth:** la app redirige a `zauru-oauth-*.herokuapp.com`; el script
  navega a la raíz, llena el formulario (`username`/`password`) y espera el
  regreso al dominio de la app.
- **Sesión:** el login se guarda en `storageState.json` y se reutiliza; si
  expira a mitad de corrida, el runner re-loguea solo.
- **Encuadre 16:9:** viewport 1600×900 (a `SCREENSHOT_SCALE=2` sale PNG de
  3200×1800). La captura es la parte visible superior; `"fullPage": true`
  fuerza página completa.
- **Sin barra superior:** se ocultan `#logo`, `#communication_toolbar` y
  `#user_toolbar` (configurable con `ZAURU_HIDE_SELECTORS`; por shot con
  `"hideSelectors"`). La navegación de módulos queda visible. Con DOM raro:
  `node 5-run-screenshots.mjs --docs <slug> --debug-dom`.
- **Ids en vistas de detalle:** `"resolveId": true` → el runner visita el
  listado y usa el primer registro real (ordenado por id) en vez de un id
  fijo que podría no existir en el tenant.
- **Formato:** PNG sin pérdida (ideal para texto de la UI).
- **Candidatos por módulo:** el mapa sección → prefijos está en
  `lib/sections.mjs`; añade entradas si aparece una sección nueva.
- **Secretos:** `.env` y `storageState.json` están en `.gitignore`. No los
  subas.

## Troubleshooting

| Síntoma | Causa probable | Qué hacer |
|---------|----------------|-----------|
| `HTTP 404 en <ruta>` en failures.log | ruta del manifiesto no existe (enjaulado debería evitarlo) | `node 4-validate-manifest.mjs` y regenera ese doc |
| `url-mismatch: aterrizó en X en vez de Y` | Zauru redirige (permiso faltante, registro sin acceso) | verifica permisos del usuario en .env; si el redirect es legítimo, pon la ruta final en el manifiesto |
| `el listado X no tiene registros navegables` | tenant de demo sin datos para ese recurso | crea un registro de demo o cambia la ruta |
| `acción click falló` | el selector de la pestaña/botón cambió | ajusta `actions` en el manifiesto (usa `--debug-dom`) |
| Captura en blanco o sección equivocada | selectores de ocultar cambiaron | `--debug-dom` y ajusta `ZAURU_HIDE_SELECTORS` |
| `nav.json` no tiene mi módulo | usuario sin permisos a ese módulo al generarlo | usa el usuario con todos los permisos y re-corrre paso 2 |
