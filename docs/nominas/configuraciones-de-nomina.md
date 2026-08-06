---
title: "Configuraciones de nomina"
sidebar_label: "Configuraciones de nomina"
sidebar_position: 1
---

Este tutorial esta enfocado en la configuracion completa del modulo de nominas, que incluye las configuraciones generales, puestos de trabajo, beneficios y deducciones, metodos de pago, tipos de incidencia, tipos de tiempo personal y tipos de destajo.

## Configuraciones generales

Para acceder a las configuraciones generales de nomina:

1. Ir a **"Nominas"**.
2. En el submenu de **"Settings"**, seleccionar **"Configuraciones"**.

### Parametros del ciclo de pago

- **Inicio del ciclo de pago**: fecha desde la cual el sistema comienza a calcular los ciclos de nomina. Todas las corridas generadas automaticamente parten de esta fecha.
- **Mostrar proximas corridas con dias de anticipacion**: cantidad de dias antes de la fecha de inicio para mostrar las corridas programadas en la lista de acciones.

### Calendarios de pago

El sistema soporta cuatro frecuencias de pago. Para cada una se configura el dia de inicio:

- **Mensual**: dia del mes en que inicia el ciclo (1 al 28).
- **Quincenal**: dia del mes en que inicia el primer ciclo (1 al 14).
- **Catorcenal**: dia de la semana en que inicia el ciclo.
- **Semanal**: dia de la semana en que inicia el ciclo.

### Cuentas contables

- **Cuenta por pagar de destajos**: cuenta contable donde se registran las obligaciones por destajos pendientes de pago.

### Umbrales de alerta

- **Monto maximo por empleado en destajos**: umbral para generar alertas cuando un empleado supera cierto monto en destajos dentro de un periodo.

### Control de partidas contables

- **Evitar generacion de partidas en destajos**: si se marca, el sistema no genera partidas contables automaticamente al guardar destajos.
- **Evitar generacion de partidas en nominas**: si se marca, el sistema no genera partidas contables automaticamente al guardar nominas.

### Calculo de tiempo personal para empleados por destajo

Para empleados tipo destajo, el pago de tiempo personal se calcula en base a un promedio de ingresos diarios. Se configuran los siguientes parametros:

- **Cantidad de nominas recientes para calcular ingreso diario promedio**: numero de nominas anteriores (de 1 a 52) que se usan para calcular el promedio.
- **Atributo de nomina para calcular ingreso diario promedio**: campo de la nomina usado como base del calculo (salario, horas extra, etc.).

### Configuracion de liquidacion por despido

- **Cantidad de nominas para promedio de salario mensual**: numero de nominas recientes (de 0 a 52) usadas para calcular el salario promedio mensual del empleado al terminar el contrato.
- **Porcentaje de salario mensual para liquidacion**: porcentaje a aplicar sobre el salario promedio mensual para calcular la indemnizacion por despido.
- **Porcentaje de dias pendientes de tiempo personal**: porcentaje a pagar sobre el valor de los dias de tiempo personal pendientes al terminar el contrato.

### Configuracion de liquidacion por renuncia

- Mismos parametros que despido, pero aplicables al caso de renuncia voluntaria. Tipicamente se configuran con valores menores (o cero) que el despido.

### Como guardar las configuraciones

1. Completar los campos segun las politicas de la empresa.
2. Hacer clic en **"Actualizar Configuraciones"**.

Las configuraciones quedan almacenadas a nivel de entidad. Si no existen configuraciones previas, el formulario las crea automaticamente al guardar.

## Puestos de trabajo

Los puestos de trabajo definen el tipo de contratacion, frecuencia de pago y cuentas contables asociadas. Para gestionar puestos:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Puestos de trabajo"**.

![Listado de puestos de trabajo](/img/nominas/configuraciones-de-nomina-2.png)

### Listado de puestos

El listado muestra todos los puestos de trabajo con su nombre, tipo de pago, frecuencia de pago y estado (activo/inactivo).

### Crear un puesto de trabajo

1. Hacer clic en **"Nuevo Puesto"**.
2. Completar los campos:

![Formulario de nuevo grupo de tipos de destajo](/img/nominas/configuraciones-de-nomina-10.png)

![Formulario de nuevo tipo de destajo](/img/nominas/configuraciones-de-nomina-9.png)

![Formulario de nuevo tipo de tiempo personal](/img/nominas/configuraciones-de-nomina-8.png)

![Formulario de nuevo tipo de incidencia](/img/nominas/configuraciones-de-nomina-7.png)

