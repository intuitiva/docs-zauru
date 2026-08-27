---
title: "Devoluciones"
sidebar_label: "Devoluciones"
sidebar_position: 3.4
---

Una devolución revierte una entrega que ya se realizó: desaparecen las existencias de la bodega destino y regresan a la bodega origen. Se usa cuando una entrega llegó con errores y no se puede editar, ya que las entregas solo permiten modificar campos secundarios.

## Devolver una entrega

Los pasos para devolver una entrega son:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Abrir la entrega que desea devolver.
4. Seleccionar la opción de devolver.

![imagen5](/img/inventarios/envios-5.jpg)

Al devolver una entrega:

- Las existencias entregadas desaparecen de la bodega destino.
- Los productos regresan a la bodega origen.
- El envío pasa a la pestaña "Entregas Devueltas".
- Los envíos devueltos no se pueden recuperar.

Si el envío tenía documento electrónico emitido, consulte la "Respuesta Certificada del Almacenaje Externo de la Anulación" antes de anular el documento en el sistema de facturación electrónica.

## Ver entregas devueltas

Para ver el historial de entregas devueltas:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Seleccionar "Entregas Devueltas".

La tabla muestra las columnas "ID", "Reservación #", "Referencia", "Necesita Transporte", "Entrega Estimada", "Origen", "Destino", "Tipo" e "Items".

## API (llamadas desde sistemas externos)

### Devolver una entrega
Convierte el envío en devuelto y regresa las existencias a la bodega origen.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/deliveries/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
