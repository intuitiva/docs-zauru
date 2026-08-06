---
title: "Consolidar varias orden de compra"
sidebar_label: "Consolidar varias orden de compra"
sidebar_position: 7
---

Este tutorial esta enfocado en consolidar dos o mas ordenes de compra. Esta función beneficia a los importadores que generen dos compras en el mismo país pero a distinto proveedor, y luego reciba las dos ordenes de compra en puerto origen y las importe juntas en un solo contenedor.

Para poder registrar cargos de importación, aranceles o impuestos de las dos compras a la vez, Zauru le permite consolidar dos o mas ordenes de compra, y agregar los cargos y aranceles una sola vez para las dos o mas compras.

Los pasos para hacer una consolidación de ordenes de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Nueva Orden de Compra”.

![imagen1](/img/compras/consolidar-varias-ordenes-de-compra-1.jpg)


Le aparecerán las opciones para crear una nueva orden de compra, los campos que debe llenar son los siguientes:

a. Coloque el nombre de la consolidación. En el ejemplo colocamos Importaciones de Agosto porque estamos consolidando dos importaciones del mes de Agosto, esta es solo una referencia.

b. Seleccione las ordenes de compra que desea consolidar.

c. Presione “Crear Consolidado”.

![imagen2](/img/compras/consolidar-varias-ordenes-de-compra-2.jpg)



Le aparecerá un mensaje en la pantalla notificándole que la consolidación se creo exitosamente. Presione Verificar (El ojo) para ver los detalles de la consolidación.

![imagen3](/img/compras/consolidar-varias-ordenes-de-compra-3.jpg)



En los detalles del Consolidado podrá encontrar las ordenes de compra que se consolidaron.

![imagen4](/img/compras/consolidar-varias-ordenes-de-compra-4.png)

## Consolidados para Facturas Especiales

Zauru tambien permite crear consolidados para el caso especial de facturas de compras a proveedores (Facturas Especiales, Facturas de Sujeto Excluido o Facturas de Compras). Estos consolidados se crean a partir de ordenes de compra que ya fueron recibidas pero aun no han sido pagadas.

La diferencia principal con un consolidado regular es que este tipo de consolidado esta disenado para emitir la factura especial que respalda las compras realizadas a proveedores que no emiten factura. El consolidado de factura especial utiliza un termino de pago que fuerza el calculo de precios sin impuestos y un item predefinido para el consolidado.

Los pasos para crear un consolidado de factura especial son:

1. Ir a "Compras".
2. Seleccionar "Consolidados".
3. Seleccionar "Nuevo Consolidado para Factura Especial".

![imagen5](/img/compras/consolidar-varias-ordenes-de-compra-5.png)

Le apareceran las opciones para crear el consolidado de factura especial, los campos que debe llenar son los siguientes:

a. Coloque el nombre del consolidado de factura especial.

b. Seleccione las ordenes de compra que desea consolidar. A diferencia del consolidado regular, aqui solo apareceran las ordenes de compra que ya fueron recibidas pero que aun no han sido pagadas.

c. El sistema utilizara automaticamente el item configurado en las variables de compras (item_for_consolidates) y el termino de pago configurado para facturas especiales.

d. Presione "Crear Consolidado".

![imagen6](/img/compras/consolidar-varias-ordenes-de-compra-6.png)

Le aparecera un mensaje de exito notificandole que el consolidado de factura especial fue creado. A partir de este consolidado podra emitir la factura especial correspondiente.

### Configuracion previa necesaria

Para utilizar los consolidados de facturas especiales, debe tener configurado:

1. Un termino de pago con la opcion "Forzar precio sin impuestos" (force_price_without_taxes) activada.
2. Un item para consolidados configurado en las variables del modulo de Compras (item_for_consolidates).
3. Numeracion automatica de documentos para facturas especiales (FEL).