![Formulario de nuevo metodo de pago](/img/nominas/configuraciones-de-nomina-6.png)

![Formulario de nuevo beneficio o deduccion](/img/nominas/configuraciones-de-nomina-5.png)

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

### Editar un puesto de trabajo

1. En el listado de puestos, hacer clic en el nombre del puesto.
2. Hacer clic en **"Editar"**.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

### Borrar un puesto de trabajo

En el detalle del puesto, hacer clic en **"Borrar"**. Solo se pueden borrar puestos que no tengan contratos asociados.

## Beneficios y deducciones

Los beneficios y deducciones son las percepciones adicionales al salario (bonos, comisiones extra, viaticos) y las deducciones (prestamos, cuotas sindicales, embargos) que se aplican en la nomina.

Para gestionar beneficios y deducciones:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Beneficios y deducciones"**.

![Listado de beneficios y deducciones](/img/nominas/configuraciones-de-nomina-4.png)

### Filtros del listado

El listado permite filtrar por ambito de aplicacion:

- **En ciclo**: beneficios/deducciones que aplican en corridas de nomina regulares.
- **Fuera de ciclo**: beneficios/deducciones que aplican en corridas fuera de ciclo (anuales, semestrales, etc.).
- **Tiempo personal**: beneficios/deducciones que aplican sobre pagos de tiempo personal.
- **Inactivos**: beneficios/deducciones desactivados.

### Crear un beneficio o deduccion

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

#### Datos generales

- **Activo**: marcar para que este disponible.
- **Aplica a**: seleccionar el ambito: nomina regular, fuera de ciclo, tiempo personal o inactivo.
- **Nombre**: nombre del beneficio o deduccion (ej. "Prestamo personal", "Bono de productividad", "IGSS laboral").
- **Aplicar si el salario es mayor o igual a**: umbral de salario minimo para que aplique. Dejar en blanco para que aplique siempre.
- **Aplicar si los dias por semana con destajo bonificado son**: condicion para empleados por destajo, basada en la cantidad de dias con destajo que incluyen bonificacion.

#### Ciclo fuera de nomina

Si el beneficio/deduccion aplica fuera de ciclo, configurar el mes de inicio del ciclo:

- **Mes de inicio de ciclo anual**: seleccionar el mes (1-12).
- **Mes de inicio de ciclo semestral**: seleccionar el mes (1-6).
- **Mes de inicio de ciclo trimestral**: seleccionar el mes (1-3).
- **Mes de inicio de ciclo bimestral**: seleccionar el mes (1-2).

#### Configuracion del empleado

- **Porcentaje empleado**: porcentaje del salario que se suma (positivo) o resta (negativo) al empleado.
- **Incluir horas extra en el calculo**: si se marca, el porcentaje se calcula sobre salario + horas extra.
- **Incluir comisiones en el calculo**: si se marca, el porcentaje se calcula sobre salario + comisiones.
- **Monto empleado**: monto fijo que se suma o resta al empleado.
- **Formula empleado**: formula personalizada para calcular el monto del empleado.
- **Monto flexible empleado**: si se marca, el monto del empleado es editable manualmente en cada nomina.
- **Cuenta empleado**: cuenta contable asociada al movimiento del empleado.

#### Configuracion de la entidad

- **Porcentaje entidad**: porcentaje del salario que la empresa aporta (ej. cuota patronal).
- **Monto entidad**: monto fijo que la empresa aporta.
- **Formula entidad**: formula personalizada para calcular el monto de la entidad.
- **Cuenta origen entidad**: cuenta contable desde donde sale el dinero.
- **Cuenta destino entidad**: cuenta contable hacia donde va el dinero.

#### Terminacion de contrato

- **Aplica al calculo de liquidacion**: si se marca, este beneficio/deduccion se incluye en el calculo de liquidacion por despido o renuncia.

3. Hacer clic en **"Guardar"**.

### Editar un beneficio o deduccion

1. En el listado, hacer clic en el nombre.
2. Hacer clic en **"Editar"**.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

### Borrar un beneficio o deduccion

En el detalle, hacer clic en **"Borrar"**. Solo se pueden borrar beneficios/deducciones que no tengan uso en nominas.

### Formulas

Las formulas permiten calculos personalizados para beneficios y deducciones. Se escriben usando la sintaxis de formulas del sistema. Las formulas se configuran en el modulo de configuracion general del sistema, no en el modulo de nominas. Al crear un beneficio/deduccion, se puede seleccionar una formula existente.

## Metodos de pago

Los metodos de pago definen las cuentas contables utilizadas para registrar los pagos de nomina.

