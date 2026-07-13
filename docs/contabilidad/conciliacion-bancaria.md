---
title: "Conciliacion Bancaria"
sidebar_label: "Conciliacion Bancaria"
sidebar_position: 23
---

La conciliacion en el sistema sirve para asegurarnos que la informacion del estado de cuenta del banco coincide con la informacion registrada en Zauru de una forma rapida y con el valor anadido que nos muestra los cheques en circulacion (transacciones que no estan en el estado de cuenta del banco pero si en Zauru o viceversa).

Como datos iniciales necesitamos el estado de cuenta del banco para poder generar la conciliacion, algo similar a esto:

![imagen1](/img/contabilidad/conciliacion-bancaria-1.png)

## Pasos para crear la conciliacion

### 1. Crear una nueva conciliacion

Primero debe crear una nueva conciliacion bancaria desde "Contabilidad" > "Conciliaciones" > "Nueva Conciliacion".

![entrar a nueva conciliacion](/img/contabilidad/conciliacion-bancaria-2.png)

### 2. Datos de la nueva conciliacion

Complete los datos de la conciliacion basandose en la informacion del estado de cuenta del banco:

- **Cuenta de banco**: seleccione la cuenta contable de banco que desea conciliar.
- **Mes y ano**: periodo de la conciliacion.
- **Saldo inicial**: segun el estado de cuenta del banco al inicio del mes.
- **Saldo final**: segun el estado de cuenta del banco al final del mes.
- **Memo**: notas opcionales.

Todavia no vamos a comparar la informacion de Zauru (ese es el paso 4).

![Datos de nueva conciliacion](/img/contabilidad/conciliacion-bancaria-3.png)

### 3. Ingresar a conciliar

Para conciliar hay que entrar al boton de "Conciliar" en la conciliacion recien creada.

![Ingresar a conciliar](/img/contabilidad/conciliacion-bancaria-4.png)

### 4. Conciliar banco vs Zauru

Este es el paso donde realmente comparamos lo que dice Zauru vs. lo que dice el estado de cuenta del banco. El proceso consiste en:

1. El sistema muestra todas las transacciones de la cuenta de banco en Zauru para el periodo.
2. Usted debe marcar una a una las partidas que SI aparecen en el estado de cuenta del banco.
3. Las partidas que no aparecen en el estado de cuenta (cheques en circulacion, depositos no acreditados) se dejan sin marcar.
4. Haga clic en "Guardar Conciliacion" para registrar las marcas.

Puede guardar la conciliacion este cuadrada o no, y volver a editarla despues.

![conciliando ando](/img/contabilidad/conciliacion-bancaria-5.png)

### Posibles diferencias

Ahora podemos revisar los casos donde no coincide la informacion del banco y Zauru, estos casos pueden ser:

**1. Que en Zauru no aparezca una partida que SI esta en el banco.**
Posibles razones:
- Posiblemente sea un cheque en circulacion: un cheque emitido en Zauru que el beneficiario no ha cobrado, o un cheque recibido que no se ha descompensado.
- Posiblemente fue una partida que deberia estar asociada a otra cuenta de banco y por error se asocio mal.
- Posiblemente fue una partida de otro mes y se registro mal.

**2. Que en el banco aparezca una partida que NO esta en Zauru.**
Posibles razones:
- Posiblemente sea una transaccion que no conocian (debito o credito automatico) y solo queda investigar de donde entro o salio el dinero para registrarlo en Zauru.
- Posiblemente se registro la partida en una cuenta erronea y solo hay que tipificarla correctamente.
- Posiblemente la fecha esta mal registrada.

### 5. Cerrar la conciliacion

Para cerrar una conciliacion, debe estar cuadrada, o sea que el monto de ingresos - egresos nos cuadre entre el banco y Zauru. El sistema nos va a mostrar si se puede cerrar o no.

Una vez cerrada, la conciliacion ya no se puede editar ni borrar. Sin embargo, si necesita reabrirla, puede usar la opcion "Des-cerrar" (unclose).

![Cerrar conciliacion](/img/contabilidad/conciliacion-bancaria-6.png)

### 6. Generar reporte de conciliacion

Al cerrar una conciliacion ya no se puede editar ni borrar, ya solo se puede ver y generar el reporte de conciliacion:

![generar reporte de conciliacion](/img/contabilidad/conciliacion-bancaria-7.png)

El reporte de conciliacion muestra:

- **Transacciones conciliadas**: egresos e ingresos que si estan tanto en Zauru como en el banco, con sus totales.
- **Transacciones no conciliadas**: partidas que estan en Zauru pero no en el banco (ej. cheques en circulacion) y partidas que estan en el banco pero no en Zauru (ej. notas de debito/credito no registradas).
- El reporte cuadra los saldos para demostrar que la diferencia entre el banco y Zauru se explica por las partidas no conciliadas.

Este reporte ya se puede imprimir para presentarlo.

![reporte de conciliacion](/img/contabilidad/conciliacion-bancaria-8.png)
