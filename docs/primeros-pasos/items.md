---
title: "Ítems"
sidebar_label: "Ítems"
sidebar_position: 7
---

Antes de vender o comprar su primer producto, necesita registrarlo como ítem en Zauru. Los ítems son los artículos de los que se lleva el control: la mercadería que almacena, los productos que vende y los servicios que presta. Hay varios tipos de ítems y varias formas de categorizarlos.

## Nuevo Ítem (producto o servicio)

Antes de vender o comprar, hay que crear el ítem con su nombre y especificaciones. Los pasos para crear un ítem son los siguientes:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar "Nuevo Ítem".

![Nuevo Ítem](/img/primeros-pasos/items-1.jpg)

## Tipos de Ítems según su Inventario

Al crear un ítem, defina si es un producto que se almacena o un servicio. Los productos son almacenables y registran existencias; los servicios no. Al marcar la casilla de "Almacenable" (Paso 1), Zauru registra existencias del ítem; al dejarla vacía, lo trata como servicio.

### Tipos de productos (ítems no servicios)

Un producto puede ser vendible sin ser comprable, o comprable sin ser vendible. Por ejemplo, en una empresa que produce su propia mercadería la materia prima es comprable y el producto terminado es vendible: esa empresa no vende materia prima ni compra producto terminado.

En el "Tipo de Producto" (Paso 2) hay 3 opciones:

1. Identificable: cada ítem lleva un número de serie único.
2. Perecedero: los ítems pertenecen a un lote y tienen fecha de expiración.
3. Normal: sin número de serie ni fecha de vencimiento.

![Tipos de productos](/img/primeros-pasos/items-2.jpg)

## Características de los Ítems

El formulario del ítem permite especificar, entre otras, las siguientes características:

- **Activa**: si está marcada, el ítem se puede usar en el sistema.
- **Nombre**: nombre del producto; no se recomienda tener productos con el mismo nombre.
- **Código**: código propio del producto, si tiene.
- **EAN13**: código de barras o ISBN, para que pueda ser leído por el lector de códigos.
- **Unidad de Medida**: unidad con la que se mide el producto.
- **Peso**: peso del producto, en libras.
- **Volumen**: volumen del producto, en metros cúbicos.
- **Punto de Reorden**: cantidad mínima en existencia; al alcanzarla, el sistema pone el producto en color rojo para avisar que conviene reordenar.
- **Cantidad Económica de la Orden**: cantidad recomendada para volver a comprar cuando el producto llega al punto de reorden.
- **Meses de Garantía**: meses de garantía del producto o servicio.
- **¿Paga IVA?**: marcada si el producto o servicio paga IVA.
- **Tasa del Arancel**: tasa que paga el producto en la importación.
- **Descripción**: características que no se pudieron especificar en los campos anteriores.
- **Imagen**: imágenes del producto, visibles en el módulo de punto de venta (P.O.S).
- **PDF**: documento PDF adjunto.
- **Proyectos**: proyecto creado previamente al que se asocia el ítem.
- **Proveedor predeterminado**: proveedor definido del producto o servicio.

Para guardar los cambios, presionar "Crear Ítem".

El único campo obligatorio del ítem es el nombre; todos los demás son opcionales.

![Características del ítem](/img/primeros-pasos/items-3.jpg)

## Importar Ítems

Cuando su empresa tiene cientos de productos o servicios, Zauru le permite importar cantidades grandes de ítems en formatos predefinidos de Excel. Los pasos para importar ítems son los siguientes:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Click en el botón de "Importar".

![Importar Ítems](/img/primeros-pasos/items-4.png)

4. Descargar la plantilla de importación de Ítems señalada. El único campo obligatorio para importar ítems es el nombre; todos los demás campos son opcionales.

Las entradas de texto permitidas para cada campo son las siguientes:

- Booleano: TRUE or FALSE, si no se especifica una de las dos variables en la importación el sistema asumirá que es FALSE.
- Número Entero: Solo se permiten números sin punto decimal o separador de miles (comas).
- Número con Decimales: Solo números sin separador de miles (comas).
- Texto: Cualquier carácter es permitido.
- Cadena de texto: Cualquier carácter dentro de la cadena es permitido, pero que no sea mayor a 256 caracteres.

5. Al terminar de colocar los campos que desee importar en la plantilla de Excel, seleccionar el archivo a importar.

6. Seleccionar el botón de "Importar Ítems" y esperar a que Zauru suba sus ítems; si aparece algún error en la importación, revisar si la plantilla de Excel cumple las normas de importación.

![Importar Ítems](/img/primeros-pasos/items-5.jpg)

## Variaciones de Ítems

Zauru le permite manejar variaciones de un mismo producto (por ejemplo: diferentes colores, tallas o materiales de un mismo artículo). Las variaciones se manejan a través de un sistema de Ítem Maestro e Ítems Hijos.

Los pasos para gestionar las variaciones de un ítem son los siguientes:

1. Ir al detalle del ítem que será el maestro.
2. Seleccionar la opción "Editar Variaciones".

En esta vista podrá:

- Ver todos los ítems hijos (variaciones) del ítem maestro.
- Agregar nuevos ítems como variaciones seleccionándolos de una lista de ítems similares.
- Crear nuevos ítems hijos directamente con sus atributos de variación (ej. Color: Rojo, Talla: M).
- Editar los atributos de cada variación (clave, valor y color).
- Desvincular un ítem hijo del maestro.

Cada ítem hijo hereda automáticamente los atributos del ítem maestro cuando este se actualiza, manteniendo la consistencia entre todas las variaciones.

### Atributos de Ítem

Los atributos son pares clave-valor que definen las características de las variaciones. Por ejemplo:

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

En el listado de ítems, Zauru le muestra una nube de etiquetas (Tag Cloud) que le permite filtrar rápidamente los productos por las etiquetas que tengan asignadas. Al hacer click en una etiqueta de la nube se filtran los ítems que la tengan.

## Exportar Ítems

Zauru le permite exportar su listado de ítems en formato CSV, XLS o JSON. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Ítems".
3. Seleccionar el formato de exportación deseado (CSV, XLS o JSON).

Los datos exportados incluyen: código, nombre, categoría, marca, etiquetas, estado activo, tipo de producto, precios y demás características.

## Formularios Asociados al Ítem

Al visualizar los detalles de un ítem, Zauru le muestra los formularios personalizados que tenga asociados para el tipo de documento "Ítem". También podrá ver el historial de formularios enviados (submissions) relacionados con ese ítem.

Con su catálogo registrado podrá asignar precios, controlar existencias y usar los ítems en ventas y compras; si tiene muchos productos pendientes, la importación desde Excel le ahorrará horas de trabajo.

## API (llamadas desde sistemas externos)

### Obtener información del ítem
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

### Datatables de ítems
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

### Obtener nube de etiquetas de ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/tag_cloud.json
```

### Crear ítem
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

### Actualizar ítem
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

### Actualizar variaciones de ítem
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

### Destruir ítem
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

Nota: solo se puede eliminar el ítem si no tiene número de serie, lotes, no aparece en un envío, en un paquete, en una factura, en una orden de compra ni está seleccionado en algún descuento de ítems.

### Actualizar imágenes del ítem
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
