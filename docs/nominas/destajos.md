---
title: "Destajos"
sidebar_label: "Destajos"
sidebar_position: 10
---

Si sus empleados ganan por destajo —por quintal cortado, por caja armada, por tarea sembrada—, aquí es donde se registra cada jornada de trabajo. Los destajos son las tareas pagadas por unidad de trabajo realizada, no por salario fijo, y este documento le muestra cómo capturarlos, incluidos los feriados, para que lleguen solos a la corrida de nómina.

## Destajos no pagados

Los destajos no pagados son el trabajo de la semana que todavía espera su pago: todo lo que registre aquí se incluirá en la próxima corrida de nómina. Son aquellos que aún no han sido incluidos en una corrida.

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

4. Agregar y eliminar filas de detalle (todo se procesa en el navegador, sin esperar al servidor):

- **"Agregar linea" (boton "+")**: agrega una fila nueva al instante. El proceso ahora es del lado del cliente, por lo que ya no existen los botones "+2", "+5", "+10" ni "+20".
- **Eliminar fila (icono de basura)**: cada fila tiene un icono de papelera para borrarla de inmediato del formulario.
- **Enter como Tab**: al presionar **Enter** dentro de un campo, el cursor salta al siguiente campo de la misma fila, igual que con la tecla Tab.
- **Actualizacion inmediata de valores y totales**: al agregar o eliminar filas, el valor de cada detalle y el valor total del destajo se recalculan al instante. Al borrar una fila, su valor se pone en 0 para que la suma de los detalles coincida con el total del destajo. Ya no es necesario previsualizar ni actualizar para ver los totales actualizados.
- **Correccion de filas en rosa**: si una fila se marcaba en color rosa (por ejemplo, por un empleado y tipo de destajo repetidos), al corregirla ya no queda resaltada en rosa; ademas, un valor igual a 0 se maneja correctamente.

5. Hacer clic en **"Previsualizar"** para verificar los calculos antes de guardar.
6. Hacer clic en **"Actualizar"** (boton que ahora aparece junto al selector de **Supervisor**) para refrescar los valores calculados sin perder los datos ingresados. Al actualizar tambien se limpian los errores del formulario.
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
3. Se pueden agregar, modificar o eliminar filas de detalle. Al entrar a editar, el sistema elimina los detalles de destajo que ya no apliquen y los valores y el total se actualizan de inmediato al agregar o borrar filas. El borrado de filas funciona del lado del cliente (icono de papelera por fila) y al presionar Enter se avanza al siguiente campo como con Tab.
4. Hacer clic en **"Previsualizar"** para verificar cambios.
5. Hacer clic en **"Guardar"**.

### Borrar un destajo

En el detalle del destajo, hacer clic en **"Borrar"**. Solo se pueden borrar destajos que no hayan sido incluidos en una corrida de nomina pagada. Al borrar, las partidas contables asociadas tambien se eliminan.

## Destajos pagados

Cuando la corrida se pagó, los destajos se mueven aquí y quedan como historial. Los destajos pagados son aquellos que ya han sido incluidos en una corrida de nómina marcada como pagada, y son de solo lectura.

Para acceder a los destajos pagados:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos pagados"**.

El listado y el detalle son iguales a los destajos no pagados, pero sin opciones de edicion ni borrado.

### Busqueda avanzada (datatables)

El listado cuenta con busqueda por texto, igual que los destajos no pagados.

## Destajos de feriado

Si su cuadrilla trabajó un feriado —digamos un 25 de diciembre—, no tiene que anotar empleado por empleado. La funcionalidad de destajos de feriado registra automáticamente los destajos del día feriado, aplicando el recargo de horas extra correspondiente.

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

Con los destajos registrados, su parte está hecha: la corrida de nómina los tomará según el rango de fechas y los convertirá en pago. Ya solo queda revisar los saldos cuando se genere la corrida, o capturar el trabajo del día siguiente.

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

