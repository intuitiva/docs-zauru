---
title: "Crear factura"
sidebar_label: "Crear factura"
sidebar_position: 3
format: md
---

# Crear una Factura

Este tutorial esta enfocado en la creación de facturas desde el punto de venta.

Los pasos para crear una nueva factura son los siguientes:

1. Ir a “Punto de Venta”.
2. Seleccionar “Nueva Factura”.

Le aparecerán las opciones para crear una nueva factura, cada vez que un usuario cree una nueva factura, el podrá seleccionar únicamente los productos de la bodega que tenga asignada, o de la bodega que usted haya predeterminado en las configuraciones del punto de venta.

Las campos que se pueden colocar en la factura son:

a. Coloque una breve referencia para encontrar fácilmente la factura.

b. Coloque el nombre del Cliente existente al que se le va facturar o agregue uno nuevo.

c. Coloque el vendedor.

d. Coloque el termino de pago que se le dará al cliente.

e. Aquí puede colocar el proyecto asociado a la factura

f. Aquí podrá escanear los códigos de barra de los productos o colocar manualmente el código para que se agreguen a la factura.

![imagen1](/img/punto-de-venta/crear-factura-1.jpg)

Ahora agregue los productos o servicios que se le van a facturar al cliente y la cantidad. Aun podrá agregar un descuento sobre la facturar o especificar si desea que registre impuestos o que no registre impuestos y sea solo un recibo. Luego presione Imprimir para emitir la factura.

![imagen2](/img/punto-de-venta/crear-factura-2.jpg)

Le aparecerá la plantilla de impresión de facturas y usted podrá imprimir la factura presionando CRTL+P. Los campos que salen a la derecha tienen la siguiente función:

a. Presione para dirigirse al listado de todas las facturas no pagadas.

b. Presione para crear una nueva factura.

c. Presione para ver los detalles de la factura creada.

d. Presione para cobrar la factura.

![imagen3](/img/punto-de-venta/crear-factura-3.jpg)

## API (llamadas desde sistemas externos)

### Crear factura asociada a usuario (vendedor)

```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"invoice":{"reference":"prueba", "taxable":"1", "payment_term_id":"1", "payee_id":"1", "seller_id":"1", "invoice_details_attributes":{"0":{"item_id":"1", "quantity":"1", "unit_price_cost":"650", "reference":""}}, "memo":"generado desde el API"}}' https://app.zauru.com/pos/invoices.json
```
