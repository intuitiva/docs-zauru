---
title: "Crear orden de venta"
sidebar_label: "Crear orden de venta"
sidebar_position: 2
---

Una orden de venta aparta productos para un cliente que los recogerá o pagará más tarde, sin emitir la factura todavía. Al guardar la orden, los productos almacenables quedan reservados para ese cliente.

Para crear una orden de venta desde el punto de venta:

1. Ir a "Punto de Venta" (P.D.V.).
2. Seleccionar "Nueva Orden".

Los campos de la orden son:

- **Referencia**: identifica la orden para encontrarla después.
- **Cliente**: selecciona un cliente existente o agrega uno nuevo.
- **Vendedor**: persona que realiza la venta.
- **Código del producto**: permite escanear el código de barras o escribirlo manualmente para agregar el producto.
- **Cantidad**: con los botones "+" y "-" se ajusta la cantidad de cada producto.
- **Sujeto a impuestos**: define si la orden se factura al concluir o solo genera un recibo comprobante.

![imagen1](/img/punto-de-venta/crear-orden-de-venta-1.png)

Agregar los productos o servicios y la cantidad. Al seleccionar "Guardar" se emite la orden y se reservan los productos almacenables.

![imagen2](/img/punto-de-venta/crear-orden-de-venta-2.png)

Mientras la orden no se emita como factura, se puede editar para agregar o quitar productos, anularla o emitir la factura.

![imagen3](/img/punto-de-venta/crear-orden-de-venta-3.png)

## Listado de órdenes de venta

Para ver las órdenes de venta pendientes:

1. Ir a "P.D.V.".
2. Seleccionar "Ordenes".

El listado incluye las órdenes que cumplen estas condiciones:

- No han sido emitidas como factura.
- No están pagadas.
- No están anuladas.
- Pertenecen a la agencia del usuario.

Se puede filtrar por:

- **Etiquetas**: muestra las órdenes que tienen las etiquetas seleccionadas.

Desde el listado se puede:

- **Ver detalle**: muestra los productos, precios y otros datos de la orden.
- **Editar**: modifica la orden para agregar o quitar productos. Vea "Editar una orden de venta".
- **Emitir factura**: convierte la orden en factura. Consulte [Crear factura](/punto-de-venta/crear-factura).
- **Imprimir**: imprime la orden con las plantillas configuradas.
- **Anular**: anula la orden si ya no es necesaria.
- **Cobrar**: registra el cobro cuando la orden ya fue emitida como factura.

## Editar una orden de venta

Para modificar una orden que aún no ha sido emitida como factura:

1. En el listado de órdenes, localizar la orden a modificar.
2. Seleccionar el icono de "Editar".
3. Modificar la referencia, el cliente, el vendedor, los productos, las cantidades, los precios, el descuento, las etiquetas o el sujeto a impuestos.
4. Seleccionar "Guardar".

Si la orden ya fue emitida como factura, no se puede editar.

## Anular una orden de venta

1. En el listado de órdenes, localizar la orden a anular.
2. Seleccionar "Anular".
3. Confirmar la anulación.

La orden queda anulada y los productos reservados se devuelven al inventario. No se puede anular una orden con envíos en tránsito asociados.

## API (llamadas desde sistemas externos)

Todas las llamadas requieren los siguientes encabezados:

```bash
-H "Accept: application/json" \
-H "Content-type: application/json" \
-H "X-User-Email: usuario@zauru.com" \
-H "X-User-Token: TOKEN_DEL_USUARIO"
```

Reemplazar el correo y el token por las credenciales de un usuario de Zauru. En los ejemplos, `1` representa el identificador de una orden de venta.

### Obtener datos para una orden nueva

`GET /pos/sale_orders/new.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/new.json
```

Devuelve los valores iniciales de la orden y los productos, paquetes, existencias y precios de la agencia del usuario:

