---
title: "Configuración de Variables del Módulo de Compras"
sidebar_label: "Configuración de Variables del Módulo de Compras"
sidebar_position: 21
---

Este documento describe las variables de configuracion avanzada del modulo de Compras. Estas variables controlan el comportamiento del modulo a nivel de entidad y permiten personalizar la experiencia segun las necesidades del negocio.

Para acceder a la configuracion de variables:

1. Ir a "Compras".
2. Seleccionar el icono de configuraciones.
3. Seleccionar la pestana "Variables" o "Configuracion de Compras".

![imagen1](/img/compras/configuracion-de-variables-1.png)

---

## Variables de Configuracion

### Ordenes de Compra Pre-Autorizadas
**Variable:** `purchase_orders_pre_authorized`

Cuando esta variable esta activada, todas las ordenes de compra nuevas se crean automaticamente como autorizadas, sin necesidad de autorizarlas manualmente. Esto agiliza el proceso para empresas que no requieren un flujo de aprobacion formal.

### Cuenta de Impuesto Extra 1 y 2 en Items de Compra
**Variables:** `items_purchases_extra_tax_1_account`, `items_purchases_extra_tax_2_account`

Estas variables permiten configurar cuentas contables para impuestos adicionales que se aplican a los items de compra. Cuando se configuran, el sistema calcula y registra automaticamente estos impuestos en las partidas contables de las compras.

### Cuentas de Impuesto para Ordenes de Compra
**Variables:** `purchase_order_tax_1_account`, `purchase_order_tax_2_account`, `purchase_order_tax_3_account`, `purchase_order_tax_4_account`

Estas variables permiten configurar hasta 4 cuentas contables diferentes para impuestos que se aplican a las ordenes de compra. Cada cuenta puede representar un tipo de impuesto diferente (IVA, ISR, etc.).

### Item para Consolidados
**Variable:** `item_for_consolidates`

Define el producto por defecto que se utiliza al crear consolidados de facturas especiales. Este item se asigna automaticamente al consolidado creado a traves del flujo de facturas especiales.

### Webhook de Ordenes de Compra
**Variables:** `webhook_url_purchase_orders`, `send_webhook_purchase_orders`

Permiten configurar una URL de webhook a la que Zauru enviara informacion de las ordenes de compra. La variable `send_webhook_purchase_orders` activa o desactiva el envio de webhooks.

### Autorizar Pagos
**Variable:** `authorize_discharge`

Cuando esta variable esta activada, los pagos (descargos) requieren un paso adicional de autorizacion antes de ser aplicados. Esto implementa un control de doble verificacion para los pagos a proveedores.

### Usar Recepcion al Recibir Automaticamente
**Variable:** `use_reception_when_receiving_automatically`

Cuando esta activada (valor por defecto), el sistema crea un registro de recepcion al recibir automaticamente una orden de compra. Si se desactiva, la recepcion se hace sin crear el registro de recepcion.

### Ocultar Etiquetas en Detalles de Compra
**Variable:** `hide_tag_in_purchase_details`

Oculta la columna de etiquetas (tags) en las lineas de detalle de las ordenes de compra, requisiciones y otros documentos de compras. Util para simplificar la interfaz si no se utilizan etiquetas.

### Ocultar Centro de Costo en Detalles de Compra
**Variable:** `hide_cost_center_in_purchase_details`

Oculta la columna de centro de costo en las lineas de detalle de las ordenes de compra y requisiciones. Util para simplificar la interfaz si no se utilizan centros de costo.

### Ocultar Otras Agencias en Nueva Requisicion
**Variable:** `hide_other_agencies_in_new_purchase_requisition`

Restringe la lista de agencias disponibles al crear una nueva requisicion de compra. Solo se muestra la agencia del empleado que esta creando la requisicion, evitando que se seleccionen agencias incorrectas.

### Ocultar Otros Solicitantes en Nueva Requisicion
**Variable:** `hide_other_requestors_in_new_purchase_requisition`

Restringe la lista de solicitantes al crear una nueva requisicion de compra. Solo se muestra el empleado actual como solicitante.

### Separar Numero de Factura en Dos Campos
**Variable:** `split_invoice_number_in_two_fields`

Divide el campo de numero de factura en dos partes: prefijo y sufijo. Esto es util para empresas que manejan series de facturacion donde el numero de factura se compone de una serie y un correlativo (ej. "A-001" donde "A" es la serie y "001" el correlativo).

### Eliminar Partidas en Recepciones Anuladas
**Variable:** `eliminate_entries_on_voided_receptions`

Cuando esta activada, al anular una recepcion de mercaderia se eliminan automaticamente las partidas contables asociadas. Si esta desactivada, las partidas permanecen y deben ser eliminadas manualmente.

### Mostrar Flag POS en Ordenes de Compra
**Variable:** `enable_pos_flag_in_purchase_orders_form`

Muestra una casilla de verificacion "POS" en el formulario de ordenes de compra. Util para identificar compras realizadas en punto de venta.

### Flag POS Activado por Defecto
**Variable:** `set_pos_flag_true_by_default_in_purchase_orders_form`

Cuando esta activada junto con `enable_pos_flag_in_purchase_orders_form`, la casilla POS aparece marcada por defecto en las nuevas ordenes de compra.

---

## Guardar la Configuracion

Para guardar los cambios en las variables de configuracion:

1. Ajuste las variables segun sus necesidades.
2. Al final del formulario, presione "Guardar Configuracion".

![imagen2](/img/compras/configuracion-de-variables-1.png)

Le aparecera un mensaje de exito notificandole que la configuracion se guardo exitosamente.
