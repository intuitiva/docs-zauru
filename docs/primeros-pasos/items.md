---
title: "Items"
sidebar_label: "Items"
sidebar_position: 7
---

Antes de vender o comprar su primer producto, necesita registrarlo como ítem en Zauru. Los ítems son los artículos de los que usted quiere llevar el control: la mercadería que almacena, los productos que vende y los servicios que presta. Hay varios tipos de ítems y varias formas de categorizarlos; a continuación veremos cómo funcionan en Zauru.

## Nuevo Ítem (producto o servicio)
Antes de poder vender o comprar productos o servicios, hay que crear los ítems que contengan el nombre y las especificaciones de estos. Los pasos para crear un Ítem son los siguientes:

1. Ir a “Configuraciones”
2. Seleccionar “Ítems”
3. Seleccionar “Nuevo Ítem”

![43a69-nuevoitemskitch](/img/primeros-pasos/items-1.jpg)

## Tipos de Item basados en como se manejan sus inventarios
Al crear un ítem, lo primero que conviene aclarar es si se trata de un producto que se almacena o de un servicio. Hay 2 tipos de Ítems:

1. Los Ítems que son productos
2. Los ítems que son servicios
Los productos son almacenables  y registran existencias, los servicios no son almacenables. Al seleccionar la caja de Almacenable (Paso 1) se registraran existencias de este ítem, si no se selecciona la caja de Almacenable (Paso 1) Zauru sabrá que este ítem es un servicio.

### Tipos de productos (items no servicios)
Hay productos que son vendibles, pero no son comprables, y hay productos que son comprables pero no vendibles, por ejemplo: En un escenario de una Empresa que produce su propia mercadería, la materia prima es comprable, luego de un proceso de producción, el producto terminado vendible.  Dicha empresa no  venderá materia prima y no comprara producto terminado. Entonces el ítem de su materia prima es comprable  y su producto terminado es vendible.

Hay 3 Tipos de Productos (Paso 2):

1. Los productos identificables, que llevan numero de serie único
2. Los productos perecederos, que pertenecen a un lote y tienen fecha de expiración.
3. Los productos normales, que no tienen fecha de vencimiento ni numero de serie.

![2](/img/primeros-pasos/items-2.jpg)

## Otras Características de los Ítems
Sus productos pueden tener ciertas características que los diferencien de los demás, por ejemplo: su peso, su unidad de medida, sus meses de garantía, un punto de re orden y una cantidad recomendada a ordenar. Para especificar dichas categorías a sus productos deberá colocarlas en el ítem, las características son las siguientes:

Si un ítem esta activo se podrá interactuar con el dentro del sistema.
Coloque el nombre de su producto, no es recomendable que tenga productos con el mismo nombre.
Coloque el código de su producto, si tiene.
Coloque el código de barras de su producto para que pueda ser leído por el lector de código de barras.
Coloque la unidad que utiliza para medir su producto.
Coloque el peso de su producto.
Coloque el volumen en metros cúbicos de su producto.
Coloque la cantidad mínima que debería de tener en existencia de su producto. Cuando las existencias alcancen esa cantidad, el sistema le notificara poniendo su producto en color rojo, para que sepa cuando es recomendable volver a ordenar.
Cuando su producto llegue a un punto de re orden, especifique la cantidad que seria recomendable volver a comprar.
Coloque los meses de garantía que tiene su producto o Servicio.
Si su producto o servicio paga IVA marque el cheque, si no, déjelo vacío.
Coloque la tasa de arancel que paga su producto en la importación.
Si su producto o servicio tiene alguna característica que no se pudo especificar en los campos anteriores, la puede colocar en la descripción.
Adjunte imágenes de sus productos para que sean visibles en el modulo de punto de venta (P.O.S).
Adjunte un PDF.
Adjunte un producto o servicio a un proyecto que haya creado previamente.
Seleccione un proveedor definido de sus productos o servicios.
Para Guardar los cambios presione el botón de “Crear ítem”.

NOTA: La única característica obligatoria del ítem es su nombre, todos los demás campos son opcionales.

