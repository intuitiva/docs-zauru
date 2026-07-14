---
title: "Configuración"
sidebar_label: "Configuración"
sidebar_position: 1
---

Zauru le permite configurar términos de pago, tipos de cargos y métodos de pago de sus compras.

- Un termino de pago es el tiempo en el que se realizara el pago a un beneficiario.
- Un tipo de cargo es un cargo que se le agrega a la compra y que aumenta el costo del producto. Generalmente los cargos se aplican a las ordenes de compra cuando es una importación. Los cargos podrían ser de aranceles, de GPS o de impuestos por ejemplo.
- Un método de pago es la forma en la que se va pagar la compra. Puede que se pague al contado o que el proveedor le acepte  pago con tarjeta.


La forma de configurar sus compras es la siguiente:

1. Ir a “compras”.
2. Seleccionar el icono de configuraciones.

![imagen1](/img/compras/configuracion-1.jpg)


## Términos de Pago
Para crear un nuevo termino de pago debe hacer click en “Nuevo Termino de Pago”. (1)

![imagen2](/img/compras/configuracion-2.jpg)

A continuación le aparecerán los opciones para crear un nuevo término de pago, las opciones son las siguientes:

1. Si deja el cheque en esta opción, el termino de pago estará activo y se podrá usar en el sistema. Para desactivarlo debe remover el cheque en la casilla.
2. Coloque el nombre del término de pago.
3. Coloque desde que cuenta saldrá la transacción de la compra, recomendamos que la transacción salga desde Cuentas por Pagar, ya sea crédito o contado.
4. Coloque hasta que cuenta saldrá la transacción, recomendamos que todas las transacciones de compras vayan hasta la cuenta “Inventario de Mercadería”, al momento de vender, se genera una transacción automática al gasto de venta. Si usted coloca una cuenta de Gasto en el termino de pago, se duplicara la transacción de gasto al momento de vender
5. Coloque el porcentaje de crédito que tendrá este término de pago. Para 100% coloque 1. Si es al contado coloque 0.
6. Coloque la cantidad de días de crédito que tendrá este termino de pago.
7. Presione “Crear término de pago” para guardar los cambios.

![imagen3](/img/compras/configuracion-3.jpg)


Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el término de pago exitosamente.  Ahora al momento de hacer una compra podrá seleccionar el nuevo termino de pago que ha creado.

![imagen4](/img/compras/configuracion-4.jpg)

## Tipos de Cargos

Para crear un nuevo tipo de cargo debe:

1. Seleccionar la pestaña de Tipos de Cargos en las Configuraciones de Compras.
2. Seleccionar “Nuevo Tipo de Cargo”.

![imagen5](/img/compras/configuracion-5.jpg)

A continuación le aparecerán las opciones para crear un nuevo tipo de cargo, las opciones son las siguientes:

1. Coloque el nombre del tipo de cargo.
2. Seleccione hacia que cuenta se registrara el cargo, recomendamos que se seleccione Inventario de Mercadería, porque al momento de vender su producto, Zauru genera una transacción automática desde Inventario de Mercadería al Costo de Venta por el monto total del Costo de su producto.
3. Para que este cargo sea incluido en el costo de su producto debe seleccionar esta casilla.
4. Para guardar los cambios presione “Crear tipo de cargo”.

![imagen6](/img/compras/configuracion-6.jpg)


Le deberá aparecer un mensaje de éxito en la pantalla notificando que se creo el tipo de cargo exitosamente.

![imagen7](/img/compras/configuracion-7.jpg)

## Métodos de Pago
Los pasos para crear un nuevo método de pago son los siguientes:

1. Seleccione la pestaña de “Métodos de pago” en las configuraciones de compras.
2. Presione “Nuevo Método de Pago”.

![imagen8](/img/compras/configuracion-8.jpg)


A continuación aparecerán las opciones de configuración del Nuevo Método de Pago. Las opciones son las siguientes:

1. Coloque el nombre del Metodo de Pago.
2. Seleccione de que cuenta saldrá el pago cuando se seleccione este método de pago.
3. Para guardar los cambios presione “Crear método de pago”.

Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el método de pago.

Cada vez que haga una compra podrá seleccionar este nuevo método de pago.

![imagen9](/img/compras/configuracion-9.jpg)

## Variables de Configuración del Módulo

Ademas de los terminos de pago, tipos de cargos y metodos de pago, Zauru tambien le permite configurar variables avanzadas que controlan el comportamiento del modulo de Compras a nivel de entidad. Estas variables incluyen:

- Cuentas contables para impuestos adicionales en las compras.
- Configuracion de webhooks para notificaciones de ordenes de compra.
- Controles de visibilidad en los formularios (etiquetas, centros de costo, agencias).
- Flujo de autorizacion de pagos.
- Separacion del numero de factura en serie y correlativo.
- Comportamiento de las recepciones y partidas contables.

Para ver la lista completa de variables y su configuracion, consulte el tutorial de "Configuracion de Variables del Modulo de Compras".

## API (llamadas desde sistemas externos)

### listado de métodos de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/discharge_methods.json
```
