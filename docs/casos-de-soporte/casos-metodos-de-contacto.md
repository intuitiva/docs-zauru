---
title: "Métodos de Contacto"
sidebar_label: "Métodos de Contacto"
sidebar_position: 14
---

Cada caso entra por una vía distinta: un cliente llama, otro escribe por WhatsApp y otro llega a la recepción de su taller. Los métodos de contacto registran la vía por la cual el cliente se comunicó para reportar el caso (teléfono, correo electrónico, presencial, chat, etc.), y este tutorial le muestra cómo administrarlos para que cada caso quede clasificado desde el primer minuto.

## Listar Metodos de Contacto

1. Ir a **"Soporte"**.
2. Seleccionar **"Metodos de Contacto"** (o acceder a `/support/contact_methods`).

![imagen1](/img/casos-de-soporte/casos-metodos-de-contacto-1.png)

Le aparecera el listado de metodos de contacto configurados en su entidad. Para cada metodo se muestra:

- **Nombre** del metodo (Ej: "Telefono", "Correo Electronico", "Presencial")
- **Descripcion** del metodo
- **Acciones**: Verificar, Editar, Eliminar

## Crear un Nuevo Metodo de Contacto

1. En el listado de metodos de contacto, seleccione **"Nuevo Metodo de Contacto"**.

![imagen2](/img/casos-de-soporte/casos-metodos-de-contacto-2.png)

2. Complete los campos:
   - **Nombre**: Nombre descriptivo del metodo (Ej: "WhatsApp", "Chat en Vivo", "Visita Tecnica").
   - **Descripcion**: Detalle adicional sobre el metodo de contacto.

3. Presione **"Crear Metodo de Contacto"**.

## Editar un Metodo de Contacto

1. En el listado, haga click sobre **"Editar"** (lapiz) en el metodo deseado.
2. Modifique los campos necesarios.
3. Presione **"Actualizar Metodo de Contacto"**.

## Eliminar un Metodo de Contacto

1. En el listado, haga click sobre **"Eliminar"** (basurero) en el metodo deseado.

**Nota**: Solo puede eliminar un metodo de contacto si no esta siendo utilizado por ningun caso existente.

Con los métodos de contacto definidos, cada caso nuevo quedará clasificado según la vía por la que llegó y sus reportes de soporte serán más claros. El siguiente paso natural es crear un caso usando estos métodos, o ajustar las configuraciones de correo para que las notificaciones salgan a la medida de su empresa.

## API (llamadas desde sistemas externos)

### listar metodos de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "1",
    "name": "phone income",
    "description": "llamadas entrantes",
    "entity_id": "1",
    "created_at": "2013-02-11 06:40:08.778433",
    "updated_at": "2013-02-11 06:40:08.778433"
  }
]
```

### obtener formulario de nuevo metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "phone income",
  "description": "llamadas entrantes",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:08.778433",
  "updated_at": "2013-02-11 06:40:08.778433"
}
```

Retorna un objeto vacio de metodo de contacto que puede usar como base para crear uno nuevo.

### crear metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "contact_method": {
      "name": "WhatsApp",
      "description": "Contacto via WhatsApp Business"
    }
  }' \
  https://app.zauru.com/support/contact_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "phone income",
  "description": "llamadas entrantes",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:08.778433",
  "updated_at": "2013-02-11 06:40:08.778433"
}
```

### ver detalle de un metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "phone income",
  "description": "llamadas entrantes",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:08.778433",
  "updated_at": "2013-02-11 06:40:08.778433"
}
```

### obtener formulario de edicion de un metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "phone income",
  "description": "llamadas entrantes",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:08.778433",
  "updated_at": "2013-02-11 06:40:08.778433"
}
```

Retorna el metodo de contacto con sus datos actuales, que puede usar como base para editarlo.

### editar metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "contact_method": {
      "name": "WhatsApp Business",
      "description": "Contacto via WhatsApp Business API"
    }
  }' \
  https://app.zauru.com/support/contact_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "phone income",
  "description": "llamadas entrantes",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:08.778433",
  "updated_at": "2013-02-11 06:40:08.778433"
}
```

### eliminar metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/support/contact_methods/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
