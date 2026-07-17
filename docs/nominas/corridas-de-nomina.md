---
title: "Corridas de nomina"
sidebar_label: "Corridas de nomina"
sidebar_position: 6
---

Este tutorial trata sobre la gestion completa de corridas de nomina, desde la generacion automatica segun calendarios, pasando por la aprobacion y pago, hasta la consulta de nominas individuales y corridas pagadas.

## Corridas de nomina no pagadas

Las corridas de nomina no pagadas son el centro de operaciones de la nomina. Aqui se crean, aprueban y pagan las corridas.

Para acceder:

1. Ir a **"Nominas"**.
2. Seleccionar **"Corridas no pagadas"**.

### Listado de corridas no pagadas

El listado muestra todas las corridas pendientes en formato de tabla con las siguientes columnas:

- ID (zid): identificador unico de la corrida.
- Nombre: nombre descriptivo de la corrida.
- Fecha de inicio y fecha de fin: rango de fechas que cubre la corrida.
- Empleados: cantidad de empleados incluidos.
- Pago total: suma de todos los pagos a empleados en la corrida.
- Costo total: suma del costo total para la empresa (pago a empleados + aportes patronales).
- Estado: situacion actual de la corrida (borrador, aprobado, etc.).
- Acciones: iconos para cada operacion disponible.

### Acciones disponibles en el listado

Cada corrida muestra iconos de accion segun su estado:

- **Llenar beneficios flexibles** (icono de usuarios): permite ingresar manualmente los montos de beneficios y deducciones marcados como flexibles. Solo disponible si la corrida no esta aprobada ni pagada y no tiene un procesamiento flexible en curso.
- **Aprobar** (icono de verificacion): aprueba la corrida para que pueda ser pagada.
- **Desaprobar** (icono de cancelacion): revierte la aprobacion. Solo disponible si la corrida esta aprobada y no pagada.
- **Pagar** (icono de tarjeta de credito): ejecuta el pago de la corrida. Solo disponible si la corrida esta aprobada.

### Generacion automatica de corridas

En la parte superior del listado, el sistema muestra las proximas corridas programadas y las proximas corridas fuera de ciclo.

#### Corridas programadas por calendario

El sistema calcula las corridas segun los calendarios configurados en las configuraciones generales:

- **Mensual**: corridas que cubren un mes completo de trabajo.
- **Quincenal**: corridas que cubren una quincena (dos corridas por mes).
- **Catorcenal**: corridas que cubren catorce dias.
- **Semanal**: corridas que cubren una semana de trabajo.

Para cada tipo de corrida programada, se muestra un boton con el rango de fechas (inicio - fin) y la cantidad de empleados aplicables. Hacer clic en el boton genera automaticamente la corrida con todas las nominas individuales.

El sistema maneja la sincronizacion de calendarios: si la fecha de inicio del ciclo de pago no coincide con el inicio natural, la primera corrida se ajusta para alinear el calendario (ej. si el ciclo quincenal inicia el dia 5, la primera quincena puede ser mas corta).

#### Corridas fuera de ciclo (off-cycle)

Son corridas especiales para beneficios y deducciones que se pagan en ciclos distintos al regular:

- **Anual**: beneficios que se pagan una vez al ano (ej. bono 14, aguinaldo).
- **Semestral**: beneficios que se pagan cada seis meses.
- **Trimestral**: beneficios que se pagan cada tres meses.
- **Bimestral**: beneficios que se pagan cada dos meses.

Para cada tipo de corrida fuera de ciclo, se muestra un boton con los empleados aplicables y el rango de fechas. Hacer clic en el boton genera la corrida fuera de ciclo.

### Crear una corrida manualmente

1. En el listado, hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Nombre**: nombre descriptivo de la corrida (ej. "Nomina julio 2024").
- **Frecuencia de pago**: seleccionar entre mensual, quincenal, catorcenal, semanal o fuera de ciclo.
- **Fecha de inicio**: primer dia que cubre la corrida.
- **Fecha de fin**: ultimo dia que cubre la corrida.

3. Hacer clic en **"Guardar"**.

### Ver detalle de una corrida

En el listado, hacer clic en el nombre o ID de la corrida. El detalle muestra:

- **Datos generales**: nombre, frecuencia de pago, rango de fechas, estado.
- **Nominas incluidas**: tabla con todas las nominas individuales de la corrida. Cada fila muestra: empleado, salario, horas extra, jornada nocturna, comisiones, bonificacion, beneficios, deducciones, pago total y costo total.
- **Conteo de detalles de destajos**: cantidad de destajos incluidos en la corrida.
- **Partidas contables asociadas**: enlace a las transacciones contables generadas por la corrida.
- **Formularios asociados**: plantillas de impresion vinculadas.

### Aprobar una corrida

