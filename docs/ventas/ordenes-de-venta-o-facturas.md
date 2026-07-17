---
title: "Ordenes de Venta y Facturas"
sidebar_label: "Ordenes de Venta y Facturas"
sidebar_position: 4
---

Este tutorial esta enfocado en explicar las diferencias entre una orden de venta y una factura; y entender cuando usar cada una de ellas.

Una orden de venta es una pre-factura o dependiendo del flujo de trabajo se puede tomar como una orden de trabajo o hasta como una cotización.

La orden de venta tiene las siguientes características:

- Se __pueden editar__ los datos, productos y cantidades antes de ser convertida en una factura.
- __No genera ninguna transacción contable__ de cuentas por cobrar o de iva por pagar
- Los productos incluidos en la orden de venta no se entregan al cliente, solo se reservan con una __reservación__ (envío preliminar).
- Se puede cobrar antes de ser facturada, ya sea cobro total o parcial de la orden de venta. Esto se le conoce como __anticipo__.

Una factura tiene las siguientes características:

- __No se pueden editar__ después de ser emitida.
- Genera automáticamente transacciones contables de cuentas por cobrar, iva por pagar y costo de mercadería.
- Los productos incluidos en la factura automáticamente salen de la bodega hacia el cliente después de ser emitida la factura.
- Se puede hacer un cobro total o parcial de la factura.

Dependiendo sus necesidades usted debería de hacer una orden de venta previo a hacer una factura o debería facturar de una vez, estas son nuestras recomendaciones:

1. Puntos de Venta de productos: Facturar de un vez.
2. Venta de servicios: Crear orden de venta y después facturar.
3. Venta de productos al por mayor: Crear orden de venta y después facturar.

## Crear orden de venta
Los pasos para crear una orden de venta son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Ordenes”.
3. Seleccionar “Nueva Orden”.

![imagen1](/img/ventas/ordenes-de-venta-o-facturas-1.jpg)


Le aparecerán las opciones para crear una nueva orden de venta, los campos que debe llenar son los siguientes:

a. Coloque una breve referencia sobre la orden de venta que esta creando.

b. Coloque la fecha que desea que aparezca en la factura.

c. Coloque el punto de venta desde donde se  solicito la orden de venta.

d. Coloque el nombre del cliente existente, o agregue uno nuevo.

e. Coloque el Término de Pago

f. Coloque los productos o servicios que desea facturar, la cantidad y el precio unitario. Para agregar otra línea presione “+”.


Por ultimo presione “Crear orden”.

![imagen2](/img/ventas/ordenes-de-venta-o-facturas-2.jpg)



Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo la orden exitosamente.

![imagen3](/img/ventas/ordenes-de-venta-o-facturas-3.jpg)

## Listar las Ordenes de Venta

Si se dirige a Ventas, Ordenes, podrá encontrar las ordenes de venta previamente creadas. Las opciones para las ordenes son las siguientes:

a. Verificar: Le permite ver los detalles de la orden.

b. Editar

c. Borrar

d. Emitir Factura

e. Regalar

f. Cobrar

![imagen4](/img/ventas/ordenes-de-venta-o-facturas-4.jpg)


## Crear una Factura
Los pasos para crear una factura son los siguientes:

1. Ir a “Ventas”.
2. Seleccionar “Facturas no Pagadas”.
3. Seleccionar “Nueva Factura”.

![imagen5](/img/ventas/ordenes-de-venta-o-facturas-5.jpg)


Le aparecerán las opciones para crear una nueva factura. Los campos que debe llenar son los siguientes:

a. Si quiere que la factura registre impuestos, coloque el cheque de “Sujeto a Impuestos”.

b. Coloque una breve referencia para facilitar la búsqueda de la factura en el listado de todas las facturas.

c. Coloque la fecha en que se emite la factura.

d. Coloque el punto de venta desde donde se esta facturando y presione refrescar.

e. Seleccione el nombre del vendedor.

f. Seleccione el nombre del cliente al que se le esta facturando.

g. Seleccione el término de pago que se le dará al cliente.

h. Coloque los productos, la cantidad y el precio unitario que desea facturar. Para agregar una nueva fila presione “+”.


Para emitir la factura presione “Crear Factura”.

![imagen6](/img/ventas/ordenes-de-venta-o-facturas-6.jpg)

## Listar Facturas no Pagadas

Si se dirige a Ventas, Facturas no Pagadas, podrá encontrar las facturas previamente emitidas que aún tienen saldo pendiente. Las facturas pueden filtrarse por:

a. **Alcance (Scope)**: Contado, Crédito o Todas.

b. **Etiquetas (Tags)**: Filtre las facturas por etiquetas.

c. **Rango de fechas**: Desde y Hasta.

