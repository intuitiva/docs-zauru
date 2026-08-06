---
title: "Etiquetas (Tags)"
sidebar_label: "Etiquetas (Tags)"
sidebar_position: 13
---

Las etiquetas en Zauru le permiten categorizar y filtrar diferentes elementos del sistema como ítems, beneficiarios, envíos, entre otros. Las etiquetas se pueden organizar en categorías de etiquetas y pueden tener una estructura jerárquica.

## Categoría de Etiquetas

Las categorías de etiquetas le permiten agrupar etiquetas relacionadas. Las categorías pueden tener categorías padre, formando una estructura de árbol.

Los pasos para crear una nueva categoría de etiqueta son:

1. Ir a "Configuraciones".
2. Seleccionar "Etiquetas".

![Listado de etiquetas y categorías en Configuraciones > Etiquetas](/img/primeros-pasos/etiquetas-1.png)

3. Seleccionar la pestaña "Categoría de Etiquetas".

![Pestaña de categorías de etiquetas y botón nueva categoría](/img/primeros-pasos/etiquetas-2.png)

4. Seleccionar "Nueva Categoría de Etiqueta".

![Formulario de nueva categoría de etiqueta](/img/primeros-pasos/etiquetas-3.png)

## Nueva Etiqueta

Los pasos para crear una nueva etiqueta son:

1. Ir a "Configuraciones".
2. Seleccionar "Etiquetas".
3. Seleccionar "Nueva Etiqueta".

![Formulario de nueva etiqueta](/img/primeros-pasos/etiquetas-4.png)

4. Colocar el nombre de la etiqueta.
5. Seleccionar la categoría a la que pertenece (opcional).
6. Presionar "Crear Etiqueta".

## Grafo de Categorías de Etiquetas

Zauru le permite visualizar la estructura jerárquica de sus categorías de etiquetas y las etiquetas contenidas en ellas por medio de un grafo interactivo. Este grafo le muestra de forma visual cómo se organizan sus etiquetas y categorías.

## API (llamadas desde sistemas externos)

### Obtener listado de etiquetas
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

### Obtener detalle de una etiqueta
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

### Crear etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag": {
      "name": "VIP",
      "tag_category_id": "1",
      "active": true
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

### Actualizar etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tag": {
      "name": "Cliente VIP"
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

### Eliminar etiqueta
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

### API de Categorías de Etiquetas

#### Obtener listado de categorías de etiquetas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "parent_tag_category_id": null,
    "name": "Categoría de prueba",
    "description": "Descripción de la categoría",
    "updater_id": 2,
    "entity_id": 3,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "created_at": "2026-08-06T04:14:18.201Z",
    "updated_at": "2026-08-06T04:14:18.201Z",
    "active": true
  },
  {
    "id": 4,
    "zid": 2,
    "parent_tag_category_id": null,
    "name": "Categoría de Clientes",
    "description": "Etiquetas para clasificar clientes",
    "updater_id": 2,
    "entity_id": 3,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "created_at": "2026-08-06T04:14:18.968Z",
    "updated_at": "2026-08-06T04:14:18.968Z",
    "active": true
  }
]
```

#### Obtener detalle de una categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3106",
  "zid": "8",
  "parent_tag_category_id": "3100",
  "name": "CONDADO SANTA ELENA",
  "description": "CSE",
  "updater_id": "1273",
  "entity_id": "1303",
  "pdf": null,
  "image": null,
  "created_at": "2026-02-11 18:40:27.735405",
  "updated_at": "2026-02-11 18:41:05.575377",
  "active": true
}
```

#### Crear categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag_category": {
      "name": "Categoría de Clientes",
      "description": "Etiquetas para clasificar clientes",
      "active": true
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ]
}
```

#### Actualizar categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tag_category": {
      "name": "Categoría de Clientes VIP"
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3106",
  "zid": "8",
  "parent_tag_category_id": "3100",
  "name": "CONDADO SANTA ELENA",
  "description": "CSE",
  "updater_id": "1273",
  "entity_id": "1303",
  "pdf": null,
  "image": null,
  "created_at": "2026-02-11 18:40:27.735405",
  "updated_at": "2026-02-11 18:41:05.575377",
  "active": true
}
```

#### Eliminar categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

#### Obtener datos del grafo de una categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories/1/get_graph_data.json
```
