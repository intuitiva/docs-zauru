---
title: "Desactivar suscripciones"
sidebar_label: "Desactivar suscripciones"
sidebar_position: 7
---

Las suscripciones en Zauru se crean para dar accesos a un usuario para ingresar al sistema por medio de un correo electrónico.

Una vez creada la suscripción en el sistema Zauru, es posible que necesite desactivarlos.

Los pasos para crear desactivar un usuario son los siguientes:

1. Ir a “Control de Acceso”.
2. Seleccionar “Suscripciones”.
3. Identificar el usuario a desactivar y dar clic en el ícono de editar “Ícono con forma de lápiz”.

![desactivar suscripciones ok](/img/permisos-de-acceso/desactivar-suscripciones-1.png)

Le aparecerán las opciones para editar el usuario a desactivar:

1. ¿Activa?*
2. ¿Solo Lectura?*
3. Usuario
4. rol
5. Notas

Para desactivar únicamente necesita quitar la opción de ¿Activa?, dejando el cuadro en blanco y presionar el botón de __Actualizar suscripción__.

![desactivar suscripciones dos ok](/img/permisos-de-acceso/desactivar-suscripciones-2.png)

## API (llamadas desde sistemas externos)

### Obtener los datos de la suscripcion a editar

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "active": true,
  "read_only": false,
  "user_id": 2,
  "role_id": 3,
  "invitation_id": 1,
  "entity_id": 1,
  "updater_id": 2,
  "notes": "Acceso al modulo de ventas",
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z"
}
```

### Desactivar una suscripcion

Para desactivar una suscripcion, actualice el campo `active` a `false` (equivale a quitar la opcion "¿Activa?" en la interfaz). Tambien puede actualizar `read_only`, `user_id`, `role_id` y `notes`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "subscription": {
      "active": false
    }
  }' \
  https://app.zauru.com/access_control/subscriptions/1.json
```

En caso de exito, retorna un codigo HTTP `200 OK` (sin cuerpo).
