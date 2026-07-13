---
title: "Transacciones (partidas contables)"
sidebar_label: "Transacciones (partidas contables)"
sidebar_position: 19
---

Este tutorial trata del único documento que sirve para mover los saldos entre cuentas.

Por ser un sistema de partida doble, el dinero no aparece y desaparece, tiene que proceder de alguna cuenta para acreditarse en otra cuenta.

## Crear una transacción

Para crear una transacción se puede ingresar desde "Transacciones" o desde "Cuentas" y acreditar o debitar de una cuenta.

## Editar una transacción

Al editar una transacción se genera una bitácora del historial de la misma en el detalle de la transacción. Esto con el fin de no perder trazabilidad de los cambios que se han hecho en la transacción.

El formulario es igual que al crear una transacción.

## Borrar una transacción

El borrar una transacción la eliminará del sistema permanentemente, devolviendo los saldos a las cuentas pertinentes.

Si se quiere anular una transacción pero que no se elimine de la contabilidad, necesita editarla y colocarla a cero.

## API (llamadas desde sistemas externos)

### Crear transacción SIN imagen
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

### Crear transacción CON imagen
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

### Borrar una transacción
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/entries/1.json
```
