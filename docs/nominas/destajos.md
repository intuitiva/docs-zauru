---
title: "Destajos"
sidebar_label: "Destajos"
sidebar_position: 3
---

Este tutorial trata sobre la gestion de destajos, que son las tareas pagadas por unidad de trabajo realizada (no por salario fijo). Los destajos permiten registrar el trabajo diario de empleados contratados bajo la modalidad de pago por tarea.

## Destajos no pagados

Los destajos no pagados son aquellos que aun no han sido incluidos en una corrida de nomina.

Para acceder a los destajos no pagados:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos no pagados"**.

### Listado de destajos no pagados

El listado muestra todos los destajos pendientes de pago, organizados por agencia. Cada fila muestra:

- ID del destajo.
- Fecha.
- Supervisor.
- Agencia.
- Cantidad de detalle de destajos (empleados asignados).
- Valor total del destajo.
- Acciones disponibles (ver, editar, borrar).

### Busqueda avanzada (datatables)

El listado cuenta con busqueda por texto para localizar destajos por fecha, supervisor o empleado.

### Crear un destajo

1. En el listado de destajos no pagados, hacer clic en **"Nuevo"**.
2. Completar los campos del encabezado:

- **Supervisor**: persona que superviso el trabajo.
- **Fecha**: fecha en que se realizo el trabajo.

3. Agregar los detalles del destajo. Para cada fila:

- **Empleado**: seleccionar el empleado que realizo el trabajo.
- **Tipo de destajo**: seleccionar el tipo de tarea realizada.
- **Cantidad**: cantidad de unidades realizadas.
- **Valor**: el sistema calcula automaticamente el valor multiplicando la cantidad por el valor unitario del tipo de destajo. Este campo es de solo lectura.
- **Incluye bonificacion**: indica si el valor del tipo de destajo incluye la bonificacion mensual. Se muestra como icono de verificacion (verde) o equis (rojo).
- **Referencia**: texto opcional para identificar el detalle (ej. numero de parcela, ubicacion, lote).

4. Usar los botones para agregar mas filas:

- **"+"**: agrega una fila.
- **"+2"**: agrega dos filas.
- **"+5"**: agrega cinco filas.
- **"+10"**: agrega diez filas.
- **"+20"**: agrega veinte filas.

5. Hacer clic en **"Previsualizar"** para verificar los calculos antes de guardar.
6. Hacer clic en **"Actualizar"** para refrescar los valores calculados sin perder los datos ingresados.
7. Completar el campo **"Notas"** con observaciones adicionales (opcional).
8. Hacer clic en **"Guardar"**.

Al guardar un destajo, el sistema:

- Calcula el valor total de cada detalle (cantidad x valor unitario).
- Muestra el valor total del destajo.
- Genera las partidas contables correspondientes (a menos que la configuracion **"Evitar generacion de partidas en destajos"** este marcada).
- Verifica si algun empleado supera el **"Monto maximo por empleado en destajos"** configurado y muestra una alerta si corresponde.

### Ver detalle de un destajo

En el listado, hacer clic en el ID del destajo. El detalle muestra:

- **Datos generales**: fecha, supervisor, notas, agencia.
- **Detalles del destajo**: tabla con cada empleado, tipo de destajo, cantidad, valor unitario, valor total, bonificacion incluida, referencia.
- **Valores acumulados por empleado**: suma de los valores de todos los detalles para cada empleado participante en el destajo.
- **Partidas contables asociadas**: enlace a las transacciones contables generadas por el destajo.
- **Formularios asociados**: si aplica, plantillas de impresion vinculadas.
- **Informacion adicional**: creador, fecha de creacion, ultimo editor, fecha de ultima edicion.

### Editar un destajo

1. En el detalle del destajo, hacer clic en **"Editar"**.
2. El formulario es identico al de creacion, con los valores actuales precargados.
3. Se pueden agregar, modificar o eliminar filas de detalle.
4. Hacer clic en **"Previsualizar"** para verificar cambios.
5. Hacer clic en **"Guardar"**.

### Borrar un destajo

En el detalle del destajo, hacer clic en **"Borrar"**. Solo se pueden borrar destajos que no hayan sido incluidos en una corrida de nomina pagada. Al borrar, las partidas contables asociadas tambien se eliminan.

## Destajos pagados

Los destajos pagados son aquellos que ya han sido incluidos en una corrida de nomina que fue marcada como pagada. Son de solo lectura.

Para acceder a los destajos pagados:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos pagados"**.

El listado y el detalle son iguales a los destajos no pagados, pero sin opciones de edicion ni borrado.

### Busqueda avanzada (datatables)

El listado cuenta con busqueda por texto, igual que los destajos no pagados.

## Destajos de feriado

La funcionalidad de destajos de feriado permite registrar automaticamente destajos en dias feriados, aplicando el recargo de horas extra correspondiente.

Para crear un destajo de feriado:

1. Ir a **"Nominas"**.
2. En la seccion de destajos, seleccionar **"Destajos de feriado"** (si esta disponible segun permisos).

### Crear un destajo de feriado

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

- **Fecha del feriado**: fecha del dia feriado.
- **Horas del feriado**: cantidad de horas trabajadas en el feriado.
- **Agencia**: agencia a la que pertenecen los empleados.
- **Tipo de destajo**: tipo de destajo a utilizar para el pago del feriado.

3. Hacer clic en **"Guardar"**.

El sistema genera automaticamente los detalles de destajo para todos los empleados de la agencia seleccionada que tengan contrato activo de tipo destajo, aplicando el tipo de destajo configurado con el valor de hora extra.

## Relacion con corridas de nomina

Cuando una corrida de nomina se genera o se aprueba, el sistema incluye automaticamente los destajos no pagados que esten dentro del rango de fechas de la corrida y que pertenezcan a empleados incluidos en la misma.

Al pagar una corrida de nomina, los destajos incluidos pasan automaticamente de "no pagados" a "pagados" y ya no pueden ser modificados.

## API (llamadas desde sistemas externos)

### Listar destajos no pagados

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_pieceworks.json
```

### Crear un destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "unpaid_piecework": {
      "date": "2024-06-15",
      "supervisor_id": "1",
      "notes": "Corte de cafe parcela norte",
      "piecework_details_attributes": {
        "0": {
          "employee_id": "1",
          "piecework_type_id": "1",
          "quantity": "5.5",
          "reference": "Lote A"
        },
        "1": {
          "employee_id": "2",
          "piecework_type_id": "1",
          "quantity": "3.0",
          "reference": "Lote A"
        }
      }
    }
  }' \
  https://app.zauru.com/payroll/unpaid_pieceworks.json
```

### Ver un destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_pieceworks/1.json
```

### Borrar un destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/unpaid_pieceworks/1.json
```
