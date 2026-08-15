---
title: "Contratos con Generación Pendiente"
sidebar_label: "Contratos con Generación Pendiente"
sidebar_position: 2
---

Este reporte identifica contratos que tienen cuotas que debieron haberse generado pero por alguna razón no se generaron (huecos o duplicaciones en las recurrencias).

Por cada contrato muestra:

- ID, Beneficiario, Referencia.
- Cuota Esperada (la que debería haberse generado).
- Cuota Actual (la última generada).
- Cuotas Generadas.

**Cómo funciona:** el sistema compara la suma esperada de números de recurrencia contra la suma real de recurrencias generadas. Si hay diferencia (huecos o duplicados), el contrato aparece en este reporte. También compara la cuota esperada según la fecha actual contra la cuota efectiva actual.

Para ingresar al reporte:

1. Ir a "Contratos".
2. Seleccionar "Reportes".
3. Seleccionar "Contratos con Generación Pendiente".

**Filtro disponible:** Tipo de Documento.

## API (llamadas desde sistemas externos)

### Obtener contratos con generacion pendiente

El parametro `doc_type` corresponde al tipo de documento: `1` ordenes, `2` facturas impagas, `3` casos, `4` ordenes de compra.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/contracts/reports/contracts_with_pending_generation.json?doc_type=1"
```

Esto devolverá un JSON similar a este:

```json
{
  "document_type": "Order",
  "contracts": [
    {
      "id": 1,
      "zid": 2,
      "payee": "Cliente Ejemplo A, S.A.",
      "reference": "Referencia Ejemplo A",
      "expected_fee": 6,
      "current_fee": 5,
      "generated_fees": [1, 2, 3, 4, 5]
    },
    {
      "id": 2,
      "zid": 3,
      "payee": "Cliente Ejemplo B, S.A.",
      "reference": "Referencia Ejemplo B",
      "expected_fee": 8,
      "current_fee": 8,
      "generated_fees": [1, 2, 3, 4, 5, 6, 8]
    }
  ]
}
```
