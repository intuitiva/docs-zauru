---
title: "Grupos de tipos de destajo"
sidebar_label: "Grupos de tipos de destajo"
sidebar_position: 8
---

Los grupos permiten organizar los tipos de destajo en categorias.

Para gestionar grupos:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Grupos de tipos de destajo"**.

## Crear un grupo

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo grupo de tipos de destajo](/img/nominas/configuraciones-de-nomina-10.png)

- **Nombre**: nombre del grupo (ej. "Cosecha", "Siembra", "Mantenimiento").
- **Numero de identificacion**: codigo opcional para el grupo.
- **Descripcion**: descripcion opcional.

3. Hacer clic en **"Guardar"**.

## API (llamadas desde sistemas externos)

### Listar grupos de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "id_number": "GRP-001",
    "name": "Cosecha",
    "description": "Actividades de cosecha",
    "creator_id": 2,
    "updater_id": 2,
    "entity_id": 1,
    "created_at": "2026-08-01T10:00:00.000Z",
    "updated_at": "2026-08-01T10:00:00.000Z"
  },
  {
    "id": 2,
    "zid": 2,
    "id_number": "GRP-002",
    "name": "Siembra",
    "description": "Actividades de siembra",
    "creator_id": 2,
    "updater_id": 3,
    "entity_id": 1,
    "created_at": "2026-08-01T11:00:00.000Z",
    "updated_at": "2026-08-01T11:00:00.000Z"
  }
]
```

### Ver un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "GRP-001",
  "name": "Cosecha",
  "description": "Actividades de cosecha",
  "creator_id": 2,
  "updater_id": 2,
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z"
}
```

### Obtener estructura para crear un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": null,
  "name": null,
  "description": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null
}
```

### Obtener estructura para editar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "GRP-001",
  "name": "Cosecha",
  "description": "Actividades de cosecha",
  "creator_id": 2,
  "updater_id": 2,
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z"
}
```

### Crear un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "piecework_type_group": {
      "name": "Cosecha",
      "id_number": "GRP-001",
      "description": "Actividades de cosecha"
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_type_groups.json
```

Esto devolverá un JSON similar a este:
```json
"https://app.zauru.com/payroll/settings/piecework_type_groups"
```

### Actualizar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "piecework_type_group": {
      "name": "Cosecha y recoleccion",
      "description": "Actividades de cosecha y recoleccion"
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Borrar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
