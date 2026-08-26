---
title: "Cargos Pagados"
sidebar_label: "Cargos Pagados"
sidebar_position: 19
---

¿Ya pagó un flete, un seguro o un impuesto y quiere revisar cómo quedó registrado? Cada vez que usted paga un cargo adicional asociado a una orden de compra o a un consolidado, Zauru lo traslada automáticamente a la sección de "Cargos Pagados". Ahí encontrará el historial completo de cargos pagados para consultarlo cuando lo necesite, por ejemplo para comprobar un pago con su contador, y podrá corregir datos informativos como el número de factura, la referencia o las notas.

## Listar cargos pagados

Los pasos para ver los cargos pagados son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar la pestana "Cargos Pagados".

![imagen1](/img/compras/cargos-pagados-1.png)

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

![imagen2](/img/compras/cargos-pagados-2.png)

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

![imagen3](/img/compras/cargos-pagados-3.png)

## Editar informacion de un cargo pagado

A veces, después de pagar, se da cuenta de que el número de factura quedó mal o quiere agregar una nota para su archivo. Los cargos pagados permiten ediciones limitadas a ciertos campos informativos, sin tocar los montos ni la contabilidad; por eso no se pueden modificar los tipos de cargo, los montos ni la orden de compra asociada.

Los pasos para editar un cargo pagado son:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar "Cargos Pagados".
4. Seleccionar "Detalles" en el cargo que desea editar.
5. Seleccionar "Editar".

![imagen4](/img/compras/cargos-pagados-4.png)

Los campos que puede editar en un cargo pagado son:

a. Numero de cargo (id_number).

b. Numero de factura (invoice).

c. Referencia.

d. Fecha de emision (issue_date).

e. Memo o notas.

f. Etiquetas (tags).

![imagen5](/img/compras/cargos-pagados-5.png)

Al terminar de editar, presione "Actualizar" para guardar los cambios.

Con esto ya puede mantener ordenado el historial de cargos pagados sin alterar su contabilidad. Recuerde que los cargos que todavía están pendientes de pago se manejan desde la sección de Cargos, y pasarán a esta lista automáticamente en cuanto usted los pague.

## API (llamadas desde sistemas externos)

### Listar cargos pagados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/paid_charges.json
```

Esto devolverá un JSON similar a este:
```json
[
  {}
]
```

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

Esto devolverá un JSON similar a este:
```json
{}
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "19422",
  "zid": "3771",
  "id_number": null,
  "reference": "LICENCIA MAGA",
  "purchase_order_id": "255935",
  "consolidate_id": null,
  "issue_date": "2022-01-10",
  "expected_payment": "2022-01-10",
  "charge_term_id": "300",
  "amount": "240.97",
  "due": "240.97",
  "payee_id": "97109",
  "memo": null,
  "image": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "184",
  "creator_id": "357",
  "updater_id": "357",
  "created_at": "2022-02-01 15:28:12.241454",
  "updated_at": "2022-02-01 15:28:12.241454",
  "charge_details_count": "1",
  "tariffs_count": "0",
  "cost_amount": "240.97",
  "invoice": "16291229",
  "discharge_details_count": "0",
  "taxable": false,
  "external_image_url": null,
  "local_exchange_amount": "240.97",
  "local_exchange_cost_amount": "240.97",
  "not_included_vat": null,
  "pdf": null,
  "reception_id": null
}
```
