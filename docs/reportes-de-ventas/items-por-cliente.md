---
title: "Ítems por Cliente"
sidebar_label: "Ítems por Cliente"
sidebar_position: 31
---

Este reporte lista los ítems vendidos a un cliente específico en un rango de fechas. Permite exportar a Excel.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ítems por Cliente".
4. Seleccionar el cliente y el rango de fechas.

## API (llamadas desde sistemas externos)

### Ítems vendidos a un cliente en un rango de fechas

Se puede obtener el listado de ítems y paquetes vendidos a un cliente (`payee_id`) entre las fechas `date` y `end_date` (formato `YYYY-MM-DD` o `DD/MM/YYYY`).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/items_by_client.json?date=2026-01-01&end_date=2026-01-31&payee_id=1
```

Esto devolverá un JSON similar a este:

```json
{
  "items": {
    "1": 12,
    "2": 5
  },
  "items_data": [
    {
      "id": 1,
      "code": "PROD-001",
      "name": "Producto Ejemplo A"
    },
    {
      "id": 2,
      "code": "PROD-002",
      "name": "Producto Ejemplo B"
    }
  ],
  "bundles": {
    "3": 2
  },
  "bundles_data": [
    {
      "id": 3,
      "code": "PAQ-001",
      "name": "Paquete Ejemplo"
    }
  ]
}
```

En donde `items` y `bundles` contienen las cantidades vendidas indexadas por el ID del ítem o paquete, y `items_data` y `bundles_data` contienen la información de cada ítem y paquete.