1. En el detalle o listado de la corrida, hacer clic en **"Aprobar"** (icono de verificacion).
2. El sistema:
   - Verifica que todas las nominas individuales tengan datos completos.
   - Genera las partidas contables consolidadas de la corrida (si no estan deshabilitadas en configuracion).
   - Cambia el estado de la corrida a **"Aprobado"**.
   - Bloquea la edicion de las nominas individuales.

### Desaprobar una corrida

1. En la corrida aprobada, hacer clic en **"Desaprobar"**.
2. Solo disponible si la corrida no ha sido pagada aun.
3. Revierte el estado a borrador y permite editar nuevamente.

### Pagar una corrida

1. En la corrida aprobada, hacer clic en **"Pagar"** (icono de tarjeta de credito).
2. El sistema:
   - Procesa el pago de todas las nominas individuales.
   - Los destajos asociados pasan de "no pagados" a "pagados".
   - Las incidencias quedan marcadas como descontadas.
   - La corrida se mueve a la seccion de **"Corridas pagadas"**.

### Llenar beneficios flexibles

Para beneficios y deducciones configurados como flexibles (con el campo **"Monto flexible empleado"** marcado), los montos se ingresan manualmente por corrida:

1. En el listado de corridas, hacer clic en **"Llenar beneficios flexibles"** (icono de usuarios).
2. Aparece una tabla con todos los empleados de la corrida y las columnas de cada beneficio/deduccion flexible.
3. Ingresar los montos correspondientes para cada empleado.
4. Hacer clic en **"Actualizar beneficios flexibles"**.

El sistema procesa los cambios de forma asincrona. Mientras el proceso esta en curso, no se puede iniciar otro llenado de beneficios flexibles en la misma corrida.

### Editar una corrida

1. En el detalle de la corrida, hacer clic en **"Editar"**.
2. Solo disponible si la corrida no esta aprobada.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

### Borrar una corrida

En el detalle, hacer clic en **"Borrar"**. Solo disponible si la corrida no esta aprobada.

### Exportar una corrida

En el detalle de la corrida, hacer clic en **"Exportar"** para descargar un archivo Excel (XLS o CSV) con el detalle de todas las nominas de la corrida.

### Imprimir una corrida

En el detalle de la corrida, hay dos opciones de impresion:

- **Imprimir**: genera una vista de impresion para todas las nominas de la corrida usando la plantilla configurada.

- **Generar PDF de todas las nominas**: procesa la generacion de PDF individuales para cada nomina de la corrida de forma asincrona. El sistema muestra el progreso de generacion.
  - **"Generar PDF todas"**: genera PDF para todas las nominas de la corrida.
  - **"Generar PDF de mi agencia"**: genera PDF solo para las nominas de empleados que pertenecen a la misma agencia del usuario.

Mientras los PDF se generan, se puede consultar el progreso con los botones de verificacion correspondientes.

## Nominas individuales

Cada corrida de nomina contiene una nomina por cada empleado incluido. La nomina individual es el registro de pago de un empleado en un periodo especifico.

### Ver detalle de una nomina individual

En el detalle de una corrida, hacer clic en el empleado para ver su nomina. El detalle muestra:

#### Resumen de la corrida

- Fechas de inicio y fin de la corrida.
- Dias pagados en el periodo.
- Tipo de calendario de pago.

#### Datos del empleado

- ID de la nomina.
- Empleado (codigo, nombre y puesto).
- Fecha de inicio del contrato de trabajo.
- Metodo de pago.
- Dias aplicables en el periodo.
- Dias de tiempo personal en el periodo.

#### Detalle de beneficios, deducciones e incidencias

Tabla principal con el desglose completo de la nomina. Cada fila muestra una columna de incidente (si aplica), referencia, monto empleado y monto entidad:

**Componentes fijos** (para nominas en ciclo regular):

- **Salario**: monto del salario base del periodo. Para frecuencia semanal y catorcenal, muestra tambien los dias con destajo bonificado.
- **Horas extra**: monto por horas extra trabajadas, mostrando la cantidad de horas y la tarifa horaria.
- **Jornada nocturna**: monto por horas nocturnas trabajadas, mostrando la cantidad de horas y la tarifa horaria.
- **Bonificacion**: monto de la bonificacion mensual obligatoria (si esta habilitada para el puesto).
- **Comisiones por ventas**: monto de comisiones (si estan habilitadas para el puesto).

**Beneficios y deducciones**: cada beneficio/deduccion configurado aparece como una fila con:

- Nombre del beneficio/deduccion.
- Tipo de incidencia asociada (si aplica).
- Referencia.
- Monto del empleado (positivo para beneficios, negativo para deducciones).
- Monto de la entidad (aporte patronal).

**Totales**:

- Total pago empleado: suma de todos los montos del empleado.
- Total costo entidad: suma de todos los montos de la entidad.

