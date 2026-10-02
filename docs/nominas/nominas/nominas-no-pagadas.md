---
title: "Nóminas no pagadas"
sidebar_label: "Nóminas no pagadas"
sidebar_position: 1
---

Las nóminas no pagadas son las nóminas del periodo pendientes de pago: aquí se crean, aprueban y pagan.

Para acceder:

1. Ir a **"Nóminas"**.
2. Seleccionar **"Nóminas no Pagadas"**.

## Listado de nóminas no pagadas

El listado muestra todas las nóminas pendientes en formato de tabla con las siguientes columnas:

![Listado de nóminas no pagadas](/img/nominas/nominas-no-pagadas-1.png)

- ID (zid): identificador único de la nómina.
- Nombre: nombre descriptivo de la nómina.
- Fecha de inicio y fecha de fin: rango de fechas que cubre la nómina.
- Empleados: cantidad de empleados incluidos.
- Pago total: suma de todos los pagos a empleados.
- Costo total: suma del costo total para la empresa (pago a empleados + aportes patronales).
- Estado: situación actual de la nómina (Borrador, Aprobada o Pagado).
- Acciones: iconos para cada operación disponible.

## Acciones disponibles en el listado

Cada nómina muestra iconos de acción según su estado:

- **Llenar beneficios y deducciones flexibles** (icono de usuarios): permite ingresar manualmente los montos de beneficios y deducciones marcados como flexibles. Solo disponible si la nómina no está aprobada ni pagada y no tiene un procesamiento flexible en curso.
- **Aprobar** (icono de verificación): aprueba la nómina para que pueda ser pagada.
- **Desaprobar** (icono de cancelación): revierte la aprobación. Solo disponible si la nómina está aprobada y no pagada.
- **Pagar** (icono de tarjeta de crédito): ejecuta el pago de la nómina. Solo disponible si la nómina está aprobada.

En la misma columna están los iconos de ver detalle, editar y borrar. Editar y borrar solo están disponibles si la nómina no está aprobada ni pagada.

## Generación automática de nóminas

En la parte superior del listado, el sistema muestra las próximas nóminas programadas y las próximas nóminas fuera de ciclo.

### Nóminas programadas por calendario

El sistema calcula las nóminas según los calendarios configurados en las configuraciones generales:

- **Mensual**: nóminas que cubren un mes completo de trabajo.
- **Quincenal**: nóminas que cubren una quincena (dos nóminas por mes).
- **Catorcenal**: nóminas que cubren catorce días.
- **Semanal**: nóminas que cubren una semana de trabajo.

Para cada tipo de nómina programada se muestra un botón con el nombre de la frecuencia y el rango de fechas (inicio - fin); si la empresa maneja varios tipos de contrato, el botón también indica el tipo de contrato. Hacer clic en el botón genera automáticamente la nómina con todas las nóminas individuales.

El sistema maneja la sincronización de calendarios: si la fecha de inicio del ciclo de pago no coincide con el inicio natural, la primera nómina se ajusta para alinear el calendario (por ejemplo, si el ciclo quincenal inicia el día 5, la primera quincena puede ser más corta).

### Nóminas fuera de ciclo (off-cycle)

Son nóminas especiales para beneficios y deducciones que se pagan en ciclos distintos al regular:

- **Anual**: beneficios que se pagan una vez al año (por ejemplo, bono 14 y aguinaldo).
- **Semestral**: beneficios que se pagan cada seis meses.
- **Trimestral**: beneficios que se pagan cada tres meses.
- **Bimestral**: beneficios que se pagan cada dos meses.

Para cada nómina fuera de ciclo se muestra un botón con el nombre del beneficio o deducción y el rango de fechas. Hacer clic en el botón genera la nómina fuera de ciclo.

## Crear una nómina manualmente

1. En el listado, hacer clic en **"Nueva Ejecución de Nómina"**.
2. Completar los campos:

- **Nombre**: nombre descriptivo de la nómina (por ejemplo, "Nómina julio 2024").
- **Fecha de inicio**: primer día que cubre la nómina. Solo se define al crear.
- **Fecha de fin**: último día que cubre la nómina. Solo se define al crear.
- **Término del Contrato de Trabajo**: tipo de contrato que incluye la nómina (tiempo indefinido, plazo fijo u obra determinada).
- **Frecuencia del pago de salario**: mensual, quincenal, catorcenal, semanal o fuera de ciclo.

3. Hacer clic en **"Crear Nómina"**.

![Formulario de nueva nómina](/img/nominas/nominas-no-pagadas-2.png)

## Ver detalle de una nómina

En el listado, hacer clic en el nombre o ID de la nómina. El detalle muestra:

- **Datos generales**: nombre, frecuencia de pago, rango de fechas y estado.
- **Nóminas incluidas**: tabla con todas las nóminas individuales. Cada fila muestra: empleado, salario, horas extra, jornada nocturna, comisiones, bonificación, beneficios, deducciones, pago total y costo total.
- **Conteo de detalles de destajos**: cantidad de destajos incluidos en la nómina.
- **Partidas contables asociadas**: enlace a las transacciones contables generadas por la nómina.
- **Formularios asociados**: plantillas de impresión vinculadas.

