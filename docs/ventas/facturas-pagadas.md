---
title: "Facturas Pagadas"
sidebar_label: "Facturas Pagadas"
sidebar_position: 11
---

Este tutorial está enfocado en como consultar, imprimir y gestionar las facturas que ya han sido pagadas total o parcialmente.

## Listar Facturas Pagadas

Para consultar la lista de facturas pagadas:

1. Ir a **"Ventas"**.
2. Seleccionar **"Facturas Pagadas"**.

![imagen1](/img/ventas/facturas-pagadas-1.png)

Las facturas pagadas pueden filtrarse por:

a. **Alcance (Scope)**:
   - **Contado**: Muestra solo facturas pagadas de contado.
   - **Crédito**: Muestra solo facturas pagadas a crédito.
   - **Todas**: Muestra todas las facturas pagadas.

b. **Rango de fechas**:
   - **Desde**: Fecha de inicio del rango de búsqueda.
   - **Hasta**: Fecha de fin del rango de búsqueda.

En el listado se muestra información como el número de factura, cliente, total, fecha, vendedor, punto de venta, y notas de crédito asociadas.

## Ver Detalles de una Factura Pagada

Para ver los detalles de una factura pagada:

1. Ir a **"Ventas"** > **"Facturas Pagadas"**.
2. Hacer click sobre **"Verificar"** (El ojo) en la factura que desea consultar.

![imagen2](/img/ventas/facturas-pagadas-2.png)

En la página de detalles podrá encontrar:
- Información general de la factura (número, fecha, cliente, vendedor, punto de venta).
- Los productos o servicios facturados con sus cantidades y precios.
- Las transacciones contables generadas.
- Los movimientos de inventario asociados.
- Los cobros/pagos asociados a la factura.
- Las notas de crédito emitidas sobre la factura.
- Las plantillas de impresión disponibles.

## Imprimir una Factura Pagada

Para imprimir una factura pagada:

1. En la página de detalles de la factura, seleccione una **plantilla de impresión** disponible en la parte inferior.
2. Haga click sobre **"Imprimir"** para ver la vista previa de impresión.
3. Presione **CTRL + P** para enviar a la impresora.

![imagen3](/img/ventas/facturas-pagadas-3.png)

### Descargar como PDF

También puede descargar la factura como archivo PDF:

1. En la página de detalles de la factura, seleccione la plantilla de impresión.
2. Haga click sobre **"Descargar PDF"**.

## Editar Metadata de una Factura Pagada

Zauru permite realizar una edición superficial (shallow edit) de ciertos campos de una factura pagada sin afectar las transacciones contables. Los campos que se pueden editar son:

- Número de factura.
- Referencia.
- Fecha.
- Vendedor.
- Notas/Memo.
- Etiquetas (tags).

Para realizar esta edición:

1. Ir a **"Ventas"** > **"Facturas Pagadas"**.
2. Localizar la factura que desea editar y hacer click sobre **"Editar"** (El lápiz).
3. Realizar los cambios necesarios.
4. Presionar **"Actualizar Factura"**.

![imagen4](/img/ventas/facturas-pagadas-4.png)

## Anular una Factura Pagada

Para anular una factura que ya está pagada, primero debe anular el pago asociado. Consulte el tutorial de **"Anular una factura o recibo"** para el procedimiento completo.

Las facturas pagadas que no tienen detalles de pago y tienen saldo pendiente en cero pueden ser anuladas directamente con la opción **"Anular sin Pagos"**.

## API (llamadas desde sistemas externos)

### Ver detalle de una factura pagada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/paid_invoices/1.json
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
  "due": "-32.0",
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
  "created_at": "2024-01-16T00:39:00.000Z",
  "updated_at": "2026-08-06T04:14:25.608Z",
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
  "uuid": "d91900cc-4e73-49c5-8ddd-cb018ea6ba1c",
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

### Editar metadata de una factura pagada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "invoice": {
      "id": "1",
      "invoice_number": "SERIE A - 123",
      "reference": "Referencia actualizada",
      "date": "2024-01-15",
      "seller_id": "1",
      "memo": "Nota actualizada"
    }
  }' \
  https://app.zauru.com/sales/paid_invoices/1/shallow_update.json
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

### Eliminar una factura pagada anulada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Anular una factura pagada sin pagos asociados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1/no_payments_void.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
