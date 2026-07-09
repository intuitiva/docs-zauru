---
title: "Ordenes de compra"
sidebar_label: "Ordenes de compra"
sidebar_position: 2
format: md
---

# Ordenes de compra

Este tutorial esta basado en hacer una orden de compra de mercadería. Existen dos tipos de ordenes de compra:

1. Orden de compra local
2. Orden de compra al exterior (Importación)

Los dos tipos de orden de compra se ejemplificaran en este tutorial.

## Crear una orden de compra local

Los pasos para hacer una orden de compra local son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccione “Nueva Orden de Compra”.

![imagen1](/img/compras/ordenes-de-compra-1.png)


Le aparecerán las opciones para crear una nueva orden de compra. Los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre la orden de compra para poder ubicarla fácilmente en el listado de ordenes de compra.

b. Si no pago impuestos al momento de hacer la compra o no desea registrar los impuestos de esta compra quite el cheque de “Sujeto a Impuestos”.

c. Si le dieron factura al hacer la compra, coloque aquí el numero de factura.

d. Coloque la fecha en que se realizo la compra.

e. Coloque la fecha en que espera que se reciba la compra.

f. Coloque el término de pago acordado con su proveedor, ya sea contado o crédito.

g.  Coloque el nombre del proveedor, si es un nuevo proveedor deberá agregarlo antes de continuar.

h. Coloque el origen de la mercadería si lo conoce.

i. Coloque el empleado que hizo la compra.

j. Coloque en que moneda se hizo la compra.

k. Coloque el producto que compro y la cantidad ordenada, para agregar otro producto presione “+”.

![imagen2](/img/compras/ordenes-de-compra-2.jpg)

Cuando termine de colocar los productos comprados, la cantidad ordenada y el costo unitario, presione “Crear orden de compra”.

![imagen3](/img/compras/ordenes-de-compra-3.jpg)

Le aparecerá un mensaje de éxito en la pantalla, antes de recibir la orden de compra tendrá que autorizarla como se muestra en la imagen.

![imagen4](/img/compras/ordenes-de-compra-4.jpg)

Le aparecerá un mensaje en la pantalla notificándole que se autorizo la orden de compra, ahora deberá recibirla en su bodega para después poder venderla.

Consulte el tutorial “Recibir una orden de compra” para ver mas detalles sobre como recibir una orden de compra.

![imagen5](/img/compras/ordenes-de-compra-5.jpg)



## Crear una orden de compra de importación

En este ejemplo se mostrara como realizar una importación de producto por medio de una orden de compra. Los pasos son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Nueva Orden de Compra”.

![imagen6](/img/compras/ordenes-de-compra-6.jpg)


Le aparecerán las opciones para crear una nueva orden de compra, los campos que debe llenar son los siguientes:

a. Coloque una breve referencia de la compra que se esta haciendo, en este ejemplo colocamos Importación de Mercadería

b. Cuando es una importación, deberá remover el cheque de “Sujeto a Impuesto” para que Zauru no calcule automáticamente los impuestos, mas adelante usted deberá registrar los impuestos como Cargos y los Aranceles.

c. Si le brindaron una factura o recibo la puede colocar aquí.

d. Coloque la fecha en que se hizo la compra.

e. Coloque la fecha esperada de despacho de la mercadería que compro.

f. Seleccione el termino de pago acordado con su proveedor, crédito o contado.

g. Coloque el nombre del proveedor existente, o agregue uno nuevo.

h. Coloque el origen de la mercaría, o la locación de la bodega del proveedor.

i. Seleccione el empleado encargado de hacer la compra.

j. Seleccione la moneda en que se realizó la compra.

k. Seleccione el botón de “Importar” para especificar que esta compra es una importación.

l. Seleccione las clausulas de comercio internacional (INCOTERM) con las que se importa su mercadería, en este caso seleccionamos FOB(Free on Board) que es el termino más común de importación, que se refiere a una importación en barco de carga.

m. Coloque el lugar de entrega de sus productos. En el ejemplo colocamos Puerto Quetzal.

