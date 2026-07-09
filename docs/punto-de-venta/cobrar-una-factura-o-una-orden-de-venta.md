---
title: "Cobrar una factura o una orden de venta"
sidebar_label: "Cobrar una factura o una orden de venta"
sidebar_position: 4
format: md
---

# Cobrar una factura o una orden de venta

Este tutorial esta enfocado en cobrar las facturas u ordenes de venta desde el punto de venta. Los pasos para cobrar una factura son los siguientes:

1. Ir a “P.D.V”.
2. Seleccionar “Facturas” u "Ordenes".
3. Seleccionar el icono de “Cobrar”.

![imagen1](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-1.jpg)


Le aparecerán las opciones para crear un nuevo pago, junto con los detalles de la factura no pagada. Los campos que debe colocar son:

a. Coloque el método de pago en que se esta pagando la factura.

b. Coloque una breve referencia sobre el pago que esta creando. (Opcional)

c. Coloque la cantidad que se esta cobrando en el método de pago que especificó.

* Si el cliente pago en dos métodos de pago, digamos efectivo y tarjeta de crédito, presione el mas para especificar el otro método de pago y la cantidad que pago en ese método de pago.

Presione “Crear pago”.

![imagen2](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-2.jpg)

Le aparecerá un mensaje de éxito notificándole que se creo el cobro, ahora el cobro quedara en el listado de cobros sin confirmar, hasta que se confirme el pago, la factura seguirá siendo una factura no pagada.

![imagen3](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-3.jpg)

## API (llamadas desde sistemas externos)

### Registrar un pago asociado a una factura
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"payment":{"payment_method_id":"1", "reference":"prueba", "payment_details_attributes":{"0":{"invoice_id":"1", "amount":"32.0"}}, "memo":"generado desde el API"}}' https://app.zauru.com/pos/charges.json
```
