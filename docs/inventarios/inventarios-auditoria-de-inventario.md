---
title: "Auditoria de Inventario"
sidebar_label: "Auditoria de Inventario"
sidebar_position: 7
---

Este tutorial esta basado en la creación de auditorías de inventario y todas sus funcionalidades avanzadas.

## ¿Qué es una auditoría de inventario?

Una auditoría de inventario es un proceso de conteo físico donde se comparan las cantidades observadas (lo que realmente hay en la bodega) con las cantidades del sistema (lo que Zauru registra). El objetivo es identificar diferencias y generar los ajustes necesarios para que el sistema refleje la realidad física.

## Crear una auditoría de inventario

Los pasos para crear una auditoria de inventario son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Auditorías".
3. Seleccionar "Nueva Auditoría de Inventario".

![imagen1](/img/inventarios/inventarios-auditoria-de-inventario-1.jpg)

Le aparecerán los campos para hacer una auditoría de inventario, los campos que debe llenar son los siguientes:

a. Selecciona la Agencia que esta auditando y luego presione "Vista Previa" para refrescar la bodega.

b. Seleccione la fecha en que esta haciendo la auditoría.

c. Seleccione el producto que esta en la bodega y coloque la cantidad que esta observando.

d. Seleccione el más para agregar otro producto y coloque la cantidad observada del producto.

![imagen2](/img/inventarios/inventarios-auditoria-de-inventario-2.png)

### Modos de agregar productos

Al crear una auditoría, tiene múltiples opciones para agregar productos al listado de auditoría:

- **"+"**: Agrega una fila para un producto.
- **"+2"**: Agrega dos filas simultáneamente.
- **"+10"**: Agrega diez filas simultáneamente.
- **"+1 Aleatorio"**: Agrega un producto aleatorio que tenga stock en la bodega.
- **"+2 Aleatorio"**: Agrega dos productos aleatorios con stock.
- **"+10 Aleatorio"**: Agrega diez productos aleatorios con stock.
- **"+Todos"**: Agrega todos los productos que tengan algún movimiento en la bodega.
- **"+Todos (existencia > 0)"**: Agrega todos los productos que tengan stock disponible mayor a cero.
- **"+Todos (incluyendo sin existencia)"**: Agrega absolutamente todos los productos, incluso los que no tienen stock.

### Botones Vista Previa y Refrescar

- **Vista Previa**: Muestra los productos y cantidades del sistema sin guardar la auditoría, permitiéndole revisar antes de confirmar.
- **Refrescar**: Actualiza la información de stock desde el sistema, útil si hubo movimientos mientras preparaba la auditoría.

Al final cuando termine de colocar los productos y la cantidad observada presione "Crear auditoría de inventario".

![imagen3](/img/inventarios/inventarios-auditoria-de-inventario-3.png)

Le aparecerá un mensaje de éxito notificándole que se creo la auditoría exitosamente. Seleccione el ojo para ver los detalles de la auditoría.

![imagen4](/img/inventarios/inventarios-auditoria-de-inventario-4.jpg)

## Ver detalles de una auditoría

En los detalles de la auditoría encontrará:

- **Fecha de la auditoría**.
- **Bodega auditada**.
- **Listado de productos** con:
  - **Cantidad observada**: Lo que usted contó físicamente.
  - **Cantidad del sistema**: Lo que Zauru tiene registrado (considerando disponible y saliente).
  - **Diferencia**: La diferencia entre lo observado y el sistema. Una diferencia positiva significa que hay más de lo registrado (sobrante). Una diferencia negativa significa que hay menos de lo registrado (faltante).
  - **Costo promedio**: El costo unitario promedio del producto a la fecha de la auditoría.
  - **Costo total de la diferencia**: La diferencia multiplicada por el costo promedio.

![imagen5](/img/inventarios/inventarios-auditoria-de-inventario-5.png)

### Modo de stock disponible vs stock físico

Al visualizar los detalles de la auditoría, puede alternar entre:
- **Usar stock disponible (available)**: Compara contra la cantidad disponible (lo que está físicamente en bodega y no está reservado).
- **Usar stock físico (available + outgoing)**: Compara contra la cantidad total incluyendo lo que está reservado para salir.

Esta opción afecta cómo se calculan las diferencias.

### Actualizar cantidades del sistema

Si las cantidades del sistema cambiaron después de crear la auditoría (por ejemplo, porque hubo movimientos de inventario), puede actualizarlas:

1. Abra los detalles de la auditoría.
2. Seleccione "Actualizar cantidades del sistema".

Esto refrescará las cantidades del sistema para reflejar el estado actual del inventario.

## Reemplazar auditoría con Excel

Si tiene los datos de la auditoría en una plantilla de Excel, puede reemplazar los detalles de una auditoría existente con los datos del archivo:

1. Ir a "Inventarios".
2. Seleccionar "Auditorías".
3. Buscar la auditoría que desea modificar.
4. Seleccionar "Reemplazar con Excel".
5. Cargue el archivo Excel con los datos de la auditoría.
6. Presione "Reemplazar".

Esto actualizará todas las cantidades observadas de la auditoría con los valores del archivo Excel.

## Generar envíos de ajuste

Una vez que ha identificado las diferencias en la auditoría, puede generar automáticamente los envíos necesarios para ajustar el inventario:

1. Abra los detalles de la auditoría.
2. Seleccione "Generar envíos".

Zauru creará automáticamente:

- **Envíos de entrada (TO_ADD)**: Para productos con diferencia positiva (hay más de lo registrado). Estos envíos ingresan la diferencia a la bodega desde una bodega virtual de ajuste.
- **Envíos de salida (TO_REMOVE)**: Para productos con diferencia negativa (hay menos de lo registrado). Estos envíos retiran la diferencia de la bodega hacia una bodega virtual de ajuste.

Los envíos generados aparecerán en la sección de "Envíos" dentro de los detalles de la auditoría.

### Crear asientos contables para envíos de ajuste

Si tiene configurada la opción de asientos contables para auditorías (ver tutorial de Configuración de Inventarios), al generar los envíos de ajuste se crearán automáticamente los asientos contables correspondientes. Esto permite que las diferencias de inventario se reflejen en la contabilidad.

Los asientos contables utilizan:
- El costo promedio del producto a la fecha de la auditoría.
- Las cuentas contables configuradas para ingresos y egresos por ajuste de inventario.

### Crear asiento contable manualmente

Si los asientos automáticos no se generaron (o si desea regenerarlos):

1. Abra los detalles de la auditoría.
2. En la sección de envíos generados, seleccione "Crear asiento contable".

## Desasociar envíos devueltos

Si un envío generado por la auditoría fue devuelto o anulado, puede desasociarlo de la auditoría:

1. Abra los detalles de la auditoría.
2. Seleccione "Desasociar envíos devueltos".

Esto limpiará la relación entre la auditoría y los envíos que ya no son válidos.

## Editar una auditoría

Mientras la auditoría no tenga envíos generados, puede editarla:

1. Ir a "Inventarios".
2. Seleccionar "Auditorías".
3. Buscar la auditoría que desea editar.
4. Seleccionar "Editar".

Podrá modificar la fecha, los productos y las cantidades observadas. Una vez que se generan envíos desde la auditoría, esta ya no se puede editar.

## Eliminar una auditoría

Puede eliminar una auditoría solo si no tiene envíos generados:

1. Ir a "Inventarios".
2. Seleccionar "Auditorías".
3. Buscar la auditoría que desea eliminar.
4. Seleccionar "Eliminar".
