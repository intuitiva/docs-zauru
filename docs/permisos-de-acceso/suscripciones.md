---
title: "Suscripciones"
sidebar_label: "Suscripciones"
sidebar_position: 8
---

Cuando su equipo crece y necesita dar acceso a varios vendedores, cajeros o bodegueros, las suscripciones son el paso final del proceso. Las suscripciones son lo que une el [Rol](https://docs.zauru.com/permisos-de-acceso/roles) con la [Invitación aceptada](https://docs.zauru.com/permisos-de-acceso/invitaciones); de esta manera puede asignarles los mismos permisos (mismo rol) a varias personas para agilizar la administración de [Permisos Personalizados](https://docs.zauru.com/permisos-de-acceso/permisos).

Se le puede asignar un rol a los usuarios hasta que el usuario haya aceptado la invitación.

![suscripciones](/img/permisos-de-acceso/suscripciones-1.png)

## Nueva suscripción

Si un empleado nuevo ya aceptó su invitación, este es el momento de darle su rol. La nueva suscripción le asigna un rol (y sus permisos) a un usuario en esa empresa y, además, crea un [empleado](https://docs.zauru.com/primeros-pasos/empleados#empleados) con la información del usuario y asociado a ese usuario.

En esta página solo se debe seleccionar el usuario con invitación aceptada y el rol que se le quiere dar.

![nueva suscripcion](/img/permisos-de-acceso/suscripciones-2.png)

Con la suscripción creada, el usuario ya puede entrar a Zauru con los permisos de su rol y su ficha de empleado queda asociada a su cuenta. Si en el futuro alguien sale de su equipo, puede desactivar su suscripción desde esta misma sección para bloquear su acceso.

## API (llamadas desde sistemas externos)

### Obtener listado de suscripciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "active": true,
    "read_only": false,
    "user_id": 1,
    "role_id": 1,
    "invitation_id": 2,
    "entity_id": 1,
    "updater_id": 2,
    "notes": null,
    "created_at": "2013-01-08T16:54:52.987Z",
    "updated_at": "2013-01-08T16:54:52.987Z",
    "name": "Usuario Ejemplo Uno"
  },
  {
    "id": 3,
    "zid": 2,
    "active": true,
    "read_only": false,
    "user_id": 4,
    "role_id": 5,
    "invitation_id": 6,
    "entity_id": 1,
    "updater_id": 1,
    "notes": "",
    "created_at": "2013-03-01T02:25:59.854Z",
    "updated_at": "2013-03-01T02:25:59.854Z",
    "name": "Carlos"
  }
]
```

### Obtener listado filtrado por estado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions.json?scope=inactives
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "active": true,
    "read_only": false,
    "user_id": 1,
    "role_id": 1,
    "invitation_id": 2,
    "entity_id": 1,
    "updater_id": 2,
    "notes": null,
    "created_at": "2013-01-08T16:54:52.987Z",
    "updated_at": "2013-01-08T16:54:52.987Z",
    "name": "Usuario Ejemplo Uno"
  },
  {
    "id": 3,
    "zid": 2,
    "active": true,
    "read_only": false,
    "user_id": 4,
    "role_id": 5,
    "invitation_id": 6,
    "entity_id": 1,
    "updater_id": 1,
    "notes": "",
    "created_at": "2013-03-01T02:25:59.854Z",
    "updated_at": "2013-03-01T02:25:59.854Z",
    "name": "Carlos"
  }
]
```

### Obtener detalle de una suscripción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "active": true,
  "read_only": false,
  "user_id": 1,
  "role_id": 1,
  "invitation_id": 2,
  "entity_id": 1,
  "updater_id": 2,
  "notes": null,
  "created_at": "2013-01-08T16:54:52.987Z",
  "updated_at": "2013-01-08T16:54:52.987Z"
}
```

### Crear suscripción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "subscription": {
      "user_id": "2",
      "role_id": "1",
      "active": true
    }
  }' \
  https://app.zauru.com/access_control/subscriptions.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5671",
  "zid": "1",
  "active": true,
  "read_only": false,
  "user_id": "1273",
  "role_id": "2576",
  "invitation_id": "14064",
  "entity_id": "1303",
  "updater_id": "214",
  "notes": null,
  "created_at": "2026-02-11 18:22:27.769553",
  "updated_at": "2026-02-11 18:22:27.769553"
}
```

### Actualizar suscripción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "subscription": {
      "active": false,
      "read_only": true
    }
  }' \
  https://app.zauru.com/access_control/subscriptions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5671",
  "zid": "1",
  "active": true,
  "read_only": false,
  "user_id": "1273",
  "role_id": "2576",
  "invitation_id": "14064",
  "entity_id": "1303",
  "updater_id": "214",
  "notes": null,
  "created_at": "2026-02-11 18:22:27.769553",
  "updated_at": "2026-02-11 18:22:27.769553"
}
```

### Eliminar suscripción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/access_control/subscriptions/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Exportar suscripciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions/export.csv
```
