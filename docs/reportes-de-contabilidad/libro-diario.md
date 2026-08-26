---
title: "Libro Diario"
sidebar_label: "Libro Diario"
sidebar_position: 13
---

Si quiere recorrer la contabilidad de su empresa transacción por transacción, o revisar el detalle de una operación de una fecha específica, el libro diario es el lugar para empezar. Aquí se anotan todas las operaciones por día y en orden cronológico.

El libro diario lo puede encontrar en:

1. “Contabilidad”.
2. “Transacciones”.

Aquí podrá encontrar todas las operaciones de la empresa, incluyendo compras, ventas, pagos, gastos e ingresos. Los transacciones pueden ser ordenadas por ID de creación, Referencia, fecha, por nombre del beneficiario, por cuenta o por cantidad.

![imagen1](/img/reportes-de-contabilidad/libro-diario-1.jpg)

Es el registro cronologico de todas las transacciones contables del mes y la base de la contabilidad, ya que permite verificar que todas las partidas esten cuadradas.

**Parametros**:

- **Mes y año**: mes a reportar.

**Informacion por transaccion**:

- Numero de documento.
- Fecha.
- Beneficiario.
- Cuenta debitada.
- Cuenta acreditada.
- Monto.
- Debe/Haber en moneda local y extranjera.
- Referencia.
- Numero de factura.

**Versiones**:

- **Libro diario estandar**: navegable con DataTables, permite busqueda y paginacion.
- **Libro diario consolidado**: agrupa por tipo de documento y cuenta.
- **Descarga Excel**: genera archivo Excel del libro diario completo.

Con estas versiones podrá revisar el mes a su ritmo y descargar el detalle completo para compartirlo con su contador.

## API (llamadas desde sistemas externos)

### Listado del libro diario (DataTables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d 'f_start=2026-08-01&f_end=2026-08-31&draw=1&start=0&length=40&search[value]=&order[0][column]=1&order[0][dir]=asc' \
  https://app.zauru.com/accounting/reports/daily_ledger_datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 1,
  "recordsTotal": 120,
  "recordsFiltered": 120,
  "data": [
    {
      "zid": "1",
      "date": "01/08/2026",
      "reference": "FAC-0001",
      "code": "1.01",
      "account": "Caja",
      "memo": "Pago a proveedor",
      "owe": "",
      "have": "Q1,500.00",
      "second_currency": "",
      "exchange_rate": ""
    },
    {
      "zid": "2",
      "date": "02/08/2026",
      "reference": "FAC-0002",
      "code": "4.01",
      "account": "Ventas",
      "memo": "Venta de mercaderia",
      "owe": "Q2,000.00",
      "have": "",
      "second_currency": "",
      "exchange_rate": ""
    }
  ]
}
```