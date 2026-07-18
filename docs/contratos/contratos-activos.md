---
title: "Contratos Activos"
sidebar_label: "Contratos Activos"
sidebar_position: 2
---

Al momento de activar el contrato preliminar se convierte en un contrato activo; lo que significa que va a generar documentos recurrentemente con la periodicidad estipulada, indefinidamente o una cantidad específica de recurrencias.

## Listado de Contratos Activos

El listado muestra todos los contratos activos (en ejecución) con filtros por tipo de documento. Las columnas incluyen: ID, Tipo de Documento, Número de Contrato, Referencia, Beneficiario, Items, Cuotas, Cuota Actual, Periodicidad, Fecha de Inicio, Fecha de Próxima Cuota, Monto y Acciones.

![listado de contratos activos](/img/contratos/contratos-activos-1.png)

Desde este listado también se puede acceder a los **Contratos Anulados** (Voided Contracts) mediante el botón correspondiente.

### Contratos Anulados

Los contratos anulados son contratos activos que fueron cancelados y ya no aparecen en los listados principales. Un contrato solo se puede anular si no tiene documentos generados asociados (facturas, órdenes de compra, casos o envíos). La anulación no es destructiva (no borra el registro), pero marca el contrato como anulado.

## Generar Documentos Automáticamente
Este es el comportamiento normal de un contrato, que genere documentos automáticamente basados en la recurrencia específica (ver [(recurrencias)](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)).

Zauru revisa todos los días a las 3AM de la mañana (-6:00 UTM) si hay alguna recurrencia que generar y la genera.

Eso significa que si la fecha de la próxima cuota coincide con la fecha de revisión de ese día, genera una recurrencia (cuota).

## Generar Documentos Manualmente
Hay ocaciones donde necesitará generar un documento manualmente porque dio error o porque queremos adelantar una recurrencia (cuota).

En el detalle del contrato hay que ingresar al botón de "Generar Documentos" para acceder a la parametrización de la generación.

![boton generar documentos](/img/contratos/contratos-activos-2.png)

Luego se configura la parametrización:

![generar-contratos-manualmente](/img/contratos/contratos-activos-3.png)

Solo hay 2 cosas que seleccionar:

1. __Documentos:__ La cantidad de cuotas *individuales* (no consolidadas) a generar.
2. __En la fecha esperada:__ Si esta marcado va a generar la cuota con fecha en la fecha que correspondía. Ejemplo: hoy 28 de agosto quería adelantar una factura que se generaría automáticamente el 1 de septiembre (4 días después), si está marcado el chequesito, generará la factura con fecha 1 de septiembre, si no está marcado el chequesito, generará la factura con fecha 28 de agosto.

En la parte superior se muestra una tabla con las próximas cuotas a generar, incluyendo fechas, items, cuentas contables (para contratos de factura), totales por cuota y acumulados. Se puede seleccionar desde qué cuota empezar a generar.

### Generación por Lotes y Consolidación

Cuando se generan múltiples cuotas a la vez y el contrato permite consolidación, las cuotas se agrupan en un solo documento consolidado. Esto es útil para facturación mensual de servicios donde se quieren agrupar varias cuotas en una sola factura.

Para ver los documentos consolidados, en el detalle del contrato se muestra una sección de "Documentos Consolidados" que indica cuántas cuotas fueron agrupadas en cada documento generado.

## Detalles de los Documentos Generados por el contrato
En el detalle del contrato podemos observar el listado de los documentos generados automáticamente o manualmente.
![documentos generados](/img/contratos/contratos-activos-4.png)

La tabla muestra: Recurrencia, Tipo de Generación (Automático/Manual), Fecha de Generación, Documento, Estado y Monto.

Dependiendo del tipo de documento del contrato, la columna de documento enlaza a:
- **Orden**: La orden de venta generada.
- **Factura no Pagada**: La factura generada.
- **Caso**: El caso de soporte generado.
- **Orden de Compra**: La orden de compra generada.

### Documentos Consolidados

Los contratos de tipo Orden y Factura pueden generar documentos consolidados que agrupan múltiples cuotas en un solo documento. En el detalle se muestra una sección adicional con los documentos consolidados y la cantidad de cuotas que agrupan.

### Resumen de Estado de Documentos

Debajo de la tabla de documentos generados se muestra un resumen con:
- Cantidad de cuotas no generadas
- Cantidad y monto de documentos en cada estado del flujo de trabajo (borrador, ordenado, autorizado, pagado, etc.)

![resumen de estado](/img/contratos/contratos-activos-6.png)

## Editar Contratos Activos
Los contratos activos se pueden editar para que las siguientes recurrencias respeten los nuevos parámetros del contrato. El editar el contrato no cambia las cuotas anteriores.

El formulario de edición es idéntico al de creación de contrato preliminar e incluye todas las secciones: tipo de documento, referencia, datos de recurrencia, moras, detalles de items, partidas contables, entradas extra e información de pago automático.

## Cerrar Contratos Activos
Si por alguna razón los contratos ya no deben de generar documentos se pueden cerrar en cualquier momento.

Cerrar los contratos no significa que se van a borrar sus documentos generados y asociados. Solo que ya no va a generar recurrencias.

