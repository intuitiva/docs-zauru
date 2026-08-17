---
title: "Registros de Acceso"
sidebar_label: "Registros de Acceso"
sidebar_position: 4
---

¿Anularon una factura y nadie sabe quién fue? Los registros de acceso le cuentan exactamente qué hizo cada usuario en Zauru, movimiento por movimiento. Cada clic que un usuario hace en el sistema queda registrado para que usted pueda comprobar si en verdad hizo o no alguna transacción. Tenga presente que el registro histórico de acceso tiene una duración de 48 horas: después de ese tiempo la información se borra, así que conviene revisar los movimientos mientras aún están disponibles.

La forma de ver los registros de acceso de los usuarios es la siguiente:

1. Ir a “Control de Acceso”.
2. Seleccionar “Registros de Acceso”.
3. Seleccionar el usuario que desea ver sus registros de acceso.
4. Presione “Cambiar Usuario”.

![imagen13](/img/permisos-de-acceso/registros-de-acceso-1.jpg)

5. Seleccione desde que fecha quiere realizar la busqueda de registros.
6. Seleccione hasta que fecha quiere realizar la busqueda de registros.
7. Presione “Filtrar por fecha” para que se filtren las fechas de registros indicadas.

Se desplegaran todos los movimientos y transacciones que ha realizado este usuario en la fecha que se especifico.

![imagen14](/img/permisos-de-acceso/registros-de-acceso-2.jpg)

Con esto puede comprobar, movimiento por movimiento, lo que un usuario hizo en el sistema. Como los registros solo se conservan 48 horas, conviene revisarlos pronto cuando necesite aclarar algo, y ajustar los permisos del usuario si encuentra algo fuera de lugar.

## API (llamadas desde sistemas externos)

### Obtener listado de registros de acceso
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/access_logs.json
```

Esto devolverá un JSON similar a este:
```json
[
  {}
]
```

### Obtener detalle de un registro de acceso
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/access_logs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
