---
title: "Ventas Mensuales por Punto de Venta y Categoría de Cliente"
sidebar_label: "Ventas Mensuales por Punto de Venta y Categoría de Cliente"
sidebar_position: 18
---

Si maneja varios puntos de venta, conviene saber qué categoría de clientes compra más en cada uno. Esta matriz le cruza los dos datos en segundos, ideal para comparar sucursales y planificar inventario o promociones.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ventas Mensuales por Punto de Venta y Categoría de Cliente".

## API (llamadas desde sistemas externos)

### Ventas mensuales por punto de venta y categoría de cliente

Se puede obtener la matriz de ventas mensuales para el mes indicado por `year` y `month` (números enteros). Los parámetros `include_vat` y `include_credit_notes` aceptan `1` o `0`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/monthly_sales_by_point_of_sale_and_client_category.json?year=2026&month=8&include_vat=1&include_credit_notes=1
```

Esto devolverá un JSON similar a este:

```json
{
  "total_invoiced": 12000.0,
  "total_credit_notes": 500.0,
  "total_real_sales_without_payee_category": 1000.0,
  "total_real_sales_by_payee_category": {
    "1": 6500.0,
    "2": 4500.0
  },
  "real_sales": {
    "[1, 1]": 4000.0,
    "[1, 2]": 2500.0,
    "[2, 1]": 2500.0,
    "[2, 2]": 2000.0
  },
  "real_sales_without_payee_category": {
    "1": 600.0,
    "2": 400.0
  },
  "payee_categories": [
    {
      "id": 1,
      "name": "Categoría de Cliente Ejemplo A"
    },
    {
      "id": 2,
      "name": "Categoría de Cliente Ejemplo B"
    }
  ],
  "points_of_sale": [
    {
      "id": 1,
      "name": "Punto de Venta Ejemplo A"
    },
    {
      "id": 2,
      "name": "Punto de Venta Ejemplo B"
    }
  ]
}
```

En donde las llaves de `real_sales` son `[punto_de_venta_id, categoría_de_cliente_id]`, y `real_sales_without_payee_category` contiene las ventas por punto de venta de clientes sin categoría asignada.
