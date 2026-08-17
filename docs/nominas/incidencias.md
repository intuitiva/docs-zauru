---
title: "Incidencias"
sidebar_label: "Incidencias"
sidebar_position: 11
---

Cuando un empleado llega tarde, falta un día o pide un adelanto de salario, alguien tiene que anotarlo para que el descuento aparezca en su nómina. Aquí se registran y gestionan esas incidencias —llegadas tarde, ausencias, faltas y otras situaciones que generan descuentos—, y el sistema calcula el descuento según el tipo que usted elija.

## Listado de incidencias

Para acceder al listado de incidencias:

1. Ir a **"Nominas"**.
2. Seleccionar **"Incidencias"**.

### Busqueda y filtros

El listado muestra todas las incidencias registradas. Se puede buscar por empleado y filtrar por agencia.

### Duplicar una incidencia

Cada incidencia tiene la opcion de **"Duplicar"**, que permite copiar la incidencia para el mes siguiente o cualquier otro periodo. Esto es util para incidencias que se repiten periodicamente (ej. descuentos mensuales fijos).

1. En el listado, hacer clic en **"Duplicar"** sobre la incidencia deseada.
2. El sistema copia los datos de la incidencia original.
3. Modificar la fecha y otros datos segun corresponda.
4. Hacer clic en **"Guardar"**.

## Crear una incidencia

1. En el listado de incidencias, hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Empleado**: seleccionar el empleado al que se le registra la incidencia.
- **Tipo de incidencia**: seleccionar el tipo (llegada tarde, ausencia, etc.). El tipo de incidencia determina el monto o porcentaje de descuento.
- **Fecha**: fecha en que ocurrio la incidencia.
- **Cantidad**: numero de ocurrencias (ej. cantidad de llegadas tarde en el periodo).
- **Referencia**: texto descriptivo para identificar la incidencia.
- **Notas**: observaciones adicionales.

3. Hacer clic en **"Guardar"**.

El sistema automaticamente:

- Calcula el descuento basado en el tipo de incidencia (monto fijo, porcentaje o formula).
- Si el tipo de incidencia tiene marcado **"Descuento flexible por incidencia"**, el monto del descuento es editable manualmente.
- Si el tipo de incidencia tiene marcado **"Descuento como dias de tiempo personal"**, se descuentan los dias correspondientes del saldo de tiempo personal del empleado.

## Ver detalle de una incidencia

En el listado, hacer clic en la incidencia. El detalle muestra:

![Detalle de una incidencia con datos y descuento calculado](/img/nominas/incidencias-3.png)

- ID de la incidencia.
- Empleado.
- Tipo de incidencia con su categoria.
- Fecha.
- Monto de descuento calculado.
- Referencia y notas.
- Informacion de creacion y edicion.

## Editar una incidencia

1. En el detalle de la incidencia, hacer clic en **"Editar"**.
2. Modificar los campos necesarios.
3. Hacer clic en **"Guardar"**.

## Borrar una incidencia

En el detalle de la incidencia, hacer clic en **"Borrar"**. Solo se pueden borrar incidencias que no hayan sido incluidas en una corrida de nomina pagada.

## Importacion masiva de incidencias

Si al cierre del día tiene una pila de llegadas tarde de toda la cuadrilla, anotarlas una por una no es el mejor uso de su tiempo. Para registrar muchas incidencias a la vez, se puede usar la importación masiva desde un archivo.

1. Ir a **"Nominas"**.
2. En el submenu de incidencias, seleccionar **"Importar incidencias"**.
3. Seleccionar el archivo con los datos de incidencias.
4. Hacer clic en **"Importar"**.

El sistema procesa el archivo y crea las incidencias correspondientes. Las incidencias importadas apareceran en el listado de incidencias y se aplicaran en la siguiente corrida de nomina que incluya al empleado.

## Relacion con corridas de nomina

Cuando se procesa una corrida de nomina, el sistema busca las incidencias de cada empleado que esten dentro del rango de fechas de la corrida y aplica los descuentos correspondientes. Los descuentos aparecen como deducciones en el detalle de la nomina del empleado.

Con las incidencias registradas, los descuentos se aplicarán solos cuando se procese la corrida de nómina que cubra esas fechas. Si cada periodo maneja muchas incidencias, la importación masiva se convertirá en su mejor aliada para no dejar ninguna fuera.

## API (llamadas desde sistemas externos)

### Listar incidencias

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "date": "2022-09-01",
    "time": "2000-01-01T00:00:00.000Z",
    "employee_id": 3,
    "incident_type_id": 2,
    "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amount=>-0.425e3, :deduction_percent=>nil, :flexible_deduction_per_incident=>true, :description=>\"\"}",
    "notes": "compu cuota 10 de 12",
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "deducted_pto_days": null,
    "deducted_amount": "-425.0",
    "deducted": true,
    "deducted_at": null,
    "creator_id": 4,
    "updater_id": 4,
    "entity_id": 4,
    "created_at": "2021-12-22T22:46:44.763Z",
    "updated_at": "2021-12-22T22:48:00.440Z"
  },
  {
    "id": 5,
    "zid": 6,
    "date": "2022-11-01",
    "time": "2000-01-01T00:00:00.000Z",
    "employee_id": 3,
    "incident_type_id": 2,
    "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amount=>-0.425e3, :deduction_percent=>nil, :flexible_deduction_per_incident=>true, :description=>\"\"}",
    "notes": "compu cuota 12 de 12",
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "deducted_pto_days": null,
    "deducted_amount": "-425.0",
    "deducted": true,
    "deducted_at": null,
    "creator_id": 4,
    "updater_id": null,
    "entity_id": 4,
    "created_at": "2021-12-22T22:47:36.027Z",
    "updated_at": "2021-12-22T22:47:36.027Z"
  }
]
```

### Crear una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "incident": {
      "employee_id": "1",
      "incident_type_id": "1",
      "date": "2024-06-15",
      "notes": "Llego 30 minutos tarde"
    }
  }' \
  https://app.zauru.com/payroll/incidents.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "11",
  "zid": "10",
  "date": "2022-09-01",
  "time": "00:00:00",
  "employee_id": "9805",
  "incident_type_id": "10",
  "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amou...",
  "notes": "compu cuota 10 de 12",
  "pdf": null,
  "deducted_pto_days": null,
  "deducted_amount": "-425.0",
  "deducted": true,
  "deducted_at": null,
  "creator_id": "2",
  "updater_id": "2",
  "entity_id": "2",
  "created_at": "2021-12-22 22:46:44.763626",
  "updated_at": "2021-12-22 22:48:00.440651"
}
```

