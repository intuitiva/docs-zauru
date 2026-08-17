---
title: "Configuración de Contratos"
sidebar_label: "Configuración"
sidebar_position: 0.5
---

Si cobra una mensualidad por contrato y un cliente se atrasa en el pago, o si los documentos recurrentes necesitan una referencia que le diga a qué cuota corresponden, esta página es para usted. Aquí se establecen los parámetros generales que aplican a todos los contratos de la entidad: el item y el término de pago con los que se cobran las moras, y la referencia extra de los documentos generados. Se accede desde el menú principal de Contratos haciendo clic en "Configuración" (Settings).

## Parámetros Configurables

Estos tres parámetros conviene dejarlos listos antes de que un contrato empiece a generar cuotas, porque son los que deciden qué se le cobra a un cliente cuando cae en mora y cómo se identifican los documentos que el sistema genera por su cuenta.

### Item de Mora

Cuando un cliente se atrasa en el pago de sus cuotas, el sistema le generará una orden de venta o una factura por ese cargo. Este parámetro define el item (producto o servicio) que se utilizará para ese concepto de mora.

Si no se selecciona ningún item de mora, la funcionalidad de generar moras queda deshabilitada para todos los contratos, aunque tengan las moras configuradas individualmente.

### Término de Pago para Mora

La orden o factura de mora también necesita condiciones de pago claras para el cliente. Este parámetro define el término de pago que se aplicará a esos documentos.

Al igual que el item de mora, si no se selecciona un término de pago, la funcionalidad de generar moras queda deshabilitada.

### Referencia Extra en Documentos Generados

Cuando un cliente tiene varias cuotas al mes, distinguir un documento de otro puede volverse un dolor de cabeza. Este parámetro permite configurar qué información adicional se incluye en el campo de referencia de los documentos generados automáticamente por los contratos.

Las opciones son:

1. **Número de Recurrencia** — Solo se incluye el número de cuota como referencia extra.
2. **Fecha** — Se incluye la fecha de generación como referencia extra.
3. **Fecha + Número de Recurrencia** — Se incluye tanto la fecha como el número de cuota en la referencia extra.

Esta configuración aplica a todos los contratos de la entidad y permite identificar más fácilmente a qué cuota corresponde cada documento generado.

## Guardar Configuración

Al hacer clic en "Guardar" (Update), los cambios se aplican inmediatamente a todos los contratos de la entidad. Los cambios en item de mora y término de pago afectan las generaciones futuras de moras. El cambio en referencia extra afecta los documentos que se generen a partir de ese momento.
