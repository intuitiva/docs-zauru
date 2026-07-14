---
title: "Estructura de Documentos"
sidebar_label: "Estructura de Documentos"
sidebar_position: 3
---

Estas páginas solo son una referencia para los campos que tiene cada tipo de documento para poder hacer webapps que sepan los nombres de los campos, el tipo de dato que es, el valor predeterminado y si es un campo obligatorio o no.
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
