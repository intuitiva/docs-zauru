---
title: "Empleados"
sidebar_label: "Empleados"
sidebar_position: 2
---

Registre a cada empleado en Zauru para que pueda participar en las operaciones que le correspondan. En el registro puede asignarle responsabilidades (vender, comprar o registrar casos de soporte) y una agencia para el punto de venta.

Los pasos para crear un nuevo empleado son:

1. Ir a “Configuraciones”.
2. Seleccionar “Empleados”.
3. Seleccionar “Nuevo Empleado”.

![imagen8](/img/primeros-pasos/empleados-1.png)

Le aparecerán las opciones para crear el empleado; los campos más importantes son los siguientes:

- **¿Activo?**: si quita la marca, el empleado queda inactivo en el sistema.
- **Número de Empleado**: se genera automáticamente si tiene configurada una numeración automática de documentos (ver [Numeración Automática de Documentos](numeracion-automatica.md)).
- **Nombre**: nombre del empleado.
- **Categoría de Empleado**: categoría a la que pertenece el empleado (ver [Categorías de Empleados](categorias-de-empleados.md)).

![imagen9](/img/primeros-pasos/empleados-2.jpg)

- **Locación**: agencia asignada al empleado; define la agencia que tendrá en los módulos de Soporte y Punto de Venta.
- **Responsabilidades**: responsabilidades asignadas; permiten seleccionar al empleado en las transacciones que cada una conlleve:
  - **Contador**: transacciones contables.
  - **Controlador de Inventarios**: reservaciones de inventario.
  - **Vendedor**: ventas.
  - **Comprador**: compras.
  - **Agente de Soporte**: registro de casos.

Para guardar los cambios presione “Crear empleado”.

![imagen10](/img/primeros-pasos/empleados-3.jpg)

Le aparecerá un mensaje de éxito confirmando que el empleado se creó. Ahora podrá verlo en el listado y seleccionarlo en las transacciones según sus responsabilidades.

![imagen11](/img/primeros-pasos/empleados-4.png)

## Filtrar Empleados por Agencia

En el listado de empleados puede seleccionar una agencia en **Filtrar Agencia** y presionar "Cambiar" para ver únicamente los empleados asignados a esa agencia. También puede filtrar por estado: "Activa", "Inactivos" o "Todos".

## Importar Empleados

Si ya tiene un listado de empleados, puede importarlo en lugar de ingresarlos uno por uno. La importación se hace por medio de plantillas predefinidas de Excel.

Los pasos para importar empleados son:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Click en "Importar".

![imagen12](/img/primeros-pasos/empleados-7.png)

A continuación deberá seleccionar el archivo de Excel con los datos de sus empleados y presionar el botón de importación. El sistema procesará el archivo y creará los registros de empleados.

También puede realizar importaciones masivas de empleados utilizando el sistema de Importaciones de Datos (ver la sección de [Importaciones de Datos](importaciones-de-datos.md)) seleccionando el tipo de documento "Crear Empleados" o "Crear Empleados y Contratos de Trabajo".

## Exportar Empleados

Puede exportar el listado de empleados en formato CSV o XLS, con la opción de filtrar por agencia. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Si lo desea, seleccione una agencia para filtrar.
4. Seleccione el formato de exportación deseado (CSV o XLS).

Los datos exportados incluyen: número de identificación, nombre, identificación, nacionalidad, correo, puesto, dirección, teléfono, cumpleaños, estado civil, ocupación, fecha de inicio, salario, seguro social, NIT, notas, banco, cuenta bancaria, agencia, tarifas por hora y usuario que actualizó.

## Formularios Asociados al Empleado

En los detalles de un empleado, Zauru muestra los formularios personalizados asociados al tipo de documento "Empleado" (ver [Formularios](formularios.md)). Permiten capturar información adicional específica de cada empleado.

Ya puede seleccionar a sus empleados en las transacciones según sus responsabilidades. Si aún no ha creado las [agencias](agencias.md) a las que los asignará, ese es el siguiente paso natural.

## API (llamadas desde sistemas externos)

