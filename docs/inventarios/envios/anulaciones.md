---
title: "Anulaciones"
sidebar_label: "Anulaciones"
sidebar_position: 5
---

Una anulación cancela una reservación que ya no se necesita, antes de que se despache o entregue. Al anular, se liberan las reservas de productos y el envío pasa a "Reservaciones Anuladas". No se puede recuperar.

## Anular una reservación

Los pasos para anular una reservación son:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Abrir la reservación que desea anular.
4. Seleccionar la opción de anular.

Al anular una reservación:

- Se liberan todas las reservas de productos en la bodega origen.
- El envío pasa a la pestaña "Reservaciones Anuladas".
- Los envíos anulados no se pueden recuperar ni editar.

La anulación solo aplica mientras el envío esté en estado de Reservación. Si el envío ya fue despachado o entregado, se debe usar [Devoluciones](/inventarios/envios/devoluciones) para revertirlo.

## Ver reservaciones anuladas

Para ver el historial de reservaciones anuladas:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Seleccionar "Reservaciones Anuladas".

La tabla muestra las columnas "ID", "Reservación #", "Referencia", "Necesita Transporte", "Entrega Estimada", "Anulado el", "Origen", "Destino", "Tipo", "Items" y "Memo".

## API (llamadas desde sistemas externos)

### Anular una reservación
Anula una reservación y libera las reservas de productos. Solo se puede anular mientras el envío esté en estado de Reservación.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/bookings/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
