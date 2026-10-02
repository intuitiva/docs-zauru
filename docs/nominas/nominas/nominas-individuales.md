---
title: "Nóminas individuales"
sidebar_label: "Nóminas individuales"
sidebar_position: 3
---

Cada nómina del periodo incluye una nómina por empleado: el registro de su pago en el rango de fechas. La nómina individual muestra el desglose completo del cálculo (salario, horas extra, jornada nocturna, comisiones, bonificación, beneficios, deducciones e incidencias) y es la que se imprime o descarga como boleta de pago.

Para llegar a una nómina individual:

1. Ir a **"Nóminas"**.
2. Seleccionar **"Nóminas no Pagadas"** o **"Nóminas Pagadas"**.
3. Abrir el detalle de la nómina y hacer clic en el empleado.

## Ver detalle de una nómina individual

El detalle muestra:

### Resumen de la nómina

- Fechas de inicio y fin de la nómina.
- Días pagados en el periodo.
- Tipo de calendario de pago.

### Datos del empleado

- ID de la nómina individual.
- Empleado (código, nombre y puesto).
- Fecha de inicio del contrato de trabajo.
- Método de pago.
- Días aplicables en el periodo.
- Días de tiempo personal en el periodo.

### Detalle de beneficios, deducciones e incidencias

Tabla principal con el desglose completo de la nómina individual. Cada fila muestra una columna de incidente (si aplica), referencia, monto empleado y monto entidad:

**Componentes fijos** (para nóminas en ciclo regular):

- **Salario**: monto del salario base del periodo. Para frecuencia semanal y catorcenal, muestra también los días con destajo bonificado.
- **Horas extra**: monto por horas extra trabajadas, con la cantidad de horas y la tarifa horaria.
- **Jornada nocturna**: monto por horas nocturnas trabajadas, con la cantidad de horas y la tarifa horaria.
- **Bonificación**: monto de la bonificación mensual obligatoria (si está habilitada para el puesto).
- **Comisiones por ventas**: monto de comisiones (si están habilitadas para el puesto).

**Beneficios y deducciones**: cada beneficio o deducción configurado aparece como una fila con:

- Nombre del beneficio o deducción.
- Tipo de incidencia asociada (si aplica).
- Referencia.
- Monto del empleado (positivo para beneficios, negativo para deducciones).
- Monto de la entidad (aporte patronal).

**Totales**:

- Total pago empleado.
- Total costo entidad.

### Datos de referencia histórica (solo para nóminas fuera de ciclo)

Para nóminas fuera de ciclo, el sistema muestra información de referencia con datos de nóminas anteriores:

- **Nóminas entre fechas**: tabla con salario, horas extra, jornada nocturna, comisiones, pagos de tiempo personal, beneficios y deducciones del periodo fuera de ciclo.
- **Nóminas del mes anterior**: misma tabla para el mes inmediatamente anterior.

Ambas tablas muestran los montos del empleado y de la entidad por separado.

### Destajos asociados

Tabla con todos los destajos del empleado incluidos en esta nómina individual:

- Fecha del destajo.
- Supervisor.
- Tipo de destajo.
- Si es hora extra.
- Cantidad.
- Valor unitario.
- Valor total.
- Si incluye bonificación.
- Si fuerza bonificación de semana completa.

Total de valores de destajo incluidos.

### Tiempo personal utilizado

Tabla con las solicitudes de tiempo personal que afectan esta nómina individual:

- Notas de la solicitud.
- Fecha de inicio y fin.
- Total de días de la solicitud.
- Días que aplican en esta nómina.
- Monto pagado por tiempo personal.

### Partidas contables asociadas

Tabla con las transacciones contables (partidas) generadas por esta nómina individual:

- ID de la transacción.
- Número de partida.
- Fecha.
- Referencia.
- Beneficiario.
- Cuentas de origen (debe) y destino (haber).
- Monto.

Cada partida tiene un enlace al detalle completo en el módulo de contabilidad.

### Formularios asociados

Si existen plantillas de impresión configuradas para nóminas, se muestran los formularios generados y la opción de crear nuevos.

### Información adicional

- Creador y fecha de creación.
- Último editor y fecha de última edición.

