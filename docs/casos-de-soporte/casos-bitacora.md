---
title: "Bitácora del Caso"
sidebar_label: "Bitácora del Caso"
sidebar_position: 7
---

Este tutorial esta enfocado en como registrar la bitacora de un caso de soporte. La bitacora le permite llevar un registro cronologico de todas las actividades, notas y evidencias relacionadas al caso.

## Agregar una Entrada a la Bitacora

Los pasos para registrar una entrada en la bitacora son:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Hacer click sobre **"Verificar"** (ojo) en el caso deseado.
4. En la pagina de detalles, ubique la seccion de **Bitacora del Caso**.

![imagen1](/img/casos-de-soporte/casos-bitacora-1.png)

5. Complete los campos de la nueva entrada:
   - **Fecha**: Fecha de la actividad registrada.
   - **Bitacora**: Descripcion detallada de la actividad, nota o avance realizado.
   - **Imagen**: Puede adjuntar una imagen como evidencia (foto del equipo, captura de pantalla, etc.).
   - **PDF**: Puede adjuntar un documento PDF relacionado.
   - **Delegados**: Si la entrada debe ser visible para usuarios especificos, seleccionelos aqui.

6. Presione **"Crear Bitacora"**.

![imagen2](/img/casos-de-soporte/casos-bitacora-1.png)

Las entradas de la bitacora se mostraran en orden cronologico en la pagina de detalles del caso. Cada entrada muestra la fecha y el texto registrado, asi como las imagenes y PDFs adjuntos.

## Notas

- Esta funcionalidad esta disponible para todas las entidades que utilizan el sistema de bitacora tradicional (entidades 301 y 436). Para el resto de entidades, se recomienda utilizar el sistema de **formularios** para registrar el seguimiento del caso.
- Puede agregar tantas entradas como sea necesario a lo largo del ciclo de vida del caso.

## API (llamadas desde sistemas externos)

### crear una entrada de bitacora

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case_log": {
      "date": "2024-01-15",
      "log": "Se realizo diagnostico inicial. Se encontro falla en la fuente de poder."
    }
  }' \
  https://app.zauru.com/support/cases/1/create_log.json
```

### crear una entrada de bitacora con delegados

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case_log": {
      "date": "2024-01-15",
      "log": "Se notifico al cliente sobre el estado de la reparacion",
      "delegates": ["5", "8"]
    }
  }' \
  https://app.zauru.com/support/cases/1/create_log.json
```
