---
title: "Tiempo personal"
sidebar_label: "Tiempo personal"
sidebar_position: 12
---

Este tutorial trata sobre la gestion de tiempo personal (vacaciones, enfermedad, permisos) de los empleados, incluyendo solicitudes, aprobaciones y consulta de saldos.

## Solicitudes de tiempo personal

Las solicitudes de tiempo personal permiten a los empleados solicitar dias libres. Siguen un flujo de trabajo completo: en proceso, aprobado, rechazado y gozado.

Para acceder a las solicitudes:

1. Ir a **"Nominas"**.
2. En **"Tiempo personal"**, seleccionar **"Solicitudes"**.

### Listado de solicitudes

El listado muestra todas las solicitudes con su estado:

![Listado de solicitudes de tiempo personal con estados](/img/nominas/tiempo-personal-1.png)

- **En proceso** (icono azul): solicitud pendiente de aprobacion.
- **Aprobado** (icono verde con una verificacion): solicitud aprobada pero aun no gozada.
- **Rechazado** (icono rojo): solicitud rechazada.
- **Gozado** (icono verde con doble verificacion): solicitud aprobada y ya gozada.

Cada fila muestra: ID, empleado, tipo de tiempo personal, fecha de inicio, fecha de fin, dias solicitados y estado.

### Crear una solicitud de tiempo personal

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario para crear una solicitud de tiempo personal](/img/nominas/tiempo-personal-2.png)

- **Empleado**: seleccionar el empleado solicitante.
- **Tipo de tiempo personal**: seleccionar el tipo (vacaciones, enfermedad, permiso personal, etc.).
- **Fecha de inicio**: primer dia de la ausencia.
- **Fecha de fin**: ultimo dia de la ausencia.
- **Dias**: cantidad de dias habiles solicitados.
- **Notas**: motivo o descripcion de la solicitud.

3. Opcionalmente, adjuntar archivos PDF de respaldo (certificado medico, carta de solicitud, etc.).
4. Hacer clic en **"Guardar"**.

La solicitud queda en estado **"En proceso"**.

### Ver detalle de una solicitud

En el listado, hacer clic en la solicitud para ver el detalle completo:

![Detalle de una solicitud de tiempo personal](/img/nominas/tiempo-personal-3.png)

#### Informacion general

- ID de la solicitud.
- Empleado.
- Tipo de tiempo personal.
- Fecha de inicio y fecha de fin.
- Dias solicitados.
- Notas.
- Saldo de tiempo personal del empleado (enlace al historial).

#### Pago en contratos de destajo

Para empleados contratados bajo la modalidad de destajo, el sistema muestra el calculo del pago de tiempo personal:

- Tabla con las nominas recientes usadas para el calculo del promedio: rango de fechas de cada nomina, dias trabajados y monto.
- Total de dias y monto considerado.
- **Promedio diario**: resultado de dividir el monto total entre los dias.
- **Subtotal de pago de tiempo personal**: promedio diario multiplicado por los dias de la solicitud.
- Para cada beneficio/deduccion aplicable a tiempo personal: nombre y monto calculado.
- **Total a pagar**: subtotal mas beneficios/deducciones asociados.

Este calculo se basa en la cantidad de nominas recientes configurada en **"Configuraciones generales"** para el promedio diario.

#### Documentos adjuntos

Si se adjuntaron archivos PDF, se muestran como enlaces de descarga.

#### Flujo de trabajo

Muestra las fases del flujo de trabajo con fecha, usuario e informacion relevante:

- **En proceso**: quien creo la solicitud y cuando.
- **Aprobado**: quien aprobo la solicitud y cuando.
- **Gozado**: cuando se marco como gozada.
- **Rechazado**: quien rechazo, la razon del rechazo y cuando (solo si aplica).

### Aprobar una solicitud

1. En el detalle de la solicitud, hacer clic en **"Aprobar"** (icono de pulgar arriba).
2. La solicitud cambia a estado **"Aprobado"**.

### Rechazar una solicitud

1. En el detalle de la solicitud, hacer clic en **"Rechazar"** (icono de pulgar abajo).
2. Se abre un dialogo donde debe ingresar la **"Razon del rechazo"**.
3. Hacer clic en **"Confirmar rechazo"**.
4. La solicitud cambia a estado **"Rechazado"**.

