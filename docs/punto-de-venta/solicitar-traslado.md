---
title: "Solicitar traslado"
sidebar_label: "Solicitar traslado"
sidebar_position: 10
---

Este tutorial esta enfocado en crear solicitudes de traslado de productos entre bodegas desde el punto de venta. Una solicitud de traslado permite a un punto de venta pedir productos a una bodega central u otra sucursal para reabastecer su inventario.

## Listado de solicitudes de traslado

Para ver las solicitudes de traslado existentes:

1. Ir a "P.D.V."
2. Seleccionar "Traslados".

Le aparecera un listado con todas las solicitudes de traslado que no estan anuladas, filtradas por la agencia del usuario actual (como origen o destino).

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una solicitud para ver sus detalles, productos solicitados y cantidades disponibles en la agencia de origen.

b. **Editar**: Modifique una solicitud de traslado existente.

c. **Eliminar**: Elimine una solicitud que ya no sea necesaria.

## Crear una nueva solicitud de traslado

Los pasos para crear una solicitud de traslado son:

1. Ir a "P.D.V."
2. Seleccionar "Nuevo Traslado".

**Importante**: Si el usuario no tiene una agencia asignada, no podra crear solicitudes de traslado. Debe tener una agencia configurada en su perfil de empleado.

Le apareceran las opciones para crear una nueva solicitud. Los campos que debe llenar son:

a. **Agencia destino**: La agencia que recibira los productos (su punto de venta). Se asigna automaticamente segun la agencia del usuario.

b. **Agencia origen**: Seleccione la bodega o sucursal desde donde se enviaran los productos. Si en las configuraciones del punto de venta se definio un origen de reabastecimiento predeterminado, aparecera seleccionado automaticamente. Si la configuracion de "ocultar otras agencias" esta activa, solo vera la agencia predeterminada.

c. **Referencia**: Coloque una breve referencia para identificar la solicitud (opcional).

d. **Fecha de entrega planificada**: Fecha en que espera recibir los productos.

e. **Solicitante**: Empleado que realiza la solicitud. Se asigna automaticamente.

f. **Transportista**: Seleccione el transportista encargado del traslado (opcional).

g. **Productos**: Navegue por las categorias y seleccione los productos que desea solicitar. Se muestran unicamente productos stockeables.

h. **Paquetes (Bundles)**: Si tiene paquetes de productos stockeables, puede seleccionarlos y el sistema desglosara automaticamente sus componentes.

i. **Cantidad solicitada**: Especifique la cantidad que necesita de cada producto.

j. **Referencia por linea**: Puede agregar una referencia en cada linea de producto (opcional).

Presione "Guardar" para crear la solicitud de traslado.

## Usar una solicitud de traslado para crear una reserva

Una vez que la solicitud de traslado ha sido creada, el personal de la bodega de origen puede convertirla en una reserva (booking) para preparar el envio de los productos. Vea el tutorial "Crear reserva" para mas detalles sobre como crear una reserva a partir de una solicitud de traslado.

## Editar una solicitud de traslado

Para modificar una solicitud existente:

1. En el listado de traslados, localice la solicitud que desea modificar.
2. Haga click en el boton de editar.
3. Realice los cambios necesarios en productos, cantidades o datos generales.
4. Presione "Guardar" para actualizar la solicitud.

## API (llamadas desde sistemas externos)

### Listar solicitudes de traslado

**bash**
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/transfer_requests.json
```
