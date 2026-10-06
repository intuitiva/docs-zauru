---
title: "Crear caso"
sidebar_label: "Crear caso"
sidebar_position: 5
---

Registre aquí la entrada de un equipo a servicio técnico. El caso guarda el síntoma, el cliente, los productos o servicios a cobrar y el número de serie del equipo.

Para crear un caso:

1. Ir a "P.D.V."
2. Seleccionar "Nuevo Caso".

Complete los campos:

- **Sujeto a Impuestos**: selecciónelo para emitir factura; déjelo en blanco para emitir un recibo.
- **Síntoma**: motivo por el que se registra el caso.
- **Cliente**: nombre del cliente; a este nombre saldrá la factura o el recibo.
- **Números de serie**: números de serie que el cliente haya comprado.
- **Productos y servicios**: agréguelos con el código de barras, el código manual, o selecciónelos de la lista y especifique la cantidad.

Presione "Guardar".

![imagen1](/img/punto-de-venta/crear-caso-1.png)

Aparecerá un mensaje de éxito. Use los iconos de la derecha para ver el detalle, editar, cerrar o cobrar el caso.

![imagen2](/img/punto-de-venta/crear-caso-2.jpg)

## Editar un caso

Para modificar un caso sin cerrar:

1. Ir a "P.D.V."
2. Seleccionar "Casos".
3. Seleccionar el icono de "Editar" en el caso que desea modificar.

Puede modificar los siguientes campos:

- **Síntoma**: motivo del caso.
- **Diagnóstico**: observaciones del técnico.
- **Solución**: trabajo realizado.
- **Productos y servicios**: agregue o quite líneas del caso.
- **Descuento**: descuento global del caso.
- **Garantía**: marque si el caso está cubierto por garantía.
- **Cortesía**: marque si el caso no tiene costo.
- **Crítico**: marque si el caso es urgente.
- **Fecha esperada de cierre**: fecha en que se espera cerrar el caso.
- **Etiquetas (Tags)**: categorías del caso.

Presione "Guardar".

## Cerrar un caso

Una vez completado el servicio técnico:

1. Ir a "P.D.V."
2. Seleccionar "Casos".
3. Seleccionar el icono de "Cerrar" en el caso que desea cerrar.

El sistema pedirá confirmación. Una vez cerrado, el caso no se puede editar.

**Nota**: Si el caso tiene una factura asociada, cóbrela antes de cerrarlo.

## API (llamadas desde sistemas externos)

### Crear caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case": {
      "symptom": "Pantalla rota",
      "client_id": "1",
      "taxable": "1",
      "case_supplies_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1",
          "unit_price": "150"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/cases.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": null,
  "reference": null,
  "date": "2026-08-06",
  "closing_expected_at": "2026-08-08",
  "contact_method_id": 3,
  "symptom": "Pantalla rota",
  "diagnosis": null,
  "solution": null,
  "critical": false,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "memo": null,
  "warranty": false,
  "courtesy": false,
  "refund": false,
  "replace": false,
  "closed": false,
  "closed_at": null,
  "entity_id": 4,
  "responsible_id": 5,
  "serial_id": null,
  "client_id": 5,
  "agency_id": 6,
  "creator_id": 7,
  "updater_id": 7,
  "closer_id": null,
  "subtotal": "0.0",
  "discount_id": null,
  "extra_discount": "0.0",
  "total": "0.0",
  "created_at": "2026-08-06T04:17:24.625Z",
  "updated_at": "2026-08-06T04:17:24.625Z",
  "payment_term_id": 8,
  "case_supplies_count": 1,
  "pos": true,
  "taxable": true,
  "seller_id": 5,
  "contract_id": null,
  "crm_url": null,
  "not_included_vat": null,
  "external_image_url": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null
}
```

### Listar casos (datatables)

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
  https://app.zauru.com/pos/cases/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 1,
  "recordsFiltered": 1,
  "data": [
    {
      "i": "",
      "sym": "<a href=\"/pos/cases/144691\">Pantalla rota</a>",
      "crea": "06 de ago a las 04:17 hrs",
      "ago": "00:00",
      "srl": "",
      "cli": "LUIS CASTILLO",
      "itms": 1,
      "tot": "0.00",
      "due": "0.00",
      "r": "<a title=\"Detalles\" href=\"/pos/cases/144691\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/pos/cases/144691/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Imprimir\" data-turbolinks=\"false\" href=\"/pos/cases/144691/print?print_template=1071\"><i class=\"fa fa-print\"></i></a><a href=\"/pos/cases/144691/close\"><i class=\"fa fa-check-square-o\"></i></a>",
      "DT_RowId": "pos-case-144691"
    }
  ]
}
```

