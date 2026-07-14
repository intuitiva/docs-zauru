---
title: "Gestión de sincronizaciones WooCommerce"
sidebar_label: "Gestión de sincronizaciones WooCommerce"
sidebar_position: 10
---

Zauru permite administrar las configuraciones de sincronización con WooCommerce directamente desde la interfaz web, en la sección de sincronizaciones de WooCommerce (`/ecommerce/woocommerce_items_syncs`).

## Listado de sincronizaciones

La vista principal muestra todas las configuraciones de sincronización de la entidad, permitiendo ver de un vistazo:
- El estado de cada configuración (activa o inactiva)
- La frecuencia de sincronización programada
- El URL del sitio WooCommerce asociado

## Crear una nueva sincronización

Para crear una nueva configuración de sincronización:

1. Ir a la vista de sincronizaciones
2. Seleccionar "Nueva sincronización"
3. Llenar el formulario con los parámetros de conexión

Al crear la sincronización, se registran automáticamente:
- `creator_id`: el usuario que creó la configuración
- `updater_id`: el usuario que realizó la última actualización

## Editar una sincronización

Se puede modificar cualquier parámetro de una sincronización existente, incluyendo:
- Cambiar las credenciales de WooCommerce
- Modificar la frecuencia de sincronización
- Ajustar los límites de productos y categorías por lote
- Cambiar la configuración de imágenes
- Activar o desactivar la sincronización

Al editar, se actualiza el campo `updater_id` con el usuario que realizó el cambio.

## Eliminar una sincronización

Las configuraciones de sincronización se pueden eliminar permanentemente. Esto es útil cuando se cambia de tienda o se descontinúa la integración.

## Activar o desactivar una sincronización

En lugar de eliminar una configuración, se puede usar el campo `active` para desactivarla temporalmente. Cuando una sincronización está inactiva:
- No se ejecuta según su programación
- Se puede reactivar en cualquier momento sin necesidad de reconfigurar todos los parámetros

## Forzar sincronización manual

Además de la sincronización programada, se puede forzar una sincronización manual en cualquier momento a través de la acción "Forzar sincronización" (`force_sync`). Esto ejecuta el método `synchronize_woocommerce` inmediatamente.

Si la sincronización se ejecuta exitosamente, se muestra un mensaje de confirmación. Si falla, se muestra una alerta indicando que se revisen los logs para más detalles.

## Parámetros del formulario de sincronización

El formulario de creación/edición de una sincronización contiene todos los parámetros detallados en el manual de [tareas del implementador](/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru). Los parámetros se agrupan en las siguientes categorías:

### Conexión a WooCommerce
- URL del sitio (`site_url`)
- API Key (`rest_api_key`)
- API Secret (`rest_api_secret`)

### Usuario de API
- Usuario autorizado (`api_user_id`): se selecciona de la lista de usuarios que tienen permisos en la operación `get_items_for_ecommerce` del módulo de e-commerce. Solo se muestran usuarios activos con suscripción activa.

### Programación
- Frecuencia de sincronización (`publish_schedule`)
- Activo (`active`)

### Categorías en WooCommerce
- Categoría padre para categorías de Zauru (`existing_wc_parent_category_for_zauru_categories`)
- Categoría padre para etiquetas de Zauru (`existing_wc_parent_category_for_zauru_tags`)
- Categoría padre para proveedores de Zauru (`existing_wc_parent_category_for_zauru_vendors`)
- Usar notas de categoría como categorías padre (`zcategories_notes_as_wc_parent_categories`)

### Límites de sincronización
- Categorías por lote (`category_updates_per_api_call`)
- Productos por lote (`product_updates_per_api_call`)

### Productos variables
- Atributos del producto (`product_attributes_for_items_with_code_with_attribute_separator`)
- Separador de atributos en el código (`attribute_separator_in_item_code_to_identify_product_variations`)

### Imágenes
- Imágenes a publicar (`images_to_publish`): NONE o ONE_IMAGE
- Imágenes en alta definición (`hd_images`)

### Código
- Usar código del proveedor en lugar del código del item (`use_vendor_code_instead_of_item_code`)

### Filtros avanzados
- Lista de precios (`price_list_id`): se selecciona de las listas de precios activas
- Etiqueta (`tag_id`): filtra los items por etiqueta
- Agencia (`agency_id`): toma existencias de una agencia específica

### Webhooks
- URL de webhook para anulaciones (`webhook_url_when_voiding`)

## API (llamadas desde sistemas externos)

### Listar sincronizaciones

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs.json
```

### Ver detalle de una sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1.json
```

### Crear una sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d "woocommerce_items_sync[site_url]=https://mitienda.com" \
  -d "woocommerce_items_sync[rest_api_key]=ck_392929303a0d300w" \
  -d "woocommerce_items_sync[rest_api_secret]=cs_985577a039b422eed292" \
  -d "woocommerce_items_sync[api_user_id]=42" \
  -d "woocommerce_items_sync[active]=1" \
  -d "woocommerce_items_sync[publish_schedule]=HOURLY" \
  -d "woocommerce_items_sync[images_to_publish]=ONE_IMAGE" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs.json
```

### Actualizar una sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d "woocommerce_items_sync[active]=0" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1.json
```

### Eliminar una sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1.json
```

### Forzar sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1/force_sync.json
```
