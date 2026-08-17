---
title: "Crear Proyecto"
sidebar_label: "Crear Proyecto"
sidebar_position: 1
---

Antes de poder asociar cualquier gasto, factura o cotización a una obra, primero necesita crear el proyecto en Zauru. Piense en el proyecto como un folder: cuando usted lo crea, podrá adjuntarle muchos archivos — es decir, las transacciones contables, facturas emitidas, órdenes de compra emitidas, casos, envíos y cotizaciones que realice — y todo quedará agrupado en un solo lugar. Los proyectos también funcionan como centros de costos para agrupar transacciones de gastos. Conforme vaya asociando sus transacciones al proyecto, se irán registrando y las podrá ver en el balance del proyecto, donde sabrá cuánto ha gastado y cuánto ha ingresado.

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

Con esto su proyecto ya está creado y listo para recibir transacciones. El siguiente paso natural es comenzar a adjuntarle los gastos y las facturas de la obra; y si el trabajo es muy complejo, puede organizarlo en subproyectos para llevar un control aún más fino.

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

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "name": "implementaciones zauru",
    "description": "",
    "entity_id": 2,
    "updater_id": 2,
    "created_at": "2014-02-17T14:52:49.744Z",
    "updated_at": "2014-03-07T01:37:38.889Z",
    "tagging_entries_count": 119,
    "tagging_shipments_count": 0,
    "tagging_invoices_count": 36,
    "tagging_payments_count": 4,
    "taggings_count": 0,
    "active": true,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "tag_category_id": null,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    }
  },
  {
    "id": 3,
    "zid": 4,
    "name": "ingreso de póliza(s)",
    "description": "",
    "entity_id": 2,
    "updater_id": 5,
    "created_at": "2017-07-14T17:00:46.727Z",
    "updated_at": "2017-07-14T17:00:46.727Z",
    "tagging_entries_count": 0,
    "tagging_shipments_count": 0,
    "tagging_invoices_count": 0,
    "tagging_payments_count": 0,
    "taggings_count": 0,
    "active": true,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "tag_category_id": null,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    }
  }
]
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "13545",
  "zid": "268",
  "name": "PUERTA Y AEREOS",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-05-19 11:27:06.679021",
  "updated_at": "2026-05-19 11:27:06.679021",
  "tagging_entries_count": "5",
  "tagging_shipments_count": "5",
  "tagging_invoices_count": "1",
  "tagging_payments_count": "0",
  "taggings_count": "0",
  "active": true,
  "image": null,
  "tag_category_id": "3257",
  "pdf": null
}
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
    "tag": {
      "name": "Proyecto prueba",
      "description": "Descripción larga del proyecto",
      "tag_category_id": 43
    }
  }' \
  https://app.zauru.com/settings/tags.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ],
  "entity": [
    "es inválido"
  ]
}
```

### actualizar proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "tag": {
      "name": "Proyecto prueba editado",
      "description": "Descripción actualizada del proyecto"
    }
  }' \
  https://app.zauru.com/settings/tags/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "13545",
  "zid": "268",
  "name": "PUERTA Y AEREOS",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-05-19 11:27:06.679021",
  "updated_at": "2026-05-19 11:27:06.679021",
  "tagging_entries_count": "5",
  "tagging_shipments_count": "5",
  "tagging_invoices_count": "1",
  "tagging_payments_count": "0",
  "taggings_count": "0",
  "active": true,
  "image": null,
  "tag_category_id": "3257",
  "pdf": null
}
```

### eliminar proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/tags/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
