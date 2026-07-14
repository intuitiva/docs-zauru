---
title: "Contratos Cerrados"
sidebar_label: "Contratos Cerrados"
sidebar_position: 3
---

Los contratos cerrados son aquellos que ya finalizaron su ciclo de vida y no generan más cuotas. Un contrato se cierra automáticamente cuando se ha generado la última cuota configurada (para contratos con cantidad finita de cuotas) o manualmente por el usuario.

## Listado de Contratos Cerrados

Al ingresar a la sección de Contratos Cerrados se muestra una tabla con todos los contratos que han sido cerrados (ya sea automática o manualmente). Se puede filtrar por tipo de documento.

![listado de contratos cerrados](/img/contratos/contratos-cerrados-1.png)

Las columnas del listado incluyen: ID, Tipo de Documento, Número de Contrato, Referencia, Beneficiario, Cuotas, Periodicidad, Fecha de Inicio, Fecha de Cierre, Monto y Acciones.

## Detalle de un Contrato Cerrado

Al hacer clic en un contrato cerrado se muestra el mismo detalle que en los contratos activos y preliminares, incluyendo:

- Información general del contrato (ID, tipo de documento, referencia, responsable, etc.)
- Detalles de periodicidad y recurrencia
- Detalles de items y cuentas
- Documentos generados (cuotas)
- Documentos asociados (transacciones, envíos, facturas, órdenes de compra, casos)
- Formularios asociados

## Re-abrir Contratos Cerrados

Si por alguna razón se necesita que un contrato cerrado vuelva a generar cuotas, se puede re-abrir. Al re-abrir un contrato cerrado, este regresa al estado de **Contrato Preliminar**, lo que significa que no empezará a generar cuotas automáticamente hasta que sea activado nuevamente.

![reabrir contrato cerrado](/img/contratos/contratos-cerrados-2.png)

Para re-abrir un contrato cerrado:
1. Ingresar al detalle del contrato cerrado.
2. Hacer clic en el botón "Re-abrir" (Unclose).
3. El contrato pasará a ser un Contrato Preliminar y aparecerá en esa sección.

## Imprimir Contrato Cerrado

Los contratos cerrados se pueden imprimir utilizando las plantillas de impresión configuradas. En el detalle del contrato hay un botón de "Imprimir" que genera una vista de impresión con el formato definido.

También se puede descargar como PDF.

## Documentos Asociados al Contrato Cerrado

Al igual que en los contratos activos, en el detalle del contrato cerrado se pueden ver y asociar los siguientes documentos:

1. Transacciones
2. Envíos
3. Ordenes de Venta
4. Facturas
5. Órdenes de Compra
6. Casos

Para asociar un nuevo documento solo hay que ingresar al detalle del contrato e ingresar al tipo de documento a asociar.

## API (llamadas desde sistemas externos)

### Ver Contrato Cerrado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/contracts/closed_contracts/1.json
```

### Re-abrir Contrato Cerrado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/contracts/closed_contracts/1/unclose.json
```
