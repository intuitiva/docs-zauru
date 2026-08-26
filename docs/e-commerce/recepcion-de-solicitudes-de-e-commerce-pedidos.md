---
title: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_label: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_position: 3
---

Cuando su tienda en línea empieza a recibir pedidos a cualquier hora del día, cada uno entra a Zauru por la sección de solicitudes de e-commerce, y aquí es donde usted les da seguimiento. Si un pedido no se procesó bien, el error queda registrado y usted puede corregirlo y reprocesarlo sin perder la venta.

Las solicitudes de e-commerce registran la información pertinente que permite darle seguimiento al proceso completo; los datos que quedan registrados son:
1. Los envíos entre bodegas que se generan automáticamente para poder completar el pedido desde la bodega de donde se están consolidando los pedidos.
2. La orden de ventas asociada con su pago pertinente (si aplica)
3. El cliente (encontrado o creado) asociado a la orden de venta.

## Filtros de solicitudes

Cuando ya son varios pedidos al día, los filtros le ayudan a concentrarse únicamente en lo que está pendiente.

Las solicitudes de e-commerce se pueden filtrar por su estado de procesamiento:

1. **Pendientes** (`scope=pending`): Muestra únicamente las solicitudes que aún no han sido procesadas, es decir, aquellas cuyas facturas asociadas no han sido emitidas. Este es el filtro predeterminado.
2. **Emitidas** (`scope=issued`): Muestra las solicitudes que ya fueron procesadas exitosamente y cuyas facturas asociadas ya fueron emitidas.
3. **Todas** (`scope=all`): Muestra todas las solicitudes activas (no anuladas) sin importar su estado de procesamiento.

Adicionalmente, existe una vista de **solicitudes anuladas** que muestra todas las solicitudes que han sido anuladas (`voided: true`).

## Solicitudes no procesadas
Cuando por alguna razón, las solicitudes no han sido procesadas el error va a aparecer en la sección de errores y esto me va a permitir tomar acción para corregirla y reprocesarla o destruirla.
![errores y acciones de solicitudes de ecommerce](/img/e-commerce/recepcion-de-solicitudes-de-e-commerce-pedidos-1.png)

El volver a procesar la solicitud intentará:
1. Validar que el pedido coincida con la información en Zauru, específicamente códigos del item (SKUs) y existencias disponibles
2. Crear o encontrar el cliente basado en el __Nombre EXACTO__
3. Realizar los envíos a la bodega de despacho desde las otras bodegas para poder procesar la orden de venta
4. Realizar la orden de venta
5. Realizar el pago pertinente (si fue enviado)

## Gestión manual de solicitudes de e-commerce

Además de recibir pedidos por el API, Zauru permite gestionar manualmente las solicitudes de e-commerce desde la interfaz web.

Esto es muy útil cuando un cliente compra por teléfono o por chat y usted quiere registrar su pedido aprovechando el mismo flujo automatizado.

### Ver detalle de una solicitud
Al seleccionar una solicitud de la lista, se muestra una vista detallada con toda la información de la solicitud: parámetros originales (`raw_params`), errores (`raw_errors`), facturas y envíos asociados, fecha de creación y última actualización, y estado de completado.

### Crear una solicitud manualmente
Desde la interfaz se puede crear una nueva solicitud de e-commerce manualmente. Esto es útil para:
- Registrar pedidos recibidos por otros medios (teléfono, chat, etc.) usando el mismo flujo de e-commerce
- Probar la integración sin depender de la tienda en línea

Al crear una solicitud, se registra el `user_id` del usuario que la crea y los parámetros en formato JSON.

### Editar una solicitud
Se puede modificar una solicitud existente antes de que sea procesada, por ejemplo para corregir datos del cliente, items o cantidades.

### Anular una solicitud
Las solicitudes se pueden anular en lugar de eliminar. Al anular (`destroy`), se marca el campo `voided: true` y se registra el usuario que realizó la anulación (`voided_by`). Las solicitudes anuladas permanecen en el sistema pero no se muestran en las vistas principales (se accede desde la vista de anuladas).

