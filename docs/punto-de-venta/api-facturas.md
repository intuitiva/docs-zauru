---
title: "API de facturas del punto de venta"
sidebar_label: "API de facturas"
sidebar_position: 4
---

Esta referencia describe las llamadas disponibles para crear, consultar, emitir, actualizar y anular facturas desde sistemas externos.

## Autenticación

Todas las llamadas requieren estos encabezados:

```bash
-H "Accept: application/json" \
-H "Content-type: application/json" \
-H "X-User-Email: usuario@zauru.com" \
-H "X-User-Token: TOKEN_DEL_USUARIO"
```

Reemplazar el correo y el token por las credenciales del usuario de Zauru. En los ejemplos, `1` representa el identificador de una factura.

## Crear una factura

`POST /pos/invoices.json`

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Venta mostrador",
      "taxable": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1",
          "unit_price": "650"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/invoices.json
```

La respuesta incluye la factura creada y sus detalles. Los campos principales son `id`, `order_number`, `invoice_number`, `total`, `issued`, `paid` e `invoice_details`.

## Listar facturas

`POST /pos/invoices/datatables.json`

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "start": "0",
    "length": "40",
    "search": {"value": "", "regex": "false"}
  }' \
  https://app.zauru.com/pos/invoices/datatables.json
```

La respuesta tiene el formato de DataTables: `draw`, `recordsTotal`, `recordsFiltered` y `data`.

## Consultar una factura

`GET /pos/invoices/:id.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1.json
```

La respuesta incluye los datos de la factura, el cliente (`payee`), los detalles (`invoice_details`), los asientos contables (`entries`) y los pagos (`payment_details`).

## Obtener datos para una factura nueva

`GET /pos/invoices/new.json`

Devuelve los valores iniciales de una factura y los identificadores disponibles para productos, paquetes, categorías, precios y existencias.

## Actualizar una factura no emitida

`PUT /pos/invoices/:id.json`

```bash
curl -X PUT \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Venta corregida",
      "invoice_details_attributes": {
        "0": {"id": "1", "quantity": "2"}
      }
    }
  }' \
  https://app.zauru.com/pos/invoices/1.json
```

Solo se pueden actualizar facturas en estado de orden. Si la factura ya fue emitida, la respuesta indica `No Editable`.

## Emitir una orden rápidamente

`GET /pos/invoices/:id/issue_fast.json`

Convierte una orden de venta en factura y conserva sus productos, cantidades y precios. La respuesta incluye la factura emitida.

## Consultar datos superficiales

`GET /pos/invoices/:id/shallow_edit.json`

Devuelve los datos que se pueden modificar sin cambiar productos ni montos: número, referencia, fecha, vendedor, memo, etiquetas e imagen.

## Actualizar datos superficiales

`PATCH /pos/invoices/:id/shallow_update.json`

```bash
curl -X PATCH \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Referencia actualizada",
      "memo": "Nota actualizada",
      "created_at": "2026-05-25"
    }
  }' \
  https://app.zauru.com/pos/invoices/1/shallow_update.json
```

Esta llamada actualiza los campos superficiales sin ejecutar los callbacks normales de la factura. También acepta `invoice_number`, `date`, `seller_id`, `tag_ids`, `invoice_image` y `created_at`.

## Anular una factura

`DELETE /pos/invoices/:id.json`

Anula la factura y devuelve una respuesta vacía cuando la operación es correcta.

## Anular una factura sin pagos

`DELETE /pos/invoices/:id/no_payments_void.json`

Usar esta llamada cuando la factura no tiene pagos asociados y el saldo pendiente es cero. Si no cumple ambas condiciones, la API devuelve un error de validación.

## Obtener productos y existencias

`GET /pos/invoices/get_categories_items_bundles_prices_stocks_images.json`

Devuelve los datos necesarios para construir la pantalla de factura: productos, paquetes, categorías, precios, existencias, tarjetas de regalo, marcas y las opciones visuales configuradas para el punto de venta.

Para consultar el precio y la existencia de un producto o paquete específico, usar:

`GET /pos/invoices/item_bundle_info?item_id=1&bundle_id=2&agency_id=3&payee_id=4`

Los parámetros `item_id` y `bundle_id` son alternativos. `agency_id` determina la existencia y `payee_id` permite aplicar la lista de precios del cliente.
