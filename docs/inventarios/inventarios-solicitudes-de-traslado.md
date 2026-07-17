---
title: "Solicitudes de Traslado"
sidebar_label: "Solicitudes de Traslado"
sidebar_position: 10
---

Este tutorial esta enfocado en la creación y manejo de solicitudes de traslado entre bodegas.

## ¿Qué es una solicitud de traslado?

Una solicitud de traslado (Transfer Request) es un documento que permite solicitar el movimiento de productos desde una bodega origen hacia una bodega destino. A diferencia de una reservación directa, la solicitud de traslado tiene un flujo de aprobación y seguimiento que permite:

- Solicitar productos sin mover existencias inmediatamente.
- Dar seguimiento al estado de la solicitud (abierta, en proceso, cerrada).
- Visualizar la disponibilidad de stock en la bodega origen.
- Generar requisiciones de compra para productos con stock insuficiente.

## Estados de una solicitud de traslado

Una solicitud de traslado pasa por tres estados durante su ciclo de vida:

1. **Abierta (Open)**: La solicitud fue creada pero aún no se ha generado ningún envío. Es completamente editable y se puede anular.
2. **En proceso (In Progress)**: Se ha creado al menos un envío parcial desde la solicitud, o se ha generado una requisición de compra. Ya no se puede anular pero sí se puede editar.
3. **Cerrada (Closed)**: Todas las cantidades solicitadas han sido completamente reservadas mediante envíos. La solicitud pasa a ser de solo lectura.

## Crear una solicitud de traslado

Los pasos para crear una nueva solicitud de traslado son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Solicitudes de Traslado".
3. Seleccionar "Nueva Solicitud de Traslado".

Le aparecerán los campos para crear la solicitud, los cuales debe llenar de la siguiente manera:

a. **Bodega origen**: Seleccione la bodega desde donde se solicita el traslado de los productos. Solo se muestran bodegas activas, no virtuales y que sean almacén.

b. **Bodega destino**: Seleccione la bodega hacia donde se desea trasladar los productos. Por defecto se preselecciona la primera bodega disponible o la bodega asignada al empleado que está creando la solicitud.

c. **Solicitante**: Seleccione el empleado que está solicitando el traslado. Solo se muestran empleados activos marcados como "Controlador de Inventario". Por defecto se selecciona al empleado asociado al usuario actual.

d. **Fecha de entrega planificada**: Fecha estimada para la entrega de los productos.

e. **Productos solicitados**: Agregue los productos y las cantidades que desea trasladar. Puede usar los botones:
   - **"+"**: Agregar una fila.
   - **"+2"**: Agregar dos filas.
   - **"+5"**: Agregar cinco filas.
   - **Vista Previa**: Revisar la solicitud antes de crearla.
   - **Refrescar**: Actualizar las opciones del formulario.

f. **Referencia**: Campo opcional para identificar fácilmente la solicitud. Puede agregar una referencia por cada producto solicitado.

g. Presione "Crear solicitud de traslado".

### Usar paquetes en solicitudes de traslado

Al igual que en las reservaciones, puede seleccionar paquetes (bundles) en las solicitudes de traslado. Al seleccionar un paquete, Zauru automáticamente desglosa el paquete en sus productos componentes con las cantidades correspondientes.

## Ver disponibilidad de stock

En los detalles de una solicitud de traslado, puede ver la disponibilidad de stock de cada producto solicitado en la bodega origen. Esto le permite saber si hay suficiente inventario para satisfacer la solicitud:

- **Productos con stock disponible**: Se muestran con la cantidad disponible en verde.
- **Productos sin stock disponible**: Se muestran con disponibilidad en cero o insuficiente.

Esta información le ayuda a decidir si:
- Proceder con el traslado de productos que tienen stock.
- Generar una requisición de compra para los productos sin stock.

## Ver solicitudes de traslado abiertas

Para ver las solicitudes que están activas:

1. Ir a "Inventarios".
2. Seleccionar "Solicitudes de Traslado".

La vista principal muestra las solicitudes abiertas. Puede filtrar por:

- **Nuevas (Open)**: Solicitudes recién creadas sin envíos generados.
- **En proceso (In Progress)**: Solicitudes con al menos un envío parcial generado.
- **Todas**: Todas las solicitudes activas (abiertas y en proceso).

## Ver solicitudes de traslado cerradas

Cuando una solicitud ha sido completamente satisfecha (todas las cantidades fueron reservadas mediante envíos), pasa automáticamente a la lista de solicitudes cerradas:

1. Ir a "Inventarios".
2. Seleccionar "Solicitudes de Traslado Cerradas".

Aquí podrá ver el historial de solicitudes que ya fueron completadas. También puede ver sus detalles y los envíos asociados.

