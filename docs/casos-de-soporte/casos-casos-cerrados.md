---
title: "Casos Cerrados"
sidebar_label: "Casos Cerrados"
sidebar_position: 11
---

Este tutorial esta enfocado en como consultar y gestionar los casos que ya han sido cerrados.

## Ver Casos Cerrados

Los pasos para ver los casos cerrados son:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Cerrados"**.

Le aparecera el listado de todos los casos que ya fueron cerrados. El listado muestra las mismas columnas que los casos abiertos:

- **ID** del caso
- **Referencia** del caso
- **Fecha** de creacion
- **Fecha de cierre**
- **Numero de Serie** asociado (si aplica)
- **Sintoma** reportado
- **Responsable** asignado
- **Cliente**

![imagen1](/img/casos-de-soporte/casos-casos-cerrados-1.png)

## Filtros Disponibles

Al igual que en los casos abiertos, puede aplicar filtros:

### Filtro por Rango de Fechas

Use los campos **"Desde"** y **"Hasta"** para filtrar por la fecha de creacion del caso.

### Filtro por Responsable

Seleccione un responsable del listado desplegable. Solo apareceran empleados que tengan al menos un caso cerrado asignado.

### Filtro por Etiquetas (Tags)

Use la nube de etiquetas en la barra lateral para filtrar los casos cerrados por etiqueta.

### Busqueda por ID de Caso

Busque un caso especifico por su numero de ID.

## Opciones en el Listado

Para cada caso cerrado, tiene disponibles las siguientes acciones:

- **Verificar** (icono de ojo): Abre la pagina de detalles del caso.
- **Eliminar** (icono de basurero): Borra el caso cerrado (con las mismas consideraciones que un caso abierto).

## Ver Detalles de un Caso Cerrado

Al hacer click en **"Verificar"**, vera la misma pagina de detalles que en un caso abierto, con toda la informacion del caso: suministros, horas de agentes, facturas, ordenes de compra, bitacora y formularios.

## API (llamadas desde sistemas externos)

### solicitar listado de casos cerrados

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
  https://app.zauru.com/support/closed_cases/datatables.json
```

`length` es cuantos casos desea mostrar
`order["0"]["column"]` es por que columna quiero ordenar (columnas incluyen: `cases.zid`, `cases.id_number`, `cases.reference`, `date`, `closed_at`, `serials.name`, `symptom`, `responsible_id`, `payees.name`)
`order["0"]["dir"]` es la direccion del orden en la columna seleccionada
`search["value"]` es el filtro que vamos a usar en los resultados

### Filtrar por rango de fechas

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
  https://app.zauru.com/support/closed_cases/datatables.json
```

### obtener detalles de un caso cerrado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/closed_cases/1.json
```

La respuesta incluye la misma estructura que la del endpoint `/support/cases/1.json`, con cliente, facturas, ordenes de compra, etiquetas, horas de agentes, suministros y formularios.
