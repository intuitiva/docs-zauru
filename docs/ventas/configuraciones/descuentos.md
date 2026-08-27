---
title: "Descuentos"
sidebar_label: "Descuentos"
sidebar_position: 2
---

Zauru le permite crear descuentos aplicables al término de pago, a ítems específicos, a paquetes o a categorías de clientes. Los descuentos pueden ser de monto fijo o porcentual.

## Listar Descuentos

Para consultar la lista de descuentos configurados:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Descuentos"**.

Los descuentos pueden filtrarse por estado:
- **Activos**: Muestra solo los descuentos activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un descuento de la lista se muestran sus detalles completos.

## Crear un Nuevo Descuento

Los pasos para crear un nuevo descuento son los siguientes:

1. Ir a **"Ventas"** > **"Configuraciones"** > **"Descuentos"**.
2. Presionar **"Nuevo Descuento"**.

![imagen7](/img/ventas/configuraciones-7.jpg)

Ahora le aparecerán las opciones para crear un nuevo Descuento:

1. Si coloca el cheque de **Activo** quiere decir que el descuento se podrá usar en el sistema.
2. Coloque el **nombre** del descuento.
3. Seleccione si el descuento es aplicable a un **ítem** (Producto), a un **término de pago**, o a ambos.
4. Seleccione la **moneda** del descuento.
5. Si el descuento es de una **cantidad fija**, especifique la cantidad.
6. Si el descuento es de un **porcentaje** de la cantidad total, coloque el porcentaje de descuento. Para colocar 10% de descuento coloque 0.10.
7. Si selecciona el cheque de **descartar decimales**, se removerán los decimales en la cantidad del descuento.
8. Especifique un **umbral mínimo de cantidad** (`min_quantity_threshold`) para que el descuento aplique solo cuando se alcanza una cantidad mínima de ítems.
9. Especifique un **umbral máximo de cantidad** (`max_quantity_threshold`) para limitar el descuento hasta cierta cantidad de ítems.
10. Marque **Forzar asignación** (`force_assignation`) si desea que el descuento se aplique automáticamente sin intervención del usuario.
11. Seleccione si el descuento **aplica a detalles de factura o a la factura completa** (`invoice_details_or_invoices`).
12. Coloque una **nota** para describir el descuento.
13. Para guardar los cambios presione **"Crear descuento"**.

![imagen8](/img/ventas/configuraciones-8.jpg)

## Filtrar por Categoría de Cliente

Al crear o editar un descuento, puede activar el **filtro por categoría de beneficiario** (`payee_category_filter_active`). Esto permite:

- Seleccionar una categoría de clientes específica para la cual aplica el descuento.
- Si el filtro está desactivado, el descuento aplica para todas las categorías de clientes.
- Si el filtro está activado y no se selecciona una categoría, el descuento no aplica a ninguna.

## Asignar Ítems, Paquetes y Términos de Pago al Descuento

Después de crear el descuento deberá editarlo para especificar qué términos de pago, ítems o paquetes son aplicables:

1. Le aparecerá un mensaje de éxito después de crear el descuento.
2. Presione el botón de **"Editar"** en el descuento.

![imagen9](/img/ventas/configuraciones-9.jpg)

Le aparecerán las opciones de edición:

3. Seleccione los **términos de pago** que aplican para el descuento (puede seleccionar múltiples).
4. Seleccione los **ítems** específicos a los que aplica el descuento (puede seleccionar múltiples).
5. Seleccione los **paquetes** (bundles) a los que aplica el descuento (puede seleccionar múltiples).
6. Para guardar los cambios presione **"Actualizar Descuento"**.

![imagen10](/img/ventas/configuraciones-10.jpg)

Le aparecerá un mensaje de éxito y ahora el descuento será aplicable a los términos de pago, ítems y paquetes que especificó.

![imagen11](/img/ventas/configuraciones-11.jpg)

**Nota**: Al actualizar un descuento, todas las asignaciones existentes de términos de pago, ítems y paquetes se eliminan y se recrean con las nuevas selecciones. Esto evita inconsistencias en las reglas de descuento.

## Verificar Descuentos Asignados

Para verificar que el término de pago que especificó tenga el descuento que creó siga los siguientes pasos:

1. Diríjase a la pestaña de **"Términos de pago"** en las configuraciones de ventas.
2. Verifique que en la columna de **"Descuentos Permitidos"** aparezca el descuento que colocó al término de pago.

