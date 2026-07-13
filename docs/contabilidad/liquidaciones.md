---
title: "Liquidaciones"
sidebar_label: "Liquidaciones"
sidebar_position: 9
---

Este tutorial explica como realizar liquidaciones en el modulo de contabilidad. Una liquidacion permite registrar un pago o cobro consolidado contra una cuenta reconciliable, seleccionando multiples partidas pendientes para saldarlas en una sola operacion.

## Que es una liquidacion

Cuando usted tiene varias partidas abiertas en una cuenta reconciliable (como "Cuentas por Pagar", "Cuentas por Cobrar", "Caja Chica Empleados", etc.) y desea saldarlas con un solo pago o cobro, puede utilizar la funcionalidad de liquidacion. El sistema:

1. Selecciona las partidas que desea liquidar.
2. Calcula el monto total de las partidas seleccionadas.
3. Crea una nueva transaccion por el monto total.
4. Enlaza automaticamente todas las partidas en una reconciliacion.

## Pasos para realizar una liquidacion

### 1. Acceder a la cuenta reconciliable

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Buscar la cuenta reconciliable que desea liquidar (ej. "Cuentas por Pagar a Empleados").
4. Hacer clic en el boton "Liquidar" que aparece en el detalle de la cuenta.

> Nota: Solo las cuentas marcadas como "Reconciliable" en su configuracion mostraran la opcion de liquidar.

### 2. Seleccionar las partidas a liquidar

En la pantalla de liquidacion vera:

- Un listado de todas las partidas abiertas (no reconciliadas) en esa cuenta.
- Un formulario para crear la nueva transaccion de liquidacion.

Debe:
1. Marcar las partidas que desea liquidar (las que esta pagando o cobrando en este momento).
2. Completar el formulario de la transaccion de liquidacion:
   - **Beneficiario**: persona o empresa a la que se le paga o de quien se recibe.
   - **Referencia**: texto para identificar la liquidacion.
   - **Fecha**: fecha de la transaccion.
   - **Cuenta origen/destino**: desde donde sale o entra el dinero (ej. cuenta de banco).
   - **Monto**: se calcula automaticamente como la suma de las partidas seleccionadas.

### 3. Crear la liquidacion

1. Haga clic en "Previsualizar" para verificar los datos antes de crear la transaccion.
2. Si todo esta correcto, haga clic en "Crear Transaccion".

El sistema creara:
- Una nueva transaccion contable por el monto total.
- Una reconciliacion que enlaza todas las partidas seleccionadas con la nueva transaccion.

## Ejemplo practico: liquidar gastos de un empleado

Suponga que un empleado reporto varios gastos de viaticos durante el mes:
1. Gasolina: Q500
2. Comida: Q300
3. Hospedaje: Q800

Estos gastos se registraron en "Cuentas por Pagar a Empleados" (cuenta reconciliable). Para pagarle al empleado:

1. Vaya a "Cuentas por Pagar a Empleados" y haga clic en "Liquidar".
2. Marque las 3 partidas de gastos (Q500 + Q300 + Q800).
3. Seleccione la cuenta de banco desde donde se pagara.
4. El monto total (Q1,600) se calcula automaticamente.
5. Haga clic en "Crear Transaccion".

Se genera una transaccion desde "Banco" hacia "Cuentas por Pagar a Empleados" por Q1,600 y todas las partidas quedan reconciliadas.

## Ver la liquidacion creada

Despues de crear la liquidacion:
- Puede ver la transaccion creada desde "Transacciones".
- En el detalle de la cuenta reconciliable, las partidas liquidadas mostraran un numero de reconciliacion.
- Haciendo clic en el numero de reconciliacion puede ver todas las partidas enlazadas.

## Liquidaciones vs edicion manual

Ventajas de usar liquidaciones sobre crear transacciones manuales:
- El monto se calcula automaticamente, evitando errores de suma.
- Las partidas quedan automaticamente reconciliadas.
- Se mantiene la trazabilidad de que partidas se pagaron juntas.
- Es mas rapido que crear una transaccion y luego reconciliar manualmente.
