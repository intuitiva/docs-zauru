---
title: "Numeración Automática de Documentos (Plantillas)"
sidebar_label: "Numeración Automática de Documentos (Plantillas)"
sidebar_position: 4
---

Zauru le permite colocar números automáticos de documento a:

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



---

## API (llamadas desde sistemas externos)

### Obtener listado de numeraciones automáticas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/document_automatic_numbers.json
```

### Obtener detalle de una numeración automática
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/document_automatic_numbers/1.json
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
      "document_type": "payments",
      "method_name": "id_number",
      "prefix": "PAGO-",
      "initial": "1",
      "num_digits": "6"
    }
  }' \
  https://app.zauru.com/settings/document_automatic_numbers.json
```