### Ver una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "11",
  "zid": "10",
  "date": "2022-09-01",
  "time": "00:00:00",
  "employee_id": "9805",
  "incident_type_id": "10",
  "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amou...",
  "notes": "compu cuota 10 de 12",
  "pdf": null,
  "deducted_pto_days": null,
  "deducted_amount": "-425.0",
  "deducted": true,
  "deducted_at": null,
  "creator_id": "2",
  "updater_id": "2",
  "entity_id": "2",
  "created_at": "2021-12-22 22:46:44.763626",
  "updated_at": "2021-12-22 22:48:00.440651"
}
```

### Borrar una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/incidents/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener estructura para crear una incidencia

Devuelve la incidencia vacia junto con los empleados y tipos de incidencia disponibles.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "incident": {
    "id": null,
    "zid": null,
    "date": "2026-08-05",
    "time": null,
    "employee_id": null,
    "incident_type_id": null,
    "incident_type_data": null,
    "notes": null,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "deducted_pto_days": null,
    "deducted_amount": null,
    "deducted": null,
    "deducted_at": null,
    "creator_id": null,
    "updater_id": null,
    "entity_id": 1,
    "created_at": null,
    "updated_at": null
  },
  "employees": [
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
      "additional_worker_id": "1000000001 -1000002- RL1000000003 -1000004-"
    },
    {
      "id": 4,
      "zid": 5,
      "id_number": "002",
      "active": true,
      "accountant": true,
      "inventory_controller": true,
      "seller": true,
      "buyer": false,
      "support_agent": true,
      "name": "Empleado Ejemplo Dos",
      "identification": "2345 67890 0101",
      "email": "empleado@ejemplo.com",
      "position": "Implementador",
      "address": "Avenida Ejemplo 456, Zona 15",
      "phone": "5555-0002",
      "birthday": "1980-08-19",
      "started": "2021-04-01",
      "salary": null,
      "ssn": "987654321",
      "tin": "87654321",
      "user_id": 6,
      "updater_id": 7,
      "entity_id": 1,
      "agency_id": 3,
      "notes": "",
      "created_at": "2014-10-06T16:21:54.296Z",
      "updated_at": "2026-01-15T18:51:30.924Z",
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
      "spouse_name": "",
      "dependents": "",
      "emergency_contact_name": "",
      "emergency_contact_phone": "",
      "education_level": "",
      "driver_license_number": "",
      "additional_worker_id": "1000000001 -1000002-"
    }
  ],
  "incident_types_grouped": {
    "": [
      [
        "adelanto de salario",
        4
      ],
      [
        "ajuste de aguinaldo",
        173
      ]
    ],
    "Puntualidad": [
      [
        "Llegada tarde",
        262
      ],
      [
        "Llegada tarde",
        263
      ]
    ]
  }
}
```

### Obtener estructura para editar una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "11",
  "zid": "10",
  "date": "2022-09-01",
  "time": "00:00:00",
  "employee_id": "9805",
  "incident_type_id": "10",
  "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amou...",
  "notes": "compu cuota 10 de 12",
  "pdf": null,
  "deducted_pto_days": null,
  "deducted_amount": "-425.0",
  "deducted": true,
  "deducted_at": null,
  "creator_id": "2",
  "updater_id": "2",
  "entity_id": "2",
  "created_at": "2021-12-22 22:46:44.763626",
  "updated_at": "2021-12-22 22:48:00.440651"
}
```

### Actualizar una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "incident": {
      "employee_id": "1",
      "incident_type_id": "1",
      "date": "2024-06-15",
      "notes": "Llego 45 minutos tarde"
    }
  }' \
  https://app.zauru.com/payroll/incidents/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "11",
  "zid": "10",
  "date": "2022-09-01",
  "time": "00:00:00",
  "employee_id": "9805",
  "incident_type_id": "10",
  "incident_type_data": "{:zid=>2, :category=>\"\", :code=>\"\", :name=>\"cobro por adelanto de salario\", :deduction_as_pto_days=>nil, :deduction_amou...",
  "notes": "compu cuota 10 de 12",
  "pdf": null,
  "deducted_pto_days": null,
  "deducted_amount": "-425.0",
  "deducted": true,
  "deducted_at": null,
  "creator_id": "2",
  "updater_id": "2",
  "entity_id": "2",
  "created_at": "2021-12-22 22:46:44.763626",
  "updated_at": "2021-12-22 22:48:00.440651"
}
```
