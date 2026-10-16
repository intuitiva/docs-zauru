---
title: "Precios sugeridos"
sidebar_label: "Precios sugeridos"
sidebar_position: 3
---

Piense en el momento de abrir su tienda: si un producto no tiene precio, no podrá facturarlo. Por eso, antes de comenzar a vender hay que asignarle precios sugeridos de venta a cada producto: si algún item o paquete no tiene precio no va a aparecer en el listado de items o paquetes disponibles para la venta. Aquí verá cómo crearlos a mano, cómo consultar su historial, cómo funciona el precio flexible con fecha de expiración y cómo importarlos masivamente desde Excel para ahorrarse horas de digitación.

## Listar Precios Sugeridos

Para consultar los precios sugeridos de sus items y paquetes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar la pestaña de **"Items"** o **"Paquetes"** según corresponda.

<figure>

![3. Seleccionar la pestaña de **"Items"** o **"Paquetes"** según corresponda.](/img/ventas/precios-sugeridos-0.png)

<figcaption><a href="https://app.zauru.com/sales/suggested_prices">{"https://app.zauru.com/sales/suggested_prices"}</a></figcaption>
</figure>

<figure>

![imagen1](/img/ventas/importar-precios-0.png)

<figcaption><a href="https://app.zauru.com/sales/suggested_prices">{"https://app.zauru.com/sales/suggested_prices"}</a></figcaption>
</figure>

### Pestaña de Items

En el listado de items podrá ver:

- El nombre y código del item.
- La categoria del item.
- El precio actual en cada listado de precios configurado.
- La moneda del precio.

La tabla cuenta con búsqueda integrada por texto, que busca tanto en el nombre y código del item como en el nombre de los listados de precios. Los resultados se muestran paginados de 40 registros por página. Puede ordenar por ZID, código o nombre del item.

### Pestaña de Paquetes

La pestaña de paquetes funciona de manera similar a la de items, pero muestra los paquetes (bundles) activos con sus precios sugeridos. La búsqueda y paginación funcionan de la misma manera. Puede ordenar por ID, código o nombre del paquete.

## Ver Detalles de un Precio Sugerido

Para ver el historial completo de precios de un item o paquete:

1. En el listado de precios sugeridos, haga click sobre el precio que desea consultar.
2. Se mostrará el historial completo de precios para ese item o paquete dentro del mismo listado de precios.

<figure>

![imagen2](/img/ventas/importar-precios-0b.png)

<figcaption><a href="https://app.zauru.com/sales/suggested_prices">{"https://app.zauru.com/sales/suggested_prices"}</a></figcaption>
</figure>

El historial de precios incluye:

- Todos los precios anteriores y el actual.
- El monto de cada precio histórico.
- La moneda de cada precio.
- Si el precio era flexible o no.
- La fecha de expiración del precio, si tiene.
- Notas asociadas a cada precio.
- Fecha de creación de cada precio.
- Usuario que creó cada precio.

El sistema determina automáticamente si está consultando un item o un paquete y muestra el historial correspondiente al listado de precios asociado.

## Crear un Precio Sugerido Manualmente

Si desea crear un precio sugerido para un item o paquete de forma manual:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar **"Nuevo"**.

<figure>

![imagen3](/img/ventas/importar-precios-0c.png)

<figcaption><a href="https://app.zauru.com/sales/suggested_prices/new">{"https://app.zauru.com/sales/suggested_prices/new"}</a></figcaption>
</figure>

Los campos necesarios son:

a. **Item o Paquete**: Seleccione el item o paquete al que desea asignar el precio. Los paquetes se identifican con el prefijo "b" en el código (ej. "b123"). Los items aparecen agrupados por categoria y también se muestran items sin categoria.

b. **Listado de precios**: Seleccione el listado de precios al que pertenecerá este precio. Solo aparecen los listados de precios activos.

c. **Moneda**: Seleccione la moneda del precio.

d. **Monto**: Coloque el precio de venta sugerido.

e. **Precio flexible**: Marque esta opción si desea que el precio pueda ser modificado al momento de facturar.

