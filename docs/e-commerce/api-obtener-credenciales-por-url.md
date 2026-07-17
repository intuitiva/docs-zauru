---
title: "Obtener credenciales por URL con el API"
sidebar_label: "Obtener credenciales por URL con el API"
sidebar_position: 6
---

Este endpoint permite a sistemas externos resolver automáticamente las credenciales de usuario de Zauru necesarias para interactuar con el API de e-commerce, basándose en la URL de la tienda en línea.

## Funcionamiento

Cuando un sistema externo necesita conectarse a Zauru pero no conoce qué usuario y token utilizar, puede consultar este endpoint enviando el URL de la tienda. Zauru busca en sus variables de entidad el URL registrado y devuelve el email y token del usuario de e-commerce asociado.

## Autenticación

Este endpoint no utiliza la autenticación estándar por `X-User-Email` y `X-User-Token`. En su lugar, requiere un token de autorización único que debe enviarse como parámetro `auth_token`.

El valor del token se configura en la variable de entorno `ECOMMERCE_AUTH_TOKEN` del servidor Zauru. Solicítalo a tu implementador para poder utilizar el endpoint.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `auth_token` | string | Token de autorización para acceder al endpoint. Debe coincidir con `ECOMMERCE_AUTH_TOKEN` |
| `prod_ecommerce_url` | string | URL de la tienda en producción. Se busca una variable `ecommerce_production_url` con este valor en alguna entidad |
| `tests_ecommerce_url` | string | URL de la tienda en pruebas. Se busca una variable `ecommerce_production_url` con este valor en alguna entidad |

Se debe enviar al menos uno de los dos parámetros de URL (`prod_ecommerce_url` o `tests_ecommerce_url`).

## Lógica de búsqueda

1. Si se envía `prod_ecommerce_url`, se busca una variable con nombre `ecommerce_production_url` y valor igual al URL enviado.
2. Si se envía `tests_ecommerce_url`, se busca una variable con nombre `ecommerce_production_url` y valor igual al URL enviado.
3. Si se encuentra la variable, se obtiene la entidad (`Entity`) a la que pertenece.
4. De esa entidad, se busca la variable `ecommerce_requests_user_id` que contiene el ID del usuario de e-commerce.
5. Con ese ID, se obtiene el usuario y se devuelve su `email` y `authentication_token`.

## Respuesta exitosa

```json
{
  "user": "ecommerce@empresa.com",
  "token": "XSDFKK09238487DLFS"
}
```

## Respuesta de error

Si no se encuentra el URL o no hay usuario configurado:

```json
{
  "error": "User not found"
}
```

Con código de estado HTTP `404 Not Found`.

## Ejemplo de uso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  "https://app.zauru.com/ecommerce/ecommerce_requests/credentials_based_on_url.json?auth_token=jHr2PZ75sJHxpb2HGAo7&prod_ecommerce_url=https://mitienda.com"
```

O usando la URL de pruebas:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  "https://app.zauru.com/ecommerce/ecommerce_requests/credentials_based_on_url.json?auth_token=jHr2PZ75sJHxpb2HGAo7&tests_ecommerce_url=https://staging.mitienda.com"
```

## Caso de uso

Este endpoint es particularmente útil para sistemas de integración que necesitan conectarse a múltiples entidades de Zauru sin tener que almacenar manualmente las credenciales de cada una. Por ejemplo, un servicio de sincronización centralizado puede:

1. Conocer la URL de la tienda (que es pública)
2. Consultar este endpoint para obtener las credenciales de Zauru
3. Usar las credenciales obtenidas para las llamadas subsiguientes al API de e-commerce

## Dependencias de configuración

Para que este endpoint funcione correctamente, la entidad debe tener configuradas las siguientes variables:

| Variable | Descripción |
|----------|-------------|
| `ecommerce_production_url` | La URL de producción de la tienda, configurada en [configuración avanzada](/e-commerce/configuracion-avanzada-del-modulo-de-e-commerce) |
| `ecommerce_requests_user_id` | El ID del usuario de e-commerce, configurado en [configuración avanzada](/e-commerce/configuracion-avanzada-del-modulo-de-e-commerce) |
