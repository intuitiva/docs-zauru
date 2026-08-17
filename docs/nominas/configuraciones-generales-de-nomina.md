---
title: "Configuraciones generales de nomina"
sidebar_label: "Configuraciones generales de nomina"
sidebar_position: 1
---

Cuando llega fin de mes y toca pagar planilla, todo lo que el sistema calcula depende de lo que usted configure aquí: cada cuánto se paga, qué calendario se sigue y cómo se calcula una liquidación si alguien es despedido o renuncia. Es la base sobre la que funciona todo el módulo de nóminas: parámetros del ciclo de pago, calendarios de pago, cuentas contables, umbrales de alerta, control de partidas contables, cálculo de tiempo personal y parámetros de liquidación por despido y renuncia.

Para acceder a las configuraciones generales de nomina:

1. Ir a **"Nominas"**.
2. En el submenu de **"Settings"**, seleccionar **"Configuraciones"**.

## Parametros del ciclo de pago

- **Inicio del ciclo de pago**: fecha desde la cual el sistema comienza a calcular los ciclos de nomina. Todas las corridas generadas automaticamente parten de esta fecha.
- **Mostrar proximas corridas con dias de anticipacion**: cantidad de dias antes de la fecha de inicio para mostrar las corridas programadas en la lista de acciones.

## Calendarios de pago

El sistema soporta cuatro frecuencias de pago. Para cada una se configura el dia de inicio:

- **Mensual**: dia del mes en que inicia el ciclo (1 al 28).
- **Quincenal**: dia del mes en que inicia el primer ciclo (1 al 14).
- **Catorcenal**: dia de la semana en que inicia el ciclo.
- **Semanal**: dia de la semana en que inicia el ciclo.

## Cuentas contables

- **Cuenta por pagar de destajos**: cuenta contable donde se registran las obligaciones por destajos pendientes de pago.

## Umbrales de alerta

- **Monto maximo por empleado en destajos**: umbral para generar alertas cuando un empleado supera cierto monto en destajos dentro de un periodo.

## Control de partidas contables

- **Evitar generacion de partidas en destajos**: si se marca, el sistema no genera partidas contables automaticamente al guardar destajos.
- **Evitar generacion de partidas en nominas**: si se marca, el sistema no genera partidas contables automaticamente al guardar nominas.

## Calculo de tiempo personal para empleados por destajo

Si sus empleados ganan por destajo, sus vacaciones no se pueden pagar sobre un salario fijo: el sistema necesita saber cuánto ganaron en promedio en los últimos días. Para empleados tipo destajo, el pago de tiempo personal se calcula en base a un promedio de ingresos diarios. Se configuran los siguientes parametros:

- **Cantidad de nominas recientes para calcular ingreso diario promedio**: numero de nominas anteriores (de 1 a 52) que se usan para calcular el promedio.
- **Atributo de nomina para calcular ingreso diario promedio**: campo de la nomina usado como base del calculo (salario, horas extra, etc.).

## Configuracion de liquidacion por despido

- **Cantidad de nominas para promedio de salario mensual**: numero de nominas recientes (de 0 a 52) usadas para calcular el salario promedio mensual del empleado al terminar el contrato.
- **Porcentaje de salario mensual para liquidacion**: porcentaje a aplicar sobre el salario promedio mensual para calcular la indemnizacion por despido.
- **Porcentaje de dias pendientes de tiempo personal**: porcentaje a pagar sobre el valor de los dias de tiempo personal pendientes al terminar el contrato.

## Configuracion de liquidacion por renuncia

- Mismos parametros que despido, pero aplicables al caso de renuncia voluntaria. Tipicamente se configuran con valores menores (o cero) que el despido.

## Como guardar las configuraciones

1. Completar los campos segun las politicas de la empresa.
2. Hacer clic en **"Actualizar Configuraciones"**.

Las configuraciones quedan almacenadas a nivel de entidad. Si no existen configuraciones previas, el formulario las crea automaticamente al guardar.

Con esta base lista, el módulo de nóminas está listo para trabajar: el siguiente paso es crear sus puestos de trabajo y sus beneficios y deducciones. Y si algún día cambian las políticas de la empresa, conviene volver aquí primero, porque un ajuste a tiempo evita sorpresas en la corrida de fin de mes.
