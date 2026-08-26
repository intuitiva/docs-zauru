---
title: "Beneficios y deducciones"
sidebar_label: "Beneficios y deducciones"
sidebar_position: 3
---

Cuando llega fin de mes y hay que pagar planilla, no todo es salario: quizá un empleado pidió un préstamo que se le descuenta en cuotas, otro se ganó un bono de productividad y a todos les corresponde la cuota del IGSS. Los beneficios y deducciones son justamente eso: las percepciones adicionales al salario (bonos, comisiones extra, viáticos) y las deducciones (préstamos, cuotas sindicales, embargos) que se aplican en la nómina.

Para gestionar beneficios y deducciones:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Beneficios y deducciones"**.

![Listado de beneficios y deducciones](/img/nominas/configuraciones-de-nomina-4.png)

## Filtros del listado

Cuando su lista ya es larga —IGSS, bonos, préstamos, viáticos—, estos filtros le ayudan a ver solo lo que necesita en cada momento. El listado permite filtrar por ámbito de aplicación:

- **En ciclo**: beneficios/deducciones que aplican en corridas de nomina regulares.
- **Fuera de ciclo**: beneficios/deducciones que aplican en corridas fuera de ciclo (anuales, semestrales, etc.).
- **Tiempo personal**: beneficios/deducciones que aplican sobre pagos de tiempo personal.
- **Inactivos**: beneficios/deducciones desactivados.

## Crear un beneficio o deduccion

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo beneficio o deduccion](/img/nominas/configuraciones-de-nomina-5.png)

### Datos generales

- **Activo**: marcar para que este disponible.
- **Aplica a**: seleccionar el ambito: nomina regular, fuera de ciclo, tiempo personal o inactivo.
- **Nombre**: nombre del beneficio o deduccion (ej. "Prestamo personal", "Bono de productividad", "IGSS laboral").
- **Aplicar si el salario es mayor o igual a**: umbral de salario minimo para que aplique. Dejar en blanco para que aplique siempre.
- **Aplicar si los dias por semana con destajo bonificado son**: condicion para empleados por destajo, basada en la cantidad de dias con destajo que incluyen bonificacion.

### Ciclo fuera de nomina

Si el beneficio/deduccion aplica fuera de ciclo, configurar el mes de inicio del ciclo:

- **Mes de inicio de ciclo anual**: seleccionar el mes (1-12).
- **Mes de inicio de ciclo semestral**: seleccionar el mes (1-6).
- **Mes de inicio de ciclo trimestral**: seleccionar el mes (1-3).
- **Mes de inicio de ciclo bimestral**: seleccionar el mes (1-2).

### Configuracion del empleado

- **Porcentaje empleado**: porcentaje del salario que se suma (positivo) o resta (negativo) al empleado.
- **Incluir horas extra en el calculo**: si se marca, el porcentaje se calcula sobre salario + horas extra.
- **Incluir comisiones en el calculo**: si se marca, el porcentaje se calcula sobre salario + comisiones.
- **Monto empleado**: monto fijo que se suma o resta al empleado.
- **Formula empleado**: formula personalizada para calcular el monto del empleado.
- **Monto flexible empleado**: casilla de verificacion. Si se marca, el monto del empleado es editable manualmente en cada nomina (campo abierto en la nomina). El formulario lo muestra correctamente como una casilla (si/no), no como un campo numerico.
- **Cuenta empleado**: cuenta contable asociada al movimiento del empleado.

### Configuracion de la entidad

- **Porcentaje entidad**: porcentaje del salario que la empresa aporta (ej. cuota patronal).
- **Monto entidad**: monto fijo que la empresa aporta.
- **Formula entidad**: formula personalizada para calcular el monto de la entidad.
- **Cuenta origen entidad**: cuenta contable desde donde sale el dinero.
- **Cuenta destino entidad**: cuenta contable hacia donde va el dinero.

### Terminacion de contrato

- **Aplica al calculo de liquidacion**: si se marca, este beneficio/deduccion se incluye en el calculo de liquidacion por despido o renuncia.

3. Hacer clic en **"Guardar"**.

## Editar un beneficio o deduccion

1. En el listado, hacer clic en el nombre.
2. Hacer clic en **"Editar"**.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

## Borrar un beneficio o deduccion

En el detalle, hacer clic en **"Borrar"**. Solo se pueden borrar beneficios/deducciones que no tengan uso en nominas.

## Formulas

Si el cálculo que necesita no cabe en un porcentaje ni en un monto fijo, una fórmula personalizada puede resolverlo. Las fórmulas permiten cálculos personalizados para beneficios y deducciones. Se escriben usando la sintaxis de formulas del sistema. Las formulas se configuran en el modulo de configuracion general del sistema, no en el modulo de nominas. Al crear un beneficio/deduccion, se puede seleccionar una formula existente.

