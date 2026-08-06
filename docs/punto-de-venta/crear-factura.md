---
title: "Crear factura"
sidebar_label: "Crear factura"
sidebar_position: 3
---

Este tutorial esta enfocado en la creación de facturas desde el punto de venta.

Los pasos para crear una nueva factura son los siguientes:

1. Ir a “Punto de Venta”.
2. Seleccionar “Nueva Factura”.

Le aparecerán las opciones para crear una nueva factura, cada vez que un usuario cree una nueva factura, el podrá seleccionar únicamente los productos de la bodega que tenga asignada, o de la bodega que usted haya predeterminado en las configuraciones del punto de venta.

Las campos que se pueden colocar en la factura son:

a. Coloque una breve referencia para encontrar fácilmente la factura.

b. Coloque el nombre del Cliente existente al que se le va facturar o agregue uno nuevo.

c. Coloque el vendedor.

d. Coloque el termino de pago que se le dará al cliente.

e. Aquí puede colocar el proyecto asociado a la factura

f. Aquí podrá escanear los códigos de barra de los productos o colocar manualmente el código para que se agreguen a la factura.

![imagen1](/img/punto-de-venta/crear-factura-1.jpg)

Ahora agregue los productos o servicios que se le van a facturar al cliente y la cantidad. Aun podrá agregar un descuento sobre la facturar o especificar si desea que registre impuestos o que no registre impuestos y sea solo un recibo. Luego presione Imprimir para emitir la factura.

![imagen2](/img/punto-de-venta/crear-factura-2.jpg)

Le aparecerá la plantilla de impresión de facturas y usted podrá imprimir la factura presionando CRTL+P. Los campos que salen a la derecha tienen la siguiente función:

a. Presione para dirigirse al listado de todas las facturas no pagadas.

b. Presione para crear una nueva factura.

c. Presione para ver los detalles de la factura creada.

d. Presione para cobrar la factura.

![imagen3](/img/punto-de-venta/crear-factura-3.jpg)

## Listado de facturas

Para ver todas las facturas emitidas y no pagadas desde el punto de venta:

1. Ir a "P.D.V."
2. Seleccionar "Facturas".

Le aparecera un listado con todas las facturas que cumplen las siguientes condiciones:
- Estan emitidas (no son borradores)
- No estan pagadas
- No estan anuladas
- Pertenecen a la agencia del usuario

Puede filtrar por:

a. **Vendedor**: Seleccione un vendedor especifico o vea todas las facturas.

b. **Etiquetas (Tags)**: Filtre las facturas por etiquetas asignadas.

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una factura para ver sus productos, pagos, transacciones contables y otros detalles.

b. **Cobrar**: Registre un pago para la factura. Vea el tutorial "Cobrar una factura o una orden de venta".

c. **Imprimir**: Imprima la factura utilizando las plantillas de impresion configuradas.

d. **Anular**: Anule la factura si fue emitida por error.

e. **Re-emitir (Editar)**: Si la factura aun no ha sido emitida (esta en estado de orden), puede editarla. Vea la seccion "Editar factura".

## Editar y re-emitir una factura

Si necesita modificar una factura que aun no ha sido emitida:

1. En el listado de facturas, localice la factura en estado "orden" (no emitida).
2. Seleccione el icono de "Editar".
3. Modifique los productos, cantidades, precios o datos generales.
4. Presione "Guardar". La factura se re-emitira con los cambios.

**Nota**: Las facturas ya emitidas no pueden ser editadas. Debe anularlas y crear una nueva.

## Emision rapida de factura

Si tiene una orden de venta que desea convertir rapidamente en factura:

1. Desde el detalle de la orden de venta, presione "Emitir factura".
2. La orden se convertira en factura inmediatamente, manteniendo los mismos productos, cantidades y precios.

## Anular una factura

Para anular una factura:

1. En el listado de facturas, localice la factura a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

La factura sera anulada y los productos reservados seran devueltos al inventario (si la factura fue creada desde una orden de venta).

## Editar datos superficiales de factura

Para modificar datos superficiales de una factura sin alterar sus productos ni montos:

1. En el detalle de la factura, seleccione "Editar datos".
2. Podra modificar: numero de factura, referencia, fecha, vendedor, memo y etiquetas.
3. Tambien podra adjuntar una imagen a la factura.
4. Presione "Guardar".

## API (llamadas desde sistemas externos)

### Crear factura asociada a usuario (vendedor)

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
          "unit_price": "650",
          "reference": ""
        }
      }
    }
  }' \
  https://app.zauru.com/pos/invoices.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "16039402",
  "zid": "61",
  "order_number": "6055",
  "invoice_number": null,
  "reference": "BDSE CLOSET D21",
  "date": "2026-05-25",
  "subtotal": "16500.00",
  "discount_id": null,
  "extra_discount": "0.00",
  "total": "16500.00",
  "due": "16500.00",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": null,
  "seller_id": "30143",
  "creator_id": "1274",
  "updater_id": "1274",
  "taxable": true,
  "issuer_id": null,
  "issued": false,
  "issued_at": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "1303",
  "memo": null,
  "order_image": null,
  "invoice_image": null,
  "payee_id": "2040145",
  "payment_expected_at": "2026-05-25",
  "agency_id": "8246",
  "payment_term_id": "3300",
  "created_at": "2026-05-25 21:32:11.039149",
  "updated_at": "2026-05-30 14:11:02.903937",
  "invoice_details_count": "1",
  "shipper_id": null,
  "pos": false,
  "order_pdf": null,
  "contract_id": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "crm_url": null,
  "zid_by_agency_and_creator": "0",
  "not_included_vat": null,
  "exchange_rate": "1",
  "excempt": false,
  "currency_id": "1",
  "resolution": null,
  "resolution_date": null,
  "authorized_serial": null,
  "foreign": false,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "uuid": "85e53233-b426-4bb0-bcc1-17052e5733fc",
  "id_number": null,
  "great_contributor": false,
  "sales_consolidate_id": null,
  "email": null,
  "resolution_notes": null,
  "client_identification_type_when_issuing_invoices": "0",
  "export": false,
  "export_references": null,
  "sv_ccf": false,
  "contingency": "0",
  "withheld_vat": null,
  "withheld_income_tax": null,
  "contingency_number": null,
  "cr_ticket": false,
  "mail_resent_at": null,
  "donation": false,
  "gift_card_1_id": null,
  "gift_card_1_id_number": null,
  "gift_card_1_discount": "0.00",
  "gift_card_2_id": null,
  "gift_card_2_id_number": null,
  "gift_card_2_discount": "0.00",
  "export_consignee_name": null,
  "export_consignee_address": null,
  "export_consignee_country": null,
  "export_reference": null,
  "export_electronic_tax_document": null,
  "export_declaration": null
}
```

### Listar facturas (datatables)

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
  https://app.zauru.com/pos/invoices/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 0,
  "recordsFiltered": 0,
  "data": []
}
```

