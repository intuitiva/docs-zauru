---
title: "Estado Consolidado de Contratos Activos"
sidebar_label: "Estado Consolidado de Contratos Activos"
sidebar_position: 1
---

Este reporte muestra un resumen del estado de todos los contratos activos, indicando por cada contrato:

- ID, Beneficiario, Referencia.
- Total de Cuotas y Cuota Actual.
- Monto Total del contrato.
- Cantidad de cuotas no generadas y su monto.
- Cantidad y monto de documentos en cada estado de flujo de trabajo (Borrador, Ordenado, Autorizado, Pagado, etc.).

Para ingresar al reporte:

1. Ir a "Contratos".
2. Seleccionar "Reportes".
3. Seleccionar "Estado Consolidado de Contratos Activos".

**Filtros disponibles:**

- Tipo de Documento (Orden, Factura no Pagada, Caso, Orden de Compra).
- Incluir Contratos Cerrados (checkbox).

El reporte se puede exportar a Excel para análisis externo.

## API (llamadas desde sistemas externos)

### Obtener el estado consolidado de contratos activos

El parametro `doc_type` corresponde al tipo de documento: `1` ordenes, `2` facturas impagas, `3` casos, `4` ordenes de compra. Con `include_closed=1` se incluyen los contratos cerrados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/contracts/reports/consolidated_active_contract_status.json?doc_type=1&include_closed=0"
```

Esto devolverá un JSON similar a este:

```json
{
  "doc_type": 1,
  "document_type": "Order",
  "include_closed": false,
  "currency_prefix": "Q",
  "workflow_columns": [
    {
      "workflow_step": 1,
      "workflow_key": "orders",
      "documents_status_key": "Orders",
      "fees_header": "Cuotas Ordenes",
      "amount_header": "Monto Ordenes"
    },
    {
      "workflow_step": 2,
      "workflow_key": "unpaid_invoices",
      "documents_status_key": "UnpaidInvoices",
      "fees_header": "Cuotas Facturas Impagas",
      "amount_header": "Monto Facturas Impagas"
    }
  ],
  "contracts": [
    {
      "id": 1,
      "zid": 2,
      "payee": "Cliente Ejemplo A, S.A.",
      "reference": "Referencia Ejemplo A",
      "fees": 12,
      "current_fee": 3,
      "total_amount": 500.0,
      "not_generated": 9,
      "not_generated_amount": 375.0,
      "workflows": {
        "orders": {"quantity": 1, "amount": 100.0},
        "unpaid_invoices": {"quantity": 2, "amount": 200.0}
      }
    },
    {
      "id": 2,
      "zid": 3,
      "payee": "Cliente Ejemplo B, S.A.",
      "reference": "Referencia Ejemplo B",
      "fees": 6,
      "current_fee": 6,
      "total_amount": 300.0,
      "not_generated": null,
      "not_generated_amount": 0.0,
      "workflows": {
        "orders": {"quantity": 1, "amount": 150.0},
        "unpaid_invoices": {"quantity": 1, "amount": 150.0}
      }
    }
  ]
}
```
