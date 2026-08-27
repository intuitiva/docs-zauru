---
title: "Listados de Precios"
sidebar_label: "Listados de Precios"
sidebar_position: 4
---

El listado de precios permite colocar precios de venta distintos para ciertas categorías de clientes o puntos de venta. Por ejemplo, puede crear un listado de precios de distribuidor para que cuando se le facture a un distribuidor el precio sea más bajo que el precio sugerido de venta.

## Listar Listados de Precios

Para consultar la lista de listados de precios:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Listado de Precios"**.

Los listados de precios pueden filtrarse por estado:
- **Activos**: Muestra solo los listados activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un listado de precios de la lista, se muestran sus detalles.

## Crear un Nuevo Listado de Precios

Los pasos para crear un listado de precios son los siguientes:

1. Ir a **"ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Listado de Precios"**.
4. Seleccionar **"Nuevo Listado de Precio"**.

![imagen16](/img/ventas/configuraciones-16.jpg)

Le aparecerán las opciones para crear un nuevo listado de precios, las opciones son las siguientes:

1. Si selecciona la caja de **"Activa"**, el listado de precios estará disponible para usar en el sistema.
2. Coloque el **nombre** del listado de precios.
3. Coloque una **descripción** del listado de precios.
4. Marque **Exclusivo para cliente** (`client_exclusive`) si este listado de precios aplica únicamente a categorías de clientes específicas (no a agencias).
5. Marque **Comercio electrónico** (`ecommerce`) si este listado de precios estará disponible para ventas en línea.
6. Para guardar los cambios presione **"Crear lista de precio"**.

![imagen17](/img/ventas/configuraciones-17.png)

Le deberá aparecer un mensaje de éxito en la pantalla notificando que se creó el listado de precios.

## Editar un Listado de Precios

Ahora deberá editar el listado de precios para seleccionar las categorías de clientes y las agencias que aplicarán. Los pasos para hacerlo son los siguientes:

1. Presione el botón de **"Editar"** en el listado de precios que creó.

![imagen18](/img/ventas/configuraciones-18.jpg)

En la vista de edición podrá:

1. Seleccionar qué **categorías de clientes** aplicarán a este listado de precios. Se muestran dos listas:
   - **Categorías seleccionadas**: Las que ya están asignadas a este listado.
   - **Categorías libres**: Categorías de clientes que no están asignadas a ningún listado de precios.

2. Seleccionar qué **agencias/puntos de venta** aplicarán a este listado de precios. Se muestran dos listas:
   - **Agencias seleccionadas**: Las que ya están asignadas a este listado.
   - **Agencias libres**: Agencias activas no virtuales que no están asignadas a ningún listado de precios.

3. Para aplicar los cambios presione **"Actualizar lista de precio"**.

![imagen19](/img/ventas/configuraciones-19.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla mostrándole la categoría y agencia agregadas al listado de precios. Cada vez que se seleccione a un cliente que pertenezca a la categoría asignada o se facture desde la agencia asignada, el precio será el que se coloque en el listado de precios.

![imagen20](/img/ventas/configuraciones-20.jpg)

Ahora deberá colocar el precio a sus ítems en este listado de precios, los pasos para hacerlo se especifican en el tutorial de [**"Precios Sugeridos"**](/ventas/precios-sugeridos).

## Eliminar un Listado de Precios

Para eliminar un listado de precios:

1. En la lista de listados de precios, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

## API (llamadas desde sistemas externos)

### Lista de listados de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "active": true,
    "name": "16 a 20",
    "description": "",
    "entity_id": 2,
    "created_at": "2014-03-19T22:16:26.763Z",
    "updated_at": "2014-03-19T23:28:04.548Z",
    "payee_categories_count": 1,
    "client_exclusive": true,
    "ecommerce": false
  },
  {
    "id": 3,
    "active": true,
    "name": "6 a 10",
    "description": "",
    "entity_id": 2,
    "created_at": "2013-03-01T05:33:51.610Z",
    "updated_at": "2014-03-19T22:15:50.623Z",
    "payee_categories_count": 1,
    "client_exclusive": true,
    "ecommerce": false
  }
]
```

### Ver detalle de un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3936",
  "active": true,
  "name": "VIP",
  "description": null,
  "entity_id": "1303",
  "created_at": "2026-07-01 16:53:13.179084",
  "updated_at": "2026-07-01 16:53:13.179084",
  "payee_categories_count": "1",
  "client_exclusive": true,
  "ecommerce": false
}
```

### Obtener plantilla para crear un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/price_lists/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "active": true,
  "name": null,
  "description": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "payee_categories_count": 0,
  "client_exclusive": true,
  "ecommerce": false
}
```

### Crear nuevo listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "price_list": {
      "name": "Lista Distribuidor",
      "active": "1",
      "description": "Precios especiales para distribuidores",
      "client_exclusive": "1",
      "ecommerce": "0",
      "payee_category_ids": ["1", "2"],
      "agency_ids": ["1"]
    }
  }' \
  https://app.zauru.com/sales/settings/price_lists.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3936",
  "active": true,
  "name": "VIP",
  "description": null,
  "entity_id": "1303",
  "created_at": "2026-07-01 16:53:13.179084",
  "updated_at": "2026-07-01 16:53:13.179084",
  "payee_categories_count": "1",
  "client_exclusive": true,
  "ecommerce": false
}
```

### Actualizar un listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "price_list": {
      "name": "Lista Distribuidor Actualizada",
      "active": "1",
      "description": "Precios actualizados para distribuidores"
    }
  }' \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3936",
  "active": true,
  "name": "VIP",
  "description": null,
  "entity_id": "1303",
  "created_at": "2026-07-01 16:53:13.179084",
  "updated_at": "2026-07-01 16:53:13.179084",
  "payee_categories_count": "1",
  "client_exclusive": true,
  "ecommerce": false
}
```

### Eliminar listado de precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/price_lists/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
