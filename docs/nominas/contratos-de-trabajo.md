---
title: "Contratos de trabajo"
sidebar_label: "Contratos de trabajo"
sidebar_position: 9
---

Cuando contrata a alguien —o cuando llega el momento de liquidarlo—, el contrato de trabajo es el documento que une todo: el empleado con su puesto, su salario por hora, su método de pago y sus días de tiempo personal. Aquí aprenderá a crearlo, consultarlo, terminarlo y a revisar los cálculos de liquidación que el sistema genera al cerrar la relación laboral.

## Listado de contratos

Para acceder al listado de contratos:

1. Ir a **"Nominas"**.
2. Seleccionar **"Contratos de trabajo"**.

El listado muestra todos los contratos con su estado (activo, terminado) y permite filtrar por:

![Listado de contratos de trabajo con filtros por agencia y estado](/img/nominas/contratos-de-trabajo-1.png)

- **Agencia**: filtrar contratos por agencia del empleado.
- **Estado**: filtrar por contratos activos, terminados o todos.

Cada fila muestra el ID, empleado, puesto de trabajo, fecha de inicio, fecha de cierre y estado.

## Crear un contrato de trabajo

1. En el listado de contratos, hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo contrato de trabajo con datos básicos, pago y tiempo personal](/img/nominas/contratos-de-trabajo-2.png)

### Datos basicos

- **Activo**: marcar para que el contrato este vigente.
- **Numero de contrato**: numero o codigo identificador del contrato. Si se deja vacio, el sistema lo genera automaticamente.
- **Empleado**: seleccionar el empleado a contratar.
- **Referencia**: texto descriptivo para identificar el contrato en listados.
- **Puesto de trabajo**: seleccionar el puesto que ocupara el empleado.
- **Tipo de termino de contrato**: clasificacion del contrato (indefinido, plazo fijo, etc.).
- **Fecha de inicio**: fecha en que el empleado inicia labores.

### Datos de pago

- **Metodo de pago por defecto**: metodo de pago que se usara para pagar al empleado en las corridas de nomina.
- **Salario por hora ordinario**: tarifa por hora de trabajo ordinario. El sistema muestra una sugerencia del calculo mensual basado en la frecuencia de pago y las horas de trabajo del puesto.
- **Salario por hora extraordinario diurno**: tarifa por hora extra diurna.
- **Salario por hora extraordinario nocturno**: tarifa por hora extra nocturna.
- **Bonificacion mensual**: monto mensual de bonificacion obligatoria (ej. Decreto 42-92 en Guatemala).
- **Descontar tiempo personal en calculo de bonificacion**: si se marca, los dias de tiempo personal no se consideran como dias laborados para el calculo de la bonificacion. Si no se marca, los dias de tiempo personal cuentan como laborados para la bonificacion.

### Tiempo personal

- **Dias de tiempo personal por ano**: cantidad de dias de vacaciones o tiempo personal que el empleado acumula por ano.
- **Agregar saldo del ano al cumplir el ano**: si se marca, el saldo de tiempo personal del nuevo ano se agrega al cumplir el aniversario laboral. Si no se marca, se agrega al inicio del ano calendario.

### Contrato firmado

- **Contrato firmado (PDF)**: opcional, adjuntar el archivo PDF del contrato firmado por el empleado y la empresa.

3. Hacer clic en **"Guardar"**.

Al guardar el contrato, el sistema automaticamente:
- Asigna los beneficios y deducciones configurados en el puesto de trabajo.
- Inicializa el saldo de tiempo personal del empleado.

## Ver detalle de un contrato

En el listado de contratos, hacer clic en el numero de contrato o en el nombre del empleado para ver el detalle completo:

![Detalle de un contrato de trabajo con información y beneficios del puesto](/img/nominas/contratos-de-trabajo-3.png)

### Informacion basica

Muestra el ID, estado (activo con icono verde, inactivo con icono rojo), numero de contrato, empleado, referencia, tipo de termino de contrato, fecha de inicio y fecha de cierre.

### Puesto de trabajo

Muestra el puesto asignado con su tipo de contrato, frecuencia de pago y horas de trabajo.

Incluye una tabla con los **"Beneficios y deducciones por defecto"** que se heredaron del puesto de trabajo al crear el contrato. Cada fila muestra:

- Nombre del beneficio/deduccion.
- Condicion de salario minimo para aplicar.
- Monto empleado y cuenta contable del empleado.
- Monto entidad y cuenta contable de la entidad.

### Pago

