---
title: "Consolidar varias órdenes de compra"
sidebar_label: "Consolidar varias órdenes de compra"
sidebar_position: 4
---

Cuando le compra mercadería a dos o más proveedores y las compras viajan juntas en un solo contenedor, el flete, el seguro y los aranceles se pagan una vez y deben repartirse entre las órdenes. Zauru permite consolidarlas para registrar esos cargos de importación, aranceles e impuestos una sola vez. Este tutorial explica cómo crear la consolidación y revisar cómo quedan unidas las órdenes.

Los pasos para consolidar órdenes de compra son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccionar "Nueva Orden de Compra".

![imagen1](/img/compras/consolidar-varias-ordenes-de-compra-1.png)

Complete los campos:

a. Coloque el nombre de la consolidación; en el ejemplo, "Importaciones de Agosto", que solo es una referencia.

b. Seleccione las órdenes de compra a consolidar.

c. Presione "Crear Consolidado".

![imagen2](/img/compras/consolidar-varias-ordenes-de-compra-2.png)

Aparecerá un mensaje de éxito. Presione "Verificar" (el ojo) para ver los detalles de la consolidación.

![imagen3](/img/compras/consolidar-varias-ordenes-de-compra-3.png)

En los detalles del consolidado encontrará las órdenes de compra que se consolidaron.

![imagen4](/img/compras/consolidar-varias-ordenes-de-compra-4.png)

## Consolidados para Facturas Especiales

Los consolidados también sirven cuando le compra a proveedores que no emiten factura, como un transportista individual o un productor agrícola, y necesita respaldar esas compras. Para ello, Zauru crea consolidados de facturas especiales (Facturas Especiales, Facturas de Sujeto Excluido o Facturas de Compras) a partir de órdenes de compra ya recibidas y aún no pagadas.

A diferencia del consolidado regular, este emite la factura especial que respalda las compras a proveedores que no facturan, y usa un término de pago que fuerza los precios sin impuestos y un ítem predefinido.

Los pasos para crear un consolidado de factura especial son:

1. Ir a "Compras".
2. Seleccionar "Consolidados".
3. Seleccionar "Nuevo Consolidado para Factura Especial".

![imagen5](/img/compras/consolidar-varias-ordenes-de-compra-5.png)

Complete los campos:

a. Coloque el nombre del consolidado.

b. Seleccione las órdenes de compra a consolidar. A diferencia del consolidado regular, solo aparecen las órdenes recibidas y aún no pagadas.

c. El sistema usa automáticamente el ítem configurado en las variables de compras (`item_for_consolidates`) y el término de pago de facturas especiales.

d. Presione "Crear Consolidado".

![imagen6](/img/compras/consolidar-varias-ordenes-de-compra-6.png)

Aparecerá un mensaje de éxito. Desde este consolidado podrá emitir la factura especial correspondiente.

### Configuración previa necesaria

Para utilizar los consolidados de facturas especiales, debe tener configurado:

1. Un término de pago con la opción "Forzar precio sin impuestos" (`force_price_without_taxes`) activada.
2. Un ítem para consolidados configurado en las variables del módulo de Compras (`item_for_consolidates`).
3. Numeración automática de documentos para facturas especiales (FEL).

Consulte [Configuración de Variables del Módulo de Compras](/compras/configuracion-de-variables) y [Emitir Facturas de compras a Proveedores](/compras/registrar-facturas-especiales-a-proveedores) para más detalles.

Con el consolidado creado, registre los cargos de importación una sola vez y revise cómo se reparten entre las órdenes, para que cada producto cargue su parte del costo.

## API (llamadas desde sistemas externos)

### Obtener listado de órdenes de compra consolidables
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
  }
]
```

### Crear nuevo consolidado de órdenes de compra
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
El 1 al final de la URL es el ID del consolidado.
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

Devuelve el mismo objeto del consolidado que "Ver detalles de un consolidado".

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

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

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

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
