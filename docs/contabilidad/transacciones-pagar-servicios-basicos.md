---
title: "[Transacciones] Pagar servicios básicos"
sidebar_label: "[Transacciones] Pagar servicios básicos"
sidebar_position: 19
---

> Pagar servicios también se puede realizar desde el módulo de compras con una [orden de compras](https://docs.zauru.com/compras/orden-de-compra)
> Hay empresas que prefieren solo tener compras de mercadería en el módulo de compras por lo que exite este tutorial.

## (Agua, Luz, Teléfono, etc.)
Este tutorial esta basado en como hacer pagos de servicios básicos como el agua, luz, teléfono, internet, etc. Existen dos formas de hacerlo, una forma es pagando al momento de recibir la factura, y la otra forma es recibir la factura y días después, hacer el pago. Se ejemplificaran las dos formas en el siguiente tutorial.

### Pagar servicio básicos al contado
En la siguiente imagen se muestra como crear una nueva transacción contable para hacer el pago de una factura a un proveedor al contado, esto quiere decir, que el pago se hace al momento que se da la factura. Los pasos son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilidad/transacciones-pagar-servicios-basicos-1.jpg)


Le aparecerán las opciones para crear una nueva transacción contable. En la siguiente imagen se muestra como crear un cheque para pagar una factura de servicio telefónico. Los pasos son los siguientes:

1. Coloque el nombre del proveedor al que va efectuar el cheque.
2. Si es un nuevo proveedor, deberá crearlo antes de continuar.  Presione el botón de “Agregar Nuevo Beneficiario” para agregar los datos del nuevo proveedor.
3. Para poder imprimir este cheque seleccione la casilla de “Generar Impresión”.
4. En este campo podrá colocar una referencia, que le servirá a usted para poder encontrar su pago con mayor facilidad en el listado de transacciones.
5. Coloque el numero de factura que esta pagando.
6. Coloque la fecha en que se emitió la factura.
7. Coloque la fecha en que se realizara el pago, la fecha que coloque aquí será la que se imprimirá sobre el cheque.
8. Seleccione la cuenta monetaria desde la cual se emitirá el cheque.
9. Coloque la cantidad por la que va efectuar el pago.
10. Seleccione la cuenta de gasto que va pagar, en este ejemplo se coloca teléfono porque estamos pagando una factura de servicio telefónico.
11. Presione “Crear transacción” para emitir el cheque.

![imagen2](/img/contabilidad/transacciones-pagar-servicios-basicos-2.jpg)


Le deberá aparecer un mensaje de éxito notificándole que la transacción fue creada exitosamente. Para imprimir el cheque creado presione el botón de “Imprimir como Cheque”.

![imagen3](/img/contabilidad/transacciones-pagar-servicios-basicos-3.jpg)


Le aparecerá una nueva ventana con el documento a imprimir. Para imprimir presione CTRL + P y seleccione la impresora a la que se va enviar la impresión.


![imagen4](/img/contabilidad/transacciones-pagar-servicios-basicos-4.jpg)


## Pagar servicios de proveedores que nos dan crédito
La segunda forma de pagar los servicios básicos se utiliza cuando un proveedor nos da una factura al crédito y nosotros emitimos el cheque días después de que recibimos la factura.

En la segunda manera de hacer pagos se ingresa primero la factura del proveedor, desde cuentas por pagar hacia el gasto, y luego cuando se emite el cheque se hace una transacción desde la cuenta monetaria hacia cuentas por pagar, y así se saldan las cuentas. En la siguiente imagen se ejemplifica este proceso, los pasos para ingresar la factura son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen5](/img/contabilidad/transacciones-pagar-servicios-basicos-5.jpg)


Le aparecerán las opciones para crear una nueva transacción, los pasos para ingresar una factura al crédito de un proveedor son los siguientes:

