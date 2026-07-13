---
title: "[Transacciones] Controlar viaticos (anticipados y vencidos)"
sidebar_label: "[Transacciones] Controlar viaticos (anticipados y vencidos)"
sidebar_position: 14
---

> Registrar compras de bienes o servicios por parte del empleado se puede realizar desde el modulo de compras con una orden de compra.
> Hay empresas que prefieren separar este proceso de las compras de mercaderia y es por eso que existe este tutorial.

Este tutorial esta enfocado en el pago de viaticos a los empleados. Hay dos formas de pagar viaticos:

1. Pago anticipado
2. Pago vencido

Se ejemplificaran las dos formas en este tutorial.

## Pago de Viaticos Anticipados

Cuando se pagan viaticos anticipados, primero se hace una transferencia de la cuenta monetaria a la caja chica del empleado, y luego cuando el empleado reporta sus gastos, se ingresan los gastos desde la caja chica del empleado hacia la cuenta de gastos.

Los pasos para registrar la transferencia monetaria a la caja chica del empleado son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Seleccionar "Nueva transaccion".

![imagen1](/img/contabilidad/transacciones-control-de-viaticos-1.jpg)

En el siguiente ejemplo se registra un cheque a un empleado desde "cuenta monetaria" hacia "caja chica del empleado". Las opciones para hacer la transferencia monetaria a la caja chica del empleado son las siguientes:

a. Coloque el nombre del empleado

b. Si quiere imprimir el cheque desde el sistema coloque "Generar Impresion".

c. Coloque una referencia para que sea mas facil buscar el pago en el listado de transacciones.

d. Coloque la fecha en la que se puede cobrar el pago.

e. Seleccione desde que cuenta se va emitir el cheque al empleado.

f. Coloque la cantidad por la que se va emitir el cheque.

g. Coloque la cuenta de la caja chica del empleado, en este ejemplo se selecciona "caja chica empleados".

Para crear la transferencia seleccione "Crear nueva transaccion". El siguiente paso es registrar los gastos que haga el empleado de viaticos por medio de una transaccion contable que salga desde "caja chica empleados" hacia "viaticos".

![imagen2](/img/contabilidad/transacciones-control-de-viaticos-2.png)

Los pasos para registrar los gastos de viaticos hechos por el empleado son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Seleccionar "Nueva Transaccion".

![imagen3](/img/contabilidad/transacciones-control-de-viaticos-3.jpg)

Hay dos maneras de registrar los gastos:

1. Ingresar una transaccion por factura de los gastos.
2. Ingresar un saldo total de los gastos.

En el siguiente ejemplo se muestra como registrar los gastos por factura. Las opciones a colocar para registrar los gastos de viaticos son las siguientes:

a. Coloque el nombre del proveedor

b. Coloque una referencia para que sea mas facil buscar este gasto en las transacciones.

c. Si le dieron factura por la compra, coloque el numero de factura, si no deje este campo en blanco.

d. Si le dieron factura por la compra, coloque la fecha de la factura, si no deje este campo en blanco.

e. Coloque la fecha en que se espera pagar los gastos del empleado.

f. Seleccione la cuenta "cuentas por pagar a empleados" porque se esta generando una deuda.

g. Coloque la cantidad total por la que se hizo el gasto.

h. Seleccione la cuenta gasto, en este ejemplo seleccionamos "gasolina", pero tambien podria desglosar mas rubros de gastos para especificar mas los gastos de viaticos.

Para crear el registro de gastos seleccione "Crear nueva transaccion".

![imagen4](/img/contabilidad/transacciones-control-de-viaticos-4.jpg)

## Pago de Viaticos Vencidos

Cuando se pagan viaticos vencidos, primero se registra el gasto que tuvo el empleado, y luego se pagan los gastos del empleado. Los pasos para registrar los gastos del empleado son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Seleccionar "Nueva Transaccion".

![imagen5](/img/contabilidad/transacciones-control-de-viaticos-5.jpg)

En el siguiente ejemplo se muestra como registrar los gastos por factura. Las opciones a colocar para registrar los gastos de viaticos son las siguientes:

a. Coloque el nombre del proveedor

b. Coloque una referencia para que sea mas facil buscar este gasto en las transacciones.

c. Si le dieron factura por la compra, coloque el numero de factura, si no deje este campo en blanco.

d. Si le dieron factura por la compra, coloque la fecha de la factura, si no deje este campo en blanco.

e. Coloque la fecha en que se espera pagarle al empleado los gastos.

f. Seleccione la cuenta desde donde se hicieron los gastos, en este caso se selecciona "caja chica empleados".

g. Coloque la cantidad total por la que se hizo el gasto.

h. Seleccione la cuenta gasto, en este ejemplo seleccionamos "gasolina", pero tambien podria desglosar mas rubros de gastos para especificar mas los gastos de viaticos.

Para crear el registro de gastos seleccione "Crear nueva transaccion".

![imagen6](/img/contabilidad/transacciones-control-de-viaticos-6.jpg)

El siguiente paso es crear el pago de los viaticos al empleado. Los pasos para crear el pago son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Seleccionar "Nueva Transaccion".

![imagen7](/img/contabilidad/transacciones-control-de-viaticos-7.jpg)

En el siguiente ejemplo se registra un cheque a un empleado desde "cuenta monetaria" hacia "cuentas por pagar a empleados" para saldar la deuda de viaticos vencidos. Los campos a llenar son los siguientes:

a. Coloque el nombre del empleado

b. Si quiere imprimir el cheque desde el sistema coloque "Generar Impresion".

c. Coloque una referencia para que sea mas facil buscar el pago en el listado de transacciones.

d. Coloque la fecha en la que se puede cobrar el pago.

e. Seleccione desde que cuenta se va emitir el cheque al empleado.

f. Coloque la cantidad por la que se va emitir el cheque.

g. Coloque la cuenta "cuentas por pagar a empleados".

Para crear la transferencia seleccione "Crear nueva transaccion".

![imagen8](/img/contabilidad/transacciones-control-de-viaticos-8.jpg)

## Liquidaciones

Cuando tiene multiples gastos de un empleado que necesitan ser pagados en una sola operacion, puede utilizar el proceso de liquidacion en lugar de crear transacciones manuales una por una. Vea el tutorial de [Liquidaciones](liquidaciones) para el procedimiento detallado.

En resumen, el proceso de liquidacion permite:

1. Ir a la cuenta reconciliable (ej. "Cuentas por pagar a empleados").
2. Hacer clic en "Liquidar".
3. Seleccionar todas las partidas de gastos pendientes de pago del empleado.
4. Completar el formulario con la cuenta de banco desde donde se paga y el beneficiario.
5. Crear la transaccion, que automaticamente:
   - Suma todos los gastos seleccionados.
   - Crea una sola transaccion de pago por el total.
   - Reconcilia todas las partidas seleccionadas con el pago.

Esto es mas eficiente que crear el pago manualmente y luego reconciliar partida por partida.