Con sus beneficios y deducciones configurados, cada corrida de nómina los aplicará sola, tanto al empleado como a la empresa. El siguiente paso natural es asignarlos a sus puestos de trabajo, para que cada contrato nuevo los herede sin trabajo extra.

## API (llamadas desde sistemas externos)

### Listar beneficios y deducciones

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "name": "adelanto de bono 14 gerencia",
    "employee_percent": 8.33333,
    "employee_amount": null,
    "creator_id": 3,
    "updater_id": null,
    "entity_id": 3,
    "created_at": "2023-08-15T13:34:13.593Z",
    "updated_at": "2023-08-15T13:34:13.593Z",
    "employee_flexible_amount": false,
    "entity_percent": null,
    "entity_amount": null,
    "employee_account_id": 4,
    "entity_account_from_id": null,
    "apply_on_salary_greater_or_equal_than": null,
    "employee_benefits_deductions_incidents_formula_id": null,
    "entity_benefits_deductions_incidents_formula_id": null,
    "entity_account_to_id": null,
    "apply_on_days_per_week_count_with_bonused_piecework_is": null,
    "include_overtime_in_calculation": false,
    "year_cycle_month_starts": null,
    "semester_cycle_month_starts": null,
    "quarter_cycle_month_starts": null,
    "bimester_cycle_month_starts": null,
    "include_sales_commissions_in_calculation": false,
    "applies_to": "on-cycle",
    "active": true,
    "applies_to_contract_terminations": false
  },
  {
    "id": 5,
    "zid": 6,
    "name": "IRTRA",
    "employee_percent": null,
    "employee_amount": null,
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2021-07-30T20:48:59.008Z",
    "updated_at": "2022-09-01T12:05:25.334Z",
    "employee_flexible_amount": false,
    "entity_percent": 1.0,
    "entity_amount": null,
    "employee_account_id": null,
    "entity_account_from_id": 7,
    "apply_on_salary_greater_or_equal_than": null,
    "employee_benefits_deductions_incidents_formula_id": null,
    "entity_benefits_deductions_incidents_formula_id": null,
    "entity_account_to_id": 8,
    "apply_on_days_per_week_count_with_bonused_piecework_is": null,
    "include_overtime_in_calculation": false,
    "year_cycle_month_starts": null,
    "semester_cycle_month_starts": null,
    "quarter_cycle_month_starts": null,
    "bimester_cycle_month_starts": null,
    "include_sales_commissions_in_calculation": false,
    "applies_to": "on-cycle",
    "active": true,
    "applies_to_contract_terminations": false
  }
]
```

### Ver un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "14",
  "zid": "11",
  "name": "IGSS (cosecha)",
  "employee_percent": null,
  "employee_amount": null,
  "creator_id": "1",
  "updater_id": "1",
  "entity_id": "733",
  "created_at": "2021-04-21 04:37:08.277786",
  "updated_at": "2021-07-29 22:49:50.479777",
  "employee_flexible_amount": false,
  "entity_percent": null,
  "entity_amount": null,
  "employee_account_id": "49814",
  "entity_account_from_id": "49815",
  "apply_on_salary_greater_or_equal_than": null,
  "employee_benefits_deductions_incidents_formula_id": "3",
  "entity_benefits_deductions_incidents_formula_id": "4",
  "entity_account_to_id": "49830",
  "apply_on_days_per_week_count_with_bonused_piecework_is": null,
  "include_overtime_in_calculation": false,
  "year_cycle_month_starts": null,
  "semester_cycle_month_starts": null,
  "quarter_cycle_month_starts": null,
  "bimester_cycle_month_starts": null,
  "include_sales_commissions_in_calculation": false,
  "applies_to": "on-cycle",
  "active": true,
  "applies_to_contract_terminations": false
}
```

