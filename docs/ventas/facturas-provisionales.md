---
title: "Facturas provisionales"
sidebar_label: "Facturas provisionales"
sidebar_position: 16
---

Las facturas provisionales (pre-facturas) le permiten anticipar el documento de venta antes de la factura definitiva. Este tutorial explica cómo imprimir y descargar sus facturas provisionales y las mejoras recientes en su presentación.

## Impresión y descarga en PDF

Desde la página de detalles de una factura provisional:

1. Seleccione una **plantilla de impresión**.
2. Haga click en **"Imprimir"** para ver la vista previa, o use la opción para **descargar el PDF**.

![facturas-provisionales-imprimir](/img/ventas/facturas-provisionales-1.png)

## Mensaje de factura anulada (VOIDED)

Si la factura provisional ha sido **anulada**, la impresión y el PDF ahora muestran automáticamente un mensaje de **"ANULADO" (VOIDED)**, de modo que el documento impreso refleje claramente su estado.

![facturas-provisionales-anulada](/img/ventas/facturas-provisionales-2.png)

## Mejoras recientes en la impresión

- **Descarga en PDF con el servicio de facturas**: la descarga del PDF de la factura provisional ahora utiliza el mismo servicio de generación de PDF que las facturas definitivas, lo que mejora la fidelidad y el formato del archivo.
- **Numeración de renglones en plantillas**: las plantillas de impresión ahora disponen de una variable de conteo (`count`) que permite numerar los renglones de detalle en sus diseños personalizados.
- **Corrección de la validación de anulación**: se corrigió la lógica que determina si una factura provisional está anulada al imprimir, asegurando que el mensaje de anulación se muestre correctamente.

## Representación electrónica (FEL Guatemala)

En la facturación electrónica de Guatemala, las facturas provisionales ahora tratan todos sus renglones como **bienes** en su representación electrónica (campo `BienOServicio = B`), independientemente del tipo de ítem.