#### Datos de referencia historica (solo para nominas fuera de ciclo)

Para corridas fuera de ciclo, el sistema muestra informacion de referencia con datos de nominas anteriores:

- **Nominas entre fechas**: tabla con salario, horas extra, jornada nocturna, comisiones, pagos de tiempo personal, beneficios/deducciones y totales del periodo fuera de ciclo.
- **Nominas del ultimo mes**: misma tabla pero para el mes inmediatamente anterior.

Ambas tablas muestran los montos del empleado y de la entidad por separado.

#### Destajos asociados

Tabla que muestra todos los destajos del empleado incluidos en esta nomina:

- Fecha del destajo.
- Supervisor.
- Tipo de destajo.
- Si es hora extra.
- Cantidad.
- Valor unitario.
- Valor total.
- Si incluye bonificacion.
- Si fuerza bonificacion de semana completa.

Total de valores de destajo incluidos.

#### Tiempo personal utilizado

Tabla con las solicitudes de tiempo personal que afectan esta nomina:

- Notas de la solicitud.
- Fecha de inicio y fin.
- Total de dias de la solicitud.
- Dias que aplican en esta nomina.
- Monto pagado en esta nomina por tiempo personal.

#### Partidas contables asociadas

Tabla con las transacciones contables (partidas) generadas por esta nomina:

- ID de la transaccion.
- Numero de partida.
- Fecha.
- Referencia.
- Beneficiario.
- Cuentas de origen (debe) y destino (haber).
- Monto.

Cada partida tiene un enlace al detalle completo en el modulo de contabilidad.

#### Formularios asociados

Si existen plantillas de impresion configuradas para nominas, se muestran los formularios generados y la opcion de crear nuevos.

#### Informacion adicional

- Creador y fecha de creacion.
- Ultimo editor y fecha de ultima edicion.

### Crear una nomina individual

1. En el detalle de la corrida, hacer clic en **"Nueva nomina"**.
2. Completar los campos:

#### Datos basicos

- **Empleado**: seleccionar el contrato de trabajo del empleado.
- **Metodo de pago**: metodo de pago para esta nomina (hereda el del contrato por defecto).

#### Tabla de beneficios y deducciones

La tabla muestra automaticamente todos los componentes calculados:

- **Salario**: monto calculado segun el contrato y el periodo.
- **Horas extra**: campos para ingresar horas extra trabajadas, referencia y tarifa horaria. El sistema calcula el monto automaticamente.
- **Jornada nocturna**: campos para ingresar horas nocturnas trabajadas, referencia y tarifa horaria. El sistema calcula el monto automaticamente.
- **Comisiones**: si aplica, campo para ingresar el monto y referencia.
- **Beneficios y deducciones**: cada uno aparece con su monto calculado. Si el beneficio/deduccion tiene marcado **"Monto flexible empleado"**, el campo de monto empleado es editable.
- **Incidencias**: las incidencias del empleado en el periodo aparecen como filas de deduccion.

Usar los botones **"+"**, **"+2"**, **"+5"** para agregar detalles adicionales.
Hacer clic en **"Previsualizar"** para ver los calculos.
Hacer clic en **"Actualizar"** para refrescar los valores.

#### Informacion adicional

- **Memo**: notas internas sobre la nomina.
- **Fuera de ciclo**: indicador de que esta nomina pertenece a una corrida fuera de ciclo.

3. Hacer clic en **"Guardar"**.

Al guardar, el sistema:

- Calcula automaticamente todos los montos basados en el contrato, beneficios/deducciones e incidencias.
- Genera las partidas contables correspondientes (a menos que la configuracion **"Evitar generacion de partidas en nominas"** este marcada).

### Editar una nomina individual

1. En el detalle de la nomina, hacer clic en **"Editar"**.
2. Solo disponible si la corrida no esta aprobada ni pagada.
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

### Borrar una nomina individual

En el detalle de la nomina, hacer clic en **"Borrar"**. Solo disponible si la corrida no esta aprobada ni pagada. Al borrar, las partidas contables asociadas tambien se eliminan.

### Imprimir una nomina individual

1. En el detalle de la nomina, hacer clic en **"Imprimir"**.
2. Se abre una vista de impresion usando la plantilla configurada para boletas de pago.
3. Para descargar como PDF, hacer clic en **"Descargar PDF"**.

## Corridas de nomina pagadas

Las corridas pagadas son de solo lectura. Muestran el historial de todas las corridas que ya fueron pagadas.

Para acceder:

1. Ir a **"Nominas"**.
2. Seleccionar **"Corridas pagadas"**.

### Listado de corridas pagadas

Muestra todas las corridas pagadas con el mismo formato que las no pagadas. Incluye busqueda y filtros.

### Ver detalle de una corrida pagada

