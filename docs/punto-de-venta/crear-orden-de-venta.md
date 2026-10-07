---
title: "Crear orden de venta"
sidebar_label: "Crear orden de venta"
sidebar_position: 2
---

Cuando un cliente reserva productos para recogerlos o pagarlos más tarde, una orden de venta es la mejor manera de apartarle la mercadería sin facturar todavía. También le sirve cuando el cliente aún está decidiendo cantidades y usted quiere dejar el pedido anotado para cerrarlo después. Al guardar la orden, los productos almacenables quedan reservados para ese cliente. Los pasos para crear una nueva orden de venta desde el punto de venta son los siguientes:

1. Ir a “Punto de Venta” (P.D.V.).
2. Seleccionar “Nueva Orden”.
3. Le aparecerán las opciones para crear una nueva orden de venta, cada vez que un usuario cree una nueva orden, el podrá seleccionar únicamente los productos que hayan sido requeridos por su cliente.

Los campos que se pueden colocar en la orden de venta son:

a. Referencia: Coloque una breve referencia para encontrar fácilmente la orden de venta.

b. Cliente: Coloque el nombre del Cliente existente al que se le va a emitir la orden de venta o agregue uno nuevo.

c. Seleccione el vendedor: Persona que está realizando la venta.

d.  Aquí podrá escanear los códigos de barra de los productos o colocar manualmente el código para que se agreguen a la factura.

e. Agregar o quitar cantidad de productos: si en la orden se van a agregar dos o más productos de un mismo tipo, solamente debe dar click en “+” o “-“ para realizarlo.

f. Sujeto a impuestos: Con esta opción usted puede seleccionar si va a emitir factura al concluir orden, o únicamente recibo comprobante.

![imagen1](/img/punto-de-venta/crear-orden-de-venta-1.png)


Ahora agregue los productos o servicios que se van a adicionar en la orden  y la cantidad. Aun podrá especificar si desea que registre impuestos o que no registre impuestos y sea solo un recibo. Luego presione Guardar para emitir la orden.

![imagen2](/img/punto-de-venta/crear-orden-de-venta-2.png)


Al presionar un click sobre el icono Guardar,  automáticamente la orden de venta será generada, y se realizara la reserva de los productos si estos fueron de tipo almacenables.

Es importante mencionar que al crear la orden aun nos va a permitir editarla para agregar o quitar productos o servicios, destruirla o emitir la factura.

![imagen3](/img/punto-de-venta/crear-orden-de-venta-3.png)

## Listado de ordenes de venta

Para ver todas las ordenes de venta pendientes:

1. Ir a "P.D.V."
2. Seleccionar "Ordenes".

Le aparecera un listado con todas las ordenes de venta que cumplen las siguientes condiciones:
- No han sido emitidas como factura
- No estan pagadas
- No estan anuladas
- Pertenecen a la agencia del usuario

Puede filtrar por:

a. **Etiquetas (Tags)**: Filtre las ordenes por etiquetas asignadas.

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una orden para ver sus productos, precios y otros detalles.

b. **Editar**: Modifique la orden para agregar o quitar productos. Vea la seccion "Editar una orden de venta".

c. **Emitir factura**: Convierta la orden en una factura. Vea el tutorial "Crear factura".

d. **Imprimir**: Imprima la orden utilizando las plantillas configuradas.

e. **Anular**: Anule la orden si ya no es necesaria.

f. **Cobrar**: Si la orden ya fue emitida como factura, podra registrarel cobro.

## Editar una orden de venta

Para modificar una orden existente que aun no ha sido emitida como factura:

1. En el listado de ordenes, localice la orden que desea modificar.
2. Seleccione el icono de "Editar".
3. Podra modificar los siguientes campos:

a. **Referencia**: Actualice la referencia de la orden.

b. **Cliente**: Cambie el cliente asociado a la orden.

c. **Vendedor**: Cambie el vendedor asignado.

d. **Productos**: Agregue o quite productos, modifique cantidades y precios.

e. **Sujeto a impuestos**: Cambie si la orden genera factura o recibo.

