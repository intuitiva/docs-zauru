---
title: "Anular recepciones de una orden de compra"
sidebar_label: "Anular recepciones de una orden de compra"
sidebar_position: 4
---

Este tutorial esta enfocado en devolver los productos de una orden de compra después de una recepción.

Existen varias situaciones por las cuales se regresen los productos de una orden de compra, por ejemplo:

- Producto Dañado
- Mercadería Incorrecta
- Entrega Tardía
- Producto Vencido

En el siguiente ejemplo se mostrara como devolver recepciones de orden de compra:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra” o la opción “Ordenes de Compra Cerradas”.
3. Seleccionar “Detalles”  de la orden de compra que quiere devolver.

![Seleccionar Orden de compra](/img/compras/devolver-orden-de-compra-recibida-1.png)

Al seleccionar la opción "Detalles" seguir los siguientes pasos:

5. Ubique en "Detalles" el segmento de: __Recepciones asociadas__, e identifique cuál recepción es la que desea devolver y Seleccione la opción "__Devolver__".

![Devolver receción OC](/img/compras/devolver-orden-de-compra-recibida-2.png)

Le aparecerá un mensaje de éxito en la pantalla notificándole que la orden de compra fue devuelta exitosamente.

Al devolver la orden de compra automáticamente se regresará el producto de su inventario hacia el proveedor.

![imagen2](/img/compras/devolver-orden-de-compra-recibida-3.jpg)

Puede repetir los pasos 1 al 5 para anular todas las recepciones que tenga la Orden de Compra.

## API (llamadas desde sistemas externos)

### Devolver ordenes de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/purchase_orders/1/rebound.json
```
