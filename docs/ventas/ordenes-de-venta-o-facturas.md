---
title: "Ordenes de Venta y Facturas"
sidebar_label: "Ordenes de Venta y Facturas"
sidebar_position: 3
format: md
---

# Ordenes de Venta y Facturas

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



## API (llamadas desde sistemas externos)

### Consultar vendedores activos
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" https://app.zauru.com/sales/orders/active_sellers.json
```

### Obtener detalle de la factura
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" https://app.zauru.com/sales/unpaid_invoice/1.json
```

### editar orden de venta
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X PUT -d '{"invoice":{"id":"1", "reference":"Segunda prueba de Orden de Venta", "invoice_details_attributes":{"0":{"id":"1", "_destroy":"true"}, "1":{"item_id":"2", "quantity":"1", "unit_price":"650", "reference":"reemplazo"}, "2":{"id":"3", "reference":"editado", "quantity":"4"}}, "memo":"generado desde el API 2"}}' https://app.zauru.com/sales/orders/1.json
```

### eliminar ordenes de venta
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X DELETE https://app.zauru.com/sales/orders/1.json
```

### crear factura
```bash
curl -v -H "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"invoice":{"reference":"Prueba de Factura", "date":"2018-12-14","taxable":"1", "agency_id":"1", "payment_term_id":"1", "payee_info":"8005046-8 | Intuitiva, S.A. # 6646-4658", "seller_id":"1", "invoice_details_attributes":{"0":{"item_id":"1", "quantity":"10"}, "1":{"item_id":"2", "quantity":"20"}}, "memo":"generado desde el API"}}' https://app.zauru.com/sales/unpaid_invoices.json
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
