---
title: "[Transacciones] Pagar y cobrar a un beneficiario en una sola transacción"
sidebar_label: "[Transacciones] Pagar y cobrar a un beneficiario en una sola transacción"
sidebar_position: 20
---

Este tutorial esta enfocado en pagar y cobrarle a un beneficiario en la misma transacción.
Puede suceder el caso en el que usted le haya hecho un préstamo al empleado, y se lo vaya descontando mes a mes de su salario. No hay necesidad de hacer dos transacciones para registrar este movimiento. Se mostrara en el siguiente ejemplo como hacerlo en un movimiento.

Suponga que tiene un empleado que devenga un salario de Q3,000 mensuales mas comisiones. El empleado le solicita a usted un préstamo de Q6,000 quetzales, y usted se lo va descontar de su salario en 12 pagos.

El mes de Julio el empleado generó Q1,500 en comisiones, que sumado con su salario da un total de Q4,500. Usted le hará un cheque por Q4,000  y  especificara que son Q4500 de salario y comisiones menos Q500 del préstamo.

Los pasos para hacer esta transacción son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-pagar-y-cobrar-a-un-beneficiario-1.jpg)


Le aparecerán las opciones para crear un nueva transacción, los campos que deberá llenar son los siguientes:

a. Coloque el nombre del empleado al que le va pagar

b. Marque “Generar Impresión” si quiere imprimir el cheque desde su sistema.

c. Coloque una breve referencia para facilitar la búsqueda del cheque en el listado de transacciones.

d. Coloque la fecha en que se puede cobrar el cheque.

e. Seleccione desde que cuenta monetaria se va emitir el pago.

f. Coloque la cantidad por la que se va emitir el pago, en este caso solo se le van a pagar Q4,000 no los Q4,500 que es su salario, porque vamos a descontarle 500 del préstamo que se le dio.

g. Aquí deberá colocar el salario completo del empleado, que en este ejemplo son Q3,000

h. Aquí deberá colocar el total de comisiones, que en este ejemplo son Q,1,500, luego deberá colocar el descuento en negativo. En el ejemplo se ve que se va aplicar -500 a la cuenta “Cuentas por cobrar a empleados” para descontarle el préstamo que se le hizo al empleado.

Por ultimo haga click sobre “Crear nueva transacción” para emitir el cheque ya con el descuento.

![imagen2](/img/contabilidad/transacciones-pagar-y-cobrar-a-un-beneficiario-2.jpg)

## API (llamadas desde sistemas externos)

### Crear una transaccion (pagar y cobrar en un solo movimiento)

En una sola transaccion puede pagar el salario (splits positivos) y descontar una cuota de prestamo (split con monto negativo). El monto de la transaccion (`amount`) es el total neto del cheque y la suma de los splits debe coincidir.

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
      "reference": "Pago con descuento de prestamo",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "4000",
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
        },
        "2": {
          "reference": "Descuento de prestamo",
          "account_id": "4",
          "amount": "-500.0"
        }
      },
      "memo": "Pago con descuento de prestamo al empleado"
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
  "reference": "Pago con descuento de prestamo",
  "date": "2026-08-01",
  "income": false,
  "memo": "Pago con descuento de prestamo al empleado",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "4000.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 3,
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
