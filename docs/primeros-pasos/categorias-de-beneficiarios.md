---
title: "Categorías de Beneficiarios"
sidebar_label: "Categorías de Beneficiarios"
sidebar_position: 6.5
---

Las categorías agrupan a sus clientes y proveedores según condiciones comerciales: mayoristas, minoristas, distintos plazos de crédito o listados de precios. Este tutorial cubre cómo crearlas y asignarlas.

## Crear una categoría de beneficiario

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Seleccionar la pestaña "Categorías de Beneficiarios".
4. Click en "Nueva Categoría de Beneficiario".

![Pestaña Categorías de Beneficiarios con el botón Nueva Categoría de Beneficiario](/img/primeros-pasos/beneficiarios-6.png)

En el formulario:

1. **Nombre**: nombre de la categoría (ej. Mayorista).
2. **Tipo**: cliente o proveedor.
3. **Notas**: descripción de la categoría (ej. clientes que compran más de Q10,000 al mes).
4. Click en "Crear categoría de beneficiario".

![Formulario de nueva categoría de beneficiario](/img/primeros-pasos/beneficiarios-7.png)

Zauru muestra un mensaje de confirmación.

![Mensaje de categoría de beneficiario creada exitosamente](/img/primeros-pasos/beneficiarios-8.png)

## Asignar una categoría a un beneficiario

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Click en "Editar" en el beneficiario que desea categorizar.

![Botón Editar en el listado de beneficiarios](/img/primeros-pasos/beneficiarios-9.png)

4. Seleccionar la categoría y click en "Actualizar Beneficiario".

![Categoría seleccionada en el formulario de edición del beneficiario](/img/primeros-pasos/beneficiarios-10.png)

Ya puede agrupar a sus beneficiarios por condiciones comerciales. Si aún no los ha creado, vea [Crear Clientes y/o Proveedores (Beneficiarios)](/primeros-pasos/beneficiarios).

## API (llamadas desde sistemas externos)

### Obtener listado de categorías de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/payee_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "vendor": false,
    "name": "4 a 6",
    "notes": "",
    "updater_id": 2,
    "entity_id": 2,
    "created_at": "2016-04-13T20:43:05.677Z",
    "updated_at": "2016-04-29T23:53:50.077Z",
    "price_list_id": 3,
    "payees_count": 4
  },
  {
    "id": 4,
    "vendor": false,
    "name": "Cliente Ejemplo, SRL",
    "notes": "",
    "updater_id": 5,
    "entity_id": 2,
    "created_at": "2026-05-21T01:44:53.134Z",
    "updated_at": "2026-05-21T01:44:53.134Z",
    "price_list_id": null,
    "payees_count": 3
  }
]
```

### Obtener detalle de una categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5999",
  "vendor": false,
  "name": "VIP",
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-07-01 16:54:50.167055",
  "updated_at": "2026-07-01 16:55:13.539278",
  "price_list_id": "3936",
  "payees_count": "1"
}
```

### Crear categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee_category": {
      "name": "Mayorista",
      "vendor": false,
      "notes": "Clientes mayoristas"
    }
  }' \
  https://app.zauru.com/settings/payees/payee_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ],
  "entity": [
    "es inválido"
  ]
}
```

### Actualizar categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee_category": {
      "name": "Mayorista Premium"
    }
  }' \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5999",
  "vendor": false,
  "name": "VIP",
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-07-01 16:54:50.167055",
  "updated_at": "2026-07-01 16:55:13.539278",
  "price_list_id": "3936",
  "payees_count": "1"
}
```

### Eliminar categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
