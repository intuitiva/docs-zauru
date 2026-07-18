---
title: "Proyectos"
sidebar_label: "Proyectos"
sidebar_position: 9
---

Zauru le permite organizar sus productos, clientes y proveedores mediante un sistema jerárquico de proyectos. Las proyectos se agrupan en Categorías de proyectos que pueden tener una estructura padre-hijo, permitiendo una organización arbórea de su información. Además, Zauru ofrece una visualización gráfica de la jerarquía de categorías de proyectos.

## Categorías de proyectos

Las Categorías de proyectos son contenedores que agrupan proyectos relacionadas y pueden tener subcategorías, formando una jerarquía. Los pasos para crear una nueva Categoría de proyecto son:

1. Ir a "Configuraciones".
2. Seleccionar "proyectos".
3. Seleccionar la pestaña "Categorías de proyectos".
4. Seleccionar "Nueva Categoría de proyecto".

![imagen1](/img/primeros-pasos/proyectos-1.png)

Le deberán aparecer las opciones para crear una nueva categoría de proyecto:

a. Si quita el cheque en este recuadro la categoría no estará Activa.

b. Seleccione una categoría de proyecto padre si desea que esta categoría sea una subcategoría de otra ya existente.

c. Coloque el nombre de la categoría de proyecto.

d. Puede agregar una descripción de la categoría.

e. Puede adjuntar una imagen a la categoría.

f. Puede adjuntar un archivo PDF a la categoría.

Para guardar los cambios presione "Crear Categoría de proyecto".

![imagen2](/img/primeros-pasos/proyectos-2.png)

Le deberá aparecer un mensaje de éxito en la pantalla indicándole que la categoría de proyecto se creó exitosamente.

![imagen3](/img/primeros-pasos/proyectos-3.png)

### Duplicar una Categoría de proyecto

Zauru le permite duplicar una categoría de proyecto existente, incluyendo todas sus subcategorías hijas. La forma de duplicar una categoría de proyecto es:

1. Ir a "Configuraciones".
2. Seleccionar "proyectos".
3. Seleccionar la pestaña "Categorías de proyectos".
4. Hacer click en "Duplicar" sobre la categoría que desea duplicar.

![imagen4](/img/primeros-pasos/proyectos-4.png)

Zauru creará una copia de la categoría con el sufijo "copia" y todas sus subcategorías hijas serán duplicadas también.

### Gráfico de Jerarquía de Categorías de proyectos

Zauru le permite visualizar la jerarquía completa de sus categorías de proyectos mediante un gráfico interactivo. Para acceder al gráfico:

1. Ir a "Configuraciones".
2. Seleccionar "Proyectos".
3. Seleccionar la pestaña "Categorías de Proyectos".
4. Hacer click en "Gráfico" sobre la categoría raíz que desea visualizar.

![imagen5](/img/primeros-pasos/proyectos-5.png)

El gráfico mostrará la estructura jerárquica completa: categorías padre, subcategorías y las proyectos contenidas en cada categoría.

## Proyectos

Las proyectos son marcadores que puede asignar a sus productos y beneficiarios para organizarlos y filtrarlos. Cada proyecto pertenece a una Categoría de Proyecto. Los pasos para crear una nueva proyecto son:

1. Ir a "Configuraciones".
2. Seleccionar "Proyectos".
3. Seleccionar la pestaña "Proyectos".
4. Seleccionar "Nueva Proyecto".

![imagen6](/img/primeros-pasos/proyectos-6.png)

Le deberán aparecer las opciones para crear una nueva proyecto:

a. Si quita el cheque en este recuadro, el proyecto no estará Activa.

b. Seleccione la categoría de proyecto a la que pertenecerá esta proyecto.

c. Coloque el nombre del proyecto.

d. Puede agregar una descripción del proyecto.

e. Puede adjuntar una imagen al proyecto.

f. Puede adjuntar un archivo PDF al proyecto.

Para guardar los cambios presione "Crear Proyecto".

![imagen7](/img/primeros-pasos/proyectos-7.png)

Le deberá aparecer un mensaje de éxito en la pantalla indicándole que la proyecto se creó exitosamente.

![imagen8](/img/primeros-pasos/proyectos-8.png)

### Filtrar por proyectos

Una vez que haya asignado proyectos a sus productos o beneficiarios, podrá filtrarlos por proyecto desde sus respectivos listados. En el módulo de Ítems y en el módulo de Beneficiarios aparecerá una nube de proyectos que le permitirá filtrar rápidamente los registros que tengan un proyecto específico.

## API (llamadas desde sistemas externos)

### Obtener listado de proyectos activos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags.json
```

### Obtener listado de categorías de proyectos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tag_categories.json
```

### Obtener detalles de un proyecto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/1.json
```

### Obtener detalles de una categoría de proyecto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tag_categories/1.json
```

### Crear proyecto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag": {
      "name": "proyecto de prueba",
      "tag_category_id": "1",
      "active": true,
      "description": "Descripción de la proyecto"
    }
  }' \
  https://app.zauru.com/settings/tags.json
```

### Crear categoría de proyecto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag_category": {
      "name": "Categoría de prueba",
      "parent_tag_category_id": "",
      "active": true,
      "description": "Descripción de la categoría"
    }
  }' \
  https://app.zauru.com/settings/tag_categories.json
```
