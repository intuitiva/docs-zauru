---
title: "Pagar ordenes de compra y cargos adicionales"
sidebar_label: "Pagar ordenes de compra y cargos adicionales"
sidebar_position: 7
---

La mercadería ya llegó y su proveedor espera el pago, ya sea completo o en abonos. En este tutorial aprenderá a pagar sus órdenes de compra y los cargos adicionales asociados, y a elegir cuánto paga en cada ocasión: el monto total o pagos parciales según lo acordado con el proveedor.

> **Un cargo es un gasto o una factura pendiente de pagarle a un proveedor.** Pagar la orden de compra no paga los cargos; la orden puede cerrarse aunque los cargos sigan pendientes. Después de pagar una orden, revise la sección "Cargos" para no dejarlos olvidados.

## Pagar una orden de compra

Los pasos para pagar una orden de compra son:

1. Ir a "Compras".
2. Seleccionar "Ordenes de Compra".
3. Seleccionar "Pagar".

![imagen1](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-1.png)

Aparecerán las órdenes de compra del proveedor; en el ejemplo se paga una sola. Complete los campos:

a. Coloque la fecha del pago.

b. Coloque una referencia breve del pago.

c. Si le dieron un recibo, coloque el número.

d. Seleccione el método de pago: efectivo o cheque.

e. Coloque el monto a pagar, total o parcial. Verá la conversión en quetzales según el tipo de cambio configurado en "Configuraciones".

f. Para pagar solo una orden, marque "Eliminar" en las demás órdenes de la lista.

g. Presione "Vista Previa" para refrescar la página.

![imagen2](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-2.jpg)

Las órdenes marcadas desaparecerán del listado.

Por último, presione "Crear Pago" para realizar el pago.

![imagen3](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-3.jpg)

Aparecerá un mensaje de éxito y será dirigido automáticamente a la pestaña "Pagos", donde podrá ver todos los pagos realizados.

![imagen4](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-4.png)

## Pagar Cargos

Los cargos y aranceles que se agregan a las órdenes de compra se pagan de la siguiente forma:

1. Ir a "Compras".
2. Seleccionar "Cargos".
3. Seleccionar "Pagar".

![imagen5](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-5.png)

Aparecerán los cargos asociados al proveedor. Complete los campos:

a. Coloque la fecha del pago.

b. Coloque una referencia breve del pago.

c. Si le dieron un recibo, coloque el número.

d. Seleccione el método de pago: efectivo o cheque.

e. Coloque el monto a pagar, total o parcial.

* Si no desea pagar todos los cargos de la lista, marque el recuadro "Destruir" en los que no va a pagar.

f. Presione "Crear Pago".

![imagen6](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-6.png)

Aparecerá un mensaje de éxito.

![imagen7](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-7.jpg)

Con el pago registrado, Zauru deja constancia de cuánto le queda debiendo a cada proveedor. Cuando una orden esté totalmente recibida y pagada, pasará automáticamente a Órdenes de Compra Cerradas; recuerde que sus cargos se pagan aparte y pueden seguir pendientes.

## API (llamadas desde sistemas externos)

### Pagar una orden de compra o cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge": {
      "payee_id": "1",
      "date": "2018-12-21",
      "reference": "Referencia del pago",
      "receipt": "Recibo del pago",
      "discharge_method_id": "1",
      "discharge_details_attributes": {
        "0": {
          "purchase_order_id": "1",
          "amount": "120"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/discharges.json
```

Para pagar un cargo, envíe `charge_id` en lugar de `purchase_order_id`.

En caso de éxito, devuelve el mismo objeto del pago que "Ver detalles de un pago". Si el pago no es válido, devuelve un JSON con los errores, por ejemplo:
```json
{
  "date": [
    "Fecha mínima 2020-12-31"
  ]
}
```

### Eliminar pagos de OC o cargos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/discharges/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Ver detalles de un pago
El 1 al final de la URL es el ID del pago (descargo).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "369566",
  "zid": "9",
  "id_number": null,
  "date": "2026-03-09",
  "reference": "TRANSF. 307112394",
  "receipt": null,
  "amount": "3538.83",
  "memo": null,
  "voided": false,
  "voided_at": null,
  "payee_id": "1957270",
  "entity_id": "1303",
  "creator_id": "1274",
  "voider_id": null,
  "discharge_method_id": "2979",
  "created_at": "2026-03-09 20:18:26.671889",
  "updated_at": "2026-03-09 20:18:26.671889",
  "discharge_details_count": "2",
  "image": null,
  "draft": false,
  "authorizer_id": null,
  "authorized_at": null,
  "external_image_url": null
}
```

### Obtener datos para un pago nuevo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "",
  "date": "2026-08-06",
  "reference": null,
  "receipt": null,
  "amount": "58204.0",
  "memo": null,
  "voided": false,
  "voided_at": null,
  "payee_id": 1,
  "entity_id": 2,
  "creator_id": null,
  "voider_id": null,
  "discharge_method_id": 3,
  "created_at": null,
  "updated_at": null,
  "discharge_details_count": 0,
  "image": {
    "url": null,
    "standard": {
      "url": null
    }
  },
  "draft": false,
  "authorizer_id": null,
  "authorized_at": null,
  "external_image_url": null
}
```

### Obtener datos para editar un pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/1/edit.json
```

Devuelve el mismo objeto del pago que "Ver detalles de un pago".

### Actualizar un pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "discharge": {
      "reference": "Referencia actualizada",
      "receipt": "Recibo actualizado",
      "memo": "Notas del pago"
    }
  }' \
  https://app.zauru.com/purchases/discharges/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Autorizar un pago
Aplica cuando la variable `authorize_discharge` está activada y el pago fue creado como borrador.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/1/authorize.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Listado de pagos anulados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/voided.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": "",
    "date": "2022-10-12",
    "reference": "PTE-32",
    "receipt": "",
    "amount": "8500.32",
    "memo": "923999 N.D.Pago Banca Elec y/o Agente ",
    "voided": true,
    "voided_at": "2022-10-13T06:00:00.000Z",
    "payee_id": 3,
    "entity_id": 4,
    "creator_id": 5,
    "voider_id": 5,
    "discharge_method_id": 6,
    "created_at": "2022-10-12T23:58:44.389Z",
    "updated_at": "2022-10-13T00:04:16.162Z",
    "discharge_details_count": 1,
    "image": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1665619124/EMPRESAEJEMPLO/discharge/discharge_305_lykdhwqyrt59afdkldne.png",
      "standard": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_400/v1665619124/EMPRESAEJEMPLO/discharge/discharge_305_lykdhwqyrt59afdkldne.png"
      }
    },
    "draft": false,
    "authorizer_id": null,
    "authorized_at": null,
    "external_image_url": null
  }
]
```
