---
title: "Movimientos de los productos"
sidebar_label: "Movimientos de los productos"
sidebar_position: 5
---

Cuando las existencias no cuadran, la pregunta del momento es: ¿por dónde pasó este producto? Los movimientos le cuentan la historia completa de su mercadería: qué entró, qué salió y cuánto quedó después de cada operación, como un extracto bancario de la bodega. Si un cliente reclama una entrega o usted necesita reconciliar un faltante, aquí encontrará la respuesta. Existen dos formas de ver los movimientos en Zauru, por bodega y en todas las bodegas, y ambas se explican en este tutorial.

## Movimientos de los productos por bodega

La forma de ver los movimientos de sus productos por bodega es la siguiente:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la pestaña "Todas las bodegas".
4. Click sobre la existencia del producto en la fila de la bodega que quiere ver.

![imagen1](/img/inventarios/inventarios-movimientos-de-los-productos-1.png)

Le aparecerá en los detalles de la existencia el nombre de la agencia, el nombre del producto y en la parte inferior podrá ver los movimientos de ese producto que pasaron por esta bodega.

![imagen2](/img/inventarios/inventarios-movimientos-de-los-productos-2.jpg)

La forma de ver los movimientos de los productos es de abajo hacia arriba, las existencias se ven como se muestra en las flechas. En el ejemplo se puede ver que entran 8, luego entran 15 y hay disponible 23, luego entran 2 y hay disponibles 25.

![imagen3](/img/inventarios/inventarios-movimientos-de-los-productos-3.jpg)

Cada movimiento muestra:
- **Referencia del envío**: Identificador de la reservación o entrega.
- **Fecha**: Fecha en que se realizó el movimiento.
- **Cantidad entrada/salida**: Cuánto producto entró o salió.
- **Saldo acumulado**: Cantidad disponible después de cada movimiento, calculado cronológicamente.

## Movimientos del producto en todas las bodegas

La forma de ver los movimientos de un producto en todas las bodegas es la siguiente:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la pestaña "Todas las bodegas".
4. Click sobre el nombre del producto que desea ver.

![imagen4](/img/inventarios/inventarios-movimientos-de-los-productos-4.jpg)

Le aparecerán los detalles de las existencias, y en la parte inferior podrá ver todos los movimientos que hubieron de este producto en todas las bodegas.

![imagen5](/img/inventarios/inventarios-movimientos-de-los-productos-5.jpg)

En esta vista podrá ver:
- Las existencias actuales del producto desglosadas por bodega (disponible, entrante, saliente).
- El historial completo de envíos que incluyen este producto, indicando bodega origen, bodega destino, cantidades y fechas.

## Movimientos de números de serie

Para productos con números de serie, puede consultar los movimientos de un ítem identificable en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Buscar el número de serie o el ítem.
4. Seleccionar la opción "Movimientos del ítem en agencia".

Esto mostrará el historial de movimientos del ítem en la bodega seleccionada, incluyendo los números de serie específicos que entraron y salieron.

## Movimientos de lotes

Para productos que manejan lotes, puede ver el detalle de movimientos de un lote específico en una bodega:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Buscar el lote deseado.
4. Hacer clic sobre la cantidad en la bodega que desea revisar.

Esto mostrará el historial de envíos que afectaron ese lote en esa bodega, con el saldo acumulado después de cada movimiento.

Con el historial de movimientos a la mano, puede rastrear cualquier producto desde que entró hasta donde está ahora, bodega por bodega. Ese rastro es su mejor aliado para explicar diferencias y responder reclamos con datos en la mano. Cuando encuentre una inconsistencia, el paso natural es corregirla con una auditoría de inventario.

## API (llamadas desde sistemas externos)

### Ver la existencia de un producto en una bodega

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
  "id": 1,
  "entity_id": 1,
  "item_id": 2,
  "agency_id": 1,
  "available": "25.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "reorder_point": "30.000000",
  "economic_order_quantity": "50.000000",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000"
}
```

### Movimientos de un producto en una bodega

Devuelve los envíos que afectaron la existencia del producto en la bodega, con el saldo acumulado después de cada movimiento. El `id` en la URL corresponde al id de la existencia (stock).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40,
    "search": { "value": "" },
    "order": { "0": { "column": 0, "dir": "desc" } }
  }' \
  https://app.zauru.com/inventories/stocks/1/datatables_show.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 2,
  "recordsFiltered": 2,
  "data": [
    {
      "zid": "1",
      "id": "RES-001",
      "ref": "Entrega a cliente",
      "nt": false,
      "pd": "2026-08-01 10:00",
      "d": "2026-08-01",
      "ads": "Bodega Central",
      "in": "",
      "out": "8",
      "a": "23",
      "o": "0",
      "i": "0",
      "ra": "",
      "DT_RowId": "inventories-stock-detail-1"
    },
    {
      "zid": "2",
      "id": "RES-002",
      "ref": "Reabastecimiento",
      "nt": false,
      "pd": "2026-08-01 12:00",
      "d": "2026-08-01",
      "ads": "Bodega Central",
      "in": "15",
      "out": "",
      "a": "25",
      "o": "0",
      "i": "0",
      "ra": "",
      "DT_RowId": "inventories-stock-detail-2"
    }
  ]
}
```

