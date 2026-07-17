---
title: "Configuraciones de Ventas"
sidebar_label: "Configuraciones de Ventas"
sidebar_position: 20
---

En el módulo de ventas se pueden configurar varias opciones que le permitirán llevar un mejor control contable de sus ventas, las opciones configurables son las siguientes:

1. Términos de Pago
2. Descuentos
3. Métodos de Pago
4. Listado de Precios
5. Otras configuraciones

La forma de configurar estas opciones es la siguiente:

![imagen1](/img/ventas/configuraciones-1.jpg)

---

## Términos de Pago
Los términos de pago sirven para especificar la cantidad de tiempo que le daremos a nuestro cliente para efectuar el pago de un producto o servicio brindado por su empresa. El termino de pago puede especificar lo siguiente:

- Desde que cuenta hasta que cuenta se afectara cuando se haga una venta.
- La categoría de clientes que aplican al termino de pago.
- Los descuentos permitidos al termino de pago
- Opciones de anticipos y asientos extra

### Listar Términos de Pago

Para consultar la lista de términos de pago:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Términos de Pago"**.

Los términos de pago pueden filtrarse por estado:
- **Activos**: Muestra solo los términos de pago activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

En la lista se muestra el nombre, días de crédito, porcentaje de crédito y los descuentos permitidos asociados. Al seleccionar un término de pago de la lista, se muestran sus detalles incluyendo las categorías de clientes vinculadas y los descuentos asociados.

### Crear un Nuevo Término de Pago

Los pasos para crear un nuevo término de pago son los siguientes:

1. Ir a términos de pago en las configuraciones de ventas.
2. Seleccionar "Nuevo Término de Pago".

![imagen2](/img/ventas/configuraciones-2.jpg)

Entrara a los detalles del Nuevo Término de Pago, las opciones para crearlo son las siguientes:

1. Si selecciona el cuadro de Activo quiere decir que el termino de pago se podrá usar.
2. Coloque el Nombre del Nuevo Término de Pago.
3. Especifique desde que cuenta saldrá la venta (Cuenta Desde / Account From).
4. Especifique a que cuenta de activo se ira (Cuenta Hacia / Account To).
5. Coloque el porcentaje de crédito que se dará con este termino de pago.
6. Coloque la cantidad de días de crédito que tiene el cliente para pagar.
7. Para guardar los cambios presione "Crear término de pago".

![imagen3](/img/ventas/configuraciones-3.jpg)

### Opciones Avanzadas de Términos de Pago

Al crear o editar un término de pago, dispone de opciones contables avanzadas:

- **Usar cuentas de productos y servicios en lugar de cuenta desde**: Si esta activado, el sistema utilizara las cuentas configuradas en las variables `product_sales_account` y `service_sales_account` en lugar de la cuenta "desde" del término de pago.
- **Cuenta de costo**: Cuenta contable para registrar el costo de la mercadería vendida.
- **Cuenta de activo de inventario**: Cuenta de activo para movimientos de inventario.
- **Cuenta de productos**: Cuenta contable específica para venta de productos.
- **Cuenta de servicios**: Cuenta contable específica para venta de servicios.
- **Centro de costo**: Centro de costo asociado a las ventas bajo este término de pago.
- **Cuenta de anticipo hacia**: Cuenta donde se registran los pagos de anticipos cuando se usa este término de pago.

#### Asientos Extra

Los términos de pago permiten configurar asientos contables adicionales que se generaran automáticamente al emitir una factura:

- **Asientos extra (extra_entries)**: Definición de asientos contables adicionales en formato JSON.
- **Valores flexibles de asientos (flexible_entries_values)**: Permite que los valores de los asientos extra sean editables al momento de facturar.
- **Etiquetas de asientos flexibles (flexible_entries_tags)**: Etiquetas asociadas a los asientos flexibles.
- **Memo**: Nota o memo asociado al término de pago.

### Especificar Categorías de Clientes

Después de crear el término de pago deberá especificar que categoría de clientes aplica para usar este termino de pago, la categoría de clientes debió ser creada previamente, refiérase a "Crear Clientes y/o Proveedores" en el manual del usuario para crear una categoría de clientes.

