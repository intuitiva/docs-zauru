---
title: "Ordenes de Produccion en Ejecucion"
sidebar_label: "Ordenes de Produccion en Ejecucion"
sidebar_position: 4
---

Las ordenes de produccion en ejecucion son aquellas que ya han sido iniciadas y se encuentran activas en el piso de produccion. Desde esta seccion puede monitorear el progreso, pausar, reanudar, registrar conteos parciales y cerrar las ordenes.

## Monitorear ordenes en ejecucion

Los pasos para ver las ordenes en ejecucion son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.

![imagen1](/img/produccion/ordenes-de-produccion-en-ejecucion-1.jpg)

En esta pantalla vera un listado de todas las ordenes de produccion que se encuentran en estado de ejecucion. Puede filtrar por lote de produccion utilizando el selector en la parte superior. Para cada orden se muestra informacion como: referencia, item a fabricar, cantidad objetivo, cantidad completada, responsable y tiempo acumulado de ejecucion.

## Pausar una orden en ejecucion

Para detener temporalmente una orden de produccion:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.
3. Seleccione la orden que desea pausar.
4. Presione el boton **"Pausar"**.

![imagen2](/img/produccion/ordenes-de-produccion-en-ejecucion-2.jpg)

Se le solicitara que ingrese notas opcionales sobre el motivo de la pausa. El sistema registrara el evento de pausa y acumulara el tiempo transcurrido desde el ultimo inicio.

Le aparecera un mensaje de exito notificandole que la orden ha sido pausada.

## Reanudar una orden pausada

Para reanudar una orden que fue pausada previamente:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.
3. Seleccione la orden pausada que desea reanudar.
4. Presione el boton **"Reanudar"**.

![imagen3](/img/produccion/ordenes-de-produccion-en-ejecucion-3.jpg)

El sistema registrara el evento de reanudacion y continuara acumulando el tiempo de ejecucion.

## Registrar un conteo parcial

Si su metrica de progreso esta configurada como conteo parcial, puede registrar manualmente la cantidad de unidades producidas hasta el momento:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.
3. Seleccione la orden sobre la que desea registrar el conteo.
4. Presione el boton **"Conteo Parcial"**.
5. Ingrese la cantidad de unidades producidas hasta el momento.

![imagen4](/img/produccion/ordenes-de-produccion-en-ejecucion-4.jpg)

Este conteo se utiliza para calcular el porcentaje de avance de la orden y del lote de produccion al que pertenece.

## Cerrar una orden de produccion

El cierre de una orden de produccion es el paso final del proceso de manufactura. Al cerrar la orden, el sistema realizara los movimientos de inventario, calculara los costos y generara los asientos contables correspondientes.

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.
3. Seleccione la orden que desea cerrar.
4. Presione el boton **"Cerrar"**.

![imagen5](/img/produccion/ordenes-de-produccion-en-ejecucion-5.jpg)

Le aparecera el formulario de cierre con los siguientes campos:

a. **Cantidad Completada**: Coloque la cantidad de producto terminado que efectivamente se produjo. Por defecto se sugiere la cantidad objetivo, pero puede modificarla si la produccion real fue menor (desperdicio).

b. **Detalles de Materias Primas**: Revise y ajuste las cantidades entregadas (consumidas) de cada materia prima. Las cantidades sugeridas son las cantidades requeridas originalmente.

c. **Subproductos**: Si la lista de materiales define subproductos, podra registrar las cantidades reales obtenidas de cada uno. Por cada subproducto especifique el item, la cantidad y la bodega de destino.

d. **Campo Extra**: Si esta habilitado en las configuraciones, podra ingresar el valor del campo extra (peso, volumen, etc.).

e. **Notas**: Puede agregar notas sobre el cierre de la orden.

![imagen6](/img/produccion/ordenes-de-produccion-en-ejecucion-6.jpg)

Al presionar **"Cerrar Orden"**, el sistema realizara las siguientes operaciones:

- Pausara la orden si se encuentra en ejecucion.
- Entregara el producto terminado en la bodega de producto terminado (movimiento de inventario de entrada).
- Entregara las materias primas consumidas (movimientos de inventario de salida).
- Si la cantidad completada es menor a la cantidad objetivo, registrara la diferencia como desperdicio de producto y generara el asiento contable de gasto correspondiente.
- Registrara los subproductos generados como entradas de inventario.
- Calculara los costos de produccion.
- Generara los asientos contables correspondientes (traslado de costos de cuentas de materia prima a cuenta de producto terminado).
- Si la orden pertenece a un lote, verificara si el lote debe cerrarse automaticamente.

Le aparecera un mensaje de exito notificandole que la orden fue cerrada exitosamente. La orden pasara a la seccion de ordenes cerradas.

![imagen7](/img/produccion/ordenes-de-produccion-en-ejecucion-7.jpg)

## Devolver una orden a planificada

Si necesita revertir una orden en ejecucion a estado planificada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes en Ejecucion"**.
3. Seleccione la orden que desea devolver.
4. Presione el boton **"Devolver a Planificada"**.

El sistema pausara la orden (si esta en ejecucion), liberara las reservas de lotes, anulara los movimientos de inventario no entregados y restaurara el estado a planificada.

Le aparecera un mensaje de exito confirmando la operacion.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes en ejecucion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/running_production_orders.json
```
