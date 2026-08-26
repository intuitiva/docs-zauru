---
title: "Emitir Facturas de compras a Proveedores"
sidebar_label: "Emitir Facturas de compras a Proveedores"
sidebar_position: 13
---

¿Le compra mercadería a un agricultor, le paga flete a un piloto particular o adquiere servicios de alguien que no le extiende factura? Para que ese gasto quede respaldado ante la administración tributaria, usted mismo debe emitir el documento que legaliza la compra. En Guatemala, este procedimiento se denomina "__Facturas Especiales__", mientras que en El Salvador el documento generado se conoce como "__Facturas de Sujeto Excluido__", y en Costa Rica se hace referencia a ellas como "__Facturas de Compras__".

Las facturas de compra constituyen un documento legal debidamente autorizado por las entidades de administración tributaria de cada país. Este documento se emplea como respaldo al adquirir bienes o servicios de personas individuales que, debido a la naturaleza de sus actividades o por circunstancias particulares, no emiten o entregan el correspondiente documento tributario.

A continuación, se detallan los pasos a seguir para la configuración y generación de Facturas Especiales.

## Configuración

### Término de pago (obligatorio)

A continuación, se detallan los pasos a seguir para configurar el término de pago:

1.       Seleccionar Compras.

2.       Seleccionar Configuración.

3.       Seleccionar Nuevo término de pago.

![Compras / Configuración / Nuevo termino de pago](/img/compras/registrar-facturas-especiales-a-proveedores-1.png)

A continuación llenar las casillas señaladas, *__por favor tome en cuenta que debe apoyarse con su contador o departamento contable para asegurarse que cuentas contables necesita utilizar__*.

![Compras / término de pago](/img/compras/registrar-facturas-especiales-a-proveedores-2.png)

### Numeración Automática de Documentos (para Facturas Electrónicas Especiales FEL)

A continuación, se detallan los pasos a seguir para configurar la numeración automática de documentos:

1.       Seleccionar Configuración.

2.       Seleccionar Plantillas.

3.       Seleccionar Nuevo número automático de documentos.

![Configuración/Plantillas/Nuevo número automático de documentos](/img/compras/registrar-facturas-especiales-a-proveedores-3.png)

A continuación llenar las casillas señaladas, con las cuentas que corresponden.

1.       Seleccionar __Nota de Crédito__ y presionar el botón __Actualizar__.

2.       Seleccionar la opción __Id_number__.

3.       Digitar el texto __FEL__.

4.       Seleccionar su emisor de facturas electrónicas.

![Plantillas / Facturas especiales](/img/compras/registrar-facturas-especiales-a-proveedores-4.png)

## Creación de Facturas Especiales

1.       Seleccionar Ordenes de compra.
2.       Seleccionar Compras.
3.       Seleccionar Nueva orden de compra.

![Compras / Nueva orden de compra](/img/compras/registrar-facturas-especiales-a-proveedores-5.png)

A continuación llenar las casillas señaladas, con los datos que corresponde.

1.       Si es necesario digita en referencia una descripción de compra.
2.       En término de pago seleccionar __Factura Especial__.
3.       Busque a su proveedor o cree uno nuevo.

![Compras / Nueva orden de compra](/img/compras/registrar-facturas-especiales-a-proveedores-6.png)

4.       Si es compra de productos seleccionar la opción de __Detalle de ïtem__ y seleccionar el/los ítem(s) comprado(s), si es algún servicio, seleccionar la opción de __Detalle de cuentas__ y seleccionar la cuenta contable que implique el gasto realizado.

![Compras / Factura especial 2/3](/img/compras/registrar-facturas-especiales-a-proveedores-7.png)

5.       Desplazarse al final de la página y dar click en __Crear la orden compra.__

### Partidas generadas en las ordenes de compra

Notar que la transacción hacia cuentas por pagar queda con valor de Q.100.00.

![Transaccion OK Factura especial](/img/compras/registrar-facturas-especiales-a-proveedores-8.png)

### Diferencias entre la impresión y el registro de la Factura Especial

Notar que la Factura Especial da el total de Q.117.89.

![Muestra de Factura Especial](/img/compras/registrar-facturas-especiales-a-proveedores-9.png)