Igual que las no pagadas, pero sin opciones de edicion ni aprobacion. Muestra todas las nominas, destajos y partidas contables asociadas.

### Revertir pago de una corrida

Si se necesita corregir una corrida ya pagada:

1. En el detalle de la corrida pagada, hacer clic en **"Revertir pago"**.
2. La corrida regresa a estado **"Aprobado** en la seccion de corridas no pagadas.
3. Los destajos asociados regresan a estado **"No pagados"**.
4. Las nominas vuelven a ser editables.

### Impresion masiva en corridas pagadas

Las mismas opciones de impresion masiva (generar PDF todas y generar PDF de mi agencia) estan disponibles para corridas pagadas.

## API (llamadas desde sistemas externos)

### Listar corridas no pagadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs.json
```

### Crear una corrida de nomina

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payroll_run": {
      "name": "Nomina julio 2024",
      "payment_frequency": "monthly",
      "start_date": "2024-07-01",
      "end_date": "2024-07-31"
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs.json
```

### Generar corrida automatica desde fechas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/generate_from_dates?start_date=2024-07-01&end_date=2024-07-31&payment_frequency=monthly"
```

### Aprobar una corrida

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/approve.json
```

### Crear una nomina individual

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
      "memo": "Nomina regular julio 2024"
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls.json
```

### Ver una corrida no pagada

Devuelve la corrida con sus nominas, partidas contables y formularios asociados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

### Obtener estructura para crear una corrida

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/new.json
```

### Obtener estructura para editar una corrida

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/edit.json
```

### Actualizar una corrida no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payroll_run": {
      "name": "Nomina julio 2024 actualizada",
      "start_date": "2024-07-01",
      "end_date": "2024-07-31",
      "payment_frequency": "monthly"
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

### Borrar una corrida no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

### Desaprobar una corrida

Revierte la aprobacion de una corrida que aun no ha sido pagada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/disapprove.json
```

### Pagar una corrida

Ejecuta el pago de una corrida previamente aprobada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/pay.json
```

### Ver formulario de beneficios flexibles

Devuelve la corrida con los beneficios y deducciones flexibles que se deben llenar manualmente.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/fill_flexible_benefits_and_deductions.json
```

### Actualizar beneficios flexibles

Inicia el procesamiento asincrono de los montos flexibles de beneficios y deducciones de la corrida.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "payroll_run": {
      "payrolls_attributes": {
        "0": {
          "id": "1",
          "salary": "5000.00",
          "payroll_details_attributes": {
            "0": { "id": "10", "employee_amount": "150.00" }
          }
        }
      }
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/fill_flexible_benefits_and_deductions_action.json
```

### Generar PDF de todas las nominas

Inicia la generacion asincrona de PDF individuales para todas las nominas de una corrida. Devuelve el ZID del trabajo asincrono para consultar el progreso.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "elements": "1,2,3",
    "print_template": "1"
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/gen_print_all.json
```

### Verificar progreso de generacion de PDF

Consulta el estado del trabajo asincrono de generacion de PDF iniciado con `gen_print_all`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/check_print_all.json?zid=123"
```

### Generar PDF de las nominas de mi agencia

Inicia la generacion asincrona de PDF solo para las nominas de empleados de la misma agencia del usuario.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "elements": "1,2,3",
    "print_template": "1"
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/gen_print_all_from_my_agency.json
```

### Verificar progreso de generacion de PDF de mi agencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/check_print_all_from_my_agency.json?zid=123"
```

### Listar corridas pagadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs.json
```

### Ver una corrida pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs/1.json
```

### Revertir pago de una corrida

Devuelve una corrida pagada a estado aprobado para poder editarla nuevamente.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs/1/unpay.json
```

### Generar PDF de todas las nominas de una corrida pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "elements": "1,2,3",
    "print_template": "1"
  }' \
  https://app.zauru.com/payroll/paid_payroll_runs/gen_print_all.json
```

### Verificar progreso de generacion de PDF de una corrida pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/paid_payroll_runs/check_print_all.json?zid=123"
```

### Generar PDF de las nominas de mi agencia en una corrida pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "elements": "1,2,3",
    "print_template": "1"
  }' \
  https://app.zauru.com/payroll/paid_payroll_runs/gen_print_all_from_my_agency.json
```

### Verificar progreso de generacion de PDF de mi agencia en una corrida pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/paid_payroll_runs/check_print_all_from_my_agency.json?zid=123"
```

### Ver una nomina individual

Devuelve la nomina con todos sus detalles, beneficios/deducciones, destajos asociados, partidas contables y tiempo personal.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1.json
```

### Obtener estructura para crear una nomina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/new.json?payroll_run=1"
```

### Obtener estructura para editar una nomina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1/edit.json
```

### Actualizar una nomina individual

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

### Borrar una nomina individual

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/unpaid_payroll_runs/payrolls/1.json
```
