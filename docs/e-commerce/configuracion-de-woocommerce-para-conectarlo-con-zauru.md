---
title: "Configuración de WooCommerce para conectarlo con Zauru"
sidebar_label: "Configuración de WooCommerce para conectarlo con Zauru"
sidebar_position: 6
---

Para tener una tienda en linea la plataforma de preferencia en el mundo para el 2020 es [woocommerce](https://woocommerce.com) (un plugin de Wordpress).

La prioridad debería de ser tener una página __sumamente rápida y amigable__.

## Escoger un hosting realmente rápido

Existen infinidad de hosting que permiten instalar Wordpress por lo que escoger correctamente es complicado.

Nosotros recomendamos cualquier hosting que tenga un lag muy pequeño (tiempo de respuesta del ping muy bajo) y que tenga buena capacidad. Los proveedores de hosting más grandes permiten escoger el datacenter donde uno se conecta. Si uno escoge un datacenter cercano a la locación de uno, va a mejorar la velocidad de la tienda en linea.

Nuestra recomendación puntual para centro américa es [cloudways](https://vrlps.co/hQUDv4W/cp) con vultr en el datacenter de Miami; porque allí está el NAP de las américas que es nuestra conexión al "internet". Este servidor en Miami da casi la mitad de lag que un servidor de Amazon en Carolina del Norte.

![Cloudways](/img/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru-1.png)

## Temas (Estilo de la página)

Reforzar la velocidad como prioridad 1, hay que buscar un tema que tenga como prioridad la velocidad y que sea suficientemente flexible.

Nosotros recomendamos https://generatepress.com que cumple con estos 2 requerimientos.

![Generate Press](/img/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru-2.svg)

## Plugins necesarios para que la integración con Zauru sea transparente

Con estos plugins complementaremos las funcionalidades que WooCommerce no posee y que necesitamos para que la integración con Zauru sea muy sencilla.

### Solicitar el NIT en los pedidos

Cuando se termina la compra, woocommerce no solicita NIT, por lo que debemos de agregar un plugin que podamos configurar para que mande el NIT a Zauru.

[https://wordpress.org/plugins/flexible-checkout-fields/](https://wordpress.org/plugins/flexible-checkout-fields/ "Flexible checkout fields")

Para configurarlo hay que seguir estos pasos:

![configurar checkout fields](/img/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru-3.png)

### Agregar unidad de medida en los productos

Este va a habilitar la sincronización de las unidades de medida de Zauru con el producto en WooCommerce, en algunos casos esto le facilitará al cliente enteder qué está comprando.

[https://wordpress.org/plugins/woocommerce-unit-of-measure/](https://wordpress.org/plugins/woocommerce-unit-of-measure/ "Woocommerce unidades de medida")

Cada producto ahora va a tener un campo de "unit of measure" que el valor va a coincidir con el valor que está en Zauru.

![Configuración de unidad de medida](/img/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru-4.png)

### Enviar correos transaccionales a los clientes

Este plugin NO es para la integración con Zauru, pero es para que los clientes puedan recibir correos que genera la página. Todos los correos transaccionales; como cambió su contraseña, confirmación del pedido, etc.

![WP Mail SMPT](/img/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru-5.png)

[https://wpmailsmtp.com](https://wpmailsmtp.com "WP Mail SMTP")
