---
title: "Numeros de Serie"
sidebar_label: "Numeros de Serie"
sidebar_position: 9
---

Este tutorial esta basado en la creación y manejo de números de serie.

## ¿Qué son los números de serie?

Los números de serie se utilizan para llevar control de productos que son exactamente iguales, por ejemplo, electrodomésticos, maquinas, carros, etc. Analizando el caso de una empresa que vende maquinas destructoras de papel, su Ítem en Zauru se llama "Destructora de Papel" y maneja cantidades altas de estas maquinas, la forma más efectiva para llevar control de ellas seria usando los números de serie, de esa forma podrían saber exactamente que maquina están moviendo o vendiendo.

Para usar números de serie, el ítem debe ser de tipo "Identificable" (product_type = 2). Cada número de serie tiene un identificador único y se le hace seguimiento individual de su ubicación (en qué bodega se encuentra actualmente).

## Crear un ítem identificable

El primer paso para poder llevar números de serie en Zauru es crear un ítem que sea "Identificable" como se muestra en la imagen. Para mas detalles sobre como crear ítems refiérase al tutorial "Crear Ítems".

![imagen1](/img/inventarios/inventarios-numeros-de-serie-1.jpg)

## Crear un número de serie individual

Los pasos para crear un numero de serie son los siguientes:

1. Ir a "Inventarios".
2. Seleccione "Números de Serie".
3. Seleccione "Nuevo Número de Serie".

![imagen2](/img/inventarios/inventarios-numeros-de-serie-2.jpg)

Le aparecerán las opciones para crear un numero de serie, los campos que debe llenar son los siguientes:

a. Coloque el numero de serie de su producto.

b. Seleccione el Ítem identificable que creo previamente.

Presione "Crear número de serie".

![imagen3](/img/inventarios/inventarios-numeros-de-serie-3.jpg)

Le aparecerá un mensaje de éxito notificándole que se creo el numero de serie exitosamente, el siguiente paso es hacer una reservación para ingresar ese numero de serie a alguna de sus bodegas.

![imagen4](/img/inventarios/inventarios-numeros-de-serie-4.jpg)

## Crear múltiples números de serie simultáneamente

Si necesita crear varios números de serie a la vez (por ejemplo, para un lote de 10 productos idénticos):

1. Ir a "Inventarios".
2. Seleccione "Números de Serie".
3. Seleccione "Nuevo múltiple".

Esto abrirá un formulario donde podrá crear hasta 10 números de serie simultáneamente:

1. Seleccione el ítem identificable.
2. Coloque los números de serie (uno por fila).
3. Presione "Crear números de serie".

## Ver números de serie por bodega

Para consultar los números de serie que están en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Seleccione la bodega que desea consultar.

Podrá ver:
- El número de serie.
- El producto al que pertenece.
- Si está disponible, reservado (en tránsito hacia otra bodega) o en una ubicación futura.

## Ver números de serie en todas las bodegas

Para ver todos los números de serie en todas las bodegas:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Seleccionar la pestaña "Todas las bodegas".

Esta vista muestra todos los números de serie con su ubicación actual.

![imagen9](/img/inventarios/inventarios-numeros-de-serie-all-warehouses.jpg)

## Ver detalle de un número de serie

Al hacer clic sobre un número de serie, podrá ver:

- Los datos del número de serie y el producto asociado.
- La ubicación actual (bodega donde se encuentra).
- La ubicación futura (si está reservado para moverse a otra bodega).
- El historial de envíos donde ha participado este número de serie.

## Ver números de serie de un producto específico

Para consultar todos los números de serie de un producto en particular:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Hacer clic sobre el nombre del producto en la lista.

Esto mostrará todos los números de serie asociados a ese producto.

## Movimientos de un ítem en una bodega específica

Para ver el historial de movimientos de un ítem identificable en una bodega:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Navegue a la opción de movimientos del ítem en la agencia.

Esto mostrará todos los movimientos de números de serie de ese ítem que pasaron por la bodega seleccionada.

## Autocompletado de números de serie

Zauru incluye una función de autocompletado para buscar números de serie rápidamente. Esta funcionalidad está disponible en los formularios donde necesite seleccionar un número de serie (por ejemplo, al crear una reservación de números de serie).

## Exportar números de serie

Puede exportar el listado de números de serie a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Seleccionar "Exportar números de serie".

Esto descargará un archivo XLS con todos los números de serie, productos asociados y ubicaciones.

## Editar un número de serie

Para modificar los datos de un número de serie:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Buscar el número de serie que desea editar.
4. Seleccionar "Editar".

Podrá modificar el número de serie (el identificador) y el producto asociado.

## Eliminar un número de serie

Para eliminar un número de serie:

1. Ir a "Inventarios".
2. Seleccionar "Números de Serie".
3. Buscar el número de serie que desea eliminar.
4. Seleccionar "Eliminar".

## Crear una reservación de Número de Serie (Desde Proveedor a la bodega)

Los pasos para hacer una reservación de entrada de un producto con numero de serie son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva reservación de #s de Serie".

![imagen5](/img/inventarios/inventarios-numeros-de-serie-5.jpg)

Le aparecerá el primer paso para hacer la reservación de ingreso, los pasos a seguir son los siguientes:

1. Aquí deberá seleccionar la bodega "Vendor(Proveedor)" y presionar "Cambiar de Bodega".
2. Coloque el numero de serie (previamente creado) del producto que desea ingresar.

Por ultimo presione "Generar Reservación".

![imagen6](/img/inventarios/inventarios-numeros-de-serie-6.jpg)

A continuación le aparecerá el segundo paso para crear la reservación, aquí solo deberá colocar los detalles de la reservación como la referencia, la fecha de entrega estimada, si necesita o no transporte. Por ultimo presione "Crear envío".

![imagen7](/img/inventarios/inventarios-numeros-de-serie-7.jpg)

Le aparecerá un mensaje notificándole que la reservación fue creada exitosamente, podrá ver los detalles de la reservación o entregarla en la parte inferior.

![imagen8](/img/inventarios/inventarios-numeros-de-serie-8.jpg)

## API (llamadas desde sistemas externos)

### Obtener todos los números de serie de una bodega
Devuelve la lista de números de serie de la bodega especificada.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/serials.json?warehouse=1
```

### Obtener los números de serie de todas las bodegas
Devuelve todos los números de serie sin filtrar por bodega.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/serials/all_warehouses.json
```

### Obtener el detalle de un número de serie
Devuelve los datos del número de serie, su producto asociado y el historial de envíos donde ha participado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/serials/1.json
```

### Obtener los números de serie de un producto
Devuelve todos los números de serie asociados a un producto específico.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/serials/1/item.json
```

### Crear un número de serie
Crea un nuevo número de serie para un ítem identificable.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "serial": {
      "name": "SN-001",
      "item_id": "2",
      "description": "Descripción opcional"
    }
  }' \
  https://app.zauru.com/inventories/serials.json
```

### Actualizar un número de serie
Actualiza los datos de un número de serie existente.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "serial": {
      "name": "SN-001-actualizado",
      "item_id": "2",
      "description": "Descripción actualizada"
    }
  }' \
  https://app.zauru.com/inventories/serials/1.json
```

### Eliminar un número de serie
Elimina un número de serie. Solo es posible si no tiene movimientos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/serials/1.json
```

### Autocompletar números de serie
Endpoint de autocompletado para buscar números de serie por término. Útil para integraciones con formularios personalizados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/serials/autocomplete.json?term=SN-00
```
