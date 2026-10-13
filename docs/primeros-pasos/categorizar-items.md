---
title: "Categorizar Ítems"
sidebar_label: "Categorizar Ítems"
sidebar_position: 7.5
---

Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material u otro criterio. En Zauru puede agruparlos con categorías de ítems, súper categorías y marcas para ubicarlos más fácilmente.

## Categoría de Ítems

Los pasos para crear una categoría de ítems son los siguientes:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Categoría de Ítems" en las pestañas.
4. Click en el botón "+ Nueva Categoría de Ítems".

![Categoría de Ítems](/img/primeros-pasos/items-6.png)

5. Colocar el nombre de la categoría de ítems.
6. Colocar una nota sobre la categoría de ítems. (opcional)
7. Presionar "Crear Categoría de Ítems".

![Nueva Categoría de Ítems](/img/primeros-pasos/items-7.png)

Luego de crear la categoría de ítems deberá asignarla al ítem o ítems que desea categorizar. La forma de hacerlo es la siguiente:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Editar" en el ítem que se desea categorizar.

![Editar ítem](/img/primeros-pasos/items-8.png)

## Súper Categorías de Ítems

Las súper categorías agrupan categorías de ítems para ubicar los productos más fácilmente. Los pasos para crear una súper categoría de ítems son los siguientes:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Súper Categoría de Ítems" en las pestañas.
4. Click en el botón "+ Nueva Súper Categoría de Ítems".

![Súper Categorías](/img/primeros-pasos/items-9.png)

5. Colocar el nombre de la súper categoría de ítems.
6. Colocar una descripción sobre la súper categoría de ítems. (opcional)
7. Puede elegir un color (funcional en el módulo de P.D.V).
8. Presionar "Crear Súper Categoría de Ítems".

![Nueva Súper Categoría](/img/primeros-pasos/items-10.png)

## Marcas de Ítems

También puede agrupar sus ítems por marcas, además de categorías y súper categorías, para ubicarlos más fácilmente. Los pasos para crear una marca de ítems son los siguientes:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Marcas" en las pestañas.
4. Click en el botón "+ Nueva Marca".

![Marca de Ítems](/img/primeros-pasos/items-11.png)

5. Colocar el nombre de la marca de ítems.
6. Colocar una descripción sobre la marca de ítems. (opcional)
7. Puede elegir un color (funcional en el módulo de P.D.V).
8. Presionar "Crear Marca".

![Nueva Marca de Ítems](/img/primeros-pasos/items-12.png)

Con sus categorías, súper categorías y marcas creadas podrá ubicar sus ítems más fácilmente en los listados y en el punto de venta (P.D.V.), donde además se aprovechan los colores definidos.

## API (llamadas desde sistemas externos)

### Listado de categorías de ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "name": "cuotas distribuidor",
    "notes": "super categoría",
    "updater_id": 2,
    "entity_id": 3,
    "created_at": "2014-03-19T21:34:47.179Z",
    "updated_at": "2020-06-10T21:09:56.741Z",
    "items_count": 13,
    "bundles_count": 1,
    "item_super_category_id": null,
    "color": "#ff0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "zid": 2
  },
  {
    "id": 4,
    "name": "Usuarios",
    "notes": "",
    "updater_id": 2,
    "entity_id": 3,
    "created_at": "2023-12-11T04:35:01.981Z",
    "updated_at": "2023-12-11T04:35:01.981Z",
    "items_count": 7,
    "bundles_count": 0,
    "item_super_category_id": null,
    "color": "#ff0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "zid": 5
  }
]
```

### Crear categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_category": {
      "name": "super categoria",
      "notes": "descripcion de la categoria"
    }
  }' \
  https://app.zauru.com/settings/items/item_categories.json
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

### Obtener detalle de categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10913",
  "name": "FRITURAS",
  "notes": null,
  "updater_id": "2282",
  "entity_id": "909",
  "created_at": "2023-06-27 22:21:37.821581",
  "updated_at": "2023-06-27 22:21:37.821581",
  "items_count": "12",
  "bundles_count": "0",
  "item_super_category_id": null,
  "color": "#ff0000",
  "image": null,
  "zid": "23"
}
```

