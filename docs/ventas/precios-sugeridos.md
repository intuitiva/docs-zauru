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

![imagen1](/img/ventas/importar-precios-0.png)

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

![imagen2](/img/ventas/importar-precios-0b.png)

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

![imagen3](/img/ventas/importar-precios-0c.png)

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

## Importar Excel con Precios

Zauru le permite importar los precios de todos sus productos por medio de una plantilla de Excel para no tener que ponerlos manualmente. Los pasos para importar precios de los items son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar **"Item"** o **"Paquete"** según sea el caso.
4. Seleccionar **"Importar"**.

![imagen4](/img/ventas/importar-precios-1.jpg)

A continuación deberá descargar la plantilla de Excel para colocar los datos que quiere importar.

5. Descargar plantilla de Excel.

Los campos permitidos para importar son:

- currency_id
- amount
- notes
- flexible_price
- item_id
- bundle_id

Los campos obligatorios son:

- currency_id
- amount
- item_id o bundle_id

![imagen5](/img/ventas/importar-precios-2.png)

Esta es la plantilla de Excel donde deberá colocar los datos del item y su precio.

![imagen6](/img/ventas/importar-precios-3.png)

Al terminar de llenar el archivo de Excel con todos los precios de sus productos deberá guardar el archivo y adjuntarlo para importar sus precios, como se muestra en el paso.

6. Seleccione la ubicación de su plantilla de Excel.

7. Para Importar los precios presione **"Importar Precios"**.

![imagen7](/img/ventas/importar-precios-4.jpg)

