import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Icon from "../components/Icon";

const GROUPS = [
  {
    key: "empezar",
    label: "Empezar",
    sections: [
      { href: "/primeros-pasos", title: "Primeros Pasos" },
      { href: "/configuraciones-de-mi-usuario", title: "Configuraciones de mi usuario" },
      { href: "/permisos-de-acceso", title: "Permisos de Acceso" },
    ],
  },
  {
    key: "modulos",
    label: "Módulos",
    sections: [
      { href: "/contabilidad", title: "Contabilidad" },
      { href: "/contabilizacion-de-proyectos", title: "Contabilización de Proyectos" },
      { href: "/inventarios", title: "Inventarios" },
      { href: "/ventas", title: "Ventas" },
      { href: "/compras", title: "Compras" },
      { href: "/casos-de-soporte", title: "Casos de Soporte" },
      { href: "/punto-de-venta", title: "Punto de Venta" },
      { href: "/contratos", title: "Contratos" },
      { href: "/e-commerce", title: "E-commerce" },
      { href: "/crm", title: "CRM" },
      { href: "/webapps", title: "Webapps" },
    ],
  },
  {
    key: "reportes",
    label: "Reportes",
    sections: [
      { href: "/reportes-de-contabilidad", title: "Reportes de Contabilidad" },
      { href: "/reportes-de-inventarios", title: "Reportes de Inventarios" },
      { href: "/reportes-de-ventas", title: "Reportes de Ventas" },
      { href: "/reportes-de-compras", title: "Reportes de Compras" },
      { href: "/reportes-de-casos-de-soporte", title: "Reportes de Casos de Soporte" },
      { href: "/reportes-de-puntos-de-venta", title: "Reportes de Puntos de Venta" },
      { href: "/reportes-de-contratos", title: "Reportes de Contratos" },
      { href: "/reportes-de-crm", title: "Reportes de CRM" },
    ],
  },
  {
    key: "herramientas",
    label: "Herramientas",
    sections: [
      {
        href: "/importaciones-masivas",
        title: "Importaciones masivas de datos históricos",
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
      <ul className="zauru-row-list">
        {group.sections.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="zauru-row">
              <span>{s.title}</span>
              <span className="zauru-row__arrow" aria-hidden="true">
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
