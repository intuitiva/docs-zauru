---
title: "Metodos de pago"
sidebar_label: "Metodos de pago"
sidebar_position: 4
---

Los metodos de pago definen las cuentas contables utilizadas para registrar los pagos de nomina.

Para gestionar metodos de pago:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Metodos de pago"**.

## Crear un metodo de pago

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo metodo de pago](/img/nominas/configuraciones-de-nomina-6.png)

- **Nombre**: nombre descriptivo del metodo (ej. "Deposito bancario", "Efectivo", "Cheque").
- **Cuenta de nomina individual**: cuenta contable usada para pagos a empleados individuales.
- **Cuenta de corrida de nomina**: cuenta contable usada para la aprobacion y pago consolidado de toda la corrida.

3. Hacer clic en **"Guardar"**.

## Asignar metodo de pago a un contrato

Cada contrato de trabajo puede tener un metodo de pago por defecto. El metodo de pago se selecciona al crear o editar el contrato de trabajo, en el campo **"Metodo de pago por defecto"**.

## API (llamadas desde sistemas externos)

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