f. **Fecha de expiración**: Aparece solo si marcó "Precio flexible". Indica hasta qué fecha el precio podrá modificarse al facturar; vencida la fecha, el precio queda fijo en su monto. Ver [Precios flexibles con fecha de expiración](#precios-flexibles-con-fecha-de-expiración) para el detalle completo.

g. **Notas**: Coloque notas adicionales sobre el precio.

Para guardar presione **"Crear Precio"**.

### Creación con Pre-llenado de Campos desde la URL

Zauru permite pre-llenar el formulario de creación de precios pasando parámetros por URL. Esto es útil para integraciones o accesos directos. Los parámetros disponibles son:

| Parámetro | Descripción |
|-----------|-------------|
| `i` | ID del item |
| `p` | ID del listado de precios |
| `a` | Monto del precio |
| `b` | ID del paquete (bundle) |
| `c` | ID de la moneda |
| `f` | Precio flexible (use "f" para activarlo) |

Ejemplo de URL con pre-llenado:
```
/sales/suggested_prices/new?i=150&p=3&a=99.99&c=1&f=f
```

### Detección Automática de Paquetes

Al crear un precio, si el ID del item comienza con "b", el sistema detecta automáticamente que se trata de un paquete y asigna el precio al bundle correspondiente en lugar de a un item regular.

## Precios flexibles con fecha de expiración

Un precio flexible es aquel que puede modificarse al momento de facturar. Un precio flexible puede tener además una fecha de expiración: hasta esa fecha el precio puede modificarse al facturar y, una vez vencida, deja de ser flexible y queda fijo en su monto.

Cómo funciona:

- La función debe estar habilitada en la empresa mediante la variable de configuración `flexible_price_expiration_date`. Si no lo está, Zauru descarta la fecha al crear el precio y este queda como precio flexible sin expiración.
- El campo "Fecha de expiración" solo aplica a precios flexibles. Si el precio no es flexible, el sistema elimina la fecha aunque se haya indicado.
- Si el precio tiene fecha de expiración, el monto es obligatorio. Un precio flexible sin fecha de expiración es el único caso en que el monto puede quedar vacío.
- Cuando la fecha de expiración llega (fecha menor o igual al día actual), una tarea programada diaria marca el precio como no flexible. El precio no se elimina ni cambia de monto: solo deja de poder modificarse al facturar.
- La fecha de expiración se muestra en el detalle del precio y en la columna "Fecha de expiración flexible" del historial.
- En la importación de Excel, la fecha se indica en la columna `flexible_price_expiration`.
- En el API, la fecha viaja en el campo `expiration_date` de los JSON de precios sugeridos.

## Desactivar un Precio Sugerido

Para desactivar un precio sugerido (no se elimina, solo se marca como no vigente):

1. En el listado de precios sugeridos, localice el precio que desea desactivar.
2. Haga click sobre **"Destruirlo"**.

Esto alterna la marca de `current` del precio a `false`, por lo que ya no será el precio vigente. El nuevo precio activo será el siguiente en el historial (si existe). El historial de precios se mantiene para referencia. Este mecanismo de soft-delete permite mantener trazabilidad completa de los cambios de precios.

Después de desactivar, será redirigido automáticamente al listado correspondiente (items o paquetes) según el tipo de precio desactivado.

## Exportar Precios Sugeridos

Zauru permite exportar los precios sugeridos en diferentes formatos:

### Exportar Precios de Items a Excel

Desde el listado de items, puede exportar a formato XLS. El archivo incluirá:
- Todos los items activos y vendibles con sus categorías.
- Los precios actuales en cada listado de precios activo.
- La moneda de cada precio.

### Exportar Precios de Paquetes a Excel

Desde la pestaña de paquetes, puede exportar los precios de los bundles activos a XLS con la misma estructura.

### Exportar Precios de Items a JSON

La exportación a JSON de items retorna un arreglo con todos los items activos y vendibles que tienen precio en el listado de precios general (sin `price_list_id`). Incluye:

- Datos del item (excepto imágenes, timestamps).
- Etiquetas (tags) del item.
- Categoría del item.
- Marca del item.
- Precios sugeridos actuales (monto y moneda).

### Exportar Precios de Paquetes a JSON

La exportación a JSON de paquetes retorna un hash donde la llave es el ID del paquete y el valor contiene los precios sugeridos actuales agrupados por listado de precios.

## Importar Precios desde Excel

La importación de precios sugeridos de items y paquetes se realiza desde el módulo de Importaciones de Datos, que permite mapear las columnas del archivo y validar cada fila antes de importarla. El botón **"Importar"** de cada pestaña de Precios Sugeridos abre directamente la pantalla de nueva importación.

El flujo completo (mapeo de columnas, validación fila por fila e importación) está descrito en [Importaciones de Datos](/primeros-pasos/importaciones-de-datos).

### Importar precios de items

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. En la pestaña de **"Items"**, seleccionar **"Importar"**.
4. Adjuntar el archivo Excel (CSV o XLS) y presionar **"Crear Data import"**.
5. Mapear las columnas, validar las filas e importarlas.

El tipo de documento queda fijo en **"Actualizar Ítems"**: cada fila busca el item por `zid`, `code` o `ean13` y actualiza sus campos. Para crear items nuevos con su precio, usar el tipo **"Crear Ítems con Precios"** desde Importaciones de Datos.

### Importar precios de paquetes

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. En la pestaña de **"Paquetes"**, seleccionar **"Importar"**.
4. Seleccionar el tipo de documento, adjuntar el archivo Excel (CSV o XLS) y presionar **"Crear Data import"**.
5. Mapear las columnas, validar las filas e importarlas.

Hay dos tipos de documento:

- **Crear Paquetes con Precios** (`bundles_with_prices`): crea paquetes nuevos con su composición y precio.
- **Actualizar Paquetes** (`bundles_update`): actualiza paquetes existentes buscándolos por `zid`, `code` o `ean13`. La composición incluida en el archivo reemplaza la composición completa del paquete.

#### Composición del paquete

La composición se indica con las siguientes columnas (pueden combinarse):

- `items_by_id`, `items_by_zid`, `items_by_code`, `items_by_ean13`, `items_by_name`
- `item_categories_by_id`, `item_categories_by_zid`, `item_categories_by_name`

Cada celda contiene pares `identificador:cantidad` separados por punto y coma. Si no se indica la cantidad, es 1. Ejemplo en `items_by_code`: `SKU001:2;SKU002:1`. Cuando se identifica por nombre, la búsqueda es por coincidencia parcial.

Reglas de la composición:

- El paquete debe incluir al menos un item o una categoría; si no, la fila reporta "Debe incluir al menos un item o categoría".
- Si un identificador no existe, la fila reporta "El item no existe" o "La categoría no existe", indicando la columna.

#### Precio del paquete

Si la fila incluye la columna `amount`, al importarla se crea el precio sugerido del paquete. Las columnas de precio son:

- `amount`: monto del precio.
- `currency_id` o `currency_code`: moneda del precio (ej. `GTQ`, `USD`). Si no se indica, se usa la moneda de la empresa.
- `price_list_id` o `price_list_name`: listado de precios al que pertenece. Si no se indica, el precio pertenece al listado general.
- `flexible_price`: si el precio puede modificarse al facturar (valores `TRUE` o `FALSE`).
- `flexible_price_expiration`: fecha de expiración del precio flexible (ver [Precios flexibles con fecha de expiración](#precios-flexibles-con-fecha-de-expiración)).
- `tag_ids`: IDs de etiquetas separados por coma.

Si la moneda o la lista de precios indicadas no existen, la fila no se importa y reporta "La moneda no existe" o "La lista de precios no existe".

Las mismas columnas de precio aplican a la importación de items con "Actualizar Ítems".

#### Plantilla

Desde la pantalla de nueva importación se puede descargar la plantilla del tipo de documento seleccionado. La plantilla incluye una fila de ejemplo con el formato esperado.

## API (llamadas desde sistemas externos)

### Listar precios sugeridos actuales (JSON)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "current": true,
    "currency_id": 2,
    "amount": "1000.0",
    "bundle_id": null,
    "item_id": 3,
    "creator_id": 4,
    "entity_id": 4,
    "notes": "",
    "created_at": "2011-12-10T15:00:04.000Z",
    "updated_at": "2011-12-10T15:00:04.000Z",
    "price_list_id": 5,
    "flexible_price": false,
    "expiration_date": null
  },
  {
    "id": 6,
    "current": true,
    "currency_id": 2,
    "amount": null,
    "bundle_id": null,
    "item_id": 7,
    "creator_id": 4,
    "entity_id": 4,
    "notes": "",
    "created_at": "2013-10-23T19:43:29.237Z",
    "updated_at": "2013-10-23T19:43:29.237Z",
    "price_list_id": null,
    "flexible_price": true,
    "expiration_date": null
  }
]
```

### Obtener plantilla para crear un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "current": null,
  "currency_id": null,
  "amount": null,
  "bundle_id": null,
  "item_id": null,
  "creator_id": null,
  "entity_id": 1,
  "notes": null,
  "created_at": null,
  "updated_at": null,
  "price_list_id": null,
  "flexible_price": false,
  "expiration_date": null
}
```

### Listar precios de ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": null,
    "invoice_detail_id": null,
    "unit_price": null,
    "quantity": null,
    "bundle_id": null,
    "item_id": null,
    "entity_id": null,
    "date": null,
    "created_at": null,
    "updated_at": null
  }
]
```

### Listar precios de paquetes (bundles)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices/bundles.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "invoice_detail_id": null,
  "unit_price": null,
  "quantity": null,
  "bundle_id": null,
  "item_id": null,
  "entity_id": null,
  "date": null,
  "created_at": null,
  "updated_at": null
}
```

