---
title: "[Transacciones] Pagar Salarios (incluyendo prestaciones)"
sidebar_label: "[Transacciones] Pagar Salarios (incluyendo prestaciones)"
sidebar_position: 18
---

Este tutorial esta enfocado en el pago de salarios y prestaciones a los empleados.

## Pagar Salarios
Los pasos para emitir un cheque de pago de salarios son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-pagar-salarios-1.jpg)


Los campos a llenar para crear el pago de salario son los siguientes:

a. Coloque el nombre del empleado

b. Si quiere imprimir el cheque desde el sistema seleccione “Generar Impresión”.

c. Coloque una referencia para buscar el pago en el listado de transacción fácilmente.

d. Coloque la fecha en que se puede cobrar el cheque.

e. Coloque desde que cuenta se realizara el pago.

f. Coloque la cantidad por la que se va efectuar el cheque.

g. Coloque la cuenta de gasto “salarios”, también puede agregar mas cuentas en un mismo pago, como “comisiones”, “gasolina”, etc. para desglosar el pago de salario.

Para crear el cheque presione “Crear nueva transacción” en la parte de abajo.

![imagen2](/img/contabilidad/transacciones-pagar-salarios-2.jpg)


## Pagar prestaciones
Los pasos para emitir un cheque para pagar prestaciones son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva transacción”.

![imagen3](/img/contabilidad/transacciones-pagar-salarios-3.jpg)


Los campos a llenar para crear el pago de prestaciones son los siguientes:

a. Coloque el nombre del empleado al que se le va pagar.

b. Si quiere imprimir el cheque desde el sistema, seleccione “Generar Impresión”.

c. Coloque una referencia para encontrar el pago fácilmente en el listado de transacciones.

d. Coloque la fecha en la que se puede cobrar el cheque.

e. Seleccione desde que cuenta se efectúa el pago.

f. Coloque la cantidad por la que se realiza el cheque.

g. Seleccione la cuenta de prestaciones

![imagen4](/img/contabilidad/transacciones-pagar-salarios-4.jpg)

## API (llamadas desde sistemas externos)

### Crear una transaccion (pago de salarios y prestaciones)

El pago se emite desde la cuenta monetaria hacia las cuentas de gasto de salarios y prestaciones. Puede desglosar el pago con varios `splits_attributes` (salarios, comisiones, prestaciones, etc.).

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
      "reference": "Pago de salarios",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "4500",
      "splits_attributes": {
        "0": {
          "reference": "Salarios",
          "account_id": "2",
          "amount": "3000.0"
        },
        "1": {
          "reference": "Comisiones",
          "account_id": "3",
          "amount": "1500.0"
        }
      },
      "memo": "Salario del mes"
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
  "reference": "Pago de salarios",
  "date": "2026-08-01",
  "income": false,
  "memo": "Salario del mes",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "4500.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 2,
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