## Crear una nómina individual

1. En el detalle de la nómina, hacer clic en **"Nuevo Empleado a la Nómina"**.
2. Completar los campos:

- **Empleado**: contrato de trabajo del empleado.
- **Método de Pago**: método de pago para esta nómina individual (por defecto, el del contrato).

3. En la tabla de beneficios, deducciones e incidencias, revisar y ajustar los montos:

- **Salario**: monto calculado según el contrato y el periodo.
- **Horas extra**: ingresar las horas trabajadas y una referencia; el sistema calcula el monto con la tarifa horaria del contrato.
- **Jornada nocturna**: ingresar las horas nocturnas y una referencia; el sistema calcula el monto con la tarifa horaria del contrato.
- **Comisiones por ventas**: si aplica, ingresar el monto y una referencia.
- **Beneficios y deducciones**: cada uno aparece con su monto calculado. Si el beneficio o deducción tiene marcado **"Monto Flexible"**, el campo del monto empleado es editable.
- **Incidencias**: las incidencias del empleado en el periodo aparecen como filas de deducción.

Usar los botones **"+"**, **"+2"** y **"+5"** para agregar filas de beneficios o deducciones adicionales. El botón **"Refrescar"** vuelve a calcular los montos.

4. En **"Información Adicional"**, agregar un **"Memo"** si hace falta.
5. Hacer clic en **"Crear Planillas"**.

Al guardar, el sistema calcula todos los montos a partir del contrato, los beneficios, las deducciones y las incidencias, y genera las partidas contables correspondientes (salvo que la configuración **"NO generar partidas contables en Nóminas"** esté activa).

## Editar una nómina individual

1. En el detalle de la nómina individual, hacer clic en el icono de edición.
2. Solo disponible si la nómina del periodo no está aprobada ni pagada.
3. Modificar los campos necesarios.
4. Hacer clic en **"Actualizar Planillas"**.

## Borrar una nómina individual

En el detalle de la nómina individual, hacer clic en el icono de basura. Solo disponible si la nómina del periodo no está aprobada ni pagada. Al borrar, las partidas contables asociadas también se eliminan.

## Imprimir una nómina individual

En el detalle de la nómina individual, por cada plantilla de impresión configurada aparecen dos botones:

- **"Imprimir como"**: abre la vista de impresión de la boleta con la plantilla indicada.
- **"Descargar PDF como"**: descarga la boleta en PDF con la plantilla indicada.

## API (llamadas desde sistemas externos)

