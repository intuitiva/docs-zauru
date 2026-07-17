---
title: "Mis Pagos"
sidebar_label: "Mis Pagos"
sidebar_position: 6
---

El detalle de los pagos realizados a lo largo del tiempo a Zauru.![Mis pagos](/img/permisos-de-acceso/mis-pagos-1.png)

## API (llamadas desde sistemas externos)

### Obtener listado de facturaciones (pagos)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/billings.json
```

### Obtener detalle de una facturación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/billings/1.json
```

### Crear facturación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "notes": "Pago correspondiente a mayo 2024"
  }' \
  https://app.zauru.com/access_control/billings.json
```

### Exportar facturaciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/billings/export.csv
```