Si la anulación falla, se muestra un mensaje de error con los detalles.

### Procesar una solicitud (generar movimientos, orden de venta y pago)
Desde la vista de detalle de una solicitud, se puede ejecutar manualmente el procesamiento completo a través de la acción "Generar movimientos, orden de venta y pagos" (`generate_movements_order_and_payments`). Esto ejecuta el método `EcommerceRequest.generate_movements_order_and_payments` que:
1. Crea o encuentra el cliente
2. Genera los envíos entre bodegas necesarios
3. Crea la orden de venta
4. Registra el pago (si aplica)
5. Marca la solicitud como completada

## Detección de solicitudes duplicadas

Para prevenir la creación de pedidos duplicados, Zauru verifica el campo `original_request_id` que viene dentro del JSON de la solicitud original (`original_request`). Si ya existe una solicitud con el mismo `original_request_id` en la entidad, la nueva solicitud se rechaza con un error indicando que la solicitud ya existe.

Esto es especialmente importante cuando la tienda en línea reenvía notificaciones (webhooks) que podrían generar pedidos duplicados.

Para que esta validación funcione correctamente, el sistema externo debe incluir un identificador único (`id`) dentro del JSON que envía en el campo `original_request`.

Con esto, usted ya sabe dónde aterriza cada pedido de su tienda y cómo mantener la sección en orden: revisar pendientes, corregir errores, anular lo que no va y procesar lo que sí. Cuando el flujo esté rodando, verá sus órdenes de venta y sus pagos avanzar sin intervención.

## API (llamadas desde sistemas externos)

### Listar solicitudes

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests.json
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Listar solicitudes filtradas por estado

