---
title: "Ordenes de Venta y Facturas"
sidebar_label: "Ordenes de Venta y Facturas"
sidebar_position: 4
---

Una orden de venta es una pre-factura: aparta productos y cantidades sin emitir la factura. Una factura cierra la venta, genera contabilidad y despacha el inventario.

**Orden de venta:**

- Se puede editar antes de convertirla en factura.
- No genera cuentas por cobrar ni IVA por pagar.
- Reserva los productos; no los entrega al cliente.
- Se puede cobrar total o parcialmente antes de facturar (anticipo).

**Factura:**

- No se puede editar después de emitirse.
- Genera cuentas por cobrar, IVA por pagar y costo de mercadería.
- Despacha los productos de la bodega al cliente.
- Se puede cobrar total o parcialmente.

En punto de venta conviene facturar directamente; en servicios o ventas al por mayor, crear primero la orden.

## Crear orden de venta

1. Ir a "Ventas" > "Ordenes".
2. Seleccionar "Nueva Orden".

Los campos son:

- **Referencia**: identifica la orden.
- **Fecha**: la que aparecerá en la factura.
- **Punto de venta**: agencia que solicita la orden.
- **Cliente**: existente o nuevo.
- **Término de pago**.
- **Productos o servicios**: cantidad y precio unitario; "+" agrega otra línea.

Seleccionar "Crear orden"; aparecerá un mensaje de éxito.

![imagen1](/img/ventas/ordenes-de-venta-o-facturas-1.jpg)
![imagen2](/img/ventas/ordenes-de-venta-o-facturas-2.jpg)
![imagen3](/img/ventas/ordenes-de-venta-o-facturas-3.jpg)

## Listar órdenes de venta

En "Ventas" > "Ordenes" se listan las órdenes creadas. Las acciones de cada orden son:

- **Verificar**: ver el detalle.
- **Editar**: modificar productos, cantidades o precios.
- **Borrar**.
- **Emitir Factura**.
- **Regalar**.
- **Cobrar**: disponible cuando la orden ya fue facturada.

![imagen4](/img/ventas/ordenes-de-venta-o-facturas-4.jpg)

## Crear una factura

1. Ir a "Ventas".
2. Seleccionar "Facturas no Pagadas".
3. Seleccionar "Nueva Factura".

Los campos son:

- **Sujeto a Impuestos**: sin marcarlo, la factura funciona como recibo sin impuestos.
- **Referencia**.
- **Fecha** de emisión.
- **Punto de venta**: al cambiarlo, presionar refrescar.
- **Vendedor**.
- **Cliente**.
- **Término de pago**.
- **Productos**: cantidad y precio unitario; "+" agrega otra línea.

Seleccionar "Crear Factura".

![imagen5](/img/ventas/ordenes-de-venta-o-facturas-5.jpg)
![imagen6](/img/ventas/ordenes-de-venta-o-facturas-6.jpg)

## Listar facturas no pagadas

En "Ventas" > "Facturas no Pagadas" se listan las facturas emitidas con saldo pendiente. Se pueden filtrar por **Alcance** (contado, crédito o todas), **Etiquetas** y **rango de fechas**, y el listado muestra número de factura, cliente, total, saldo pendiente, vendedor, punto de venta, fecha y notas de crédito. La opción de exportación genera un archivo XLS.

## Operaciones sobre facturas

- **Emitir factura desde una orden**: en "Ventas" > "Ordenes", "Emitir Factura"; "Emisión Rápida" usa la fecha del día.
- **Editar metadata**: cambia número, referencia, fecha, vendedor, memo y etiquetas sin afectar la contabilidad; "Editar" y luego "Actualizar Factura".
- **Imprimir**: en el detalle, elegir la plantilla, "Imprimir" y Ctrl+P; también se puede descargar como PDF.
- **Impresión masiva**: en "Facturas no Pagadas", "Imprimir Todas", elegir plantilla y rango de fechas, y "Generar Impresión"; el PDF se genera en segundo plano.
- **Reenviar por correo**: en el detalle de una factura FEL, "Reenviar Correo" (una vez por factura).
- **Facturas anuladas**: en "Facturas no Pagadas", "Facturas Anuladas", con filtro por fechas.
- **Números de serie de bundles**: en facturas no pagadas con bundles identificables y envío de entrega, indicar una referencia obligatoria y el nuevo número de serie por ítem (no se puede repetir).

## Gestión avanzada de órdenes de venta

- **Editar creación**: "Editar Creación" cambia el número de orden o la fecha de creación.
- **Regalar**: marca la orden como regalo; la marca pasa a la factura resultante.
- **Exportar**: genera un XLS de las órdenes abiertas, con una variante consolidada.
- **Anuladas**: "Órdenes Anuladas" muestra el historial.

## Gestión avanzada de facturas

- **Importar facturas no pagadas**: en "Facturas no Pagadas", "Importar" carga un archivo CSV, XLS o XLSX. Vea [Importar facturas no pagadas](/ventas/importar-facturas-no-pagadas).
- **Respuesta certificada FEL**: en el detalle de una factura electrónica, "Respuesta Certificada" muestra la respuesta del almacenamiento externo (XML o JSON según el país); para una factura anulada, "Respuesta Certificada de Anulación". También aplica a notas de crédito electrónicas.

## API (llamadas desde sistemas externos)

Todas las llamadas requieren estos encabezados:

```bash
-H "Accept: application/json" \
-H "Content-type: application/json" \
-H "X-User-Email: usuario@zauru.com" \
-H "X-User-Token: TOKEN_DEL_USUARIO"
```

Reemplazar el correo y el token por las credenciales de un usuario de Zauru. En los ejemplos, `1` representa el identificador de una orden o factura.