### Crear una nómina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payroll": {
      "payroll_run_id": "1",
      "work_contract_id": "1",
      "payroll_payment_method_id": "1",
      "overtime_hours": "5",
      "overtime_reference": "Horas extra produccion",
      "memo": "Nómina regular julio 2024"
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5552",
  "zid": "18",
  "employee_id": "1378",
  "salary": "2825.100000",
  "total_pay": "3559.499812",
  "total_cost": "3917.439812",
  "payroll_run_id": "67",
  "work_contract_id": "86",
  "payroll_payment_method_id": "4",
  "calculated_at": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "2",
  "payroll_details_count": "8",
  "created_at": "2021-09-30 03:19:59.689146",
  "updated_at": "2021-09-30 03:19:59.689146",
  "overtime_salary": "0.000000",
  "off_cycle": false,
  "current_work_contract_starts": "2021-04-01",
  "non_off_cycle_last_month_salary": null,
  "non_off_cycle_last_month_overtime_salary": null,
  "weekly_salary": "{706.275,706.275,706.275,706.275}",
  "weekly_overtime_salary": "{0.0,0.0,0.0,0.0}",
  "week_days_count_with_bonused_piecework": "{5,5,5,5}",
  "week_days_count_with_forced_bonused_piecework": "{0,0,0,0}",
  "overtime_reference": null,
  "overtime_hours": null,
  "sales_commissions_reference": null,
  "sales_commissions": "0.000000",
  "memo": null,
  "non_off_cycle_salary": null,
  "non_off_cycle_overtime_salary": null,
  "non_off_cycle_sales_commissions": null,
  "non_off_cycle_benefits_deductions_name_first_word": null,
  "non_off_cycle_benefits_deductions_total_employee_amount": null,
  "non_off_cycle_benefits_deductions_total_entity_amount": null,
  "non_off_cycle_time_off_payments": null,
  "current_month_previous_salary": null,
  "current_month_previous_overtime_salary": null,
  "current_month_previous_sales_commissions": null,
  "current_month_previous_benefits_deductions_name_first_word": null,
  "current_month_previous_benefits_deductions_employee_amount": null,
  "current_month_previous_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_sales_commissions": null,
  "non_off_cycle_last_month_benefits_deductions_name_first_word": null,
  "non_off_cycle_last_month_benefits_deductions_employee_amount": null,
  "non_off_cycle_last_month_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_time_off_payments": null,
  "personal_time_off_amount": null,
  "personal_time_off_days": null,
  "applicable_days": "30",
  "night_shift_salary": "0.000000",
  "night_shift_reference": null,
  "night_shift_hours": null,
  "weekly_night_shift_salary": null,
  "non_off_cycle_night_shift_salary": null,
  "non_off_cycle_last_month_night_shift_salary": null,
  "current_month_previous_night_shift_salary": null,
  "theorical_applicable_days": "0",
  "theorical_salary": "0.000000",
  "mandatory_bonus": null
}
```

### Ver una nómina individual

Devuelve la nómina con todos sus detalles, beneficios/deducciones, destajos asociados, partidas contables y tiempo personal.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5552",
  "zid": "18",
  "employee_id": "1378",
  "salary": "2825.100000",
  "total_pay": "3559.499812",
  "total_cost": "3917.439812",
  "payroll_run_id": "67",
  "work_contract_id": "86",
  "payroll_payment_method_id": "4",
  "calculated_at": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "2",
  "payroll_details_count": "8",
  "created_at": "2021-09-30 03:19:59.689146",
  "updated_at": "2021-09-30 03:19:59.689146",
  "overtime_salary": "0.000000",
  "off_cycle": false,
  "current_work_contract_starts": "2021-04-01",
  "non_off_cycle_last_month_salary": null,
  "non_off_cycle_last_month_overtime_salary": null,
  "weekly_salary": "{706.275,706.275,706.275,706.275}",
  "weekly_overtime_salary": "{0.0,0.0,0.0,0.0}",
  "week_days_count_with_bonused_piecework": "{5,5,5,5}",
  "week_days_count_with_forced_bonused_piecework": "{0,0,0,0}",
  "overtime_reference": null,
  "overtime_hours": null,
  "sales_commissions_reference": null,
  "sales_commissions": "0.000000",
  "memo": null,
  "non_off_cycle_salary": null,
  "non_off_cycle_overtime_salary": null,
  "non_off_cycle_sales_commissions": null,
  "non_off_cycle_benefits_deductions_name_first_word": null,
  "non_off_cycle_benefits_deductions_total_employee_amount": null,
  "non_off_cycle_benefits_deductions_total_entity_amount": null,
  "non_off_cycle_time_off_payments": null,
  "current_month_previous_salary": null,
  "current_month_previous_overtime_salary": null,
  "current_month_previous_sales_commissions": null,
  "current_month_previous_benefits_deductions_name_first_word": null,
  "current_month_previous_benefits_deductions_employee_amount": null,
  "current_month_previous_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_sales_commissions": null,
  "non_off_cycle_last_month_benefits_deductions_name_first_word": null,
  "non_off_cycle_last_month_benefits_deductions_employee_amount": null,
  "non_off_cycle_last_month_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_time_off_payments": null,
  "personal_time_off_amount": null,
  "personal_time_off_days": null,
  "applicable_days": "30",
  "night_shift_salary": "0.000000",
  "night_shift_reference": null,
  "night_shift_hours": null,
  "weekly_night_shift_salary": null,
  "non_off_cycle_night_shift_salary": null,
  "non_off_cycle_last_month_night_shift_salary": null,
  "current_month_previous_night_shift_salary": null,
  "theorical_applicable_days": "0",
  "theorical_salary": "0.000000",
  "mandatory_bonus": null
}
```