f. **Descuento**: Aplique un descuento global a la orden.

g. **Etiquetas**: Asigne o modifique etiquetas.

4. Presione "Guardar" para actualizar la orden.

**Nota**: Si la orden ya fue emitida como factura, no podra ser editada.

## Anular una orden de venta

Para anular una orden:

1. En el listado de ordenes, localice la orden a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

**Importante**: No podra anular una orden que tenga envios en transito asociados. La orden sera anulada y los productos reservados seran devueltos al inventario.

Ya sabe crear, editar y anular una orden de venta. Cuando el cliente confirme la compra, el siguiente paso es convertirla en factura con un solo clic y cobrarla, sin volver a escribir ni un dato.

## API (llamadas desde sistemas externos)

### Solicitar items con existencias y precios y paquetes con existencias y precios en la bodega asignada al usuario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "order": {
    "id": null,
    "zid": null,
    "order_number": "",
    "invoice_number": null,
    "reference": null,
    "date": "2026-08-06",
    "subtotal": "0.0",
    "discount_id": null,
    "extra_discount": "0.0",
    "total": "0.0",
    "due": null,
    "needs_delivery": false,
    "delivery_date": null,
    "delivery_address": null,
    "seller_id": 1,
    "creator_id": null,
    "updater_id": null,
    "taxable": true,
    "issuer_id": null,
    "issued": false,
    "issued_at": null,
    "paid": false,
    "paid_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "entity_id": 2,
    "memo": null,
    "order_image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice_image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "payee_id": null,
    "payment_expected_at": null,
    "agency_id": 3,
    "payment_term_id": 4,
    "created_at": null,
    "updated_at": null,
    "invoice_details_count": 0,
    "shipper_id": null,
    "pos": true,
    "order_pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "crm_url": null,
    "zid_by_agency_and_creator": 0,
    "not_included_vat": null,
    "exchange_rate": 1.0,
    "excempt": false,
    "currency_id": 1,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "foreign": false,
    "ecommerce_request_id": null,
    "external_image_url": null,
    "uuid": null,
    "id_number": null,
    "great_contributor": null,
    "sales_consolidate_id": null,
    "email": null,
    "resolution_notes": null,
    "client_identification_type_when_issuing_invoices": 0,
    "export": false,
    "export_references": null,
    "sv_ccf": false,
    "contingency": 0,
    "withheld_vat": null,
    "withheld_income_tax": null,
    "contingency_number": null,
    "cr_ticket": false,
    "mail_resent_at": null,
    "donation": false,
    "gift_card_1_id": null,
    "gift_card_1_id_number": null,
    "gift_card_1_discount": "0.0",
    "gift_card_2_id": null,
    "gift_card_2_id_number": null,
    "gift_card_2_discount": "0.0",
    "export_consignee_name": null,
    "export_consignee_address": null,
    "export_consignee_country": null,
    "export_reference": null,
    "export_electronic_tax_document": null,
    "export_declaration": null
  },
  "items": [
    {
      "id": 5,
      "zid": 6,
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
      "item_category_id": 7,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "1 Hora de configurar impresora",
      "reorder_point": null,
      "economic_order_quantity": null,
      "months_warranty": null,
      "entity_id": 2,
      "updater_id": 1,
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
      "extra_description": null,
      "tags": [],
      "item_category": {
        "id": 7,
        "name": "Soporte",
        "notes": "",
        "updater_id": 8,
        "entity_id": 2,
        "created_at": "2014-05-12T17:11:01.316Z",
        "updated_at": "2014-05-12T17:11:01.316Z",
        "items_count": 6,
        "bundles_count": 0,
        "item_super_category_id": null,
        "color": "#ff0000",
        "image": {
          "url": null,
          "thumbnail_fill": {
            "url": null
          }
        },
        "zid": 3
      }
    }
  ],
  "bundles": [
    {
      "id": 11,
      "active": true,
      "code": "base",
      "ean13": "",
      "name": "Modulo Base",
      "description": "",
      "entity_id": 2,
      "updater_id": 8,
      "created_at": "2014-11-05T22:58:16.287Z",
      "updated_at": "2014-11-05T22:58:16.287Z",
      "bundle_details_count": 4,
      "pays_vat": true,
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": 12,
      "quotable": true,
      "ecommerce": false,
      "sellable": true,
      "weight": null,
      "volume": null,
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
      "color": "#CCCCCC",
      "zid": 2,
      "measurement_unit": null,
      "purchasable": false,
      "force_as_service_for_document_external_storage_service": false,
      "category_bundle": false,
      "item_country_code_id": null,
      "youtube_video_url": null,
      "gemma_q4f16_embedding": "[-0.09899902]",
      "extra_description": null,
      "item_category": {
        "id": 12,
        "name": "cuotas mensuales",
        "notes": "super categoría",
        "updater_id": 1,
        "entity_id": 2,
        "created_at": "2010-04-14T05:28:45.000Z",
        "updated_at": "2020-06-10T21:10:07.675Z",
        "items_count": 113,
        "bundles_count": 1,
        "item_super_category_id": null,
        "color": "#ff0000",
        "image": {
          "url": null,
          "thumbnail_fill": {
            "url": null
          }
        },
        "zid": 1
      }
    }
  ],
  "item_stocks": {
    "344504": null
  },
  "bundle_stocks": {
    "2655": null
  },
  "item_prices": {
    "344504": 3050.0
  },
  "bundle_prices": {
    "2655": "229.0"
  }
}
```

### Listar ordenes de venta (datatables)

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
  https://app.zauru.com/pos/sale_orders/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 1,
  "recordsFiltered": 1,
  "data": [
    {
      "z": "<a href=\"/pos/sale_orders/16403492\">17297</a>",
      "i": "",
      "ref": "",
      "crea": "06 de ago a las 04:14 hrs",
      "tag": "",
      "cli": "LUIS CASTILLO",
      "itms": 1,
      "tot": "0.00",
      "due": "0.00",
      "r": "<a title=\"Detalles\" href=\"/pos/sale_orders/16403492\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/pos/sale_orders/16403492/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Anular\" data-confirm=\"¿Está seguro de destruirlo?\" href=\"/pos/sale_orders/16403492/void?destroy=true\"><i class=\"fa fa-trash-o\"></i></a>",
      "r2": "<a title=\"Emitir Factura Rápido\" href=\"/pos/invoices/1/issue_fast\"><i class=\"fa fa-bolt\"></i></a><a title=\"Emitir Factura\" href=\"/pos/invoices/1/edit\"><i class=\"fa fa-certificate\"></i></a>",
      "DT_RowId": "pos-order-16403492"
    }
  ]
}
```

