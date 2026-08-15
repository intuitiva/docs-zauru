---
title: "Cobrar más de lo que dice la factura (sobre-cobrar)"
sidebar_label: "Cobrar más de lo que dice la factura (sobre-cobrar)"
sidebar_position: 12
---

Este tutorial esta enfocado en cobrar mas de lo que dice la factura. Pueden haber casos en donde el cliente por error le deposite más de lo que le tenia que pagar, en el siguiente ejemplo mostraremos como registrar estos pagos mayores a la factura y como registrar la devolución del dinero extra.

Los pasos para hacer el cobro mayor al total a la factura son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Click sobre “Cobrar” (La tarjeta).

![imagen1](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-1.jpg)


Le aparecerán las opciones para crear un nuevo pago, los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se esta haciendo el cobro.

b. Coloque el punto de pago.

c. Coloque el método de pago.

d. Coloque una breve referencia sobre el pago, este campo es opcional.

e. Si usted le emitió un recibo al cliente coloque el numero de recibo.

f. Coloque la cantidad que el cliente pagó, en este ejemplo la factura esta por Q500 pero el cliente pago Q550.

Por ultimo presione crear pago.

![imagen2](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-2.jpg)



Le aparecerá un mensaje en la pantalla notificándole que el pago fue creado exitosamente.

![imagen3](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-3.jpg)



## Devolver el pago adicional

Ahora iremos a las facturas no pagadas para devolverle al cliente los Q50 adicionales que pago.

![imagen4](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-4.jpg)
![imagen5](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-5.jpg)
![imagen6](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-6.jpg)
![imagen7](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-7.jpg)
![imagen8](/img/ventas/cobrar-mas-de-lo-que-dice-la-factura-8.jpg)

## API (llamadas desde sistemas externos)

### Obtener la estructura para cobrar una factura

Devuelve el pago en borrador junto con el listado de facturas no pagadas del cliente. El parametro `client` corresponde al id del cliente.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/payments/new.json?client=1
```

Esto devolverá un JSON similar a este:
```json
{
  "payment": {
    "id": null,
    "zid": null,
    "id_number": "PAGO-000003",
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
  },
  "invoices": [
    {
      "id": 1,
      "zid": 1,
      "invoice_number": "A-001",
      "date": "2026-08-01",
      "reference": "Factura de venta",
      "due": "500.0",
      "total": "500.0",
      "paid": false,
      "voided": false,
      "payee_id": 1,
      "agency_id": 1
    }
  ]
}
```

### Crear un cobro mayor al saldo de la factura

Puede registrar un `amount` mayor al saldo de la factura (sobre-cobro). En el ejemplo la factura esta por Q500 y el cliente pago Q550.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "draft": "0",
      "payee_id": "1",
      "date": "2026-08-01",
      "agency_id": "1",
      "payment_method_id": "1",
      "reference": "El cliente pago de mas",
      "receipt": "REC-001",
      "exchange_rate": "1.0",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "amount": "550"
        }
      },
      "memo": ""
    }
  }' \
  https://app.zauru.com/sales/payments.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "PAGO-000003",
  "reference": "El cliente pago de mas",
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
  "amount": "550.0",
  "voided": false,
  "voided_at": null,
  "creator_id": 2,
  "entity_id": 1,
  "memo": "",
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "receipt": "REC-001",
  "payment_details_count": 1,
  "draft": false,
  "confirmed_at": "2026-08-01T10:00:00.000Z",
  "confirmer_id": 2,
  "pos": false,
  "draft_number": null,
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

### Listar pagos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/payments.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "id_number": "PAGO-000003",
    "reference": "El cliente pago de mas",
    "date": "2026-08-01",
    "payee_id": 1,
    "agency_id": 1,
    "payment_method_id": 1,
    "amount": "550.0",
    "voided": false,
    "voided_at": null,
    "creator_id": 2,
    "entity_id": 1,
    "memo": "",
    "created_at": "2026-08-01T10:00:00.000Z",
    "updated_at": "2026-08-01T10:00:00.000Z",
    "receipt": "REC-001",
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": "2026-08-01T10:00:00.000Z",
    "confirmer_id": 2,
    "pos": false,
    "draft_number": null,
    "voider_id": null,
    "exchange_rate": 1.0,
    "currency_id": 1,
    "external_image_url": null,
    "charger_id": 2
  },
  {
    "id": 2,
    "zid": 2,
    "id_number": "PAGO-000004",
    "reference": "Pago parcial",
    "date": "2026-08-01",
    "payee_id": 3,
    "agency_id": 1,
    "payment_method_id": 2,
    "amount": "250.0",
    "voided": false,
    "voided_at": null,
    "creator_id": 2,
    "entity_id": 1,
    "memo": "",
    "created_at": "2026-08-01T11:00:00.000Z",
    "updated_at": "2026-08-01T11:00:00.000Z",
    "receipt": null,
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": "2026-08-01T11:00:00.000Z",
    "confirmer_id": 2,
    "pos": false,
    "draft_number": null,
    "voider_id": null,
    "exchange_rate": 1.0,
    "currency_id": 1,
    "external_image_url": null,
    "charger_id": 2
  }
]
```
