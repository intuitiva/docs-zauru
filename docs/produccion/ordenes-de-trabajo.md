---
title: "Ordenes de Trabajo"
sidebar_label: "Ordenes de Trabajo"
sidebar_position: 8
---

Las ordenes de trabajo permiten registrar consumos internos de inventario, ya sea para procesos productivos que no siguen el flujo de ordenes de produccion o para cualquier otro uso interno de materiales. Las ordenes de trabajo pueden contener items individuales o paquetes (bundles), y soportan el manejo de lotes y numeros de serie.

## Crear una orden de trabajo

Los pasos para crear una orden de trabajo son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccionar **"Nueva Orden de Trabajo"**.

![imagen1](/img/produccion/ordenes-de-trabajo-1.jpg)

Le aparecera el formulario para crear una nueva orden de trabajo. Los campos que debe llenar son los siguientes:

a. **Referencia**: Coloque una breve referencia para identificar la orden de trabajo.

b. **Fecha de Orden**: Coloque la fecha en que se crea la orden de trabajo. Por defecto se asigna la fecha actual.

c. **Requiere Entrega**: Active este cheque si la orden de trabajo requiere una entrega formal de los materiales (genera un envio de inventario).

d. **Bodega de Origen**: Seleccione la bodega fisica desde donde se tomaran los materiales. Puede ser una bodega fisica o una bodega virtual.

e. **Responsable**: Seleccione el empleado responsable de la orden de trabajo.

f. **Factura Asignada**: Si la orden de trabajo esta relacionada con una factura de venta, seleccionela aqui. Al seleccionar una factura, la agencia se asignara automaticamente desde la factura.

g. **Agencia de Destino**: Seleccione la agencia (cliente/proveedor) de destino de la orden de trabajo.

h. **Lote de Destino**: Si los materiales se asignaran a un lote especifico, seleccionelo aqui.

i. **Numero de Serie de Destino**: Si los materiales se asignaran a un numero de serie especifico, seleccionelo aqui.

j. **Etiqueta**: Asigne una etiqueta (tag) para categorizar la orden de trabajo y facilitar su busqueda y generacion de reportes.

k. **Centro de Costos**: Seleccione el centro de costos al que se imputaran los costos de esta orden de trabajo.

l. **Detalles**: Agregue los items o paquetes que conforman la orden de trabajo. Por cada linea de detalle debe especificar:
   - **Item o Paquete**: Seleccione el item de inventario que se consumira. Si el codigo del item comienza con "b" seguido de un numero (ej. "b42"), el sistema lo interpretara como un paquete (bundle).
   - **Cantidad**: La cantidad requerida del item o paquete.
   - **Lote**: Si el item es perecedero, seleccione el lote especifico del cual se tomara (se muestran las cantidades disponibles y por ingresar).
   - **Numero de Serie**: Si el item es identificable, seleccione el numero de serie especifico.
   - **Centro de Costos**: Puede asignar un centro de costos diferente al de la orden para esta linea especifica.

   Para agregar mas lineas de detalle, presione el boton **"+"** o **"+N"** para agregar una cantidad especifica de filas.

   Si desea utilizar un paquete y necesita visualizar o editar sus componentes, utilice la funcion **"Explotar"** que expande el paquete en sus componentes individuales.

![imagen2](/img/produccion/ordenes-de-trabajo-2.jpg)

Cuando haya completado todos los campos, presione **"Crear Orden de Trabajo"**.

Le aparecera un mensaje de exito notificandole que la orden de trabajo fue creada exitosamente. La orden quedara en estado abierta.

![imagen3](/img/produccion/ordenes-de-trabajo-3.jpg)

## Explotar un paquete en sus componentes

Al crear o editar una orden de trabajo, si selecciona un paquete (bundle), puede expandirlo en sus componentes individuales para mayor control:

1. En el formulario de creacion o edicion, seleccione el paquete en el campo de detalle.
2. Seleccione la accion **"Explotar"** en el pie del formulario.

![imagen4](/img/produccion/ordenes-de-trabajo-4.jpg)

El sistema expandira el paquete en sus componentes. Para items identificables (con numero de serie), se crearan lineas individuales de cantidad 1 por cada numero de serie. Para items perecederos (con lote), se mostraran los lotes disponibles.

## Editar una orden de trabajo

Para editar una orden de trabajo abierta:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccione la orden que desea editar.
4. Presione el boton **"Editar"**.

![imagen5](/img/produccion/ordenes-de-trabajo-5.jpg)

Puede modificar los campos de la orden y las lineas de detalle. Para refrescar las cantidades disponibles de inventario sin guardar, utilice el boton **"Refrescar"**.

Cuando termine, presione **"Actualizar Orden de Trabajo"**.

## Cerrar una orden de trabajo

El cierre de una orden de trabajo genera los movimientos de inventario y asientos contables correspondientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccione la orden que desea cerrar.
4. Presione el boton **"Cerrar"**.

![imagen6](/img/produccion/ordenes-de-trabajo-6.jpg)

Le aparecera el formulario de cierre donde debera confirmar o ajustar las cantidades entregadas de cada linea de detalle:

a. **Cantidad Entregada**: Verifique y ajuste la cantidad de cada item que efectivamente se entrego. Por defecto se sugiere la cantidad requerida.

b. **Costo Unitario**: El sistema calculara automaticamente el costo unitario basado en el costo promedio del item o los costos computados.

Al presionar **"Cerrar Orden de Trabajo"**, el sistema realizara las siguientes operaciones:

- Generara los movimientos de inventario de salida para los items consumidos.
- Si la orden tiene asignado un lote de destino, numero de serie de destino o agencia de destino, ajustara los costos promedio de esos elementos.
- Creara los asientos contables debitando la cuenta de destino de costos de ordenes de trabajo y acreditando las cuentas de inventario correspondientes.
- Calculara los costos computados para la orden.

Le aparecera un mensaje de exito notificandole que la orden de trabajo fue cerrada exitosamente.

![imagen7](/img/produccion/ordenes-de-trabajo-7.jpg)

## Eliminar (Anular) una orden de trabajo

Para anular una orden de trabajo abierta:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccione la orden que desea anular.
4. Presione el boton **"Eliminar"**.

La orden sera marcada como anulada y los movimientos de inventario asociados seran revertidos.

## Busqueda y filtrado

Las ordenes de trabajo pueden filtrarse por multiples criterios:
- Etiqueta (tag) y su jerarquia completa (ej. "Departamento > Area > Proceso").
- Numero de orden, referencia o ZID.
- Nombre de agencia de origen o destino.
- Nombre del responsable.
- Numero de factura asignada o numero de orden de venta.
- Lote de destino (nombre de item o nombre de lote).
- Numero de serie de destino (nombre de serial, ID o nombre de item).

Puede utilizar la barra de busqueda en la parte superior de la lista para encontrar ordenes rapidamente.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes de trabajo abiertas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/open_work_orders.json
```

### Obtener datos para una nueva orden de trabajo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/open_work_orders/new.json
```
