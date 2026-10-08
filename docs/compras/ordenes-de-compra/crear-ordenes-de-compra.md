---
title: "Crear órdenes de compra"
sidebar_label: "Crear órdenes de compra"
sidebar_position: 1
---

Cada vez que necesita reponer inventario, ya sea comprándole a un proveedor local o trayendo mercadería del extranjero, todo empieza con una orden de compra: el documento donde queda constancia de qué le compró a quién, a qué costo y en qué condiciones, y que sirve de base para todo el resto del flujo de compras. En este tutorial aprenderá a crear los dos tipos de orden de compra que maneja Zauru:

1. Orden de compra local
2. Orden de compra al exterior (Importación)

Ambos se ejemplifican en este tutorial.

## Crear una orden de compra local

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccionar "Nueva Orden de Compra".

![imagen1](/img/compras/ordenes-de-compra-1.png)

Complete los campos:

a. Coloque una referencia breve para ubicar la orden en el listado.

b. Quite el cheque de "Sujeto a Impuestos" si la compra no causó impuestos o si no desea registrarlos.

c. Coloque el número de factura, si se la dieron.

d. Coloque la fecha de la compra.

e. Coloque la fecha esperada de recepción.

f. Seleccione el término de pago acordado: contado o crédito.

g. Coloque el proveedor; si es nuevo, agréguelo antes de continuar.

h. Coloque el origen de la mercadería, si lo conoce.

i. Seleccione el empleado que hizo la compra.

j. Seleccione la moneda de la compra.

k. Coloque el producto y la cantidad ordenada; para agregar otro producto presione "+".

![imagen2](/img/compras/ordenes-de-compra-2.jpg)

Al terminar de colocar los productos, las cantidades y los costos unitarios, presione "Crear orden de compra".

![imagen3](/img/compras/ordenes-de-compra-3.jpg)

Aparecerá un mensaje de éxito. Antes de recibir la orden, debe autorizarla como se muestra en la imagen.

![imagen4](/img/compras/ordenes-de-compra-4.jpg)

Aparecerá un mensaje de confirmación; ahora recíbala en su bodega para poder venderla. Para más detalles, consulte [Crear recepciones para recibir órdenes de compra](/compras/ordenes-de-compra/recibir-los-productos-de-orden-de-compra).

![imagen5](/img/compras/ordenes-de-compra-5.jpg)

## Crear una orden de compra de importación

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccionar "Nueva Orden de Compra".

![imagen6](/img/compras/ordenes-de-compra-6.jpg)

Complete los campos:

a. Coloque una referencia breve; en el ejemplo, "Importación de Mercadería".

b. Deje marcado el cheque de "Sujeto a Impuestos". Zauru no calcula los impuestos automáticamente en importaciones; más adelante usted los registra como Cargos y Aranceles.

c. Coloque la factura o recibo, si se lo brindaron.

d. Coloque la fecha de la compra.

e. Coloque la fecha esperada de despacho de la mercadería.

f. Seleccione el término de pago acordado: crédito o contado.

g. Coloque el proveedor existente o agregue uno nuevo.

h. Coloque el origen de la mercadería o la ubicación de la bodega del proveedor.

i. Seleccione el empleado encargado de la compra.

j. Seleccione la moneda de la compra.

k. Seleccione "Importar" para marcar la compra como importación.

l. Seleccione el INCOTERM de la importación. En el ejemplo se usa FOB (Free on Board), el término más común para mercadería que viaja en barco.

m. Coloque el lugar de entrega; en el ejemplo, Puerto Quetzal.

n. Seleccione el tipo de transporte.

o. Coloque el forwarder o intermediario que maneja la mercadería.

p. Seleccione los productos, la cantidad y el costo unitario original, sin incluir cargos ni aranceles.

![imagen7](/img/compras/ordenes-de-compra-7.png)

Presione "+" para agregar otra fila. Al terminar, seleccione "Crear orden de compra".

![imagen8](/img/compras/ordenes-de-compra-8.jpg)

Aparecerá un mensaje de éxito. Autorice la orden y luego agregue los cargos y aranceles, que se reparten de forma ponderada en el costo promedio de los productos.

![imagen9](/img/compras/ordenes-de-compra-9.jpg)

Aparecerá un mensaje de confirmación. Para más detalles, consulte [Cargos adicionales a una orden de compra o consolidado](/compras/ordenes-de-compra/cargos-adicionales-a-una-orden-de-compra-o-consolidado) o [Cargos de Aranceles](/compras/ordenes-de-compra/cargos-de-aranceles).

![imagen10](/img/compras/ordenes-de-compra-10.jpg)

## API (llamadas desde sistemas externos)

