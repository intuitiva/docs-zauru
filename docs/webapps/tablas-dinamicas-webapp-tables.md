---
title: "Tablas dinámicas (WebApp Tables)"
sidebar_label: "Tablas dinámicas (WebApp Tables)"
sidebar_position: 99904
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

De esa ruta ya pueden salir todas las variantes

    POST
    https://app.zauru.com/apps/webapp_tables

    GET
    https://app.zauru.com/apps/webapp_tables

    UPDATE
    https://app.zauru.com/apps/webapp_tables/1

    DELETE
    https://app.zauru.com/apps/webapp_tables
