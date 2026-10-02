---
title: "Contratos Activos"
sidebar_label: "Contratos Activos"
sidebar_position: 2
---

Al activar un contrato preliminar, Zauru empieza a trabajar por usted: revisa a diario si corresponde generar una cuota y la crea automáticamente. Ese contrato pasa a ser activo y vive aquí, donde podrá darle seguimiento día a día. Genera documentos recurrentemente con la periodicidad estipulada, indefinidamente o una cantidad específica de recurrencias.

## Listado de Contratos Activos

El listado muestra todos los contratos activos (en ejecución), con filtros por tipo de documento. Columnas: ID, Tipo de Documento, Número de Contrato, Referencia, Beneficiario, Items, Cuotas, Cuota Actual, Periodicidad, Fecha de Inicio, Fecha de Próxima Cuota, Monto y Acciones.

![listado de contratos activos](/img/contratos/contratos-activos-1.png)

Desde este listado también se puede acceder a los **Contratos Anulados** (Voided Contracts) mediante el botón correspondiente.

### Contratos Anulados

Si activó un contrato por error o el cliente desistió antes de generar documentos, puede anularlo sin perder el registro. Los contratos anulados son activos cancelados que ya no aparecen en los listados principales. Solo se puede anular si no tiene documentos generados asociados (facturas, órdenes de compra, casos o envíos). La anulación no borra el registro, solo lo marca como anulado.

## Generar Documentos Automáticamente
Es el comportamiento normal del contrato: generar documentos automáticamente según la recurrencia (ver [(recurrencias)](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)).

Zauru revisa diariamente a las 3AM (-6:00 UTM) si hay recurrencias que generar y las genera.

Si la fecha de la próxima cuota coincide con la revisión de ese día, genera la recurrencia (cuota).

## Generar Documentos Manualmente
Hay ocasiones donde necesitará generar un documento manualmente porque dio error o para adelantar una recurrencia (cuota).

En el detalle del contrato, ingrese al botón "Generar Documentos" para acceder a la parametrización.

![boton generar documentos](/img/contratos/contratos-activos-2.png)

Luego se configura la parametrización:

![generar-contratos-manualmente](/img/contratos/contratos-activos-3.png)

Solo hay 2 cosas que seleccionar:

1. __Documentos:__ Cantidad de cuotas *individuales* (no consolidadas) a generar.
2. __En la fecha esperada:__ Si está marcado, genera la cuota con la fecha que correspondía. Ejemplo: hoy 28 de agosto quiere adelantar una factura que se generaría el 1 de septiembre (4 días después). Si está marcado, la genera con fecha 1 de septiembre; si no, con fecha 28 de agosto.

Arriba se muestra una tabla con las próximas cuotas a generar: fechas, items, cuentas contables (para contratos de factura), totales por cuota y acumulados. Se puede elegir desde qué cuota empezar.

### Generación por Lotes y Consolidación

Cuando se generan múltiples cuotas a la vez y el contrato permite consolidación, se agrupan en un solo documento consolidado (útil para facturar mensualmente servicios agrupando varias cuotas en una factura).

En el detalle del contrato, la sección "Documentos Consolidados" indica cuántas cuotas se agruparon en cada documento generado.

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

Los contratos de tipo Orden y Factura pueden generar documentos consolidados que agrupan varias cuotas en un solo documento. En el detalle se muestra una sección adicional con estos documentos y la cantidad de cuotas agrupadas.

### Resumen de Estado de Documentos

Debajo de la tabla de documentos generados se muestra un resumen con:
- Cantidad de cuotas no generadas
- Cantidad y monto de documentos en cada estado del flujo de trabajo (borrador, ordenado, autorizado, pagado, etc.)

![resumen de estado](/img/contratos/contratos-activos-6.png)

## Editar Contratos Activos
¿El cliente cambió de plan o precio a mitad de camino? No hace falta cerrar y crear otro contrato. Los contratos activos se pueden editar para que las siguientes recurrencias respeten los nuevos parámetros, sin cambiar las cuotas anteriores.

El formulario de edición es idéntico al de creación del contrato preliminar e incluye todas las secciones: tipo de documento, referencia, datos de recurrencia, moras, items, partidas contables, entradas extra e información de pago automático.

## Cerrar Contratos Activos
Si los contratos ya no deben generar documentos, se pueden cerrar en cualquier momento.

Cerrarlos no borra sus documentos generados y asociados; solo deja de generar recurrencias.