![3](/img/primeros-pasos/items-3.jpg)

## Importar Ítems
Cuando su empresa tiene cientos de productos o servicios puede ser tedioso crear items. Zauru le permite importar cantidades grandes de Ítems en formatos pre-definidos de Excel. Los pasos para importar ítems son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Click en el botón de “Importar”.

![5](/img/primeros-pasos/items-4.png)

A continuación encontrara una guía para la importación de sus Ítems.

4.  Deberá descargar la plantilla de importación de Ítems señalada. El único campo obligatorio para importar ítems es el nombre, todos los demás campos son opcionales.

Las entradas de texto permitidas para cada campo están especificadas en la imagen de abajo y son las siguientes:

- Booleano: TRUE or FALSE, si no se especifica una de las dos variables en la importación el sistema asumirá que es FALSE.
- Numero Entero: Solo se permiten números sin punto decimal o separador de miles (comas).
- Numero con Decimales: Solo numero sin separador de miles (comas).
- Texto: Cualquier carácter es permitido.
- Cadena de texto: Cualquier carácter dentro de la cadena es permitido, pero que no sea mayor a 256 caracteres.

5. Al terminar de colocar los campos que desee importar en la plantilla de Excel deberá seleccionar el archivo a importar.

6. Seleccione el botón de “Importar Ítems” y espere a que Zauru suba sus ítems, si aparece algún error en la importación, revise si su plantilla de Excel cumple las normas de importación.
![6](/img/primeros-pasos/items-5.jpg)

## Categorizar Ítems
Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Es posible categorizar sus productos en Zauru para poder ubicar sus productos más fácilmente. Los pasos para categorizar ítems son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Categoría de Ítems” en las pestañas.
4. Click en el botón “+ Nueva Categoría de Ítems”.

![7](/img/primeros-pasos/items-6.png)

5. Coloque el Nombre de la Categoría de Ítems.

6. Coloque una nota sobre la categoría de Ítems. (opcional)

7. Presione “Crear Categoría de Ítems”.

![8](/img/primeros-pasos/items-7.png)

Luego de crear la Categoría de Ítems deberá colocársela al ítem(s) que desea categorizar. La forma de hacerlo es la siguiente:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccione “Editar” para agregar un ítem existente a una categoría.

![9](/img/primeros-pasos/items-8.png)

## Súper Categorías de Ítems

Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Ahora es posible categorizar sus productos en Zauru también por *__SÚPER CATEGORÍAS__*, lo cual permitirá poder ubicar sus productos de una forma aún más fácil. Los pasos para categorizar ítems con *__SÚPER CATEGORÍAS__* son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Súper Categoría de Ítems” en las pestañas.
4. Click en el botón “+ Nueva Súper Categoría de Ítems”.

![Súper Categorías](/img/primeros-pasos/items-9.png)

