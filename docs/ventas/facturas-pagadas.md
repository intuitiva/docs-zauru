---
title: "Facturas Pagadas"
sidebar_label: "Facturas Pagadas"
sidebar_position: 11
---

Este tutorial está enfocado en como consultar, imprimir y gestionar las facturas que ya han sido pagadas total o parcialmente.

## Listar Facturas Pagadas

Para consultar la lista de facturas pagadas:

1. Ir a **"Ventas"**.
2. Seleccionar **"Facturas Pagadas"**.

![imagen1](/img/ventas/facturas-pagadas-1.png)

Las facturas pagadas pueden filtrarse por:

a. **Alcance (Scope)**:
   - **Contado**: Muestra solo facturas pagadas de contado.
   - **Crédito**: Muestra solo facturas pagadas a crédito.
   - **Todas**: Muestra todas las facturas pagadas.

b. **Rango de fechas**:
   - **Desde**: Fecha de inicio del rango de búsqueda.
   - **Hasta**: Fecha de fin del rango de búsqueda.

En el listado se muestra información como el número de factura, cliente, total, fecha, vendedor, punto de venta, y notas de crédito asociadas.

## Ver Detalles de una Factura Pagada

Para ver los detalles de una factura pagada:

1. Ir a **"Ventas"** > **"Facturas Pagadas"**.
2. Hacer click sobre **"Verificar"** (El ojo) en la factura que desea consultar.

![imagen2](/img/ventas/facturas-pagadas-2.png)

En la página de detalles podrá encontrar:
- Información general de la factura (número, fecha, cliente, vendedor, punto de venta).
- Los productos o servicios facturados con sus cantidades y precios.
- Las transacciones contables generadas.
- Los movimientos de inventario asociados.
- Los cobros/pagos asociados a la factura.
- Las notas de crédito emitidas sobre la factura.
- Las plantillas de impresión disponibles.

## Imprimir una Factura Pagada

Para imprimir una factura pagada:

1. En la página de detalles de la factura, seleccione una **plantilla de impresión** disponible en la parte inferior.
2. Haga click sobre **"Imprimir"** para ver la vista previa de impresión.
3. Presione **CTRL + P** para enviar a la impresora.

![imagen3](/img/ventas/facturas-pagadas-2.png)

### Descargar como PDF

También puede descargar la factura como archivo PDF:

1. En la página de detalles de la factura, seleccione la plantilla de impresión.
2. Haga click sobre **"Descargar PDF"**.

## Editar Metadata de una Factura Pagada

Zauru permite realizar una edición superficial (shallow edit) de ciertos campos de una factura pagada sin afectar las transacciones contables. Los campos que se pueden editar son:

- Número de factura.
- Referencia.
- Fecha.
- Vendedor.
- Notas/Memo.
- Etiquetas (tags).

Para realizar esta edición:

1. Ir a **"Ventas"** > **"Facturas Pagadas"**.
2. Localizar la factura que desea editar y hacer click sobre **"Editar"** (El lápiz).
3. Realizar los cambios necesarios.
4. Presionar **"Actualizar Factura"**.

![imagen4](/img/ventas/facturas-pagadas-2.png)

## Anular una Factura Pagada

Para anular una factura que ya está pagada, primero debe anular el pago asociado. Consulte el tutorial de **"Anular una factura o recibo"** para el procedimiento completo.

Las facturas pagadas que no tienen detalles de pago y tienen saldo pendiente en cero pueden ser anuladas directamente con la opción **"Anular sin Pagos"**.

## API (llamadas desde sistemas externos)

### Ver detalle de una factura pagada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/paid_invoices/1.json
```

### Editar metadata de una factura pagada
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
      "invoice_number": "SERIE A - 123",
      "reference": "Referencia actualizada",
      "date": "2024-01-15",
      "seller_id": "1",
      "memo": "Nota actualizada"
    }
  }' \
  https://app.zauru.com/sales/paid_invoices/1/shallow_update.json
```

### Eliminar una factura pagada anulada
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1.json
```

### Anular una factura pagada sin pagos asociados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/paid_invoices/1/no_payments_void.json
```
