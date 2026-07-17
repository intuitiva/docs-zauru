---
title: "Cargos de Aranceles"
sidebar_label: "Cargos de Aranceles"
sidebar_position: 8
---

Este tutorial esta enfocado en agregar cargos de aranceles por productos a una orden de compra.

Los pasos para agregar aranceles a una orden de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Nuevo Cargo de Arancel” como se muestra en la imagen.

![imagen1](/img/compras/cargos-de-aranceles-1.jpg)


Le aparecerán las opciones para crear un nuevo cargo de arancel, recomendamos tener la póliza a mano para colocar los cargos arancelarios, los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre el cargo de arancel que esta creando.

b. Si este arancel esta sujeto a impuestos, seleccione el recuadro, si este arancel es un impuesto, deje el recuadro vacío.

c. Coloque la fecha en que se emitieron los cargos de arancel a su compra.

d. Coloque el termino de pago, crédito o contado.

e. Coloque el nombre del proveedor existente, o seleccione “Agregar Nuevo Proveedor” y agregue uno nuevo.

f. Seleccione la orden de compra a la que desea agregar el cargo de arancel, por default esta seleccionada la orden de compra a la que usted selecciono “Agregar Cargo de Arancel”.

g. Seleccione el tipo de cargo que se le cobro a su mercadería, en este caso seleccionamos IVA para registrar los impuestos que se cobraron a los productos.

h. Coloque el total de arancel cobrado por producto.

i. Presione “Crear cargo” para crear el cargo de arancel a su orden de compra.

![imagen2](/img/compras/cargos-de-aranceles-2.jpg)



Le aparecerá un mensaje de éxito notificándole que el cargo de arancel fue creado exitosamente.

![imagen3](/img/compras/cargos-de-aranceles-3.jpg)

## API (llamadas desde sistemas externos)

### Ver detalles de un cargo de arancel
El 1 al final de la URL es el ID del cargo de arancel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/charges/tariffs_charges/1.json
```

### Obtener datos para un cargo de arancel nuevo
El parámetro `po` es el ID de la orden de compra a la que se le agregaran los aranceles
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/purchases/charges/tariffs_charges/new.json?po=1"
```

### Obtener datos para editar un cargo de arancel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/charges/tariffs_charges/1/edit.json
```

### Crear nuevo cargo de arancel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "charge": {
      "reference": "Arancel IVA",
      "taxable": "0",
      "issue_date": "2018-10-27",
      "charge_term_id": "1",
      "payee_info": "<V1> 1 | Proveedor de aranceles, S.A.",
      "purchase_order_id": "1",
      "tariffs_exchange_amount": "0",
      "tariffs_attributes": {
        "0": {
          "purchase_order_detail_id": "1",
          "amount": "50"
        },
        "1": {
          "purchase_order_detail_id": "2",
          "amount": "75"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/charges/tariffs_charges.json
```

### Actualizar un cargo de arancel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "charge": {
      "reference": "Arancel IVA actualizado",
      "tariffs_attributes": {
        "0": {
          "id": "1",
          "purchase_order_detail_id": "1",
          "amount": "60"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/charges/tariffs_charges/1.json
```
