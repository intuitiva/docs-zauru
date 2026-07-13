import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Icon from "../components/Icon";
/* ---------------------------------------------------------------------------
   Section registry — grouped into 4 buckets with a per-section icon.
   Icons map to keys in src/components/icons-data.js (Font Awesome solid).
--------------------------------------------------------------------------- */
const GROUPS = [
  {
    key: "empezar",
    label: "Empezar",
    icon: "wrench",
    sections: [
      { href: "/primeros-pasos", icon: "wrench", title: "Primeros Pasos", desc: "Configuraciones generales para empezar a funcionar." },
      { href: "/configuraciones-de-mi-usuario", icon: "user-gear", title: "Configuraciones de mi usuario", desc: "Operaciones básicas que cualquier usuario puede realizar sin permisos." },
      { href: "/permisos-de-acceso", icon: "people-group", title: "Permisos de Acceso", desc: "Esquema de permisos y flujos de trabajo." },
    ],
  },
  {
    key: "modulos",
    label: "Módulos",
    icon: "cubes",
    sections: [
      { href: "/contabilidad", icon: "money-bill-wave", title: "Contabilidad", desc: "Cuentas, bancos, presupuestos y libros fiscales." },
      { href: "/contabilizacion-de-proyectos", icon: "tags", title: "Contabilización de Proyectos", desc: "Creación y seguimiento de proyectos y subproyectos." },
      { href: "/inventarios", icon: "truck", title: "Inventarios", desc: "Existencias en bodegas, series, lotes y auditorías." },
      { href: "/ventas", icon: "tags", title: "Ventas", desc: "Facturación, cobros, notas de crédito y facturas electrónicas." },
      { href: "/compras", icon: "cart-shopping", title: "Compras", desc: "Órdenes de compra, costos y cuentas por pagar." },
      { href: "/casos-de-soporte", icon: "kit-medical", title: "Casos de Soporte", desc: "Registro y facturación de casos." },
      { href: "/punto-de-venta", icon: "bullseye", title: "Punto de Venta", desc: "Facturación touch con lector de código de barras." },
      { href: "/contratos", icon: "arrows-rotate", title: "Contratos", desc: "Generación automática de documentos recurrentes." },
      { href: "/e-commerce", icon: "credit-card", title: "E-commerce", desc: "Integración con tiendas en línea y WooCommerce." },
      { href: "/crm", icon: "trophy", title: "CRM", desc: "Control de contactos y cotizaciones." },
      { href: "/webapps", icon: "code", title: "Webapps", desc: "Desarrollo a la medida integrado con Zauru." },
    ],
  },
  {
    key: "reportes",
    label: "Reportes",
    icon: "chart-line",
    sections: [
      { href: "/reportes-de-contabilidad", icon: "chart-line", title: "Reportes de Contabilidad", desc: "Control de gastos, ingresos y proyectos." },
      { href: "/reportes-de-inventarios", icon: "chart-line", title: "Reportes de Inventarios", desc: "Existencias, bodegas y auditorías." },
      { href: "/reportes-de-ventas", icon: "chart-line", title: "Reportes de Ventas", desc: "Rendimiento del departamento de ventas." },
      { href: "/reportes-de-compras", icon: "chart-line", title: "Reportes de Compras", desc: "Costos, órdenes de compra y cargos." },
      { href: "/reportes-de-casos-de-soporte", icon: "chart-line", title: "Reportes de Casos de Soporte", desc: "Casos atendidos, abiertos y series." },
      { href: "/reportes-de-puntos-de-venta", icon: "chart-line", title: "Reportes de Puntos de Venta", desc: "Estadísticas de casos, ventas y cobros." },
      { href: "/reportes-de-contratos", icon: "chart-line", title: "Reportes de Contratos", desc: "Contratos sin recurrencia y estadísticas." },
      { href: "/reportes-de-crm", icon: "chart-line", title: "Reportes de CRM", desc: "Consolidados para decisiones de ventas." },
    ],
  },
  {
    key: "herramientas",
    label: "Herramientas",
    icon: "screwdriver-wrench",
    sections: [
      { href: "/importaciones-masivas", icon: "file-import", title: "Importaciones masivas de datos históricos", desc: "Herramientas para digitalización masiva de datos." },
    ],
  },
];

/* Role-based entry pills — quick jumps for the most common ERP personas. */
const ROLES = [
  { href: "/contabilidad", icon: "money-bill-wave", label: "Soy contador" },
  { href: "/ventas", icon: "tags", label: "Soy vendedor" },
  { href: "/inventarios", icon: "truck", label: "Manejo bodega" },
  { href: "/permisos-de-acceso", icon: "people-group", label: "Soy administrador" },
];

function SectionCard({ href, icon, title, desc }) {
  return (
    <a href={href} className="zauru-card">
      <span className="zauru-card__icon">
        <Icon name={icon} />
      </span>
      <h3 className="zauru-card__title">{title}</h3>
      {desc ? <p className="zauru-card__desc">{desc}</p> : null}
    </a>
  );
}

function SectionGroup({ group }) {
  return (
    <section className="zauru-section-group">
      <header className="zauru-section-group__header">
        <span className="zauru-section-group__icon">
          <Icon name={group.icon} />
        </span>
        <h2 className="zauru-section-group__title">{group.label}</h2>
        <span className="zauru-section-group__count">{group.sections.length}</span>
      </header>
      <div className="zauru-grid">
        {group.sections.map((s) => (
          <SectionCard key={s.href} {...s} />
        ))}
      </div>
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Manual de usuario de Zauru ERP/CRM">
      <section className="zauru-hero">
        <h1 className="zauru-hero__title">
          Documentación de <span>Zauru</span>
        </h1>
        <p className="zauru-hero__subtitle">
          Creamos una herramienta asombrosa que apoya a las empresas a ordenarse
          para tomar decisiones informadas.
        </p>
        <button
          type="button"
          className="zauru-hero__search"
          onClick={openDocSearch}
          aria-label="Buscar en la documentación">
          <Icon name="magnifying-glass" />
          Buscar en la documentación…
        </button>
      </section>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 64px" }}>
        <div className="zauru-roles">
          {ROLES.map((r) => (
            <a key={r.href} href={r.href} className="zauru-role-pill">
              <Icon name={r.icon} />
              {r.label}
            </a>
          ))}
        </div>

        {GROUPS.map((g) => (
          <SectionGroup key={g.key} group={g} />
        ))}
      </main>
    </Layout>
  );
}
