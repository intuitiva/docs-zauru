---
title: "Reservaciones"
sidebar_label: "Reservaciones"
sidebar_position: 1
---

Una reservación es el primer paso de un envío: se reservan los productos en la bodega origen para que no se usen en otro movimiento, pero aún no salen de la bodega. Desde aquí se despacha (si necesita transporte) o se entrega directamente.

## Vista de Reservaciones

Los pasos para ver las reservaciones son:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".

La tabla muestra una fila por reservación con las columnas "ID", "Reservación #", "Referencia", "Necesita Transporte", "Entrega Estimada", "Origen", "Destino", "Tipo" e "Items". Los filtros de alcance, rango de fechas y etiquetas se describen en [Envíos](/inventarios/envios/).

## Crear una reservación

Los pasos para crear una reservación son:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación".

![imagen1](/img/inventarios/envios-1.jpg)

Los campos del formulario son:

- **Reservación #**: número generado automáticamente por la numeración de documentos.
- **Referencia**: texto para encontrar la reservación después.
- **Solicitante**: empleado que solicita la reservación.
- **Transportista**: empleado responsable del transporte, si aplica.
- **Necesita Transporte**: marcar si el envío requiere un paso de tránsito entre despachar y entregar.
- **Despacho Estimado**: fecha prevista de despacho, para envíos con transporte.
- **Entrega Estimada**: fecha prevista de entrega en la bodega destino.
- **Origen**: bodega desde donde salen los productos. Si las opciones no se actualizan al cambiar la bodega, presionar "Refrescar".
- **Destino**: bodega hacia donde van los productos.
- **Carga**: lista de items con su cantidad. Presionar "+" para agregar una fila, "+2" para dos filas o "+5" para cinco filas.
- **Imagen**: foto del envío.
- **Etiquetas**: etiquetas para categorizar y filtrar el envío.
- **Memo**: notas internas.

Presionar "Crear envío" para guardar la reservación.

![imagen2](/img/inventarios/envios-2.jpg)

Para agregar paquetes en lugar de productos individuales, buscar el código del paquete que empieza con "b" seguido del ID (por ejemplo "b123"). Zauru desglosa el paquete en sus componentes con las cantidades correspondientes.

Para productos identificables, la cantidad se fija en 1 y se selecciona el número de serie. Para productos perecederos, se selecciona el lote.

### Reservación con números de serie

Para crear una reservación de productos identificables seleccionando series específicas:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación de #s de Serie".
4. Seleccionar la bodega origen y los números de serie a mover.
5. Completar el formulario de reservación con referencia, fechas y transporte.

### Reservación desde una solicitud de traslado

Si tiene una solicitud de traslado aprobada, puede crear la reservación directamente desde ella. Los productos, cantidades, bodegas y referencias se cargan automáticamente en el formulario. El procedimiento se detalla en [Solicitudes de traslado](/inventarios/inventarios-solicitudes-de-traslado).

### Vínculos con contratos, facturas y órdenes de compra

Al crear una reservación puede vincularla con un contrato, una factura, una orden de compra o un proveedor. Estos campos pueden precargarse desde la URL con los parámetros:

- `c`: contrato
- `p`: proveedor
- `in`: factura
- `po`: orden de compra
- `f`: bodega origen
- `t`: bodega destino
- `i`: item
- `s`: números de serie (separados por "-")

### Botones Vista Previa y Refrescar

- **Vista Previa**: muestra una vista previa del envío sin crearlo, para revisar los detalles antes de confirmar.
- **Refrescar**: actualiza los datos del formulario, útil tras cambiar la bodega origen para que se refresquen los items y series disponibles.

## Editar una reservación

Mientras el envío esté en estado de Reservación puede editarlo. Una vez despachado o entregado, no se puede modificar.

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación que desea editar.
4. Seleccionar "Editar.

Podrá modificar la referencia, fechas, transportista, items, cantidades, etiquetas, imagen y notas.

## Imprimir una reservación

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Buscar la reservación que desea imprimir.
4. Seleccionar "Imprimir".

El documento incluye referencia, fechas, productos, cantidades y bodegas origen y destino.

## Exportar movimientos a Excel

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Abrir la reservación cuyos movimientos desea exportar.
4. Seleccionar "Exportar a Excel".

Se descarga un archivo XLS con el detalle de todos los productos y cantidades del envío.

## API (llamadas desde sistemas externos)

### Obtener todas las reservaciones
Devuelve la lista de envíos en estado de reservación. Puede filtrar por alcance (`scope`), etiqueta (`tag`) y rango de fechas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings.json?scope=all
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "reference": "PRUEBA NOTIFICACION",
    "needs_transport": false,
    "entity_id": 3,
    "payee_id": null,
    "income": null,
    "booker_id": 4,
    "planned_shipping": null,
    "shipped": false,
    "shipped_at": null,
    "shipper_id": null,
    "planned_delivery": "2023-11-13",
    "delivered": false,
    "delivered_at": null,
    "deliverer_id": null,
    "voided": false,
    "voided_at": null,
    "voider_id": null,
    "returned": false,
    "returned_at": null,
    "returner_id": null,
    "creator_id": 5,
    "updater_id": 5,
    "memo": "",
    "agency_from_id": 6,
    "address_from": "Calle Ejemplo 123, Zona 10",
    "agency_to_id": 6,
    "address_to": "Calle Ejemplo 123, Zona 10",
    "created_at": "2023-11-13T16:33:05.349Z",
    "updated_at": "2023-11-13T16:33:05.362Z",
    "movements_count": 1,
    "transporter_id": null,
    "movements": [
      {
        "id": 7,
        "serial_id": null,
        "item_id": 8,
        "shipment_id": 1,
        "booked_quantity": "1.0",
        "delivered_quantity": null,
        "reference": "",
        "lot_id": null,
        "entity_id": 3
      }
    ]
  }
]
```

### Obtener el detalle de una reservación
Devuelve los datos del envío, sus movimientos, bodegas origen y destino, y los formularios asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1.json
```

### Crear una reservación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "shipment": {
      "reference": "Referencia para encontrar este envío",
      "booker_id": "1",
      "transporter_id": "",
      "needs_transport": "0",
      "planned_shipping": "",
      "planned_delivery": "2026-08-10",
      "agency_from_id": "2",
      "agency_to_id": "1",
      "movements_attributes": {
        "0": {
          "item_code": "xyz",
          "item_id": "2",
          "booked_quantity": "100"
        }
      },
      "tag_ids": [""],
      "memo": "Alguna anotación"
    }
  }' \
  https://app.zauru.com/inventories/bookings.json
```

### Actualizar una reservación
Actualiza los datos de un envío mientras esté en estado de Reservación. Una vez despachado o entregado, el envío ya no se puede editar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "reference": "Referencia actualizada",
      "planned_delivery": "2026-08-15",
      "movements_attributes": {
        "0": {
          "item_id": "2",
          "booked_quantity": "120",
          "id": "1"
        }
      },
      "tag_ids": [""],
      "memo": "Nota actualizada"
    }
  }' \
  https://app.zauru.com/inventories/bookings/1.json
```
