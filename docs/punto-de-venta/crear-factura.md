---
title: "Crear factura"
sidebar_label: "Crear factura"
sidebar_position: 3
---

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

## Listado de facturas

Para ver todas las facturas emitidas y no pagadas desde el punto de venta:

1. Ir a "P.D.V."
2. Seleccionar "Facturas".

Le aparecera un listado con todas las facturas que cumplen las siguientes condiciones:
- Estan emitidas (no son borradores)
- No estan pagadas
- No estan anuladas
- Pertenecen a la agencia del usuario

Puede filtrar por:

a. **Vendedor**: Seleccione un vendedor especifico o vea todas las facturas.

b. **Etiquetas (Tags)**: Filtre las facturas por etiquetas asignadas.

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre una factura para ver sus productos, pagos, transacciones contables y otros detalles.

b. **Cobrar**: Registre un pago para la factura. Vea el tutorial "Cobrar una factura o una orden de venta".

c. **Imprimir**: Imprima la factura utilizando las plantillas de impresion configuradas.

d. **Anular**: Anule la factura si fue emitida por error.

e. **Re-emitir (Editar)**: Si la factura aun no ha sido emitida (esta en estado de orden), puede editarla. Vea la seccion "Editar factura".

## Editar y re-emitir una factura

Si necesita modificar una factura que aun no ha sido emitida:

1. En el listado de facturas, localice la factura en estado "orden" (no emitida).
2. Seleccione el icono de "Editar".
3. Modifique los productos, cantidades, precios o datos generales.
4. Presione "Guardar". La factura se re-emitira con los cambios.

**Nota**: Las facturas ya emitidas no pueden ser editadas. Debe anularlas y crear una nueva.

## Emision rapida de factura

Si tiene una orden de venta que desea convertir rapidamente en factura:

1. Desde el detalle de la orden de venta, presione "Emitir factura".
2. La orden se convertira en factura inmediatamente, manteniendo los mismos productos, cantidades y precios.

## Anular una factura

Para anular una factura:

1. En el listado de facturas, localice la factura a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

La factura sera anulada y los productos reservados seran devueltos al inventario (si la factura fue creada desde una orden de venta).

## Editar datos superficiales de factura

Para modificar datos superficiales de una factura sin alterar sus productos ni montos:

1. En el detalle de la factura, seleccione "Editar datos".
2. Podra modificar: numero de factura, referencia, fecha, vendedor, memo y etiquetas.
3. Tambien podra adjuntar una imagen a la factura.
4. Presione "Guardar".

## API (llamadas desde sistemas externos)

### Crear factura asociada a usuario (vendedor)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "reference": "prueba",
      "taxable": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1",
          "unit_price_cost": "650",
          "reference": ""
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/pos/invoices.json
```