En el listado se muestra el número de factura, cliente, total, saldo pendiente, vendedor, punto de venta, fecha y notas de crédito asociadas.

También puede exportar las facturas no pagadas a formato XLS usando la opción de exportación.

### Emitir Factura desde una Orden de Venta

Para convertir una orden de venta en factura:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Localizar la orden que desea facturar.
3. Hacer click sobre **"Emitir Factura"**.

También puede usar la opción **"Emisión Rápida"** desde los detalles de la orden para emitir la factura inmediatamente con la fecha del día actual.

### Editar Metadata de una Factura (Edición Superficial)

Zauru permite realizar una edición superficial (shallow edit) de ciertos campos de una factura ya emitida sin afectar las transacciones contables. Los campos editables son:

- Número de factura.
- Referencia.
- Fecha.
- Vendedor.
- Notas/Memo.
- Etiquetas (tags).

Para realizar esta edición:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"** (o **"Facturas Pagadas"**).
2. Hacer click sobre **"Editar"** (El lápiz) en la factura.
3. Realizar los cambios necesarios.
4. Presionar **"Actualizar Factura"**.

### Impresión de Facturas

Para imprimir una factura:

1. En la página de detalles de la factura, seleccione una **plantilla de impresión**.
2. Haga click sobre **"Imprimir"** para ver la vista previa.
3. Presione **CTRL + P** para enviar a la impresora.

También puede **descargar como PDF** desde la opción disponible en la misma sección.

### Impresión Masiva de Facturas

Zauru permite imprimir todas las facturas no pagadas en lote dentro de un rango de fechas:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Imprimir Todas"**.
3. Seleccione la plantilla de impresión deseada.
4. Coloque el rango de fechas (Desde y Hasta).
5. Presione **"Generar Impresión"**.

El sistema procesará las facturas en segundo plano y podrá monitorear el progreso. Al finalizar, se generará un archivo PDF con todas las facturas.

### Reenviar Factura por Correo

Si una factura fue emitida con almacenamiento externo (FEL), puede reenviar el correo electrónico al cliente desde la página de detalles de la factura usando la opción **"Reenviar Correo"**. Esta opción solo está disponible una vez por factura.

### Consultar Facturas Anuladas

Para consultar el historial de facturas anuladas:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Facturas Anuladas"**.

Puede filtrar por rango de fechas para acotar la búsqueda.

## Gestión Avanzada de Órdenes de Venta

### Editar Metadata de Creación de una Orden

Zauru permite modificar el número de orden y la fecha de creación de una orden de venta existente sin afectar otros datos:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Hacer click sobre **"Editar Creación"** en la orden.
3. Modificar el número de orden y/o la fecha de creación.
4. Presionar **"Actualizar Orden"**.

### Marcar una Orden como Regalo

Para marcar una orden de venta como regalo:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Hacer click sobre **"Regalar"** en la orden.

Esto marcará la orden como regalo y se reflejará en la factura resultante.

### Exportar Órdenes de Venta

Puede exportar todas las órdenes de venta abiertas a formato XLS desde el listado de órdenes usando la opción de exportación.

### Exportación Consolidada de Órdenes

Además de la exportación estándar, Zauru permite generar una exportación consolidada de órdenes de venta en formato XLS desde la vista de órdenes. Esta exportación agrupa las órdenes por criterios específicos y es útil para análisis y reportes operativos.

### Consultar Órdenes Anuladas

Para consultar el historial de órdenes anuladas:

1. Ir a **"Ventas"** > **"Órdenes"**.
2. Seleccionar **"Órdenes Anuladas"**.

## Gestión Avanzada de Facturas

### Importar Facturas no Pagadas

Zauru permite importar facturas no pagadas desde un archivo externo (CSV, XLS o XLSX) hacia el sistema. Esta funcionalidad es útil para migraciones de datos desde otros sistemas. Para más detalles, consulte el tutorial de **"Importar Facturas no Pagadas"**.

Para acceder a la importación:

1. Ir a **"Ventas"** > **"Facturas no Pagadas"**.
2. Seleccionar **"Importar"**.

### Emisión Rápida de Factura

Desde una orden de venta, puede emitir la factura rápidamente usando la opción **"Emisión Rápida"** (`issue_fast`). Esta opción genera la factura inmediatamente utilizando la fecha del día actual, sin necesidad de pasar por el formulario de creación de factura.

### Consultar Respuesta Certificada de Almacenamiento Externo (FEL)

Para facturas electrónicas emitidas con almacenamiento externo (FEL), Zauru permite consultar la respuesta certificada del servicio de almacenamiento:

1. Ir a la página de detalles de la factura.
2. Seleccionar la opción de **"Respuesta Certificada"** (`external_storage_certified_response`).