Para gestionar metodos de pago:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Metodos de pago"**.

### Crear un metodo de pago

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Nombre**: nombre descriptivo del metodo (ej. "Deposito bancario", "Efectivo", "Cheque").
- **Cuenta de nomina individual**: cuenta contable usada para pagos a empleados individuales.
- **Cuenta de corrida de nomina**: cuenta contable usada para la aprobacion y pago consolidado de toda la corrida.

3. Hacer clic en **"Guardar"**.

### Asignar metodo de pago a un contrato

Cada contrato de trabajo puede tener un metodo de pago por defecto. El metodo de pago se selecciona al crear o editar el contrato de trabajo, en el campo **"Metodo de pago por defecto"**.

## Tipos de incidencia

Los tipos de incidencia definen las categorias de incidencias (llegadas tarde, ausencias, faltas) y como se calcula el descuento para cada tipo.

Para gestionar tipos de incidencia:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de incidencia"**.

### Crear un tipo de incidencia

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Activo**: marcar para que este disponible.
- **Nombre**: nombre del tipo (ej. "Llegada tarde", "Ausencia injustificada").
- **Categoria**: clasificacion del tipo de incidencia.
- **Monto de descuento**: monto fijo a descontar por cada incidencia.
- **Porcentaje de descuento**: porcentaje del salario a descontar.
- **Formula**: formula personalizada para calcular el descuento.
- **Cuenta contable**: cuenta donde se registra el descuento.
- **Descuento flexible por incidencia**: si se marca, el monto del descuento es editable manualmente en cada incidencia.
- **Descuento como dias de tiempo personal**: si se marca, la incidencia descuenta dias del saldo de tiempo personal del empleado.

3. Hacer clic en **"Guardar"**.

### Editar y borrar tipos de incidencia

Similar a las demas configuraciones: desde el detalle del tipo de incidencia, usar los botones **"Editar"** y **"Borrar"**.

## Tipos de tiempo personal

Los tipos de tiempo personal definen las categorias de ausencias pagadas (vacaciones, enfermedad, etc.).

Para gestionar tipos de tiempo personal:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de tiempo personal"**.

### Crear un tipo de tiempo personal

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Nombre**: nombre del tipo (ej. "Vacaciones", "Enfermedad", "Permiso personal").
- **Descripcion**: descripcion opcional.
- **Tipo general**: clasificacion del tipo de tiempo personal.

3. Hacer clic en **"Guardar"**.

## Tipos de destajo

Los tipos de destajo definen las tareas que se pagan por unidad de trabajo realizada.

Para gestionar tipos de destajo:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de destajo"**.

### Crear un tipo de destajo

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Activo**: marcar para que este disponible.
- **Nombre**: nombre del tipo de destajo (ej. "Corte de cafe", "Siembra", "Limpieza de terreno").
- **Valor**: pago por unidad de trabajo realizada.
- **Unidad de medida**: unidad en que se mide el trabajo (ej. "quintal", "tarea", "hectarea", "unidad").
- **Cuenta contable**: cuenta de gasto asociada al destajo.
- **Grupo de tipo de destajo**: agrupacion para organizacion y reportes.
- **Incluye bonificacion**: si se marca, el valor del destajo ya incluye la bonificacion mensual.
- **Forzar bonificacion de semana completa**: si se marca, fuerza el calculo de bonificacion para empleados que completan la semana laboral completa con destajos.
- **Es hora extra**: si se marca, el destajo se considera como pago de horas extra.

3. Hacer clic en **"Guardar"**.

### Exportar tipos de destajo

En el listado de tipos de destajo, hacer clic en **"Exportar"** para descargar un archivo Excel con todos los tipos de destajo configurados.

### Editar y borrar tipos de destajo

Desde el detalle del tipo de destajo, usar los botones **"Editar"** y **"Borrar"**.

## Grupos de tipos de destajo

Los grupos permiten organizar los tipos de destajo en categorias.

Para gestionar grupos:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Grupos de tipos de destajo"**.

### Crear un grupo

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Nombre**: nombre del grupo (ej. "Cosecha", "Siembra", "Mantenimiento").
- **Numero de identificacion**: codigo opcional para el grupo.
- **Descripcion**: descripcion opcional.

3. Hacer clic en **"Guardar"**.

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

