---
title: "Envíos"
sidebar_label: "Envíos"
sidebar_position: 3
---

Este tutorial esta basado en crear envíos y el flujo de trabajo que se requiere para despacharlos (opcional), entregarlos, devolverlos (opcional) y anularlos (opcional).

## Flujo de trabajo de un envío

El ciclo de vida de un envío en Zauru sigue los siguientes estados:

- **Reservación (Booked)**: Envío preliminar, los productos están reservados pero aún no se han movido.
- **Tránsito (Shipped)**: El envío fue despachado de la bodega origen pero aún no ha sido recibido en la bodega destino (solo para envíos con transporte).
- **Entrega (Delivered)**: El envío fue recibido en la bodega destino y las existencias se transfirieron.
- **Anulado (Voided)**: La reservación fue cancelada y las reservas se liberaron.
- **Devuelto (Returned)**: Un envío que ya había sido entregado fue revertido, regresando las existencias a la bodega origen.

### Flujo sin transporte
```
Reservación → Entrega
```

### Flujo con transporte
```
Reservación → Tránsito → Entrega
```

## Filtros en la vista de envíos

En la lista de envíos (Reservaciones, Tránsitos, Entregas), puede filtrar por:

- **Alcance (Scope)**: Filtre por tipo de movimiento:
  - **Ingresos**: Envíos que entran a las bodegas.
  - **Egresos**: Envíos que salen de las bodegas.
  - **Traslados**: Envíos entre bodegas.
  - **Todos**: Sin filtro de tipo.
- **Rango de fechas**: Filtre por fecha de entrega planificada (desde/hasta).
- **Bodega origen**: Filtre por la bodega desde donde salen los productos.
- **Bodega destino**: Filtre por la bodega hacia donde van los productos.
- **Etiquetas (Tags)**: Filtre por etiquetas asignadas a los envíos. También puede usar la nube de etiquetas para filtrar visualmente.

## Crear nuevo envío (reservación)

Los pasos para crear una nueva reservación de producto son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación".

![imagen1](/img/inventarios/envios-1.jpg)

Le aparecerán las opciones para crear una nueva reservación, en este ejemplo vamos a hacer una reservación normal, que no necesita transporte. Los campos que debe llenar son los siguientes:

a. Coloque una referencia para que sea mas fácil encontrar la reservación.

b. Coloque el empleado que solicita la reservación de producto.

c. Coloque la fecha de entrega estimada.

d. Seleccione desde que bodega se enviaran los productos, si no se refresca automáticamente su explorador, haga click en "Refrescar" a un lado de la bodega.

e. Seleccione la bodega de destino del producto reservado.

f. Aquí deberá colocar todos los productos que se están reservando y la cantidad, puede presionar "+" para agregar una nueva fila, "+2" para agregar dos filas o si la reservación es muy grande, "+5" para agregar 5 filas.

g. Presione "Crear envío".

![imagen2](/img/inventarios/envios-2.jpg)

### Crear reservación desde una solicitud de traslado

Si tiene una solicitud de traslado activa, puede crear una reservación directamente desde ella. Los productos y cantidades de la solicitud se precargarán automáticamente en el formulario de reservación.

### Crear reservación con números de serie

Para crear una reservación específicamente para productos con números de serie:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva reservación de #s de Serie".

Esto abrirá un formulario en dos pasos:
- **Paso 1**: Seleccione la bodega origen y los números de serie que desea mover.
- **Paso 2**: Complete los detalles de la reservación (referencia, fechas, transporte, etc.).

### Botones Vista Previa y Refrescar

El formulario de reservación incluye dos botones útiles:

- **Vista Previa**: Muestra una vista previa del envío sin crearlo, permitiéndole revisar los detalles antes de confirmar.
- **Refrescar**: Actualiza los datos del formulario, útil cuando cambia la bodega y necesita que se refresquen las opciones disponibles.

### Paquetes en reservaciones

Al crear una reservación, puede seleccionar paquetes (bundles) en lugar de productos individuales. Cuando selecciona un paquete, Zauru automáticamente lo desglosa en sus productos componentes con las cantidades correspondientes. Para seleccionar un paquete, busque el código del paquete que empieza con "b" seguido del ID (por ejemplo: "b123").

### Reservaciones con contrato, factura u orden de compra

