import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const SECTIONS = [
  { href: "/configuraciones-de-mi-usuario", title: "Configuraciones de mi usuario", desc: "Operaciones básicas que cualquier usuario puede realizar sin permisos." },
  { href: "/primeros-pasos", title: "Primeros Pasos", desc: "Configuraciones generales para empezar a funcionar." },
  { href: "/permisos-de-acceso", title: "Permisos de Acceso", desc: "Esquema de permisos y flujos de trabajo." },
  { href: "/contabilidad", title: "Contabilidad", desc: "Cuentas, bancos, presupuestos y libros fiscales." },
  { href: "/contabilizacion-de-proyectos", title: "Contabilización de Proyectos", desc: "Creación y seguimiento de proyectos y subproyectos." },
  { href: "/inventarios", title: "Inventarios", desc: "Existencias en bodegas, series, lotes y auditorías." },
  { href: "/ventas", title: "Ventas", desc: "Facturación, cobros, notas de crédito y facturas electrónicas." },
  { href: "/compras", title: "Compras", desc: "Órdenes de compra, costos y cuentas por pagar." },
  { href: "/casos-de-soporte", title: "Casos de Soporte", desc: "Registro y facturación de casos." },
  { href: "/punto-de-venta", title: "Punto de Venta", desc: "Facturación touch con lector de código de barras." },
  { href: "/contratos", title: "Contratos", desc: "Generación automática de documentos recurrentes." },
  { href: "/e-commerce", title: "E-commerce", desc: "Integración con tiendas en línea y WooCommerce." },
  { href: "/crm", title: "CRM", desc: "Control de contactos y cotizaciones." },
  { href: "/webapps", title: "Webapps", desc: "Desarrollo a la medida integrado con Zauru." },
  { href: "/reportes-de-contabilidad", title: "Reportes de Contabilidad", desc: "Control de gastos, ingresos y proyectos." },
  { href: "/reportes-de-inventarios", title: "Reportes de Inventarios", desc: "Existencias, bodegas y auditorías." },
  { href: "/reportes-de-ventas", title: "Reportes de Ventas", desc: "Rendimiento del departamento de ventas." },
  { href: "/reportes-de-compras", title: "Reportes de Compras", desc: "Costos, órdenes de compra y cargos." },
  { href: "/reportes-de-casos-de-soporte", title: "Reportes de Casos de Soporte", desc: "Casos atendidos, abiertos y series." },
  { href: "/reportes-de-puntos-de-venta", title: "Reportes de Puntos de Venta", desc: "Estadísticas de casos, ventas y cobros." },
  { href: "/reportes-de-contratos", title: "Reportes de Contratos", desc: "Contratos sin recurrencia y estadísticas." },
  { href: "/reportes-de-crm", title: "Reportes de CRM", desc: "Consolidados para decisiones de ventas." },
  { href: "/importaciones-masivas", title: "Importaciones masivas de datos históricos", desc: "Herramientas para digitalización masiva de datos." },
];

function Card({ href, title, desc }) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        border: "1px solid var(--ifm-color-emphasis-200)",
        background: "var(--ifm-card-background)",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <strong style={{ fontSize: "1.05em" }}>{title}</strong>
      {desc ? (
        <div style={{ marginTop: 8, fontSize: "0.92em", color: "var(--ifm-color-emphasis-600)" }}>
          {desc}
        </div>
      ) : null}
    </a>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación del usuario de Zauru ERP/CRM"
    >
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        <h1 style={{ fontSize: "2.2em", marginBottom: 4 }}>{siteConfig.title}</h1>
        <p style={{ fontSize: "1.1em", color: "var(--ifm-color-emphasis-600)", marginBottom: 32 }}>
          Creamos una herramienta asombrosa que apoya a las empresas a ordenarse para tomar decisiones informadas.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {SECTIONS.map((s) => (
            <Card key={s.href} {...s} />
          ))}
        </div>
      </main>
    </Layout>
  );
}