### Listar metodos de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 2,
    "zid": 1,
    "active": true,
    "name": "transferencia G&T",
    "payroll_account_id": 1,
    "creator_id": 2,
    "updater_id": null,
    "entity_id": 2,
    "created_at": "2021-05-01T00:18:28.405Z",
    "updated_at": "2021-05-01T00:18:28.405Z",
    "payroll_run_account_id": null
  },
  {
    "id": 3,
    "zid": 2,
    "active": true,
    "name": "transferencia ACH",
    "payroll_account_id": 1,
    "creator_id": 2,
    "updater_id": null,
    "entity_id": 2,
    "created_at": "2021-08-31T21:21:03.141Z",
    "updated_at": "2021-08-31T21:21:03.141Z",
    "payroll_run_account_id": null
  }
]
```

### Ver un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2",
  "zid": "1",
  "active": true,
  "name": "transferencia G&T",
  "payroll_account_id": "13701",
  "creator_id": "2",
  "updater_id": null,
  "entity_id": "2",
  "created_at": "2021-05-01 00:18:28.405869",
  "updated_at": "2021-05-01 00:18:28.405869",
  "payroll_run_account_id": null
}
```

### Obtener estructura para crear un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "name": null,
  "payroll_account_id": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "payroll_run_account_id": null
}
```

### Obtener estructura para editar un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2",
  "zid": "1",
  "active": true,
  "name": "transferencia G&T",
  "payroll_account_id": "13701",
  "creator_id": "2",
  "updater_id": null,
  "entity_id": "2",
  "created_at": "2021-05-01 00:18:28.405869",
  "updated_at": "2021-05-01 00:18:28.405869",
  "payroll_run_account_id": null
}
```

### Crear un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payroll_payment_method": {
      "active": true,
      "name": "Deposito bancario",
      "payroll_account_id": "1",
      "payroll_run_account_id": "2"
    }
  }' \
  https://app.zauru.com/payroll/settings/payroll_payment_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2",
  "zid": "1",
  "active": true,
  "name": "transferencia G&T",
  "payroll_account_id": "13701",
  "creator_id": "2",
  "updater_id": null,
  "entity_id": "2",
  "created_at": "2021-05-01 00:18:28.405869",
  "updated_at": "2021-05-01 00:18:28.405869",
  "payroll_run_account_id": null
}
```

### Actualizar un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payroll_payment_method": {
      "name": "Deposito bancario actualizado"
    }
  }' \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2",
  "zid": "1",
  "active": true,
  "name": "transferencia G&T",
  "payroll_account_id": "13701",
  "creator_id": "2",
  "updater_id": null,
  "entity_id": "2",
  "created_at": "2021-05-01 00:18:28.405869",
  "updated_at": "2021-05-01 00:18:28.405869",
  "payroll_run_account_id": null
}
```

### Borrar un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listar tipos de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "active": true,
    "zid": 1,
    "code": "",
    "name": "adelanto de salario",
    "category": "",
    "deduction_as_pto_days": null,
    "deduction_amount": "-1000.0",
    "deduction_percent": null,
    "flexible_deduction_per_incident": true,
    "description": "",
    "account_for_percent_id": null,
    "creator_id": 2,
    "updater_id": null,
    "entity_id": 2,
    "created_at": "2021-07-31T16:36:22.528Z",
    "updated_at": "2021-07-31T16:36:22.528Z",
    "benefits_deductions_incidents_formula_id": null,
    "account_for_amount_id": 3
  },
  {
    "id": 4,
    "active": true,
    "zid": 2,
    "code": "",
    "name": "cobro por adelanto de salario",
    "category": "",
    "deduction_as_pto_days": null,
    "deduction_amount": "-425.0",
    "deduction_percent": null,
    "flexible_deduction_per_incident": true,
    "description": "",
    "account_for_percent_id": null,
    "creator_id": 5,
    "updater_id": null,
    "entity_id": 2,
    "created_at": "2021-12-22T20:29:34.398Z",
    "updated_at": "2021-12-22T20:29:34.398Z",
    "benefits_deductions_incidents_formula_id": null,
    "account_for_amount_id": 3
  }
]
```

### Ver un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34",
  "active": true,
  "zid": "9",
  "code": null,
  "name": "PAGO UNIFORMES ADMON.",
  "category": null,
  "deduction_as_pto_days": null,
  "deduction_amount": null,
  "deduction_percent": null,
  "flexible_deduction_per_incident": true,
  "description": null,
  "account_for_percent_id": null,
  "creator_id": "239",
  "updater_id": null,
  "entity_id": "4",
  "created_at": "2022-06-16 15:28:59.740629",
  "updated_at": "2022-06-16 15:28:59.740629",
  "benefits_deductions_incidents_formula_id": null,
  "account_for_amount_id": "21120"
}
```