### Ver detalle de un precio
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "invoice_detail_id": null,
  "unit_price": null,
  "quantity": null,
  "bundle_id": null,
  "item_id": null,
  "entity_id": null,
  "date": null,
  "created_at": null,
  "updated_at": null
}
```

### Crear precios sugeridos (item)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "suggested_price": {
      "price_list_id": "",
      "item_id": "165750",
      "currency_id": "1",
      "flexible_price": "1",
      "amount": "0",
      "notes": "creado desde el API"
    }
  }' \
  https://app.zauru.com/sales/suggested_prices.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "current": true,
  "currency_id": 2,
  "amount": "0.0",
  "bundle_id": null,
  "item_id": 3,
  "creator_id": 4,
  "entity_id": 5,
  "notes": "creado desde el API",
  "created_at": "2026-08-06T04:16:27.901Z",
  "updated_at": "2026-08-06T04:16:27.901Z",
  "price_list_id": null,
  "flexible_price": true,
  "expiration_date": null
}
```

### Crear precios sugeridos para paquetes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "suggested_price": {
      "price_list_id": "1",
      "item_id": "b25",
      "currency_id": "1",
      "flexible_price": "0",
      "amount": "150.00",
      "notes": "precio de paquete desde API"
    }
  }' \
  https://app.zauru.com/sales/suggested_prices.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "current": true,
  "currency_id": 2,
  "amount": "0.0",
  "bundle_id": null,
  "item_id": 3,
  "creator_id": 4,
  "entity_id": 5,
  "notes": "creado desde el API",
  "created_at": "2026-08-06T04:16:27.901Z",
  "updated_at": "2026-08-06T04:16:27.901Z",
  "price_list_id": null,
  "flexible_price": true,
  "expiration_date": null
}
```

### Ver detalle de un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "current": false,
  "currency_id": 1,
  "amount": "666.5",
  "bundle_id": null,
  "item_id": 2,
  "creator_id": 3,
  "entity_id": 3,
  "notes": "",
  "created_at": "2010-04-14T21:01:59.000Z",
  "updated_at": "2010-04-14T21:01:59.000Z",
  "price_list_id": 4,
  "flexible_price": false,
  "expiration_date": null
}
```

