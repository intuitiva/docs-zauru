---
title: "Manejo de impuestos indirectos o IVA"
sidebar_label: "Manejo de impuestos indirectos o IVA"
sidebar_position: 7
---

Este tutorial esta enfocado en el manejo de impuestos indirecto. Antes de ver este tutorial asegurese de haber visto el tutorial de [Configuraciones](configuraciones) en donde se establecen las cuentas de IVA.

Zauru lleva el registro de IVA por pagar (IVA debito fiscal), que es el IVA que se genera cuando se vende, y del IVA por cobrar (IVA credito fiscal), que es el IVA que se genera cuando se compra. Se mostrara como verificar ambos IVA en el siguiente ejemplo.

## IVA por pagar (IVA debito fiscal)

Cada vez que usted emite una factura sujeta a impuestos no de exportacion, Zauru genera automaticamente una transaccion de IVA por pagar, o sea alimenta el pasivo. Los pasos para verificar esta transacciones son los siguientes:

1. Ir a ventas.
2. Ir a Facturas Pagas
3. Seleccionar "Ver" en la factura que desea verificar.

![imagen1](/img/contabilidad/manejo-de-IVA-1.jpg)

En "Transacciones Asociadas" podra ver la transaccion que se genera automaticamente de IVA por Pagar cuando usted factura.

![imagen2](/img/contabilidad/manejo-de-IVA-2.jpg)

## IVA por cobrar (IVA credito fiscal)

Cada vez que usted realiza una compra se debe registrar el IVA por cobrar o sea alimenta un activo.

Zauru genera una transaccion contable de IVA por cobrar automaticamente cuando se hace una orden de compra local sujeta a impuestos (no importacion) desde el modulo de Compras. Si la compra se registra por medio de una transaccion contable en el modulo de Contabilidad usted tiene que especificarle al sistema si quiere o no registrar IVA. Ambos escenarios se mostraran en el siguiente tutorial.

## Registro de IVA por cobrar en el modulo de Compras

En el siguiente ejemplo se muestra la transaccion contable de Compras. Los pasos para verla son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccione "Ver".

![imagen3](/img/contabilidad/manejo-de-IVA-3.jpg)

En la parte de "Transacciones Asociadas" se ve reflejada la transaccion que se genera automaticamente, que va desde "cuentas por pagar contado" hacia "inventario de mercaderia" e "IVA por Cobrar".

![imagen4](/img/contabilidad/manejo-de-IVA-4.jpg)

## Registro de IVA por cobrar en el modulo de Contabilidad

Cuando usted registra una compra o un gasto por medio de una transaccion contable, debe especificar si quiere registrar o no el IVA por cobrar. Los pasos para registrar el IVA por cobrar se muestran en el siguiente ejemplo:

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Seleccionar "Nueva Transaccion".

![imagen5](/img/contabilidad/manejo-de-IVA-5.jpg)

Luego de colocar los campos de la transaccion de compra o de gasto que quiere crear, debera presionar **+IVA** como se muestra en el paso 4. Esto hara que Zauru genere una nueva columna del lado derecho, separando la cantidad total entre el gasto y el IVA por cobrar.

### Calculo del IVA

El sistema calcula el IVA basado en la configuracion de la entidad. Existen dos modalidades:

- **IVA incluido en precios** (`vat_included`): si esta activo, al presionar +IVA el sistema recalcula los montos de los splits restando el IVA y agrega un split con el monto del IVA.
- **IVA no incluido en precios**: al presionar +IVA el sistema incrementa el monto de la transaccion agregando el IVA y crea un split con el IVA calculado.

La cuenta de IVA utilizada es la configurada en [Configuraciones](configuraciones) como "vat_to_charge".

Para crear la transaccion presione el boton "Crear Transaccion" que se encuentra al final de la pagina.

![imagen6](/img/contabilidad/manejo-de-IVA-6.jpg)

## Regularizacion de IVA

El fin de registrar el IVA de las transacciones de compra y venta es que podamos saber cuanto tenemos que pagar de IVA al final del mes.

El IVA por cobrar (IVA credito fiscal) es un activo que tenemos a nuestro favor y el IVA por pagar (IVA debito fiscal) es un pasivo que debemos al fisco y necesitamos regularizarlo o sea fusionar los saldos para saber realmente cuanto credito fiscal nos quedo o cuanto tenemos que pagar.

El proceso es sencillo, pero delicado. Debemos saber los saldos de ambos IVAs al finalizar cada mes y dependiendo de los saldos crear una partida de regularizacion para dejar un solo saldo en uno de los 2 IVAs que me dira si tengo que pagar IVA o tengo credito fiscal.

La forma mas rapida de generar esta regularizacion es entrando al reporte de balance de cuenta mensual 2 veces (uno en cada IVA) y generar los reportes uno de la cuenta **IVA por pagar** y otro de la cuenta **IVA por cobrar** el mismo mes (asumiendo que el balance inicial es 0 en ambas cuentas).

![balances ivas](/img/contabilidad/manejo-de-IVA-7.png)

En el ejemplo, el balance menor es el de IVA por cobrar (Q1,655.60) y el mayor (en valor absoluto) es IVA por pagar (Q5,615.32) por lo que debemos crear una transaccion el ultimo dia del mes revisado desde **IVA por cobrar** hacia **IVA por pagar** con el monto mas pequeno entre los 2 saldos y asi minimizar el monto que vamos a tener que pagarle al fisco (que coincidira con el saldo nuevo de la cuenta IVA por pagar).

![regularizacion iva](/img/contabilidad/manejo-de-IVA-8.png)

Si la operacion fuera al reves, o sea, el IVA por cobrar fuera el mayor (en valor absoluto) que el IVA por pagar, la operacion a realizar es exactamente la misma, se crea desde **IVA por cobrar** hacia **IVA por pagar** con el monto mas pequeno entre los 2 saldos para establecer el credito fiscal con el que contamos. Nuestro credito fiscal coincidira con el saldo nuevo de la cuenta IVA por cobrar.

De esta forma se podra tener controlado el IVA.