### Ver orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "prueba editada",
  "date": "2026-08-06",
  "subtotal": "750.0",
  "discount_id": null,
  "extra_discount": "0.0",
  "total": "750.0",
  "due": "686.0",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": null,
  "seller_id": 1,
  "creator_id": 2,
  "updater_id": 3,
  "taxable": true,
  "issuer_id": 2,
  "issued": true,
  "issued_at": "2010-05-31T18:39:45.000Z",
  "paid": false,
  "paid_at": null,
  "voider_id": 3,
  "voided": true,
  "voided_at": "2026-08-06T04:14:21.145Z",
  "entity_id": 2,
  "memo": "editado desde el API",
  "order_image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "invoice_image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "payee_id": 4,
  "payment_expected_at": "2026-08-06",
  "agency_id": 5,
  "payment_term_id": 6,
  "created_at": "2024-01-15T06:39:00.000Z",
  "updated_at": "2026-08-06T04:17:23.356Z",
  "invoice_details_count": 1,
  "shipper_id": 1,
  "pos": true,
  "order_pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "contract_id": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "crm_url": null,
  "zid_by_agency_and_creator": 1,
  "not_included_vat": null,
  "exchange_rate": 1.0,
  "excempt": false,
  "currency_id": 1,
  "resolution": null,
  "resolution_date": null,
  "authorized_serial": null,
  "foreign": false,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "uuid": "26627e02-55af-4621-a359-77978aec0ad5",
  "id_number": null,
  "great_contributor": null,
  "sales_consolidate_id": null,
  "email": null,
  "resolution_notes": null,
  "client_identification_type_when_issuing_invoices": 0,
  "export": false,
  "export_references": null,
  "sv_ccf": false,
  "contingency": 0,
  "withheld_vat": null,
  "withheld_income_tax": null,
  "contingency_number": null,
  "cr_ticket": false,
  "mail_resent_at": "2026-08-06T04:13:55.700Z",
  "donation": false,
  "gift_card_1_id": null,
  "gift_card_1_id_number": null,
  "gift_card_1_discount": "0.0",
  "gift_card_2_id": null,
  "gift_card_2_id_number": null,
  "gift_card_2_discount": "0.0",
  "export_consignee_name": null,
  "export_consignee_address": null,
  "export_consignee_country": null,
  "export_reference": null,
  "export_electronic_tax_document": null,
  "export_declaration": null,
  "payee": {
    "id": 4,
    "zid": 7,
    "id_number": "",
    "active": false,
    "name": "Cliente Ejemplo, S.A.",
    "vendor": false,
    "buyer": true,
    "tin": "1234567-K",
    "reference": "",
    "address_line_1": "Ciudad",
    "address_line_2": "",
    "delivery_address": "utatlán 2",
    "currency_id": 1,
    "credit_limit": "1000.0",
    "payee_category_id": null,
    "web": "",
    "phone": "5555-0004",
    "email": "contacto@ejemplo.com",
    "contact": "Juan Carlos Paz (4391-3001)",
    "contact_phone": "",
    "contact_email": "",
    "contact2": "",
    "contact2_phone": "",
    "contact2_email": "",
    "notes": "",
    "entity_id": 2,
    "updater_id": 8,
    "created_at": "2010-05-27T17:26:03.000Z",
    "updated_at": "2024-03-19T00:40:38.280Z",
    "employee_id": null,
    "service_provider": true,
    "invoices_in_credit_limit": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "image": {
      "url": null,
      "standard": {
        "url": null
      },
      "thumbnail": {
        "url": null
      },
      "pos": {
        "url": null
      }
    },
    "excempt": false,
    "small_taxpayer": false,
    "foreign": false,
    "latitude": null,
    "longitude": null,
    "great_contributor": null,
    "tax_withholding_agent": false,
    "subject_to_withholding_taxes": false,
    "personal_identification_number": "",
    "client_for_export": false,
    "payee_activity_id": null,
    "city_id": null,
    "taxpayer_registry": null,
    "district_id": null,
    "default_payment_term_id": null,
    "country_id": 9
  },
  "invoice_details": [
    {
      "id": 1,
      "bundle_id": null,
      "item_id": 10,
      "serial_id": null,
      "reference": "",
      "unit_price": "250.0",
      "unit_exchange_price": null,
      "quantity": "2.0",
      "price": "750.0",
      "invoice_id": 1,
      "created_at": "2010-05-31T18:39:45.000Z",
      "updated_at": "2026-08-06T04:14:25.611Z",
      "item_bundle_name": "servicio hosting",
      "item_bundle_description": "Servicio de hosting y mantenimiento de página web y correos electrónicos.",
      "lot_id": null,
      "discount_id": null,
      "extra_tax_1": "0.0",
      "extra_tax_2": "0.0",
      "average_cost": "0.0",
      "tag_id": null,
      "dynamic_bundle_id": null,
      "entity_id": 2,
      "gift_card_id": null,
      "gift_card_type_id": null,
      "item": {
        "zid": 11,
        "code": "O5",
        "ean13": null,
        "name": "servicio hosting",
        "item_category_id": null
      }
    }
  ],
  "entries": [
    {
      "id": 12,
      "zid": 13,
      "printable": false,
      "invoice": "",
      "id_number": null,
      "reference": "",
      "date": "2010-02-08",
      "income": true,
      "memo": "create invoice",
      "image": {
        "url": null,
        "standard": {
          "url": null
        }
      },
      "verified": false,
      "audited": false,
      "payee_id": 4,
      "entity_id": 2,
      "reconciliation_id": null,
      "updater_id": 2,
      "account_id": 14,
      "amount": "750.0",
      "created_at": "2010-05-31T18:39:45.000Z",
      "updated_at": "2010-05-31T18:39:45.000Z",
      "splits_count": 1,
      "invoice_date": null,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "contract_id": null,
      "verified_at": null,
      "audited_at": null,
      "conciliation_id": null,
      "split_conciliation_id": null,
      "endorsement_restriction": false,
      "exempt": false,
      "small_taxpayer": false,
      "external_image_url": null,
      "reception_id": null,
      "inventory_audit_id": null,
      "source_doc_type_id": 1,
      "monthly_entry_source_doc_type_id": null,
      "cost_center_id": null,
      "account": {
        "code": "",
        "name": "ventas viejas",
        "currency_id": 1
      },
      "splits": [
        {
          "id": 12,
          "entry_id": 12,
          "amount": "750.0",
          "account_id": 7,
          "exchange_amount": null,
          "created_at": "2010-05-31T18:39:45.000Z",
          "updated_at": "2010-05-31T18:39:45.000Z",
          "reference": null,
          "verified": false,
          "verified_at": null,
          "audited": false,
          "audited_at": null,
          "cost_center_id": null,
          "entity_id": 2,
          "account": {
            "code": "",
            "name": "cuentas por cobrar clientes extranjeros",
            "currency_id": 1
          }
        }
      ]
    }
  ],
  "payment_details": [
    {
      "id": 1,
      "invoice_id": 1,
      "payment_id": 1,
      "amount": "250.0",
      "created_at": "2010-05-31T18:42:58.000Z",
      "updated_at": "2010-05-31T18:42:58.000Z",
      "reference": null,
      "credit_note_id": null,
      "entity_id": 2,
      "contract_id": null,
      "contract_recurrence": 0,
      "payment": {
        "zid": 1,
        "reference": "referencia actualizada",
        "date": "2024-01-15",
        "agency_id": 5,
        "amount": "250.0"
      }
    }
  ],
  "submissions": []
}
```

### Crear orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "reference": "prueba",
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
  https://app.zauru.com/pos/sale_orders.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Editar orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/1/edit.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "prueba editada",
  "date": "2026-08-06",
  "subtotal": "750.0",
  "discount_id": null,
  "extra_discount": "0.0",
  "total": "750.0",
  "due": "686.0",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": null,
  "seller_id": 1,
  "creator_id": 2,
  "updater_id": 3,
  "taxable": true,
  "issuer_id": 2,
  "issued": true,
  "issued_at": "2010-05-31T18:39:45.000Z",
  "paid": false,
  "paid_at": null,
  "voider_id": 3,
  "voided": true,
  "voided_at": "2026-08-06T04:14:21.145Z",
  "entity_id": 2,
  "memo": "editado desde el API",
  "order_image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "invoice_image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "payee_id": 4,
  "payment_expected_at": "2026-08-06",
  "agency_id": 5,
  "payment_term_id": 6,
  "created_at": "2024-01-15T06:39:00.000Z",
  "updated_at": "2026-08-06T04:17:08.645Z",
  "invoice_details_count": 1,
  "shipper_id": 1,
  "pos": true,
  "order_pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "contract_id": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "crm_url": null,
  "zid_by_agency_and_creator": 1,
  "not_included_vat": null,
  "exchange_rate": 1.0,
  "excempt": false,
  "currency_id": 1,
  "resolution": null,
  "resolution_date": null,
  "authorized_serial": null,
  "foreign": false,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "uuid": "6139c00a-8d07-4408-b180-a9f22061630c",
  "id_number": null,
  "great_contributor": null,
  "sales_consolidate_id": null,
  "email": "contacto@ejemplo.com",
  "resolution_notes": null,
  "client_identification_type_when_issuing_invoices": 0,
  "export": false,
  "export_references": null,
  "sv_ccf": false,
  "contingency": 0,
  "withheld_vat": null,
  "withheld_income_tax": null,
  "contingency_number": null,
  "cr_ticket": false,
  "mail_resent_at": "2026-08-06T04:13:55.700Z",
  "donation": false,
  "gift_card_1_id": null,
  "gift_card_1_id_number": null,
  "gift_card_1_discount": "0.0",
  "gift_card_2_id": null,
  "gift_card_2_id_number": null,
  "gift_card_2_discount": "0.0",
  "export_consignee_name": null,
  "export_consignee_address": null,
  "export_consignee_country": null,
  "export_reference": null,
  "export_electronic_tax_document": null,
  "export_declaration": null
}
```

