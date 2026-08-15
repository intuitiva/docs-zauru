---
title: "Estado de Resultados Categorizado"
sidebar_label: "Estado de Resultados Categorizado"
sidebar_position: 16
---

El estado de resultados categorizado está agrupado por categorías de gastos e ingresos detalladas en cada rubro y muestran su resultado en un periodo de tiempo.

Los pasos para ingresar a ver el estado de resultados categorizado son los siguientes:

  1. Ir a “Contabilidad.
  2. Seleccionar “Reportes”.
  3. Seleccionar “Estado de Resultados Categorizado”.

Puede ver su estado de resultados categorizado global o puede seleccionar los detalles por mes.

![Estado de resultados categorizado](/img/reportes-de-contabilidad/libro-estado-de-resultados-categorizado-1.png)

## API (llamadas desde sistemas externos)

### Obtener el estado de resultados categorizado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/reports/profit_loss_cat.json?start=2026-01-01&end=2026-02-28
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
    "groups": [
      {
        "id": 1,
        "code": "V",
        "name": "Ventas locales",
        "currency_id": 1,
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
        ],
        "totals": [
          {
            "currency_id": 1,
            "monthly": {
              "2026-01": 1000.0,
              "2026-02": 1200.0
            },
            "total": 2200.0
          }
        ]
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
    "groups": [
      {
        "id": 2,
        "code": "C",
        "name": "Costos de venta",
        "currency_id": 1,
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
        ],
        "totals": [
          {
            "currency_id": 1,
            "monthly": {
              "2026-01": 600.0,
              "2026-02": 700.0
            },
            "total": 1300.0
          }
        ]
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
    "groups": [
      {
        "id": 3,
        "code": "G",
        "name": "Gastos operativos",
        "currency_id": 1,
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
        ],
        "totals": [
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
