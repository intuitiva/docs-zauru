---
title: "Configuración de Contratos"
sidebar_label: "Configuración"
sidebar_position: 0.5
---

La configuración de contratos permite establecer parámetros generales que aplican a todos los contratos del sistema. Se accede desde el menú principal de Contratos haciendo clic en "Configuración" (Settings).

## Parámetros Configurables

### Item de Mora

Define el item (producto o servicio) que se utilizará al generar una orden de venta o factura por concepto de mora.

Si no se selecciona ningún item de mora, la funcionalidad de generar moras queda deshabilitada para todos los contratos, aunque tengan las moras configuradas individualmente.

### Término de Pago para Mora

Define el término de pago que se aplicará a las órdenes de venta o facturas generadas por concepto de mora.

Al igual que el item de mora, si no se selecciona un término de pago, la funcionalidad de generar moras queda deshabilitada.

### Referencia Extra en Documentos Generados

Permite configurar qué información adicional se incluye en el campo de referencia de los documentos generados automáticamente por los contratos.

Las opciones son:

1. **Número de Recurrencia** — Solo se incluye el número de cuota como referencia extra.
2. **Fecha** — Se incluye la fecha de generación como referencia extra.
3. **Fecha + Número de Recurrencia** — Se incluye tanto la fecha como el número de cuota en la referencia extra.

Esta configuración aplica a todos los contratos de la entidad y permite identificar más fácilmente a qué cuota corresponde cada documento generado.

## Guardar Configuración

Al hacer clic en "Guardar" (Update), los cambios se aplican inmediatamente a todos los contratos de la entidad. Los cambios en item de mora y término de pago afectan las generaciones futuras de moras. El cambio en referencia extra afecta los documentos que se generen a partir de ese momento.
