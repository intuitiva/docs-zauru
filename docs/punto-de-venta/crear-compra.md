---
title: "Crear compra"
sidebar_label: "Crear compra"
sidebar_position: 7
---

Los pasos para crear una nueva compra desde el Punto de Venta permiten registrar ordenes de compra de productos o gastos. Al crear una compra de productos, estos ingresaran a la bodega actual del usuario una vez recibidos.

## Crear una orden de compra de productos

1. Ir a "P.D.V."
2. Seleccionar "Nueva Compra".

![listado de items por comprar](/img/punto-de-venta/crear-compra-1.png)

Le apareceran las opciones para crear una nueva orden de compra. Los campos que puede colocar son:

a. **Referencia**: Coloque una breve referencia para identificar facilmente la orden de compra.

b. **Proveedor**: Seleccione el proveedor al que se le esta comprando. Puede buscar por nombre.

c. **Comprador**: Seleccione el empleado que esta realizando la compra. Por defecto se asigna el usuario actual si esta configurado como comprador.

d. **Termino de cargo**: Seleccione el termino de cargo (condiciones de pago al proveedor). Por defecto se asigna el configurado en las preferencias del punto de venta.

e. **Sujeto a impuestos**: Marque esta casilla si la compra esta sujeta a impuestos. Por defecto toma el valor configurado en las preferencias.

f. **Fecha de envio** (si esta visible segun configuracion): Fecha estimada en que el proveedor enviara los productos.

g. **Codigo de barras / Codigo del producto**: Escanee el codigo de barras del producto o coloque el codigo manualmente para agregarlo a la orden de compra.

h. **Seleccion de productos**: Si no utiliza codigos, puede navegar por las categorias y seleccionar los productos haciendo click sobre ellos. Luego especifique la cantidad y el costo unitario.

i. **Cantidad**: Ajuste la cantidad del producto a comprar usando los botones "+" y "-".

j. **Costo unitario**: Especifique el costo unitario al que esta comprando el producto. Si el sistema tiene registrado el ultimo costo de compra, se mostrara como referencia.

k. **Descuento** (si esta visible segun configuracion): Puede aplicar un descuento global a la orden de compra.

l. **Impuestos adicionales** (si estan configurados): Puede agregar impuestos extra como shipping, otros cargos, y hasta 4 tipos de impuestos adicionales.

m. **Carga de imagen y PDF** (si esta habilitado): Puede adjuntar una imagen o PDF de la factura del proveedor.

Presione "Guardar" para crear la orden de compra. Al guardar, el sistema automaticamente autorizara la orden de compra y creara una recepcion pendiente para que los productos puedan ser recibidos posteriormente.

## Crear una compra de gastos

Si necesita registrar una compra que no es de productos de inventario (gastos como servicios, alquileres, etc.), seleccione "Nueva Compra de Gastos". Los campos son similares a la compra de productos, con las siguientes diferencias:

a. En lugar de seleccionar productos del inventario, selecciona **cuentas contables** de gasto.

b. Las cuentas se organizan por grupos y tipos de cuenta para facilitar la busqueda.

c. Puede especificar el costo, cantidad y referencia para cada linea de gasto.

d. Si la configuracion "mostrar referencia en lineas de compras de gastos" esta activa, aparecera un campo de referencia adicional en cada linea.

## Gestionar la orden de compra

Una vez creada la orden de compra, usted podra:

a. **Ver detalles**: Revise los productos, cantidades, costos y totales de la orden.

b. **Recibir productos**: Vaya a la seccion de "Recepciones" del Punto de Venta para recibir los productos comprados. Vea el tutorial "Recibir compra".

c. **Pagar al proveedor**: Registre el pago (descargo) al proveedor desde la vista de detalles de la orden de compra.

d. **Imprimir**: Imprima la orden de compra utilizando las plantillas de impresion configuradas.

## Pagar una orden de compra (Descargo)

Para registrar el pago a un proveedor:

1. Desde el detalle de la orden de compra, seleccione la opcion de "Pagar".
2. Seleccione el metodo de descargo (forma de pago).
3. Coloque una referencia (opcional).
4. Verifique el monto a pagar.
5. Presione "Crear descargo".

## API (llamadas desde sistemas externos)

### Listar ordenes de compra pendientes de pago

**bash**
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases.json
```
