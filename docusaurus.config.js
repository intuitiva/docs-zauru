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
        copyright: `Creado con ❤ por <a href="https://www.intuitiva.solutions">Intuitiva</a>. © Intuitiva, S.A. 2010 - ${new Date().getFullYear()}. Derechos reservados.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;