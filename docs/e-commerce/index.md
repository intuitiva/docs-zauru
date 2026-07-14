---
title: "E-commerce"
sidebar_label: "E-commerce"
sidebar_position: 0
---

El módulo de E-commerce de Zauru permite la compra y venta de productos o servicios a través de medios electrónicos, facilitando la integración entre Zauru y cualquier tienda en línea para mayor eficiencia en las transacciones entre empresas, clientes y consumidores.

## Funcionalidades principales

### Recepción de pedidos desde tiendas en línea
Zauru recibe pedidos a través de su API de e-commerce y los transforma en órdenes de venta, gestionando automáticamente:
- Creación o búsqueda del cliente por nombre exacto
- Validación de existencias disponibles
- Generación de envíos entre bodegas para consolidar el pedido
- Creación de la orden de venta
- Registro del pago asociado (si se envía)

### Sincronización de catálogo de productos
Los items y paquetes configurados como e-commerce en Zauru se exponen a través del API para que cualquier tienda en línea pueda consumirlos, incluyendo:
- Nombres, códigos (incluyendo EAN13), descripciones y precios
- Existencias disponibles por bodega
- Imágenes del producto (hasta 5 imágenes)
- Unidad de medida, peso y garantía
- Categorías, etiquetas y proveedor
- Soporte para paquetes (bundles)

### Integración nativa con WooCommerce
Zauru cuenta con un sincronizador dedicado que mantiene el catálogo de WooCommerce actualizado automáticamente y un propagador de pedidos que traduce los pedidos de WooCommerce al formato de Zauru.

## Estructura de la documentación

1. [Preparación de Zauru para conectarlo a cualquier tienda en línea](/e-commerce/preparacion-de-zauru-para-conectarlo-a-cualquier-tienda-en-linea) — Configuración inicial: habilitar módulo, crear usuario, permisos, items y agencias
2. [Configuración avanzada del módulo de e-commerce](/e-commerce/configuracion-avanzada-del-modulo-de-e-commerce) — Parámetros detallados de configuración: método de pago, plazo, bodega, vendedor, URLs y más
3. [Recepción de solicitudes de e-commerce (pedidos)](/e-commerce/recepcion-de-solicitudes-de-e-commerce-pedidos) — Cómo se procesan los pedidos entrantes y cómo gestionarlos manualmente
4. [Solicitar los items disponibles con el API](/e-commerce/solicitar-los-items-disponibles-con-el-api) — API para obtener catálogo de productos, paquetes, existencias, precios e imágenes
5. [Creación de una orden o pedido con el API](/e-commerce/creacion-de-orden-o-pedido-con-el-api) — API para crear pedidos desde sistemas externos
6. [Obtener credenciales por URL con el API](/e-commerce/api-obtener-credenciales-por-url) — API para resolver credenciales de usuario basado en el URL de la tienda
7. [Integración con WooCommerce](/e-commerce/integracion-con-woocommerce) — Funcionamiento del sincronizador de items y propagador de pedidos
8. [Configuración de WooCommerce](/e-commerce/configuracion-de-woocommerce-para-conectarlo-con-zauru) — Preparación del lado de WooCommerce
9. [Tareas del implementador para conectar WooCommerce y Zauru](/e-commerce/tareas-del-implementador-para-conectar-woocommerce-con-zauru) — Pasos técnicos detallados para la integración
10. [Gestión de sincronizaciones WooCommerce](/e-commerce/gestion-de-sincronizaciones-woocommerce) — Administración de las configuraciones de sincronización desde Zauru