### Ver caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1.json
  ```

Devuelve el mismo JSON del caso que "Crear caso".

### Nuevo caso (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "case": {
    "id": null,
    "zid": null,
    "id_number": "",
    "reference": null,
    "date": "2026-08-06",
    "closing_expected_at": null,
    "contact_method_id": 1,
    "symptom": null,
    "diagnosis": null,
    "solution": null,
    "critical": false,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "memo": null,
    "warranty": false,
    "courtesy": false,
    "refund": false,
    "replace": false,
    "closed": false,
    "closed_at": null,
    "entity_id": 2,
    "responsible_id": 3,
    "serial_id": null,
    "client_id": null,
    "agency_id": 4,
    "creator_id": null,
    "updater_id": null,
    "closer_id": null,
    "subtotal": "0.0",
    "discount_id": null,
    "extra_discount": null,
    "total": "0.0",
    "created_at": null,
    "updated_at": null,
    "payment_term_id": 5,
    "case_supplies_count": 0,
    "pos": false,
    "taxable": false,
    "seller_id": null,
    "contract_id": null,
    "crm_url": null,
    "not_included_vat": null,
    "external_image_url": null,
    "voided": false,
    "voided_at": null,
    "voider_id": null
  },
  "items": [
    {
      "id": 6,
      "zid": 7,
      "active": true,
      "stockable": false,
      "sellable": true,
      "manufacturable": false,
      "purchasable": false,
      "code": "S31",
      "ean13": "",
      "name": "1 hora de Configurar Impresoras",
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": 8,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "1 Hora de configurar impresora",
      "reorder_point": null,
      "economic_order_quantity": null,
      "months_warranty": null,
      "entity_id": 2,
      "updater_id": 3,
      "created_at": "2014-05-12T17:13:50.569Z",
      "updated_at": "2018-05-15T14:35:24.650Z",
      "pays_vat": true,
      "tariff_rate": 0.0,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "product_type": 1,
      "payee_id": null,
      "average_cost": null,
      "fifo_cost": null,
      "lifo_cost": null,
      "extra_tax_1": 0.0,
      "extra_tax_2": 0.0,
      "quotable": true,
      "ecommerce": false,
      "image2": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image3": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image4": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image5": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "msrp": null,
      "tax1_use_msrp": false,
      "tax2_use_msrp": false,
      "vendor_code": null,
      "stocks_only_integer": true,
      "brand_id": null,
      "color": "#cccccc",
      "item_country_code_id": null,
      "youtube_video_url": null,
      "inventory_account_id": null,
      "master_item_id": null,
      "gemma_q4f16_embedding": "[-0.09899902]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null
    }
  ],
  "prices": {
    "6": "100.0"
  },
  "serials": []
}
```

### Editar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1/edit.json
  ```

Devuelve el mismo JSON del caso que "Ver caso".

### Actualizar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "case": {
      "symptom": "Pantalla rota editada",
      "diagnosis": "Cambio de pantalla",
      "case_supplies_attributes": {
        "0": {
          "id": "1",
          "quantity": "2"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/cases/1.json
  ```

Devuelve el caso con los cambios aplicados.

### Cerrar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1/close.json
  ```

Devuelve el caso con `closed` en `true`.
