---
title: "Facturas"
sidebar_label: "Facturas"
sidebar_position: 0
---

Una factura ya es una venta confirmada: al emitirla, Zauru genera automáticamente las transacciones contables de cuentas por cobrar, IVA por pagar y costo de mercadería, y los productos salen de la bodega hacia el cliente. Sus características son:

- **No se puede editar** después de emitida; solo admite una edición superficial del número, la referencia, la fecha, el vendedor, las notas y las etiquetas.
- Genera automáticamente las transacciones contables.
- Los productos salen de la bodega hacia el cliente.
- Se puede cobrar total o parcialmente.

Si necesita cambiar productos, cantidades o precios después de la venta inicial, use una [orden de venta](/ventas/ordenes-de-venta) y conviértala en factura cuando esté lista. Este tutorial explica cómo crear facturas, listar las que están pendientes de pago y gestionar su impresión, reenvío y anulación.

## Crear una Factura

Los pasos para crear una factura son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “Nueva Factura”.

![imagen5](/img/ventas/ordenes-de-venta-o-facturas-5.jpg)


Le aparecerán las opciones para crear una nueva factura. Los campos que debe llenar son los siguientes:

a. Si quiere que la factura registre impuestos, coloque el cheque de “Sujeto a Impuestos”.

b. Coloque una breve referencia para facilitar la búsqueda de la factura en el listado de todas las facturas.

c. Coloque la fecha en que se emite la factura.

d. Coloque el punto de venta desde donde se esta facturando y presione refrescar.

e. Seleccione el nombre del vendedor.

f. Seleccione el nombre del cliente al que se le esta facturando.

g. Seleccione el término de pago que se le dará al cliente.

h. Coloque los productos, la cantidad y el precio unitario que desea facturar. Para agregar una nueva fila presione “+”.


Para emitir la factura presione “Crear Factura”.

![imagen6](/img/ventas/ordenes-de-venta-o-facturas-6.jpg)

## Listar Facturas no Pagadas

Si se dirige a Ventas, Facturas no Pagadas, podrá encontrar las facturas previamente emitidas que aún tienen saldo pendiente. Las facturas pueden filtrarse por:

a. **Alcance (Scope)**: Contado, Crédito o Todas.

b. **Etiquetas (Tags)**: Filtre las facturas por etiquetas.

c. **Rango de fechas**: Desde y Hasta.

En el listado se muestra el número de factura, cliente, total, saldo pendiente, vendedor, punto de venta, fecha y notas de crédito asociadas.

También puede exportar las facturas no pagadas a formato XLS usando la opción de exportación.

### Emitir Factura desde una Orden de Venta

Para convertir una orden de venta en factura:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Localizar la orden que desea facturar.
3. Hacer click sobre **"Emitir Factura"**.

También puede usar la opción **"Emisión Rápida"** desde los detalles de la orden para emitir la factura inmediatamente con la fecha del día actual.

### Editar una factura (superficialmente)

Zauru permite realizar una edición superficial (shallow edit) de ciertos campos de una factura ya emitida sin afectar las transacciones contables. Los campos editables son:

- Número de factura.
- Referencia.
- Fecha.
- Vendedor.
- Notas/Memo.
- Etiquetas (tags).

Para realizar esta edición:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"** (o **"Facturas Pagadas"**).
2. Hacer click sobre **"Editar"** (El lápiz) en la factura.
3. Realizar los cambios necesarios.
4. Presionar **"Actualizar Factura"**.

### Impresión de Facturas

Para imprimir una factura:

1. En la página de detalles de la factura, seleccione una **plantilla de impresión**.
2. Haga click sobre **"Imprimir"** para ver la vista previa.
3. Presione **CTRL + P** para enviar a la impresora.

También puede **descargar como PDF** desde la opción disponible en la misma sección.

### Impresión Masiva de Facturas

