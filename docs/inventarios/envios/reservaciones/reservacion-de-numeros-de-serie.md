---
title: "Reservación de números de serie"
sidebar_label: "Reservación de números de serie"
sidebar_position: 2
---

Para ingresar un producto identificable desde el proveedor a la bodega, se crea una reservación seleccionando los números de serie específicos. El producto debe tener números de serie creados previamente.

Los pasos para hacer una reservación de entrada de un producto con número de serie son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Nueva reservación de #s de Serie".

![imagen5](/img/inventarios/inventarios-numeros-de-serie-5.jpg)

Le aparecerá el primer paso, los pasos a seguir son:

1. Seleccionar la bodega "Vendor (Proveedor)" y presionar "Cambiar de Bodega".
2. Colocar el número de serie (previamente creado) del producto que desea ingresar.

Por último presionar "Generar Reservación".

![imagen6](/img/inventarios/inventarios-numeros-de-serie-6.jpg)

A continuación aparecerá el segundo paso, donde se colocan los detalles de la reservación: referencia, fecha de entrega estimada y si necesita transporte. Por último presionar "Crear envío".

![imagen7](/img/inventarios/inventarios-numeros-de-serie-7.jpg)

Le aparecerá un mensaje notificando que la reservación fue creada exitosamente. En la parte inferior podrá ver los detalles o entregarla.

![imagen8](/img/inventarios/inventarios-numeros-de-serie-8.jpg)

Con la reservación entregada, cada número de serie queda disponible en la bodega y listo para moverse o venderse. La creación de números de serie se documenta en [Números de serie](/inventarios/inventarios-numeros-de-serie).

## API (llamadas desde sistemas externos)

### Crear la reservación con números de serie

Cada número de serie va en un movimiento con `booked_quantity` de 1. La bodega de origen es la agencia del proveedor (`Vendor`) y la de destino, la bodega en la que se ingresarán los números de serie.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "shipment": {
      "reference": "Ingreso de números de serie",
      "booker_id": "1",
      "needs_transport": "0",
      "planned_delivery": "2026-08-15",
      "agency_from_id": "2",
      "agency_to_id": "1",
      "movements_attributes": {
        "0": {
          "item_id": "3",
          "booked_quantity": "1",
          "serial_id": "10"
        },
        "1": {
          "item_id": "3",
          "booked_quantity": "1",
          "serial_id": "11"
        }
      }
    }
  }' \
  https://app.zauru.com/inventories/bookings.json
```

Los números de serie deben estar creados previamente y pertenecer al ítem del movimiento; de lo contrario la reservación no se crea. Para consultar la reservación con sus movimientos:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1.json
```
