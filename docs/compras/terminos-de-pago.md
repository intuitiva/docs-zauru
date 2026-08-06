---
title: "Terminos de pago"
sidebar_label: "Terminos de pago"
sidebar_position: 1
---

Un termino de pago es el tiempo en el que se realizara el pago a un beneficiario. Zauru le permite configurar los terminos de pago de sus compras.

La forma de configurar sus compras es la siguiente:

1. Ir a “compras”.
2. Seleccionar el icono de configuraciones.

![imagen1](/img/compras/configuracion-1.jpg)

## Crear un termino de pago

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

## API (llamadas desde sistemas externos)

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
