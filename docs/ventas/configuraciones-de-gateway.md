---
title: "Configuraciones de Gateway / Pasarela de Pago"
sidebar_label: "Configuraciones de Gateway"
sidebar_position: 23
---

Este tutorial está enfocado en como crear, editar y gestionar las configuraciones de las pasarelas de pago (gateways) en Zauru. Las configuraciones de gateway permiten integrar Zauru con procesadores de pago para tokenizar tarjetas de crédito, procesar pagos recurrentes y manejar reembolsos.

## Listar Configuraciones de Gateway

Para consultar la lista de configuraciones de gateway:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Configuraciones de Gateway"**.

![imagen1](/img/ventas/configuraciones-de-gateway-1.png)

Las configuraciones de gateway pueden filtrarse por estado:
- **Activas**: Muestra solo las configuraciones activas.
- **Inactivas**: Muestra solo las configuraciones inactivas.
- **Todas**: Muestra todas las configuraciones.

## Crear una Nueva Configuración de Gateway

Los pasos para crear una nueva configuración de gateway son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Configuraciones de Gateway"**.
4. Presionar **"Nueva Configuración de Gateway"**.

![imagen2](/img/ventas/configuraciones-de-gateway-2.png)

Le aparecerán las opciones para crear una nueva configuración de gateway. Los campos que debe llenar son los siguientes:

a. **Gateway**: Seleccione el gateway/procesador de pago que desea configurar (ej. Stripe, Cybersource, etc.).

b. **Modo de prueba**: Marque esta opción si desea que las operaciones se realicen en modo de prueba/sandbox.

c. **Usuario**: Coloque el usuario o API key proporcionado por el gateway.

d. **Contraseña**: Coloque la contraseña o secret key proporcionada por el gateway.

e. **Secreto**: Coloque el secreto adicional si el gateway lo requiere.

f. **Llave pública**: Coloque la llave pública si el gateway la requiere.

g. **ID de terminal**: Coloque el identificador de terminal si el gateway lo requiere.

h. **ID de adquirente**: Coloque el identificador del banco adquirente si el gateway lo requiere.

i. **Certificado**: Adjunte el archivo de certificado si el gateway lo requiere (ej. archivo .pem o .crt).

j. **Activo**: Marque esta opción para que la configuración esté disponible para su uso.

k. **Predeterminado**: Marque esta opción si desea que esta sea la configuración predeterminada.

Para guardar presione **"Crear Configuración de Gateway"**.

![imagen3](/img/ventas/configuraciones-de-gateway-3.png)

### Opciones Avanzadas del Gateway

Dependiendo del gateway seleccionado, podrá habilitar funcionalidades adicionales:

- **Cuotas/Installments**: Permite configurar si el gateway soporta pagos en cuotas y su configuración.
- **Reembolsos/Refunds**: Permite configurar si el gateway soporta reembolsos y su configuración.
- **3D Secure**: Permite configurar si el gateway soporta autenticación 3D Secure.
- **Pagos recurrentes**: Permite configurar si el gateway soporta pagos recurrentes.
- **Tokenización**: Permite configurar si el gateway soporta tokenización de tarjetas.

Cada una de estas opciones tiene su propia configuración en formato JSON que debe ser proporcionada según la documentación del gateway.

## Editar una Configuración de Gateway

Para editar una configuración de gateway existente:

1. Ir a **"Ventas"** > **"Configuraciones"** > **"Configuraciones de Gateway"**.
2. Localizar la configuración que desea editar y presionar **"Editar"**.
3. Realizar los cambios necesarios.
4. Presionar **"Actualizar Configuración de Gateway"**.

![imagen4](/img/ventas/configuraciones-de-gateway-4.png)

**Nota**: Si deja el campo de contraseña en blanco al editar, la contraseña existente no se modificará.

## Eliminar una Configuración de Gateway

Para eliminar una configuración de gateway:

1. Ir a **"Ventas"** > **"Configuraciones"** > **"Configuraciones de Gateway"**.
2. Localizar la configuración que desea eliminar y presionar **"Destruirlo"**.
3. Confirmar la eliminación.

## API (llamadas desde sistemas externos)

### Listar configuraciones de gateway activas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/gateway_configs.json
```

### Crear una configuración de gateway
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "sales_gateway_config": {
      "gateway_id": "1",
      "test_mode": "0",
      "user": "api_user",
      "password": "api_password",
      "secret": "api_secret",
      "public_key": "public_key",
      "terminal_id": "terminal_001",
      "acquirer_id": "acquirer_001",
      "is_default": "1",
      "active": "1",
      "tokenization": "1",
      "refunds": "1",
      "recurring": "0"
    }
  }' \
  https://app.zauru.com/sales/settings/gateway_configs.json
```
