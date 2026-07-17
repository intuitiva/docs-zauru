---
title: "Roles"
sidebar_label: "Roles"
sidebar_position: 1
---

Los roles en Zauru se crean para asignarles ciertos permisos y asignárselo a *__uno o varios usuarios__* cuando se suscriben.

Esto nos facilita el proceso de reemplazo de usuarios (en caso de renuncia o despido de empleados) o en el crecimiento de los negocios donde aumentan sucursales, vendedores o personal operativo.

Los pasos para crear un nuevo rol son los siguientes:

1. Ir a “Control de Acceso”.
2. Seleccionar “Roles”.
3. Seleccionar el botón de “Nuevo Rol”.

![imagen4](/img/permisos-de-acceso/roles-1.jpg)

Le aparecerán las opciones para crear el nuevo rol, en el ejemplo se crea un rol de contabilidad, para después asignarle permisos de contabilidad y suscribir a un empleado con este rol, las opciones son las siguientes:

1. Coloque el nombre del rol
2. Coloque una breve descripción de para que sirve este rol.
3. Seleccione “Crear rol” para aplicar los cambios.

![imagen5](/img/permisos-de-acceso/roles-2.png)

Le aparecerá un mensaje de éxito en la pantalla notificándole que el rol fue creado exitosamente.

![imagen6](/img/permisos-de-acceso/roles-3.jpg)

El siguiente paso es asignarle permisos a este rol creado para después suscribir a un usuario con este rol.

## API (llamadas desde sistemas externos)

### Obtener listado de roles
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/roles.json
```

### Obtener detalle de un rol
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/roles/1.json
```

### Crear rol
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "role": {
      "name": "Contabilidad",
      "description": "Rol para el departamento de contabilidad"
    }
  }' \
  https://app.zauru.com/access_control/roles.json
```

### Actualizar rol
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "role": {
      "name": "Contabilidad Senior",
      "description": "Rol actualizado"
    }
  }' \
  https://app.zauru.com/access_control/roles/1.json
```

### Eliminar rol
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/access_control/roles/1.json
```
