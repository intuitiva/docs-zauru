---
title: "[Transacciones] Depósitos en banco"
sidebar_label: "[Transacciones] Depósitos en banco"
sidebar_position: 15
---

Cada vez que le depositan a su cuenta monetaria, conviene registrarlo para que el saldo del banco en Zauru refleje la realidad. Puede ser un cliente que le abona una deuda o un préstamo, o sus puntos de venta que depositan el efectivo del día; aquí verá cómo dejar ese movimiento asentado.

Los pasos para registrar un deposito son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-depositos-en-banco-1.jpg)


Le aparecerán las opciones para crear una nueva transacciones, los campos que deberá llenar para hacer un depósito son los siguientes:

a. Coloque el nombre de la persona que le pago.

b. Coloque el numero de depósito.

c. Coloque la fecha en que le depositaron.

d. Aquí debe seleccionar desde donde le depositaron. Si le depositaron desde el efectivo de un punto de venta, seleccione su cuenta de efectivo. En este ejemplo se selecciona cuentas por cobrar, asumiendo que el cliente nos debía por alguna razón que no fuera una venta.

e. Coloque la cantidad que le depositaron.

f. Coloque la cuenta en la que se hizo el depósito.

Para crear el depósito seleccione “Crear nueva transacción” en la parte de abajo.

![imagen2](/img/contabilidad/transacciones-depositos-en-banco-2.jpg)

Con el depósito registrado, su cuenta de banco cuadra con lo que realmente le depositaron y el origen del dinero queda documentado. Al final del mes, esta información le facilitará la conciliación bancaria.

## API (llamadas desde sistemas externos)

### Crear una transaccion (deposito en banco)

El deposito se registra como una transaccion contable desde la cuenta de origen (por ejemplo "Cuentas por cobrar") hacia la cuenta monetaria donde se hizo el deposito. Coloque el numero del deposito en `reference`.

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
      "reference": "Deposito #1035",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "1500",
      "splits_attributes": {
        "0": {
          "reference": "Deposito en cuenta monetaria",
          "account_id": "2",
          "amount": "1500.0"
        }
      },
      "memo": "Deposito de cliente"
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
  "invoice": null,
  "id_number": null,
  "reference": "Deposito #1035",
  "date": "2026-08-01",
  "income": true,
  "memo": "Deposito de cliente",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "1500.0",
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