1. Coloque el nombre del proveedor existente.
2. Si es un nuevo proveedor deberá crearlo antes de ingresar la factura, seleccione “Agregar Nuevo Beneficiario” para ingresar los datos de su proveedor.
3. En este campo podrá colocar una referencia, que le servirá a usted para poder encontrar su pago con mayor facilidad en el listado de transacciones.
4. Coloque el numero de factura que esta ingresando.
5. Coloque la fecha en que se emitió la factura.
6. Coloque la fecha en que se espera realizar el pago de esta factura.
7. Seleccione la cuenta “Cuentas por pagar Crédito”.
8. Coloque el valor de la factura.
9. Seleccione la cuenta del gasto que esta haciendo, en este ejemplo se coloco “teléfono” porque se esta ingresando una factura de servicio telefónico.
10. Seleccione “Crear transacción” para crear la factura.

![imagen6](/img/contabilidad/transacciones-pagar-servicios-basicos-6.jpg)


Cuando llegue el momento de hacer el pago al proveedor, deberá emitir un cheque para pagar la factura que ingreso previamente, los pasos para hacerlo son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen7](/img/contabilidad/transacciones-pagar-servicios-basicos-7.jpg)



Le aparecerán las opciones para crear una nueva transacción, los pasos para crear un cheque para pagar una factura previamente ingresada son los siguientes:

1. Coloque el nombre del proveedor.
2. Seleccione la casilla de “Generar Impresión” para poder imprimir este cheque.
3. En este campo podrá colocar una referencia, que le servirá a usted para poder encontrar su pago con mayor facilidad en el listado de transacciones.
4. Coloque el numero de factura que esta pagando.
5. Coloque la fecha en que se emitió la factura.
6. Coloque la fecha en que se realizara el pago, la fecha que coloque aquí será la que se imprimirá sobre el cheque.
7. Seleccione la cuenta monetaria desde la cual se emitirá el cheque.
8. Coloque la cantidad por la que va efectuar el pago.
9. Aquí deberá colocar la cuenta “Cuentas por pagar crédito” para saldar la factura que se creo anteriormente, que salía desde esta cuenta.
10. Presione “Crear transacción” para emitir el cheque.

![imagen8](/img/contabilidad/transacciones-pagar-servicios-basicos-8.jpg)


Le deberá aparecer un mensaje de éxito notificándole que se creo la transacción exitosamente. Para imprimir el cheque presione el botón de “Imprimir como cheque”.

![imagen9](/img/contabilidad/transacciones-pagar-servicios-basicos-9.jpg)

## API (llamadas desde sistemas externos)

### Crear una transaccion (pago de servicio al contado)

El pago al contado se registra desde la cuenta monetaria hacia la cuenta de gasto del servicio, con los datos de la factura.

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
      "reference": "Pago de telefono",
      "invoice": "F-500",
      "invoice_date": "2026-07-28",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "250",
      "splits_attributes": {
        "0": {
          "reference": "Telefono",
          "account_id": "2",
          "amount": "250.0"
        }
      },
      "memo": "Factura de telefono al contado"
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
  "invoice": "F-500",
  "id_number": null,
  "reference": "Pago de telefono",
  "date": "2026-08-01",
  "income": false,
  "memo": "Factura de telefono al contado",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "250.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": "2026-07-28",
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

### Crear una transaccion (factura de servicio al credito)

Cuando el proveedor da credito, primero se ingresa la factura desde la cuenta "Cuentas por pagar credito" hacia la cuenta de gasto. El pago posterior es una transaccion desde la cuenta monetaria hacia "Cuentas por pagar credito".

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
      "reference": "Factura de telefono al credito",
      "invoice": "F-501",
      "invoice_date": "2026-07-28",
      "date": "2026-08-15",
      "account_id": "3",
      "amount": "250",
      "splits_attributes": {
        "0": {
          "reference": "Telefono",
          "account_id": "2",
          "amount": "250.0"
        }
      },
      "memo": "Factura al credito"
    }
  }' \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 2,
  "zid": 2,
  "printable": false,
  "invoice": "F-501",
  "id_number": null,
  "reference": "Factura de telefono al credito",
  "date": "2026-08-15",
  "income": false,
  "memo": "Factura al credito",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 3,
  "amount": "250.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": "2026-07-28",
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
