---
title: "Recibir compra"
sidebar_label: "Recibir compra"
sidebar_position: 9
---

Este tutorial esta enfocado en recibir los productos de una orden de compra desde el punto de venta. Cuando usted crea una orden de compra, el sistema genera automaticamente una recepcion pendiente. Para que los productos ingresen al inventario, debe completar el proceso de recepcion.

## Listado de compras pendientes de recibir

Para ver las ordenes de compra que estan pendientes de recepcion:

1. Ir a "P.D.V."
2. Seleccionar "Recepciones".

Le aparecera un listado con todas las ordenes de compra que cumplen las siguientes condiciones:
- Estan autorizadas
- No han sido recibidas completamente
- No estan anuladas
- No estan pagadas
- Pertenecen a la agencia del usuario actual

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una orden de compra para ver sus productos y cantidades.

b. **Recibir**: Inicie el proceso de recepcion de productos.

## Recibir productos de una orden de compra

Los pasos para recibir productos son:

1. En el listado de recepciones, haga click sobre la orden de compra que desea recibir.
2. Se mostraran los productos de la orden de compra con las cantidades compradas.

![imagen1](/img/punto-de-venta/recibir-compra-1.png)

Para cada producto, usted podra:

a. **Cantidad a recibir**: Especifique la cantidad que esta recibiendo. Por defecto se muestra la cantidad total comprada. Puede recibir parcialmente si el proveedor entrega en multiples envios.

b. **Lotes** (productos perecederos): Si el producto es perecedero, debera especificar el nombre del lote y la fecha de vencimiento para cada cantidad recibida.

c. **Series** (productos identificables): Si el producto es identificable (con numero de serie), debera especificar el numero de serie y una descripcion para cada unidad recibida.

d. **Paquetes (Bundles)**: Si la compra incluye paquetes, estos se reciben como paquetes completos.

Asegurese de recibir al menos un producto con cantidad mayor a cero. Presione "Guardar Recepcion" para completar el proceso.

Al guardar la recepcion:

- Los productos recibidos ingresaran al inventario de la agencia.
- Si la orden de compra incluia productos perecederos, se crearan los lotes correspondientes.
- La orden de compra se marcara como recibida (total o parcialmente).

Si no se recibe la cantidad total comprada, la orden de compra permanecera como "no recibida" para que pueda completar la recepcion en el futuro.

## API (llamadas desde sistemas externos)

### Listar ordenes de compra pendientes de recepcion

**bash**
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/receptions.json
```