5. Coloque el Nombre de la Súper Categoría de Ítems.
6. Coloque una nota sobre la Súper categoría de Ítems. (opcional)
7. Puede elegir un color (Esto será funcional si la empresa utiliza el módulo de PDV.
8. Presione “Crear Súper Categoría de Ítems”.

![Nueva Súper Categoría](/img/primeros-pasos/items-10.png)

## Marcas de Ítems

Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Ahora es posible categorizar sus productos en Zauru también por *__MARCAS__*, lo cual permitirá poder ubicar sus productos de una forma aún más fácil. Los pasos para categorizar ítems con *__MARCAS__* son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Marcas” en las pestañas.
4. Click en el botón “+ Nueva Marca”.

![Marca de ïtems](/img/primeros-pasos/items-11.png)

5. Coloque el Nombre de la Marca de Ítems.
6. Coloque una nota sobre la Marca de Ítems. (opcional)
7. Puede elegir un color (Esto será funcional si la empresa utiliza el módulo de PDV.
8. Presione “Crear Marca”.

![Nueva Marca de Ítems](/img/primeros-pasos/items-12.png)

Ya registró sus ítems y los organizó con categorías, súper categorías y marcas según lo necesitaba. Con su catálogo en orden, podrá asignarles precios, controlar existencias y usarlos en ventas y compras; si tiene muchos productos pendientes, la importación desde Excel le ahorrará horas de trabajo.

## API (llamadas desde sistemas externos)

### obtener información del item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/1.json
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

### datatables de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"start": "0", "length": "25"}' \
  https://app.zauru.com/settings/items/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 190,
  "recordsFiltered": 190,
  "data": [
    {
      "zid": "<a href=\"/settings/items/1\">149</a>",
      "cod": "<a href=\"/settings/items/1\"></a>",
      "act": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "name": "<a href=\"/settings/items/1\">Cambio de monitor reacondicionado por monitor nuevo Dell 19 pulgadas</a>",
      "stck": "<span style=\"color: red;\"><i class=\"fa fa-times\" alt=\"times\"></i></span> ",
      "sell": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span> CRM",
      "purch": "<span style=\"color: red;\"><i class=\"fa fa-times\" alt=\"times\"></i></span>",
      "cat": "Hardware",
      "cat_note": "",
      "vat": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "warr": "",
      "ra": "<a title=\"Detalles\" href=\"/settings/items/1\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/items/1/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Destruirlo\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/settings/items/1?destroy=true\"><i class=\"fa fa-trash-o\"></i></a><a title=\"Editar imágenes\" href=\"/settings/items/1/edit_images\"><i class=\"fa fa-file-image-o\"></i></a>",
      "DT_RowId": "settings-item-351218"
    },
    {
      "zid": "<a href=\"/settings/items/2\">133</a>",
      "cod": "<a href=\"/settings/items/2\"></a>",
      "act": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "name": "<a href=\"/settings/items/2\">Gaveta de dinero APTUS con puerto RJ12 de impresora de tickets, 5 secciones de billetes, 8 secciones de monedas, ranuras frontales, color negro</a>",
      "stck": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span> N ",
      "sell": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span> CRM",
      "purch": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "cat": "Hardware",
      "cat_note": "",
      "vat": "<span style=\"color: green;\"><i class=\"fa fa-check\" alt=\"check\"></i></span>",
      "warr": "",
      "ra": "<a title=\"Detalles\" href=\"/settings/items/2\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/items/2/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Editar imágenes\" href=\"/settings/items/2/edit_images\"><i class=\"fa fa-file-image-o\"></i></a>",
      "DT_RowId": "settings-item-344478"
    }
  ]
}
```

### obtener nube de etiquetas de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/tag_cloud.json
```

### crear item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item": {
      "name": "Producto prueba",
      "reference": "Referencia del producto prueba",
      "stockable": "false"
    }
  }' \
  https://app.zauru.com/settings/items.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "active": true,
  "stockable": false,
  "sellable": true,
  "manufacturable": false,
  "purchasable": false,
  "code": null,
  "ean13": null,
  "name": "Producto prueba",
  "image": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "item_category_id": null,
  "measurement_unit": null,
  "weight": null,
  "volume": null,
  "description": null,
  "reorder_point": null,
  "economic_order_quantity": null,
  "months_warranty": null,
  "entity_id": 3,
  "updater_id": 4,
  "created_at": "2026-08-06T04:16:54.540Z",
  "updated_at": "2026-08-06T04:16:54.540Z",
  "pays_vat": true,
  "tariff_rate": 0.0,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "product_type": 1,
  "payee_id": null,
  "average_cost": null,
  "fifo_cost": null,
  "lifo_cost": null,
  "extra_tax_1": 0.0,
  "extra_tax_2": 0.0,
  "quotable": true,
  "ecommerce": false,
  "image2": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "image3": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "image4": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "image5": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "msrp": null,
  "tax1_use_msrp": false,
  "tax2_use_msrp": false,
  "vendor_code": null,
  "stocks_only_integer": true,
  "brand_id": null,
  "color": "#CCCCCC",
  "item_country_code_id": null,
  "youtube_video_url": null,
  "inventory_account_id": null,
  "master_item_id": null,
  "gemma_q4f16_embedding": null,
  "force_as_good_for_document_external_storage_service": false,
  "extra_description": null
}
```

### actualizar item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "item": {
      "name": "Producto prueba actualizado",
      "sellable": "1",
      "purchasable": "1"
    }
  }' \
  https://app.zauru.com/settings/items/1.json
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

### actualizar variaciones de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "id": "1",
    "items": [
      {
        "id": "2",
        "master_item_id": "1",
        "item_attributes_attributes": [
          {"key": "Color", "value": "Rojo", "color": "#FF0000"}
        ]
      }
    ]
  }' \
  https://app.zauru.com/settings/items/1/update_item_variations.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```

