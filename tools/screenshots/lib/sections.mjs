/**
 * sections.mjs — Mapa entre las secciones de docs/ (español) y los prefijos
 * de rutas reales de Zauru (inglés, de routes.json).
 *
 * El LLM recibe SOLO las rutas de estos prefijos como candidatos, de modo
 * que no pueda inventar paths de otro módulo.
 *
 * null = sin filtro (usar solo nav.json como candidatos). Añade entradas
 * nuevas aquí cuando aparezca una sección sin cobertura.
 */
export const SECTION_ROUTES = {
  'casos-de-soporte': ['support'],
  'reportes-de-casos-de-soporte': ['support'],
  'compras': ['purchases'],
  'reportes-de-compras': ['purchases'],
  'configuraciones-de-mi-usuario': ['profile', 'company'],
  'contabilidad': ['accounting'],
  'reportes-de-contabilidad': ['accounting'],
  'contabilizacion-de-proyectos': ['settings', 'accounting'],
  'contratos': ['contracts'],
  'reportes-de-contratos': ['contracts'],
  'crm': ['crm'],
  'e-commerce': ['ecommerce'],
  'inventarios': ['inventories'],
  'reportes-de-inventarios': ['inventories'],
  'nominas': ['payroll'],
  'reportes-de-nominas': ['payroll'],
  'permisos-de-acceso': ['access_control'],
  'primeros-pasos': ['company', 'settings', 'profile'],
  'produccion': ['production'],
  'reportes-de-produccion': ['production'],
  'punto-de-venta': ['pos'],
  'reportes-de-puntos-de-venta': ['pos'],
  'reportes-de-ventas': ['sales'],
  'ventas': ['sales'],
  'webapps': ['apps'],
};

/** Prefijos para una sección; [] si no hay mapping (sin candidatos de routes.json). */
export function prefixesForSection(section) {
  if (!(section in SECTION_ROUTES)) return [];
  return SECTION_ROUTES[section] || [];
}