La respuesta se mostrará en formato XML o JSON dependiendo del país de configuración. En Guatemala se utiliza el formato XML estándar de la SAT.

### Consultar Respuesta Certificada para Anulación

De manera similar, para facturas electrónicas anuladas, puede consultar la respuesta certificada de anulación:

1. Ir a la página de detalles de la factura anulada.
2. Seleccionar la opción de **"Respuesta Certificada de Anulación"** (`external_storage_certified_response_for_voiding`).

Esta funcionalidad también está disponible para notas de crédito electrónicas, tanto para su emisión como para su anulación.

## API (llamadas desde sistemas externos)

### Consultar vendedores activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/active_sellers.json
```

### Listar órdenes de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders.json
```

### Obtener detalle de la orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1.json
```

### Obtener detalle de la factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

### Crear orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "reference": "Prueba de Orden de Venta",
      "date": "2024-01-15",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "10"
        }
      },
      "memo": "orden generada desde el API"
    }
  }' \
  https://app.zauru.com/sales/orders.json
```

### editar orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "invoice": {
      "id": "1",
      "reference": "Segunda prueba de Orden de Venta",
      "invoice_details_attributes": {
        "0": {
          "id": "1",
          "_destroy": "true"
        },
        "1": {
          "item_id": "2",
          "quantity": "1",
          "unit_price": "650",
          "reference": "reemplazo"
        },
        "2": {
          "id": "3",
          "reference": "editado",
          "quantity": "4"
        }
      },
      "memo": "generado desde el API 2"
    }
  }' \
  https://app.zauru.com/sales/orders/1.json
```

### eliminar ordenes de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/orders/1.json
```

### crear factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "reference": "Prueba de Factura",
      "date": "2018-12-14",
      "taxable": "1",
      "agency_id": "1",
      "payment_term_id": "1",
      "payee_info": "8005046-8 | Intuitiva, S.A. # 6646-4658",
      "seller_id": "1",
      "invoice_details_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "10"
        },
        "1": {
          "item_id": "2",
          "quantity": "20"
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices.json
```

Esto devolverá un JSON similar a este
```json
{
  "id":1,
  "invoice_number":"SERIE A - 123",
  "issued":true,
  "paid":false,
  "total":"120.0",
  "zid":1,
  "invoice_details":[
    {
      "id":100,
      "item_bundle_name":"PRODUCTO 1",
      "item_id":1,
      "quantity":10,
      "unit_price":"10.0"
    },
    {
      "id":101,
      "item_bundle_name":"SERVICIO 1",
      "item_id":2,
      "quantity":20,
      "unit_price":"1.0"
    }
  ]
}
```

### editar metadata de una factura (shallow update)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "invoice": {
      "id": "1",
      "invoice_number": "SERIE A - 456",
      "reference": "Referencia actualizada",
      "date": "2024-01-15",
      "seller_id": "1",
      "memo": "Nota actualizada desde API"
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices/1/shallow_update.json
```

### Emitir factura desde orden (fast issue)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/issue_fast.json
```

### Exportar órdenes de venta a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/export.xls
```

### Exportar facturas no pagadas a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/export.xls
```

### Consultar respuesta certificada de almacenamiento externo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response.json
```

### Anular factura no pagada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

### Listar facturas no pagadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices.json
```

### Obtener plantilla para crear una orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/new.json
```

### Obtener plantilla para crear una factura
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/new.json
```

### Editar una orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/edit.json
```

### Editar metadata de creación de una orden
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/edit_creation.json
```

### Actualizar metadata de creación de una orden
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "invoice": {
      "order_number": "ORD-456",
      "created_at": "2024-01-15"
    }
  }' \
  https://app.zauru.com/sales/orders/1/update_creation.json
```

### Anular una orden de venta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/void.json
```

### Marcar una orden de venta como regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/orders/1/gift.json
```

### Actualizar una factura no pagada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "invoice": {
      "reference": "Referencia actualizada",
      "invoice_details_attributes": {
        "0": {
          "id": "1",
          "quantity": "5"
        }
      }
    }
  }' \
  https://app.zauru.com/sales/unpaid_invoices/1.json
```

### Consultar respuesta certificada de anulación de almacenamiento externo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response_for_voiding.json
```

### Reenviar factura por correo electrónico
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/unpaid_invoices/1/resend_mail.json
```

### Generar impresión masiva de facturas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "from": "2024-01-01",
    "to": "2024-01-31"
  }' \
  https://app.zauru.com/sales/unpaid_invoices/gen_print_all.json
```

### Consultar el progreso de la impresión masiva
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/check_print_all.json?zid=123456
```
