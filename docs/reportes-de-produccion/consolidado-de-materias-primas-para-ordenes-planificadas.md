---
title: "Consolidado de Materias Primas para Ordenes Planificadas"
sidebar_label: "Consolidado de Materias Primas para Ordenes Planificadas"
sidebar_position: 1
---

Este reporte muestra un consolidado de todas las materias primas requeridas por las ordenes de produccion planificadas (no iniciadas, no cerradas y no anuladas).

![imagen2](/img/produccion/reportes-de-produccion-2.png)

Para cada materia prima el reporte muestra:

- Codigo y nombre del item.
- Cantidad total requerida a lo largo del tiempo.
- Desglose por fecha de inicio planificada (columnas de fechas).
- Stock disponible actual del item.

Este reporte es util para planificar compras de materias primas y asegurar que haya suficiente inventario para las ordenes planificadas.

## API (llamadas desde sistemas externos)

### Obtener el consolidado de materias primas para ordenes planificadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/production/reports/consolidated_raw_materials_from_planned_production_orders.json
```

Esto devolverá un JSON similar a este:

```json
{
  "dates": ["2026-08-05", "2026-08-12"],
  "rows": [
    [1, "MP-001", "Harina de Trigo", ["50.0", "25.0"], "75.0"],
    [2, "MP-002", "Azucar Blanca", ["100.0", "0.0"], "100.0"]
  ],
  "stocks": {"1": 200, "2": 350},
  "items": [1, 2]
}
```

Cada elemento de `rows` contiene: id del item, codigo, nombre, cantidades requeridas por cada fecha de `dates` y el total. `stocks` indica el stock disponible actual por item.
