---
title: "Anular una factura o recibo (incluyendo el pago)"
sidebar_label: "Anular una factura o recibo (incluyendo el pago)"
sidebar_position: 6
format: md
---

# Anular una factura o recibo

Este tutorial esta enfocado en la anulación de una factura y sus repercusiones. Solo se puede anular una factura no pagada, si la factura tiene un pago, __primero hay que anular el pago__, después anular la factura y esto hará que se revierta lo siguiente:

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
