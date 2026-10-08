---
title: "Balance de Cuenta Mensual"
sidebar_label: "Balance de Cuenta Mensual"
sidebar_position: 7
---

¿Quiere seguirle el rastro a una cuenta contable específica, como si revisara su estado de cuenta bancario? El balance de cuenta mensual le muestra los movimientos de la cuenta que está consultando, y puede consultarlo hasta un máximo de seis meses.

Los pasos para ver el balance de cuenta mensual son:

  - Contabilidad
  - Reportes
  - Balance de cuenta mensual

Acá puede ver ver su balance de cuenta mensual global o puede seleccionar los detalles por mes.

![balance de cuenta mensual](/img/reportes-de-contabilidad/balance-de-cuenta-mensual-1.png)

El reporte muestra el estado de cuenta mensual de una cuenta contable especifica, similar a un estado de cuenta bancario.

**Parametros**:

- **Cuenta**: cuenta contable a consultar.
- **Mes y año**: periodo inicial.
- **Cantidad de meses**: cuantos meses mostrar.
- **Mostrar dolares**: si la cuenta maneja multiples monedas, muestra equivalente en dolares.

**Informacion por transaccion**:

- Fecha.
- Documento.
- Descripcion / beneficiario.
- Debitos (cargos).
- Creditos (abonos).
- Saldo (balance corrido).

Con este desglose puede revisar transacción por transacción, conciliar saldos y detectar cualquier movimiento que no cuadre antes de cerrar el mes.

## API (llamadas desde sistemas externos)

### Obtener el balance mensual de una cuenta

Se puede obtener el estado de cuenta mensual de la cuenta indicada por `account_id`, para el periodo de `year` y `month` (números enteros). El parámetro `months` define cuántos meses mostrar y `show_dolars` acepta `1` para incluir el equivalente en dólares.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/monthly_account_balance.json?account_id=1&year=2026&month=8&months=1&show_dolars=0"
```

Esto devolverá un JSON similar a este:
```json
{
  "account": {
    "id": 1,
    "code": "1101",
    "name": "Caja",
    "currency": {
      "id": 1,
      "code": "GTQ",
      "prefix": "Q"
    }
  },
  "start": "2026-08-01",
  "end": "2026-08-31",
  "months": 1,
  "debit": 0.0,
  "accredit": 1250.0,
  "gtq_usd_banguat": false,
  "show_dolars": false,
  "entries": [
    {
      "id": 10,
      "zid": 12,
      "id_number": 4,
      "reference": "Pago de factura",
      "invoice": "1",
      "payment": "1 Factura de ejemplo",
      "memo": "",
      "tags": [],
      "date": "2026-08-10",
      "payee": {
        "id": 5,
        "name": "Cliente Ejemplo, S.A.",
        "tin": "44314-9"
      },
      "accounts": [
        {
          "id": 1,
          "code": "1101",
          "name": "Caja"
        }
      ],
      "debit": 0.0,
      "accredit": 1250.0,
      "balance": 1250.0
    }
  ]
}
```

Las transacciones vienen ordenadas de la más reciente a la más antigua, con el saldo corrido en `balance`.
