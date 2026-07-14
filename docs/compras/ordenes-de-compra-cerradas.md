---
title: "Ordenes de Compra Cerradas"
sidebar_label: "Ordenes de Compra Cerradas"
sidebar_position: 18
---

Este tutorial esta enfocado en la visualizacion y gestion de las ordenes de compra que ya han sido completamente recibidas y pagadas.

Cuando una orden de compra ha sido recibida en su totalidad y ademas ha sido pagada por completo, automaticamente se traslada a la seccion de "Ordenes de Compra Cerradas". En esta seccion puede consultar el historial de compras completadas y realizar ediciones limitadas a la informacion de las mismas.

## Listar ordenes de compra cerradas

Los pasos para ver las ordenes de compra cerradas son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".

![imagen1](/img/compras/ordenes-de-compra-cerradas-1.jpg)

Le aparecera un listado con todas las ordenes de compra que han sido recibidas y pagadas. En este listado puede:

- Filtrar por fecha, proveedor, agencia, comprador y otros criterios.
- Buscar por numero de orden, referencia o factura.
- Ordenar por cualquiera de las columnas mostradas.

## Ver detalles de una orden de compra cerrada

Los pasos para ver los detalles de una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" (El Ojo) en la orden que desea consultar.

![imagen2](/img/compras/ordenes-de-compra-cerradas-2.jpg)

En la vista de detalles de una orden de compra cerrada podra encontrar:

a. Informacion general de la orden de compra (numero, referencia, factura, fechas, moneda, tipo de cambio).

b. Datos del proveedor y del comprador.

c. Detalle de los productos ordenados, cantidades recibidas y costos.

d. Detalle de cuentas (si la orden incluye servicios o gastos).

e. Recepciones asociadas a la orden de compra.

f. Cargos adicionales y cargos de aranceles asociados.

g. Pagos realizados a la orden de compra.

h. Impresion de la orden de compra utilizando las plantillas disponibles.

i. Documentos electronicos asociados (facturas electronicas FEL, DTE, etc.).

![imagen3](/img/compras/ordenes-de-compra-cerradas-3.jpg)

## Editar informacion de una orden de compra cerrada

Las ordenes de compra cerradas permiten ediciones limitadas a ciertos campos informativos. No se pueden modificar los productos, cantidades, costos, recepciones ni pagos.

Los pasos para editar una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" en la orden que desea editar.
4. Seleccionar "Editar".

![imagen4](/img/compras/ordenes-de-compra-cerradas-4.jpg)

Los campos que puede editar en una orden de compra cerrada son:

a. Numero de orden (id_number).

b. Numero de factura (invoice).

c. Referencia.

d. Fecha de emision (issue_date).

e. Fecha de envio (shipping_date).

f. Fecha de entrega (delivery_date).

g. Comprador (purchaser_id).

h. Memo o notas.

i. Imagen asociada a la orden.

j. Archivo PDF asociado a la orden.

k. Etiquetas (tags).

![imagen5](/img/compras/ordenes-de-compra-cerradas-5.jpg)

Al terminar de editar, presione "Actualizar" para guardar los cambios.

## Reabrir una orden de compra cerrada

Si necesita modificar una orden de compra cerrada mas alla de lo que permite la edicion limitada, puede reabrirla. Esto devolvera la orden de compra al listado de ordenes activas.

Los pasos para reabrir una orden de compra cerrada son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra Cerradas".
3. Seleccionar "Detalles" en la orden que desea reabrir.
4. Seleccionar "Reabrir Orden de Compra".

![imagen6](/img/compras/ordenes-de-compra-cerradas-6.jpg)

Le aparecera un mensaje de exito notificandole que la orden de compra fue reabierta exitosamente. La orden de compra volvera a aparecer en el listado de ordenes de compra activas.

## API (llamadas desde sistemas externos)

### Ver detalles de una orden de compra cerrada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/closed_purchase_orders/1.json
```

### Reabrir una orden de compra cerrada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/purchases/closed_purchase_orders/1/rebound.json
```
