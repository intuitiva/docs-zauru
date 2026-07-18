---
title: "Listas de Materiales"
sidebar_label: "Listas de Materiales"
sidebar_position: 2
---

Una lista de materiales (Bill of Materials o BOM) es la receta o formula que define que materias primas se necesitan para fabricar un producto, en que cantidades y desde que bodegas se consumiran. Tambien permite definir los subproductos que se espera obtener durante el proceso de manufactura.

## Crear una lista de materiales

Los pasos para crear una lista de materiales son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Listas de Materiales"**.
3. Seleccionar **"Nueva Lista de Materiales"**.

![imagen1](/img/produccion/listas-de-materiales-1.png)

Le aparecera el formulario para crear una nueva lista de materiales. Los campos que debe llenar son los siguientes:

a. **Item Manufacturable**: Seleccione el producto que se va a fabricar con esta lista de materiales. Puede buscarlo por nombre o codigo en la lista desplegable de items agrupados por categoria.

b. **Bodega por Defecto para Producto Terminado**: Seleccione la bodega donde se recibira el producto terminado al cerrar una orden de produccion que utilice esta lista de materiales.

c. **Detalles (Materias Primas)**: Agregue las materias primas necesarias para fabricar el producto. Por cada materia prima debe especificar:
   - **Item**: El item de inventario que se consumira como materia prima.
   - **Cantidad**: La cantidad requerida del item para producir una unidad del producto terminado.
   - **Bodega**: La bodega fisica desde donde se tomara la materia prima.

   Para agregar mas lineas de detalle, presione el boton **"+"**, **"+2"** o **"+5"** segun la cantidad de filas que desee agregar.

d. **Subproductos**: Si su proceso de manufactura genera subproductos, puede definirlos en esta seccion. Por cada subproducto debe especificar:
   - **Item**: El item que se generara como subproducto.
   - **Cantidad Esperada**: La cantidad que se espera obtener del subproducto por cada unidad de producto terminado.
   - **Bodega**: La bodega donde se recibira el subproducto.

   Al igual que con las materias primas, use los botones **"+"**, **"+2"** o **"+5"** para agregar filas de subproductos.

![imagen2](/img/produccion/listas-de-materiales-1.png)

Cuando haya completado todos los campos, presione **"Crear Lista de Materiales"**.

Le aparecera un mensaje de exito notificandole que la lista de materiales fue creada exitosamente.

![imagen3](/img/produccion/listas-de-materiales-3.png)

## Editar una lista de materiales

Para editar una lista de materiales existente:

1. Ir a **"Produccion"**.
2. Seleccionar **"Listas de Materiales"**.
3. Seleccione la lista de materiales que desea editar de la lista.
4. Presione el boton **"Editar"**.

![imagen4](/img/produccion/listas-de-materiales-4.png)

Realice los cambios necesarios en los campos y lineas de detalle. Puede:
- Modificar las cantidades de las materias primas existentes.
- Agregar nuevas materias primas con los botones **"+"**, **"+2"** o **"+5"**.
- Eliminar materias primas existentes marcando la casilla de eliminacion en la fila correspondiente.
- Agregar o modificar subproductos.

Cuando termine, presione **"Actualizar Lista de Materiales"**.

Le aparecera un mensaje de exito notificandole que la lista de materiales fue actualizada.

## Eliminar una lista de materiales

Solo puede eliminar una lista de materiales que no tenga ordenes de produccion asociadas. Para eliminarla:

1. Ir a **"Produccion"**.
2. Seleccionar **"Listas de Materiales"**.
3. Seleccione la lista de materiales que desea eliminar.
4. Presione el boton **"Eliminar"**.

Confirme la eliminacion cuando se le solicite. Le aparecera un mensaje de exito confirmando la eliminacion.

## Vista previa de la lista de materiales

Mientras esta creando o editando una lista de materiales, puede presionar **"Previsualizar"** para ver como quedara la lista antes de guardarla. Esto es util para revisar que todas las cantidades y asignaciones sean correctas.

## API (llamadas desde sistemas externos)

### Obtener listado de listas de materiales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/bill_of_materials.json
```

### Obtener datos para una nueva lista de materiales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/bill_of_materials/new.json
```

### Crear una lista de materiales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "production_bill_of_material": {
      "item_id": 1,
      "default_agency_id": 1,
      "description": "Lista de materiales para producto X",
      "expected_duration_in_seconds": 3600,
      "bill_of_material_details_attributes": [
        {
          "item_id": 2,
          "quantity": 3,
          "description": "Materia prima A"
        },
        {
          "item_id": 3,
          "quantity": 1.5,
          "description": "Materia prima B"
        }
      ],
      "bill_of_material_subproducts_attributes": [
        {
          "item_id": 4,
          "expected_quantity": 0.5,
          "reference": "Subproducto Y"
        }
      ]
    }
  }' \
  https://app.zauru.com/production/bill_of_materials.json
```

Los campos disponibles para crear una lista de materiales son:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `item_id` | entero | ID del item manufacturable que se va a fabricar. |
| `default_agency_id` | entero | ID de la bodega donde se recibira el producto terminado. |
| `description` | texto | Descripcion de la lista de materiales. |
| `expected_duration_in_seconds` | entero | Duracion estimada del proceso de produccion en segundos. |
| `active` | booleano | Indica si la lista de materiales esta activa. |

Para las materias primas (`bill_of_material_details_attributes`):

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `item_id` | entero | ID del item de inventario que se consumira como materia prima. |
| `quantity` | decimal | Cantidad requerida por unidad de producto terminado. |
| `description` | texto | Descripcion del detalle. |
| `_destroy` | booleano | Marcar como `true` para eliminar el detalle (solo al editar). |

Para los subproductos (`bill_of_material_subproducts_attributes`):

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `item_id` | entero | ID del item que se generara como subproducto. |
| `expected_quantity` | decimal | Cantidad esperada por unidad de producto terminado. |
| `reference` | texto | Referencia del subproducto. |
| `_destroy` | booleano | Marcar como `true` para eliminar el subproducto (solo al editar). |

### Ver una lista de materiales

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/production/bill_of_materials/1.json
```

### Actualizar una lista de materiales

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "production_bill_of_material": {
      "description": "Lista de materiales actualizada",
      "expected_duration_in_seconds": 4200,
      "bill_of_material_details_attributes": {
        "0": {
          "id": "10",
          "item_id": 2,
          "quantity": 4,
          "description": "Materia prima A actualizada"
        }
      }
    }
  }' \
  https://app.zauru.com/production/bill_of_materials/1.json
```

### Eliminar una lista de materiales

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/production/bill_of_materials/1.json
```