Al crear una reservación, puede vincularla opcionalmente con:

- **Contrato**: Asocie el envío a un contrato existente.
- **Factura**: Vincule el envío a una factura.
- **Orden de compra**: Asocie el envío a una orden de compra.
- **Proveedor (Payee)**: Especifique el proveedor relacionado con el envío.

Estos campos pueden pre-llenarse desde la URL usando los parámetros:
- `c` para contrato
- `p` para proveedor
- `in` para factura
- `po` para orden de compra
- `f` para bodega origen
- `t` para bodega destino
- `i` para ítems
- `s` para números de serie

### Etiquetas (Tags) en envíos

Puede asignar etiquetas a los envíos para categorizarlos y filtrarlos posteriormente. Las etiquetas se pueden crear desde la administración del sistema y luego seleccionarlas al crear o editar un envío.

## Editar una reservación

Mientras un envío esté en estado de Reservación (Booked), puede editarlo:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación que desea editar.
4. Seleccionar "Editar".

Podrá modificar la referencia, fechas, transportista, productos, cantidades, etiquetas y notas. Una vez que el envío ha sido despachado o entregado, ya no se puede editar.

## Anular una reservación

Si una reservación ya no es necesaria, puede anularla (void):

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación que desea anular.
4. Seleccionar la opción de anular.

Al anular una reservación:
- Se liberan todas las reservas de productos.
- El envío pasa a la pestaña de "Anuladas" (Voided).
- Los envíos anulados no se pueden recuperar ni editar.

### Ver reservaciones anuladas

Para ver las reservaciones que han sido anuladas:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar la pestaña "Anuladas".

Aquí podrá ver el historial de todas las reservaciones que fueron canceladas.

## Imprimir un envío

Puede generar un documento imprimible de cualquier reservación:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación que desea imprimir.
4. Seleccionar "Imprimir".

El documento incluye todos los detalles del envío: referencia, fechas, productos, cantidades, bodegas origen y destino.

## Exportar movimientos de un envío

Puede exportar los movimientos de una reservación a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación cuyos movimientos desea exportar.
4. Seleccionar "Exportar movimientos".

Esto descargará un archivo XLS con el detalle de todos los productos y cantidades del envío.

## Entregar un envío (entregas)

Le aparecerá un mensaje notificando que se creo el envío. Ahora el siguiente paso es entregarlo, presione el botón "Entregar" para entregar su reservación.

![imagen3](/img/inventarios/envios-3.jpg)

Le aparecerá un mensaje notificando que se despacho el envío exitosamente, y ahora podrá ver que su envío en la pestaña de "Entregas".

![imagen4](/img/inventarios/envios-4.jpg)

### Editar una entrega

Una vez entregado el envío, puede editar ciertos campos de la entrega:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega que desea editar.
4. Seleccionar "Editar".

Podrá modificar:
- Referencia
- Transportista
- Notas (memo)
- Etiquetas (tags)
- Imagen del envío

### Imprimir una entrega

Al igual que con las reservaciones, puede imprimir una entrega:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega que desea imprimir.
4. Seleccionar "Imprimir".

## Devolver un envío entregado (anular)

Una vez el envío fue entregada ya no se puede editar, si hubo algún error en el envío y ya se entrego, la única forma de arreglarlo es devolverlo y hacer un envío nuevo (reservación).

Al devolver un envío se desaparecen las existencias entregadas y se regresan todos los productos a la bodega origen.

Los pasos para devolver un envío entregado son los siguientes:

![imagen5](/img/inventarios/envios-5.jpg)

### Ver entregas devueltas

Para ver las entregas que han sido devueltas:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Seleccionar la pestaña "Devueltas".

Aquí podrá ver el historial de todas las entregas que fueron devueltas.

## Documentos electrónicos para entregas

Zauru soporta la emisión de documentos fiscales electrónicos para las entregas en países como El Salvador (FEL) y República Dominicana (DGII).

### Emitir documento electrónico externo

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega para la cual desea emitir el documento electrónico.
4. Seleccionar "Emitir documento externo".

### Consultar respuesta certificada

Después de emitir un documento electrónico, puede consultar la respuesta certificada:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega.
4. Seleccionar "Respuesta certificada".

Esto mostrará el XML o JSON de la respuesta del sistema de facturación electrónica.