![Detalle de una nómina no pagada](/img/nominas/nominas-no-pagadas-3.png)

## Aprobar una nómina

1. En el detalle o listado de la nómina, hacer clic en **"Aprobar"** (icono de verificación).
2. El sistema:

- Genera las partidas contables de las nóminas individuales, salvo que la empresa tenga deshabilitada la generación de partidas en nóminas.
- Cambia el estado de la nómina a **"Aprobada"**.
- Bloquea la edición de las nóminas individuales.

## Desaprobar una nómina

1. En la nómina aprobada, hacer clic en **"Desaprobar"**.
2. Solo disponible si la nómina no ha sido pagada.
3. Revierte el estado a Borrador, elimina las partidas contables generadas y permite editar nuevamente.

## Pagar una nómina

1. En la nómina aprobada, hacer clic en **"Pagar"** (icono de tarjeta de crédito).
2. El sistema:

- Procesa el pago de todas las nóminas individuales.
- Genera las partidas contables del pago, salvo que la empresa tenga deshabilitada la generación de partidas en nóminas.
- Los destajos asociados pasan de "no pagados" a "pagados".
- Las incidencias quedan marcadas como descontadas.
- La nómina se mueve a la sección **"Nóminas Pagadas"**.

## Llenar beneficios y deducciones flexibles

Para beneficios y deducciones configurados como flexibles (con el campo **"Monto Flexible"** marcado), los montos se ingresan manualmente por nómina:

1. En el listado de nóminas, hacer clic en **"Llenar beneficios y deducciones flexibles"** (icono de usuarios).
2. Aparece una tabla con todos los empleados de la nómina y las columnas de cada beneficio o deducción flexible.
3. Ingresar los montos correspondientes para cada empleado.

![Tabla de llenado de beneficios y deducciones flexibles](/img/nominas/nominas-no-pagadas-4.png)

4. Hacer clic en **"Actualizar Nómina"**.

El sistema procesa los cambios de forma asíncrona. Mientras el proceso está en curso, no se puede iniciar otro llenado de beneficios y deducciones flexibles en la misma nómina.

## Editar una nómina

1. En el detalle de la nómina, hacer clic en el icono de edición.
2. Solo disponible si la nómina no está aprobada.
3. Modificar el nombre, el término del contrato o la frecuencia de pago. Las fechas de inicio y fin no se pueden cambiar.
4. Hacer clic en **"Actualizar Nómina"**.

## Borrar una nómina

En el detalle, hacer clic en el icono de basura. Solo disponible si la nómina no está aprobada.

## Exportar una nómina

En el detalle de la nómina, hay tres opciones de exportación:

- **"Exportar Mini Excel"**: descarga un archivo Excel con los datos básicos de cada nómina individual (empleado, cuenta bancaria y total a pagar).
- **"Exportar a Excel"**: descarga un archivo XLS con el detalle completo de las nóminas individuales, incluyendo cada beneficio, deducción e incidencia.
- **"Exportar a CSV"**: descarga el mismo detalle completo en formato CSV.

## Generar los PDF de las nóminas

En el detalle de la nómina, por cada plantilla de impresión configurada aparecen dos opciones:

- **"Generar PDFs de las Nóminas"**: genera un PDF por cada nómina individual de la nómina, de forma asíncrona. El sistema muestra el progreso de generación.
- **"Generar PDFs de las Nóminas de mi Locación"**: genera los PDF solo para las nóminas de empleados de la misma locación del usuario.

Mientras los PDF se generan, se puede consultar el progreso con los botones de verificación correspondientes.

## API (llamadas desde sistemas externos)

