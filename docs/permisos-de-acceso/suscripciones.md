---
title: "Suscripciones"
sidebar_label: "Suscripciones"
sidebar_position: 8
---

Las suscripciones son lo que une el ([Rol](https://docs.zauru.com/permisos-de-acceso/roles) con la [Invitación aceptada](https://docs.zauru.com/permisos-de-acceso/invitaciones). De esta manera podemos asignarle los mismos permisos (mismo rol) a varias personas para agilizar la administración de [Permisos Personalizados](https://docs.zauru.com/permisos-de-acceso/permisos).

Se le puede asignar un rol a los usuarios hasta que el usuario haya aceptado la invitación.

![suscripciones](/img/permisos-de-acceso/suscripciones-1.png)

## Nueva suscripción

La nueva suscripción le asigna un rol (y sus permisos) a un usuario en esa empresa y además, crea un [empleado](https://docs.zauru.com/primeros-pasos/empleados#empleados) con la información del usuario y asociado a ese usuario.

En esta página solo se debe seleccionar el usuario con invitación aceptada y el rol que se le quiere dar.

![nueva suscripcion](/img/permisos-de-acceso/suscripciones-2.png)

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

### Obtener listado filtrado por estado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions.json?scope=inactives
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

### Actualizar suscripción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "subscription": {
      "active": false,
      "read_only": true
    }
  }' \
  https://app.zauru.com/access_control/subscriptions/1.json
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

### Exportar suscripciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/subscriptions/export.csv
```
