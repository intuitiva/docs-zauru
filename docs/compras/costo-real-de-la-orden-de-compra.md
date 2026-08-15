---
title: "Costo real de la orden de compra"
sidebar_label: "Costo real de la orden de compra"
sidebar_position: 14
---

Este tutorial esta enfocado en la verificación del costo real de sus productos en una orden de compra, ya con todos los cargos incluidos y promediados ponderadamente.
Los pasos para ver el costo real de sus productos en una orden de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Verificar” (El Ojo).

![imagen1](/img/compras/costo-real-de-la-orden-de-compra-1.jpg)

Le aparecerán los detalles de la orden de compra, en la parte inferior de la página podrá encontrar los costos unitarios preliminares, como se muestra en la imagen, en donde podrá ver como aumenta el costo de sus productos con cada cargo o arancel agregado a la orden de compra.

![imagen2](/img/compras/costo-real-de-la-orden-de-compra-2.png)

## API (llamadas desde sistemas externos)

### Ver el costo real de una orden de compra
El 1 al final de la URL es el ID de la orden de compra. Incluye los detalles de items con su costo unitario y las recepciones asociadas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/purchase_orders/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "OC-0001",
  "reference": "Orden de compra de prueba",
  "authorized": true,
  "issue_date": "2026-08-01",
  "shipping_date": "2026-08-01",
  "subtotal": "1250.00",
  "total": "1250.00",
  "due": "1250.00",
  "payee_id": 1,
  "agency_id": 1,
  "entity_id": 1,
  "purchase_order_details": [
    {
      "id": 1,
      "purchase_order_id": 1,
      "item_id": 1,
      "quantity": "10.0",
      "unit_cost": "100.00000",
      "cost": "1000.00",
      "item": {
        "id": 1,
        "zid": 1,
        "code": "PROD-001",
        "name": "Producto Ejemplo A",
        "average_cost": "98.00000"
      }
    },
    {
      "id": 2,
      "purchase_order_id": 1,
      "item_id": 2,
      "quantity": "5.0",
      "unit_cost": "50.00000",
      "cost": "250.00",
      "item": {
        "id": 2,
        "zid": 2,
        "code": "PROD-002",
        "name": "Producto Ejemplo B",
        "average_cost": "48.50000"
      }
    }
  ],
  "receptions": []
}
```

### Ver el detalle de un cargo de una orden de compra
El 1 al final de la URL es el ID del cargo. Incluye los detalles del cargo y el tipo de cargo (arancel, flete, etc.) prorrateado al costo.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/charges/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "CAR-0001",
  "reference": "Cargo de importacion",
  "issue_date": "2026-08-01",
  "amount": "150.00",
  "invoice": "FAC-100",
  "payee_id": 1,
  "purchase_order_id": 1,
  "charge_details": [
    {
      "id": 1,
      "charge_id": 1,
      "charge_type_id": 1,
      "charge_type": {
        "zid": 1,
        "name": "Arancel"
      }
    }
  ],
  "discharges": []
}
```

### Obtener datos para una nueva orden de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/purchase_orders/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id": null,
    "id_number": "OC-0002",
    "issue_date": "2026-08-01",
    "agency_id": 1,
    "payee_id": null,
    "charge_term_id": 1,
    "currency_id": 1,
    "purchase_order_details": [],
    "purchase_order_account_details": []
  },
  "items_grouped": {},
  "accounts_grouped": {},
  "purchasers": [],
  "agencies": [],
  "charge_terms": []
}
```
