# Documentación de Zauru — Docusaurus

Documentación del usuario de Zauru ERP, construida con [Docusaurus 3](https://docusaurus.io).

## Requisitos

- [Node.js](https://nodejs.org/) **18+** (el repo fija Node 22 vía `.nvmrc`)
- npm 9+ (incluido con Node)

## Ejecutar localmente

Desde la raíz del repositorio:

```bash
npm install        # solo la primera vez
npm start          # http://localhost:3000
```

El servidor de desarrollo recarga la página automáticamente al guardar cambios.

## Compilar para producción

```bash
npm run build      # genera ./build con HTML/JS/CSS estáticos
npm run serve      # sirve el build de producción en http://localhost:3000
```

## Estructura

```
docs-zauru/
├── docusaurus.config.js     # Configuración del sitio
├── sidebars.js              # Sidebar autogenerada desde docs/
├── docs/                    # Documentación (fuente de verdad)
│   └── <sección>/
│       ├── _category_.json  # Etiqueta, orden e índice de la sección
│       ├── index.md         # Página landing de la sección
│       └── *.md             # Documentos hijos
├── src/
│   ├── pages/index.js       # Homepage (tarjetas de secciones)
│   └── css/custom.css       # Sobreescrituras de tema
├── static/img/              # Imágenes organizadas por sección
├── netlify.toml             # Configuración de build para Netlify
└── DEPLOY.md                # Guía de despliegue en Netlify
```

## Editar contenido

Toda la documentación se edita directamente dentro de `docs/`. El menú lateral (sidebar) se genera automáticamente a partir de esta carpeta.

- **Reordenar secciones:** cambia `position` en `docs/<sección>/_category_.json`
- **Reordenar páginas hijas:** cambia el valor de `sidebar_position` en el front matter del `.md`
- **Renombrar en el menú:** cambia `sidebar_label` en el front matter
- **Nueva sección:** crea una carpeta con su `_category_.json` e `index.md`

## Imágenes locales

Las imágenes están en `static/img/` organizadas por sección, con el mismo
nombre del documento donde se usan más un número secuencial.

```
static/img/
├── casos-de-soporte/
│   ├── casos-cerrar-un-caso-1.jpg
│   └── casos-cerrar-un-caso-2.jpg
├── contabilidad/
│   └── ...
└── ...
```

Se referencian en markdown como `/img/<sección>/<documento>-<N>.<ext>`.

Para agregar una imagen nueva: coloca el archivo en `static/img/<sección>/<documento>-<N>.jpg`
y referéncialo como `/img/<sección>/<documento>-<N>.jpg`.

### Captura automática de screenshots

Existe una herramienta en [`tools/screenshots/`](tools/screenshots/README.md) que
inicia sesión en Zauru con Playwright, captura pantallas del área de contenido
como PNG siguiendo esta misma convención e inserta las referencias en los `.md`.
Ver su README para el flujo completo (`discover-nav` → `generate-manifest` →
`run-screenshots` → `insert-image-refs`).

## Despliegue

Ver [`DEPLOY.md`](DEPLOY.md) para instrucciones completas de despliegue en Netlify.