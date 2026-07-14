---
title: "Reportes de nomina"
sidebar_label: "Reportes de nomina"
sidebar_position: 7
---

Este tutorial describe todos los reportes disponibles en el modulo de nominas, organizados por categoria: reportes de destajos, reportes de nomina, reportes de conciliacion contable y otros reportes.

Para acceder a los reportes:

1. Ir a **"Nominas"**.
2. Seleccionar **"Reportes"**.

## Reportes de destajos

### Valores semanales de destajo por empleado

Muestra una matriz donde las filas son los empleados, las columnas son los dias de la semana y las celdas contienen el valor total de destajos de cada empleado por dia. Util para ver la distribucion semanal de trabajo por destajo.

**Parametros**:
- Rango de fechas (semana).

### Costos semanales de destajos

Muestra el costo de destajos agrupado por tipo de destajo para cada semana. Permite ver cuales tipos de tarea generan mas costo.

**Parametros**:
- Rango de fechas.

### Tareas por empleado por fecha

Lista todas las tareas de destajo realizadas por un empleado especifico en un rango de fechas. Muestra fecha, tipo de destajo, cantidad, valor unitario y valor total.

**Parametros**:
- Empleado.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Tareas por empleado consolidadas por tipo de destajo por fecha

Similar al reporte anterior, pero agrupa las tareas del mismo tipo de destajo para cada fecha. Es una vista consolidada en lugar de detallada.

**Parametros**:
- Empleado.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Empleados por tarea por fecha

Lista todos los empleados que realizaron un tipo de destajo especifico en un rango de fechas. Muestra empleado, fecha, cantidad y valor.

**Parametros**:
- Tipo de destajo.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Destajos: empleados por fecha

Matriz donde las filas son los empleados y las columnas son los tipos de destajo. Cada celda muestra el valor total de destajos de ese empleado para ese tipo de destajo en el rango de fechas seleccionado.

**Parametros**:
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Cantidades diarias de destajo por empleado entre fechas

Matriz donde las filas son los empleados, las columnas son las fechas y las celdas contienen la cantidad total de destajos realizados por el empleado en cada fecha.

**Parametros**:
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Costos de destajos en corrida de nomina

Muestra los costos de destajos desglosados por tipo de destajo para una corrida de nomina especifica. Util para conciliar los destajos incluidos en una corrida.

**Parametros**:
- Corrida de nomina.

**Opcion de exportacion**: descarga en Excel (XLS).

## Reportes de nomina

### Grupos de cuentas y cuentas por corrida de nomina

Muestra el desglose contable de una corrida de nomina, agrupado por grupos de cuentas y cuentas individuales. Indica que cuentas se debitan y acreditan con los montos correspondientes.

**Parametros**:
- Corrida de nomina.

**Opcion de exportacion**: descarga en Excel (XLS).

### Nominas por corrida de nomina

Reporte de nivel empleado de una corrida de nomina. Para cada empleado muestra:

- Salario base.
- Horas extra.
- Jornada nocturna.
- Comisiones por ventas.
- Bonificacion.
- Lista de beneficios y deducciones con montos de empleado y entidad.
- Total pago empleado.
- Total costo entidad.

Es el reporte mas completo para revision de una corrida.

**Parametros**:
- Corrida de nomina.

**Opcion de exportacion**: descarga en Excel (XLS).

### Nominas diarias por corrida de nomina

Similar al reporte de nominas por corrida, pero con un desglose diario de los destajos incluidos. Muestra para cada empleado, dia por dia, los valores de destajo.

**Parametros**:
- Corrida de nomina.

**Opcion de exportacion**: descarga en Excel (XLS).

### Historial de nominas de empleado entre fechas (consolidado)

Muestra un resumen consolidado de todas las nominas de un empleado en un rango de fechas. Agrupa los totales de salario, horas extra, jornada nocturna, comisiones, bonificacion, beneficios y deducciones por corrida.

**Parametros**:
- Empleado.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Historial de nominas de empleado entre fechas (detallado)

Similar al consolidado, pero muestra cada beneficio y deduccion por separado en lugar de totales agrupados. Permite ver la evolucion detallada de cada concepto en el tiempo.

**Parametros**:
- Empleado.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Totales de beneficios/deducciones por agencia entre fechas

Muestra los totales de cada tipo de beneficio y deduccion, agrupados por agencia, en un rango de fechas. Util para analisis de costos laborales por agencia o sucursal.

**Parametros**:
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

## Reportes de conciliacion contable

### Destajos sin partida contable

Identifica destajos que no tienen partidas contables asociadas. Esto puede ocurrir si las partidas no se generaron por configuracion o por algun error.

**Opcion de correccion**: el boton **"Corregir"** genera las partidas contables faltantes para todos los destajos listados.

### Nominas sin partida contable

Identifica nominas individuales que no tienen partidas contables asociadas.

### Total de pago sin conciliar

Compara el total de pago a empleados en las nominas contra las partidas contables generadas. Identifica discrepancias donde el total de pago no coincide con los montos en las partidas contables.

**Opcion de correccion**: el boton **"Corregir"** ajusta las partidas contables para que coincidan con el total de pago real.

### Total de costo sin conciliar

Similar al anterior, pero compara el costo total (incluyendo aportes patronales) contra las partidas contables.

**Opcion de correccion**: el boton **"Corregir"** ajusta las partidas contables para que coincidan con el costo total real.

### Partidas faltantes en destajos

Identifica partidas contables que deberian existir para los destajos pero no se encuentran. Similar a "Destajos sin partida contable" pero desde la perspectiva de las partidas.

**Opcion de correccion**: el boton **"Corregir"** genera las partidas faltantes.

### Incidencias no descontadas correctamente

Verifica que todas las incidencias que debieron ser descontadas en las nominas efectivamente tengan su descuento aplicado. Identifica incidencias cuyo estado de "descontado" no coincide con la realidad de las nominas.

**Opcion de correccion**: el boton **"Corregir"** sincroniza el estado de descuento de las incidencias con las nominas.

## Otros reportes

### Incidencias por tipo entre fechas

Lista todas las incidencias agrupadas por tipo de incidencia en un rango de fechas. Muestra para cada incidencia: empleado, fecha, tipo, cantidad y descuento aplicado.

**Parametros**:
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

### Libro de salarios entre fechas

Reporte completo de salarios para un empleado en un rango de fechas. Es el equivalente a un "wage ledger" o libro de salarios oficial. Incluye todas las nominas del empleado con el desglose completo de cada concepto: salario, horas extra, comisiones, bonificacion, beneficios, deducciones, incidencias, destajos, tiempo personal y totales.

**Parametros**:
- Empleado.
- Rango de fechas.

**Opcion de exportacion**: descarga en Excel (XLS).

## API (llamadas desde sistemas externos)

### Reporte de valores semanales de destajo por empleado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/reports/weekly_piecework_values_by_employees?start_date=2024-07-01&end_date=2024-07-07"
```

### Reporte de nominas por corrida

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/reports/payroll_run_payrolls?payroll_run_id=1"
```

### Reporte de libro de salarios

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/reports/wage_ledger_between_dates?employee_id=1&start_date=2024-01-01&end_date=2024-12-31"
```

### Reporte de incidencias por tipo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/payroll/reports/incidents_by_type_between_dates?start_date=2024-01-01&end_date=2024-12-31"
```