### Ver factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/invoices/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "Referencia actualizada",
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
  "memo": "Nota actualizada desde API",
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
  "updated_at": "2026-08-06T04:17:01.882Z",
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
  "uuid": "27842d0a-60ec-46e4-b61b-b0853fa2dff1",
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
    },
    {
      "id": 15,
      "zid": 16,
      "printable": false,
      "invoice": "",
      "id_number": null,
      "reference": "",
      "date": "2010-02-08",
      "income": null,
      "memo": "create payment",
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
      "account_id": 7,
      "amount": "250.0",
      "created_at": "2010-05-31T18:42:58.000Z",
      "updated_at": "2010-12-03T18:58:00.000Z",
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
      "source_doc_type_id": 17,
      "monthly_entry_source_doc_type_id": null,
      "cost_center_id": null,
      "account": {
        "code": "",
        "name": "cuentas por cobrar clientes extranjeros",
        "currency_id": 1
      },
      "splits": [
        {
          "id": 15,
          "entry_id": 15,
          "amount": "250.0",
          "account_id": 18,
          "exchange_amount": null,
          "created_at": "2010-05-31T18:42:58.000Z",
          "updated_at": "2010-05-31T18:42:58.000Z",
          "reference": null,
          "verified": false,
          "verified_at": null,
          "audited": false,
          "audited_at": null,
          "cost_center_id": null,
          "entity_id": 2,
          "account": {
            "code": "",
            "name": "efectivo",
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
    },
    {
      "id": 2,
      "invoice_id": 1,
      "payment_id": 2,
      "amount": "250.0",
      "created_at": "2010-05-31T18:44:34.000Z",
      "updated_at": "2010-05-31T18:44:34.000Z",
      "reference": null,
      "credit_note_id": null,
      "entity_id": 2,
      "contract_id": null,
      "contract_recurrence": 0,
      "payment": {
        "zid": 2,
        "reference": "",
        "date": "2010-03-23",
        "agency_id": 5,
        "amount": "250.0"
      }
    }
  ],
  "submissions": []
}
```

### Nueva factura (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/invoices/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "invoice": {
    "id": null,
    "zid": null,
    "order_number": null,
    "invoice_number": "FEL",
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
    "id_number": "",
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
  "items": [],
  "bundles": [],
  "gift_card_items_with_stock": {},
  "gift_card_types": [],
  "gift_card_types_count": 0,
  "item_stocks": {},
  "bundle_stocks": {},
  "item_prices": {},
  "bundle_prices": {},
  "categories": []
}
```

### Actualizar factura

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
  https://app.zauru.com/pos/invoices/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "error": "No Editable"
}
```

### Emisión rápida de factura (convertir orden en factura)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/invoices/1/issue_fast.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "Referencia actualizada",
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
  "memo": "Nota actualizada desde API",
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
  "updated_at": "2026-08-06T04:17:08.089Z",
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
  "invoice_details": [
    {
      "id": 1,
      "bundle_id": null,
      "item_id": 7,
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
      "gift_card_type_id": null
    }
  ]
}
```

### Ver datos superficiales de factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/invoices/1/shallow_edit.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "Referencia actualizada",
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
  "memo": "Nota actualizada desde API",
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
  "updated_at": "2026-08-06T04:17:08.089Z",
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
  "export_declaration": null
}
```

### Actualizar datos superficiales de factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "invoice": {
      "reference": "prueba editada",
      "memo": "editado desde el API"
    }
  }' \
  https://app.zauru.com/pos/invoices/1/shallow_update.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "16039402",
  "zid": "61",
  "order_number": "6055",
  "invoice_number": null,
  "reference": "BDSE CLOSET D21",
  "date": "2026-05-25",
  "subtotal": "16500.00",
  "discount_id": null,
  "extra_discount": "0.00",
  "total": "16500.00",
  "due": "16500.00",
  "needs_delivery": false,
  "delivery_date": null,
  "delivery_address": null,
  "seller_id": "30143",
  "creator_id": "1274",
  "updater_id": "1274",
  "taxable": true,
  "issuer_id": null,
  "issued": false,
  "issued_at": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "1303",
  "memo": null,
  "order_image": null,
  "invoice_image": null,
  "payee_id": "2040145",
  "payment_expected_at": "2026-05-25",
  "agency_id": "8246",
  "payment_term_id": "3300",
  "created_at": "2026-05-25 21:32:11.039149",
  "updated_at": "2026-05-30 14:11:02.903937",
  "invoice_details_count": "1",
  "shipper_id": null,
  "pos": false,
  "order_pdf": null,
  "contract_id": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "crm_url": null,
  "zid_by_agency_and_creator": "0",
  "not_included_vat": null,
  "exchange_rate": "1",
  "excempt": false,
  "currency_id": "1",
  "resolution": null,
  "resolution_date": null,
  "authorized_serial": null,
  "foreign": false,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "uuid": "85e53233-b426-4bb0-bcc1-17052e5733fc",
  "id_number": null,
  "great_contributor": false,
  "sales_consolidate_id": null,
  "email": null,
  "resolution_notes": null,
  "client_identification_type_when_issuing_invoices": "0",
  "export": false,
  "export_references": null,
  "sv_ccf": false,
  "contingency": "0",
  "withheld_vat": null,
  "withheld_income_tax": null,
  "contingency_number": null,
  "cr_ticket": false,
  "mail_resent_at": null,
  "donation": false,
  "gift_card_1_id": null,
  "gift_card_1_id_number": null,
  "gift_card_1_discount": "0.00",
  "gift_card_2_id": null,
  "gift_card_2_id_number": null,
  "gift_card_2_discount": "0.00",
  "export_consignee_name": null,
  "export_consignee_address": null,
  "export_consignee_country": null,
  "export_reference": null,
  "export_electronic_tax_document": null,
  "export_declaration": null
}
```

