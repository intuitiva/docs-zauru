---
title: "Integración con WooCommerce"
sidebar_label: "Integración con WooCommerce"
sidebar_position: 7
---

WooCommerce es el software para tienda en linea más usado en el mundo y se puede adaptar para muchísimos casos distintos.
![logo woo commerce](/img/e-commerce/integracion-con-woocommerce-1.png)

Los 2 sub-sistemas en Zauru que realizan tareas específicas en la integración con WooCommerce son:
1. Sincronizador de items de Zauru en WooCommerce (productos en WooCommerce)
2. Propagador de pedidos colocados en WooCommerce a Zauru (ordenes de venta en Zauru)

## Sincronizador de items de Zauru en WooCommerce
Sabiendo que WooCommerce tiene la característica de vender [varios tipos de productos](https://docs.woocommerce.com/document/managing-products/#section-4 "product types"), Zauru solo puede trabajar con los siguientes:
1. __Productos simples:__ son aquellos productos físicos que necesitan envío, usualmente se controla su existencia, por ejemplo un libro.
2. __Productos virtuales:__ son aquellos servicios que no necesitan enviarse ni control de existencias, por ejemplo una implementación de Zauru ;)
3. __Productos variables:__ son aquellos productos o servicios que tienen variaciones, por ejemplo una camisa de talla M y color rojo y otra talla S y color verde.

