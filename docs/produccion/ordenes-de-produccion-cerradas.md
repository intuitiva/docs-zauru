---
title: "Ordenes de Produccion Cerradas"
sidebar_label: "Ordenes de Produccion Cerradas"
sidebar_position: 5
---

Las ordenes de produccion cerradas son aquellas que ya han completado su ciclo de manufactura, con los movimientos de inventario y contabilidad procesados.

## Consultar ordenes cerradas

Los pasos para ver las ordenes de produccion cerradas son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.

![imagen1](/img/produccion/ordenes-de-produccion-cerradas-1.jpg)

En esta pantalla vera un listado de todas las ordenes de produccion que han sido cerradas. Puede filtrar por lote de produccion utilizando el selector en la parte superior. Para cada orden se muestra informacion como: referencia, item fabricado, cantidad objetivo, cantidad completada, responsable, fecha de cierre y tiempo acumulado de ejecucion.

## Ver detalle de una orden cerrada

Para ver la informacion completa de una orden cerrada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.
3. Seleccione la orden que desea consultar.

![imagen2](/img/produccion/ordenes-de-produccion-cerradas-2.jpg)

En la vista de detalle podra ver:
- Datos generales de la orden (referencia, fecha, responsable, lote).
- Lista de materiales utilizada.
- Cantidad objetivo vs cantidad completada.
- Detalle de materias primas consumidas con cantidades requeridas y entregadas.
- Subproductos generados.
- Bitacora de eventos (inicio, pausas, reanudaciones, cierre).
- Tiempo acumulado de ejecucion.

## Devolver una orden cerrada a en ejecucion

Si necesita reabrir una orden de produccion ya cerrada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.
3. Seleccione la orden que desea devolver.
4. Presione el boton **"Devolver a Ejecucion"**.

![imagen3](/img/produccion/ordenes-de-produccion-cerradas-3.jpg)

El sistema realizara las siguientes operaciones:
- Eliminara los subproductos registrados.
- Revertira los movimientos de inventario de entrega.
- Re-creara los movimientos de inventario de materias primas.
- Eliminara los asientos contables generados.
- Restaurara el estado de la orden a en ejecucion.

Le aparecera un mensaje de exito notificandole que la orden ha sido devuelta a ejecucion y aparecera nuevamente en la seccion de ordenes en ejecucion.

## Impresion de ordenes cerradas

Para imprimir una orden de produccion cerrada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.
3. Seleccione la orden que desea imprimir.
4. Presione el boton **"Imprimir"**.

![imagen4](/img/produccion/ordenes-de-produccion-cerradas-4.jpg)

Seleccione la plantilla de impresion que desea utilizar y presione **"Imprimir"**. Tambien puede descargar la orden en formato PDF utilizando el boton **"Descargar PDF"**.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes cerradas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/closed_production_orders.json
```

### Obtener listado de ordenes cerradas en formato DataTables
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/closed_production_orders/datatables.json
```
