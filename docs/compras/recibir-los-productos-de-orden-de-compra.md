---
title: "Crear recepciones para recibir ordenes de compra"
sidebar_label: "Crear recepciones para recibir ordenes de compra"
sidebar_position: 3
---

Este tutorial esta enfocado en recibir las ordenes de compra.

Luego de crear la orden de compra y agregar todos los cargos y aranceles a la misma, el siguiente paso es recibir los productos a su bodega destino.

Los pasos para recibir una orden de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Nueva recepción” (La Caja).

![imagen1](/img/compras/recibir-los-productos-de-orden-de-compra-1.jpg)

Le aparecerán las opciones para recibir una orden de compra, los campos que debe llenar son los siguientes:

a. Coloque la bodega destino en la que ingresaran sus productos.

b. Coloque el tipo de cambio de la moneda en la que se hizo la compra.

c. Coloque la fecha en que fue entregada la mercadería.

d. Coloque la cantidad entregada de cada uno de sus productos ordenados.

e. Por ultimo presione “Crear recepción”.

![Nueva recepción](/img/compras/recibir-los-productos-de-orden-de-compra-2.png)

Le aparecerá un mensaje notificándole que se recibió la orden de compra exitosamente.

![imagen3](/img/compras/recibir-los-productos-de-orden-de-compra-3.jpg)

## API (llamadas desde sistemas externos)

### Crear Recepción de la orden de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "reception": {
      "received_at": "2024-01-19",
      "entity_id": "1",
      "memo": "prueba",
      "needs_transit": "0",
      "reception_details_attributes": {
        "0": {
          "item_id": 1,
          "quantity": 1,
          "purchase_order_detail_id": 1
        },
        "1": {
          "item_id": 2,
          "quantity": 1,
          "purchase_order_detail_id": 3
        }
      },
      "agency_id": 1,
      "purchaser_order_id": 418168,
      "invoice_number": "fafafafa"
    }
  }' \
  https://app.zauru.com/purchases/purchase_orders/1/receptions.json
```

Este endpoint devolverá el detalle de la orden de compra, mas no el detalle 
### Devolver la recepción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/receptions/1.json
```
