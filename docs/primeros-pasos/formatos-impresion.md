---
title: "Formatos de Impresión (Plantillas)"
sidebar_label: "Formatos de Impresión (Plantillas)"
sidebar_position: 5
---

Zauru permite imprimir sobre papelería preimpresa mediante plantillas de impresión. Los tipos de documento disponibles son:

- Facturas preimpresas.
- Cheques.
- Cheque-voucher.
- Contraseña de pago.
- Recibo.
- Memo.
- Cotización.
- Envío.
- Formularios.

## Crear una plantilla de impresión

1. Ir a "Configuraciones".
2. Seleccionar "Plantillas".
3. Seleccionar la pestaña "Plantillas de Impresión".
4. Presionar "Nueva Plantilla de Impresión".

![imagen1](/img/primeros-pasos/formatos-impresion-1.jpg)

El formulario de creación solicita:

- **Activo**: si se desmarca, la plantilla no se puede usar.
- **Operación**: operación a la que se liga la plantilla. Para cheques, seleccionar "Transacciones"; para facturas, "Facturas no Pagadas".
- **Nombre**: nombre con el que se identifica la plantilla.
- **Fuente** y **tamaño de letra**: tipografía del texto impreso.
- **Ancho**, **alto**, **margen superior**, **margen izquierdo** y **píxeles por cm**: medidas de la hoja y del área de impresión.
- **Incluye título** e **incluye subtítulo**: agregan un título y un subtítulo al documento.
- **Incluye logo** e **incluye segundo logo**: imprimen el logo y el segundo logo de la empresa, con ancho y alto en píxeles y posición en centímetros.
- **Imagen**: imagen de la plantilla con su ancho, alto y posición. En la posición 0, 0 se imprime como fondo de la hoja.
- **Encabezado**: filas, columnas, títulos de fila y columna, y bordes.
- **Espacio entre encabezado y cuerpo**: separación en centímetros.
- **Cuerpo**: columnas y títulos de columna. La opción "Pie de Página" agrega una fila al final del cuerpo para totales.
- **Espacio entre cuerpo y pie de página**: separación en centímetros.
- **Pie de página**: filas, columnas, títulos y bordes.
- **Pie de página final**: última fila al final de la impresión para firmas o términos y condiciones.
- **Impresiones por página** y **brecha entre impresiones**: copias por hoja y separación en centímetros entre ellas.
- **Notas**: comentario interno; no se imprime.

Presionar "Crear Plantilla de Impresión" para guardar.

![imagen2](/img/primeros-pasos/formatos-impresion-2.png)

![imagen3](/img/primeros-pasos/formatos-impresion-3.png)

![imagen4](/img/primeros-pasos/formatos-impresion-4.jpg)

![imagen5](/img/primeros-pasos/formatos-impresion-5.jpg)

## Editar los datos de la plantilla

1. En el listado, hacer click en el icono "Editar Datos" de la plantilla.
2. Colocar el alto y ancho de las filas y columnas.
3. Escribir en cada celda una variable del panel "Variables de Impresión" con el signo `$` al inicio (por ejemplo `$payee_name`) o texto fijo (por ejemplo `NO NEGOCIABLE`).

Las variables marcadas en la columna "Exclusivo del cuerpo" se colocan en la primera fila del cuerpo y se repiten en cada línea del documento, como cantidad, precio o precio unitario.

Al guardar, Zauru confirma la actualización. Antes de imprimir sobre chequeras o papelería real, hacer una prueba en una hoja en blanco.

![imagen6](/img/primeros-pasos/formatos-impresion-6.jpg)

![imagen7](/img/primeros-pasos/formatos-impresion-7.jpg)

En la columna "Tareas Especiales" del listado hay iconos para:

- "Vista Previa": abre la plantilla.
- "Vista Previa con Variables": muestra el nombre de las variables en la plantilla.
- "Vista Previa PDF": genera la plantilla en PDF. Solo aparece en plantillas de cotizaciones, facturas no pagadas, notas de crédito, contratos activos y casos.
- "Editar Datos": abre la edición de filas y celdas.
- "Duplicar": crea una copia de la plantilla.

