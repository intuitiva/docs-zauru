---
title: "Paquetes"
sidebar_label: "Paquetes"
sidebar_position: 6
---

Este tutorial esta basado en la creación de paquetes de productos para la venta y la consulta de sus existencias.

## ¿Qué es un paquete?

Un paquete (bundle) es un conjunto de productos que se venden juntos como una unidad. Zauru soporta dos tipos de paquetes:

1. **Paquetes estáticos**: Conjunto predefinido de productos específicos con cantidades fijas.
2. **Paquetes dinámicos (por categoría)**: Paquete que se arma automáticamente con productos de una categoría, permitiendo flexibilidad en la composición según disponibilidad.

## Crear un paquete estático

Los pasos para crear un paquete en Zauru son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".

![imagen1](/img/inventarios/inventarios-paquetes-1.jpg)

Le aparecerán los opciones para crear un nuevo paquete, los campos que debe llenar son los siguientes:

a. Coloque el código del paquete.

b. Coloque el código de barras (EAN13) para que pueda ser escaneado el producto.

c. Coloque el nombre del paquete.

d. Seleccione el primer producto que llevara el paquete y coloque la cantidad. Para agregar mas productos presione "+".

![imagen2](/img/inventarios/inventarios-paquetes-2.png)

Cuando termine de agregar todos los productos que desea que lleve el paquete, presione "Crear paquete".

![imagen3](/img/inventarios/inventarios-paquetes-3.jpg)

Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo el paquete exitosamente. Ahora podrá seleccionar este paquete al momento de hacer una reservación en el inventario. Para poder vender el paquete hay que ponerle un precio sugerido, este tutorial lo podrá en encontrar en "Ventas".

## Crear un paquete dinámico (por categoría)

Un paquete dinámico permite que los productos que lo componen se seleccionen automáticamente de una categoría de ítems. Esto es útil cuando:

- Los productos específicos pueden variar según disponibilidad.
- Quiere ofrecer un paquete que se adapte al stock disponible en una bodega.
- Maneja productos similares que pueden sustituirse entre sí.

Para crear un paquete dinámico:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".
4. Active la opción de "Paquete por categoría" (category_bundle).
5. Seleccione la categoría de ítems que agrupará los productos del paquete.
6. Los productos se seleccionarán automáticamente de esa categoría.

### Consultar ítems dinámicos con stock

Para paquetes dinámicos, puede consultar qué ítems de la categoría tienen stock disponible en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar el paquete dinámico.
4. El sistema mostrará automáticamente los ítems de la categoría que tienen existencias disponibles.

## Configuración adicional del paquete

Al crear o editar un paquete, puede configurar opciones adicionales:

- **Código EAN13**: Código de barras estándar para identificar el paquete en puntos de venta.
- **Unidad de medida**: Especifique la unidad de medida del paquete (unidad, caja, kit, etc.).
- **Comercio electrónico (Ecommerce)**: Marque el paquete como disponible para venta en línea.
- **Imágenes del paquete**: Agregue imágenes para identificar visualmente el paquete.

## Agregar imágenes a un paquete

Para agregar o modificar las imágenes de un paquete:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Buscar el paquete que desea editar.
4. Seleccionar "Editar imágenes".
5. Cargue las imágenes deseadas.
6. Presione "Actualizar imágenes".

## Exportar paquetes

Puede exportar el listado completo de paquetes a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Exportar".

Esto descargará un archivo XLS con todos los paquetes, sus componentes y cantidades.

## Importar paquetes

Puede importar paquetes desde un archivo:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Importar paquetes".
4. Seleccione el archivo con los datos de los paquetes.
5. Presione "Importar".

## Nube de etiquetas (Tag Cloud)

En la vista de paquetes, puede filtrar por etiquetas usando la nube de etiquetas:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Nube de etiquetas".

Esto mostrará las etiquetas disponibles para filtrar los paquetes.

## Existencias de paquetes (Bundle Stocks)

Zauru calcula automáticamente las existencias disponibles de cada paquete basándose en la disponibilidad de sus componentes. La cantidad disponible de un paquete se determina como el **mínimo** de las cantidades disponibles de sus componentes dividido por la cantidad requerida de cada uno.

Por ejemplo, si un paquete "Combo Oficina" contiene:
- 2 cuadernos (stock disponible: 10)
- 1 lapicero (stock disponible: 3)

El paquete tendrá disponible: min(10/2, 3/1) = min(5, 3) = **3 unidades**.

### Ver existencias de paquetes por bodega

1. Ir a "Inventarios".
2. Seleccionar "Existencias de paquetes".
3. Seleccione la bodega que desea consultar.

Podrá ver cada paquete con su cantidad disponible calculada.

### Ver existencias de paquetes en todas las bodegas

1. Ir a "Inventarios".
2. Seleccionar "Existencias de paquetes".
3. Seleccionar la pestaña "Todas las bodegas".

Aquí podrá ver las existencias de cada paquete desglosadas por bodega.

### Ver detalle de existencias de un paquete

Al hacer clic sobre un paquete en la vista de existencias, podrá ver:

- El desglose de componentes del paquete.
- Las existencias disponibles de cada componente.
- Cuántas unidades del paquete se pueden armar con el stock actual.

### Exportar existencias de paquetes

1. Ir a "Inventarios".
2. Seleccionar "Existencias de paquetes".
3. Seleccionar "Exportar".

Esto descargará un archivo XLS con las existencias de todos los paquetes por bodega.

## API (llamadas desde sistemas externos)

### Obtener todos los paquetes
Devuelve la lista de paquetes (bundles). Puede filtrar por etiqueta usando el parámetro `tag`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles.json
```

### Obtener el detalle de un paquete
Devuelve los datos del paquete, sus componentes (bundle_details) y los formularios asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/1.json
```

### Crear un paquete
Crea un nuevo paquete con sus componentes y cantidades.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle": {
      "code": "COMBO-1",
      "name": "Combo Oficina",
      "description": "Paquete de útiles",
      "bundle_details_attributes": {
        "0": { "item_id": "2", "quantity": "2" },
        "1": { "item_id": "3", "quantity": "1" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles.json
```

### Actualizar un paquete
Actualiza los datos y componentes de un paquete existente.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "bundle": {
      "name": "Combo Oficina actualizado",
      "bundle_details_attributes": {
        "0": { "id": "1", "quantity": "3" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles/1.json
```

### Eliminar un paquete
Elimina un paquete. Solo es posible si no tiene movimientos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/bundles/1.json
```

### Consultar ítems dinámicos con stock de un paquete
Para paquetes dinámicos (por categoría), devuelve los ítems de la categoría que tienen stock disponible en una bodega específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/get_dynamic_items_with_stock.json?agency_id=1&bundle_id=2
```

### Obtener el detalle de existencias de un paquete
Devuelve los datos del paquete junto con las métricas de existencias (disponible, entrante, saliente) calculadas para la bodega indicada.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundle_stocks/1.json?warehouse=1
```

### Obtener las existencias de un paquete en todas las bodegas
Devuelve un hash con las existencias disponibles del paquete desglosadas por bodega.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundle_stocks/all_warehouses.json
```

### Importar paquetes
Importa paquetes desde un archivo. El cuerpo de la petición debe incluir el archivo a importar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle_import": {
      "file": "archivo_de_importacion.xlsx"
    }
  }' \
  https://app.zauru.com/inventories/bundles/bundle_imports.json
```
