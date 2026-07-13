import React from "react";
import Icon from "./Icon";

/**
 * DocBadges — renders frontmatter-driven metadata pills under the H1.
 *
 * Supported frontmatter keys (all optional):
 *   rol:    "Contabilidad" | "Ventas" | "Compras" | ...  → role badge
 *   tiempo: "10 min" | "5 min" | ...                      → estimated time badge
 *
 * If neither is present, renders nothing.
 */
export default function DocBadges({frontMatter}) {
  const {rol, tiempo} = frontMatter || {};
  if (!rol && !tiempo) {
    return null;
  }
  return (
    <ul className="zauru-doc-badges" aria-label="Metadatos del documento">
      {rol ? (
        <li className="zauru-badge zauru-badge--rol">
          <Icon name="tag" />
          {rol}
        </li>
      ) : null}
      {tiempo ? (
        <li className="zauru-badge zauru-badge--tiempo">
          <Icon name="clock" />
          {tiempo}
        </li>
      ) : null}
    </ul>
  );
}
