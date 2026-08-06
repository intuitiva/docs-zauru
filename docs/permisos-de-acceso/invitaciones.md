---
title: "Invitaciones"
sidebar_label: "Invitaciones"
sidebar_position: 3
---

Zauru utiliza el sistema de invitaciones porque necesita asegurarse de que el usuario tenga un correo electrónico válido para poder comunicarnos con el usuario en caso de que olvide la contraseña o que se bloquee su cuenta por más de 5 intentos fallidos en el ingreso del sistema.

Para crear un nuevo usuario deberá enviar una invitación al correo electrónico del nuevo usuario, luego tendrá que suscribirlo para asignarle un rol (con permisos existentes) o crear un nuevo rol (con nuevos permisos). Los pasos para enviar una nueva invitación al sistema son los siguientes:

1. Ir a “Control de Acceso”.
2. Seleccionar “Invitaciones”.
3. Seleccionar el botón de “Nueva invitación”.

![imagen1](/img/permisos-de-acceso/invitaciones-1.jpg)

A continuación deberá colocar el correo del nuevo usuario y dar click en el botón de “Crear invitación”.

![imagen2](/img/permisos-de-acceso/invitaciones-2.jpg)

Le deberá aparecer un mensaje notificándole que la invitación fue creada exitosamente.

![imagen3](/img/permisos-de-acceso/invitaciones-3.jpg)

El nuevo usuario recibirá un correo de Zauru donde deberá dar click a Suscribirse y llenar sus datos. Luego de que el nuevo usuario acepte la invitación, un correo de notificación le llegará al remitente de la invitación, diciendo de que la invitación de tal correo fue aceptada.

## API (llamadas desde sistemas externos)

### Obtener listado de invitaciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/invitations.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "token": "4af16c34cff21f8c4fab884e157093043c618beb",
    "recipient_email": "usuario@ejemplo.com",
    "creator_id": 1,
    "entity_id": 2,
    "sent_at": null,
    "created_at": "2013-01-08T16:54:52.446Z",
    "updated_at": "2013-01-08T16:54:52.446Z"
  },
  {
    "id": 3,
    "token": "523fa4ec286d457d4cb0306ee478dd5f1b0fb221",
    "recipient_email": "invitado@ejemplo.com",
    "creator_id": 2,
    "entity_id": 2,
    "sent_at": null,
    "created_at": "2013-02-27T19:50:35.228Z",
    "updated_at": "2013-02-27T19:50:35.228Z"
  }
]
```

### Obtener detalle de una invitación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/invitations/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "token": "4af16c34cff21f8c4fab884e157093043c618beb",
  "recipient_email": "usuario@ejemplo.com",
  "creator_id": 1,
  "entity_id": 2,
  "sent_at": null,
  "created_at": "2013-01-08T16:54:52.446Z",
  "updated_at": "2013-01-08T16:54:52.446Z"
}
```

### Crear invitación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invitation": {
      "recipient_email": "nuevo_usuario@empresa.com"
    }
  }' \
  https://app.zauru.com/access_control/invitations.json
```

Esto devolverá un JSON similar a este:
```json
{
  "recipient_email": [
    "ya ha sido tomado"
  ]
}
```

### Eliminar invitación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/access_control/invitations/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