Zauru permite imprimir todas las facturas no pagadas en lote dentro de un rango de fechas:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Imprimir Todas"**.
3. Seleccione la plantilla de impresión deseada.
4. Coloque el rango de fechas (Desde y Hasta).
5. Presione **"Generar Impresión"**.

El sistema procesará las facturas en segundo plano y podrá monitorear el progreso. Al finalizar, se generará un archivo PDF con todas las facturas.

### Reenviar Factura por Correo

Si una factura fue emitida con almacenamiento externo (FEL), puede reenviar el correo electrónico al cliente desde la página de detalles de la factura usando la opción **"Reenviar Correo"**. Esta opción solo está disponible una vez por factura.

### Consultar Facturas Anuladas

Para consultar el historial de facturas anuladas:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Facturas Anuladas"**.

Puede filtrar por rango de fechas para acotar la búsqueda.

### Cambiar los números de serie de los bundles de una factura (no pagada)

Si una factura no pagada contiene ítems identificables dentro de bundles (paquetes) y tiene un envío de entrega registrado, Zauru le permite corregir los números de serie asociados a esos ítems sin tener que anular la factura.

Para cambiar los números de serie:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Abrir la factura no pagada correspondiente.
3. Hacer click en la acción **"Cambiar números de serie"** (icono de código de barras). Esta opción solo aparece cuando la factura cumple las condiciones (factura no pagada con bundles identificables que tengan envío de entrega).
4. En el formulario, indique una **referencia** (obligatoria) para registrar el cambio.
5. Para cada ítem se mostrará el **número de serie actual** y un selector con los números de serie disponibles en la agencia. Elija el nuevo número de serie para cada uno.
6. Presione **"Guardar"**.

![cambiar-numeros-de-serie](/img/ventas/ordenes-de-venta-o-facturas-7.png)

El sistema genera internamente el movimiento de los ítems con los nuevos números de serie y, al finalizar, se mostrará un mensaje de confirmación. Tenga en cuenta las siguientes validaciones:

- Debe registrar una referencia; de lo contrario el cambio no se guardará.
- No puede asignar el mismo número de serie a dos ítems distintos (los números de serie deben ser únicos).
- Solo se pueden seleccionar números de serie disponibles en la agencia de la factura.
- Si no modifica ningún número de serie, el sistema le indicará que no hubo cambios que guardar.

## Gestión Avanzada de Facturas

### Importar Facturas no Pagadas

Zauru permite importar facturas no pagadas desde un archivo externo (CSV, XLS o XLSX) hacia el sistema. Esta funcionalidad es útil para migraciones de datos desde otros sistemas. Para más detalles, consulte el tutorial de [Importar Facturas no Pagadas](/ventas/importar-facturas-no-pagadas).

Para acceder a la importación:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Importar"**.

### Emisión Rápida de Factura

Desde una orden de venta, puede emitir la factura rápidamente usando la opción **"Emisión Rápida"** (`issue_fast`). Esta opción genera la factura inmediatamente utilizando la fecha del día actual, sin necesidad de pasar por el formulario de creación de factura.

### Consultar Respuesta Certificada de Almacenamiento Externo (FEL)

Para facturas electrónicas emitidas con almacenamiento externo (FEL), Zauru permite consultar la respuesta certificada del servicio de almacenamiento:

1. Ir a la página de detalles de la factura.
2. Seleccionar la opción de **"Respuesta Certificada"** (`external_storage_certified_response`).

La respuesta se mostrará en formato XML o JSON dependiendo del país de configuración. En Guatemala se utiliza el formato XML estándar de la SAT.

### Consultar Respuesta Certificada para Anulación

De manera similar, para facturas electrónicas anuladas, puede consultar la respuesta certificada de anulación:

1. Ir a la página de detalles de la factura anulada.
2. Seleccionar la opción de **"Respuesta Certificada de Anulación"** (`external_storage_certified_response_for_voiding`).

Esta funcionalidad también está disponible para notas de crédito electrónicas, tanto para su emisión como para su anulación.

