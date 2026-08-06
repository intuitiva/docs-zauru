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

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "cheque G&T corporativa",
    "account_id": 2,
    "entity_id": 3,
    "updater_id": 4,
    "created_at": "2015-02-19T21:22:19.166Z",
    "updated_at": "2020-11-20T03:37:59.894Z",
    "printable_entry": true,
    "endorsement_restriction": false,
    "active": true
  },
  {
    "id": 5,
    "zid": 2,
    "name": "Transferencia G&T",
    "account_id": 6,
    "entity_id": 3,
    "updater_id": 4,
    "created_at": "2020-03-11T23:59:14.535Z",
    "updated_at": "2020-03-11T23:59:14.535Z",
    "printable_entry": false,
    "endorsement_restriction": false,
    "active": true
  }
]
```

### Ver detalles de un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
}
```

### Crear nuevo método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge_method": {
      "active": "1",
      "name": "Efectivo",
      "account_id": "1"
    }
  }' \
  https://app.zauru.com/purchases/settings/discharge_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
}
```

### Actualizar un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "discharge_method": {
      "name": "Cheque"
    }
  }' \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
}
```

### Eliminar un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listado de términos de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/charge_terms.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "active": true,
    "name": "tableau",
    "entity_id": 2,
    "credit_percent": 0.0,
    "credit_days": 0,
    "credit": true,
    "account_from_id": 3,
    "account_to_id": 4,
    "updater_id": 2,
    "created_at": "2015-02-19T21:20:24.635Z",
    "updated_at": "2020-11-20T00:08:54.615Z",
    "force_price_without_taxes": false,
    "account_from_vat_withheld_id": null,
    "account_from_income_taxes_withheld_id": null,
    "account_to_income_taxes_id": null,
    "issue_purchase_invoice": false,
    "purchase_invoice_services_import_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_services_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_products_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_products_vat_withheld_percent": 0.0,
    "cost_center_id": null
  },
  {
    "id": 5,
    "zid": 2,
    "active": true,
    "name": "mensualidad DTEs cofidi",
    "entity_id": 2,
    "credit_percent": 0.0,
    "credit_days": 0,
    "credit": true,
    "account_from_id": 6,
    "account_to_id": 7,
    "updater_id": 8,
    "created_at": "2020-03-11T16:13:48.099Z",
    "updated_at": "2020-11-20T00:16:40.680Z",
    "force_price_without_taxes": false,
    "account_from_vat_withheld_id": null,
    "account_from_income_taxes_withheld_id": null,
    "account_to_income_taxes_id": null,
    "issue_purchase_invoice": false,
    "purchase_invoice_services_import_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_services_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_products_income_taxes_withheld_percent": 0.0,
    "purchase_invoice_products_vat_withheld_percent": 0.0,
    "cost_center_id": null
  }
]
```

### Crear nuevo término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "charge_term": {
      "active": "1",
      "name": "Crédito 30 días",
      "account_from_id": "1",
      "account_to_id": "2",
      "credit_percent": "1",
      "credit_days": "30"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_terms.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2231",
  "zid": "1",
  "active": true,
  "name": "Contado",
  "entity_id": "1303",
  "credit_percent": "0",
  "credit_days": "0",
  "credit": true,
  "account_from_id": "77704",
  "account_to_id": "77718",
  "updater_id": "214",
  "created_at": "2026-02-11 14:41:39.165691",
  "updated_at": "2026-02-11 14:42:41.662229",
  "force_price_without_taxes": false,
  "account_from_vat_withheld_id": null,
  "account_from_income_taxes_withheld_id": null,
  "account_to_income_taxes_id": null,
  "issue_purchase_invoice": false,
  "purchase_invoice_services_import_income_taxes_withheld_percent": "0",
  "purchase_invoice_services_income_taxes_withheld_percent": "0",
  "purchase_invoice_products_income_taxes_withheld_percent": "0",
  "purchase_invoice_products_vat_withheld_percent": "0",
  "cost_center_id": null
}
```

### Actualizar un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "charge_term": {
      "name": "Crédito 45 días",
      "credit_days": "45"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_terms/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2231",
  "zid": "1",
  "active": true,
  "name": "Contado",
  "entity_id": "1303",
  "credit_percent": "0",
  "credit_days": "0",
  "credit": true,
  "account_from_id": "77704",
  "account_to_id": "77718",
  "updater_id": "214",
  "created_at": "2026-02-11 14:41:39.165691",
  "updated_at": "2026-02-11 14:42:41.662229",
  "force_price_without_taxes": false,
  "account_from_vat_withheld_id": null,
  "account_from_income_taxes_withheld_id": null,
  "account_to_income_taxes_id": null,
  "issue_purchase_invoice": false,
  "purchase_invoice_services_import_income_taxes_withheld_percent": "0",
  "purchase_invoice_services_income_taxes_withheld_percent": "0",
  "purchase_invoice_products_income_taxes_withheld_percent": "0",
  "purchase_invoice_products_vat_withheld_percent": "0",
  "cost_center_id": null
}
```

### Eliminar un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/settings/charge_terms/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listado de tipos de cargos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/charge_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "1731",
    "zid": "1",
    "name": "IVA",
    "entity_id": "1303",
    "account_id": "77716",
    "created_at": "2026-02-06 18:10:10.149155",
    "updated_at": "2026-02-06 18:10:10.149155",
    "included_in_item_cost": false
  }
]
```

### Crear nuevo tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "charge_type": {
      "name": "Flete terrestre",
      "account_id": "1",
      "included_in_item_cost": "1"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1731",
  "zid": "1",
  "name": "IVA",
  "entity_id": "1303",
  "account_id": "77716",
  "created_at": "2026-02-06 18:10:10.149155",
  "updated_at": "2026-02-06 18:10:10.149155",
  "included_in_item_cost": false
}
```

### Actualizar un tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "charge_type": {
      "name": "Flete marítimo"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1731",
  "zid": "1",
  "name": "IVA",
  "entity_id": "1303",
  "account_id": "77716",
  "created_at": "2026-02-06 18:10:10.149155",
  "updated_at": "2026-02-06 18:10:10.149155",
  "included_in_item_cost": false
}
```

### Eliminar un tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/settings/charge_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