### Obtener estructura para crear una nómina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/new.json?payroll_run=1"
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5552",
  "zid": "18",
  "employee_id": "1378",
  "salary": "2825.100000",
  "total_pay": "3559.499812",
  "total_cost": "3917.439812",
  "payroll_run_id": "67",
  "work_contract_id": "86",
  "payroll_payment_method_id": "4",
  "calculated_at": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "2",
  "payroll_details_count": "8",
  "created_at": "2021-09-30 03:19:59.689146",
  "updated_at": "2021-09-30 03:19:59.689146",
  "overtime_salary": "0.000000",
  "off_cycle": false,
  "current_work_contract_starts": "2021-04-01",
  "non_off_cycle_last_month_salary": null,
  "non_off_cycle_last_month_overtime_salary": null,
  "weekly_salary": "{706.275,706.275,706.275,706.275}",
  "weekly_overtime_salary": "{0.0,0.0,0.0,0.0}",
  "week_days_count_with_bonused_piecework": "{5,5,5,5}",
  "week_days_count_with_forced_bonused_piecework": "{0,0,0,0}",
  "overtime_reference": null,
  "overtime_hours": null,
  "sales_commissions_reference": null,
  "sales_commissions": "0.000000",
  "memo": null,
  "non_off_cycle_salary": null,
  "non_off_cycle_overtime_salary": null,
  "non_off_cycle_sales_commissions": null,
  "non_off_cycle_benefits_deductions_name_first_word": null,
  "non_off_cycle_benefits_deductions_total_employee_amount": null,
  "non_off_cycle_benefits_deductions_total_entity_amount": null,
  "non_off_cycle_time_off_payments": null,
  "current_month_previous_salary": null,
  "current_month_previous_overtime_salary": null,
  "current_month_previous_sales_commissions": null,
  "current_month_previous_benefits_deductions_name_first_word": null,
  "current_month_previous_benefits_deductions_employee_amount": null,
  "current_month_previous_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_sales_commissions": null,
  "non_off_cycle_last_month_benefits_deductions_name_first_word": null,
  "non_off_cycle_last_month_benefits_deductions_employee_amount": null,
  "non_off_cycle_last_month_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_time_off_payments": null,
  "personal_time_off_amount": null,
  "personal_time_off_days": null,
  "applicable_days": "30",
  "night_shift_salary": "0.000000",
  "night_shift_reference": null,
  "night_shift_hours": null,
  "weekly_night_shift_salary": null,
  "non_off_cycle_night_shift_salary": null,
  "non_off_cycle_last_month_night_shift_salary": null,
  "current_month_previous_night_shift_salary": null,
  "theorical_applicable_days": "0",
  "theorical_salary": "0.000000",
  "mandatory_bonus": null
}
```

### Obtener estructura para editar una nómina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5552",
  "zid": "18",
  "employee_id": "1378",
  "salary": "2825.100000",
  "total_pay": "3559.499812",
  "total_cost": "3917.439812",
  "payroll_run_id": "67",
  "work_contract_id": "86",
  "payroll_payment_method_id": "4",
  "calculated_at": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "2",
  "payroll_details_count": "8",
  "created_at": "2021-09-30 03:19:59.689146",
  "updated_at": "2021-09-30 03:19:59.689146",
  "overtime_salary": "0.000000",
  "off_cycle": false,
  "current_work_contract_starts": "2021-04-01",
  "non_off_cycle_last_month_salary": null,
  "non_off_cycle_last_month_overtime_salary": null,
  "weekly_salary": "{706.275,706.275,706.275,706.275}",
  "weekly_overtime_salary": "{0.0,0.0,0.0,0.0}",
  "week_days_count_with_bonused_piecework": "{5,5,5,5}",
  "week_days_count_with_forced_bonused_piecework": "{0,0,0,0}",
  "overtime_reference": null,
  "overtime_hours": null,
  "sales_commissions_reference": null,
  "sales_commissions": "0.000000",
  "memo": null,
  "non_off_cycle_salary": null,
  "non_off_cycle_overtime_salary": null,
  "non_off_cycle_sales_commissions": null,
  "non_off_cycle_benefits_deductions_name_first_word": null,
  "non_off_cycle_benefits_deductions_total_employee_amount": null,
  "non_off_cycle_benefits_deductions_total_entity_amount": null,
  "non_off_cycle_time_off_payments": null,
  "current_month_previous_salary": null,
  "current_month_previous_overtime_salary": null,
  "current_month_previous_sales_commissions": null,
  "current_month_previous_benefits_deductions_name_first_word": null,
  "current_month_previous_benefits_deductions_employee_amount": null,
  "current_month_previous_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_sales_commissions": null,
  "non_off_cycle_last_month_benefits_deductions_name_first_word": null,
  "non_off_cycle_last_month_benefits_deductions_employee_amount": null,
  "non_off_cycle_last_month_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_time_off_payments": null,
  "personal_time_off_amount": null,
  "personal_time_off_days": null,
  "applicable_days": "30",
  "night_shift_salary": "0.000000",
  "night_shift_reference": null,
  "night_shift_hours": null,
  "weekly_night_shift_salary": null,
  "non_off_cycle_night_shift_salary": null,
  "non_off_cycle_last_month_night_shift_salary": null,
  "current_month_previous_night_shift_salary": null,
  "theorical_applicable_days": "0",
  "theorical_salary": "0.000000",
  "mandatory_bonus": null
}
```

