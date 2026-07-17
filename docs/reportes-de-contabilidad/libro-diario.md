---
title: "Libro Diario"
sidebar_label: "Libro Diario"
sidebar_position: 15
---

El libro diario es un libro donde se anotan todas las transacciones por día y orden cronológico.

El libro diario lo puede encontrar en:

1. “Contabilidad”.
2. “Transacciones”.

Aquí podrá encontrar todas las operaciones de la empresa, incluyendo compras, ventas, pagos, gastos e ingresos. Los transacciones pueden ser ordenadas por ID de creación, Referencia, fecha, por nombre del beneficiario, por cuenta o por cantidad.

![imagen1](/img/reportes-de-contabilidad/libro-diario-1.jpg)

## API (llamadas desde sistemas externos)

### Listado del libro diario (datatables)

Devuelve las transacciones de un rango de fechas con soporte para paginacion y busqueda.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "f_start": "2018-09-01",
    "f_end": "2018-09-30",
    "start": 0,
    "length": 40
  }' \
  https://app.zauru.com/accounting/reports/daily_ledger_datatables.json
```

### Generar el Excel del libro diario

Inicia la generacion asincrona del Excel del libro diario de un mes. Devuelve el `zid` del proceso para monitorear su avance.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "month": 9,
    "year": 2018
  }' \
  https://app.zauru.com/accounting/reports/gen_daily_ledger.json
```

### Consultar el estado de generacion del libro diario

Recibe el `zid` devuelto al generar el libro diario y devuelve el estado, porcentaje y mensaje del proceso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_daily_ledger.json?zid=XXXX"
```

### Consultar el estado de generacion del libro diario consolidado

Recibe el `zid` del libro diario consolidado en proceso y devuelve su estado, porcentaje y, cuando termina, la URL a la que redirigir.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_consolidated_daily_ledger.json?zid=XXXX"
```
