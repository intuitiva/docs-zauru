---
title: "Solicitar los items disponibles con su foto, precios y existencias con el API"
sidebar_label: "Solicitar los items disponibles con su foto, precios y existencias con el API"
sidebar_position: 3
format: md
---

# Solicitar los items disponibles con sus fotos, precios y existencias con el API

Para obtener un detalle en tiempo real de los items disponibles para la venta necesitamos hacer una consulta por el API de Zauru con las siguientes características:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: 45ERGDSFSLIU2332" \
  https://app.zauru.com/ecommerce/ecommerce_requests/get_items_for_ecommerce.json
```

Y esto me va a devolver un JSON con las siguientes características:

```json
{
item_category_name(<string>): 
  {
    item_id(<integer>) | b-bundle_id(<string>):
      {
        name: <string>,
        code: <string>,
        description: <string>,
        price: <float>,
        stock: <integer> | "infinite",
        photo: {
         image: {
          url: <URL>,
          thumbnail_fill: {url: <URL>},
          standard: {url: <URL>},
          square_400: {url: <URL>},
          square_600: {url: <URL>},
          thumbnail: {url: <URL>},
          pos: {url: <URL>}
         }
        },
        pdf: <URL>,
        months_warranty: <integer>,
        measurement_unit: <string>,
        weight: <integer>,
        vendor: <string>,
        tags: [<string>, <string>, ...]
      },
    item_id2(<integer>) | b-bundle_id2(<string>):
      {
         ...
      }
  },
item_category_name2(<string>):
  {
    ...
  }
}
```

Como ejemplo, la respuesta del servidor sería similar a esta:

```json
{
"":
  {
    "14832531":
      {
        "name":"CAMISA X",
        "code":"XUWOX",
        "description":"Camisa con diagonales verdes sobre fondo blanco",
        "price":"129.0",
        "stock":3,
        "photo":{
          "image":{
            "url":null,
            "thumbnail_fill":{"url":null},
            "standard":{"url":null},
            "square_400":{"url":null},
            "square_600":{"url":null},
            "thumbnail":{"url":null},
            "pos":{"url":null}
          }
        },
        "pdf": {"pdf":{"url": null}},
        "months_warranty":0.5,
        "measurement_unit":"UNIDAD",
        "weight":8,
        "vendor":"",
        "tags": ["etiqueta1", "etiqueta2"]
      }
  },
"CATEGORIA1":
  {
    "18564662":
      {
        "name":"PANTALON Y",
        "code":"YXSOW",
        "description":"Pantalón de Lona blanca con detalles grices",
        "price":"225.0",
        "stock":10,
        "photo":{
          "image":{
            "url":null,
            "thumbnail_fill":{"url":null},
            "standard":{"url":null},
            "square_400":{"url":null},
            "square_600":{"url":null},
            "thumbnail":{"url":null},
            "pos":{"url":null}
          }
        },
        "pdf": {"pdf":{"url": null}},
        "months_warranty":1,
        "measurement_unit":"UNIDAD",
        "weight":17,
        "vendor":"proveedor1",
        "tags": []
      }
  },
"CATEGORIA2":
  {
    "18564372":
      {
        "name":"OFERTA1",
        "code":"YXSOW",
        "description":"Pantalón de Lona blanca con detalles grices y camisa con diagonales verdes sobre fondo blanco",
        "price":"300.0",
        "stock":3,
        "photo":{
          "image":{
            "url":null,
            "thumbnail_fill":{"url":null},
            "standard":{"url":null},
            "square_400":{"url":null},
            "square_600":{"url":null},
            "thumbnail":{"url":null},
            "pos":{"url":null}
          }
        },
        "pdf": {"pdf":{"url": null}},
        "months_warranty":0.5,
        "measurement_unit":"paquete",
        "weight":25,
        "vendor":"proveedor1",
        "tags": ["etiqueta1"]
      }
  }
}
```

En este caso hay 3 items, cada uno en su propia categoría, y la primera categoría no tiene nombre, o sea esos items no están categorizados.

En este caso también, todos tienen una existencia disponible, pero si se venden servicios en el campo “stock” aparece “infinite”.

En este caso también, 2 de los 3 productos tienen un mismo proveedor (“proveedor1”) y eso me permite una forma distinta de ordenar mis productos visualmente en la aplicación donde se vayan a utilizar estos datos.
