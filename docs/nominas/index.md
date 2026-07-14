---
title: "Nominas"
sidebar_label: "Nominas"
sidebar_position: 0
---

Este modulo sirve para la gestion completa de la nomina de empleados, incluyendo contratos de trabajo, destajos, incidencias, tiempo personal, corridas de nomina y reportes. Soporta empleados asalariados (jornal) y empleados por destajo (pago por tarea). Incluye las siguientes funcionalidades:

## Configuracion

1. **Configuraciones generales**: establecimiento del ciclo de pago, calendarios de nomina (mensual, quincenal, catorcenal, semanal), umbrales de alerta, parametros de calculo de tiempo personal, parametros de liquidacion por despido y renuncia, y control de generacion de partidas contables.
2. **Puestos de trabajo**: creacion y gestion de puestos con tipo de pago (asalariado o destajo), frecuencia de pago, horas de trabajo, cuentas contables para salario, horas extra, comisiones y bonificacion, y asignacion de beneficios y deducciones por defecto.
3. **Beneficios y deducciones**: configuracion de percepciones y deducciones con porcentajes, montos fijos, formulas, cuentas contables, umbrales de salario, ciclos fuera de nomina (anual, semestral, trimestral, bimestral) y montos flexibles editables por el usuario.
4. **Metodos de pago**: configuracion de cuentas contables para pago individual de empleados y pago consolidado de corridas de nomina.
5. **Tipos de incidencia**: definicion de categorias de incidencias con descuentos por monto, porcentaje o formula, incluyendo descuento como dias de tiempo personal.
6. **Tipos de tiempo personal**: definicion de categorias de tiempo personal (vacaciones, enfermedad, etc.).
7. **Tipos de destajo**: definicion de tareas por destajo con valor unitario, unidad de medida, cuenta contable y configuracion de bonificacion.
8. **Grupos de tipos de destajo**: agrupacion de tipos de destajo para organizacion y reportes.

## Contratos de trabajo

9. **Contratos de trabajo**: creacion, edicion y consulta de contratos que vinculan empleados a puestos de trabajo, con salarios por hora (ordinario, extraordinario diurno, extraordinario nocturno), frecuencia de pago, dias de tiempo personal por ano y metodo de pago por defecto.
10. **Terminacion de contratos**: registro de terminacion de contrato por despido o renuncia, con calculo automatico de liquidacion basado en promedio de salarios, dias pendientes de tiempo personal y parametros configurables.

## Destajos

11. **Destajos no pagados**: creacion y gestion de tareas por destajo con asignacion de empleados, tipos de destajo, cantidades y supervisor. Soporte para agregar multiples filas con los botones "+", "+2", "+5", "+10", "+20".
12. **Destajos pagados**: consulta de destajos que ya han sido incluidos en corridas de nomina pagadas.
13. **Destajos de feriado**: generacion de destajos para dias feriados con horas extra.

## Incidencias

14. **Incidencias**: registro de llegadas tarde, ausencias, faltas y otras incidencias de empleados, con calculo automatico de descuentos segun el tipo de incidencia.
15. **Importacion de incidencias**: importacion masiva de incidencias desde archivo.

## Tiempo personal

16. **Solicitudes de tiempo personal**: creacion, edicion, aprobacion, rechazo y consulta de solicitudes de tiempo personal con flujo de trabajo completo (en proceso, aprobado, rechazado, gozado).
17. **Saldos de tiempo personal**: consulta de saldos de tiempo personal por empleado, con historial de movimientos que incluye solicitudes, incidencias y corridas de nomina.

## Corridas de nomina

18. **Corridas de nomina no pagadas**: creacion manual o generacion automatica de corridas de nomina segun calendario configurado (mensual, quincenal, catorcenal, semanal), con flujo de aprobacion y pago. Incluye corridas fuera de ciclo para beneficios anuales, semestrales, trimestrales y bimestrales.
19. **Corridas de nomina pagadas**: consulta de corridas ya pagadas con opcion de revertir pago.
20. **Nominas individuales**: creacion, edicion y consulta de la nomina de cada empleado dentro de una corrida, con calculo automatico de salario, horas extra, jornada nocturna, comisiones, bonificacion, beneficios, deducciones e incidencias. Incluye generacion de partidas contables, impresion de boletas y descarga de PDF.
21. **Llenado de beneficios flexibles**: ingreso manual de montos variables para beneficios y deducciones marcados como flexibles, con procesamiento asincrono.

## Reportes

22. **Reportes de destajos**: valores semanales por empleado, costos semanales por tipo, tareas por empleado en rango de fechas, empleados por tarea, matriz de empleados x tipos de destajo, cantidades diarias y costos de destajos en corrida de nomina.
23. **Reportes de nomina**: consolidado de nominas por corrida con desglose de beneficios y deducciones, desglose diario, historial de empleado entre fechas (consolidado y detallado), totales de beneficios/deducciones por agencia.
24. **Reportes de conciliacion contable**: destajos sin partida, nominas sin partida, totales de pago sin conciliar, totales de costo sin conciliar, partidas faltantes en destajos e incidencias no descontadas correctamente.
25. **Libro de salarios**: reporte completo de salarios por empleado en un rango de fechas.
26. **Incidencias por tipo**: listado de incidencias agrupadas por tipo entre fechas.

## Impresion

27. **Impresion de boletas**: plantillas de impresion para nominas individuales, con soporte de descarga de PDF.
28. **Impresion masiva**: generacion de PDF para todas las nominas de una corrida o para las de la agencia del usuario, con procesamiento asincrono y seguimiento de progreso.
