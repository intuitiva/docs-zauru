---
title: "Empleados"
sidebar_label: "Empleados"
sidebar_position: 2
---

Zauru le permite tener un registro de todos sus empleados, asignar responsabilidades distintas a cada empleado y asignar una agencia para el punto de venta o para que registre casos en el modulo de soporte.

Los pasos para crear un nuevo empleado son:

1. Ir a “Configuraciones”.
2. Seleccionar “Empleados”.
3. Seleccionar “Nuevo Empleado”.

![imagen8](/img/primeros-pasos/empleados-1.png)

Le deberán aparecer las opciones para crear un nuevo empleado, los campos mas importantes a colocar son los siguientes:

a. Si quita el cheque del recuadro, el empleado estará inactivo en el sistema.

b. Para que cada vez que cree un nuevo empleado se le asigne un numero automático deberá crear una numeración automática de documentos.

c. Coloque el nombre del empleado

![imagen9](/img/primeros-pasos/empleados-2.jpg)

d. La agencia que coloque definirá que agencia tendrá el empleado en el modulo de soporte y punto de venta.

e. Aquí podrá colocar las responsabilidades del empleado, las responsabilidades que usted le coloque permitirán seleccionar al empleado en las transacciones que esa responsabilidad conlleve, por ejemplo:

- Contador: Sera responsable de realizar transacciones contables.
- Controlador de inventarios: Sera responsable de reservaciones de inventario.
- Vendedor: Sera responsable de ventas.
- Comprador: Sera responsable de compras.
- Agente de soporte: Sera responsable de registrar casos.

Para guardar los cambios presione “Crear empleado”.

![imagen10](/img/primeros-pasos/empleados-3.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el empleado. Ahora podrá ver este empleado en su listado y lo podrá seleccionar en las transacciones que haga de acuerdo a las responsabilidades del empleado.

![imagen11](/img/primeros-pasos/empleados-4.png)

## Categoría de Empleados
Zauru le permite tener un registro de todos sus empleados y categorizarlos para tenerlos organizados de una forma más eficiente.

Los pasos para crear una nueva categoría de empleado son:

1. Ir a “Configuraciones”.
2. Seleccionar “Empleados”.
3. Seleccionar "Categoría de Empleado".
4. Seleccionar “Nueva categoría de Empleado”.

![Categoría de Empleado](/img/primeros-pasos/empleados-5.png)

Le deberán aparecer las opciones para crear una nueva categoría de empleado, los campos mas importantes a colocar son los siguientes:

1. Colocar el __Nombre__ de la categoría.

2. Puede colocar alguna descripción de la categoría en el segmento de Notas.

3. Presionar el botón __Crear Categoría de empleado__.

![Nueva categoría de empleado](/img/primeros-pasos/empleados-6.png)

### API (llamadas desde sistemas externos)

#### Obtener listado del empleado
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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

#### Obtener listado de empleados filtrado por estado
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


---

## Filtrar Empleados por Agencia

Zauru le permite filtrar el listado de empleados por agencia. En la vista de listado de empleados, puede seleccionar una agencia específica para ver únicamente los empleados asignados a esa agencia. También puede filtrar por estado: Activos, Inactivos o Todos.

## Importar Empleados

Es probable que cuando comience a usar Zauru tenga una lista de empleados que sea más eficiente importar que ingresar manualmente. Zauru le permite importar empleados por medio de plantillas predefinidas de Excel.

Los pasos para importar empleados son:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Click en "Importar".

![imagen12](/img/primeros-pasos/empleados-7.png)

A continuación deberá seleccionar el archivo de Excel con los datos de sus empleados y presionar el botón de importación. El sistema procesará el archivo y creará los registros de empleados.

También puede realizar importaciones masivas de empleados utilizando el sistema de Importaciones de Datos (ver la sección de [Importaciones de Datos](importaciones-de-datos.md)) seleccionando el tipo de documento "Crear Empleados" o "Crear Empleados y Contratos de Trabajo".

## Exportar Empleados

Zauru le permite exportar su listado de empleados en formato CSV o XLS, con la opción de filtrar por agencia. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Empleados".
3. Si lo desea, seleccione una agencia para filtrar.
4. Seleccione el formato de exportación deseado (CSV o XLS).

Los datos exportados incluyen: numero de identificación, nombre, identificación, nacionalidad, correo, puesto, dirección, teléfono, cumpleaños, estado civil, ocupación, fecha de inicio, salario, seguro social, NIT, notas, banco, cuenta bancaria, agencia, tarifas por hora y usuario que actualizó.

## Formularios Asociados al Empleado

Al visualizar los detalles de un empleado, Zauru le mostrará los formularios personalizados que tenga asociados para el tipo de documento "Empleado". Estos formularios permiten capturar información adicional específica de cada empleado.

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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Exportar empleados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/export.csv
```

### API de Importación de Empleados

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

Esto devolverá un JSON similar a este:
```json
{}
```