### Desaprobar una solicitud

Si una solicitud fue aprobada pero aun no ha sido gozada, se puede revertir la aprobacion:

1. En el detalle de la solicitud aprobada, hacer clic en **"Desaprobar"**.
2. La solicitud regresa a estado **"En proceso"**.

### Revertir un rechazo

Si una solicitud fue rechazada pero aun no ha sido gozada, se puede revertir el rechazo:

1. En el detalle de la solicitud rechazada, hacer clic en **"Desrechazar"**.
2. La solicitud regresa a estado **"En proceso"**.

### Editar una solicitud

1. En el detalle de la solicitud, hacer clic en **"Editar"**.
2. Solo se pueden editar solicitudes que esten en estado **"En proceso"** (no aprobadas ni rechazadas).
3. Modificar los campos necesarios.
4. Hacer clic en **"Guardar"**.

### Borrar una solicitud

En el detalle, hacer clic en **"Borrar"**. Solo se pueden borrar solicitudes que esten en estado **"En proceso"** (no aprobadas ni rechazadas ni gozadas).

### Imprimir una solicitud

En el detalle de la solicitud, hacer clic en **"Imprimir"** para generar una version imprimible usando la plantilla configurada.

## Saldos de tiempo personal

Los saldos de tiempo personal muestran la cantidad de dias disponibles para cada empleado y el historial de movimientos.

Para acceder a los saldos:

1. Ir a **"Nominas"**.
2. En **"Tiempo personal"**, seleccionar **"Saldos"**.

### Listado de saldos

El listado muestra todos los empleados con su saldo de tiempo personal. Se puede filtrar por:

![Listado de saldos de tiempo personal por empleado](/img/nominas/tiempo-personal-4.png)

- **Activos**: empleados con contrato activo.
- **Terminados**: empleados con contrato terminado.
- **Todos**: ambos estados.

Cada fila muestra: empleado, dias disponibles, dias gozados, dias pendientes.

### Ver detalle del saldo

En el listado, hacer clic en el empleado para ver el historial completo:

![Detalle del saldo de tiempo personal con historial](/img/nominas/tiempo-personal-5.png)

- **Saldo actual**: dias disponibles.
- **Historial de movimientos**: tabla con cada movimiento que afecta el saldo:
  - Solicitudes de tiempo personal (dias gozados).
  - Incidencias que descuentan dias de tiempo personal.
  - Corridas de nomina que incluyen pagos de tiempo personal.
  - Cada movimiento muestra la fecha, tipo, descripcion, dias sumados/restados y saldo resultante.

## API (llamadas desde sistemas externos)

