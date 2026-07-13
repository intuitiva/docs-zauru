---
title: "Existencias"
sidebar_label: "Existencias"
sidebar_position: 2
---

Este tutorial esta enfocado en ver las existencias de sus productos. Existen dos formas de ver las existencias:

1. Existencias por bodega.
2. Existencias de todas las bodegas.


Ambas formas se mostraran en este tutorial.

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
```JSON
[
   {
	"item_id":1,
	"item_name":"Producto",
	"item_code":"P1",
	"stock_id":1,
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
  "1":{"agency_id":1,"available":33},
  "2":{"agency_id":2,"available":33},
  "3":{"agency_id":3,"available":34}
}
