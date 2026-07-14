---
title: "Creación de una orden o pedido con el API"
sidebar_label: "Creación de una orden o pedido con el API"
sidebar_position: 5
---

Para crear una orden/pedido por el API de e-commerce, se deben enviar 3 campos principales, el cliente (__obligatorio__), la orden (__obligatorio__) y el pago (__opcional__).

En general se debe enviar un JSON con esta estructura:
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

Nótese que solo hay 2 campos que no están dentro de dobles comillas (") y son item_id y quantity. Todos los demás deben ir dentro de dobles comillas (")

## Envío del JSON

Este JSON debe ir como una cadena de caracteres dentro de la llamada al API, dentro del campo `ecommerce_request[raw_params]`, de tal modo que este JSON en un cURL quedaría así:

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

## Envío de la solicitud original

Además del campo `raw_params`, se puede enviar el campo `ecommerce_request[original_request]` que contiene la solicitud tal cual como fue recibida del sistema externo (por ejemplo, el JSON completo del webhook de WooCommerce). Este campo es importante para:

1. **Detección de duplicados**: Zauru extrae el campo `id` del `original_request` y lo guarda como `original_request_id`. Si ya existe una solicitud con el mismo `original_request_id`, la nueva solicitud se rechaza automáticamente para evitar pedidos duplicados.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "ecommerce_request": {
      "raw_params": "{ \"client\": { ... }, \"order\": { ... }, \"payment\": { ... } }",
      "original_request": "{ \"id\": 12345, \"status\": \"processing\", \"customer\": { ... }, \"line_items\": [ ... ] }"
    }
  }' \
  https://app.zauru.com/ecommerce/ecommerce_requests.json
```

## Respuesta exitosa

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
  "original_request_id": null,
  "original_request": null,
  "zid":41
}
```

En donde lo más importante es el campo `id` que tiene el identificador de la orden o pedido para poder obtener más información de la orden o pedido en el futuro (principalmente obtener el estado del pedido).

## Campos de la respuesta

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único de la solicitud de e-commerce en Zauru |
| `entity_id` | ID de la entidad a la que pertenece la solicitud |
| `user_id` | ID del usuario de e-commerce que procesó la solicitud |
| `zid` | Identificador interno de la solicitud |
| `completed` | Indica si la solicitud ya fue procesada completamente |
| `completed_at` | Fecha y hora en que se completó el procesamiento |
| `invoices_count` | Cantidad de facturas asociadas a la solicitud |
| `shipments_count` | Cantidad de envíos generados para la solicitud |
| `raw_params` | Parámetros originales enviados en `raw_params` |
| `original_request` | Solicitud original completa enviada por el sistema externo |
| `original_request_id` | ID extraído de la solicitud original (usado para detección de duplicados) |
| `raw_errors` | Errores encontrados durante el procesamiento (si los hay) |
| `created_at` | Fecha y hora de creación de la solicitud |
| `updated_at` | Fecha y hora de última actualización |

## Respuesta de error por duplicado

Si se intenta crear una solicitud con un `original_request_id` que ya existe, la respuesta será:

```json
{
  "Request with ID 12345 already exists"
}
```

Con un código de estado HTTP `422 Unprocessable Entity`.

## Actualizar una solicitud existente

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "ecommerce_request": {
      "raw_params": "{ ... }"
    }
  }' \
  https://app.zauru.com/ecommerce/ecommerce_requests/44312.json
```