Con esto domina el ciclo completo de venta: crea la orden, la convierte en factura cuando corresponde y consulta o reenvía el documento electrónico cuando el cliente lo necesita. Cada venta que registre quedará con su contabilidad, su inventario y su respaldo fiscal en orden.

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

### Obtener detalle de la factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

Devuelve el mismo objeto que **Ver referencia:** [Obtener detalle de la orden de venta](/ventas/ordenes-de-venta#obtener-detalle-de-la-orden-de-venta).

### Crear factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "reference": "Prueba de Factura",
      "date": "2018-12-14",
      "taxable": "1",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_info": "1234567-8 | Empresa Ejemplo, S.A. # 5555-0000",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "10"
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices.json
```

Esto devolverá un JSON similar a este
```json
{
  "id": 1,
  "invoice_number": "SERIE A - 123",
  "issued": true,
  "paid": false,
  "total": "120.0",
  "zid": 1,
  "invoice_details": [
    {
      "id": 1,
      "item_bundle_name": "PRODUCTO 1",
      "item_id": 2,
      "quantity": 10,
      "unit_price": "10.0"
    }
  ]
}
```

### Actualizar una factura (superficialmente)

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
      "invoice_number": "SERIE A - 456",
      "reference": "Referencia actualizada",
      "date": "2024-01-15",
      "seller_id": "1",
      "memo": "Nota actualizada desde API"
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices/1/shallow_update.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
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
  "updated_at": "2026-08-06T04:16:32.951Z",
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

### Emitir factura desde orden (fast issue)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/issue_fast.json
```

Devuelve el mismo objeto de la factura que **Ver referencia:** [Actualizar una factura (superficialmente)](#actualizar-una-factura-superficialmente).

### Exportar facturas no pagadas a Excel

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/export.xls
```

### Consultar respuesta certificada de almacenamiento externo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response.json
```



### Anular factura no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Listar facturas no pagadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices.json
```

Devuelve un arreglo de facturas. **Ver referencia:** [Listar órdenes de venta](/ventas/ordenes-de-venta#listar-órdenes-de-venta).

### Obtener plantilla para crear una factura

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/new.json
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
    "subtotal": null,
    "discount_id": null,
    "extra_discount": null,
    "total": null,
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
    "pos": false,
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
    "donation": true,
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
  "items": {
    "cuotas mensuales": [
      [
        "10 usuarios - CM62",
        101018
      ]
    ],
    "cuotas distribuidor": [
      [
        "1 usuario - CM103",
        341285
      ]
    ]
  },
  "bundles": {
    "Paquetes": [
      [
        "+Modulo Base - base",
        "b2655"
      ]
    ]
  },
  "payment_terms": [
    {
      "id": 4,
      "zid": 5,
      "active": true,
      "name": "implementaciones ejemplo",
      "credit_percent": 0.0,
      "credit_days": 0,
      "credit": false,
      "applicable_to_uncategorized_payees": true,
      "account_from_id": 6,
      "account_to_id": 7,
      "updater_id": 8,
      "entity_id": 2,
      "created_at": "2026-05-21T02:09:19.859Z",
      "updated_at": "2026-05-21T02:09:19.859Z",
      "extra_entries": 0,
      "flexible_entries_values": false,
      "cost_account_id": null,
      "inventory_asset_account_id": null,
      "flexible_entries_tags": false,
      "products_and_services_instead_of_account_from": false,
      "memo": "",
      "advance_payment_account_to_id": null,
      "product_account_id": null,
      "service_account_id": null,
      "cost_center_id": null
    }
  ],
  "invoice_discounts": [],
  "employees": [
    {
      "id": 1,
      "zid": 1,
      "id_number": "000",
      "active": true,
      "accountant": true,
      "inventory_controller": true,
      "seller": true,
      "buyer": true,
      "support_agent": true,
      "name": "Empleado Vendedor Senior",
      "identification": "1234567890101",
      "email": "vendedor@ejemplo.com",
      "position": "Gerente General",
      "address": "Calle Ejemplo 123, Zona 10",
      "phone": "5555-0001",
      "birthday": "1990-01-01",
      "started": "2008-01-01",
      "salary": "19533.62",
      "ssn": "123456789012",
      "tin": "12345678",
      "user_id": 2,
      "updater_id": 12,
      "entity_id": 2,
      "agency_id": 3,
      "notes": "",
      "created_at": "2013-01-08T16:54:53.222Z",
      "updated_at": "2026-08-06T04:14:17.486Z",
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
      "ordinary_hourly_rate": 80.27515,
      "daytime_extraordinary_hourly_rate": 80.27515,
      "nighttime_extraordinary_hourly_rate": 120.412726,
      "gender": true,
      "bank_account": "000-0000000-0",
      "bank": "G&T",
      "marital_status": "casado",
      "occupation": "Ingeniero en sistemas",
      "nationality": "Guatemalteco",
      "supervisor_id": null,
      "employee_category_id": null,
      "cost_center_id": null,
      "spouse_name": "",
      "dependents": "",
      "emergency_contact_name": "",
      "emergency_contact_phone": "",
      "education_level": "",
      "driver_license_number": "",
      "additional_worker_id": "1000000001 -1000002- RL1000000003 -1000004-"
    }
  ],
  "shippers": [
    {
      "id": 15,
      "zid": 16,
      "id_number": "002",
      "active": true,
      "accountant": true,
      "inventory_controller": true,
      "seller": true,
      "buyer": false,
      "support_agent": true,
      "name": "Empleado Ejemplo Dos",
      "identification": "2345 67890 0101",
      "email": "empleado@ejemplo.com",
      "position": "Implementador",
      "address": "Avenida Ejemplo 456, Zona 15",
      "phone": "5555-0002",
      "birthday": "1980-08-19",
      "started": "2021-04-01",
      "salary": null,
      "ssn": "987654321",
      "tin": "87654321",
      "user_id": 17,
      "updater_id": 8,
      "entity_id": 2,
      "agency_id": 3,
      "notes": "",
      "created_at": "2014-10-06T16:21:54.296Z",
      "updated_at": "2026-01-15T18:51:30.924Z",
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
      "ordinary_hourly_rate": null,
      "daytime_extraordinary_hourly_rate": null,
      "nighttime_extraordinary_hourly_rate": null,
      "gender": true,
      "bank_account": "",
      "bank": "",
      "marital_status": "",
      "occupation": "",
      "nationality": "",
      "supervisor_id": null,
      "employee_category_id": null,
      "cost_center_id": null,
      "spouse_name": "",
      "dependents": "",
      "emergency_contact_name": "",
      "emergency_contact_phone": "",
      "education_level": "",
      "driver_license_number": "",
      "additional_worker_id": "1000000001 -1000002-"
    }
  ]
}
```

### Actualizar una factura no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "invoice": {
      "reference": "Referencia actualizada",
      "invoice_details_attributes": {
        "0": {
          "id": "1",
          "quantity": "5"
        }
      }
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

En caso de éxito, devuelve la factura actualizada con sus líneas (`invoice_details`). **Ver referencia:** [Crear factura](#crear-factura).

### Consultar respuesta certificada de anulación de almacenamiento externo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response_for_voiding.json
```

Devuelve la misma respuesta certificada que **Ver referencia:** [Consultar respuesta certificada de almacenamiento externo](#consultar-respuesta-certificada-de-almacenamiento-externo).

### Reenviar factura por correo electrónico

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/unpaid_invoices/1/resend_mail.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "error",
  "message": "Correo ya reenviado",
  "result": "0"
}
```

### Generar impresión masiva de facturas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "from": "2024-01-01",
    "to": "2024-01-31"
  }' \
  https://app.zauru.com/sales/unpaid_invoices/gen_print_all.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 1,
  "zid": 1
}
```

### Consultar el progreso de la impresión masiva

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/check_print_all.json?zid=123456
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 3,
  "message": "not_found"
}
```