Esto devolverá un JSON similar a este:
```json
{
  "pieceworks": [
    {
      "id": 1,
      "zid": 1,
      "date": "2024-06-15",
      "piecework_details_count": 2,
      "value": "15.912",
      "paid": false,
      "paid_at": null,
      "notes": "Corte de cafe parcela norte",
      "creator_id": 2,
      "updater_id": 2,
      "entity_id": 3,
      "created_at": "2026-08-06T04:14:35.291Z",
      "updated_at": "2026-08-06T04:14:35.291Z",
      "supervisor_id": 4,
      "agency_id": 5
    }
  ],
  "distinct_employees_per_piecework": {
    "199093": 2
  },
  "max_employee_details_per_piecework": {
    "199093": 1
  }
}
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
    "piecework": {
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

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "date": "2024-06-15",
  "piecework_details_count": 2,
  "value": "15.912",
  "paid": false,
  "paid_at": null,
  "notes": "Corte de cafe parcela norte",
  "creator_id": 2,
  "updater_id": 2,
  "entity_id": 3,
  "created_at": "2026-08-06T04:17:32.341Z",
  "updated_at": "2026-08-06T04:17:32.341Z",
  "supervisor_id": 4,
  "agency_id": 5,
  "piecework_details": [
    {
      "id": 6,
      "piecework_id": 1,
      "employee_id": 4,
      "piecework_type_id": 4,
      "piecework_type_name": "Armar cajas vacías (Pegar, colocar cajas, color plástico)",
      "piecework_type_measurement_unit": "Caja/Ord",
      "quantity": 5.5,
      "value": "10.296",
      "reference": "Lote A",
      "created_at": "2026-08-06T04:17:32.345Z",
      "updated_at": "2026-08-06T04:17:32.345Z",
      "includes_bonus": true,
      "payroll_id": null,
      "overtime": false,
      "force_whole_week_bonuses_with_other_bonused_piecework_types": false,
      "entity_id": 3
    },
    {
      "id": 7,
      "piecework_id": 1,
      "employee_id": 3,
      "piecework_type_id": 4,
      "piecework_type_name": "Armar cajas vacías (Pegar, colocar cajas, color plástico)",
      "piecework_type_measurement_unit": "Caja/Ord",
      "quantity": 3.0,
      "value": "5.616",
      "reference": "Lote A",
      "created_at": "2026-08-06T04:17:32.365Z",
      "updated_at": "2026-08-06T04:17:32.365Z",
      "includes_bonus": true,
      "payroll_id": null,
      "overtime": false,
      "force_whole_week_bonuses_with_other_bonused_piecework_types": false,
      "entity_id": 3
    }
  ]
}
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

Esto devolverá un JSON similar a este:
```json
{}
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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener estructura para crear un destajo

Devuelve el destajo vacio junto con el listado de empleados disponibles.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_pieceworks/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "piecework": {
    "id": null,
    "zid": null,
    "date": null,
    "piecework_details_count": null,
    "value": null,
    "paid": false,
    "paid_at": null,
    "notes": null,
    "creator_id": null,
    "updater_id": null,
    "entity_id": 1,
    "created_at": null,
    "updated_at": null,
    "supervisor_id": null,
    "agency_id": null
  },
  "employees": []
}
```

### Obtener estructura para editar un destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/unpaid_pieceworks/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar un destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "piecework": {
      "date": "2024-06-15",
      "supervisor_id": "1",
      "notes": "Corte de cafe parcela norte actualizado",
      "piecework_details_attributes": {
        "0": {
          "id": "10",
          "employee_id": "1",
          "piecework_type_id": "1",
          "quantity": "6.0",
          "reference": "Lote A"
        }
      }
    }
  }' \
  https://app.zauru.com/payroll/unpaid_pieceworks/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Listar destajos pagados

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_pieceworks.json
```

Esto devolverá un JSON similar a este:
```json
{
  "pieceworks": [],
  "distinct_employees_per_piecework": {},
  "max_employee_details_per_piecework": {}
}
```

### Ver un destajo pagado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_pieceworks/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener estructura para un destajo de feriado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/piecework_holidays/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "holiday": null,
  "holiday_hours": null,
  "piecework_id": null,
  "created_at": null,
  "updated_at": null,
  "agency_id": 1,
  "entity_id": 2,
  "creator_id": 3,
  "piecework_type_id": 4
}
```

### Crear un destajo de feriado

Genera automaticamente los detalles de destajo para todos los empleados de la agencia con contrato activo de tipo destajo, aplicando el recargo de horas extra.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "piecework_holiday": {
      "holiday": "2024-12-25",
      "holiday_hours": "8",
      "agency_id": "1",
      "piecework_type_id": "1"
    }
  }' \
  https://app.zauru.com/payroll/piecework_holidays.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "144",
  "holiday": "2023-10-20",
  "holiday_hours": "8",
  "piecework_id": "72261",
  "created_at": "2023-10-25 19:31:36.46228",
  "updated_at": "2023-10-25 19:31:36.46228",
  "agency_id": "4492",
  "entity_id": "733",
  "creator_id": "1913",
  "piecework_type_id": "82"
}
```

