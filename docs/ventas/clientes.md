---
title: "Clientes"
sidebar_label: "Clientes"
sidebar_position: 1
---

Este tutorial está enfocado en como crear, editar, y borrar clientes.  Estos nos sirven para los siguientes tipos de documentos:
1. Ordenes de ventas (ventas o POS)
2. Facturas (ventas o POS)
3. Pagos (ventas o POS)
4. Cotratos (preliminares, activos o cerrados)
5. Casos (abiertos o cerrados)

## Características del Cliente (campos)

Un cliente puede tener muchas características como por ejemplo su nit, la moneda en que se le factura, su teléfono, dirección, etc. Para especificar estas características deberá colocárselas al momento de crear o editar al cliente, las características son las siguientes:

1. Nombre (Comercial), Ejemplo: (Industria de Hamburguesas, S.A.)
2. Referencia (Nombre común o sobrenombre), Ejemplo: (McDonald´s)
3. Seleccione una categoría previamente creada para su cliente, Ejemplo: (Mayorista, Minorista). Esta categoría es opcional si está configurado el módulo de ventas para seleccionar categoría de beneficiario. Esta categoría se puede vincular con un listado de precios, para manejar diferentes precios entre sus clientes o proveedores.
4. NIT (Numero de identificación de impuestos).
5. Coloque la moneda en que se le factura al cliente.
6. Coloque la dirección.
7. Segunda línea para la dirección del beneficiario.
8. Latitud.
9. Longitud.
10. Dirección de entrega de productos.
11. Número de teléfono.
12. Correo electrónico.
13. Notas referente al cliente.

Para guardar sus cambios haga click sobre “Crear beneficiario” o "Editar Beneficiario"

## Listar Clientes
Para consultar la lista de clientes hay que entrar a Ventas >> Clientes se desplegara los clientes previamente creados. Las opciones son las siguientes:

a. Ver
b. Editar

Los clientes no se deben borrar porque tienen un historial; se recomienda solo desactivarlos.

## Crear Nuevo Cliente
Los pasos para crear un nuevo clientes son sencillos.

1. Ventas
2. Clientes
3. Nuevo Cliente

![imagen 1](/img/ventas/clientes-1.png)

Aparecerán los distintos campos que se pueden llenar para editar al cliente.

## Tarjetas de Crédito del Cliente

Zauru permite asociar tarjetas de crédito a los clientes para procesar pagos a través de pasarelas de pago. Para más detalles, consulte el tutorial completo de **"Tarjetas de Crédito de Clientes"**.

Para agregar una tarjeta de crédito:

1. Ir a **"Ventas"** > **"Clientes"**.
2. Seleccionar el cliente y hacer click sobre **"Verificar"** (El ojo).
3. En la página de detalles del cliente, busque la sección de **"Tarjetas de Crédito"**.
4. Presione **"Nueva Tarjeta de Crédito"**.

Los datos de la tarjeta (PAN, CVV) son enviados al gateway para tokenización y nunca se almacenan en Zauru. Solo se guardan los últimos 4 dígitos y la marca de la tarjeta.

## Exportar Clientes

Zauru permite exportar la lista de clientes a formato CSV o XLS desde la vista de listado de clientes.

## API (llamadas desde sistemas externos)

### Listado de clientes (pocos campos)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X get \
  https://app.zauru.com/sales/clients.json
```

esto me retornará un JSON como el siguiente:

```json
[
    [
        1,
        "44314-9",
        "Nombre del Cliente",
        "Dirección del cliente",
        "Correo del Cliente"
    ],
    [
        2,
        "",
        "Nombre del Cliente sin NIT ni dirección ni correo",
        "",
        ""
    ],
    ...
  ]
```
En donde el primer campo es el ID único de Zauru, el 2do es el NIT (opcional), el tercero es el nombre, el cuarto la dirección y el quinto el correo.

### Crear cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "name": "Cliente Prueba",
      "tin": "12345678-9",
      "reference": "alguna referencia",
      "address_line_1": "1 calle 1-11",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/sales/clients.json
```
esto me retornará un JSON como el siguiente:

```json
{
    "active": true,
    "address_line_1": "1 calle 1-11",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 1,
    "excempt": false,
    "foreign": false,
    "id": 1,
    "id_number": null,
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
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "alguna referencia",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:26:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 1
}
```
### Editar cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee": {
      "id": "1",
      "name": "Cliente Prueba 2",
      "tin": "12345678-9",
      "reference": "referencia actualizada",
      "address_line_1": "1 calle 2-22",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/sales/client/1.json
```
esto me retornará un JSON como el siguiente:

```json
{
    "active": true,
    "address_line_1": "1 calle 2-22",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 1,
    "excempt": false,
    "foreign": false,
    "id": 1,
    "id_number": null,
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
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba 2",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "referencia actualizada",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:31:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 1
}
```
### Obtener detalles del cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X get \
  https://app.zauru.com/sales/client/1.json
```

esto retornará un JSON como el siguiente:
```json
{
    "active": true,
    "address_line_1": "1 calle 2-22",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 561,
    "excempt": false,
    "foreign": false,
    "id": 543737,
    "id_number": null,
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
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba 2",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "referencia actualizada",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:31:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 306
}
```
