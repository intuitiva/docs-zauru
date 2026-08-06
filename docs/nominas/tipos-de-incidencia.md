---
title: "Tipos de incidencia"
sidebar_label: "Tipos de incidencia"
sidebar_position: 5
---

Los tipos de incidencia definen las categorias de incidencias (llegadas tarde, ausencias, faltas) y como se calcula el descuento para cada tipo.

Para gestionar tipos de incidencia:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de incidencia"**.

## Crear un tipo de incidencia

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo tipo de incidencia](/img/nominas/configuraciones-de-nomina-7.png)

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

## Editar y borrar tipos de incidencia

Similar a las demas configuraciones: desde el detalle del tipo de incidencia, usar los botones **"Editar"** y **"Borrar"**.

## API (llamadas desde sistemas externos)

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
