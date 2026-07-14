---
title: "Ventas"
sidebar_label: "Ventas"
sidebar_position: 0
---

Este módulo está diseñado para llevar el control completo de facturación y cobros (parciales, totales o consolidados). A continuación se describen las principales funcionalidades del módulo de ventas.

## Funcionalidades Principales

### Clientes
- Creación, edición y consulta de clientes.
- Gestión de categorías de clientes vinculadas a listados de precios y términos de pago.
- Administración de tarjetas de crédito tokenizadas para pagos electrónicos.

### Órdenes de Venta y Facturas
- Creación de órdenes de venta (pre-facturas) y facturas.
- Conversión de órdenes de venta en facturas (incluyendo emisión rápida).
- Edición de metadata de creación (número de orden y fecha).
- Marcar órdenes como regalo.
- Consolidación de múltiples órdenes en una sola factura.
- Emisión de facturas electrónicas (FEL) con integración a certificadores.
- Consulta de respuestas certificadas de almacenamiento externo (FEL).
- Emisión de facturas en contingencia.
- Facturas no fiscales (recibos).
- Impresión individual y masiva de facturas.
- Edición superficial (shallow edit) de facturas emitidas.
- Reenvío de facturas por correo electrónico.
- Importación masiva de facturas no pagadas.
- Exportación de órdenes y facturas a Excel.

### Precios
- Consulta de precios vigentes de ítems y paquetes (vista de solo lectura).
- Visualización rápida del precio actual, moneda y tipo de precio (fijo o flexible).
- Gestión completa de precios sugeridos: creación manual, edición y desactivación.
- Historial de cambios de precios con trazabilidad de usuario y fecha.
- Importación masiva de precios vía Excel (CSV/XLS/XLSX).
- Exportación de precios a Excel y JSON con precios por listado.
- Listados de precios por categoría de cliente y punto de venta.
- Precios flexibles (editables al momento de facturar).
- Detección automática de paquetes (bundles) con prefijo "b".

### Cobros y Pagos
- Cobro total, parcial y consolidado de facturas.
- Cobro de anticipos sobre órdenes de venta.
- Pagos provisionales (cobros sin confirmar).
- Emisión de recibos de caja y recibos provisionales.
- Sobre-cobros y devolución de pagos adicionales.

### Notas de Crédito
- Emisión de notas de crédito por anulación, descuento o devolución parcial.
- Redención de notas de crédito en facturas.
- Impresión de notas de crédito.

### Tarjetas de Regalo
- Configuración de tipos de tarjeta de regalo.
- Emisión automática de tarjetas de regalo al facturar.
- Consulta de saldo y redención.

### Pasarelas de Pago
- Configuración de gateways/pasarelas de pago.
- Tokenización de tarjetas de crédito.
- Bitácora de operaciones de gateway.

### Configuraciones
- Términos de pago con cuentas contables, categorías de clientes, descuentos asociados, anticipos y asientos extra configurables.
- Métodos de pago con cuentas contables principales y secundarias (porcentaje y monto fijo), opciones de impresión y comercio electrónico.
- Descuentos configurables por monto fijo o porcentaje, con umbrales de cantidad, forzado de asignación, y filtros por ítems, paquetes, términos de pago y categorías de clientes.
- Listados de precios por categoría de cliente y punto de venta, con opciones de exclusividad y comercio electrónico.
- Configuración de almacenamiento externo de documentos (FEL) con firma electrónica, credenciales, campos extra, y addendum personalizado.
- Configuración de envío automático de correos con plantillas personalizables para facturas, notas de crédito, anulaciones y pagos.
- Webhooks para integración con servicios externos (Zapier, etc.) para facturas y pagos.
- Variables de validación y comportamiento: límites de crédito, costos, impuestos, decimales, donaciones.
- Tipos de tarjeta de regalo con ítem de inventario asociado.
- Configuraciones de gateway/pasarela de pago con tokenización, reembolsos, cuotas, 3D Secure y pagos recurrentes.

### Reportes
Más de 50 reportes disponibles organizados en las siguientes categorías:
- Reportes de ventas por vendedor, punto de venta, ítem y cliente.
- Reportes de cierre diario, consolidado, por hora y de ítems.
- Reportes de facturación electrónica y almacenamiento fiscal.
- Reportes de cobros y pagos pendientes (aging) con buckets detallados.
- Reportes de pagos por método, cobrador y vendedor.
- Reportes de costos, márgenes y rentabilidad.
- Reportes de órdenes, envíos y entregas.
- Reportes operativos y administrativos (corrección de datos, duplicados, sincronización).
- Reportes de cheques.
- Reportes de mis clientes y mis facturas (por vendedor actual).
