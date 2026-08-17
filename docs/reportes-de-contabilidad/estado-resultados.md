---
title: "Estado de Resultados"
sidebar_label: "Estado de Resultados"
sidebar_position: 14
---

¿Le preguntaron cuánto ganó la empresa el mes pasado, o quiere saber en qué se fueron los ingresos? El estado de resultados desglosa las distintas categorías de los gastos e ingresos y le muestra su resultado en un periodo de tiempo, desde la utilidad bruta hasta la utilidad neta.

Los pasos para ingresar a ver el estado de resultados son los siguientes:

1. Ir a “Contabilidad.
2. Seleccionar “Reportes”.
3. Seleccionar “Estado de Resultados”.

Puede ver su estado de resultados global o puede seleccionar los detalles por mes.

![imagen4](/img/reportes-de-contabilidad/estado-resultados-1.jpg)

**Parametros**:

- **Fecha de inicio** y **Fecha de fin**: periodo del reporte. Si no se especifica, muestra el mes actual.

**Estructura**:

1. **Ingresos**: agrupados por grupo de cuenta.
2. **Costos**: costo de ventas y costos operativos.
3. **Gastos**: gastos operativos y administrativos.
4. **Utilidad bruta**: ingresos - costos.
5. **Utilidad neta**: utilidad bruta - gastos.

**Versiones**:

- **Estandar**: por cuenta individual.
- **Por grupos de cuenta**: consolidado por grupo de cuenta.

## API (llamadas desde sistemas externos)

### Obtener el estado de resultados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/reports/profit_loss.json?start=2026-01-01&end=2026-02-28
```

Esto devolverá un JSON similar a este:
```json
{
  "start": "2026-01-01",
  "end": "2026-02-28",
  "months": 2,
  "currencies": [
    {
      "id": 1,
      "code": "GTQ",
      "prefix": "Q"
    }
  ],
  "periods": [
    {
      "key": "2026-01",
      "year": 2026,
      "month": 1,
      "from": "2026-01-01",
      "to": "2026-01-31"
    },
    {
      "key": "2026-02",
      "year": 2026,
      "month": 2,
      "from": "2026-02-01",
      "to": "2026-02-28"
    }
  ],
  "sales": {
    "name": "Ventas",
    "totals": [
      {
        "currency_id": 1,
        "monthly": {
          "2026-01": 1000.0,
          "2026-02": 1200.0
        },
        "total": 2200.0
      }
    ],
    "accounts": [
      {
        "id": 1,
        "code": "4.01",
        "name": "Ventas de mercaderia",
        "account_group_id": 1,
        "currency_id": 1,
        "monthly": {
          "2026-01": 1000.0,
          "2026-02": 1200.0
        },
        "total": 2200.0
      }
    ]
  },
  "costs": {
    "name": "Costos",
    "totals": [
      {
        "currency_id": 1,
        "monthly": {
          "2026-01": 600.0,
          "2026-02": 700.0
        },
        "total": 1300.0
      }
    ],
    "accounts": [
      {
        "id": 2,
        "code": "3.01",
        "name": "Costo de ventas",
        "account_group_id": 2,
        "currency_id": 1,
        "monthly": {
          "2026-01": 600.0,
          "2026-02": 700.0
        },
        "total": 1300.0
      }
    ]
  },
  "gross_profit": [
    {
      "currency_id": 1,
      "monthly": {
        "2026-01": 400.0,
        "2026-02": 500.0
      },
      "total": 900.0
    }
  ],
  "expenses": {
    "name": "Gastos",
    "totals": [
      {
        "currency_id": 1,
        "monthly": {
          "2026-01": 200.0,
          "2026-02": 250.0
        },
        "total": 450.0
      }
    ],
    "accounts": [
      {
        "id": 3,
        "code": "3.05",
        "name": "Gastos administrativos",
        "account_group_id": 3,
        "currency_id": 1,
        "monthly": {
          "2026-01": 200.0,
          "2026-02": 250.0
        },
        "total": 450.0
      }
    ]
  },
  "net_profit": [
    {
      "currency_id": 1,
      "monthly": {
        "2026-01": 200.0,
        "2026-02": 250.0
      },
      "total": 450.0
    }
  ]
}
```
