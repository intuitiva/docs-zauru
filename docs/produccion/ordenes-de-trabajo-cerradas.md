---
title: "Ordenes de Trabajo Cerradas"
sidebar_label: "Ordenes de Trabajo Cerradas"
sidebar_position: 9
---

Las ordenes de trabajo cerradas son aquellas que ya han sido completadas, con los movimientos de inventario y contabilidad procesados.

## Consultar ordenes de trabajo cerradas

Los pasos para ver las ordenes de trabajo cerradas son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo Cerradas"**.

![imagen1](/img/produccion/ordenes-de-trabajo-cerradas-1.png)

En esta pantalla vera un listado de todas las ordenes de trabajo que han sido cerradas. Puede filtrar por etiqueta utilizando el selector de tags en la parte superior de la lista. Para cada orden se muestra informacion como: referencia, agencia, responsable, factura asociada, etiqueta, lote/serial de destino y fecha de cierre.

## Ver detalle de una orden de trabajo cerrada

Para ver la informacion completa de una orden de trabajo cerrada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo Cerradas"**.
3. Seleccione la orden que desea consultar.

![imagen2](/img/produccion/ordenes-de-trabajo-cerradas-2.png)

En la vista de detalle podra ver:
- Datos generales de la orden (referencia, fecha, responsable, agencia de origen y destino).
- Factura asociada.
- Lote o numero de serie de destino.
- Etiqueta asignada.
- Detalle de items y cantidades requeridas vs entregadas.
- Costos computados.
- Asientos contables generados.

## Reabrir una orden de trabajo cerrada

Si necesita revertir el cierre de una orden de trabajo:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo Cerradas"**.
3. Seleccione la orden que desea reabrir.
4. Presione el boton **"Reabrir"**.

![imagen3](/img/produccion/ordenes-de-trabajo-cerradas-3.png)

El sistema realizara las siguientes operaciones:
- Revertira los movimientos de inventario de salida.
- Eliminara los asientos contables generados.
- Limpiara las cantidades entregadas y los costos promedio.
- Restaurara el estado de la orden a abierta.

Le aparecera un mensaje de exito notificandole que la orden ha sido reabierta y aparecera nuevamente en la seccion de ordenes de trabajo abiertas.

## Impresion de ordenes de trabajo

Para imprimir una orden de trabajo:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo Cerradas"**.
3. Seleccione la orden que desea imprimir.
4. Presione el boton **"Imprimir"**.

![imagen4](/img/produccion/ordenes-de-trabajo-cerradas-4.png)

Seleccione la plantilla de impresion que desea utilizar y presione **"Imprimir"**. Tambien puede descargar la orden en formato PDF utilizando el boton **"Descargar PDF"**.

## Busqueda y filtrado

Al igual que en las ordenes de trabajo abiertas, puede buscar por:
- Etiqueta (tag) y su jerarquia completa.
- Numero de orden, referencia o ZID.
- Nombre de agencia de origen o destino.
- Nombre del responsable.
- Numero de factura asignada o numero de orden de venta.
- Lote de destino (nombre de item o nombre de lote).
- Numero de serie de destino.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes de trabajo cerradas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/closed_work_orders.json
```

### Obtener listado de ordenes de trabajo cerradas en formato DataTables

Endpoint optimizado para la libreria DataTables con paginacion, ordenamiento, busqueda y filtrado por etiqueta.

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
  https://app.zauru.com/production/closed_work_orders/datatables.json
```