Muestra el metodo de pago por defecto, los salarios por hora (ordinario, extraordinario diurno, extraordinario nocturno), la bonificacion mensual y la configuracion de descuento de tiempo personal en bonificacion.

### Tiempo personal

Muestra los dias de tiempo personal por ano y si el saldo se agrega en aniversario o en ano calendario.

### Terminacion de contrato

Si el contrato ha sido terminado, muestra una seccion con fondo rojo que incluye:

- Fecha de terminacion.
- Tipo de terminacion (despido o renuncia).
- Razon de la terminacion.
- Enlace al detalle de la terminacion con los calculos de liquidacion.

### Contrato firmado

Si se adjunto un PDF del contrato firmado, muestra un enlace para descargarlo.

## Editar un contrato de trabajo

1. En el detalle del contrato, hacer clic en **"Editar"**.
2. El formulario muestra los mismos campos que al crear, con los valores actuales.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

## Terminar un contrato de trabajo

1. En el detalle del contrato, hacer clic en **"Terminar"** (icono de bandera).
2. Completar los campos de terminacion:

- **Fecha de terminacion**: fecha en que finaliza la relacion laboral.
- **Tipo de terminacion**: seleccionar entre **"Despido"** o **"Renuncia"**.
- **Razon**: descripcion del motivo de la terminacion.

3. Hacer clic en **"Guardar"**.

El sistema automaticamente calcula la liquidacion basandose en:

- **Promedio de salario mensual**: calculado a partir de la cantidad de nominas recientes configurada en las configuraciones generales.
- **Indemnizacion**: porcentaje del promedio de salario mensual configurado para el tipo de terminacion.
- **Dias pendientes de tiempo personal**: calculo del valor de los dias de tiempo personal no gozados, segun el porcentaje configurado para el tipo de terminacion.

El detalle de la terminacion muestra estos calculos discriminados y el total de la liquidacion.

## Borrar un contrato de trabajo

En el detalle del contrato, hacer clic en **"Borrar"**. Solo se pueden borrar contratos que no tengan nominas asociadas ni terminaciones de contrato.

## Imprimir un contrato de trabajo

En el detalle del contrato, hacer clic en **"Imprimir"** o **"Descargar PDF"** para generar una version imprimible del contrato usando la plantilla configurada. El sistema soporta multiples plantillas de impresion para contratos de trabajo.

Con los contratos registrados, el sistema ya sabe cuánto pagar a cada empleado, cuánto bonificarle y qué descontarle en cada corrida. Si alguien deja la empresa, termine su contrato y revise la liquidación calculada; si no, siga con las corridas de nómina cuando llegue la fecha de pago.

## API (llamadas desde sistemas externos)

### Listar contratos de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "active": true,
    "reference": "",
    "job_position_id": 3,
    "contract_payment_type_id": 4,
    "hourly_salary_ordinary": 41.0958904,
    "hourly_salary_extraordinary": 41.0958904,
    "hourly_salary_night_shift": 61.6438356,
    "start_date": "2023-01-01",
    "close_date": null,
    "closer_id": null,
    "closed_at": null,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "employee_id": 5,
    "creator_id": 4,
    "updater_id": 6,
    "entity_id": 4,
    "created_at": "2023-01-06T20:08:19.929Z",
    "updated_at": "2026-04-30T15:08:15.702Z",
    "default_payroll_payment_method_id": 7,
    "contract_term_type_id": 5,
    "personal_time_off_days_per_year": 15,
    "personal_time_off_add_year_balance_on_year_due": true,
    "id_number": null,
    "monthly_mandatory_bonus": "0.0",
    "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
    "closed": false,
    "termination_date": null
  },
  {
    "id": 8,
    "zid": 9,
    "active": false,
    "reference": "",
    "job_position_id": 10,
    "contract_payment_type_id": 4,
    "hourly_salary_ordinary": 25.68493,
    "hourly_salary_extraordinary": 38.5274,
    "hourly_salary_night_shift": null,
    "start_date": "2021-12-01",
    "close_date": "2023-05-18",
    "closer_id": null,
    "closed_at": null,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "employee_id": 11,
    "creator_id": 5,
    "updater_id": 4,
    "entity_id": 4,
    "created_at": "2021-12-15T12:48:45.865Z",
    "updated_at": "2022-12-19T17:26:00.578Z",
    "default_payroll_payment_method_id": 9,
    "contract_term_type_id": 5,
    "personal_time_off_days_per_year": 15,
    "personal_time_off_add_year_balance_on_year_due": true,
    "id_number": null,
    "monthly_mandatory_bonus": "0.0",
    "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
    "closed": true,
    "termination_date": null
  }
]
```

### Crear un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "work_contract": {
      "active": true,
      "employee_id": "1",
      "reference": "Contrato de prueba",
      "job_position_id": "1",
      "contract_term_type_id": "1",
      "start_date": "2024-01-01",
      "default_payroll_payment_method_id": "1",
      "hourly_salary_ordinary": "50.0",
      "hourly_salary_extraordinary": "75.0",
      "hourly_salary_night_shift": "100.0",
      "monthly_mandatory_bonus": "250.0",
      "personal_time_off_days_per_year": "15"
    }
  }' \
  https://app.zauru.com/payroll/work_contracts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "job_position": [
    "no puede estar en blanco"
  ],
  "active": [
    "ya ha sido tomado"
  ]
}
```

