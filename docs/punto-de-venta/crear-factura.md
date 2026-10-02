---
title: "Crear factura"
sidebar_label: "Crear factura"
sidebar_position: 3
---

Si atiende un mostrador o una tienda física, esta es la pantalla que más va a usar en el día: cada vez que un cliente compra y necesita su factura, aquí la emite en segundos, escaneando códigos de barras y eligiendo los productos de su bodega. También le sirve cuando una orden de venta ya está lista para convertirse en factura.

## Crear una factura

1. Ir a "Punto de Venta".
2. Seleccionar "Nueva Factura".

El usuario solo puede seleccionar productos de la bodega que tiene asignada o de la bodega predeterminada en la configuración del punto de venta.

Los campos principales de la factura son:

- **Referencia**: permite identificar la factura posteriormente.
- **Cliente**: permite seleccionar un cliente existente o agregar uno nuevo.
- **Vendedor**: identifica al vendedor de la operación.
- **Término de pago**: define el plazo de pago del cliente.
- **Proyecto**: asocia la factura a un proyecto.
- **Código del producto**: permite escanear el código de barras o escribirlo manualmente para agregar un producto.

![imagen1](/img/punto-de-venta/crear-factura-1.jpg)

Agregar los productos o servicios y especificar la cantidad. También se puede aplicar un descuento y definir si la operación registra impuestos o funciona como recibo sin impuestos. Seleccionar "Imprimir" para emitir la factura.

![imagen2](/img/punto-de-venta/crear-factura-2.jpg)

La plantilla de impresión permite imprimir la factura con `Ctrl+P`. Los accesos disponibles en la parte derecha permiten:

- Ir al listado de facturas no pagadas.
- Crear una nueva factura.
- Ver el detalle de la factura creada.
- Cobrar la factura.

![imagen3](/img/punto-de-venta/crear-factura-3.jpg)

## Listado de facturas

Para consultar las facturas emitidas y no pagadas desde el punto de venta:

1. Ir a "P.D.V.".
2. Seleccionar "Facturas".

El listado incluye las facturas que cumplen estas condiciones:

- Están emitidas, no son órdenes.
- No están pagadas.
- No están anuladas.
- Pertenecen a la agencia del usuario.

Se puede filtrar por:

- **Vendedor**: muestra las facturas de un vendedor específico o de todos los vendedores.
- **Etiquetas**: muestra las facturas que tienen las etiquetas seleccionadas.

Desde el listado se puede:

- **Ver detalle**: muestra los productos, pagos, transacciones contables y otros datos.
- **Cobrar**: registra un pago. Consulte [Cobrar una factura o una orden de venta](/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta).
- **Imprimir**: imprime la factura con las plantillas configuradas.
- **Anular**: anula una factura emitida por error.
- **Editar**: abre una factura que todavía está en estado de orden.

## Editar y emitir una orden

Una factura en estado de orden todavía no ha sido emitida y se puede modificar.

1. En el listado, localizar la factura en estado "orden".
2. Seleccionar el icono de "Editar".
3. Modificar los productos, las cantidades, los precios o los datos generales.
4. Seleccionar "Guardar" para emitirla con los cambios.

Las facturas ya emitidas no se pueden editar mediante este formulario. Para corregirlas, anular la factura y crear una nueva.

## Emitir una orden rápidamente

Para convertir una orden de venta en factura:

1. Abrir el detalle de la orden de venta.
2. Seleccionar "Emitir factura".

La orden se convierte inmediatamente en factura y conserva sus productos, cantidades y precios.

## Anular una factura

1. En el listado, localizar la factura.
2. Seleccionar "Anular".
3. Confirmar la anulación.

La factura queda anulada. Si fue creada desde una orden de venta, los productos reservados se devuelven al inventario.

## Editar datos de una factura

Para modificar datos sin alterar los productos ni los montos:

1. En el detalle de la factura, seleccionar "Editar datos".
2. Modificar el número de factura, la referencia, la fecha, el vendedor, el memo o las etiquetas.
3. Adjuntar una imagen si es necesario.
4. Seleccionar "Guardar".

Las llamadas disponibles para integraciones externas se encuentran en [API de facturas del punto de venta](/punto-de-venta/api-facturas).
