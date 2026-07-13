---
title: "Tareas del implementador para conectar WooCommerce y Zauru"
sidebar_label: "Tareas del implementador para conectar WooCommerce y Zauru"
sidebar_position: 7
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
1. __woocommerce URL:__ el URL del sitio
2. __woocommerce key:__ la clave del API que obtuvimos en el paso anterior (empieza con ck_)
3. __woocommerce secret:__ el secreto del API que obtuvimos en el paso anterior (empieza con cs_)
4. __zauru user email:__ el correo del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce
5. __zauru user token:__ el token del usuario que utilizaremos para comunicarnos entre Zauru y WooCommerce
6. __la frecuencia de la sincronización:__ puede ser cada hora (HOURLY), una vez al día a las 3AM GTM -6 (DAILY_3AM), una vez al día a las 8AM GTM -6 (DAILY_8AM), una vez al mes el 1 de cada mes a las 8AM GMT -6 (MONTHLY), una vez a la semana el domingo a las 8AM GMT -6 (EVERY_SUNDAY) o una vez a la semana el lunes a las 8AM GMT -6 (EVERY_MONDAY)
7. __categoría padre en woocommerce para las categorías de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL)
8. __categoría padre en woocommerce para los proveedores de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL)
9. __categoría padre en woocommerce para los proyectos de zauru:__ luego de crear la categoría en woocommerce se necesita el ID de la misma para registrarla acá (al ingresar a la categoría se puede ver en el URL)
10. __máximo número de categorías actualizadas por batches:__ WooCommerce permite actualizar un máximo de 100 en 100, el problema es que a veces el servidor donde está WooCommerce no es tan rápido, por lo que muere en el intento de sincronizar los 100 en un solo batch, la recomendación es bajar este número para que si pasen las categorías.
11. __máximo número de productos actualizados por batches:__ WooCommerce permite actualizar un máximo de 100 en 100, el problema es que a veces el servidor donde está WooCommerce no es tan rápido, por lo que muere en el intento de sincronizar los 100 en un solo batch, la recomendación es bajar este número para que si pasen los productos.
12. __atributos de los productos:__ si en la tienda se van a utilizar productos variables (ver la documentación de woocommerce sobre [productos variables](https://docs.woocommerce.com/document/variable-product/ "Variable Product")) hay que crearlos primero en la woocommerce y luego especificarlos acá, separados por una coma y sin espacios.
13. __separador de atributos en el código de los productos de Zauru:__ si en la tienda se van a utilizar productos variables, los items de zauru deben de tener un formato en los códigos y un formato en el nombre para que el sincronizador los pueda identificar y sincronizar con WooCommerce. Este separador que uno escoge es un solo caracter que agrupa todos los productos variables basados en la primera parte del código (antes de este separador)
14. __tipo de sincronización de las imagenes:__ actualmente hay 2 opciones, o no se sincronizan las imagenes (NONE) o si se sincroniza la imagen del producto (ONE_IMAGE).


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
