---
title: "Lotes"
sidebar_label: "Lotes"
sidebar_position: 8
---

Este tutorial esta enfocado en la creación y el manejo de lotes de inventario.

Los lotes nos sirven para poder llevar control de productos perecederos con fecha de expiración. Para usar lotes, el ítem debe ser de tipo "Perecedero" (product_type = 3).

## Crear un ítem perecedero

El primer paso para crear un lote es hacer un Ítem del producto que sea "Perecedero" como se muestra en la siguiente imagen. Para mas detalles sobre como crear ítems refiérase al tutorial de "Crear Ítems".

![imagen1](/img/inventarios/inventarios-lotes-1.jpg)

## Crear un nuevo lote

Los pasos para crear un nuevo lote son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccionar "Nuevo Lote".

![imagen2](/img/inventarios/inventarios-lotes-2.jpg)

Le aparecerán las opciones para crear un nuevo lote, los pasos para crearlo son los siguientes:

1. Coloque el producto perecedero previamente creado.
2. Coloque el nombre del lote.
3. Coloque la fecha en la que expira el lote.
4. Seleccione "Crear lote".

![imagen3](/img/inventarios/inventarios-lotes-3.jpg)

## Ingresar producto a un lote

Luego de crear el lote, tendrá que hacer una reservación para ingresar producto a ese lote.

Los pasos para hacerlo son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación".

![imagen4](/img/inventarios/inventarios-lotes-4.jpg)

Le aparecerán las opciones para crear una nueva reservación. Los campos que debe colocar son los siguientes:

a. Coloque una referencia de la reservación que esta creando.

b. Coloque la fecha de entrega estimada.

c. Seleccione la bodega "Vendor (Proveedor) y luego coloque la bodega destino donde ingresara el producto.

d. Coloque el producto y seleccione el lote previamente creado, luego coloque la cantidad de producto que ingresara al lote.

Por ultimo presione "Crear envío".

![imagen5](/img/inventarios/inventarios-lotes-5.jpg)

Le aparecerá un mensaje en la pantalla notificándole que la reservación fue creada exitosamente. En la parte inferior de la pagina podrá encontrar los detalles de la reservación y la podrá entregar.

![imagen6](/img/inventarios/inventarios-lotes-6.jpg)

## Ver lotes por bodega

Para consultar los lotes y sus existencias en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccione la bodega que desea consultar.

Podrá ver todos los lotes que tienen existencias en esa bodega, con su cantidad disponible, entrante y saliente. También puede filtrar los lotes por estado:

- **Activos**: Lotes que aún no han expirado.
- **Expirados**: Lotes cuya fecha de expiración ya pasó.
- **Todos**: Muestra todos los lotes sin filtrar por estado.

## Ver lotes en todas las bodegas

Para ver todos los lotes en todas las bodegas:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccionar la pestaña "Todas las bodegas".

Esta vista muestra una cuadrícula con los lotes y sus cantidades disponibles en cada bodega.

![imagen7](/img/inventarios/inventarios-lotes-all-warehouses.jpg)

## Ver detalle de un lote

Al hacer clic sobre un lote en la vista principal, podrá ver:

- Los datos del lote: producto, nombre, fecha de expiración.
- Las existencias del lote desglosadas por bodega.
- El historial de envíos que han afectado este lote.

## Ver detalle de existencias de un lote en una bodega

Para ver el detalle de existencias de un lote específico en una bodega específica (LotStock):

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccionar la pestaña "Todas las bodegas".
4. Hacer clic sobre la cantidad del lote en la bodega deseada.

Esto mostrará:
- La cantidad disponible, entrante y saliente del lote en esa bodega.
- El historial cronológico de envíos que movieron este lote en esta bodega.
- El saldo acumulado después de cada movimiento.

## Ver lotes de un producto específico

Para consultar todos los lotes de un producto en particular:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Hacer clic sobre el nombre del producto en la lista de lotes.

Esto mostrará todos los lotes asociados a ese producto, independientemente de la bodega.

## Exportar lotes

Puede exportar el listado de lotes y sus existencias a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccionar "Exportar lotes".

Esto descargará un archivo XLS con todos los lotes, productos, fechas de expiración y existencias por bodega.

## Editar un lote

Para modificar los datos de un lote:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Buscar el lote que desea editar.
4. Seleccionar "Editar".

Podrá modificar el nombre del lote y la fecha de expiración.

## Eliminar un lote

Para eliminar un lote:

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Buscar el lote que desea eliminar.
4. Seleccionar "Eliminar".

## Vaciar existencias de lotes

Si necesita eliminar todas las existencias de lotes en una bodega (por ejemplo, para corregir un error masivo):

1. Ir a "Inventarios".
2. Seleccionar "Lotes".
3. Seleccionar la opción "Vaciar existencias de lote".

Esta acción eliminará todas las existencias de lotes y se ejecuta de forma asíncrona en segundo plano. Utilice esta función con precaución ya que los datos no se pueden recuperar.

## API (llamadas desde sistemas externos)

### Obtener todos los lotes de una bodega
Devuelve la lista de lotes activos con sus existencias en la bodega especificada.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/lots.json?warehouse=1
```

### Obtener los lotes de todas las bodegas
Devuelve todos los lotes activos con el producto asociado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/lots/all_warehouses.json
```

### Obtener el detalle de un lote
Devuelve los datos del lote y las existencias desglosadas por bodega.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/lots/1.json
```

### Obtener los lotes de un producto
Devuelve todos los lotes asociados a un producto específico.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/lots/1/item.json
```

### Crear un lote
Crea un nuevo lote para un ítem perecedero.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "lot": {
      "item_id": "3",
      "name": "Lote A",
      "description": "Descripción opcional",
      "expires": "2019-12-31"
    }
  }' \
  https://app.zauru.com/inventories/lots.json
```

### Actualizar un lote
Actualiza los datos de un lote existente (nombre, descripción y fecha de expiración).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "lot": {
      "name": "Lote A actualizado",
      "expires": "2020-01-31"
    }
  }' \
  https://app.zauru.com/inventories/lots/1.json
```

### Eliminar un lote
Elimina un lote. Solo es posible si no tiene movimientos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/lots/1.json
```

### Vaciar existencias de lotes de una bodega
Elimina todas las existencias de lotes de una bodega. La operación se ejecuta de forma asíncrona en segundo plano. El `id` en la URL corresponde al identificador de la bodega (agency).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/lots/1/empty_lot_stock.json
```