### Actualizar una nómina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payroll": {
      "overtime_hours": "8",
      "overtime_reference": "Horas extra fin de mes",
      "payroll_details_attributes": {
        "0": { "id": "10", "employee_amount": "200.00" }
      }
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5552",
  "zid": "18",
  "employee_id": "1378",
  "salary": "2825.100000",
  "total_pay": "3559.499812",
  "total_cost": "3917.439812",
  "payroll_run_id": "67",
  "work_contract_id": "86",
  "payroll_payment_method_id": "4",
  "calculated_at": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "2",
  "payroll_details_count": "8",
  "created_at": "2021-09-30 03:19:59.689146",
  "updated_at": "2021-09-30 03:19:59.689146",
  "overtime_salary": "0.000000",
  "off_cycle": false,
  "current_work_contract_starts": "2021-04-01",
  "non_off_cycle_last_month_salary": null,
  "non_off_cycle_last_month_overtime_salary": null,
  "weekly_salary": "{706.275,706.275,706.275,706.275}",
  "weekly_overtime_salary": "{0.0,0.0,0.0,0.0}",
  "week_days_count_with_bonused_piecework": "{5,5,5,5}",
  "week_days_count_with_forced_bonused_piecework": "{0,0,0,0}",
  "overtime_reference": null,
  "overtime_hours": null,
  "sales_commissions_reference": null,
  "sales_commissions": "0.000000",
  "memo": null,
  "non_off_cycle_salary": null,
  "non_off_cycle_overtime_salary": null,
  "non_off_cycle_sales_commissions": null,
  "non_off_cycle_benefits_deductions_name_first_word": null,
  "non_off_cycle_benefits_deductions_total_employee_amount": null,
  "non_off_cycle_benefits_deductions_total_entity_amount": null,
  "non_off_cycle_time_off_payments": null,
  "current_month_previous_salary": null,
  "current_month_previous_overtime_salary": null,
  "current_month_previous_sales_commissions": null,
  "current_month_previous_benefits_deductions_name_first_word": null,
  "current_month_previous_benefits_deductions_employee_amount": null,
  "current_month_previous_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_sales_commissions": null,
  "non_off_cycle_last_month_benefits_deductions_name_first_word": null,
  "non_off_cycle_last_month_benefits_deductions_employee_amount": null,
  "non_off_cycle_last_month_benefits_deductions_entity_amount": null,
  "non_off_cycle_last_month_time_off_payments": null,
  "personal_time_off_amount": null,
  "personal_time_off_days": null,
  "applicable_days": "30",
  "night_shift_salary": "0.000000",
  "night_shift_reference": null,
  "night_shift_hours": null,
  "weekly_night_shift_salary": null,
  "non_off_cycle_night_shift_salary": null,
  "non_off_cycle_last_month_night_shift_salary": null,
  "current_month_previous_night_shift_salary": null,
  "theorical_applicable_days": "0",
  "theorical_salary": "0.000000",
  "mandatory_bonus": null
}
```

### Borrar una nómina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
