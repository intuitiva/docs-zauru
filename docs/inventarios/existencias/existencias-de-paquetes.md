---
title: "Existencias de paquetes"
sidebar_label: "Existencias de paquetes"
sidebar_position: 2
---

La pestaña "Existencias de paquetes" muestra las existencias calculadas de cada paquete en la bodega seleccionada. Un paquete no tiene existencias propias: sus existencias se calculan a partir del stock de sus componentes. Esta página explica cómo se calculan, qué información muestra cada vista y qué enlace hay en cada columna.

## Cálculo del disponible de un paquete

La cantidad disponible de un paquete se calcula a partir de las existencias de sus componentes: para cada componente se divide el disponible del ítem entre la cantidad que exige el paquete y se toma el piso; el disponible del paquete es el mínimo entre esos valores. Si el paquete no tiene componentes stockables, el disponible se muestra como 1000.

Por ejemplo, si el paquete "Combo Oficina" lleva 2 cuadernos y 1 lapicero, y en la bodega hay 10 cuadernos y 3 lapiceros disponibles, el cálculo es: min(10/2, 3/1) = min(5, 3) = 3 paquetes disponibles.

## Vista por bodega

Los pasos para ver las existencias de paquetes de una bodega son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la pestaña "Existencias de paquetes".
4. Seleccionar la bodega en el campo "Bodega" y presionar "Cambiar".

La tabla muestra una fila por paquete con las columnas "Código", "Nombre", "Disponible", "Por Ingresar", "Por Egresar", "Física" y una columna de acciones. El significado de cada columna y su enlace:

- **Código**: texto plano, no es un enlace.
- **Nombre**: enlace a "Detalle de existencias de paquetes" en todas las bodegas, que muestra las existencias del paquete desglosadas por bodega. Se explica más abajo.
- **Disponible**: enlace a "Detalle de existencias de paquetes" en la bodega seleccionada, que muestra las métricas del paquete y el desglose de componentes. Se explica más abajo.
- **Por Ingresar**: texto plano, no es un enlace.
- **Por Egresar**: texto plano, no es un enlace.
- **Física**: texto plano. Es la suma de Disponible más Por Egresar.
- **Columna de acciones**: enlace a "Detalle de existencias de paquetes" en la bodega seleccionada, la misma vista que abre el Disponible.

## Vista de todas las bodegas

Los pasos para ver las existencias de paquetes en todas las bodegas son:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar la pestaña "Existencias de paquetes".
4. Presionar "Todas las Bodegas".

La tabla muestra una fila por paquete y una columna por bodega, más una columna "Total". El significado de cada columna y su enlace:

- **ID**: enlace a "Detalle de existencias de paquetes" en todas las bodegas, que muestra las existencias del paquete desglosadas por bodega.
- **Código**: texto plano, no es un enlace.
- **Nombre**: enlace a "Detalle de existencias de paquetes" en todas las bodegas.
- **Cantidad por bodega**: cada celda es un enlace a "Detalle de existencias de paquetes" en esa bodega, que muestra las métricas del paquete y el desglose de componentes. Si la celda muestra 0, no hay enlace.
- **Total**: texto plano en negrita, no es un enlace. Es la suma de las cantidades de todas las bodegas.
- **Columna de acciones (icono camión)**: enlace a "Nueva Reservación" con el paquete preseleccionado, para crear un envío directamente.

## Detalle de existencias de paquetes en una bodega

Esta vista se abre al hacer clic sobre el Disponible (en la vista por bodega) o sobre una cantidad en la columna de una bodega (en la vista de todas las bodegas). Muestra las existencias de un paquete en una bodega específica, con el desglose de componentes.

Contiene:

1. **Agencia**: nombre de la bodega.
2. **Paquete**: ID, código, nombre y categoría. El nombre del paquete es un enlace a la configuración del paquete en [Paquetes](/inventarios/inventarios-paquetes).
3. **Métricas del paquete**: "Disponible", "Por Ingresar", "Por Egresar" y "Físicas" del paquete en esa bodega.
4. **Tabla "Items"**: desglose de componentes. Para cada componente muestra:
   - **Código**: código del ítem.
   - **Nombre**: enlace a la configuración del ítem.
   - **Cantidad**: cantidad del ítem que requiere el paquete.
   - **Existencia del ítem**: "Disponible", "Por Ingresar" y "Por Egresar" del ítem en esa bodega.
   - **Existencia del paquete**: "Disponible", "Por Ingresar" y "Por Egresar" del paquete calculadas a partir del ítem, dividiendo las existencias del ítem entre la cantidad requerida.

## Detalle de existencias de paquetes en todas las bodegas

Esta vista se abre al hacer clic sobre el Nombre o el ID de un paquete (en cualquiera de las dos vistas). Muestra las existencias del paquete en todas las bodegas.

Contiene:

1. **Datos del paquete**: ID, código, nombre y etiquetas. El nombre del paquete es un enlace a su configuración en [Paquetes](/inventarios/inventarios-paquetes). Si el paquete tiene imagen, se muestra a la derecha.
2. **Tabla por bodega**: una fila por métrica ("Disponible", "Por Ingresar", "Por Egresar", "Físicas") y una columna por bodega, más una columna "Total". En las bodegas no virtuales, el valor de "Disponible" es un enlace a "Detalle de existencias de paquetes" en esa bodega. En las bodegas virtuales, los valores son texto plano.
3. **Botón "Detalles del Paquete"**: enlace a la configuración completa del paquete.

## Acciones

Desde la pestaña "Existencias de paquetes" están disponibles:

- **Todas las Bodegas**: cambia a la vista matriz de todas las bodegas.
- **Exportar a Excel**: descarga un archivo XLS con las existencias de paquetes de la bodega.

## API (llamadas desde sistemas externos)

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
