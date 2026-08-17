---
title: "Cobrar una factura o una orden de venta"
sidebar_label: "Cobrar una factura o una orden de venta"
sidebar_position: 4
---

Un cliente que compró al crédito en su tienda le deja una factura pendiente, y este tutorial le muestra cómo cobrársela cuando regresa a pagar, ya sea en efectivo, con tarjeta o con una mezcla de ambos métodos. Lo mismo aplica cuando una orden de venta ya se convirtió en factura y es hora de registrar el pago. Los pasos para cobrar una factura son los siguientes:

1. Ir a “P.D.V”.
2. Seleccionar “Facturas” u "Ordenes".
3. Seleccionar el icono de “Cobrar”.

![imagen1](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-1.jpg)


Le aparecerán las opciones para crear un nuevo pago, junto con los detalles de la factura no pagada. Los campos que debe colocar son:

a. Coloque el método de pago en que se esta pagando la factura.

b. Coloque una breve referencia sobre el pago que esta creando. (Opcional)

c. Coloque la cantidad que se esta cobrando en el método de pago que especificó.

* Si el cliente pago en dos métodos de pago, digamos efectivo y tarjeta de crédito, presione el mas para especificar el otro método de pago y la cantidad que pago en ese método de pago.

Presione “Crear pago”.

![imagen2](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-2.jpg)

Le aparecerá un mensaje de éxito notificándole que se creo el cobro, ahora el cobro quedara en el listado de cobros sin confirmar, hasta que se confirme el pago, la factura seguirá siendo una factura no pagada.

![imagen3](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-3.jpg)

## Listado de cobros sin confirmar

Para ver todos los cobros que estan pendientes de confirmacion:

1. Ir a "P.D.V."
2. Seleccionar "Cobros".

Le aparecera un listado con todos los cobros sin confirmar (en borrador) realizados desde el punto de venta. Puede filtrar por:

a. **Vendedor**: Seleccione un vendedor especifico o vea todos los cobros.

En el listado se muestra:

a. Metodo de pago utilizado.
b. Cliente que realizo el pago.
c. Monto del pago.
d. Referencia del pago.
e. Total de cobros agrupados por metodo de pago.
f. Fecha y hora del cobro.

Desde el listado usted podra:

a. **Confirmar pago individual**: Haga click en el boton de confirmar para que el pago se registre definitivamente y la factura se marque como pagada.

b. **Confirmar todos los pagos de un metodo de pago**: En la parte superior del listado, para cada metodo de pago se muestra el total acumulado. Puede presionar el boton de confirmar para confirmar todos los cobros pendientes de ese metodo de pago simultaneamente.

c. **Ver detalle del cobro**: Haga click sobre un cobro para ver sus detalles.

d. **Imprimir comprobante de pago**: Imprima el recibo del cobro.

e. **Anular cobro**: Elimine un cobro no confirmado.

## Confirmar un pago

Para confirmar un pago individual:

1. En el listado de cobros, localice el pago que desea confirmar.
2. Presione el boton de "Confirmar".

El pago se registrara definitivamente, la factura asociada se marcara como pagada y el pago desaparecera del listado de cobros sin confirmar.

## Confirmar todos los pagos de un metodo de pago

Para confirmar todos los pagos pendientes de un metodo de pago especifico (por ejemplo, todos los pagos en efectivo):

1. En el listado de cobros, en la seccion de resumen por metodo de pago, presione el boton de "Confirmar" junto al metodo de pago deseado.
2. Todos los cobros pendientes de ese metodo de pago se confirmaran simultaneamente.

## Editar un cobro

Para modificar la referencia, fecha o memo de un cobro existente:

1. En el listado de cobros, localice el cobro a editar.
2. Seleccione el icono de "Editar".
3. Modifique los campos necesarios (referencia, fecha, memo, imagen).
4. Presione "Guardar".

## Anular un cobro

Para anular un cobro no confirmado:

1. En el listado de cobros, localice el cobro a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

El cobro sera anulado y la factura volvera a aparecer como no pagada.

Con esto ya domina el flujo de cobros del punto de venta: registrar el pago, confirmarlo para que la factura quede saldada y, si el cliente cambió de opinión o hubo un error, anularlo con confianza. Al final de su turno, el resumen por método de pago le dirá exactamente cuánto entró en efectivo y cuánto en tarjeta.

## API (llamadas desde sistemas externos)

