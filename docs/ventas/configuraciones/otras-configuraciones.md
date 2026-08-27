---
title: "Otras Configuraciones"
sidebar_label: "Otras Configuraciones"
sidebar_position: 8
---

Esta sección maneja muchas configuraciones que se permiten fijar en Zauru. Las variables que se manejan son las siguientes.

## Variables generales
Estas variables son autoexplicativas. Las nombraremos brevemente para su referencia:

- __Deshabilitar la validación de crédito suficiente:__ Esto permite emitir facturas por sobre el límite de crédito (monto, cantidad o vencimiento).
![deshabilitar validar limite de credito](/img/ventas/configuraciones-21.png)

## Variables para los Webhooks
Estas variables permiten extender Zauru y comunicarlo automáticamente con otros servicios como [Zapier](https://zapier.com "Zapier").

Esto significa que uno coloca el destino de donde se va a enviar la información de la factura recién emitida y Zauru automáticamente envía el JSON con la descripción de la factura.

## Variables para el almacenamiento externo de documentos
Estas variables sirven para publicar a servicios externos la definición de cada factura para su almacenamiento y validación.

En Guatemala se utiliza para facturas electrónicas FACE y Facturas Electrónicas en Línea FEL.

## Variables para el envío automático de correos

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

## Variables para Notas de Crédito

- **Cuenta de notas de crédito**: Cuenta contable para registrar notas de crédito.
- **Cuenta de devoluciones de notas de crédito**: Cuenta para devoluciones asociadas a notas de crédito.
- **Días de devolución de IVA en notas de crédito**: Cantidad de días para la devolución del IVA.
- **Método de pago para notas de crédito**: Método de pago predeterminado para redención de notas de crédito.

## Variables para Cuentas de Ventas

- **Cuenta de ventas de productos**: Cuenta contable predeterminada para venta de productos.
- **Cuenta de ventas de servicios**: Cuenta contable predeterminada para venta de servicios.
- **Cuenta de impuesto extra 1**: Cuenta contable para impuesto adicional 1.
- **Cuenta de impuesto extra 2**: Cuenta contable para impuesto adicional 2.

## Variables de Validación y Comportamiento

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

## Variables de Consolidación de Ventas

- **Deshabilitar trabajos en segundo plano para consolidaciones**: Procesa las consolidaciones en línea en lugar de usar background jobs.

## Variables de Donaciones

- **Mostrar selección de documento para código de aceptación de donación**: Permite elegir entre factura y donación.
- **Documento predeterminado para código de aceptación de donación**: Define el tipo de documento por defecto.

## Variables para Webhooks

- **URL de Webhook para facturas**: Destino para enviar datos de facturas nuevas.
- **Habilitar envío de Webhook para facturas**: Activa/desactiva el webhook de facturas.
- **URL de Webhook para pagos**: Destino para enviar datos de pagos nuevos.
- **Habilitar envío de Webhook para pagos**: Activa/desactiva el webhook de pagos.
- **Habilitar envío de Webhook al confirmar pagos**: Envía webhook solo cuando se confirma un pago.
- **Forzar ocultar clientes de otros vendedores**: Restringe la visibilidad de clientes entre vendedores.

## Variables para Almacenamiento Externo de Documentos (FEL)

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
