---
title: "Pagar ordenes de compra y cargos adicionales"
sidebar_label: "Pagar ordenes de compra y cargos adicionales"
sidebar_position: 9
format: md
---

# Pagar ordenes de compra y cargos adicionales


Este tutorial esta enfocado en pagar ordenes de compra y sus cargos adicionales.

Los pasos para hacer el pago de una orden de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Pagar”.

![imagen1](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-1.png)


Le aparecerán todas las ordenes de compra asociadas al proveedor. En este ejemplo solo vamos a realizar el pago de una orden de compra. Los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se realiza el pago.

b. Coloque una breve referencia del pago que se esta haciendo.

c. Si le dieron un recibo por la compra, coloque el numero de recibo.

d. Coloque el método de pago, ya sea en efectivo o con cheque.

e. Aquí debe colocar la cantidad que desea pagar, ya sea el monto total o un monto parcial. Le aparecerá la conversión en quetzales de acuerdo al tipo de cambio que usted haya establecido en “Configuraciones”.

f. En este ejemplo solo queremos realizar el pago de una orden de compra, entonces vamos a marcar la casilla de “Eliminar” en todas las demás ordenes de compra.

g. Presione “Vista Previa” para refrescar la página.

![imagen2](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-2.jpg)



Podrá ver que se borraron del listado las ordenes de compra que no queremos pagar ahora.

Por ultimo, presione “Crear Pago” para realizar el pago a la orden de compra.

![imagen3](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-3.jpg)



Le aparecerá un mensaje de éxito en la pantalla notificando que se creo el pago exitosamente. Sera dirigido automáticamente a la pestaña de “Pagos” donde podrá ver todos los pagos realizados.

![imagen4](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-4.png)



## Pagar Cargos

Los cargos y aranceles que se agregan a las ordenes de compra se pagan de la siguiente forma:

1. Ir a “Compras”.
2. Seleccionar “Cargos”.
3. Seleccionar “Pagar”.

![imagen5](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-5.png)


Le aparecerán las opciones para hacer un nuevo pago, junto con todos los cargos asociados al proveedor, los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se realiza el pago.

b. Coloque una breve referencia del pago que se esta haciendo.

c. Si le dieron un recibo por la compra, coloque el numero de recibo.

d. Coloque el método de pago, ya sea en efectivo o con cheque.

e. Aquí debe colocar la cantidad que desea pagar, ya sea el monto total o un monto parcial.

* Si solo desea pagar un cargo, no todos los cargos que aparecen en la lista, marque el recuadro abajo de “Destruir”.

f. Para crear el pago presione “Crear Pago”.

![imagen6](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-6.png)



Le aparecerá un mensaje en la pantalla notificándole que se creo el pago exitosamente.

![imagen7](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-7.jpg)


## API (llamadas desde sistemas externos)

### pagar una orden de compra o cargo
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"discharge":{"payee_id":"1", "date":"2018-12-21", "reference":"Referencia del pago", "receipt":"Recibo del pago", "discharge_method_id":"1", "discharge_details_attributes":{"0":{"purchase_order_id":"1", "amount":"120"}}}}' https://app.zauru.com/purchases/discharges.json
```

### eliminar pagos de OC o cargos
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" DELETE https://app.zauru.com/purchases/discharges/1.json
```
