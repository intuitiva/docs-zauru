---
title: "Estructura de Documentos"
sidebar_label: "Estructura de Documentos"
sidebar_position: 3
---

Cuando su webapp vaya a crear o consultar documentos por medio del API —una factura, una orden de compra, un envío— le convendrá saber exactamente cómo se llama cada campo, qué tipo de dato espera y cuáles son obligatorios antes de enviar la primera petición. Por ejemplo, si su aplicación registrará facturas, querrá confirmar si el campo `taxable` es requerido o si puede omitirlo. Esta página es esa referencia: el listado de campos de cada tipo de documento, con su nombre, tipo de dato, valor predeterminado y si es obligatorio o no.
![estructura documento](/img/webapps/estructura-de-documentos-1.png)

## API (llamadas desde sistemas externos)

### Contratos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/contract.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "taxable": {
    "type": "boolean",
    "required": true,
    "default": true
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  "infinite": {
    "type": "boolean",
    "required": true,
    "default": false
  },
  ...
}
```

### Ordenes de Compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/purchase_order.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "taxable": {
    "type": "boolean",
    "required": true,
    "default": true
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  ...
}
```

### Facturas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/invoice.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "taxable": {
    "type": "boolean",
    "required": true,
    "default": true
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  ...
}
```

### Envíos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/shipment.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  ...
}
```

### Transacciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/entry.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  ...
}
```

### Casos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/documents_structures/case.json
```

Esto devolverá un JSON similar a este:
```json
{
  "reference": {
    "type": "string",
    "required": false,
    "default": null
  },
  "payee_id": {
    "type": "integer",
    "required": true,
    "default": null
  },
  ...
}
```
