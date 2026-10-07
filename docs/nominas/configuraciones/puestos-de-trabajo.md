---
title: "Puestos de trabajo"
sidebar_label: "Puestos de trabajo"
sidebar_position: 2
---

Antes de contratar al primer empleado, conviene tener los puestos listos —Operario de producción, Administrador, Supervisor de cuadrilla—, porque de aquí salen las reglas de pago de cada quien. Los puestos de trabajo definen el tipo de contratación (jornal o destajo), la frecuencia de pago y las cuentas contables asociadas. Para gestionar puestos:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Puestos de trabajo"**.

![Listado de puestos de trabajo](/img/nominas/configuraciones-de-nomina-2.png)

## Listado de puestos

El listado muestra todos los puestos de trabajo con su nombre, tipo de pago, frecuencia de pago y estado (activo/inactivo).

## Crear un puesto de trabajo

1. Hacer clic en **"Nuevo Puesto"**.
2. Completar los campos:

![Formulario de nuevo puesto de trabajo](/img/nominas/configuraciones-de-nomina-3.png)

- **Activo**: marcar para que el puesto este disponible.
- **Nombre**: nombre del puesto (ej. "Administrador", "Operario de produccion").
- **Descripcion**: descripcion opcional del puesto.
- **Cuenta de salario**: cuenta contable donde se registra el gasto de salario.
- **Cuenta de horas extra**: cuenta contable para el gasto de horas extra.
- **Habilitar comisiones**: marcar si el puesto puede recibir comisiones por ventas.
- **Cuenta de comisiones**: cuenta contable para el gasto de comisiones.
- **Habilitar bonificacion**: marcar si el puesto incluye bonificacion mensual obligatoria (ej. Decreto 42-92 en Guatemala).
- **Cuenta de bonificacion**: cuenta contable para el gasto de bonificacion.
- **Puesto padre**: puesto jerarquicamente superior (opcional, para organigrama).
- **Frecuencia de pago**: seleccionar entre mensual, quincenal, catorcenal o semanal.
- **Tipo de contrato**: seleccionar entre asalariado (jornal) o destajo.
- **Horas de trabajo**: horas laborales del puesto.

### Beneficios y deducciones del puesto

Al crear o editar un puesto, se pueden asignar beneficios y deducciones por defecto que se aplicaran automaticamente a los contratos que usen este puesto:

1. En la tabla **"Beneficios y deducciones"**, seleccionar los beneficios/deducciones deseados.
2. Usar los botones **"+"**, **"+2"** o **"+5"** para agregar filas adicionales.
3. Hacer clic en **"Guardar"**.

## Editar un puesto de trabajo

1. En el listado de puestos, hacer clic en el nombre del puesto.
2. Hacer clic en **"Editar"**.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

## Borrar un puesto de trabajo

En el detalle del puesto, hacer clic en **"Borrar"**. Solo se pueden borrar puestos que no tengan contratos asociados.

Con los puestos definidos y sus beneficios asignados, cada contrato que cree heredará la configuración completa sin trabajo extra. Ese es el siguiente paso natural: crear el contrato de trabajo de su primer empleado.

## API (llamadas desde sistemas externos)

### Listar puestos de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "active": true,
    "zid": 1,
    "name": "Devops",
    "parent_job_position_id": 2,
    "payment_frequency": 4,
    "payroll_type": false,
    "working_hours": "La jornada de trabajo es discontinua, de lunes a sábado así: iniciando a las 8:30 a las 12:30, luego desde las 13:30 a las 17:30 horas de lunes a viernes, y el sábado de 8:00 a las 12:00 horas.",
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2021-05-01T00:00:22.063Z",
    "updated_at": "2024-07-17T21:12:45.159Z",
    "job_position_deductions_count": 10,
    "salary_account_id": 4,
    "overtime_salary_account_id": 5,
    "enable_sales_commissions": false,
    "sales_commissions_account_id": null,
    "description": "",
    "mandatory_bonus_account_id": null,
    "enable_mandatory_bonus": false
  },
  {
    "id": 6,
    "active": true,
    "zid": 7,
    "name": "Front-end developer",
    "parent_job_position_id": 2,
    "payment_frequency": 4,
    "payroll_type": false,
    "working_hours": "de lunes a jueves así: iniciando a las 7:00 A.M. concluyendo a las 13:30 P.M., para regresar a las 14:30 P.M. finalizando a las 17:00 P.M. de lunes a jueves, y el viernes de 7:00 A.M. concluyendo a las 13:30 P.M., para regresar a las 14:30 P.M. finalizand",
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2023-01-06T18:01:54.635Z",
    "updated_at": "2023-01-06T20:09:53.866Z",
    "job_position_deductions_count": 10,
    "salary_account_id": 4,
    "overtime_salary_account_id": 5,
    "enable_sales_commissions": false,
    "sales_commissions_account_id": null,
    "description": "",
    "mandatory_bonus_account_id": null,
    "enable_mandatory_bonus": false
  }
]
```

### Ver un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "338",
  "active": true,
  "zid": "1",
  "name": "Supervisor",
  "parent_job_position_id": null,
  "payment_frequency": "1",
  "payroll_type": false,
  "working_hours": null,
  "creator_id": "214",
  "updater_id": null,
  "entity_id": "1033",
  "created_at": "2023-07-28 20:25:39.066328",
  "updated_at": "2023-07-28 20:25:39.066328",
  "job_position_deductions_count": null,
  "salary_account_id": "66819",
  "overtime_salary_account_id": null,
  "enable_sales_commissions": false,
  "sales_commissions_account_id": null,
  "description": null,
  "mandatory_bonus_account_id": null,
  "enable_mandatory_bonus": false
}
```

