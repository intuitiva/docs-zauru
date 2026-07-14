---
title: "Solicitar los items disponibles con su foto, precios y existencias con el API"
sidebar_label: "Solicitar los items disponibles con su foto, precios y existencias con el API"
sidebar_position: 4
---

Para obtener un detalle en tiempo real de los items disponibles para la venta necesitamos hacer una consulta por el API de Zauru con las siguientes características:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: 45ERGDSFSLIU2332" \
  https://app.zauru.com/ecommerce/ecommerce_requests/get_items_for_ecommerce.json
```

## Parámetros opcionales de filtrado

El endpoint acepta los siguientes parámetros opcionales para personalizar la respuesta:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `force_agency` | integer | ID de una agencia específica (debe ser una agencia activa con e-commerce habilitado). Filtra las existencias para mostrar solo las de esa agencia. |
| `force_tag` | integer | ID de una etiqueta activa. Filtra los items y paquetes para mostrar solo los que tienen esa etiqueta asignada. |
| `force_price_list` | integer | ID de una lista de precios activa. Utiliza esa lista de precios en lugar de la lista de precios de la primera agencia e-commerce. |
| `force_vendor_code` | integer (`0` o `1`) | Si se envía `1`, el campo `code` en la respuesta devolverá el código del proveedor (`vendor_code`) en lugar del código del item. |

Ejemplo con parámetros:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: 45ERGDSFSLIU2332" \
  "https://app.zauru.com/ecommerce/ecommerce_requests/get_items_for_ecommerce.json?force_agency=5&force_tag=3&force_price_list=2&force_vendor_code=1"
```

## Estructura de la respuesta

La respuesta es un JSON con la siguiente estructura:

```json
{
  "item_category_name(<string>)":
    {
      "item_id(<integer>) | b-bundle_id(<string>)":
        {
          "name": <string>,
          "code": <string>,
          "ean13": <string>,
          "description": <string>,
          "price": <float>,
          "price_note": <string>,
          "stock": <integer> | "infinite",
          "photo": <image_object>,
          "photo2": <image_object>,
          "photo3": <image_object>,
          "photo4": <image_object>,
          "photo5": <image_object>,
          "pdf": <URL>,
          "months_warranty": <integer>,
          "measurement_unit": <string>,
          "weight": <integer>,
          "vendor": <string>,
          "tags": [<string>, <string>, ...]
        }
    }
}
```

### Campos de la respuesta

| Campo | Descripción |
|-------|-------------|
| `name` | Nombre del item o paquete |
| `code` | Código del item. Si se usó `force_vendor_code=1`, devuelve el código del proveedor |
| `ean13` | Código de barras EAN13 del item |
| `description` | Descripción del item o paquete |
| `price` | Precio según la lista de precios utilizada |
| `price_note` | Nota del precio público sugerido (si existe). Si la nota es un valor numérico, se convierte a la moneda de la entidad |
| `stock` | Existencia disponible. Para servicios devuelve `"infinite"` |
| `photo` | Imagen principal del producto. Si no tiene imagen, se envía cadena vacía `''` |
| `photo2` | Segunda imagen del producto. Si no tiene, se envía cadena vacía `''` |
| `photo3` | Tercera imagen del producto. Si no tiene, se envía cadena vacía `''` |
| `photo4` | Cuarta imagen del producto. Si no tiene, se envía cadena vacía `''` |
| `photo5` | Quinta imagen del producto. Si no tiene, se envía cadena vacía `''` |
| `pdf` | PDF asociado al producto (ficha técnica, manual, etc.) |
| `months_warranty` | Meses de garantía del producto |
| `measurement_unit` | Unidad de medida |
| `weight` | Peso del producto |
| `vendor` | Nombre del proveedor predefinido |
| `tags` | Arreglo de etiquetas asignadas al producto |

### Paquetes (Bundles)

Los paquetes o "bundles" también se incluyen en la respuesta del API. Los paquetes se identifican porque su `item_id` utiliza el formato `b-<bundle_id>` (prefijo "b-" seguido del ID del paquete).