```bash
# Solo pendientes
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/ecommerce/ecommerce_requests.json?scope=pending"

# Solo emitidas
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/ecommerce/ecommerce_requests.json?scope=issued"

# Todas
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/ecommerce/ecommerce_requests.json?scope=all"
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Ver solicitudes anuladas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/voided.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "entity_id": 3,
    "user_id": 4,
    "raw_params": "",
    "completed": false,
    "raw_errors": null,
    "completed_at": null,
    "invoices_count": 0,
    "shipments_count": 0,
    "created_at": "2023-11-08T23:06:11.778Z",
    "updated_at": "2023-11-10T20:19:28.571Z",
    "original_request": "{\"z_email\":\"api@ejemplo.com\",\"z_token\":\"TOKEN_EJEMPLO_123\",\"originalRequest\":{\"id\":8,\"parent_id\":0,\"status\":\"on-hold\",\"currency\":\"GTQ\",\"version\":\"7.9.0\",\"prices_include_tax\":false,\"date_created\":\"2023-11-08T17:04:54\",\"date_modified\":\"2023-11-08T17:04:55\",\"discount_total\":\"0.00\",\"discount_tax\":\"0.00\",\"shipping_total\":\"15.00\",\"shipping_tax\":\"0.00\",\"cart_tax\":\"0.00\",\"total\":\"115.00\",\"total_tax\":\"0.00\",\"customer_id\":2,\"order_key\":\"wc_order_EJEMPLO001\",\"billing\":{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"company\":\"\",\"address_1\":\"Calle Ficticia 10\",\"address_2\":\"\",\"city\":\"Guatemala\",\"state\":\"GT-GU\",\"postcode\":\"01001\",\"country\":\"GT\",\"email\":\"cliente@ejemplo.com\",\"phone\":\"5555-0003\"},\"shipping\":{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"company\":\"\",\"address_1\":\"Calle Ficticia 10\",\"address_2\":\"\",\"city\":\"Guatemala\",\"state\":\"GT-GU\",\"postcode\":\"01001\",\"country\":\"GT\",\"phone\":\"\"},\"payment_method\":\"bacs\",\"payment_method_title\":\"Transferencia bancaria directa\",\"transaction_id\":\"\",\"customer_ip_address\":\"192.168.1.1\",\"customer_user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15\",\"created_via\":\"checkout\",\"customer_note\":\"\",\"date_completed\":null,\"date_paid\":null,\"cart_hash\":\"c884c8ccbc4b51b10f3ed0978ffad092\",\"number\":\"1\",\"meta_data\":[{\"id\":10,\"key\":\"_billing_nit\",\"value\":\"\"},{\"id\":11,\"key\":\"_billing_cui\",\"value\":\"1234567890101\"},{\"id\":12,\"key\":\"is_vat_exempt\",\"value\":\"no\"}],\"line_items\":[{\"id\":13,\"name\":\"De 101 a 250 DTE's mensuales COFIDI\",\"product_id\":23,\"variation_id\":0,\"quantity\":1,\"tax_class\":\"\",\"subtotal\":\"100.00\",\"subtotal_tax\":\"0.00\",\"total\":\"100.00\",\"total_tax\":\"0.00\",\"taxes\":[],\"meta_data\":[],\"sku\":\"Cofidi-1\",\"price\":100,\"image\":{\"id\":\"3\",\"src\":\"https://plain1.zauru.shop/wp-content/uploads/2023/06/item301851_gegi1uzknszohy7m4epm-1.png\"},\"parent_name\":null}],\"tax_lines\":[],\"shipping_lines\":[{\"id\":14,\"method_title\":\"Flat rate\",\"method_id\":\"flat_rate\",\"instance_id\":\"1\",\"total\":\"15.00\",\"total_tax\":\"0.00\",\"taxes\":[],\"meta_data\":[{\"id\":15,\"key\":\"Artículos\",\"value\":\"De 101 a 250 DTE's mensuales COFIDI &times; 1\",\"display_key\":\"Artículos\",\"display_value\":\"De 101 a 250 DTE's mensuales COFIDI &times; 1\"}]}],\"fee_lines\":[],\"coupon_lines\":[],\"refunds\":[],\"payment_url\":\"https://plain1.zauru.shop/checkout/order-pay/1/?pay_for_order=true&key=wc_order_EJEMPLO001\",\"is_editable\":true,\"needs_payment\":false,\"needs_processing\":true,\"date_created_gmt\":\"2023-11-08T23:04:54\",\"date_modified_gmt\":\"2023-11-08T23:04:55\",\"date_completed_gmt\":null,\"date_paid_gmt\":null,\"currency_symbol\":\"Q\",\"_links\":{\"self\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/orders/8\"}],\"collection\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/orders\"}],\"customer\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/customers/2\"}]}}}",
    "error_message": "\"The state should be processing only, found: on-hold\"",
    "voided": true,
    "voided_at": "2023-11-10T20:19:28.569Z",
    "voider_id": 5,
    "original_request_id": null
  },
  {
    "id": 6,
    "zid": 7,
    "entity_id": 3,
    "user_id": 4,
    "raw_params": "",
    "completed": false,
    "raw_errors": null,
    "completed_at": null,
    "invoices_count": 0,
    "shipments_count": 0,
    "created_at": "2023-11-08T22:59:12.053Z",
    "updated_at": "2023-11-10T20:26:05.864Z",
    "original_request": "{\"z_email\":\"api@ejemplo.com\",\"z_token\":\"TOKEN_EJEMPLO_123\",\"originalRequest\":{\"id\":9,\"parent_id\":0,\"status\":\"on-hold\",\"currency\":\"GTQ\",\"version\":\"7.9.0\",\"prices_include_tax\":false,\"date_created\":\"2023-11-08T16:55:36\",\"date_modified\":\"2023-11-08T16:55:37\",\"discount_total\":\"0.00\",\"discount_tax\":\"0.00\",\"shipping_total\":\"15.00\",\"shipping_tax\":\"0.00\",\"cart_tax\":\"0.00\",\"total\":\"115.00\",\"total_tax\":\"0.00\",\"customer_id\":2,\"order_key\":\"wc_order_EJEMPLO002\",\"billing\":{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"company\":\"\",\"address_1\":\"Calle Ficticia 10\",\"address_2\":\"\",\"city\":\"Guatemala\",\"state\":\"GT-GU\",\"postcode\":\"01001\",\"country\":\"GT\",\"email\":\"cliente@ejemplo.com\",\"phone\":\"5555-0003\"},\"shipping\":{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"company\":\"\",\"address_1\":\"Calle Ficticia 10\",\"address_2\":\"\",\"city\":\"Guatemala\",\"state\":\"GT-GU\",\"postcode\":\"01001\",\"country\":\"GT\",\"phone\":\"\"},\"payment_method\":\"bacs\",\"payment_method_title\":\"Transferencia bancaria directa\",\"transaction_id\":\"\",\"customer_ip_address\":\"192.168.1.1\",\"customer_user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15\",\"created_via\":\"checkout\",\"customer_note\":\"\",\"date_completed\":null,\"date_paid\":null,\"cart_hash\":\"c884c8ccbc4b51b10f3ed0978ffad092\",\"number\":\"2\",\"meta_data\":[{\"id\":16,\"key\":\"_billing_nit\",\"value\":\"\"},{\"id\":17,\"key\":\"_billing_cui\",\"value\":\"1234567890101\"},{\"id\":18,\"key\":\"is_vat_exempt\",\"value\":\"no\"}],\"line_items\":[{\"id\":19,\"name\":\"De 101 a 250 DTE's mensuales COFIDI\",\"product_id\":23,\"variation_id\":0,\"quantity\":1,\"tax_class\":\"\",\"subtotal\":\"100.00\",\"subtotal_tax\":\"0.00\",\"total\":\"100.00\",\"total_tax\":\"0.00\",\"taxes\":[],\"meta_data\":[],\"sku\":\"Cofidi-1\",\"price\":100,\"image\":{\"id\":\"3\",\"src\":\"https://plain1.zauru.shop/wp-content/uploads/2023/06/item301851_gegi1uzknszohy7m4epm-1.png\"},\"parent_name\":null}],\"tax_lines\":[],\"shipping_lines\":[{\"id\":20,\"method_title\":\"Flat rate\",\"method_id\":\"flat_rate\",\"instance_id\":\"1\",\"total\":\"15.00\",\"total_tax\":\"0.00\",\"taxes\":[],\"meta_data\":[{\"id\":21,\"key\":\"Artículos\",\"value\":\"De 101 a 250 DTE's mensuales COFIDI &times; 1\",\"display_key\":\"Artículos\",\"display_value\":\"De 101 a 250 DTE's mensuales COFIDI &times; 1\"}]}],\"fee_lines\":[],\"coupon_lines\":[],\"refunds\":[],\"payment_url\":\"https://plain1.zauru.shop/checkout/order-pay/2/?pay_for_order=true&key=wc_order_EJEMPLO002\",\"is_editable\":true,\"needs_payment\":false,\"needs_processing\":true,\"date_created_gmt\":\"2023-11-08T22:55:36\",\"date_modified_gmt\":\"2023-11-08T22:55:37\",\"date_completed_gmt\":null,\"date_paid_gmt\":null,\"currency_symbol\":\"Q\",\"_links\":{\"self\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/orders/9\"}],\"collection\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/orders\"}],\"customer\":[{\"href\":\"https://plain1.zauru.shop/wp-json/wc/v3/customers/2\"}]}}}",
    "error_message": "\"The state should be processing only, found: on-hold\"",
    "voided": true,
    "voided_at": "2023-11-10T20:26:05.861Z",
    "voider_id": 5,
    "original_request_id": null
  }
]
```

