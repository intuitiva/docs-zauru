---
title: "Operaciones de Gateway - Bitácora"
sidebar_label: "Operaciones de Gateway"
sidebar_position: 24
---

Este tutorial está enfocado en como consultar el historial de operaciones realizadas a través de las pasarelas de pago (gateways) configuradas en Zauru. Estas operaciones incluyen tokenización de tarjetas, cobros, reembolsos y cualquier otra interacción con el gateway.

## Consultar la Bitácora de Operaciones

La bitácora de operaciones de gateway permite auditar todas las interacciones que Zauru ha tenido con las pasarelas de pago. Esto es útil para diagnosticar errores en pagos, verificar que las operaciones se completaron exitosamente y dar seguimiento a intentos fallidos.

Los pasos para consultar la bitácora son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Operaciones de Gateway"**.

![imagen1](/img/ventas/operaciones-de-gateway-1.png)

### Filtros Disponibles

La bitácora de operaciones puede filtrarse por:

a. **Alcance (Scope)**:
   - **Sin errores**: Muestra solo las operaciones que se completaron exitosamente.
   - **Con errores**: Muestra solo las operaciones que tuvieron algún error.
   - **Todas**: Muestra todas las operaciones sin filtrar.

b. **Rango de fechas**:
   - **Desde**: Fecha de inicio del rango de búsqueda.
   - **Hasta**: Fecha de fin del rango de búsqueda.

![imagen2](/img/ventas/operaciones-de-gateway-2.png)

### Información Mostrada

Para cada operación de gateway, se muestra la siguiente información:

- **Fecha y hora** de la operación.
- **Gateway configurado** utilizado.
- **Cliente (beneficiario)** asociado a la operación.
- **Tarjeta de crédito** utilizada (si aplica).
- **Estado** de la operación (exitosa o con error).
- **Mensaje de error** (si la operación falló).

## Ver Detalles de una Operación

Para ver los detalles completos de una operación de gateway:

1. En la bitácora de operaciones, haga click sobre la operación que desea consultar.
2. Se mostrarán los detalles completos incluyendo:
   - Los datos de la solicitud enviada al gateway.
   - La respuesta recibida del gateway.
   - Cualquier metadata adicional de la operación.

![imagen3](/img/ventas/operaciones-de-gateway-3.png)

Esta información es especialmente útil cuando se necesita diagnosticar por qué un pago fue rechazado o por qué la tokenización de una tarjeta falló.
