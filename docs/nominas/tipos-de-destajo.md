---
title: "Tipos de destajo"
sidebar_label: "Tipos de destajo"
sidebar_position: 7
---

Los tipos de destajo definen las tareas que se pagan por unidad de trabajo realizada.

Para gestionar tipos de destajo:

1. Ir a **"Nominas"**.
2. En **"Settings"**, seleccionar **"Tipos de destajo"**.

## Crear un tipo de destajo

1. Hacer clic en **"Nuevo"**.
2. Completar los campos:

![Formulario de nuevo tipo de destajo](/img/nominas/configuraciones-de-nomina-9.png)

- **Activo**: marcar para que este disponible.
- **Nombre**: nombre del tipo de destajo (ej. "Corte de cafe", "Siembra", "Limpieza de terreno").
- **Valor**: pago por unidad de trabajo realizada.
- **Unidad de medida**: unidad en que se mide el trabajo (ej. "quintal", "tarea", "hectarea", "unidad").
- **Cuenta contable**: cuenta de gasto asociada al destajo.
- **Grupo de tipo de destajo**: agrupacion para organizacion y reportes.
- **Incluye bonificacion**: si se marca, el valor del destajo ya incluye la bonificacion mensual.
- **Forzar bonificacion de semana completa**: si se marca, fuerza el calculo de bonificacion para empleados que completan la semana laboral completa con destajos.
- **Es hora extra**: si se marca, el destajo se considera como pago de horas extra.

3. Hacer clic en **"Guardar"**.

## Exportar tipos de destajo

En el listado de tipos de destajo, hacer clic en **"Exportar"** para descargar un archivo Excel con todos los tipos de destajo configurados.

## Editar y borrar tipos de destajo

Desde el detalle del tipo de destajo, usar los botones **"Editar"** y **"Borrar"**.

## API (llamadas desde sistemas externos)

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
[
  {
    "id": 1,
    "active": true,
    "zid": 1,
    "piecework_type_group_id": 1,
    "id_number": "DEST-001",
    "name": "Corte de cafe",
    "unit_of_measurement": "quintal",
    "value": "45.500000",
    "description": "Corte de cafe por quintal",
    "account_id": 2,
    "creator_id": 3,
    "updater_id": 3,
    "entity_id": 1,
    "created_at": "2026-08-01T10:00:00.000Z",
    "updated_at": "2026-08-01T10:00:00.000Z",
    "includes_bonus": true,
    "overtime": false,
    "force_whole_week_bonuses_with_other_bonused_piecework_types": false,
    "piecework_type_group": {
      "id_number": "GRP-001",
      "name": "Cosecha"
    }
  },
  {
    "id": 2,
    "active": true,
    "zid": 2,
    "piecework_type_group_id": 2,
    "id_number": "DEST-002",
    "name": "Siembra",
    "unit_of_measurement": "tarea",
    "value": "30.000000",
    "description": "Siembra por tarea",
    "account_id": 2,
    "creator_id": 3,
    "updater_id": null,
    "entity_id": 1,
    "created_at": "2026-08-01T11:00:00.000Z",
    "updated_at": "2026-08-01T11:00:00.000Z",
    "includes_bonus": true,
    "overtime": false,
    "force_whole_week_bonuses_with_other_bonused_piecework_types": false,
    "piecework_type_group": {
      "id_number": "GRP-002",
      "name": "Siembra"
    }
  }
]
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
  "id": 1,
  "active": true,
  "zid": 1,
  "piecework_type_group_id": 1,
  "id_number": "DEST-001",
  "name": "Corte de cafe",
  "unit_of_measurement": "quintal",
  "value": "45.500000",
  "description": "Corte de cafe por quintal",
  "account_id": 2,
  "creator_id": 3,
  "updater_id": 3,
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
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
  "id": 1,
  "active": true,
  "zid": 1,
  "piecework_type_group_id": 1,
  "id_number": "DEST-001",
  "name": "Corte de cafe",
  "unit_of_measurement": "quintal",
  "value": "45.500000",
  "description": "Corte de cafe por quintal",
  "account_id": 2,
  "creator_id": 3,
  "updater_id": 3,
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
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
      "value": "45.5",
      "unit_of_measurement": "quintal",
      "account_id": "2",
      "piecework_type_group_id": "1",
      "includes_bonus": true,
      "force_whole_week_bonuses_with_other_bonused_piecework_types": false,
      "overtime": false
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "active": true,
  "zid": 1,
  "piecework_type_group_id": 1,
  "id_number": "DEST-001",
  "name": "Corte de cafe",
  "unit_of_measurement": "quintal",
  "value": "45.500000",
  "description": null,
  "account_id": 2,
  "creator_id": 3,
  "updater_id": null,
  "entity_id": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "includes_bonus": true,
  "overtime": false,
  "force_whole_week_bonuses_with_other_bonused_piecework_types": false
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
      "value": "50.0",
      "includes_bonus": false
    }
  }' \
  https://app.zauru.com/payroll/settings/piecework_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

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
