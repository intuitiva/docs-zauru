---
title: "Tipos de tiempo personal"
sidebar_label: "Tipos de tiempo personal"
sidebar_position: 6
---

No todas las ausencias se tratan igual: unas vacaciones, una enfermedad o un permiso personal pueden pagarse distinto, y por eso conviene separarlas en categorías. Los tipos de tiempo personal definen esas categorías de ausencias pagadas (vacaciones, enfermedad, etc.) para que cada solicitud use la que le corresponde.

Para gestionar tipos de tiempo personal:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de tiempo personal"**.

## Crear un tipo de tiempo personal

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo tipo de tiempo personal](/img/nominas/configuraciones-de-nomina-8.png)

- **Nombre**: nombre del tipo (ej. "Vacaciones", "Enfermedad", "Permiso personal").
- **Descripcion**: descripcion opcional.
- **Tipo general**: clasificacion del tipo de tiempo personal.

3. Hacer clic en **"Guardar"**.

Con sus categorías listas, cada solicitud de tiempo personal quedará bien clasificada desde el primer día. El siguiente paso es usarlas al registrar solicitudes de vacaciones o enfermedad, y dejar que el sistema cuide los saldos de cada empleado.

## API (llamadas desde sistemas externos)

### Listar tipos de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "active": true,
    "name": "Vacaciones pagadas",
    "description": "",
    "general_type": "",
    "created_at": "2022-06-29T00:09:29.275Z",
    "updated_at": "2022-06-29T00:09:29.275Z",
    "entity_id": 2,
    "creator_id": 2,
    "updater_id": 2
  },
  {
    "id": 3,
    "zid": 2,
    "active": true,
    "name": "Vacaciones",
    "description": "Dias de vacaciones anuales",
    "general_type": "vacation",
    "created_at": "2026-08-06T04:14:33.102Z",
    "updated_at": "2026-08-06T04:14:33.102Z",
    "entity_id": 2,
    "creator_id": 4,
    "updater_id": 4
  }
]
```

### Ver un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Obtener estructura para crear un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "name": null,
  "description": null,
  "general_type": null,
  "created_at": null,
  "updated_at": null,
  "entity_id": 1,
  "creator_id": null,
  "updater_id": null
}
```

### Obtener estructura para editar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Crear un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "personal_time_off_type": {
      "active": true,
      "name": "Vacaciones",
      "description": "Dias de vacaciones anuales",
      "general_type": "vacation"
    }
  }' \
  https://app.zauru.com/payroll/settings/personal_time_off_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Actualizar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "personal_time_off_type": {
      "name": "Vacaciones actualizado",
      "description": "Dias de vacaciones anuales"
    }
  }' \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Borrar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
