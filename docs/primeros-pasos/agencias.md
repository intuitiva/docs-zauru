---
title: "Agencias"
sidebar_label: "Agencias"
sidebar_position: 3
format: md
---

# Agencias
Zauru le permite llevar control de todas sus agencias (bodegas, puntos de venta, talleres y fabricas) Puede llevar control de existencias, reservaciones de ingreso y de salida de la agencia y ventas desde esa agencia.  La forma de crear una nueva agencia es la siguiente:

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

Para guardar los cambios presione “Crear Agencia”.

![imagen6](/img/primeros-pasos/agencias-3.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla indicándole que la agencia se creo exitosamente. Ahora podrá usar esta agencia para hacer sus movimientos de productos.

![imagen7](/img/primeros-pasos/agencias-4.jpg)

# Categoría de Agencias
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
```JSON
[
  {
    "active":true,
    "address_line_1":"dirección física",
    "address_line_2":null,
    "city":null,
    "contact":null,
    "created_at":"2019-01-31T15:51:01-06:00",
    "ean13":null,
    "employee_id":null,
    "entity_id":1,
    "factory":false,
    "id":1,
    "name":"Production",
    "notes":null,
    "phone":null,
    "point_of_sale":false,
    "price_list_id":null,
    "updated_at":"2018-01-31T15:51:01-06:00",
    "updater_id":1,
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
