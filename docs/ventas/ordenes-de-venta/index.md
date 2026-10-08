---
title: "Órdenes de venta"
sidebar_label: "Órdenes de venta"
sidebar_position: 0
---

Piense en un cliente que pide mercadería hoy pero la quiere facturar hasta el viernes, o en un servicio que se cobra por adelantado: en ambos casos la orden de venta le permite dejar registrada la venta sin emitir la factura todavía. Este tutorial explica cuándo usarla, cómo crearla y cómo convertirla en factura.

Una orden de venta es una pre-factura o, según su flujo de trabajo, una orden de trabajo o una cotización. Sus características son:

- Se **pueden editar** los datos, productos y cantidades antes de convertirla en factura.
- **No genera transacciones contables** de cuentas por cobrar ni de IVA por pagar.
- Los productos no se entregan al cliente: solo se reservan con una **reservación** (envío preliminar).
- Se puede cobrar antes de facturarla, total o parcialmente; a esto se le llama **anticipo**.

Use una orden de venta cuando necesite cambiar precios, productos o cantidades después de la venta inicial, o cuando cobre por adelantado. Cuando la venta no cambia, puede facturar de una vez: la factura es una venta confirmada y se explica en [Facturas](/ventas/facturas). Estas son las recomendaciones según su operación:

1. Puntos de venta de productos: facturar de una vez.
2. Venta de servicios: crear orden de venta y después facturar.
3. Venta de productos al por mayor: crear orden de venta y después facturar.

## Crear orden de venta

Los pasos para crear una orden de venta son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Ordenes”.
3. Seleccionar “Nueva Orden”.

![imagen1](/img/ventas/ordenes-de-venta-o-facturas-1.jpg)


Le aparecerán las opciones para crear una nueva orden de venta, los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre la orden de venta que esta creando.

b. Coloque la fecha que desea que aparezca en la factura.

c. Coloque el punto de venta desde donde se  solicito la orden de venta.

d. Coloque el nombre del cliente existente, o agregue uno nuevo.

e. Coloque el Término de Pago

f. Coloque los productos o servicios que desea facturar, la cantidad y el precio unitario. Para agregar otra línea presione “+”.


Por ultimo presione “Crear orden”.

![imagen2](/img/ventas/ordenes-de-venta-o-facturas-2.jpg)



Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo la orden exitosamente.

![imagen3](/img/ventas/ordenes-de-venta-o-facturas-3.jpg)

## Listar las Ordenes de Venta

Si se dirige a Ventas, Ordenes, podrá encontrar las ordenes de venta previamente creadas. Las opciones para las ordenes son las siguientes:

a. Verificar: Le permite ver los detalles de la orden.

b. Editar

c. Borrar

d. Emitir Factura

e. Regalar

f. Cobrar

g. Emitir factura rápida: genera la factura de inmediato con la fecha del día, sin pasar por el formulario de factura.

![imagen4](/img/ventas/ordenes-de-venta-o-facturas-4.jpg)

## Gestión Avanzada de Órdenes de Venta

### Editar el número y la fecha de creación de una orden

Zauru permite modificar el número de orden y la fecha de creación de una orden de venta existente sin afectar otros datos:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Hacer click sobre **"Editar Creación"** en la orden.
3. Modificar el número de orden y/o la fecha de creación.
4. Presionar **"Actualizar Orden"**.

### Marcar una Orden como Regalo

Para marcar una orden de venta como regalo:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Hacer click sobre **"Regalar"** en la orden.

Esto marcará la orden como regalo y se reflejará en la factura resultante.

### Exportar Órdenes de Venta

Puede exportar todas las órdenes de venta abiertas a formato XLS desde el listado de órdenes usando la opción de exportación.

### Exportación Consolidada de Órdenes

Además de la exportación estándar, Zauru permite generar una exportación consolidada de órdenes de venta en formato XLS desde la vista de órdenes. Esta exportación agrupa las órdenes por criterios específicos y es útil para análisis y reportes operativos.

### Consultar Órdenes Anuladas

Para consultar el historial de órdenes anuladas:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Seleccionar **"Órdenes Anuladas"**.

## API (llamadas desde sistemas externos)

