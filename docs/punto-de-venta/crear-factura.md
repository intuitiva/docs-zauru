---
title: "Crear factura"
sidebar_label: "Crear factura"
sidebar_position: 3
---

Si atiende un mostrador o una tienda física, esta es la pantalla que más va a usar en el día: cada vez que un cliente compra y necesita su factura, aquí la emite en segundos, escaneando códigos de barras y eligiendo los productos de su bodega. También le sirve cuando una orden de venta ya está lista para convertirse en factura.

## Crear una factura

1. Ir a "Punto de Venta".
2. Seleccionar "Nueva Factura".

El usuario solo puede seleccionar productos de la bodega que tiene asignada o de la bodega predeterminada en la configuración del punto de venta.

Los campos principales de la factura son:

- **Referencia**: permite identificar la factura posteriormente.
- **Cliente**: permite seleccionar un cliente existente o agregar uno nuevo.
- **Vendedor**: identifica al vendedor de la operación.
- **Término de pago**: define el plazo de pago del cliente.
- **Proyecto**: asocia la factura a un proyecto.
- **Código del producto**: permite escanear el código de barras o escribirlo manualmente para agregar un producto.

![imagen1](/img/punto-de-venta/crear-factura-1.jpg)

Agregar los productos o servicios y especificar la cantidad. También se puede aplicar un descuento y definir si la operación registra impuestos o funciona como recibo sin impuestos. Seleccionar "Imprimir" para emitir la factura.

![imagen2](/img/punto-de-venta/crear-factura-2.jpg)

La plantilla de impresión permite imprimir la factura con `Ctrl+P`. Los accesos disponibles en la parte derecha permiten:

- Ir al listado de facturas no pagadas.
- Crear una nueva factura.
- Ver el detalle de la factura creada.
- Cobrar la factura.

![imagen3](/img/punto-de-venta/crear-factura-3.jpg)

## Listado de facturas

Para consultar las facturas emitidas y no pagadas desde el punto de venta:

1. Ir a "P.D.V.".
2. Seleccionar "Facturas".

El listado incluye las facturas que cumplen estas condiciones:

- Están emitidas, no son órdenes.
- No están pagadas.
- No están anuladas.
- Pertenecen a la agencia del usuario.

Se puede filtrar por:

- **Vendedor**: muestra las facturas de un vendedor específico o de todos los vendedores.
- **Etiquetas**: muestra las facturas que tienen las etiquetas seleccionadas.

Desde el listado se puede:

- **Ver detalle**: muestra los productos, pagos, transacciones contables y otros datos.
- **Cobrar**: registra un pago. Consulte [Cobrar una factura o una orden de venta](/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta).
- **Imprimir**: imprime la factura con las plantillas configuradas.
- **Anular**: anula una factura emitida por error.
- **Editar**: abre una factura que todavía está en estado de orden.

## Editar y emitir una orden

Una factura en estado de orden todavía no ha sido emitida y se puede modificar.

1. En el listado, localizar la factura en estado "orden".
2. Seleccionar el icono de "Editar".
3. Modificar los productos, las cantidades, los precios o los datos generales.
4. Seleccionar "Guardar" para emitirla con los cambios.

Las facturas ya emitidas no se pueden editar mediante este formulario. Para corregirlas, anular la factura y crear una nueva.

## Emitir una orden rápidamente

Para convertir una orden de venta en factura:

1. Abrir el detalle de la orden de venta.
2. Seleccionar "Emitir factura".

La orden se convierte inmediatamente en factura y conserva sus productos, cantidades y precios.

## Anular una factura

1. En el listado, localizar la factura.
2. Seleccionar "Anular".
3. Confirmar la anulación.

La factura queda anulada. Si fue creada desde una orden de venta, los productos reservados se devuelven al inventario.

## Editar datos de una factura

Para modificar datos sin alterar los productos ni los montos:

1. En el detalle de la factura, seleccionar "Editar datos".
2. Modificar el número de factura, la referencia, la fecha, el vendedor, el memo o las etiquetas.
3. Adjuntar una imagen si es necesario.
4. Seleccionar "Guardar".

## API (llamadas desde sistemas externos)

Todas las llamadas requieren los siguientes encabezados:

```bash
-H "Accept: application/json" \
-H "Content-type: application/json" \
-H "X-User-Email: usuario@zauru.com" \
-H "X-User-Token: TOKEN_DEL_USUARIO"
```

Reemplazar el correo y el token por las credenciales de un usuario de Zauru. En los ejemplos, `1` representa el identificador de una factura.

### Crear una factura

`POST /pos/invoices.json`

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Venta mostrador",
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
  https://app.zauru.com/pos/invoices.json
```

Devuelve la factura creada y sus detalles (`invoice_details`). Los campos principales son `id`, `order_number`, `invoice_number`, `total`, `issued` y `paid`.

### Listar facturas

`POST /pos/invoices/datatables.json`

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "start": "0",
    "length": "40",
    "search": {"value": "", "regex": "false"}
  }' \
  https://app.zauru.com/pos/invoices/datatables.json
```

