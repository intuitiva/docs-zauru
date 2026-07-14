---
title: "Requisiciones de Compra"
sidebar_label: "Requisiciones de Compra"
sidebar_position: 17
---

Este tutorial esta enfocado en la creacion de requisiciones de compra y su aprobacion para convertirlas en ordenes de compra.

Una requisicion de compra es una solicitud interna de compra de productos o servicios. Es el primer paso en el flujo de compras antes de generar una orden de compra. Las requisiciones permiten que los empleados soliciten productos o servicios que necesitan, y luego un aprobador revisa y aprueba estas solicitudes para generar las ordenes de compra correspondientes.

## Crear una requisicion de compra

Los pasos para crear una requisicion de compra son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Requisiciones de Compra".
3. Seleccionar "Nueva Requisicion de Compra".

![imagen1](/img/compras/requisiciones-de-compra-1.jpg)

Le apareceran las opciones para crear una nueva requisicion de compra, los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre la requisicion de compra.

b. Seleccione la agencia (bodega) para la cual se esta solicitando la compra.

c. Seleccione el empleado que esta solicitando la compra.

d. Coloque la fecha en que espera que se reciba la compra.

e. Seleccione el tipo de detalle:
   - **Detalle de item**: Si la requisicion es para productos de inventario.
   - **Detalle de cuentas**: Si la requisicion es para servicios o gastos.

f. Si selecciono "Detalle de item", seleccione los productos que necesita, la cantidad solicitada y el costo unitario estimado. Para agregar mas productos presione "+".

g. Si selecciono "Detalle de cuentas", seleccione las cuentas contables, el costo y una referencia. Para agregar mas cuentas presione "+".

h. Presione "Crear requisicion de compra" para guardar los cambios.

![imagen2](/img/compras/requisiciones-de-compra-2.jpg)

Le aparecera un mensaje de exito notificandole que la requisicion fue creada exitosamente.

![imagen3](/img/compras/requisiciones-de-compra-3.jpg)

## Aprobar requisiciones de compra

Las requisiciones de compra pueden ser aprobadas de dos formas:

1. **Aprobacion individual**: Aprobar una requisicion a la vez.
2. **Aprobacion en lote**: Aprobar varias requisiciones al mismo tiempo.

### Aprobacion individual

Los pasos para aprobar una requisicion individual son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Requisiciones de Compra".
3. Seleccionar "Detalles" (El Ojo) en la requisicion que desea aprobar.
4. Seleccionar "Aprobar".

![imagen4](/img/compras/requisiciones-de-compra-4.jpg)

Al aprobar la requisicion, esta cambiara su estado a "Aprobada" y ya no podra ser editada.

### Aprobacion en lote

La aprobacion en lote permite aprobar varias requisiciones al mismo tiempo y generar automaticamente las ordenes de compra agrupadas por proveedor.

Los pasos para aprobar en lote son los siguientes:

1. Ir a "Compras".
2. Seleccionar "Requisiciones de Compra".
3. Seleccionar las requisiciones que desea aprobar marcando las casillas correspondientes.
4. Seleccionar "Aprobar en Lote".

![imagen5](/img/compras/requisiciones-de-compra-5.jpg)

Le aparecera el formulario de aprobacion en lote, los campos que debe llenar son los siguientes:

a. Verifique las requisiciones seleccionadas.

b. Para cada producto en las requisiciones, seleccione el proveedor al que se le comprara.

c. Verifique o ajuste el costo unitario de cada producto. El sistema le sugerira automaticamente el costo de la ultima compra realizada a cada proveedor.

d. Presione "Aprobar y Crear Ordenes de Compra".

![imagen6](/img/compras/requisiciones-de-compra-6.jpg)

El sistema creara automaticamente las ordenes de compra agrupadas por proveedor. Le aparecera un resumen de las ordenes de compra creadas.

![imagen7](/img/compras/requisiciones-de-compra-7.jpg)

## Ver el resultado de la aprobacion

Luego de aprobar una requisicion, puede ver el resultado de la aprobacion donde se muestran las ordenes de compra que se generaron a partir de la requisicion.

Los pasos para ver el resultado son:

1. Ir a "Compras".
2. Seleccionar "Requisiciones de Compra".
3. Seleccionar "Detalles" en la requisicion aprobada.

En la parte inferior de la pagina podra ver las ordenes de compra creadas a partir de la requisicion.

## Anular una requisicion de compra

Si necesita anular una requisicion de compra, puede hacerlo de la siguiente forma:

1. Ir a "Compras".
2. Seleccionar "Requisiciones de Compra".
3. Seleccionar "Detalles" en la requisicion que desea anular.
4. Seleccionar "Anular".

La requisicion pasara a la lista de requisiciones anuladas. Puede ver las requisiciones anuladas seleccionando la pestana "Anuladas" en el listado de requisiciones.

## API (llamadas desde sistemas externos)

### Obtener datos para una nueva requisicion de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/purchase_requisitions/new.json
```

### Crear una nueva requisicion de compra de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_requisition": {
      "reference": "Requisicion de prueba",
      "expected_at": "2024-01-19",
      "requestor_id": "1",
      "agency_id": "1",
      "purchase_requisition_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "10",
          "unit_cost": "100"
        },
        "1": {
          "item_id": "2",
          "quantity": "5",
          "unit_cost": "200"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/purchase_requisitions.json
```

### Crear una nueva requisicion de compra de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_requisition": {
      "reference": "Requisicion de servicios",
      "expected_at": "2024-01-19",
      "requestor_id": "1",
      "agency_id": "1",
      "purchase_requisition_account_details_attributes": {
        "0": {
          "account_id": "1",
          "cost": "300",
          "reference": "Servicio de mantenimiento"
        }
      }
    }
  }' \
  https://app.zauru.com/purchases/purchase_requisitions.json
```

### Aprobar una requisicion de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "purchase_requisition": {
      "approved": "1",
      "approver_id": "1"
    }
  }' \
  https://app.zauru.com/purchases/purchase_requisitions/1.json
```

### Anular una requisicion de compra
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/purchases/purchase_requisitions/1.json
```
