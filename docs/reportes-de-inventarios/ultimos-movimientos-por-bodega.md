---
title: "Ultimos Movimientos por Bodega"
sidebar_label: "Ultimos Movimientos por Bodega"
sidebar_position: 20
---

Este reporte muestra el ultimo movimiento registrado de cada producto en cada bodega. Se genera de forma asincrona y se almacena en cache para consultas posteriores.

Para generar el reporte:

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Ultimos movimientos por bodega".
3. Seleccionar la bodega y el rango de fechas.
4. Presionar "Generar reporte".

**Filtros**:

- **Bodega**: seleccione la bodega a consultar.
- **Rango de fechas**: filtre por fecha de creacion.

**Funcionamiento**:

- La primera vez que consulta este reporte, se inicia la generacion en segundo plano.
- Puede monitorear el progreso en pantalla.
- Una vez generado, el reporte queda disponible en cache.
- Puede refrescar el reporte para regenerarlo con datos actualizados.

**Exportacion**: disponible en formato XLS.
