---
title: "Envíos"
sidebar_label: "Envíos"
sidebar_position: 3
---

Cuando mueve mercadería entre bodegas o recibe producto de un proveedor, la diferencia entre un inventario sano y uno desordenado está en llevar cada envío por su ciclo completo: reservar, despachar y entregar. Este tutorial le acompaña en ese recorrido, incluyendo los casos que surgen en el día a día, como devolver una entrega que llegó mal o anular una reservación que ya no necesita. Al terminar, sabrá manejar un envío con y sin transporte, imprimirlo y exportar sus movimientos.

## Flujo de trabajo de un envío

Imagínese el recorrido de la mercadería desde que la reserva hasta que llega a su destino: ese es el ciclo de vida de un envío, y en Zauru sigue los siguientes estados:

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

Con esto domina el flujo completo de un envío: creó la reservación, la despachó cuando hubo transporte y la entregó en la bodega destino, con la opción de devolver o anular cuando las cosas cambiaron sobre la marcha. El siguiente paso natural es verificar que las existencias de cada bodega reflejen esos movimientos, y recuerde que puede crear reservaciones directamente desde una solicitud de traslado para ahorrarse el doble trabajo.

## API (llamadas desde sistemas externos)

### Obtener todas las reservaciones
Devuelve la lista de envíos que están en estado de reservación (no despachados, no entregados, no anulados, no devueltos). Puede filtrar por alcance (`scope`), etiqueta (`tag`) y rango de fechas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings.json?scope=all
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "reference": "PRUEBA NOTIFICACION",
    "needs_transport": false,
    "entity_id": 3,
    "payee_id": null,
    "income": null,
    "booking_image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "booker_id": 4,
    "planned_shipping": null,
    "shipped": false,
    "shipped_at": null,
    "shipping_image": null,
    "shipper_id": null,
    "planned_delivery": "2023-11-13",
    "delivered": false,
    "delivered_at": null,
    "delivery_image": null,
    "deliverer_id": null,
    "voided": false,
    "voided_at": null,
    "voider_id": null,
    "returned": false,
    "returned_at": null,
    "returner_id": null,
    "creator_id": 5,
    "updater_id": 5,
    "memo": "",
    "agency_from_id": 6,
    "address_from": "Calle Ejemplo 123, Zona 10",
    "agency_to_id": 6,
    "address_to": "Calle Ejemplo 123, Zona 10",
    "created_at": "2023-11-13T16:33:05.349Z",
    "updated_at": "2023-11-13T16:33:05.362Z",
    "movements_count": 1,
    "transporter_id": null,
    "contract_id": null,
    "inventory_audit_id": null,
    "ecommerce_request_id": null,
    "external_image_url": null,
    "reception_id": null,
    "pos": false,
    "issue_external_document": false,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": null,
    "document_external_storage_certified_response": null,
    "document_external_storage_certified_response_for_voiding": null,
    "transfer_request_id": null,
    "stock_corrections": null,
    "lock_version": 0,
    "movements": [
      {
        "id": 7,
        "serial_id": null,
        "item_id": 8,
        "shipment_id": 1,
        "booked_quantity": "1.0",
        "delivered_quantity": null,
        "created_at": "2023-11-13T16:33:05.359Z",
        "updated_at": "2023-11-13T16:33:05.359Z",
        "reference": "",
        "lot_id": null,
        "entity_id": 3
      }
    ]
  }
]
```

### Obtener el detalle de una reservación
Devuelve los datos del envío, sus movimientos, bodegas origen y destino, y los formularios asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

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

Esto devolverá un JSON similar a este:
```json
{
  "planned_delivery": [
    "Fecha mínima 2020-12-31"
  ]
}
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "16421816",
  "zid": "599",
  "id_number": "INGRESO-177",
  "reference": "INGRESO INVENTARIO 29.04.2026",
  "needs_transport": false,
  "entity_id": "1303",
  "payee_id": "1957271",
  "income": true,
  "booking_image": null,
  "booker_id": "1274",
  "planned_shipping": "2026-04-29",
  "shipped": false,
  "shipped_at": null,
  "shipping_image": null,
  "shipper_id": null,
  "planned_delivery": "2026-04-29",
  "delivered": true,
  "delivered_at": "2026-04-29 16:38:14",
  "delivery_image": null,
  "deliverer_id": "1274",
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "returned": false,
  "returned_at": null,
  "returner_id": null,
  "creator_id": "1274",
  "updater_id": "1274",
  "memo": null,
  "agency_from_id": "8248",
  "address_from": "DORIS SALAZAR  ",
  "agency_to_id": "8246",
  "address_to": "Ciudad ",
  "created_at": "2026-04-29 16:38:14.135016",
  "updated_at": "2026-04-29 16:38:14.171228",
  "movements_count": "1",
  "transporter_id": null,
  "contract_id": null,
  "inventory_audit_id": null,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "reception_id": "535683",
  "pos": false,
  "issue_external_document": false,
  "authorized_serial": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "uuid": null,
  "document_external_storage_certified_response": null,
  "document_external_storage_certified_response_for_voiding": null,
  "transfer_request_id": null,
  "stock_corrections": null,
  "lock_version": "0"
}
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "16421816",
  "zid": "599",
  "id_number": "INGRESO-177",
  "reference": "INGRESO INVENTARIO 29.04.2026",
  "needs_transport": false,
  "entity_id": "1303",
  "payee_id": "1957271",
  "income": true,
  "booking_image": null,
  "booker_id": "1274",
  "planned_shipping": "2026-04-29",
  "shipped": false,
  "shipped_at": null,
  "shipping_image": null,
  "shipper_id": null,
  "planned_delivery": "2026-04-29",
  "delivered": true,
  "delivered_at": "2026-04-29 16:38:14",
  "delivery_image": null,
  "deliverer_id": "1274",
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "returned": false,
  "returned_at": null,
  "returner_id": null,
  "creator_id": "1274",
  "updater_id": "1274",
  "memo": null,
  "agency_from_id": "8248",
  "address_from": "DORIS SALAZAR  ",
  "agency_to_id": "8246",
  "address_to": "Ciudad ",
  "created_at": "2026-04-29 16:38:14.135016",
  "updated_at": "2026-04-29 16:38:14.171228",
  "movements_count": "1",
  "transporter_id": null,
  "contract_id": null,
  "inventory_audit_id": null,
  "ecommerce_request_id": null,
  "external_image_url": null,
  "reception_id": "535683",
  "pos": false,
  "issue_external_document": false,
  "authorized_serial": null,
  "electronic_authorization_supporting_document": null,
  "electronic_tax_document": null,
  "uuid": null,
  "document_external_storage_certified_response": null,
  "document_external_storage_certified_response_for_voiding": null,
  "transfer_request_id": null,
  "stock_corrections": null,
  "lock_version": "0"
}
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