Para los paquetes, los campos tienen el siguiente comportamiento:
- `name`: Nombre del paquete
- `code`: Código del paquete
- `ean13`: Código de barras EAN13 del paquete
- `description`: Descripción del paquete
- `price`: Precio del paquete según la lista de precios
- `price_note`: Nota del precio del paquete (si existe)
- `stock`: La cantidad mínima disponible entre todos los items almacenables del paquete, calculada como el mínimo de `(stock_disponible / cantidad_en_paquete)` entre todas las agencias e-commerce. Si el paquete solo contiene servicios (items no almacenables), la existencia es infinita.
- `measurement_unit`: Siempre es `"paquete"`
- `weight`: Suma de los pesos de todos los items que componen el paquete
- `months_warranty`: La garantía mínima entre todos los items del paquete
- `vendor`: El proveedor del primer item del paquete
- `tags`: Etiquetas asignadas al paquete

### Categorías sin nombre

Los items o paquetes que no tienen categoría asignada aparecen bajo la llave `""` (cadena vacía) en la respuesta.

### Categorías con notas

Cuando una categoría tiene una nota, se muestra en la llave del JSON con el formato `"Nombre de la categoría ** Nota de la categoría"`, separadas por `**`.

Como ejemplo, la respuesta del servidor sería similar a esta:

```json
{
  "":
    {
      "14832531":
        {
          "name":"CAMISA X",
          "code":"XUWOX",
          "ean13":"1234567890123",
          "description":"Camisa con diagonales verdes sobre fondo blanco",
          "price":"129.0",
          "price_note":"99.0",
          "stock":3,
          "photo": { "url": "https://..." },
          "photo2": "",
          "photo3": "",
          "photo4": "",
          "photo5": "",
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
          "ean13":"9876543210987",
          "description":"Pantalón de Lona blanca con detalles grices",
          "price":"225.0",
          "stock":10,
          "photo": { "url": "https://..." },
          "photo2": { "url": "https://..." },
          "photo3": { "url": "https://..." },
          "photo4": "",
          "photo5": "",
          "pdf": {"pdf":{"url": null}},
          "months_warranty":1,
          "measurement_unit":"UNIDAD",
          "weight":17,
          "vendor":"proveedor1",
          "tags": []
        }
    },
  "CATEGORIA2 ** Nota de categoria":
    {
      "b-4821":
        {
          "name":"OFERTA1",
          "code":"YXSOW",
          "ean13":"",
          "description":"Pantalón de Lona blanca con detalles grices y camisa con diagonales verdes sobre fondo blanco",
          "price":"300.0",
          "stock":3,
          "photo": { "url": "https://..." },
          "photo2": "",
          "photo3": "",
          "photo4": "",
          "photo5": "",
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

En este ejemplo hay 2 items y 1 paquete. El primer item no tiene categoría (está bajo `""`). El segundo está en "CATEGORIA1". El paquete está en "CATEGORIA2" que tiene una nota. El paquete se identifica por su ID con prefijo `b-`. Además, el primer producto tiene una `price_note` que indica un precio rebajado.

## Condiciones para que un item o paquete aparezca en la respuesta

Para que un item aparezca en los resultados, debe cumplir con TODAS estas condiciones:
1. Estar activo (`active: true`)
2. Ser vendible (`sellable: true`)
3. Tener habilitado el atributo de e-commerce (`ecommerce: true`)
4. Tener un precio en la lista de precios utilizada (no vacío)
5. Tener existencia disponible en al menos una de las agencias e-commerce (aunque actualmente tenga cero, debe haber tenido existencias en algún momento)

Para los paquetes, las condiciones equivalentes son:
1. Estar activo (`active: true`)
2. Ser vendible (`sellable: true`)
3. Tener habilitado el atributo de e-commerce (`ecommerce: true`)
4. Tener un precio sugerido en la lista de precios utilizada
5. Tener existencia disponible (al menos un item del paquete con stock, o ser un paquete de solo servicios)

## Almacenamiento en caché

Los precios de los paquetes se almacenan en caché por 3 horas para optimizar el rendimiento. La clave de caché incluye el ID de la entidad, la lista de precios, la cantidad de precios de paquetes y la fecha de última actualización, por lo que cualquier cambio en los precios invalida automáticamente la caché.