### Actualizar categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "item_category": {
      "name": "categoria actualizada"
    }
  }' \
  https://app.zauru.com/settings/items/item_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10913",
  "name": "FRITURAS",
  "notes": null,
  "updater_id": "2282",
  "entity_id": "909",
  "created_at": "2023-06-27 22:21:37.821581",
  "updated_at": "2023-06-27 22:21:37.821581",
  "items_count": "12",
  "bundles_count": "0",
  "item_super_category_id": null,
  "color": "#ff0000",
  "image": null,
  "zid": "23"
}
```

### Eliminar categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/item_categories/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### API de Súper Categorías de Ítems

#### Obtener listado de súper categorías
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_super_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "Electrónica",
    "description": "Productos electrónicos",
    "color": "#0000FF",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": null,
    "created_at": "2026-08-06T04:14:16.230Z",
    "updated_at": "2026-08-06T04:14:16.230Z",
    "item_categories_count": null
  }
]
```

#### Crear súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_super_category": {
      "name": "Electrónica",
      "description": "Productos electrónicos",
      "color": "#0000FF"
    }
  }' \
  https://app.zauru.com/settings/items/item_super_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Electrónica",
  "description": "Productos electrónicos",
  "color": "#0000FF",
  "image": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "entity_id": 2,
  "creator_id": 3,
  "updater_id": null,
  "created_at": "2026-08-06T04:16:55.160Z",
  "updated_at": "2026-08-06T04:16:55.160Z",
  "item_categories_count": null
}
```

#### Actualizar súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "item_super_category": {
      "name": "Electrónica y Accesorios"
    }
  }' \
  https://app.zauru.com/settings/items/item_super_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "800",
  "zid": "1",
  "name": "ANTIBIOTICO",
  "description": null,
  "color": "#f9b935",
  "image": null,
  "entity_id": "1173",
  "creator_id": "942",
  "updater_id": null,
  "created_at": "2025-06-16 19:53:52.011749",
  "updated_at": "2025-06-16 19:53:52.011749",
  "item_categories_count": "3"
}
```

#### Eliminar súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/item_super_categories/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### API de Marcas de Ítems

#### Obtener listado de marcas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/brands.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "Marca Ejemplo",
    "description": "Descripción de la marca",
    "color": "#FF0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": null,
    "created_at": "2026-08-06T04:14:15.933Z",
    "updated_at": "2026-08-06T04:14:15.933Z",
    "items_count": null
  }
]
```

#### Crear marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "brand": {
      "name": "Marca Ejemplo",
      "description": "Descripción de la marca",
      "color": "#FF0000"
    }
  }' \
  https://app.zauru.com/settings/items/brands.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Marca Ejemplo",
  "description": "Descripción de la marca",
  "color": "#FF0000",
  "image": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "entity_id": 2,
  "creator_id": 3,
  "updater_id": null,
  "created_at": "2026-08-06T04:16:54.858Z",
  "updated_at": "2026-08-06T04:16:54.858Z",
  "items_count": null
}
```

#### Obtener detalle de una marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/brands/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "198",
  "zid": "75",
  "name": "DOMICILIOS ",
  "description": null,
  "color": "#ffff00",
  "image": null,
  "entity_id": "1019",
  "creator_id": "2596",
  "updater_id": null,
  "created_at": "2023-04-19 14:57:11.616538",
  "updated_at": "2023-04-19 14:57:11.616538",
  "items_count": "5"
}
```

#### Actualizar marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "brand": {
      "name": "Marca Ejemplo Actualizada"
    }
  }' \
  https://app.zauru.com/settings/items/brands/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "198",
  "zid": "75",
  "name": "DOMICILIOS ",
  "description": null,
  "color": "#ffff00",
  "image": null,
  "entity_id": "1019",
  "creator_id": "2596",
  "updater_id": null,
  "created_at": "2023-04-19 14:57:11.616538",
  "updated_at": "2023-04-19 14:57:11.616538",
  "items_count": "5"
}
```

#### Eliminar marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/brands/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