### Obtener datos para una orden de compra nueva
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_orders/new.json
```

Esta llamada devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id_number": "",
    "total": null,
    ...
  },
  "items_grouped": {
    "CAT1": [["item1", 1]],
    ...
  },
  "tags": [
    ["Proyecto 1", 1],
    ...
  ],
  "accounts_grouped": {
    "Activos": [["activo A (GTQ)", 1]],
    "Pasivos": [["Pasivo A (GTQ)", 3]],
    "Gastos": [["Gasto1 (GTQ)", 5]],
    "Ingresos": [["ventas contado (GTQ)", 7]]
  },
  "purchasers": [
    {
      "id": 1,
      "name": "Comprador 1",
      ...
    },
    ...
  ],
  "agencies": [
    {
      "id": 1,
      "name": "Agencia 1",
      ...
    },
    ...
  ],
  "charge_terms": [
    {
      "id": 1,
      "name": "Termino de Pago 1",
      ...
    },
    ...
  ]
}
```

### Crear nueva orden de compra de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_order": {
      "issue_date": "2018-10-27",
      "shipping_date": "2018-10-27",
      "purchaser_id": "1",
      "currency_id": "1",
      "agency_id": "1",
      "taxable": "1",
      "payee_id": "1",
      "charge_term_id": "1",
      "purchase_order_details_attributes": {
        "0": {
          "item_id": "1",
          "booked_quantity": "2",
          "unit_cost": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/purchase_orders.json
```

Esta llamada devolverá un JSON similar a este:
```json
{
  "id": 1,
  "authorized": false,
  "id_number": "OC-00001",
  "agency_id": 1,
  "total": "200.0",
  "zid": 1,
  "purchase_order_details": [
    {
      "id": 2,
      "item_id": 1,
      "unit_cost": "100.0",
      "booked_quantity": 2
    }
  ]
}
```

### Crear nueva orden de compra de gastos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_order": {
      "issue_date": "2018-10-27",
      "shipping_date": "2018-10-27",
      "purchaser_id": "1",
      "currency_id": "1",
      "agency_id": "1",
      "taxable": "1",
      "payee_id": "1",
      "charge_term_id": "1",
      "purchase_order_account_details_attributes": {
        "0": {
          "account_id": "1",
          "cost": "100",
          "reference": "gasto recurrente"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/purchase_orders.json
```

Esta llamada devolverá un JSON similar a este:
```json
{
  "id": 1,
  "authorized": false,
  "id_number": "OC-00002",
  "agency_id": 1,
  "total": "100.0",
  "zid": 2,
  "purchase_order_account_details": [
    {
      "id": 2,
      "account_id": 1,
      "cost": "100.0",
      "reference": "gasto recurrente"
    }
  ]
}
```

### Ver detalles de una orden de compra
El 1 al final de la URL es el ID de la orden de compra.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_orders/1.json
```

Esta llamada devolverá un JSON similar a este:
```json
{
  "id": 1,
  "authorized": false,
  "id_number": "OC-00001",
  "agency_id": 1,
  "charge_term_id": 1,
  "payee_id": 1,
  "total": "200.0",
  "zid": 1,
  "agency": {
    "id": 1,
    "address_line_1": "1 calle 1-11 zona 1",
    "name": "Bodega de Principal"
  },
  "charge_term": {
    "id": 1,
    "name": "contado"
  },
  "payee": {
    "id": 1,
    "name": "Proveedor Especial"
  },
  "purchase_order_details": [
    {
      "id": 2,
      "item_id": 1,
      "unit_cost": "100.0",
      "booked_quantity": 2,
      "item": {
        "id": 1,
        "name": "producto estrella 2",
        "description": "Producto clave para que el cliente use"
      }
    }
  ]
}
```

### Obtener datos para editar una orden de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_orders/1/edit.json
```

Devuelve la misma estructura que "Obtener datos para una orden de compra nueva", más el campo `vendor_info` con los datos del proveedor.

### Actualizar la orden de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "purchase_order": {
      "issue_date": "2018-10-27",
      "shipping_date": "2018-10-27",
      "purchaser_id": "1",
      "currency_id": "1",
      "agency_id": "1",
      "taxable": "1",
      "payee_id": "1",
      "charge_term_id": "1",
      "purchase_order_details_attributes": {
        "0": {
          "item_id": "1",
          "booked_quantity": "2",
          "unit_cost": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/purchase_orders/1.json
```

Devuelve el mismo JSON que "Crear nueva orden de compra de items".

### Eliminar órdenes de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/purchase_orders/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Autorizar una orden de compra
El 1 al final de la URL es el ID de la orden de compra que se desea autorizar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_orders/1/authorize.json
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

### Exportar órdenes de compra
Devuelve las órdenes de compra no pagadas y no recibidas con sus detalles, aplicando filtros opcionales por fecha, item y proveedor.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/purchases/purchase_orders/export.json?fechaInicio=2024-01-01&fechaFin=2024-01-31"
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Obtener plantillas de impresión de una orden de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_orders/1/print_templates.json
```

Devuelve un arreglo con las plantillas de impresión disponibles para la orden, con la misma estructura que en [Formatos de impresión](/primeros-pasos/formatos-impresion).
