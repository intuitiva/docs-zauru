---
title: "Configuración avanzada del módulo de e-commerce"
sidebar_label: "Configuración avanzada del módulo de e-commerce"
sidebar_position: 2
---

La pantalla de configuración del módulo de e-commerce (`/ecommerce/ecommerce_settings/new`) contiene todos los parámetros necesarios para automatizar el procesamiento de los pedidos que ingresan desde una tienda en línea. A continuación se detalla cada campo.

## Parámetros de configuración

### Método de pago predeterminado
El método de pago que se asignará automáticamente al pago que se genera cuando se procesa un pedido de e-commerce. Se selecciona de la lista de métodos de pago activos de la entidad.

Este valor se almacena en la variable `ecommerce_payment_method_id`.

### Plazo de pago predeterminado
El plazo de pago que se asignará a las órdenes de venta generadas desde pedidos de e-commerce. Se selecciona de la lista de plazos de pago activos de la entidad.

Este valor se almacena en la variable `ecommerce_payment_term_id`.

### Bodega de despacho predeterminada
La bodega hacia donde se harán los envíos entre bodegas para consolidar los productos del pedido. Solo se muestran las agencias que cumplen con todos estos criterios:
- No virtuales
- Activas
- Tipo bodega (`warehouse = true`)
- Con responsabilidad de e-commerce habilitada

Desde esta bodega se emitirá la orden de venta.

Este valor se almacena en la variable `ecommerce_agency_id`.

### Vendedor predeterminado
El empleado vendedor que se asignará a las órdenes de venta generadas desde pedidos de e-commerce. Se selecciona de la lista de empleados activos con atributo de vendedor.

Este valor se almacena en la variable `ecommerce_seller_id`.

### Forzar que los pedidos requieran envío
Cuando se activa esta opción, todos los pedidos de e-commerce requerirán que se generen envíos entre bodegas antes de poder crear la orden de venta, incluso si la bodega de origen y destino son la misma. Esto es útil para mantener trazabilidad del movimiento de inventario.

Este valor se almacena en la variable `ecommerce_force_needs_delivery` como booleano (`"1"` = activado, `"0"` = desactivado).

### Permitir pagos sin confirmar
Cuando se activa esta opción, los pagos que se generen al procesar un pedido de e-commerce se registrarán sin necesidad de estar confirmados. Esto permite que el flujo de procesamiento no se detenga esperando confirmación bancaria.

Este valor se almacena en la variable `ecommerce_requests_unconfirmed_payments` como booleano (`"1"` = activado, `"0"` = desactivado).

### Usuario de e-commerce
El usuario que se utilizará para procesar las solicitudes de e-commerce. Solo se muestran los usuarios que cumplen con todos estos criterios:
- Usuarios activos
- Con suscripción activa
- Con permisos en el módulo de e-commerce (específicamente con acceso a la operación `ecommerce_requests`)

Este usuario es crítico para la integración ya que es el que se usará para autenticar las llamadas al API de e-commerce.

Este valor se almacena en la variable `ecommerce_requests_user_id`.

### URL de producción
La URL completa de la tienda en línea en ambiente de producción. Este valor se utiliza en el endpoint de [obtención de credenciales por URL](/e-commerce/api-obtener-credenciales-por-url) para que sistemas externos puedan resolver automáticamente qué usuario y token de Zauru utilizar basándose en la URL de la tienda.

Este valor se almacena en la variable `ecommerce_production_url`.

### URL de pruebas
La URL completa de la tienda en línea en ambiente de pruebas o staging. Funciona de manera similar a la URL de producción pero para entornos de desarrollo.

Este valor se almacena en la variable `ecommerce_tests_url`.

## Dónde se almacenan los valores

Todas las configuraciones se almacenan como variables de la entidad (`Variable`). Esto permite que:
- Cada entidad tenga su propia configuración independiente
- Se puedan crear, actualizar o eliminar valores según se necesite
- Se mantenga un registro del creador (`creator`) de cada variable

## API (llamadas desde sistemas externos)

### Obtener la configuración actual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/ecommerce_settings/new.json
```

### Actualizar la configuración

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d "ecommerce_payment_method_id=5" \
  -d "ecommerce_payment_term_id=3" \
  -d "ecommerce_agency_id=12" \
  -d "ecommerce_seller_id=8" \
  -d "ecommerce_force_needs_delivery=1" \
  -d "ecommerce_requests_unconfirmed_payments=0" \
  -d "ecommerce_requests_user_id=42" \
  -d "ecommerce_production_url=https://mitienda.com" \
  -d "ecommerce_tests_url=https://staging.mitienda.com" \
  https://app.zauru.com/ecommerce/ecommerce_settings.json
```

La respuesta a una actualización exitosa redirige de vuelta al formulario con un mensaje de confirmación.