Consulte los tutoriales de "Configuracion de Variables del Modulo de Compras" y "Emitir Facturas de compras a Proveedores" para mas detalles.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes de compra consolidables
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/consolidates/new.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "reference": "Cuota de servicios red eléctrica of. 519 may-2026",
    "charge_term_id": 3,
    "authorized": true,
    "issue_date": "2026-06-27",
    "shipping_date": "2026-06-27",
    "delivery_date": null,
    "subtotal": "81.25",
    "discount": "0.0",
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "81.25",
    "due": "0.0",
    "purchaser_id": 4,
    "payee_id": 5,
    "entity_id": 6,
    "receiver_id": null,
    "received": false,
    "received_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": 7,
    "updater_id": 7,
    "payment_expected_at": "2026-06-27",
    "paid": true,
    "paid_at": "2026-07-02T14:56:00.998Z",
    "memo": "",
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "consolidate_id": null,
    "agency_id": 8,
    "import": false,
    "incoterm_destination": "",
    "origin": "",
    "transport_type": "Marítimo",
    "forwarder": "",
    "incoterm_id": 4,
    "created_at": "2026-06-28T03:17:43.726Z",
    "updated_at": "2026-07-02T14:56:00.993Z",
    "purchase_order_details_count": 0,
    "currency_id": 4,
    "exchange_rate": null,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": "",
    "discharge_details_count": 1,
    "charges_count": 0,
    "taxable": true,
    "pdf": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1782616663/EMPRESAEJEMPLO/purchase_order/purchase_order_5164_f7r29sbzc8juvkyutiip.pdf",
      "thumbnail": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_100,w_100/v1782616663/EMPRESAEJEMPLO/purchase_order/purchase_order_5164_f7r29sbzc8juvkyutiip.jpg"
      }
    },
    "contract_id": null,
    "authorizer_id": 7,
    "authorized_at": "2026-06-28T03:17:43.747Z",
    "not_included_vat": "0.0",
    "exempt": false,
    "small_taxpayer": true,
    "external_image_url": null,
    "tax3": null,
    "tax4": null,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": "55684e61-5ba7-4d3c-a372-7cf11c680e43",
    "document_external_storage_certified_response": null,
    "pos": false,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  },
  {
    "id": 9,
    "zid": 10,
    "id_number": null,
    "reference": "Cuota de servicios mantenimiento of. 519 jun-26",
    "charge_term_id": 3,
    "authorized": true,
    "issue_date": "2026-06-27",
    "shipping_date": "2026-06-27",
    "delivery_date": null,
    "subtotal": "113.54",
    "discount": "0.0",
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "113.54",
    "due": "0.0",
    "purchaser_id": 4,
    "payee_id": 5,
    "entity_id": 6,
    "receiver_id": null,
    "received": false,
    "received_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": 7,
    "updater_id": 7,
    "payment_expected_at": "2026-06-27",
    "paid": true,
    "paid_at": "2026-07-02T15:26:52.194Z",
    "memo": "",
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "consolidate_id": null,
    "agency_id": 8,
    "import": false,
    "incoterm_destination": "",
    "origin": "",
    "transport_type": "Marítimo",
    "forwarder": "",
    "incoterm_id": 4,
    "created_at": "2026-06-28T03:21:01.957Z",
    "updated_at": "2026-07-02T15:26:52.191Z",
    "purchase_order_details_count": 0,
    "currency_id": 6,
    "exchange_rate": null,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": "",
    "discharge_details_count": 1,
    "charges_count": 0,
    "taxable": true,
    "pdf": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1782616862/EMPRESAEJEMPLO/purchase_order/purchase_order_5166_jsqov41ooe4o5h8tdgq0.pdf",
      "thumbnail": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_100,w_100/v1782616862/EMPRESAEJEMPLO/purchase_order/purchase_order_5166_jsqov41ooe4o5h8tdgq0.jpg"
      }
    },
    "contract_id": null,
    "authorizer_id": 7,
    "authorized_at": "2026-06-28T03:21:01.966Z",
    "not_included_vat": "0.0",
    "exempt": false,
    "small_taxpayer": true,
    "external_image_url": null,
    "tax3": null,
    "tax4": null,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": "a84fdd5f-e56c-4254-9c7b-1b8bfe124815",
    "document_external_storage_certified_response": null,
    "pos": false,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  }
]
```

### Crear nuevo consolidado de ordenes de compras
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "consolidate": {
      "name": "consolidado de prueba",
      "description": "descripcion del consolidado",
      "purchase_orders_attributes": {
        "0": {
          "consolidated": "1",
          "id": "1"
        },
        "1": {
          "consolidated": "1",
          "id": "2"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/consolidates.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "name": "consolidado de prueba",
  "description": "descripcion del consolidado",
  "entity_id": 2,
  "user_id": 3,
  "created_at": "2026-08-06T04:16:20.660Z",
  "updated_at": "2026-08-06T04:16:20.660Z",
  "item_id": null,
  "issued_at": null,
  "document_external_storage_certified_response": null,
  "authorized_serial": null,
  "electronic_tax_document": null,
  "id_number": null,
  "resolution": null,
  "resolution_date": null,
  "electronic_authorization_supporting_document": null,
  "charge_term_id": null
}
```

### Ver detalles de un consolidado
El 1 al final de la URL es el ID del consolidado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/consolidates/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2586",
  "zid": "1",
  "name": "consolidado de prueba",
  "description": "descripcion del consolidado",
  "entity_id": "1303",
  "user_id": "23",
  "created_at": "2026-08-06 04:13:36.115488",
  "updated_at": "2026-08-06 04:13:36.115488",
  "item_id": null,
  "issued_at": null,
  "document_external_storage_certified_response": null,
  "authorized_serial": null,
  "electronic_tax_document": null,
  "id_number": null,
  "resolution": null,
  "resolution_date": null,
  "electronic_authorization_supporting_document": null,
  "charge_term_id": null
}
```

### Obtener datos para editar un consolidado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/consolidates/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2586",
  "zid": "1",
  "name": "consolidado de prueba",
  "description": "descripcion del consolidado",
  "entity_id": "1303",
  "user_id": "23",
  "created_at": "2026-08-06 04:13:36.115488",
  "updated_at": "2026-08-06 04:13:36.115488",
  "item_id": null,
  "issued_at": null,
  "document_external_storage_certified_response": null,
  "authorized_serial": null,
  "electronic_tax_document": null,
  "id_number": null,
  "resolution": null,
  "resolution_date": null,
  "electronic_authorization_supporting_document": null,
  "charge_term_id": null
}
```

### Actualizar un consolidado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "consolidate": {
      "name": "consolidado actualizado",
      "description": "descripcion actualizada"
    }
  }' \
  https://app.zauru.com/purchases/consolidates/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2586",
  "zid": "1",
  "name": "consolidado de prueba",
  "description": "descripcion del consolidado",
  "entity_id": "1303",
  "user_id": "23",
  "created_at": "2026-08-06 04:13:36.115488",
  "updated_at": "2026-08-06 04:13:36.115488",
  "item_id": null,
  "issued_at": null,
  "document_external_storage_certified_response": null,
  "authorized_serial": null,
  "electronic_tax_document": null,
  "id_number": null,
  "resolution": null,
  "resolution_date": null,
  "electronic_authorization_supporting_document": null,
  "charge_term_id": null
}
```

### Eliminar un consolidado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/consolidates/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
