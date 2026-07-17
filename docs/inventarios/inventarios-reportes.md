---
title: "Reportes de Inventario"
sidebar_label: "Reportes"
sidebar_position: 11
---

Zauru incluye un conjunto completo de reportes de inventario que le permiten analizar, auditar y corregir sus datos de inventario. Los reportes se dividen en dos categorías principales: **Reportes de Reparación** (para corregir inconsistencias) y **Reportes Analíticos** (para análisis de negocio).

## Acceder a los reportes

1. Ir a "Inventarios".
2. Seleccionar "Reportes".

Encontrará el listado completo de reportes disponibles organizados por categoría.

---

## Reportes de Reparación

Estos reportes le permiten identificar y corregir inconsistencias entre los datos del sistema. Se ejecutan de forma asíncrona en segundo plano para no afectar el rendimiento.

### Corregir existencias desincronizadas (Fix Unmatched Stock)

Recalcula todas las cantidades de existencias (stock) a partir del historial de envíos, asegurando que las cantidades disponibles, entrantes y salientes sean correctas.

**Cuándo usarlo**: Cuando detecta que las cantidades de existencias no coinciden con el historial de movimientos (por ejemplo, disponible + entrante - saliente no coincide con lo esperado).

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Corregir existencias desincronizadas".
3. Seleccionar "Ejecutar corrección".

El sistema procesará la corrección en segundo plano. Puede monitorear el progreso en pantalla.

### Corregir lotes desincronizados (Fix Unmatched Lot)

Recalcula todas las cantidades de existencias de lotes (lot_stocks) a partir del historial de envíos.

**Cuándo usarlo**: Cuando las cantidades de lotes no coinciden con los movimientos registrados.

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Corregir lotes desincronizados".
3. Seleccionar "Ejecutar corrección".

### Corregir ubicaciones de números de serie (Fix Serials Locations)

Recalcula la ubicación actual de cada número de serie basándose en su último movimiento registrado.

**Cuándo usarlo**: Cuando un número de serie aparece en una bodega incorrecta o su ubicación no coincide con el último envío donde participó.

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Corregir ubicaciones de números de serie".
3. Seleccionar "Ejecutar corrección".

### Corregir entregas no registradas (Fix Undelivered Deliveries)

Asigna la cantidad reservada (booked_quantity) como cantidad entregada (delivered_quantity) para todos los envíos que fueron entregados directamente sin pasar por tránsito y que no tienen cantidades entregadas registradas.

**Cuándo usarlo**: Cuando hay envíos entregados que no muestran cantidades entregadas correctamente.

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Corregir entregas no registradas".
3. Seleccionar "Ejecutar corrección".

### Listar números de serie sin stock suficiente (List Unmatched Serials With Stocks)

Identifica ítems donde la cantidad de números de serie en una bodega es **mayor** que la cantidad de existencias disponibles de ese ítem en esa bodega.

**Cuándo usarlo**: Para detectar inconsistencias donde hay más números de serie registrados que stock físico (por ejemplo, 5 seriales pero solo 3 unidades en stock).

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Seriales sin stock suficiente".
3. Seleccionar "Generar reporte".

### Listar números de serie y stock diferentes (List Unmatched Serials And Stocks)

Identifica ítems donde la cantidad de números de serie en una bodega es **diferente** (mayor o menor) que la cantidad de existencias.

**Cuándo usarlo**: Para una auditoría más amplia donde cualquier diferencia entre seriales y stock es relevante.

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Seriales y stock diferentes".
3. Seleccionar "Generar reporte".

### Listar lotes con stock inconsistente (List Unmatched Lots With Stocks)

Identifica ítems donde las cantidades de lotes no coinciden con las cantidades de existencias.

**Cuándo usarlo**: Para detectar diferencias entre la suma de cantidades de lotes y el stock registrado del producto.

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Lotes con stock inconsistente".
3. Seleccionar "Generar reporte".

### Listar movimientos con serial o lote diferente (List Unmatched Movements With Different Serial Or Lot Number)

Identifica movimientos de envíos donde el número de serie o lote registrado en el movimiento no coincide con el producto del movimiento.

---

## Reportes Analíticos

Estos reportes proporcionan información de negocio para la toma de decisiones. Muchos de ellos permiten exportación a formato Excel (.xls).

### Producciones mensuales por empleado (Monthly Productions By Booker)

Muestra los envíos de producción (hacia la bodega virtual de Producción) realizados por un empleado específico en un mes determinado.

**Filtros**:
- **Mes y año**: Seleccione el período a consultar.
- **Empleado**: Seleccione el empleado (booker) que realizó las producciones.

