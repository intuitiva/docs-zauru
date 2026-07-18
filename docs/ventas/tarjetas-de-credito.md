---
title: "Tarjetas de Crédito de Clientes"
sidebar_label: "Tarjetas de Crédito"
sidebar_position: 6
---

Este tutorial está enfocado en como agregar, consultar y desactivar tarjetas de crédito para los clientes. Las tarjetas de crédito permiten a los clientes realizar pagos a través de una pasarela de pago configurada previamente.

## Requisitos Previos

Antes de poder agregar una tarjeta de crédito a un cliente, se debe contar con lo siguiente:

1. El cliente debe tener configurada su **dirección** (`address_line_1`).
2. Si el cliente es extranjero, debe tener configurado el **país**.
3. Debe existir al menos una **configuración de gateway** activa (vea el tutorial de "Configuraciones de Gateway/Pasarela de Pago").
4. El gateway configurado debe tener habilitada la opción de **tokenización**.

## Agregar una Tarjeta de Crédito al Cliente

Los pasos para agregar una tarjeta de crédito a un cliente son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Clientes"**.
3. Seleccionar el cliente al que desea agregar la tarjeta de crédito haciendo click sobre **"Verificar"** (El ojo).
4. En la página de detalles del cliente, busque la sección de **"Tarjetas de Crédito"** y presione **"Nueva Tarjeta de Crédito"**.

![imagen1](/img/ventas/tarjetas-de-credito-1.png)

Le aparecerán las opciones para agregar una nueva tarjeta de crédito. Los campos que debe llenar son los siguientes:

a. **Gateway**: Seleccione la configuración de gateway/pasarela de pago a través de la cual se procesará la tarjeta.

b. **Tipo de tarjeta**: Seleccione si es tarjeta de crédito o débito.

c. **Nombre del tarjetahabiente**: Coloque el nombre que aparece en la tarjeta.

d. **Número de tarjeta (PAN)**: Coloque el número de la tarjeta de crédito.

e. **CVV**: Coloque el código de seguridad de 3 o 4 dígitos.

f. **Mes de vencimiento**: Seleccione el mes de vencimiento de la tarjeta.

g. **Año de vencimiento**: Seleccione el año de vencimiento de la tarjeta.

h. **Predeterminada**: Marque esta opción si desea que esta tarjeta sea la predeterminada para el cliente. Si es la primera tarjeta del cliente, se marcará automáticamente.

Para guardar presione **"Crear Tarjeta de Crédito"**.

![imagen2](/img/ventas/tarjetas-de-credito-2.png)

Al crear la tarjeta, Zauru enviará los datos al gateway configurado para **tokenizar** la tarjeta. Esto significa que los datos sensibles (número de tarjeta y CVV) no se almacenan en Zauru, sino que se obtiene un token del gateway que representa la tarjeta de forma segura.

Le aparecerá un mensaje de éxito en pantalla y será redirigido a los detalles del cliente donde podrá ver la tarjeta agregada.

## Ver Detalles de una Tarjeta de Crédito

Para ver los detalles de una tarjeta de crédito:

1. Ir a **"Ventas"**.
2. Seleccionar **"Clientes"**.
3. Seleccionar el cliente y hacer click sobre **"Verificar"** (El ojo).
4. En la sección de **"Tarjetas de Crédito"**, haga click sobre la tarjeta que desea ver.

En la página de detalles de la tarjeta podrá ver:
- Los últimos 4 dígitos de la tarjeta.
- La marca de la tarjeta (Visa, Mastercard, etc.).
- El nombre del tarjetahabiente.
- La fecha de vencimiento.
- El gateway configurado.
- El historial de **intenciones de operación** del gateway asociadas a esta tarjeta.

![imagen3](/img/ventas/tarjetas-de-credito-3.png)

## Desactivar una Tarjeta de Crédito

Si desea desactivar una tarjeta de crédito (no se elimina permanentemente, solo se desactiva):

1. Ir a **"Ventas"**.
2. Seleccionar **"Clientes"**.
3. Seleccionar el cliente y hacer click sobre **"Verificar"** (El ojo).
4. En la sección de **"Tarjetas de Crédito"**, haga click sobre la tarjeta que desea desactivar.
5. En la página de detalles de la tarjeta, presione **"Destruirlo"** en la parte inferior.

La tarjeta será desactivada (soft-delete) y ya no estará disponible para realizar pagos.

![imagen4](/img/ventas/tarjetas-de-credito-4.png)

## API (llamadas desde sistemas externos)

### Crear tarjeta de crédito para un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "sales_credit_card": {
      "payee_id": "1",
      "gateway_config_id": "1",
      "card_type": "credit",
      "cardholder_name": "Juan Perez",
      "exp_month": "12",
      "exp_year": "2027",
      "is_default": "1",
      "card_pan": "4111111111111111",
      "card_cvv": "123"
    }
  }' \
  https://app.zauru.com/sales/clients/1/credit_cards.json
```
