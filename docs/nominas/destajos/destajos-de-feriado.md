---
title: "Destajos de feriado"
sidebar_label: "Destajos de feriado"
sidebar_position: 5
---

Cuando la cuadrilla trabaja un día feriado, no hace falta registrar el destajo empleado por empleado. Esta función genera el destajo del día de asueto a partir del trabajo de la semana anterior y lo deja en "Destajos no pagados".

Para crear un destajo de feriado:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos no pagados"**.
3. Hacer clic en **"Nuevo destajo de asueto"**.

![3. Hacer clic en **"Nuevo destajo de asueto"**.](/img/nominas/destajos-5.png)

## Crear un destajo de feriado

1. Completar los campos:

- **Día del Asueto**: fecha del día feriado.
- **Horas hábiles en día de Asueto**: horas trabajadas en el feriado. Las opciones son 9, 8, 5 y 4 horas.
- **Tipo de Destajo para el Asueto**: tipo de destajo con el que se paga el feriado. Solo aparecen los tipos de destajo con valor 1.00, porque el cálculo se hace por hora.
- **Locación**: agencia a la que pertenecen los empleados.

2. Hacer clic en **"Crear destajo de asueto"**.

El sistema genera un destajo con fecha del día del asueto para los empleados de la agencia que registraron destajos en la semana anterior. Para cada empleado calcula la cantidad así:

1. Obtiene el salario por hora de la semana anterior: promedio del salario ordinario (44 horas), más el salario extraordinario, más el salario ordinario promedio adicional (4 horas), dividido entre 48 horas.
2. Obtiene el salario por hora del contrato de trabajo de tipo destajo del empleado.
3. Multiplica el mayor de los dos valores por las horas del asueto.

El destajo resultante queda en "Destajos no pagados", con el nombre del tipo de destajo en las notas y un empleado asalariado de la agencia como supervisor.

## API (llamadas desde sistemas externos)

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
