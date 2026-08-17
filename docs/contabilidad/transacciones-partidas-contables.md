---
title: "Transacciones (partidas contables)"
sidebar_label: "Transacciones (partidas contables)"
sidebar_position: 11
---

Cada vez que entra o sale dinero sin pasar por una venta o una compra —un ajuste, un gasto menor, un traslado entre cuentas—, necesita una transacción contable que lo registre. La transacción es el único documento que mueve los saldos entre cuentas: por ser un sistema de partida doble, el dinero no aparece ni desaparece, tiene que proceder de alguna cuenta para acreditarse en otra cuenta.

## Listado de transacciones

El listado de transacciones permite:

![Listado de transacciones contables con filtros y nube de etiquetas](/img/contabilidad/transacciones-partidas-contables-1.png)

- Filtrar por tipo: **Ingresos**, **Egresos**, **Transferencias** o **Todos**.
- Filtrar por etiqueta (tag) usando la nube de etiquetas.
- Filtrar por rango de fechas (fecha de transaccion o fecha de creacion).
- Buscar por texto (referencia, numero de documento, beneficiario, etc.).

## Crear una transaccion

Para crear una transaccion se puede ingresar desde "Transacciones" o desde "Cuentas" y acreditar o debitar de una cuenta.

![Formulario de creación de nueva transacción con campos y splits](/img/contabilidad/transacciones-partidas-contables-2.png)

### Campos de la transaccion

- **Beneficiario**: persona o empresa asociada a la transaccion. Puede crear un nuevo beneficiario desde el mismo formulario.
- **Contrato**: opcional, asociar la transaccion a un contrato existente.
- **Imprimible**: marcar si desea poder imprimir la transaccion como cheque o comprobante.
- **Restriccion de endoso**: para cheques que requieren endoso restringido.
- **Referencia**: texto para identificar la transaccion en listados.
- **Factura**: numero de factura asociada.
- **Fecha de factura**: fecha de emision de la factura.
- **Fecha**: fecha de la transaccion contable.
- **Cuenta principal**: cuenta desde donde sale o entra el dinero.
- **Centro de costo**: proyecto o departamento al que se asigna la transaccion.
- **Tipo de documento fuente mensual**: numeracion secuencial del mes.
- **Monto**: cantidad de la transaccion.
- **Splits (desgloses)**: permite distribuir el monto entre multiples cuentas. Se pueden agregar mas filas con los botones "+", "+2" o "+5".
- **IVA**: el boton "+IVA" agrega automaticamente un split con el calculo del IVA, basado en la configuracion de la entidad.
- **Etiquetas**: tags para clasificar la transaccion.
- **Delegados**: usuarios a quienes se les asigna seguimiento de la transaccion.
- **Razon de tarea**: motivo de la delegacion.
- **Memo**: notas internas sobre la transaccion.
- **Imagen**: adjuntar una imagen del documento (factura, recibo, etc.).
- **PDF**: adjuntar archivo PDF.

### Ordenes de compra asociadas

Al crear una transaccion, puede asociarla a una orden de compra existente, lo que vincula el pago con la compra.

### Notas de credito asociadas

Tambien se puede asociar una transaccion a una nota de credito para registrar su aplicacion.

### Planillas asociadas

Las transacciones pueden vincularse a planillas de sueldos para registrar el pago de salarios.

### Previsualizacion

Antes de crear la transaccion, puede hacer clic en "Previsualizar" para verificar que todos los datos y calculos sean correctos.

### Historial de cambios (bitacora)

Al editar una transaccion se genera una bitacora del historial de la misma en el detalle de la transaccion. Esto con el fin de no perder trazabilidad de los cambios que se han hecho en la transaccion. En el detalle de la transaccion, en la seccion "Historial" puede ver:

![Detalle de una transacción con sección de historial y botones de acción](/img/contabilidad/transacciones-partidas-contables-3.png)

- El numero de revision.
- El tipo de operacion (creacion, edicion, verificacion, auditoria).
- La fecha y hora del cambio.
- Los valores anteriores de cada campo.

## Editar una transaccion

El formulario es igual que al crear una transaccion. Al guardar se registra automaticamente en la bitacora.

## Borrar una transaccion

El borrar una transaccion la eliminara del sistema permanentemente, devolviendo los saldos a las cuentas pertinentes. Si se quiere anular una transaccion pero que no se elimine de la contabilidad, necesita editarla y colocar los montos a cero.

## Verificar una transaccion

La verificacion bloquea una transaccion para que no pueda ser editada ni borrada. Es util cuando ya se ha conciliado contra un estado de cuenta o cuando se ha cerrado el periodo contable.

Para verificar una transaccion:
1. Abra el detalle de la transaccion.
2. Haga clic en el boton "Verificar".

La transaccion mostrara un icono de verificacion y ya no podra ser modificada.