Con la Factura Especial emitida, su compra queda respaldada legalmente aunque el proveedor no le haya entregado factura, y la transacción queda registrada en su contabilidad. Si acumula varias de estas compras, puede agrupar las órdenes ya recibidas y pendientes de pago en un consolidado de factura especial para emitir un solo documento.

## API (llamadas desde sistemas externos)

### Obtener ordenes de compra para un consolidado de factura especial
Devuelve las ordenes de compra que ya fueron recibidas pero que aun no han sido pagadas, disponibles para consolidar en una factura especial.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/consolidates/new_for_special_invoice.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "reference": "Tridosha Junio 2026",
    "charge_term_id": 3,
    "authorized": true,
    "issue_date": "2026-06-01",
    "shipping_date": "2026-06-01",
    "delivery_date": "2026-06-01",
    "subtotal": "45.0",
    "discount": "0.0",
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "45.0",
    "due": "45.0",
    "purchaser_id": 4,
    "payee_id": 5,
    "entity_id": 6,
    "receiver_id": 7,
    "received": true,
    "received_at": "2026-06-25T14:32:54.339Z",
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": 7,
    "updater_id": 7,
    "payment_expected_at": "2026-06-01",
    "paid": false,
    "paid_at": null,
    "memo": "Tridosha",
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
    "created_at": "2026-06-01T11:04:27.581Z",
    "updated_at": "2026-06-25T14:32:54.357Z",
    "purchase_order_details_count": 1,
    "currency_id": 4,
    "exchange_rate": 1.0,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": "3E136F56 398214902",
    "discharge_details_count": 0,
    "charges_count": 0,
    "taxable": true,
    "pdf": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1782397959/EMPRESAEJEMPLO/purchase_order/purchase_order_5152_kjoiv6jpdvvnm4vuyepw.pdf",
      "thumbnail": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_100,w_100/v1782397959/EMPRESAEJEMPLO/purchase_order/purchase_order_5152_kjoiv6jpdvvnm4vuyepw.jpg"
      }
    },
    "contract_id": null,
    "authorizer_id": 7,
    "authorized_at": "2026-06-01T11:04:27.590Z",
    "not_included_vat": "0.0",
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
    "uuid": "e728e241-affc-42bd-b757-1746e7b43bae",
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
    "reference": "parqueo LVL 01-07-25",
    "charge_term_id": 11,
    "authorized": true,
    "issue_date": "2025-07-01",
    "shipping_date": "2025-07-01",
    "delivery_date": "2025-07-01",
    "subtotal": "50.0",
    "discount": "0.0",
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "50.0",
    "due": "50.0",
    "purchaser_id": 4,
    "payee_id": 12,
    "entity_id": 6,
    "receiver_id": 7,
    "received": true,
    "received_at": "2025-08-27T00:17:37.491Z",
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": 7,
    "updater_id": 7,
    "payment_expected_at": "2025-07-01",
    "paid": false,
    "paid_at": null,
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
    "created_at": "2025-08-27T00:17:36.836Z",
    "updated_at": "2025-08-27T00:17:37.517Z",
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
    "invoice": "2485AA18 55003328",
    "discharge_details_count": 0,
    "charges_count": 0,
    "taxable": true,
    "pdf": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1756253856/EMPRESAEJEMPLO/purchase_order/purchase_order_3661_owjc2orzc8acztwww0ms.pdf",
      "thumbnail": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_100,w_100/v1756253856/EMPRESAEJEMPLO/purchase_order/purchase_order_3661_owjc2orzc8acztwww0ms.jpg"
      }
    },
    "contract_id": null,
    "authorizer_id": 7,
    "authorized_at": "2025-08-27T00:17:36.856Z",
    "not_included_vat": "0.0",
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
    "uuid": "a85fbb08-c883-4c0f-98d2-cf42fd99c136",
    "document_external_storage_certified_response": null,
    "pos": false,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  }
]
```

### Crear consolidado de factura especial
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "consolidate": {
      "name": "Factura especial de agosto",
      "description": "Consolidado para factura especial",
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
  https://app.zauru.com/purchases/consolidates/create_for_special_invoice.json
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
