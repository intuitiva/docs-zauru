---
title: "Agencias"
sidebar_label: "Agencias"
sidebar_position: 3
---

Cuando abre una sucursal nueva o necesita una bodega adicional para separar su mercadería, el primer paso es registrarla como agencia en Zauru. Cada agencia le permite llevar control de sus existencias, de las reservaciones de ingreso y de salida y de las ventas que se hacen desde ese lugar, ya sea una bodega, un punto de venta, un taller o una fábrica. La forma de crear una nueva agencia es la siguiente:

1. Ir a “Configuraciones”.
2. Seleccionar “Agencias”.
3. Seleccionar “Nueva Agencia”.

![imagen4](/img/primeros-pasos/agencias-1.jpg)

Le deberán aparecer las opciones para crear una nueva agencia, las opciones son las siguientes:

a. Si quita el cheque en este recuadro la agencia no estará Activa.

b. Aquí debe colocar el nombre de la agencia, este es uno de los campos obligatorios.

c. Una bodega de tipo virtual es una bodega que no registra existencias pero si registra movimientos de inventario.

d. Los tipos de bodegas virtuales y su uso son:

- Producción: Una agencia a donde se puede enviar materia prima de la bodega y después regresar producto terminado.
- Proveedor: Cuando se hace una compra el producto entra por default desde esta agencia. A esta agencia también  se puede regresar producto del proveedor, ya sea producto que estaba en consignación o producto defectuoso.
- Cliente: A esta agencia virtual se envía por default el producto cuando se hace una venta.
- Perdido: Este tipo de agencia sirve para sacar producto del inventario por perdida.
- Descartado: Esta agencia sirve para descartar producto del inventario por daño o robo.

e. En este campo puede colocar al empleado encargado de esta agencia. Para poder seleccionar a un empleado lo tuvo que haber creado antes de crear la agencia.

f. Aquí puede colocar el nombre del contacto para comunicarse a esta agencia.

![imagen5](/img/primeros-pasos/agencias-2.png)

g. Deberá colocar la dirección de esta agencia, este es el segundo campo obligatorio para crear una agencia.

h. En este campo puede colocar el teléfono para comunicarse a la agencia.

i. Este campo puede servir para escoger la agencia con lector de código de barras.

j. En este campo debe seleccionar las responsabilidades o el uso de esta agencia, las responsabilidades y su definición son las siguientes:

- Bodega: Una agencia en donde almacena su producto.
- Punto de Venta: Una agencia donde vende sus productos o servicios.
- Taller: Una agencia donde usted da algún tipo de soporte o garantía de sus productos.
- Fábrica: Una agencia donde produce su producto.

k. Marque esta opción si la agencia se utilizará para emitir cotizaciones (Quote).

l. Marque esta opción si la agencia estará disponible en el módulo de E-commerce.

m. Puede asignar una categoría de agencia previamente creada para organizar sus agencias.

n. Seleccione la ciudad a la que pertenece esta agencia.

o. Seleccione el distrito o zona de la ciudad.

p. Puede seleccionar un centro de costo al que se asociará esta agencia.

q. En este campo puede colocar el nombre del barrio o colonia de la agencia.

r. Si su entidad utiliza servicios de facturación electrónica, puede especificar el nombre del servicio de almacenamiento externo para esta agencia.

Para guardar los cambios presione “Crear Agencia”.