### Ver detalle de una solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "827",
  "zid": "36",
  "entity_id": "670",
  "user_id": "1514",
  "raw_params": "\"{\\\"client\\\":{\\\"name\\\":\\\"Las Antorchas SA \\\",\\\"tin\\\":\\\"1251433-0\\\",\\\"address_line_1\\\":\\\"3ra Avenida Sur N 1 Antigua Anti...",
  "completed": true,
  "raw_errors": null,
  "completed_at": "2020-11-20 20:47:36.544391",
  "invoices_count": "1",
  "shipments_count": "0",
  "created_at": "2020-11-20 20:47:33.716787",
  "updated_at": "2020-11-23 17:06:19.629972",
  "original_request": null,
  "error_message": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "original_request_id": null
}
```

### Procesar una solicitud manualmente

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312/generate_movements_order_and_payments.json
```

### Anular una solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312.json
  ```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Nueva solicitud (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "entity_id": 1,
  "user_id": null,
  "raw_params": null,
  "completed": false,
  "raw_errors": null,
  "completed_at": null,
  "invoices_count": 0,
  "shipments_count": 0,
  "created_at": null,
  "updated_at": null,
  "original_request": null,
  "error_message": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "original_request_id": null
}
```

### Editar solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312/edit.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "827",
  "zid": "36",
  "entity_id": "670",
  "user_id": "1514",
  "raw_params": "\"{\\\"client\\\":{\\\"name\\\":\\\"Las Antorchas SA \\\",\\\"tin\\\":\\\"1251433-0\\\",\\\"address_line_1\\\":\\\"3ra Avenida Sur N 1 Antigua Anti...",
  "completed": true,
  "raw_errors": null,
  "completed_at": "2020-11-20 20:47:36.544391",
  "invoices_count": "1",
  "shipments_count": "0",
  "created_at": "2020-11-20 20:47:33.716787",
  "updated_at": "2020-11-23 17:06:19.629972",
  "original_request": null,
  "error_message": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "original_request_id": null
}
```

### Crear solicitud

El campo `original_request` debe llevar un JSON (como texto) con el pedido, incluyendo un identificador unico `id` para evitar duplicados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "ecommerce_request": {
      "original_request": "{\"id\":\"ORD-001\",\"customer\":\"Juan Perez\",\"items\":[]}"
    }
  }' \
  https://app.zauru.com/ecommerce/ecommerce_requests.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "827",
  "zid": "36",
  "entity_id": "670",
  "user_id": "1514",
  "raw_params": "\"{\\\"client\\\":{\\\"name\\\":\\\"Las Antorchas SA \\\",\\\"tin\\\":\\\"1251433-0\\\",\\\"address_line_1\\\":\\\"3ra Avenida Sur N 1 Antigua Anti...",
  "completed": true,
  "raw_errors": null,
  "completed_at": "2020-11-20 20:47:36.544391",
  "invoices_count": "1",
  "shipments_count": "0",
  "created_at": "2020-11-20 20:47:33.716787",
  "updated_at": "2020-11-23 17:06:19.629972",
  "original_request": null,
  "error_message": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "original_request_id": null
}
```

### Actualizar solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "ecommerce_request": {
      "error_message": "corregido desde el API"
    }
  }' \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "827",
  "zid": "36",
  "entity_id": "670",
  "user_id": "1514",
  "raw_params": "\"{\\\"client\\\":{\\\"name\\\":\\\"Las Antorchas SA \\\",\\\"tin\\\":\\\"1251433-0\\\",\\\"address_line_1\\\":\\\"3ra Avenida Sur N 1 Antigua Anti...",
  "completed": true,
  "raw_errors": null,
  "completed_at": "2020-11-20 20:47:36.544391",
  "invoices_count": "1",
  "shipments_count": "0",
  "created_at": "2020-11-20 20:47:33.716787",
  "updated_at": "2020-11-23 17:06:19.629972",
  "original_request": null,
  "error_message": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "original_request_id": null
}
```
