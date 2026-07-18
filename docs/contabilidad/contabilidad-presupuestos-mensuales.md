---
title: "Presupuestos mensuales"
sidebar_label: "Presupuestos mensuales"
sidebar_position: 21
---

Este tutorial esta enfocado en la gestion completa de presupuestos en Zauru. Existen tres tipos de presupuestos que permiten controlar los gastos e ingresos desde diferentes enfoques.

## Tipos de presupuestos

Zauru ofrece tres tipos de presupuestos:

1. **Presupuesto mensual normal**: presupuesta montos por cuenta contable o grupo de cuenta para un mes especifico.
2. **Presupuesto por etiqueta (tag)**: presupuesta montos por cuenta contable filtrando por una etiqueta especifica.
3. **Presupuesto por categoria de etiqueta**: presupuesta montos por etiquetas dentro de una categoria de etiquetas, permitiendo visualizacion jerarquica.

## Presupuesto mensual normal

Cuando usted hace un presupuesto, detalla la cantidad que deberia gastar por cada rubro contable. Si usted pasa su presupuesto, le aparecera en rojo el rubro en los detalles del presupuesto.

### Crear un presupuesto mensual

Los pasos para crear un presupuesto mensual son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Presupuestos".

![Listado de presupuestos mensuales en Zauru](/img/contabilidad/contabilidad-presupuestos-mensuales-1.png)

3. Seleccionar la pestana "Mensuales".
4. Seleccionar "Nuevo Presupuesto".

![Formulario de nuevo presupuesto mensual](/img/contabilidad/contabilidad-presupuestos-mensuales-2.png)

### Campos del presupuesto

- **Es ingreso**: active esta opcion si es un presupuesto de ingresos. Por defecto es un presupuesto de gastos.
- **Mes y ano**: periodo que cubre el presupuesto.
- **Referencia**: texto opcional para identificar el presupuesto.
- **Extras**: monto adicional para imprevistos o margen (afecta el total pero no se distribuye en cuentas).
- **Detalle del presupuesto**: para cada rubro especifica:
  - **Cuenta**: cuenta contable individual, o grupo de cuenta (para agrupar varias cuentas).
  - **Monto**: cantidad presupuestada para ese rubro.
  - **Monto dinamico**: opcionalmente, en lugar de un monto fijo, puede configurar que el monto se calcule como porcentaje de lo ejecutado en otra cuenta o grupo de cuenta. Especifique:
    - Cuenta o grupo de cuenta de referencia.
    - Porcentaje a aplicar sobre el monto ejecutado en esa cuenta.

### Agregar mas rubros

Use los botones "+" para agregar un rubro adicional, "+2" para agregar dos rubros a la vez, o "+5" para agregar cinco.

### Ver el presupuesto ejecutado

Al ver el detalle de un presupuesto, el sistema muestra:

![Detalle de un presupuesto mensual con ejecutado vs presupuestado](/img/contabilidad/contabilidad-presupuestos-mensuales-3.png)

- **Agrupado**: cuentas que estan en el presupuesto, comparando el monto presupuestado vs. el monto ejecutado (gastos reales del mes).
- **No agrupado**: gastos o ingresos del mes en cuentas que no estan incluidas en el presupuesto.
- **Extras**: monto de imprevistos configurado.
- **Total presupuestado**: suma de todos los rubros mas extras.
- **Total ejecutado**: suma de todos los gastos/ingresos reales del mes.

Si el monto ejecutado supera al presupuestado, el rubro se muestra en rojo.

### Vista agrupada

La vista "Agrupado" muestra el presupuesto consolidado por grupo de cuenta, comparando ejecutado vs. presupuestado a nivel de grupo.

### Vista no agrupada (otros)

La vista "Otros" muestra unicamente los gastos o ingresos que ocurrieron en el mes pero que no fueron incluidos en ninguna linea del presupuesto.

### Duplicar un presupuesto

Para copiar un presupuesto al mes siguiente:

1. En el listado de presupuestos, ubique el presupuesto que desea duplicar.
2. Haga clic en "Duplicar".

El sistema creara una copia exacta del presupuesto en el mes siguiente disponible (sin presupuesto existente) para el mismo tipo (ingreso o gasto). Esto es especialmente util para presupuestos que se mantienen similares mes a mes.

## Presupuesto por etiqueta (Tagged Budget)

Los presupuestos por etiqueta permiten controlar gastos o ingresos asociados a una etiqueta especifica. Por ejemplo, si etiqueta todas las transacciones de un proyecto con el tag "Proyecto Alfa", puede crear un presupuesto que solo considere las transacciones con esa etiqueta.

### Crear un presupuesto por etiqueta

1. Ir a "Contabilidad".
2. Seleccionar "Presupuestos".
3. Seleccionar la pestana "Por Etiqueta".
4. Hacer clic en "Nuevo Presupuesto por Etiqueta".

![Formulario de nuevo presupuesto por etiqueta](/img/contabilidad/contabilidad-presupuestos-mensuales-6.png)

