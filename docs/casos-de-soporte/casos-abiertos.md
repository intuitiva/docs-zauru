---
title: "Casos Abiertos (Listado y Filtros)"
sidebar_label: "Casos Abiertos"
sidebar_position: 1
---

Este tutorial esta enfocado en como navegar y filtrar el listado de casos abiertos.

Los pasos para ver los casos abiertos son los siguientes:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.

Le aparecera el listado de todos los casos que aun no han sido cerrados. En este listado podra ver:

- **ID** del caso (numero consecutivo)
- **Referencia** del caso
- **Fecha** de creacion
- **Numero de Serie** asociado (si aplica)
- **Sintoma** reportado
- **Responsable** asignado
- **Cliente**

![imagen1](/img/casos-de-soporte/casos-abiertos-1.png)

## Filtros Disponibles

El listado de casos abiertos permite aplicar varios filtros para encontrar casos especificos:

### Filtro por Rango de Fechas

En la parte superior derecha del listado puede seleccionar un rango de fechas usando los campos **"Desde"** y **"Hasta"** para filtrar los casos creados en ese periodo.

### Filtro por Responsable

Puede filtrar los casos por el agente de soporte responsable. Para ello seleccione un empleado del listado desplegable de responsables disponibles. Solo apareceran los empleados que tengan al menos un caso abierto asignado.

### Filtro por Etiquetas (Tags)

En la barra lateral izquierda encontrara una nube de etiquetas que le permite filtrar los casos abiertos por las etiquetas que tengan asignadas. Al hacer click en una etiqueta, el listado se filtrara para mostrar solo los casos con esa etiqueta. El tamano de la etiqueta indica la cantidad de casos asociados.

Las etiquetas estan agrupadas por categoria para facilitar su localizacion.

### Busqueda por ID de Caso

Puede buscar un caso especifico por su numero de ID en el campo de busqueda general.

## Opciones en el Listado

Para cada caso en el listado, tiene disponibles las siguientes acciones:

- **Verificar** (icono de ojo): Abre la pagina de detalles del caso.
- **Editar** (icono de lapiz): Permite modificar los datos del caso.
- **Eliminar** (icono de basurero): Borra el caso (solo si no tiene facturas emitidas).
- **Cerrar Caso** (icono de check): Cierra el caso y lo mueve a Casos Cerrados.

## API (llamadas desde sistemas externos)

### solicitar listado de casos abiertos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/support/cases/datatables.json
```

`length` es cuantos casos desea mostrar
`order["0"]["column"]` es por que columna quiero ordenar
`order["0"]["dir"]` es la direccion del orden en la columna seleccionada
`search["value"]` es el filtro que vamos a usar en los resultados

### Filtrar por rango de fechas

Puede agregar los parametros `From` y `To` con formato `YYYY-MM-DD` para filtrar por rango de fechas:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    },
    "From": "2024-01-01",
    "To": "2024-12-31"
  }' \
  https://app.zauru.com/support/cases/datatables.json
```

### Filtrar por responsable

Agregue el parametro `res` con el ID del empleado responsable:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    },
    "res": "5"
  }' \
  https://app.zauru.com/support/cases/datatables.json
```

### Filtrar por etiqueta (tag)

Agregue el parametro `tag` con el ID de la etiqueta:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    },
    "tag": "3"
  }' \
  https://app.zauru.com/support/cases/datatables.json
```

esto devolveria un JSON similar a este:

```json
{
  "draw":0,
  "recordsTotal":83,
  "recordsFiltered":83,
  "data":[
    {
      "zid":"<a href=\"/support/cases/1\">1</a>",
      "cn":"caso # 1",
      "ref":"referencia",
      "dte":"07 de ene de 2019",
      "srl":"# de serie",
      "sym":"sintoma observado",
      "res":"responsable@zauru.com",
      "cli":"<a href=\"/sales/clients/1\">Cliente con Queja</a>",
      "ra":"<a href=\"/support/cases/1\" title=\"Detalles\"><i class=\"fa fa-eye\"></i></a><a href=\"/support/cases/1/edit\" title=\"Editar\"><i class=\"fa fa-edit\"></i></a><a href=\"/support/cases/1?destroy=true\" data-confirm=\"\u00bfEsta seguro de destruirlo?\" data-method=\"delete\" rel=\"nofollow\" title=\"Destruirlo\"><i class=\"fa fa-trash-o\"></i></a>",
      "ra2":"<a href=\"/support/cases/1/close\" title=\"Cerrar Caso\"><i class=\"fa fa-check-square-o\"></i></a>",
      "DT_RowId":"support-case-1"
    }
  ]
}
```
