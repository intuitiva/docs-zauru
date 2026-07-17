---
title: "GraphQL API"
sidebar_label: "GraphQL API"
sidebar_position: 6
---

Zauru ofrece un endpoint de GraphQL que le permite consultar la información de su entidad (y sus WebApp Tables) de forma flexible y eficiente desde sus aplicaciones externas. El acceso a GraphQL se realiza por medio de un token JWT generado por Zauru.

## Obtener un Token JWT

Para acceder al endpoint de GraphQL, primero necesita obtener un token JWT. El token expira en 5 días y se obtiene desde el endpoint de GraphQL de Zauru.

Los pasos para obtener su token son:

1. Ir a "WebApps".
2. Seleccionar "GraphQL".

Zauru le mostrará su token JWT, la URL del endpoint de GraphQL y la fecha de expiración del token.

## API (llamadas desde sistemas externos)

### Obtener token JWT para GraphQL
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/apps/graphql.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 200,
  "message": "ok",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires": "2024-05-21T10:00:48Z",
  "expiresMsg": "21/05/2024 10:00:48 (5d y 00:00:00 restantes)",
  "graphqlUrl": "https://graphql.zauru.com/v1/graphql"
}
```

Una vez obtenido el token, puede utilizarlo para hacer consultas GraphQL directamente contra la URL proporcionada en `graphqlUrl`, enviando el token en el encabezado `Authorization`:

```bash
curl -v \
  -H "Content-type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -d '{"query": "{ webapp_table_rows { id data } }"}' \
  https://graphql.zauru.com/v1/graphql
```