### Obtener estructura para crear un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "14",
  "zid": "11",
  "name": "IGSS (cosecha)",
  "employee_percent": null,
  "employee_amount": null,
  "creator_id": "1",
  "updater_id": "1",
  "entity_id": "733",
  "created_at": "2021-04-21 04:37:08.277786",
  "updated_at": "2021-07-29 22:49:50.479777",
  "employee_flexible_amount": false,
  "entity_percent": null,
  "entity_amount": null,
  "employee_account_id": "49814",
  "entity_account_from_id": "49815",
  "apply_on_salary_greater_or_equal_than": null,
  "employee_benefits_deductions_incidents_formula_id": "3",
  "entity_benefits_deductions_incidents_formula_id": "4",
  "entity_account_to_id": "49830",
  "apply_on_days_per_week_count_with_bonused_piecework_is": null,
  "include_overtime_in_calculation": false,
  "year_cycle_month_starts": null,
  "semester_cycle_month_starts": null,
  "quarter_cycle_month_starts": null,
  "bimester_cycle_month_starts": null,
  "include_sales_commissions_in_calculation": false,
  "applies_to": "on-cycle",
  "active": true,
  "applies_to_contract_terminations": false
}
```

### Obtener estructura para editar un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "14",
  "zid": "11",
  "name": "IGSS (cosecha)",
  "employee_percent": null,
  "employee_amount": null,
  "creator_id": "1",
  "updater_id": "1",
  "entity_id": "733",
  "created_at": "2021-04-21 04:37:08.277786",
  "updated_at": "2021-07-29 22:49:50.479777",
  "employee_flexible_amount": false,
  "entity_percent": null,
  "entity_amount": null,
  "employee_account_id": "49814",
  "entity_account_from_id": "49815",
  "apply_on_salary_greater_or_equal_than": null,
  "employee_benefits_deductions_incidents_formula_id": "3",
  "entity_benefits_deductions_incidents_formula_id": "4",
  "entity_account_to_id": "49830",
  "apply_on_days_per_week_count_with_bonused_piecework_is": null,
  "include_overtime_in_calculation": false,
  "year_cycle_month_starts": null,
  "semester_cycle_month_starts": null,
  "quarter_cycle_month_starts": null,
  "bimester_cycle_month_starts": null,
  "include_sales_commissions_in_calculation": false,
  "applies_to": "on-cycle",
  "active": true,
  "applies_to_contract_terminations": false
}
```

### Crear un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payroll_benefits_deduction": {
      "active": true,
      "applies_to": "on-cycle",
      "name": "IGSS laboral",
      "employee_percent": "4.83",
      "entity_percent": "10.67",
      "employee_account_id": "1",
      "entity_account_from_id": "2",
      "entity_account_to_id": "3"
    }
  }' \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "14",
  "zid": "11",
  "name": "IGSS (cosecha)",
  "employee_percent": null,
  "employee_amount": null,
  "creator_id": "1",
  "updater_id": "1",
  "entity_id": "733",
  "created_at": "2021-04-21 04:37:08.277786",
  "updated_at": "2021-07-29 22:49:50.479777",
  "employee_flexible_amount": false,
  "entity_percent": null,
  "entity_amount": null,
  "employee_account_id": "49814",
  "entity_account_from_id": "49815",
  "apply_on_salary_greater_or_equal_than": null,
  "employee_benefits_deductions_incidents_formula_id": "3",
  "entity_benefits_deductions_incidents_formula_id": "4",
  "entity_account_to_id": "49830",
  "apply_on_days_per_week_count_with_bonused_piecework_is": null,
  "include_overtime_in_calculation": false,
  "year_cycle_month_starts": null,
  "semester_cycle_month_starts": null,
  "quarter_cycle_month_starts": null,
  "bimester_cycle_month_starts": null,
  "include_sales_commissions_in_calculation": false,
  "applies_to": "on-cycle",
  "active": true,
  "applies_to_contract_terminations": false
}
```

### Actualizar un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payroll_benefits_deduction": {
      "name": "IGSS laboral actualizado",
      "employee_percent": "4.83"
    }
  }' \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "14",
  "zid": "11",
  "name": "IGSS (cosecha)",
  "employee_percent": null,
  "employee_amount": null,
  "creator_id": "1",
  "updater_id": "1",
  "entity_id": "733",
  "created_at": "2021-04-21 04:37:08.277786",
  "updated_at": "2021-07-29 22:49:50.479777",
  "employee_flexible_amount": false,
  "entity_percent": null,
  "entity_amount": null,
  "employee_account_id": "49814",
  "entity_account_from_id": "49815",
  "apply_on_salary_greater_or_equal_than": null,
  "employee_benefits_deductions_incidents_formula_id": "3",
  "entity_benefits_deductions_incidents_formula_id": "4",
  "entity_account_to_id": "49830",
  "apply_on_days_per_week_count_with_bonused_piecework_is": null,
  "include_overtime_in_calculation": false,
  "year_cycle_month_starts": null,
  "semester_cycle_month_starts": null,
  "quarter_cycle_month_starts": null,
  "bimester_cycle_month_starts": null,
  "include_sales_commissions_in_calculation": false,
  "applies_to": "on-cycle",
  "active": true,
  "applies_to_contract_terminations": false
}
```

### Borrar un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
