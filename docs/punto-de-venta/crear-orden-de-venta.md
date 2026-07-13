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
