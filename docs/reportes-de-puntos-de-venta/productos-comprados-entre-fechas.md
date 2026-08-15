---
title: "Productos Comprados entre Fechas"
sidebar_label: "Productos Comprados entre Fechas"
sidebar_position: 8
---

Este reporte devuelve los items y cuentas compradas en un rango de fechas, con cantidades, costos y costos sin IVA.

Para ingresar al reporte:

1. Ir a "P.D.V.".
2. Seleccionar "Reportes".
3. Seleccionar "Productos Comprados entre Fechas".

## API (llamadas desde sistemas externos)

### Obtener los productos comprados entre fechas

Filtros disponibles: `used_date` (`created_at`, `issue_date`, `shipping_date`, `delivery_date` o `received_at`), `days` (cantidad de dias, de 1 a 31), `date` (fecha inicial, formato YYYY-MM-DD), `include_items`, `include_accounts`, `include_authorized_not_received` y `include_not_authorized` (valores `0` o `1`).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/pos/reports/purchased_items_between_dates.json?used_date=created_at&days=7&include_items=1&include_accounts=1&include_authorized_not_received=0&include_not_authorized=0"
```

Esto devolverá un JSON similar a este:

```json
{
  "items": {
    "1": {"cat": "Materia Prima", "name": "MP-001 Harina de Trigo", "volume": null},
    "2": {"cat": "Materia Prima", "name": "MP-002 Azucar Blanca", "volume": "5.0"}
  },
  "items_purchases_quantity": {"1": "10.0", "2": "20.0"},
  "items_purchases_cost": {"1": "150.0", "2": "100.0"},
  "items_purchases_cost_without_vat": {"1": "133.93", "2": "89.29"},
  "accounts": {
    "1": {"cat": "Gastos Generales", "name": "GASTOS-01 Combustible"},
    "2": {"cat": "Gastos Generales", "name": "GASTOS-02 Papeleria"}
  },
  "accounts_purchases_cost": {"1": "80.0", "2": "25.0"},
  "accounts_purchases_cost_without_vat": {"1": "71.43", "2": "22.32"}
}
```
