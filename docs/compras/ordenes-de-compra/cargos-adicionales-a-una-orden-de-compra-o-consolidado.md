---
title: "Cargos adicionales a una orden de compra o consolidado"
sidebar_label: "Cargos adicionales a una orden de compra o consolidado"
sidebar_position: 5
---

Además del precio de los productos, es común que le cobren flete, seguridad, impuestos o el monitoreo GPS del contenedor, sobre todo en una importación. Si no registra esos cargos, el costo de su mercadería queda incompleto y su margen de ganancia se ve inflado. Este tutorial explica cómo registrar cargos adicionales a una orden de compra o a un consolidado, para que queden repartidos en el costo real de cada producto.

Hay dos formas de agregar cargos:

1. Agregar un cargo a una orden de compra individual.
2. Agregar un cargo a un consolidado de órdenes de compra.

Las dos formas se ejemplifican en el siguiente tutorial.

## Agregar un cargo a una orden de compra individual

Los pasos para agregar un cargo a una orden de compra individual son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccionar "Agregar Cargo".

![imagen1](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-1.jpg)

Complete los campos:

a. Coloque una referencia breve del cargo.

b. Si le dieron factura, coloque el número. Si no, deje el campo en blanco y quite "Sujeto a Impuestos".

c. Coloque la fecha del cargo.

d. Seleccione el término acordado con su proveedor: crédito o contado.

e. Coloque el nombre del proveedor existente o agregue uno nuevo.

f. Seleccione la orden de compra a la que agrega el cargo.

g. Seleccione el tipo de cargo y coloque el monto; en el ejemplo, "Flete terrestre". Para agregar más cargos a la misma orden, presione "+". Para crear un tipo de cargo, consulte [Tipos de cargos](/compras/tipos-de-cargos).

h. Presione "Crear cargo".

![imagen2](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-2.jpg)

Aparecerá un mensaje de éxito.

![imagen3](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-3.jpg)

## Agregar un cargo a un consolidado de órdenes de compra

Los pasos para agregar un cargo a un consolidado de órdenes de compra son:

1. Ir a "Compras".
2. Seleccionar "Consolidados".
3. Click sobre "Agregar cargo" en el consolidado de órdenes de compra.

![imagen4](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-4.jpg)

Complete los campos:

a. Coloque una referencia breve del cargo.

b. Si no le dieron factura, deje el campo en blanco y quite "Sujeto a Impuestos".

c. Si le dieron factura, coloque el número.

d. Coloque la fecha del cargo.

e. Seleccione el término acordado con su proveedor: crédito o contado.

f. Coloque el nombre del proveedor existente o agregue uno nuevo.

g. Seleccione la orden de compra a la que agrega el cargo.

h. Seleccione el tipo de cargo y coloque el monto; en el ejemplo, "Flete terrestre". Para agregar más cargos a la misma orden, presione "+". Para crear un tipo de cargo, consulte [Tipos de cargos](/compras/tipos-de-cargos).

i. Presione "Crear cargo".

![imagen5](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-5.jpg)

El cargo aparecerá en las órdenes de compra que pertenecen al consolidado.

Seleccione "Detalles" (el ojo) para ver la orden de compra.

![imagen6](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-6.jpg)

En la parte inferior de los detalles encontrará los cargos creados; se distribuyen de forma ponderada en el costo de cada producto.

![imagen7](/img/compras/cargos-adicionales-a-una-orden-de-compra-o-consolidado-7.jpg)

Con los cargos registrados, el costo de cada producto incluye todo lo que pagó para traerlo a su bodega. El siguiente paso es pagar esos cargos al proveedor; una vez pagados, Zauru los traslada a Cargos Pagados, donde puede consultarlos cuando lo necesite.

## API (llamadas desde sistemas externos)

### Ver detalles de un cargo
El 1 al final de la URL es el ID del cargo.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/charges/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "19422",
  "zid": "3771",
  "id_number": null,
  "reference": "LICENCIA MAGA",
  "purchase_order_id": "255935",
  "consolidate_id": null,
  "issue_date": "2022-01-10",
  "expected_payment": "2022-01-10",
  "charge_term_id": "300",
  "amount": "240.97",
  "due": "240.97",
  "payee_id": "97109",
  "memo": null,
  "image": null,
  "paid": false,
  "paid_at": null,
  "voider_id": null,
  "voided": false,
  "voided_at": null,
  "entity_id": "184",
  "creator_id": "357",
  "updater_id": "357",
  "created_at": "2022-02-01 15:28:12.241454",
  "updated_at": "2022-02-01 15:28:12.241454",
  "charge_details_count": "1",
  "tariffs_count": "0",
  "cost_amount": "240.97",
  "invoice": "16291229",
  "discharge_details_count": "0",
  "taxable": false,
  "external_image_url": null,
  "local_exchange_amount": "240.97",
  "local_exchange_cost_amount": "240.97",
  "not_included_vat": null,
  "pdf": null,
  "reception_id": null
}
```

### Obtener datos para un cargo nuevo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/charges/new.json
```

Devuelve el mismo objeto del cargo que "Ver detalles de un cargo".

### Obtener datos para editar un cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/charges/1/edit.json
```

Devuelve el mismo objeto del cargo que "Ver detalles de un cargo".

### Crear nuevo cargo adicional
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "charge": {
      "reference": "Flete terrestre",
      "issue_date": "2018-10-27",
      "charge_term_id": "1",
      "payee_info": "<V1> 1 | Proveedor de flete, S.A.",
      "purchase_order_id": "1",
      "charge_details_attributes": {
        "0": {
          "charge_type_id": "1",
          "amount": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/charges.json
```

En caso de éxito, devuelve el mismo objeto del cargo que "Ver detalles de un cargo". Si el cargo no es válido, devuelve un JSON con los errores, por ejemplo:
```json
{
  "payee_info": [
    "no puede estar en blanco"
  ],
  "issue_date": [
    "Fecha mínima 2020-12-31"
  ]
}
```

### Actualizar un cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "charge": {
      "reference": "Flete terrestre actualizado",
      "charge_details_attributes": {
        "0": {
          "id": "1",
          "charge_type_id": "1",
          "amount": "150"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/charges/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Anular un cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/charges/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