### Obtener listado del empleado
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
  },
  {
    "id": 6,
    "zid": 7,
    "id_number": "",
    "active": true,
    "accountant": false,
    "inventory_controller": false,
    "seller": true,
    "buyer": false,
    "support_agent": false,
    "name": "Empresa Demo",
    "identification": "",
    "email": "info@ejemplo.com",
    "position": "",
    "address": "",
    "phone": "",
    "birthday": null,
    "started": null,
    "salary": null,
    "ssn": "",
    "tin": "",
    "user_id": null,
    "updater_id": 8,
    "entity_id": 5,
    "agency_id": 9,
    "notes": "",
    "created_at": "2020-11-30T16:06:19.970Z",
    "updated_at": "2023-02-22T17:47:19.785Z",
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
    "marital_status": "",
    "occupation": "",
    "nationality": "",
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

### Obtener detalles del empleado
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

### Crear empleado
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

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": null,
  "active": true,
  "accountant": false,
  "inventory_controller": false,
  "seller": true,
  "buyer": false,
  "support_agent": false,
  "name": "Empleado Vendedor",
  "identification": null,
  "email": "vendedor@ejemplo.com",
  "position": null,
  "address": null,
  "phone": "5555-0008",
  "birthday": null,
  "started": null,
  "salary": null,
  "ssn": null,
  "tin": null,
  "user_id": null,
  "updater_id": 3,
  "entity_id": 4,
  "agency_id": null,
  "notes": null,
  "created_at": "2026-08-06T04:16:56.238Z",
  "updated_at": "2026-08-06T04:16:56.238Z",
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
  "bank_account": null,
  "bank": null,
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
```

### Actualizar empleado
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "31171",
  "zid": "4",
  "id_number": null,
  "active": true,
  "accountant": false,
  "inventory_controller": false,
  "seller": false,
  "buyer": false,
  "support_agent": false,
  "name": "alex",
  "identification": null,
  "email": "bodega@ejemplo.com",
  "position": null,
  "address": null,
  "phone": "5555-0009",
  "birthday": null,
  "started": null,
  "salary": null,
  "ssn": null,
  "tin": null,
  "user_id": "3778",
  "updater_id": "214",
  "entity_id": "1303",
  "agency_id": null,
  "notes": null,
  "created_at": "2026-06-09 16:51:58.051663",
  "updated_at": "2026-06-09 16:51:58.051663",
  "pdf": null,
  "image": null,
  "ordinary_hourly_rate": null,
  "daytime_extraordinary_hourly_rate": null,
  "nighttime_extraordinary_hourly_rate": null,
  "gender": true,
  "bank_account": null,
  "bank": null,
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
```

### Eliminar empleado
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

### Obtener listado de empleados filtrado por estado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees.json?scope=all
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
  },
  {
    "id": 6,
    "zid": 7,
    "id_number": "",
    "active": true,
    "accountant": false,
    "inventory_controller": false,
    "seller": true,
    "buyer": false,
    "support_agent": false,
    "name": "Empresa Demo",
    "identification": "",
    "email": "info@ejemplo.com",
    "position": "",
    "address": "",
    "phone": "",
    "birthday": null,
    "started": null,
    "salary": null,
    "ssn": "",
    "tin": "",
    "user_id": null,
    "updater_id": 8,
    "entity_id": 5,
    "agency_id": 9,
    "notes": "",
    "created_at": "2020-11-30T16:06:19.970Z",
    "updated_at": "2023-02-22T17:47:19.785Z",
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
    "marital_status": "",
    "occupation": "",
    "nationality": "",
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

### Datatables de empleados
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
    },
    {
      "zid": "<a href=\"/settings/employees/2\">19</a>",
      "act": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "idn": "",
      "ide": "",
      "cat": "",
      "nam": "Empresa Demo",
      "ema": "info@ejemplo.com",
      "pos": "",
      "sta": "",
      "age": "<a href=\"/settings/agencies/3\">central</a>",
      "usr": "",
      "rls": "<span title='Vendedor'><i class='fa fa-tags'></i></span>",
      "ra": "<a title=\"Detalles\" href=\"/settings/employees/2\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/employees/2/edit\"><i class=\"fa fa-edit\"></i></a>",
      "DT_RowId": "settings-employee-5290"
    }
  ]
}
```

### Exportar empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/export.csv
```

### Crear importación de empleados
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

Esto devolverá un JSON similar a este:
```json
{}
```
