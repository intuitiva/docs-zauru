---
title: "Sincronización de Aplicaciones (App Syncs)"
sidebar_label: "Sincronización de Aplicaciones"
sidebar_position: 5
---

La sincronización de aplicaciones en Zauru le permite replicar información de sus tablas dinámicas (WebApp Tables) hacia una base de datos externa (PostgreSQL), para que sus webapps personalizadas puedan consultar los datos de forma directa y eficiente por medio de GraphQL o consultas SQL.

## Crear una Sincronización

Para crear una nueva sincronización de aplicación:

1. Ir a "WebApps".
2. Seleccionar "Sincronización de Aplicaciones".
3. Seleccionar "Nueva Sincronización".

Al crear una sincronización deberá especificar:

- El nombre de la aplicación externa.
- Los modelos/tablas que desea sincronizar.
- Las WebApp Tables que desea replicar en la base de datos externa.

## Refresco Completo (Full Refresh)

Una sincronización puede realizar un refresco completo que copia todos los datos actuales desde Zauru hacia la base de datos externa. Esta operación se ejecuta en segundo plano y puede tardar varios minutos dependiendo del volumen de datos.

## Sincronización de IDs Pendientes

Zauru mantiene una cola de IDs pendientes de sincronizar. Cada vez que un registro se crea, actualiza o elimina, su ID se agrega a esta cola para ser sincronizado incrementalmente. Puede ejecutar la sincronización inmediata de los IDs pendientes en cualquier momento.

## API (llamadas desde sistemas externos)

### Crear sincronización
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "apps_app_sync": {
      "app_name": "Mi Webapp",
      "active": true,
      "tables": "1,2,3"
    }
  }' \
  https://app.zauru.com/apps/app_syncs.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar sincronización
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "apps_app_sync": {
      "app_name": "Mi Webapp Actualizada",
      "active": true
    }
  }' \
  https://app.zauru.com/apps/app_syncs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Eliminar sincronización
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/apps/app_syncs/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Obtener columnas de un modelo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_syncs/get_columns.json?model=payees
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "integer",
  "zid": "integer",
  "id_number": "string",
  "active": "boolean",
  "name": "string",
  "vendor": "boolean",
  "buyer": "boolean",
  "tin": "string",
  "reference": "string",
  "address_line_1": "text",
  "address_line_2": "text",
  "delivery_address": "string",
  "currency_id": "integer",
  "credit_limit": "decimal",
  "payee_category_id": "integer",
  "web": "string",
  "phone": "string",
  "email": "string",
  "contact": "string",
  "contact_phone": "string",
  "contact_email": "string",
  "contact2": "string",
  "contact2_phone": "string",
  "contact2_email": "string",
  "notes": "text",
  "entity_id": "integer",
  "updater_id": "integer",
  "created_at": "datetime",
  "updated_at": "datetime",
  "employee_id": "integer",
  "service_provider": "boolean",
  "invoices_in_credit_limit": "integer",
  "payment_delay_in_credit_limit": "boolean",
  "pdf": "string",
  "image": "string",
  "excempt": "boolean",
  "small_taxpayer": "boolean",
  "foreign": "boolean",
  "latitude": "float",
  "longitude": "float",
  "great_contributor": "boolean",
  "tax_withholding_agent": "boolean",
  "subject_to_withholding_taxes": "boolean",
  "personal_identification_number": "string",
  "client_for_export": "boolean",
  "payee_activity_id": "integer",
  "city_id": "integer",
  "taxpayer_registry": "string",
  "district_id": "integer",
  "default_payment_term_id": "integer",
  "country_id": "integer"
}
```

### Iniciar refresco completo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_syncs/1/full_refresh.json
```

### Consultar estado del refresco
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_syncs/1/refresh_status.json
```

## API de IDs Pendientes de Sincronizar

### Obtener listado de IDs pendientes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_sync_ids_to_syncs.json
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Ver detalle de un ID pendiente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_sync_ids_to_syncs/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Eliminar un ID pendiente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/apps/app_sync_ids_to_syncs/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Sincronizar IDs pendientes ahora
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/apps/app_sync_ids_to_syncs/sync_now.json
```

Esta acción no devuelve JSON; el servidor responde con una redirección (HTTP 302) una vez iniciada la sincronización.