### Ver un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2617",
  "zid": "1040",
  "active": false,
  "reference": null,
  "job_position_id": "22",
  "contract_payment_type_id": "1",
  "hourly_salary_ordinary": "0",
  "hourly_salary_extraordinary": null,
  "hourly_salary_night_shift": null,
  "start_date": "2021-09-29",
  "close_date": null,
  "closer_id": null,
  "closed_at": null,
  "pdf": null,
  "employee_id": "9576",
  "creator_id": "2013",
  "updater_id": "2013",
  "entity_id": "802",
  "created_at": "2021-10-07 21:59:19.753293",
  "updated_at": "2022-05-04 18:42:25.926959",
  "default_payroll_payment_method_id": "3",
  "contract_term_type_id": "1",
  "personal_time_off_days_per_year": "15",
  "personal_time_off_add_year_balance_on_year_due": true,
  "id_number": null,
  "monthly_mandatory_bonus": "0.00",
  "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
  "closed": false,
  "termination_date": null
}
```

### Terminar un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "work_contract_termination": {
      "termination_date": "2024-12-31",
      "termination_type": 1,
      "reason": "Reestructuracion de personal"
    }
  }' \
  https://app.zauru.com/payroll/work_contracts/1/work_contract_terminations.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "entity_id": "381",
  "termination_date": "2022-07-31",
  "notification_date": null,
  "reason": null,
  "termination_type": "1",
  "pdf": null,
  "work_contract_id": "2933",
  "terminator_id": "2082",
  "approver_id": null,
  "approved": false,
  "years_worked": "3.22",
  "base_monthly_salary": "4000.000000",
  "salary_pay": "12880.000000",
  "base_monthly_overtime_salary": "52.420000",
  "overtime_salary_pay": "168.790000",
  "base_monthly_sales_commissions": "0.000000",
  "sales_commissions_pay": "0.000000",
  "base_monthly_applicable_on_cycle_benefits_deductions_amounts": "{}",
  "base_monthly_applicable_on_cycle_benefits_deductions_ids": "{}",
  "applicable_on_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_ids": "{}",
  "pending_personal_time_off_days": "0",
  "pending_personal_time_off_amount_pay": "0",
  "pending_personal_time_off_bonus_amount_pay": "0",
  "total_severance_pay": "0",
  "created_at": "2023-03-30 20:06:26.410759",
  "updated_at": "2023-03-30 20:06:26.410759"
}
```

