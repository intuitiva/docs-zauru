---
title: "Subproyectos"
sidebar_label: "Subproyectos"
sidebar_position: 6
---

En caso de que los proyectos sean muy complejos se pueden granular en subproyectos.

Este video muestra como poder utilizarlos y aprovecharlos al máximo:

  <video controls="true" allowfullscreen="true"><source src="https://res.cloudinary.com/hurynnu8i/video/upload/v1448544355/subproyectos_ihdztf.mp4" type="video/mp4"/></video>

## API (llamadas desde sistemas externos)

Los subproyectos se manejan como categorias de etiquetas (grupos de proyectos), que pueden tener una categoria padre (`parent_tag_category_id`) para armar la jerarquia de subproyectos.

### Consultar listado de grupos de proyectos (subproyectos)
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
    "name": "Proyecto Torre Norte",
    "description": "Proyecto principal",
    "updater_id": 1,
    "entity_id": 1,
    "pdf": null,
    "image": null,
    "created_at": "2026-08-01 10:00:00.000000",
    "updated_at": "2026-08-01 10:00:00.000000",
    "active": true
  },
  {
    "id": 2,
    "zid": 2,
    "parent_tag_category_id": 1,
    "name": "Subproyecto Cimentacion",
    "description": "Fase de cimentacion",
    "updater_id": 1,
    "entity_id": 1,
    "pdf": null,
    "image": null,
    "created_at": "2026-08-01 10:00:00.000000",
    "updated_at": "2026-08-01 10:00:00.000000",
    "active": true
  }
]
```

### Obtener detalle de un grupo de proyectos
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
  "id": 1,
  "zid": 1,
  "parent_tag_category_id": null,
  "name": "Proyecto Torre Norte",
  "description": "Proyecto principal",
  "updater_id": 1,
  "entity_id": 1,
  "pdf": null,
  "image": null,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "active": true
}
```

### Crear un grupo de proyectos (subproyecto)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag_category": {
      "name": "Subproyecto Cimentacion",
      "description": "Fase de cimentacion",
      "parent_tag_category_id": 1,
      "active": true
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 2,
  "zid": 2,
  "parent_tag_category_id": 1,
  "name": "Subproyecto Cimentacion",
  "description": "Fase de cimentacion",
  "updater_id": 1,
  "entity_id": 1,
  "pdf": null,
  "image": null,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "active": true
}
```

### Actualizar un grupo de proyectos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tag_category": {
      "name": "Subproyecto Cimentacion Actualizado"
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories/2.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Borrar un grupo de proyectos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/tags/tag_categories/2.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
