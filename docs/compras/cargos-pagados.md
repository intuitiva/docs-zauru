---
title: "Cargos Pagados"
sidebar_label: "Cargos Pagados"
sidebar_position: 19
---

Este tutorial esta enfocado en la visualizacion y gestion de los cargos adicionales que ya han sido pagados.

Cuando usted paga un cargo adicional (como fletes, seguros, impuestos, etc.) asociado a una orden de compra o a un consolidado, ese cargo se traslada automaticamente a la seccion de "Cargos Pagados". En esta seccion puede consultar el historial de cargos pagados y realizar ediciones limitadas a la informacion de los mismos.

## Listar cargos pagados

Los pasos para ver los cargos pagados son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar la pestana "Cargos Pagados".

![imagen1](/img/compras/cargos-pagados-1.jpg)

Le aparecera un listado con todos los cargos que han sido pagados. En este listado puede:

- Filtrar por proveedor, fecha, termino de pago, consolidado y orden de compra.
- Buscar por numero de cargo, referencia o factura.
- Ordenar por cualquiera de las columnas mostradas.

## Ver detalles de un cargo pagado

Los pasos para ver los detalles de un cargo pagado son:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar "Cargos Pagados".
4. Seleccionar "Detalles" (El Ojo) en el cargo que desea consultar.

![imagen2](/img/compras/cargos-pagados-2.jpg)

En la vista de detalles de un cargo pagado podra encontrar:

a. Informacion general del cargo (numero, referencia, factura, fecha de emision).

b. Termino de pago acordado.

c. Datos del proveedor.

d. Detalle de los tipos de cargo aplicados y sus montos.

e. Orden de compra asociada (si aplica).

f. Consolidado asociado (si aplica).

g. Pagos realizados al cargo.

h. Partidas contables generadas.

i. Documentos electronicos asociados.

![imagen3](/img/compras/cargos-pagados-3.jpg)

## Editar informacion de un cargo pagado

Los cargos pagados permiten ediciones limitadas a ciertos campos informativos. No se pueden modificar los tipos de cargo, montos, ni la orden de compra asociada.

Los pasos para editar un cargo pagado son:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar "Cargos Pagados".
4. Seleccionar "Detalles" en el cargo que desea editar.
5. Seleccionar "Editar".

![imagen4](/img/compras/cargos-pagados-4.jpg)

Los campos que puede editar en un cargo pagado son:

a. Numero de cargo (id_number).

b. Numero de factura (invoice).

c. Referencia.

d. Fecha de emision (issue_date).

e. Memo o notas.

f. Etiquetas (tags).

![imagen5](/img/compras/cargos-pagados-5.jpg)

Al terminar de editar, presione "Actualizar" para guardar los cambios.

## API (llamadas desde sistemas externos)

### Ver detalles de un cargo pagado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/paid_charges/1.json
```

### Actualizar informacion de un cargo pagado
Permite editar campos informativos limitados (numero, factura, referencia, fecha, memo y etiquetas) sin disparar los callbacks contables.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "charge": {
      "id_number": "CARGO-00001",
      "invoice": "F-001",
      "reference": "Referencia actualizada",
      "issue_date": "2018-10-27",
      "memo": "Notas del cargo"
    }
  }' \
  https://app.zauru.com/purchases/paid_charges/1/shallow_update.json
```
