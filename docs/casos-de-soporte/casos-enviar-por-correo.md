---
title: "Enviar Caso por Correo"
sidebar_label: "Enviar por Correo"
sidebar_position: 10
---

Este tutorial esta enfocado en como enviar el resumen de un caso de soporte por correo electronico al cliente.

## Configuracion Previa

Antes de poder enviar casos por correo, debe configurar las opciones de correo en **"Configuraciones de Soporte"**. Consulte el tutorial de **"Configuraciones de Soporte"** para mas detalles.

Las configuraciones disponibles incluyen:
- Remitente del correo
- Direccion de respuesta (Reply-To)
- CC al responsable del caso
- Asunto del correo
- Cuerpo del mensaje
- Saludo personalizado
- Direcciones CC y BCC adicionales

## Enviar un Caso por Correo

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"** (o **"Casos Cerrados"**).
3. Hacer click sobre **"Verificar"** (ojo) en el caso deseado.
4. En la pagina de detalles, seleccione la opcion **"Enviar Correo"**.

![imagen1](/img/casos-de-soporte/casos-enviar-por-correo-1.png)

El sistema enviara automaticamente un correo electronico al cliente con la informacion del caso, utilizando la plantilla de correo configurada.

Le aparecera un mensaje de exito confirmando que el correo fue enviado.

## API (llamadas desde sistemas externos)

### enviar caso por correo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/send_email
```
