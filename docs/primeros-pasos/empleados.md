---
title: "Empleados"
sidebar_label: "Empleados"
sidebar_position: 2
---

Registrar a cada empleado en Zauru permite asignarle responsabilidades —vender, comprar o registrar casos de soporte— y una agencia para el punto de venta.

## Crear empleado

Los pasos para crear un nuevo empleado son:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Seleccionar "Nuevo Empleado".

![imagen8](/img/primeros-pasos/empleados-1.png)

Le deberán aparecer las opciones para crear un nuevo empleado. Los campos más importantes son:

- **Activo**: si se desmarca, el empleado estará inactivo en el sistema.
- **Número de empleado**: se asigna automáticamente si existe una numeración automática de documentos configurada.
- **Nombre**: nombre del empleado.
- **Agencia**: define la agencia que tendrá el empleado en los módulos de soporte y punto de venta.
- **Responsabilidades**: definen las transacciones en las que se puede seleccionar al empleado. Por ejemplo: contador (transacciones contables), controlador de inventarios (reservaciones de inventario), vendedor (ventas), comprador (compras) y agente de soporte (registro de casos).

![imagen9](/img/primeros-pasos/empleados-2.jpg)

Para guardar los cambios presione "Crear empleado".

![imagen10](/img/primeros-pasos/empleados-3.jpg)

Le aparecerá un mensaje de éxito y el empleado estará disponible en el listado.

![imagen11](/img/primeros-pasos/empleados-4.png)

## Categoría de Empleados

Las categorías permiten organizar y filtrar a los empleados en los listados.

Los pasos para crear una nueva categoría de empleado son:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Seleccionar "Categoría de Empleado".
4. Seleccionar "Nueva categoría de Empleado".

![Categoría de Empleado](/img/primeros-pasos/empleados-5.png)

- **Nombre**: nombre de la categoría.
- **Notas**: descripción opcional de la categoría.

Presione "Crear Categoría de empleado".

![Nueva categoría de empleado](/img/primeros-pasos/empleados-6.png)

## Filtrar Empleados por Agencia

En el listado de empleados puede filtrar por agencia y por estado: Activos, Inactivos o Todos.

## Importar Empleados

Zauru le permite importar empleados por medio de plantillas de Excel.

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Click en "Importar".

![imagen12](/img/primeros-pasos/empleados-7.png)

Seleccione el archivo con los datos de sus empleados y presione el botón de importación. También puede realizar importaciones masivas con el sistema de [Importaciones de Datos](importaciones-de-datos.md), con el tipo de documento "Crear Empleados" o "Crear Empleados y Contratos de Trabajo".

## Exportar Empleados

Zauru le permite exportar el listado de empleados en formato CSV o XLS, con la opción de filtrar por agencia.

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Si lo desea, seleccione una agencia para filtrar.
4. Seleccione el formato de exportación (CSV o XLS).

La exportación incluye los datos personales, laborales, bancarios y de agencia del empleado, las tarifas por hora y el usuario que actualizó.

## Formularios Asociados al Empleado

Al visualizar los detalles de un empleado, Zauru le muestra los formularios personalizados asociados al tipo de documento "Empleado", que permiten capturar información adicional.

## API (llamadas desde sistemas externos)

### Empleados

#### Obtener listado de empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": "",
    "active": true,
    "accountant": false,
    "inventory_controller": false,
    "seller": true,
    "buyer": false,
    "support_agent": false,
    "name": "Api",
    "identification": "",
    "email": "api@ejemplo.com",
    "position": "",
    "address": "",
    "phone": "12345678",
    "birthday": null,
    "started": null,
    "salary": null,
    "ssn": "",
    "tin": "",
    "user_id": 3,
    "updater_id": 4,
    "entity_id": 5,
    "agency_id": null,
    "notes": "",
    "created_at": "2020-04-29T12:07:17.849Z",
    "updated_at": "2022-03-22T15:01:19.204Z",
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "image": {
      "url": null,
      "standard": {
        "url": null
      },
      "thumbnail": {
        "url": null
      },
      "pos": {
        "url": null
      }
    },
    "ordinary_hourly_rate": null,
    "daytime_extraordinary_hourly_rate": null,
    "nighttime_extraordinary_hourly_rate": null,
    "gender": true,
    "bank_account": "",
    "bank": "",
    "marital_status": null,
    "occupation": null,
    "nationality": null,
    "supervisor_id": null,
    "employee_category_id": null,
    "cost_center_id": null,
    "spouse_name": null,
    "dependents": null,
    "emergency_contact_name": null,
    "emergency_contact_phone": null,
    "education_level": null,
    "driver_license_number": null,
    "additional_worker_id": null
  }
]
```

#### Obtener listado de empleados filtrado por estado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees.json?scope=all
```

