---
title: "Ordenes de Produccion"
sidebar_label: "Ordenes de Produccion"
sidebar_position: 3
---

Las ordenes de produccion representan una corrida de manufactura planificada. Se crean a partir de una lista de materiales y pasan por los estados: planificada, en ejecucion y cerrada.

## Crear una orden de produccion

Los pasos para crear una orden de produccion son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Produccion"**.
3. Seleccionar **"Nueva Orden de Produccion"**.

![imagen1](/img/produccion/ordenes-de-produccion-1.png)

Le aparecera el formulario para crear una nueva orden de produccion. Los campos que debe llenar son los siguientes:

a. **Referencia**: Coloque una breve referencia para identificar la orden de produccion en los listados.

b. **Fecha de Orden**: Coloque la fecha en que se crea la orden de produccion.

c. **Lista de Materiales**: Seleccione la lista de materiales (BOM) que define el producto a fabricar y las materias primas necesarias. Al seleccionar una lista de materiales, el item manufacturable y los detalles se cargaran automaticamente.

d. **Item Manufacturable**: Este campo se llena automaticamente al seleccionar la lista de materiales. Muestra el producto que se va a fabricar.

e. **Bodega de Producto Terminado**: Seleccione la bodega donde se recibira el producto terminado al cerrar la orden. Si la lista de materiales tiene una bodega por defecto, se asignara automaticamente.

f. **Responsable**: Seleccione el empleado responsable de ejecutar esta orden de produccion.

g. **Cantidad Objetivo**: Coloque la cantidad de producto terminado que desea producir en esta orden.

h. **Fecha y Hora de Inicio Planificada**: Coloque la fecha y hora en que se planea iniciar la produccion.

i. **Lote de Produccion**: Si desea agrupar esta orden dentro de un lote de produccion existente, seleccionelo aqui. Tambien puede crear la orden sin lote y asignarla mas tarde.

j. **Crear como Lote**: Si activa esta opcion, al guardar la orden se creara automaticamente un nuevo lote de produccion con esta orden como orden raiz. Si la lista de materiales tiene sub-ensamblajes, se generaran ordenes hijas segun la politica de generacion de sub-ensamblajes configurada.

k. **Detalles (Materias Primas)**: Los detalles se cargan automaticamente desde la lista de materiales. Por cada linea de detalle puede modificar:
   - **Cantidad Requerida**: La cantidad de materia prima necesaria (calculada como cantidad de la receta x cantidad objetivo).
   - **Bodega**: La bodega fisica desde donde se tomara la materia prima. El sistema sugerira la bodega con mayor disponibilidad de stock.
   - **Lote**: Si el item es perecedero, debera seleccionar el lote especifico del cual se consumira la materia prima.

   Para cambiar la lista de materiales, presione **"Cambiar Lista de Materiales"**. Esto limpiara los detalles actuales y cargara los de la nueva lista.

   Para agregar lineas de detalle adicionales, use los botones **"+"**, **"+2"** o **"+5"**.

![imagen2](/img/produccion/ordenes-de-produccion-2.png)

Cuando haya completado todos los campos, presione **"Crear Orden de Produccion"**.

Le aparecera un mensaje de exito notificandole que la orden de produccion fue creada exitosamente. La orden quedara en estado planificada hasta que la inicie.

![imagen3](/img/produccion/ordenes-de-produccion-3.png)

## Editar una orden de produccion

Para editar una orden de produccion planificada:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Produccion"**.
3. Seleccione la orden que desea editar.
4. Presione el boton **"Editar"**.

![imagen4](/img/produccion/ordenes-de-produccion-4.png)

Puede modificar la referencia, cantidad objetivo, responsable, fecha de inicio planificada, bodega de producto terminado y los detalles de materias primas. Si cambia la lista de materiales, los detalles se actualizaran automaticamente.

Cuando termine, presione **"Actualizar Orden de Produccion"**.

## Iniciar una orden de produccion

Para mover una orden de planificada a en ejecucion:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Produccion"**.
3. Seleccione la orden que desea iniciar.
4. Presione el boton **"Iniciar Produccion"**.

![imagen5](/img/produccion/ordenes-de-produccion-5.png)

El sistema validara que todos los items perecederos tengan un lote asignado y que haya suficiente stock de materias primas. Luego creara los movimientos de inventario para el consumo de materias primas y cambiara el estado de la orden a en ejecucion.

Le aparecera un mensaje de exito notificandole que la produccion ha iniciado y la orden aparecera en la seccion de ordenes en ejecucion.

## Mover una orden a otro lote de produccion

Para reagrupar una orden de produccion en un lote diferente:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Produccion"**.
3. Seleccione la orden que desea mover.
4. En la seccion de lote, seleccione **"Mover a Lote"** y elija el lote de destino.

![imagen6](/img/produccion/ordenes-de-produccion-6.png)

Tambien puede remover la orden de su lote actual con la opcion **"Remover del Lote"**.

## Eliminar (Anular) una orden de produccion

Para anular una orden de produccion:

1. Ir a **"Produccion"**.
2. Seleccionar **"Ordenes de Produccion"**.
3. Seleccione la orden que desea anular.
4. Presione el boton **"Eliminar"**.

Esto anulara la orden (la marcara como anulada sin eliminarla fisicamente de la base de datos). Si la orden tiene movimientos de inventario asociados, estos seran revertidos.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes de produccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/production_orders.json
```

### Obtener datos para una nueva orden de produccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/production_orders/new.json
```

### Crear una orden de produccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "production_production_order": {
      "id_number": "OP-001",
      "bill_of_material_id": 1,
      "target_quantity": 100,
      "reference": "Produccion de lote A",
      "finished_goods_agency_id": 1,
      "order_date": "2024-07-01",
      "planned_start_time": "2024-07-02T08:00:00",
      "responsible_id": 1,
      "create_as_batch": false,
      "production_order_details_attributes": {
        "0": {
          "item_id": 2,
          "agency_id": 1,
          "booked_quantity": 200,
          "reference": "Materia prima A"
        }
      }
    }
  }' \
  https://app.zauru.com/production/production_orders.json
```

### Actualizar una orden de produccion planificada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "production_production_order": {
      "target_quantity": 120,
      "reference": "Produccion de lote A actualizada",
      "production_order_details_attributes": {
        "0": {
          "id": "10",
          "booked_quantity": 240
        }
      }
    }
  }' \
  https://app.zauru.com/production/production_orders/1.json
```

### Iniciar la produccion de una orden planificada

Mueve la orden de estado planificada a en ejecucion, valida el stock de materias primas y genera los movimientos de inventario correspondientes.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/production_orders/1/start_production.json
```

### Anular una orden de produccion

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/production/production_orders/1.json
```