n. Coloque el tipo de transporte en el que importa su mercadería.

o. Coloque el nombre del intermediario (Forwarder) que hará el manejo de su mercadería.

p. Seleccione los productos que va importar, la cantidad y el costo unitario original del producto, sin incluir cargos o aranceles.

![imagen7](/img/compras/ordenes-de-compra-7.png)

Seleccione el “+” para agregar una nueva fila de producto, cuando termine de colocar los productos, cantidad y costo original, seleccione “Crear orden de compra”.

![imagen8](/img/compras/ordenes-de-compra-8.jpg)

Le aparecerá un mensaje de éxito en la pantalla notificándole que la orden fue creada exitosamente. Ahora deberá autorizarla y luego podrá agregar cargos y aranceles a la orden de compra, que serán repartidos ponderadamente en el costo promedio de sus productos.

![imagen9](/img/compras/ordenes-de-compra-9.jpg)

Le aparecerá un mensaje notificándole que se autorizo la orden de compra. Para mas detalles sobre como agregar cargos y aranceles a una orden de compra refiérase al tutorial de “Cargos adicionales a una orden de compra” o a “Aranceles”.

![imagen10](/img/compras/ordenes-de-compra-10.jpg)

## API (llamadas desde sistemas externos)

### Obtener datos para una orden de compra nueva
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X GET https://app.zauru.com/purchases/purchase_orders/new.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id_number": "",
    "total": null,
    ...
  },
  "items_grouped":{
    "CAT1":[["item1", 1], ["item2", 2], ...],
    ...
  },
  "tags":[
    ["Proyecto 1", 1], ...
  ],
  "accounts_grouped": {
    "Activos":[["activo A (GTQ)",1], ["activo B (GTQ)",2], ...],
    "Pasivos":[["Pasivo A (GTQ)",3], ["Pasivo B (GTQ)",4], ...],
    "Gastos":[["Gasto1 (GTQ)",5], ["Gasto2 (GTQ)",6], ...],
    "Ingresos":[["ventas contado (GTQ)",7], ["ventas credito (GTQ)",8], ...]
  },
  "purchasers":[
    {
      "id":1,
      "name":"Comprador 1"
      ...
    },
    ...
  ],
  "agencies":[
    {
      "id":1,
      "name":"Agencia 1",
      ...
    },
    ...
  ],
  "charge_terms":[
    {
      "id":1,
      "name":"Termino de Pago 1",
      ...
    },
    ...
  ]
}
```

### Crear nueva orden de compra de items
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"purchase_order":{"issue_date":"2018-10-27", "shipping_date":"2018-10-27", "purchaser_id":"1", "currency_id":"1","agency_id": "1","taxable":"1","payee_id":"1","charge_term_id":"1","purchase_order_details_attributes":{"0":{"item_id":"1", "booked_quantity":"2", "unit_cost":"100"}, "1":{"item_id":"2", "booked_quantity":"10", "unit_cost":"200"}}}}' https://app.zauru.com/purchases/purchase_orders.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "id":1,
  "authorized":false,
  "id_number":"OC-00001",
  "agency_id":1,
  "total":"210.0",
  "zid":1,
  "purchase_order_details": [
    {
      "id":100,
      "item_id":1,
      "unit_cost":"100.0",
      "booked_quantity":2
    },
    {
      "id":101,
      "item_id":2,
      "unit_cost":"200.0",
      "booked_quantity":10
    }
  ]
}
```

