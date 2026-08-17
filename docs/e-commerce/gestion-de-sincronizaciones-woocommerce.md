---
title: "Gestión de sincronizaciones WooCommerce"
sidebar_label: "Gestión de sincronizaciones WooCommerce"
sidebar_position: 10
---

Si su tienda WooCommerce ya está sincronizada con Zauru, aquí es donde controla todo lo que pasa entre ambos sistemas: puede pausar una sincronización mientras ajusta su catálogo, forzarla de inmediato cuando necesita que la tienda se actualice ya, o crear una configuración nueva si abre otra tienda. Zauru permite administrar las configuraciones de sincronización con WooCommerce directamente desde la interfaz web, en la sección de sincronizaciones de WooCommerce (`/ecommerce/woocommerce_items_syncs`).

## Listado de sincronizaciones

La vista principal muestra todas las configuraciones de sincronización de la entidad, permitiendo ver de un vistazo:

![Listado de sincronizaciones WooCommerce con estado, frecuencia y URL](/img/e-commerce/gestion-de-sincronizaciones-woocommerce-1.png)

- El estado de cada configuración (activa o inactiva)
- La frecuencia de sincronización programada
- El URL del sitio WooCommerce asociado

## Crear una nueva sincronización

Para crear una nueva configuración de sincronización:

1. Ir a la vista de sincronizaciones
2. Seleccionar "Nueva sincronización"
3. Llenar el formulario con los parámetros de conexión

![Formulario para crear nueva sincronización WooCommerce](/img/e-commerce/gestion-de-sincronizaciones-woocommerce-2.png)

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

Con esto, usted tiene el control completo de las sincronizaciones: puede dejarlas correr solas según su horario o intervenir a mano cuando lo necesite. Si algún día los productos no aparecen en la tienda como espera, puede forzar la sincronización y revisar los logs para encontrar la causa.

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

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "12",
    "zid": "1",
    "active": true,
    "site_url": "https://tecnipesa.net/",
    "api_user_id": "1872",
    "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
    "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
    "publish_schedule": "HOURLY",
    "images_to_publish": "1",
    "agency_id": "4787",
    "zcategories_notes_as_wc_parent_categories": true,
    "existing_wc_parent_category_for_zauru_categories": null,
    "existing_wc_parent_category_for_zauru_vendors": null,
    "existing_wc_parent_category_for_zauru_tags": null,
    "attribute_separator_in_item_code_to_identify_product_variations": null,
    "product_attributes_for_items_with_code_with_attribute_separator": null,
    "category_updates_per_api_call": "100",
    "product_updates_per_api_call": "100",
    "entity_id": "759",
    "creator_id": "143",
    "updater_id": "942",
    "last_started_sync": "2026-07-08 08:01:18.592147",
    "last_sync_request": "2026-07-08 08:01:18.378846",
    "last_syncer_id": null,
    "created_at": "2021-06-16 13:08:04.227511",
    "updated_at": "2021-11-11 19:49:49.607121",
    "hd_images": true,
    "tag_id": null,
    "webhook_url_when_voiding": null,
    "price_list_id": null,
    "use_vendor_code_instead_of_item_code": false
  }
]
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "12",
  "zid": "1",
  "active": true,
  "site_url": "https://tecnipesa.net/",
  "api_user_id": "1872",
  "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
  "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
  "publish_schedule": "HOURLY",
  "images_to_publish": "1",
  "agency_id": "4787",
  "zcategories_notes_as_wc_parent_categories": true,
  "existing_wc_parent_category_for_zauru_categories": null,
  "existing_wc_parent_category_for_zauru_vendors": null,
  "existing_wc_parent_category_for_zauru_tags": null,
  "attribute_separator_in_item_code_to_identify_product_variations": null,
  "product_attributes_for_items_with_code_with_attribute_separator": null,
  "category_updates_per_api_call": "100",
  "product_updates_per_api_call": "100",
  "entity_id": "759",
  "creator_id": "143",
  "updater_id": "942",
  "last_started_sync": "2026-07-08 08:01:18.592147",
  "last_sync_request": "2026-07-08 08:01:18.378846",
  "last_syncer_id": null,
  "created_at": "2021-06-16 13:08:04.227511",
  "updated_at": "2021-11-11 19:49:49.607121",
  "hd_images": true,
  "tag_id": null,
  "webhook_url_when_voiding": null,
  "price_list_id": null,
  "use_vendor_code_instead_of_item_code": false
}
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "12",
  "zid": "1",
  "active": true,
  "site_url": "https://tecnipesa.net/",
  "api_user_id": "1872",
  "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
  "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
  "publish_schedule": "HOURLY",
  "images_to_publish": "1",
  "agency_id": "4787",
  "zcategories_notes_as_wc_parent_categories": true,
  "existing_wc_parent_category_for_zauru_categories": null,
  "existing_wc_parent_category_for_zauru_vendors": null,
  "existing_wc_parent_category_for_zauru_tags": null,
  "attribute_separator_in_item_code_to_identify_product_variations": null,
  "product_attributes_for_items_with_code_with_attribute_separator": null,
  "category_updates_per_api_call": "100",
  "product_updates_per_api_call": "100",
  "entity_id": "759",
  "creator_id": "143",
  "updater_id": "942",
  "last_started_sync": "2026-07-08 08:01:18.592147",
  "last_sync_request": "2026-07-08 08:01:18.378846",
  "last_syncer_id": null,
  "created_at": "2021-06-16 13:08:04.227511",
  "updated_at": "2021-11-11 19:49:49.607121",
  "hd_images": true,
  "tag_id": null,
  "webhook_url_when_voiding": null,
  "price_list_id": null,
  "use_vendor_code_instead_of_item_code": false
}
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

