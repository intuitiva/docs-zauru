---
title: "Configuraciones de mi usuario"
sidebar_label: "Configuraciones de mi usuario"
sidebar_position: 0
---

En Zauru existen operaciones básicas que todos los usuarios pueden realizar sin necesidad de que involucren permisos.

Estas tareas son:

## API (llamadas desde sistemas externos)

### Obtener perfil del usuario actual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/profile.json
```

Esto devolverá un JSON con el perfil del usuario y las membresías (entidades/empresas) a las que tiene acceso:

```json
{
  "profile": {
    "id": 1,
    "email": "prueba@zauru.com",
    "name": "Usuario Prueba",
    "language": "es",
    "time_zone": "America/Guatemala"
  },
  "memberships": [
    {
      "id": 1,
      "current": true,
      "active": true,
      "entity": {
        "id": 1,
        "name": "Mi Empresa"
      }
    }
  ]
}
```

### Actualizar perfil del usuario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "user": {
      "name": "Usuario Prueba Actualizado",
      "mobile_phone": "55554444",
      "language": "es",
      "time_zone": "America/Guatemala"
    }
  }' \
  https://app.zauru.com/profile.json
```
