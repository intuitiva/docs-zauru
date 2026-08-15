---
title: "Costo de Inventario Actual (Metodo PEPS)"
sidebar_label: "Costo de Inventario Actual (Metodo PEPS)"
sidebar_position: 3
---

Este reporte muestra el costo actual del inventario utilizando el metodo de valuacion PEPS (Primeras Entradas, Primeras Salidas) en lugar del costo promedio ponderado.

Para ingresar al reporte:

1. Ir a "Compras".
2. Seleccionar "Reportes".
3. Seleccionar "Costo de Inventario Actual (PEPS)".
4. Seleccionar la agencia a consultar.

Disponible por agencia y con exportacion SAT.

## API (llamadas desde sistemas externos)

### Consultar el costo del inventario actual con metodo PEPS
Los datos del listado se obtienen mediante el endpoint del datatable. El parametro `point_of_sale` es el ID de la agencia a consultar:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d 'draw=1&start=0&length=40&search[value]=&order[0][column]=1&order[0][dir]=asc&point_of_sale=1' \
  https://app.zauru.com/purchases/reports/datatables_inventory_fifo_cost_by_agency.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 1,
  "recordsTotal": 2,
  "recordsFiltered": 2,
  "data": [
    {
      "code": "P-001",
      "item": "Refresco Cola 355ml",
      "mu": "UND",
      "stock": 10,
      "unitcost": "4.80",
      "total": "48.00"
    },
    {
      "code": "P-002",
      "item": "Bolsa de Azucar 1kg",
      "mu": "UNIDAD",
      "stock": 25,
      "unitcost": "2.95",
      "total": "73.75"
    }
  ]
}
```
