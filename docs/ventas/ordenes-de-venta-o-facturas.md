---
title: "Ordenes de Venta y Facturas"
sidebar_label: "Ordenes de Venta y Facturas"
sidebar_position: 4
---

Piense en un cliente que pide mercadería hoy pero la quiere facturar hasta el viernes, o en un servicio que se cobra por adelantado. Para decidir cómo registrarlo, primero hay que entender la diferencia entre una orden de venta y una factura, y este tutorial le muestra cuándo usar cada una, cómo crearlas y cómo convertir una orden en factura.

Una orden de venta es una pre-factura o dependiendo del flujo de trabajo se puede tomar como una orden de trabajo o hasta como una cotización.

La orden de venta tiene las siguientes características:

- Se __pueden editar__ los datos, productos y cantidades antes de ser convertida en una factura.
- __No genera ninguna transacción contable__ de cuentas por cobrar o de iva por pagar
- Los productos incluidos en la orden de venta no se entregan al cliente, solo se reservan con una __reservación__ (envío preliminar).
- Se puede cobrar antes de ser facturada, ya sea cobro total o parcial de la orden de venta. Esto se le conoce como __anticipo__.

Una factura tiene las siguientes características:

- __No se pueden editar__ después de ser emitida.
- Genera automáticamente transacciones contables de cuentas por cobrar, iva por pagar y costo de mercadería.
- Los productos incluidos en la factura automáticamente salen de la bodega hacia el cliente después de ser emitida la factura.
- Se puede hacer un cobro total o parcial de la factura.

Dependiendo sus necesidades usted debería de hacer una orden de venta previo a hacer una factura o debería facturar de una vez, estas son nuestras recomendaciones:

1. Puntos de Venta de productos: Facturar de un vez.
2. Venta de servicios: Crear orden de venta y después facturar.
3. Venta de productos al por mayor: Crear orden de venta y después facturar.

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

![imagen4](/img/ventas/ordenes-de-venta-o-facturas-4.jpg)


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

### Editar Metadata de una Factura (Edición Superficial)

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

## Gestión Avanzada de Órdenes de Venta

### Editar Metadata de Creación de una Orden

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

## Gestión Avanzada de Facturas

### Importar Facturas no Pagadas

Zauru permite importar facturas no pagadas desde un archivo externo (CSV, XLS o XLSX) hacia el sistema. Esta funcionalidad es útil para migraciones de datos desde otros sistemas. Para más detalles, consulte el tutorial de **"Importar Facturas no Pagadas"**.

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
  },
  {
    "id": 9,
    "zid": 10,
    "order_number": null,
    "invoice_number": null,
    "reference": "Implementación 2/2",
    "date": "2020-07-16",
    "subtotal": "2200.0",
    "discount_id": null,
    "extra_discount": "0.0",
    "total": "2200.0",
    "due": "2200.0",
    "needs_delivery": false,
    "delivery_date": null,
    "delivery_address": "",
    "seller_id": 3,
    "creator_id": 11,
    "updater_id": 11,
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
    "payee_id": 12,
    "payment_expected_at": "2020-07-16",
    "agency_id": 6,
    "payment_term_id": 13,
    "created_at": "2020-07-16T22:39:21.519Z",
    "updated_at": "2020-09-01T14:42:13.772Z",
    "invoice_details_count": 1,
    "shipper_id": null,
    "pos": false,
    "order_pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": 14,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "crm_url": null,
    "zid_by_agency_and_creator": 5042,
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
    "uuid": "2d229d23-f261-4499-5dfb-e6d124ccd3fb",
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

### Obtener detalle de la factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1.json
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

Esto devolverá un JSON similar a este:
```json
{}
```

### editar orden de venta
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
          "id": "1",
          "_destroy": "true"
        },
        "1": {
          "item_id": "2",
          "quantity": "1",
          "unit_price": "650",
          "reference": "reemplazo"
        },
        "2": {
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

Esto devolverá un JSON similar a este:
```json
{}
```

### eliminar ordenes de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/orders/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### crear factura
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
        },
        "1": {
          "item_id": "2",
          "quantity": "20"
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
  "id":1,
  "invoice_number":"SERIE A - 123",
  "issued":true,
  "paid":false,
  "total":"120.0",
  "zid":1,
  "invoice_details":[
    {
      "id": 1,
      "item_bundle_name":"PRODUCTO 1",
      "item_id": 2,
      "quantity":10,
      "unit_price":"10.0"
    },
    {
      "id": 3,
      "item_bundle_name":"SERVICIO 1",
      "item_id": 4,
      "quantity":20,
      "unit_price":"1.0"
    }
  ]
}
```

### editar metadata de una factura (shallow update)
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

### Exportar órdenes de venta a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/export.xls
```

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

Esto devolverá un JSON similar a este:
```json
{}
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

Esto devolverá un JSON similar a este:
```json
{}
```

### Listar facturas no pagadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices.json
```

Esto devolverá un JSON similar a este:
```json
[
  {}
]
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

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "order_number": null,
  "invoice_number": null,
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
```

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
      ],
      [
        "11 usuarios - CM63",
        101019
      ]
    ],
    "cuotas distribuidor": [
      [
        "1 usuario - CM103",
        341285
      ],
      [
        "módulo distribuidor análisis - CD39",
        40476
      ]
    ]
  },
  "bundles": {
    "Paquetes": [
      [
        "+Modulo Base - base",
        "b2655"
      ],
      [
        "+Modulo Distribuidor Base - distribuidor",
        "b2656"
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
    },
    {
      "id": 9,
      "zid": 10,
      "active": true,
      "name": "mensualidades ejemplo",
      "credit_percent": 1.0,
      "credit_days": 7,
      "credit": true,
      "applicable_to_uncategorized_payees": true,
      "account_from_id": 11,
      "account_to_id": 7,
      "updater_id": 8,
      "entity_id": 2,
      "created_at": "2026-05-21T02:00:08.541Z",
      "updated_at": "2026-05-21T02:00:08.541Z",
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
    },
    {
      "id": 13,
      "zid": 2,
      "id_number": "",
      "active": true,
      "accountant": true,
      "inventory_controller": false,
      "seller": true,
      "buyer": false,
      "support_agent": false,
      "name": "Carlos",
      "identification": "",
      "email": "invitado@ejemplo.com",
      "position": "",
      "address": "",
      "phone": "",
      "birthday": "1913-01-01",
      "started": null,
      "salary": null,
      "ssn": "",
      "tin": "",
      "user_id": 14,
      "updater_id": 8,
      "entity_id": 2,
      "agency_id": 3,
      "notes": "",
      "created_at": "2013-03-01T02:26:00.219Z",
      "updated_at": "2026-03-19T14:49:36.337Z",
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
      "additional_worker_id": ""
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
    },
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
  ]
}
```

### Editar una orden de venta
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

### Editar metadata de creación de una orden
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/edit_creation.json
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

### Actualizar metadata de creación de una orden
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
  "created_at": "2024-01-15T06:39:00.000Z",
  "updated_at": "2026-08-06T04:16:34.928Z",
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

### Anular una orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/void.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Marcar una orden de venta como regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/gift.json
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

### Consultar respuesta certificada de anulación de almacenamiento externo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response_for_voiding.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

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
