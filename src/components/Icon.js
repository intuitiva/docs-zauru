import React from "react";
import { ICONS } from "./icons-data";

/**
 * Font Awesome 6 Solid icons, inlined as React components.
 * Path data sourced from @fortawesome/free-solid-svg-icons (CC BY 4.0)
 * and frozen into src/components/icons-data.js so no runtime dep is needed.
 */
const Icon = ({ name, className = "", title, ...rest }) => {
  const def = ICONS[name];
  if (!def) {
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={def.v}
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      fill="currentColor"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={def.p} />
    </svg>
  );
};

export default Icon;