![imagen12](/img/ventas/configuraciones-12.jpg)

También puede ver los descuentos desde la vista de detalle de cada término de pago.

## Eliminar un Descuento

Para eliminar un descuento permanentemente:

1. En la lista de descuentos, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

A diferencia de otros elementos en Zauru, los descuentos se eliminan físicamente de la base de datos (hard delete).

## API (llamadas desde sistemas externos)

### Lista de descuentos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "active": true,
    "name": "Mensajero",
    "amount": "380.0",
    "percent": null,
    "notes": "",
    "currency_id": 2,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2015-05-19T14:40:07.248Z",
    "updated_at": "2015-05-19T14:41:35.788Z",
    "invoice_details_or_invoices": false,
    "remove_decimals": false,
    "min_quantity_threshold": 1,
    "max_quantity_threshold": null,
    "force_assignation": false,
    "payee_category_id": null,
    "payee_category_filter_active": false,
    "agency_ids": [
      25
    ]
  },
  {
    "id": 4,
    "zid": 3,
    "active": true,
    "name": "Tarjeta de Crédito",
    "amount": null,
    "percent": 0.045,
    "notes": "",
    "currency_id": 2,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2016-09-01T22:16:31.996Z",
    "updated_at": "2016-09-01T22:16:31.996Z",
    "invoice_details_or_invoices": false,
    "remove_decimals": false,
    "min_quantity_threshold": 1,
    "max_quantity_threshold": null,
    "force_assignation": false,
    "payee_category_id": null,
    "payee_category_filter_active": false,
    "agency_ids": [
      25
    ]
  }
]
```

### Ver detalle de un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "cash 5%",
  "amount": null,
  "percent": "0.05",
  "notes": null,
  "currency_id": null,
  "updater_id": "1",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:03.86517",
  "updated_at": "2013-02-11 06:40:03.86517",
  "invoice_details_or_invoices": false,
  "remove_decimals": false,
  "min_quantity_threshold": "1",
  "max_quantity_threshold": null,
  "force_assignation": false,
  "payee_category_id": null,
  "payee_category_filter_active": false,
  "agency_ids": "{16,17,55}"
}
```

### Obtener plantilla para crear un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/discounts/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "name": null,
  "amount": null,
  "percent": null,
  "notes": null,
  "currency_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "invoice_details_or_invoices": false,
  "remove_decimals": false,
  "min_quantity_threshold": 1,
  "max_quantity_threshold": null,
  "force_assignation": false,
  "payee_category_id": null,
  "payee_category_filter_active": false,
  "agency_ids": []
}
```

### Crear nuevo descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discount": {
      "name": "Descuento 10%",
      "active": "1",
      "percent": "0.10",
      "currency_id": "1",
      "remove_decimals": "1",
      "notes": "Descuento de temporada",
      "payment_term_ids": ["1", "2"],
      "item_ids": ["5", "10"]
    }
  }' \
  https://app.zauru.com/sales/settings/discounts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "cash 5%",
  "amount": null,
  "percent": "0.05",
  "notes": null,
  "currency_id": null,
  "updater_id": "1",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:03.86517",
  "updated_at": "2013-02-11 06:40:03.86517",
  "invoice_details_or_invoices": false,
  "remove_decimals": false,
  "min_quantity_threshold": "1",
  "max_quantity_threshold": null,
  "force_assignation": false,
  "payee_category_id": null,
  "payee_category_filter_active": false,
  "agency_ids": "{16,17,55}"
}
```

### Actualizar un descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "discount": {
      "name": "Descuento 15%",
      "active": "1",
      "percent": "0.15"
    }
  }' \
  https://app.zauru.com/sales/settings/discounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "zid": "1",
  "active": true,
  "name": "cash 5%",
  "amount": null,
  "percent": "0.05",
  "notes": null,
  "currency_id": null,
  "updater_id": "1",
  "entity_id": "1",
  "created_at": "2013-02-11 06:40:03.86517",
  "updated_at": "2013-02-11 06:40:03.86517",
  "invoice_details_or_invoices": false,
  "remove_decimals": false,
  "min_quantity_threshold": "1",
  "max_quantity_threshold": null,
  "force_assignation": false,
  "payee_category_id": null,
  "payee_category_filter_active": false,
  "agency_ids": "{16,17,55}"
}
```

### Eliminar descuento
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/discounts/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
