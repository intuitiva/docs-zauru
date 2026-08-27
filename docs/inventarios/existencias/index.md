---
title: "Existencias"
sidebar_label: "Existencias"
sidebar_position: 0
---

La pantalla "Existencias" muestra cuánto producto hay en cada bodega: lo que está disponible, lo que está por ingresar y lo que está reservado para egresar. Tiene dos pestañas, "Existencias de ítems" y "Existencias de paquetes"; la segunda aparece solo si la entidad tiene al menos un paquete creado.

![imagen1](/img/inventarios/inventarios-existencias-1.jpg)

## Tutoriales

1. **[Existencias de ítems](/inventarios/existencias/existencias-de-items)**: vista por bodega y vista de todas las bodegas, detalle de una existencia, detalle de un ítem, acciones (importar, vaciar, exportar) y API de stocks.
2. **[Existencias de paquetes](/inventarios/existencias/existencias-de-paquetes)**: cálculo del disponible de un paquete, vista por bodega y vista de todas las bodegas, detalle de existencias de un paquete, exportación y API de bundle_stocks.

## Elementos compartidos

Ambas pestañas comparten el selector de bodega, los filtros por tipo de producto, la nube de etiquetas y la exportación a Excel.

Para cambiar de bodega, seleccionar la bodega en el campo "Bodega" y presionar "Cambiar".

Encima de la tabla hay cuatro filtros por tipo de producto:

- **Todos**: muestra todos los productos stockables.
- **Normales**: muestra los productos de tipo normal.
- **Identificables**: muestra los productos identificables, que se llevan por número de serie.
- **Perecederos**: muestra los productos perecederos, que se llevan por lote y vencimiento.

La nube de etiquetas filtra además por las etiquetas aplicadas a los ítems o paquetes.
