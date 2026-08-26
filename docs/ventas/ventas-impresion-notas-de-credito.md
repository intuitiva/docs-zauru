---
title: "Impresión Notas de Crédito"
sidebar_label: "Impresión Notas de Crédito"
sidebar_position: 16
---

¿Emite una nota de crédito y su cliente quiere llevarse el documento impreso para sus archivos? Este tutorial le muestra los pasos para imprimir una nota de crédito desde Zauru, desde ubicarla en el listado hasta confirmar la impresora y el número de copias.

1.       Seleccionar Ventas.

2.       Seleccionar Notas de Ventas.

3.       Pestaña Notas de Crédito.

![imagen1](/img/ventas/ventas-impresion-notas-de-credito-1.png)



Seleccionar la Nota de Crédito que desea imprimir en el ícono de Detalles Normal.

![imagen2](/img/ventas/ventas-impresion-notas-de-credito-2.png)



A continuación le desplegara el detalle de todos los movimientos implicados en la Nota de Crédito (Detalle NC, Cliente, Memo, Proyectos, Transacciones, Envíos Asociados, Cobros Asociados, Flujo de Trabajo), Mostrando al final del documento la opción para imprimir la Nota de Crédito.

![imagen3](/img/ventas/ventas-impresion-notas-de-credito-3.png)



Acontinuación presione las teclas “CTRL + P”  para enviar  a la impresora predeterminada normal.

![imagen4](/img/ventas/ventas-impresion-notas-de-credito-4.png)



Verifique en Nombre que la impresora es la correcta, en Número de copias la cantidad de hojas a imprimir y luego click en aceptar normal.

![imagen5](/img/ventas/ventas-impresion-notas-de-credito-5.png)

Con la nota impresa y entregada, su cliente tiene el documento que respalda su saldo a favor y usted tiene el control del movimiento. Cada vez que necesite una copia, ya sea para el cliente o para sus archivos, el proceso es el mismo y toma menos de un minuto.

## API (llamadas desde sistemas externos)

### Listar notas de crédito

Devuelve las notas de crédito no redimidas. Puede filtrar por estado con el parametro `scope` (`open`, `redeemed` o `voided`).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "id_number": "NC-001",
    "date": "2026-08-01",
    "concept": "null",
    "reference": "Anulacion de la factura A-123",
    "memo": "",
    "discount": "0.0",
    "total": "500.0",
    "due": "0.0",
    "redeemed": false,
    "redeemed_at": null,
    "voided": false,
    "voided_at": null,
    "invoice_id": 2,
    "employee_id": 1,
    "creator_id": 3,
    "voider_id": null,
    "entity_id": 1,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "agency_id": 1,
    "payee_id": 1,
    "credit_note_details_count": 1,
    "created_at": "2026-08-01T10:00:00.000Z",
    "updated_at": "2026-08-01T10:00:00.000Z",
    "exchange_rate": 1.0,
    "exempt": false,
    "currency_id": 1,
    "foreign": false,
    "not_included_vat": "0.0",
    "taxable": true,
    "include_vat_on_taxable": true,
    "exclude_discount": false,
    "contingency": 0,
    "contingency_number": null
  },
  {
    "id": 2,
    "zid": 2,
    "id_number": "NC-002",
    "date": "2026-08-01",
    "concept": "null",
    "reference": "Devolucion de productos",
    "memo": "",
    "discount": "0.0",
    "total": "275.0",
    "due": "0.0",
    "redeemed": false,
    "redeemed_at": null,
    "voided": false,
    "voided_at": null,
    "invoice_id": 3,
    "employee_id": 1,
    "creator_id": 3,
    "voider_id": null,
    "entity_id": 1,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "agency_id": 1,
    "payee_id": 2,
    "credit_note_details_count": 1,
    "created_at": "2026-08-01T11:00:00.000Z",
    "updated_at": "2026-08-01T11:00:00.000Z",
    "exchange_rate": 1.0,
    "exempt": false,
    "currency_id": 1,
    "foreign": false,
    "not_included_vat": "0.0",
    "taxable": true,
    "include_vat_on_taxable": true,
    "exclude_discount": false,
    "contingency": 0,
    "contingency_number": null
  }
]
```

### Ver el detalle de una nota de crédito

Devuelve la nota de crédito con todos sus movimientos (`credit_note_details`) y las entregas de formularios asociadas (`submissions`). Esta es la informacion que se muestra en la vista de detalle antes de imprimir.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_notes/credit_notes/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "id_number": "NC-001",
  "date": "2026-08-01",
  "concept": "null",
  "reference": "Anulacion de la factura A-123",
  "memo": "",
  "discount": "0.0",
  "total": "500.0",
  "due": "0.0",
  "redeemed": false,
  "redeemed_at": null,
  "voided": false,
  "voided_at": null,
  "invoice_id": 2,
  "employee_id": 1,
  "creator_id": 3,
  "voider_id": null,
  "entity_id": 1,
  "agency_id": 1,
  "payee_id": 1,
  "credit_note_details_count": 1,
  "created_at": "2026-08-01T10:00:00.000Z",
  "updated_at": "2026-08-01T10:00:00.000Z",
  "exchange_rate": 1.0,
  "exempt": false,
  "currency_id": 1,
  "foreign": false,
  "not_included_vat": "0.0",
  "taxable": true,
  "include_vat_on_taxable": true,
  "exclude_discount": false,
  "contingency": 0,
  "contingency_number": null,
  "credit_note_details": [
    {
      "id": 1,
      "credit_note_id": 1,
      "invoice_detail_id": 2,
      "quantity": "1.0",
      "price": "500.0",
      "created_at": "2026-08-01T10:00:00.000Z",
      "updated_at": "2026-08-01T10:00:00.000Z",
      "entity_id": 1,
      "invoice_detail": {
        "id": 2,
        "bundle_id": null,
        "item_id": 1,
        "serial_id": null,
        "reference": "Producto 1",
        "unit_price": "500.0",
        "quantity": "1.0",
        "price": "500.0",
        "invoice_id": 2,
        "entity_id": 1
      }
    }
  ],
  "submissions": []
}
```
