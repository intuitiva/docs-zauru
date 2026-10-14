---
title: "Contratos Preliminares"
sidebar_label: "Contratos Preliminares"
sidebar_position: 1
---

Cuando un cliente acepta una mensualidad por servicios, un plan de mantenimiento o un arriendo, aquí es donde nace su contrato: se crea, se ajusta las veces que haga falta y se deja perfecto antes de ponerlo a correr. Los contratos preliminares son la primera fase de los contratos: acá se crean, se editan y se borran, pero no van a generar documentos automáticamente hasta que usted los active.

Antes de crear el primer contrato conviene conocer los [conceptos de los contratos](https://docs.zauru.com/contratos/conceptos-de-contratos): tipos de documento, recurrencias, moras, fórmulas, el detalle de las cuotas y cómo asociar documentos.

## Crear Contratos

Para crear nuevos contratos hay que ingresar al módulo de contratos y contratos preliminares.

Solo se pueden crear "contratos preliminares", los "contratos activos" son "contratos preliminares" activados.

![nuevo contrato](/img/contratos/contratos-preliminares-1.png)

El hecho de crear un contrato preliminar no lo activa para generar cuotas automáticamente. Hay que activarlo manualmente para que esto suceda (ver [activar contratos preliminares](https://docs.zauru.com/contratos/contratos-preliminares#activar-contratos-preliminares)

### Campos del Formulario de Creación

El formulario de creación de contrato es extenso y se divide en varias secciones:

#### 1. Información General
- Tipo de documento (Orden, Factura no Pagada, Caso, Orden de Compra)
- Referencia del contrato
- Número de Contrato (manual o automático)
- Beneficiario (Payee) y Responsable
- Término de Pago (o Término de Carga para órdenes de compra)
- Esquema de Impuestos (Taxable)
- Cortesía y Garantía (solo para Casos)

#### 2. Detalles de Recurrencia
- Fecha de inicio, Periodicidad (cantidad y medida)
- Si es infinito o tiene cantidad finita de cuotas
- Cuotas iniciales extrañas, cuotas adelantadas
- Cuota inicial, cuotas históricas
- Anticipo, Monto Total, Tasa de Interés

#### 3. Detalles de Mora
- Activa/Inactiva
- Detallada/Consolidada
- Días para iniciar, Periodicidad de recálculo
- Monto fijo o fórmula, Tasa de interés

#### 4. Detalles del Contrato (Items)
- Selección de items o bundles con cantidades
- Precios unitarios (fijos o basados en fórmula)
- Referencias por línea
- Descuentos aplicables (por volumen y por item/bundle)
- Opción de omitir en generación adelantada

#### 5. Detalles de Cuentas (solo para Órdenes de Compra)
- Selección de cuentas contables
- Costos (fijos o basados en fórmula)

#### 6. Información de Entradas (solo para Facturas no Pagadas)
- Cuentas adicionales del término de pago (splits)
- Montos fijos o basados en fórmula para cada split

#### 7. Entradas del Contrato (Contract Entries)
- Partidas contables adicionales con cuentas de origen y destino
- Splits o desgloses de cada partida con montos fijos o fórmulas

#### 8. Información de Pago Automático
- Si requiere pago automático
- Método de pago
- Días después para el pago

#### 9. Información Adicional
- Imagen del contrato
- PDF adjunto
- Memo o notas
- Enlace a CRM externo

## Detalles del Contrato Preliminar

En esta sección mostramos los detalles del contrato en cuestión.

El detalle del contrato preliminar muestra:
- Información general (ID, tipo de documento, referencia, responsable, número de contrato, etc.)
- Imagen del contrato y PDF adjunto (si existen)
- Datos del beneficiario
- Información de pago automático
- Periodicidad y recurrencia
- Memo
- Configuración de moras (si están activas)
- Tabla de detalles (items) con precios, cantidades, descuentos y subtotales
- Tabla de detalles de cuentas (si aplica)
- Detalles de pagos flotantes (entradas extra)
- Entradas del contrato (partidas contables)
- Documentos generados (si ya se generaron cuotas)
- Documentos asociados (transacciones, envíos, facturas, órdenes de compra, casos)
- Formularios asociados
- Información adicional (creado, actualizado, última modificación por)

### Formularios Asociados al Contrato

Los contratos pueden tener formularios dinámicos asociados. En el detalle del contrato se muestran:

- **Plantillas de formularios disponibles**: Formularios activos configurados para el tipo de documento "contrato". Permiten llenar y enviar formularios personalizados que quedan vinculados al contrato.
- **Envíos de formularios realizados**: Listado de formularios que han sido llenados y enviados para este contrato específico, con su versión y estado.

## Editar Contratos Preliminares

El editar un contrato presenta el formulario de Nuevo Contrato exactamente igual. Por lo que podemos cambiar parámetros en donde hubo un error o un cambio solicitado.

Los botones adicionales en el formulario de edición son:
- **Previsualizar (Preview)**: Recalcula y muestra los totales sin guardar.
- **Actualizar (Refresh)**: Recalcula fórmulas y actualiza la vista sin guardar.
- **+ Item**: Agrega una nueva línea de detalle al contrato.
- **+ Entry**: Agrega una nueva entrada contable.
- **+ Split**: Agrega un nuevo desglose a una entrada contable existente.
- **+ Cuenta**: Agrega una nueva cuenta contable (solo para órdenes de compra).

## Destruir Contratos Preliminares

El destruir un contrato preliminar lo borra permanentemente de la base de datos. Es un proceso destructivo que no se puede deshacer.

## Activar Contratos Preliminares

Para que los contratos empiecen a generar recurrencias (cuotas) hay que activarlos con este botón dentro de los detalles del Contrato Preliminar.
![activar contrato preliminar](/img/contratos/contratos-preliminares-2.png)

Al activar un contrato preliminar:
- Se marca como `running = true`
- Se registra la fecha de activación (`running_since`)
- Se registra el usuario que lo activó (`runner_id`)
- El contrato se mueve a la sección de Contratos Activos

## API (llamadas desde sistemas externos)

### Crear Contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "contract": {
      "document_type": "1",
      "reference": "prueba",
      "taxable": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "responsible_id": "1",
      "start_date": "2018-09-02",
      "periodicity": "1",
      "periodicity_measure": "3",
      "infinite": "0",
      "fees": "20",
      "initial_foreign_fees": "0",
      "advanced_fees": "0",
      "upfront_payment": "0.0",
      "total_amount": "1000",
      "interest_rate_periodicity_measure": "4",
      "arrears_active": "1",
      "arrears_detailed": "0",
      "arrears_starts_in_days": "30",
      "arrears_periodicity": "1",
      "arrears_periodicity_measure": "1",
      "arrears_amount": "10",
      "arrears_interest_rate_periodicity_measure": "4",
      "contract_details_attributes": {
        "0": {
          "avoid_on_advance_generate": "0",
          "item_id": "1",
          "quantity": "1",
          "unit_price_cost": "50",
          "contract_formula_id": "",
          "reference": ""
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/contracts/draft_contracts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "document_type": 1,
  "reference": "prueba",
  "taxable": true,
  "entity_id": 3,
  "active": true,
  "payee_id": 4,
  "infinite": false,
  "start_date": "2018-09-02",
  "fees": 20,
  "current_fee": 0,
  "periodicity": 1,
  "periodicity_measure": 3,
  "interest_rate": null,
  "interest_rate_periodicity_measure": 4,
  "total_amount": "1000.0",
  "upfront_payment": "0.0",
  "responsible_id": 4,
  "arrears_active": true,
  "arrears_item_id": null,
  "arrears_detailed": false,
  "arrears_starts_in_days": 30,
  "arrears_amount": "10.0",
  "arrears_interest_rate": null,
  "arrears_interest_rate_periodicity_measure": 4,
  "arrears_formula_id": null,
  "arrears_periodicity": 1,
  "arrears_periodicity_measure": 1,
  "running": false,
  "runner_id": null,
  "running_since": null,
  "autogenerated_documents_count": 0,
  "closed": false,
  "closer_id": null,
  "closed_since": null,
  "updater_id": 5,
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
  "memo": "generado desde el API",
  "payment_term_id": 4,
  "charge_term_id": null,
  "extra_splits_accounts": null,
  "extra_splits_accounts_amounts": null,
  "extra_splits_accounts_amounts_formula": null,
  "created_at": "2026-08-06T04:17:26.816Z",
  "updated_at": "2026-08-06T04:17:26.816Z",
  "symptom": null,
  "serial_id": null,
  "courtesy": false,
  "warranty": false,
  "discount": null,
  "advanced_fees": 0,
  "voided": false,
  "voider_id": null,
  "voided_at": null,
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
      "id": 6,
      "contract_id": 1,
      "quantity": 1,
      "item_id": 4,
      "bundle_id": null,
      "unit_price_cost": "0.0",
      "contract_formula_id": null,
      "created_at": "2026-08-06T04:17:26.827Z",
      "updated_at": "2026-08-06T04:17:26.827Z",
      "avoid_on_advance_generate": false,
      "reference": "",
      "discount_id": null,
      "entity_id": 3
    }
  ]
}
```

### Actualizar Contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "contract": {
      "id": "1",
      "reference": "prueba editada",
      "contract_details_attributes": {
        "0": {
          "id": "1",
          "quantity": "2",
          "reference": "editado"
        }
      },
      "memo": "editado desde el API"
    }
  }' \
  https://app.zauru.com/contracts/draft_contracts/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Ver Contrato Preliminar
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/contracts/draft_contracts/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Activar Contratos Preliminares
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/contracts/draft_contracts/1/activate.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10830",
  "zid": "54",
  "document_type": "1",
  "reference": null,
  "taxable": false,
  "entity_id": "717",
  "active": true,
  "payee_id": "545676",
  "infinite": false,
  "start_date": "2020-11-19",
  "fees": "8",
  "current_fee": "8",
  "periodicity": "14",
  "periodicity_measure": "1",
  "interest_rate": null,
  "interest_rate_periodicity_measure": "1",
  "total_amount": "1500.00",
  "upfront_payment": "0.00",
  "responsible_id": "5316",
  "arrears_active": false,
  "arrears_item_id": null,
  "arrears_detailed": false,
  "arrears_starts_in_days": "0",
  "arrears_amount": null,
  "arrears_interest_rate": null,
  "arrears_interest_rate_periodicity_measure": "4",
  "arrears_formula_id": null,
  "arrears_periodicity": "1",
  "arrears_periodicity_measure": "1",
  "running": false,
  "runner_id": "1601",
  "running_since": "2021-02-04 00:00:00",
  "autogenerated_documents_count": "8",
  "closed": true,
  "closer_id": "1601",
  "closed_since": "2021-03-11 11:00:50",
  "updater_id": "1601",
  "image": null,
  "pdf": null,
  "memo": null,
  "payment_term_id": "1891",
  "charge_term_id": null,
  "extra_splits_accounts": null,
  "extra_splits_accounts_amounts": null,
  "extra_splits_accounts_amounts_formula": null,
  "created_at": "2021-02-04 03:42:00.840953",
  "updated_at": "2021-03-11 11:00:50.630916",
  "symptom": null,
  "serial_id": null,
  "courtesy": false,
  "warranty": false,
  "discount": null,
  "advanced_fees": "0",
  "voided": false,
  "voider_id": null,
  "voided_at": null,
  "start_fee": "0",
  "initial_foreign_fees": "0",
  "crm_url": null,
  "not_included_vat": null,
  "external_image_url": null,
  "interest_rate_2": null,
  "interest_rate_periodicity_measure_2": "4",
  "total_amount_2": null,
  "id_number": null,
  "import": false,
  "historical_fees": "0",
  "needs_payment": false,
  "payment_method_id": null,
  "payment_after_days": "0"
}
```

### Listar Contratos Preliminares
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/contracts/draft_contracts.json
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
    "start_date": "2017-07-01",
    "fees": null,
    "current_fee": 0,
    "periodicity": 1,
    "periodicity_measure": 3,
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
    "running": false,
    "runner_id": null,
    "running_since": null,
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
    "created_at": "2017-05-31T23:53:42.230Z",
    "updated_at": "2017-05-31T23:58:52.034Z",
    "symptom": null,
    "serial_id": null,
    "courtesy": false,
    "warranty": false,
    "discount": null,
    "advanced_fees": 0,
    "voided": false,
    "voider_id": null,
    "voided_at": null,
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
        "quantity": 6,
        "item_id": 8,
        "bundle_id": null,
        "unit_price_cost": "273.6",
        "contract_formula_id": null,
        "created_at": "2017-05-31T23:53:42.236Z",
        "updated_at": "2017-05-31T23:58:52.038Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": 9,
        "entity_id": 3
      },
      {
        "id": 10,
        "contract_id": 1,
        "quantity": 5,
        "item_id": 11,
        "bundle_id": null,
        "unit_price_cost": "0.0",
        "contract_formula_id": null,
        "created_at": "2017-05-31T23:53:42.239Z",
        "updated_at": "2017-05-31T23:53:42.239Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": null,
        "entity_id": 3
      }
    ]
  },
  {
    "id": 12,
    "zid": 13,
    "document_type": 1,
    "reference": "",
    "taxable": true,
    "entity_id": 3,
    "active": true,
    "payee_id": 14,
    "infinite": true,
    "start_date": "2016-01-01",
    "fees": null,
    "current_fee": 0,
    "periodicity": 1,
    "periodicity_measure": 3,
    "interest_rate": null,
    "interest_rate_periodicity_measure": 4,
    "total_amount": null,
    "upfront_payment": "0.0",
    "responsible_id": 15,
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
    "running": false,
    "runner_id": null,
    "running_since": null,
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
    "created_at": "2015-06-18T22:40:10.947Z",
    "updated_at": "2015-11-27T17:40:24.984Z",
    "symptom": null,
    "serial_id": null,
    "courtesy": false,
    "warranty": false,
    "discount": null,
    "advanced_fees": 0,
    "voided": false,
    "voider_id": null,
    "voided_at": null,
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
        "id": 16,
        "contract_id": 12,
        "quantity": 4,
        "item_id": 17,
        "bundle_id": null,
        "unit_price_cost": "25.76",
        "contract_formula_id": null,
        "created_at": "2015-08-03T23:44:27.617Z",
        "updated_at": "2015-11-27T17:40:24.988Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": null,
        "entity_id": 3
      },
      {
        "id": 18,
        "contract_id": 12,
        "quantity": 4,
        "item_id": 19,
        "bundle_id": null,
        "unit_price_cost": "25.76",
        "contract_formula_id": null,
        "created_at": "2015-08-03T23:44:27.621Z",
        "updated_at": "2015-11-27T17:40:24.998Z",
        "avoid_on_advance_generate": false,
        "reference": "",
        "discount_id": null,
        "entity_id": 3
      }
    ]
  }
]
```
