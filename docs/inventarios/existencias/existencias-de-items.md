---
title: "Existencias de ítems"
sidebar_label: "Existencias de ítems"
sidebar_position: 1
---

La pestaña "Existencias de ítems" muestra las existencias de cada producto por bodega. Cada columna de la tabla es un enlace a una vista distinta; esta página explica qué información contiene cada una.

## Vista por bodega

Los pasos para ver las existencias de una bodega son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la bodega en el campo "Bodega" y presionar "Cambiar".

La tabla muestra una fila por producto con las columnas "Código", "Nombre", "Disponible", "Por Ingresar", "Por Egresar", "Física" y una columna de acciones. El significado de cada columna y su enlace:

- **Código**: texto plano, no es un enlace.
- **Nombre**: enlace a "Detalles de las existencias de Item", que muestra las existencias de ese producto en todas las bodegas y el historial completo de envíos. Se explica más abajo.
- **Disponible**: enlace a "Detalles de la Existencia", que muestra los datos de esa existencia individual en la bodega seleccionada y el historial de envíos que la afectaron. Se explica más abajo.
- **Por Ingresar**: texto plano, no es un enlace.
- **Por Egresar**: texto plano, no es un enlace.
- **Física**: texto plano. Es la suma de Disponible más Por Egresar, es decir, la mercadería que hay en la bodega incluyendo lo reservado.
- **Columna de acciones**: enlace a "Detalles de la Existencia", la misma vista que abre el Disponible.

Cuando un producto está por debajo de su punto de reorden, la fila aparece en rojo.

![imagen1](/img/inventarios/inventarios-existencias-1.jpg)

## Vista de todas las bodegas

Los pasos para ver las existencias en todas las bodegas son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Presionar "Todas las Bodegas".

La tabla muestra una fila por producto y una columna por bodega, más una columna "Total". El significado de cada columna y su enlace:

- **ID**: enlace a "Detalles de las existencias de Item", que muestra las existencias de ese producto en todas las bodegas y el historial completo de envíos.
- **Código**: texto plano, no es un enlace.
- **Nombre**: enlace a "Detalles de las existencias de Item".
- **Cantidad por bodega**: cada celda es un enlace a "Detalles de la Existencia" de ese producto en esa bodega. Si la celda muestra 0, no hay enlace.
- **Total**: texto plano en negrita, no es un enlace. Es la suma de las cantidades de todas las bodegas.
- **Columna de acciones (icono camión)**: enlace a "Nueva Reservación" con el producto preseleccionado, para crear un envío directamente.

![imagen2](/img/inventarios/inventarios-existencias-2.jpg)

## Detalles de la Existencia

Esta vista se abre al hacer clic sobre el Disponible (en la vista por bodega) o sobre una cantidad en la columna de una bodega (en la vista de todas las bodegas). Muestra la información de una existencia individual: un producto en una bodega específica.

Contiene tres bloques:

1. **Agencia**: nombre, tipo, supervisor, dirección y teléfono de la bodega. El nombre de la bodega es un enlace a su configuración.
2. **Ítem**: ID, código, EAN13, nombre, categoría, punto de reorden, cantidad económica de la orden y etiquetas. El nombre del ítem es un enlace a su configuración.
3. **Cantidades**: "Disponible", "Por Ingresar", "Por Egresar", "Físicas", "Punto de Reorden" y "Cantidad Económica de la Orden" de esa existencia.

Debajo aparece la tabla "Envíos", con el historial de reservaciones y entregas que afectaron esa existencia en la bodega. Cada fila muestra el identificador del envío, la referencia, si necesita transporte, la fecha de entrega estimada, la fecha de entrega real, la bodega contraparte, cuánto entró, cuánto salió, el saldo disponible después de cada movimiento, el saldo por egresar y el saldo por ingresar. El historial se lee de abajo hacia arriba: la última fila corresponde al movimiento más reciente. Ese historial se explica en detalle en [Movimientos de los productos](/inventarios/inventarios-movimientos-de-los-productos).

Desde "Editar" se modifican el "Punto de Reorden" y la "Cantidad Económica de la Orden" de la existencia en esa bodega. El procedimiento completo está en [Punto de re orden](/inventarios/inventarios-punto-de-re-orden).

## Detalles de las existencias de Item

Esta vista se abre al hacer clic sobre el Nombre o el ID de un producto (en cualquiera de las dos vistas). Muestra la información del producto y sus existencias en todas las bodegas.

Contiene:

