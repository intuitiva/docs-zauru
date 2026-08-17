---
title: "Ventas Mensuales de Ítems"
sidebar_label: "Ventas Mensuales de Ítems"
sidebar_position: 19
---

Si quiere saber qué productos dejan ganancia de verdad y cuáles apenas se mueven, este es el reporte completo del mes. Trae cantidades, precios, costos, márgenes y la contribución de cada ítem y paquete, todo en un solo lugar.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ventas Mensuales de Ítems".

Permite filtrar por rango de fechas y exportar a Excel o JSON.

## API (llamadas desde sistemas externos)

### Ventas mensuales de ítems y paquetes

Se puede obtener el reporte completo de ventas mensuales entre `date` y `end_date` (formato `YYYY-MM-DD` o `DD/MM/YYYY`), con filtros opcionales por agencia (`agency`) y vendedor (`seller`). El parámetro `document_type` acepta `Invoices` o `SalesOrders`, y `include_credit_notes` acepta `1` o `0`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/monthly_items.json?date=2026-08-01&end_date=2026-08-31&document_type=Invoices&include_credit_notes=1&agency=1&seller=2
```

Esto devolverá un JSON similar a este:

```json
{
  "filters": {
    "start_date": "2026-08-01",
    "end_date": "2026-08-31",
    "agency": "Punto de Venta Ejemplo",
    "seller": "Vendedor Ejemplo",
    "document_type": "Invoices",
    "credit_notes_included": true
  },
  "summary": {
    "total_sales": 1250.0,
    "total_costs": 800.0,
    "gross_profit": 450.0,
    "gross_profit_pct": 36.0
  },
  "rows": [
    {
      "item_super_category": "Super Categoría Ejemplo",
      "category": "Categoría Ejemplo",
      "code": "PROD-001",
      "name": "Producto Ejemplo A",
      "vendor": "Proveedor Ejemplo, S.A.",
      "measurement_unit": "Unidad",
      "quantity": 50.0,
      "volume": 5.0,
      "average_unit_price": 25.0,
      "average_unit_cost": 16.0,
      "total_cost": 800.0,
      "average_margin_pct": 36.0,
      "total_sales": 1250.0,
      "contribution_pct": 100.0,
      "is_bundle": false,
      "id": 1
    },
    {
      "item_super_category": null,
      "category": "Categoría Ejemplo",
      "code": "PAQ-001",
      "name": "+Paquete Ejemplo",
      "vendor": null,
      "measurement_unit": "Unidad",
      "quantity": 2,
      "volume": 0.4,
      "average_unit_price": 30.0,
      "average_unit_cost": 20.0,
      "total_cost": 40.0,
      "average_margin_pct": 33.33,
      "total_sales": 60.0,
      "contribution_pct": 4.8,
      "is_bundle": true,
      "id": 3
    }
  ]
}
```
