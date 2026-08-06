---
title: "Ordenes de Compra Cerradas"
sidebar_label: "Ordenes de Compra Cerradas"
sidebar_position: 18
---

Este tutorial esta enfocado en la visualizacion y gestion de las ordenes de compra que ya han sido completamente recibidas y pagadas.

Cuando una orden de compra ha sido recibida en su totalidad y ademas ha sido pagada por completo, automaticamente se traslada a la seccion de "Ordenes de Compra Cerradas". En esta seccion puede consultar el historial de compras completadas y realizar ediciones limitadas a la informacion de las mismas.

## Listar ordenes de compra cerradas

Los pasos para ver las ordenes de compra cerradas son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".

![imagen1](/img/compras/ordenes-de-compra-cerradas-1.png)

Le aparecera un listado con todas las ordenes de compra que han sido recibidas y pagadas. En este listado puede:

- Filtrar por fecha, proveedor, agencia, comprador y otros criterios.
- Buscar por numero de orden, referencia o factura.
- Ordenar por cualquiera de las columnas mostradas.

## Ver detalles de una orden de compra cerrada

Los pasos para ver los detalles de una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" (El Ojo) en la orden que desea consultar.

![imagen2](/img/compras/ordenes-de-compra-cerradas-2.png)

En la vista de detalles de una orden de compra cerrada podra encontrar:

a. Informacion general de la orden de compra (numero, referencia, factura, fechas, moneda, tipo de cambio).

b. Datos del proveedor y del comprador.

c. Detalle de los productos ordenados, cantidades recibidas y costos.

d. Detalle de cuentas (si la orden incluye servicios o gastos).

e. Recepciones asociadas a la orden de compra.

f. Cargos adicionales y cargos de aranceles asociados.

g. Pagos realizados a la orden de compra.

h. Impresion de la orden de compra utilizando las plantillas disponibles.

i. Documentos electronicos asociados (facturas electronicas FEL, DTE, etc.).

![imagen3](/img/compras/ordenes-de-compra-cerradas-3.png)

## Editar informacion de una orden de compra cerrada

Las ordenes de compra cerradas permiten ediciones limitadas a ciertos campos informativos. No se pueden modificar los productos, cantidades, costos, recepciones ni pagos.

Los pasos para editar una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" en la orden que desea editar.
4. Seleccionar "Editar".

![imagen4](/img/compras/ordenes-de-compra-cerradas-4.png)

Los campos que puede editar en una orden de compra cerrada son:

a. Numero de orden (id_number).

b. Numero de factura (invoice).

c. Referencia.

d. Fecha de emision (issue_date).

e. Fecha de envio (shipping_date).

f. Fecha de entrega (delivery_date).

g. Comprador (purchaser_id).

h. Memo o notas.

i. Imagen asociada a la orden.

j. Archivo PDF asociado a la orden.

k. Etiquetas (tags).

![imagen5](/img/compras/ordenes-de-compra-cerradas-5.png)

Al terminar de editar, presione "Actualizar" para guardar los cambios.

## Reabrir una orden de compra cerrada

Si necesita modificar una orden de compra cerrada mas alla de lo que permite la edicion limitada, puede reabrirla. Esto devolvera la orden de compra al listado de ordenes activas.

Los pasos para reabrir una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" en la orden que desea reabrir.
4. Seleccionar "Reabrir Orden de Compra".

![imagen6](/img/compras/ordenes-de-compra-cerradas-6.png)

Le aparecera un mensaje de exito notificandole que la orden de compra fue reabierta exitosamente. La orden de compra volvera a aparecer en el listado de ordenes de compra activas.

## API (llamadas desde sistemas externos)

