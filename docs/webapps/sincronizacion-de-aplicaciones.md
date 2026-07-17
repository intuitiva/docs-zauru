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

### Obtener columnas de un modelo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/app_syncs/get_columns.json?model=payees
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
