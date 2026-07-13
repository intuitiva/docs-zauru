---
title: "Creación de una orden o pedido con el API"
sidebar_label: "Creación de una orden o pedido con el API"
sidebar_position: 4
---

Para crear una orden/pedido por el API de e-commerce, se deben enviar 3 campos principales, el cliente (__obligatorio__), la orden (__obligatorio__) y el pago (__opcional__).

En general se debe enviar un JSON _en forma de texto con esta estructura:
```json
{
 "client": {
   "name":"Cliente Prueba",
   "tin":"12345678-9",
   "address_line_1":"17 calle 2-80 zona 11",
   "delivery_address":"17 calle 2-80 zona 11",
   "phone":"2329-3992",
   "email":"alto@bajo.com",
   "reference":"cualquier referencia",
   "notes":"cualquier info extra"
 },
 "order": {
   "date":"2018-05-14",
   "invoice_details_attributes": [
     {
       "item_id":185609,
       "quantity":1
     },
     {
       "item_id":185609,
       "quantity":2,
       "unit_price":12.99
     }
   ],
   "reference":"prueba",
   "memo":"cualquier informacion extra",
   "extra_discount":10.00
 },
 "payment": {
   "reference":"autorizacion tarjeta",
   "receipt":"recibo",
   "memo":"cualquier informacion extra"
 }
}
```

Nótese que solo hay 2 campos que no están dentro de dobles comillas (“) y son item_id y quantity. Todos los demás deben ir dentro de dobles comillas (“)

Este JSON debe ir como una cadena de caracteres dentro de la llamada al API, de tal modo que este JSON en un cURL quedaría así:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "ecommerce_request": {
      "raw_params": "{ \"client\": { \"name\":\"Cliente Prueba\", \"tin\":\"12345678-9\", \"address_line_1\":\"17 calle 2-80 zona 11\", \"delivery_address\":\"17 calle 2-80 zona 11\", \"phone\":\"2329-3992\", \"email\":\"alto@bajo.com\", \"reference\":\"colegio campo real\", \"notes\":\"cualquier info extra\" }, \"order\": { \"date\":\"2018-05-14\", \"invoice_details_attributes\": [ { \"item_id\":140924, \"quantity\":1 }, { \"item_id\":140867, \"quantity\":2, \"unit_price\":12.99 } ], \"reference\":\"prueba\", \"memo\":\"cualquier informacion extra\" }, \"payment\": { \"reference\":\"autorizacion tarjeta\", \"receipt\":\"recibo\", \"memo\":\"cualquier informacion extra\" } }"
    }
  }' \
  https://app.zauru.com/ecommerce/ecommerce_requests.json
```

Al llamar esta función nos va a responder un JSON similar a este:
```json
{
  "completed":false,
  "completed_at":null,
  "created_at":"2018-07-18T00:17:12Z",
  "entity_id":22801,
  "id":44312,
  "invoices_count":0,
  "raw_errors":null,
  "raw_params":"{ \"client\": { \"name\":\"Cliente Prueba\", \"tin\":\"12345678-9\", \"address_line_1\":\"17 calle 2-80 zona 11\", \"delivery_address\":\"17 calle 2-80 zona 11\", \"phone\":\"2329-3992\", \"email\":\"alto@bajo.com\", \"reference\":\"colegio campo real\", \"notes\":\"cualquier info extra\" }, \"order\": { \"date\":\"2018-05-14\", \"invoice_details_attributes\": [ { \"item_id\":140924, \"quantity\":1 }, { \"item_id\":140867, \"quantity\":2 } ], \"reference\":\"prueba\", \"memo\":\"cualquier informacion extra\" }, \"payment\": { \"reference\":\"autorizacion tarjeta\", \"receipt\":\"recibo\", \"memo\":\"generado desde el API\" } }",
  "shipments_count":0,
  "updated_at":"2018-07-18T00:17:12Z",
  "user_id":11232,
  "zid":41
}
```

En donde lo más importante es el campo “id” que tiene el identificador de la orden o pedido para poder obtener más información de la orden o pedido en el futuro (principalmente obtener el estado del pedido).
