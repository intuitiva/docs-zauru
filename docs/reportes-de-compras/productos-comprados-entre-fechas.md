---
title: "Productos Comprados entre Fechas"
sidebar_label: "Productos Comprados entre Fechas"
sidebar_position: 11
---

¿Necesita ver cuánto compró de cada producto en un periodo? Este reporte resume las compras entre dos fechas, agrupadas por producto, con la cantidad total comprada, el costo unitario promedio y el costo total. Es ideal para identificar de un vistazo sus artículos de mayor movimiento.

Para ingresar al reporte:

1. Ir a "Compras".
2. Seleccionar "Reportes".
3. Seleccionar "Productos Comprados entre Fechas".
4. Seleccionar el rango de fechas.

Permite filtrar por agencia.

Con este resumen podrá revisar el comportamiento de compra de cada producto y planificar sus próximas adquisiciones con datos en mano.

## API (llamadas desde sistemas externos)

### Obtener los productos comprados entre fechas
El reporte acepta los parametros `date` (fecha inicial), `days` (cantidad de dias del rango), `used_date` (campo de fecha a usar: `created_at`, `issue_date`, `shipping_date`, `delivery_date` o `received_at`), `include_items`, `include_accounts`, `include_authorized_not_received`, `include_not_authorized` y `agencies[]` (lista de agencias a filtrar):

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/reports/purchased_items_between_dates.json?date=2026-08-01&days=7
```

Esto devolverá un JSON similar a este:
```json
{
  "items": {
    "1": {
      "cat": "Bebidas",
      "name": "Refresco Cola 355ml",
      "inventory_account": "1103 - Inventario",
      "volume": "0.0"
    },
    "2": {
      "cat": "Abarrotes",
      "name": "Bolsa de Azucar 1kg",
      "inventory_account": "1103 - Inventario",
      "volume": "0.0"
    }
  },
  "items_purchases_quantity": {
    "1": 24,
    "2": 10
  },
  "items_purchases_cost": {
    "1": 120.0,
    "2": 55.0
  },
  "items_purchases_cost_without_vat": {
    "1": 107.14,
    "2": 49.11
  },
  "accounts": {
    "1": {
      "cat": "Gastos",
      "name": "5010 - Servicios (Q)"
    },
    "2": {
      "cat": "Gastos",
      "name": "5020 - Mantenimiento (Q)"
    }
  },
  "accounts_purchases_cost": {
    "1": 350.0,
    "2": 100.0
  },
  "accounts_purchases_cost_without_vat": {
    "1": 312.5,
    "2": 89.29
  }
}
```
