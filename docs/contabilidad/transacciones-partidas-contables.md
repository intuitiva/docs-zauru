---
title: "Transacciones (partidas contables)"
sidebar_label: "Transacciones (partidas contables)"
sidebar_position: 11
---

Este tutorial trata del unico documento que sirve para mover los saldos entre cuentas. Por ser un sistema de partida doble, el dinero no aparece y desaparece, tiene que proceder de alguna cuenta para acreditarse en otra cuenta.

## Listado de transacciones

El listado de transacciones permite:
- Filtrar por tipo: **Ingresos**, **Egresos**, **Transferencias** o **Todos**.
- Filtrar por etiqueta (tag) usando la nube de etiquetas.
- Filtrar por rango de fechas (fecha de transaccion o fecha de creacion).
- Buscar por texto (referencia, numero de documento, beneficiario, etc.).

## Crear una transaccion

Para crear una transaccion se puede ingresar desde "Transacciones" o desde "Cuentas" y acreditar o debitar de una cuenta.

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
