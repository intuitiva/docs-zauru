---
title: "Costos de Envios por Bodega y Fecha"
sidebar_label: "Costos de Envios por Bodega y Fecha"
sidebar_position: 21
---

Este reporte calcula el costo de los envios realizados, mostrando el costo promedio, costo total y precio de venta sugerido.

Para generar el reporte:

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Costos de envios por bodega y fecha".
3. Seleccionar las bodegas, el rango de fechas y los proveedores.
4. Presionar "Generar reporte".

**Filtros**:

- **Bodega origen**: bodega desde donde salieron los productos.
- **Cliente (bodega destino)**: bodega de destino (tipicamente una bodega de cliente). Se muestran las bodegas no virtuales que no son almacen.
- **Rango de fechas**: periodo de fechas de entrega.
- **Proveedores**: filtrar por uno o mas proveedores.

**Columnas**: referencia del envio, fecha de entrega, descripcion, cantidad, costo unitario, costo total, precio unitario, precio total.

**Calculo de costos**:

- Utiliza el costo promedio computado del producto a la fecha del envio.
- Si no hay costo computado, utiliza el costo promedio del item.
- El precio de venta se obtiene del precio sugerido del item para la bodega destino.

**Exportacion**: disponible en formato XLS.
