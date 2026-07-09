---
title: "Cerrar un Caso"
sidebar_label: "Cerrar un Caso"
sidebar_position: 2
format: md
---

# Cerrar un Caso

Este tutorial esta enfocado en cerrar un caso. Luego de que el caso haya sido atendido y debidamente registrado, se deberá cerrar el caso. Los pasos para cerrar un caso son los siguientes:

1. Ir a “Soporte”.
2. Seleccionar “Casos Abiertos”.
3. Seleccionar el botón de “Cerrar Caso” como se muestra en la imagen.

![imagen1](/img/casos-de-soporte/casos-cerrar-un-caso-1.jpg)

Le aparecerá un mensaje de éxito en la pantalla, y ahora el caso lo podrá encontrar en “Casos Cerrados”.

![imagen](/img/casos-de-soporte/casos-cerrar-un-caso-2.jpg)

## API (llamadas desde sistemas externos)

### cerrar caso
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" https://app.zauru.com/pos/cases/1/close.json
```
