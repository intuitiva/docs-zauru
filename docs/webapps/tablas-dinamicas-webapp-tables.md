---
title: "Tablas dinámicas (WebApp Tables)"
sidebar_label: "Tablas dinámicas (WebApp Tables)"
sidebar_position: 4
---

Las tablas dinámicas en zauru nos permiten ampliar cualquier tipo de funcionalidad que necesitemos y que no tengamos directamente, como por ejemplo: Catálogos específicos, historial de registros, versiones de registros, listado de opciones específicas.

Estas tablas dinámicas tienen un CRUD disponible (Crear, Editar, Eliminar, Listar). Llevan una estructura específica (Números, Texto) y pueden crecer tanto como quieras.

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

### Obtener detalle de una webapp table
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1.json
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

### Obtener listado de filas con paginación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/webapp_tables/1/webapp_rows.json?page=1&per_page=25
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
