---
title: "Consolidar Ordenes"
sidebar_label: "Consolidar Ordenes"
sidebar_position: 5
---

Este tutorial esta enfocado en como consolidar multiples ordenes de venta en una sola factura. La consolidacion de ordenes es util cuando un cliente realiza varias ordenes de venta por separado y se desea emitir una sola factura que las agrupe.

## Requisitos para Consolidar Ordenes

Antes de consolidar ordenes, debe asegurarse de que se cumplan las siguientes condiciones:

1. Las ordenes deben estar **abiertas** (no facturadas, no anuladas).
2. Las ordenes deben pertenecer al **mismo cliente**.
3. Las ordenes **no deben tener envios en transito**.
4. Se requiere un minimo de **2 ordenes** para consolidar.
5. Las ordenes no deben estar ya incluidas en otra consolidacion.

## Crear una Consolidacion de Ordenes

Los pasos para consolidar ordenes de venta son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Consolidar Ordenes"**.
3. Presionar **"Nueva Consolidacion"**.

![imagen1](/img/ventas/consolidad-ordenes-1.png)

Le apareceran las opciones para crear una nueva consolidacion. Los campos que debe configurar son los siguientes:

a. **Punto de venta**: Seleccione el punto de venta desde donde se emitira la factura consolidada.

b. **Alcance (Scope)**: Filtre las ordenes disponibles:
   - **Contado**: Muestra solo ordenes de contado.
   - **Credito**: Muestra solo ordenes a credito.
   - **Todas**: Muestra todas las ordenes.

c. **Etiquetas (Tags)**: Filtre las ordenes por etiquetas si es necesario.

d. **Referencia**: Coloque una breve referencia para identificar la consolidacion.

![imagen2](/img/ventas/consolidad-ordenes-2.png)

A continuacion se mostrara un listado de las ordenes disponibles para consolidar. Seleccione las ordenes que desea incluir en la consolidacion marcando las casillas correspondientes.

e. **Items con precios flexibles**: Si alguna orden tiene items con precios flexibles, debera confirmar o ajustar los precios para la factura consolidada.

Para crear la consolidacion presione **"Consolidar Ordenes"**.

![imagen3](/img/ventas/consolidad-ordenes-3.png)

Le aparecera un mensaje de exito en pantalla y se generara la factura consolidada. La consolidacion puede ejecutarse en segundo plano (background job) si hay muchas ordenes, o en linea si son pocas.

## Ver una Consolidacion Existente

Para ver los detalles de una consolidacion ya realizada:

1. Ir a **"Ventas"**.
2. Seleccionar **"Consolidar Ordenes"**.
3. En el listado de consolidaciones, hacer click sobre **"Verificar"** (El ojo) en la consolidacion que desea consultar.

![imagen4](/img/ventas/consolidad-ordenes-4.png)

En la pagina de detalles de la consolidacion podra ver:
- Las ordenes que componen la consolidacion.
- La factura resultante de la consolidacion.
- Las plantillas de impresion disponibles.
- Los permisos y acciones disponibles.

## Desconsolidar Ordenes

Si necesita deshacer una consolidacion:

1. Ir a **"Ventas"** > **"Consolidar Ordenes"**.
2. Localizar la consolidacion que desea deshacer.
3. Hacer click sobre **"Destruirlo"** en la consolidacion.

Al desconsolidar, las ordenes volveran a su estado original (abiertas) y la factura consolidada sera eliminada.

![imagen5](/img/ventas/consolidad-ordenes-5.png)

## Configuracion Adicional

En las configuraciones de ventas, existe la opcion **"Deshabilitar trabajos en segundo plano para consolidaciones de ventas"** (`disable_background_jobs_for_sales_consolidates`). Si esta opcion esta activada, las consolidaciones se procesaran en linea en lugar de usar trabajos en segundo plano.

## Exportar Detalles de una Consolidacion

Desde la pagina de detalles de una consolidacion, puede exportar los detalles a formato XLS utilizando la opcion de exportacion disponible.

## API (llamadas desde sistemas externos)

### Listar consolidaciones
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_consolidates.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 3,
    "reference": "",
    "entity_id": 2,
    "order_id": 3,
    "creator_id": 4,
    "invoices_id": [
      "5444472",
      "5448142"
    ],
    "created_at": "2022-08-02T17:06:54.957Z",
    "updated_at": "2022-08-02T17:06:54.957Z",
    "item_id": null
  },
  {
    "id": 5,
    "zid": 6,
    "reference": "",
    "entity_id": 2,
    "order_id": 7,
    "creator_id": 4,
    "invoices_id": [
      "5444486",
      "5448258"
    ],
    "created_at": "2022-08-02T17:19:27.930Z",
    "updated_at": "2022-08-02T17:19:27.930Z",
    "item_id": null
  }
]
```

### Ver detalle de una consolidacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_consolidates/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3122",
  "zid": "1",
  "reference": null,
  "entity_id": "1303",
  "order_id": "16042551",
  "creator_id": "1",
  "invoices_id": "{16009780,16009785,16038350}",
  "created_at": "2026-05-26 15:04:06.577763",
  "updated_at": "2026-05-26 15:04:06.577763",
  "item_id": null
}
```

### Obtener plantilla para crear una consolidacion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/sales_consolidates/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "reference": null,
  "entity_id": 1,
  "order_id": null,
  "creator_id": null,
  "invoices_id": null,
  "created_at": null,
  "updated_at": null,
  "item_id": null
}
```

### Crear una consolidacion de ordenes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "sales_consolidate": {
      "reference": "Consolidacion de prueba",
      "consolidate_details": "1",
      "invoices_id": ["1,2,3"]
    }
  }' \
  https://app.zauru.com/sales/sales_consolidates.json
```

Esto devolverá un JSON similar a este:
```json
{
  "error": null
}
```

### Desconsolidar ordenes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/sales_consolidates/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
