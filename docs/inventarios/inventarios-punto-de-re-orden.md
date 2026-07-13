---
title: "Punto de re orden"
sidebar_label: "Punto de re orden"
sidebar_position: 4
---

Este tutorial esta basado en la creación y verificación de puntos de re orden de sus productos.

Un punto de re orden es una cantidad mínima de producto que debería de tener en su inventario. Existen dos puntos de re orden en Zauru:

1. Punto de re orden de un producto (total en todas las bodegas).
2. Punto de re orden de un producto por bodega.

Adicionalmente, puede configurar la **cantidad económica de orden**, que es la cantidad recomendada para reabastecer cuando se alcanza el punto de re orden. También existe un reporte dedicado para ver todos los productos que están por debajo de su punto de re orden.

Las dos formas de punto de re orden se ejemplificaran en el siguiente tutorial.

## Punto de re orden de un producto

El punto de re orden por producto es una cantidad minima de un producto en especifico que debería de tener al sumar las existencias de ese producto en todas sus bodegas.

El punto de re orden de un producto debe de ser establecido en las características del ítem. Los pasos para establecer el punto de re orden de un producto se muestran en el tutorial de "Crear Ítems".

Los pasos para ver el punto de re orden de un producto son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar "Todas las bodegas".

Aquí podrá ver todas las existencias por bodega de cada producto, en este ejemplo, lo colocamos al Producto 1 un punto de re orden global de 10, esto quiere decir que cuando el total de las existencias de todas las bodegas sea menor a 10, que nos avise para que volvamos a comprar. En la imagen se muestra el producto en rojo, notificando que ya llego a su punto de re orden.

![imagen1](/img/inventarios/inventarios-punto-de-re-orden-1.png)

## Punto de re orden por bodega

En el punto de re orden por bodega se especifica la cantidad mínima que debería de haber de un producto en una bodega en especifico. La forma de colocar el punto de re orden por bodega es la siguiente:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccione la pestaña de "Todas las Bodegas".
4. Haga click sobre la cantidad en la bodega que quiere especificar el punto de re orden. En el ejemplo vamos modificar el punto de re orden para el producto 7 en la bodega de Zona 8.

![imagen2](/img/inventarios/inventarios-punto-de-re-orden-2.png)

Le aparecerán los detalles de la existencia del producto 7 en la bodega Zona 8. Presione editar en la parte inferior para establecer el punto de re orden.

![imagen3](/img/inventarios/inventarios-punto-de-re-orden-3.jpg)

Encontrara las opciones para colocar el punto de re orden, los campos que tiene que llenar son los siguientes:

a. Coloque en el punto de re orden, la cantidad mínima que tendría que tener de este producto en esta bodega.

b. Coloque en la cantidad económica de la orden, la cantidad recomendada de re orden de este producto. Por ejemplo, si su proveedor le vende en cajas de 50 unidades, puede establecer 50 como cantidad económica de orden.

c. Presione "Actualizar Existencia".

En este ejemplo establecimos que cuando el Producto 7 llegue a 30 Unidades en la Bodega Zona 8, nos notifique para re ordenar, y colocamos que la cantidad recomendada de re orden debería de ser de 50 unidades.

![imagen4](/img/inventarios/inventarios-punto-de-re-orden-4.jpg)

## Verificación de puntos de re orden por bodega

Los pasos para ver las notificaciones de re orden por bodega son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccione la bodega que quiere ver y presione "Cambiar".

Si hay algún producto que alcanzo el punto de re orden le aparecerá en rojo. En este ejemplo se muestra que del producto 7 ya solo quedan 25 unidades, y el punto de orden que establecimos era al alcanzar 30, por eso aparece el producto en rojo.

![imagen5](/img/inventarios/inventarios-punto-de-re-orden-5.jpg)

## Cantidad económica de orden

La cantidad económica de orden (EOQ por sus siglas en inglés) es la cantidad recomendada que debería ordenar cuando el producto alcanza su punto de re orden. Esta cantidad se configura por producto y por bodega, y le ayuda a optimizar sus compras considerando factores como:

- Cantidades mínimas de compra del proveedor.
- Tamaños de empaque o lote.
- Frecuencia óptima de reabastecimiento.

Para configurar la cantidad económica de orden, siga los mismos pasos que para configurar el punto de re orden por bodega (campo "b" en la sección anterior).

## Reporte de productos bajo punto de re orden

Zauru incluye un reporte específico para identificar todos los productos que están por debajo de su punto de re orden. Este reporte se encuentra en:

1. Ir a "Inventarios".
2. Seleccionar "Reportes".
3. Seleccionar "Productos bajo punto de re orden".

El reporte muestra:

- **Por bodega**: Seleccione una bodega específica para ver qué productos están por debajo de su punto de re orden en esa bodega.
- **Todas las bodegas**: Muestra los productos cuyo total global está por debajo del punto de re orden configurado en el ítem.

El reporte incluye el nombre del producto, la cantidad disponible, el punto de re orden configurado, la última compra realizada y puede exportarse a formato Excel (.xls).
