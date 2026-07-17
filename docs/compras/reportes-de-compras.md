---
title: "Reportes de Compras"
sidebar_label: "Reportes de Compras"
sidebar_position: 20
---

Este documento describe los reportes disponibles en el modulo de Compras de Zauru. Los reportes estan organizados por categoria para facilitar su consulta.

Para acceder a los reportes de compras:

1. Ir a "Compras".
2. Seleccionar "Reportes".

![imagen1](/img/compras/reportes-de-compras-1.jpg)

---

## Reportes de Costo de Inventario

### Costo de Inventario Actual
Muestra el costo actual del inventario disponible en todas las agencias. Incluye el costo promedio ponderado de cada producto, el stock disponible, el stock fisico y el valor total del inventario. Puede exportarse en formato CSV (compatible con SAT) o XLS.

### Costo de Inventario Actual por Agencia
Similar al reporte anterior pero filtrado para una agencia especifica. Muestra el costo promedio de cada producto en la bodega seleccionada.

### Costo de Inventario Actual (Metodo PEPS)
Muestra el costo actual del inventario utilizando el metodo de valuacion PEPS (Primeras Entradas, Primeras Salidas) en lugar del costo promedio ponderado. Disponible por agencia y con exportacion SAT.

### Costo de Inventario a una Fecha
Muestra el costo del inventario a una fecha historica especifica. Utiliza los costos promedios registrados hasta esa fecha para reconstruir el valor del inventario en el pasado.

### Movimientos de Costo de Inventario
Muestra los movimientos de inventario (entradas y salidas) entre dos fechas para una agencia. Incluye saldos iniciales, movimientos y saldos finales.

---

## Reportes de Proveedores y Cuentas por Pagar

### Proveedores - Saldos Pendientes de Pago
Reporte de antiguedad de saldos que muestra las cuentas por pagar a proveedores separadas por periodos de vencimiento (corriente, 1-30 dias, 31-60 dias, 61-90 dias, 91-120 dias, mas de 120 dias). Agrupa los saldos por proveedor y por moneda, mostrando el total de compras, cargos y pagos realizados. Exportable a XLS.

### Proveedores - Saldos Pendientes Detallado
Version detallada del reporte de antiguedad de saldos. Muestra cada orden de compra y cada cargo individual con su saldo pendiente, separado por periodos de vencimiento. Permite filtrar por categoria de proveedor.

### Proveedores - Saldos Pendientes a una Fecha
Igual al reporte de saldos pendientes pero permite seleccionar una fecha de referencia para calcular los periodos de vencimiento. Util para hacer cortes de saldos a fechas pasadas. Permite filtrar por agencia y por proveedor.

### Estado de Cuenta de Proveedor por Meses
Muestra el estado de cuenta completo de un proveedor entre dos meses. Incluye todas las ordenes de compra y cargos emitidos en el periodo, asi como los pagos realizados. Calcula el saldo corriente (compras + cargos - pagos) incluyendo documentos emitidos fuera del periodo que tengan pagos dentro del periodo.

---

## Reportes de Compras por Producto

### Productos Comprados a Proveedores entre Fechas
Muestra los productos comprados a cada proveedor entre dos fechas. Agrupa por proveedor y producto, mostrando la cantidad comprada, el costo con IVA y el costo sin IVA. Util para analisis de compras por proveedor.

### Productos Comprados entre Fechas
Muestra un resumen de productos comprados entre dos fechas, agrupados por producto. Incluye la cantidad total comprada, el costo unitario promedio y el costo total. Permite filtrar por agencia.

### Categorias de Productos Comprados entre Fechas
Muestra las compras agrupadas por categoria de producto entre dos fechas. Incluye el costo total por categoria. Tambien agrupa las compras de cuentas contables por grupo de cuenta.

### Categorias de Productos Comprados por Agencia entre Fechas
Similar al reporte anterior pero agrupado por agencia y categoria de producto. Muestra cantidades, costos en moneda local y costos sin IVA.

### Item de Compra entre Fechas
Reporte detallado de compras de un producto especifico entre dos fechas. Muestra cada orden de compra que incluye ese producto, con cantidades, costos unitarios originales y costos finales calculados.

### Categoria de Item de Compra entre Fechas
Similar al reporte anterior pero para una categoria completa de productos. Muestra todas las ordenes de compra que incluyen productos de la categoria seleccionada.

### Items de Compras entre Fechas
Reporte matricial donde las filas son las ordenes de compra y las columnas son los productos. Muestra cantidades solicitadas/recibidas, costos unitarios originales y costos computados finales para cada combinacion orden-producto.

