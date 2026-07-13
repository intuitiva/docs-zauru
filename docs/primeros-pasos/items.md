---
title: "Items"
sidebar_label: "Items"
sidebar_position: 7
format: md
---

# Items
Los ítems son artículos de los que queremos llevar el control. Hay varias formas de categorizarlas y hay varios tipos, a continuación veremos  como funcionan en Zauru.

## Nuevo Ítem (producto o servicio)
Antes de poder vender o comprar productos o servicios, hay que crear los ítems que contengan el nombre y las especificaciones de estos. Los pasos para crear un Ítem son los siguientes:

1. Ir a “Configuraciones”
2. Seleccionar “Ítems”
3. Seleccionar “Nuevo Ítem”

![43a69-nuevoitemskitch](/img/primeros-pasos/items-1.jpg)

## Tipos de Item basados en como se manejan sus inventarios
Hay 2 tipos de Ítems:

1. Los Ítems que son productos
2. Los ítems que son servicios
Los productos son almacenables  y registran existencias, los servicios no son almacenables. Al seleccionar la caja de Almacenable (Paso 1) se registraran existencias de este ítem, si no se selecciona la caja de Almacenable (Paso 1) Zauru sabrá que este ítem es un servicio.

### Tipos de productos (items no servicios)
Hay productos que son vendibles, pero no son comprables, y hay productos que son comprables pero no vendibles, por ejemplo: En un escenario de una Empresa que produce su propia mercadería, la materia prima es comprable, luego de un proceso de producción, el producto terminado vendible.  Dicha empresa no  venderá materia prima y no comprara producto terminado. Entonces el ítem de su materia prima es comprable  y su producto terminado es vendible.

Hay 3 Tipos de Productos (Paso 2):

1. Los productos identificables, que llevan numero de serie único
2. Los productos perecederos, que pertenecen a un lote y tienen fecha de expiración.
3. Los productos normales, que no tienen fecha de vencimiento ni numero de serie.

![2](/img/primeros-pasos/items-2.jpg)

## Otras Características de los Ítems
Sus productos pueden tener ciertas características que los diferencien de los demás, por ejemplo: su peso, su unidad de medida, sus meses de garantía, un punto de re orden y una cantidad recomendada a ordenar. Para especificar dichas categorías a sus productos deberá colocarlas en el ítem, las características son las siguientes:

Si un ítem esta activo se podrá interactuar con el dentro del sistema.
Coloque el nombre de su producto, no es recomendable que tenga productos con el mismo nombre.
Coloque el código de su producto, si tiene.
Coloque el código de barras de su producto para que pueda ser leído por el lector de código de barras.
Coloque la unidad que utiliza para medir su producto.
Coloque el peso de su producto.
Coloque el volumen en metros cúbicos de su producto.
Coloque la cantidad mínima que debería de tener en existencia de su producto. Cuando las existencias alcancen esa cantidad, el sistema le notificara poniendo su producto en color rojo, para que sepa cuando es recomendable volver a ordenar.
Cuando su producto llegue a un punto de re orden, especifique la cantidad que seria recomendable volver a comprar.
Coloque los meses de garantía que tiene su producto o Servicio.
Si su producto o servicio paga IVA marque el cheque, si no, déjelo vacío.
Coloque la tasa de arancel que paga su producto en la importación.
Si su producto o servicio tiene alguna característica que no se pudo especificar en los campos anteriores, la puede colocar en la descripción.
Adjunte imágenes de sus productos para que sean visibles en el modulo de punto de venta (P.O.S).
Adjunte un PDF.
Adjunte un producto o servicio a un proyecto que haya creado previamente.
Seleccione un proveedor definido de sus productos o servicios.
Para Guardar los cambios presione el botón de “Crear ítem”.

NOTA: La única característica obligatoria del ítem es su nombre, todos los demás campos son opcionales.

![3](/img/primeros-pasos/items-3.jpg)

## Importar Ítems
Cuando su empresa tiene cientos de productos o servicios puede ser tedioso crear items. Zauru le permite importar cantidades grandes de Ítems en formatos pre-definidos de Excel. Los pasos para importar ítems son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Click en el botón de “Importar”.

![5](/img/primeros-pasos/items-4.png)

A continuación encontrara una guía para la importación de sus Ítems.

