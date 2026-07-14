---
title: "Cerrar un Caso"
sidebar_label: "Cerrar un Caso"
sidebar_position: 4
---

Este tutorial esta enfocado en cerrar un caso. Luego de que el caso haya sido atendido y debidamente registrado, se debera cerrar el caso. Los pasos para cerrar un caso son los siguientes:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Seleccionar el boton de **"Cerrar Caso"** como se muestra en la imagen.

![imagen1](/img/casos-de-soporte/casos-cerrar-un-caso-1.jpg)

Al cerrar el caso, el sistema automaticamente:
- Cambia el estado del caso a **cerrado**.
- Registra la **fecha de cierre** (`closed_at`).
- Registra al **usuario que cerro** el caso (`closer_id`).
- Si las facturas del caso aun no han sido emitidas, permanecen en estado no emitido.

Le aparecera un mensaje de exito en la pantalla, y ahora el caso lo podra encontrar en **"Casos Cerrados"**.

![imagen](/img/casos-de-soporte/casos-cerrar-un-caso-2.jpg)

## API (llamadas desde sistemas externos)

### cerrar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/close.json
```

En caso de exito, retorna el caso actualizado:

```json
{
  "id": 1,
  "closed": true,
  "closed_at": "2024-01-15T14:30:00Z",
  "closer_id": 5,
  "zid": 1
}
```

En caso de error:

```json
{
  "success": false,
  "errors": ["mensaje de error"]
}
```