**Columnas**: Producto, cantidad producida, fecha de entrega, referencia del envío.

### Producciones mensuales (Monthly Productions)

Muestra un resumen de todas las producciones del mes agrupadas por empleado.

**Filtros**:
- **Mes y año**: Seleccione el período a consultar.

**Columnas**: Empleado, cantidad de envíos de producción realizados.

### Balance mensual de bodega (Monthly Warehouse Balance)

Muestra el balance de inventario mensual: saldo inicial, ingresos, egresos, egresos no entregados y saldo final para cada producto en una bodega o en todas las bodegas.

**Filtros**:
- **Mes y año**: Período a consultar.
- **Bodega**: Bodega específica o todas.
- **Tipo de stock**: Stock disponible (available) o stock físico (available + outgoing).

**Columnas**: Producto, categoría, saldo inicial, ingresos, egresos, egresos no entregados, saldo final.

**Exportación**: Disponible en formato XLS.

### Balance mensual de bodega por proveedor (Monthly Warehouse Balance By Vendor)

Similar al balance mensual pero filtrado por proveedor. Muestra el movimiento de inventario de los productos de un proveedor específico.

**Filtros**:
- **Mes y año**: Período a consultar.
- **Bodega**: Bodega específica o todas.
- **Proveedor**: Seleccione el proveedor a analizar.

**Exportación**: Disponible en formato XLS.

### Balance mensual de bodega por categoría (Monthly Warehouse Balance By Category)

Similar al balance mensual pero filtrado por categoría de productos. Muestra el movimiento de inventario de los productos de una categoría específica.

**Filtros**:
- **Mes y año**: Período a consultar.
- **Bodega**: Bodega específica (requerido).
- **Categoría**: Seleccione la categoría de productos.

**Exportación**: Disponible en formato XLS.

### Consumo de inventario por proveedor (Vendor Inventory Consumption)

Analiza el consumo mensual promedio de los productos de cada proveedor y calcula cuántos meses de inventario restan según el stock actual.

**Filtros**:
- **Meses a analizar**: Cantidad de meses hacia atrás para calcular el consumo promedio.
- **Proveedor**: Seleccione el proveedor o vea todos.

**Columnas**: Producto, categoría, saldo inicial, ingresos totales, egresos totales, saldo final, consumo mensual promedio, meses restantes de inventario.

**Indicadores clave**:
- **Consumo mensual promedio**: Total de egresos / meses analizados.
- **Meses restantes**: Stock actual / consumo mensual promedio.

**Exportación**: Disponible en formato XLS.

### Existencias por proveedor (Vendor Stocks)

Muestra el nivel actual de existencias de todos los productos de un proveedor, incluyendo disponible, entrante y saliente.

**Filtros**:
- **Proveedor**: Seleccione el proveedor a consultar.

**Columnas**: Producto, categoría, disponible, entrante, saliente.

**Exportación**: Disponible en formato XLS.

### Productos bajo punto de re orden (Stocks Less Than Reorder Point)

Muestra todos los productos que están por debajo de su punto de re orden, indicando la necesidad de reabastecimiento.

**Filtros**:
- **Bodega**: Bodega específica o todas.

**Columnas**: Producto, categoría, disponible, punto de re orden, última compra (fecha, proveedor, cantidad, precio).

**Exportación**: Disponible en formato XLS.

### Detalle de envíos desde producción (Monthly Shipment Details From Production)

Muestra el detalle de todos los envíos que salieron de la bodega virtual de Producción en un mes específico.

**Filtros**:
- **Mes y año**: Período a consultar.

**Columnas**: Producto, cantidad, fecha de entrega, proveedor, bodega destino, empleado que reservó, referencia del envío.

**Exportación**: Disponible en formato XLS.

### Detalle de envíos hacia producción (Monthly Shipment Details To Production)

Muestra el detalle de todos los envíos que ingresaron a la bodega virtual de Producción en un mes específico.

**Filtros**:
- **Mes y año**: Período a consultar.

**Columnas**: Producto, cantidad, fecha de entrega, proveedor, bodega origen, empleado que reservó, referencia del envío.

**Exportación**: Disponible en formato XLS.

### Productos movidos entre bodegas (Items Moved Between Warehouses)

Muestra las cantidades diarias de productos movidos entre dos bodegas específicas.

**Filtros**:
- **Bodega origen**: Bodega desde donde salen los productos.
- **Bodega destino**: Bodega hacia donde van los productos.
- **Tipo de fecha**: Fecha de entrega (delivered_at) o fecha planificada de entrega (planned_delivery).

