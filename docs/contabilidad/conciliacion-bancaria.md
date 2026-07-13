---
title: "Conciliación Bancaria"
sidebar_label: "Conciliación Bancaria"
sidebar_position: 18
---

La conciliación en el sistema sirve para asegurarnos que la información del estado de cuenta del banco coincide con la información registrada en Zauru de una forma rápida y con el valor añadido que nos muestra los cheques en circulación (transacciones que no están en el estado de cuenta del banco pero si en Zauru o viceversa).

Como datos iniciales necesitamos el estado de cuenta del banco para poder generar la conciliación, algo similar a esto:

![imagen1](/img/contabilidad/conciliacion-bancaria-1.png)

## Pasos para crear la conciliación

### 1. Crear una nueva concilacion
![entrar a nueva conciliación](/img/contabilidad/conciliacion-bancaria-2.png)

### 2. Datos de la nueva conciliación
Hay que hacer es crear la conciliación basado en la información del estado de cuenta del banco. Todavía no vamos a comparar la información de Zauru (ese es el paso 4).
![Datos de nueva conciliación](/img/contabilidad/conciliacion-bancaria-3.png)

### 3. Ingresar a conciliar
Para conciliar hay que entrar al botón de "conciliar" en la conciliación recién creada.
![Ingresar a conciliar](/img/contabilidad/conciliacion-bancaria-4.png)

### 4. Conciliar banco vs Zauru
Este es el paso donde realmente comparamos lo que dice Zauru vs. lo que dice el estado de cuenta del banco. El proceso consiste en seleccionar en Zauru todas las partidas que aparecen en el estado de cuenta del banco, y las que no salen, no registrarlas, tal como lo mostramos a continuación:
![conciliando ando](/img/contabilidad/conciliacion-bancaria-5.png)

En este momento podemos guardar la conciliación, esté cuadrada o no.

Ahora podemos revisar los casos donde no coincide la información del banco y Zauru, estos casos pueden ser:

__1. Que en Zauru no aparezca una partida que no está en el banco.__ Hay varias posibilidades de la razón porque pasó esto:
- posiblemente sea un cheque en circulación, ya sea un cheque que ya se emitió en Zauru pero el beneficiario no lo ha cobrado o un cheque recibido que no se ha descompensado.
- posiblemente fue una partida que debería estar asociada a otra cuenta de banco y por error se asoció mal
- posiblemente fue una partida de otro mes y se registró mal

__2. Que en el banco aparezca una partida que no está en Zauru.__
Hay varias posibilidades de la razón porque pasó esto:
- posiblemente sea una transacción que no estaban enterados y solo queda investigar de donde entró o salió el dinero para registrarlo a Zauru
- posiblemente se registró la partida en una cuenta erronea y solo hay que tipificarla correctamente
- posiblemente la fecha está mal registrada

### 5. Cerrar la conciliación
Para cerrar una conciliación, debe estar cuadrada, o sea que el monto de ingresos - egresos nos cuadre entre el banco y Zauru.

El sistema nos va a mostrar si se puede cerrar o no.

![Cerrar conciliación](/img/contabilidad/conciliacion-bancaria-6.png)

### 6. Generar reporte de reconciliación
Al cerrar una conciliación ya no se puede editar ni borrar, ya solo se puede ver y generar el reporte de conciliación:
![generar reporte de conciliación](/img/contabilidad/conciliacion-bancaria-7.png)

Este reporte ya se puede imprimir para presentarlo.

![reporte de conciliación](/img/contabilidad/conciliacion-bancaria-8.png)
