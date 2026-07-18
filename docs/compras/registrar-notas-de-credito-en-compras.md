---
title: "Registrar Notas de Crédito Compras"
sidebar_label: "Registrar Notas de Crédito Compras"
sidebar_position: 16
---

Este tutorial esta enfocado en la creación de notas de crédito sobre una orden de compra.

Una nota de crédito de compras es un documento comercial emitido por el proveedor para notificar la devolución parcial, devolución total o descuento sobre la factura emitida por el mismo proveedor en la orden de compra registrada en Zauru.

El proceso de registro de notas de crédito consiste en 2 grandes pasos.
El primer paso es el de __registrar la nota de crédito__, que a su vez consiste en 1 o 2 pasos:
  1. Generar la partida contable para la nota de crédito
  2. Generar el envío de la devolución de los productos en la nota de crédito.

El segundo paso es el de __redimir la nota de crédito__, para que la Orden de Compra se cierre y no dejar ningún cabo abierto

## Registrar la Nota de Crédito

### Generar partida contable (Para OC de Gastos)
Lo primero que hay que revisar es la partida existente, porque nos tenemos que basar en eso para generar la partida de la Nota de Crédito.
Este es el ejemplo que vamos a utilizar como partida contable:
![transaccion existente en OC](/img/compras/registrar-notas-de-credito-en-compras-1.png)

Ahora vamos a crear una nueva partida de la Nota de crédito asociada a la Orden de Compra (Para este caso debe de existir una cuenta de Activo Ej: Nota de crédito recibida):
![boton asociar transaccion a la OC](/img/compras/registrar-notas-de-credito-en-compras-2.png)

Para Nota de Crédito por anulación completa, la transacción debería de ser:
Gasto X Q312.50 => Nota de crédito recibida Q350
                   IVA Crédito -Q37.50

Para Nota de Crédito por descuento o por anulación parcial, la transacción debería de crearse algo similar a:
Gasto X Q156.25 => Nota de crédito recibida Q175
                   IVA Crédito -Q18.75

Para que esta nota de crédito aparezca en el libro de compras, la transaccion debe tener en el campo "Factura" el numero de la nota de crédito.

### Generar partida contable (Para OC de Mercadería)
Lo primero que hay que revisar es la partida existente, porque nos tenemos que basar en eso para generar la partida de la Nota de Crédito, __OJO:__ para este caso en lugar de la cuenta: __Gasto X__, la transacción iría a la cuenta de __Activo de Inventario (Mercadería por ejemplo)__.
![transaccion existente en OC](/img/compras/registrar-notas-de-credito-en-compras-3.png)

Ahora vamos a crear una nueva partida de la Nota de crédito asociada a la Orden de Compra (Para este caso debe de existir una cuenta de Activo Ej: Nota de crédito recibida).
![boton asociar transaccion a la OC](/img/compras/registrar-notas-de-credito-en-compras-4.png)

Para Nota de Crédito por anulación completa, la transacción debería de ser:
Mercaderia Q312.50 => Nota de crédito recibida Q350
                   IVA Crédito -Q37.50

Para Nota de Crédito por descuento o por anulación parcial, la transacción debería de crearse algo similar a:
Mercaderia Q156.25 => Nota de crédito recibida Q175
                   IVA Crédito -Q18.75

Para que esta nota de crédito aparezca en el libro de compras, la transaccion debe tener en el campo "Factura" el numero de la nota de crédito.

### Generar envío de la devolución de los productos

Si la nota de Crédito implica una devolución de mercadería, tendremos que crear un envío asociado a la orden de compra por medio del siguiente botón.
![boton asociar nuevo envio a OC](/img/compras/registrar-notas-de-credito-en-compras-5.png)

Recordar que en este envío nuevo; el origen y el destino debería de estar al revés de lo que está el envío creado automáticamente en la orden de compras

## Redimir la nota de crédito de compras
para poder redimir la nota de crédito primero necesitamos crear un método de pago en compras (Ej. Notas de crédito) con la configuración necesaria para que la cuenta de notas de crédito recibidas se salde (Ver manual de Métodos de pagos https://docs.zauru.com/compras/configuracion, la cuenta a seleccionar en el paso 2 del manual debe ser la cuenta de Activo de las Notas de crédito recibidas).

Para concluir el proceso de redimir la nota de crédito es pagar la orden de compra, se debe realizar un pago (o varios si fuera el caso) utilizando la forma de pago con la que se realizo el o los pagos de la orden de compra y un último pago utilizando el método de pago creado anteriormente (Ej. Notas de crédito).
