---
title: "Adjuntar un gasto a un proyecto"
sidebar_label: "Adjuntar un gasto a un proyecto"
sidebar_position: 2
---

Este tutorial esta enfocado en adjuntar gastos a un proyecto para que se vean reflejados en el balance mensual del proyecto.

Los pasos para hacerlo son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Transacciones”.
3. Seleccionar “Nueva Transacción”.

![imagen1](/img/contabilizacion-de-proyectos/proyectos-adjuntar-un-gasto-a-un-proyecto-1.png)


Le aparecerán las opciones para crear un nueva transacción, después de colocar los detalles de la transacción del gasto deberá adjuntarla al proyecto que desea, como se muestra en la siguiente imagen.

![imagen2](/img/contabilizacion-de-proyectos/proyectos-adjuntar-un-gasto-a-un-proyecto-2.jpg)



Luego de crear la factura le aparecerá un mensaje en la pantalla y podrá ver los detalles de la transacción creada, en la parte inferior de la página podrá ver los proyectos asociados. Esta transacción de gastos se vera reflejada en el balance mensual del proyecto.

![imagen3](/img/contabilizacion-de-proyectos/proyectos-adjuntar-un-gasto-a-un-proyecto-3.jpg)

## API (llamadas desde sistemas externos)

### Crear una transaccion de gasto adjunta a un proyecto

El proyecto es una etiqueta (tag), por lo que se adjunta a la transaccion de gasto con `tag_ids`. El gasto quedara reflejado en el balance mensual del proyecto.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "entry": {
      "payee_id": "1",
      "reference": "Gasto del proyecto",
      "invoice": "E-40",
      "invoice_date": "2026-08-01",
      "date": "2026-08-01",
      "account_id": "1",
      "amount": "300",
      "tag_ids": ["1"],
      "splits_attributes": {
        "0": {
          "reference": "Gasto adjunto al proyecto",
          "account_id": "2",
          "amount": "300.0"
        }
      },
      "memo": "Gasto asignado al proyecto"
    }
  }' \
  https://app.zauru.com/accounting/entries.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "printable": false,
  "invoice": "E-40",
  "id_number": null,
  "reference": "Gasto del proyecto",
  "date": "2026-08-01",
  "income": false,
  "memo": "Gasto asignado al proyecto",
  "image": null,
  "verified": false,
  "audited": false,
  "payee_id": 1,
  "entity_id": 1,
  "reconciliation_id": null,
  "updater_id": 1,
  "account_id": 1,
  "amount": "300.0",
  "created_at": "2026-08-01 10:00:00.000000",
  "updated_at": "2026-08-01 10:00:00.000000",
  "splits_count": 1,
  "invoice_date": "2026-08-01",
  "pdf": null,
  "contract_id": null,
  "verified_at": null,
  "audited_at": null,
  "conciliation_id": null,
  "split_conciliation_id": null,
  "endorsement_restriction": false,
  "exempt": false,
  "small_taxpayer": false,
  "external_image_url": null,
  "reception_id": null,
  "inventory_audit_id": null,
  "source_doc_type_id": 3,
  "monthly_entry_source_doc_type_id": null,
  "cost_center_id": null
}
```
