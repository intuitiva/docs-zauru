---
title: "Etiquetas (Tags)"
sidebar_label: "Etiquetas (Tags)"
sidebar_position: 13
---

Las etiquetas en Zauru le permiten categorizar y filtrar diferentes elementos del sistema como ítems, beneficiarios, envíos, entre otros. Las etiquetas se pueden organizar en categorías de etiquetas y pueden tener una estructura jerárquica.

## Categoría de Etiquetas

Las categorías de etiquetas le permiten agrupar etiquetas relacionadas. Las categorías pueden tener categorías padre, formando una estructura de árbol.

Los pasos para crear una nueva categoría de etiqueta son:

1. Ir a "Configuraciones".
2. Seleccionar "Etiquetas".

![Listado de etiquetas y categorías en Configuraciones > Etiquetas](/img/primeros-pasos/etiquetas-1.png)

3. Seleccionar la pestaña "Categoría de Etiquetas".

![Pestaña de categorías de etiquetas y botón nueva categoría](/img/primeros-pasos/etiquetas-1.png)

4. Seleccionar "Nueva Categoría de Etiqueta".

![Formulario de nueva categoría de etiqueta](/img/primeros-pasos/etiquetas-3.png)

## Nueva Etiqueta

Los pasos para crear una nueva etiqueta son:

1. Ir a "Configuraciones".
2. Seleccionar "Etiquetas".
3. Seleccionar "Nueva Etiqueta".

![Formulario de nueva etiqueta](/img/primeros-pasos/etiquetas-4.png)

4. Colocar el nombre de la etiqueta.
5. Seleccionar la categoría a la que pertenece (opcional).
6. Presionar "Crear Etiqueta".

## Grafo de Categorías de Etiquetas

Zauru le permite visualizar la estructura jerárquica de sus categorías de etiquetas y las etiquetas contenidas en ellas por medio de un grafo interactivo. Este grafo le muestra de forma visual cómo se organizan sus etiquetas y categorías.

## API (llamadas desde sistemas externos)

### Obtener listado de etiquetas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags.json
```

### Obtener detalle de una etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/1.json
```

### Crear etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag": {
      "name": "VIP",
      "tag_category_id": "1",
      "active": true
    }
  }' \
  https://app.zauru.com/settings/tags.json
```

### Actualizar etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tag": {
      "name": "Cliente VIP"
    }
  }' \
  https://app.zauru.com/settings/tags/1.json
```

### Eliminar etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/tags/1.json
```

### API de Categorías de Etiquetas

#### Obtener listado de categorías de etiquetas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories.json
```

#### Obtener detalle de una categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

#### Crear categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tag_category": {
      "name": "Categoría de Clientes",
      "description": "Etiquetas para clasificar clientes",
      "active": true
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories.json
```

#### Actualizar categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tag_category": {
      "name": "Categoría de Clientes VIP"
    }
  }' \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

#### Eliminar categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/tags/tag_categories/1.json
```

#### Obtener datos del grafo de una categoría de etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/tags/tag_categories/1/get_graph_data.json
```