### Listar nóminas no pagadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "name": "Bono14 Año 2022",
    "start_date": "2021-06-01",
    "end_date": "2022-05-31",
    "calculated_at": null,
    "total_pay": "29665.55",
    "total_cost": "29665.55",
    "approved": true,
    "approver_id": 3,
    "approved_at": "2023-05-18T23:30:00.814Z",
    "paid": false,
    "payer_id": null,
    "paid_at": null,
    "creator_id": 4,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2023-05-18T22:39:35.109Z",
    "updated_at": "2023-05-18T23:30:00.832Z",
    "payment_frequency": 0,
    "off_cycle_temporality": "1",
    "off_cycle_payroll_benefits_deduction_id": 5,
    "paid_days": 0,
    "theorical_paid_days": 0,
    "async_message": null,
    "contract_term_type_id": 6
  },
  {
    "id": 7,
    "zid": 8,
    "name": "Aguinaldo Año 2022",
    "start_date": "2021-12-01",
    "end_date": "2022-11-30",
    "calculated_at": null,
    "total_pay": "35012.2",
    "total_cost": "35012.2",
    "approved": true,
    "approver_id": 3,
    "approved_at": "2023-05-18T23:47:20.160Z",
    "paid": false,
    "payer_id": null,
    "paid_at": null,
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2023-05-18T23:40:57.009Z",
    "updated_at": "2023-05-18T23:47:20.168Z",
    "payment_frequency": 0,
    "off_cycle_temporality": "1",
    "off_cycle_payroll_benefits_deduction_id": 9,
    "paid_days": 0,
    "theorical_paid_days": 0,
    "async_message": null,
    "contract_term_type_id": 6
  }
]
```

### Crear una nómina

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payroll_run": {
      "name": "Nómina julio 2024",
      "payment_frequency": 4,
      "start_date": "2024-07-01",
      "end_date": "2024-07-31"
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Nómina julio 2024",
  "start_date": "2024-07-01",
  "end_date": "2024-07-31",
  "calculated_at": null,
  "total_pay": null,
  "total_cost": null,
  "approved": false,
  "approver_id": null,
  "approved_at": null,
  "paid": false,
  "payer_id": null,
  "paid_at": null,
  "creator_id": 3,
  "updater_id": null,
  "entity_id": 4,
  "created_at": "2026-08-06T04:17:31.589Z",
  "updated_at": "2026-08-06T04:17:31.589Z",
  "payment_frequency": 4,
  "off_cycle_temporality": null,
  "off_cycle_payroll_benefits_deduction_id": null,
  "paid_days": 0,
  "theorical_paid_days": 0,
  "async_message": null,
  "contract_term_type_id": 5
}
```

### Generar nómina automática desde fechas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/generate_from_dates?start=2024-07-01&end=2024-07-31&pay_schedule=4&contract_term_type_id=1"
```

### Aprobar una nómina

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/approve.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Ver una nómina no pagada

Devuelve la nómina con sus nóminas individuales, partidas contables y formularios asociados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener estructura para crear una nómina

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "name": null,
  "start_date": null,
  "end_date": null,
  "calculated_at": null,
  "total_pay": null,
  "total_cost": null,
  "approved": false,
  "approver_id": null,
  "approved_at": null,
  "paid": false,
  "payer_id": null,
  "paid_at": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "payment_frequency": 4,
  "off_cycle_temporality": null,
  "off_cycle_payroll_benefits_deduction_id": null,
  "paid_days": 0,
  "theorical_paid_days": 0,
  "async_message": null,
  "contract_term_type_id": 2
}
```

### Obtener estructura para editar una nómina

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar una nómina no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payroll_run": {
      "name": "Nómina julio 2024 actualizada",
      "start_date": "2024-07-01",
      "end_date": "2024-07-31",
      "payment_frequency": 4
    }
  }' \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Borrar una nómina no pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Desaprobar una nómina

Revierte la aprobación de una nómina que aún no ha sido pagada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/disapprove.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Pagar una nómina

Ejecuta el pago de una nómina previamente aprobada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/pay.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Ver formulario de beneficios flexibles

Devuelve la nómina con los beneficios y deducciones flexibles que se deben llenar manualmente.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_payroll_runs/1/fill_flexible_benefits_and_deductions.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "440",
  "zid": "26",
  "name": "Semanas 48 y 49 2022",
  "start_date": "2022-11-28",
  "end_date": "2022-12-11",
  "calculated_at": null,
  "total_pay": "390498.752169",
  "total_cost": "439026.758578",
  "approved": true,
  "approver_id": "2135",
  "approved_at": "2022-12-22 17:31:30.700295",
  "paid": true,
  "payer_id": "2135",
  "paid_at": "2022-12-22 17:31:35.752863",
  "creator_id": "2135",
  "updater_id": null,
  "entity_id": "733",
  "created_at": "2022-12-12 23:43:41.405432",
  "updated_at": "2022-12-22 17:31:35.754144",
  "payment_frequency": "2",
  "off_cycle_temporality": null,
  "off_cycle_payroll_benefits_deduction_id": null,
  "paid_days": "14",
  "theorical_paid_days": "0",
  "async_message": null,
  "contract_term_type_id": "1"
}
```

### Actualizar beneficios flexibles

Inicia el procesamiento asíncrono de los montos flexibles de beneficios y deducciones de la nómina.

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

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```

### Generar PDF de las nóminas individuales

Inicia la generación asíncrona de un PDF por cada nómina individual de la nómina. Devuelve el ZID del trabajo asíncrono para consultar el progreso.

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

Esto devolverá un JSON similar a este:
```json
{
  "status": 1,
  "zid": 1
}
```

### Verificar progreso de generación de PDF

Consulta el estado del trabajo asíncrono de generación de PDF iniciado con `gen_print_all`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/check_print_all.json?zid=123"
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 3,
  "message": "not_found"
}
```

### Generar PDF de las nóminas de mi locación

Inicia la generación asíncrona de PDF solo para las nóminas de empleados de la misma locación del usuario.

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

### Verificar progreso de generación de PDF de mi locación

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/unpaid_payroll_runs/check_print_all_from_my_agency.json?zid=123"
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 3,
  "message": "not_found"
}
```
