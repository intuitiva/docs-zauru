---
title: "Cobrar una factura o una orden de venta"
sidebar_label: "Cobrar una factura o una orden de venta"
sidebar_position: 4
---

Este tutorial esta enfocado en cobrar las facturas u ordenes de venta desde el punto de venta. Los pasos para cobrar una factura son los siguientes:

1. Ir a “P.D.V”.
2. Seleccionar “Facturas” u "Ordenes".
3. Seleccionar el icono de “Cobrar”.

![imagen1](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-1.jpg)


Le aparecerán las opciones para crear un nuevo pago, junto con los detalles de la factura no pagada. Los campos que debe colocar son:

a. Coloque el método de pago en que se esta pagando la factura.

b. Coloque una breve referencia sobre el pago que esta creando. (Opcional)

c. Coloque la cantidad que se esta cobrando en el método de pago que especificó.

* Si el cliente pago en dos métodos de pago, digamos efectivo y tarjeta de crédito, presione el mas para especificar el otro método de pago y la cantidad que pago en ese método de pago.

Presione “Crear pago”.

![imagen2](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-2.jpg)

Le aparecerá un mensaje de éxito notificándole que se creo el cobro, ahora el cobro quedara en el listado de cobros sin confirmar, hasta que se confirme el pago, la factura seguirá siendo una factura no pagada.

![imagen3](/img/punto-de-venta/cobrar-una-factura-o-una-orden-de-venta-3.jpg)

## Listado de cobros sin confirmar

Para ver todos los cobros que estan pendientes de confirmacion:

1. Ir a "P.D.V."
2. Seleccionar "Cobros".

Le aparecera un listado con todos los cobros sin confirmar (en borrador) realizados desde el punto de venta. Puede filtrar por:

a. **Vendedor**: Seleccione un vendedor especifico o vea todos los cobros.

En el listado se muestra:

a. Metodo de pago utilizado.
b. Cliente que realizo el pago.
c. Monto del pago.
d. Referencia del pago.
e. Total de cobros agrupados por metodo de pago.
f. Fecha y hora del cobro.

Desde el listado usted podra:

a. **Confirmar pago individual**: Haga click en el boton de confirmar para que el pago se registre definitivamente y la factura se marque como pagada.

b. **Confirmar todos los pagos de un metodo de pago**: En la parte superior del listado, para cada metodo de pago se muestra el total acumulado. Puede presionar el boton de confirmar para confirmar todos los cobros pendientes de ese metodo de pago simultaneamente.

c. **Ver detalle del cobro**: Haga click sobre un cobro para ver sus detalles.

d. **Imprimir comprobante de pago**: Imprima el recibo del cobro.

e. **Anular cobro**: Elimine un cobro no confirmado.

## Confirmar un pago

Para confirmar un pago individual:

1. En el listado de cobros, localice el pago que desea confirmar.
2. Presione el boton de "Confirmar".

El pago se registrara definitivamente, la factura asociada se marcara como pagada y el pago desaparecera del listado de cobros sin confirmar.

## Confirmar todos los pagos de un metodo de pago

Para confirmar todos los pagos pendientes de un metodo de pago especifico (por ejemplo, todos los pagos en efectivo):

1. En el listado de cobros, en la seccion de resumen por metodo de pago, presione el boton de "Confirmar" junto al metodo de pago deseado.
2. Todos los cobros pendientes de ese metodo de pago se confirmaran simultaneamente.

## Editar un cobro

Para modificar la referencia, fecha o memo de un cobro existente:

1. En el listado de cobros, localice el cobro a editar.
2. Seleccione el icono de "Editar".
3. Modifique los campos necesarios (referencia, fecha, memo, imagen).
4. Presione "Guardar".

## Anular un cobro

Para anular un cobro no confirmado:

1. En el listado de cobros, localice el cobro a anular.
2. Presione el boton de "Anular".
3. Confirme la anulacion.

El cobro sera anulado y la factura volvera a aparecer como no pagada.

## API (llamadas desde sistemas externos)

### Registrar un pago asociado a una factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment": {
      "payment_method_id": "1",
      "reference": "prueba",
      "payment_details_attributes": {
        "0": {
          "invoice_id": "1",
          "amount": "32.0"
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/pos/charges.json
```
