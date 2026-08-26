---
title: "Crear una factura que no registre impuestos (recibos)"
sidebar_label: "Crear una factura que no registre impuestos (recibos)"
sidebar_position: 18
---

¿Le vende a alguien que no necesita factura fiscal, o quiere entregar un comprobante sencillo sin que se mueva el IVA? Para eso se usa el recibo: una factura que no registra impuestos. Este tutorial le muestra cómo emitirlo en menos de un minuto.

Los pasos para crear un recibo son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “Nueva Factura”.

![imagen1](/img/ventas/facturas-no-fiscales-recibos-1.jpg)


Para que esta transacción no registre impuestos remueva el cheque de “Sujeto a Impuestos”.

![imagen3](/img/ventas/facturas-no-fiscales-recibos-2.jpg)

Luego de remover el cheque de “Sujeto a impuestos” deberá llenar los siguientes campos como comúnmente lo hace:

a. Coloque la fecha en que se emite el recibo.

b. Seleccione desde que punto de venta se esta vendiendo y presione refrescar.

c. Coloque el nombre del vendedor.

d. Seleccione el cliente o agregue uno nuevo.

e. Coloque los productos o servicios que va vender, la cantidad y el precio unitario.

Para generar la factura sin impuestos o recibo seleccione “Crear factura”.

![imagen2](/img/ventas/facturas-no-fiscales-recibos-3.jpg)

El recibo quedó emitido y la venta no registró impuestos, justo lo que buscaba. Ahora puede cobrarlo como cualquier otra factura; la diferencia es que este comprobante mantiene su contabilidad limpia cuando la operación no debe generar IVA.

## API (llamadas desde sistemas externos)

### Obtener estructura para crear una factura

Devuelve la factura en borrador junto con los catalogos necesarios para crearla (productos, paquetes, terminos de pago, descuentos, vendedores y transportistas).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "invoice": {
    "id": null,
    "zid": null,
    "date": "2026-08-01",
    "taxable": true,
    "payee_id": null,
    "seller_id": null,
    "agency_id": null,
    "payment_term_id": null,
    "subtotal": "0.0",
    "total": "0.0",
    "due": "0.0",
    "issued": false,
    "paid": false,
    "voided": false,
    "entity_id": 1
  },
  "items": {},
  "bundles": {},
  "payment_terms": [],
  "invoice_discounts": [],
  "employees": [],
  "shippers": []
}
```

### Crear un recibo (factura sin impuestos)

Para que la factura no registre impuestos, envie `"taxable": false` (equivale a quitar el cheque de "Sujeto a Impuestos" en la interfaz).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "date": "2026-08-01",
      "agency_id": "1",
      "seller_id": "1",
      "payee_id": "1",
      "payment_term_id": "1",
      "taxable": false,
      "reference": "Recibo de venta",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "2",
          "unit_price": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": null,
  "invoice_number": "REC-001",
  "reference": "Recibo de venta",
  "date": "2026-08-01",
  "subtotal": "200.0",
  "discount_id": null,
  "extra_discount": null,
  "total": "200.0",
  "due": "200.0",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": "",
  "seller_id": 1,
  "creator_id": 2,
  "updater_id": 2,
  "taxable": false,
  "issuer_id": 2,
  "issued": true,
  "issued_at": "2026-08-01T10:00:00.000Z",
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": 1,
  "memo": null,
  "payee_id": 1,
  "payment_expected_at": "2026-08-01",
  "agency_id": 1,
  "payment_term_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "invoice_details_count": 1,
  "shipper_id": null,
  "pos": false,
  "contract_id": null,
  "not_included_vat": null,
  "exchange_rate": 1.0,
  "excempt": false,
  "currency_id": 1,
  "foreign": false,
  "uuid": null,
  "id_number": "REC-001",
  "contingency": 0,
  "contingency_number": null,
  "invoice_details": [
    {
      "id": 1,
      "bundle_id": null,
      "item_id": 1,
      "serial_id": null,
      "reference": "Producto 1",
      "unit_price": "100.0",
      "unit_exchange_price": null,
      "quantity": "2.0",
      "price": "200.0",
      "invoice_id": 1,
      "created_at": "2026-08-01T10:00:00.000Z",
      "updated_at": "2026-08-01T10:00:00.000Z",
      "item_bundle_name": "Producto 1",
      "item_bundle_description": null,
      "lot_id": null,
      "discount_id": null,
      "extra_tax_1": null,
      "extra_tax_2": null,
      "average_cost": null,
      "tag_id": null,
      "dynamic_bundle_id": null,
      "entity_id": 1,
      "gift_card_id": null,
      "gift_card_type_id": null
    }
  ]
}
```

### Ver el detalle de una factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "invoice_number": "REC-001",
  "reference": "Recibo de venta",
  "date": "2026-08-01",
  "subtotal": "200.0",
  "total": "200.0",
  "due": "200.0",
  "seller_id": 1,
  "creator_id": 2,
  "updater_id": 2,
  "taxable": false,
  "issued": true,
  "paid": false,
  "voided": false,
  "entity_id": 1,
  "payee_id": 1,
  "payment_expected_at": "2026-08-01",
  "agency_id": 1,
  "payment_term_id": 1,
  "contingency": 0,
  "payee": {
    "id": 1,
    "zid": 1,
    "name": "Cliente Ejemplo"
  },
  "invoice_details": [
    {
      "id": 1,
      "item_id": 1,
      "reference": "Producto 1",
      "unit_price": "100.0",
      "quantity": "2.0",
      "price": "200.0",
      "invoice_id": 1,
      "entity_id": 1
    }
  ],
  "entries": [],
  "payment_details": [],
  "submissions": []
}
```
