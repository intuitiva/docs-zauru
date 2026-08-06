---
title: "Tipos de cargos"
sidebar_label: "Tipos de cargos"
sidebar_position: 2
---

Un tipo de cargo es un cargo que se le agrega a la compra y que aumenta el costo del producto. Generalmente los cargos se aplican a las ordenes de compra cuando es una importación. Los cargos podrían ser de aranceles, de GPS o de impuestos por ejemplo.

Para configurar los tipos de cargos:

1. Ir a “compras”.
2. Seleccionar el icono de configuraciones.

![imagen1](/img/compras/configuracion-1.jpg)

## Crear un tipo de cargo

Para crear un nuevo tipo de cargo debe:

1. Seleccionar la pestaña de Tipos de Cargos en las Configuraciones de Compras.
2. Seleccionar “Nuevo Tipo de Cargo”.

![imagen5](/img/compras/configuracion-5.jpg)

A continuación le aparecerán las opciones para crear un nuevo tipo de cargo, las opciones son las siguientes:

1. Coloque el nombre del tipo de cargo.
2. Seleccione hacia que cuenta se registrara el cargo, recomendamos que se seleccione Inventario de Mercadería, porque al momento de vender su producto, Zauru genera una transacción automática desde Inventario de Mercadería al Costo de Venta por el monto total del Costo de su producto.
3. Para que este cargo sea incluido en el costo de su producto debe seleccionar esta casilla.
4. Para guardar los cambios presione “Crear tipo de cargo”.

![imagen6](/img/compras/configuracion-6.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla notificando que se creo el tipo de cargo exitosamente.

![imagen7](/img/compras/configuracion-7.jpg)

## API (llamadas desde sistemas externos)

### Listado de tipos de cargos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/charge_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "1731",
    "zid": "1",
    "name": "IVA",
    "entity_id": "1303",
    "account_id": "77716",
    "created_at": "2026-02-06 18:10:10.149155",
    "updated_at": "2026-02-06 18:10:10.149155",
    "included_in_item_cost": false
  }
]
```

### Crear nuevo tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "charge_type": {
      "name": "Flete terrestre",
      "account_id": "1",
      "included_in_item_cost": "1"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1731",
  "zid": "1",
  "name": "IVA",
  "entity_id": "1303",
  "account_id": "77716",
  "created_at": "2026-02-06 18:10:10.149155",
  "updated_at": "2026-02-06 18:10:10.149155",
  "included_in_item_cost": false
}
```

### Actualizar un tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "charge_type": {
      "name": "Flete marítimo"
    }
  }' \
  https://app.zauru.com/purchases/settings/charge_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1731",
  "zid": "1",
  "name": "IVA",
  "entity_id": "1303",
  "account_id": "77716",
  "created_at": "2026-02-06 18:10:10.149155",
  "updated_at": "2026-02-06 18:10:10.149155",
  "included_in_item_cost": false
}
```

### Eliminar un tipo de cargo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/settings/charge_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
