---
title: "Numeración Automática de Documentos (Plantillas)"
sidebar_label: "Numeración Automática de Documentos (Plantillas)"
sidebar_position: 4
---

Antes de emitir su primer documento, conviene decidir cómo se numerará, para que cada factura o cheque salga con su número correcto sin digitarlo a mano. Zauru le permite colocar números automáticos de documento a:

- Clientes
- Proveedores
- Cheques
- Contraseñas de pago
-  Empleados
- Reservaciones
- Ordenes de venta
- Facturas
- Ordenes de compra

Los números automáticos se pre definen para que cada vez que una transacción cumpla con las restricciones que usted le coloque, se haga una numeración automática, por ejemplo, cada vez que una factura que lleve impuestos se emita, Zauru colocara una numeración automática.

Los pasos para crear un Numero Automático de Documentos son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Plantillas”.
3. Seleccionar “Nuevo Numero Automático de Documento”.

![imagen1](/img/primeros-pasos/numeracion-automatica-1.jpg)

Le deberá aparecer las opciones para crear el numero automático de documento, en la imagen se muestra el ejemplo de creación de numero automático para facturas, el procedimiento para crearlo es el siguiente:

1. Seleccione a que documento desea crear la numeración automática de documento y presione actualizar.
2. En el campo deberá colocar id_number en todos los documentos a excepción de cuando el documento sea factura o pago. Si el documento es factura puede seleccionar order_number, que servirá para numerar ordenes de venta, o puede seleccionar invoice_number, que servirá para numerar las facturas. Si es un pago podrá seleccionar id_number que numerara cada vez que se haga un pago, o podrá seleccionar draft_number que numerara cada vez que se haga un pago provisional.
3. Aquí debe colocar la parte fija del numero de documento, la serie por ejemplo.
4. Aquí debe colocar la parte variable del numero de documento, el numero que usted coloque aquí se tomara como el numero actual del documento, la siguiente numeración automática será este numero + 1.
5. Coloque cuantos dígitos contiene la parte variable, en ejemplo el numero 0145 contiene 4 dígitos.
6. Si remueve el cheque de esta casilla, la parte fija del documento saldrá del lado derecho.
7. Este campo le permite agregar restricciones,  en este ejemplo se selecciona Agencia y se selecciona el botón de “Agregar Restricción”, le desplegara el listado de sus agencias en la parte de abajo, con esta restricción lograremos que cada vez que se emita una factura desde la agencia que usted seleccione se generara un numero automático de documento.

![imagen2](/img/primeros-pasos/numeracion-automatica-2.jpg)

Se pueden agregar mas restricciones a la numeración automática, en el ejemplo se muestran los pasos:

1. Se selecciona Sujeto a Impuestos y se presiona el botón de “Agregar Restricción.
2. Se debe marcar el recuadro de “Valor” para que esta restricción sea valida.

Hasta el momento las restricciones son que cada vez que se emita una factura desde la bodega de zona 8, que este sujeta a impuestos, se generara un numero automático. En el siguiente ejemplo se muestra como agregar otra restricción.

![imagen3](/img/primeros-pasos/numeracion-automatica-3.jpg)

En este ejemplo se selecciona la restricción de Vendedor y se da Click en el botón de “Agregar Restricción”. Luego se selecciona el vendedor.

Ahora las restricciones son: Cada vez que se emita una factura desde la agencia Zona 8, que este sujeta a impuestos, y el vendedor sea Rodrigo Meoño, se generara una numeración automática de documentos.

![imagen4](/img/primeros-pasos/numeracion-automatica-4.jpg)

Por ultimo agregaremos una restricción para que solo se genere la numeración automática de documentos de la factura, si la factura es emitida en Zona 8, este sujeta a impuestos, el vendedor sea Rodrigo Meoño y el cliente sea el Cliente A.

Para guardar los cambios presione el botón de “Crear numero automático del documento”.

