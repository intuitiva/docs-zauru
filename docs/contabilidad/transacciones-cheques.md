---
title: "[Transacciones] Cheques emitidos (normales y post-fechados)"
sidebar_label: "[Transacciones] Cheques emitidos (normales y post-fechados)"
sidebar_position: 12
---

Este tutorial esta enfocado en la emisión de cheques. Cuando usted emite un cheque a un proveedor de productos o servicios, puede que el cheque se emita para cobrar el mismo día, o el cheque sea post-fechado, ambos casos se mostraran en los siguientes ejemplos.

> Emitir cheques para pagos también se puede realizar desde el módulo de compras con un [pago orden de compras](https://docs.zauru.com/compras/pagar-ordenes-de-compra-y-cargos-adicionales).
> Hay empresas que prefieren solo tener compras de mercadería en el módulo de compras por lo que exite este tutorial.

## Emitir un cheque Normal
Los pasos para emitir un cheque normal son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-cheques-1.jpg)


Le aparecerán los detalles para crear una nueva transacción, los campos que debe llenar para emitir un cheque son los siguientes:

a. Coloque el nombre del beneficiario al que va emitir el cheque.

b. Si es un nuevo beneficiario, presione “Agregar Nuevo Beneficiario” para crearlo.

* Recuerde colocar “Generar Impresión” si desea imprimir el cheque en el sistema.

c. Coloque una referencia para facilitar la búsqueda del cheque en el listado de transacciones.

d. Coloque la fecha en que se esta emitiendo el cheque.

e. Seleccione desde que cuenta se emite el cheque.

f. Coloque el monto del cheque.

g. Seleccione la cuenta de gasto para detallar que se esta pagando.

Para emitir el cheque seleccione “Crear nueva transacción” en la parte de abajo.

![imagen2](/img/contabilidad/transacciones-cheques-2.jpg)


## Emitir un cheque Post Fechado
Los pasos para emitir un cheque Post Fechado son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”

![imagen3](/img/contabilidad/transacciones-cheques-3.jpg)


Le aparecerán las opciones para crear un nueva transacción, los pasos para emitir el cheque post fechado son los mismo que un cheque normal, la diferencia es que en la fecha, debe colocar la fecha en la que se puede cobrar el cheque.

Luego de especificar todos los campos del cheque presione “Crear nueva transacción” para emitir el cheque.

![imagen4](/img/contabilidad/transacciones-cheques-4.png)

## API (llamadas desde sistemas externos)

### Crear una transaccion (emitir cheque)

El cheque se emite como una transaccion contable desde la cuenta monetaria hacia la cuenta de gasto. Use `printable: true` si desea imprimirlo como cheque y `endorsement_restriction: true` si el cheque requiere endoso restringido. Para un cheque post-fechado coloque en `date` la fecha en la que se puede cobrar.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "entry": {
      "payee_id": "1",
      "printable": true,
      "endorsement_restriction": false,
      "reference": "Cheque a proveedor",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "1000",
      "splits_attributes": {
        "0": {
          "reference": "Pago de mercaderia",
          "account_id": "2",
          "amount": "1000.0"
        }
      },
      "memo": "Cheque normal"
    }
  }' \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "printable": true,
  "invoice": null,
  "id_number": null,
  "reference": "Cheque a proveedor",
  "date": "2026-08-01",
  "income": false,
  "memo": "Cheque normal",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "1000.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": null,
  "pdf": null,
  "contract_id": null,
  "verified_at": null,
  "audited_at": null,
  "conciliation_id": null,
  "split_conciliation_id": null,
  "endorsement_restriction": false,
  "exempt": false,
  "small_taxpayer": false,
  "external_image_url": null,
  "reception_id": null,
  "inventory_audit_id": null,
  "source_doc_type_id": 3,
  "monthly_entry_source_doc_type_id": null,
  "cost_center_id": null
}
```
