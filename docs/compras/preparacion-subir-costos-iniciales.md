---
title: "Costos unitarios iniciales"
sidebar_label: "Costos unitarios iniciales"
sidebar_position: 10
format: md
---

# Costos unitarios iniciales

Este tutorial está enfocado en cómo crear o importar los costos iniciales de sus productos, para que al momento de la venta, usted pueda saber cuanto le costo y a cuanto vendio el producto (Margen de ganancia).

Este proceso es útil cuando no se requiere importar TODO le historial de la empresa porque la empresa lleva bastante tiempo funcionando y no es práctico migrar toda la información histórica a Zauru. Es por eso que se registran balances iniciales en las cuentas, saldos de mercadería y los __costos unitarios iniciales__.

La forma de crear un nuevo costo inicial es la siguiente:

1. Ir a “Compras”.
2. Seleccionar “Costos Totales”.
3. Seleccionar “Nuevo Costo Inicial”.

![imagen1](/img/compras/preparacion-subir-costos-iniciales-1.jpg)


Le aparecerán las opciones para crear un nuevo costo inicial, las opciones son las siguientes:

1. Coloque el producto o servicio al que le pondrá un costo inicial.
2. Coloque la cantidad por la que se hizo la ultima compra.
3. Coloque el costo promedio al que generalmente compra su producto.
4. Para guardar los cambios seleccione “Crear costo”.

![imagen2](/img/compras/preparacion-subir-costos-iniciales-2.jpg)

Le aparecerá un mensaje en la pantalla notificando que se creo el costo inicial exitosamente.

![imagen3](/img/compras/preparacion-subir-costos-iniciales-3.jpg)

## Importar Costos Iniciales
Zauru también le permite importar costos iniciales de muchos productos por medio de una plantilla de Excel, para que no los tenga que ingresar uno por uno. La forma de hacerlo es la siguiente:

1. Diríjase a “Compras” y luego “Costos Totales” y seleccione Importar.

![imagen4](/img/compras/preparacion-subir-costos-iniciales-4.jpg)


2.Debe descargar la plantilla de Excel para importar los costos iniciales de sus productos.

En la siguiente hoja aparecen las especificaciones de los campos permitidos en la importación de costos totales.

![imagen5](/img/compras/preparacion-subir-costos-iniciales-5.jpg)

Esta es la plantilla de Excel donde deberá colocar los datos de sus costos totales, los campos significan lo siguiente:

1. item_zid: Es el id que aparece cuando usted coloca el mouse sobre su producto.
2. item_id: Es el id que aparece en la parte izquierda de la fila donde esta su producto.
3. computed_cost: Coloque el costo promedio al que normalmente compra su producto.
4. quantity: Coloque la cantidad de la ultima compra que hizo de su producto.


Nota: No es necesario colocar item_zid, colocando ítem_id (id que sale al lado izquierdo de la fila donde esta su producto) es suficiente. Los campos obligatorios para importar son:

1. item_id, o item_zid.
2. computed_cost
3. quantity

![imagen6](/img/compras/preparacion-subir-costos-iniciales-6.png)


Luego de ingresar los datos en su plantilla de impresión deberá guardarla e importarla. Recomendamos que revise las siguientes notas para ver que su archivo cumpla con los requerimientos de importación. Los pasos para importar son:

1. Seleccionar la ubicación de la plantilla de Excel.
2. Presionar “Importar costos iniciales”.


Si su plantilla de impresión esta correcta, le aparecerá un mensaje de éxito notificándole que sus costos iniciales se importaron correctamente. Si recibe un mensaje de error, revise los datos de su plantilla.

![imagen7](/img/compras/preparacion-subir-costos-iniciales-7.jpg)

## API (llamadas desde sistemas externos)

### crear costos unitarios iniciales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "computed_cost": {
      "item_id": "1",
      "quantity": "1",
      "computed_cost": "10.0",
      "date": "2018-10-17"
    }
  }' \
  https://app.zauru.com/purchases/computed_costs.json
```