1. **Datos del ítem**: ID, código, EAN13, nombre, punto de reorden, cantidad económica de la orden y etiquetas. El nombre del ítem es un enlace a su configuración. Si el ítem tiene imagen, se muestra a la derecha.
2. **Tabla por bodega**: una fila por métrica ("Disponible", "Por Ingresar", "Por Egresar", "Físicas") y una columna por bodega, más una columna "Total". En las bodegas no virtuales, el valor de "Disponible" es un enlace a "Detalles de la Existencia" de ese producto en esa bodega. En las bodegas virtuales, los valores son texto plano.
3. **Botón "Detalles del Ítem"**: enlace a la configuración completa del producto.
4. **Tabla "Envíos"**: historial completo de envíos que incluyen ese producto, con filtros por tipo de movimiento ("Todos", "Ingresos", "Salidas", "Transferencias"). Cada fila muestra el identificador, la referencia, si necesita transporte, la fecha de entrega estimada, la fecha de entrega real, la bodega origen, la bodega destino, el tipo de movimiento, la cantidad reservada, la cantidad entregada y las notas.

## Acciones

Desde la pestaña "Existencias de ítems" están disponibles:

- **Todas las Bodegas**: cambia a la vista matriz de todas las bodegas.
- **Importar**: abre el formulario para cargar existencias iniciales desde un archivo. El procedimiento está en [Subir existencias iniciales](/inventarios/inventarios-existencia).
- **Vaciar**: elimina todas las existencias de la bodega seleccionada. La operación corre en segundo plano y la bodega queda vacía en unos minutos.
- **Exportar a Excel**: descarga un archivo XLS con las existencias de la bodega.
- **Exportar a Excel con Precios**: descarga un archivo XLS con las existencias y los precios públicos vigentes de los ítems.

## API (llamadas desde sistemas externos)

### Obtener todas las existencias en una bodega
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks.json?warehouse=1
```

Esto devolverá un JSON similar a este:
```json
[
   {
	"item_id": 1,
	"item_name":"Producto",
	"item_code":"P1",
	"stock_id": 1,
	"stock_available":100,
	"stock_incoming":10,
	"stock_outgoing":1,
	"stock_physical":101,
	"stock_reorder_point":110,
	"stock_updated_at":"2019-11-25T22:43:19Z"
   },
   {…},
   …
]
```

### Obtener las existencias de todas las bodegas de un producto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/1/item.json
```

Esto devolverá un JSON similar a este:
```json
{
  "available":100,
  "outgoing":1,
  "incoming":10,
  "1":{"agency_id": 1,"available":33},
  "2":{"agency_id": 2,"available":33},
  "3":{"agency_id": 3,"available":34}
}
```

### Obtener las existencias de todas las bodegas
Devuelve un hash con las existencias disponibles de cada producto por bodega, donde la llave es `[agency_id, item_id]`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/all_warehouses.json
```

Esto devolverá un JSON similar a este:
```json
{
  "[25, 157]": {
    "available": "0.0",
    "id": 1
  },
  "[25, 308438]": {
    "available": "1.0",
    "id": 2
  }
}
```

### Obtener el detalle de una existencia
Devuelve el registro de existencia (stock) de un producto en una bodega específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/stocks/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5222027",
  "entity_id": "1303",
  "item_id": "938505",
  "agency_id": "8248",
  "available": "-18.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "reorder_point": "0.000000",
  "economic_order_quantity": "0.000000",
  "created_at": "2026-04-10 13:56:54.755088",
  "updated_at": "2026-06-25 15:13:09.943073"
}
```

### Actualizar el punto de re orden de una existencia
Actualiza el punto de re orden y la cantidad económica de orden de una existencia específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "stock": {
      "reorder_point": 30,
      "economic_order_quantity": 50
    }
  }' \
  https://app.zauru.com/inventories/stocks/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5222027",
  "entity_id": "1303",
  "item_id": "938505",
  "agency_id": "8248",
  "available": "-18.000000",
  "incoming": "0.000000",
  "outgoing": "0.000000",
  "reorder_point": "0.000000",
  "economic_order_quantity": "0.000000",
  "created_at": "2026-04-10 13:56:54.755088",
  "updated_at": "2026-06-25 15:13:09.943073"
}
```

### Vaciar las existencias de una bodega
Elimina todas las existencias de una bodega. La operación se ejecuta de forma asíncrona en segundo plano. El `id` en la URL corresponde al identificador de la bodega (agency).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/stocks/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
