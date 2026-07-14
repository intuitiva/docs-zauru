---
title: "Tareas del implementador para conectar WooCommerce y Zauru"
sidebar_label: "Tareas del implementador para conectar WooCommerce y Zauru"
sidebar_position: 9
---

Hay varias tareas que hace el implementador para conectar woo commerce con Zauru

## Sincronizador de items

### Habilitar el API REST en WooCommerce

Lo primero que hay que hacer es crear una clave de API para poder enviar información de Zauru en WooCommerce. Para crearlo hay que entrar acá:

![entrar a crear API](/img/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru-1.png)

Luego de ingresar al formulario de "crear clave de API" hay que llenarlo:

![crear API](/img/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru-2.png)

Al crear la clave hay que guardar la clave (un texto como ck_392929303a0d300w) y el secreto (un texto como cs_985577a039b422eed292) porque lo vamos a utilizar luego.

### Configuración del sincronizador de items de Zauru a WooCommerce

Para que la tienda en linea tenga los mismos items que Zauru, con imagen, código, existencias actualizadas, unidad de medida, peso, volumen y precios; utilizamos un software adicional que orquesta la sincronización entre Zauru y WooCommerce. Este software necesita los siguientes parámetros:

1. __woocommerce URL:__ el URL del sitio (`site_url`)
2. __woocommerce key:__ la clave del API que obtuvimos en el paso anterior (empieza con ck_) (`rest_api_key`)
3. __woocommerce secret:__ el secreto del API que obtuvimos en el paso anterior (empieza con cs_) (`rest_api_secret`)
4. __zauru user email:__ el correo del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce. Se selecciona de la lista de usuarios con permisos en la operación `get_items_for_ecommerce` del módulo de e-commerce. (`api_user_id`)
5. __zauru user token:__ el token del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce
6. __activo:__ permite activar o desactivar esta configuración de sincronización sin necesidad de eliminarla. (`active`)
7. __la frecuencia de la sincronización:__ puede ser cada hora (HOURLY), una vez al día a las 3AM GTM -6 (DAILY_3AM), una vez al día a las 8AM GTM -6 (DAILY_8AM), una vez al mes el 1 de cada mes a las 8AM GMT -6 (MONTHLY), una vez a la semana el domingo a las 8AM GMT -6 (EVERY_SUNDAY) o una vez a la semana el lunes a las 8AM GMT -6 (EVERY_MONDAY) (`publish_schedule`)
8. __categoría padre en woocommerce para las categorías de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL) (`existing_wc_parent_category_for_zauru_categories`)
9. __categoría padre en woocommerce para las etiquetas de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL) (`existing_wc_parent_category_for_zauru_tags`)
10. __categoría padre en woocommerce para los proveedores de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL) (`existing_wc_parent_category_for_zauru_vendors`)
11. __usar notas de categoría como categorías padre en WooCommerce:__ si se activa, las notas de categoría de Zauru se tratan como categorías padre en lugar de como notas. (`zcategories_notes_as_wc_parent_categories`)
12. __máximo número de categorías actualizadas por batches:__ WooCommerce permite actualizar un máximo de 100 en 100, el problema es que a veces el servidor donde está WooCommerce no es tan rápido, por lo que muere en el intento de sincronizar los 100 en un solo batch, la recomendación es bajar este número para que si pasen las categorías. (`category_updates_per_api_call`)
13. __máximo número de productos actualizados por batches:__ WooCommerce permite actualizar un máximo de 100 en 100, el problema es que a veces el servidor donde está WooCommerce no es tan rápido, por lo que muere en el intento de sincronizar los 100 en un solo batch, la recomendación es bajar este número para que si pasen los productos. (`product_updates_per_api_call`)
14. __atributos de los productos:__ si en la tienda se van a utilizar productos variables (ver la documentación de woocommerce sobre [productos variables](https://docs.woocommerce.com/document/variable-product/ "Variable Product")) hay que crearlos primero en la woocommerce y luego especificarlos acá, separados por una coma y sin espacios. (`product_attributes_for_items_with_code_with_attribute_separator`)
15. __separador de atributos en el código de los productos de Zauru:__ si en la tienda se van a utilizar productos variables, los items de zauru deben de tener un formato en los códigos y un formato en el nombre para que el sincronizador los pueda identificar y sincronizar con WooCommerce. Este separador que uno escoge es un solo caracter que agrupa todos los productos variables basados en la primera parte del código (antes de este separador) (`attribute_separator_in_item_code_to_identify_product_variations`)
16. __tipo de sincronización de las imagenes:__ actualmente hay 2 opciones, o no se sincronizan las imagenes (NONE) o si se sincroniza la imagen del producto (ONE_IMAGE). (`images_to_publish`)
17. __sincronizar imágenes en alta definición:__ si se activa, las imágenes se envían en alta definición (HD) a WooCommerce. (`hd_images`)
18. __usar código del proveedor en lugar del código del item:__ si se activa, el campo de código que se sincroniza como SKU será el código del proveedor (`vendor_code`) en lugar del código del item. (`use_vendor_code_instead_of_item_code`)
19. __lista de precios:__ permite especificar una lista de precios específica para usar en la sincronización, en lugar de la lista de precios de la agencia predeterminada. Se selecciona de las listas de precios activas de la entidad. (`price_list_id`)
20. __etiqueta para filtrar items:__ si se especifica un ID de etiqueta, solo se sincronizarán los items y paquetes que tengan esa etiqueta asignada. Esto permite segmentar qué productos se publican. (`tag_id`)
21. __agencia específica para existencias:__ si se especifica un ID de agencia, las existencias se tomarán únicamente de esa agencia en lugar de todas las agencias con e-commerce habilitado. (`agency_id`)
22. __webhook URL para anulaciones:__ URL del webhook que se llamará cuando se anule un producto en WooCommerce. (`webhook_url_when_voiding`)


## Publicación de pedidos de WooCommerce a Zauru

### Habilitar un webhook en WooCommerce

La segunda parte de la implementación consiste en decirle a WooCommerce como mandar la información a Zauru, para eso utilizamos los [webhooks](https://docs.woocommerce.com/document/webhooks/).

Para crear el webhook hay que entrar acá:
![nuevo webhook](/img/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru-3.png)

Los datos que hay que ingresar son los siguientes:

![crear webhook](/img/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru-4.png)


### Configuración del conector de pedidos de WooCommerce a Zauru

Para el envío de pedidos de Zauru a WooCommerce utilizamos un software adicional que recibe los pedidos en "lenguaje WooCommerce" y los traduce a "lenguaje Zauru" para que queden registrados correctamente. Este software necesita los siguientes parámetros:
1. __woocommerce URL:__ el URL del sitio
2. __woocommerce webhook secret:__ el parámetro "Secreto" que llenamos al crear el webhook y que le colocamos "tienda_en_linea_zauru"
3. __woocommerce valid topic:__ el parámetro "Tema" que llenamos al crear el webhook y que le colocamos "Crear Pedido"
4. __zauru user email:__ el correo del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce
5. __zauru user token:__ el token del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce
6. __zauru host:__ el URL de Zauru (se puede usar el URL del servidor de pruebas)
