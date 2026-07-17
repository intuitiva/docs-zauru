---
title: "Números de Serie Atendidos"
sidebar_label: "Números de Serie Atendidos"
sidebar_position: 12
---

Este tutorial esta enfocado en la creacion de casos con numeros de serie y su verificacion. Tambien cubre como consultar el detalle de costos asociados a un numero de serie.

## Usar un Numero de Serie al Crear un Caso

Para registrar un numero de serie cuando usted crea un caso, primero debe colocar el nombre del cliente y la informacion del caso que se esta atendiendo y luego refrescar la pantalla, como se muestra en la siguiente imagen.

![imgen1](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-1.jpg)

Luego de refrescar, podra seleccionar el numero de serie del producto que el cliente compro. Solo le apareceran los numeros de serie que ese cliente haya comprado.

![imagen2](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-2.jpg)

Despues de crear el caso automaticamente quedara un registro de los numeros de serie que se han atendido.

![imagen3](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-3.jpg)

## Ver Numeros de Serie Atendidos

Para ver el registro de los numeros de serie atendidos debera seleccionar **"Numeros de Serie Atendidos"**.

![imagen4](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-4.jpg)

En este listado podra ver:
- **Numero de Serie** (ID interno)
- **Orden** asociada
- **Nombre** del numero de serie
- **Item** (producto) asociado
- **Descripcion**
- **Veces Atendido**: Cantidad de casos en los que este numero de serie ha sido registrado

## Ver Detalle de un Numero de Serie Atendido

Para ver el detalle de un numero de serie atendido:

1. Ir a **"Soporte"**.
2. Seleccionar **"Numeros de Serie Atendidos"**.
3. Hacer click sobre **"Verificar"** (ojo) en el numero de serie deseado.

![imagen5](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-5.jpg)

En la pagina de detalle podra ver:

### Casos Asociados

Listado de todos los casos de soporte en los que este numero de serie ha sido atendido.

### Costo de Suministros por Caso

Para cada caso, se muestra el **costo de los suministros** (productos) utilizados, calculado a partir del costo promedio de los items facturados.

### Costo de Horas de Agentes por Caso

Para cada caso, se muestra el **costo de las horas de trabajo** de los agentes de soporte, calculado como:

- Horas ordinarias x tarifa horaria ordinaria
- + Horas extraordinarias diurnas x tarifa horaria diurna
- + Horas extraordinarias nocturnas x tarifa horaria nocturna

### Total de Ordenes de Compra por Caso

Para cada caso, se muestra el **total de las ordenes de compra** asociadas.

Esta informacion le permite evaluar el costo total de atencion de un numero de serie a lo largo de su vida util.

## Crear un Nuevo Numero de Serie (en Bodega Cliente)

Puede crear un nuevo numero de serie directamente desde el modulo de soporte. Esto es util para registrar productos que fueron vendidos fuera de Zauru pero que ahora requieren soporte.

1. Ir a **"Soporte"**.
2. Seleccionar **"Numeros de Serie Atendidos"**.
3. Seleccionar **"Nuevo Numero de Serie"**.

![imagen6](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-6.jpg)

Complete los campos:
- **Nombre** del numero de serie
- **Producto** asociado
- **Descripcion**
- **ID interno** (se genera automaticamente)
- **Cliente** propietario del producto

Al crear el numero de serie, el sistema automaticamente:
- Crea el numero de serie en la bodega virtual del cliente
- Genera un envio desde la bodega del proveedor hacia la bodega del cliente
- Entrega automaticamente el envio

Esto permite que el numero de serie quede disponible para ser seleccionado al crear un nuevo caso de soporte.

## API (llamadas desde sistemas externos)

### listado de numeros de serie atendidos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/serials_attended.json
```

Retorna todos los numeros de serie que se encuentran en la bodega virtual del cliente, sin paginar.

### listado de numeros de serie atendidos (datatables)

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
  https://app.zauru.com/support/serials_attended/datatables.json
```

Columnas disponibles para ordenar: `serials.id_number`, `serials.order_number`, `serials.name`, `serials.item`, `serials.description`, `serials.times_attended`.

### ver detalle de un numero de serie atendido

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/serials_attended/1.json
```

### obtener formulario de nuevo numero de serie

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/serials_attended/new.json
```

Retorna un objeto vacio de numero de serie con un `id_number` autogenerado, que puede usar como base para crear uno nuevo.

### Crear un numero de serie para un caso (en bodega destino Cliente)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "serial": {
      "name": "serie654321",
      "item_id": "1",
      "description": "Producto especial y unico ya vendido",
      "payee_id": "1"
    }
  }' \
  https://app.zauru.com/support/serials_attended.json
```

Tambien puede crear un numero de serie y ser redirigido a la pagina de creacion de caso o a otra pagina de destino:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "serial": {
      "name": "serie654321",
      "item_id": "1",
      "description": "Producto especial y unico ya vendido",
      "payee_id": "1"
    },
    "dest_controller": "support/cases",
    "dest_action": "new"
  }' \
  https://app.zauru.com/support/serials_attended.json
```