### Desactivar un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/suggested_prices/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Exportar precios sugeridos de items a JSON
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/export.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "active": true,
    "stockable": false,
    "sellable": true,
    "manufacturable": false,
    "purchasable": false,
    "code": "O23",
    "ean13": "",
    "name": "Desarrollo a la medida",
    "item_category_id": null,
    "measurement_unit": "",
    "weight": null,
    "volume": null,
    "description": "Desarrollo a la medida",
    "reorder_point": null,
    "economic_order_quantity": null,
    "months_warranty": null,
    "entity_id": 3,
    "updater_id": 4,
    "pays_vat": true,
    "tariff_rate": 0.0,
    "product_type": 1,
    "payee_id": null,
    "average_cost": null,
    "fifo_cost": null,
    "lifo_cost": null,
    "extra_tax_1": 0.0,
    "extra_tax_2": 0.0,
    "quotable": true,
    "ecommerce": false,
    "msrp": null,
    "tax1_use_msrp": false,
    "tax2_use_msrp": false,
    "vendor_code": "",
    "stocks_only_integer": true,
    "brand_id": null,
    "color": "#cccccc",
    "item_country_code_id": null,
    "youtube_video_url": null,
    "inventory_account_id": null,
    "master_item_id": null,
    "gemma_q4f16_embedding": "[-0.07550049,0.004776001,-0.01272583, ...]",
    "force_as_good_for_document_external_storage_service": false,
    "extra_description": null,
    "tags": [],
    "suggested_prices": [
      {
        "currency_id": 5,
        "amount": null
      }
    ]
  },
  {
    "id": 6,
    "zid": 7,
    "active": true,
    "stockable": false,
    "sellable": true,
    "manufacturable": false,
    "purchasable": false,
    "code": "S32",
    "ean13": "",
    "name": "1 hora de Configurar Plantillas de Impresión",
    "item_category_id": 8,
    "measurement_unit": "",
    "weight": null,
    "volume": null,
    "description": "",
    "reorder_point": null,
    "economic_order_quantity": null,
    "months_warranty": null,
    "entity_id": 3,
    "updater_id": 9,
    "pays_vat": true,
    "tariff_rate": 0.0,
    "product_type": 1,
    "payee_id": null,
    "average_cost": null,
    "fifo_cost": null,
    "lifo_cost": null,
    "extra_tax_1": 0.0,
    "extra_tax_2": 0.0,
    "quotable": true,
    "ecommerce": false,
    "msrp": null,
    "tax1_use_msrp": false,
    "tax2_use_msrp": false,
    "vendor_code": null,
    "stocks_only_integer": true,
    "brand_id": null,
    "color": "#cccccc",
    "item_country_code_id": null,
    "youtube_video_url": null,
    "inventory_account_id": null,
    "master_item_id": null,
    "gemma_q4f16_embedding": "[-0.107788086,-0.012275696,0.02029419, ...]",
    "force_as_good_for_document_external_storage_service": false,
    "extra_description": null,
    "tags": [],
    "item_category": {
      "id": 8,
      "name": "Soporte"
    },
    "suggested_prices": [
      {
        "currency_id": 5,
        "amount": "100.0"
      }
    ]
  }
]
```

### Exportar precios sugeridos de items a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/export.xls
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "933677",
  "zid": "97",
  "active": false,
  "stockable": true,
  "sellable": true,
  "manufacturable": false,
  "purchasable": true,
  "code": "TOP-COC-NEG ESTELAR-SHEILA",
  "ean13": null,
  "name": "TOP BLANCO ESTELAR COCINA SHEILA",
  "image": null,
  "item_category_id": null,
  "measurement_unit": null,
  "weight": null,
  "volume": null,
  "description": null,
  "reorder_point": null,
  "economic_order_quantity": null,
  "months_warranty": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-03-18 13:33:43.545197",
  "updated_at": "2026-06-21 05:05:55.796403",
  "pays_vat": true,
  "tariff_rate": "0",
  "pdf": null,
  "product_type": "1",
  "payee_id": null,
  "average_cost": null,
  "fifo_cost": null,
  "lifo_cost": null,
  "extra_tax_1": "0",
  "extra_tax_2": "0",
  "quotable": true,
  "ecommerce": false,
  "image2": null,
  "image3": null,
  "image4": null,
  "image5": null,
  "msrp": null,
  "tax1_use_msrp": false,
  "tax2_use_msrp": false,
  "vendor_code": null,
  "stocks_only_integer": false,
  "brand_id": null,
  "color": "#cccccc",
  "item_country_code_id": null,
  "youtube_video_url": null,
  "inventory_account_id": null,
  "master_item_id": null,
  "gemma_q4f16_embedding": null,
  "force_as_good_for_document_external_storage_service": false,
  "extra_description": null
}
```

