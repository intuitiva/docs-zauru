---
title: "Adjuntar una factura a un proyecto"
sidebar_label: "Adjuntar una factura a un proyecto"
sidebar_position: 3
---

Este tutorial esta enfocado en adjuntar una venta, o factura a un proyecto.

Los pasos para adjuntar una factura a un proyecto son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “Nueva Factura”.

![imagen1](/img/contabilizacion-de-proyectos/proyectos-adjuntar-una-factura-a-un-proyecto-1.jpg)


Le aparecerán las opciones para crear una nueva factura. Luego de llenar los campos de la factura, en la parte inferior de la página , en la información adicional, deberá colocar el proyecto que desea adjuntar, tal como se muestra en la imagen.

![imagen2](/img/contabilizacion-de-proyectos/proyectos-adjuntar-una-factura-a-un-proyecto-2.jpg)



Luego de crear la factura, le parecerá un mensaje de éxito en la pantalla y se mostraran los detalles de la factura. Podrá encontrar los proyectos asociados a la factura, esta transacción de venta se vera reflejada en el balance del proyecto.

![imagen3](/img/contabilizacion-de-proyectos/proyectos-adjuntar-una-factura-a-un-proyecto-3.jpg)

## API (llamadas desde sistemas externos)

### Crear una factura adjunta a un proyecto

El proyecto es una etiqueta (tag), por lo que se adjunta a la factura con `tag_ids`. La transaccion de venta asociada a la factura quedara reflejada en el balance del proyecto.

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
      "reference": "Factura del proyecto",
      "taxable": true,
      "seller_id": "1",
      "payee_id": "1",
      "agency_id": "1",
      "payment_term_id": "1",
      "tag_ids": ["1"],
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1.0",
          "unit_price": "1000.0"
        }
      },
      "memo": "Venta asignada al proyecto"
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
  "invoice_number": "A-1020",
  "reference": "Factura del proyecto",
  "date": "2026-08-01",
  "subtotal": "1000.0",
  "discount_id": null,
  "extra_discount": "0.0",
  "total": "1160.0",
  "due": "1160.0",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": "",
  "seller_id": 1,
  "creator_id": 1,
  "updater_id": 1,
  "taxable": true,
  "issuer_id": null,
  "issued": true,
  "issued_at": "2026-08-01 10:00:00.000000",
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": 1,
  "memo": "Venta asignada al proyecto",
  "order_image": null,
  "invoice_image": null,
  "payee_id": 1,
  "payment_expected_at": "2026-08-15",
  "agency_id": 1,
  "payment_term_id": 1,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "invoice_details_count": 1,
  "invoice_details": [
    {
      "id": 1,
      "bundle_id": null,
      "item_id": 1,
      "serial_id": null,
      "reference": null,
      "unit_price": "1000.0",
      "unit_exchange_price": null,
      "quantity": "1.0",
      "price": "1000.0",
      "invoice_id": 1,
      "created_at": "2026-08-01 10:00:00.000000",
      "updated_at": "2026-08-01 10:00:00.000000",
      "item_bundle_name": "Producto de ejemplo",
      "item_bundle_description": null,
      "lot_id": null,
      "discount_id": null,
      "extra_tax_1": null,
      "extra_tax_2": null,
      "average_cost": null,
      "tag_id": 1,
      "dynamic_bundle_id": null,
      "entity_id": 1,
      "gift_card_id": null,
      "gift_card_type_id": null
    }
  ]
}
```
