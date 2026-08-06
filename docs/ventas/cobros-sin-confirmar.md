---
title: "Cobros sin confirmar (pagos provisionales)"
sidebar_label: "Cobros sin confirmar (pagos provisionales)"
sidebar_position: 19
---

Este tutorial esta enfocado en la creación de pagos provisionales para dar recibos provisionales. Este caso se da únicamente con las empresas que tienen facturas cambiarias y tienen que reportar a la SAT la factura junto con su recibo de caja.

Dar un recibo provisional nos sirve cuando un cliente nos hace un pago que no podemos confirmar, un cheque por ejemplo, se ingresa el pago pendiente de confirmación y se imprime un recibo provisional para que el cliente se lo lleve. Luego, cuando el pago se confirma, se hace un recibo de caja y se adjunta a la factura para enviárselo a la SAT.

Los pasos para crear un pago provisional son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “Nueva Factura”.

![imagen1](/img/ventas/cobros-sin-confirmar-1.jpg)


Le aparecerán las opciones para crear un nuevo pago provisional, los campos que debe colocar son los siguientes:

a. Coloque la fecha en que se recibe el pago provisional.

b. Coloque el punto de venta en el que se recibe el pago.

c. Coloque el método de pago.

d. Coloque una referencia del pago provisional para que sea más fácil buscar en el listado de transacciones.

e. Si no tiene numeración automática de recibos provisionales, coloque aquí el numero de recibo.

f. Coloque la cantidad del pago.

Presione “Crear Pago”.

![imagen2](/img/ventas/cobros-sin-confirmar-2.jpg)



Le aparecerá un mensaje en la pantalla notificándole que el pago fue creado exitosamente, podrá ver los detalles del pago en la parte de abajo de la pagina.

Presione “Imprimir Recibo Provisional” para imprimir el recibo que le dará al cliente, este no es un recibo de caja. El siguiente paso es confirmar el pago y emitir el recibo de caja. Puede confirmar en esta misma pagina o puede confirmar desde “Pagos sin Confirmar” como se muestra en el siguiente ejemplo.

![imagen3](/img/ventas/cobros-sin-confirmar-3.jpg)



Luego de que se confirme que el pago que hizo el cliente se pudo cobrar deberá confirmar el pago para poder emitir el recibo de caja. Los pasos para confirmar un pago son:

1. Ir a “Ventas”.
2. Seleccionar “Pagos sin Confirmar”.
3. Click sobre “Confirmar” (Pulgar Arriba).

![imagen4](/img/ventas/cobros-sin-confirmar-4.jpg)


Le aparecerá un mensaje notificándole que se creo el pago, para imprimir el recibo de caja presione “Imprimir como Recibo”.

![imagen5](/img/ventas/cobros-sin-confirmar-5.jpg)

## API (llamadas desde sistemas externos)

