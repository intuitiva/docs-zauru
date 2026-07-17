---
title: "Lotes de Produccion"
sidebar_label: "Lotes de Produccion"
sidebar_position: 6
---

Los lotes de produccion permiten agrupar multiples ordenes de produccion relacionadas para monitorear su progreso de forma consolidada. Un lote puede contener una orden raiz y sus ordenes hijas de sub-ensamblajes, o cualquier conjunto de ordenes que desee agrupar.

## Ver lotes de produccion abiertos

Los pasos para ver los lotes de produccion abiertos son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Lotes de Produccion"**.

![imagen1](/img/produccion/lotes-de-produccion-1.jpg)

En esta pantalla vera un listado de todos los lotes de produccion que se encuentran en estado abierto. Para cada lote se muestra el progreso segun la metrica configurada (tiempo, conteo parcial u ordenes completadas).

## Ver detalle de un lote de produccion

Para ver la informacion completa de un lote:

1. Ir a **"Produccion"**.
2. Seleccionar **"Lotes de Produccion"**.
3. Seleccione el lote que desea consultar.

![imagen2](/img/produccion/lotes-de-produccion-2.jpg)

En la vista de detalle podra ver:
- La orden raiz del lote.
- Todas las ordenes de produccion que pertenecen al lote.
- El progreso individual de cada orden.
- El progreso consolidado del lote.
- La metrica de progreso configurada.

## Mover ordenes entre lotes

Para reagrupar ordenes de produccion entre lotes abiertos:

1. Ir a **"Produccion"**.
2. Seleccionar **"Lotes de Produccion"**.
3. Seleccione el lote que contiene la orden que desea mover.
4. En la orden deseada, seleccione **"Mover a Lote"** y elija el lote de destino de la lista de lotes abiertos disponibles.

![imagen3](/img/produccion/lotes-de-produccion-3.jpg)

Tambien puede remover una orden de su lote actual sin asignarla a otro lote.

Le aparecera un mensaje de exito notificandole que la orden fue movida exitosamente.

## Anular un lote de produccion

Solo puede anular un lote de produccion que este en estado abierto y cuyas ordenes esten todas en estado planificada. Para anular un lote:

1. Ir a **"Produccion"**.
2. Seleccionar **"Lotes de Produccion"**.
3. Seleccione el lote que desea anular.
4. Presione el boton **"Eliminar"**.

![imagen4](/img/produccion/lotes-de-produccion-4.jpg)

Al anular el lote, todas las ordenes de produccion que contiene tambien seran anuladas y sus movimientos de inventario revertidos.

Le aparecera un mensaje de exito confirmando que el lote y sus ordenes fueron anulados.

## Ver lotes anulados

Para consultar lotes que han sido anulados:

1. Ir a **"Produccion"**.
2. Seleccionar **"Lotes de Produccion"**.
3. Seleccionar la pestana **"Anulados"**.

En esta vista podra ver todos los lotes que fueron anulados, incluyendo informacion sobre quien los anulo y cuando.

## API (llamadas desde sistemas externos)

### Listar lotes de produccion abiertos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/production_batches.json
```

### Ver un lote de produccion

Devuelve el lote con su orden raiz y todas las ordenes de produccion que lo componen, junto con el progreso individual y consolidado.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/production_batches/1.json
```