### Existencias del producto en todas las bodegas

Devuelve el acumulado disponible, entrante y saliente del producto (llaves `available`, `incoming` y `outgoing`) y una llave por cada bodega con el registro de existencia. El `id` en la URL corresponde al id del producto.

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
  "available": 100,
  "outgoing": 1,
  "incoming": 10,
  "1": {
    "id": 1,
    "entity_id": 1,
    "item_id": 1,
    "agency_id": 1,
    "available": "33.000000",
    "incoming": "0.000000",
    "outgoing": "1.000000",
    "reorder_point": "30.000000",
    "economic_order_quantity": "50.000000"
  },
  "2": {
    "id": 2,
    "entity_id": 1,
    "item_id": 1,
    "agency_id": 2,
    "available": "67.000000",
    "incoming": "10.000000",
    "outgoing": "0.000000",
    "reorder_point": "0.000000",
    "economic_order_quantity": "0.000000"
  }
}
```

### Movimientos del producto en todas las bodegas

Devuelve todos los envíos que incluyen el producto, indicando bodega origen, bodega destino, cantidades y fechas. El `id` en la URL corresponde al id del producto.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40,
    "search": { "value": "" },
    "order": { "0": { "column": 0, "dir": "desc" } }
  }' \
  https://app.zauru.com/inventories/stocks/1/datatables_item.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 2,
  "recordsFiltered": 2,
  "data": [
    {
      "zid": "1",
      "id_number": "RES-001",
      "reference": "Entrega a cliente",
      "needs_transport": false,
      "planned_delivery": "2026-08-01 10:00",
      "delivered_at": "01/08/2026",
      "agency_from": "Bodega Central",
      "agency_to": "Zona 8",
      "income": false,
      "items_booked": "8",
      "items_delivered": "8",
      "memo": "",
      "record_actions": "",
      "DT_RowId": "inventories-stock-shipment-1"
    },
    {
      "zid": "2",
      "id_number": "RES-002",
      "reference": "Reabastecimiento",
      "needs_transport": false,
      "planned_delivery": "2026-08-01 12:00",
      "delivered_at": "01/08/2026",
      "agency_from": "Zona 8",
      "agency_to": "Bodega Central",
      "income": true,
      "items_booked": "15",
      "items_delivered": "15",
      "memo": "",
      "record_actions": "",
      "DT_RowId": "inventories-stock-shipment-2"
    }
  ]
}
```

### Movimientos de un lote en una bodega

Devuelve la existencia del lote en la bodega junto con los envíos que lo afectaron. El `id` en la URL corresponde al id de la existencia del lote (lot stock).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/lot_stocks/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "lot_id": 1,
  "entity_id": 1,
  "agency_id": 1,
  "available": "8.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "shipments": [
    {
      "id": 1,
      "zid": 1,
      "id_number": "RES-001",
      "reference": "Entrega de lote",
      "agency_from_id": 1,
      "agency_to_id": 2,
      "delivered_at": "2026-08-01T10:00:00.000Z",
      "movements": [
        {
          "id": 1,
          "shipment_id": 1,
          "item_id": 2,
          "lot_id": 1,
          "booked_quantity": "8.0",
          "delivered_quantity": "8.0"
        }
      ]
    },
    {
      "id": 2,
      "zid": 2,
      "id_number": "RES-002",
      "reference": "Reabastecimiento de lote",
      "agency_from_id": 2,
      "agency_to_id": 1,
      "delivered_at": "2026-08-01T12:00:00.000Z",
      "movements": [
        {
          "id": 2,
          "shipment_id": 2,
          "item_id": 2,
          "lot_id": 1,
          "booked_quantity": "15.0",
          "delivered_quantity": "15.0"
        }
      ]
    }
  ]
}
```
