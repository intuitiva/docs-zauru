---
title: "Registrar Notas de Crédito Compras"
sidebar_label: "Registrar Notas de Crédito Compras"
sidebar_position: 16
---

¿Su proveedor le devolvió dinero porque le entregó mercadería de menos, le hizo un descuento o usted le regresó producto? Esa devolución llega en forma de nota de crédito de compras: el documento comercial con el que el proveedor le notifica la devolución parcial, la devolución total o el descuento sobre la factura que él mismo le emitió en la orden de compra registrada en Zauru. En este tutorial aprenderá a registrar la nota de crédito y a redimirla, para que la cuenta con el proveedor quede saldada y la orden de compra se cierre sin dejar ningún cabo abierto.

El proceso de registro de notas de crédito consiste en 2 grandes pasos.
El primer paso es el de __registrar la nota de crédito__, que a su vez consiste en 1 o 2 pasos:
  1. Generar la partida contable para la nota de crédito
  2. Generar el envío de la devolución de los productos en la nota de crédito.

El segundo paso es el de __redimir la nota de crédito__, para que la Orden de Compra se cierre y no dejar ningún cabo abierto

## Registrar la Nota de Crédito

### Generar partida contable (Para OC de Gastos)
Lo primero que hay que revisar es la partida existente, porque nos tenemos que basar en eso para generar la partida de la Nota de Crédito.
Este es el ejemplo que vamos a utilizar como partida contable:
![transaccion existente en OC](/img/compras/registrar-notas-de-credito-en-compras-1.png)

Ahora vamos a crear una nueva partida de la Nota de crédito asociada a la Orden de Compra (Para este caso debe de existir una cuenta de Activo Ej: Nota de crédito recibida):
![boton asociar transaccion a la OC](/img/compras/registrar-notas-de-credito-en-compras-2.png)

Para Nota de Crédito por anulación completa, la transacción debería de ser:
Gasto X Q312.50 => Nota de crédito recibida Q350
                   IVA Crédito -Q37.50

Para Nota de Crédito por descuento o por anulación parcial, la transacción debería de crearse algo similar a:
Gasto X Q156.25 => Nota de crédito recibida Q175
                   IVA Crédito -Q18.75

Para que esta nota de crédito aparezca en el libro de compras, la transaccion debe tener en el campo "Factura" el numero de la nota de crédito.

### Generar partida contable (Para OC de Mercadería)
Lo primero que hay que revisar es la partida existente, porque nos tenemos que basar en eso para generar la partida de la Nota de Crédito, __OJO:__ para este caso en lugar de la cuenta: __Gasto X__, la transacción iría a la cuenta de __Activo de Inventario (Mercadería por ejemplo)__.
![transaccion existente en OC](/img/compras/registrar-notas-de-credito-en-compras-3.png)

Ahora vamos a crear una nueva partida de la Nota de crédito asociada a la Orden de Compra (Para este caso debe de existir una cuenta de Activo Ej: Nota de crédito recibida).
![boton asociar transaccion a la OC](/img/compras/registrar-notas-de-credito-en-compras-4.png)

Para Nota de Crédito por anulación completa, la transacción debería de ser:
Mercaderia Q312.50 => Nota de crédito recibida Q350
                   IVA Crédito -Q37.50

Para Nota de Crédito por descuento o por anulación parcial, la transacción debería de crearse algo similar a:
Mercaderia Q156.25 => Nota de crédito recibida Q175
                   IVA Crédito -Q18.75

Para que esta nota de crédito aparezca en el libro de compras, la transaccion debe tener en el campo "Factura" el numero de la nota de crédito.

### Generar envío de la devolución de los productos

Si la nota de Crédito implica una devolución de mercadería, tendremos que crear un envío asociado a la orden de compra por medio del siguiente botón.
![boton asociar nuevo envio a OC](/img/compras/registrar-notas-de-credito-en-compras-5.png)

Recordar que en este envío nuevo; el origen y el destino debería de estar al revés de lo que está el envío creado automáticamente en la orden de compras