### Consultar respuesta certificada para anulación

Si necesita anular un documento electrónico:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega.
4. Seleccionar "Respuesta certificada para anulación".

## Despachar un envío (tránsitos)

Cuando se crea un envío que necesita ser transportado se agrega un paso al proceso de entregar los productos.

> SIN TRANSPORTE
> Reservación (envío preliminar) → Entrega (envío entregado)

> CON TRANSPORTE
> Reservación (envío preliminar) → Tránsitos (envío en despachado pero no entregado) → Entrega (envío entregado)

Después de despachar el envío, esta pasa a tránsito, y en transito alguien la tiene que recibir y colocar si realmente recibió lo que se había reservado. Podrá ver esto mas claro en el siguiente ejemplo.

Los pasos para hacer una reservación que necesite transporte son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación".

![imagen6](/img/inventarios/envios-6.png)

Los campos que debe llenar son los mimos que en una reservación normal pero con las siguientes diferencias:

a. Seleccione el empleado que se encargara del transporte.

b. Seleccione el cuadro de "Necesita Transporte".

c. Coloque la fecha de despacho estimado.

d. Seleccione "Crear envío"

![imagen7](/img/inventarios/envios-7.jpg)

Le aparecerá un mensaje notificándole que la transacción fue creada exitosamente. Para sacar el producto de la bodega presione "Despachar", esto hará que la reservación pase a transito y tendrá que ser recibida.

![imagen8](/img/inventarios/envios-8.jpg)

La reservación ahora paso a Tránsitos, para recibirla presione el icono del camión.

![imagen9](/img/inventarios/envios-9.jpg)

Deberá colocar la cantidad de producto que en realidad recibió. Si recibió menos, Zauru automáticamente hara una reservación para solicitar el producto que hizo falta, si recibió más, Zauru automáticamente hara una reservación para devolver el producto que se recibió de mas.

Cuando termine de colocar la cantidad que recibió, presione "Actualizar envío".

![imagen10](/img/inventarios/envios-10.jpg)

Le aparecerá una mensaje notificando que se entrego la reservación. Ahora tendrá los productos reservados en la bodega de destino.

![imagen11](/img/inventarios/envios-11.jpg)

## API (llamadas desde sistemas externos)

### Crear un envío preliminar (reservación)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "shipment": {
      "reference": "Referencia para poder encontrar este envío en un futuro",
      "booker_id": "1",
      "transporter_id": "",
      "needs_transport": "0",
      "planned_shipping": "",
      "planned_delivery": "2018-08-10",
      "agency_from_id": "2",
      "agency_to_id": "1",
      "movements_attributes": {
        "0": {
          "item_code": "xyz",
          "item_id": "2",
          "booked_quantity": "100"
        }
      },
      "tag_ids": [
        ""
      ],
      "memo": "Alguna anotación"
    }
  }' \
  https://app.zauru.com/inventories/bookings.json
```

### Entregar un envío preliminar (reservación)
Este caso funciona para convertir una __reservación SIN transporte__ a un __envío entregado__. No funciona para convertir un __envío en tránsito (con transporte)__ a un __envío entregado__ ni para convertir una __reservación CON transporte__ a un __envío entregado__. Y tampoco funciona para convertir una __reservación CON transporte__ a un __envío en tránsito__

Notar que lo que se reservó en el envío es lo que se va a entregar, no se puede escoger cuanto realmente se entregó.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1/deliver.json
```

### Despachar un envío preliminar (reservación) CON transporte
Este caso SOLO funciona para convertir una __reservación CON transporte__ a un __envío en tránsito__

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1/ship.json
```

### Entregar un envío (tránsito)
Este caso SOLO funciona para convertir un __envío en tránsito__ en un __envío entregado__

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "movements_attributes": {
        "0": {
          "delivered_quantity": 99,
          "id": "1"
        }
      },
      "tag_ids": [
        ""
      ],
      "memo": "parece que no vinieron los 100 productos solicitados",
      "transporter_id": 1
    }
  }' \
  https://app.zauru.com/inventories/transits/1.json
```

### Devolver una entrega (envío entregado)
Convertirá el envío en un envío devuelto y regresará las existencias a donde estaban originalmente (la agencia origen).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/deliveries/1.json
```
