---
title: "Cobrar caso"
sidebar_label: "Cobrar caso"
sidebar_position: 6
---

Este tutorial esta enfocado en cobrar un caso creado desde el punto de venta. Los pasos para cobrar un caso son los siguientes:

1. Ir a “P.D.V.”
2. Seleccionar “Casos”.
3. Seleccionar el icono de “Cobrar”.

![imagen1](/img/punto-de-venta/cobrar-caso-1.jpg)


Le aparecerán los detalles de la factura no pagada y abajo las opciones para crear el nuevo cobro. Los campos que debe colocar son:

a. Seleccione el método de pago en el que se le cobro al cliente.

b. Coloque una breve referencia sobre el cobro que esta realizando. (opcional)

c. Coloque la cantidad que se esta cobrando en el método de pago especificado.

* Si el cliente pago en dos métodos de pago, digamos efectivo y tarjeta de crédito, presione el mas para especificar el otro método de pago y la cantidad que pago en ese método de pago.

Presione “Crear pago”.

![imagen2](/img/punto-de-venta/cobrar-caso-2.jpg)

Le aparecerá un mensaje notificando que el cobro fue creado exitosamente. Este cobro pasara a un listado de cobros sin confirmar, la factura seguirá siendo una factura no pagada hasta que usted confirme el pago.

![imagen3](/img/punto-de-venta/cobrar-caso-3.jpg)

## Confirmar el pago de un caso

Para que el pago se registre definitivamente y la factura del caso se marque como pagada:

1. Ir a "P.D.V."
2. Seleccionar "Cobros".
3. Localizar el cobro del caso en el listado de cobros sin confirmar.
4. Presionar el boton de "Confirmar".

El pago se confirmara y la factura asociada al caso se marcara como pagada.

## Anular un cobro de caso

Si necesita anular un cobro de caso no confirmado:

1. En el listado de cobros, localice el cobro del caso.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

El cobro sera anulado y la factura del caso volvera a aparecer como no pagada.

## API (llamadas desde sistemas externos)

### Obtener la estructura para cobrar un caso

Devuelve el cobro en borrador con el detalle de la factura no pagada del caso. El parametro `invoice` corresponde al id de la factura no pagada del caso.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/new.json?invoice=1
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "PAGO-000001",
  "reference": null,
  "date": "2026-08-01",
  "payee_id": 1,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "agency_id": 1,
  "payment_method_id": 1,
  "amount": "500.0",
  "voided": false,
  "voided_at": null,
  "creator_id": null,
  "entity_id": 1,
  "memo": null,
  "created_at": null,
  "updated_at": null,
  "receipt": null,
  "payment_details_count": 1,
  "draft": false,
  "confirmed_at": null,
  "confirmer_id": null,
  "pos": false,
  "draft_number": "",
  "voider_id": null,
  "exchange_rate": 1.0,
  "currency_id": 1,
  "external_image_url": null,
  "image1": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "charger_id": 2
}
```

### Crear el cobro de un caso

El cobro queda en estado de borrador (`draft`) y pasa al listado de cobros sin confirmar hasta que se confirme. Si el cliente paga con varios metodos de pago, agregue las llaves `payment_method_id_1`, `reference_1` y `amount_1` al nivel raiz (sin anidar dentro de `payment`).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "date": "2026-08-01",
      "payee_id": "1",
      "payment_method_id": "1",
      "reference": "Cobro del caso 1",
      "amount": "500",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "amount": "500"
        }
      }
    },
    "payment_method_id_1": "2",
    "reference_1": "Tarjeta de credito",
    "amount_1": "100"
  }' \
  https://app.zauru.com/pos/charges.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "PAGO-000001",
  "reference": "Cobro del caso 1",
  "date": "2026-08-01",
  "payee_id": 1,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "agency_id": 1,
  "payment_method_id": 1,
  "amount": "600.0",
  "voided": false,
  "voided_at": null,
  "creator_id": 2,
  "entity_id": 1,
  "memo": null,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": true,
  "confirmed_at": null,
  "confirmer_id": null,
  "pos": true,
  "draft_number": "BOR-000001",
  "voider_id": null,
  "exchange_rate": 1.0,
  "currency_id": 1,
  "external_image_url": null,
  "image1": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "charger_id": 2
}
```

### Ver un cobro de caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "PAGO-000001",
  "reference": "Cobro del caso 1",
  "date": "2026-08-01",
  "payee_id": 1,
  "agency_id": 1,
  "payment_method_id": 1,
  "amount": "600.0",
  "voided": false,
  "voided_at": null,
  "creator_id": 2,
  "entity_id": 1,
  "memo": null,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": true,
  "confirmed_at": null,
  "confirmer_id": null,
  "pos": true,
  "draft_number": "BOR-000001",
  "voider_id": null,
  "exchange_rate": 1.0,
  "currency_id": 1,
  "external_image_url": null,
  "charger_id": 2
}
```

### Confirmar el cobro de un caso

Al confirmar, la factura asociada al caso se marca como pagada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/1/confirm.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Anular un cobro de caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/charges/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