## Auditar una transaccion

La auditoria es un segundo nivel de bloqueo. Una transaccion auditada no puede ser:
- Editada
- Borrada
- Des-verificada

Para auditar una transaccion:
1. Abra el detalle de la transaccion.
2. Haga clic en el boton "Auditar".

La transaccion mostrara un icono de auditoria. Una vez auditada, solo puede ser leida.

## Imprimir una transaccion

### Impresion individual

Desde el detalle de la transaccion, haga clic en "Imprimir". El sistema abrira una vista de impresion usando la plantilla configurada para el tipo de documento. Puede imprimir como:
- Cheque
- Contrasena de pago
- Comprobante contable

### Impresion multiple

Permite imprimir varias transacciones a la vez:
1. En el listado de transacciones, marque las que desea imprimir.
2. Haga clic en "Imprimir seleccionados".
3. Se abrira una vista con todas las transacciones seleccionadas.

### Descargar PDF multiple

Similar a la impresion multiple, pero genera un archivo PDF para descargar en lugar de mostrar en pantalla. Util para archivar o enviar por correo.

Con esto ya domina el documento más importante de la contabilidad: cada movimiento de su empresa puede quedar registrado, revisado y respaldado en papel o en PDF. Verificar y auditar las transacciones importantes es el paso que sigue para proteger su información contra ediciones accidentales.

## API (llamadas desde sistemas externos)

### Crear transaccion SIN imagen
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "entry": {
      "contract_id": "",
      "payee_id": "1",
      "reference": "prueba sin imagen",
      "invoice": "# de factura(texto)",
      "invoice_date": "2018-09-29",
      "date": "2018-09-28",
      "account_id": "1",
      "amount": "100",
      "splits_attributes": {
        "0": {
          "reference": "primer split",
          "account_id": "2",
          "amount": "90.0"
        },
        "1": {
          "reference": "segundo split",
          "account_id": "3",
          "amount": "10"
        }
      },
      "memo": "memo"
    }
  }' \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "date": [
    "Fecha mínima 2020-12-31"
  ]
}
```

### Crear transaccion CON imagen
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "Content-Type: multipart/form-data" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -F "entry[payee_id]=1" \
  -F "entry[reference]=prueba con imagen" \
  -F "entry[invoice]=# de factura (texto)" \
  -F "entry[date]='2018-09-28'" \
  -F "entry[date]='2018-09-28'" \
  -F "entry[account_id]=1" \
  -F "entry[amount]=100" \
  -F "entry[image]=@Desktop/imagen-en-desktop.png" \
  -F "entry[splits_attributes][0][reference]=primer split" \
  -F "entry[splits_attributes][0][account_id]=2" \
  -F "entry[splits_attributes][0][amount]=90" \
  -F "entry[splits_attributes][1][reference]=segundo split" \
  -F "entry[splits_attributes][1][account_id]=3" \
  -F "entry[splits_attributes][1][amount]=10" \
  -F "entry[memo]=memo" \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "54445565",
    "zid": "270",
    "printable": false,
    "invoice": null,
    "id_number": null,
    "reference": "INGRESO INVENTARIO 19.05.2026",
    "date": "2026-05-19",
    "income": null,
    "memo": null,
    "image": null,
    "verified": false,
    "audited": false,
    "payee_id": "1997430",
    "entity_id": "1303",
    "reconciliation_id": null,
    "updater_id": "1274",
    "account_id": "77704",
    "amount": "750.00",
    "created_at": "2026-05-19 11:31:08.795876",
    "updated_at": "2026-05-19 11:31:08.836408",
    "splits_count": "1",
    "invoice_date": "2026-05-19",
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
    "reception_id": "552832",
    "inventory_audit_id": null,
    "source_doc_type_id": "4",
    "monthly_entry_source_doc_type_id": "225289",
    "cost_center_id": null
  }
]
```

### Borrar una transaccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/entries/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "base": [
    "Translation missing: es-GT.NotDestroyable"
  ]
}
```

### Obtener detalle de una transaccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/entries/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "printable": false,
  "invoice": "A-1050",
  "id_number": null,
  "reference": "",
  "date": "2010-04-07",
  "income": false,
  "memo": "",
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 2,
  "amount": "300.0",
  "created_at": "2010-04-08T05:22:31.000Z",
  "updated_at": "2010-04-08T05:22:31.000Z",
  "splits_count": 1,
  "invoice_date": null,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
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
  "cost_center_id": null,
  "account": {
    "id": 2,
    "zid": 2,
    "name": "efectivo",
    "description": ""
  },
  "splits": [
    {
      "id": 1,
      "entry_id": 4,
      "amount": "300.0",
      "account_id": 5,
      "exchange_amount": null,
      "created_at": "2010-04-08T05:22:31.000Z",
      "updated_at": "2010-04-08T05:22:31.000Z",
      "reference": null,
      "verified": false,
      "verified_at": null,
      "audited": false,
      "audited_at": null,
      "cost_center_id": null,
      "entity_id": 1
    }
  ],
  "submissions": []
}
```

