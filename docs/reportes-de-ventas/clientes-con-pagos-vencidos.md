---
title: "Clientes con Pagos Vencidos"
sidebar_label: "Clientes con Pagos Vencidos"
sidebar_position: 56
---

Este reporte lista los clientes que tienen pagos vencidos. Retorna JSON para uso en dropdowns.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Clientes con Pagos Vencidos".

## API (llamadas desde sistemas externos)

### Obtener el listado de clientes con pagos vencidos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/clients_with_overdue_payments.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "info": "<C-001> 1111111-1 | Cliente Ejemplo A #5555-0001",
    "cat": "2",
    "default_seller": "3",
    "due": "1250.5",
    "currency": "GTQ"
  },
  {
    "id": 2,
    "info": "2222222-2 | Cliente Ejemplo B",
    "cat": null,
    "default_seller": null,
    "due": "300.0",
    "currency": "USD"
  }
]
```