## Redimir la nota de crédito de compras
para poder redimir la nota de crédito primero necesitamos crear un método de pago en compras (Ej. Notas de crédito) con la configuración necesaria para que la cuenta de notas de crédito recibidas se salde (Ver manual de Métodos de pagos https://docs.zauru.com/compras/metodos-de-pago, la cuenta a seleccionar en el paso 2 del manual debe ser la cuenta de Activo de las Notas de crédito recibidas).

Para concluir el proceso de redimir la nota de crédito es pagar la orden de compra, se debe realizar un pago (o varios si fuera el caso) utilizando la forma de pago con la que se realizo el o los pagos de la orden de compra y un último pago utilizando el método de pago creado anteriormente (Ej. Notas de crédito).

Al terminar, la orden de compra queda cerrada y la cuenta con el proveedor saldada, sin cabos sueltos en su contabilidad. Si el proveedor le entrega otra nota de crédito por una compra distinta, repita el mismo proceso para esa orden.

## API (llamadas desde sistemas externos)

### Crear un metodo de pago de notas de credito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge_method": {
      "name": "Notas de credito",
      "account_id": "1",
      "active": "1",
      "printable_entry": "0",
      "endorsement_restriction": "0"
    }
  }' \
  https://app.zauru.com/purchases/settings/discharge_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Notas de credito",
  "account_id": 1,
  "entity_id": 1,
  "updater_id": 1,
  "created_at": "2026-08-01T10:00:00Z",
  "updated_at": "2026-08-01T10:00:00Z",
  "printable_entry": false,
  "endorsement_restriction": false,
  "active": true
}
```

### Obtener datos para un nuevo pago
Devuelve la plantilla de un pago con los detalles precargados de todas las ordenes de compra y cargos pendientes del proveedor. Puede preseleccionar el proveedor con el parametro `v`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/purchases/discharges/new.json?v=1"
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "PAGO-0001",
  "date": "2026-08-01",
  "reference": null,
  "receipt": null,
  "amount": "350.00",
  "voided": false,
  "payee_id": 1,
  "discharge_method_id": 1,
  "draft": false,
  "discharge_details": [
    {
      "id": null,
      "charge_id": null,
      "purchase_order_id": 1,
      "discharge_id": null,
      "amount": "350.00",
      "exchange_amount": null,
      "entity_id": 1
    }
  ]
}
```

### Pagar la orden de compra con la nota de credito
Crea el pago que salda la orden de compra. El `discharge_method_id` es el metodo de pago creado para notas de credito.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge": {
      "payee_id": "1",
      "date": "2026-08-01",
      "discharge_method_id": "1",
      "reference": "Redimir nota de credito",
      "receipt": "NC-0001",
      "discharge_details_attributes": {
        "0": {
          "purchase_order_id": "1",
          "amount": "350.00"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/discharges.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "PAGO-0001",
  "date": "2026-08-01",
  "reference": "Redimir nota de credito",
  "receipt": "NC-0001",
  "amount": "350.00",
  "voided": false,
  "payee_id": 1,
  "discharge_method_id": 1,
  "entity_id": 1,
  "creator_id": 1,
  "discharge_details_count": 1,
  "draft": false,
  "created_at": "2026-08-01T10:00:00Z",
  "updated_at": "2026-08-01T10:00:00Z"
}
```

### Ver un pago registrado
El 1 al final de la URL es el ID del pago.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/discharges/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "PAGO-0001",
  "date": "2026-08-01",
  "reference": "Redimir nota de credito",
  "receipt": "NC-0001",
  "amount": "350.00",
  "payee_id": 1,
  "discharge_method_id": 1,
  "discharge_details": [
    {
      "id": 1,
      "charge_id": null,
      "purchase_order_id": 1,
      "discharge_id": 1,
      "amount": "350.00",
      "purchase_order": {
        "issue_date": "2026-08-01",
        "reference": "Orden de compra de prueba",
        "id_number": "OC-0001",
        "zid": 2,
        "total": "350.00",
        "invoice": "FAC-100"
      }
    }
  ]
}
```

### Autorizar un pago
Util cuando la variable `authorize_discharge` esta activada y los pagos requieren autorizacion.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/discharges/1/authorize.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Anular un pago
El 1 al final de la URL es el ID del pago.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/discharges/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
