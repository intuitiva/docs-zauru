---
title: "Registros de Acceso"
sidebar_label: "Registros de Acceso"
sidebar_position: 4
---

Cada click que un usuario hace en el sistema queda resgistrado para que usted pueda comprobar si un usuario en verdad hizo o no hizo algun movimiento o transaccion.

Nuestro registro histórico de acceso tiene una duración de 48 horas, luego de eso la información se borra.

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

### Obtener detalle de un registro de acceso
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/access_logs/1.json
```
