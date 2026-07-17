---
title: "Libro Mayor"
sidebar_label: "Libro Mayor"
sidebar_position: 19
---

El libro mayor es un libro que clasifica las operaciones por cuentas de manera que se puede ver el detalle de los movimientos y el saldo total de cada cuenta.

Los pasos para ver el libro mayor son:

1. Ir a “Contabilidad”.
2. Seleccionar “Cuentas”.
3. Seleccione la cuenta que desea ver.
4. Click sobre la pestaña “Balance”.

![imagen2](/img/reportes-de-contabilidad/libro-mayor-1.jpg)
![imagen3](/img/reportes-de-contabilidad/libro-mayor-2.jpg)

## API (llamadas desde sistemas externos)

### Consultar el estado de generacion del libro mayor

El libro mayor se genera de forma asincrona. Este endpoint recibe el `zid` del reporte en proceso y devuelve su estado, porcentaje y, cuando termina, la URL a la que redirigir.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_general_ledger.json?zid=XXXX"
```

### Consultar el estado de generacion del libro mayor diario

Version diaria del libro mayor, tambien generada de forma asincrona. Recibe el `zid` del reporte en proceso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/accounting/reports/check_daily_general_ledger.json?zid=XXXX"
```
