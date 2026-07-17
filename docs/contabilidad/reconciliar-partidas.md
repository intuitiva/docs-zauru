---
title: "Enlazar partidas y contra partidas (reconciliar)"
sidebar_label: "Enlazar partidas y contra partidas (reconciliar)"
sidebar_position: 8
---

Este tutorial esta enfocado en reconciliar partidas contables. Zauru concilia automaticamente sus cuentas contables, por ejemplo: cuando usted vende se genera una transaccion de "Ventas" a "Cuentas por Cobrar" y cuando a usted le pagan, se genera una transaccion contable de "Cuentas por Cobrar" a "Cuenta Monetaria" o "Efectivo" conciliando automaticamente sus cuentas por cobrar, pero, para llevar un registro de conciliaciones usted debe reconciliar las transacciones, o relacionarlas una con la otra. Esto le permitira llevar un registro mas detallado de sus conciliaciones y podra buscar facilmente transacciones que aun no estan conciliadas.

Los pasos para crear una reconciliacion son los siguientes:

1. Ir a "Contabilidad".
2. Seleccione "Cuentas".
3. Click sobre "Cuentas por Pagar Credito" (o la cuenta reconciliable que desee).

![imagen1](/img/contabilidad/reconciliar-partidas-1.png)

Le apareceran los detalles de la cuenta, siga los siguientes pasos para reconciliar las transacciones asociadas con esta cuenta:

4. Verifique que la cuenta por pagar sea Reconciliable. Por default, todas las cuentas por pagar y por cobrar son reconciliables (atributo `reconciliable`).
5. Dirijase a la transaccion que quiere reconciliar y haga Click en "Reconciliar".

![imagen2](/img/contabilidad/reconciliar-partidas-2.jpg)

Le apareceran todas las transacciones que estan asociadas con la cuenta. En este ejemplo, salen las transacciones que pasaron por cuentas por pagar. Se puede ver una transaccion que genero una deuda o un "Pago" y una transaccion que disminuyo la cuenta por pagar o un "Deposito". En el ejemplo se muestra el ingreso de la factura por servicio y luego una transaccion del pago de la factura.

**Importante**: La primera transaccion que selecciono (desde la vista de la cuenta) ya viene preseleccionada. Las demas transacciones se muestran en orden cronologico inverso para que pueda seleccionar cual o cuales la compensan.

A continuacion vamos a reconciliar las transacciones que estan asociadas. Los pasos para hacerlo son los siguientes:

1. Marque la transaccion(es) que desea reconciliar con la transaccion que selecciono anteriormente.
2. Verifique los totales de Debito y Credito. Para que la reconciliacion sea valida, los montos deben coincidir.
3. Click sobre "Crear reconciliacion".

![imagen3](/img/contabilidad/reconciliar-partidas-3.jpg)

Le aparecera un mensaje en la pantalla notificandole que la reconciliacion fue creada exitosamente. Si se dirige a la parte inferior de la hoja, podra ver que en el lugar donde antes aparecia "Reconciliar" se coloco un numero, este numero es el numero de reconciliacion. Si usted hace click sobre el numero, podra ver las transacciones que van asociadas a la reconciliacion.

![imagen4](/img/contabilidad/reconciliar-partidas-4.jpg)

Le apareceran los detalles de la reconciliacion contable, en donde podra ver las transacciones que se asociaron. Reconciliar sus cuentas le va permitir tener un mejor control sobre su contabilidad, podra asociar las facturas con sus cheques, y sera mas facil identificar sus movimientos.

![imagen5](/img/contabilidad/reconciliar-partidas-5.jpg)

## Deshacer una reconciliacion

Si necesita deshacer una reconciliacion:

1. Vaya al detalle de la cuenta.
2. Haga clic en el numero de reconciliacion.
3. En el detalle de la reconciliacion, haga clic en "Eliminar" (Destroy).

Esto desvinculara las transacciones sin eliminar las transacciones en si, dejandolas disponibles para ser reconciliadas nuevamente.

## Liquidaciones

Para casos donde necesita pagar o cobrar multiples partidas a la vez en una sola operacion, vea el tutorial de [Liquidaciones](liquidaciones).

## API (llamadas desde sistemas externos)

### Obtener detalle de una reconciliacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/reconciliations/1.json
```

### Obtener el formulario de nueva reconciliacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/accounts/reconciliations/new.json?a=1&e=2"
```

### Crear una reconciliacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "reconciliation": {
      "account_id": 1,
      "e": 2,
      "entries_attributes": {
        "0": { "id": 2, "reconciled": "1" },
        "1": { "id": 3, "reconciled": "1" }
      }
    }
  }' \
  https://app.zauru.com/accounting/accounts/reconciliations.json
```

### Borrar una reconciliacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/accounts/reconciliations/1.json
```