### Consultar vendedores activos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/active_sellers.json
```

Esto devolverá un JSON similar a este:
```json
{
  "1": "Empleado Vendedor Senior",
  "93": "Brian"
}
```

### Listar órdenes de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "order_number": null,
    "invoice_number": null,
    "reference": "compras detalladas",
    "date": "2018-12-14",
    "subtotal": "1200.0",
    "discount_id": null,
    "extra_discount": "0.0",
    "total": "1200.0",
    "due": "1200.0",
    "needs_delivery": false,
    "delivery_date": null,
    "delivery_address": "",
    "seller_id": 3,
    "creator_id": 4,
    "updater_id": 4,
    "taxable": true,
    "issuer_id": null,
    "issued": false,
    "issued_at": null,
    "paid": false,
    "paid_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "entity_id": 4,
    "memo": "",
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
    "payee_id": 5,
    "payment_expected_at": "2018-12-14",
    "agency_id": 6,
    "payment_term_id": 7,
    "created_at": "2018-12-14T21:08:56.569Z",
    "updated_at": "2018-12-14T21:08:56.569Z",
    "invoice_details_count": 1,
    "shipper_id": null,
    "pos": false,
    "order_pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": 8,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "crm_url": null,
    "zid_by_agency_and_creator": 1853,
    "not_included_vat": null,
    "exchange_rate": 1.0,
    "excempt": false,
    "currency_id": 3,
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
  }
]
```

### Obtener detalle de la orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 123",
  "reference": "Referencia actualizada",
  "date": "2024-01-15",
  "subtotal": "750.0",
  "discount_id": null,
  "extra_discount": "0.0",
  "total": "750.0",
  "due": "218.0",
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
  "memo": "Nota actualizada",
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
  "updated_at": "2026-08-06T04:16:32.224Z",
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
      "reference": "Prueba de Orden de Venta",
      "date": "2024-01-15",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "10"
        }
      },
      "memo": "orden generada desde el API"
    }
  }' \
  https://app.zauru.com/sales/orders.json
```

En caso de éxito, devuelve la orden creada con sus líneas (`invoice_details`). **Ver referencia:** [Obtener datos para editar una orden de venta](#obtener-datos-para-editar-una-orden-de-venta).

### Actualizar una orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "invoice": {
      "id": "1",
      "reference": "Segunda prueba de Orden de Venta",
      "invoice_details_attributes": {
        "0": {
          "id": "3",
          "reference": "editado",
          "quantity": "4"
        }
      },
      "memo": "generado desde el API 2"
    }
  }' \
  https://app.zauru.com/sales/orders/1.json
```

En caso de éxito, devuelve la orden actualizada con sus líneas (`invoice_details`). **Ver referencia:** [Obtener datos para editar una orden de venta](#obtener-datos-para-editar-una-orden-de-venta).

### Eliminar órdenes de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/orders/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Exportar órdenes de venta a Excel

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/export.xls
```

### Obtener plantilla para crear una orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/new.json
```

Devuelve el mismo objeto de la orden que **Ver referencia:** [Obtener datos para editar una orden de venta](#obtener-datos-para-editar-una-orden-de-venta).

### Obtener datos para editar una orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/edit.json
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
  "due": "218.0",
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
  "created_at": "2024-01-16T00:39:00.000Z",
  "updated_at": "2026-08-06T04:16:33.770Z",
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
  "uuid": "1be9e8a2-3570-4f46-a67c-0e3538f92c19",
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

### Obtener datos para editar el número y la fecha de creación de una orden

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/edit_creation.json
```

Devuelve el mismo objeto de la orden que **Ver referencia:** [Obtener datos para editar una orden de venta](#obtener-datos-para-editar-una-orden-de-venta).

### Actualizar el número y la fecha de creación de una orden

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "invoice": {
      "order_number": "ORD-456",
      "created_at": "2024-01-15"
    }
  }' \
  https://app.zauru.com/sales/orders/1/update_creation.json
```

Devuelve el mismo objeto de la orden que **Ver referencia:** [Obtener datos para editar una orden de venta](#obtener-datos-para-editar-una-orden-de-venta).

### Anular una orden de venta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/void.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Marcar una orden de venta como regalo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/gift.json
```

