---
title: "Facturas Sin Asiento Contable de Ventas"
sidebar_label: "Facturas Sin Asiento Contable de Ventas"
sidebar_position: 77
---

Este reporte detecta facturas que no generaron su asiento contable de ventas correspondiente. Permite regenerarlos.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Facturas sin Asiento Contable de Ventas".

## API (llamadas desde sistemas externos)

### Generar el listado de facturas sin asiento contable de ventas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/reports/gen_invoices_without_sales_entry.json
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
  https://app.zauru.com/sales/reports/check_report.json?zid=2&report=invoices_without_sales_entry
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 2,
  "percentage": 100,
  "message": "[{\"i\":3,\"z\":1,\"o\":\"\",\"in\":\"FAC-003\",\"d\":\"2026-08-03\",\"a\":\"Tienda Sur\",\"pn\":\"Cliente Ejemplo C\",\"t\":\"220.0\",\"du\":\"220.0\",\"p\":0}]"
}
```

Mientras el proceso se ejecuta, `status` es 1 y `percentage` va avanzando; cuando termina, `status` es 2 y `percentage` es 100.
