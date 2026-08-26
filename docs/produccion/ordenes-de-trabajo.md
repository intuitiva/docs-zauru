---
title: "Ordenes de Trabajo"
sidebar_label: "Ordenes de Trabajo"
sidebar_position: 8
---

Si en su operacion hay consumos internos que no siguen una corrida formal de manufactura — materiales para mantenimiento, repuestos para un equipo o insumos que se entregan a un area — la orden de trabajo es la forma correcta de registrarlos para que el inventario y la contabilidad queden al dia. Es el registro que usa cuando algo sale de bodega hacia un uso interno. Las ordenes de trabajo permiten registrar consumos internos de inventario; pueden contener items individuales o paquetes (bundles), y soportan el manejo de lotes y numeros de serie.

## Crear una orden de trabajo

Los pasos para crear una orden de trabajo son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccionar **"Nueva Orden de Trabajo"**.

![imagen1](/img/produccion/ordenes-de-trabajo-1.png)

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

![imagen2](/img/produccion/ordenes-de-trabajo-2.png)

Cuando haya completado todos los campos, presione **"Crear Orden de Trabajo"**.

Le aparecera un mensaje de exito notificandole que la orden de trabajo fue creada exitosamente. La orden quedara en estado abierta.

![imagen3](/img/produccion/ordenes-de-trabajo-3.png)

## Explotar un paquete en sus componentes

Al crear o editar una orden de trabajo, si selecciona un paquete (bundle), puede expandirlo en sus componentes individuales para mayor control:

1. En el formulario de creacion o edicion, seleccione el paquete en el campo de detalle.
2. Seleccione la accion **"Explotar"** en el pie del formulario.

![imagen4](/img/produccion/ordenes-de-trabajo-4.png)

El sistema expandira el paquete en sus componentes. Para items identificables (con numero de serie), se crearan lineas individuales de cantidad 1 por cada numero de serie. Para items perecederos (con lote), se mostraran los lotes disponibles.

## Editar una orden de trabajo

Para editar una orden de trabajo abierta:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccione la orden que desea editar.
4. Presione el boton **"Editar"**.

![imagen5](/img/produccion/ordenes-de-trabajo-5.png)

Puede modificar los campos de la orden y las lineas de detalle. Para refrescar las cantidades disponibles de inventario sin guardar, utilice el boton **"Refrescar"**.

Cuando termine, presione **"Actualizar Orden de Trabajo"**.

## Cerrar una orden de trabajo

Cuando el material ya fue consumido y quiere dejar el inventario y la contabilidad al dia, llega el momento de cerrar. El cierre de una orden de trabajo genera los movimientos de inventario y asientos contables correspondientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Trabajo"**.
3. Seleccione la orden que desea cerrar.
4. Presione el boton **"Cerrar"**.

![imagen6](/img/produccion/ordenes-de-trabajo-6.png)

Le aparecera el formulario de cierre donde debera confirmar o ajustar las cantidades entregadas de cada linea de detalle:

a. **Cantidad Entregada**: Verifique y ajuste la cantidad de cada item que efectivamente se entrego. Por defecto se sugiere la cantidad requerida.

b. **Costo Unitario**: El sistema calculara automaticamente el costo unitario basado en el costo promedio del item o los costos computados.

Al presionar **"Cerrar Orden de Trabajo"**, el sistema realizara las siguientes operaciones:

- Generara los movimientos de inventario de salida para los items consumidos.
- Si la orden tiene asignado un lote de destino, numero de serie de destino o agencia de destino, ajustara los costos promedio de esos elementos.
- Creara los asientos contables debitando la cuenta de destino de costos de ordenes de trabajo y acreditando las cuentas de inventario correspondientes.
- Calculara los costos computados para la orden.

Le aparecera un mensaje de exito notificandole que la orden de trabajo fue cerrada exitosamente.

![imagen7](/img/produccion/ordenes-de-trabajo-7.png)

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

Una vez cerrada, la orden pasara a la seccion de ordenes de trabajo cerradas, donde podra consultarla, imprimirla o reabrirla si descubre que falto registrar algo. Si la etiqueto, los reportes consolidados por etiqueta le mostraran todos estos consumos agrupados.

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

