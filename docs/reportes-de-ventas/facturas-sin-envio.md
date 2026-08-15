---
title: "Facturas Sin Envío"
sidebar_label: "Facturas Sin Envío"
sidebar_position: 75
---

Este reporte lista las facturas que no tienen envíos asociados. Permite exportar.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Facturas sin Envío".

## API (llamadas desde sistemas externos)

### Generar el listado de facturas sin envío
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/reports/gen_invoices_without_shipment.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 1,
  "zid": 2
}
```

El campo `zid` identifica el proceso en segundo plano. Consulte su estado con la llamada de la siguiente sección.

### Consultar el estado del reporte generado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/check_report.json?zid=2&report=invoices_without_shipment
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 2,
  "percentage": 100,
  "message": "[{\"i\":1,\"z\":1,\"o\":\"ORD-001\",\"in\":\"FAC-001\",\"d\":\"2026-08-01\",\"a\":\"Tienda Central\",\"pn\":\"Cliente Ejemplo A\",\"t\":\"150.0\",\"du\":\"0.0\",\"p\":1}]"
}
```

Mientras el proceso se ejecuta, `status` es 1 y `percentage` va avanzando; cuando termina, `status` es 2 y `percentage` es 100.
