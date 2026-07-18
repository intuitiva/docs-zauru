---
title: "Centro de Costos"
sidebar_label: "Centro de Costos"
sidebar_position: 5
---

Este tutorial explica como gestionar el centro de costos en Zauru. Los centros de costo permiten clasificar y asignar transacciones contables a proyectos, departamentos, sucursales o cualquier unidad de negocio que necesite seguimiento independiente.

## Categorias de centro de costos

Las categorias de centro de costos agrupan centros de costo similares. Por ejemplo, puede tener categorias como "Proyectos", "Departamentos", "Sucursales", "Vehiculos", etc.

![Categorías de centro de costos](/img/contabilidad/centro-de-costos-1.png)

### Crear una categoria de centro de costos

1. Ir a "Contabilidad".
2. Seleccionar "Centro de Costos".
3. Ir a la pestana "Categorias".
4. Hacer clic en "Nueva Categoria".

![Formulario de nueva categoría de centro de costos](/img/contabilidad/centro-de-costos-2.png)

Los campos a completar son:

- **Codigo**: codigo identificador de la categoria.
- **Nombre**: nombre descriptivo de la categoria.
- **Descripcion**: descripcion opcional de la categoria.
- **Activo**: indica si la categoria esta activa para uso.

### Editar y eliminar categorias

Desde el listado de categorias puede editar o eliminar cualquier categoria existente. Las categorias se pueden filtrar y buscar por nombre, codigo o descripcion.

## Centros de costo

Los centros de costo son las unidades especificas a las que se asignan las transacciones.

![Listado de centros de costo](/img/contabilidad/centro-de-costos-3.png)

### Crear un centro de costo

1. Ir a "Contabilidad".
2. Seleccionar "Centro de Costos".
3. Hacer clic en "Nuevo Centro de Costo".

![Formulario de nuevo centro de costo](/img/contabilidad/centro-de-costos-4.png)

Los campos a completar son:

- **Codigo**: codigo identificador del centro de costo.
- **Nombre**: nombre descriptivo (ej. "Proyecto A", "Sucursal Norte", "Departamento de Ventas").
- **Categoria de centro de costo**: categoria a la que pertenece.
- **Descripcion**: descripcion opcional.
- **Activo**: indica si esta activo para uso.

## Uso de centro de costos en transacciones

Al crear o editar una transaccion contable, puede asignarle un centro de costo. Esto permite:

1. Clasificar cada gasto o ingreso segun el proyecto o departamento que lo origino.
2. Generar reportes filtrados por centro de costo.
3. Controlar presupuestos por centro de costo.

## Prioridad de asignacion automatica

En las configuraciones de contabilidad puede establecer la prioridad de asignacion automatica de centro de costos para ventas y compras. Ver el tutorial de [Configuraciones](configuraciones) para mas detalle.

## Busqueda y filtrado

Tanto las categorias como los centros de costo pueden buscarse por:
- Codigo
- Nombre
- Descripcion
- Categoria (en el caso de centros de costo)

## API (llamadas desde sistemas externos)

### Consultar listado de centros de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_centers.json
```

### Obtener detalle de un centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_centers/1.json
```

### Obtener el formulario de nuevo centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_centers/new.json
```

### Crear un centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "accounting_cost_center": {
      "code": "PROY-A",
      "name": "Proyecto A",
      "cost_center_category_id": 1,
      "description": "Centro de costo del Proyecto A",
      "active": true
    }
  }' \
  https://app.zauru.com/accounting/cost_centers.json
```

### Actualizar un centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "accounting_cost_center": {
      "name": "Proyecto A Actualizado",
      "active": true
    }
  }' \
  https://app.zauru.com/accounting/cost_centers/1.json
```

### Borrar un centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/cost_centers/1.json
```

### Consultar listado de categorias de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_center_categories.json
```

### Obtener detalle de una categoria de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_center_categories/1.json
```

### Obtener el formulario de nueva categoria de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/cost_center_categories/new.json
```

### Crear una categoria de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "accounting_cost_center_category": {
      "code": "PROY",
      "name": "Proyectos",
      "description": "Categoria para proyectos",
      "active": true
    }
  }' \
  https://app.zauru.com/accounting/cost_center_categories.json
```

### Actualizar una categoria de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "accounting_cost_center_category": {
      "name": "Proyectos Actualizado"
    }
  }' \
  https://app.zauru.com/accounting/cost_center_categories/1.json
```

### Borrar una categoria de centro de costo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/cost_center_categories/1.json
```
