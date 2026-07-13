---
title: "Crear Proyecto"
sidebar_label: "Crear Proyecto"
sidebar_position: 1
format: md
---

# Crear Proyecto

Este tutorial esta enfocado en la creación de un proyecto. Cuando usted crea un proyecto esta creando un “Folder” en donde podrá adjuntar muchos “Archivos”, por archivos nos referimos a las transacciones contables, facturas emitida, ordenes de compra emitidas, casos, envíos y/o cotizaciones que usted realice.
También se pueden entender como __centros de costos__ para agrupar transacciones de gastos.
Conforme usted vaya asociando sus transacciones al proyecto, se irán registrando y las podrá ver en el balance del proyecto, en donde podrá saber cuanto ha gastado y cuanto a ingresado del proyecto.

Los pasos para crear un proyecto son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Proyectos”.
3. Seleccionar “Nuevo Proyecto”.

![imagen1](/img/contabilizacion-de-proyectos/proyectos-crear-proyecto-1.jpg)


Le aparecerán las opciones para crear un nuevo proyecto, los campos que debe llenar son:

a. Coloque el nombre de su proyecto.

b. Coloque una breve descripción sobre el proyecto.

c. Presione “Crear Proyecto”.

![imagen2](/img/contabilizacion-de-proyectos/proyectos-crear-proyecto-2.jpg)


Le aparecerá un mensaje de éxito en la pantalla. Ahora que creo el proyecto podrá comenzar a adjuntar sus transacciones asociadas al mismo.

![imagen3](/img/contabilizacion-de-proyectos/proyectos-crear-proyecto-3.jpg)

## API (llamadas desde sistemas externos)

### obtener proyecto disponibles
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags.json
```

### obtener detalles de un proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/1.json
```

### crear proyecto nuevo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item": {
      "name": "Proyecto prueba",
      "description": "Descripción larga del proyecto",
      "tag_category_id": 43
    }
  }' \
  https://app.zauru.com/settings/tags.json
```
