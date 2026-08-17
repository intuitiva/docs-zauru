---
title: "Costos totales consolidados (Costo Promedio Ponderado)"
sidebar_label: "Costos totales consolidados (Costo Promedio Ponderado)"
sidebar_position: 12
---

¿Compra el mismo producto a precios distintos a lo largo del año y quiere saber cuánto le cuesta en promedio? Cada vez que usted realiza una compra, Zauru registra la cantidad y el costo al que compró, y con esa información calcula el costo promedio ponderado de cada producto. Este tutorial le mostrará cómo consultar ese promedio cuando necesite saber el costo real de su inventario, por ejemplo al fijar precios de venta o al preparar un reporte para su contador.

Los pasos para ver el costo promedio ponderado de sus productos son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Costos Totales”.
3. Seleccionar “Verificar” (El Ojo) en el producto que desea ver.

![imagen1](/img/compras/costos-totales-consolidados-costo-promedio-ponderado-1.jpg)


Le aparecerán los detalles del costo total, en donde podrá encontrar el registro de todas las compras que se han hecho de este producto, la cantidad, el costo unitario y el costo por cantidad al que se compro.

En la parte inferior del reporte podrá encontrar el Promedio que es el costo promedio ponderado según las compras que ha hecho de este producto.

![imagen2](/img/compras/costos-totales-consolidados-costo-promedio-ponderado-2.jpg)

Con el costo promedio ponderado a la vista, usted ya sabe cuánto le cuesta realmente cada producto que tiene en bodega, aunque los precios de compra hayan subido o bajado entre pedido y pedido. Esa es la cifra que Zauru utiliza para valorar su inventario y calcular el margen de ganancia de cada venta.

## API (llamadas desde sistemas externos)

### Ver los costos registrados de un producto
El 1 al final de la URL es el ID del producto (item). Devuelve el registro de todas las compras del producto con su costo y cantidad.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/computed_costs/1.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "purchase_order_detail_id": null,
    "item_id": 1,
    "computed_cost": "90.00000",
    "quantity": "10.000000",
    "date": "2026-08-01",
    "entity_id": 1,
    "average_cost": null,
    "fifo_cost": null,
    "lifo_cost": null,
    "stock_after_purchase": 10
  },
  {
    "id": 2,
    "purchase_order_detail_id": 1,
    "item_id": 1,
    "computed_cost": "100.00000",
    "quantity": "5.000000",
    "date": "2026-08-02",
    "entity_id": 1,
    "average_cost": "93.33333",
    "fifo_cost": null,
    "lifo_cost": null,
    "stock_after_purchase": 15
  }
]
```

### Ver el calculo del costo promedio ponderado
El 1 al final de la URL es el ID del producto. Devuelve los costos registrados en orden de fecha para calcular el promedio ponderado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/computed_costs/1/average_calculation.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "item_id": 1,
    "computed_cost": "90.00000",
    "quantity": "10.000000",
    "date": "2026-08-01",
    "entity_id": 1
  },
  {
    "id": 2,
    "item_id": 1,
    "computed_cost": "100.00000",
    "quantity": "5.000000",
    "date": "2026-08-02",
    "entity_id": 1
  }
]
```

### Registrar un costo inicial de un producto
Util para registrar el costo inicial de un producto que aun no tiene compras.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "computed_cost": {
      "item_id": "1",
      "computed_cost": "90.00",
      "quantity": "10",
      "date": "2026-08-01"
    }
  }' \
  https://app.zauru.com/purchases/computed_costs.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "purchase_order_detail_id": null,
  "item_id": 1,
  "computed_cost": "90.00000",
  "quantity": "10.000000",
  "date": "2026-08-01",
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00Z",
  "updated_at": "2026-08-01T10:00:00Z"
}
```

### Actualizar un costo registrado
El 1 al final de la URL es el ID del costo registrado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "computed_cost": {
      "computed_cost": "95.00",
      "quantity": "10",
      "date": "2026-08-01",
      "item_id": "1"
    }
  }' \
  https://app.zauru.com/purchases/computed_costs/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Eliminar un costo registrado
El 1 al final de la URL es el ID del costo registrado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/computed_costs/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