Esto devolverá un JSON similar a este:
```json
{
  "id": "12",
  "zid": "1",
  "active": true,
  "site_url": "https://tecnipesa.net/",
  "api_user_id": "1872",
  "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
  "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
  "publish_schedule": "HOURLY",
  "images_to_publish": "1",
  "agency_id": "4787",
  "zcategories_notes_as_wc_parent_categories": true,
  "existing_wc_parent_category_for_zauru_categories": null,
  "existing_wc_parent_category_for_zauru_vendors": null,
  "existing_wc_parent_category_for_zauru_tags": null,
  "attribute_separator_in_item_code_to_identify_product_variations": null,
  "product_attributes_for_items_with_code_with_attribute_separator": null,
  "category_updates_per_api_call": "100",
  "product_updates_per_api_call": "100",
  "entity_id": "759",
  "creator_id": "143",
  "updater_id": "942",
  "last_started_sync": "2026-07-08 08:01:18.592147",
  "last_sync_request": "2026-07-08 08:01:18.378846",
  "last_syncer_id": null,
  "created_at": "2021-06-16 13:08:04.227511",
  "updated_at": "2021-11-11 19:49:49.607121",
  "hd_images": true,
  "tag_id": null,
  "webhook_url_when_voiding": null,
  "price_list_id": null,
  "use_vendor_code_instead_of_item_code": false
}
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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Forzar sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1/force_sync.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "status": "ok"
}
```

### Nueva sincronización (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "12",
  "zid": "1",
  "active": true,
  "site_url": "https://tecnipesa.net/",
  "api_user_id": "1872",
  "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
  "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
  "publish_schedule": "HOURLY",
  "images_to_publish": "1",
  "agency_id": "4787",
  "zcategories_notes_as_wc_parent_categories": true,
  "existing_wc_parent_category_for_zauru_categories": null,
  "existing_wc_parent_category_for_zauru_vendors": null,
  "existing_wc_parent_category_for_zauru_tags": null,
  "attribute_separator_in_item_code_to_identify_product_variations": null,
  "product_attributes_for_items_with_code_with_attribute_separator": null,
  "category_updates_per_api_call": "100",
  "product_updates_per_api_call": "100",
  "entity_id": "759",
  "creator_id": "143",
  "updater_id": "942",
  "last_started_sync": "2026-07-08 08:01:18.592147",
  "last_sync_request": "2026-07-08 08:01:18.378846",
  "last_syncer_id": null,
  "created_at": "2021-06-16 13:08:04.227511",
  "updated_at": "2021-11-11 19:49:49.607121",
  "hd_images": true,
  "tag_id": null,
  "webhook_url_when_voiding": null,
  "price_list_id": null,
  "use_vendor_code_instead_of_item_code": false
}
```

### Editar sincronización

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/ecommerce/woocommerce_items_syncs/1/edit.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "12",
  "zid": "1",
  "active": true,
  "site_url": "https://tecnipesa.net/",
  "api_user_id": "1872",
  "rest_api_secret": "cs_64accf51b3fd9db7eef70cf43948005c72d4bf96",
  "rest_api_key": "ck_0d9a588367b863d1dc494b270b6650278933214f",
  "publish_schedule": "HOURLY",
  "images_to_publish": "1",
  "agency_id": "4787",
  "zcategories_notes_as_wc_parent_categories": true,
  "existing_wc_parent_category_for_zauru_categories": null,
  "existing_wc_parent_category_for_zauru_vendors": null,
  "existing_wc_parent_category_for_zauru_tags": null,
  "attribute_separator_in_item_code_to_identify_product_variations": null,
  "product_attributes_for_items_with_code_with_attribute_separator": null,
  "category_updates_per_api_call": "100",
  "product_updates_per_api_call": "100",
  "entity_id": "759",
  "creator_id": "143",
  "updater_id": "942",
  "last_started_sync": "2026-07-08 08:01:18.592147",
  "last_sync_request": "2026-07-08 08:01:18.378846",
  "last_syncer_id": null,
  "created_at": "2021-06-16 13:08:04.227511",
  "updated_at": "2021-11-11 19:49:49.607121",
  "hd_images": true,
  "tag_id": null,
  "webhook_url_when_voiding": null,
  "price_list_id": null,
  "use_vendor_code_instead_of_item_code": false
}
```
