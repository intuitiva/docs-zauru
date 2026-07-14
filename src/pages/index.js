import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Icon from "../components/Icon";

const GROUPS = [
  {
    key: "empezar",
    label: "Empezar",
    sections: [
      { href: "/primeros-pasos", title: "Primeros Pasos", icon: "wrench" },
      { href: "/configuraciones-de-mi-usuario", title: "Configuraciones de mi usuario", icon: "user-gear" },
      { href: "/permisos-de-acceso", title: "Permisos de Acceso", icon: "people-group" },
    ],
  },
  {
    key: "modulos",
    label: "Módulos",
    sections: [
      { href: "/contabilidad", title: "Contabilidad", icon: "money-bill-wave" },
      { href: "/contabilizacion-de-proyectos", title: "Contabilización de Proyectos", icon: "tags" },
      { href: "/inventarios", title: "Inventarios", icon: "truck" },
      { href: "/ventas", title: "Ventas", icon: "tags" },
      { href: "/compras", title: "Compras", icon: "cart-shopping" },
      { href: "/casos-de-soporte", title: "Casos de Soporte", icon: "kit-medical" },
      { href: "/punto-de-venta", title: "Punto de Venta", icon: "bullseye" },
      { href: "/contratos", title: "Contratos", icon: "arrows-rotate" },
      { href: "/nominas", title: "Nominas", icon: "users" },
      { href: "/produccion", title: "Produccion", icon: "gears" },
      { href: "/e-commerce", title: "E-commerce", icon: "credit-card" },
      { href: "/crm", title: "CRM", icon: "trophy" },
      { href: "/webapps", title: "Webapps", icon: "code" },
    ],
  },
  {
    key: "reportes",
    label: "Reportes",
    sections: [
      { href: "/reportes-de-contabilidad", title: "Reportes de Contabilidad", icon: "chart-line" },
      { href: "/reportes-de-inventarios", title: "Reportes de Inventarios", icon: "chart-line" },
      { href: "/reportes-de-ventas", title: "Reportes de Ventas", icon: "chart-line" },
      { href: "/reportes-de-compras", title: "Reportes de Compras", icon: "chart-line" },
      { href: "/reportes-de-casos-de-soporte", title: "Reportes de Casos de Soporte", icon: "chart-line" },
      { href: "/reportes-de-puntos-de-venta", title: "Reportes de Puntos de Venta", icon: "chart-line" },
      { href: "/reportes-de-contratos", title: "Reportes de Contratos", icon: "chart-line" },
      { href: "/reportes-de-crm", title: "Reportes de CRM", icon: "chart-line" },
    ],
  },
  {
    key: "herramientas",
    label: "Herramientas",
    sections: [
      {
        href: "/importaciones-masivas",
        title: "Importaciones masivas de datos históricos",
        icon: "file-import",
      },
    ],
  },
];

function SectionGroup({ group }) {
  return (
    <section className="zauru-section-group" aria-labelledby={`group-${group.key}`}>
      <header className="zauru-section-group__header">
        <h2 id={`group-${group.key}`} className="zauru-section-group__title">
          {group.label}
        </h2>
      </header>
      <ul className="zauru-card-grid">
        {group.sections.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="zauru-card" aria-label={s.title}>
              <span className="zauru-card__icon">
                <Icon name={s.icon} />
              </span>
              <span className="zauru-card__title">{s.title}</span>
              <span className="zauru-card__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function openDocSearch() {
  if (typeof document === "undefined") return;
  const btn =
    document.querySelector(".DocSearch-Button") ||
    document.querySelector(".navbar [class*=DocSearch]");
  if (btn) {
    btn.click();
  } else if (window.docsearch) {
    window.docsearch();
  }
}

function searchShortcutLabel() {
  if (typeof navigator === "undefined") return "Ctrl K";
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  return isMac ? "⌘K" : "Ctrl K";
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [kbd, setKbd] = React.useState("Ctrl K");
  React.useEffect(() => {
    setKbd(searchShortcutLabel());
  }, []);

  return (
    <Layout title={siteConfig.title} description="Manual de usuario de Zauru ERP/CRM">
      <section className="zauru-hero">
        <p className="zauru-hero__eyebrow">Documentación</p>
        <h1 className="zauru-hero__title">ZAURU</h1>
        <p className="zauru-hero__subtitle">
          Encuentra procesos, módulos y reportes del ERP.
        </p>
        <button
          type="button"
          className="zauru-hero__search"
          onClick={openDocSearch}
          aria-label="Buscar en la documentación">
          <Icon name="magnifying-glass" />
          Buscar en la documentación…
          <span className="zauru-hero__search-kbd">{kbd}</span>
        </button>
        <hr className="zauru-hero__rule" />
      </section>

      <main className="zauru-home">
        {GROUPS.map((g) => (
          <SectionGroup key={g.key} group={g} />
        ))}
      </main>
    </Layout>
  );
}
