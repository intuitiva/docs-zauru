---
title: "Reservación de lotes"
sidebar_label: "Reservación de lotes"
sidebar_position: 3
---

Luego de crear un lote, se hace una reservación para ingresar producto a ese lote desde el proveedor. El lote debe estar creado previamente.

Los pasos para ingresar producto a un lote son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva Reservación".

![imagen4](/img/inventarios/inventarios-lotes-4.jpg)

Los campos que debe colocar son:

- **Referencia**: referencia de la reservación.
- **Entrega Estimada**: fecha de entrega estimada.
- **Origen**: seleccionar la bodega "Vendor (Proveedor)".
- **Destino**: bodega donde ingresará el producto.
- **Carga**: colocar el producto y seleccionar el lote previamente creado, luego colocar la cantidad de producto que ingresará al lote.

Por último presionar "Crear envío".

![imagen5](/img/inventarios/inventarios-lotes-5.jpg)

Le aparecerá un mensaje notificando que la reservación fue creada exitosamente. En la parte inferior podrá ver los detalles y entregarla.

![imagen6](/img/inventarios/inventarios-lotes-6.jpg)

La creación de lotes se documenta en [Lotes](/inventarios/inventarios-lotes).

## API (llamadas desde sistemas externos)

### Crear la reservación con lote

El movimiento de la reservación debe incluir el `lot_id` del lote que recibirá el producto. La bodega de origen es la agencia del proveedor (`Vendor`) y la de destino, la bodega en la que se ingresará el lote.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "shipment": {
      "reference": "Ingreso a lote",
      "booker_id": "1",
      "needs_transport": "0",
      "planned_delivery": "2026-08-15",
      "agency_from_id": "2",
      "agency_to_id": "1",
      "movements_attributes": {
        "0": {
          "item_id": "3",
          "booked_quantity": "100",
          "lot_id": "4"
        }
      }
    }
  }' \
  https://app.zauru.com/inventories/bookings.json
```

El lote debe estar creado previamente y pertenecer al ítem del movimiento; de lo contrario la reservación no se crea. Para consultar la reservación con sus movimientos:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1.json
```
