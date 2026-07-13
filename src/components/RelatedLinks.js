import React from "react";
import Icon from "./Icon";

/**
 * RelatedLinks — renders a "Próximos pasos" card row from frontmatter.
 *
 * Frontmatter format:
 *   relacionados:
 *     - /contabilidad/conciliacion-bancaria
 *     - /contabilidad/cuentas-contables
 *
 * If absent or empty, renders nothing.
 */
export default function RelatedLinks({relacionados}) {
  if (!relacionados || relacionados.length === 0) {
    return null;
  }
  return (
    <nav className="zauru-related" aria-label="Próximos pasos">
      <p className="zauru-related__title">Próximos pasos</p>
      <div className="zauru-related__grid">
        {relacionados.map((href) => (
          <a key={href} href={href} className="zauru-related__card">
            <Icon name="arrow-right" />
            {labelFromHref(href)}
          </a>
        ))}
      </div>
    </nav>
  );
}

function labelFromHref(href) {
  const clean = href.replace(/\/$/, "").split("/").pop() || href;
  return clean
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}