### Obtener estructura para crear un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "active": true,
  "zid": null,
  "name": null,
  "parent_job_position_id": null,
  "payment_frequency": 1,
  "payroll_type": true,
  "working_hours": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "job_position_deductions_count": null,
  "salary_account_id": 2,
  "overtime_salary_account_id": null,
  "enable_sales_commissions": false,
  "sales_commissions_account_id": null,
  "description": null,
  "mandatory_bonus_account_id": null,
  "enable_mandatory_bonus": false
}
```

### Obtener estructura para editar un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "338",
  "active": true,
  "zid": "1",
  "name": "Supervisor",
  "parent_job_position_id": null,
  "payment_frequency": "1",
  "payroll_type": false,
  "working_hours": null,
  "creator_id": "214",
  "updater_id": null,
  "entity_id": "1033",
  "created_at": "2023-07-28 20:25:39.066328",
  "updated_at": "2023-07-28 20:25:39.066328",
  "job_position_deductions_count": null,
  "salary_account_id": "66819",
  "overtime_salary_account_id": null,
  "enable_sales_commissions": false,
  "sales_commissions_account_id": null,
  "description": null,
  "mandatory_bonus_account_id": null,
  "enable_mandatory_bonus": false
}
```

### Crear un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "job_position": {
      "active": true,
      "name": "Operario de produccion",
      "description": "Operario de linea de produccion",
      "salary_account_id": "1",
      "payment_frequency": 3,
      "payroll_type": true,
      "working_hours": "8",
      "job_position_deductions_attributes": {
        "0": { "payroll_benefits_deduction_id": "1" }
      }
    }
  }' \
  https://app.zauru.com/payroll/settings/job_positions.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "338",
  "active": true,
  "zid": "1",
  "name": "Supervisor",
  "parent_job_position_id": null,
  "payment_frequency": "1",
  "payroll_type": false,
  "working_hours": null,
  "creator_id": "214",
  "updater_id": null,
  "entity_id": "1033",
  "created_at": "2023-07-28 20:25:39.066328",
  "updated_at": "2023-07-28 20:25:39.066328",
  "job_position_deductions_count": null,
  "salary_account_id": "66819",
  "overtime_salary_account_id": null,
  "enable_sales_commissions": false,
  "sales_commissions_account_id": null,
  "description": null,
  "mandatory_bonus_account_id": null,
  "enable_mandatory_bonus": false
}
```

### Actualizar un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "job_position": {
      "name": "Operario de produccion senior",
      "working_hours": "8"
    }
  }' \
  https://app.zauru.com/payroll/settings/job_positions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "338",
  "active": true,
  "zid": "1",
  "name": "Supervisor",
  "parent_job_position_id": null,
  "payment_frequency": "1",
  "payroll_type": false,
  "working_hours": null,
  "creator_id": "214",
  "updater_id": null,
  "entity_id": "1033",
  "created_at": "2023-07-28 20:25:39.066328",
  "updated_at": "2023-07-28 20:25:39.066328",
  "job_position_deductions_count": null,
  "salary_account_id": "66819",
  "overtime_salary_account_id": null,
  "enable_sales_commissions": false,
  "sales_commissions_account_id": null,
  "description": null,
  "mandatory_bonus_account_id": null,
  "enable_mandatory_bonus": false
}
```

### Borrar un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/job_positions/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