### destruir item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### actualizar imágenes del item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "item": {
      "image": "imagen.jpg",
      "image2": "imagen2.jpg"
    }
  }' \
  https://app.zauru.com/settings/items/1/update_images.json
```

Esto devolverá un JSON similar a este:
```json
{
  "errors": []
}
```

Nota: Solo se puede eliminar el item si no tiene # de serie, lotes, aparece a un envío, aparece a un paquete, aparece a una factura, aparece en una orden de compra o está seleccionado en algún descuentos de items.

### listado de categorías de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "name": "cuotas distribuidor",
    "notes": "super categoría",
    "updater_id": 2,
    "entity_id": 3,
    "created_at": "2014-03-19T21:34:47.179Z",
    "updated_at": "2020-06-10T21:09:56.741Z",
    "items_count": 13,
    "bundles_count": 1,
    "item_super_category_id": null,
    "color": "#ff0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "zid": 2
  },
  {
    "id": 4,
    "name": "Usuarios",
    "notes": "",
    "updater_id": 2,
    "entity_id": 3,
    "created_at": "2023-12-11T04:35:01.981Z",
    "updated_at": "2023-12-11T04:35:01.981Z",
    "items_count": 7,
    "bundles_count": 0,
    "item_super_category_id": null,
    "color": "#ff0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "zid": 5
  }
]
```

### crear categoría de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_category": {
      "name": "super categoria",
      "notes": "descripcion de la categoria"
    }
  }' \
  https://app.zauru.com/settings/items/item_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ],
  "entity": [
    "es inválido"
  ]
}
```

### obtener detalle de categoría de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10913",
  "name": "FRITURAS",
  "notes": null,
  "updater_id": "2282",
  "entity_id": "909",
  "created_at": "2023-06-27 22:21:37.821581",
  "updated_at": "2023-06-27 22:21:37.821581",
  "items_count": "12",
  "bundles_count": "0",
  "item_super_category_id": null,
  "color": "#ff0000",
  "image": null,
  "zid": "23"
}
```

