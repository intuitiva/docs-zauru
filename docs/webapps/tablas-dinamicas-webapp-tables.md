---
title: "Tablas dinámicas (WebApp Tables)"
sidebar_label: "Tablas dinámicas (WebApp Tables)"
sidebar_position: 4
---

¿Necesita guardar en Zauru información que el sistema no maneja de fábrica —un catálogo propio, el historial de versiones de un registro o un listado de opciones para su webapp? Las tablas dinámicas (WebApp Tables) le permiten ampliar cualquier funcionalidad que su operación requiera, sin esperar a que el sistema la incluya. Cada tabla incluye su CRUD completo (crear, editar, eliminar y listar), acepta estructuras de números y texto, y puede crecer tanto como usted la necesite.

## Creación y edición de WebApp Table

Para crear una WebApp table basta con dirigirnos en el menú a la opción:
WebApps => Tablas => New WebApp Table

![WebAppTable listado 1](/img/webapps/tablas-dinamicas-webapp-tables-1.png)

En el siguiente ejemplo, una empresa desea almacenar en Zauru los diferentes tipos de moneda que pueden recibir, por ejemplo (moneda local, moneda de plata, moneda de oro, etc...), en este caso hipotético, este listado no se maneja explicitamente en Zauru, por lo cual recurrimos a la ayuda de una webapp table en donde podemos definir una estructura para ese listado.

Nuestro listado se llamará "Tipos de monedas", el cuál necesitamos que almacene el nombre y un estado.

> No preocuparse por el id único para cada opción, ya que automáticamente zauru le creará un id único a cada registro de nuestra webapp table.

![New webapp table example](/img/webapps/tablas-dinamicas-webapp-tables-2.png)

Con nuestra estructura lista, podemos ahora dar en la opción (Crear WebApp Table)

Con eso nuestra webapp table se creará y ya la tendremos lista para ser utilizada.

![example newwebapp table created](/img/webapps/tablas-dinamicas-webapp-tables-3.png)

Ahora podemos hacer uso de nuestra nueva webapp table para ingresar registros, o actualizar los ya existentes.

![EjemploListadoRegistrosWebAppTable](/img/webapps/tablas-dinamicas-webapp-tables-4.png)

Con esto, su tabla dinámica queda creada y lista para recibir registros. Lo que sigue naturalmente es llenarla desde el sistema o conectarla con su webapp personalizada; más adelante, si sus aplicaciones la consultan con frecuencia, también podrá sincronizarla con una base de datos externa.

## Uso de la API

Como en todos los casos, aquí también tenemos acceso a una API para gestionar todo en relación al CRUD de las webapp tables y sus registros.

La ruta utilizada para acceder a la API es la siguiente:

    https://app.zauru.com/apps/webapp_tables

### Obtener listado de webapp tables
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables.json
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Obtener detalle de una webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "153",
  "zid": "2",
  "entity_id": "1303",
  "name": "Actualizaciones Ordenes de Trabajo",
  "structure": "{\"image_s3_urls\": \"jsonb_urls\", \"observaciones\": \"string\", \"production_work_order_id\": \"int\"}",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2026-06-22 21:45:41.980008",
  "updated_at": "2026-07-07 19:39:37.3826",
  "hidden_in_show_columns": "[]",
  "show_column_titles": "{}",
  "load_in_rowable_show": false
}
```

### Crear webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "webapp_table": {
      "name": "Tipos de monedas",
      "rows_structure": ["nombre", "estado"],
      "rows_type": ["string", "boolean"]
    }
  }' \
  https://app.zauru.com/apps/webapp_tables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "entity_id": 2,
  "name": "Tipos de monedas",
  "structure": {
    "nombre": "string",
    "estado": "boolean"
  },
  "creator_id": 3,
  "updater_id": null,
  "created_at": "2026-08-06T04:16:14.949Z",
  "updated_at": "2026-08-06T04:16:14.949Z",
  "hidden_in_show_columns": [],
  "show_column_titles": {},
  "load_in_rowable_show": false
}
```