### Actualizar orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "invoice": {
      "reference": "prueba editada",
      "invoice_details_attributes": {
        "0": {
          "id": "1",
          "quantity": "2"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/sale_orders/1.json
  ```

Devuelve la orden actualizada, con el mismo JSON de "Editar orden de venta".

### Anular orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/1/void.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Eliminar orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/sale_orders/1.json
  ```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener categorías, items, paquetes, precios, existencias e imágenes

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/get_categories_items_bundles_prices_stocks_images.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "items": [
    {
      "id": 1,
      "zid": 2,
      "active": true,
      "stockable": false,
      "code": "S31",
      "ean13": "",
      "name": "1 hora de Configurar Impresoras",
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": 3,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "1 Hora de configurar impresora",
      "updated_at": "2018-05-15T14:35:24.650Z",
      "pays_vat": true,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "product_type": 1,
      "payee_id": null,
      "extra_tax_1": 0.0,
      "extra_tax_2": 0.0,
      "stocks_only_integer": true,
      "brand_id": null,
      "color": "#cccccc",
      "item_country_code_id": null,
      "youtube_video_url": null,
      "inventory_account_id": null,
      "master_item_id": null,
      "gemma_q4f16_embedding": "[-0.09899902]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": []
    }
  ],
  "item_categories_count": {
    "12": 105
  },
  "bundles": [
    {
      "id": 6,
      "active": true,
      "code": "base",
      "ean13": "",
      "name": "Modulo Base",
      "description": "",
      "updated_at": "2014-11-05T22:58:16.287Z",
      "bundle_details_count": 4,
      "pays_vat": true,
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": 7,
      "weight": null,
      "volume": null,
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
      "color": "#CCCCCC",
      "zid": 2,
      "measurement_unit": null,
      "purchasable": false,
      "force_as_service_for_document_external_storage_service": false,
      "category_bundle": false,
      "item_country_code_id": null,
      "youtube_video_url": null,
      "gemma_q4f16_embedding": "[-0.09899902]",
      "extra_description": null,
      "tags": []
    }
  ],
  "bundle_categories_count": {
    "12": 1
  },
  "categories": [
    {
      "id": 9,
      "name": "cuotas distribuidor",
      "notes": "super categoría",
      "updated_at": "2020-06-10T21:09:56.741Z",
      "items_count": 13,
      "bundles_count": 1,
      "item_super_category_id": null,
      "color": "#ff0000",
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "zid": 2
    }
  ],
  "super_categories": [],
  "item_super_categories_count": {
    "": 6
  },
  "gift_card_items_with_stock": {},
  "gift_card_types": [],
  "gift_card_types_count": 0,
  "gift_card_prices": {},
  "gift_card_stocks": {},
  "gift_card_flexible_prices": {},
  "count_all": 159,
  "item_stocks": {
    "344504": null
  },
  "bundle_stocks": {
    "2655": null
  },
  "item_prices": {
    "344504": 3050.0
  },
  "bundle_prices": {
    "2655": "229.0"
  },
  "flexible_items_prices": {
    "344504": true
  },
  "flexible_bundles_prices": {
    "2655": true
  },
  "brands_count": {
    "": 157
  },
  "brands": [],
  "brands_categories": {
    "": [
      12
    ]
  },
  "show_items_image": false,
  "double_width_button": false
}
```
