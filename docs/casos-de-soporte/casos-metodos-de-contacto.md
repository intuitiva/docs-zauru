---
title: "Métodos de Contacto"
sidebar_label: "Métodos de Contacto"
sidebar_position: 14
---

Este tutorial esta enfocado en la administracion de los metodos de contacto utilizados en los casos de soporte. Los metodos de contacto indican la via por la cual el cliente se comunico para reportar el caso (telefono, correo electronico, presencial, chat, etc.).

## Listar Metodos de Contacto

1. Ir a **"Soporte"**.
2. Seleccionar **"Metodos de Contacto"** (o acceder a `/support/contact_methods`).

![imagen1](/img/casos-de-soporte/casos-metodos-de-contacto-1.jpg)

Le aparecera el listado de metodos de contacto configurados en su entidad. Para cada metodo se muestra:

- **Nombre** del metodo (Ej: "Telefono", "Correo Electronico", "Presencial")
- **Descripcion** del metodo
- **Acciones**: Verificar, Editar, Eliminar

## Crear un Nuevo Metodo de Contacto

1. En el listado de metodos de contacto, seleccione **"Nuevo Metodo de Contacto"**.

![imagen2](/img/casos-de-soporte/casos-metodos-de-contacto-2.jpg)

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

### obtener formulario de nuevo metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods/new.json
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

### ver detalle de un metodo de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/contact_methods/1.json
```

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