### Órdenes de venta

| Llamada | Descripción |
|---|---|
| `GET /sales/orders.json` | Lista las órdenes. |
| `GET /sales/orders/1.json` | Detalle de la orden (cliente, productos, asientos y pagos). |
| `POST /sales/orders.json` | Crea la orden. |
| `PUT /sales/orders/1.json` | Actualiza la orden. |
| `DELETE /sales/orders/1.json` | Elimina la orden (`204`). |
| `GET /sales/orders/1/edit.json` | Datos para el formulario de edición. |
| `GET /sales/orders/1/edit_creation.json` | Datos para editar número y fecha de creación. |
| `PATCH /sales/orders/1/update_creation.json` | Actualiza número y fecha de creación (`202`). |
| `GET /sales/orders/1/void.json` | Anula la orden (`204`). |
| `GET /sales/orders/1/gift.json` | Marca la orden como regalo (`204`). |
| `GET /sales/orders/active_sellers.json` | Vendedores activos (`id` → nombre). |
| `GET /sales/orders/new.json` | Valores iniciales para crear una orden. |
| `GET /sales/orders/export.xls` | Exporta las órdenes a Excel. |

### Facturas no pagadas

| Llamada | Descripción |
|---|---|
| `GET /sales/unpaid_invoices.json` | Lista las facturas no pagadas. |
| `GET /sales/unpaid_invoices/1.json` | Detalle de la factura (misma estructura que la orden). |
| `POST /sales/unpaid_invoices.json` | Crea la factura con sus detalles (`201`). |
| `PUT /sales/unpaid_invoices/1.json` | Actualiza la factura con sus detalles (`201`). |
| `PATCH /sales/unpaid_invoices/1/shallow_update.json` | Edita metadata sin afectar la contabilidad (`202`). |
| `GET /sales/unpaid_invoices/1/issue_fast.json` | Emite la factura desde una orden con la fecha del día (`202`). |
| `DELETE /sales/unpaid_invoices/1.json` | Anula la factura (`204`). |
| `GET /sales/unpaid_invoices/new.json` | Valores iniciales y listas para crear una factura. |
| `GET /sales/unpaid_invoices/1/external_storage_certified_response.json` | Respuesta certificada FEL de emisión (XML o JSON). |
| `GET /sales/unpaid_invoices/1/external_storage_certified_response_for_voiding.json` | Respuesta certificada FEL de anulación. |
| `POST /sales/unpaid_invoices/1/resend_mail.json` | Reenvía la factura al cliente (una vez). |
| `POST /sales/unpaid_invoices/gen_print_all.json` | Inicia la impresión masiva; devuelve `status` y `zid`. |
| `GET /sales/unpaid_invoices/check_print_all.json?zid=123456` | Progreso de la impresión masiva. |
| `GET /sales/unpaid_invoices/export.xls` | Exporta las facturas a Excel. |

### Crear una orden de venta

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Orden de prueba",
      "date": "2024-01-15",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "seller_id": "1",
      "memo": "orden generada desde el API",
      "invoice_details_attributes": {
        "0": {"item_id": "1", "quantity": "10"}
      }
    }
  }' \
  https://app.zauru.com/sales/orders.json
```

### Editar una orden de venta

Para quitar una línea incluir `"_destroy": "true"`; para agregar una línea nueva, no incluir `id`:

```bash
curl -X PUT \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "id": "1",
      "reference": "Orden corregida",
      "memo": "generado desde el API",
      "invoice_details_attributes": {
        "0": {"id": "1", "_destroy": "true"},
        "1": {"item_id": "2", "quantity": "1", "unit_price": "650"}
      }
    }
  }' \
  https://app.zauru.com/sales/orders/1.json
```

### Crear una factura

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Factura de prueba",
      "date": "2024-01-15",
      "taxable": "1",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_info": "1234567-8 | Empresa Ejemplo, S.A. # 5555-0000",
      "seller_id": "1",
      "memo": "generado desde el API",
      "invoice_details_attributes": {
        "0": {"item_id": "1", "quantity": "10"}
      }
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices.json
```

### Editar metadata de una factura

Acepta `invoice_number`, `reference`, `date`, `seller_id`, `memo` y etiquetas:

```bash
curl -X PATCH \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "id": "1",
      "invoice_number": "SERIE A - 456",
      "reference": "Referencia actualizada",
      "date": "2024-01-15",
      "seller_id": "1",
      "memo": "Nota actualizada"
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices/1/shallow_update.json
```

### Estructura del detalle de una orden o factura

El detalle (`GET /sales/orders/1.json` y `GET /sales/unpaid_invoices/1.json`) incluye el documento, el cliente (`payee`), los productos (`invoice_details`), los asientos contables (`entries`), los pagos (`payment_details`) y los formularios enviados (`submissions`). Campos principales:

```json
{
  "id": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "Orden de prueba",
  "date": "2024-01-15",
  "subtotal": "650.0",
  "total": "650.0",
  "due": "650.0",
  "seller_id": 1,
  "payee_id": 4,
  "issued": false,
  "paid": false,
  "voided": false,
  "invoice_details": [
    {
      "id": 1,
      "item_id": 10,
      "reference": "",
      "unit_price": "650.0",
      "quantity": "1.0",
      "price": "650.0"
    }
  ]
}
```

La plantilla `GET /sales/unpaid_invoices/new.json` devuelve la factura inicial y las listas del formulario: `items` agrupados por categoría con pares `[nombre, id]`, `bundles`, `payment_terms`, `invoice_discounts`, `employees` y `shippers`. La plantilla de orden (`GET /sales/orders/new.json`) devuelve solo la orden inicial.