### Actualizar webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "webapp_table": {
      "name": "Tipos de monedas actualizado"
    }
  }' \
  https://app.zauru.com/apps/webapp_tables/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "153",
  "zid": "2",
  "entity_id": "1303",
  "name": "Actualizaciones Ordenes de Trabajo",
  "structure": "{\"image_s3_urls\": \"jsonb_urls\", \"observaciones\": \"string\", \"production_work_order_id\": \"int\"}",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2026-06-22 21:45:41.980008",
  "updated_at": "2026-07-07 19:39:37.3826",
  "hidden_in_show_columns": "[]",
  "show_column_titles": "{}",
  "load_in_rowable_show": false
}
```

### Eliminar webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/apps/webapp_tables/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Nueva webapp table (prellenado)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "webapp_table": {
    "id": null,
    "zid": null,
    "entity_id": 1,
    "name": null,
    "structure": null,
    "creator_id": null,
    "updater_id": null,
    "created_at": null,
    "updated_at": null,
    "hidden_in_show_columns": [],
    "show_column_titles": {},
    "load_in_rowable_show": false
  },
  "types": [
    [
      "Numero",
      "int"
    ],
    [
      "Texto",
      "string"
    ]
  ]
}
```

### Editar webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "153",
  "zid": "2",
  "entity_id": "1303",
  "name": "Actualizaciones Ordenes de Trabajo",
  "structure": "{\"image_s3_urls\": \"jsonb_urls\", \"observaciones\": \"string\", \"production_work_order_id\": \"int\"}",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2026-06-22 21:45:41.980008",
  "updated_at": "2026-07-07 19:39:37.3826",
  "hidden_in_show_columns": "[]",
  "show_column_titles": "{}",
  "load_in_rowable_show": false
}
```

### Obtener filas asociables (rowables) de una webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/rowables.json
```

### Asociar filas a documentos (create_rowables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "webapp_table": {
      "rowables_id": ["1", "2"],
      "rowables_type": ["Invoice", "Shipment"],
      "rowables_doc_id": ["10", "20"]
    }
  }' \
  https://app.zauru.com/apps/webapp_tables/1/create_rowables.json
```

## API de Filas (Webapp Rows)

Las filas de una webapp table se gestionan a través de rutas anidadas.

### Obtener listado de filas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "15171",
    "webapp_table_id": "6",
    "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
    "creator_id": "2472",
    "updater_id": null,
    "created_at": "2023-10-04 23:47:39.990827",
    "updated_at": "2023-10-04 23:47:39.990827"
  }
]
```

### Obtener listado de filas con paginación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows.json?page=1&per_page=25
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "15171",
    "webapp_table_id": "6",
    "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
    "creator_id": "2472",
    "updater_id": null,
    "created_at": "2023-10-04 23:47:39.990827",
    "updated_at": "2023-10-04 23:47:39.990827"
  }
]
```

### Obtener detalle de una fila
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15171",
  "webapp_table_id": "6",
  "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
  "creator_id": "2472",
  "updater_id": null,
  "created_at": "2023-10-04 23:47:39.990827",
  "updated_at": "2023-10-04 23:47:39.990827"
}
```

### Crear fila
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "webapp_row": {
      "data": {
        "nombre": "Quetzal",
        "estado": true
      }
    }
  }' \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15171",
  "webapp_table_id": "6",
  "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
  "creator_id": "2472",
  "updater_id": null,
  "created_at": "2023-10-04 23:47:39.990827",
  "updated_at": "2023-10-04 23:47:39.990827"
}
```

### Actualizar fila
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "webapp_row": {
      "data": {
        "nombre": "Dolar",
        "estado": true
      }
    }
  }' \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15171",
  "webapp_table_id": "6",
  "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
  "creator_id": "2472",
  "updater_id": null,
  "created_at": "2023-10-04 23:47:39.990827",
  "updated_at": "2023-10-04 23:47:39.990827"
}
```

### Eliminar fila
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Nueva fila (prellenado)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15171",
  "webapp_table_id": "6",
  "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
  "creator_id": "2472",
  "updater_id": null,
  "created_at": "2023-10-04 23:47:39.990827",
  "updated_at": "2023-10-04 23:47:39.990827"
}
```

### Editar fila
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "15171",
  "webapp_table_id": "6",
  "data": "{\"Otras_razones\": \"\", \"Razon_primaria\": \"Mancha Café\", \"Razon_terciaria\": \"\", \"Razon_secundaria\": \"\"}",
  "creator_id": "2472",
  "updater_id": null,
  "created_at": "2023-10-04 23:47:39.990827",
  "updated_at": "2023-10-04 23:47:39.990827"
}
```

### Asociar una fila a un documento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "temp_invoice_id": "10"
  }' \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1/associate.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```

### Desasociar una fila de un documento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  -d '{"temp_invoice_id": "10"}' \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1/dissociate.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```

Para desasociar todas las relaciones de una fila, use `"all": true`:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  -d '{"all": true}' \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows/1/dissociate.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```