```json
{
  "order": {
    "id": null,
    "order_number": null,
    "date": "2026-08-06",
    "seller_id": 1,
    "agency_id": 3,
    "payment_term_id": 4,
    "taxable": true,
    "pos": true
  },
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
  "item_stocks": {"344504": null},
  "bundle_stocks": {"2655": null},
  "item_prices": {"344504": 3050.0},
  "bundle_prices": {"2655": "229.0"}
}
```

### Listar órdenes de venta (datatables)

`POST /pos/sale_orders/datatables.json`

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
  https://app.zauru.com/pos/sale_orders/datatables.json
```

Devuelve el formato de DataTables. Cada fila de `data` incluye el número de orden (`z`), la referencia (`ref`), el cliente (`cli`), la cantidad de productos (`itms`), los totales (`tot`, `due`) y los enlaces de acciones (`r`, `r2`):

```json
{
  "draw": 0,
  "recordsTotal": 3,
  "recordsFiltered": 3,
  "data": [
    {
      "z": "<a href=\"/pos/sale_orders/16403492\">17297</a>",
      "ref": "",
      "cli": "LUIS CASTILLO",
      "itms": 1,
      "tot": "0.00",
      "due": "0.00",
      "DT_RowId": "pos-order-16403492"
    }
  ]
}
```

### Ver una orden de venta

`GET /pos/sale_orders/:id.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/1.json
```

Devuelve la orden y sus detalles. Además incluye el cliente (`payee`), los asientos contables (`entries`), los pagos (`payment_details`) y los formularios enviados (`submissions`). Los campos principales son:

```json
{
  "id": 1,
  "order_number": "ORD-456",
  "reference": "Orden de prueba",
  "date": "2026-08-06",
  "subtotal": "500.0",
  "total": "500.0",
  "due": "500.0",
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
      "unit_price": "250.0",
      "quantity": "2.0",
      "price": "500.0"
    }
  ]
}
```

### Crear una orden de venta

`POST /pos/sale_orders.json`

```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Orden de prueba",
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

El parámetro raíz se llama `invoice` aunque se trate de una orden. Devuelve la orden creada (`201 Created`) con los mismos campos que "Ver una orden de venta", sin las listas asociadas.

### Editar una orden de venta

`GET /pos/sale_orders/:id/edit.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/1/edit.json
```

Devuelve los valores de la orden para mostrarla en el formulario de edición.

### Actualizar una orden de venta

`PUT /pos/sale_orders/:id.json`

```bash
curl -X PUT \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  -d '{
    "invoice": {
      "reference": "Orden editada",
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

Devuelve la orden actualizada (`201 Created`) con los mismos campos que "Editar una orden de venta".

### Anular una orden de venta

`GET /pos/sale_orders/:id/void.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/1/void.json
```

Anula la orden y devuelve los productos reservados al inventario. No se puede anular una orden con envíos en tránsito asociados. Si la operación es correcta, devuelve `204 No Content` sin cuerpo.

### Eliminar una orden de venta

`DELETE /pos/sale_orders/:id.json`

```bash
curl -X DELETE \
  -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/1.json
```

Elimina la orden. Si la operación es correcta, devuelve `204 No Content` sin cuerpo.

### Obtener categorías, productos, paquetes, precios y existencias

`GET /pos/sale_orders/get_categories_items_bundles_prices_stocks_images.json`

```bash
curl -H "Accept: application/json" \
  -H "X-User-Email: usuario@zauru.com" \
  -H "X-User-Token: TOKEN_DEL_USUARIO" \
  https://app.zauru.com/pos/sale_orders/get_categories_items_bundles_prices_stocks_images.json
```

Devuelve la misma estructura de productos, paquetes, existencias y precios que "Obtener datos para una orden nueva", más las listas `categories`, `brands`, `gift_card_types`, `super_categories` y los contadores (`item_categories_count`, `count_all`, entre otros). Cada producto o paquete puede incluir campos internos como `gemma_q4f16_embedding`, que no son necesarios para integrar la facturación.
