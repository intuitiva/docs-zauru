---
title: "Imprimir y Descargar PDF"
sidebar_label: "Imprimir y Descargar PDF"
sidebar_position: 9
---

Hay clientes que quieren llevarse una hoja física con el detalle de su reparación, y hay contadores que necesitan el comprobante en PDF; en ambos casos, la página del caso lo resuelve. Este tutorial le muestra cómo imprimir un caso de soporte o descargarlo en formato PDF usando las plantillas configuradas.

## Imprimir un Caso

Para imprimir un caso:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Hacer click sobre **"Verificar"** (ojo) en el caso deseado.
4. En la pagina de detalles, seleccione una **plantilla de impresion** del listado desplegable.

![imagen1](/img/casos-de-soporte/casos-imprimir-y-descargar-1.png)

5. Haga click sobre **"Imprimir"** para ver la vista previa.
6. Presione **CTRL + P** para enviar a la impresora.

## Descargar como PDF

Para descargar un caso en formato PDF:

1. Siga los mismos pasos anteriores para seleccionar una plantilla de impresion.
2. En lugar de hacer click en **"Imprimir"**, seleccione la opcion **"Descargar PDF"**.
3. El sistema generara el archivo PDF y lo descargara automaticamente.

![imagen2](/img/casos-de-soporte/casos-imprimir-y-descargar-2.png)

## Plantillas de Impresion

La plantilla define cómo se verá el documento final: su membrete, sus columnas, su orden. Las plantillas de impresion disponibles dependen de la configuracion de la entidad. Pueden filtrarse por:
- **Agencia** (punto de soporte)
- **Responsable** del caso
- **Creador** del caso
- **Estado** (garantia, cortesia, cerrado)

Si no tiene plantillas configuradas, contacte a su administrador del sistema para que configure las plantillas de impresion para casos de soporte.

Con el documento en mano — impreso o en PDF — el caso ya se puede entregar al cliente o archivarse. El siguiente paso natural es enviar el resumen por correo o cerrar el caso para dar por terminada la atención.

## API (llamadas desde sistemas externos)

### imprimir un caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/print
```

Esta llamada retorna la vista previa de impresion del caso en formato HTML, usando la plantilla de impresion indicada por el parametro `print_template`.

### descargar PDF de un caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/download_pdf?print_template=1
```

El parametro `print_template` indica el ID de la plantilla de impresion a utilizar. La respuesta sera el archivo PDF generado.
