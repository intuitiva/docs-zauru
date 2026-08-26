---
title: "Existencias"
sidebar_label: "Existencias"
sidebar_position: 2
---

Antes de vender, comprar o trasladar, conviene saber cuánto tiene y dónde. Si un cliente pregunta si hay producto en la tienda de la Zona 8, o si la bodega central necesita reabastecimiento, la respuesta está en las existencias. Zauru le muestra dos vistas complementarias: las existencias de una bodega en particular y las de todas las bodegas juntas. En ambas podrá ver cuánto está disponible, cuánto está por ingresar y cuánto está reservado para salir.

## Existencias por bodega
Los pasos para ver las existencias de sus productos por bodega son los siguientes:

1. Ir a “Inventarios”.
2. Seleccionar “Existencias”.
3. Seleccionar la bodega que quiere ver y presionar cambiar.


Podra ver cuanto tiene disponible, cuanto esta por ingresar y cuanto esta reservado para egresar.

![imagen1](/img/inventarios/inventarios-existencias-1.jpg)


## Existencias de todas las bodegas

Los pasos para ver las existencias de todas las bodegas son:

1. Ir a “Inventarios”.
2. Seleccionar “Existencias”.
3. Seleccionar todas las bodegas.


Aquí podrá ver el listado de existencias de cada producto por bodega.

![imagen2](/img/inventarios/inventarios-existencias-2.jpg)


Ya sabe dónde mirar para responder cuánto tiene y en qué bodega. Con esa claridad puede pasar a la acción: reabastecer los productos que van bajando, reservar mercadería para un cliente o corregir las cantidades que no cuadran. Si quiere saber por dónde pasó un producto, el tutorial de movimientos le muestra el historial completo de cada bodega.

### API (llamadas desde sistemas externos)

#### Obtener todas las existencias en una bodega
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks.json?warehouse=1
```

Esto devolverá un JSON similar a este:
```json
[
   {
	"item_id": 1,
	"item_name":"Producto",
	"item_code":"P1",
	"stock_id": 1,
	"stock_available":100,
	"stock_incoming":10,
	"stock_outgoing":1,
	"stock_physical":99,
	"stock_reorder_point":110,
	"stock_updated_at":"2019-11-25T22:43:19Z"
   },
   {…},
   …
]
```

#### Obtener las existencias de todas las bodegas de un producto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/1/item.json
```

Esto devolverá un JSON similar a este:
```json
{
  "available":100,
  "outgoing":0,
  "incoming":0,
  "1":{"agency_id": 1,"available":33},
  "2":{"agency_id": 2,"available":33},
  "3":{"agency_id": 3,"available":34}
}
```

#### Obtener las existencias de todas las bodegas
Devuelve un hash con las existencias disponibles de cada producto por bodega, donde la llave es `[agency_id, item_id]`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/all_warehouses.json
```

Esto devolverá un JSON similar a este:
```json
{
  "[25, 157]": {
    "available": "0.0",
    "id": 1
  },
  "[25, 308438]": {
    "available": "1.0",
    "id": 2
  }
}
```

#### Obtener el detalle de una existencia
Devuelve el registro de existencia (stock) de un producto en una bodega específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5222027",
  "entity_id": "1303",
  "item_id": "938505",
  "agency_id": "8248",
  "available": "-18.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "reorder_point": "0.000000",
  "economic_order_quantity": "0.000000",
  "created_at": "2026-04-10 13:56:54.755088",
  "updated_at": "2026-06-25 15:13:09.943073"
}
```

#### Actualizar el punto de re orden de una existencia
Actualiza el punto de re orden y la cantidad económica de orden de una existencia específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "stock": {
      "reorder_point": 30,
      "economic_order_quantity": 50
    }
  }' \
  https://app.zauru.com/inventories/stocks/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5222027",
  "entity_id": "1303",
  "item_id": "938505",
  "agency_id": "8248",
  "available": "-18.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "reorder_point": "0.000000",
  "economic_order_quantity": "0.000000",
  "created_at": "2026-04-10 13:56:54.755088",
  "updated_at": "2026-06-25 15:13:09.943073"
}
```

#### Vaciar las existencias de una bodega
Elimina todas las existencias de una bodega. La operación se ejecuta de forma asíncrona en segundo plano. El `id` en la URL corresponde al identificador de la bodega (agency).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/stocks/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
