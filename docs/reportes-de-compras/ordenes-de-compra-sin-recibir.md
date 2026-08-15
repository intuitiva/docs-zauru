---
title: "Ordenes de Compra Sin Recibir"
sidebar_label: "Ordenes de Compra Sin Recibir"
sidebar_position: 20
---

Este reporte lista todas las ordenes de compra que han sido autorizadas pero no han sido recibidas aun. Es util para dar seguimiento a compras pendientes de recepcion.

Para ingresar al reporte:

1. Ir a "Compras".
2. Seleccionar "Reportes".
3. Seleccionar "Ordenes de Compra sin Recibir".

## API (llamadas desde sistemas externos)

### Consultar las ordenes de compra sin recibir
Los datos del listado se obtienen mediante el endpoint del datatable:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d 'draw=1&start=0&length=40&search[value]=&order[0][column]=1&order[0][dir]=asc' \
  https://app.zauru.com/purchases/reports/datatables_unreceived_purchase_orders.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 1,
  "recordsTotal": 2,
  "recordsFiltered": 2,
  "data": [
    {
      "z": 1,
      "i": "1001",
      "ref": "REF-1001",
      "dte": "01/08/2026",
      "o": "Guatemala",
      "ven": "Proveedor Ejemplo A, S.A.",
      "ct": "Contado",
      "itms": 3,
      "r": ""
    },
    {
      "z": 2,
      "i": "1002",
      "ref": "REF-1002",
      "dte": "02/08/2026",
      "o": "Guatemala",
      "ven": "Proveedor Ejemplo B, S.A.",
      "ct": "Credito 30 dias",
      "itms": 1,
      "r": ""
    }
  ]
}
```
