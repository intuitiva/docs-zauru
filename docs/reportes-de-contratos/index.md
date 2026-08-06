---
title: "Reportes de Contratos"
sidebar_label: "Reportes de Contratos"
sidebar_position: 0
---

Estos reportes permiten llevar control de los contratos que no generaron recurrencias, estadísticas generales, contratos por expirar y contratos pendientes de cierre.

## Reportes Disponibles

### 1. Estado Consolidado de Contratos Activos

Este reporte muestra un resumen del estado de todos los contratos activos, indicando por cada contrato:
- ID, Beneficiario, Referencia
- Total de Cuotas y Cuota Actual
- Monto Total del contrato
- Cantidad de cuotas no generadas y su monto
- Cantidad y monto de documentos en cada estado de flujo de trabajo (Borrador, Ordenado, Autorizado, Pagado, etc.)

**Filtros disponibles:**
- Tipo de Documento (Orden, Factura no Pagada, Caso, Orden de Compra)
- Incluir Contratos Cerrados (checkbox)

El reporte se puede exportar a Excel para análisis externo.

### 2. Contratos con Generación Pendiente

Este reporte identifica contratos que tienen cuotas que debieron haberse generado pero por alguna razón no se generaron (huecos o duplicaciones en las recurrencias).

Por cada contrato muestra:
- ID, Beneficiario, Referencia
- Cuota Esperada (la que debería haberse generado)
- Cuota Actual (la última generada)
- Cuotas Generadas

**Cómo funciona:** El sistema compara la suma esperada de números de recurrencia contra la suma real de recurrencias generadas. Si hay diferencia (huecos o duplicados), el contrato aparece en este reporte. También compara la cuota esperada según la fecha actual contra la cuota efectiva actual.

**Filtro disponible:** Tipo de Documento.

### 3. Contratos por Expirar

Este reporte muestra los contratos que están próximos a vencer (finalizar su cantidad de cuotas) dentro del período seleccionado.

Por cada contrato muestra:
- Número, Beneficiario, ID, Referencia
- Fecha de Inicio, Total de Cuotas, Cuota Actual
- Periodicidad, Fecha de Finalización

**Filtro disponible:** Fecha hasta la cual buscar (por defecto fin del mes actual).

**Nota:** Los contratos infinitos no aplican para este reporte ya que no tienen fecha de expiración.

### 4. Contratos Pendientes de Cierre

Este reporte muestra los contratos que ya generaron todas sus cuotas pero aún no han sido cerrados (siguen apareciendo como activos).

Por cada contrato muestra:
- Número, Beneficiario, ID, Referencia
- Fecha de Inicio, Total de Cuotas, Cuota Actual
- Periodicidad, Fecha Esperada de Cierre

**Cómo funciona:** Identifica contratos donde la cuota actual (`current_fee`) es mayor o igual al total de cuotas configuradas (`fees`) y cuya fecha de próxima cuota ya pasó.

**Filtro disponible:** Tipo de Documento.

## API (llamadas desde sistemas externos)

### Estado consolidado de contratos activos

Devuelve el resumen del estado de todos los contratos activos, con cuotas no generadas, montos por estado de flujo de trabajo y totales.

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
      "fees_header": "Cuotas Facturas no Pagadas",
      "amount_header": "Monto Facturas no Pagadas"
    }
  ],
  "contracts": [
    {
      "id": 1,
      "zid": 2,
      "payee": "3775668-0 | Jormar, S.A. # 2334-2509",
      "reference": "",
      "fees": null,
      "current_fee": 131,
      "total_amount": 458383.37,
      "not_generated": null,
      "not_generated_amount": 0.0,
      "workflows": {
        "orders": {
          "quantity": null,
          "amount": null
        },
        "unpaid_invoices": {
          "quantity": null,
          "amount": null
        }
      }
    },
    {
      "id": 3,
      "zid": 4,
      "payee": "91101093 | Hostal Los Amigos, Sociedad Anonima # 7867-5659",
      "reference": "",
      "fees": null,
      "current_fee": 141,
      "total_amount": 530794.5,
      "not_generated": null,
      "not_generated_amount": 0.0,
      "workflows": {
        "orders": {
          "quantity": null,
          "amount": null
        },
        "unpaid_invoices": {
          "quantity": null,
          "amount": null
        }
      }
    }
  ]
}
```

Parametros:

- `doc_type`: tipo de documento del contrato (`1` = Orden, `2` = Factura no Pagada, `3` = Caso, `4` = Orden de Compra). Por defecto `1`.
- `include_closed`: `1` para incluir contratos cerrados, `0` para excluirlos. Por defecto `0`.

### Contratos con generación pendiente

Devuelve los contratos que tienen cuotas que debieron haberse generado pero no se generaron (huecos o duplicaciones en las recurrencias).

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
      "payee": "Jormar, S.A.",
      "reference": "",
      "expected_fee": 235,
      "current_fee": 131,
      "generated_fees": [
        6,
        1,
        4,
        3,
        2,
        5,
        9,
        7,
        10,
        8,
        15,
        11,
        12,
        13,
        14,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        77,
        43,
        44,
        45,
        46,
        47,
        48,
        78,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        79,
        61,
        82,
        62,
        63,
        64,
        65,
        66,
        80,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        81,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        102,
        100,
        104,
        103,
        121,
        101,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        122,
        123,
        124,
        125,
        126,
        127,
        129,
        128,
        130,
        131
      ]
    },
    {
      "id": 3,
      "zid": 4,
      "payee": "Hostal Los Amigos, Sociedad Anonima",
      "reference": "",
      "expected_fee": 131,
      "current_fee": 141,
      "generated_fees": [
        3,
        2,
        1,
        4,
        5,
        6,
        9,
        7,
        8,
        14,
        10,
        11,
        12,
        13,
        15,
        16,
        17,
        28,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        40,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        52,
        50,
        51,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        77,
        64,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        88,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        65,
        76,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        117,
        116,
        115,
        114,
        113,
        112,
        111,
        110,
        109,
        108,
        107,
        106,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141
      ]
    }
  ]
}
```

Parametros:

- `doc_type`: tipo de documento del contrato (`1` = Orden, `2` = Factura no Pagada, `3` = Caso, `4` = Orden de Compra). Por defecto `1`.
