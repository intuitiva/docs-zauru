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

![Listado de cuentas contables en Zauru](/img/contabilidad/liquidaciones-1.png)

3. Buscar la cuenta reconciliable que desea liquidar (ej. "Cuentas por Pagar a Empleados").
4. Hacer clic en el boton "Liquidar" que aparece en el detalle de la cuenta.

![Detalle de cuenta reconciliable con boton liquidar](/img/contabilidad/liquidaciones-2.png)

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

![Listado de transacciones contables](/img/contabilidad/liquidaciones-4.png)

- En el detalle de la cuenta reconciliable, las partidas liquidadas mostraran un numero de reconciliacion.
- Haciendo clic en el numero de reconciliacion puede ver todas las partidas enlazadas.

## Liquidaciones vs edicion manual

Ventajas de usar liquidaciones sobre crear transacciones manuales:
- El monto se calcula automaticamente, evitando errores de suma.
- Las partidas quedan automaticamente reconciliadas.
- Se mantiene la trazabilidad de que partidas se pagaron juntas.
- Es mas rapido que crear una transaccion y luego reconciliar manualmente.

## API (llamadas desde sistemas externos)

### Crear una liquidacion (settlement)

Crea una transaccion que salda las partidas seleccionadas de una cuenta reconciliable. El `:id` en la URL es el ID de la cuenta reconciliable que se esta liquidando. El monto se calcula automaticamente como la suma de las partidas seleccionadas en `entries_ids`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "entry": {
      "payee_id": "1",
      "reference": "Liquidacion de gastos",
      "date": "2018-09-28",
      "account_id": "1"
    },
    "entries_ids": ["1", "2", "3"]
  }' \
  https://app.zauru.com/accounting/entries/1/settlement_action.json
```
