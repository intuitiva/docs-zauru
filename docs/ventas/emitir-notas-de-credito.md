---
title: "Emitir una nota de crédito (descuento, anulación o devolución)"
sidebar_label: "Emitir una nota de crédito (descuento, anulación o devolución)"
sidebar_position: 14
---

## Notas de Crédito

Este tutorial esta enfocado en la creación de notas de crédito sobre una factura.

Una nota de crédito es un documento comercial emitido por el vendedor que le brinda un saldo a favor al cliente, emitido por cualquiera de los siguientes motivos:

1. Anulación (Devolución total de la mercadería).
2. Descuento
3. Devolución parcial de mercadería.

Se ejemplificaran las 3 formas en el siguiente tutorial.

## Nota de crédito para anulación de factura

Cuando se emite una nota de crédito por el total de la factura, fiscalmente, se anula la factura. El cliente puede después canjear esa nota de crédito por otro producto La forma de hacer una devolución total de la mercadería por medio de una nota de crédito es la siguiente:

a. Ir a “Ventas”.

b. Seleccionar “Facturas no Pagadas”.

c. Seleccionar “NC” sobre la factura a la que desea emitir la nota de crédito.

![imagen1](/img/ventas/emitir-notas-de-credito-1.jpg)

Le aparecerán las opciones para emitir una nueva nota de crédito. Los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre la nota de crédito que se esta emitiendo.

b. Coloque la fecha en que se emite la nota de crédito.

c. Coloque el empleado responsable o el empleado que emite la nota de crédito.

d. Seleccione la agencia desde donde se emite la nota de crédito.

e. En concepto coloque (Anulación).

Presione crear notas de crédito.

![imagen2](/img/ventas/emitir-notas-de-credito-2.jpg)

Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo la nota de crédito exitosamente.

### Transacciones Asociadas a la NC

En la parte inferior de la página encontrara las transacciones asociadas a la nota de crédito que parten desde la cuenta “Notas de Crédito” hacia la cuenta “Devoluciones y Rebajas” e “IVA por Pagar” para registrar el saldo a favor que se le generó al cliente.

Si en la factura hubiera algún producto asociado también se generaría automáticamente una reservación de “Cliente” a “Bodega” para regresar la mercadería.

En el tutorial de “Aplicar una nota de crédito” se mostrara como canjear una nota de crédito.

![imagen3](/img/ventas/emitir-notas-de-credito-3.jpg)

## Nota de crédito por descuento

En este ejemplo se mostrara como crear una nota de crédito para dar un descuento al cliente, que puede ser canjeado en la misma factura o en otra factura.

Los pasos para crear un descuento por medio de una nota de crédito son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Click sobre “NC” sobre la factura a la que desea emitir la nota de crédito.

![imagen4](/img/ventas/emitir-notas-de-credito-4.jpg)

Le aparecerán los detalles de la factura y las opciones para  para emitir una nueva nota de crédito, los campos que deberá llenar son los siguientes:

a. Coloque la razón por la que se emite la nota de crédito, en este caso es por un descuento de 10% al cliente.

b. Coloque la fecha en la que se emite la nota de crédito.

c. Coloque el empleado responsable por la emisión de la nota de crédito.

d. Seleccione la agencia en donde se esta emitiendo la nota de crédito.

e. Seleccione el concepto por el que se emite la nota de crédito. En este ejemplo seleccionamos Descuento.

f.  Coloque la cantidad del descuento por la que se emite la nota de crédito.

Seleccione “Crear notas de crédito”.

![imagen5](/img/ventas/emitir-notas-de-credito-5.jpg)

Le aparecerá un mensaje notificándole que la nota de crédito fue creada exitosamente. En la parte inferior de la página encontrara las transacciones contables asociadas.

![imagen6](/img/ventas/emitir-notas-de-credito-6.jpg)

## Nota de Crédito por devolución parcial
Los pasos para emitir una nota crédito por una devolución parcial del producto facturado son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “NC” Sobre la factura que desea emitir la nota de crédito.

![imagen7](/img/ventas/emitir-notas-de-credito-7.jpg)

Le aparecerán las opciones para emitir una nota de crédito, los campos que debe llenar son los siguientes:

a. Coloque la razón por la que se emite la nota de crédito, en este ejemplo colocamos que fue una devolución parcial de producto.

b. Coloque la fecha en que se emite la nota de crédito.

c. Seleccione el empleado responsable por la emisión de la nota de crédito.

d.  Seleccione desde que agencia se emite la nota de crédito.

e. Seleccione el concepto por el cual se esta emitiendo la nota de crédito. En este ejemplo seleccionamos “Devolución parcial”.

f. Seleccione el producto que esta devolviendo el cliente, luego presione “+” y coloque la cantidad que el cliente esta devolviendo de ese producto.

![imagen8](/img/ventas/emitir-notas-de-credito-8.jpg)

Para agregar mas productos seleccione el producto y luego presione “+”, el botón de refrescar y el botón de vista previa le sirven para refrescar la página antes de emitir la nota de crédito, esto le permitirá ver si hay algún error en las cantidades.

Cuando termine de colocar los productos y sus cantidades presione “Crear notas de crédito”.

![imagen9](/img/ventas/emitir-notas-de-credito-9.jpg)

Le aparecerá un mensaje de éxito en la pantalla. En la parte inferior podrá ver las transacciones contables asociadas y los movimientos de inventario asociados. Automáticamente se creara una reservación de “Cliente” hacia “Bodega” para retornar los productos especificados en la nota de crédito.

![imagen10](/img/ventas/emitir-notas-de-credito-10.jpg)

## API (llamadas desde sistemas externos)

### Listar las notas de crédito abiertas (no redimidas)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes.json
```

### Listar las notas de crédito redimidas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes.json?scope=redeemed
```

esto retornará algo similar a esto:

```json
[
    {
        "agency_id": 1,
        "concept": "null",
        "created_at": "2020-12-23T15:58:53-06:00",
        "creator_id": 1,
        "credit_note_details_count": 1,
        "date": "2020-03-02",
        "discount": "0.0",
        "employee_id": 1,
        "entity_id": 1,
        "id": 1,
        "id_number": "NC-1",
        "invoice_id": 1,
        "memo": "generado desde el API",
        "payee_id": 1,
        "redeemed": false,
        "reference": "prueba de nota de credito de anulacion",
        "total": "528.0",
        "updated_at": "2020-12-23T15:58:53-06:00",
        "voided": false,
        "zid": 2
    }
]
```

### Listar las notas de crédito anuladas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes.json?scope=voided
```

### Detalles de una nota de crédito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes/1.json
```

### Crear Nota de Crédito de anulación total
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "credit_note": {
      "invoice_id": "1",
      "reference": "prueba de nota de credito de anulacion",
      "date": "2020-12-22",
      "concept": "null",
      "agency_id": "1",
      "employee_id": "1",
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/sales/sales_notes/credit_notes.json
```

### Crear Nota de Crédito de descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "credit_note": {
      "invoice_id": "1",
      "reference": "prueba de nota de credito por descuento",
      "date": "2020-12-22",
      "concept": "discount",
      "discount": "10.00",
      "agency_id": "1",
      "employee_id": "1",
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/sales/sales_notes/credit_notes.json
```

### Obtener plantilla para crear una nota de crédito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes/new.json?invoice=1
```

### Anular una nota de crédito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/sales_notes/credit_notes/1.json
```

### Reenviar nota de crédito por correo electrónico
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/sales_notes/credit_notes/1/resend_mail.json
```