Los pasos para especificar las categorías aplicables al termino de pago son los siguientes:

1. Deberá aparecer un mensaje de éxito en la pantalla después de crear el término de pago.
2. Presione el botón de editar en el término de pago.

![imagen4](/img/ventas/configuraciones-4.jpg)

Ahora le aparecerán las opciones de edición del término de pago, deberá seguir los siguientes pasos:

1. Seleccione si este término de pago es aplicable a clientes que no tienen categoría, quiere decir que cualquier cliente nuevo aplicara a este termino de pago.
2. Seleccione la categoría de clientes que creo previamente para que este termino de pago sea aplicable a esa categoría.
3. Para guardar sus cambios presione "Actualizar término de pago".

![imagen5](/img/ventas/configuraciones-5.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla después de actualizar el termino de pago. En el punto numero dos puede ver como la Categoría 1 aparece ahora en el termino de pago NET 45.

![imagen6](/img/ventas/configuraciones-6.jpg)

### Ver Detalles de un Término de Pago

Al hacer click sobre un término de pago en la lista, podrá ver:
- Datos generales (nombre, días de crédito, porcentaje de crédito, estado).
- Categorías de clientes asociadas.
- Descuentos permitidos.
- Cuentas contables configuradas (desde, hacia, costo, inventario, productos, servicios).
- Información de anticipos y asientos extra.

### Eliminar un Término de Pago

Para eliminar un término de pago:

1. En la lista de términos de pago, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

---

## Descuentos

Zauru le permite crear descuentos aplicables al termino de pago, a ítems específicos, a paquetes o a categorías de clientes. Los descuentos pueden ser de monto fijo o porcentual.

### Listar Descuentos

Para consultar la lista de descuentos configurados:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Descuentos"**.

Los descuentos pueden filtrarse por estado:
- **Activos**: Muestra solo los descuentos activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un descuento de la lista se muestran sus detalles completos.

### Crear un Nuevo Descuento

Los pasos para crear un nuevo descuento son los siguientes:

1. Ir a **"Ventas"** > **"Configuraciones"** > **"Descuentos"**.
2. Presionar **"Nuevo Descuento"**.

![imagen7](/img/ventas/configuraciones-7.jpg)

Ahora le aparecerán las opciones para crear un nuevo Descuento:

1. Si coloca el cheque de **Activo** quiere decir que el descuento se podrá usar en el sistema.
2. Coloque el **nombre** del descuento.
3. Seleccione si el descuento es aplicable a un **ítem** (Producto), a un **término de pago**, o a ambos.
4. Seleccione la **moneda** del descuento.
5. Si el descuento es de una **cantidad fija**, especifique la cantidad.
6. Si el descuento es de un **porcentaje** de la cantidad total, coloque el porciento de descuento. Para colocar 10% de descuento coloque 0.10.
7. Si selecciona el cheque de **descartar decimales**, se removerán los decimales en la cantidad del descuento.
8. Especifique un **umbral mínimo de cantidad** (`min_quantity_threshold`) para que el descuento aplique solo cuando se alcanza una cantidad mínima de ítems.
9. Especifique un **umbral máximo de cantidad** (`max_quantity_threshold`) para limitar el descuento hasta cierta cantidad de ítems.
10. Marque **Forzar asignación** (`force_assignation`) si desea que el descuento se aplique automáticamente sin intervención del usuario.
11. Seleccione si el descuento **aplica a detalles de factura o a la factura completa** (`invoice_details_or_invoices`).
12. Coloque una **nota** para describir el descuento.
13. Para guardar los cambios presione **"Crear descuento"**.

![imagen8](/img/ventas/configuraciones-8.jpg)

### Filtrar por Categoría de Cliente

Al crear o editar un descuento, puede activar el **filtro por categoría de beneficiario** (`payee_category_filter_active`). Esto permite:

- Seleccionar una categoría de clientes específica para la cual aplica el descuento.
- Si el filtro está desactivado, el descuento aplica para todas las categorías de clientes.
- Si el filtro está activado y no se selecciona una categoría, el descuento no aplica a ninguna.

### Asignar Ítems, Paquetes y Términos de Pago al Descuento

Después de crear el descuento deberá editarlo para especificar que términos de pago, ítems o paquetes son aplicables:

1. Le deberá de aparecer un mensaje de éxito después de crear el descuento.
2. Presione el botón de **"Editar"** en el descuento.

![imagen9](/img/ventas/configuraciones-9.jpg)

Le aparecerán las opciones de edición:

3. Seleccione los **términos de pago** que aplican para el descuento (puede seleccionar múltiples).
4. Seleccione los **ítems** específicos a los que aplica el descuento (puede seleccionar múltiples).
5. Seleccione los **paquetes** (bundles) a los que aplica el descuento (puede seleccionar múltiples).
6. Para guardar los cambios presione **"Actualizar Descuento"**.

![imagen10](/img/ventas/configuraciones-10.jpg)

Le aparecerá un mensaje de éxito y ahora el descuento será aplicable a los términos de pago, ítems y paquetes que especifico.

![imagen11](/img/ventas/configuraciones-11.jpg)

**Nota**: Al actualizar un descuento, todas las asignaciones existentes de términos de pago, ítems y paquetes se eliminan y se recrean con las nuevas selecciones. Esto evita inconsistencias en las reglas de descuento.

### Verificar Descuentos Asignados

Para verificar que el termino de pago que especifico tenga el descuento que creo siga los siguientes pasos:

1. Diríjase a la pestaña de **"Términos de pago"** en las configuraciones de ventas.
2. Verifique que en la columna de **"Descuentos Permitidos"** aparezca el descuento que coloco al termino de pago.

![imagen12](/img/ventas/configuraciones-12.jpg)

También puede ver los descuentos desde la vista de detalle de cada término de pago.

### Eliminar un Descuento

Para eliminar un descuento permanentemente:

1. En la lista de descuentos, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

A diferencia de otros elementos en Zauru, los descuentos se eliminan físicamente de la base de datos (hard delete).

---

## Métodos de Pago
Los métodos de pago especifican de que forma pagara el cliente, en efectivo, con tarjeta o si se le dará crédito por ejemplo. Se especifica también que cuenta contable será afectada al momento del cobro de una orden o factura.

### Listar Métodos de Pago

Para consultar la lista de métodos de pago:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Métodos de Pago"**.

Los métodos de pago pueden filtrarse por estado:
- **Activos**: Muestra solo los métodos de pago activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un método de pago de la lista, se muestran sus detalles completos.

### Crear un Nuevo Método de Pago

La forma de configurar los métodos de pago es la siguiente:

1. Ir a Métodos de pago en las configuraciones de ventas.
2. Seleccionar "Nuevo Método de Pago".

![imagen13](/img/ventas/configuraciones-13.jpg)

Le aparecerán las opciones para crear un nuevo Método de Pago, las opciones son las siguientes:

1. Coloque el **nombre** del método de pago.
2. Coloque hacía que **cuenta principal** se transferirá el pago cuando se cobre una factura con este método de pago.
3. Seleccione una **segunda cuenta** a la que también se afectara cuando se cobre (opcional).
4. Seleccione que **porcentaje del pago** se transferirá a esta segunda cuenta (`account2_rate`). Para 6.11% coloque 0.0611.
5. Coloque un **monto fijo** que se transferirá a la segunda cuenta (`account2_fixed_amount`) independientemente del porcentaje.
6. Marque **Asiento contable imprimible** (`printable_entry`) si desea que la transacción contable del pago sea visible en los reportes de impresión.
7. Marque **Evitar mostrar cambio en sobrepagos** (`avoid_overpay_showing_change`) para que cuando un cliente pague de más no se muestre el cambio en la interfaz.
8. Marque **Comercio electrónico** (`ecommerce`) si este método de pago estará disponible para pagos en línea.
9. Para guardar los cambios presione **"Crear método de pago"**.

![imagen14](/img/ventas/configuraciones-14.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla y una columna en color verde mostrando el nuevo método de pago creado.

![imagne15](/img/ventas/configuraciones-15.jpg)

### Editar un Método de Pago

Para editar un método de pago existente:

1. En la lista de métodos de pago, localice el que desea modificar.
2. Haga click sobre **"Editar"**.
3. Realice los cambios necesarios.
4. Presione **"Actualizar método de pago"**.

### Eliminar un Método de Pago

Para eliminar un método de pago:

1. En la lista de métodos de pago, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

---

## Listados de Precios
El listado de precios permite colocar precios de venta distintos para ciertas categorías de clientes o puntos de venta. Por ejemplo, puede crear un listado de precios de distribuidor para que cuando se le facture a un distribuidor el precio sea mas bajo que el precio sugerido de venta.

### Listar Listados de Precios

Para consultar la lista de listados de precios:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Listado de Precios"**.

Los listados de precios pueden filtrarse por estado:
- **Activos**: Muestra solo los listados activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un listado de precios de la lista, se muestran sus detalles.

### Crear un Nuevo Listado de Precios

Los pasos para crear un listado de precios son los siguientes:

1. Ir a **"ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Listado de Precios"**.
4. Seleccionar **"Nuevo Listado de Precio"**.

![iamgen16](/img/ventas/configuraciones-16.jpg)

Le aparecerá las opciones para crear un nuevo listado de precios, las opciones son las siguientes:

1. Si selecciona la caja de **"Activa"**, el listado de precios estará disponible para usar en el sistema.
2. Coloque el **nombre** del listado de precios.
3. Coloque una **descripción** del listado de precios.
4. Marque **Exclusivo para cliente** (`client_exclusive`) si este listado de precios aplica únicamente a categorías de clientes específicas (no a agencias).
5. Marque **Comercio electrónico** (`ecommerce`) si este listado de precios estará disponible para ventas en línea.
6. Para guardar los cambios presione **"Crear lista de precio"**.

![imagen17](/img/ventas/configuraciones-17.png)

Le deberá aparecer un mensaje de éxito en la pantalla notificando que se creo el listado de precios.

### Editar un Listado de Precios

Ahora deberá editar el listado de precios para seleccionar las categorías de clientes y las agencias que aplicaran. Los pasos para hacerlo son los siguientes:

1. Presione el botón de **"Editar"** en el listado de precios que creo.

![imagen18](/img/ventas/configuraciones-18.jpg)

En la vista de edición podrá:

1. Seleccionar que **categorías de clientes** aplicaran a este listado de precios. Se muestran dos listas:
   - **Categorías seleccionadas**: Las que ya están asignadas a este listado.
   - **Categorías libres**: Categorías de clientes que no están asignadas a ningún listado de precios.

2. Seleccionar que **agencias/puntos de venta** aplicaran a este listado de precios. Se muestran dos listas:
   - **Agencias seleccionadas**: Las que ya están asignadas a este listado.
   - **Agencias libres**: Agencias activas no virtuales que no están asignadas a ningún listado de precios.

3. Para aplicar los cambios presione **"Actualizar lista de precio"**.

![imagen19](/img/ventas/configuraciones-19.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla mostrándole la categoría y agencia agregadas al listado de precios. Cada vez que se seleccione a un cliente que pertenezca a la categoría asignada o se facture desde la agencia asignada, el precio será el que se coloque en el listado de precios.

![imagen20](/img/ventas/configuraciones-20.jpg)

Ahora deberá colocar el precio a sus ítems en este listado de precios, los pasos para hacerlo se especifican en el tutorial de **"Precios Sugeridos"**.

### Eliminar un Listado de Precios

Para eliminar un listado de precios:

1. En la lista de listados de precios, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

---

## Configuraciones de Gateway (Pasarelas de Pago)

Las configuraciones de gateway permiten integrar Zauru con procesadores de pago para tokenizar tarjetas de crédito, procesar pagos y manejar reembolsos. Para más detalles, consulte el tutorial completo de **"Configuraciones de Gateway / Pasarela de Pago"**.

Los pasos para acceder a las configuraciones de gateway son:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Configuraciones de Gateway"**.

En esta sección podrá:
- Crear nuevas configuraciones de gateway con credenciales y certificados.
- Configurar opciones de tokenización, reembolsos, cuotas, 3D Secure y pagos recurrentes.
- Activar o desactivar configuraciones.
- Definir una configuración como predeterminada.

---

## Tipos de Tarjeta de Regalo

Los tipos de tarjeta de regalo definen las características de las tarjetas de regalo que se pueden emitir. Para más detalles, consulte el tutorial completo de **"Tarjetas de Regalo (Gift Cards)"**.

Los pasos para acceder a los tipos de tarjeta de regalo son:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Tipos de Tarjeta de Regalo"**.

En esta sección podrá:
- Crear tipos de tarjeta de regalo con nombre, código, moneda y valor fijo.
- Asociar un ítem de inventario que representa físicamente la tarjeta.
- Ver el stock disponible en bodega del ítem asociado.

---

## Operaciones de Gateway (Bitácora)

La bitácora de operaciones de gateway permite auditar todas las interacciones con las pasarelas de pago. Para más detalles, consulte el tutorial completo de **"Operaciones de Gateway - Bitácora"**.

Los pasos para acceder a la bitácora son:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Operaciones de Gateway"**.

En esta sección podrá:
- Filtrar operaciones por estado (con error, sin error, todas).
- Filtrar por rango de fechas.
- Ver el detalle de cada operación incluyendo solicitud, respuesta y metadata.

---

## Otras configuraciones

Esta sección maneja muchas configuraciones que se permiten fijar en Zauru. Las variables que se manejan son las siguientes

### Variables generales
Estas variables son autoexplicativas. Las nombraremos brevemente para su referencia:

- __Deshabilitar la validación de crédito suficiente:__ Esto permite emitir facturas por sobre el límite de crédito (monto, cantidad o vencimiento)
![deshabilitar validar limite de credito](/img/ventas/configuraciones-21.png)

### Variables para los Webhooks
Estas variables permiten extender Zauru y comunicarlo automáticamente con otros servicios como [Zapier](https://zapier.com "Zapier").

Esto significa que uno coloca el destino de donde se va a enviar la información de la factura recien emitida y Zauru automáticamente envía el JSON con la descripción de la factura.

### Variables para el almacenamiento externo de documentos
Estas variables sirven para publicar a servicios externos la definición de cada factura para su almacenamiento y validación.

En Guatemala se utiliza para facturas electrónicas FACE y Facturas Electrónicas en Linea FEL

### Variables para el envío automático de correos

Estas variables sirven para automatizar el envío automático de las facturas por correo electrónico. Estas configuraciones solo funcionan para facturas emitidas y almacenadas en servicios externos (sección anterior).

Las variables configurables incluyen:

- **Remitente del correo**: Zauru o Ninguno.
- **Formato del adjunto**: Enlace o PDF.
- **Dirección de correo "De" (From)**: Dirección que aparecerá como remitente.
- **Nombre "De" (From Name)**: Nombre que aparecerá como remitente.
- **Responder a (Reply-To)**: Dirección para respuestas.
- **CC**: Copia carbono.
- **CC al vendedor**: Incluir al vendedor en copia.
- **CC al supervisor de agencia**: Incluir al supervisor de la agencia en copia.
- **BCC**: Copia oculta.
- **Saludo**: Texto de saludo del correo.
- **Asunto del correo (facturas)**: Asunto para correos de facturas.
- **Cuerpo del mensaje (facturas)**: Cuerpo del correo para facturas.
- **Asunto del correo (notas de crédito)**: Asunto para correos de notas de crédito.
- **Cuerpo del mensaje (notas de crédito)**: Cuerpo del correo para notas de crédito.
- **Asunto del correo (anulaciones)**: Asunto para correos de anulación de facturas.
- **Cuerpo del mensaje (anulaciones)**: Cuerpo para correos de anulación de facturas.
- **Asunto del correo (anulación NC)**: Asunto para correos de anulación de notas de crédito.
- **Cuerpo del mensaje (anulación NC)**: Cuerpo para correos de anulación de notas de crédito.
- **Asunto del correo (pagos)**: Asunto para correos de pagos.
- **Cuerpo del mensaje (pagos)**: Cuerpo del correo para pagos.
- **Habilitar envío de correos de pagos**: Activar/desactivar envío automático de correos de pago.
- **Habilitar envío en ambientes no productivos**: Permite probar envíos en desarrollo/testing.
- **Ocultar confirmación de pago**: Oculta la opción de confirmar pago en la interfaz.

### Variables para Notas de Crédito

- **Cuenta de notas de crédito**: Cuenta contable para registrar notas de crédito.
- **Cuenta de devoluciones de notas de crédito**: Cuenta para devoluciones asociadas a notas de crédito.
- **Días de devolución de IVA en notas de crédito**: Cantidad de días para la devolución del IVA.
- **Método de pago para notas de crédito**: Método de pago predeterminado para redención de notas de crédito.

### Variables para Cuentas de Ventas

- **Cuenta de ventas de productos**: Cuenta contable predeterminada para venta de productos.
- **Cuenta de ventas de servicios**: Cuenta contable predeterminada para venta de servicios.
- **Cuenta de impuesto extra 1**: Cuenta contable para impuesto adicional 1.
- **Cuenta de impuesto extra 2**: Cuenta contable para impuesto adicional 2.

### Variables de Validación y Comportamiento

- **Habilitar alteración de categoría de cliente**: Permite cambiar la categoría de un cliente automáticamente.
- **Usar costo promedio ponderado de stock en lugar del costo promedio**: Alterna el método de cálculo de costo.
- **Política de generación de órdenes de producción**: Define cuándo se generan órdenes de producción.
- **Precios finales editables en precios unitarios flexibles**: Permite editar el precio final al facturar.
- **Deshabilitar validación de crédito suficiente**: Permite emitir facturas por sobre el límite de crédito.
- **Habilitar validación de costo vs precio**: Alerta cuando el precio de venta es menor al costo.
- **Habilitar etiquetas en detalles de factura**: Permite agregar tags en las líneas de la factura.
- **Ocultar parámetro de sujeto a impuestos**: Oculta la opción de factura sujeta a impuestos.
- **Valor predeterminado de sujeto a impuestos**: Define si las facturas nuevas son sujetas a impuestos por defecto.
- **Excluir decimales**: Redondea los montos eliminando decimales.
- **Excluir pagos provisionales del límite de crédito**: No considera los draft payments para el cálculo de crédito.
- **Forzar facturas no fiscales para categoría de cliente**: Las facturas para cierta categoría siempre serán no fiscales.

### Variables de Consolidación de Ventas

- **Deshabilitar trabajos en segundo plano para consolidaciones**: Procesa las consolidaciones en línea en lugar de usar background jobs.

### Variables de Donaciones

- **Mostrar selección de documento para código de aceptación de donación**: Permite elegir entre factura y donación.
- **Documento predeterminado para código de aceptación de donación**: Define el tipo de documento por defecto.

### Variables para Webhooks

- **URL de Webhook para facturas**: Destino para enviar datos de facturas nuevas.
- **Habilitar envío de Webhook para facturas**: Activa/desactiva el webhook de facturas.
- **URL de Webhook para pagos**: Destino para enviar datos de pagos nuevos.
- **Habilitar envío de Webhook para pagos**: Activa/desactiva el webhook de pagos.
- **Habilitar envío de Webhook al confirmar pagos**: Envía webhook solo cuando se confirma un pago.
- **Forzar ocultar clientes de otros vendedores**: Restringe la visibilidad de clientes entre vendedores.

### Variables para Almacenamiento Externo de Documentos (FEL)

- **Habilitar envío a servicio de almacenamiento externo**: Activa/desactiva la integración con FEL.
- **Usuario, contraseña y contraseña extra**: Credenciales para el servicio FEL.
- **Usuario, contraseña y contraseña extra (pruebas)**: Credenciales para modo prueba.
- **Certificado PFX y contraseña**: Firma electrónica para facturación.
- **Ajuste de número de secuencia**: Para ajustar la numeración en El Salvador.
- **Habilitar pruebas de contingencia**: Permite probar el modo contingencia.
- **Registrar pago por IVA retenido**: Activa registro de pagos de IVA retenido.
- **Método de pago para IVA retenido**: Método para pagos de IVA retenido.
- **Campos extra 1-7**: Campos adicionales para requerimientos específicos del certificador.
- **Prorratear descuentos de línea**: Distribuye descuentos entre líneas de la factura.
- **Código de escenario exento**: Para facturación de ítems exentos (medicinas, vehículos).
- **Código de escenario de cliente exento**: Para clientes exentos (maquilas, zonas francas).
- **Manipulación de XML antes del envío**: Opciones de transformación del XML.
- **Incluir referencia de línea en descripción XML**: Agrega la referencia de la línea en el XML.
- **Addendum personalizado**: Texto adicional para incluir en el XML de facturación.
- **Incoterm para facturas de exportación**: Término de comercio internacional para exportaciones.

---

## API (llamadas desde sistemas externos)

### Términos de Pago

#### Lista de términos de pago activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/actives.json
```

#### Ver detalle de un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

#### Obtener plantilla para crear un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/new.json
```

#### Crear nuevo término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment_term": {
      "name": "NET 30",
      "active": "1",
      "credit_days": "30",
      "credit_percent": "100",
      "account_from_id": "1",
      "account_to_id": "2",
      "applicable_to_uncategorized_payees": "1"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_terms.json
```

#### Actualizar un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "payment_term": {
      "name": "NET 30 Actualizado",
      "active": "1",
      "credit_days": "45",
      "credit_percent": "100"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

#### Eliminar término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

### Métodos de Pago

#### Lista de métodos de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods.json
```

#### Ver detalle de un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

#### Obtener plantilla para crear un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods/new.json
```

#### Crear nuevo método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment_method": {
      "name": "Método de pago Prueba",
      "active": "1",
      "printable_entry": "1",
      "avoid_overpay_showing_change": "1",
      "ecommerce": "0",
      "account_id": "1",
      "account2_id": "2",
      "account2_rate": "0.01",
      "account2_fixed_amount": "1.45"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_methods.json
```

#### Actualizar un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payment_method": {
      "name": "Método de pago Actualizado",
      "active": "1",
      "account_id": "3"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

#### Eliminar método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

### Listados de Precios

#### Lista de listados de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists.json
```

#### Ver detalle de un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

#### Obtener plantilla para crear un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists/new.json
```

#### Crear nuevo listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "price_list": {
      "name": "Lista Distribuidor",
      "active": "1",
      "description": "Precios especiales para distribuidores",
      "client_exclusive": "1",
      "ecommerce": "0",
      "payee_category_ids": ["1", "2"],
      "agency_ids": ["1"]
    }
  }' \
  https://app.zauru.com/sales/settings/price_lists.json
```

#### Actualizar un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "price_list": {
      "name": "Lista Distribuidor Actualizada",
      "active": "1",
      "description": "Precios actualizados para distribuidores"
    }
  }' \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

#### Eliminar listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

### Descuentos

#### Lista de descuentos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts.json
```

#### Ver detalle de un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts/1.json
```

#### Obtener plantilla para crear un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts/new.json
```

#### Crear nuevo descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discount": {
      "name": "Descuento 10%",
      "active": "1",
      "percent": "0.10",
      "currency_id": "1",
      "remove_decimals": "1",
      "notes": "Descuento de temporada",
      "payment_term_ids": ["1", "2"],
      "item_ids": ["5", "10"]
    }
  }' \
  https://app.zauru.com/sales/settings/discounts.json
```

#### Actualizar un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "discount": {
      "name": "Descuento 15%",
      "active": "1",
      "percent": "0.15"
    }
  }' \
  https://app.zauru.com/sales/settings/discounts/1.json
```

#### Eliminar descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/discounts/1.json
```
