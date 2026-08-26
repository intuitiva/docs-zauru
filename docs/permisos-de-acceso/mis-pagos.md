---
title: "Mis Pagos"
sidebar_label: "Mis Pagos"
sidebar_position: 6
---

Cuando su contador le pida los comprobantes de lo que ha pagado por Zauru, o cuando quiera ver de un vistazo cuánto y cuándo le ha facturado Zauru a lo largo del tiempo, esta es la página que necesita. Aquí encontrará el detalle de los pagos realizados, para tener su contabilidad al día sin buscar correos antiguos.

![Mis pagos](/img/permisos-de-acceso/mis-pagos-1.png)

Con esta página tiene a la vista todo lo que su entidad ha pagado a Zauru a lo largo del tiempo. Es el respaldo que le queda a mano cuando su contador le pide comprobantes o cuando quiere confirmar que un pago reciente ya quedó registrado.

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

Esto devolverá un JSON similar a este:
```json
[
  {}
]
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

Esto devolverá un JSON similar a este:
```json
{}
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

Esto devolverá un JSON similar a este:
```json
{}
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