### Listar cobros sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/draft_payments.json
```

Esto devolverá un JSON similar a este:
```json
[
  {}
]
```

### Ver detalle de un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/draft_payments/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": null,
  "reference": "referencia actualizada",
  "date": "2024-01-15",
  "payee_id": 1,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "agency_id": 2,
  "payment_method_id": 3,
  "amount": "250.0",
  "voided": false,
  "voided_at": null,
  "creator_id": 4,
  "entity_id": 4,
  "memo": "memo actualizado",
  "created_at": "2010-05-31T18:42:58.000Z",
  "updated_at": "2026-08-06T04:16:42.066Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": false,
  "confirmed_at": "2026-08-06T04:14:03.324Z",
  "confirmer_id": 5,
  "pos": false,
  "draft_number": null,
  "voider_id": null,
  "exchange_rate": 1.0,
  "currency_id": 3,
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
  "charger_id": 4,
  "credit_card_authorization_code": null,
  "credit_card_transaction_id": null,
  "charger": {
    "zid": 1,
    "name": "Usuario Ejemplo Uno",
    "email": "usuario@ejemplo.com"
  },
  "entries": [
    {
      "id": 6,
      "zid": 7,
      "printable": false,
      "invoice": "",
      "id_number": null,
      "reference": "",
      "date": "2010-02-08",
      "income": null,
      "memo": "create payment",
      "image": {
        "url": null,
        "standard": {
          "url": null
        }
      },
      "verified": false,
      "audited": false,
      "payee_id": 1,
      "entity_id": 4,
      "reconciliation_id": null,
      "updater_id": 4,
      "account_id": 8,
      "amount": "250.0",
      "created_at": "2010-05-31T18:42:58.000Z",
      "updated_at": "2010-12-03T18:58:00.000Z",
      "splits_count": 1,
      "invoice_date": null,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "contract_id": null,
      "verified_at": null,
      "audited_at": null,
      "conciliation_id": null,
      "split_conciliation_id": null,
      "endorsement_restriction": false,
      "exempt": false,
      "small_taxpayer": false,
      "external_image_url": null,
      "reception_id": null,
      "inventory_audit_id": null,
      "source_doc_type_id": 9,
      "monthly_entry_source_doc_type_id": null,
      "cost_center_id": null,
      "account": {
        "code": "",
        "name": "cuentas por cobrar clientes extranjeros"
      },
      "splits": [
        {
          "id": 6,
          "entry_id": 6,
          "amount": "250.0",
          "account_id": 10,
          "exchange_amount": null,
          "created_at": "2010-05-31T18:42:58.000Z",
          "updated_at": "2010-05-31T18:42:58.000Z",
          "reference": null,
          "verified": false,
          "verified_at": null,
          "audited": false,
          "audited_at": null,
          "cost_center_id": null,
          "entity_id": 4,
          "account": {
            "code": "",
            "name": "efectivo"
          }
        }
      ]
    }
  ],
  "payment_details": [
    {
      "id": 1,
      "invoice_id": 3,
      "payment_id": 3,
      "amount": "250.0",
      "created_at": "2010-05-31T18:42:58.000Z",
      "updated_at": "2010-05-31T18:42:58.000Z",
      "reference": null,
      "credit_note_id": null,
      "entity_id": 4,
      "contract_id": null,
      "contract_recurrence": 0,
      "invoice": {
        "zid": 1,
        "invoice_number": "SERIE A - 456",
        "reference": "Referencia actualizada",
        "date": "2026-08-06",
        "total": "750.0",
        "agency_id": 2
      }
    }
  ],
  "submissions": []
}
```

### Obtener plantilla para crear un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/payments/new_unconfirmed.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "PAGO-000003",
  "reference": null,
  "date": "2026-08-06",
  "payee_id": null,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "agency_id": 1,
  "payment_method_id": 2,
  "amount": "0.0",
  "voided": false,
  "voided_at": null,
  "creator_id": null,
  "entity_id": 3,
  "memo": null,
  "created_at": null,
  "updated_at": null,
  "receipt": null,
  "payment_details_count": 0,
  "draft": false,
  "confirmed_at": null,
  "confirmer_id": null,
  "pos": false,
  "draft_number": "",
  "voider_id": null,
  "exchange_rate": 1.0,
  "currency_id": 4,
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
  "charger_id": null,
  "credit_card_authorization_code": null,
  "credit_card_transaction_id": null
}
```

### Crear un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "draft": "1",
      "payee_id": "1",
      "date": "2024-01-15",
      "agency_id": "1",
      "payment_method_id": "1",
      "reference": "referencia del cobro provisional",
      "amount": "100",
      "memo": "cobro sin confirmar"
    }
  }' \
  https://app.zauru.com/sales/payments/create_unconfirmed.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15343732",
  "zid": "5",
  "id_number": null,
  "reference": null,
  "date": "2026-06-30",
  "payee_id": "2074715",
  "image": null,
  "agency_id": "8246",
  "payment_method_id": "4489",
  "amount": "10000.00",
  "voided": false,
  "voided_at": null,
  "creator_id": "1274",
  "entity_id": "1303",
  "memo": null,
  "created_at": "2026-06-30 13:10:17.586405",
  "updated_at": "2026-06-30 13:10:17.586405",
  "receipt": null,
  "payment_details_count": "1",
  "draft": false,
  "confirmed_at": "2026-06-30 13:10:17.558975",
  "confirmer_id": "1274",
  "pos": false,
  "draft_number": null,
  "voider_id": null,
  "exchange_rate": "1",
  "currency_id": "1",
  "external_image_url": null,
  "image1": null,
  "pdf": null,
  "charger_id": "30143",
  "credit_card_authorization_code": null,
  "credit_card_transaction_id": null
}
```

### Editar un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payment": {
      "reference": "referencia actualizada",
      "date": "2024-01-15",
      "memo": "memo actualizado"
    }
  }' \
  https://app.zauru.com/sales/draft_payments/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Confirmar un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/draft_payments/1/confirm.json
```

### Anular un cobro sin confirmar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/draft_payments/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "entries": [
    "es inválido"
  ]
}
```
