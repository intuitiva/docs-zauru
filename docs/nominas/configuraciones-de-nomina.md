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

### Ver un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions/1.json
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

### Obtener estructura para editar un puesto de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/job_positions/1/edit.json
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
      "payment_frequency": "weekly",
      "payroll_type": "piecework",
      "working_hours": "8",
      "job_position_deductions_attributes": {
        "0": { "payroll_benefits_deduction_id": "1" }
      }
    }
  }' \
  https://app.zauru.com/payroll/settings/job_positions.json
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

### Listar beneficios y deducciones

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions.json
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

### Obtener estructura para crear un beneficio o deduccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_benefits_deductions/new.json
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
      "applies_to": "on_cycle",
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

### Listar metodos de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods.json
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

### Obtener estructura para crear un metodo de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/payroll_payment_methods/new.json
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

### Listar tipos de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types.json
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

### Obtener estructura para crear un tipo de incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/incident_types/new.json
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

### Listar tipos de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types.json
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

### Obtener estructura para crear un tipo de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/personal_time_off_types/new.json
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
