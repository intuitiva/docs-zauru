---
title: "Reemplazar items de un envío"
sidebar_label: "Reemplazar items de un envío"
sidebar_position: 3.6
---

Cuando una reservación tiene muchos items, cargarlos uno por uno en el formulario puede ser lento. La opción "Reemplazar items de un envío" permite importar los movimientos desde un archivo Excel (.xlsx) o CSV, reemplazando todos los items y cantidades del envío en un solo paso. Solo aplica mientras el envío esté en estado de Reservación.

## Reemplazar los items de una reservación

Los pasos para importar los movimientos de un envío son:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Abrir la reservación cuyos movimientos desea reemplazar.
4. Seleccionar "Reemplazar items de un envío.

Se abre el formulario de importación de datos, con el tipo de documento "Reemplazar items de un envío" y el envío origen ya seleccionados. El formulario muestra la bodega origen y la bodega destino del envío.

5. Descargar la plantilla de Excel desde el enlace de descarga.
6. Completar la plantilla con los items y cantidades del envío.
7. Seleccionar el archivo en el campo "Archivo.
8. Presionar "Crear".

El archivo debe estar en formato `.xlsx` o `.csv`.

## Mapear columnas y validar

Después de subir el archivo, se abre la vista de edición de datos, donde se mapean las columnas del archivo con los campos del movimiento y se validan las filas:

1. Asignar cada columna del archivo al campo correspondiente. Los campos disponibles incluyen los campos del movimiento más `zid`, `serial_name`, `lot_name`, `ean13` y `code`.
2. Revisar y corregir los valores de las filas que lo requieran.
3. Validar cada fila. La validación confirma que el item existe, que hay stock suficiente y que los datos son correctos.
4. Importar las filas validadas.

Al importar, Zauru elimina todos los movimientos existentes del envío y los reemplaza por los del archivo. Si una fila no pasa la validación, no se importa y se muestra el error para corregirlo.

## Campos de la plantilla

Los campos disponibles para el tipo "Reemplazar items de un envío" son los campos del movimiento más identificadores del item:

- **item_id**: ID del item.
- **item_code**: código del item.
- **ean13**: código de barras del item.
- **code**: código alternativo del item.
- **zid**: identificador interno del item.
- **booked_quantity**: cantidad reservada.
- **reference**: referencia del movimiento.
- **serial_name**: nombre del número de serie, para items identificables.
- **lot_name**: nombre del lote, para items perecederos.
- **lot_id**: ID del lote.
- **serial_id**: ID del número de serie.
