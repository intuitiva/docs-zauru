---
title: "Produccion"
sidebar_label: "Produccion"
sidebar_position: 0
---

El modulo de produccion permite gestionar todo el ciclo de manufactura: desde la definicion de listas de materiales, creacion de ordenes de produccion, ejecucion en piso, cierre con movimientos de inventario y contabilidad, ordenes de trabajo internas y reportes de eficiencia y costos.

## Funcionalidades Principales

### Configuraciones de Produccion
- Configuracion de bodega virtual de produccion.
- Asignacion de cuentas contables para inventario de materia prima, producto terminado, destino de costos de ordenes de trabajo y desperdicio.
- Configuracion de campos extra para ordenes de produccion cerradas.
- Politica de generacion de sub-ensamblajes.
- Metrica de progreso para ordenes en ejecucion y lotes de produccion.

### Listas de Materiales (BOM)
- Creacion, edicion y eliminacion de listas de materiales.
- Definicion de materias primas con cantidades y bodegas de origen.
- Definicion de subproductos esperados con cantidades.
- Asignacion de bodega predeterminada para producto terminado.
- Agrupacion y busqueda de items manufacturables.

### Ordenes de Produccion
- Creacion de ordenes de produccion planificadas a partir de listas de materiales.
- Asignacion de responsable, fecha de inicio y cantidad objetivo.
- Movimiento de ordenes entre lotes de produccion.
- Inicio de produccion (cambio de estado de planificada a en ejecucion).
- Pausa y reanudacion de ordenes en ejecucion con registro de tiempo.
- Conteo parcial de avance durante la ejecucion.
- Cierre de ordenes con entrega de producto terminado, calculo de costos y asientos contables.
- Manejo de desperdicio de producto (cantidad completada menor a la objetivo).
- Registro de subproductos generados al cierre.
- Devolucion de ordenes cerradas a en ejecucion o a planificadas.
- Impresion y descarga de PDF de ordenes de produccion.
- Anulacion de ordenes.

### Lotes de Produccion
- Agrupacion de multiples ordenes de produccion en un lote.
- Creacion automatica de lote y ordenes hijas para sub-ensamblajes.
- Visualizacion de progreso del lote por tiempo, conteo parcial u ordenes completadas.
- Reagrupacion de ordenes entre lotes abiertos.
- Cierre automatico del lote al completar todas las ordenes.
- Anulacion de lotes.

### Ordenes de Trabajo
- Creacion de ordenes de trabajo internas para consumo de inventario.
- Soporte para items individuales y paquetes (bundles).
- Explosion de paquetes en sus componentes individuales.
- Asignacion de lotes y numeros de serie en lineas de detalle.
- Asignacion de responsable, factura relacionada, agencia de destino y centro de costos.
- Cierre con generacion de movimientos de inventario y asientos contables.
- Reapertura de ordenes de trabajo cerradas.
- Impresion y descarga de PDF.
- Etiquetado (tags) con busqueda jerarquica.
- Anulacion de ordenes.

### Reportes de Produccion
- Reporte consolidado de materias primas para ordenes planificadas.
- Reporte de productos terminados por responsable.
- Reporte de ordenes de produccion finalizadas por responsable.
- Reporte de eficiencia de ordenes de produccion (consumo vs resultado).
- Reporte consolidado de detalles de ordenes de trabajo por etiqueta.
- Exportacion a Excel de todos los reportes.