### Cuentas de Compras entre Fechas
Reporte matricial similar al anterior pero para compras de cuentas contables (servicios o gastos). Las filas son las ordenes de compra y las columnas son las cuentas contables.

### Ordenes de Compra entre Fechas
Lista las ordenes de compra emitidas entre dos fechas. Permite filtrar por agencia y por categoria de producto. Muestra informacion de recepcion y agencia de cada item.

---

## Reportes Operativos y de Conciliacion

### Cierre Diario de Compras
Reporte diario que muestra todas las ordenes de compra emitidas en un dia, los pagos realizados y las ordenes de compra anuladas. Agrupa totales por termino de pago y por metodo de pago. Util para cuadres de caja diarios.

### Ordenes de Compra sin Recibir
Lista todas las ordenes de compra que han sido autorizadas pero no han sido recibidas aun. Util para dar seguimiento a compras pendientes de recepcion.

### Ordenes de Compra Recibidas por Mes
Muestra las ordenes de compra recibidas en un mes especifico. Incluye informacion del proveedor, termino de pago, moneda, tipo de cambio, agencia y envios asociados.

### Ordenes de Compra por Comprador por Mes
Agrupa las ordenes de compra emitidas en un mes por comprador. Util para evaluar el desempeno de los compradores.

### Pagos por Comprador por Mes
Muestra los pagos realizados agrupados por comprador y por metodo de pago dentro de un periodo.

### Ordenes de Compra con Documentos Electronicos por Mes
Muestra las ordenes de compra que tienen documentos tributarios electronicos asociados (FEL, DTE, etc.) recibidas en un mes especifico.

### Pagos Huerfanos
Identifica detalles de pago que no estan asociados a ninguna orden de compra ni a ningun cargo. Util para detectar registros inconsistentes.

### Recepciones sin Partida Contable
Detecta recepciones de mercaderia que no generaron su partida contable correspondiente. Incluye la opcion de generar la partida faltante con un solo click.

### Discrepancias de Fechas en Ordenes de Compra
Muestra ordenes de compra donde la fecha de emision difiere de la fecha de la partida contable. Util para identificar posibles errores de registro.

### Ordenes de Compra sin Costo Computado
Identifica ordenes de compra recibidas cuyos productos no tienen un registro de costo computado asociado.

### Ordenes de Compra con Transaccion de Inventario Incorrecta
Detecta ordenes de compra cuyas partidas contables estan mal configuradas (utilizan una cuenta de compras en lugar de la cuenta de inventario).

---

## Reportes de Correccion y Sincronizacion

### Sincronizar Costos Promedios
Compara los costos promedios de los productos con los costos computados y actualiza los valores que no coinciden.

### Diferencias en Costos Computados
Muestra los productos cuyo costo promedio en el catalogo de productos difiere del costo promedio registrado en el historial de costos computados.

### Corregir Ordenes de Compra No Pagadas con Saldo Cero
Detecta y corrige ordenes de compra que tienen saldo pendiente cero pero no estan marcadas como pagadas.

### Sincronizar Saldos de Ordenes de Compra con Pagos
Reconstruye los saldos pendientes de las ordenes de compra basandose en los pagos registrados.

### Sincronizar Saldos de Cargos con Pagos
Reconstruye los saldos pendientes de los cargos basandose en los pagos registrados.

---

## Kardex de Producto

### Kardex de Producto entre Fechas
Muestra el historial completo de movimientos de un producto entre dos meses. Incluye todas las entradas (compras) y salidas (ventas), con sus costos unitarios, costos promedio y saldos acumulados. Util para auditoria de costos y trazabilidad de inventario.

---

## API (llamadas desde sistemas externos)

La mayoria de los reportes pueden ser accedidos via API. A continuacion algunos ejemplos:

### Costo de inventario actual
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/reports/current_inventory_cost.json
```

### Saldos pendientes de proveedores
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/reports/vendors_unpaid_payments.json
```

### Productos comprados entre fechas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/purchases/reports/purchased_items_between_dates?s_date=2024-01-01&e_date=2024-01-31"
```

### Costo de inventario actual (DataTables)
Devuelve el costo del inventario disponible en todas las agencias paginado al estilo DataTables.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/purchases/reports/datatables_inventory_cost.json
```

### Ordenes de compra sin recibir (DataTables)
Devuelve las ordenes de compra autorizadas que aun no han sido recibidas, paginado al estilo DataTables.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/purchases/reports/datatables_unreceived_purchase_orders.json
```

### Verificar el estado de un reporte
Verifica el estado de generación de un reporte asíncrono a partir de su identificador `zid`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  "https://app.zauru.com/purchases/reports/check_report.json?zid=1234"
```
