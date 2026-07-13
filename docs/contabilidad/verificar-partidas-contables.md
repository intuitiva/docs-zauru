---
title: "Verificar partidas contables"
sidebar_label: "Verificar partidas contables"
sidebar_position: 10
---

Este tutorial explica como verificar sus partidas para que no se puedan volver a editar ni borrar, y como auditar partidas para un nivel adicional de seguridad.

## Verificacion de partidas

La verificacion es el primer nivel de bloqueo. Una vez verificada, una transaccion no puede ser editada ni borrada.

### Como verificar

Como primer paso recomendamos que tenga su estado de cuenta a la mano. En la siguiente imagen se muestra un estado de cuenta con el detalle de transacciones enviado por el banco.

![imagen1](/img/contabilidad/verificar-partidas-contables-1.png)

Vamos a ir a la cuenta de banco en Zauru para verificar que cuadre lo que dice el estado de cuenta del banco.

Los pasos para ir a las cuentas contables son los siguientes:

1. Ir a "Contabilidad".
2. Ir a "Cuentas".

![imagen2](/img/contabilidad/verificar-partidas-contables-2.jpg)

Le apareceran sus cuentas contables. Vamos a seleccionar la cuenta de banco que queremos verificar con nuestro estado de cuenta. En este ejemplo seleccionamos "Cuenta BAC" para ver los detalles de las transacciones contables.

![imagen3](/img/contabilidad/verificar-partidas-contables-3.jpg)

Le aparecera el listado de transacciones. Seleccione "Balance" para ver las transacciones realizadas con el balance de la cuenta.

El balance se lee de abajo hacia arriba, como se muestran las flechas en el ejemplo.

![imagen4](/img/contabilidad/verificar-partidas-contables-4.jpg)

Ahora vamos a comparar las transacciones que dicen en el estado de cuenta con las transacciones que se detallan en Zauru para verificar que los numeros cuadren.

Vamos a verificar la primer transaccion que aparece en el estado de cuenta con las transacciones que aparecen en los detalles de la cuenta en Zauru.

![imagen5](/img/contabilidad/verificar-partidas-contables-5.jpg)

Para confirmar que la transaccion que aparece en el estado de cuenta esta igual en los detalles de Zauru, le daremos click a "Verificar".

![imagen6](/img/contabilidad/verificar-partidas-contables-6.jpg)

Le aparecera un mensaje de exito en la pantalla y ahora la transaccion aparecera con un cheque indicando que esta verificada.

![imagen7](/img/contabilidad/verificar-partidas-contables-7.jpg)
![imagen10](/img/contabilidad/verificar-partidas-contables-8.jpg)

Asi deberiamos de ir verificando todas las transacciones que hay para poder encontrar si hay alguna transaccion que este mal, o que no este registrada.

![imagen8](/img/contabilidad/verificar-partidas-contables-9.png)

Al hacer la verificacion de todas las transacciones encontramos que el saldo de la cuenta en Zauru no cuadraba con el saldo de la cuenta en el estado de cuenta por Q1,000. Encontramos que habia un deposito de Q1,000 que no fue registrado en Zauru y por eso no cuadraba.

![imagen9](/img/contabilidad/verificar-partidas-contables-10.jpg)

## Auditoria de partidas

La auditoria es un segundo nivel de bloqueo, mas fuerte que la verificacion. Una transaccion auditada:

- No puede ser editada.
- No puede ser borrada.
- No puede ser des-verificada.
- Solo puede ser consultada (lectura).

### Como auditar

1. Abra el detalle de la transaccion que desea auditar.
2. Haga clic en el boton "Auditar".

La transaccion mostrara un icono de auditoria. Una vez auditada, solo es posible ver su contenido. Si intenta auditarla de nuevo, el sistema indicara que ya esta auditada.

## Diferencia entre verificacion y auditoria

| Caracteristica | Verificacion | Auditoria |
|---|---|---|
| Bloquea edicion | Si | Si |
| Bloquea borrado | Si | Si |
| Se puede deshacer | No directamente* | No |
| Nivel de seguridad | Medio | Alto |
| Icono | Check verde | Candado / check azul |

*Una transaccion verificada no puede des-verificarse, pero aun conserva el registro de verificacion.

## Fecha de cierre contable

Ademas de la verificacion individual, puede configurar una fecha de cierre global en [Configuraciones](configuraciones). Todas las transacciones con fecha anterior a la fecha de cierre configurada seran protegidas automaticamente contra edicion y borrado.
