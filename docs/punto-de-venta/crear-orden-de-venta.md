---
title: "Crear orden de venta"
sidebar_label: "Crear orden de venta"
sidebar_position: 2
---

Los pasos para crear una nueva orden de venta desde el Punto de Venta son los siguientes:

1. Ir a “Punto de Venta” (P.D.V.).
2. Seleccionar “Nueva Orden”.
3. Le aparecerán las opciones para crear una nueva orden de venta, cada vez que un usuario cree una nueva orden, el podrá seleccionar únicamente los productos que hayan sido requeridos por su cliente.

Los campos que se pueden colocar en la orden de venta son:

a. Referencia: Coloque una breve referencia para encontrar fácilmente la orden de venta.

b. Cliente: Coloque el nombre del Cliente existente al que se le va a emitir la orden de venta o agregue uno nuevo.

c. Seleccione el vendedor: Persona que está realizando la venta.

d.  Aquí podrá escanear los códigos de barra de los productos o colocar manualmente el código para que se agreguen a la factura.

e. Agregar o quitar cantidad de productos: si en la orden se van a agregar dos o más productos de un mismo tipo, solamente debe dar click en “+” o “-“ para realizarlo.

f. Sujeto a impuestos: Con esta opción usted puede seleccionar si va a emitir factura al concluir orden, o únicamente recibo comprobante.

![imagen1](/img/punto-de-venta/crear-orden-de-venta-1.png)


Ahora agregue los productos o servicios que se van a adicionar en la orden  y la cantidad. Aun podrá especificar si desea que registre impuestos o que no registre impuestos y sea solo un recibo. Luego presione Guardar para emitir la orden.

![imagen2](/img/punto-de-venta/crear-orden-de-venta-2.png)


Al presionar un click sobre el icono Guardar,  automáticamente la orden de venta será generada, y se realizara la reserva de los productos si estos fueron de tipo almacenables.

Es importante mencionar que al crear la orden aun nos va a permitir editarla para agregar o quitar productos o servicios, destruirla o emitir la factura.

![imagen3](/img/punto-de-venta/crear-orden-de-venta-3.png)

## Listado de ordenes de venta

Para ver todas las ordenes de venta pendientes:

1. Ir a "P.D.V."
2. Seleccionar "Ordenes".

Le aparecera un listado con todas las ordenes de venta que cumplen las siguientes condiciones:
- No han sido emitidas como factura
- No estan pagadas
- No estan anuladas
- Pertenecen a la agencia del usuario

Puede filtrar por:

a. **Etiquetas (Tags)**: Filtre las ordenes por etiquetas asignadas.

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una orden para ver sus productos, precios y otros detalles.

b. **Editar**: Modifique la orden para agregar o quitar productos. Vea la seccion "Editar una orden de venta".

c. **Emitir factura**: Convierta la orden en una factura. Vea el tutorial "Crear factura".

d. **Imprimir**: Imprima la orden utilizando las plantillas configuradas.

e. **Anular**: Anule la orden si ya no es necesaria.

f. **Cobrar**: Si la orden ya fue emitida como factura, podra registrarel cobro.

## Editar una orden de venta

Para modificar una orden existente que aun no ha sido emitida como factura:

1. En el listado de ordenes, localice la orden que desea modificar.
2. Seleccione el icono de "Editar".
3. Podra modificar los siguientes campos:

a. **Referencia**: Actualice la referencia de la orden.

b. **Cliente**: Cambie el cliente asociado a la orden.

c. **Vendedor**: Cambie el vendedor asignado.

d. **Productos**: Agregue o quite productos, modifique cantidades y precios.

e. **Sujeto a impuestos**: Cambie si la orden genera factura o recibo.

f. **Descuento**: Aplique un descuento global a la orden.

g. **Etiquetas**: Asigne o modifique etiquetas.

4. Presione "Guardar" para actualizar la orden.

**Nota**: Si la orden ya fue emitida como factura, no podra ser editada.

## Anular una orden de venta

Para anular una orden:

1. En el listado de ordenes, localice la orden a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

**Importante**: No podra anular una orden que tenga envios en transito asociados. La orden sera anulada y los productos reservados seran devueltos al inventario.

## API (llamadas desde sistemas externos)

### Solicitar items con existencias y precios y paquetes con existencias y precios en la bodega asignada al usuario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/sale_orders/new.json
```
