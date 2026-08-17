---
title: "Anular una factura o recibo (incluyendo el pago)"
sidebar_label: "Anular una factura o recibo (incluyendo el pago)"
sidebar_position: 7
---

¿Se equivocó al emitir una factura o su cliente canceló la venta y necesita dejar todo como estaba? Aquí verá cómo anular una factura o un recibo y qué sucede en la contabilidad y en el inventario al hacerlo. Solo se puede anular una factura no pagada: si la factura tiene un pago, __primero hay que anular el pago__ y después anular la factura, y esto hará que se revierta lo siguiente:

- Transacciones de Ventas e IVA por Pagar.
- Movimientos de inventario de Bodega a Cliente.
- Transacciones de pago.


## Anular el pago de una factura pagada

En el siguiente ejemplo se muestra como anular el pago de una factura pagada, para después poder anular la factura. Los pasos son los siguientes:

1. Ir a “ventas”.
2. Seleccionar “Facturas Pagadas”.
3. Seleccionar “Verificar” (El ojo) para ver los detalles de la factura.

![imagen1](/img/ventas/anular-una-factura-o-recibo-1.jpg)

Aparecerán los detalles de la factura, en la parte inferior de la pagina podrá encontrar los cobros asociados. Haga click sobre el ID o la referencia del cobro que quiere eliminar.

![imagen2](/img/ventas/anular-una-factura-o-recibo-2.jpg)



Aparecerán los detalles del pago, presione “Destruirlo” en la parte inferior de la página para eliminar el pago asociado a la factura.

![imagen3](/img/ventas/anular-una-factura-o-recibo-3.jpg)

Le aparecerá un mensaje de éxito en pantalla notificándole que el pago se anulo exitosamente.

![imagen4](/img/ventas/anular-una-factura-o-recibo-4.jpg)

## Anular una factura no pagada

Ahora la factura ya no aparecerá como factura pagada, si no como factura no pagada. Los pasos para eliminar la factura son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Click sobre “Eliminar” (Basurero)

![imagen5](/img/ventas/anular-una-factura-o-recibo-5.jpg)

Le aparecerá un mensaje notificándole que la factura fue eliminada exitosamente, automáticamente se regresaran los productos que habían salido de la bodega, y se regresara

![imagen6](/img/ventas/anular-una-factura-o-recibo-6.jpg)


## Facturas Anuladas
Aca puede consultar el historial de las facturas anuladas, siempre y cuando no sean facturas electrónicas.

1. Seleccionar "ventas"
2. Seleccionar "Facturas no pagadas"
3. Seleccionar "Facturas anuladas"

## Pagos Anulados
Aca puede consultar el historial de los pagos anulados, pueden sucitar por colocar mal el método de pago, cantidad que están pagando, etc.

1. Seleccionar "ventas"
2. Seleccionar "pagos"
3. Seleccionar "pagos anulados"

Listo. Con esto ya sabe cómo deshacer una factura junto con su pago, y dónde consultar el historial de facturas y pagos anulados. Si vuelve a equivocarse, bastará con repetir estos pasos para revertir la venta, la salida de mercadería de la bodega y las transacciones contables en cuestión de minutos.

## API (llamadas desde sistemas externos)

### eliminar pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/payments/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "entries": [
    "es inválido"
  ]
}
```

### Anular una factura pagada sin pagos asociados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1/no_payments_void.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Eliminar una factura pagada anulada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