El parámetro `scope` acepta `active`, `inactive` o `all`; la respuesta tiene el mismo formato que el listado.

#### Obtener detalles del empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "000",
  "active": true,
  "accountant": true,
  "inventory_controller": true,
  "seller": true,
  "buyer": true,
  "support_agent": true,
  "name": "Empleado Vendedor Senior",
  "identification": "1234567890101",
  "email": "vendedor@ejemplo.com",
  "position": "Gerente General",
  "address": "Calle Ejemplo 123, Zona 10",
  "phone": "5555-0001",
  "birthday": "1990-01-01",
  "started": "2008-01-01",
  "salary": "19533.62",
  "ssn": "123456789012",
  "tin": "12345678",
  "user_id": 1,
  "updater_id": 2,
  "entity_id": 1,
  "agency_id": 3,
  "notes": "",
  "created_at": "2013-01-08T16:54:53.222Z",
  "updated_at": "2026-08-06T04:14:17.486Z",
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "image": {
    "url": null,
    "standard": {
      "url": null
    },
    "thumbnail": {
      "url": null
    },
    "pos": {
      "url": null
    }
  },
  "ordinary_hourly_rate": 80.27515,
  "daytime_extraordinary_hourly_rate": 80.27515,
  "nighttime_extraordinary_hourly_rate": 120.412726,
  "gender": true,
  "bank_account": "000-0000000-0",
  "bank": "G&T",
  "marital_status": "casado",
  "occupation": "Ingeniero en sistemas",
  "nationality": "Guatemalteco",
  "supervisor_id": null,
  "employee_category_id": null,
  "cost_center_id": null,
  "spouse_name": "",
  "dependents": "",
  "emergency_contact_name": "",
  "emergency_contact_phone": "",
  "education_level": "",
  "driver_license_number": "",
  "additional_worker_id": "1000000001 -1000002- RL1000000003 -1000004-",
  "submissions": []
}
```

#### Crear empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "employee": {
      "name": "Empleado Vendedor",
      "updater_id": "1",
      "seller": "1",
      "email": "vendedor@ejemplo.com",
      "phone": "5555-0011"
    }
  }' \
  https://app.zauru.com/settings/employees.json
```

La respuesta incluye el empleado creado.

#### Actualizar empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "employee": {
      "name": "Empleado Vendedor Senior",
      "seller": "1",
      "active": "1"
    }
  }' \
  https://app.zauru.com/settings/employees/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

#### Eliminar empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/employees/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

#### Datatables de empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"start": "0", "length": "25", "scope": "active"}' \
  https://app.zauru.com/settings/employees/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 16,
  "recordsFiltered": 16,
  "data": [
    {
      "zid": "<a href=\"/settings/employees/1\">18</a>",
      "act": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "idn": "",
      "ide": "",
      "cat": "",
      "nam": "Api",
      "ema": "api@ejemplo.com",
      "pos": "",
      "sta": "",
      "age": "",
      "usr": "Api (api@ejemplo.com)",
      "rls": "<span title='Vendedor'><i class='fa fa-tags'></i></span>",
      "ra": "<a title=\"Detalles\" href=\"/settings/employees/1\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/employees/1/edit\"><i class=\"fa fa-edit\"></i></a>",
      "DT_RowId": "settings-employee-4802"
    }
  ]
}
```

#### Exportar empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/export.csv
```

#### Crear importación de empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "employee_import": {
      "file": "archivo_excel.xlsx"
    }
  }' \
  https://app.zauru.com/settings/employees/employee_imports.json
```

Retorna un JSON con el resultado de la importación.

### Categorías de empleados

#### Obtener listado de categorías de empleados
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

#### Obtener detalle de una categoría de empleado
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

#### Crear categoría de empleado
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

La respuesta incluye la categoría creada.

#### Actualizar categoría de empleado
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

La respuesta incluye la categoría con los cambios aplicados.

#### Eliminar categoría de empleado
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
