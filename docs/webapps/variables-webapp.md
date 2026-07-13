---
title: "Variables Webapp"
sidebar_label: "Variables Webapp"
sidebar_position: 2
---

Estas variables se utilizan usualmente para guardar configuraciones de nuestras webapps.

Son totalmente accesibles desde el API por lo que cualquier aplicación externa hecha a la medida puede consultarla, editarla o destruirla (si tienen suficientes permisos).

Estas variables pueden contener cualquier tipo de información en modo de texto, es responsabilidad del dearrollador interpretar esa información antes de utilizarla.

El listado de variables es el siguiente:
![webapp vars index](/img/webapps/variables-webapp-1.png)

## Nueva variable para webapp

Hay campos adicionales que pueden servir para tipificar el valor de la variable, los únicos campos oblicagorios son nombre, clase y valor.
![webapp vars new](/img/webapps/variables-webapp-2.png)

## Editar variable para webapp
Es el mismo formulario que para crear una nueva variable.
![webapp vars edit](/img/webapps/variables-webapp-3.png)

## Detalles de una variable para webapp
El detalle me muestra el valor y todos los campos adicionales de la webapp.
![webapp var show](/img/webapps/variables-webapp-4.png)

## API (llamadas desde sistemas externos)

### Solicitar listado de variables

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_vars.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "created_at":"2019-07-16T19:08:53Z",
    "creator":"Programador Estrella",
    "description":"prueba",
    "entity_id":1,
    "id":1,
    "kind":"Entero",
    "name":"primera_variable",
    "updated_at":"2019-07-16T19:08:53Z",
    "user_id":null,
    "value":"319"
  },
  {
    "created_at":"2019-07-16T20:05:49Z",
    "creator":"Programador Estrella",
    "description":"segunda prueba",
    "entity_id":1,
    "id":2,
    "kind":"Cadena",
    "name":"segunda_variable",
    "updated_at":"2019-07-16T20:05:49Z",
    "user_id":null,
    "value":"LSI301899DKMCIS"
  }
]
```

### Ver el detalle de una variable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_vars/2.json
```

Esto devolverá un JSON similar a este:
```json
{
  "created_at":"2019-07-16T20:05:49Z",
  "creator":"Programador Estrella",
  "description":"segunda prueba",
  "entity_id":1,
  "id":2,
  "kind":"Cadena",
  "name":"segunda_variable",
  "updated_at":"2019-07-16T20:05:49Z",
  "user_id":null,
  "value":"LSI301899DKMCIS"
}
```

### Crear una nueva variable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "variable": {
      "name": "tercera_variable",
      "kind": "Entero",
      "value": "12233",
      "description": "otra prueba mas"
    }
  }' \
  https://app.zauru.com/apps/webapp_vars.json
```

Esto devolverá un JSON similar a este:
```json
{
  "created_at":"2019-07-16T20:05:49Z",
  "creator":"Programador Estrella",
  "description":"segunda prueba",
  "entity_id":1,
  "id":3,
  "kind":"Entero",
  "name":"tercera_variable",
  "updated_at":"2019-07-16T20:05:49Z",
  "user_id":null,
  "value":"12233"
}
```

### Editar una variable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "variable": {
      "name": "tercera_variable_v2",
      "kind": "Entero",
      "value": "122334",
      "description": "otra prueba mas"
    }
  }' \
  https://app.zauru.com/apps/webapp_vars/3.json
```

Esta llamada no devolverá nada

### Borrar una variable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/apps/webapp_vars/3.json
```

Esta llamada no devolverá nada