Con los precios cargados, todos sus productos quedaron listos para aparecer en las órdenes y facturas, y usted se ahorró la digitación manual de cada uno. Cada vez que cambien sus precios, puede repetir la importación o actualizar los precios sugeridos directamente desde este módulo.

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
    "gemma_q4f16_embedding": "[-0.07550049,0.004776001,-0.01272583,0.011245728,-0.04159546,0.022033691,0.056549072,0.03967285,0.05886841,-0.054138184,-0.033813477,-0.013961792,-0.01727295,-0.020248413,0.06958008,-0.038604736,0.037872314,0.036621094,-0.036315918,0.0028190613,0.05307007,-0.046661377,0.013633728,-0.045776367,0.076416016,0.012908936,-0.004837036,-0.03677368,0.022369385,0.0010890961,0.0059776306,-0.0423584,0.045043945,0.036315918,-0.004512787,0.024978638,-0.03555298,-0.045776367,-0.022903442,-0.071899414,-0.037109375,0.06201172,-0.0017414093,0.007904053,-0.029800415,-0.047576904,0.010055542,-0.008415222,0.014961243,-0.020080566,-0.010139465,0.047698975,0.0079193115,0.051483154,-0.06097412,0.036010742,-0.026855469,0.0236969,0.010978699,0.002023697,-0.024154663,-0.037017822,-0.019042969,-0.036865234,0.051940918,-0.02319336,-0.0345459,0.016784668,0.030578613,0.17370605,-0.029876709,0.015617371,0.025268555,-0.033355713,0.107421875,0.05871582,-0.025436401,-0.05203247,-0.0032253265,0.009597778,-0.040374756,-0.014129639,-0.028930664,-0.041137695,0.10424805,-0.0057525635,-0.05331421,-0.02607727,0.015914917,-0.03857422,-0.013999939,0.0055236816,-0.02558899,0.0056419373,0.02355957,-0.008323669,-0.07366943,0.00079250336,-0.02633667,-0.013252258,0.014091492,-0.006843567,0.037872314,0.00020074844,-0.00017750263,0.008384705,-0.040771484,-0.026351929,0.010231018,0.00037240982,-0.013717651,-0.018569946,-0.020339966,-0.04083252,0.023040771,-0.052825928,-0.028152466,0.00018930435,0.014350891,-0.019958496,0.06530762,0.0070152283,-0.04827881,0.032714844,0.019973755,0.06011963,-0.040283203,-0.010185242,-0.02041626,0.07128906,0.019805908,0.007194519,0.04385376,0.05834961,-0.041870117,0.07043457,-0.028289795,0.044311523,0.03744507,0.048553467,0.0098724365,-0.029373169,0.01626587,-0.031707764,0.04852295,0.058563232,0.0071029663,0.020431519,0.014060974,-0.030029297,0.01979065,-0.023651123,0.010948181,-0.049957275,-0.04849243,-0.028869629,0.0059814453,-0.056884766,-0.04336548,-0.04159546,-0.036224365,-0.04852295,0.04611206,0.027160645,-0.022918701,0.09674072,0.00089645386,0.043060303,-0.012557983,-0.0131073,-0.053497314,-0.01725769,-0.048095703,-0.052856445,0.0104522705,-0.010772705,-0.025558472,-0.071777344,-0.052215576,-0.0068588257,-0.09472656,0.06112671,-0.05355835,-0.038269043,-0.09051514,0.0030937195,0.012840271,0.0121536255,0.0019378662,0.026245117,-0.0031051636,-0.021240234,0.056274414,-0.023986816,0.022979736,-0.017333984,0.011726379,0.028686523,-0.076660156,0.022583008,0.009979248,-0.036071777,0.007835388,0.05722046,-0.040924072,-0.0395813,-0.008735657,0.03112793,0.011360168,0.021408081,-0.08483887,-0.003921509,-0.022628784,-0.03062439,0.025817871,-0.007522583,-0.02519226,-0.023361206,0.008049011,-0.027435303,-0.01348114,-0.008346558,0.016342163,-0.04940796,-0.008171082,0.022857666,-0.015548706,-0.030838013,0.024520874,-0.012161255,-0.021835327,0.033843994,-0.051849365,0.042877197,0.0053749084,-0.030731201,0.0025463104,-0.03164673,0.022476196,0.010238647,-0.045288086,0.019226074,-0.03189087,-0.0034618378,-0.026168823,0.046936035,-0.0034427643,-0.023880005,0.03866577,-0.04574585,-0.041931152,-0.033935547,-0.029830933,0.026473999,0.018600464,0.044891357,-0.02557373,-0.025772095,0.011459351,0.012565613,-0.038024902,0.044677734,-0.025024414,-0.029129028,0.04714966,0.050079346,-0.048583984,-0.035339355,-0.0317688,-0.0012187958,0.04034424,-0.02017212,0.02949524,-0.080078125,0.011711121,-0.017028809,-0.018966675,0.030426025,-0.013633728,-0.03338623,-0.009559631,0.017669678,-0.010513306,0.0056610107,0.060791016,0.044952393,0.047912598,0.025848389,-0.036987305,-0.012199402,0.01776123,-0.003534317,0.029373169,0.01727295,0.012779236,0.03060913,-0.02670288,0.04348755,-0.0082473755,0.015655518,-0.015991211,-0.0072517395,0.0064582825,-0.02293396,0.022827148,0.0055885315,0.03112793,0.019897461,-0.026168823,-0.026412964,-0.02444458,-0.03366089,0.0015621185,0.014007568,0.0002875328,-0.041625977,-0.025604248,-0.036865234,-2.7954578e-05,0.038848877,0.015930176,-0.04876709,0.029846191,0.033233643,-0.005252838,-0.017028809,0.02658081,0.0074501038,-0.095214844,0.036376953,-0.037506104,-0.004966736,0.010520935,0.017562866,0.056610107,0.0119018555,0.03842163,-0.010055542,-0.029403687,-0.091430664,0.030258179,-0.005355835,-0.0011396408,0.012969971,0.005619049,0.046813965,0.020935059,0.010368347,0.040130615,-0.023864746,0.029083252,-0.011138916,0.028320312,-0.023727417,-0.0317688,0.010177612,0.017730713,0.02267456,0.09490967,0.017074585,-0.022247314,-0.06982422,0.022827148,-0.033569336,0.0062065125,-0.021636963,0.0095825195,0.028366089,0.046142578,-0.008407593,-0.0032653809,-0.014335632,0.003211975,-0.028305054,-0.0115737915,-0.031921387,0.007785797,0.038116455,0.0024299622,0.03768921,-0.0015907288,0.0003452301,0.030319214,0.00687027,0.026275635,0.0062675476,0.095458984,0.08050537,0.008926392,0.02319336,-0.04626465,0.022903442,-0.039276123,-0.016815186,0.05041504,0.014816284,0.072021484,0.029159546,0.050354004,-0.039886475,-0.023635864,-0.020141602,-0.0340271,-0.017578125,0.00919342,0.02168274,0.00642395,-0.0014972687,0.028518677,0.03414917,-0.045288086,-0.1105957,-0.01084137,-0.017745972,-0.017715454,-0.05126953,-0.010986328,-0.04776001,-0.064453125,0.00029540062,0.010574341,0.027236938,0.04336548,0.107299805,0.029205322,0.019714355,0.011444092,-0.01184082,0.077697754,-0.027420044,0.024261475,-0.056274414,0.014785767,0.019104004,0.03540039,-0.033111572,-0.028549194,0.0115737915,0.016662598,-0.009994507,-0.058135986,0.006515503,-0.03326416,0.0036449432,-0.0020885468,-0.0126571655,-0.032592773,0.016647339,-0.025024414,-0.05227661,-0.0037670135,0.016448975,-0.016906738,0.030090332,0.07098389,0.034576416,-0.029052734,-0.0073394775,-0.031051636,0.011039734,0.01626587,-0.03591919,-0.011924744,-0.006023407,0.004383087,-0.0023326874,0.018981934,0.005264282,-0.08477783,0.02027893,0.0074653625,0.020950317,-0.0154953,0.043640137,-0.0064811707,0.018081665,-0.06225586,0.013679504,0.04360962,0.047424316,-0.06384277,0.0031414032,0.055847168,0.04498291,0.0056915283,-0.039764404,0.055023193,0.023010254,-0.026748657,0.032165527,0.0014886856,0.07513428,0.047546387,0.031463623,0.040893555,-0.025054932,0.0069236755,-0.013710022,-0.024658203,-0.074523926,-0.023635864,0.022399902,0.042663574,0.041656494,0.06347656,0.03616333,0.010108948,-0.049804688,-0.0098724365,-0.00032043457,0.017593384,0.053253174,-0.008811951,0.048553467,-0.05807495,0.035888672,0.018295288,0.0011291504,-0.00093364716,0.012207031,0.027175903,0.05029297,-0.013206482,-0.0052261353,-0.06225586,0.009101868,-0.039916992,0.013687134,0.005596161,-0.013381958,-0.026611328,-0.038024902,-0.006729126,-0.029968262,0.011100769,-0.024337769,-0.012260437,-0.013031006,0.0637207,-0.03012085,0.045013428,-0.006175995,0.014343262,0.060424805,0.005584717,-0.002412796,0.04336548,-0.016357422,0.068603516,0.08026123,0.046203613,0.03591919,0.00018560886,0.056121826,-0.0289917,0.020370483,-0.082336426,-0.02748108,-0.008758545,0.0635376,-0.001742363,-0.0048675537,-0.057891846,0.015930176,-0.006866455,-0.0027389526,-0.050842285,-0.0049819946,0.012359619,0.013175964,0.008308411,0.03668213,0.042388916,-0.02041626,0.054138184,0.08013916,-0.008712769,-0.026123047,0.02949524,0.033477783,-0.010910034,-6.1154366e-05,0.1348877,0.018295288,-0.0129776,0.012191772,-0.0041923523,-0.02458191,0.009399414,-0.026489258,-0.072265625,0.021072388,-0.062286377,0.018997192,-0.011657715,0.009063721,-0.016357422,0.023162842,0.030593872,-0.025161743,-0.01838684,-0.048187256,-0.060668945,0.023651123,-0.014640808,-0.027023315,-0.0068626404,-0.003900528,-0.013298035,0.034698486,-0.03213501,0.08734131,-0.010887146,-0.008972168,0.068359375,-0.00056648254,0.08526611,0.082214355,0.07910156,0.008811951,0.016555786,0.03503418,-0.003753662,0.025634766,0.05142212,-0.023651123,-0.06365967,-0.0038452148,0.008575439,-0.0064849854,0.023361206,0.030960083,-0.03353882,0.032287598,-0.029083252,-0.005683899,0.03778076,-0.032989502,-0.023544312,-0.00090026855,0.03933716,-0.027053833,-0.027770996,0.074645996,-0.084228516,-0.0016651154,0.012260437,-0.06774902,-0.030960083,0.017181396,0.0032615662,0.011001587,0.0018777847,-0.07330322,-0.05215454,-0.033081055,0.03125,-0.021987915,0.02609253,0.0050239563,0.017532349,0.008155823,-0.0095825195,-0.031158447,-0.028869629,0.008094788,-0.00042963028,-0.0045814514,0.0038223267,0.0070114136,0.0006084442,0.095947266,-0.010070801,-0.0030822754,0.012542725,0.026931763,-0.0006098747,0.0020446777,-0.004032135,-0.028518677,0.008743286,-0.0018501282,-0.025390625,0.0116119385,0.04537964,-0.057739258,-0.016906738,-0.0129470825,0.024932861,0.021118164,-0.016616821,0.013267517,0.0395813,-0.0053215027,0.039001465,-0.026168823,0.032989502,-0.012741089,0.00315094,0.007843018,-0.038726807,-0.035461426,0.025360107,0.020629883,-0.023330688,-0.015586853,-0.029922485,-0.032470703,0.03955078,-0.00907135,-0.020706177,0.02758789,0.04888916,-0.07092285,0.0069007874,-0.010627747,0.009277344,0.035369873,0.0040397644,0.015388489,0.022949219,-0.004310608,0.0259552,-0.05886841,-0.019348145,-0.00093364716,-0.064697266,-0.012756348,-0.021316528,-0.021102905,0.016647339,-0.012565613,0.011795044,0.021331787,0.049102783,-0.0033092499,0.017852783,-0.08203125,0.030654907,-0.009796143,0.011909485,-0.054504395,0.032470703,0.0047721863,-0.04498291,-0.078063965,-0.091918945,0.02684021,-0.026763916,-0.003314972,-0.0053367615,0.0055770874,-0.0362854,0.020690918,0.057678223,-0.07092285,-0.040039062,0.018447876,-0.0013666153,-0.007286072,-0.03326416,0.027832031,0.0006918907,0.0053634644,0.008956909,-0.04788208,0.017028809,-0.02758789]",
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
    "gemma_q4f16_embedding": "[-0.107788086,-0.012275696,0.02029419,-0.028381348,0.025512695,-0.028793335,-0.062164307,0.017440796,0.040161133,-0.024230957,0.012237549,-0.020492554,0.04260254,-0.06994629,0.03161621,0.01612854,0.022994995,0.07928467,0.0042533875,-0.021652222,-0.006465912,0.000890255,-0.044525146,0.015235901,0.0076560974,0.041381836,0.026229858,0.0033302307,-0.017044067,-0.016860962,-0.017944336,0.022918701,0.026992798,-0.005138397,-0.0030155182,0.045715332,0.0055503845,-0.041748047,0.064331055,-0.054626465,-0.009681702,0.06488037,-0.06652832,-0.018325806,-0.017959595,0.012710571,0.030960083,0.030319214,0.076171875,0.02456665,-0.0030956268,0.03729248,-0.032165527,0.055908203,-0.021881104,-0.009552002,-0.03475952,-0.08416748,-0.013496399,-0.016418457,0.019958496,0.02154541,-0.0925293,0.0104522705,0.019561768,0.0013895035,0.06323242,-0.005722046,-0.016799927,0.11016846,-0.012519836,-0.031829834,-0.035888672,-0.013832092,0.1026001,0.115234375,-0.00015759468,-0.007041931,0.003824234,-0.0713501,0.025405884,-0.011772156,-0.0524292,-0.028137207,0.09875488,0.034820557,-0.0036716461,0.1048584,0.019134521,-0.022842407,-0.030471802,-0.016845703,-0.025863647,0.023284912,-0.016174316,-0.035888672,-0.061553955,-0.033172607,0.054382324,0.01965332,0.039733887,-0.023208618,-0.029388428,-0.0048065186,-0.023071289,0.013313293,-0.03753662,-0.021713257,-0.023208618,0.029220581,-0.035125732,-0.021957397,0.04840088,0.023452759,-0.043914795,-0.044311523,-0.0039367676,-0.02557373,-0.05130005,0.023788452,0.070129395,0.0065612793,-0.003993988,-0.048858643,-0.03869629,-0.010345459,-0.023910522,-0.0055503845,-0.043945312,0.029449463,0.028884888,-0.010978699,-0.013801575,0.029571533,-0.043060303,0.05557251,0.031097412,0.039855957,0.028411865,0.017608643,-0.05319214,-0.005722046,-0.036590576,0.030349731,0.0060653687,0.058532715,0.026687622,0.02748108,0.0024433136,0.0027370453,0.04916382,0.06903076,-0.008911133,-0.018157959,0.04788208,-0.03994751,-0.008834839,0.026168823,-0.039031982,0.031829834,-0.052764893,0.046081543,0.032196045,0.03842163,0.048095703,0.04937744,0.018234253,0.066101074,-0.05038452,-0.05291748,-0.026397705,-0.04196167,0.01826477,-0.012542725,-0.07055664,-0.02571106,-0.007534027,0.009559631,-0.098083496,0.05682373,0.057739258,0.10491943,-0.022338867,-0.0011043549,-0.08685303,0.025985718,-0.041534424,-0.025115967,0.013069153,0.0039100647,0.024642944,0.026351929,0.042907715,-0.047698975,0.017532349,-0.037719727,0.0072517395,0.0095825195,-0.029373169,0.005432129,-0.0006465912,0.013801575,0.025741577,-0.010635376,0.011100769,-0.0072669983,0.0057296753,0.016204834,-0.015838623,-0.07122803,-0.060058594,-0.012832642,-0.024169922,-0.019378662,0.041107178,0.010383606,-0.016708374,0.000320673,0.012527466,0.016479492,0.048065186,-0.066833496,0.00944519,0.005844116,0.020065308,-0.015571594,-0.005027771,-0.11047363,0.0014619827,-0.0025196075,-0.01852417,0.001584053,-0.029251099,0.03778076,-0.034362793,-0.009414673,0.00054073334,0.008842468,0.017288208,0.007259369,-0.028045654,0.007030487,-0.037322998,-0.0048332214,-0.027435303,0.019088745,0.044952393,-0.0501709,0.0015773773,0.0045814514,-0.011878967,-0.058776855,0.015113831,-0.05871582,0.018127441,0.044708252,0.043029785,0.0670166,0.0037574768,0.012374878,-0.038024902,-0.008323669,-0.002292633,0.08441162,-0.03668213,-0.010620117,-0.016159058,0.054473877,-0.0043182373,0.0051727295,0.08807373,0.009918213,0.023071289,0.010505676,0.019226074,-0.033233643,0.010063171,0.011917114,-0.033721924,-0.014167786,0.023986816,0.017456055,0.095458984,0.0149002075,0.0019235611,0.051879883,0.005908966,-0.008735657,-0.032226562,-0.027069092,-0.05178833,0.02230835,0.023529053,-0.0075645447,-0.017684937,0.00029492378,-0.01335907,-0.026168823,0.033447266,0.04034424,0.04385376,-0.019866943,-0.008460999,0.002368927,0.035827637,-0.018127441,0.040100098,-0.02003479,-0.082214355,-0.047180176,0.004020691,-0.017608643,-0.058044434,-0.0013685226,-0.033691406,0.058898926,0.0418396,-0.005176544,-0.023208618,-0.042144775,-0.034851074,-0.047729492,0.063964844,0.025299072,-0.017181396,0.03338623,0.01802063,-0.0060424805,-0.041381836,-0.0035362244,-0.018829346,0.045837402,0.01777649,0.012039185,0.012275696,0.037322998,0.017929077,-0.07946777,-0.003288269,0.014007568,-0.030776978,0.06768799,0.022644043,-0.033996582,0.048309326,-0.0082473755,0.038970947,-0.013465881,-0.09106445,-0.03741455,-0.030014038,-0.016815186,-0.016113281,-0.015014648,0.011482239,-0.03656006,-0.064453125,0.013999939,0.040222168,-0.027313232,0.0070991516,0.011688232,-0.013458252,-0.037750244,-0.011100769,0.010040283,-0.02029419,-0.00066661835,0.04510498,0.011268616,0.036132812,-0.055023193,0.03869629,-0.04837036,0.035247803,0.0012769699,0.0064430237,0.049560547,0.030303955,-0.03756714,-0.020446777,-0.012367249,0.04309082,-0.016448975,0.03579712,-0.038391113,0.015556335,0.0093307495,-0.02166748,0.0036182404,-0.016616821,-0.015014648,-0.0357666,0.00038409233,0.043304443,-0.042785645,0.038757324,-0.011436462,-0.024276733,-0.047668457,-0.04763794,-0.0015134811,-0.0131073,0.017059326,0.027191162,-0.061157227,-0.0073242188,0.022827148,0.0126953125,-0.00687027,0.029266357,-0.05923462,-0.0058670044,-0.05569458,0.035064697,-0.026260376,-0.003490448,-0.012626648,-0.0022010803,0.010025024,-0.026733398,0.03970337,-0.030792236,-0.013885498,0.0178833,-0.049713135,0.027694702,-0.03756714,0.011329651,-0.060150146,0.052093506,-0.009063721,-0.08984375,0.02796936,0.029953003,-0.014694214,-0.009109497,0.008682251,0.05038452,0.04107666,-0.02684021,-0.020477295,0.009056091,-0.07672119,-0.044525146,-0.025161743,-0.024261475,0.026611328,-0.060516357,-0.048095703,-0.036743164,0.041992188,-0.018325806,-0.060394287,-0.031463623,-0.053955078,0.0446167,0.018203735,-0.037963867,0.01133728,-0.08068848,-0.06677246,-0.035491943,-0.033477783,-0.017745972,0.062927246,-0.024291992,0.046417236,-0.06414795,0.01084137,-0.022003174,-0.049102783,-0.060028076,0.024246216,-0.0005712509,0.06878662,0.0340271,0.018127441,-0.008468628,-0.03286743,0.022903442,-0.066467285,9.417534e-05,-0.046142578,0.029220581,-0.020202637,0.024871826,-0.008346558,-0.03479004,-0.0042533875,-0.010803223,-0.038330078,0.0128479,0.06756592,0.032958984,0.06439209,-0.02960205,-0.013656616,-0.03062439,-0.015457153,-0.031463623,0.0036334991,-0.01828003,0.020431519,0.068481445,-0.031677246,-0.012390137,0.04260254,-0.049316406,0.0013666153,-0.021652222,0.011619568,-0.02482605,0.03387451,-0.040649414,-0.0030441284,-0.05923462,0.0061302185,0.019012451,0.024337769,0.039154053,0.07318115,-0.005760193,0.01889038,0.028778076,0.029418945,-0.04321289,0.006023407,0.033447266,0.02330017,-0.056640625,0.056762695,-0.039031982,0.01751709,-0.02180481,-0.008728027,-0.045196533,0.049560547,-0.014343262,0.032073975,0.059661865,0.031921387,0.03829956,-0.00970459,0.057037354,-0.012084961,0.00573349,-0.012306213,0.0076293945,0.052978516,-0.0054244995,-0.012145996,0.021591187,-0.03677368,-0.037963867,0.06100464,-0.06677246,0.012367249,-0.018371582,0.010978699,0.054229736,-0.022094727,0.002380371,0.0005054474,0.017196655,0.058898926,-0.013595581,-0.01751709,-0.047332764,0.05038452,-0.024963379,0.013420105,0.076293945,0.017456055,0.024658203,0.037200928,0.01134491,-0.028396606,0.0115737915,-0.063964844,-0.03152466,-0.050750732,-0.010360718,0.034851074,0.045135498,0.026168823,-0.06225586,0.020843506,0.053344727,-0.013015747,-0.042266846,0.0015697479,-0.03765869,0.07739258,-0.020339966,0.040893555,-0.0012922287,0.039367676,0.009925842,0.0063323975,0.014701843,-0.049468994,0.014221191,0.018920898,0.0027885437,-0.008087158,0.038757324,-0.029449463,-0.05456543,-0.019699097,-0.014183044,0.024856567,-0.027633667,-0.047912598,0.0057296753,-0.03491211,0.0059280396,0.020431519,-0.0027675629,-0.059295654,0.02645874,0.0569458,-0.00035095215,0.010101318,0.019485474,-0.0063705444,0.003129959,-0.015342712,0.03704834,-0.0040626526,0.037353516,0.01991272,-0.019577026,0.047332764,0.028808594,-0.0104904175,-0.045440674,0.023849487,-0.014968872,0.0028457642,0.013946533,-0.01309967,0.0005235672,0.05380249,-0.04559326,-0.002729416,-0.008735657,-0.051208496,0.023406982,0.049835205,-0.03111267,0.0129776,0.06414795,-0.052947998,0.057159424,0.019638062,0.0099105835,0.008613586,-0.009735107,-0.04321289,-0.06524658,-0.02230835,-0.026931763,0.014183044,-0.014015198,-0.009963989,0.04168701,0.027053833,-0.019821167,-0.023086548,-0.026321411,-0.017929077,-0.005153656,-0.0005450249,-0.024032593,-0.017410278,0.028137207,-0.027130127,0.032318115,0.01020813,-0.032073975,-0.06359863,-0.023773193,0.024978638,0.034210205,0.02671814,-0.024398804,-0.060913086,-0.0054893494,-0.08691406,0.023361206,-0.0010166168,0.046295166,0.046569824,-0.008529663,0.006965637,0.024383545,-0.06237793,-0.011695862,-0.020584106,-0.034301758,-0.05609131,0.024642944,0.025253296,-0.001666069,-0.040496826,-0.009712219,-0.037261963,0.020385742,-0.009887695,-0.017105103,-0.014427185,-0.005054474,-0.027694702,0.007972717,-0.010314941,0.024993896,0.002407074,0.022903442,-0.07397461,0.008071899,0.015098572,0.014564514,-0.006122589,0.056121826,0.00806427,-0.028030396,0.0035419464,-0.048065186,0.008491516,0.04901123,-0.042663574,-0.07287598,-0.04269409,0.026123047,0.053527832,0.043304443,0.0038204193,0.006679535,-0.051483154,0.0079193115,0.00034999847,-0.0017137527,-0.046569824,-0.005622864,-0.04232788,-0.07739258,0.06976318,0.020812988,0.0020122528,0.023269653,0.04248047,0.009780884,-0.005302429,-0.02368164,-0.030197144,-0.055877686,0.0035114288,-0.0059318542,0.003627777,-0.034851074,-0.057403564,0.0015287399,-0.020767212,-0.008743286,0.01197052,0.053863525,-0.015144348]",
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

### Obtener plantilla para importar precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/price_imports/new.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Importar precios desde un archivo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -F "price_import[file]=@/ruta/al/archivo.xlsx" \
  https://app.zauru.com/sales/suggested_prices/price_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Campos adicionales soportados en la importación

Además de los campos previos, el archivo de importación de precios ahora admite las siguientes columnas:

- `currency_code`: código de la moneda (ej. `GTQ`, `USD`). Zauru buscará la moneda por su código; si no existe, la importación reportará el error "La moneda no existe".
- `price_list_name`: nombre de la lista de precios a la que pertenece el precio. Zauru buscará la lista por nombre; si no existe, reportará "La lista de precios no existe".
- `price_list_id`: ID de la lista de precios.
- `flexible_price_expiration`: fecha de expiración del precio flexible.

Si la moneda o la lista de precios indicadas no existen, la fila no se importará y se mostrará el error correspondiente.
