# Screenshots automáticos de Zauru

Pipeline para capturar pantallas de Zauru (https://zauru.herokuapp.com) y guardarlas
en `static/img/<sección>/<documento>-<N>.png`, siguiendo la convención de
imágenes del repo, e insertar las referencias en los `.md`.

Funciona en dos pasos: un **manifiesto** (`manifest.json`) define qué capturar
y dónde insertarlo; un **runner** de Playwright hace las capturas. El manifiesto
se puede generar con un LLM vía OpenRouter o escribir/editar a mano.

## Requisitos

- Node 18+ (el repo fija Node 22 vía `.nvmrc`)
- Una cuenta de Zauru con datos de demo (no uses datos reales de clientes)

## Instalación

```bash
cd tools/screenshots
npm install
npx playwright install chromium
cp .env.example .env   # completa ZAURU_EMAIL / ZAURU_PASSWORD (+ OPENROUTER_API_KEY si generarás manifiestos)
```

## Flujo de trabajo

```bash
# 1) (Opcional pero recomendado) vuelca el menú real de Zauru a nav.json
node discover-nav.mjs

# 2) Genera/actualiza el manifiesto para todos los huecos
node generate-manifest.mjs --gaps             # Tier A: refs rotas (infiere) + Tier B: sin imágenes (LLM)
node generate-manifest.mjs --gaps --dry-run   # solo reporte, no escribe
#    Alternativas puntuales:
#    node generate-manifest.mjs --docs docs/contabilidad/liquidaciones.md
#    node generate-manifest.mjs --missing      # solo .md sin ![ (omite API/código)
#    Revisa y ajusta manifest.json a mano si hace falta.

# 3) Captura los screenshots (creds en .env; sesión en storageState.json)
node run-screenshots.mjs                      # todo el manifiesto
node run-screenshots.mjs --docs beneficiarios # solo algunos docs
node run-screenshots.mjs --headed             # con navegador visible (depurar)
node run-screenshots.mjs --force              # recapturar aunque ya existan
#    Errores/advertencias → failures.log (no detienen la corrida)

# 4) Inserta refs nuevas y reescribe .jpg → .png en los .md
node insert-image-refs.mjs --dry-run          # vista previa, no escribe nada
node insert-image-refs.mjs                    # escribe los cambios

# 5) Revisa con git diff, verifica el build y publica
cd ../.. && npm run build
```

## Formato del manifiesto

```jsonc
{
  "imageFormat": "png",         // o "jpeg" con "imageQuality": 80
  "docs": [
    {
      "section": "contabilidad",            // carpeta bajo docs/ y static/img/
      "slug": "beneficiarios",              // nombre del .md sin extensión
      "docPath": "docs/contabilidad/beneficiarios.md",
      "existingImageCount": 0,              // informativo
      "shots": [
        {
          "stepNumber": 1,                  // → beneficiarios-1.png
          "caption": "Texto alternativo en español",
          "zauruPath": "/accounting/payees",       // ruta web (sin .json)
          "resolveId": true,                // opcional: vistas /recurso/<id>; toma
                                            // el primer registro real del listado
          "hideSelectors": ["#header"],     // opcional: sobreescribe ZAURU_HIDE_SELECTORS
          "fullPage": false,                // opcional: true = página completa
          "waitForSelector": ["table", "..."],      // primero visible gana
          "insertAfterText": "Línea exacta del .md tras la cual insertar"
        }
      ]
    }
  ]
}
```

## Modo `--gaps`

Cubre dos tipos de hueco sin regenerar docs que ya tienen todos los archivos en `static/img/`:

1. **Tier A (refs rotas):** el `.md` apunta a `/img/...` pero el archivo no existe. Infiere caption / step / `insertAfterText` del markdown; resuelve `zauruPath` con `nav.json` (y rutas API del doc); si no hay match claro, una llamada LLM solo para rutas.
2. **Tier B (sin imágenes):** docs sin `![`. Usa el LLM como antes. Omite automáticamente docs de API/GraphQL/código.

Las capturas son siempre **PNG**. `insert-image-refs.mjs` reescribe refs `.jpg` (u otra extensión) a `.png`.

## Notas

- **Login OAuth:** la app redirige a `zauru-oauth-*.herokuapp.com`; el script
  navega a la raíz, llena el formulario (`username`/`password`) y espera el
  regreso al dominio de la app. "Sin sesión" = estar fuera del host de la app.
- **Sesión:** el login se guarda en `storageState.json` y se reutiliza; si
  expira a mitad de corrida, el runner reintenta el login solo.
- **Encuadre 16:9:** el viewport es 1600×900 (16:9, a `SCREENSHOT_SCALE=2` sale
  PNG de 3200×1800) y la captura es solo la parte visible superior de la
  página — no la página completa. Para un shot puntual de página completa,
  agrega `"fullPage": true` al shot en el manifiesto.
- **Sin barra superior:** antes de capturar se ocultan `#logo`,
  `#communication_toolbar` y `#user_toolbar` (configurables con
  `ZAURU_HIDE_SELECTORS`); la navegación de módulos permanece visible. Si el
  DOM cambia, corre `node run-screenshots.mjs --docs beneficiarios --debug-dom`
  para ver la estructura y afinar selectores. También puedes sobreescribir por
  shot con `"hideSelectors": [...]`.
- **Formato:** PNG sin pérdida (ideal para texto de la UI). Si quieres archivos
  más ligeros, cambia `imageFormat` a `jpeg` en el manifiesto (usa `imageQuality`).
- **Ids en vistas de detalle:** marca `"resolveId": true` en el shot para que
  el runner use el primer registro real del listado en vez de un id fijo que
  podría no existir en el tenant (404).
- **Modelo del manifiesto:** cualquier modelo de OpenRouter; configúralo con
  `MANIFEST_MODEL` (por defecto `tencent/hy3:free`). Con `discover-nav.mjs` +
  `nav.json` las rutas salen del menú real y no inventadas.
- **Secretos:** `.env` y `storageState.json` están en `.gitignore`. No los subas.
