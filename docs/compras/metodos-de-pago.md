---
title: "Metodos de pago"
sidebar_label: "Metodos de pago"
sidebar_position: 3
---

Cuando llega el momento de pagarle a un proveedor, usted decide de qué forma sale el dinero: puede ser en efectivo, con cheque o por transferencia bancaria, según lo que le acepte cada proveedor. Cada una de esas formas es un método de pago, y configurarlo bien le asegura que cada pago afecte la cuenta contable correcta. En este tutorial aprenderá a crear los métodos de pago que su empresa usa a diario.

Para configurar los métodos de pago:

1. Ir a “compras”.
2. Seleccionar el icono de configuraciones.

![imagen1](/img/compras/configuracion-1.jpg)

## Crear un método de pago

Los pasos para crear un nuevo método de pago son los siguientes:

1. Seleccione la pestaña de “Métodos de pago” en las configuraciones de compras.
2. Presione “Nuevo Método de Pago”.

![imagen8](/img/compras/configuracion-8.jpg)

A continuación aparecerán las opciones de configuración del Nuevo Método de Pago. Las opciones son las siguientes:

1. Coloque el nombre del Metodo de Pago.
2. Seleccione de que cuenta saldrá el pago cuando se seleccione este método de pago.
3. Para guardar los cambios presione “Crear método de pago”.

Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el método de pago.

Cada vez que haga una compra podrá seleccionar este nuevo método de pago.

![imagen9](/img/compras/configuracion-9.jpg)

Con el método de pago creado, Zauru registrará la salida de dinero desde la cuenta que usted definió en el momento de pagar. Si su empresa paga con varios medios, repita el proceso para cada uno: al final tendrá su catálogo completo listo para usar en todos los pagos a proveedores.

## API (llamadas desde sistemas externos)

### listado de métodos de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/discharge_methods.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 1,
    "name": "cheque G&T corporativa",
    "account_id": 2,
    "entity_id": 3,
    "updater_id": 4,
    "created_at": "2015-02-19T21:22:19.166Z",
    "updated_at": "2020-11-20T03:37:59.894Z",
    "printable_entry": true,
    "endorsement_restriction": false,
    "active": true
  },
  {
    "id": 5,
    "zid": 2,
    "name": "Transferencia G&T",
    "account_id": 6,
    "entity_id": 3,
    "updater_id": 4,
    "created_at": "2020-03-11T23:59:14.535Z",
    "updated_at": "2020-03-11T23:59:14.535Z",
    "printable_entry": false,
    "endorsement_restriction": false,
    "active": true
  }
]
```

### Ver detalles de un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
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
    "discharge_method": {
      "active": "1",
      "name": "Efectivo",
      "account_id": "1"
    }
  }' \
  https://app.zauru.com/purchases/settings/discharge_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
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
    "discharge_method": {
      "name": "Cheque"
    }
  }' \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "3282",
  "zid": "4",
  "name": "Efectivo",
  "account_id": "1",
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:13:34.00872",
  "updated_at": "2026-08-06 04:13:34.00872",
  "printable_entry": true,
  "endorsement_restriction": false,
  "active": true
}
```

### Eliminar un método de pago
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/settings/discharge_methods/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