### Listar tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_types.json
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Ver un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "264",
  "active": true,
  "zid": "253",
  "piecework_type_group_id": "47",
  "id_number": "453",
  "name": "Ajuste de salario ACP",
  "unit_of_measurement": null,
  "value": "1.000000",
  "description": null,
  "account_id": "49826",
  "creator_id": "259",
  "updater_id": "2082",
  "entity_id": "733",
  "created_at": "2021-01-22 05:03:02.189046",
  "updated_at": "2022-03-10 17:51:41.201703",
  "includes_bonus": true,
  "overtime": false,
  "force_whole_week_bonuses_with_other_bonused_piecework_types": false
}
```

### Obtener estructura para crear un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "active": true,
  "zid": null,
  "piecework_type_group_id": null,
  "id_number": null,
  "name": null,
  "unit_of_measurement": null,
  "value": null,
  "description": null,
  "account_id": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "includes_bonus": true,
  "overtime": false,
  "force_whole_week_bonuses_with_other_bonused_piecework_types": false
}
```

### Obtener estructura para editar un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_types/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "264",
  "active": true,
  "zid": "253",
  "piecework_type_group_id": "47",
  "id_number": "453",
  "name": "Ajuste de salario ACP",
  "unit_of_measurement": null,
  "value": "1.000000",
  "description": null,
  "account_id": "49826",
  "creator_id": "259",
  "updater_id": "2082",
  "entity_id": "733",
  "created_at": "2021-01-22 05:03:02.189046",
  "updated_at": "2022-03-10 17:51:41.201703",
  "includes_bonus": true,
  "overtime": false,
  "force_whole_week_bonuses_with_other_bonused_piecework_types": false
}
```

### Crear un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "piecework_type": {
      "active": true,
      "name": "Corte de cafe",
      "id_number": "CC-001",
      "value": "25.00",
      "unit_of_measurement": "quintal",
      "account_id": "1",
      "includes_bonus": false,
      "overtime": false
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "piecework_type_group": [
    "no puede estar en blanco"
  ]
}
```

### Actualizar un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "piecework_type": {
      "name": "Corte de cafe actualizado",
      "value": "28.00"
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "264",
  "active": true,
  "zid": "253",
  "piecework_type_group_id": "47",
  "id_number": "453",
  "name": "Ajuste de salario ACP",
  "unit_of_measurement": null,
  "value": "1.000000",
  "description": null,
  "account_id": "49826",
  "creator_id": "259",
  "updater_id": "2082",
  "entity_id": "733",
  "created_at": "2021-01-22 05:03:02.189046",
  "updated_at": "2022-03-10 17:51:41.201703",
  "includes_bonus": true,
  "overtime": false,
  "force_whole_week_bonuses_with_other_bonused_piecework_types": false
}
```

### Borrar un tipo de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/piecework_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listar grupos de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "id_number": "CS-001",
    "name": "Cosecha",
    "description": "Tipos de destajo relacionados con cosecha",
    "creator_id": 2,
    "updater_id": null,
    "entity_id": 3,
    "created_at": "2026-08-06T04:14:36.266Z",
    "updated_at": "2026-08-06T04:14:36.266Z"
  }
]
```

### Ver un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "id_number": null,
  "name": "RECIBIR Y ARMAR CAJAS",
  "description": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "733",
  "created_at": "2021-01-20 17:22:06.619913",
  "updated_at": "2021-01-20 17:22:06.619913"
}
```

### Obtener estructura para crear un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": null,
  "name": null,
  "description": null,
  "creator_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null
}
```

### Obtener estructura para editar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "id_number": null,
  "name": "RECIBIR Y ARMAR CAJAS",
  "description": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "733",
  "created_at": "2021-01-20 17:22:06.619913",
  "updated_at": "2021-01-20 17:22:06.619913"
}
```

### Crear un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "piecework_type_group": {
      "name": "Cosecha",
      "id_number": "CS-001",
      "description": "Tipos de destajo relacionados con cosecha"
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_type_groups.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "id_number": null,
  "name": "RECIBIR Y ARMAR CAJAS",
  "description": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "733",
  "created_at": "2021-01-20 17:22:06.619913",
  "updated_at": "2021-01-20 17:22:06.619913"
}
```

### Actualizar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "piecework_type_group": {
      "name": "Cosecha actualizada",
      "description": "Tipos de destajo de cosecha"
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "id_number": null,
  "name": "RECIBIR Y ARMAR CAJAS",
  "description": null,
  "creator_id": "1",
  "updater_id": null,
  "entity_id": "733",
  "created_at": "2021-01-20 17:22:06.619913",
  "updated_at": "2021-01-20 17:22:06.619913"
}
```

### Borrar un grupo de tipos de destajo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/payroll/settings/piecework_type_groups/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