Los campos son similares al presupuesto mensual normal, pero en lugar de mes y ano, debe seleccionar:
- **Etiqueta**: el tag cuyas transacciones se presupuestan (cada etiqueta solo puede tener un presupuesto).

El presupuesto por etiqueta no esta limitado a un mes especifico; compara lo acumulado historico de esa etiqueta contra lo presupuestado.

### Vistas disponibles

- **Ejecutado**: comparacion de ejecutado vs. presupuestado por cuenta individual.
- **Agrupado**: comparacion por grupo de cuenta.
- **Otros**: gastos o ingresos etiquetados que no estan en el presupuesto.

## Presupuesto por categoria de etiqueta (Tag Category Budget)

Este tipo de presupuesto es el mas avanzado. Permite presupuestar por categoria de etiquetas, lo que abarca todas las etiquetas que pertenecen a esa categoria y sus subcategorias.

Por ejemplo, si tiene una categoria "Proyectos" con etiquetas "Proyecto A", "Proyecto B" y una subcategoria "Proyectos Externos" con etiquetas "Cliente X", "Cliente Y", el presupuesto por categoria abarcara todas estas etiquetas.

### Crear un presupuesto por categoria de etiqueta

1. Ir a "Contabilidad".
2. Seleccionar "Presupuestos".
3. Seleccionar la pestana "Por Categoria de Etiqueta".
4. Hacer clic en "Nuevo Presupuesto por Categoria".

![Formulario de nuevo presupuesto por categoria de etiqueta](/img/contabilidad/contabilidad-presupuestos-mensuales-7.png)

### Campos

- **Es ingreso**: si es presupuesto de ingresos o gastos.
- **Categoria de etiqueta**: la categoria de etiquetas a presupuestar.
- **Extras**: monto adicional para imprevistos.
- **Detalle**: cada linea del presupuesto puede ser:
  - Una etiqueta especifica (tag) con su monto.
  - Una subcategoria de etiquetas con su monto (abarca todas las etiquetas dentro de esa subcategoria).

### Grafico de arbol jerarquico

La vista de detalle del presupuesto por categoria incluye un grafico de arbol interactivo que muestra:
- La jerarquia de categorias y etiquetas.
- Para cada nodo: el monto presupuestado y el monto ejecutado.
- Navegacion por la jerarquia haciendo clic en cada nodo.

Este grafico permite visualizar rapidamente que areas estan dentro o fuera de presupuesto en toda la jerarquia de etiquetas.

### Vistas disponibles

- **Ejecutado**: muestra la ejecucion por cada etiqueta y subcategoria.
- **Otros**: etiquetas con movimientos que no fueron incluidas en el presupuesto.

## API (llamadas desde sistemas externos)

### Consultar listado de presupuestos mensuales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets.json
```

### Obtener detalle de un presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/1.json
```

### Ver el presupuesto mensual agrupado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/1/show_grouped.json
```

### Ver los gastos no presupuestados (otros)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/1/show_others.json
```

### Obtener el formulario de nuevo presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/new.json
```

### Obtener el formulario de edicion de un presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/1/edit.json
```

### Crear un presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "budget": {
      "income": false,
      "month": 9,
      "year": 2018,
      "reference": "Presupuesto de gastos",
      "extras": "100.0",
      "budget_details_attributes": {
        "0": {
          "account_id": 3,
          "amount": "500.0"
        }
      }
    }
  }' \
  https://app.zauru.com/accounting/budgets.json
```

### Actualizar un presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "budget": {
      "reference": "Presupuesto actualizado",
      "extras": "200.0"
    }
  }' \
  https://app.zauru.com/accounting/budgets/1.json
```

### Borrar un presupuesto mensual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/budgets/1.json
```

## API de presupuestos por etiqueta (llamadas desde sistemas externos)

### Consultar listado de presupuestos por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets.json
```

### Obtener detalle de un presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

### Ver el presupuesto por etiqueta agrupado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1/show_grouped.json
```

### Ver los gastos no presupuestados por etiqueta (otros)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1/show_others.json
```

### Obtener el formulario de nuevo presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/new.json
```

### Obtener el formulario de edicion de un presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1/edit.json
```

### Crear un presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "tagged_budget": {
      "income": false,
      "reference": "Presupuesto Proyecto Alfa",
      "extras": "0.0",
      "tag_id": 1,
      "tag_budget_details_attributes": {
        "0": {
          "account_id": 3,
          "amount": "500.0"
        }
      }
    }
  }' \
  https://app.zauru.com/accounting/budgets/tagged_budgets.json
```

### Actualizar un presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "tagged_budget": {
      "reference": "Presupuesto actualizado"
    }
  }' \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

### Borrar un presupuesto por etiqueta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/budgets/tagged_budgets/1.json
```

## API de presupuestos por categoria de etiqueta (llamadas desde sistemas externos)

### Obtener los datos del grafico jerarquico de un presupuesto por categoria
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/budgets/tag_category_budgets/1/get_graph_data.json
```