### Listar solicitudes de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "start_datetime": "2022-12-26T14:00:00.000Z",
    "end_datetime": "2023-01-02T23:00:00.000Z",
    "notes": "navidad -> año nuevo + 1 día post año nuevo ",
    "approved": true,
    "approved_at": "2022-12-19T18:30:48.596Z",
    "rejected": false,
    "rejected_at": null,
    "created_at": "2022-12-12T15:46:50.345Z",
    "updated_at": "2022-12-19T18:30:48.651Z",
    "entity_id": 3,
    "employee_id": 4,
    "approver_id": 3,
    "rejector_id": null,
    "creator_id": 3,
    "updater_id": 3,
    "personal_time_off_type_id": 5,
    "days": 6.5,
    "pdf1": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "pdf2": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "piecework_payment_last_payrolls_total": "0.0",
    "piecework_payment_last_payrolls_days": "0.0",
    "piecework_payment_subtotal": null,
    "piecework_payment_total": null,
    "paid": false,
    "paid_at": null,
    "rejected_reason": null,
    "enjoyed": true,
    "enjoyed_at": "2023-01-30T16:36:19.676Z"
  },
  {
    "id": 6,
    "zid": 7,
    "start_datetime": "2022-05-04T14:00:00.000Z",
    "end_datetime": "2022-05-04T23:00:00.000Z",
    "notes": "post boda",
    "approved": true,
    "approved_at": "2022-12-19T18:24:00.126Z",
    "rejected": false,
    "rejected_at": null,
    "created_at": "2022-06-29T00:40:15.152Z",
    "updated_at": "2022-12-19T18:24:00.246Z",
    "entity_id": 3,
    "employee_id": 4,
    "approver_id": 3,
    "rejector_id": null,
    "creator_id": 3,
    "updater_id": 3,
    "personal_time_off_type_id": 5,
    "days": 1.0,
    "pdf1": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "pdf2": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "piecework_payment_last_payrolls_total": "0.0",
    "piecework_payment_last_payrolls_days": "0.0",
    "piecework_payment_subtotal": null,
    "piecework_payment_total": null,
    "paid": false,
    "paid_at": null,
    "rejected_reason": null,
    "enjoyed": true,
    "enjoyed_at": "2023-05-18T23:47:05.957Z"
  }
]
```

### Crear una solicitud de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "personal_time_off_request": {
      "employee_id": "1",
      "personal_time_off_type_id": "1",
      "start_datetime": "2024-07-01T08:00:00",
      "end_datetime": "2024-07-05T17:00:00",
      "days": "5",
      "notes": "Vacaciones de verano"
    }
  }' \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "469",
  "zid": "268",
  "start_datetime": "2023-11-06 12:00:00",
  "end_datetime": "2023-11-24 22:00:00",
  "notes": "GRUPO 10-2023 Vacaciones La Vereda",
  "approved": true,
  "approved_at": "2023-11-02 18:25:33.722838",
  "rejected": false,
  "rejected_at": null,
  "created_at": "2023-11-02 18:19:16.794448",
  "updated_at": "2023-11-02 18:25:33.792208",
  "entity_id": "733",
  "employee_id": "10031",
  "approver_id": "2135",
  "rejector_id": null,
  "creator_id": "2135",
  "updater_id": "2135",
  "personal_time_off_type_id": "7",
  "days": "15",
  "pdf1": null,
  "pdf2": null,
  "piecework_payment_last_payrolls_total": "10431.230000",
  "piecework_payment_last_payrolls_days": "84.000000",
  "piecework_payment_subtotal": "1862.719643",
  "piecework_payment_total": "1897.750284",
  "paid": false,
  "paid_at": null,
  "rejected_reason": null,
  "enjoyed": true,
  "enjoyed_at": "2023-12-05 14:59:40.568445"
}
```

### Aprobar una solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1/approve.json
```

### Listar saldos de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_balances.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "9126",
    "available_days": "0",
    "created_at": "2024-04-29 14:58:22.014126",
    "updated_at": "2024-04-29 14:58:22.014126",
    "entity_id": "733",
    "employee_id": "16000",
    "work_contract_id": "6417",
    "personal_time_off_logs_count": "0",
    "zid": "622"
  }
]
```

### Ver una solicitud de tiempo personal

Devuelve la solicitud con el empleado, tipo de tiempo personal y formularios asociados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "469",
  "zid": "268",
  "start_datetime": "2023-11-06 12:00:00",
  "end_datetime": "2023-11-24 22:00:00",
  "notes": "GRUPO 10-2023 Vacaciones La Vereda",
  "approved": true,
  "approved_at": "2023-11-02 18:25:33.722838",
  "rejected": false,
  "rejected_at": null,
  "created_at": "2023-11-02 18:19:16.794448",
  "updated_at": "2023-11-02 18:25:33.792208",
  "entity_id": "733",
  "employee_id": "10031",
  "approver_id": "2135",
  "rejector_id": null,
  "creator_id": "2135",
  "updater_id": "2135",
  "personal_time_off_type_id": "7",
  "days": "15",
  "pdf1": null,
  "pdf2": null,
  "piecework_payment_last_payrolls_total": "10431.230000",
  "piecework_payment_last_payrolls_days": "84.000000",
  "piecework_payment_subtotal": "1862.719643",
  "piecework_payment_total": "1897.750284",
  "paid": false,
  "paid_at": null,
  "rejected_reason": null,
  "enjoyed": true,
  "enjoyed_at": "2023-12-05 14:59:40.568445"
}
```

### Obtener estructura para crear una solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "start_datetime": null,
  "end_datetime": null,
  "notes": null,
  "approved": false,
  "approved_at": null,
  "rejected": false,
  "rejected_at": null,
  "created_at": null,
  "updated_at": null,
  "entity_id": 1,
  "employee_id": null,
  "approver_id": null,
  "rejector_id": null,
  "creator_id": null,
  "updater_id": null,
  "personal_time_off_type_id": null,
  "days": null,
  "pdf1": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "pdf2": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "piecework_payment_last_payrolls_total": "0.0",
  "piecework_payment_last_payrolls_days": "0.0",
  "piecework_payment_subtotal": "0.0",
  "piecework_payment_total": "0.0",
  "paid": false,
  "paid_at": null,
  "rejected_reason": null,
  "enjoyed": false,
  "enjoyed_at": null
}
```

