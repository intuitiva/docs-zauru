---
title: "Ventas Mensuales por Vendedor y Categoría de Ítem"
sidebar_label: "Ventas Mensuales por Vendedor y Categoría de Ítem"
sidebar_position: 14
---

Si quiere saber qué categorías de productos mueve cada vendedor, este reporte se lo cruza en una matriz sencilla. Es útil para detectar especialidades y repartir catálogos o promociones con criterio.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ventas Mensuales por Vendedor y Categoría de Ítem".

Con este cruce puede orientar a cada vendedor hacia las categorías donde mejor se desempeña.

## API (llamadas desde sistemas externos)

### Obtener la matriz de ventas por vendedor y categoría de ítem

Se puede obtener la matriz del mes indicado por `year` y `month` (números enteros). Los parámetros `include_vat` e `include_credit_notes` aceptan `1` o `0`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/sales/reports/monthly_sales_by_seller_and_item_category.json?year=2026&month=8&include_vat=1&include_credit_notes=1"
```

Esto devolverá un JSON similar a este:
```json
{
  "total": 1000.0,
  "total_real_sales_without_item_category": 200.0,
  "total_real_sales_by_item_category": {
    "1": 500.0,
    "2": 300.0
  },
  "total_real_sales_by_seller": {
    "1": 600.0,
    "2": 400.0
  },
  "real_sales": {
    "[1, 1]": 300.0,
    "[1, 2]": 200.0,
    "[2, 1]": 200.0,
    "[2, 2]": 100.0
  },
  "real_sales_without_item_category": {
    "1": 100.0,
    "2": 100.0
  },
  "item_categories": [
    {
      "id": 1,
      "name": "Categoría de Ítem Ejemplo A"
    },
    {
      "id": 2,
      "name": "Categoría de Ítem Ejemplo B"
    }
  ],
  "sellers": [
    {
      "id": 1,
      "name": "Vendedor Ejemplo A"
    },
    {
      "id": 2,
      "name": "Vendedor Ejemplo B"
    }
  ]
}
```

En donde las llaves de `real_sales` son `[vendedor_id, categoría_de_ítem_id]`, y `real_sales_without_item_category` contiene las ventas por vendedor de ítems sin categoría asignada.