### actualizar categoría de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "item_category": {
      "name": "categoria actualizada"
    }
  }' \
  https://app.zauru.com/settings/items/item_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10913",
  "name": "FRITURAS",
  "notes": null,
  "updater_id": "2282",
  "entity_id": "909",
  "created_at": "2023-06-27 22:21:37.821581",
  "updated_at": "2023-06-27 22:21:37.821581",
  "items_count": "12",
  "bundles_count": "0",
  "item_super_category_id": null,
  "color": "#ff0000",
  "image": null,
  "zid": "23"
}
```

### eliminar categoría de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/item_categories/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).


---

## Variaciones de Ítems

Zauru le permite manejar variaciones de un mismo producto (por ejemplo: diferentes colores, tallas o materiales de un mismo artículo). Las variaciones se manejan a través de un sistema de Ítem Maestro e Ítems Hijos.

### Configurar Variaciones

Para gestionar las variaciones de un ítem:

1. Vaya al detalle del ítem que será el maestro.
2. Seleccione la opción "Editar Variaciones".

En esta vista podrá:

- Ver todos los ítems hijos (variaciones) del ítem maestro.
- Agregar nuevos ítems como variaciones seleccionándolos de una lista de ítems similares.
- Crear nuevos ítems hijos directamente con sus atributos de variación (ej. Color: Rojo, Talla: M).
- Editar los atributos de cada variación (clave, valor y color).
- Desvincular un ítem hijo del maestro.

Cada ítem hijo hereda automáticamente los atributos del ítem maestro cuando este se actualiza, manteniendo la consistencia entre todas las variaciones.

### Atributos de Ítem

Los atributos son pares clave-valor que permiten definir las características de las variaciones. Por ejemplo:
- **Clave:** Color, **Valor:** Rojo
- **Clave:** Talla, **Valor:** M
- **Clave:** Material, **Valor:** Algodón

Cada atributo puede tener un color asociado (útil para el módulo de Punto de Venta).

## Importar Ítems con Precios de Venta

Además de la importación básica de ítems, Zauru le permite importar ítems junto con sus precios de venta sugeridos. Para ello:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Importar Ítems con Precios de Venta".

Esta funcionalidad le permite especificar, además de los datos del ítem, el precio de venta, la moneda del precio y si es un precio flexible, creando automáticamente el precio sugerido al importar.

## Verificación de Ítems Faltantes en Importación

Cuando realiza una importación de ítems, Zauru le permite verificar si existen ítems que no se importaron correctamente. Esta funcionalidad es útil para auditorías de importación:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Verificar Ítems Faltantes".

El sistema comparará los datos del archivo de importación con los ítems existentes y le mostrará cuáles no se encuentran en el sistema, permitiéndole crear los ítems faltantes directamente.

## Filtrar Ítems por Etiquetas

En el listado de ítems, Zauru le muestra una nube de etiquetas (Tag Cloud) que le permite filtrar rápidamente los productos por las etiquetas que tengan asignadas. Simplemente haga click en una etiqueta de la nube para filtrar los ítems que la tengan.

## Exportar Ítems

Zauru le permite exportar su listado de ítems en formato CSV, XLS o JSON. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar el formato de exportación deseado (CSV, XLS o JSON).

Los datos exportados incluyen: código, nombre, categoría, marca, etiquetas, estado activo, tipo de producto, precios y demás características.

## Formularios Asociados al Ítem

Al visualizar los detalles de un ítem, Zauru le mostrará los formularios personalizados que tenga asociados para el tipo de documento "Ítem". También podrá ver el historial de formularios enviados (submissions) relacionados con ese ítem.

## API (llamadas desde sistemas externos)

### Obtener listado de marcas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/brands.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "Marca Ejemplo",
    "description": "Descripción de la marca",
    "color": "#FF0000",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": null,
    "created_at": "2026-08-06T04:14:15.933Z",
    "updated_at": "2026-08-06T04:14:15.933Z",
    "items_count": null
  }
]
```

### Crear marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "brand": {
      "name": "Marca Ejemplo",
      "description": "Descripción de la marca",
      "color": "#FF0000"
    }
  }' \
  https://app.zauru.com/settings/items/brands.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Marca Ejemplo",
  "description": "Descripción de la marca",
  "color": "#FF0000",
  "image": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "entity_id": 2,
  "creator_id": 3,
  "updater_id": null,
  "created_at": "2026-08-06T04:16:54.858Z",
  "updated_at": "2026-08-06T04:16:54.858Z",
  "items_count": null
}
```

### Exportar ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/export.csv
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

### Obtener ítems en JSON con todas las asociaciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/export.json
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
    "code": "R-DZC-50-64",
    "ean13": "",
    "name": "Reportes a la medida (50 a 64)",
    "item_category_id": 3,
    "measurement_unit": "",
    "weight": null,
    "volume": null,
    "description": "",
    "reorder_point": null,
    "economic_order_quantity": null,
    "months_warranty": null,
    "entity_id": 4,
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
    "force_as_good_for_document_external_storage_service": false,
    "extra_description": null,
    "tags": [],
    "item_category": {
      "id": 3,
      "name": "cuotas mensuales"
    }
  },
  {
    "id": 5,
    "zid": 6,
    "active": true,
    "stockable": false,
    "sellable": true,
    "manufacturable": false,
    "purchasable": false,
    "code": "R-DZC-65-79",
    "ean13": "",
    "name": "Reportes a la medida (65 a 79)",
    "item_category_id": 3,
    "measurement_unit": "",
    "weight": null,
    "volume": null,
    "description": "",
    "reorder_point": null,
    "economic_order_quantity": null,
    "months_warranty": null,
    "entity_id": 4,
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
    "force_as_good_for_document_external_storage_service": false,
    "extra_description": null,
    "tags": [],
    "item_category": {
      "id": 3,
      "name": "cuotas mensuales"
    }
  }
]
```