### Obtener estructura para editar una solicitud

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "469",
  "zid": "268",
  "start_datetime": "2023-11-06 12:00:00",
  "end_datetime": "2023-11-24 22:00:00",
  "notes": "GRUPO 10-2023 Vacaciones La Vereda",
  "approved": true,
  "approved_at": "2023-11-02 18:25:33.722838",
  "rejected": false,
  "rejected_at": null,
  "created_at": "2023-11-02 18:19:16.794448",
  "updated_at": "2023-11-02 18:25:33.792208",
  "entity_id": "733",
  "employee_id": "10031",
  "approver_id": "2135",
  "rejector_id": null,
  "creator_id": "2135",
  "updater_id": "2135",
  "personal_time_off_type_id": "7",
  "days": "15",
  "pdf1": null,
  "pdf2": null,
  "piecework_payment_last_payrolls_total": "10431.230000",
  "piecework_payment_last_payrolls_days": "84.000000",
  "piecework_payment_subtotal": "1862.719643",
  "piecework_payment_total": "1897.750284",
  "paid": false,
  "paid_at": null,
  "rejected_reason": null,
  "enjoyed": true,
  "enjoyed_at": "2023-12-05 14:59:40.568445"
}
```

### Actualizar una solicitud de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "personal_time_off_request": {
      "start_datetime": "2024-07-01T08:00:00",
      "end_datetime": "2024-07-05T17:00:00",
      "days": "5",
      "notes": "Vacaciones de verano actualizadas"
    }
  }' \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "469",
  "zid": "268",
  "start_datetime": "2023-11-06 12:00:00",
  "end_datetime": "2023-11-24 22:00:00",
  "notes": "GRUPO 10-2023 Vacaciones La Vereda",
  "approved": true,
  "approved_at": "2023-11-02 18:25:33.722838",
  "rejected": false,
  "rejected_at": null,
  "created_at": "2023-11-02 18:19:16.794448",
  "updated_at": "2023-11-02 18:25:33.792208",
  "entity_id": "733",
  "employee_id": "10031",
  "approver_id": "2135",
  "rejector_id": null,
  "creator_id": "2135",
  "updater_id": "2135",
  "personal_time_off_type_id": "7",
  "days": "15",
  "pdf1": null,
  "pdf2": null,
  "piecework_payment_last_payrolls_total": "10431.230000",
  "piecework_payment_last_payrolls_days": "84.000000",
  "piecework_payment_subtotal": "1862.719643",
  "piecework_payment_total": "1897.750284",
  "paid": false,
  "paid_at": null,
  "rejected_reason": null,
  "enjoyed": true,
  "enjoyed_at": "2023-12-05 14:59:40.568445"
}
```

### Borrar una solicitud de tiempo personal

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Desaprobar una solicitud

Revierte la aprobacion de una solicitud aprobada que aun no ha sido gozada.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1/disapprove.json
```

### Rechazar una solicitud

Marca la solicitud como rechazada indicando la razon del rechazo.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "reject_reason": "No hay suficientes dias disponibles"
  }' \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1/reject.json
```

### Revertir un rechazo

Revierte el rechazo de una solicitud para que vuelva a estado en proceso.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_requests/1/disreject.json
```

### Ver el saldo de tiempo personal de un empleado

Devuelve el saldo con el historial completo de movimientos (solicitudes, incidencias y nominas que afectan el saldo).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/personal_time_off/personal_time_off_balances/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "9126",
  "available_days": "0",
  "created_at": "2024-04-29 14:58:22.014126",
  "updated_at": "2024-04-29 14:58:22.014126",
  "entity_id": "733",
  "employee_id": "16000",
  "work_contract_id": "6417",
  "personal_time_off_logs_count": "0",
  "zid": "622"
}
```