### Obtener estructura para crear un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "active": true,
  "zid": null,
  "code": null,
  "name": null,
  "category": null,
  "deduction_as_pto_days": null,
  "deduction_amount": null,
  "deduction_percent": null,
  "flexible_deduction_per_incident": false,
  "description": null,
  "account_for_percent_id": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "benefits_deductions_incidents_formula_id": null,
  "account_for_amount_id": null
}
```

### Obtener estructura para editar un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34",
  "active": true,
  "zid": "9",
  "code": null,
  "name": "PAGO UNIFORMES ADMON.",
  "category": null,
  "deduction_as_pto_days": null,
  "deduction_amount": null,
  "deduction_percent": null,
  "flexible_deduction_per_incident": true,
  "description": null,
  "account_for_percent_id": null,
  "creator_id": "239",
  "updater_id": null,
  "entity_id": "4",
  "created_at": "2022-06-16 15:28:59.740629",
  "updated_at": "2022-06-16 15:28:59.740629",
  "benefits_deductions_incidents_formula_id": null,
  "account_for_amount_id": "21120"
}
```

### Crear un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "incident_type": {
      "active": true,
      "name": "Llegada tarde",
      "category": "Puntualidad",
      "deduction_amount": "25.00",
      "account_for_amount_id": "1"
    }
  }' \
  https://app.zauru.com/payroll/settings/incident_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34",
  "active": true,
  "zid": "9",
  "code": null,
  "name": "PAGO UNIFORMES ADMON.",
  "category": null,
  "deduction_as_pto_days": null,
  "deduction_amount": null,
  "deduction_percent": null,
  "flexible_deduction_per_incident": true,
  "description": null,
  "account_for_percent_id": null,
  "creator_id": "239",
  "updater_id": null,
  "entity_id": "4",
  "created_at": "2022-06-16 15:28:59.740629",
  "updated_at": "2022-06-16 15:28:59.740629",
  "benefits_deductions_incidents_formula_id": null,
  "account_for_amount_id": "21120"
}
```

### Actualizar un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "incident_type": {
      "name": "Llegada tarde actualizado",
      "deduction_amount": "30.00"
    }
  }' \
  https://app.zauru.com/payroll/settings/incident_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34",
  "active": true,
  "zid": "9",
  "code": null,
  "name": "PAGO UNIFORMES ADMON.",
  "category": null,
  "deduction_as_pto_days": null,
  "deduction_amount": null,
  "deduction_percent": null,
  "flexible_deduction_per_incident": true,
  "description": null,
  "account_for_percent_id": null,
  "creator_id": "239",
  "updater_id": null,
  "entity_id": "4",
  "created_at": "2022-06-16 15:28:59.740629",
  "updated_at": "2022-06-16 15:28:59.740629",
  "benefits_deductions_incidents_formula_id": null,
  "account_for_amount_id": "21120"
}
```

### Borrar un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/incident_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listar tipos de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "active": true,
    "name": "Vacaciones pagadas",
    "description": "",
    "general_type": "",
    "created_at": "2022-06-29T00:09:29.275Z",
    "updated_at": "2022-06-29T00:09:29.275Z",
    "entity_id": 2,
    "creator_id": 2,
    "updater_id": 2
  },
  {
    "id": 3,
    "zid": 2,
    "active": true,
    "name": "Vacaciones",
    "description": "Dias de vacaciones anuales",
    "general_type": "vacation",
    "created_at": "2026-08-06T04:14:33.102Z",
    "updated_at": "2026-08-06T04:14:33.102Z",
    "entity_id": 2,
    "creator_id": 4,
    "updater_id": 4
  }
]
```

### Ver un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Obtener estructura para crear un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "name": null,
  "description": null,
  "general_type": null,
  "created_at": null,
  "updated_at": null,
  "entity_id": 1,
  "creator_id": null,
  "updater_id": null
}
```

### Obtener estructura para editar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Crear un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "personal_time_off_type": {
      "active": true,
      "name": "Vacaciones",
      "description": "Dias de vacaciones anuales",
      "general_type": "vacation"
    }
  }' \
  https://app.zauru.com/payroll/settings/personal_time_off_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Actualizar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "personal_time_off_type": {
      "name": "Vacaciones actualizado",
      "description": "Dias de vacaciones anuales"
    }
  }' \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "Vacaciones",
  "description": null,
  "general_type": null,
  "created_at": "2022-01-06 16:52:05.233084",
  "updated_at": "2022-01-06 16:52:05.233084",
  "entity_id": "4",
  "creator_id": "1692",
  "updater_id": "1692"
}
```

### Borrar un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/personal_time_off_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
