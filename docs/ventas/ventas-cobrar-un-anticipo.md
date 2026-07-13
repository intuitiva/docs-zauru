---
title: "Cobrar un anticipo (Cobrar antes de facturar)"
sidebar_label: "Cobrar un anticipo (Cobrar antes de facturar)"
sidebar_position: 9
format: md
---

# Cobrar un anticipo (Cobrar antes de facturar)


Este tutorial esta enfocado en cobrar anticipos. Un anticipo es un cobro que se la hace al cliente antes de facturar para comenzar la relación de trabajo. Los pasos para cobrar un anticipo a una orden de venta son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Ordenes”.
3. Seleccionar “Cobrar” (La tarjeta)

![imagen1](/img/ventas/ventas-cobrar-un-anticipo-1.png)


Le aparecerán las opciones para crear un nuevo pago, los campos que debe llenar son los siguientes:

a. Coloque el cliente al que desea cobrar el anticipo, por default Zauru colocara el cliente de la orden de venta que usted selecciono para cobrar.

b. Coloque la fecha en que se realiza el pago.

c. Coloque el lugar donde se realiza el pago.

d. Coloque el método de pago.

e. Coloque una breve referencia para encontrar el pago fácilmente en el listado de pagos.

f. Si no tiene una numeración automática de recibos, coloque manualmente el numero de recibo que se le dio al cliente, si no se le dio recibo, puede dejar el campo en blanco.

g. Coloque la cantidad del pago, en este ejemplo colocamos la mitad del total de la factura como anticipo.


Para crear el anticipo presione “Crear Pago”.

![imagen2](/img/ventas/ventas-cobrar-un-anticipo-2.jpg)



Le aparecerá un mensaje en la pantalla notificándole que el pago se creo exitosamente, en la parte inferior de la pagina podrá encontrar los datos de la orden de venta que se pago y el detalle del pago.

![imagen3](/img/ventas/ventas-cobrar-un-anticipo-3.jpg)

## API (llamadas desde sistemas externos)

### Obtener el listado de ordenes que no se han pagado de un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/sales/payments/new_advance.json?client=1
```
Y esto me va a devolver un JSON con las siguientes características:

```json
{
  "payment": {
    "amount": 10,
    "date": "2020-08-28",
    "payee_id": 1,
    ...
  },
  "orders": [
    {
      "id": 1,
      "zid": 1,
      "payee_id": 1,
      "total": 100,
      "due": 100,
      ...
    },
    {
      {
      "id": 2,
      "zid": 2,
      "payee_id": 1,
      "total": 10,
      "due": 5,
      ...
    },
    ...
  ]
}
```
### Pagar parcialmente o totalmente una o varias ordenes
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
          "reference": "referencia de la orden 1 en el pago",
          "amount": "100"
        },
        "1": {
          "invoice_id": "2",
          "reference": "referencia de la orden 2 el pago",
          "amount": "100"
        }
      },
      "memo": ""
    }
  }' \
  -X POST \
  https://app.zauru.com/sales/payments.json
```
