---
title: "Redimir una nota de crédito emitida a una factura"
sidebar_label: "Redimir una nota de crédito emitida a una factura"
sidebar_position: 15
---

Este tutorial esta basado en como aplicar una nota de crédito a una factura no pagada.


1. Ir a "Ventas".
2. Seleccionar "Facturas no Pagadas".

![Listado de facturas no pagadas en el módulo de ventas](/img/ventas/redimir-nota-de-credito-en-una-factura-1.png)

3. Click sobre "Cobrar" (La tarjeta).

![Vista con botón Cobrar de una factura no pagada](/img/ventas/redimir-nota-de-credito-en-una-factura-1.png)



Le aparecerán las opciones para crear un nuevo pago, los campos que debe llenar son los siguientes:

![Formulario de nuevo pago con redención de nota de crédito](/img/ventas/redimir-nota-de-credito-en-una-factura-3.png)

a. Coloque la fecha en que se esta haciendo el cobro.

b. Coloque el punto de pago.

c. Coloque el método de pago, (redención de nota de crédito).

d. Coloque una breve referencia sobre el pago, este campo es opcional.

e. Si usted le emitió un recibo al cliente coloque el numero de recibo.

f. Coloque la cantidad de la nota de crédito.

g. Por ultimo presione crear pago.


Le aparecerá un mensaje en la pantalla notificándole que el pago fue creado exitosamente.


Regresamos a facturas no pagadas, si el cliente cancelo se aplica el pago normal de lo contrario seguira en faturas no pagadas hasta que cancele la cantidad pendiente.

## API (llamadas desde sistemas externos)

### Redimir una nota de crédito en su factura asociada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes/1/redeem_with_associated_invoice.json
```