### Obtener el formulario de nueva transaccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/entries/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "54445565",
  "zid": "270",
  "printable": false,
  "invoice": null,
  "id_number": null,
  "reference": "INGRESO INVENTARIO 19.05.2026",
  "date": "2026-05-19",
  "income": null,
  "memo": null,
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": "1997430",
  "entity_id": "1303",
  "reconciliation_id": null,
  "updater_id": "1274",
  "account_id": "77704",
  "amount": "750.00",
  "created_at": "2026-05-19 11:31:08.795876",
  "updated_at": "2026-05-19 11:31:08.836408",
  "splits_count": "1",
  "invoice_date": "2026-05-19",
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
  "reception_id": "552832",
  "inventory_audit_id": null,
  "source_doc_type_id": "4",
  "monthly_entry_source_doc_type_id": "225289",
  "cost_center_id": null
}
```

### Obtener el formulario de edicion de una transaccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/entries/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "printable": false,
  "invoice": "A-1050",
  "id_number": null,
  "reference": "",
  "date": "2010-04-07",
  "income": false,
  "memo": "",
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 2,
  "amount": "300.0",
  "created_at": "2010-04-08T05:22:31.000Z",
  "updated_at": "2010-04-08T05:22:31.000Z",
  "splits_count": 1,
  "invoice_date": null,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
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

### Actualizar una transaccion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "entry": {
      "payee_id": "1",
      "reference": "prueba actualizada",
      "date": "2018-09-28",
      "account_id": "1",
      "amount": "150",
      "splits_attributes": {
        "0": {
          "reference": "primer split",
          "account_id": "2",
          "amount": "140.0"
        },
        "1": {
          "reference": "segundo split",
          "account_id": "3",
          "amount": "10"
        }
      },
      "memo": "memo actualizado"
    }
  }' \
  https://app.zauru.com/accounting/entries/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "amount": [
    "No coinciden los montos"
  ],
  "date": [
    "Fecha mínima 2020-12-31"
  ]
}
```

### Listado de transacciones (datatables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40,
    "scope": "all"
  }' \
  https://app.zauru.com/accounting/entries/datatables.json
```

## API de tipos de documento fuente mensual (llamadas desde sistemas externos)

### Consultar listado de tipos de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "entity_id": 2,
    "user_id": 3,
    "source_doc_type": 8,
    "reference": null,
    "month": 8,
    "year": 2015,
    "entries_count": 0,
    "created_at": "2023-01-17T02:48:04.404Z",
    "updated_at": "2023-01-17T02:48:04.404Z"
  },
  {
    "id": 4,
    "zid": 4,
    "entity_id": 2,
    "user_id": 3,
    "source_doc_type": 9,
    "reference": null,
    "month": 8,
    "year": 2015,
    "entries_count": 0,
    "created_at": "2023-01-17T02:48:04.408Z",
    "updated_at": "2023-01-17T02:48:04.408Z"
  }
]
```

### Obtener detalle de un tipo de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "228408",
  "zid": "40",
  "entity_id": "1303",
  "user_id": "1",
  "source_doc_type": "3",
  "reference": null,
  "month": "6",
  "year": "2026",
  "entries_count": "4",
  "created_at": "2026-05-29 03:00:44.112386",
  "updated_at": "2026-05-29 03:00:44.112386"
}
```

### Consultar las transacciones de un tipo de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types/1/show_entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "228408",
  "zid": "40",
  "entity_id": "1303",
  "user_id": "1",
  "source_doc_type": "3",
  "reference": null,
  "month": "6",
  "year": "2026",
  "entries_count": "4",
  "created_at": "2026-05-29 03:00:44.112386",
  "updated_at": "2026-05-29 03:00:44.112386"
}
```

### Obtener el formulario de nuevo tipo de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "entity_id": 1,
  "user_id": null,
  "source_doc_type": 0,
  "reference": null,
  "month": 8,
  "year": 2026,
  "entries_count": 0,
  "created_at": null,
  "updated_at": null
}
```

### Crear un tipo de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "monthly_entry_source_doc_type": {
      "source_doc_type": 0,
      "reference": "Correlativo de ventas",
      "month": 9,
      "year": 2018
    }
  }' \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "228408",
  "zid": "40",
  "entity_id": "1303",
  "user_id": "1",
  "source_doc_type": "3",
  "reference": null,
  "month": "6",
  "year": "2026",
  "entries_count": "4",
  "created_at": "2026-05-29 03:00:44.112386",
  "updated_at": "2026-05-29 03:00:44.112386"
}
```

### Borrar un tipo de documento fuente mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/monthly_entry_source_doc_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