### Ver una terminacion de contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contract_terminations/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "entity_id": "381",
  "termination_date": "2022-07-31",
  "notification_date": null,
  "reason": null,
  "termination_type": "1",
  "pdf": null,
  "work_contract_id": "2933",
  "terminator_id": "2082",
  "approver_id": null,
  "approved": false,
  "years_worked": "3.22",
  "base_monthly_salary": "4000.000000",
  "salary_pay": "12880.000000",
  "base_monthly_overtime_salary": "52.420000",
  "overtime_salary_pay": "168.790000",
  "base_monthly_sales_commissions": "0.000000",
  "sales_commissions_pay": "0.000000",
  "base_monthly_applicable_on_cycle_benefits_deductions_amounts": "{}",
  "base_monthly_applicable_on_cycle_benefits_deductions_ids": "{}",
  "applicable_on_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_ids": "{}",
  "pending_personal_time_off_days": "0",
  "pending_personal_time_off_amount_pay": "0",
  "pending_personal_time_off_bonus_amount_pay": "0",
  "total_severance_pay": "0",
  "created_at": "2023-03-30 20:06:26.410759",
  "updated_at": "2023-03-30 20:06:26.410759"
}
```

### Obtener estructura para una nueva terminacion de contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/1/work_contract_terminations/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "entity_id": "381",
  "termination_date": "2022-07-31",
  "notification_date": null,
  "reason": null,
  "termination_type": "1",
  "pdf": null,
  "work_contract_id": "2933",
  "terminator_id": "2082",
  "approver_id": null,
  "approved": false,
  "years_worked": "3.22",
  "base_monthly_salary": "4000.000000",
  "salary_pay": "12880.000000",
  "base_monthly_overtime_salary": "52.420000",
  "overtime_salary_pay": "168.790000",
  "base_monthly_sales_commissions": "0.000000",
  "sales_commissions_pay": "0.000000",
  "base_monthly_applicable_on_cycle_benefits_deductions_amounts": "{}",
  "base_monthly_applicable_on_cycle_benefits_deductions_ids": "{}",
  "applicable_on_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_amounts_pay": "{}",
  "off_cycle_benefits_deductions_ids": "{}",
  "pending_personal_time_off_days": "0",
  "pending_personal_time_off_amount_pay": "0",
  "pending_personal_time_off_bonus_amount_pay": "0",
  "total_severance_pay": "0",
  "created_at": "2023-03-30 20:06:26.410759",
  "updated_at": "2023-03-30 20:06:26.410759"
}
```

### Eliminar una terminacion de contrato

Revierta la terminacion y devuelve el contrato a estado activo.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/work_contract_terminations/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener estructura para crear un contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "reference": null,
  "job_position_id": null,
  "contract_payment_type_id": 1,
  "hourly_salary_ordinary": null,
  "hourly_salary_extraordinary": null,
  "hourly_salary_night_shift": null,
  "start_date": null,
  "close_date": null,
  "closer_id": null,
  "closed_at": null,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "employee_id": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 2,
  "created_at": null,
  "updated_at": null,
  "default_payroll_payment_method_id": null,
  "contract_term_type_id": 1,
  "personal_time_off_days_per_year": 15,
  "personal_time_off_add_year_balance_on_year_due": true,
  "id_number": null,
  "monthly_mandatory_bonus": "0.0",
  "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
  "closed": false,
  "termination_date": null
}
```

### Obtener estructura para editar un contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2617",
  "zid": "1040",
  "active": false,
  "reference": null,
  "job_position_id": "22",
  "contract_payment_type_id": "1",
  "hourly_salary_ordinary": "0",
  "hourly_salary_extraordinary": null,
  "hourly_salary_night_shift": null,
  "start_date": "2021-09-29",
  "close_date": null,
  "closer_id": null,
  "closed_at": null,
  "pdf": null,
  "employee_id": "9576",
  "creator_id": "2013",
  "updater_id": "2013",
  "entity_id": "802",
  "created_at": "2021-10-07 21:59:19.753293",
  "updated_at": "2022-05-04 18:42:25.926959",
  "default_payroll_payment_method_id": "3",
  "contract_term_type_id": "1",
  "personal_time_off_days_per_year": "15",
  "personal_time_off_add_year_balance_on_year_due": true,
  "id_number": null,
  "monthly_mandatory_bonus": "0.00",
  "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
  "closed": false,
  "termination_date": null
}
```

### Actualizar un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "work_contract": {
      "reference": "Contrato actualizado",
      "hourly_salary_ordinary": "55.0",
      "monthly_mandatory_bonus": "250.0"
    }
  }' \
  https://app.zauru.com/payroll/work_contracts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2617",
  "zid": "1040",
  "active": false,
  "reference": null,
  "job_position_id": "22",
  "contract_payment_type_id": "1",
  "hourly_salary_ordinary": "0",
  "hourly_salary_extraordinary": null,
  "hourly_salary_night_shift": null,
  "start_date": "2021-09-29",
  "close_date": null,
  "closer_id": null,
  "closed_at": null,
  "pdf": null,
  "employee_id": "9576",
  "creator_id": "2013",
  "updater_id": "2013",
  "entity_id": "802",
  "created_at": "2021-10-07 21:59:19.753293",
  "updated_at": "2022-05-04 18:42:25.926959",
  "default_payroll_payment_method_id": "3",
  "contract_term_type_id": "1",
  "personal_time_off_days_per_year": "15",
  "personal_time_off_add_year_balance_on_year_due": true,
  "id_number": null,
  "monthly_mandatory_bonus": "0.00",
  "exclude_personal_time_off_in_mandatory_bonus_calculation": true,
  "closed": false,
  "termination_date": null
}
```

### Borrar un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/work_contracts/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
