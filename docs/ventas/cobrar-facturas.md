---
title: "Cobrar facturas (total, parcial o consolidado)"
sidebar_label: "Cobrar facturas (total, parcial o consolidado)"
sidebar_position: 9
---

Este tutorial esta enfocado en el cobro de facturas no pagadas. Existen cuatro formas de cobrar una factura:

1. Cobro Parcial
2. Cobro Total
3. Cobro Consolidado
4. Cobro sin Confirmar


Las primeras 3 formas se explicaran en este tutorial.

## Cobrar Factura Parcialmente
El cobro parcial es un cobro en donde no se paga toda la factura, solo una parte, y el cliente sigue debiendo. Los pasos para hacer un cobro parcial son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Click sobre “Cobrar” (La primer tarjeta)

![imagen1](/img/ventas/cobrar-facturas-1.jpg)

Le aparecerán las opciones para crear un nuevo pago. Los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se hizo el pago.

b. Seleccione el lugar donde pago el cliente.

c. Seleccione el método de pago.

d. Coloque una breve referencia para ubicar el pago rápidamente en el listado de transacciones.

e. Si usted le dio un recibo al cliente, coloque el numero de recibo.

f. Coloque la cantidad que el cliente pagó, en este ejemplo colocamos la mitad del total de la factura.


Presione “Crear Pago”


![imagen2](/img/ventas/cobrar-facturas-2.jpg)


Le aparecerá un mensaje de éxito en la pantalla y podrá encontrar los detales en la parte inferior de la pagina.

![imagen3](/img/ventas/cobrar-facturas-3.jpg)



En las facturas no pagadas podrá encontrar la factura, pero ahora aparecerá que solo debe la mitad.

![imagen4](/img/ventas/cobrar-facturas-4.jpg)


## Cobrar el total de la factura
Al cobrar el total de la factura la factura pasa a ser una factura pagada. Los pasos para cobrar el total de una factura son los siguientes:

![imagen5](/img/ventas/cobrar-facturas-5.jpg)
![imagen6](/img/ventas/cobrar-facturas-6.jpg)
![imagen7](/img/ventas/cobrar-facturas-7.jpg)


## Cobro Consolidado de Facturas
El cobro consolidado de facturas permite pagar dos o mas facturas del mismo cliente con un solo pago.

## Listar y Gestionar Pagos

Para consultar la lista de pagos realizados:

1. Ir a **"Ventas"**.
2. Seleccionar **"Pagos"**.

En el listado podrá ver todos los pagos no anulados y no provisionales. Los pagos pueden filtrarse por **etiquetas (tags)**. Para cada pago se muestra el cliente, monto, fecha, método de pago, punto de venta y referencia.

### Editar un Pago (Edición Superficial)

Zauru permite editar ciertos campos de un pago existente sin afectar las transacciones contables:

1. Ir a **"Ventas"** > **"Pagos"**.
2. Hacer click sobre **"Editar"** (El lápiz) en el pago.
3. Modificar los campos permitidos: número de recibo, referencia, fecha, memo, cobrador y etiquetas.
4. Presionar **"Actualizar Pago"**.

También puede adjuntar imágenes al pago (ej. comprobante de transferencia) las cuales se almacenan en Cloudinary.

### Imprimir un Recibo de Pago

Para imprimir un recibo de pago:

1. En la página de detalles del pago, seleccione la plantilla de impresión.
2. Haga click sobre **"Imprimir"** para ver la vista previa.
3. Presione **CTRL + P** para enviar a la impresora.

También puede **descargar como PDF** desde la opción disponible.

### Anular un Pago

Para anular un pago:

1. Ir a **"Ventas"** > **"Pagos"** (o desde los detalles de la factura).
2. Hacer click sobre **"Destruirlo"** en el pago que desea anular.

Al anular un pago, la factura asociada volverá a aparecer como no pagada.

### Consultar Pagos Anulados

