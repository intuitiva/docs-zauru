---
title: "Crear reserva"
sidebar_label: "Crear reserva"
sidebar_position: 8
---

Este tutorial esta enfocado en crear reservas de inventario desde el punto de venta. Una reserva (booking) permite apartar productos de una bodega para un traslado futuro a otra bodega o para un cliente, sin que los productos salgan del inventario hasta que se realice el envio.

## Listado de reservas

Para ver las reservas existentes:

1. Ir a "P.D.V."
2. Seleccionar "Reservas".

Le aparecera un listado con todas las reservas que no han sido enviadas, entregadas, anuladas ni devueltas, filtradas por la agencia del usuario actual.

![Listado de reservas de inventario en el punto de venta](/img/punto-de-venta/crear-reserva-1.png)

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una reserva para ver sus detalles.

b. **Editar**: Si la reserva aun no ha sido enviada, puede editarla para modificar productos, cantidades o agencia destino.

c. **Enviar (Ship)**: Marque la reserva como enviada, lo que la convierte en un transito.

d. **Anular**: Anule la reserva si ya no es necesaria.

e. **Imprimir**: Imprima la reserva utilizando las plantillas configuradas.

## Crear una nueva reserva

Los pasos para crear una nueva reserva son:

1. Ir a "P.D.V."
2. Seleccionar "Nueva Reserva".

Le apareceran las opciones para crear una nueva reserva. Los campos que debe llenar son:

![Formulario para crear una nueva reserva de inventario](/img/punto-de-venta/crear-reserva-2.png)

a. **Agencia origen**: La bodega desde donde se reservaran los productos. Se asigna automaticamente segun la agencia del usuario.

b. **Agencia destino**: Seleccione la bodega hacia donde se trasladaran los productos. Si la configuracion de "filtrar agencias por categoria" esta activa, solo se mostraran agencias de la misma categoria.

c. **Fecha de entrega planificada**: Fecha en la que se espera realizar el traslado. Por defecto es la fecha actual.

d. **Responsable de la reserva (Booker)**: Empleado que realiza la reserva. Se asigna automaticamente segun el usuario actual.

e. **Referencia**: Coloque una breve referencia para identificar la reserva (opcional).

f. **Necesita transporte**: Marque esta casilla si el traslado requiere transporte externo. Por defecto viene activado.

g. **Productos**: Navegue por las categorias y seleccione los productos que desea reservar. Puede filtrar por marcas, categorias y super categorias.

h. **Paquetes (Bundles)**: Si tiene paquetes configurados, puede seleccionarlos y el sistema desglosara automaticamente sus componentes.

i. **Cantidad**: Ajuste la cantidad de cada producto usando los botones "+" y "-".

j. **Lotes**: Para productos perecederos, el sistema seleccionara automaticamente el primer lote disponible (ordenado por fecha de vencimiento). Puede seleccionar un lote diferente si lo desea.

k. **Series**: Para productos identificables (con numero de serie), podra seleccionar el numero de serie especifico.

l. **Referencia por linea**: Puede agregar una referencia adicional en cada linea de producto (opcional).

Presione "Guardar" para crear la reserva.

### Crear reserva desde una solicitud de traslado

Si usted tiene una solicitud de traslado pendiente, puede crear una reserva directamente desde ella. Al crear la reserva, los productos y cantidades de la solicitud de traslado se copiaran automaticamente a la reserva, junto con la agencia origen, destino y fecha de entrega planificada.

## Convertir una reserva en envio (transito)

Una vez que la reserva esta lista para ser despachada:

1. En el listado de reservas, localice la reserva que desea enviar.
2. Presione el boton de "Enviar" (Ship).
3. La reserva cambiara su estado a "transito" y aparecera en la seccion de envios.

## Entregar un envio

Cuando el envio llega a su destino, debe ser entregado para que los productos ingresen al inventario de la agencia destino. Vea el tutorial "Gestionar envios" para mas detalles.

## API (llamadas desde sistemas externos)

### Listar reservas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/bookings.json
  ```

### Ver reserva

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/bookings/1.json
  ```

### Nueva reserva (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/bookings/new.json
  ```

### Crear reserva

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "shipment": {
      "agency_from_id": "1",
      "agency_to_id": "2",
      "planned_delivery": "2024-01-15",
      "reference": "prueba",
      "shipment_details_attributes": {
        "0": {
          "item_id": "1",
          "booked_quantity": "5"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/bookings.json
  ```

### Actualizar reserva

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "reference": "prueba editada"
    }
  }' \
  https://app.zauru.com/pos/bookings/1.json
  ```

### Eliminar reserva

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/pos/bookings/1.json
  ```

### Enviar reserva (convertir en envío)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/bookings/1/ship.json
  ```