### Registrar un pago asociado a una factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "payment_method_id": "1",
      "reference": "prueba",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "amount": "32.0"
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/pos/charges.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": null,
  "reference": "prueba",
  "date": "2026-08-06",
  "payee_id": 3,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "agency_id": 4,
  "payment_method_id": 5,
  "amount": "32.0",
  "voided": false,
  "voided_at": null,
  "creator_id": 6,
  "entity_id": 7,
  "memo": "generado desde el API",
  "created_at": "2026-08-06T04:16:57.622Z",
  "updated_at": "2026-08-06T04:16:57.622Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": true,
  "confirmed_at": null,
  "confirmer_id": null,
  "pos": true,
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
```

### Listar cobros sin confirmar (datatables)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/pos/charges/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 1,
  "recordsFiltered": 1,
  "data": [
    {
      "iz": "<a href=\"/pos/invoices/1\">1</a>",
      "i": "<a href=\"/pos/invoices/1\">SERIE A - 456</a>",
      "dn": "",
      "rec": null,
      "ref": "<a href=\"/pos/charges/15410768\">prueba</a>",
      "crea": "jueves, 06 de agosto de 2026 a las 04:16 AM",
      "pm": "Método de pago Actualizado",
      "py": "Cliente Ejemplo, S.A.",
      "amo": "Q32.00",
      "r": "<a title=\"Detalles\" href=\"/pos/charges/15410768\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/pos/charges/15410768/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Anular\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/pos/charges/15410768?destroy=true\"><i class=\"fa fa-trash-o\"></i></a><a title=\"Confirmar\" href=\"/pos/charges/15410768/confirm\"><i class=\"fa fa-thumbs-up\"></i></a><a title=\"Imprimir\" data-turbolinks=\"false\" href=\"/pos/charges/15410768/print?print_template=918\"><i class=\"fa fa-print\"></i></a>",
      "DT_RowId": "pos-charge-15410768"
    }
  ]
}
```

### Ver cobro

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
  "updated_at": "2026-08-06T04:16:43.277Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": false,
  "confirmed_at": "2026-08-06T04:16:43.268Z",
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
  "credit_card_transaction_id": null
}
```

### Nuevo cobro (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "19422",
  "zid": "3771",
  "id_number": null,
  "reference": "LICENCIA MAGA",
  "purchase_order_id": "255935",
  "consolidate_id": null,
  "issue_date": "2022-01-10",
  "expected_payment": "2022-01-10",
  "charge_term_id": "300",
  "amount": "240.97",
  "due": "240.97",
  "payee_id": "97109",
  "memo": null,
  "image": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "184",
  "creator_id": "357",
  "updater_id": "357",
  "created_at": "2022-02-01 15:28:12.241454",
  "updated_at": "2022-02-01 15:28:12.241454",
  "charge_details_count": "1",
  "tariffs_count": "0",
  "cost_amount": "240.97",
  "invoice": "16291229",
  "discharge_details_count": "0",
  "taxable": false,
  "external_image_url": null,
  "local_exchange_amount": "240.97",
  "local_exchange_cost_amount": "240.97",
  "not_included_vat": null,
  "pdf": null,
  "reception_id": null
}
```

### Editar cobro

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/1/edit.json
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
  "updated_at": "2026-08-06T04:16:43.277Z",
  "receipt": null,
  "payment_details_count": 1,
  "draft": false,
  "confirmed_at": "2026-08-06T04:16:43.268Z",
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
  "credit_card_transaction_id": null
}
```

### Actualizar cobro

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payment": {
      "reference": "prueba editada",
      "memo": "editado desde el API"
    }
  }' \
  https://app.zauru.com/pos/charges/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "19422",
  "zid": "3771",
  "id_number": null,
  "reference": "LICENCIA MAGA",
  "purchase_order_id": "255935",
  "consolidate_id": null,
  "issue_date": "2022-01-10",
  "expected_payment": "2022-01-10",
  "charge_term_id": "300",
  "amount": "240.97",
  "due": "240.97",
  "payee_id": "97109",
  "memo": null,
  "image": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "184",
  "creator_id": "357",
  "updater_id": "357",
  "created_at": "2022-02-01 15:28:12.241454",
  "updated_at": "2022-02-01 15:28:12.241454",
  "charge_details_count": "1",
  "tariffs_count": "0",
  "cost_amount": "240.97",
  "invoice": "16291229",
  "discharge_details_count": "0",
  "taxable": false,
  "external_image_url": null,
  "local_exchange_amount": "240.97",
  "local_exchange_cost_amount": "240.97",
  "not_included_vat": null,
  "pdf": null,
  "reception_id": null
}
```

### Anular cobro

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/charges/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "entries": [
    "es inválido"
  ]
}
```

### Confirmar un cobro individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/1/confirm.json
  ```

### Confirmar todos los cobros de un método de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/charges/1/confirm_payment_method.json
  ```
