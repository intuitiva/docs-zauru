---
title: "Métodos de Pago"
sidebar_label: "Métodos de Pago"
sidebar_position: 3
---

Cada forma en que le pagan a usted (en efectivo, por depósito o con tarjeta) debe existir como método de pago para que cada cobro caiga en la cuenta contable correcta. Los métodos de pago especifican de qué forma pagará el cliente, en efectivo, con tarjeta o si se le dará crédito por ejemplo. Se especifica también qué cuenta contable será afectada al momento del cobro de una orden o factura.

## Listar Métodos de Pago

Para consultar la lista de métodos de pago:

1. Ir a **"Ventas"** > **"Configuraciones"**.
2. Seleccionar la pestaña de **"Métodos de Pago"**.

Los métodos de pago pueden filtrarse por estado:
- **Activos**: Muestra solo los métodos de pago activos.
- **Inactivos**: Muestra solo los inactivos.
- **Todos**: Muestra todos sin filtrar.

Al seleccionar un método de pago de la lista, se muestran sus detalles completos.

## Crear un Nuevo Método de Pago

La forma de configurar los métodos de pago es la siguiente:

1. Ir a Métodos de pago en las configuraciones de ventas.
2. Seleccionar "Nuevo Método de Pago".

![imagen13](/img/ventas/configuraciones-13.jpg)

Le aparecerán las opciones para crear un nuevo Método de Pago, las opciones son las siguientes:

1. Coloque el **nombre** del método de pago.
2. Coloque hacia qué **cuenta principal** se transferirá el pago cuando se cobre una factura con este método de pago.
3. Seleccione una **segunda cuenta** a la que también se afectará cuando se cobre (opcional).
4. Seleccione qué **porcentaje del pago** se transferirá a esta segunda cuenta (`account2_rate`). Para 6.11% coloque 0.0611.
5. Coloque un **monto fijo** que se transferirá a la segunda cuenta (`account2_fixed_amount`) independientemente del porcentaje.
6. Marque **Asiento contable imprimible** (`printable_entry`) si desea que la transacción contable del pago sea visible en los reportes de impresión.
7. Marque **Evitar mostrar cambio en sobrepagos** (`avoid_overpay_showing_change`) para que cuando un cliente pague de más no se muestre el cambio en la interfaz.
8. Marque **Comercio electrónico** (`ecommerce`) si este método de pago estará disponible para pagos en línea.
9. Para guardar los cambios presione **"Crear método de pago"**.

![imagen14](/img/ventas/configuraciones-14.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla y una columna en color verde mostrando el nuevo método de pago creado.

![imagen15](/img/ventas/configuraciones-15.jpg)

## Editar un Método de Pago

Para editar un método de pago existente:

1. En la lista de métodos de pago, localice el que desea modificar.
2. Haga click sobre **"Editar"**.
3. Realice los cambios necesarios.
4. Presione **"Actualizar método de pago"**.

## Eliminar un Método de Pago

Para eliminar un método de pago:

1. En la lista de métodos de pago, localice el que desea eliminar.
2. Haga click sobre **"Destruirlo"**.

## API (llamadas desde sistemas externos)

### Lista de métodos de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 3,
    "name": "depósito G&T ",
    "account_id": 2,
    "account2_id": null,
    "account2_rate": null,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2013-03-01T17:15:40.263Z",
    "updated_at": "2015-01-28T22:53:53.391Z",
    "account2_fixed_amount": null,
    "printable_entry": true,
    "avoid_overpay_showing_change": false,
    "active": true,
    "ecommerce": false,
    "gateway_config_id": null
  },
  {
    "id": 4,
    "zid": 5,
    "name": "cheques en dólares",
    "account_id": 6,
    "account2_id": null,
    "account2_rate": null,
    "updater_id": 3,
    "entity_id": 3,
    "created_at": "2015-01-28T22:53:38.228Z",
    "updated_at": "2015-01-28T22:53:38.228Z",
    "account2_fixed_amount": null,
    "printable_entry": true,
    "avoid_overpay_showing_change": false,
    "active": true,
    "ecommerce": false,
    "gateway_config_id": null
  }
]
```

### Ver detalle de un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 1,
  "name": "Método de pago Actualizado",
  "account_id": 1,
  "account2_id": null,
  "account2_rate": null,
  "updater_id": 2,
  "entity_id": 3,
  "created_at": "2010-05-31T18:41:30.000Z",
  "updated_at": "2026-08-06T04:13:49.797Z",
  "account2_fixed_amount": null,
  "printable_entry": true,
  "avoid_overpay_showing_change": true,
  "active": true,
  "ecommerce": false,
  "gateway_config_id": null
}
```

### Obtener plantilla para crear un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/payment_methods/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "name": null,
  "account_id": null,
  "account2_id": null,
  "account2_rate": null,
  "updater_id": null,
  "entity_id": 1,
  "created_at": null,
  "updated_at": null,
  "account2_fixed_amount": null,
  "printable_entry": true,
  "avoid_overpay_showing_change": false,
  "active": true,
  "ecommerce": false,
  "gateway_config_id": null
}
```

### Crear nuevo método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payment_method": {
      "name": "Método de pago Prueba",
      "active": "1",
      "printable_entry": "1",
      "avoid_overpay_showing_change": "1",
      "ecommerce": "0",
      "account_id": "1",
      "account2_id": "2",
      "account2_rate": "0.01",
      "account2_fixed_amount": "1.45"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "name": "Método de pago Prueba",
  "account_id": 3,
  "account2_id": 2,
  "account2_rate": 0.01,
  "updater_id": 4,
  "entity_id": 5,
  "created_at": "2026-08-06T04:16:29.593Z",
  "updated_at": "2026-08-06T04:16:29.593Z",
  "account2_fixed_amount": "1.45",
  "printable_entry": true,
  "avoid_overpay_showing_change": true,
  "active": true,
  "ecommerce": false,
  "gateway_config_id": null
}
```

### Actualizar un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payment_method": {
      "name": "Método de pago Actualizado",
      "active": "1",
      "account_id": "3"
    }
  }' \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "4489",
  "zid": "1",
  "name": "Efectivo",
  "account_id": "77702",
  "account2_id": null,
  "account2_rate": null,
  "updater_id": "214",
  "entity_id": "1303",
  "created_at": "2026-02-11 14:40:36.659574",
  "updated_at": "2026-02-11 14:40:36.659574",
  "account2_fixed_amount": null,
  "printable_entry": true,
  "avoid_overpay_showing_change": false,
  "active": true,
  "ecommerce": false,
  "gateway_config_id": null
}
```

### Eliminar método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/payment_methods/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).