### Anular factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/invoices/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Anular factura sin pagos asociados

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/invoices/1/no_payments_void.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener categorías, items, paquetes, precios, existencias e imágenes

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/invoices/get_categories_items_bundles_prices_stocks_images.json
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
      "gemma_q4f16_embedding": "[-0.09899902,-0.023330688,0.027008057,-0.018936157,-0.0013713837,-0.022872925,-0.060180664,0.020004272,0.04626465,-0.02243042,-0.00945282,-0.020706177,0.044311523,-0.070495605,0.03048706,0.024734497,0.041748047,0.07678223,-0.016235352,-0.042236328,-0.0015420914,0.0084991455,-0.03475952,-0.0022144318,0.03289795,0.06561279,0.037139893,0.010276794,0.013748169,-0.036895752,-0.02180481,0.039886475,0.044769287,-0.0048446655,0.014480591,0.043395996,0.005973816,-0.040924072,0.062927246,-0.052825928,0.006603241,0.10058594,-0.061553955,-0.010040283,-0.010116577,0.0152282715,0.027786255,0.026779175,0.08087158,0.012435913,-0.009170532,0.052581787,-0.026138306,0.0390625,-0.0259552,0.00881958,0.0008955002,-0.09588623,-0.028182983,-0.0049362183,0.0047187805,0.0068893433,-0.07940674,0.0056877136,0.040924072,0.039215088,0.06726074,0.009101868,-0.01789856,0.109069824,0.025924683,-0.028305054,-0.015655518,0.0037117004,0.12426758,0.13256836,-0.0012388229,-0.00308609,-0.0067253113,-0.0692749,0.030899048,-0.0044288635,-0.031311035,0.009338379,0.070129395,0.044036865,-0.0011110306,0.07733154,0.008049011,-0.020553589,-0.012992859,-0.014152527,-0.030517578,0.0362854,-0.022918701,-0.05947876,-0.06616211,-0.0047836304,0.04031372,0.008987427,0.04711914,-0.026306152,-0.04272461,-0.026000977,-0.017684937,0.005657196,-0.04888916,-0.038238525,-0.014205933,0.044952393,-0.031555176,-0.026763916,0.039123535,0.016159058,-0.024337769,-0.04449463,-0.0021343231,0.0031700134,-0.055236816,0.022506714,0.041778564,0.0066375732,-0.004737854,-0.049835205,-0.045135498,-0.007896423,-0.036834717,-0.016403198,-0.032043457,0.0018796921,0.019256592,0.00086927414,-0.011779785,-0.006149292,-0.0390625,0.053741455,0.055999756,0.024505615,0.033416748,0.021224976,-0.05718994,0.005138397,-0.007663727,0.010482788,-0.010597229,0.04296875,0.042877197,0.0055389404,-0.0005068779,0.0059814453,0.0284729,0.074279785,-0.0027923584,-0.026947021,0.044311523,-0.025436401,0.012451172,0.030014038,-0.00010627508,0.016326904,-0.0546875,0.0049438477,0.029876709,0.05038452,0.041809082,0.060546875,-0.008911133,0.04397583,-0.05456543,-0.05090332,-0.0067825317,-0.038116455,0.02470398,-0.0026474,-0.05697632,-0.027694702,-0.006225586,0.039886475,-0.07635498,0.02168274,0.05947876,0.10626221,-0.0054473877,-0.021972656,-0.08618164,0.013313293,-0.070495605,-0.029434204,0.004459381,-0.023971558,0.039215088,-0.0010910034,0.05026245,-0.04437256,0.0015497208,-0.041778564,0.006801605,0.0017318726,-0.046051025,0.037139893,0.0013275146,0.04537964,0.027297974,-0.004798889,-0.011886597,-0.023208618,0.007133484,0.00074863434,-0.0015544891,-0.078552246,-0.043426514,-0.013336182,-0.018920898,-0.021743774,0.036956787,0.015235901,0.007007599,-0.009208679,0.027160645,0.0051727295,0.04623413,-0.066223145,-0.0039711,-0.025222778,0.021896362,-0.003982544,-0.023376465,-0.097717285,0.00869751,-0.008277893,-0.005821228,0.0062713623,-0.022064209,0.038909912,-0.01940918,-0.016906738,-0.010696411,-0.0032920837,0.011428833,0.03189087,-0.024780273,0.011039734,-0.03778076,-0.010734558,-0.031707764,0.010047913,0.035369873,-0.06768799,-0.005622864,-0.0074539185,0.0014457703,-0.04385376,-0.0028800964,-0.057434082,0.0004427433,0.022018433,0.04522705,0.037841797,0.022094727,0.04623413,-0.04309082,-0.013679504,-0.008468628,0.030517578,-0.030944824,-0.014778137,-0.012062073,0.045196533,0.019958496,0.010101318,0.09918213,0.020339966,0.0063705444,-0.005657196,0.012367249,-0.04119873,0.0107040405,0.017410278,-0.050567627,-0.019363403,0.02053833,-0.0068740845,0.07269287,0.009399414,0.019134521,0.04208374,0.00969696,-0.014183044,-0.03744507,-0.024734497,-0.044036865,0.024505615,0.024780273,-0.020584106,-0.027374268,0.006866455,-0.017990112,-0.028793335,-0.00137043,0.021743774,0.029525757,-0.019622803,0.022491455,0.0070991516,0.021514893,-0.042175293,0.03338623,0.013290405,-0.097717285,-0.024383545,0.015960693,-0.01890564,-0.056854248,-0.03540039,-0.027053833,0.049865723,0.047332764,0.006614685,-0.02319336,-0.055419922,-0.056365967,-0.05419922,0.05819702,0.031829834,-0.008483887,0.040222168,0.030044556,0.007575989,-0.10058594,0.000289917,-0.018173218,0.049316406,0.015068054,0.036224365,0.015991211,0.049621582,0.04534912,-0.06903076,-0.016799927,-0.015472412,-0.0231781,0.02545166,0.04800415,-0.053710938,0.0048980713,0.020233154,0.036071777,-0.011314392,-0.07336426,-0.05178833,-0.03842163,-0.023834229,-0.01096344,-0.011177063,-0.0035972595,-0.017623901,-0.0065574646,0.034301758,0.0234375,-0.016967773,0.026809692,0.033569336,0.0113220215,-0.017166138,0.026016235,0.0004069805,-0.015045166,0.0016918182,0.03237915,0.029785156,0.055267334,-0.05001831,0.06124878,-0.0077438354,0.008834839,0.00069093704,-0.01071167,0.028762817,0.017318726,-0.0385437,-0.0023479462,-0.039733887,0.0042152405,0.00014770031,0.04156494,-0.013999939,0.0075416565,0.0025959015,-0.02720642,0.018218994,-0.028030396,-0.00957489,-0.035186768,-0.014144897,0.042297363,-0.036346436,0.044311523,-0.0014390945,-0.024337769,-0.0423584,0.01763916,-0.023361206,-0.025375366,-0.0036773682,0.04208374,-0.08239746,0.014251709,0.015197754,0.012832642,-0.0019102097,0.031036377,-0.045806885,-0.00028944016,-0.015960693,0.05923462,-0.034454346,0.010124207,-0.011444092,0.0037670135,-0.008666992,-0.009002686,0.052368164,-0.00737381,-0.010879517,0.021865845,-0.043701172,0.029296875,-0.02130127,-0.0013408661,-0.06549072,0.027374268,-0.0059776306,-0.07171631,-0.0012617111,0.0579834,-0.0057411194,-0.018844604,-0.0053977966,0.04525757,0.03414917,-0.0054130554,-0.0063285828,-0.01828003,-0.040985107,-0.018325806,-0.020141602,-0.02305603,0.031707764,-0.06329346,-0.036071777,-0.029510498,0.036712646,-0.012550354,-0.04437256,-0.022735596,-0.042755127,0.024246216,0.03213501,-0.036956787,-0.0010375977,-0.07104492,-0.08154297,-0.033691406,-0.01689148,0.021728516,0.06549072,0.0022335052,0.029464722,-0.08892822,0.007320404,-0.04473877,-0.0340271,-0.080078125,0.021575928,-0.0015325546,0.057006836,0.012817383,0.03930664,0.0077934265,-0.035736084,-0.004901886,-0.07330322,0.008270264,-0.04107666,0.033996582,-0.04473877,0.017211914,-0.01676941,-0.026428223,-0.030929565,-0.0075645447,-0.051757812,-0.00070619583,0.07531738,0.016204834,0.07885742,-0.010978699,-0.0044441223,-0.011505127,0.0049095154,0.016693115,0.018051147,-0.017532349,0.029251099,0.08178711,-0.022262573,-0.023986816,0.053741455,-0.071899414,-0.020339966,-0.033050537,0.0181427,-0.024673462,0.03253174,-0.029891968,0.0058250427,-0.03010559,0.015403748,0.01727295,0.011413574,0.036224365,0.051574707,0.011764526,0.028213501,0.02822876,0.035186768,-0.027908325,-0.012054443,0.0132751465,-0.012237549,-0.07904053,0.051818848,-0.062561035,0.012214661,-0.032806396,0.017547607,-0.039031982,0.07232666,-0.005493164,0.017211914,0.053497314,0.011253357,0.033416748,-0.031829834,0.079956055,0.0047721863,-0.0105896,-0.03479004,0.014846802,0.03475952,-0.0023651123,-0.010551453,-0.014709473,-0.05529785,0.00018060207,0.0703125,-0.056030273,0.012374878,-0.043914795,0.015960693,0.044708252,-0.014457703,0.0011129379,-0.0047340393,0.03253174,0.028549194,0.012458801,-0.022232056,-0.05630493,0.031921387,-0.008956909,-0.015960693,0.08404541,-0.020431519,0.038848877,0.029296875,0.041168213,-0.01940918,-0.032073975,-0.06719971,-0.0026226044,-0.043304443,0.0008673668,0.037353516,0.042053223,0.04727173,-0.057922363,-0.012611389,0.07196045,-0.0063285828,-0.032318115,0.009605408,-0.045776367,0.051605225,-0.012145996,0.062561035,-0.016830444,0.040527344,0.0011844635,-0.004337311,0.062805176,-0.044677734,0.039154053,0.0635376,0.0039711,0.017578125,0.055236816,-0.040100098,-0.041137695,-0.017593384,-0.02758789,0.01638794,-0.027145386,-0.040649414,0.010658264,-0.020492554,0.059448242,0.020690918,0.022613525,-0.05508423,0.021194458,0.04434204,0.008560181,0.03338623,0.05215454,-0.0017232895,0.0017652512,-0.04168701,0.047332764,-7.748604e-07,0.037200928,0.027923584,0.001288414,0.053771973,0.047668457,-0.006893158,-0.04815674,0.042022705,0.016448975,0.005405426,0.035217285,-0.039764404,-0.004306793,0.05758667,-0.06329346,-0.010192871,-0.03817749,-0.0680542,0.030227661,0.064575195,-0.01751709,0.020690918,0.044006348,-0.062805176,0.037109375,-0.009857178,0.020614624,-0.013626099,0.014732361,-0.0016365051,-0.064575195,-0.013626099,-0.039367676,-0.002916336,-0.03491211,-0.005832672,0.008476257,0.017944336,-0.037231445,-0.006801605,-0.015335083,-0.012893677,0.021774292,-0.0044555664,-0.017288208,-0.008964539,0.035186768,-0.042236328,0.045684814,0.016143799,-0.02142334,-0.06137085,0.030288696,0.037841797,0.05444336,0.0073509216,-0.012939453,-0.042663574,-0.008010864,-0.061676025,0.037384033,-0.018798828,0.037322998,0.035614014,0.01285553,0.021011353,0.012298584,-0.05227661,-0.0002040863,-0.018569946,0.0033416748,-0.031677246,0.006046295,-0.00548172,-0.0015277863,-0.02293396,-0.01914978,-0.023925781,0.02406311,-0.03479004,-0.01335144,-0.019241333,-0.015357971,-0.01411438,-0.00094795227,0.011741638,0.022094727,0.0003681183,-0.017959595,-0.044128418,0.0058784485,0.034973145,0.024749756,0.0031089783,0.030899048,0.010688782,-0.027191162,0.025863647,-0.03692627,-0.009429932,0.06335449,-0.018112183,-0.050109863,-0.02406311,0.008056641,0.053131104,0.031707764,0.009475708,0.008544922,-0.042388916,-0.017044067,-0.006542206,0.03125,-0.06677246,0.011238098,-0.053894043,-0.06695557,0.07513428,-0.00894165,0.018569946,0.038848877,0.05618286,0.0017957687,0.0021896362,0.0154953,-0.037902832,-0.078430176,0.010238647,-0.008956909,0.0069732666,-0.014373779,-0.034301758,-0.014518738,-0.038330078,0.0019416809,-0.012191772,0.044433594,-0.010063171]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": []
    },
    {
      "id": 4,
      "zid": 5,
      "active": true,
      "stockable": false,
      "code": "S32",
      "ean13": "",
      "name": "1 hora de Configurar Plantillas de Impresión",
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
      "description": "",
      "updated_at": "2014-05-12T17:14:44.674Z",
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
      "gemma_q4f16_embedding": "[-0.107788086,-0.012275696,0.02029419,-0.028381348,0.025512695,-0.028793335,-0.062164307,0.017440796,0.040161133,-0.024230957,0.012237549,-0.020492554,0.04260254,-0.06994629,0.03161621,0.01612854,0.022994995,0.07928467,0.0042533875,-0.021652222,-0.006465912,0.000890255,-0.044525146,0.015235901,0.0076560974,0.041381836,0.026229858,0.0033302307,-0.017044067,-0.016860962,-0.017944336,0.022918701,0.026992798,-0.005138397,-0.0030155182,0.045715332,0.0055503845,-0.041748047,0.064331055,-0.054626465,-0.009681702,0.06488037,-0.06652832,-0.018325806,-0.017959595,0.012710571,0.030960083,0.030319214,0.076171875,0.02456665,-0.0030956268,0.03729248,-0.032165527,0.055908203,-0.021881104,-0.009552002,-0.03475952,-0.08416748,-0.013496399,-0.016418457,0.019958496,0.02154541,-0.0925293,0.0104522705,0.019561768,0.0013895035,0.06323242,-0.005722046,-0.016799927,0.11016846,-0.012519836,-0.031829834,-0.035888672,-0.013832092,0.1026001,0.115234375,-0.00015759468,-0.007041931,0.003824234,-0.0713501,0.025405884,-0.011772156,-0.0524292,-0.028137207,0.09875488,0.034820557,-0.0036716461,0.1048584,0.019134521,-0.022842407,-0.030471802,-0.016845703,-0.025863647,0.023284912,-0.016174316,-0.035888672,-0.061553955,-0.033172607,0.054382324,0.01965332,0.039733887,-0.023208618,-0.029388428,-0.0048065186,-0.023071289,0.013313293,-0.03753662,-0.021713257,-0.023208618,0.029220581,-0.035125732,-0.021957397,0.04840088,0.023452759,-0.043914795,-0.044311523,-0.0039367676,-0.02557373,-0.05130005,0.023788452,0.070129395,0.0065612793,-0.003993988,-0.048858643,-0.03869629,-0.010345459,-0.023910522,-0.0055503845,-0.043945312,0.029449463,0.028884888,-0.010978699,-0.013801575,0.029571533,-0.043060303,0.05557251,0.031097412,0.039855957,0.028411865,0.017608643,-0.05319214,-0.005722046,-0.036590576,0.030349731,0.0060653687,0.058532715,0.026687622,0.02748108,0.0024433136,0.0027370453,0.04916382,0.06903076,-0.008911133,-0.018157959,0.04788208,-0.03994751,-0.008834839,0.026168823,-0.039031982,0.031829834,-0.052764893,0.046081543,0.032196045,0.03842163,0.048095703,0.04937744,0.018234253,0.066101074,-0.05038452,-0.05291748,-0.026397705,-0.04196167,0.01826477,-0.012542725,-0.07055664,-0.02571106,-0.007534027,0.009559631,-0.098083496,0.05682373,0.057739258,0.10491943,-0.022338867,-0.0011043549,-0.08685303,0.025985718,-0.041534424,-0.025115967,0.013069153,0.0039100647,0.024642944,0.026351929,0.042907715,-0.047698975,0.017532349,-0.037719727,0.0072517395,0.0095825195,-0.029373169,0.005432129,-0.0006465912,0.013801575,0.025741577,-0.010635376,0.011100769,-0.0072669983,0.0057296753,0.016204834,-0.015838623,-0.07122803,-0.060058594,-0.012832642,-0.024169922,-0.019378662,0.041107178,0.010383606,-0.016708374,0.000320673,0.012527466,0.016479492,0.048065186,-0.066833496,0.00944519,0.005844116,0.020065308,-0.015571594,-0.005027771,-0.11047363,0.0014619827,-0.0025196075,-0.01852417,0.001584053,-0.029251099,0.03778076,-0.034362793,-0.009414673,0.00054073334,0.008842468,0.017288208,0.007259369,-0.028045654,0.007030487,-0.037322998,-0.0048332214,-0.027435303,0.019088745,0.044952393,-0.0501709,0.0015773773,0.0045814514,-0.011878967,-0.058776855,0.015113831,-0.05871582,0.018127441,0.044708252,0.043029785,0.0670166,0.0037574768,0.012374878,-0.038024902,-0.008323669,-0.002292633,0.08441162,-0.03668213,-0.010620117,-0.016159058,0.054473877,-0.0043182373,0.0051727295,0.08807373,0.009918213,0.023071289,0.010505676,0.019226074,-0.033233643,0.010063171,0.011917114,-0.033721924,-0.014167786,0.023986816,0.017456055,0.095458984,0.0149002075,0.0019235611,0.051879883,0.005908966,-0.008735657,-0.032226562,-0.027069092,-0.05178833,0.02230835,0.023529053,-0.0075645447,-0.017684937,0.00029492378,-0.01335907,-0.026168823,0.033447266,0.04034424,0.04385376,-0.019866943,-0.008460999,0.002368927,0.035827637,-0.018127441,0.040100098,-0.02003479,-0.082214355,-0.047180176,0.004020691,-0.017608643,-0.058044434,-0.0013685226,-0.033691406,0.058898926,0.0418396,-0.005176544,-0.023208618,-0.042144775,-0.034851074,-0.047729492,0.063964844,0.025299072,-0.017181396,0.03338623,0.01802063,-0.0060424805,-0.041381836,-0.0035362244,-0.018829346,0.045837402,0.01777649,0.012039185,0.012275696,0.037322998,0.017929077,-0.07946777,-0.003288269,0.014007568,-0.030776978,0.06768799,0.022644043,-0.033996582,0.048309326,-0.0082473755,0.038970947,-0.013465881,-0.09106445,-0.03741455,-0.030014038,-0.016815186,-0.016113281,-0.015014648,0.011482239,-0.03656006,-0.064453125,0.013999939,0.040222168,-0.027313232,0.0070991516,0.011688232,-0.013458252,-0.037750244,-0.011100769,0.010040283,-0.02029419,-0.00066661835,0.04510498,0.011268616,0.036132812,-0.055023193,0.03869629,-0.04837036,0.035247803,0.0012769699,0.0064430237,0.049560547,0.030303955,-0.03756714,-0.020446777,-0.012367249,0.04309082,-0.016448975,0.03579712,-0.038391113,0.015556335,0.0093307495,-0.02166748,0.0036182404,-0.016616821,-0.015014648,-0.0357666,0.00038409233,0.043304443,-0.042785645,0.038757324,-0.011436462,-0.024276733,-0.047668457,-0.04763794,-0.0015134811,-0.0131073,0.017059326,0.027191162,-0.061157227,-0.0073242188,0.022827148,0.0126953125,-0.00687027,0.029266357,-0.05923462,-0.0058670044,-0.05569458,0.035064697,-0.026260376,-0.003490448,-0.012626648,-0.0022010803,0.010025024,-0.026733398,0.03970337,-0.030792236,-0.013885498,0.0178833,-0.049713135,0.027694702,-0.03756714,0.011329651,-0.060150146,0.052093506,-0.009063721,-0.08984375,0.02796936,0.029953003,-0.014694214,-0.009109497,0.008682251,0.05038452,0.04107666,-0.02684021,-0.020477295,0.009056091,-0.07672119,-0.044525146,-0.025161743,-0.024261475,0.026611328,-0.060516357,-0.048095703,-0.036743164,0.041992188,-0.018325806,-0.060394287,-0.031463623,-0.053955078,0.0446167,0.018203735,-0.037963867,0.01133728,-0.08068848,-0.06677246,-0.035491943,-0.033477783,-0.017745972,0.062927246,-0.024291992,0.046417236,-0.06414795,0.01084137,-0.022003174,-0.049102783,-0.060028076,0.024246216,-0.0005712509,0.06878662,0.0340271,0.018127441,-0.008468628,-0.03286743,0.022903442,-0.066467285,9.417534e-05,-0.046142578,0.029220581,-0.020202637,0.024871826,-0.008346558,-0.03479004,-0.0042533875,-0.010803223,-0.038330078,0.0128479,0.06756592,0.032958984,0.06439209,-0.02960205,-0.013656616,-0.03062439,-0.015457153,-0.031463623,0.0036334991,-0.01828003,0.020431519,0.068481445,-0.031677246,-0.012390137,0.04260254,-0.049316406,0.0013666153,-0.021652222,0.011619568,-0.02482605,0.03387451,-0.040649414,-0.0030441284,-0.05923462,0.0061302185,0.019012451,0.024337769,0.039154053,0.07318115,-0.005760193,0.01889038,0.028778076,0.029418945,-0.04321289,0.006023407,0.033447266,0.02330017,-0.056640625,0.056762695,-0.039031982,0.01751709,-0.02180481,-0.008728027,-0.045196533,0.049560547,-0.014343262,0.032073975,0.059661865,0.031921387,0.03829956,-0.00970459,0.057037354,-0.012084961,0.00573349,-0.012306213,0.0076293945,0.052978516,-0.0054244995,-0.012145996,0.021591187,-0.03677368,-0.037963867,0.06100464,-0.06677246,0.012367249,-0.018371582,0.010978699,0.054229736,-0.022094727,0.002380371,0.0005054474,0.017196655,0.058898926,-0.013595581,-0.01751709,-0.047332764,0.05038452,-0.024963379,0.013420105,0.076293945,0.017456055,0.024658203,0.037200928,0.01134491,-0.028396606,0.0115737915,-0.063964844,-0.03152466,-0.050750732,-0.010360718,0.034851074,0.045135498,0.026168823,-0.06225586,0.020843506,0.053344727,-0.013015747,-0.042266846,0.0015697479,-0.03765869,0.07739258,-0.020339966,0.040893555,-0.0012922287,0.039367676,0.009925842,0.0063323975,0.014701843,-0.049468994,0.014221191,0.018920898,0.0027885437,-0.008087158,0.038757324,-0.029449463,-0.05456543,-0.019699097,-0.014183044,0.024856567,-0.027633667,-0.047912598,0.0057296753,-0.03491211,0.0059280396,0.020431519,-0.0027675629,-0.059295654,0.02645874,0.0569458,-0.00035095215,0.010101318,0.019485474,-0.0063705444,0.003129959,-0.015342712,0.03704834,-0.0040626526,0.037353516,0.01991272,-0.019577026,0.047332764,0.028808594,-0.0104904175,-0.045440674,0.023849487,-0.014968872,0.0028457642,0.013946533,-0.01309967,0.0005235672,0.05380249,-0.04559326,-0.002729416,-0.008735657,-0.051208496,0.023406982,0.049835205,-0.03111267,0.0129776,0.06414795,-0.052947998,0.057159424,0.019638062,0.0099105835,0.008613586,-0.009735107,-0.04321289,-0.06524658,-0.02230835,-0.026931763,0.014183044,-0.014015198,-0.009963989,0.04168701,0.027053833,-0.019821167,-0.023086548,-0.026321411,-0.017929077,-0.005153656,-0.0005450249,-0.024032593,-0.017410278,0.028137207,-0.027130127,0.032318115,0.01020813,-0.032073975,-0.06359863,-0.023773193,0.024978638,0.034210205,0.02671814,-0.024398804,-0.060913086,-0.0054893494,-0.08691406,0.023361206,-0.0010166168,0.046295166,0.046569824,-0.008529663,0.006965637,0.024383545,-0.06237793,-0.011695862,-0.020584106,-0.034301758,-0.05609131,0.024642944,0.025253296,-0.001666069,-0.040496826,-0.009712219,-0.037261963,0.020385742,-0.009887695,-0.017105103,-0.014427185,-0.005054474,-0.027694702,0.007972717,-0.010314941,0.024993896,0.002407074,0.022903442,-0.07397461,0.008071899,0.015098572,0.014564514,-0.006122589,0.056121826,0.00806427,-0.028030396,0.0035419464,-0.048065186,0.008491516,0.04901123,-0.042663574,-0.07287598,-0.04269409,0.026123047,0.053527832,0.043304443,0.0038204193,0.006679535,-0.051483154,0.0079193115,0.00034999847,-0.0017137527,-0.046569824,-0.005622864,-0.04232788,-0.07739258,0.06976318,0.020812988,0.0020122528,0.023269653,0.04248047,0.009780884,-0.005302429,-0.02368164,-0.030197144,-0.055877686,0.0035114288,-0.0059318542,0.003627777,-0.034851074,-0.057403564,0.0015287399,-0.020767212,-0.008743286,0.01197052,0.053863525,-0.015144348]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": []
    }
  ],
  "item_categories_count": {
    "12": 105,
    "478": 12
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
      "gemma_q4f16_embedding": "[-0.0068092346,-0.02760315,-0.018051147,-0.005718231,0.0289917,0.007873535,-0.012329102,-0.015731812,-0.0036449432,-0.019515991,0.051849365,-0.03161621,0.012023926,0.020385742,0.0096206665,0.016555786,0.0007715225,0.08123779,-0.008422852,-0.0071792603,-0.021942139,-0.010139465,0.050811768,-0.023757935,0.05960083,-0.036254883,0.012275696,0.06738281,-0.015045166,-0.027359009,0.028335571,-0.05102539,0.008079529,0.030349731,-0.014312744,0.06341553,-0.013061523,-0.026489258,0.003709793,-0.003047943,-0.0068473816,0.04067993,-0.0044441223,0.013641357,0.02192688,-0.03387451,-0.064208984,0.045074463,0.027633667,0.024490356,-0.011909485,0.007045746,-0.034698486,0.01537323,-0.047424316,-0.0463562,-0.031585693,-0.0463562,-0.05078125,-0.005203247,-0.048980713,0.0026569366,-0.020446777,0.0284729,-0.004711151,0.020217896,-0.013458252,-0.0010652542,0.02961731,0.08862305,-0.0073051453,0.03604126,-0.027816772,0.014793396,0.09423828,0.119506836,-0.03778076,-0.008033752,-0.009719849,0.02734375,-0.042633057,-0.030380249,-0.04815674,0.00623703,0.08026123,-0.025619507,-0.019042969,0.020111084,0.033111572,-0.021835327,0.03475952,-0.02986145,-0.0129470825,-0.0049209595,0.00031733513,0.011108398,-0.02067566,-0.041290283,0.038848877,0.0029392242,0.013877869,-0.004432678,-0.017700195,-0.04598999,-0.027542114,0.010757446,0.026992798,0.042297363,-0.0057907104,0.055847168,-0.06500244,-0.0023231506,-0.019088745,-0.031951904,-0.037506104,0.0025310516,-0.023712158,0.033813477,-0.008407593,0.041015625,0.010887146,-0.016448975,-0.00023162365,-0.010520935,-0.0030975342,-0.014266968,-0.068603516,0.011993408,-0.061950684,-0.0050849915,-0.027236938,0.07006836,-0.032470703,-0.033843994,-0.005771637,0.04559326,0.028747559,0.08135986,-0.009117126,0.032989502,-0.028320312,-0.056121826,0.034423828,0.003112793,0.024612427,-0.021850586,0.018081665,0.045318604,-0.03289795,0.048034668,-0.0020103455,0.037475586,0.025024414,-0.0056648254,0.014808655,0.013725281,0.024963379,-0.014717102,-0.037353516,0.022506714,-0.066589355,-0.051361084,0.0513916,-0.013404846,-0.03967285,0.041625977,-0.017288208,0.06933594,-0.045959473,0.037872314,0.029418945,-0.020904541,0.019104004,0.019012451,-0.026535034,0.02658081,0.029647827,-0.0040740967,-0.08886719,-0.028808594,0.008255005,0.04611206,0.013885498,0.03353882,-0.035858154,0.07550049,-0.001502037,0.0119018555,0.04837036,-0.019943237,-0.06939697,0.03842163,-0.01600647,-0.061920166,0.010650635,-0.042266846,-0.051208496,0.030136108,-0.004234314,0.07122803,-0.017654419,-0.0049362183,0.047912598,-0.018829346,0.005508423,0.017318726,-0.049041748,0.015640259,-0.026275635,-0.002735138,-0.059143066,0.01687622,-0.012001038,0.007247925,-0.02154541,-0.052459717,-0.011070251,0.016677856,-0.019165039,-0.02658081,0.023132324,-0.036224365,-0.01361084,0.031921387,0.013618469,-0.005214691,-0.0051231384,-0.016204834,-0.036193848,0.0078048706,0.052734375,-0.052764893,-0.07281494,-0.047546387,-0.030593872,-0.0033397675,-0.04827881,0.0044174194,0.03616333,0.031143188,-0.034362793,-0.01486969,-0.026290894,-0.011444092,0.041137695,-0.0079956055,0.016799927,-0.027770996,0.039398193,-0.007598877,-0.0015163422,-0.03918457,-0.0082092285,0.018341064,-0.049957275,0.020446777,-0.009155273,0.007461548,-0.0289917,-0.023620605,-0.040649414,-0.051696777,-0.0035324097,0.02432251,-0.05053711,-0.0006546974,-0.014526367,0.03253174,-0.025817871,0.0057296753,0.05307007,-0.039245605,0.08148193,0.05657959,0.059143066,-0.032562256,0.023773193,-0.013183594,0.015991211,-0.04071045,-0.07348633,0.03967285,-0.051513672,-0.008934021,0.021469116,0.020645142,0.01637268,-0.05041504,-0.0012311935,-0.027770996,-0.026855469,0.013725281,0.0178833,-0.07293701,0.014862061,0.0546875,-0.04498291,0.02999878,0.019805908,0.02243042,0.07873535,-0.0057907104,0.07550049,0.0066337585,0.012916565,-0.07745361,0.03265381,0.033966064,-0.061828613,-0.051940918,-0.015296936,-0.004837036,-0.0015668869,-0.013771057,-0.05456543,0.018066406,-0.012161255,-0.040039062,0.037841797,0.00642395,-0.034210205,0.013664246,-0.0015869141,-0.007080078,0.030761719,-0.028182983,0.00011301041,0.042175293,0.0034828186,0.04006958,0.017440796,0.0038661957,0.0003554821,-0.019729614,-0.00605011,0.051239014,0.051086426,-0.020309448,-0.03829956,-0.04220581,0.009010315,3.3974648e-05,-0.0184021,-0.008155823,-0.026809692,0.066345215,-0.016830444,0.006958008,-0.05090332,0.015037537,0.032226562,-0.03463745,0.045318604,0.017852783,-0.05239868,0.002658844,0.03604126,0.0056419373,0.029342651,-0.022644043,-0.004131317,0.06768799,0.00053691864,-0.019088745,0.021377563,0.018661499,0.014694214,0.036987305,0.08862305,0.035888672,0.015434265,0.026565552,-0.068359375,0.046295166,-0.006526947,0.024383545,-0.048217773,0.044311523,0.07299805,-0.02192688,-0.032562256,0.010009766,-0.053588867,-0.024291992,0.001709938,0.0010080338,0.019638062,-0.018569946,-0.053253174,0.032714844,-0.040222168,-0.0030117035,-0.028961182,-0.05783081,0.05432129,-0.064819336,0.024917603,0.04067993,-0.02671814,-0.06384277,-0.018615723,-0.015434265,-0.06173706,-0.010665894,0.0050354004,-0.042907715,-0.010643005,0.03152466,-0.0044059753,-0.0960083,0.00983429,-0.01675415,0.02444458,0.0074882507,-0.018798828,-0.008468628,0.013893127,0.013053894,-0.041534424,0.00081825256,0.044128418,0.02935791,-0.029449463,0.09484863,0.026870728,-0.025314331,-0.0029125214,0.033355713,0.024414062,-0.010063171,-0.053833008,-0.07672119,-0.0074043274,-0.0090789795,0.023788452,-0.07861328,-0.045135498,0.03866577,-0.046691895,0.025604248,0.042144775,-0.046783447,0.02468872,-0.032836914,-0.011756897,-0.046875,-0.013832092,0.0635376,0.023498535,-0.019638062,0.027999878,0.027648926,-0.0914917,0.007896423,0.06549072,0.028198242,0.016021729,0.010299683,-0.046722412,-0.040130615,0.0023155212,-0.011108398,-0.03378296,-0.025253296,-0.034973145,0.018661499,-0.014945984,0.047454834,-0.035339355,-0.061676025,-0.0019264221,-0.007980347,0.022613525,0.03552246,0.0121536255,0.0013122559,-0.0134887695,-0.036071777,-0.037200928,0.036865234,0.054595947,0.039855957,-0.004169464,-0.001499176,0.017593384,-0.038360596,0.020584106,0.04800415,-0.0096206665,0.048065186,-0.036376953,0.02192688,0.018112183,-0.0023555756,0.076538086,0.021148682,0.07366943,0.055755615,0.007835388,-0.04537964,0.021896362,0.004386902,-0.011352539,-0.044189453,0.07727051,0.04824829,-0.015853882,-0.04107666,0.02758789,-0.05621338,0.018157959,0.015777588,-0.015945435,-0.00024139881,-0.00041127205,0.018859863,-0.017807007,0.0137786865,-0.009033203,-0.013648987,-0.01625061,0.05419922,-0.056274414,0.0440979,0.01586914,-0.0026855469,0.0546875,0.04827881,0.011650085,0.022628784,-0.0758667,0.046203613,0.0034046173,0.049316406,0.09057617,-0.05303955,-0.0418396,0.00041031837,0.11456299,0.016601562,-0.000497818,0.0038642883,0.042236328,-0.0059318542,-0.0017766953,0.02116394,0.029083252,0.009223938,-0.018859863,-0.0023593903,-0.00017106533,0.032073975,-0.018157959,-0.0055274963,-0.010604858,-0.042297363,-0.030654907,-0.015106201,0.022888184,-0.05126953,0.03753662,0.05090332,0.0032043457,-0.018875122,-0.0069618225,-0.009742737,-0.07092285,0.010192871,0.008934021,-0.0395813,-0.040985107,0.0491333,0.074523926,0.019042969,0.04095459,-0.01612854,0.023208618,0.019744873,0.026138306,0.015541077,0.019241333,0.0034675598,0.05517578,0.019927979,0.0052261353,-0.010810852,0.023468018,0.033203125,-0.017120361,0.07318115,0.025100708,-0.06915283,-0.042419434,0.028427124,-0.06530762,-0.030273438,-0.013198853,0.034851074,0.015991211,-0.06561279,0.04119873,-0.021270752,0.04611206,-0.015670776,0.05819702,-0.013420105,0.07873535,0.014976501,-0.061157227,0.06451416,0.0067634583,0.057922363,-0.017578125,-0.0042381287,0.068603516,0.046875,-0.012527466,-0.0418396,0.043945312,0.033325195,0.02482605,0.010749817,0.068359375,0.0064811707,0.0072250366,-0.022232056,0.013328552,-0.04324341,-0.049346924,-0.013053894,0.04953003,0.04071045,0.01309967,-0.0055656433,0.0042877197,0.01737976,0.005405426,-0.0060653687,-0.05630493,-0.0357666,0.015945435,-0.0048942566,0.04916382,0.032073975,-0.045684814,-0.02470398,-0.020507812,0.025146484,-0.06262207,0.027908325,0.064208984,-0.04019165,-0.0056381226,-0.107543945,0.07043457,-0.005886078,-0.03616333,-0.013954163,0.041503906,-0.0051002502,-0.036468506,0.018569946,0.0060272217,-0.01184845,0.012786865,-0.032806396,0.0064811707,-0.0040664673,-0.0023593903,-0.029632568,-0.021224976,0.06311035,-0.026870728,0.07299805,0.039154053,0.05871582,0.00712204,-0.043548584,0.028930664,-0.0031280518,-0.008003235,-0.0132369995,-0.011039734,0.040100098,0.021759033,0.02128601,0.037109375,-0.022888184,0.020019531,-0.011131287,0.015449524,-0.00919342,0.049560547,-0.021759033,0.014205933,-9.995699e-05,0.011688232,-0.0149002075,-0.013084412,-0.0023002625,-0.018951416,-0.04095459,-0.0031375885,-0.02684021,-0.0088272095,-0.057128906,-0.034454346,0.023452759,0.012550354,0.025238037,-0.019500732,-0.01424408,-0.015510559,0.006263733,0.0181427,0.0362854,-0.002878189,0.026245117,-0.04031372,-0.03390503,0.03643799,-0.025466919,0.022018433,-0.0026168823,0.040649414,0.043701172,-0.0037250519,0.113464355,-0.037109375,0.04284668,-0.052337646,0.017990112,-0.004005432,-0.00046277046,0.012840271,0.0053367615,0.06707764,-0.07537842,0.00079250336,0.0038433075,0.021392822,-0.020767212,-0.008972168,-0.02532959,0.06542969,0.03439331,-0.08239746,-0.008216858,-0.01121521,-0.033203125,0.0068092346,0.0066452026,-0.021514893,0.031707764,0.036621094,0.00566864,-0.08984375,0.058288574,-0.046966553,0.0024757385,-0.09289551,-0.008171082,0.02696228,-0.0050697327,0.078308105,0.013389587,-0.013549805,0.0006046295]",
      "extra_description": null,
      "tags": []
    },
    {
      "id": 8,
      "active": true,
      "code": "distribuidor",
      "ean13": "",
      "name": "Modulo Distribuidor Base",
      "description": "",
      "updated_at": "2023-05-16T17:41:55.442Z",
      "bundle_details_count": 4,
      "pays_vat": true,
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": 9,
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
      "zid": 3,
      "measurement_unit": "",
      "purchasable": false,
      "force_as_service_for_document_external_storage_service": true,
      "category_bundle": false,
      "item_country_code_id": null,
      "youtube_video_url": null,
      "gemma_q4f16_embedding": "[-0.016540527,-0.02029419,-0.018356323,-0.027389526,0.027832031,-0.010910034,0.0070228577,-0.013664246,0.008117676,-0.0066108704,0.01876831,-0.035949707,0.026855469,0.022918701,0.017959595,0.015197754,0.021011353,0.11328125,0.00041985512,-0.022445679,-0.011550903,0.010040283,0.052337646,-0.012016296,0.07873535,-0.024642944,-8.6188316e-05,0.0435791,-0.04373169,-0.04067993,-0.0007452965,-0.03717041,0.013900757,0.017868042,-0.014465332,0.059051514,-0.033172607,0.00033044815,0.032806396,-0.01499176,-0.011619568,0.024108887,-0.020553589,0.0054893494,-0.01638794,-0.023834229,-0.0713501,0.055877686,0.015640259,0.008796692,0.010955811,-0.0042915344,-0.001914978,0.01576233,-0.045898438,-0.023880005,-0.026611328,-0.017150879,-0.038208008,-0.01360321,-0.044281006,-0.028884888,-0.021560669,0.0181427,-0.0035705566,0.006603241,-0.037841797,-0.023269653,0.026031494,0.09387207,-0.003736496,0.03933716,-0.02507019,0.03515625,0.08831787,0.12060547,-0.05105591,0.012458801,-0.02720642,0.05505371,-0.04486084,-0.04623413,-0.041778564,0.0023517609,0.06573486,-0.021972656,-0.002855301,0.007396698,0.048675537,-0.038208008,0.010307312,-0.010375977,-0.006248474,-0.01878357,0.007572174,-0.0019626617,-0.057525635,-0.024963379,0.036254883,-0.024246216,0.029556274,-0.017532349,-0.012329102,-0.043548584,-0.04559326,-0.011444092,0.050872803,0.018844604,0.016448975,0.06762695,-0.057861328,-0.016296387,-0.024230957,-0.049987793,-0.014808655,-0.006668091,-0.019226074,-0.00674057,-0.011634827,0.03555298,0.007106781,-0.022216797,-0.0025691986,-0.025344849,-0.00032114983,0.0023479462,-0.057647705,-0.010345459,-0.059661865,-0.015457153,-0.01727295,0.0602417,-0.05230713,-0.0181427,-0.03366089,0.032226562,0.035614014,0.061309814,-0.018295288,0.01687622,-0.0069122314,-0.027893066,0.022872925,-0.010215759,0.0001154542,-0.023513794,0.033721924,0.043151855,-0.06021118,0.040985107,0.0007214546,0.060943604,0.013648987,0.013885498,0.026351929,-0.0028629303,0.04034424,-0.021606445,-0.055145264,0.013641357,-0.09265137,-0.05834961,0.06188965,-0.012077332,-0.030883789,0.032165527,-0.03050232,0.08996582,-0.02406311,0.0463562,0.019073486,-0.026809692,-0.016616821,0.039154053,-0.05203247,0.008674622,-0.0045700073,-0.019485474,-0.06866455,-0.018188477,-0.009239197,0.039001465,0.025482178,0.045928955,-0.008934021,0.06561279,-0.032043457,0.0019607544,0.07635498,-0.017425537,-0.06347656,0.011184692,-0.022125244,-0.05404663,0.005420685,-0.039031982,-0.053649902,0.03527832,-0.0049934387,0.091430664,-0.020004272,-0.021392822,0.034057617,0.013656616,-0.007865906,0.029144287,-0.004558563,0.04434204,-0.02168274,0.0146865845,-0.062286377,0.036254883,0.0020751953,0.004863739,-0.017318726,-0.060943604,-0.013000488,0.03729248,-0.032470703,-0.052581787,0.019226074,-0.04095459,0.0149002075,0.006134033,0.013504028,0.0021858215,-0.009979248,-0.014732361,-0.020355225,-0.0050735474,0.049438477,-0.0025939941,-0.049804688,-0.039093018,-0.0107040405,-0.023239136,-0.03451538,-0.0046920776,0.009391785,0.029266357,-0.025177002,-0.015296936,-0.02746582,-0.005077362,0.003982544,0.014671326,0.009689331,-0.036315918,0.050476074,0.037200928,-0.008392334,-0.033355713,0.010543823,0.015289307,-0.064208984,0.021743774,-0.008583069,-0.0013427734,-0.0023040771,-0.009750366,0.000120937824,-0.04324341,0.010124207,0.020950317,-0.038360596,0.028808594,-0.012588501,0.0071792603,-0.02848816,-0.024169922,0.03668213,-0.014259338,0.07989502,0.07562256,0.07055664,-0.035491943,0.01739502,-0.016067505,0.03302002,-0.03894043,-0.057739258,-0.010925293,-0.056365967,-0.005874634,0.011260986,0.024597168,0.02420044,-0.06561279,-0.012710571,-0.03314209,-0.014076233,0.0023708344,0.013252258,-0.08099365,0.016159058,0.051696777,-0.038513184,0.053955078,-0.012161255,0.012557983,0.08380127,0.0015077591,0.07006836,-0.0040626526,0.006412506,-0.06549072,0.040863037,0.046051025,-0.06890869,-0.046661377,-0.0031986237,-0.023834229,0.00081920624,-0.008361816,-0.051208496,0.012069702,-0.009422302,-0.08282471,0.033966064,-0.018966675,-0.027679443,0.04437256,-0.037872314,-0.016098022,0.030197144,-0.029159546,0.0037841797,0.03955078,0.012397766,0.029174805,-0.008125305,-0.032684326,-0.0007619858,-0.0048446655,0.015823364,0.06213379,0.06335449,-0.013267517,-0.052856445,-0.03479004,-0.014312744,0.03692627,-0.013710022,-0.008468628,-0.029174805,0.06768799,-0.01977539,0.022155762,-0.034118652,0.007850647,0.06222534,-0.022415161,0.060791016,-0.02267456,-0.03945923,0.005168915,0.026733398,0.023040771,0.04006958,0.0032920837,-0.007686615,0.056671143,0.015357971,-0.026657104,-0.008377075,0.036987305,0.018493652,0.0496521,0.06945801,0.03894043,0.0043296814,0.023803711,-0.06628418,0.02017212,-0.022445679,0.016998291,-0.039154053,0.04345703,0.08117676,-0.002313614,-0.040252686,-0.020812988,-0.053131104,-0.018127441,-0.022964478,-0.012649536,0.0088272095,-0.007724762,-0.029769897,0.01626587,-0.07318115,0.004142761,-0.037261963,-0.03503418,0.02986145,-0.045806885,0.023925781,0.032409668,-0.028549194,-0.05041504,-0.029434204,-0.03387451,-0.06536865,0.012260437,0.0027122498,-0.032196045,0.002811432,0.00024354458,-0.010574341,-0.07244873,0.018051147,0.0031414032,0.031082153,0.008354187,-0.020568848,-0.008216858,0.009338379,0.0075035095,-0.03137207,0.022109985,0.052337646,0.01638794,-0.031311035,0.085754395,0.011741638,-0.02607727,0.008796692,0.03439331,0.030944824,-0.0023479462,-0.057678223,-0.06048584,0.027282715,-0.011726379,-0.01146698,-0.049713135,-0.039764404,0.0390625,-0.016021729,0.026535034,0.026641846,-0.028778076,0.037353516,-0.030181885,0.0026302338,-0.020492554,-0.010787964,0.038482666,0.025283813,-0.011543274,0.016860962,0.032592773,-0.082092285,0.006717682,0.06225586,-0.010398865,0.005176544,0.015823364,-0.01777649,-0.037353516,-0.02835083,-0.04168701,-0.007385254,-0.05319214,-0.00045084953,0.04119873,-0.005077362,0.05935669,-0.0385437,-0.060302734,-0.022201538,-0.00920105,0.012458801,0.0050964355,0.027816772,0.012451172,-0.012794495,-0.026611328,-0.03744507,0.050567627,0.05545044,0.033416748,0.0070381165,0.028915405,0.02519226,-0.027404785,-0.0020275116,0.030700684,0.005504608,0.057739258,-0.0053100586,0.022644043,0.008979797,-0.007083893,0.036468506,0.006839752,0.08258057,0.009109497,0.021438599,-0.045440674,0.025054932,0.016082764,0.0045280457,-0.033172607,0.06945801,0.048431396,-0.02911377,-0.021377563,0.02609253,-0.05215454,0.0018348694,0.005783081,-0.026489258,0.012634277,0.015205383,0.022277832,-0.009101868,-0.0035114288,-0.008033752,0.025283813,-0.040740967,0.059783936,-0.03201294,0.04220581,0.04714966,-0.008125305,0.051971436,0.026519775,0.009025574,0.04449463,-0.06781006,0.05883789,-0.0084991455,0.05065918,0.06750488,-0.06958008,-0.024261475,-0.0021533966,0.0892334,0.01777649,-0.011238098,-0.026306152,0.022949219,0.010749817,0.01751709,0.0009589195,-0.0045928955,0.0036773682,-0.049194336,0.0013237,0.012886047,0.04736328,0.008682251,-0.014350891,-0.013008118,-0.031463623,-0.016998291,-0.0027370453,0.020599365,-0.056121826,0.017196655,0.043029785,-0.014274597,0.0038070679,-0.003917694,-0.018600464,-0.06762695,0.0014448166,0.0007529259,-0.031341553,-0.060791016,0.06506348,0.0814209,0.009292603,0.05215454,0.003835678,-0.007972717,-0.021896362,0.025817871,0.016342163,-0.007232666,0.0052261353,0.080078125,0.04272461,0.025314331,0.013084412,0.03616333,0.024658203,0.025817871,0.058563232,0.016906738,-0.08709717,-0.039733887,-0.0008239746,-0.056030273,-0.015701294,-0.011161804,0.024765015,0.030426025,-0.074279785,0.030212402,-0.017547607,0.06021118,-0.0078125,0.064575195,-0.012390137,0.09106445,0.0049972534,-0.07171631,0.08734131,0.0074043274,0.07147217,-0.042114258,-0.019897461,0.061920166,0.027008057,0.020965576,-0.027801514,0.043304443,0.018814087,0.024871826,0.010658264,0.087402344,0.033721924,0.0049743652,-0.0026454926,-0.0035533905,-0.06768799,-0.076293945,-0.012771606,0.08465576,0.033721924,0.020889282,0.0037574768,-0.0069465637,-0.019821167,-0.0077056885,-0.024017334,-0.05331421,-0.01058197,0.014411926,-0.018997192,0.046051025,0.050933838,-0.04663086,-0.03881836,-0.018249512,0.00459671,-0.038330078,0.02758789,0.06317139,-0.040252686,-0.0501709,-0.118774414,0.085632324,-0.004447937,-0.040008545,-0.040985107,0.037506104,-0.02357483,-0.021850586,0.010932922,0.0104599,-0.025909424,-0.0036411285,-0.033599854,0.025543213,-0.019424438,-0.036987305,-0.029251099,-0.010925293,0.028289795,-0.014877319,0.023345947,-0.0018625259,0.05886841,0.021026611,-0.01914978,0.034423828,0.010910034,0.0006814003,-0.028915405,0.0060768127,0.056152344,0.034454346,0.018829346,0.0446167,-0.04562378,0.01713562,0.009254456,0.0064430237,-0.02810669,0.052703857,-0.025283813,0.030044556,0.0013179779,0.019927979,-0.017654419,-0.007575989,0.0014972687,-0.038238525,-0.0357666,0.017364502,-0.013389587,-0.0038833618,-0.052246094,-0.038726807,0.015579224,0.008888245,0.0035324097,-0.010627747,-0.038024902,-0.027328491,-0.03378296,0.019714355,0.012817383,0.003917694,0.031097412,-0.04232788,-0.027633667,0.015701294,-0.012779236,0.002532959,0.009841919,0.02720642,0.05255127,0.0057868958,0.099853516,-0.021453857,0.052093506,-0.028198242,-0.0025672913,-0.025024414,0.010269165,0.04046631,-0.0051498413,0.048583984,-0.049468994,-0.0063171387,-0.0054130554,-0.00024139881,-0.0033302307,0.0036621094,-0.0040626526,0.06008911,0.018981934,-0.080322266,0.014076233,-0.023208618,-0.070129395,0.0005068779,-0.022613525,-0.017593384,0.022003174,0.05923462,0.03604126,-0.05557251,0.039886475,-0.06500244,0.007965088,-0.07745361,-0.018066406,0.040649414,0.023712158,0.06097412,-0.0003669262,-0.04421997,0.0138549805]",
      "extra_description": null,
      "tags": []
    }
  ],
  "bundle_categories_count": {
    "12": 1,
    "478": 1
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
    },
    {
      "id": 7,
      "name": "cuotas mensuales",
      "notes": "super categoría",
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
    "344504": null,
    "2962": null
  },
  "bundle_stocks": {
    "2655": null,
    "2656": null
  },
  "item_prices": {
    "344504": 3050.0,
    "2962": 26.55
  },
  "bundle_prices": {
    "2655": "229.0",
    "2656": "103.5"
  },
  "flexible_items_prices": {
    "344504": true,
    "2962": false
  },
  "flexible_bundles_prices": {
    "2655": true,
    "2656": true
  },
  "brands_count": {
    "": 157
  },
  "brands": [],
  "brands_categories": {
    "": [
      12,
      478,
      638,
      4394,
      6345,
      11361,
      null
    ]
  },
  "show_items_image": false,
  "double_width_button": false
}
```