![imagen6](/img/primeros-pasos/agencias-3.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla indicándole que la agencia se creo exitosamente. Ahora podrá usar esta agencia para hacer sus movimientos de productos.

![imagen7](/img/primeros-pasos/agencias-4.jpg)

## Formularios Asociados a la Agencia

Cuando necesite capturar información adicional que no cabe en los campos estándar de una agencia, puede recurrir a los formularios personalizados. Al visualizar los detalles de una agencia, Zauru le mostrará los formularios personalizados que tenga asociados. Si ha creado formularios para el tipo de documento "Agencia", estos aparecerán en la vista de detalle para que pueda llenarlos con información adicional de cada agencia.

## Exportar Agencias

Zauru le permite exportar su listado de agencias en formato CSV o XLS. Para exportar:

1. Ir a “Configuraciones”.
2. Seleccionar “Agencias”.
3. Seleccionar el formato de exportación deseado (CSV o XLS).

Los datos exportados incluyen: nombre, estado activo, tipo virtual, tipo de bodega, responsabilidades (bodega, punto de venta, taller, fábrica), contacto, ciudad, dirección, teléfono, notas, usuario que actualizó y fecha de creación.

## Categoría de Agencias
Zauru le permite llevar control de todas sus agencias organizándolas por Categorías.  La forma de crear una nueva Categoría de agencia es la siguiente:

1. Ir a “Configuraciones”.
2. Ir a la opción de "Agencias".
3. Seleccionar “Categoría de Agencias”.
4. Seleccionar “Nueva categoría de Agencia”.

![Categoría de ítems](/img/primeros-pasos/agencias-5.png)

Le deberán aparecer las opciones para crear una nueva categoría de agencias, las opciones son las siguientes:

1. Colocar el nombre de la Categoría.

2. Puede colocar una descripción de la Categoría.

3. Presionar el botón de __Crear categoría de agencia__.

![Nueva categoría de ítems](/img/primeros-pasos/agencias-6.png)

Ha creado su agencia y, si lo deseaba, la ha organizado dentro de una categoría. Con esto, su bodega, punto de venta, taller o fábrica queda listo para registrar movimientos de productos y ventas; cuando tenga empleados registrados, podrá asignarlos como encargados de cada agencia.

### API (llamadas desde sistemas externos)

#### Obtener listado de la agencias
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/agencies.json
```

Esto generará un JSON similar a este:
```json
[
  {
    "active":true,
    "address_line_1":"dirección física",
    "address_line_2":null,
    "city_name":null,
    "contact":null,
    "created_at":"2019-01-31T15:51:01-06:00",
    "ean13":null,
    "employee_id":null,
    "entity_id": 1,
    "factory":false,
    "id":1,
    "name":"Production",
    "notes":null,
    "phone":null,
    "point_of_sale":false,
    "price_list_id":null,
    "updated_at":"2018-01-31T15:51:01-06:00",
    "updater_id": 1,
    "virtual":true,
    "virtual_type":1,
    "warehouse":false,
    "workshop":false,
    "zid":1
  },
  {...},
  ...
]
```

#### Obtener detalles de la agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/agencies/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "8247",
  "zid": "2",
  "active": true,
  "ean13": null,
  "name": "Producción",
  "employee_id": null,
  "updater_id": "214",
  "entity_id": "1303",
  "virtual": true,
  "virtual_type": "1",
  "warehouse": false,
  "point_of_sale": false,
  "workshop": false,
  "factory": false,
  "contact": null,
  "city_name": null,
  "address_line_1": null,
  "address_line_2": null,
  "phone": null,
  "notes": null,
  "created_at": "2026-02-06 18:10:09.384287",
  "updated_at": "2026-02-11 14:27:37.503734",
  "price_list_id": null,
  "quote": true,
  "ecommerce": true,
  "external_storage_service_name": null,
  "agency_category_id": null,
  "city_id": null,
  "agency_type": null,
  "district_id": null,
  "neighborhood_id": null,
  "cost_center_id": null
}
```

#### Crear agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "agency": {
      "name": "Tienda",
      "active": "1",
      "address_line_1": "direccion obligatoria",
      "notes": "",
      "warehouse": "1",
      "point_of_sale": "1",
      "workshop": "1"
    }
  }' \
  https://app.zauru.com/settings/agencies.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ]
}
```

#### Actualizar agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "agency": {
      "name": "Tienda Central",
      "address_line_1": "nueva direccion"
    }
  }' \
  https://app.zauru.com/settings/agencies/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "8247",
  "zid": "2",
  "active": true,
  "ean13": null,
  "name": "Producción",
  "employee_id": null,
  "updater_id": "214",
  "entity_id": "1303",
  "virtual": true,
  "virtual_type": "1",
  "warehouse": false,
  "point_of_sale": false,
  "workshop": false,
  "factory": false,
  "contact": null,
  "city_name": null,
  "address_line_1": null,
  "address_line_2": null,
  "phone": null,
  "notes": null,
  "created_at": "2026-02-06 18:10:09.384287",
  "updated_at": "2026-02-11 14:27:37.503734",
  "price_list_id": null,
  "quote": true,
  "ecommerce": true,
  "external_storage_service_name": null,
  "agency_category_id": null,
  "city_id": null,
  "agency_type": null,
  "district_id": null,
  "neighborhood_id": null,
  "cost_center_id": null
}
```

#### Eliminar agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/agencies/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### API de Categorías de Agencias

#### Obtener listado de categorías de agencias
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/agencies/agency_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "agencies_count": 0,
    "name": "Categoría Principal",
    "notes": "Descripción de la categoría",
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": 3,
    "created_at": "2026-08-06T04:14:18.605Z",
    "updated_at": "2026-08-06T04:14:18.605Z",
    "employee_id": null
  }
]
```

#### Obtener detalle de una categoría de agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/agencies/agency_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "agencies_count": "2",
  "name": "Abastecimientos",
  "notes": "Agencias disponibles en la selección de destinos para abastecimientos.",
  "entity_id": "802",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2023-04-10 05:21:37.709095",
  "updated_at": "2023-04-10 05:21:37.709095",
  "employee_id": null
}
```

#### Crear categoría de agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "agency_category": {
      "name": "Categoría Principal",
      "notes": "Descripción de la categoría"
    }
  }' \
  https://app.zauru.com/settings/agencies/agency_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ],
  "entity": [
    "es inválido"
  ]
}
```

#### Actualizar categoría de agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "agency_category": {
      "name": "Categoría Actualizada",
      "notes": "Nueva descripción"
    }
  }' \
  https://app.zauru.com/settings/agencies/agency_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "agencies_count": "2",
  "name": "Abastecimientos",
  "notes": "Agencias disponibles en la selección de destinos para abastecimientos.",
  "entity_id": "802",
  "creator_id": "2512",
  "updater_id": "2512",
  "created_at": "2023-04-10 05:21:37.709095",
  "updated_at": "2023-04-10 05:21:37.709095",
  "employee_id": null
}
```

#### Eliminar categoría de agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/agencies/agency_categories/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Exportar Agencias vía API

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/agencies/export.csv
```
