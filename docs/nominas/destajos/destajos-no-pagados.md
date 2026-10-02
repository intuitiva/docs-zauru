---
title: "Destajos no pagados"
sidebar_label: "Destajos no pagados"
sidebar_position: 3
---

Los destajos no pagados son el trabajo registrado que todavía espera su pago: se incluirán en la próxima corrida de nómina.

Para acceder a los destajos no pagados:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos no pagados"**.

![2. Seleccionar **"Destajos no pagados"**.](/img/nominas/destajos-1.png)

## Listado de destajos no pagados

El listado muestra todos los destajos pendientes de pago. Cada fila muestra:

- ID.
- Supervisor.
- Locación.
- Fecha.
- Notas.
- Registros: cantidad de detalles del destajo.
- Empleados.
- Valor.
- Transacciones: partidas contables generadas.
- Acciones disponibles (ver, editar, borrar).

Si su usuario tiene habilitado el filtro por agencia, en la parte superior del listado aparece el selector **"Locación"** junto al botón **"Cambiar"** para filtrar los destajos de una agencia.

### Búsqueda

El campo **"Filtrar"** del listado busca por ID, notas, agencia o empleado.

### Crear un destajo

1. En el listado de destajos no pagados, hacer clic en **"Nuevo Destajo"**.

2. Completar los campos del encabezado:

- **Supervisor**: persona con puesto asalariado que supervisó el trabajo.
- **Fecha**: fecha en que se realizó el trabajo.

3. Agregar los detalles del destajo. Para cada fila:

- **Empleado**: empleado que realizó el trabajo. Solo se muestran empleados activos con contrato de tipo destajo.
- **Destajo**: tipo de destajo realizado.
- **Cantidad**: cantidad de unidades realizadas.
- **Valor**: total calculado por el sistema (cantidad por valor unitario del tipo de destajo). Es de solo lectura.
- **Incluye bono**: indica si el valor del tipo de destajo incluye la bonificación mensual. Se muestra como icono de verificación (verde) o equis (rojo).
- **Referencia**: texto opcional para identificar el detalle (por ejemplo, número de parcela, ubicación o lote).

4. Agregar y eliminar filas de detalle. El formulario procesa todo en el navegador, sin esperar al servidor:

- **Botón "+"**: agrega una fila nueva. Los botones **"+2"**, **"+5"**, **"+10"** y **"+20"** ya no se muestran.
- **Icono de papelera**: borra la fila de inmediato.
- **Enter como Tab**: al presionar **Enter** dentro de un campo, el cursor salta al siguiente campo de la misma fila.
- **Cálculo inmediato**: al agregar o eliminar filas, el valor de cada detalle y el total del destajo se recalculan al instante. Al borrar una fila, su valor se pone en 0 para que la suma de los detalles coincida con el total.
- **Filas repetidas**: si dos filas tienen el mismo empleado y el mismo tipo de destajo, el formulario las resalta en rojo; al corregirlas, el resaltado desaparece.

5. Completar el campo **"Notas"** con observaciones adicionales (opcional).

6. Hacer clic en **"Crear destajo"**.

Al guardar un destajo, el sistema:

- Calcula el valor total de cada detalle (cantidad por valor unitario).
- Muestra el valor total del destajo.
- Genera las partidas contables correspondientes, a menos que la configuración **"Evitar generación de partidas en destajos"** esté marcada.
- Verifica si algún empleado supera el **"Monto máximo por empleado en destajos"** configurado y muestra una alerta si corresponde.

### Ver detalle de un destajo

En el listado, hacer clic en el ID del destajo o en el icono de ojo. El detalle muestra:

- **Datos generales**: ID, fecha, supervisor y notas.
- **Detalles del destajo**: tabla con el código del empleado, empleado, tipo de destajo, unidad de medida, hora extra, cantidad, valor unitario, valor total, bonificación incluida, referencia, valor acumulado por empleado y bonificación incluida por empleado.
- **Partidas contables asociadas**: transacciones contables generadas por el destajo, con enlace a su detalle.
- **Formularios asociados**: si aplica, formularios vinculados al destajo.
- **Información adicional**: creador, fecha de creación, último editor y fecha de última edición.

### Editar un destajo

1. En el listado, hacer clic en el icono de lápiz de la fila.
2. El formulario es idéntico al de creación, con los valores actuales precargados.
3. Se pueden agregar, modificar o eliminar filas de detalle. Los valores y el total se actualizan de inmediato al agregar o borrar filas.
4. Hacer clic en **"Actualizar destajo"**.

### Borrar un destajo

En el listado, hacer clic en el icono de papelera de la fila. Solo los destajos no pagados se pueden borrar.

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
    "1": 2
  },
  "max_employee_details_per_piecework": {
    "1": 1
  }
}
```

### Listado de destajos no pagados (datatables)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40
  }' \
  https://app.zauru.com/payroll/unpaid_pieceworks/datatables.json
```

### Obtener estructura para crear un destajo

Devuelve el destajo vacío junto con el listado de empleados disponibles.

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

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
