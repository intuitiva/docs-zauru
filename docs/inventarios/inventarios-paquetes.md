---
title: "Paquetes"
sidebar_label: "Paquetes"
sidebar_position: 6
---

Si usted arma combos para la venta, como un kit escolar o una promoción de temporada, los paquetes le evitan buscar cada producto por separado en cada factura. Un paquete agrupa varios productos para venderlos como una sola unidad, y Zauru calcula por usted cuántos paquetes puede armar con el stock que tiene. Este tutorial le muestra cómo crearlos, configurarlos y consultar sus existencias.

## ¿Qué es un paquete?

Un paquete (bundle) es un conjunto de productos que se venden juntos como una unidad: piense en un kit escolar o en un combo promocional que arma con varios ítems. Zauru soporta dos tipos de paquetes:

1. **Paquetes estáticos**: Conjunto predefinido de productos específicos con cantidades fijas.
2. **Paquetes dinámicos (por categoría)**: Paquete que se arma automáticamente con productos de una categoría, permitiendo flexibilidad en la composición según disponibilidad.

## Crear un paquete estático

Los pasos para crear un paquete en Zauru son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".

![imagen1](/img/inventarios/inventarios-paquetes-1.jpg)

Le aparecerán los opciones para crear un nuevo paquete, los campos que debe llenar son los siguientes:

a. Coloque el código del paquete.

b. Coloque el código de barras (EAN13) para que pueda ser escaneado el producto.

c. Coloque el nombre del paquete.

d. Seleccione el primer producto que llevara el paquete y coloque la cantidad. Para agregar mas productos presione "+".

![imagen2](/img/inventarios/inventarios-paquetes-2.png)

Cuando termine de agregar todos los productos que desea que lleve el paquete, presione "Crear paquete".

![imagen3](/img/inventarios/inventarios-paquetes-3.jpg)

Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo el paquete exitosamente. Ahora podrá seleccionar este paquete al momento de hacer una reservación en el inventario. Para poder vender el paquete hay que ponerle un precio sugerido, este tutorial lo podrá en encontrar en "Ventas".

## Crear un paquete dinámico (por categoría)

Un paquete dinámico permite que los productos que lo componen se seleccionen automáticamente de una categoría de ítems. Esto es útil cuando:

- Los productos específicos pueden variar según disponibilidad.
- Quiere ofrecer un paquete que se adapte al stock disponible en una bodega.
- Maneja productos similares que pueden sustituirse entre sí.

Para crear un paquete dinámico:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".
4. Active la opción de "Paquete por categoría" (category_bundle).
5. Seleccione la categoría de ítems que agrupará los productos del paquete.
6. Los productos se seleccionarán automáticamente de esa categoría.

### Consultar ítems dinámicos con stock

Para paquetes dinámicos, puede consultar qué ítems de la categoría tienen stock disponible en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar el paquete dinámico.
4. El sistema mostrará automáticamente los ítems de la categoría que tienen existencias disponibles.

## Configuración adicional del paquete

Al crear o editar un paquete, puede configurar opciones adicionales:

- **Código EAN13**: Código de barras estándar para identificar el paquete en puntos de venta.
- **Unidad de medida**: Especifique la unidad de medida del paquete (unidad, caja, kit, etc.).
- **Comercio electrónico (Ecommerce)**: Marque el paquete como disponible para venta en línea.
- **Imágenes del paquete**: Agregue imágenes para identificar visualmente el paquete.

## Agregar imágenes a un paquete

Para agregar o modificar las imágenes de un paquete:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Buscar el paquete que desea editar.
4. Seleccionar "Editar imágenes".
5. Cargue las imágenes deseadas.
6. Presione "Actualizar imágenes".

## Exportar paquetes

Puede exportar el listado completo de paquetes a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Exportar".

Esto descargará un archivo XLS con todos los paquetes, sus componentes y cantidades.

## Importar paquetes

Puede importar paquetes desde un archivo:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Importar paquetes".
4. Seleccione el archivo con los datos de los paquetes.
5. Presione "Importar".

## Nube de etiquetas (Tag Cloud)

En la vista de paquetes, puede filtrar por etiquetas usando la nube de etiquetas:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Nube de etiquetas".

Esto mostrará las etiquetas disponibles para filtrar los paquetes.

## Existencias de paquetes

Las existencias de paquetes se consultan desde la pantalla "Existencias", en la pestaña "Existencias de paquetes". Zauru calcula el disponible de cada paquete a partir del stock de sus componentes y muestra el desglose por componente al abrir el detalle; la exportación a Excel está disponible en la misma pantalla. El procedimiento completo está en [Existencias de paquetes](/inventarios/existencias/existencias-de-paquetes).

Con el paquete creado, ya puede seleccionarlo en una reservación y venderlo como una sola unidad, mientras Zauru descuenta cada componente de su bodega. Para cerrar el ciclo, asigne el precio sugerido del paquete en el módulo de Ventas.

## API (llamadas desde sistemas externos)

