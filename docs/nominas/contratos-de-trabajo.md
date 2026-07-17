---
title: "Contratos de trabajo"
sidebar_label: "Contratos de trabajo"
sidebar_position: 2
---

Este tutorial trata sobre la gestion de contratos de trabajo, que vinculan empleados a puestos de trabajo y definen las condiciones salariales, metodo de pago, tiempo personal y terminos de contratacion.

## Listado de contratos

Para acceder al listado de contratos:

1. Ir a **"Nominas"**.
2. Seleccionar **"Contratos de trabajo"**.

El listado muestra todos los contratos con su estado (activo, terminado) y permite filtrar por:

- **Agencia**: filtrar contratos por agencia del empleado.
- **Estado**: filtrar por contratos activos, terminados o todos.

Cada fila muestra el ID, empleado, puesto de trabajo, fecha de inicio, fecha de cierre y estado.

## Crear un contrato de trabajo

1. En el listado de contratos, hacer clic en **"Nuevo"**.
2. Completar los campos:

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

### Ver un contrato de trabajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/1.json
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
      "termination_type": "dismissal",
      "reason": "Reestructuracion de personal"
    }
  }' \
  https://app.zauru.com/payroll/work_contracts/1/work_contract_terminations.json
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

### Obtener estructura para una nueva terminacion de contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/1/work_contract_terminations/new.json
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

### Obtener estructura para crear un contrato

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/work_contracts/new.json
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
