---
title: "Nóminas pagadas"
sidebar_label: "Nóminas pagadas"
sidebar_position: 2
---

Una vez pagada, la nómina pasa al historial. Las nóminas pagadas son de solo lectura: conservan todas las nóminas individuales, los destajos y las partidas contables del pago.

Para acceder:

1. Ir a **"Nóminas"**.
2. Seleccionar **"Nóminas Pagadas"**.

## Listado de nóminas pagadas

Muestra todas las nóminas pagadas con el mismo formato que las no pagadas, e incluye búsqueda y filtros.

![Listado de nóminas pagadas](/img/nominas/nominas-pagadas-1.png)

## Ver detalle de una nómina pagada

Igual que el detalle de una nómina no pagada, pero sin opciones de edición ni aprobación. Muestra las nóminas individuales, los destajos y las partidas contables asociadas.

![Detalle de una nómina pagada](/img/nominas/nominas-pagadas-2.png)

## Des-pagar una nómina

Si se necesita corregir una nómina ya pagada:

1. En el detalle de la nómina pagada, hacer clic en **"Des-pagar"**.
2. La nómina regresa a estado **"Aprobada"** en la sección de nóminas no pagadas.
3. Los destajos asociados regresan a estado "no pagados".
4. Los incidentes quedan sin descontar y las nóminas individuales vuelven a ser editables.

## Impresión masiva en nóminas pagadas

Las mismas opciones de impresión masiva (**"Generar PDFs de las Nóminas"** y **"Generar PDFs de las Nóminas de mi Locación"**) están disponibles en las nóminas pagadas.

## API (llamadas desde sistemas externos)

### Listar nóminas pagadas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "name": "febrero 2023",
    "start_date": "2023-02-01",
    "end_date": "2023-02-28",
    "calculated_at": null,
    "total_pay": "75437.348916",
    "total_cost": "78657.505515",
    "approved": true,
    "approver_id": 3,
    "approved_at": "2023-02-28T22:42:27.310Z",
    "paid": true,
    "payer_id": 3,
    "paid_at": "2023-02-28T22:45:19.969Z",
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 4,
    "created_at": "2023-02-28T22:18:11.481Z",
    "updated_at": "2023-04-19T16:00:58.133Z",
    "payment_frequency": 4,
    "off_cycle_temporality": null,
    "off_cycle_payroll_benefits_deduction_id": null,
    "paid_days": 28,
    "theorical_paid_days": 0,
    "async_message": null,
    "contract_term_type_id": 5
  },
  {
    "id": 6,
    "zid": 7,
    "name": "Aguinaldo 2021",
    "start_date": "2021-04-01",
    "end_date": "2022-11-30",
    "calculated_at": null,
    "total_pay": "4206.27",
    "total_cost": "4206.27",
    "approved": true,
    "approver_id": 4,
    "approved_at": "2022-01-15T16:05:35.688Z",
    "paid": true,
    "payer_id": 4,
    "paid_at": "2022-01-15T16:05:39.047Z",
    "creator_id": 4,
    "updater_id": null,
    "entity_id": 4,
    "created_at": "2022-01-15T02:46:53.152Z",
    "updated_at": "2022-01-15T16:05:39.049Z",
    "payment_frequency": 0,
    "off_cycle_temporality": null,
    "off_cycle_payroll_benefits_deduction_id": null,
    "paid_days": 609,
    "theorical_paid_days": 0,
    "async_message": null,
    "contract_term_type_id": 5
  }
]
```

### Ver una nómina pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Revertir pago de una nómina

Devuelve una nómina pagada al estado Aprobada para poder editarla nuevamente.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_payroll_runs/1/unpay.json
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

### Generar PDF de las nóminas individuales de una nómina pagada

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

Esto devolverá un JSON similar a este:
```json
{
  "status": 1,
  "zid": 1
}
```

### Verificar progreso de generación de PDF de una nómina pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/paid_payroll_runs/check_print_all.json?zid=123"
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 3,
  "message": "not_found"
}
```

### Generar PDF de las nóminas de mi locación en una nómina pagada

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

### Verificar progreso de generación de PDF de mi locación en una nómina pagada

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/paid_payroll_runs/check_print_all_from_my_agency.json?zid=123"
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 3,
  "message": "not_found"
}
```
