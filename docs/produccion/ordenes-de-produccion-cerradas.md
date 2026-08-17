---
title: "Ordenes de Produccion Cerradas"
sidebar_label: "Ordenes de Produccion Cerradas"
sidebar_position: 5
---

Cuando una corrida termina y el producto ya entro a la bodega, la orden pasa a esta seccion con toda su contabilidad e inventario ya aplicados. Es el lugar indicado para verificar que se fabrico y que se consumio en corridas pasadas, para imprimir un comprobante de una produccion ya entregada, o para corregir un cierre que se hizo por error. Las ordenes de produccion cerradas son aquellas que ya han completado su ciclo de manufactura, con los movimientos de inventario y contabilidad procesados.

## Consultar ordenes cerradas

Los pasos para ver las ordenes de produccion cerradas son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.

![imagen1](/img/produccion/ordenes-de-produccion-cerradas-1.png)

En esta pantalla vera un listado de todas las ordenes de produccion que han sido cerradas. Puede filtrar por lote de produccion utilizando el selector en la parte superior. Para cada orden se muestra informacion como: referencia, item fabricado, cantidad objetivo, cantidad completada, responsable, fecha de cierre y tiempo acumulado de ejecucion.

## Ver detalle de una orden cerrada

Para ver la informacion completa de una orden cerrada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes Cerradas"**.
3. Seleccione la orden que desea consultar.

![imagen2](/img/produccion/ordenes-de-produccion-cerradas-2.png)

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

![imagen3](/img/produccion/ordenes-de-produccion-cerradas-3.png)

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

![imagen4](/img/produccion/ordenes-de-produccion-cerradas-4.png)

Seleccione la plantilla de impresion que desea utilizar y presione **"Imprimir"**. Tambien puede descargar la orden en formato PDF utilizando el boton **"Descargar PDF"**.

Con esto, el historial de su produccion queda completo y trazable. Si luego quiere analizar cuanto rindio cada responsable o comparar el consumo contra lo producido, los reportes de produccion le dan ese panorama a partir de las ordenes cerradas que aprendio a consultar aqui.

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

Esto devolverá un JSON similar a este:
```json
[
  {}
]
```

### Obtener listado de ordenes cerradas en formato DataTables

Endpoint optimizado para la libreria DataTables con paginacion, ordenamiento y busqueda.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40,
    "search": { "value": "" },
    "order": { "0": { "column": 0, "dir": "desc" } }
  }' \
  https://app.zauru.com/production/closed_production_orders/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 0,
  "recordsFiltered": 0,
  "data": []
}
```

### Devolver una orden cerrada a en ejecucion

Reabre una orden de produccion ya cerrada: elimina los subproductos registrados, revierte los movimientos de inventario de entrega, re-crea los movimientos de materias primas, elimina los asientos contables generados y restaura el estado a en ejecucion.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/closed_production_orders/1/return_to_running.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```