4.  Deberá descargar la plantilla de importación de Ítems señalada. El único campo obligatorio para importar ítems es el nombre, todos los demás campos son opcionales.

Las entradas de texto permitidas para cada campo están especificadas en la imagen de abajo y son las siguientes:

- Booleano: TRUE or FALSE, si no se especifica una de las dos variables en la importación el sistema asumirá que es FALSE.
- Numero Entero: Solo se permiten números sin punto decimal o separador de miles (comas).
- Numero con Decimales: Solo numero sin separador de miles (comas).
- Texto: Cualquier carácter es permitido.
- Cadena de texto: Cualquier carácter dentro de la cadena es permitido, pero que no sea mayor a 256 caracteres.

5. Al terminar de colocar los campos que desee importar en la plantilla de Excel deberá seleccionar el archivo a importar.

6. Seleccione el botón de “Importar Ítems” y espere a que Zauru suba sus ítems, si aparece algún error en la importación, revise si su plantilla de Excel cumple las normas de importación.
![6](/img/primeros-pasos/items-5.jpg)

## Categorizar Ítems
Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Es posible categorizar sus productos en Zauru para poder ubicar sus productos más fácilmente. Los pasos para categorizar ítems son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Categoría de Ítems” en las pestañas.
4. Click en el botón “+ Nueva Categoría de Ítems”.

![7](/img/primeros-pasos/items-6.png)

5. Coloque el Nombre de la Categoría de Ítems.

6. Coloque una nota sobre la categoría de Ítems. (opcional)

7. Presione “Crear Categoría de Ítems”.

![8](/img/primeros-pasos/items-7.png)

Luego de crear la Categoría de Ítems deberá colocársela al ítem(s) que desea categorizar. La forma de hacerlo es la siguiente:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccione “Editar” para agregar un ítem existente a una categoría.

![9](/img/primeros-pasos/items-8.png)

## Súper Categorías de Ítems

Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Ahora es posible categorizar sus productos en Zauru también por *__SÚPER CATEGORÍAS__*, lo cual permitirá poder ubicar sus productos de una forma aún más fácil. Los pasos para categorizar ítems con *__SÚPER CATEGORÍAS__* son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Súper Categoría de Ítems” en las pestañas.
4. Click en el botón “+ Nueva Súper Categoría de Ítems”.

![Súper Categorías](/img/primeros-pasos/items-9.png)

5. Coloque el Nombre de la Súper Categoría de Ítems.
6. Coloque una nota sobre la Súper categoría de Ítems. (opcional)
7. Puede elegir un color (Esto será funcional si la empresa utiliza el módulo de PDV.
8. Presione “Crear Súper Categoría de Ítems”.

![Nueva Súper Categoría](/img/primeros-pasos/items-10.png)

## Marcas de Ítems

Es probable que sus productos estén categorizados por tamaño, color, peso, tipo de cliente, material, personaje etc. Ahora es posible categorizar sus productos en Zauru también por *__MARCAS__*, lo cual permitirá poder ubicar sus productos de una forma aún más fácil. Los pasos para categorizar ítems con *__MARCAS__* son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Ítems”.
3. Seleccionar “Marcas” en las pestañas.
4. Click en el botón “+ Nueva Marca”.

![Marca de ïtems](/img/primeros-pasos/items-11.png)

5. Coloque el Nombre de la Marca de Ítems.
6. Coloque una nota sobre la Marca de Ítems. (opcional)
7. Puede elegir un color (Esto será funcional si la empresa utiliza el módulo de PDV.
8. Presione “Crear Marca”.

![Nueva Marca de Ítems](/img/primeros-pasos/items-12.png)

## API (llamadas desde sistemas externos)

### obtener información del item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/1.json
```

### crear item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item": {
      "name": "Producto prueba",
      "reference": "Referencia del producto prueba",
      "stockable": "false"
    }
  }' \
  https://app.zauru.com/settings/items.json
```

### destruir item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/items/1.json
```
Nota: Solo se puede eliminar el item si no tiene # de serie, lotes, aparece a un envío, aparece a un paquete, aparece a una factura, aparece en una orden de compra o está seleccionado en algún descuentos de items.

### listado de categorías de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/items/item_categories.json
```

### crear categoría de item
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "item_category": {
      "name": "super categoria",
      "notes": "descripcion de la categoria"
    }
  }' \
  https://app.zauru.com/settings/items/item_categories.json
```
