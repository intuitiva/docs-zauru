---
title: "Reportes"
sidebar_label: "Reportes"
sidebar_position: 12
---

El modulo de Punto de Venta incluye una seccion de reportes que le permite consultar las ventas, cobros y operaciones realizadas desde el punto de venta.

Para acceder a los reportes:

1. Ir a "P.D.V."
2. Seleccionar "Reportes".

Le aparecera un menu con los siguientes reportes disponibles:

## Mis Facturas

Este reporte muestra las facturas emitidas por el vendedor actual en un mes especifico.

**Parametros**:
- **Mes y ano**: Seleccione el mes y ano a consultar. Por defecto muestra el mes actual.

**Informacion mostrada**:
- Listado de facturas emitidas por el vendedor en el mes seleccionado.
- Total facturado en el mes.
- Cantidad de facturas emitidas.
- Cantidad de productos vendidos (items facturados).

## Cierre Diario

Este reporte muestra un resumen detallado de la operacion de un dia especifico en el punto de venta.

**Parametros**:
- **Fecha**: Seleccione el dia a consultar. Por defecto muestra la fecha actual.
- **Vendedor**: Puede filtrar por un vendedor especifico o seleccionar "Todos" para ver la operacion completa del punto de venta.

**Informacion mostrada**:
- **Facturas emitidas**: Listado de facturas del dia, agrupadas por termino de pago, con totales facturados.
- **Cobros realizados**: Listado de pagos recibidos en el dia, agrupados por metodo de pago, con totales cobrados (en moneda local y moneda original).
- **Facturas anuladas**: Facturas que fueron anuladas en la fecha seleccionada.
- **Totales**: Suma total facturada y suma total cobrada.

**Exportacion**: Este reporte se puede exportar a formato XLS.

## Cierre Diario de Productos

Similar al cierre diario, pero incluye el desglose de productos vendidos.

**Parametros**:
- **Fecha**: Seleccione el dia a consultar.
- **Vendedor**: Filtro por vendedor.

**Informacion mostrada**:
- Facturas del dia con sus productos.
- Totales facturados y cobrados con desglose por producto.

## Cierre Diario Resumido

Version resumida del cierre diario, mostrando unicamente totales facturados y cobrados sin el detalle de cada documento.

**Parametros**:
- **Fecha**: Seleccione el dia a consultar.
- **Vendedor**: Filtro por vendedor.

## Cierre Diario Consolidado

Reporte mensual que consolida la operacion de todo un mes, mostrando totales por dia.

**Parametros**:
- **Mes y ano**: Seleccione el mes a consultar.
- **Vendedor**: Filtro por vendedor.

**Informacion mostrada**:
- Cantidad de facturas emitidas por dia.
- Cantidad de facturas anuladas por dia.
- Total facturado por dia.
- Notas de credito emitidas por dia (cantidad y monto).
- Facturas por termino de pago (cantidad y monto).
- Cobros por metodo de pago (monto).
- Correlatividad de numeros de factura por dia (para facturas no electronicas).

## Ventas Mensuales por Vendedor y Categoria de Cliente

Reporte que desglosa las ventas mensuales por vendedor y por categoria de cliente.

**Parametros**:
- **Mes y ano**: Seleccione el mes a consultar.
- **Incluir IVA**: Active esta opcion si desea que los montos incluyan IVA.
- **Incluir notas de credito**: Active esta opcion si desea que se descuenten las notas de credito del mes.

**Informacion mostrada**:
- Matriz de ventas: vendedores (filas) vs categorias de cliente (columnas).
- Totales facturados por vendedor.
- Totales facturados por categoria de cliente.
- Notas de credito desglosadas por vendedor y categoria de cliente (si se incluyen).
- Ventas reales (facturas menos notas de credito).

## Productos Vendidos en el Dia

Reporte que muestra cuantos productos se vendieron, a que precio promedio y el total de venta por producto en un dia especifico.

**Parametros**:
- **Fecha**: Seleccione el dia a consultar.
- **Vendedor**: Filtro por vendedor.
- **Incluir notas de credito**: Active para descontar las notas de credito.

**Informacion mostrada**:
- Productos vendidos con cantidad total.
- Paquetes (bundles) vendidos con cantidad total.
- Precio promedio de venta por producto.
- Total de venta por producto.
- Gran total de ventas del dia.

**Exportacion**: Este reporte se puede exportar a formato XLS.

## API (llamadas desde sistemas externos)

### Cierre diario

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/pos/reports/daily_close?date=2024-01-15"
```

### Mis facturas del mes

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/pos/reports/my_invoices?year=2024&month=1"
```

### Ventas mensuales por vendedor y categoria de cliente

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/pos/reports/monthly_sales_by_seller_and_client_category?year=2024&month=1"
```