Esto devolverá un JSON similar a este:
```json
[
  {}
]
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

Esto devolverá un JSON similar a este:
```json
{}
```

### Crear una orden de trabajo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "production_work_order": {
      "id_number": "OT-001",
      "order_date": "2024-07-01",
      "reference": "Consumo interno de materiales",
      "agency_id": 1,
      "responsible_id": 1,
      "needs_delivery": false,
      "work_order_details_attributes": {
        "0": {
          "item_id": 2,
          "booked_quantity": 5
        }
      }
    }
  }' \
  https://app.zauru.com/production/open_work_orders.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 3,
  "id_number": "OT-001",
  "agency_id": 2,
  "reference": "Consumo interno de materiales",
  "order_date": "2024-07-01",
  "needs_delivery": false,
  "closed": false,
  "closed_at": null,
  "closer_id": null,
  "voided": false,
  "voided_at": null,
  "voider_id": null,
  "assigned_invoice_id": null,
  "assigned_agency_id": null,
  "assigned_lot_id": null,
  "assigned_serial_id": null,
  "entity_id": 3,
  "creator_id": 4,
  "updater_id": 4,
  "responsible_id": 2,
  "created_at": "2026-08-06T04:17:35.337Z",
  "updated_at": "2026-08-06T04:17:35.337Z",
  "tag_id": null,
  "memo": null
}
```

### Ver una orden de trabajo

Devuelve la orden de trabajo abierta con todos sus datos.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/open_work_orders/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar una orden de trabajo abierta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "production_work_order": {
      "reference": "Consumo interno actualizado",
      "work_order_details_attributes": {
        "0": {
          "id": "10",
          "booked_quantity": 8
        }
      }
    }
  }' \
  https://app.zauru.com/production/open_work_orders/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Cerrar una orden de trabajo

Confirma las cantidades entregadas de cada detalle y genera los movimientos de inventario y asientos contables correspondientes.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "production_work_order": {
      "work_order_details_attributes": {
        "0": {
          "id": "10",
          "delivered_quantity": 5
        }
      }
    }
  }' \
  https://app.zauru.com/production/open_work_orders/1/update_close.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Anular una orden de trabajo abierta

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/production/open_work_orders/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener listado de ordenes de trabajo abiertas en formato DataTables

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
  https://app.zauru.com/production/open_work_orders/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 3,
  "recordsFiltered": 3,
  "data": [
    {
      "zid": "<a href=\"/production/open_work_orders/428\">3</a>",
      "num": "OT-001",
      "odt": "01 de jul de 2024",
      "ag": "15 CALLE",
      "asg": "",
      "rsp": "Empleado Vendedor Senior",
      "tg": "",
      "lns": 1,
      "act": "<a title=\"Detalles\" href=\"/production/open_work_orders/428\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/production/open_work_orders/428/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Cerrar\" href=\"/production/open_work_orders/428/close\"><i class=\"fa fa-check\"></i></a><a title=\"Anular\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/production/open_work_orders/428?destroy=true\"><i class=\"fa fa-trash-o\"></i></a>",
      "DT_RowId": "production-open-work-order-428"
    },
    {
      "zid": "<a href=\"/production/open_work_orders/427\">2</a>",
      "num": "OT-001",
      "odt": "01 de jul de 2024",
      "ag": "15 CALLE",
      "asg": "",
      "rsp": "Empleado Vendedor Senior",
      "tg": "",
      "lns": 1,
      "act": "<a title=\"Detalles\" href=\"/production/open_work_orders/427\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/production/open_work_orders/427/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Cerrar\" href=\"/production/open_work_orders/427/close\"><i class=\"fa fa-check\"></i></a><a title=\"Anular\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/production/open_work_orders/427?destroy=true\"><i class=\"fa fa-trash-o\"></i></a>",
      "DT_RowId": "production-open-work-order-427"
    }
  ]
}
```

### Obtener listado de ordenes de trabajo anuladas en formato DataTables

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
  https://app.zauru.com/production/open_work_orders/datatables_voided.json
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