Para consultar el historial de pagos anulados:

1. Ir a **"Ventas"**.
2. Seleccionar **"Pagos"**.
3. Seleccionar **"Pagos Anulados"**.

## API (llamadas desde sistemas externos)

### Obtener el listado de facturas que no se han pagado de un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
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
  },
  "invoices": []
}
```

### Pagar parcialmente o totalmente una o varias facturas
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
      "date": "2019-01-15",
      "agency_id": "1",
      "payment_method_id": "1",
      "reference": "referencia del pago",
      "receipt": "recibo",
      "exchange_rate": "1.0",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "reference": "referencia de la factura 1 en el pago",
          "amount": "100"
        },
        "1": {
          "invoice_id": "2",
          "reference": "referencia de la factura 2 el pago",
          "amount": "100"
        }
      },
      "memo": ""
    }
  }' \
  -X POST \
  https://app.zauru.com/sales/payments.json
```

Esto devolverá un JSON similar a este:
```json
{
  "date": [
    "Fecha mínima 2020-12-31"
  ]
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
    "id": 2,
    "zid": 2,
    "id_number": null,
    "reference": "",
    "date": "2010-03-23",
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
    "memo": "",
    "created_at": "2010-05-31T18:44:34.000Z",
    "updated_at": "2010-05-31T18:44:34.000Z",
    "receipt": null,
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": null,
    "confirmer_id": null,
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
    "charger_id": null,
    "credit_card_authorization_code": null,
    "credit_card_transaction_id": null
  },
  {
    "id": 3,
    "zid": 3,
    "id_number": null,
    "reference": "3690721",
    "date": "2010-05-10",
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
    "memo": "3/3 pagos",
    "created_at": "2010-05-31T18:45:33.000Z",
    "updated_at": "2010-05-31T18:45:33.000Z",
    "receipt": null,
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": null,
    "confirmer_id": null,
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
    "charger_id": null,
    "credit_card_authorization_code": null,
    "credit_card_transaction_id": null
  }
]
```

### Ver detalle de un pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/payments/1.json
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
  "updated_at": "2026-08-06T04:14:03.335Z",
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

### Editar un pago (edición superficial)
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
      "memo": "memo actualizado",
      "charger_id": "2"
    }
  }' \
  https://app.zauru.com/sales/payments/1.json
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

### Listar pagos anulados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/payments/voided.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "reference": "117662",
    "date": "2012-04-02",
    "payee_id": 3,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "agency_id": 4,
    "payment_method_id": 5,
    "amount": "1430.0",
    "voided": true,
    "voided_at": "2012-11-01T17:56:40.000Z",
    "creator_id": 6,
    "entity_id": 6,
    "memo": "",
    "created_at": "2012-04-02T20:53:18.000Z",
    "updated_at": "2012-11-01T17:56:40.000Z",
    "receipt": null,
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": null,
    "confirmer_id": null,
    "pos": false,
    "draft_number": null,
    "voider_id": null,
    "exchange_rate": 1.0,
    "currency_id": 5,
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
  },
  {
    "id": 7,
    "zid": 8,
    "id_number": null,
    "reference": "",
    "date": "2011-06-28",
    "payee_id": 9,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "agency_id": 4,
    "payment_method_id": 5,
    "amount": "190.0",
    "voided": true,
    "voided_at": "2011-07-05T21:21:19.000Z",
    "creator_id": 6,
    "entity_id": 6,
    "memo": "",
    "created_at": "2011-06-28T22:41:33.000Z",
    "updated_at": "2011-07-05T21:21:19.000Z",
    "receipt": null,
    "payment_details_count": 1,
    "draft": false,
    "confirmed_at": null,
    "confirmer_id": null,
    "pos": false,
    "draft_number": null,
    "voider_id": null,
    "exchange_rate": 1.0,
    "currency_id": 5,
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
]
```

### Anular un pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/payments/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "entries": [
    "es inválido"
  ]
}
```
