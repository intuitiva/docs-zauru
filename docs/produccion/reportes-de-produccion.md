---
title: "Reportes de Produccion"
sidebar_label: "Reportes de Produccion"
sidebar_position: 10
---

El modulo de produccion incluye varios reportes para analizar el desempeno, la eficiencia y los costos de los procesos productivos. Todos los reportes pueden exportarse a Excel para analisis externo.

## Acceder a los reportes

Los pasos para acceder a los reportes de produccion son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Reportes"**.

![imagen1](/img/produccion/reportes-de-produccion-1.png)

## Reporte Consolidado de Materias Primas para Ordenes Planificadas

Este reporte muestra un consolidado de todas las materias primas requeridas por las ordenes de produccion planificadas (no iniciadas, no cerradas y no anuladas).

![imagen2](/img/produccion/reportes-de-produccion-1.png)

Para cada materia prima el reporte muestra:
- Codigo y nombre del item.
- Cantidad total requerida a lo largo del tiempo.
- Desglose por fecha de inicio planificada (columnas de fechas).
- Stock disponible actual del item.

Este reporte es util para planificar compras de materias primas y asegurar que haya suficiente inventario para las ordenes planificadas.

## Reporte de Productos Terminados por Responsable

Este reporte agrupa los productos terminados de ordenes de produccion cerradas por empleado responsable, dentro de un rango de fechas.

Para generar este reporte:

1. Ir a **"Produccion"** > **"Reportes"**.
2. Seleccionar **"Productos Terminados por Responsable"**.
3. Seleccione el rango de fechas (fecha inicial y fecha final).
4. Presione **"Generar Reporte"**.

![imagen3](/img/produccion/reportes-de-produccion-1.png)

El reporte muestra:
- Empleado responsable.
- Item producido.
- Cantidad total completada.
- Fechas de las ordenes.

Puede exportar el reporte a Excel presionando el boton **"Exportar a XLS"**.

## Reporte de Ordenes de Produccion Finalizadas por Responsable

Este reporte lista individualmente las ordenes de produccion cerradas agrupadas por responsable, dentro de un rango de fechas.

Para generar este reporte:

1. Ir a **"Produccion"** > **"Reportes"**.
2. Seleccionar **"Ordenes Finalizadas por Responsable"**.
3. Seleccione el rango de fechas (fecha inicial y fecha final).
4. Presione **"Generar Reporte"**.

![imagen4](/img/produccion/reportes-de-produccion-4.png)

Para cada orden se muestra:
- Referencia de la orden.
- Responsable.
- Item fabricado.
- Cantidad objetivo y cantidad completada.
- Fecha de cierre.
- Si esta habilitado el campo extra en las configuraciones, se mostrara el valor de dicho campo.

Puede exportar el reporte a Excel presionando el boton **"Exportar a XLS"**.

## Reporte de Eficiencia de Ordenes de Produccion

Este reporte analiza la diferencia entre el consumo de materias primas y el resultado obtenido para cada orden de produccion cerrada.

Para generar este reporte:

1. Ir a **"Produccion"** > **"Reportes"**.
2. Seleccionar **"Eficiencia de Ordenes de Produccion"**.
3. Seleccione el rango de fechas.
4. Presione **"Generar Reporte"**.

![imagen5](/img/produccion/reportes-de-produccion-4.png)

El reporte muestra:
- Orden de produccion y referencia.
- Item fabricado y cantidad completada.
- Total de materias primas consumidas (suma de cantidades entregadas vs cantidades requeridas).
- Subproductos generados (suma de cantidades).
- Campo extra (si esta habilitado).
- Comparativa entre lo planificado y lo real para evaluar la eficiencia.

Puede exportar el reporte a Excel presionando el boton **"Exportar a XLS"**.

## Reporte Consolidado de Detalles de Ordenes de Trabajo por Etiqueta

Este reporte consolida los detalles de las ordenes de trabajo cerradas agrupandolos por etiqueta (tag). Ademas de los consumos de inventario por ordenes de trabajo, el reporte incluye informacion de ordenes de compra y facturas asociadas a la misma etiqueta.

Para generar este reporte:

1. Ir a **"Produccion"** > **"Reportes"**.
2. Seleccionar **"Consolidado de Ordenes de Trabajo por Etiqueta"**.
3. Seleccione el rango de fechas.
4. Presione **"Generar Reporte"**.

![imagen6](/img/produccion/reportes-de-produccion-4.png)

El reporte muestra por cada etiqueta:
- Items o paquetes consumidos con cantidades entregadas y requeridas.
- Costos de los items consumidos.
- Ordenes de compra asociadas (con extraccion de IVA).
- Filas de facturas asociadas.
- Resultados ordenados por referencia, etiqueta de item/paquete y proveedor.

Este reporte es util para analizar la rentabilidad de proyectos, departamentos o cualquier agrupacion definida por etiquetas.

Puede exportar el reporte a Excel presionando el boton **"Exportar a XLS"**.

## API (llamadas desde sistemas externos)

### Reporte Consolidado de Materias Primas para Ordenes Planificadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/production/reports/consolidated_raw_materials_from_planned_production_orders.json?start_date=01/01/2026&end_date=31/12/2026"
```

### Reporte de Productos Terminados por Responsable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/production/reports/finished_products_by_responsible.json?start_date=01/01/2026&end_date=31/12/2026"
```

### Reporte de Eficiencia de Ordenes de Produccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/production/reports/production_orders_efficiency.json?start_date=01/01/2026&end_date=31/12/2026"
```

### Reporte Consolidado de Ordenes de Trabajo por Etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/production/reports/consolidated_work_order_details_by_tag.json?start_date=01/01/2026&end_date=31/12/2026"
```
