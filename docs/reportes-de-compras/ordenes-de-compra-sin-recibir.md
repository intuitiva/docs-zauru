---
title: "Ordenes de Compra Sin Recibir"
sidebar_label: "Ordenes de Compra Sin Recibir"
sidebar_position: 20
---

Cuando necesita ver qué órdenes siguen sin recibir —por ejemplo, para reclamar a un proveedor una entrega atrasada o para preparar la recepción de lo que está por llegar— este reporte le lista todas las órdenes autorizadas que aún no han sido recibidas. Es su herramienta para que ninguna compra autorizada se quede en el aire.

Para ingresar al reporte:

1. Ir a "Compras".
2. Seleccionar "Reportes".
3. Seleccionar "Ordenes de Compra sin Recibir".

Con este listado puede dar seguimiento a cada orden pendiente y asegurarse de que todo lo autorizado termine recibido y registrado.

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
