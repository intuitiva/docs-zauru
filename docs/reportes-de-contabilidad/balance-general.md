---
title: "Balance General"
sidebar_label: "Balance General"
sidebar_position: 1
---

El balance general es un documento financiero que representa la situación de una empresa en un momento determinado. Nos proporciona una descripción general de los activos, pasivos y capital contable.

Los pasos para ver el balance general son:

1. Ir a “Contabilidad.
2. Seleccionar “Reportes”.
3. Seleccionar “Balance General”.

Acá puede ver ver su balance general global o puede seleccionar los detalles por mes.

![captura conta1](/img/reportes-de-contabilidad/balance-general-1.png)!

## API (llamadas desde sistemas externos)

### Consultar el estado de generacion del balance en moneda local

El balance en moneda local se genera de forma asincrona. Este endpoint recibe el `zid` del reporte en proceso y devuelve su estado, porcentaje y, cuando termina, la URL a la que redirigir.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_balance_sheet_in_local_currency.json?zid=XXXX"
```
