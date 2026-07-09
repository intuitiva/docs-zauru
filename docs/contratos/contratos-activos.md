---
title: "Contratos Activos"
sidebar_label: "Contratos Activos"
sidebar_position: 2
format: md
---

# Contratos Activos
Al momento de activar el contrato preliminar se convierte en un contrato activo; lo que significa que va a generar documentos recurrentemente con la periodicidad estipulada, indefinidamente o una cantidad específica de recurrencias.
![listado de contratos activos](/img/contratos/contratos-activos-1.png)

## Generar Documentos Automáticamente
Este es el comportamiento normal de un contrato, que genere documentos automáticamente basados en la recurrencia específica (ver [(recurrencias)](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)).

Zauru revisa todos los días a las 3AM de la mañana (-6:00 UTM) si hay alguna recurrencia que generar y la genera.

Eso significa que si la fecha de la próxima cuota coincide con la fecha de revisión de ese día, genera una recurrencia (cuota).

## Generar Documentos Manualmente
Hay ocaciones donde necesitará generar un documento manualmente porque dio error o porque queremos adelantar una recurrencia (cuota).

En el detalle del contrato hay que ingresar al botón de "Generar Documentos" para acceder a la parametrización de la generación.

![boton generar documentos](/img/contratos/contratos-activos-2.png)

Luego se configura la parametrización:

![generar-contratos-manualmente](/img/contratos/contratos-activos-3.png)

Solo hay 2 cosas que seleccionar:

1. __Documentos:__ La cantidad de cuotas *individuales* (no consolidadas) a generar.
2. __En la fecha esperada:__ Si esta marcado va a generar la cuota con fecha en la fecha que correspondía. Ejemplo: hoy 28 de agosto quería adelantar una factura que se generaría automáticamente el 1 de septiembre (4 días después), si está marcado el chequesito, generará la factura con fecha 1 de septiembre, si no está marcado el chequesito, generará la factura con fecha 28 de agosto.

## Detalles de los Documentos Generados por el contrato
En el detalle del contrato podemos observar el listado de los documentos generados automáticamente o manualmente.
![documentos generados](/img/contratos/contratos-activos-4.png)


## Editar Contratos Activos
Los contratos activos se pueden editar para que las siguientes recurrencias respeten los nuevos parámetros del contrato. El editar el contrato no cambia las cuotas anteriores.

## Cerrar Contratos Activos
Si por alguna razón los contratos ya no deben de generar documentos se pueden cerrar en cualquier momento.

Cerrar los contratos no significa que se van a borrar sus documentos generados y asociados. Solo que ya no va a generar recurrencias.

Los contratos cerrados también se pueden re-abrir para que vuelvan a generar recurrencias.

## Documentos Asociados al Contrato
Los documentos que se pueden asociar son:
1. Transacciones
2. Envíos
3. Ordenes de Venta
4. Facturas
5. Casos

Para asociar un documento solo hay que entrar al detalle del contrato e ingresar al tipo de documento a asociar:
![asociar documentos](/img/contratos/contratos-activos-5.png)

## API (llamadas desde sistemas externos)

### Generar cuota manualmente
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"documents":1} https://app.zauru.com/contracts/active_contracts/1/generate_documents_action.json
```
Si hay error devolverá un JSON con el error como un objeto llamado "error" y el objeto del contrato en "contract", sino hay error solo devolverá el contrato.
