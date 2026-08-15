---
title: "Exportar Respuestas Certificadas"
sidebar_label: "Exportar Respuestas Certificadas"
sidebar_position: 50
---

Este reporte exporta las respuestas de certificación del almacenamiento externo de documentos.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Exportar Respuestas Certificadas".
4. Seleccionar el rango de fechas.

## API (llamadas desde sistemas externos)

### Obtener las respuestas certificadas del almacenamiento externo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/export_certified_responses.json?date=2026-08-01&end_date=2026-08-31&include_credit_notes=1
```

Esto devolverá un JSON similar a este:
```json
[
  "{\"version\":1,\"firmaElectronica\":\"FJds83nDkx91...\",\"selloRecibido\":\"2026-08-01T10:00:00Z\"}",
  "{\"version\":1,\"firmaElectronica\":\"Kdl93xmAo47...\",\"selloRecibido\":\"2026-08-02T11:30:00Z\"}"
]
```

Los parámetros `date` y `end_date` definen el rango de fechas (formato `AAAA-MM-DD`) y `include_credit_notes` (1 o 0) indica si se incluyen las notas de crédito.