Los contratos cerrados se pueden reabrir desde [Contratos Cerrados](https://docs.zauru.com/contratos/contratos-cerrados) para volver a ser preliminares y activarse nuevamente.

## Estado del Contrato (Contract Status)

En el detalle del contrato activo, el botón "Estado del Contrato" muestra una vista detallada con:

- **Información general**: Periodicidad, Fecha de Inicio, Cuota Actual, Total de Cuotas, Tasa de Interés, Monto Total, Anticipo.
- **Tabla de cuotas**: Una fila por cuota con la fecha esperada, el estado del documento generado (o "No Generado") y los montos por item o cuenta.
- **Enviar por correo**: Permite enviar el estado del contrato al beneficiario o a uno mismo por correo.

![estado del contrato](/img/contratos/contratos-activos-7.png)

Esta vista es ideal para seguir el avance del contrato y compartir su estado con el cliente.

## Detalle de Partidas Contables por Cuota (Fees Entries Details)

Disponible solo para contratos de tipo **Factura no Pagada**. Muestra el detalle de las partidas contables (debe y haber) generadas por cada cuota.

![detalle de partidas por cuota](/img/contratos/contratos-activos-8.png)

La tabla muestra por cuota:
- Número de cuota y fecha
- Cuentas contables con montos en debe y haber
- Splits o desgloses de cada partida
- Cálculo de IVA si aplica

### Detalle de Partidas Contables Pendientes (Pending Fees Entries Details)

Similar al anterior, pero muestra solo las cuotas aún no generadas. Útil para planificar y verificar las partidas contables futuras.

## Moras Actuales (Current Arrears)

En el detalle, si el contrato tiene moras activas, el botón "Moras Actuales" muestra:

- **Configuración de moras**: Si son detalladas, días para iniciar, periodicidad, monto o fórmula, tasa de interés.
- **Selector de fecha**: Para calcular las moras a una fecha específica.
- **Tabla de documentos vencidos**: Por cada cuota no pagada muestra:
  - Número de cuota y documento asociado
  - Fecha de emisión y fecha esperada de pago
  - Estado del documento
  - Días de atraso (períodos de mora aplicables)
  - Monto de un período de mora
  - Total de mora acumulada

![moras actuales](/img/contratos/contratos-activos-9.png)

### Generar Documento de Mora

Desde la vista de moras se puede generar una orden de venta por mora. Dos opciones:

1. **Generar mora de una cuota específica**: Clic en el botón de generar junto a una cuota vencida.
2. **Generar mora de todas las cuotas vencidas**: Genera una orden de venta con todas las cuotas con mora.

El sistema requiere configurar el Item de Mora y el Término de Pago para Mora en la [Configuración de Contratos](https://docs.zauru.com/contratos/configuracion-de-contratos). Si las moras son detalladas, se genera una línea por período; si no, una sola línea consolidada.

## Imprimir y Descargar PDF

Desde el detalle del contrato activo se puede:
- **Imprimir**: Genera una vista de impresión con el formato de las plantillas configuradas para el tipo de contrato.
- **Descargar PDF**: Descarga el contrato en PDF con la misma plantilla.

Las plantillas se configuran en la sección de Configuración de Plantillas de Impresión del sistema.

## Formularios Asociados al Contrato

Los contratos pueden tener formularios dinámicos asociados. En el detalle se muestran:

- **Plantillas disponibles**: Formularios activos configurados para el tipo "contrato".
- **Envíos realizados**: Formularios llenados y enviados para este contrato.

Permite adjuntar información estructurada adicional: fichas técnicas, encuestas, documentos de aprobación, etc.

## Información de Pago Automático

Los contratos de tipo Orden y Factura pueden generar un pago automático al generar cada cuota. La configuración incluye:

- **Requiere Pago** (needs_payment): Activa la generación automática de pagos.
- **Método de Pago**: Método a utilizar (efectivo, transferencia, tarjeta, etc.).
- **Días después del pago**: Días tras la fecha de la cuota en que se programa el pago. Si es 0, se genera con la misma fecha.

Si el día actual coincide con la fecha programada de pago, el sistema genera la transacción correspondiente.

## Documentos Asociados al Contrato
Los documentos que se pueden asociar son:
1. Transacciones
2. Envíos
3. Ordenes de Venta
4. Facturas
5. Órdenes de Compra
6. Casos

Para asociar un documento, entre al detalle del contrato e ingrese al tipo de documento a asociar:
![asociar documentos](/img/contratos/contratos-activos-5.png)

En el detalle se muestran los documentos asociados en secciones separadas:

- **Entradas Asociadas**: Transacciones contables vinculadas.
- **Envíos Asociados**: Envíos con su estado y agencias de origen/destino.
- **Facturas Asociadas**: Facturas adicionales (no generadas automáticamente) vinculadas.
- **Órdenes de Compra Asociadas**: Órdenes de compra vinculadas.
- **Casos Asociados**: Casos de soporte vinculados.

Con esto, su contrato activo queda completo: Zauru genera cada cuota en su fecha y usted tiene a la mano el estado, las moras, los documentos y la impresión. El día a día se reduce a revisar que las cuotas salgan bien y, al terminar el servicio, decidir si cierra o deja corriendo el contrato.

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

Si hay error, devuelve un JSON con el error en el objeto "error" y el contrato en "contract"; si no, solo devuelve el contrato.

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

Esto devolverá un JSON similar a este:
```json
{}
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

### Listar Contratos Activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/contracts/active_contracts.json
```

Esto devolverá un JSON similar a este:
```json
[
  {}
]
```

### Listar contratos activos (datatables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/contracts/active_contracts/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 270,
  "recordsFiltered": 270,
  "data": [
    {
      "zid": "<a title=\"W J Cosmeticos\" href=\"/contracts/active_contracts/20489\">339</a>",
      "dt": "Orden de Compra",
      "idn": "",
      "ref": "<a href=\"/contracts/active_contracts/20489\">W J Cosmeticos</a>",
      "cli": "<a href=\"/sales/clients/1\">489954-7 | Discogua ~ Distribuidora Comercial Guatemalteca S.A. # 2462-9800</a>",
      "itms": 1,
      "fees": null,
      "fee": 56,
      "prdct": "1 Meses",
      "sdte": "01 de dic de 2021",
      "next": "01 de ago de 2026",
      "amnt": "Infinito",
      "ra": "<a title=\"Detalles\" href=\"/contracts/active_contracts/20489\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/contracts/active_contracts/20489/edit\"><i class=\"fa fa-edit\"></i></a>",
      "ra2": "<a title=\"Cerrar\" data-confirm=\"¿Está seguro de cerrar el contrato?\" rel=\"nofollow\" data-method=\"delete\" href=\"/contracts/active_contracts/20489/close\"><i class=\"fa fa-archive\"></i></a>",
      "DT_RowId": "contracts-active-contract-20489"
    },
    {
      "zid": "<a title=\"Tridosha\" href=\"/contracts/active_contracts/49489\">488</a>",
      "dt": "Orden de Compra",
      "idn": "",
      "ref": "<a href=\"/contracts/active_contracts/49489\">Tridosha</a>",
      "cli": "<a href=\"/sales/clients/1\">489954-7 | Discogua ~ Distribuidora Comercial Guatemalteca S.A. # 2462-9800</a>",
      "itms": 1,
      "fees": null,
      "fee": 16,
      "prdct": "1 Meses",
      "sdte": "01 de abr de 2025",
      "next": "01 de ago de 2026",
      "amnt": "Infinito",
      "ra": "<a title=\"Detalles\" href=\"/contracts/active_contracts/49489\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/contracts/active_contracts/49489/edit\"><i class=\"fa fa-edit\"></i></a>",
      "ra2": "<a title=\"Cerrar\" data-confirm=\"¿Está seguro de cerrar el contrato?\" rel=\"nofollow\" data-method=\"delete\" href=\"/contracts/active_contracts/49489/close\"><i class=\"fa fa-archive\"></i></a>",
      "DT_RowId": "contracts-active-contract-49489"
    }
  ]
}
```

### Editar Contrato Activo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "contract": {
      "reference": "prueba editada",
      "memo": "editado desde el API"
    }
  }' \
  https://app.zauru.com/contracts/active_contracts/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Anular Contrato Activo
La anulación no borra el registro; solo lo marca como anulado y deja de aparecer en los listados principales.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/contracts/active_contracts/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Listar Contratos Anulados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/contracts/active_contracts/voided.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "document_type": 1,
    "reference": "",
    "taxable": true,
    "entity_id": 3,
    "active": true,
    "payee_id": 4,
    "infinite": true,
    "start_date": "2016-12-01",
    "fees": null,
    "current_fee": 0,
    "periodicity": 1,
    "periodicity_measure": 4,
    "interest_rate": null,
    "interest_rate_periodicity_measure": 4,
    "total_amount": null,
    "upfront_payment": "0.0",
    "responsible_id": 5,
    "arrears_active": false,
    "arrears_item_id": null,
    "arrears_detailed": false,
    "arrears_starts_in_days": 0,
    "arrears_amount": null,
    "arrears_interest_rate": null,
    "arrears_interest_rate_periodicity_measure": 4,
    "arrears_formula_id": null,
    "arrears_periodicity": 1,
    "arrears_periodicity_measure": 1,
    "running": true,
    "runner_id": 3,
    "running_since": "2016-12-06T00:00:00.000Z",
    "autogenerated_documents_count": 0,
    "closed": false,
    "closer_id": null,
    "closed_since": null,
    "updater_id": 3,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "memo": "",
    "payment_term_id": 6,
    "charge_term_id": null,
    "extra_splits_accounts": null,
    "extra_splits_accounts_amounts": null,
    "extra_splits_accounts_amounts_formula": null,
    "created_at": "2016-12-06T00:32:50.367Z",
    "updated_at": "2016-12-06T00:36:24.912Z",
    "symptom": null,
    "serial_id": null,
    "courtesy": false,
    "warranty": false,
    "discount": null,
    "advanced_fees": 0,
    "voided": true,
    "voider_id": 3,
    "voided_at": "2016-12-06T00:36:24.000Z",
    "start_fee": 0,
    "initial_foreign_fees": 0,
    "crm_url": null,
    "not_included_vat": null,
    "external_image_url": null,
    "interest_rate_2": null,
    "interest_rate_periodicity_measure_2": 4,
    "total_amount_2": null,
    "id_number": null,
    "import": false,
    "historical_fees": 0,
    "needs_payment": false,
    "payment_method_id": null,
    "payment_after_days": 0,
    "contract_details": [
      {
        "id": 7,
        "contract_id": 1,
        "quantity": 1,
        "item_id": 8,
        "bundle_id": null,
        "unit_price_cost": "4300.0",
        "contract_formula_id": null,
        "created_at": "2016-12-06T00:32:50.384Z",
        "updated_at": "2016-12-06T00:32:50.384Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": null,
        "entity_id": 3
      }
    ]
  },
  {
    "id": 9,
    "zid": 10,
    "document_type": 1,
    "reference": "PARA PRUEBA ",
    "taxable": false,
    "entity_id": 3,
    "active": true,
    "payee_id": 11,
    "infinite": false,
    "start_date": "2017-01-10",
    "fees": 3,
    "current_fee": 0,
    "periodicity": 1,
    "periodicity_measure": 3,
    "interest_rate": null,
    "interest_rate_periodicity_measure": 4,
    "total_amount": null,
    "upfront_payment": "0.0",
    "responsible_id": 12,
    "arrears_active": false,
    "arrears_item_id": null,
    "arrears_detailed": false,
    "arrears_starts_in_days": 0,
    "arrears_amount": null,
    "arrears_interest_rate": null,
    "arrears_interest_rate_periodicity_measure": 4,
    "arrears_formula_id": null,
    "arrears_periodicity": 1,
    "arrears_periodicity_measure": 1,
    "running": true,
    "runner_id": 13,
    "running_since": "2017-01-09T00:00:00.000Z",
    "autogenerated_documents_count": 0,
    "closed": false,
    "closer_id": null,
    "closed_since": null,
    "updater_id": 13,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "memo": "",
    "payment_term_id": 14,
    "charge_term_id": null,
    "extra_splits_accounts": null,
    "extra_splits_accounts_amounts": null,
    "extra_splits_accounts_amounts_formula": null,
    "created_at": "2017-01-09T20:27:19.262Z",
    "updated_at": "2017-01-10T15:42:25.193Z",
    "symptom": null,
    "serial_id": null,
    "courtesy": false,
    "warranty": false,
    "discount": null,
    "advanced_fees": 0,
    "voided": true,
    "voider_id": 13,
    "voided_at": "2017-01-10T15:42:25.000Z",
    "start_fee": 0,
    "initial_foreign_fees": 0,
    "crm_url": null,
    "not_included_vat": null,
    "external_image_url": null,
    "interest_rate_2": null,
    "interest_rate_periodicity_measure_2": 4,
    "total_amount_2": null,
    "id_number": null,
    "import": false,
    "historical_fees": 0,
    "needs_payment": false,
    "payment_method_id": null,
    "payment_after_days": 0,
    "contract_details": [
      {
        "id": 15,
        "contract_id": 9,
        "quantity": 1,
        "item_id": 16,
        "bundle_id": null,
        "unit_price_cost": "100.0",
        "contract_formula_id": null,
        "created_at": "2017-01-09T20:27:19.270Z",
        "updated_at": "2017-01-09T20:27:19.270Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": null,
        "entity_id": 3
      }
    ]
  }
]
```
