---
title: "Incidencias"
sidebar_label: "Incidencias"
sidebar_position: 4
---

Este tutorial trata sobre el registro y gestion de incidencias de empleados, como llegadas tarde, ausencias, faltas y otras situaciones que generan descuentos en la nomina.

## Listado de incidencias

Para acceder al listado de incidencias:

1. Ir a **"Nominas"**.
2. Seleccionar **"Incidencias"**.

### Busqueda y filtros

El listado muestra todas las incidencias registradas. Se puede buscar por empleado y filtrar por agencia.

### Duplicar una incidencia

Cada incidencia tiene la opcion de **"Duplicar"**, que permite copiar la incidencia para el mes siguiente o cualquier otro periodo. Esto es util para incidencias que se repiten periodicamente (ej. descuentos mensuales fijos).

1. En el listado, hacer clic en **"Duplicar"** sobre la incidencia deseada.
2. El sistema copia los datos de la incidencia original.
3. Modificar la fecha y otros datos segun corresponda.
4. Hacer clic en **"Guardar"**.

## Crear una incidencia

1. En el listado de incidencias, hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Empleado**: seleccionar el empleado al que se le registra la incidencia.
- **Tipo de incidencia**: seleccionar el tipo (llegada tarde, ausencia, etc.). El tipo de incidencia determina el monto o porcentaje de descuento.
- **Fecha**: fecha en que ocurrio la incidencia.
- **Cantidad**: numero de ocurrencias (ej. cantidad de llegadas tarde en el periodo).
- **Referencia**: texto descriptivo para identificar la incidencia.
- **Notas**: observaciones adicionales.

3. Hacer clic en **"Guardar"**.

El sistema automaticamente:

- Calcula el descuento basado en el tipo de incidencia (monto fijo, porcentaje o formula).
- Si el tipo de incidencia tiene marcado **"Descuento flexible por incidencia"**, el monto del descuento es editable manualmente.
- Si el tipo de incidencia tiene marcado **"Descuento como dias de tiempo personal"**, se descuentan los dias correspondientes del saldo de tiempo personal del empleado.

## Ver detalle de una incidencia

En el listado, hacer clic en la incidencia. El detalle muestra:

- ID de la incidencia.
- Empleado.
- Tipo de incidencia con su categoria.
- Fecha.
- Monto de descuento calculado.
- Referencia y notas.
- Informacion de creacion y edicion.

## Editar una incidencia

1. En el detalle de la incidencia, hacer clic en **"Editar"**.
2. Modificar los campos necesarios.
3. Hacer clic en **"Guardar"**.

## Borrar una incidencia

En el detalle de la incidencia, hacer clic en **"Borrar"**. Solo se pueden borrar incidencias que no hayan sido incluidas en una corrida de nomina pagada.

## Importacion masiva de incidencias

Para registrar muchas incidencias a la vez, se puede usar la importacion masiva desde un archivo.

1. Ir a **"Nominas"**.
2. En el submenu de incidencias, seleccionar **"Importar incidencias"**.
3. Seleccionar el archivo con los datos de incidencias.
4. Hacer clic en **"Importar"**.

El sistema procesa el archivo y crea las incidencias correspondientes. Las incidencias importadas apareceran en el listado de incidencias y se aplicaran en la siguiente corrida de nomina que incluya al empleado.

## Relacion con corridas de nomina

Cuando se procesa una corrida de nomina, el sistema busca las incidencias de cada empleado que esten dentro del rango de fechas de la corrida y aplica los descuentos correspondientes. Los descuentos aparecen como deducciones en el detalle de la nomina del empleado.

## API (llamadas desde sistemas externos)

### Listar incidencias

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents.json
```

### Crear una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "incident": {
      "employee_id": "1",
      "incident_type_id": "1",
      "date": "2024-06-15",
      "quantity": "1",
      "reference": "Llegada tarde",
      "notes": "Llego 30 minutos tarde"
    }
  }' \
  https://app.zauru.com/payroll/incidents.json
```

### Ver una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/incidents/1.json
```

### Borrar una incidencia

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/incidents/1.json
```
