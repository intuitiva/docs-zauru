---
title: "[Transacciones] Gastos de insumos sin control de inventario"
sidebar_label: "[Transacciones] Gastos de insumos sin control de inventario"
sidebar_position: 16
---

Este tutorial esta enfocado en realizar transacciones contables de compra de insumos para la oficina que no registran inventario, como por ejemplo, papel higiénico, hojas de papel, clips, folders, etc. Los pasos para registrar este tipo de gastos son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-gastos-de-insumos-1.jpg)


Le aparecerán las opciones para crear una nueva transacciones, los campos que deberá llenar para crear una nueva transacción de gastos de insumos de oficina son los siguientes:

a. Aquí deberá colocar el nombre del proveedor, si es un nuevo proveedor, seleccione “Agregar Nuevo Beneficiario”.

b. Aquí puede colocar una referencia que le servirá para encontrar la transacción mas fácilmente en el listado de transacciones.

c. Si en la compra de insumos le dieron factura, coloque el numero de la factura, si no, deje este campo en blanco.

d. Si en la compra de insumos le dieron factura, coloque la fecha de la factura, si no, deje este campo en blanco.

e. Coloque la fecha en que se gasto.

f. Seleccione la cuenta con la que se pago la compra, en el ejemplo seleccionamos “caja chica” pero el pago pudo haber sido desde una cuenta de banco, o desde la caja chica de un empleado.

g. Coloque la cantidad por la que fue el gasto.

h. Aquí deberá seleccionar la cuenta del gasto, en el ejemplo seleccionamos la cuenta “Insumos de Oficina” para registrar este gasto, pero usted podría crear cuentas mas especificas de gastos como “Lapiceros”, “Papel Higienico”, etc. Para llevar un control mas detallado de sus gastos.

Para crear el gasto seleccione “Crear Transacción” en la parte de abajo.

![imagen2](/img/contabilidad/transacciones-gastos-de-insumos-2.jpg)

## API (llamadas desde sistemas externos)

### Crear una transaccion (gasto de insumos de oficina)

El gasto se registra como una transaccion contable desde la cuenta con la que se pago (caja chica, banco, etc.) hacia la cuenta de gasto de insumos, con los datos de la factura si el proveedor la entrego.

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
      "reference": "Insumos de oficina",
      "invoice": "C-30",
      "invoice_date": "2026-08-01",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "75",
      "splits_attributes": {
        "0": {
          "reference": "Insumos de Oficina",
          "account_id": "2",
          "amount": "75.0"
        }
      },
      "memo": "Papeleria y utiles"
    }
  }' \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "printable": false,
  "invoice": "C-30",
  "id_number": null,
  "reference": "Insumos de oficina",
  "date": "2026-08-01",
  "income": false,
  "memo": "Papeleria y utiles",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "75.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": "2026-08-01",
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
