---
title: "Cobrar facturas (total, parcial o consolidado)"
sidebar_label: "Cobrar facturas (total, parcial o consolidado)"
sidebar_position: 8
---

Este tutorial esta enfocado en el cobro de facturas no pagadas. Existen cuatro formas de cobrar una factura:

1. Cobro Parcial
2. Cobro Total
3. Cobro Consolidado
4. Cobro sin Confirmar


Las primeras 3 formas se explicaran en este tutorial.

## Cobrar Factura Parcialmente
El cobro parcial es un cobro en donde no se paga toda la factura, solo una parte, y el cliente sigue debiendo. Los pasos para hacer un cobro parcial son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Click sobre “Cobrar” (La primer tarjeta)

![imagen1](/img/ventas/cobrar-facturas-1.jpg)

Le aparecerán las opciones para crear un nuevo pago. Los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se hizo el pago.

b. Seleccione el lugar donde pago el cliente.

c. Seleccione el método de pago.

d. Coloque una breve referencia para ubicar el pago rápidamente en el listado de transacciones.

e. Si usted le dio un recibo al cliente, coloque el numero de recibo.

f. Coloque la cantidad que el cliente pagó, en este ejemplo colocamos la mitad del total de la factura.


Presione “Crear Pago”


![imagen2](/img/ventas/cobrar-facturas-2.jpg)


Le aparecerá un mensaje de éxito en la pantalla y podrá encontrar los detales en la parte inferior de la pagina.

![imagen3](/img/ventas/cobrar-facturas-3.jpg)



En las facturas no pagadas podrá encontrar la factura, pero ahora aparecerá que solo debe la mitad.

![imagen4](/img/ventas/cobrar-facturas-4.jpg)


## Cobrar el total de la factura
Al cobrar el total de la factura la factura pasa a ser una factura pagada. Los pasos para cobrar el total de una factura son los siguientes:

![imagen5](/img/ventas/cobrar-facturas-5.jpg)
![imagen6](/img/ventas/cobrar-facturas-6.jpg)
![imagen7](/img/ventas/cobrar-facturas-7.jpg)


## Cobro Consolidado de Facturas
El cobro consolidado de facturas permite pagar dos o mas facturas del mismo cliente con un solo pago.


## API (llamadas desde sistemas externos)

### Obtener el listado de facturas que no se han pagado de un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/sales/payments/new.json?client=1
```

### Pagar parcialmente o totalmente una o varias facturas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "draft": "0",
      "payee_id": "1",
      "date": "2019-01-15",
      "agency_id": "1",
      "payment_method_id": "1",
      "reference": "referencia del pago",
      "receipt": "recibo",
      "exchange_rate": "1.0",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "reference": "referencia de la factura 1 en el pago",
          "amount": "100"
        },
        "1": {
          "invoice_id": "2",
          "reference": "referencia de la factura 2 el pago",
          "amount": "100"
        }
      },
      "memo": ""
    }
  }' \
  -X POST \
  https://app.zauru.com/sales/payments.json
```
