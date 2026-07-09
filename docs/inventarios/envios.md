---
title: "Envíos"
sidebar_label: "Envíos"
sidebar_position: 3
format: md
---

# Envíos

Este tutorial esta basado en crear envíos y el flujo de trabajo que se requiere para despacharlos (opcional), entregarlos y devolverlos (opcional).

## Crear nuevo envío (reservación)
Los pasos para crear una nueva reservación de producto son los siguientes:

1. Ir a “Inventarios”.
2. Seleccionar “Reservaciones”.
3. Seleccionar “Nueva Reservación”.

![imagen1](/img/inventarios/envios-1.jpg)

Le aparecerán las opciones para crear una nueva reservaciones, en este ejemplo vamos a hacer una reservación normal, que no necesita transporte. Los campos que debe llenar son los siguientes:

a. Coloque una referencia para que sea mas fácil encontrar la reservación.

b. Coloque el empleado que solicita la reservación de producto.

c. Coloque la fecha de entrega estimada.

d. Seleccione desde que bodega se enviaran los productos, si no se refresca automáticamente su explorador, haga click en “Refrescar” a un lado de la bodega.

e. Seleccione la bodega de destino del producto reservado.

f. Aquí deberá colocar todos los productos que se están reservando y la cantidad, puede presionar “+” para agregar una nueva fila, “+2” para agregar dos filas o si la reservación es muy grande, “+5” para agregar 5 filas.

g. Presione “Crear envío”.

![imagen2](/img/inventarios/envios-2.jpg)

## Entregar un envío (entregas)

Le aparecerá un mensaje notificando que se creo el envío. Ahora el siguiente paso es entregarlo, presione el botón “Entregar” para entregar su reservación.

![imagen3](/img/inventarios/envios-3.jpg)

Le aparecerá un mensaje notificando que se despacho el envío exitosamente, y ahora podrá ver que su envío en la pestaña de “Entregas”.

![imagen4](/img/inventarios/envios-4.jpg)

## Devolver un envío entregado (anular)

Una vez el envío fue entregada ya no se puede editar, si hubo algún error en el envío y ya se entrego, la única forma de arreglarlo es devolverlo y hacer un envío nuevo (reservación).

Al devolver un envío se desaparecen las existencias entregadas y se regresan todos los productos a la bodega origen.

Los pasos para devolver un envío entregado son los siguientes:

![imagen5](/img/inventarios/envios-5.jpg)

## Despachar un envío (tránsitos)

Cuando se crea un envío que necesita ser transportado se agrega un paso al proceso de entregar los productos.

> SIN TRANSPORTE
> Reservación (envío preliminar) → Entrega (envío entregado)

> CON TRANSPORTE
> Reservación (envío preliminar) → Tránsitos (envío en despachado pero no entregado) → Entrega (envío entregado)

Después de despachar la el envío, esta pasa a tránsito, y en transito alguien la tiene que recibir y colocar si realmente recibió lo que se había reservado. Podrá ver esto mas claro en el siguiente ejemplo.

Los pasos para hacer una reservación que necesite transporte son los siguientes:

1. Ir a “Inventarios”.
2. Seleccionar “Reservaciones”.
3. Seleccionar “Nueva Reservación”.

![imagen6](/img/inventarios/envios-6.png)

Los campos que debe llenar son los mimos que en una reservación normal pero con las siguientes diferencias:

a. Seleccione el empleado que se encargara del transporte.

b. Seleccione el cuadro de “Necesita Transporte”.

c. Coloque la fecha de despacho estimado.

d. Seleccione “Crear envío”

![imagen7](/img/inventarios/envios-7.jpg)

Le aparecerá un mensaje notificándole que la transacción fue creada exitosamente.  Para sacar el producto de la bodega presione “Despachar”, esto hará que la reservación pase a transito y tendrá que ser recibida.

![imagen8](/img/inventarios/envios-8.jpg)

La reservación ahora paso a Tránsitos, para recibirla presione el icono del camión.

![imagen9](/img/inventarios/envios-9.jpg)

Deberá colocar la cantidad de producto que en realidad recibió. Si recibió menos, Zauru automáticamente hara una reservación para solicitar el producto que hizo falta, si recibió más, Zauru automáticamente hara una reservación para devolver el producto que se recibió de mas.

Cuando termine de colocar la cantidad que recibió, presione “Actualizar envío.

![imagen10](/img/inventarios/envios-10.jpg)

Le aparecerá una mensaje notificando que se entrego la reservación. Ahora tendrá los productos reservados en la bodega de destino.

![imagen11](/img/inventarios/envios-11.jpg)

## API (llamadas desde sistemas externos)

### Crear una envío preliminar (reservación)
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"shipment":{"reference":"Referencia para poder encontrar este envío en un futuro", "booker_id":"1", "transporter_id":"", "needs_transport":"0", "planned_shipping":"", "planned_delivery":"2018-08-10", "agency_from_id":"2", "agency_to_id":"1", "movements_attributes":{"0":{"item_code":"xyz", "item_id":"2", "booked_quantity":"100"}}, "tag_ids":[""], "memo":"Alguna anotación"}"' https://app.zauru.com/inventories/bookings.json
```

### Entregar una envío preliminar (reservación)
Este caso funciona para convertir una __reservación SIN transporte__ a un __envío entregado__. No funciona para convertir un __envío en tránsito (con transporte)__ a un __envío entregado__ ni para convertir una __reservación CON transporte__ a un __envío entregado__. Y tampoco funciona para convertir una __reservación CON transporte__ a un __envío en tránsito__

Notar que lo que se reservó en el envío es lo que se va a entregar, no se puede escoger cuanto realmente se entregó.

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" https://app.zauru.com/inventories/bookings/1/deliver.json
```

### Despachar un envío preliminar (reservación) CON transporte
Este caso SOLO funciona para convertir una __reservación CON transporte__ a un __envío en tránsito__

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" https://app.zauru.com/inventories/bookings/1/ship.json
```

### Entregar un envío (tránsito)
Este caso SOLO funciona para convertir un __envío en tránsito__ en una __envío entregado__

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X PUT -d '{"shipment":{"movements_attributes":{"0":{"delivered_quantity":99, "id":"1"}}, "tag_ids":[""], "memo": "parece que no vinieron los 100 productos solicitados", "transporter_id":1}"' https://app.zauru.com/inventories/transits/1.json
```

### Devolver una entrega (envío entregado)
Convertirá el envío en un envío devuelto y regresará las existencias a donde estaban originalmente (la agencia origen).

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X DELETE https://app.zauru.com/inventories/deliveries/1.json
```
