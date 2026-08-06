---
title: "Pagar ordenes de compra y cargos adicionales"
sidebar_label: "Pagar ordenes de compra y cargos adicionales"
sidebar_position: 10
---

Este tutorial esta enfocado en pagar ordenes de compra y sus cargos adicionales.

Los pasos para hacer el pago de una orden de compra son los siguientes:

1. Ir a “Compras”.
2. Seleccionar “Ordenes de Compra”.
3. Seleccionar “Pagar”.

![imagen1](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-1.png)


Le aparecerán todas las ordenes de compra asociadas al proveedor. En este ejemplo solo vamos a realizar el pago de una orden de compra. Los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se realiza el pago.

b. Coloque una breve referencia del pago que se esta haciendo.

c. Si le dieron un recibo por la compra, coloque el numero de recibo.

d. Coloque el método de pago, ya sea en efectivo o con cheque.

e. Aquí debe colocar la cantidad que desea pagar, ya sea el monto total o un monto parcial. Le aparecerá la conversión en quetzales de acuerdo al tipo de cambio que usted haya establecido en “Configuraciones”.

f. En este ejemplo solo queremos realizar el pago de una orden de compra, entonces vamos a marcar la casilla de “Eliminar” en todas las demás ordenes de compra.

g. Presione “Vista Previa” para refrescar la página.

![imagen2](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-2.jpg)



Podrá ver que se borraron del listado las ordenes de compra que no queremos pagar ahora.

Por ultimo, presione “Crear Pago” para realizar el pago a la orden de compra.

![imagen3](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-3.jpg)



Le aparecerá un mensaje de éxito en la pantalla notificando que se creo el pago exitosamente. Sera dirigido automáticamente a la pestaña de “Pagos” donde podrá ver todos los pagos realizados.

![imagen4](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-4.png)



## Pagar Cargos

Los cargos y aranceles que se agregan a las ordenes de compra se pagan de la siguiente forma:

1. Ir a “Compras”.
2. Seleccionar “Cargos”.
3. Seleccionar “Pagar”.

![imagen5](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-5.png)


Le aparecerán las opciones para hacer un nuevo pago, junto con todos los cargos asociados al proveedor, los campos que debe llenar son los siguientes:

a. Coloque la fecha en que se realiza el pago.

b. Coloque una breve referencia del pago que se esta haciendo.

c. Si le dieron un recibo por la compra, coloque el numero de recibo.

d. Coloque el método de pago, ya sea en efectivo o con cheque.

e. Aquí debe colocar la cantidad que desea pagar, ya sea el monto total o un monto parcial.

* Si solo desea pagar un cargo, no todos los cargos que aparecen en la lista, marque el recuadro abajo de “Destruir”.

f. Para crear el pago presione “Crear Pago”.

![imagen6](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-6.png)



Le aparecerá un mensaje en la pantalla notificándole que se creo el pago exitosamente.

![imagen7](/img/compras/pagar-ordenes-de-compra-y-cargos-adicionales-7.jpg)


## API (llamadas desde sistemas externos)

### pagar una orden de compra o cargo
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

Esto devolverá un JSON similar a este:
```json
{
  "date": [
    "Fecha mínima 2020-12-31"
  ]
}
```

### eliminar pagos de OC o cargos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/discharges/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Ver detalles de un pago
El 1 al final de la URL es el ID del pago (descargo)
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

### Autorizar un pago
Aplica cuando la variable `authorize_discharge` esta activada y el pago fue creado como borrador.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/discharges/1/authorize.json
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
  },
  {
    "id": 7,
    "zid": 8,
    "id_number": "",
    "date": "2023-01-01",
    "reference": "",
    "receipt": "",
    "amount": "28.0",
    "memo": "",
    "voided": true,
    "voided_at": "2023-04-04T06:00:00.000Z",
    "payee_id": 9,
    "entity_id": 4,
    "creator_id": 5,
    "voider_id": 5,
    "discharge_method_id": 10,
    "created_at": "2023-03-15T15:49:49.760Z",
    "updated_at": "2023-04-04T17:23:14.270Z",
    "discharge_details_count": 1,
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
]
```
