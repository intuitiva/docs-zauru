---
title: "Libro de Compras"
sidebar_label: "Libro de Compras"
sidebar_position: 13
---

El libro de compras y gastos es un documento que informa de todas las compras realizadas, así como de los gastos derivados de la actividad.

Para localizar el libro de compras nos vamos a:

  - Contabilidad
  - Reportes
  - Libro de compras

![Libro de Compras](/img/reportes-de-contabilidad/libro-de-compras-1.png)

## API (llamadas desde sistemas externos)

### Consultar el estado de generacion del libro de compras

El libro de compras se genera de forma asincrona. Este endpoint recibe el `zid` del reporte en proceso y devuelve su estado, porcentaje y, cuando termina, la URL a la que redirigir.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_purchase_ledger.json?zid=XXXX"
```