Devuelve el formato de DataTables:

```json
{
  "draw": 0,
  "recordsTotal": 0,
  "recordsFiltered": 0,
  "data": []
}
```

### Ver una factura

`GET /pos/invoices/:id.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1.json
```

Devuelve la factura y sus detalles. Además incluye el cliente (`payee`), los asientos contables (`entries`), los pagos (`payment_details`) y los formularios enviados (`submissions`). Los campos principales son:

```json
{
  "id": 1,
  "order_number": "ORD-456",
  "invoice_number": "SERIE A - 456",
  "reference": "Venta mostrador",
  "date": "2026-08-06",
  "subtotal": "500.0",
  "total": "500.0",
  "due": "500.0",
  "seller_id": 1,
  "payee_id": 4,
  "issued": true,
  "paid": false,
  "voided": false,
  "invoice_details": [
    {
      "id": 1,
      "item_id": 10,
      "reference": "",
      "unit_price": "250.0",
      "quantity": "2.0",
      "price": "500.0"
    }
  ]
}
```

### Obtener datos para una factura nueva

`GET /pos/invoices/new.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/new.json
```

Devuelve los valores iniciales de una factura y las listas de productos, paquetes, categorías, precios y existencias de la bodega del usuario:

```json
{
  "invoice": {"invoice_number": "FEL", "taxable": true, "seller_id": 1},
  "items": [],
  "bundles": [],
  "categories": [],
  "item_prices": {},
  "bundle_prices": {},
  "item_stocks": {},
  "bundle_stocks": {}
}
```

### Actualizar una factura no emitida

`PUT /pos/invoices/:id.json`

```bash
curl -X PUT \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Venta corregida",
      "invoice_details_attributes": {
        "0": {"id": "1", "quantity": "2"}
      }
    }
  }' \
  https://app.zauru.com/pos/invoices/1.json
```

Solo se pueden actualizar facturas en estado de orden. Si la factura ya fue emitida, devuelve `{"error": "No Editable"}`.

### Emitir una orden rápidamente

`GET /pos/invoices/:id/issue_fast.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1/issue_fast.json
```

Convierte una orden de venta en factura y conserva sus productos, cantidades y precios. Devuelve la factura emitida y sus detalles.

### Consultar datos superficiales de una factura

`GET /pos/invoices/:id/shallow_edit.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1/shallow_edit.json
```

Devuelve los datos que se pueden modificar sin cambiar los productos ni los montos: número de factura, referencia, fecha, vendedor, memo, etiquetas e imagen.

### Actualizar datos superficiales de una factura

`PATCH /pos/invoices/:id/shallow_update.json`

```bash
curl -X PATCH \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Referencia actualizada",
      "memo": "Nota actualizada",
      "created_at": "2026-05-25"
    }
  }' \
  https://app.zauru.com/pos/invoices/1/shallow_update.json
```

Actualiza los campos superficiales sin ejecutar los callbacks normales de la factura. Acepta `invoice_number`, `reference`, `date`, `seller_id`, `memo`, `tag_ids`, `invoice_image` y `created_at`. Devuelve la factura actualizada y sus detalles.

### Anular una factura

`DELETE /pos/invoices/:id.json`

```bash
curl -X DELETE \
  -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1.json
```

Anula la factura. Si la operación es correcta, devuelve `204 No Content` sin cuerpo.

### Anular una factura sin pagos

`DELETE /pos/invoices/:id/no_payments_void.json`

```bash
curl -X DELETE \
  -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/1/no_payments_void.json
```

Usar esta llamada cuando la factura no tiene pagos asociados y el saldo pendiente es cero. Si no se cumplen ambas condiciones, devuelve un error de validación. Si la operación es correcta, devuelve `204 No Content` sin cuerpo.

### Obtener productos, paquetes, precios y existencias

`GET /pos/invoices/get_categories_items_bundles_prices_stocks_images.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/invoices/get_categories_items_bundles_prices_stocks_images.json
```

Devuelve los datos necesarios para construir la pantalla de factura: productos, paquetes, categorías, precios, existencias, tarjetas de regalo, marcas y las opciones visuales configuradas para el punto de venta:

```json
{
  "items": [
    {
      "id": 1,
      "code": "S31",
      "name": "1 hora de Configurar Impresoras",
      "item_category_id": 3,
      "pays_vat": true
    }
  ],
  "bundles": [
    {
      "id": 6,
      "code": "base",
      "name": "Modulo Base",
      "pays_vat": true
    }
  ],
  "categories": [
    {
      "id": 9,
      "name": "cuotas distribuidor"
    }
  ],
  "item_prices": {"344504": 3050.0},
  "bundle_prices": {"2655": "229.0"},
  "item_stocks": {"344504": null},
  "bundle_stocks": {"2655": null}
}
```

La respuesta completa incluye contadores y mapas adicionales (`item_categories_count`, `gift_card_types`, `brands`, entre otros) y cada producto o paquete puede traer campos internos como `gemma_q4f16_embedding`, que no son necesarios para integrar la facturación.
