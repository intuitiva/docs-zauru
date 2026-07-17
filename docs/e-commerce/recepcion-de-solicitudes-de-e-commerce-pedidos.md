---
title: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_label: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_position: 3
---

Cuando un sistema de e-commerce (tienda en linea) le manda a Zauru un pedido entra a travez del módulo de e-commerce en la sección de solicitudes de e-commerce.

Las solicitudes de e-commerce registran la información pertinente que permite darle seguimiento al proceso completo. Los datos que quedan registrados son:
1. Los envíos entre bodegas que se generan automáticamente para poder completar el pedido desde la bodega de donde se están consolidando los pedidos.
2. La orden de ventas asociada con su pago pertinente (si aplica)
3. El cliente (encontrado o creado) asociado a la orden de venta.

## Filtros de solicitudes

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

### Ver solicitudes anuladas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/voided.json
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

### Nueva solicitud (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_requests/new.json
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