### Listar ordenes de compra cerradas
Devuelve las ordenes de compra pagadas y recibidas paginado al estilo DataTables.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/purchases/closed_purchase_orders/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 4900,
  "recordsFiltered": 4900,
  "data": [
    {
      "zid": "<a title=\"\" href=\"/purchases/closed_purchase_orders/880178\">4017</a>",
      "num": "<a href=\"/purchases/closed_purchase_orders/880178\"></a>",
      "ref": "<a href=\"/purchases/closed_purchase_orders/880178\">Reunión 24-11-25 JPG-TC</a>",
      "issd": "24 de nov de 2025",
      "dlvd": "24 de nov de 2025",
      "orgn": null,
      "vdr": "<a title=\"116320397\" href=\"/purchases/vendors/1\">ADMINISTRADORA DE PARQU...</a>",
      "inv": "EDB81E66-304959406",
      "agn": "central",
      "pt": "Contado otros",
      "itms": 0,
      "tot": "Q50.00",
      "ra": "<a title=\"Detalles\" href=\"/purchases/closed_purchase_orders/880178\"><i class=\"fa fa-eye\"></i></a>",
      "DT_RowId": "purchases-closed-purchase-order-880178"
    },
    {
      "zid": "<a title=\"\" href=\"/purchases/closed_purchase_orders/945762\">4681</a>",
      "num": "<a href=\"/purchases/closed_purchase_orders/945762\"></a>",
      "ref": "<a href=\"/purchases/closed_purchase_orders/945762\">extorno por intereses</a>",
      "issd": "31 de mar de 2026",
      "dlvd": "31 de mar de 2026",
      "orgn": null,
      "vdr": "<a title=\"1118676\" href=\"/purchases/vendors/2\">Credomatic de Guatemala...</a>",
      "inv": "DCF82B28-1622691743",
      "agn": "central",
      "pt": "Contado otros",
      "itms": 0,
      "tot": "Q1,737.06",
      "ra": "<a title=\"Detalles\" href=\"/purchases/closed_purchase_orders/945762\"><i class=\"fa fa-eye\"></i></a>",
      "DT_RowId": "purchases-closed-purchase-order-945762"
    }
  ]
}
```

### Ver detalles de una orden de compra cerrada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/closed_purchase_orders/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Reabrir una orden de compra cerrada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/closed_purchase_orders/1/rebound.json
```

### Actualizar informacion de una orden de compra cerrada
Permite editar campos informativos limitados (numero, factura, referencia, fechas, comprador, memo, imagen, PDF y etiquetas) sin afectar los productos, recepciones ni pagos.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "purchase_order": {
      "id_number": "OC-00001",
      "invoice": "F-001",
      "reference": "Referencia actualizada",
      "issue_date": "2018-10-27",
      "memo": "Notas de la orden"
    }
  }' \
  https://app.zauru.com/purchases/closed_purchase_orders/1/shallow_update.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "993727",
  "zid": "293",
  "id_number": "OC-290",
  "reference": "BETO GIL MUEBLE DE TV",
  "charge_term_id": "2231",
  "authorized": true,
  "issue_date": "2026-06-30",
  "shipping_date": "2026-06-30",
  "delivery_date": "2026-06-30",
  "subtotal": "195.00",
  "discount": "0.00",
  "tax1": null,
  "tax2": null,
  "shipping": null,
  "total": "195.00",
  "due": "195.00",
  "purchaser_id": "30142",
  "payee_id": "2074705",
  "entity_id": "1303",
  "receiver_id": "1274",
  "received": true,
  "received_at": "2026-06-30 06:51:43.206854",
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "creator_id": "1274",
  "updater_id": "1274",
  "payment_expected_at": "2026-06-30",
  "paid": false,
  "paid_at": null,
  "memo": null,
  "image": null,
  "consolidate_id": null,
  "agency_id": "8246",
  "import": false,
  "incoterm_destination": null,
  "origin": null,
  "transport_type": "Marítimo",
  "forwarder": null,
  "incoterm_id": "1",
  "created_at": "2026-06-30 06:51:43.083662",
  "updated_at": "2026-06-30 06:51:43.233073",
  "purchase_order_details_count": "0",
  "currency_id": "1",
  "exchange_rate": null,
  "other_charges": null,
  "image_reception": null,
  "invoice": "21A56ABB 178276263",
  "discharge_details_count": "0",
  "charges_count": "0",
  "taxable": true,
  "pdf": null,
  "contract_id": null,
  "authorizer_id": "1274",
  "authorized_at": "2026-06-30 06:51:43.106739",
  "not_included_vat": "0.00",
  "exempt": false,
  "small_taxpayer": false,
  "external_image_url": null,
  "tax3": null,
  "tax4": null,
  "resolution": null,
  "resolution_date": null,
  "authorized_serial": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "uuid": "b6f16894-8f42-4a35-940d-c3ac03c8cd79",
  "document_external_storage_certified_response": null,
  "pos": false,
  "income_taxes_withheld": "0.00",
  "vat_withheld": "0.00",
  "document_external_storage_certified_response_for_voiding": null,
  "shipment_reference": null
}
```