Para conectar Zauru y WooCommerce, utilizamos un sincronizador que se ejecuta según la frecuencia configurada (cada hora, diario, semanal o mensual) y lo que hace es propagar los campos de Zauru a WooCommerce. Para conocer más a fondo de los parámetros que utiliza el sincronizador, abocarse a este manual: [configurar el sincronizador](https://docs.zauru.com/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru#sincronizador-de-items).

### Gestión de sincronizaciones
Zauru permite gestionar múltiples configuraciones de sincronización desde la interfaz web. Cada configuración puede activarse o desactivarse, y es posible forzar una sincronización manual en cualquier momento. Para más detalles, consultar el manual de [gestión de sincronizaciones WooCommerce](/e-commerce/gestion-de-sincronizaciones-woocommerce).

Una de las características más importantes del sincronizador es que tiene como fin principal propagar los item, existencias, precios y fotos de Zauru en WooCommerce, eso significa que si en WooCommerce encuentra algún producto que no estaba en Zauru __lo borra__, para que se mantenga 100% sincronizado.

### Campos que se sincronizan para tipo de producto "Simple" o "Virtual"
1. __Nombre__ del item o paquete en Zauru se convierte en __Nombre__ del Producto en WooCommerce
2. __Descripción__ del item o paquete en Zauru se convierte en __Descripción__ del Producto en WooCommerce
3. __Precio público sugerido__ del item o paquete (o listado de precio de la bodega) en Zauru se convierte en __precio normal__ del Producto en WooCommerce.
4. Si existe nota del precio sugerido, __la nota del precio público sugerido__ del item o paquete (o listado de precio de la bodega) en Zauru se convierte en __precio normal__ del Producto en WooCommerce. Porque el __precio público sugerido__ del item o paquete (o listado de precio de la bodega) en Zauru se convierte en __precio rebajado__ del Producto en WooCommerce.
5. El __código__ del item o paquete en Zauru se convierte en __SKU__ del Producto en WooCommerce. Si en la configuración del sincronizador se activa la opción de "usar código del proveedor en lugar del código del item" (`use_vendor_code_instead_of_item_code`), se enviará el código del proveedor (`vendor_code`) en su lugar.
6. El __código EAN13__ del item o paquete se sincroniza con el campo correspondiente en WooCommerce.
7. Si el item o el primer item del paquete en Zauru es __almacenable__ el campo de __"¿Gestión de Inventario?"__ se activa en WooCommerce.
8. La existencia disponible (no la física) sumada de todas las bodegas que tengan activo el atributo de "e-commerce" es la cantidad que se convierte en el campo de __Cantidad de inventario__ en WooCommerce.
9. Si tienen el plugin de ["unit of measure"](https://docs.zauru.com/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru#agregar-unidad-de-medida-en-los-productos "como poner unidad de medida"), la unidad de medida del item (en caso de paquetes, la __unidad de medida__ es "paquete") se convierte en __"unit of measure"__ en WooCommerce.
10. El __peso del item o la suma de los pesos de los items del paquete__ se convierten en el __peso del producto__ en WooCommerce.
11. Sincronizar las __Imágenes__ de Zauru es configurable. Se puede elegir entre no sincronizar imágenes (`NONE`), sincronizar una imagen (`ONE_IMAGE`), o sincronizar imágenes en alta definición (`hd_images`). Zauru soporta hasta 5 imágenes por producto (`photo` a `photo5`). Si el producto en WooCommerce se actualiza, porque cambió la existencia o cualquier otro campo, va a volver a subir las imágenes y va a desligar las imágenes que tenía asociadas.
12. La __Nota de la Categoría__ del item o paquete se propaga como una categoría padre en WooCommerce. Considerando que en la configuración inicial de WooCommerce (antes de sincronizar por primera vez) se creó la categoría "abuelo" donde iban a entrar todas las categorías como "hijos" o "nietos", la nota de la categoría se guardaría como una categoría "hija" de esta categoría "abuelo".
13. La __Categoría__ del item o del paquete se propaga como una categoría "hija" de su Nota de Categoría (o sea "nieta" de la categoría "abuelo") o "hija" de la categoría "abuelo" en el caso de que no tenga Nota de Categoría. Esto permite tener un máximo de 3 niveles de jerarquía en las __categorías__ de WooCommerce. Si se activa la opción `zcategories_notes_as_wc_parent_categories`, las notas de categoría de Zauru se tratan como categorías padre en WooCommerce.
14. Las __Etiquetas__ de Zauru que están asignadas a los productos, (pueden ser múltiples etiquetas por producto) se copian como categorías hijas de la categoría creada en la configuración inicial de WooCommerce (antes de sincronizar por primera vez) y se sincronizan todas estas etiquetas como __categorías__ (pueden ser varias) en WooCommerce.
15. El __Proveedor predefinido__ de los items o del primer item del paquete de Zauru se propaga como una categoría hija de la categoría creada en la configuración inicial de WooCommerce (antes de sincronizar por primera vez) y se sincronizan como una __categoría__ de WooCommerce.
16. __Paquetes (bundles):__ Los paquetes de Zauru también se sincronizan a WooCommerce. El peso del paquete es la suma de los pesos de sus items, la garantía es la mínima entre sus items, y la unidad de medida es "paquete".

La jerarquía de categorías quedaría algo similar a esto:
![jerarquia de categorias](/img/e-commerce/integracion-con-woocommerce-2.png)

### Diferencias para sincronizar productos variables

Los productos variables, permiten no tener un listado tan grande de productos, ya que las variaciones se consolidan. Los productos variables se ven similares a esto:
![producto variable](/img/e-commerce/integracion-con-woocommerce-3.png)

Las variaciones se ven similares a esto:
![variacion](/img/e-commerce/integracion-con-woocommerce-4.png)

Para mantener poder identificar y entender el resto de esta sección, vamos a nombrar como producto variable al padre y variaciones a los hijos. Adentro de WooCommerce esto se ve así:
![producto variable con variaciones](/img/e-commerce/integracion-con-woocommerce-5.png)

Para lograr esto, hay que tomar en considerar las siguientes configuraciones en Zauru.

1. En Zauru no se crea el producto variable, solo se crean las variaciones. __El producto variable en WooCommerce se va a generar automáticamente__ basado en los items que tengan códigos con la primera parte en igual y con la imagen del primer item con ese código
2. Los items de Zauru con códigos y nombres que cumplan con los requisitos de _variación_ se van a convertir en variaciones. Los requisitos son:
3. El código del item debe de tener un separador único para identificar a que producto variable pertenecen. La primera parte va a identificar el producto variable y la segunda parte la variación. Ejemplo:

| Codigo en Zauru  | SKU producto variable | SKU variación     |
| ---------------- | --------------------- | ----------------- |
| ASDF-345         | ASDF                | ASDF-345           |
| ASDF-490         | ASDF                | ASDF-490           |
| ASDF-783         | ASDF                | ASDF-783           |
| ZXCV-JM          | ZXCV                | ZXCV-JM            |
| ZXCV-PE          | ZXCV                | ZXCV-PE            |
4. El nombre del item en Zauru va a truncarse en la WooCommerce porque se obtendrán las variaciones en la parte final del nombre (después del último espacio en blanco) del producto separado por comas. Ejemplo:

| Nombre en Zauru | Nombre producto variable | Nombre variación | Variaciones |
| --------------- | ------------------------ | ---------------- | ---------------- |
| Producto 1 azul,M  | Producto 1  | Producto 1 | color=azul, talla=M |
| Producto 1 rojo,G  | Producto 1  | Producto 1 | color=azul, talla=M |
| Producto 1 beige,M | Producto 1  | Producto 1 | color=azul, talla=M |
| Producto 2 grande  | Producto 2  | Producto 2 | tamaño=grande       |
| Producto 2 chico   | Producto 2  | Producto 2 | tamaño=chico        |

5. Hay que tomar en cuenta que la empresa solo puede tener configuradas un tipo de variaciones, eso significa que TODAS las variaciones de la empresa va a ser las mismas, todas "color" y "talla", o todas "tamaño". No se puede tener distintos tipos de variaciones, SI se pueden tener productos con variaciones y productos sin variaciones.

### Condiciones para sincronizar los items y paquetes
1. Que el item o paquete en Zauru tenga precio sugerido (puede ser flexible o no), o sea que el campo de precio sugerido tenga un número y no está vacío.
2. Que el item esté activo
3. Que el item tenga activado el atributo de e-commerce
4. Que al menos una bodega habilitada como e-commerce haya tenido existencias el item (aunque actualmente tenga cero)

### Filtrado por etiqueta
El sincronizador puede configurarse para sincronizar únicamente los items que tengan una etiqueta específica (`tag_id`). Esto permite segmentar qué productos se publican en la tienda en línea sin necesidad de modificar los atributos individuales de cada item.

### Filtrado por agencia
El sincronizador puede configurarse para tomar las existencias de una agencia específica (`agency_id`) en lugar de todas las agencias con e-commerce habilitado. Esto es útil cuando se quiere mostrar el inventario de una bodega específica en la tienda en línea.

### Lista de precios personalizada
El sincronizador puede usar una lista de precios específica (`price_list_id`) en lugar de la lista de precios de la agencia predeterminada. Esto permite tener precios diferentes en la tienda en línea que en el punto de venta físico.

## Propagador de pedidos colocados en WooCommerce a Zauru
WooComerce puede crear una notificación a travez de un [webhook](https://docs.woocommerce.com/document/webhooks/) para varios tipos de eventos que pasen en el sitio, entre los tipos de eventos disponibles, vamos a utilizar el de "Pedido creado".

Cuando un cliente coloca un pedido en WooCommerce, todos los datos de la orden se van a trasladar al módulo de e-commerce en la acción de "solicitudes de e-commerce" que es el motor para revisar lo que entró desde WooCommerce y para generar los procesos necesarios para registrar la orden de venta y pago del pedido.

### Webhook para anulaciones
Adicionalmente, se puede configurar un webhook para cuando un producto es anulado o eliminado en WooCommerce (`webhook_url_when_voiding`), permitiendo que Zauru reciba notificaciones de estos eventos y pueda tomar acciones correspondientes.