### Obtener todos los paquetes
Devuelve la lista de paquetes (bundles). Puede filtrar por etiqueta usando el parámetro `tag`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "active": true,
    "code": "COMBO-1",
    "ean13": null,
    "name": "Combo Oficina",
    "description": "Paquete de útiles",
    "entity_id": 2,
    "updater_id": 3,
    "created_at": "2026-08-06T04:13:42.654Z",
    "updated_at": "2026-08-06T04:13:42.654Z",
    "bundle_details_count": 2,
    "pays_vat": true,
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "item_category_id": null,
    "quotable": true,
    "ecommerce": false,
    "sellable": true,
    "weight": null,
    "volume": null,
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
    "color": "#CCCCCC",
    "zid": 4,
    "measurement_unit": null,
    "purchasable": false,
    "force_as_service_for_document_external_storage_service": false,
    "category_bundle": false,
    "item_country_code_id": null,
    "youtube_video_url": null,
    "gemma_q4f16_embedding": null,
    "extra_description": null
  },
  {
    "id": 5,
    "active": true,
    "code": "base",
    "ean13": "",
    "name": "Modulo Base",
    "description": "",
    "entity_id": 2,
    "updater_id": 6,
    "created_at": "2014-11-05T22:58:16.287Z",
    "updated_at": "2014-11-05T22:58:16.287Z",
    "bundle_details_count": 4,
    "pays_vat": true,
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "item_category_id": 7,
    "quotable": true,
    "ecommerce": false,
    "sellable": true,
    "weight": null,
    "volume": null,
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
    "color": "#CCCCCC",
    "zid": 2,
    "measurement_unit": null,
    "purchasable": false,
    "force_as_service_for_document_external_storage_service": false,
    "category_bundle": false,
    "item_country_code_id": null,
    "youtube_video_url": null,
    "gemma_q4f16_embedding": "[-0.0068092346,-0.02760315,-0.018051147, ...]",
    "extra_description": null
  }
]
```

### Obtener el detalle de un paquete
Devuelve los datos del paquete, sus componentes (bundle_details) y los formularios asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34004",
  "active": true,
  "code": "ARM-CLOSET-ARM",
  "ean13": null,
  "name": "ARMONIA-CLOSET-ARMADO",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-03-10 13:24:35.435826",
  "updated_at": "2026-03-10 13:24:35.435826",
  "bundle_details_count": "6",
  "pays_vat": true,
  "image": null,
  "item_category_id": null,
  "quotable": true,
  "ecommerce": true,
  "sellable": true,
  "weight": null,
  "volume": null,
  "image2": null,
  "image3": null,
  "image4": null,
  "image5": null,
  "color": "#cccccc",
  "zid": "34",
  "measurement_unit": null,
  "purchasable": false,
  "force_as_service_for_document_external_storage_service": false,
  "category_bundle": false,
  "item_country_code_id": null,
  "youtube_video_url": null,
  "gemma_q4f16_embedding": null,
  "extra_description": null
}
```

### Crear un paquete
Crea un nuevo paquete con sus componentes y cantidades.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle": {
      "code": "COMBO-1",
      "name": "Combo Oficina",
      "description": "Paquete de útiles",
      "bundle_details_attributes": {
        "0": { "item_id": "2", "quantity": "2" },
        "1": { "item_id": "3", "quantity": "1" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles.json
```

Esto devolverá un JSON similar a este:
```json
{
  "code": [
    "ya ha sido tomado"
  ]
}
```

### Actualizar un paquete
Actualiza los datos y componentes de un paquete existente.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "bundle": {
      "name": "Combo Oficina actualizado",
      "bundle_details_attributes": {
        "0": { "id": "1", "quantity": "3" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34004",
  "active": true,
  "code": "ARM-CLOSET-ARM",
  "ean13": null,
  "name": "ARMONIA-CLOSET-ARMADO",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-03-10 13:24:35.435826",
  "updated_at": "2026-03-10 13:24:35.435826",
  "bundle_details_count": "6",
  "pays_vat": true,
  "image": null,
  "item_category_id": null,
  "quotable": true,
  "ecommerce": true,
  "sellable": true,
  "weight": null,
  "volume": null,
  "image2": null,
  "image3": null,
  "image4": null,
  "image5": null,
  "color": "#cccccc",
  "zid": "34",
  "measurement_unit": null,
  "purchasable": false,
  "force_as_service_for_document_external_storage_service": false,
  "category_bundle": false,
  "item_country_code_id": null,
  "youtube_video_url": null,
  "gemma_q4f16_embedding": null,
  "extra_description": null
}
```

### Eliminar un paquete
Elimina un paquete. Solo es posible si no tiene movimientos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/bundles/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Consultar ítems dinámicos con stock de un paquete
Para paquetes dinámicos (por categoría), devuelve los ítems de la categoría que tienen stock disponible en una bodega específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/get_dynamic_items_with_stock.json?agency_id=1&bundle_id=2
```

Esto devolverá un JSON similar a este:
```json
[]
```

Los endpoints de existencias de paquetes (`bundle_stocks`) se documentan en [Existencias de paquetes](/inventarios/existencias/existencias-de-paquetes).

### Importar paquetes
Importa paquetes desde un archivo. El cuerpo de la petición debe incluir el archivo a importar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle_import": {
      "file": "archivo_de_importacion.xlsx"
    }
  }' \
  https://app.zauru.com/inventories/bundles/bundle_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