## Editar una solicitud de traslado

Mientras la solicitud esté en estado "Abierta" o "En proceso", puede editarla:

1. Ir a "Inventarios".
2. Seleccionar "Solicitudes de Traslado".
3. Buscar la solicitud que desea editar.
4. Seleccionar "Editar".

Podrá modificar:
- Bodega origen y destino.
- Solicitante.
- Fecha de entrega planificada.
- Productos y cantidades solicitadas.
- Referencias.

## Anular una solicitud de traslado

Solo puede anular solicitudes que estén en estado "Abierta" (sin envíos generados):

1. Ir a "Inventarios".
2. Seleccionar "Solicitudes de Traslado".
3. Buscar la solicitud que desea anular.
4. Seleccionar "Eliminar".

La solicitud será marcada como anulada (voided) y ya no aparecerá en las listas activas.

## Generar requisición de compra desde una solicitud

Cuando una solicitud de traslado tiene productos sin stock suficiente en la bodega origen, puede generar automáticamente una requisición de compra para esos productos:

1. Abra los detalles de la solicitud de traslado.
2. Seleccione "Crear requisición de compra".

Esto generará una requisición de compra en el módulo de Compras con:
- Los productos que tienen stock insuficiente.
- Las cantidades pendientes (diferencia entre lo solicitado y lo ya reservado).
- Las referencias de la solicitud de traslado.
- El solicitante configurado en la solicitud de traslado.

### Condiciones para generar una requisición de compra

- La solicitud debe tener productos con cantidades pendientes (solicitado - reservado > 0).
- No se puede generar más de una requisición de compra por solicitud.
- Una vez generada la requisición, la solicitud pasa a estado "En proceso".

## Crear envíos desde una solicitud de traslado

Para satisfacer una solicitud de traslado, debe crear envíos (reservaciones) desde ella:

1. Abra los detalles de la solicitud.
2. En la sección de envíos, seleccione "Nuevo envío".

Esto abrirá el formulario de reservación con los datos precargados desde la solicitud:
- Bodega origen y destino.
- Productos y cantidades solicitadas.
- Referencias.

Al crear el envío, las cantidades reservadas se descuentan de las cantidades solicitadas. Cuando todas las cantidades hayan sido reservadas, la solicitud se cerrará automáticamente.

## Estados de cumplimiento de la solicitud

En los detalles de la solicitud podrá ver para cada producto:

- **Cantidad solicitada**: Lo que se pidió originalmente.
- **Cantidad reservada (booked)**: Lo que ya se ha reservado mediante envíos.
- **Cantidad restante**: Lo que falta por reservar.

Con base en esto, la solicitud se clasifica como:
- **Abierta**: Ningún producto ha sido reservado aún.
- **En proceso**: Algunos productos han sido reservados pero no todos.
- **Cerrada**: Todas las cantidades solicitadas han sido reservadas.

## API (llamadas desde sistemas externos)

### Obtener las solicitudes de traslado abiertas
Devuelve la lista de solicitudes de traslado que no están cerradas ni anuladas. Puede filtrar por alcance (`scope`): `new`, `in_progress` o `all`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/open_transfer_requests.json?scope=new
```

### Obtener el detalle de una solicitud de traslado abierta
Devuelve los datos de la solicitud, sus detalles (productos y cantidades) y los envíos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/open_transfer_requests/1.json
```

### Crear una solicitud de traslado
Crea una nueva solicitud de traslado con los productos y cantidades solicitadas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "inventories_transfer_request": {
      "agency_from_id": "2",
      "agency_to_id": "1",
      "requestor_id": "1",
      "planned_delivery": "2018-08-10",
      "reference": "Solicitud de traslado",
      "transfer_request_details_attributes": {
        "0": {
          "item_id": "2",
          "requested_quantity": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/inventories/open_transfer_requests.json
```

### Actualizar una solicitud de traslado
Actualiza los datos de una solicitud de traslado mientras esté abierta o en proceso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "inventories_transfer_request": {
      "reference": "Solicitud actualizada",
      "transfer_request_details_attributes": {
        "0": {
          "id": "1",
          "requested_quantity": "120"
        }
      }
    }
  }' \
  https://app.zauru.com/inventories/open_transfer_requests/1.json
```

### Anular una solicitud de traslado
Anula (void) una solicitud de traslado. Solo se puede anular mientras esté en estado abierta.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/open_transfer_requests/1.json
```

### Obtener las solicitudes de traslado cerradas
Devuelve la lista de solicitudes de traslado que ya fueron completamente satisfechas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/closed_transfer_requests.json
```

### Obtener el detalle de una solicitud de traslado cerrada
Devuelve los datos de una solicitud de traslado que ya fue cerrada.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/closed_transfer_requests/1.json
```
