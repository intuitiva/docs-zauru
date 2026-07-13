/**
 * Docusaurus config — Manual de Usuario de Zauru
 *
 * Vanilla setup (preset-classic) with docs served at the site root
 * (routeBasePath: "/") to match the URLs already used at docs.zauru.com.
 */
const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentación de Zauru",
  tagline: "Manual de usuario de Zauru ERP",
  url: "https://docs.zauru.com",
  baseUrl: "/",
  trailingSlash: false,

  // Production build only — the favicon lives in static/img/
  favicon: "img/favicon.ico",

  // Open Graph / social preview metadata (Docusaurus headTags)
  headTags: [
    { tagName: "meta", attributes: { name: "theme-color", content: "#0f766e" } },
    { tagName: "meta", attributes: { property: "og:type", content: "website" } },
    { tagName: "meta", attributes: { property: "og:site_name", content: "Documentación de Zauru" } },
    { tagName: "meta", attributes: { property: "og:title", content: "Documentación de Zauru ERP" } },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content: "Manual de usuario de Zauru ERP/CRM — la herramienta asombrosa que apoya a las empresas a ordenarse.",
      },
    },
    { tagName: "meta", attributes: { property: "og:locale", content: "es_GT" } },
    { tagName: "meta", attributes: { name: "twitter:card", content: "summary" } },
  ],

  // GitHub Pages / Netlify: this assumes the repo is hosted at the org root.
  // Set this to your real repo if you want the "Edit this page" links wired up.
  projectName: "docs-zauru",
  organizationName: "intuitiva",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // i18n — documentation is Spanish (es).
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Serve docs at the site root instead of /docs/, matching docs.zauru.com.
          routeBasePath: "/",
          // Auto-generated sidebar from the docs/ folder structure.
          sidebarPath: require.resolve("./sidebars.js"),
          // Keep MDX as-is — we don't want any extra processing.
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // No blog — this is documentation-only.
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // No announcement bar — keep it vanilla.
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Documentación del ERP",
        logo: {
          alt: "Zauru",
          src: "img/logo.png",
          srcDark: "img/logo-dark.png",
        },
        items: [
          {
            href: "https://www.zauru.com/home",
            label: "Conoce más de Zauru",
            position: "left",
          },
          {
            href: "https://docs.zauru.com/api-docs",
            label: "Documentación API",
            position: "left",
          },
          {
            href: "https://app.zauru.com",
            label: "Ingresar",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Módulos",
            items: [
              { label: "Contabilidad", to: "/contabilidad" },
              { label: "Ventas", to: "/ventas" },
              { label: "Compras", to: "/compras" },
              { label: "Inventarios", to: "/inventarios" },
            ],
          },
          {
            title: "Recursos",
            items: [
              { label: "Primeros Pasos", to: "/primeros-pasos" },
              { label: "Permisos de Acceso", to: "/permisos-de-acceso" },
              {
                label: "Documentación API",
                href: "https://docs.zauru.com/api-docs",
              },
              {
                label: "Conoce más de Zauru",
                href: "https://www.zauru.com/home",
              },
            ],
          },
          {
            title: "Contacto",
            items: [
              {
                label: "Ingresar al sistema",
                href: "https://app.zauru.com",
              },
              {
                label: "Intuitiva Solutions",
                href: "https://www.intuitiva.solutions",
              },
            ],
          },
        ],
        copyright: `Creado con ❤ por <a href="https://www.intuitiva.solutions">Intuitiva</a>. © Intuitiva, S.A. 2010 - ${new Date().getFullYear()}. Derechos reservados.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
      algolia: {
        // Public Algolia DocSearch credentials — safe to commit (search-only key).
        // Manage your index at https://crawler.algolia.com
        appId: "ZVDKPO68BR",
        apiKey: "25e0c307fb5498760948b937c7534337",
        indexName: "Docusaurus"
      },
    }),
};

module.exports = config;