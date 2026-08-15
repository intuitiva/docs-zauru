---
title: "Facturas con Envíos Anulados"
sidebar_label: "Facturas con Envíos Anulados"
sidebar_position: 76
---

Este reporte lista las facturas cuyos envíos fueron anulados.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Facturas con Envíos Anulados".

## API (llamadas desde sistemas externos)

### Generar el listado de facturas con envíos anulados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/reports/gen_invoices_with_voided_shipment.json
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
  https://app.zauru.com/sales/reports/check_report.json?zid=2&report=invoices_with_voided_shipment
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 2,
  "percentage": 100,
  "message": "[{\"i\":2,\"z\":1,\"o\":\"ORD-002\",\"in\":\"FAC-002\",\"d\":\"2026-08-02\",\"a\":\"Tienda Norte\",\"pn\":\"Cliente Ejemplo B\",\"t\":\"80.0\",\"du\":\"80.0\",\"p\":0}]"
}
```

Mientras el proceso se ejecuta, `status` es 1 y `percentage` va avanzando; cuando termina, `status` es 2 y `percentage` es 100.