Esto devolverá un JSON similar a este:
```json
{}
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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Actualizar una reservación
Actualiza los datos de un envío mientras esté en estado de reservación (Booked). Una vez despachado o entregado, el envío ya no se puede editar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "reference": "Referencia actualizada",
      "planned_delivery": "2018-08-15",
      "movements_attributes": {
        "0": {
          "item_id": "2",
          "booked_quantity": "120",
          "id": "1"
        }
      },
      "tag_ids": [""],
      "memo": "Nota actualizada"
    }
  }' \
  https://app.zauru.com/inventories/bookings/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Anular una reservación
Anula (void) una reservación, liberando todas las reservas de productos. Solo se puede anular mientras el envío esté en estado de reservación.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/bookings/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener el detalle de un envío en tránsito
Devuelve los datos de un envío que está en tránsito (despachado pero no entregado).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/transits/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener el detalle de una entrega
Devuelve los datos de un envío que ya fue entregado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar una entrega
Actualiza los campos editables de una entrega: referencia, transportista, notas (memo), etiquetas, fecha de entrega e imagen del envío.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "reference": "Referencia de la entrega",
      "transporter_id": "1",
      "delivered_at": "2018-08-10",
      "memo": "Notas de la entrega",
      "tag_ids": [""]
    }
  }' \
  https://app.zauru.com/inventories/deliveries/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Emitir documento electrónico externo de una entrega
Emite el documento fiscal electrónico (FEL/DGII) asociado a una entrega en los países que lo soportan.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/issue_external_document.json
```

### Consultar la respuesta certificada de una entrega
Devuelve la respuesta certificada del sistema de facturación electrónica para la entrega. La respuesta se devuelve en formato JSON (El Salvador) o XML (resto de países).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/external_storage_certified_response.json
```

### Consultar la respuesta certificada para anulación de una entrega
Devuelve la respuesta certificada del sistema de facturación electrónica para anular el documento emitido de una entrega. La respuesta se devuelve en formato JSON (El Salvador) o XML (resto de países).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/external_storage_certified_response_for_voiding.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
