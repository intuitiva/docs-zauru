---
title: "[Transacciones] Contraseñas de pago a proveedores"
sidebar_label: "[Transacciones] Contraseñas de pago a proveedores"
sidebar_position: 13
---

Cada vez que un proveedor le entrega una factura al crédito, conviene dejarle por escrito cuándo se la va a pagar: ese comprobante es la contraseña de pago, y aquí verá cómo crearla e imprimirla. Le sirve para tener claras sus cuentas por pagar y para que el proveedor sepa exactamente cuándo esperar su dinero.

> Pagar servicios también se puede realizar desde el módulo de compras con una [orden de compras](https://docs.zauru.com/compras/orden-de-compras).
> Hay empresas que prefieren solo tener compras de mercadería en el módulo de compras por lo que exite este tutorial.

Los pasos para crear una contraseña de pago son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-contrasenas-de-pago-1.jpg)



Le aparecerán los detalles para crear una nueva transacción, a continuación vamos a ingresar la factura que nos brindo el proveedor y especificar la fecha en que le vamos a pagar para crear la contraseña de pago.

Los campos que debe llenar para emitir una contraseña de pago son los siguientes:

a. Coloque el nombre del proveedor.

b. Seleccione “Generar Impresión” para poder imprimir la contraseña de pago

c. Coloque una referencia de la factura que le esta brindando el proveedor.

d. Coloque el numero de factura que le brindo el proveedor.

e. Coloque la fecha de la factura que le brindo el proveedor.

f. Coloque la fecha en que se espera realizar el pago de la factura.

g. Seleccione la cuenta “Cuentas por pagar crédito”.

h. Coloque la cantidad de la factura.

i. Coloque la cuenta de gasto para especificar la factura o coloque Proveedores y Acreedores Locales.

Presione “Crear nueva transacción”.

![imagen2](/img/contabilidad/transacciones-contrasenas-de-pago-2.jpg)



Le aparecerá un mensaje notificándole que la transacción se creo exitosamente, para imprimir la contraseña de pago seleccione “Imprimir como Contraseña de Pago” en la parte inferior de la pagina.

![imagen3](/img/contabilidad/transacciones-contrasenas-de-pago-3.jpg)

Con la contraseña de pago creada e impresa, la factura del proveedor queda registrada en sus cuentas por pagar con la fecha de pago prometida. Cuando llegue ese día, registre el pago del cheque y salde la cuenta por pagar.

## API (llamadas desde sistemas externos)

### Crear una transaccion (contraseña de pago)

La contraseña de pago se registra como una transaccion contable desde la cuenta "Cuentas por pagar credito" hacia la cuenta de gasto, con los datos de la factura del proveedor y la fecha esperada de pago en `date`. Use `printable: true` para poder imprimirla como contraseña de pago.

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
      "reference": "Factura de proveedor",
      "invoice": "A-1020",
      "invoice_date": "2026-07-25",
      "date": "2026-08-15",
      "account_id": "1",
      "amount": "800",
      "splits_attributes": {
        "0": {
          "reference": "Proveedores y acreedores locales",
          "account_id": "2",
          "amount": "800.0"
        }
      },
      "memo": "Contraseña de pago"
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
  "invoice": "A-1020",
  "id_number": null,
  "reference": "Factura de proveedor",
  "date": "2026-08-15",
  "income": false,
  "memo": "Contraseña de pago",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "800.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": "2026-07-25",
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
