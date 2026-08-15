---
title: "Presupuestos mensuales por proyecto"
sidebar_label: "Presupuestos mensuales por proyecto"
sidebar_position: 4
---

Los pasos para crear un presupuesto mensual por proyecto son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Presupuestos”.
3. Seleccionar la pestaña “Presupuestos por Proyecto”.
4. Seleccionar “Nuevo Presupuesto del Proyecto”.

![imagen1](/img/contabilizacion-de-proyectos/proyectos-presupuestos-mensuales-1.jpg)

Le aparecerán las opciones para crear un nuevo presupuesto de proyecto, los campos a llenar son los siguientes:

a. Coloque si es un presupuesto de ingresos o gastos.

b. Seleccione de que proyecto es el presupuesto.

c. Coloque el monto total del proyecto.

d. Coloque el rubro de gastos o ingresos y coloque la cantidad presupuestada. Para agregar un rubro extra presione “+” para agregar dos rubros extras presione “+2”.

![imagen2](/img/contabilizacion-de-proyectos/proyectos-presupuestos-mensuales-2.jpg)



Cuando termine de especificar los gastos presupuestados para el proyecto presione “Crear presupuesto por proyecto”.

![imagen3](/img/contabilizacion-de-proyectos/proyectos-presupuestos-mensuales-3.jpg)



Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el presupuesto exitosamente. Podrá ver los detalles de su proyecto en el botón de “Ver” (ojo).

![imagen4](/img/contabilizacion-de-proyectos/proyectos-presupuestos-mensuales-4.jpg)

## API (llamadas desde sistemas externos)

El presupuesto por proyecto es un "tagged budget" (presupuesto por etiqueta), donde `tag_id` es el proyecto.

### Consultar listado de presupuestos por proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "entity_id": 1,
    "updater_id": 1,
    "tag_id": 1,
    "income": false,
    "amount": "5000.00",
    "executed": "0.0",
    "budget_details_count": 2,
    "created_at": "2026-08-01 10:00:00.000000",
    "updated_at": "2026-08-01 10:00:00.000000"
  },
  {
    "id": 2,
    "entity_id": 1,
    "updater_id": 1,
    "tag_id": 2,
    "income": true,
    "amount": "12000.00",
    "executed": "0.0",
    "budget_details_count": 1,
    "created_at": "2026-08-01 10:00:00.000000",
    "updated_at": "2026-08-01 10:00:00.000000"
  }
]
```

### Obtener detalle de un presupuesto por proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "entity_id": 1,
  "updater_id": 1,
  "tag_id": 1,
  "income": false,
  "amount": "5000.00",
  "executed": "0.0",
  "budget_details_count": 2,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000"
}
```

### Crear un presupuesto por proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tagged_budget": {
      "income": false,
      "tag_id": 1,
      "extras": "0.0",
      "budget_details_attributes": {
        "0": {
          "account_id": 2,
          "amount": "5000.0"
        }
      }
    }
  }' \
  https://app.zauru.com/accounting/budgets/tagged_budgets.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "entity_id": 1,
  "updater_id": 1,
  "tag_id": 1,
  "income": false,
  "amount": "5000.00",
  "executed": "0.0",
  "budget_details_count": 1,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000"
}
```

### Actualizar un presupuesto por proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tagged_budget": {
      "extras": "200.0"
    }
  }' \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "entity_id": 1,
  "updater_id": 1,
  "tag_id": 1,
  "income": false,
  "amount": "5000.00",
  "executed": "0.0",
  "budget_details_count": 1,
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000"
}
```

### Borrar un presupuesto por proyecto
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
