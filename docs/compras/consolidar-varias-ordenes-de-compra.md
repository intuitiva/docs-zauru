---
title: "Consolidar varias orden de compra"
sidebar_label: "Consolidar varias orden de compra"
sidebar_position: 6
---

Este tutorial esta enfocado en consolidar dos o mas ordenes de compra. Esta función beneficia a los importadores que generen dos compras en el mismo país pero a distinto proveedor, y luego reciba las dos ordenes de compra en puerto origen y las importe juntas en un solo contenedor.

Para poder registrar cargos de importación, aranceles o impuestos de las dos compras a la vez, Zauru le permite consolidar dos o mas ordenes de compra, y agregar los cargos y aranceles una sola vez para las dos o mas compras.

Los pasos para hacer una consolidación de ordenes de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Nueva Orden de Compra”.

![imagen1](/img/compras/consolidar-varias-ordenes-de-compra-1.jpg)


Le aparecerán las opciones para crear una nueva orden de compra, los campos que debe llenar son los siguientes:

a. Coloque el nombre de la consolidación. En el ejemplo colocamos Importaciones de Agosto porque estamos consolidando dos importaciones del mes de Agosto, esta es solo una referencia.

b. Seleccione las ordenes de compra que desea consolidar.

c. Presione “Crear Consolidado”.

![imagen2](/img/compras/consolidar-varias-ordenes-de-compra-2.jpg)



Le aparecerá un mensaje en la pantalla notificándole que la consolidación se creo exitosamente. Presione Verificar (El ojo) para ver los detalles de la consolidación.

![imagen3](/img/compras/consolidar-varias-ordenes-de-compra-3.jpg)



En los detalles del Consolidado podrá encontrar las ordenes de compra que se consolidaron.

![imagen4](/img/compras/consolidar-varias-ordenes-de-compra-4.png)

## Consolidados para Facturas Especiales

Zauru tambien permite crear consolidados para el caso especial de facturas de compras a proveedores (Facturas Especiales, Facturas de Sujeto Excluido o Facturas de Compras). Estos consolidados se crean a partir de ordenes de compra que ya fueron recibidas pero aun no han sido pagadas.

La diferencia principal con un consolidado regular es que este tipo de consolidado esta disenado para emitir la factura especial que respalda las compras realizadas a proveedores que no emiten factura. El consolidado de factura especial utiliza un termino de pago que fuerza el calculo de precios sin impuestos y un item predefinido para el consolidado.

Los pasos para crear un consolidado de factura especial son:

1. Ir a "Compras".
2. Seleccionar "Consolidados".
3. Seleccionar "Nuevo Consolidado para Factura Especial".

![imagen5](/img/compras/consolidar-varias-ordenes-de-compra-5.jpg)

Le apareceran las opciones para crear el consolidado de factura especial, los campos que debe llenar son los siguientes:

a. Coloque el nombre del consolidado de factura especial.

b. Seleccione las ordenes de compra que desea consolidar. A diferencia del consolidado regular, aqui solo apareceran las ordenes de compra que ya fueron recibidas pero que aun no han sido pagadas.

c. El sistema utilizara automaticamente el item configurado en las variables de compras (item_for_consolidates) y el termino de pago configurado para facturas especiales.

d. Presione "Crear Consolidado".

![imagen6](/img/compras/consolidar-varias-ordenes-de-compra-6.jpg)

Le aparecera un mensaje de exito notificandole que el consolidado de factura especial fue creado. A partir de este consolidado podra emitir la factura especial correspondiente.

### Configuracion previa necesaria

Para utilizar los consolidados de facturas especiales, debe tener configurado:

1. Un termino de pago con la opcion "Forzar precio sin impuestos" (force_price_without_taxes) activada.
2. Un item para consolidados configurado en las variables del modulo de Compras (item_for_consolidates).
3. Numeracion automatica de documentos para facturas especiales (FEL).

Consulte los tutoriales de "Configuracion de Variables del Modulo de Compras" y "Emitir Facturas de compras a Proveedores" para mas detalles.

## API (llamadas desde sistemas externos)

### Obtener listado de ordenes de compra consolidables
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/purchases/consolidates/new.json
```

### Crear nuevo consolidado de ordenes de compras
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "consolidate": {
      "name": "consolidado de prueba",
      "description": "descripcion del consolidado",
      "purchase_orders_attributes": {
        "0": {
          "consolidated": "1",
          "id": "1"
        },
        "1": {
          "consolidated": "1",
          "id": "2"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/consolidates.json
```
