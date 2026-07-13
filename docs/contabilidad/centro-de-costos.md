---
title: "Centro de Costos"
sidebar_label: "Centro de Costos"
sidebar_position: 5
---

Este tutorial explica como gestionar el centro de costos en Zauru. Los centros de costo permiten clasificar y asignar transacciones contables a proyectos, departamentos, sucursales o cualquier unidad de negocio que necesite seguimiento independiente.

## Categorias de centro de costos

Las categorias de centro de costos agrupan centros de costo similares. Por ejemplo, puede tener categorias como "Proyectos", "Departamentos", "Sucursales", "Vehiculos", etc.

### Crear una categoria de centro de costos

1. Ir a "Contabilidad".
2. Seleccionar "Centro de Costos".
3. Ir a la pestana "Categorias".
4. Hacer clic en "Nueva Categoria".

Los campos a completar son:

- **Codigo**: codigo identificador de la categoria.
- **Nombre**: nombre descriptivo de la categoria.
- **Descripcion**: descripcion opcional de la categoria.
- **Activo**: indica si la categoria esta activa para uso.

### Editar y eliminar categorias

Desde el listado de categorias puede editar o eliminar cualquier categoria existente. Las categorias se pueden filtrar y buscar por nombre, codigo o descripcion.

## Centros de costo

Los centros de costo son las unidades especificas a las que se asignan las transacciones.

### Crear un centro de costo

1. Ir a "Contabilidad".
2. Seleccionar "Centro de Costos".
3. Hacer clic en "Nuevo Centro de Costo".

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
