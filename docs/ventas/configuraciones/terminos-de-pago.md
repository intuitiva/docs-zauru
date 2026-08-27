---
title: "Términos de Pago"
sidebar_label: "Términos de Pago"
sidebar_position: 1
---

Cuando usted le vende de contado a unos clientes y a crédito a otros, cada plazo que maneja merece su propio término de pago. Los términos de pago sirven para especificar la cantidad de tiempo que se le dará al cliente para efectuar el pago de un producto o servicio brindado por su empresa. El término de pago puede especificar lo siguiente:

- Desde qué cuenta hasta qué cuenta se afectará cuando se haga una venta.
- Las categorías de clientes que aplican al término de pago.
- Los descuentos permitidos al término de pago.
- Opciones de anticipos y asientos extra.

## Listar Términos de Pago

Para consultar la lista de términos de pago:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Términos de Pago"**.

Los términos de pago pueden filtrarse por estado:
- **Activos**: Muestra solo los términos de pago activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

En la lista se muestra el nombre, días de crédito, porcentaje de crédito y los descuentos permitidos asociados. Al seleccionar un término de pago de la lista, se muestran sus detalles incluyendo las categorías de clientes vinculadas y los descuentos asociados.

## Crear un Nuevo Término de Pago

Los pasos para crear un nuevo término de pago son los siguientes:

1. Ir a términos de pago en las configuraciones de ventas.
2. Seleccionar "Nuevo Término de Pago".

![imagen2](/img/ventas/configuraciones-2.jpg)

Entrará a los detalles del nuevo término de pago; las opciones para crearlo son las siguientes:

1. Si selecciona el cuadro de Activo quiere decir que el término de pago se podrá usar.
2. Coloque el Nombre del Nuevo Término de Pago.
3. Especifique desde qué cuenta saldrá la venta (Cuenta Desde / Account From).
4. Especifique a qué cuenta de activo irá (Cuenta Hacia / Account To).
5. Coloque el porcentaje de crédito que se dará con este término de pago.
6. Coloque la cantidad de días de crédito que tiene el cliente para pagar.
7. Para guardar los cambios presione "Crear término de pago".

![imagen3](/img/ventas/configuraciones-3.jpg)

## Opciones Avanzadas de Términos de Pago

Al crear o editar un término de pago, dispone de opciones contables avanzadas:

- **Usar cuentas de productos y servicios en lugar de cuenta desde**: Si está activado, el sistema utilizará las cuentas configuradas en las variables `product_sales_account` y `service_sales_account` en lugar de la cuenta "desde" del término de pago.
- **Cuenta de costo**: Cuenta contable para registrar el costo de la mercadería vendida.
- **Cuenta de activo de inventario**: Cuenta de activo para movimientos de inventario.
- **Cuenta de productos**: Cuenta contable específica para venta de productos.
- **Cuenta de servicios**: Cuenta contable específica para venta de servicios.
- **Centro de costo**: Centro de costo asociado a las ventas bajo este término de pago.
- **Cuenta de anticipo hacia**: Cuenta donde se registran los pagos de anticipos cuando se usa este término de pago.

### Asientos Extra

Los términos de pago permiten configurar asientos contables adicionales que se generarán automáticamente al emitir una factura:

- **Asientos extra (extra_entries)**: Definición de asientos contables adicionales en formato JSON.
- **Valores flexibles de asientos (flexible_entries_values)**: Permite que los valores de los asientos extra sean editables al momento de facturar.
- **Etiquetas de asientos flexibles (flexible_entries_tags)**: Etiquetas asociadas a los asientos flexibles.
- **Memo**: Nota o memo asociado al término de pago.

## Especificar Categorías de Clientes

Después de crear el término de pago deberá especificar qué categoría de clientes aplica para usar este término de pago; la categoría de clientes debió ser creada previamente, refiérase a "Crear Clientes y/o Proveedores" en el manual del usuario para crear una categoría de clientes.

Los pasos para especificar las categorías aplicables al término de pago son los siguientes:

1. Deberá aparecer un mensaje de éxito en la pantalla después de crear el término de pago.
2. Presione el botón de editar en el término de pago.

![imagen4](/img/ventas/configuraciones-4.jpg)

