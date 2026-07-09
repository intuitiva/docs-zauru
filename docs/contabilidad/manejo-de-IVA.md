---
title: "Manejo de impuestos indirectos o IVA"
sidebar_label: "Manejo de impuestos indirectos o IVA"
sidebar_position: 4
format: md
---

# Manejo de impuestos indirectos o IVA

Este tutorial esta enfocado en el manejo de impuestos indirecto. Antes de ver este tutorial asegúrese de haber visto el tutorial de “Configuraciones” en donde se establecen las cuentas de IVA.

Zauru lleva el registro de IVA por pagar (IVA débito fiscal), que es el IVA que se genera cuando se vende, y del IVA por cobrar (IVA crédito fiscal), que es el IVA que se genera cuando se compra. Se mostrara como verificar el ambos IVA en el siguiente ejemplo.

## IVA por pagar (IVA débito fiscal)
Cada vez que usted emite una factura sujeta a impuestos no de exportación, Zauru genera automáticamente una transacción de IVA por pagar, o sea alimenta el pasivo. Los pasos para verificar esta transacciones son los siguientes:

1. Ir a ventas.
2. Ir a Facturas Pagas
3. Seleccionar “Ver” en la factura que desea verificar.

![imagen1](/img/contabilidad/manejo-de-IVA-1.jpg)


En “Transacciones Asociadas” podrá ver la transacción que se genera automáticamente de IVA por Pagar cuando usted factura.

![imagen2](/img/contabilidad/manejo-de-IVA-2.jpg)


## IVA por cobrar (IVA crédito fiscal)
Cada vez que usted realiza una compra se debe registrar el IVA por cobrar o sea alimenta un activo.

Zauru genera una transacción contable de IVA por cobrar automáticamente cuando se hace una orden de compra local sujeta a impuestos (no importación) desde el modulo de Compras. Si la compra se registra por medio de una transacción contable en el módulo de Contabilidad usted tiene que especificarle al sistema si quiere o no registrar IVA. Ambos escenarios se mostraran en el siguiente tutorial.

## Registro de IVA por cobrar en el módulo de Compras
En el siguiente ejemplo se muestra la transacción contable de Compras. Los pasos para verla son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccione “Ver”.

![imagen3](/img/contabilidad/manejo-de-IVA-3.jpg)


En la parte de “Transacciones Asociadas” se ve reflejada la transacción que se genera automáticamente, que va desde “cuentas por pagar contado” hacia “inventario de mercadería” e “IVA por Cobrar”.

![imagen4](/img/contabilidad/manejo-de-IVA-4.jpg)


## Registro de IVA por cobrar en el módulo de Contabilidad
Cuando usted registra una compra o un gasto por medio de una transacción contable, debe especificar si quiere registrar o no el IVA por cobrar. Los pasos para registrar el IVA por cobrar se muestran en el siguiente ejemplo:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen5](/img/contabilidad/manejo-de-IVA-5.jpg)


Luego de colocar los campos de la transacción de compra o de gasto que quiere crear, deberá presionar +IVA como se muestra en el paso 4.  Esto hará que Zauru genere una nueva columna del lado derecho, separando la cantidad total entre el gasto y el IVA por cobrar.

Para crear la transacción presione el botón “Crear Transacción” que se encuentra al final de la pagina.

![imagen6](/img/contabilidad/manejo-de-IVA-6.jpg)

## Regularización de IVA
El fin de registrar el IVA de las transacciones de compra y venta es que podamos saber cuanto tenemos que pagar de IVA al final del mes.

El IVA por cobrar (IVA crédito fiscal) es un activo que tenemos a nuestro favor y el IVA por pagar (IVA débito fiscal) es un pasivo de debemos al fisco y necesitamos regularizarlo o sea fusionar los saldos para saber realmente cuanto crédito fiscal nos quedó o cuanto tenemos que pagar.

El proceso es sencillo, pero delicado. Debemos saber los saldos de ambos IVAs al finalizar cada mes y dependiendo de los saldos crear una partida de regularización para dejar un solo saldo en uno de los 2 IVAs que me dirá si tengo que pagar IVA o tengo crédito fiscal.

La forma más rápida de generar esta regularización es entrando al reporte de balance de cuenta mensual 2 veces (uno en cada IVA) y generar los reportes uno de la cuenta __IVA por pagar__ y otro de la cuenta __IVA por cobrar__ el mismo mes (asumiendo que el balance inicial es 0 en ambas cuentas).

![balances ivas](/img/contabilidad/manejo-de-IVA-7.png)

En el ejemplo, el balance menor es el de IVA por cobrar (Q1,655.60) y el mayor (en valor absoluto) es IVA por pagar (Q5,615.32) por lo que debemos crear una transacción el último día del mes revisado desde __IVA por cobrar__ hacia __IVA por pagar__ con el monto más pequeño entre los 2 saldos y así minimizar el monto que vamos a tener que pagarle al fisco (que coincidirá con el saldo nuevo de la cuenta IVA por pagar).

![regularizacion iva](/img/contabilidad/manejo-de-IVA-8.png)

Si la operación fuera al revés, o sea, el IVA por cobrar fuera el mayor (en valor absoluto) que el IVA por pagar, la operación a realizar es exactamente la misma, se crea desde __IVA por cobrar__ hacia __IVA por pagar__ con el monto más pequeño entre los 2 saldos para establecer el crédito fiscal con el que contamos. Nuestro crédito fiscal coincidirá con el saldo nuevo de la cuenta IVA por cobrar.

De esta forma se podrá tener controlado el IVA.