Los contratos cerrados se pueden re-abrir desde la sección de [Contratos Cerrados](https://docs.zauru.com/contratos/contratos-cerrados) para que vuelvan a ser contratos preliminares y puedan ser activados nuevamente.

## Estado del Contrato (Contract Status)

En el detalle del contrato activo, el botón "Estado del Contrato" muestra una vista detallada con:

- **Información general**: Periodicidad, Fecha de Inicio, Cuota Actual, Total de Cuotas, Tasa de Interés, Monto Total, Anticipo.
- **Tabla de cuotas**: Una fila por cada cuota mostrando la fecha esperada, el estado del documento generado (o "No Generado") y los montos por cada item o cuenta del contrato.
- **Enviar por correo**: Se puede enviar el estado del contrato al beneficiario o a uno mismo por correo electrónico.

![estado del contrato](/img/contratos/contratos-activos-6.png)

Esta vista es ideal para dar seguimiento al avance del contrato y compartir el estado con el cliente.

## Detalle de Partidas Contables por Cuota (Fees Entries Details)

Disponible solo para contratos de tipo **Factura no Pagada**. Esta vista muestra el detalle de las partidas contables (debe y haber) que se generan por cada cuota del contrato.

![detalle de partidas por cuota](/img/contratos/contratos-activos-6.png)

La tabla muestra por cada cuota:
- Número de cuota y fecha
- Las cuentas contables con sus montos en el debe y haber
- Los splits o desgloses de cada partida contable
- El cálculo de IVA si aplica

### Detalle de Partidas Contables Pendientes (Pending Fees Entries Details)

Similar al anterior, pero muestra únicamente las cuotas que aún no se han generado. Es útil para planificar y verificar las partidas contables futuras antes de que se generen.

## Moras Actuales (Current Arrears)

En el detalle del contrato activo, si el contrato tiene moras activas, el botón "Moras Actuales" muestra:

- **Configuración de moras**: Si son detalladas, días para iniciar, periodicidad, monto o fórmula, tasa de interés.
- **Selector de fecha**: Permite cambiar la fecha para calcular las moras a una fecha específica.
- **Tabla de documentos vencidos**: Por cada cuota no pagada muestra:
  - Número de cuota y documento asociado
  - Fecha de emisión y fecha esperada de pago
  - Estado del documento
  - Días de atraso (períodos de mora aplicables)
  - Monto de un período de mora
  - Total de mora acumulada

![moras actuales](/img/contratos/contratos-activos-6.png)

### Generar Documento de Mora

Desde la vista de moras actuales se puede generar una orden de venta por mora. Existen dos opciones:

1. **Generar mora de una cuota específica**: Haciendo clic en el botón de generar junto a una cuota vencida.
2. **Generar mora de todas las cuotas vencidas**: Genera una orden de venta que incluye todas las cuotas con mora.

El sistema requiere que estén configurados el Item de Mora y el Término de Pago para Mora en la [Configuración de Contratos](https://docs.zauru.com/contratos/configuracion-de-contratos). Si las moras son detalladas, se genera una línea por cada período de mora; si no, se genera una sola línea consolidada.

## Imprimir y Descargar PDF

Desde el detalle del contrato activo se puede:
- **Imprimir**: Genera una vista de impresión con el formato definido en las plantillas de impresión configuradas para el tipo de contrato.
- **Descargar PDF**: Descarga el contrato en formato PDF utilizando la misma plantilla de impresión.

Las plantillas de impresión se configuran en la sección de Configuración de Plantillas de Impresión del sistema.

## Formularios Asociados al Contrato

Los contratos pueden tener formularios dinámicos asociados. En el detalle del contrato se muestran:

- **Plantillas de formularios disponibles**: Formularios activos configurados para el tipo de documento "contrato".
- **Envíos de formularios realizados**: Listado de formularios que han sido llenados y enviados para este contrato específico.

Esto permite adjuntar información adicional estructurada al contrato, como fichas técnicas, encuestas, documentos de aprobación, etc.

## Información de Pago Automático

Los contratos de tipo Orden y Factura pueden configurarse para generar un pago automático al momento de generar cada cuota. La configuración incluye:

- **Requiere Pago** (needs_payment): Activa la generación automática de pagos.
- **Método de Pago**: El método de pago a utilizar (efectivo, transferencia, tarjeta, etc.).
- **Días después del pago**: Cantidad de días después de la fecha de la cuota en que se programa el pago. Si es 0, el pago se genera con la misma fecha de la cuota.

Si el día actual coincide con la fecha programada de pago de alguna cuota, el sistema genera automáticamente la transacción de pago correspondiente.

## Documentos Asociados al Contrato
Los documentos que se pueden asociar son:
1. Transacciones
2. Envíos
3. Ordenes de Venta
4. Facturas
5. Órdenes de Compra
6. Casos

Para asociar un documento solo hay que entrar al detalle del contrato e ingresar al tipo de documento a asociar:
![asociar documentos](/img/contratos/contratos-activos-5.png)

En el detalle del contrato activo se muestran también todos los documentos previamente asociados en secciones separadas:

- **Entradas Asociadas**: Transacciones contables vinculadas al contrato.
- **Envíos Asociados**: Envíos con su estado y agencias de origen/destino.
- **Facturas Asociadas**: Facturas adicionales (no generadas automáticamente) vinculadas al contrato.
- **Órdenes de Compra Asociadas**: Órdenes de compra vinculadas al contrato.
- **Casos Asociados**: Casos de soporte vinculados al contrato.

## API (llamadas desde sistemas externos)

### Generar cuota manualmente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "documents": 1
  }' \
  https://app.zauru.com/contracts/active_contracts/1/generate_documents_action.json
```

Si hay error devolverá un JSON con el error como un objeto llamado "error" y el objeto del contrato en "contract", sino hay error solo devolverá el contrato.

### Ver Contrato Activo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/contracts/active_contracts/1.json
```

### Cerrar Contrato Activo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/contracts/active_contracts/1/close.json
```
