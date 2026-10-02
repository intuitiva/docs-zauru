---
title: "Destajos pagados"
sidebar_label: "Destajos pagados"
sidebar_position: 4
---

Los destajos pagados son los que ya fueron incluidos en una corrida de nómina marcada como pagada. Pasan a este listado como historial y son de solo lectura.

Para acceder a los destajos pagados:

1. Ir a **"Nominas"**.
2. Seleccionar **"Destajos pagados"**.

![2. Seleccionar **"Destajos pagados"**.](/img/nominas/destajos-4.png)

## Listado de destajos pagados

El listado muestra las mismas columnas que el de destajos no pagados: ID, supervisor, locación, fecha, notas, registros, empleados, valor y transacciones.

Si su usuario tiene habilitado el filtro por agencia, en la parte superior del listado aparece el selector **"Locación"** junto al botón **"Cambiar"** para filtrar los destajos de una agencia.

### Búsqueda

El campo **"Filtrar"** del listado busca por ID, notas, agencia o empleado.

### Ver detalle de un destajo pagado

En el listado, hacer clic en el ID del destajo o en el icono de ojo. El detalle muestra la misma información que un destajo no pagado, sin opciones de edición ni borrado.

## API (llamadas desde sistemas externos)

### Listar destajos pagados

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_pieceworks.json
```

Esto devolverá un JSON similar a este:

```json
{
  "pieceworks": [],
  "distinct_employees_per_piecework": {},
  "max_employee_details_per_piecework": {}
}
```

### Listado de destajos pagados (datatables)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40
  }' \
  https://app.zauru.com/payroll/paid_pieceworks/datatables.json
```

### Ver un destajo pagado

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/payroll/paid_pieceworks/1.json
```

Esto devolverá un JSON similar a este:

```json
{}
```