### API de Súper Categorías de Ítems

#### Obtener listado de súper categorías
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_super_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "Electrónica",
    "description": "Productos electrónicos",
    "color": "#0000FF",
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "entity_id": 2,
    "creator_id": 3,
    "updater_id": null,
    "created_at": "2026-08-06T04:14:16.230Z",
    "updated_at": "2026-08-06T04:14:16.230Z",
    "item_categories_count": null
  }
]
```

#### Crear súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_super_category": {
      "name": "Electrónica",
      "description": "Productos electrónicos",
      "color": "#0000FF"
    }
  }' \
  https://app.zauru.com/settings/items/item_super_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Electrónica",
  "description": "Productos electrónicos",
  "color": "#0000FF",
  "image": {
    "url": null,
    "thumbnail_fill": {
      "url": null
    }
  },
  "entity_id": 2,
  "creator_id": 3,
  "updater_id": null,
  "created_at": "2026-08-06T04:16:55.160Z",
  "updated_at": "2026-08-06T04:16:55.160Z",
  "item_categories_count": null
}
```

#### Actualizar súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "item_super_category": {
      "name": "Electrónica y Accesorios"
    }
  }' \
  https://app.zauru.com/settings/items/item_super_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "800",
  "zid": "1",
  "name": "ANTIBIOTICO",
  "description": null,
  "color": "#f9b935",
  "image": null,
  "entity_id": "1173",
  "creator_id": "942",
  "updater_id": null,
  "created_at": "2025-06-16 19:53:52.011749",
  "updated_at": "2025-06-16 19:53:52.011749",
  "item_categories_count": "3"
}
```

#### Eliminar súper categoría de ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/item_super_categories/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### API de Marcas de Ítems

#### Obtener detalle de una marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/brands/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "198",
  "zid": "75",
  "name": "DOMICILIOS ",
  "description": null,
  "color": "#ffff00",
  "image": null,
  "entity_id": "1019",
  "creator_id": "2596",
  "updater_id": null,
  "created_at": "2023-04-19 14:57:11.616538",
  "updated_at": "2023-04-19 14:57:11.616538",
  "items_count": "5"
}
```

#### Actualizar marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "brand": {
      "name": "Marca Ejemplo Actualizada"
    }
  }' \
  https://app.zauru.com/settings/items/brands/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "198",
  "zid": "75",
  "name": "DOMICILIOS ",
  "description": null,
  "color": "#ffff00",
  "image": null,
  "entity_id": "1019",
  "creator_id": "2596",
  "updater_id": null,
  "created_at": "2023-04-19 14:57:11.616538",
  "updated_at": "2023-04-19 14:57:11.616538",
  "items_count": "5"
}
```

#### Eliminar marca
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/brands/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### API de Importación de Ítems

#### Crear importación de ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_import": {
      "file": "archivo_excel.xlsx"
    }
  }' \
  https://app.zauru.com/settings/items/item_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

#### Crear importación de ítems con precios y existencias
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_stock_price_import": {
      "file": "archivo_excel.xlsx",
      "agency_id": "1"
    }
  }' \
  https://app.zauru.com/settings/items/item_stock_price_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### API de Verificación de Ítems Faltantes

#### Crear verificación de ítems faltantes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_import_check": {
      "file": "archivo_excel.xlsx"
    }
  }' \
  https://app.zauru.com/settings/items/item_import_checks.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

#### Crear ítems faltantes detectados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "items": [
      {"ean13": "7501000001", "name": "Producto faltante 1"}
    ],
    "items_product_types": {"1": "0"}
  }' \
  https://app.zauru.com/settings/items/item_import_checks/create_missing_items.json
```

Esto devolverá un JSON similar a este:
```json
{
  "errors": []
}
```
