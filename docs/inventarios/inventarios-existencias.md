---
title: "Existencias"
sidebar_label: "Existencias"
sidebar_position: 2
---

La pantalla "Existencias" muestra cuánto producto hay en cada bodega: lo que está disponible, lo que está por ingresar y lo que está reservado para egresar. Tiene dos pestañas, "Existencias de ítems" y "Existencias de paquetes"; la segunda aparece solo si la entidad tiene al menos un paquete creado. Ambas pestañas comparten el selector de bodega, los filtros por tipo de producto, la nube de etiquetas y la exportación a Excel.

## Vista por bodega

Los pasos para ver las existencias de una bodega son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la bodega en el campo "Bodega" y presionar "Cambiar".

La pestaña activa por defecto es "Existencias de ítems". La tabla muestra una fila por producto con las columnas "Código", "Nombre", "Disponible", "Por Ingresar", "Por Egresar" y "Física". La columna "Física" corresponde a la mercadería que hay en la bodega, incluyendo lo reservado: disponible más por egresar.

![imagen1](/img/inventarios/inventarios-existencias-1.jpg)

Encima de la tabla hay cuatro filtros por tipo de producto, disponibles en ambas pestañas:

- **Todos**: muestra todos los productos stockables.
- **Normales**: muestra los productos de tipo normal.
- **Identificables**: muestra los productos identificables, que se llevan por número de serie.
- **Perecederos**: muestra los productos perecederos, que se llevan por lote y vencimiento.

La nube de etiquetas filtra además por las etiquetas aplicadas a los ítems. Al hacer clic sobre una fila se abre el detalle de esa existencia.

## Vista de todas las bodegas

Los pasos para ver las existencias en todas las bodegas son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Presionar "Todas las Bodegas".

La tabla muestra una fila por producto y una columna por bodega, más una columna "Total" al final con la suma de todas las bodegas. Los filtros por tipo de producto también están disponibles.

![imagen2](/img/inventarios/inventarios-existencias-2.jpg)

Al hacer clic sobre el nombre de un producto se abre el detalle del ítem con sus existencias en todas las bodegas; al hacer clic sobre una cantidad dentro de la columna de una bodega se abre el detalle de esa existencia individual.

## Detalle de una existencia de ítem

La vista "Detalles de la Existencia" muestra los datos de la bodega (nombre, tipo, supervisor, dirección y teléfono) y del ítem (código, EAN13, nombre, categoría, punto de reorden, cantidad económica de la orden y etiquetas), seguidos de las cantidades de esa existencia: "Disponible", "Por Ingresar", "Por Egresar", "Físicas", "Punto de Reorden" y "Cantidad Económica de la Orden".

Debajo aparece la tabla "Envíos", con el historial de reservaciones y entregas que afectaron esa existencia en la bodega y el saldo acumulado después de cada movimiento. Ese historial se explica en detalle en [Movimientos de los productos](/inventarios/inventarios-movimientos-de-los-productos).

Desde "Editar" se modifican el "Punto de Reorden" y la "Cantidad Económica de la Orden" de la existencia en esa bodega. El procedimiento completo está en [Punto de re orden](/inventarios/inventarios-punto-de-re-orden).

## Existencias de paquetes

La pestaña "Existencias de paquetes" muestra las existencias calculadas de cada paquete en la bodega seleccionada, con las mismas columnas y filtros que la pestaña de ítems.

La cantidad disponible de un paquete se calcula a partir de las existencias de sus componentes: para cada componente se divide el disponible del ítem entre la cantidad que exige el paquete y se toma el piso; el disponible del paquete es el mínimo entre esos valores. Si el paquete no tiene componentes stockables, el disponible se muestra como 1000.

Por ejemplo, si el paquete "Combo Oficina" lleva 2 cuadernos y 1 lapicero, y en la bodega hay 10 cuadernos y 3 lapiceros disponibles, el cálculo es: min(10/2, 3/1) = min(5, 3) = 3 paquetes disponibles.

Al hacer clic sobre un paquete se abre "Detalle de existencias de paquetes", que muestra los datos del paquete, sus métricas ("Disponible", "Por Ingresar", "Por Egresar" y "Físicas") y una tabla con el desglose de componentes. Para cada componente se muestran la cantidad requerida, las existencias del ítem ("Disponible", "Por Ingresar", "Por Egresar") y las existencias equivalentes del paquete, que son las del ítem divididas entre la cantidad requerida.

Desde la vista de todas las bodegas, al hacer clic sobre el nombre de un paquete se abre "Detalle de existencias de paquetes" con una tabla por bodega: "Disponible", "Por Ingresar", "Por Egresar" y "Físicas" del paquete en cada bodega y un total.

La creación y configuración de paquetes se documenta en [Paquetes](/inventarios/inventarios-paquetes).

## Acciones

Desde la pestaña "Existencias de ítems" están disponibles:

- **Todas las Bodegas**: cambia a la vista matriz de todas las bodegas.
- **Importar**: abre el formulario para cargar existencias iniciales desde un archivo. El procedimiento está en [Subir existencias iniciales](/inventarios/inventarios-existencia).
- **Vaciar**: elimina todas las existencias de la bodega seleccionada. La operación corre en segundo plano y la bodega queda vacía en unos minutos.
- **Exportar a Excel**: descarga un archivo XLS con las existencias de la bodega.
- **Exportar a Excel con Precios**: descarga un archivo XLS con las existencias y los precios públicos vigentes de los ítems.

Desde la pestaña "Existencias de paquetes" están disponibles "Todas las Bodegas" y "Exportar a Excel".

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

### Obtener el detalle de existencias de un paquete
Devuelve los datos del paquete junto con las métricas de existencias (`available`, `incoming`, `outgoing`, `physical`) calculadas para la bodega indicada. El `id` en la URL corresponde al identificador del paquete (bundle).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundle_stocks/1.json?warehouse=1
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "code": "COMBO-1",
  "name": "Combo Oficina",
  "metrics": {
    "available": 3,
    "incoming": 0,
    "outgoing": 0,
    "physical": 3
  },
  "warehouse_id": 1,
  …
}
```

### Obtener las existencias de todos los paquetes en todas las bodegas
Devuelve un hash con las existencias disponibles de cada paquete por bodega, donde la llave es `[agency_id, bundle_id]` y `id` es el identificador del paquete.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundle_stocks/all_warehouses.json
```

Esto devolverá un JSON similar a este:
```json
{
  "[25, 2]": {
    "available": 0,
    "id": 2
  },
  "[8580, 2]": {
    "available": 3,
    "id": 2
  }
}
```

### Obtener las existencias de un paquete en todas las bodegas con totales
Devuelve los totales (`available`, `incoming`, `outgoing`) del paquete sumados en todas las bodegas no virtuales y una llave por cada bodega con sus métricas (`available`, `incoming`, `outgoing`, `physical`). El `id` en la URL corresponde al identificador del paquete (bundle).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundle_stocks/1/item.json
```

Esto devolverá un JSON similar a este:
```json
{
  "available": 3,
  "incoming": 0,
  "outgoing": 0,
  "1": {
    "available": 3,
    "incoming": 0,
    "outgoing": 0,
    "physical": 3
  },
  "2": {
    "available": 0,
    "incoming": 0,
    "outgoing": 0,
    "physical": 0
  }
}
```
