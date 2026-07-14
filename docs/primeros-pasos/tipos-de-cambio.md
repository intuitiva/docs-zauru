---
title: "Tipos de Cambio de Referencia"
sidebar_label: "Tipos de Cambio de Referencia"
sidebar_position: 1
---

Es probable que en ciertas ocasiones en su negocio facture y cobre en una moneda extranjera.

Zauru le permite establecer todos los tipos de cambio de la moneda que su proceso requiera. La forma de hacerlo es la siguiente:

1. Ir a “Configuraciones”.
2. Seleccionar “Tipos de Cambio”.
3. Seleccionar “Nuevo Tipo de Cambio”.

![imagen1](/img/primeros-pasos/tipos-de-cambio-1.jpg)


Le aparecerán las opciones para crear el tipo de cambio, las opciones son las siguientes:

1. Fecha del tipo de cambio.
2. En esta opción deberá colocar del lado izquierdo la moneda local = Tipo de cambio de la moneda extranjera.
3. Aquí podrá colocar de que fuente se obtuvo el tipo de cambio.
4. Para guardar los cambios presione “Crear tipo de cambio”.

![imagen2](/img/primeros-pasos/tipos-de-cambio-2.jpg)


Le deberá aparecer un mensaje de éxito en la pantalla notificándole que el tipo de cambio fue creado exitosamente. Cada vez que se factura o se cobre en esta moneda, se utilizara el tipo de cambio más reciente para calcular la conversión de la moneda.

![imagen3](/img/primeros-pasos/tipos-de-cambio-3.jpg)

## API (llamadas desde sistemas externos)

### Listado de los tipos de cambio activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/exchange_rates.json
```

Y esto me va a devolver un JSON con las siguientes características:

```json
[
    {
        "created_at": "2020-08-21T10:00:48Z",
        "currency_exchange_id": 1,
        "currency_id": 2,
        "date": "2020-08-21",
        "entity_id": 2,
        "exchange": 7.70132,
        "id": 5557,
        "source": "Banguat SOAP",
        "updated_at": "2020-08-21T10:00:48Z",
        "user_id": 1,
        "currency": {
            "code": "USD",
            "country": "US",
            "created_at": "2013-02-11T06:39:45Z",
            "id": 2,
            "name": "Dollar",
            "plural_name": "Dollars",
            "prefix": "$",
            "updated_at": "2020-05-30T01:27:51Z"
        },
        "currency_exchange": {
            "code": "GTQ",
            "country": "GT",
            "created_at": "2013-02-11T06:39:45Z",
            "id": 1,
            "name": "Quetzal",
            "plural_name": "Quetzales",
            "prefix": "Q",
            "updated_at": "2020-05-30T01:27:40Z"
        }
    }
]
```



## Exportar Tipos de Cambio

Zauru le permite exportar su historial de tipos de cambio en formato CSV o XLS. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Tipos de Cambio".
3. Seleccionar el formato de exportación deseado (CSV o XLS).

Los datos exportados incluyen: fecha, moneda de origen, tipo de cambio, moneda de destino, fuente, usuario que creó y fecha de creación.

### Exportar vía API

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/exchange_rates/export.csv
```

### Obtener detalle de un tipo de cambio con historial

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/exchange_rates/1.json
```
