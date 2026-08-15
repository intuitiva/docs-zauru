---
title: "Costo de Inventario Actual por Agencia"
sidebar_label: "Costo de Inventario Actual por Agencia"
sidebar_position: 2
---

Este reporte muestra el costo actual del inventario filtrado para una agencia especifica. Muestra el costo promedio de cada producto en la bodega seleccionada.

Para ingresar al reporte:

1. Ir a "Compras".
2. Seleccionar "Reportes".
3. Seleccionar "Costo de Inventario Actual por Agencia".
4. Seleccionar la agencia a consultar.

Puede exportarse en formato CSV (compatible con SAT) o XLS.

## API (llamadas desde sistemas externos)

### Consultar el costo del inventario actual por agencia
Los datos del listado se obtienen mediante el endpoint del datatable. El parametro `point_of_sale` es el ID de la agencia a consultar:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d 'draw=1&start=0&length=40&search[value]=&order[0][column]=1&order[0][dir]=asc&point_of_sale=1' \
  https://app.zauru.com/purchases/reports/datatables_inventory_cost_by_agency.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 1,
  "recordsTotal": 2,
  "recordsFiltered": 2,
  "data": [
    {
      "id": 1,
      "code": "P-001",
      "e": "7501000000001",
      "p": "Proveedor Ejemplo A, S.A.",
      "item": "Refresco Cola 355ml",
      "mu": "UND",
      "stock": 10,
      "phystock": 12,
      "unitcost": "5.25",
      "total": "52.50"
    },
    {
      "id": 2,
      "code": "P-002",
      "e": "",
      "p": "Proveedor Ejemplo B, S.A.",
      "item": "Bolsa de Azucar 1kg",
      "mu": "UNIDAD",
      "stock": 25,
      "phystock": 25,
      "unitcost": "3.10",
      "total": "77.50"
    }
  ]
}
```
