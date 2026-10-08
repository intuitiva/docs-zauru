---
title: "Categorías de Empleados"
sidebar_label: "Categorías de Empleados"
sidebar_position: 2.5
---

Cuando su equipo crece, organizar a los empleados por categorías — por ejemplo, administrativos y vendedores — le facilita ubicarlos y filtrarlos en los listados.

Los pasos para crear una nueva categoría de empleado son:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Seleccionar la pestaña "Categorías de empleado".
4. Click en "Nueva categoría de empleado".

![Listado de categorías de empleado](/img/primeros-pasos/empleados-5.png)

Los campos son los siguientes:

- **Nombre**: nombre con el que se identifica la categoría.
- **Notas**: descripción opcional, en la sección "Información Adicional".

Para guardar los cambios presione "Crear Categoría de empleado".

![Nueva categoría de empleado](/img/primeros-pasos/empleados-6.png)

Asigne la categoría a un empleado desde el campo **Categoría de Empleado** de su formulario (ver [Empleados](empleados.md)).

## API (llamadas desde sistemas externos)

### Obtener listado de categorías de empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/employee_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "employees_count": 0,
    "name": "Administrativo",
    "notes": "Personal administrativo",
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": 3,
    "created_at": "2026-08-06T04:14:17.819Z",
    "updated_at": "2026-08-06T04:14:17.819Z"
  }
]
```

### Crear categoría de empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "employee_category": {
      "name": "Administrativo",
      "notes": "Personal administrativo"
    }
  }' \
  https://app.zauru.com/settings/employees/employee_categories.json
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

### Obtener detalle de una categoría de empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/employee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "employees_count": "2",
  "name": "Transportista",
  "notes": "Los que llevan el envío a otra agencia.",
  "entity_id": "802",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2023-04-03 17:51:43.16891",
  "updated_at": "2023-04-03 17:51:43.16891"
}
```

### Actualizar categoría de empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "employee_category": {
      "name": "Administrativo y Finanzas"
    }
  }' \
  https://app.zauru.com/settings/employees/employee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "employees_count": "2",
  "name": "Transportista",
  "notes": "Los que llevan el envío a otra agencia.",
  "entity_id": "802",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2023-04-03 17:51:43.16891",
  "updated_at": "2023-04-03 17:51:43.16891"
}
```

### Eliminar categoría de empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/employees/employee_categories/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

