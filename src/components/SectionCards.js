import React from "react";

const SECTIONS = [
  { href: "/configuraciones-de-mi-usuario", title: "Configuraciones de mi usuario", desc: "Operaciones básicas que cualquier usuario puede realizar." },
  { href: "/primeros-pasos", title: "Primeros Pasos", desc: "Configuraciones generales para empezar a funcionar." },
  { href: "/permisos-de-acceso", title: "Permisos de Acceso", desc: "Esquema de permisos y flujos de trabajo." },
  { href: "/contabilidad", title: "Contabilidad", desc: "Cuentas, bancos, presupuestos y libros fiscales." },
  { href: "/contabilizacion-de-proyectos", title: "Contabilización de Proyectos", desc: "Creación y seguimiento de proyectos y subproyectos." },
  { href: "/inventarios", title: "Inventarios", desc: "Existencias, series, lotes y auditorías." },
  { href: "/ventas", title: "Ventas", desc: "Facturación, cobros y notas de crédito." },
  { href: "/compras", title: "Compras", title_full: "Compras", desc: "Órdenes de compra y cuentas por pagar." },
  { href: "/casos-de-soporte", title: "Casos de Soporte", desc: "Registro y facturación de casos." },
  { href: "/punto-de-venta", title: "Punto de Venta", desc: "Facturación touch con lector de código de barras." },
  { href: "/contratos", title: "Contratos", desc: "Generación automática de documentos recurrentes." },
  { href: "/e-commerce", title: "E-commerce", desc: "Integración con tiendas en línea y WooCommerce." },
  { href: "/crm", title: "CRM", desc: "Control de contactos y cotizaciones." },
  { href: "/webapps", title: "Webapps", desc: "Desarrollo a la medida integrado con Zauru." },
  { href: "/reportes-de-contabilidad", title: "Reportes de Contabilidad" },
  { href: "/reportes-de-inventarios", title: "Reportes de Inventarios" },
  { href: "/reportes-de-ventas", title: "Reportes de Ventas" },
  { href: "/reportes-de-compras", title: "Reportes de Compras" },
  { href: "/reportes-de-casos-de-soporte", title: "Reportes de Casos de Soporte" },
  { href: "/reportes-de-puntos-de-venta", title: "Reportes de Puntos de Venta" },
  { href: "/reportes-de-contratos", title: "Reportes de Contratos" },
  { href: "/reportes-de-crm", title: "Reportes de CRM" },
  { href: "/importaciones-masivas", title: "Importaciones masivas de datos históricos" },
];

export default function SectionCards() {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "16px",
      }}
    >
      {SECTIONS.map((s) => (
        <li
          key={s.href}
          style={{
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            border: "1px solid var(--ifm-color-emphasis-200)",
            overflow: "hidden",
            background: "var(--ifm-card-background)",
          }}
        >
          <a
            href={s.href}
            style={{
              display: "block",
              padding: "16px 20px",
              color: "inherit",
            }}
          >
            <strong>{s.title}</strong>
            {s.desc ? (
              <div style={{ marginTop: 6, fontSize: "0.92em", color: "var(--ifm-color-emphasis-600)" }}>
                {s.desc}
              </div>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}