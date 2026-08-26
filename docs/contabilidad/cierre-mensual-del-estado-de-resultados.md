---
title: "Cierre mensual del Estado de Resultados"
sidebar_label: "Cierre mensual del Estado de Resultados"
sidebar_position: 22
---

Si su contador le pide el cierre del mes, o usted quiere saber cuánto ganó o perdió su empresa en el periodo, aquí aprenderá a hacerlo en pocos pasos. Para registrar las ganancias mensuales de la forma correcta, se calcula la utilidad del mes (ingresos - costos - gastos) y ese saldo se traslada de todas las cuentas de ingresos y gastos hacia el capital (utilidades del mes).

Zauru tiene un mecanismo sumamente sencillo para realizar ese proceso:

## Cierre mensual definitivo

1. Entrar a contabilidad >> cuentas y hacer click al boton que dice "Generar cierre mensual del estado de resultados"
2. Seleccionar la cuenta a donde van a caer los resultados (una cuenta de capital como resultados del periodo)
3. Seleccionar el mes (con ano) que queremos cerrar

![cierre mensual e d r](/img/contabilidad/cierre-mensual-del-estado-de-resultados-1.png)

Este proceso generara una sola transaccion donde consolida los saldos mensuales de los ingresos (en positivo) y los egresos (en negativo) y el saldo incrementara (en caso de ganancias mensuales) o decrementara (en caso de perdidas mensuales) la cuenta de capital seleccionada, usualmente "utilidades del mes".

## Cierre mensual temporal

El cierre temporal permite generar un cierre del estado de resultados sin bloquear el sistema mientras se procesa. La transaccion se crea inmediatamente pero los calculos de los saldos se procesan en segundo plano.

1. Entrar a contabilidad >> cuentas >> "Generar cierre mensual temporal del estado de resultados".
2. Seleccionar la cuenta de capital destino.
3. Seleccionar el mes y ano a cerrar.
4. Hacer clic en "Generar".

La transaccion se creara con los valores calculados en segundo plano. Puede monitorear el progreso desde la misma pantalla.

## Cierre anual

El cierre anual funciona de la misma manera que el cierre mensual, pero en lugar de cerrar un solo mes, cierra todos los meses de un ano completo. Es util al finalizar el ejercicio fiscal.

### Cierre anual definitivo

1. Entrar a contabilidad >> cuentas >> "Generar cierre anual del estado de resultados".
2. Seleccionar la cuenta de capital destino (ej. "Resultados acumulados").
3. Seleccionar el ano a cerrar.
4. Hacer clic en "Generar".

### Cierre anual temporal

Igual que el cierre mensual temporal, pero para un ano completo. La transaccion se crea y los calculos se procesan en segundo plano.

## Cuenta de resultados por defecto

En las [Configuraciones](configuraciones) de contabilidad puede establecer una cuenta de capital por defecto para los cierres. Esta cuenta sera la que aparezca preseleccionada al generar cualquier cierre.

## Fecha de cierre contable

En las configuraciones puede establecer una fecha de cierre ("closed until date"). Cuando esta fecha esta configurada, el sistema protege todas las transacciones anteriores a esa fecha: no podran ser editadas ni borradas. Esto permite cerrar periodos contables ya revisados y declarados.

Con el cierre generado, las cuentas de ingresos y gastos quedan saldadas y la utilidad del mes queda reflejada en el capital, lista para presentarse en el estado de resultados. Cuando lo considere listo, puede fijar la fecha de cierre contable para proteger ese periodo contra ediciones.

## API (llamadas desde sistemas externos)

### Consultar el formulario de cierre mensual del estado de resultados

Obtiene los datos del formulario para generar el cierre mensual del estado de resultados (cuenta de capital destino, mes y ano). El proceso de generacion del cierre (`automatic_monthly_close_process`) solo responde HTML desde la interfaz web, por lo que el cierre se ejecuta desde la pantalla de cuentas.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/automatic_monthly_close.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Consultar el formulario de cierre anual del estado de resultados

Obtiene los datos del formulario para generar el cierre anual del estado de resultados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/automatic_annual_close.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