**Columnas**: Día, producto, cantidad movida.

### Últimos movimientos por bodega (Last Movements Per Agency)

Muestra el último movimiento registrado de cada producto en cada bodega. Este reporte se genera de forma asíncrona y se almacena en caché para consultas posteriores.

**Filtros**:
- **Bodega**: Seleccione la bodega a consultar.
- **Rango de fechas**: Filtre por fecha de creación.

**Funcionamiento**:
- La primera vez que consulta este reporte, se inicia la generación en segundo plano.
- Puede monitorear el progreso en pantalla.
- Una vez generado, el reporte queda disponible en caché.
- Puede refrescar el reporte para regenerarlo con datos actualizados.

**Exportación**: Disponible en formato XLS.

### Costos de envíos por bodega y fecha (Shipments Cost By Agency And Date)

Calcula el costo de los envíos realizados, mostrando el costo promedio, costo total y precio de venta sugerido.

**Filtros**:
- **Bodega origen**: Bodega desde donde salieron los productos.
- **Cliente (bodega destino)**: Bodega de destino (típicamente una bodega de cliente). Se muestran las bodegas no virtuales que no son almacén.
- **Rango de fechas**: Período de fechas de entrega.
- **Proveedores**: Filtrar por uno o más proveedores.

**Columnas**: Referencia del envío, fecha de entrega, descripción, cantidad, costo unitario, costo total, precio unitario, precio total.

**Cálculo de costos**:
- Utiliza el costo promedio computado del producto a la fecha del envío.
- Si no hay costo computado, utiliza el costo promedio del ítem.
- El precio de venta se obtiene del precio sugerido del ítem para la bodega destino.

**Exportación**: Disponible en formato XLS.

---

## Consideraciones sobre los reportes asíncronos

Algunos reportes (como los de reparación y "Últimos movimientos por bodega") se ejecutan de forma asíncrona para evitar bloquear la interfaz. El proceso es el siguiente:

1. Usted solicita la generación del reporte.
2. El sistema crea un trabajo en segundo plano y le muestra el progreso.
3. Puede monitorear el estado: Pendiente, Procesando, Completado o Fallido.
4. Una vez completado, el reporte se muestra en pantalla o se descarga.

Si un reporte falla, puede volver a intentarlo. Si un reporte en caché está desactualizado, puede refrescarlo para generar una nueva versión.

## API (llamadas desde sistemas externos)

Los reportes de reparación y "Últimos movimientos por bodega" se ejecutan de forma asíncrona. Desde un sistema externo puede iniciar la generación de un reporte y luego consultar su estado hasta que termine.

### Consultar el estado de un reporte
Devuelve el estado, porcentaje y mensaje de un reporte asíncrono en ejecución. El parámetro `zid` es el identificador retornado al iniciar la generación y `report` es el nombre del reporte.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/reports/check_report.json?zid=123&report=fix_unmatched_stock
```

### Corregir existencias desincronizadas
Inicia en segundo plano la corrección de las cantidades de existencias a partir del historial de envíos.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_fix_unmatched_stock.json
```

### Corregir lotes desincronizados
Inicia en segundo plano la corrección de las cantidades de existencias de lotes a partir del historial de envíos.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_fix_unmatched_lot.json
```

### Corregir ubicaciones de números de serie
Inicia en segundo plano la corrección de la ubicación actual de cada número de serie.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_fix_serials_locations.json
```

### Corregir entregas no registradas
Inicia en segundo plano la asignación de cantidades reservadas como entregadas en los envíos entregados sin cantidades entregadas.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_fix_undelivered_deliveries.json
```

### Generar reporte de números de serie sin stock suficiente
Inicia en segundo plano la generación del reporte que identifica ítems donde la cantidad de números de serie es mayor que la existencia disponible.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_list_unmatched_serials_with_stocks.json
```

### Generar reporte de números de serie y stock diferentes
Inicia en segundo plano la generación del reporte que identifica ítems donde la cantidad de números de serie difiere de la existencia.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_list_unmatched_serials_and_stocks.json
```

### Generar reporte de lotes con stock inconsistente
Inicia en segundo plano la generación del reporte que identifica ítems donde las cantidades de lotes no coinciden con las existencias.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/inventories/reports/gen_list_unmatched_lots_with_stocks.json
```

### Consultar el estado del reporte de últimos movimientos por bodega
Devuelve el estado, porcentaje y, cuando está listo, la URL de redirección para visualizar el reporte de últimos movimientos por bodega.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/reports/check_last_movements_per_agency.json?zid=123
```