![imagen8](/img/primeros-pasos/formatos-impresion-8.jpg)

## Duplicar una plantilla de impresión

1. Ir a "Configuraciones".
2. Seleccionar "Plantillas".
3. En la columna "Tareas Especiales", hacer click en "Duplicar".

Zauru crea una copia con el mismo nombre y la palabra "copia" al final. La plantilla original no se modifica.

![imagen9](/img/primeros-pasos/formatos-impresion-9.jpg)

## Impresión de documentos

La impresión de documentos define en qué operación y bajo qué restricciones se usa una plantilla de impresión.

![imagen10](/img/primeros-pasos/formatos-impresion-10.jpg)

1. Ir a "Configuraciones".
2. Seleccionar "Plantillas".
3. Seleccionar "Impresión de Documentos".
4. Presionar "Nueva Impresión de Documentos".

El formulario solicita:

- **Activo**: si se desmarca, la impresión no se usa.
- **Operación**: operación donde estará disponible. Presionar "Actualizar" para desplegar las plantillas de esa operación.
- **Plantilla de impresión**: plantilla creada para esa operación.
- **Nueva restricción** y **Agregar Restricción**: condiciones para que la impresión aparezca, por ejemplo "Imprimible" o una cuenta monetaria. En las restricciones de casilla, marcarla exige que la transacción cumpla la condición.
- **Notas**: opcional; no aparece al imprimir.

Presionar "Crear Impresión de Documento" para guardar. La plantilla aparecerá al imprimir desde la operación cuando se cumplan las restricciones.

![imagen11](/img/primeros-pasos/formatos-impresion-11.jpg)

![imagen12](/img/primeros-pasos/formatos-impresion-12.jpg)

![imagen13](/img/primeros-pasos/formatos-impresion-13.jpg)

![imagen14](/img/primeros-pasos/formatos-impresion-14.jpg)

## Grupos en plantillas de formularios

Las plantillas de la operación "Formularios" pueden asociarse a los grupos del formulario. Al crear o editar la plantilla, seleccionar los grupos para que la impresión muestre los datos agrupados.

---

## API (llamadas desde sistemas externos)

Todas las llamadas usan la URL base `https://app.zauru.com` y los encabezados `X-User-Email` y `X-User-Token`.

| Método | Ruta | Uso |
| --- | --- | --- |
| GET | `/settings/templates/print_templates.json` | Listar plantillas de impresión. |
| GET | `/settings/templates/print_templates/{id}.json` | Ver una plantilla. |
| POST | `/settings/templates/print_templates.json` | Crear una plantilla. |
| PATCH | `/settings/templates/print_templates/{id}.json` | Actualizar una plantilla. |
| DELETE | `/settings/templates/print_templates/{id}.json` | Eliminar una plantilla. |
| GET | `/settings/templates/print_templates/{id}/duplicate.json` | Duplicar una plantilla. |
| GET | `/settings/templates/print_templates/{id}/edit_data.json` | Obtener filas y celdas para editar. |
| PATCH | `/settings/templates/print_templates/{id}/update_data.json` | Actualizar filas y celdas. |
| GET | `/settings/templates/document_prints.json` | Listar impresiones de documentos. |
| GET | `/settings/templates/document_prints/{id}.json` | Ver una impresión de documento. |
| POST | `/settings/templates/document_prints.json` | Crear una impresión de documento. |
| PUT | `/settings/templates/document_prints/{id}.json` | Actualizar una impresión de documento. |
| DELETE | `/settings/templates/document_prints/{id}.json` | Eliminar una impresión de documento. |

Ejemplo del listado de plantillas:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/templates/print_templates.json
```

Respuesta (campos principales):

```json
[
  {
    "id": 6,
    "operation_id": 2,
    "active": true,
    "name": "facturas oficina para distribuidor",
    "width": 21.6,
    "height": 8.8,
    "header": true,
    "body_columns": 3,
    "footer": true,
    "prints_per_page": 3
  }
]
```

Las operaciones de escritura (`POST`, `PATCH`, `PUT` y `DELETE`) usan los mismos campos del formulario: `name`, `operation_id`, `active`, medidas y secciones. Al eliminar, Zauru responde `204 No Content`.