Ahora le aparecerán las opciones de edición del término de pago, deberá seguir los siguientes pasos:

1. Seleccione si este término de pago es aplicable a clientes que no tienen categoría, quiere decir que cualquier cliente nuevo aplicará a este término de pago.
2. Seleccione la categoría de clientes que creó previamente para que este término de pago sea aplicable a esa categoría.
3. Para guardar sus cambios presione "Actualizar término de pago".

![imagen5](/img/ventas/configuraciones-5.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla después de actualizar el término de pago. En el punto número dos puede ver cómo la Categoría 1 aparece ahora en el término de pago NET 45.

![imagen6](/img/ventas/configuraciones-6.jpg)

## Ver Detalles de un Término de Pago

Al hacer click sobre un término de pago en la lista, podrá ver:
- Datos generales (nombre, días de crédito, porcentaje de crédito, estado).
- Categorías de clientes asociadas.
- Descuentos permitidos.
- Cuentas contables configuradas (desde, hacia, costo, inventario, productos, servicios).
- Información de anticipos y asientos extra.

## Eliminar un Término de Pago

Para eliminar un término de pago:

1. En la lista de términos de pago, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

## API (llamadas desde sistemas externos)

### Lista de términos de pago activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/actives.json
```

### Ver detalle de un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3300",
  "zid": "1",
  "active": true,
  "name": "Contado",
  "credit_percent": "0",
  "credit_days": "0",
  "credit": false,
  "applicable_to_uncategorized_payees": true,
  "account_from_id": "77710",
  "account_to_id": "77714",
  "updater_id": "214",
  "entity_id": "1303",
  "created_at": "2026-02-11 14:40:17.970023",
  "updated_at": "2026-02-11 14:40:17.970023",
  "extra_entries": "0",
  "flexible_entries_values": false,
  "cost_account_id": "77721",
  "inventory_asset_account_id": "77718",
  "flexible_entries_tags": false,
  "products_and_services_instead_of_account_from": false,
  "memo": null,
  "advance_payment_account_to_id": null,
  "product_account_id": null,
  "service_account_id": null,
  "cost_center_id": null
}
```

### Obtener plantilla para crear un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_terms/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "name": null,
  "credit_percent": 0.0,
  "credit_days": 0,
  "credit": false,
  "applicable_to_uncategorized_payees": true,
  "account_from_id": null,
  "account_to_id": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "extra_entries": 0,
  "flexible_entries_values": false,
  "cost_account_id": null,
  "inventory_asset_account_id": null,
  "flexible_entries_tags": false,
  "products_and_services_instead_of_account_from": false,
  "memo": null,
  "advance_payment_account_to_id": null,
  "product_account_id": null,
  "service_account_id": null,
  "cost_center_id": null
}
```

### Crear nuevo término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment_term": {
      "name": "NET 30",
      "active": "1",
      "credit_days": "30",
      "credit_percent": "100",
      "account_from_id": "1",
      "account_to_id": "2",
      "applicable_to_uncategorized_payees": "1"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_terms.json
```

Esto devolverá un JSON similar a este:
```json
{
  "credit_percent": [
    "debe ser menor o igual que 1"
  ],
  "entity": [
    "es inválido"
  ]
}
```

### Actualizar un término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "payment_term": {
      "name": "NET 30 Actualizado",
      "active": "1",
      "credit_days": "45",
      "credit_percent": "100"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3300",
  "zid": "1",
  "active": true,
  "name": "Contado",
  "credit_percent": "0",
  "credit_days": "0",
  "credit": false,
  "applicable_to_uncategorized_payees": true,
  "account_from_id": "77710",
  "account_to_id": "77714",
  "updater_id": "214",
  "entity_id": "1303",
  "created_at": "2026-02-11 14:40:17.970023",
  "updated_at": "2026-02-11 14:40:17.970023",
  "extra_entries": "0",
  "flexible_entries_values": false,
  "cost_account_id": "77721",
  "inventory_asset_account_id": "77718",
  "flexible_entries_tags": false,
  "products_and_services_instead_of_account_from": false,
  "memo": null,
  "advance_payment_account_to_id": null,
  "product_account_id": null,
  "service_account_id": null,
  "cost_center_id": null
}
```

### Eliminar término de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/payment_terms/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