### Exportar precios sugeridos de paquetes a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/bundles_export.xls
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2519586",
  "current": true,
  "currency_id": "1",
  "amount": "100.000000",
  "bundle_id": null,
  "item_id": "922105",
  "creator_id": "214",
  "entity_id": "1303",
  "notes": null,
  "created_at": "2026-03-19 16:40:13.662569",
  "updated_at": "2026-03-19 16:40:13.662569",
  "price_list_id": null,
  "flexible_price": true,
  "expiration_date": null
}
```

### Exportar precios sugeridos de paquetes a JSON
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/bundles_export.json
```

Esto devolverá un JSON similar a este:
```json
{
  "2": {
    "0": {
      "id": 1,
      "current": true,
      "currency_id": 2,
      "amount": "1199.0",
      "bundle_id": 3,
      "item_id": null,
      "creator_id": 3,
      "entity_id": 3,
      "notes": "",
      "created_at": "2011-01-14T22:58:17.000Z",
      "updated_at": "2011-01-14T22:58:17.000Z",
      "price_list_id": null,
      "flexible_price": false,
      "expiration_date": null
    }
  },
  "2655": {
    "40": {
      "id": 4,
      "current": true,
      "currency_id": 2,
      "amount": "199.0",
      "bundle_id": 5,
      "item_id": null,
      "creator_id": 6,
      "entity_id": 3,
      "notes": "",
      "created_at": "2014-11-05T23:05:48.433Z",
      "updated_at": "2014-11-05T23:05:48.433Z",
      "price_list_id": 7,
      "flexible_price": false,
      "expiration_date": null
    },
    "20": {
      "id": 8,
      "current": true,
      "currency_id": 2,
      "amount": "209.0",
      "bundle_id": 5,
      "item_id": null,
      "creator_id": 6,
      "entity_id": 3,
      "notes": "",
      "created_at": "2014-11-05T23:06:08.299Z",
      "updated_at": "2014-11-05T23:06:08.299Z",
      "price_list_id": 9,
      "flexible_price": false,
      "expiration_date": null
    }
  }
}
```