![imagen5](/img/primeros-pasos/numeracion-automatica-5.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla notificando que se creo el numero automático de documento.

![imagen6](/img/primeros-pasos/numeracion-automatica-6.jpg)

Con su numeración automática creada, cada documento saldrá con la serie que usted definió y sin riesgo de números repetidos. Puede crear tantas numeraciones como necesite — una por agencia, por vendedor o por tipo de documento —, y Zauru aplicará la que corresponda según las restricciones que haya configurado.

---

## API (llamadas desde sistemas externos)

### Obtener listado de numeraciones automáticas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/templates/document_automatic_numbers.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 3,
    "active": false,
    "model_for_doc_number": "credit_notes",
    "field_for_doc_number": "id_number",
    "fixed_doc_number": "A-",
    "variable_doc_number": 1,
    "variable_doc_number_digits": 3,
    "fixed_doc_number_left": true,
    "notes": "",
    "updater_id": 2,
    "entity_id": 2,
    "created_at": "2017-04-17T21:59:47.740Z",
    "updated_at": "2017-10-03T19:40:29.261Z",
    "document_constraints_count": 0,
    "resolution": "",
    "resolution_date": null,
    "document_external_storage_service_id": null,
    "doc_type": null
  },
  {
    "id": 3,
    "zid": 2,
    "active": false,
    "model_for_doc_number": "invoices",
    "field_for_doc_number": "invoice_number",
    "fixed_doc_number": "",
    "variable_doc_number": 3,
    "variable_doc_number_digits": 4,
    "fixed_doc_number_left": true,
    "notes": "",
    "updater_id": 4,
    "entity_id": 2,
    "created_at": "2016-04-29T16:53:18.896Z",
    "updated_at": "2016-05-02T18:20:29.579Z",
    "document_constraints_count": 1,
    "resolution": null,
    "resolution_date": null,
    "document_external_storage_service_id": null,
    "doc_type": null
  }
]
```

### Obtener detalle de una numeración automática
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/templates/document_automatic_numbers/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3680",
  "zid": "5",
  "active": false,
  "model_for_doc_number": "invoices",
  "field_for_doc_number": "invoice_number",
  "fixed_doc_number": "FEL",
  "variable_doc_number": null,
  "variable_doc_number_digits": null,
  "fixed_doc_number_left": true,
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-06-09 15:59:26.268225",
  "updated_at": "2026-06-12 22:35:10.279484",
  "document_constraints_count": "1",
  "resolution": null,
  "resolution_date": null,
  "document_external_storage_service_id": "40",
  "doc_type": "FACT"
}
```

### Crear numeración automática de documento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "document_automatic_number": {
      "model_for_doc_number": "payments",
      "field_for_doc_number": "id_number",
      "fixed_doc_number": "PAGO-",
      "variable_doc_number": "1",
      "variable_doc_number_digits": "6"
    }
  }' \
  https://app.zauru.com/settings/templates/document_automatic_numbers.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3680",
  "zid": "5",
  "active": false,
  "model_for_doc_number": "invoices",
  "field_for_doc_number": "invoice_number",
  "fixed_doc_number": "FEL",
  "variable_doc_number": null,
  "variable_doc_number_digits": null,
  "fixed_doc_number_left": true,
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-06-09 15:59:26.268225",
  "updated_at": "2026-06-12 22:35:10.279484",
  "document_constraints_count": "1",
  "resolution": null,
  "resolution_date": null,
  "document_external_storage_service_id": "40",
  "doc_type": "FACT"
}
```

### Actualizar numeración automática de documento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "document_automatic_number": {
      "variable_doc_number": "100",
      "active": "1"
    }
  }' \
  https://app.zauru.com/settings/templates/document_automatic_numbers/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3680",
  "zid": "5",
  "active": false,
  "model_for_doc_number": "invoices",
  "field_for_doc_number": "invoice_number",
  "fixed_doc_number": "FEL",
  "variable_doc_number": null,
  "variable_doc_number_digits": null,
  "fixed_doc_number_left": true,
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-06-09 15:59:26.268225",
  "updated_at": "2026-06-12 22:35:10.279484",
  "document_constraints_count": "1",
  "resolution": null,
  "resolution_date": null,
  "document_external_storage_service_id": "40",
  "doc_type": "FACT"
}
```

### Eliminar numeración automática de documento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/templates/document_automatic_numbers/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