### Crear nueva orden de compra de gastos
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"purchase_order":{"issue_date":"2018-10-27", "shipping_date":"2018-10-27", "purchaser_id":"1", "currency_id":"1","agency_id": "1","taxable":"1","payee_id":"1","charge_term_id":"1","purchase_order_account_details_attributes":{"0":{"account_id":"1", "cost":"100", "reference": "gasto recurrente"}, "1":{"account_id":"2", "cost":"200"}}}}' https://app.zauru.com/purchases/purchase_orders.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "id":1,
  "authorized":false,
  "id_number":"OC-00002",
  "agency_id":1,
  "total":"300.0",
  "zid":2,
  "purchase_order_account_details": [
    {
      "id":100,
      "account_id":1,
      "cost":"100.0",
      "referece":"gasto recurrente"
    },
    {
      "id":101,
      "account_id":2,
      "cost":"200.0"
    }
  ]
}
```

### Ver detalles de una Orden de Compra
El 1 al final de la URL es el ID de la orden de compra
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X GET https://app.zauru.com/purchases/purchase_orders/1.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "id":1,
  "authorized":false,
  "id_number":"OC-00001",
  "agency_id":1,
  "charge_term_id": 1,
  "payee_id": 1,
  "total":"210.0",
  "zid":1,
  "agency": {
    "id": 1,
    "address_line_1": "1 calle 1-11 zona 1",
    "name": "Bodega de Principal"
  },
  "charge_term": {
    "id": 1,
    "name": "contado"
  },
  "payee": {
    "id": 1,
    "name": "Proveedor Especial"
  },
  "purchase_order_details": [
    {
      "id":100,
      "item_id":1,
      "unit_cost":"100.0",
      "booked_quantity":2,
      "item": {
        "id": 1,
        "name": "producto estrella 2",
        "description": "Producto clave para que el cliente use"
      }
    },
    {
      "id":101,
      "item_id":2,
      "unit_cost":"200.0",
      "booked_quantity":10,
      "item": {
        "id": 1,
        "name": "producto estrella 2",
        "description": "Producto clave para que el cliente del cliente use"
      }
    }
  ]
}
```

### Obtener datos para editar una orden de compra
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X GET https://app.zauru.com/purchases/purchase_orders/1/edit.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id": 1,
    "id_number": "OC-1212",
    "total": 125.58,
    ...
  },
  "items_grouped":{
    "CAT1":[["item1", 1], ["item2", 2], ...],
    ...
  },
  "tags":[
    ["Proyecto 1", 1], ...
  ],
  "accounts_grouped": {
    "Activos":[["activo A (GTQ)",1], ["activo B (GTQ)",2], ...],
    "Pasivos":[["Pasivo A (GTQ)",3], ["Pasivo B (GTQ)",4], ...],
    "Gastos":[["Gasto1 (GTQ)",5], ["Gasto2 (GTQ)",6], ...],
    "Ingresos":[["ventas contado (GTQ)",7], ["ventas credito (GTQ)",8], ...]
  },
  "purchasers":[
    {
      "id":1,
      "name":"Comprador 1"
      ...
    },
    ...
  ],
  "agencies":[
    {
      "id":1,
      "name":"Agencia 1",
      ...
    },
    ...
  ],
  "charge_terms":[
    {
      "id":1,
      "name":"Termino de Pago 1",
      ...
    },
    ...
  ],
  "vendor_info": "<V122> 3223-K | VIP ~ prov estrella, S.A. # 2334-2334"
}
```

### Actualizar la orden de compra
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X PUT -d '{"purchase_order":{"issue_date":"2018-10-27", "shipping_date":"2018-10-27", "purchaser_id":"1", "currency_id":"1","agency_id": "1","taxable":"1","payee_id":"1","charge_term_id":"1","purchase_order_details_attributes":{"0":{"item_id":"1", "booked_quantity":"2", "unit_cost":"100"}, "1":{"item_id":"2", "booked_quantity":"10", "unit_cost":"200"}}}}' https://app.zauru.com/purchases/purchase_orders/1.json
```
Esta llamada devolverá un JSON similar a este:
```json
{
  "id":1,
  "authorized":false,
  "id_number":"OC-00001",
  "agency_id":1,
  "total":"210.0",
  "zid":1,
  "purchase_order_details": [
    {
      "id":100,
      "item_id":1,
      "unit_cost":"100.0",
      "booked_quantity":2
    },
    {
      "id":101,
      "item_id":2,
      "unit_cost":"200.0",
      "booked_quantity":10
    }
  ]
}
```

### eliminar ordenes de compra
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X DELETE http://zauru.herokuapp.com/purchases/purchase_orders/1.json
```
