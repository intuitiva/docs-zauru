---
title: "Reportes"
sidebar_label: "Reportes"
sidebar_position: 24
---

Este tutorial describe los reportes contables disponibles en Zauru. Los reportes se acceden desde "Contabilidad" > "Reportes" y cubren todos los libros fiscales y reportes gerenciales necesarios para la administracion financiera.

## Reportes fiscales principales

### Balance General

Muestra la situacion patrimonial de la empresa a una fecha determinada. El reporte presenta:

- Activos (corrientes y no corrientes)
- Pasivos (corrientes y no corrientes)
- Capital o Patrimonio

**Parametros**:
- **Mes y año**: fecha de corte del balance.
- **Cantidad de meses**: cuantos meses hacia atras mostrar (permite ver la evolucion mensual).

**Versiones**:
- **Estandar**: clasifica por tipo de cuenta y liquidez, con totales por moneda.
- **Por grupos de cuenta**: consolida por grupo de cuenta en lugar de cuenta individual.
- **En moneda local**: convierte todos los saldos a la moneda de la entidad (se genera en segundo plano para balances grandes).

### Estado de Resultados (Perdidas y Ganancias)

Muestra los ingresos, costos y gastos de un periodo, calculando la utilidad bruta y neta.

**Parametros**:
- **Fecha de inicio** y **Fecha de fin**: periodo del reporte. Si no se especifica, muestra el mes actual.

**Estructura**:
1. **Ingresos**: agrupados por grupo de cuenta.
2. **Costos**: costo de ventas y costos operativos.
3. **Gastos**: gastos operativos y administrativos.
4. **Utilidad bruta**: ingresos - costos.
5. **Utilidad neta**: utilidad bruta - gastos.

**Versiones**:
- **Estandar**: por cuenta individual.
- **Por grupos de cuenta**: consolidado por grupo de cuenta.

### Flujo de Efectivo

Muestra los movimientos de efectivo del mes, partiendo de la utilidad neta y ajustando por cambios en cuentas por cobrar, cuentas por pagar y otras cuentas patrimoniales.

**Parametros**:
- **Ano**: año del flujo.
- **Mes**: permite ver el flujo acumulado hasta ese mes.

**Estructura del reporte**:
1. Utilidad neta del mes.
2. Cambios en cuentas por cobrar.
3. Cambios en cuentas por pagar.
4. Cambios en cuentas de activo y pasivo.
5. Cambios en cuentas de capital.
6. Flujo de efectivo neto (acumulado).

## Libros fiscales

### Libro de Ventas

Reporte fiscal que lista todas las facturas de venta emitidas en un mes. Esencial para la declaracion de impuestos.

**Parametros**:
- **Mes y año**: mes a reportar.
- **Agencia** (opcional): filtrar por agencia especifica.

**Informacion mostrada por factura**:
- Numero de factura y serie.
- NIT del cliente.
- Nombre del cliente.
- Monto de bienes (productos).
- Monto de servicios.
- Exportaciones.
- Ventas exentas.
- IVA de debito fiscal.
- Otros impuestos.
- Notas de credito asociadas.
- Total.

**Versiones del libro de ventas**:
- **Libro de ventas estandar**: listado detallado por factura.
- **Libro de ventas El Salvador**: formato especifico para El Salvador.
- **Libro de ventas consolidado**: agrupa facturas por serie de numeracion correlativa.
- **Libro de ventas consolidado sin impuestos**: solo facturas exentas y de exportacion.
- **Libro de ventas diario**: para un dia especifico o rango de dias.

### Libro de Compras

Reporte fiscal que lista todas las compras y gastos del mes. Se genera de forma asincrona para meses con alto volumen de transacciones.

**Parametros**:
- **Mes y año**: mes a reportar.

**Informacion mostrada**:
- Numero de documento.
- NIT del proveedor.
- Nombre del proveedor.
- Monto de la compra.
- IVA credito fiscal.
- Impuestos extra (combustible, etc.).
- Total.

El libro de compras utiliza las cuentas configuradas en [Configuraciones](configuraciones) para identificar gastos de combustible, impuestos al combustible y otros impuestos extra.

**Generacion asincrona**: Para meses con muchas transacciones, el reporte se genera en segundo plano. El sistema mostrara el progreso y, al finalizar, permitira descargar el Excel.

### Libro Diario

Registro cronologico de todas las transacciones contables del mes. Es la base de la contabilidad y permite verificar que todas las partidas esten cuadradas.

**Parametros**:
- **Mes y año**: mes a reportar.

**Informacion por transaccion**:
- Numero de documento.
- Fecha.
- Beneficiario.
- Cuenta debitada.
- Cuenta acreditada.
- Monto.
- Debe/Haber en moneda local y extranjera.
- Referencia.
- Numero de factura.

**Versiones**:
- **Libro diario estandar**: navegable con DataTables, permite busqueda y paginacion.
- **Libro diario consolidado**: agrupa por tipo de documento y cuenta.
- **Descarga Excel**: genera archivo Excel del libro diario completo.

### Libro Mayor

Muestra el movimiento de cada cuenta contable durante el mes, con su saldo inicial, movimientos del mes y saldo final. Permite verificar la integridad de los saldos de cada cuenta.

**Parametros**:
- **Mes y año**: mes a reportar.

**Versiones**:
- **Libro mayor mensual**: acumulado del mes.
- **Libro mayor diario**: desglose diario de movimientos por cuenta.

Ambas versiones se generan asincronamente para meses con alto volumen.

### Balanza de Comprobacion

Lista todas las cuentas con sus sumas del debe, sumas del haber y saldos en un rango de fechas personalizado.

**Parametros**:
- **Fecha de inicio** y **Fecha de fin**: periodo personalizado.

**Estructura**:
- Cuentas agrupadas por tipo (activo, pasivo, capital, ingresos, gastos).
- Para cada cuenta: saldo inicial, movimientos del periodo (debe y haber), saldo final.
- Subtotales por tipo de cuenta y por moneda.
- Permite verificar que el total de debitos sea igual al total de creditos.

## Reportes de cuenta

### Balance mensual de cuenta

Muestra el estado de cuenta mensual de una cuenta contable especifica, similar a un estado de cuenta bancario.

**Parametros**:
- **Cuenta**: cuenta contable a consultar.
- **Mes y año**: periodo inicial.
- **Cantidad de meses**: cuantos meses mostrar.
- **Mostrar dolares**: si la cuenta maneja multiples monedas, muestra equivalente en dolares.

**Informacion por transaccion**:
- Fecha.
- Documento.
- Descripcion / beneficiario.
- Debitos (cargos).
- Creditos (abonos).
- Saldo (balance corrido).

### Movimientos de beneficiario en cuenta

Muestra todas las transacciones de un beneficiario especifico dentro de una cuenta contable, con balance corrido.

**Parametros**:
- **Cuenta**: cuenta contable.
- **Beneficiario**: persona o empresa a consultar.

Util para revisar el historial completo de transacciones con un proveedor o cliente especifico en una cuenta determinada.

### Partidas no conciliadas (activos y pasivos reconciliables)

**Activos reconciliables no balanceados**: Lista todas las partidas abiertas (no reconciliadas) en cuentas de activo reconciliables, agrupadas por beneficiario.

**Pasivos reconciliables no balanceados**: Igual que el anterior pero para cuentas de pasivo reconciliables.

Estos reportes son utiles para identificar cuentas por cobrar y cuentas por pagar pendientes.

### Pagos pendientes de un beneficiario

Muestra todas las partidas no reconciliadas de un beneficiario especifico en una cuenta reconciliable.

**Parametros**:
- **Cuenta**: cuenta reconciliable.
- **Beneficiario**: cliente o proveedor.

### Activos correlativos imprimibles

Lista transacciones de cuentas de activo filtradas por rango de numeracion correlativa. Permite buscar documentos por su numero de serie y rango.

**Parametros**:
- **Cuenta**: cuenta de activo.
- **Prefijo**: serie o prefijo del numero de documento.
- **Rango de numeros**: desde y hasta.
- **Nombre**: filtro por nombre de beneficiario.

### Partidas no balanceadas

Reporte de auditoria que identifica transacciones cuyo monto no coincide con la suma de sus splits (desgloses), considerando tipos de cambio. Util para detectar errores de captura.

## Reportes por etiqueta (tag)

### Gastos mensuales por etiqueta

Muestra los gastos de un mes especifico filtrados por una etiqueta.

**Parametros**:
- **Mes y año**.
- **Etiqueta**.
- **Agrupado**: opcionalmente agrupa por grupo de cuenta.

### Gastos acumulados por etiqueta

Muestra todos los gastos historicos asociados a una etiqueta, sin limite de fecha.

**Parametros**:
- **Etiqueta**.
- **Agrupado**: opcionalmente agrupa por grupo de cuenta.

### Gasto por cuenta y etiqueta

Permite ver el detalle de transacciones de una cuenta de gasto especifica filtrada por etiqueta, con posibilidad de rango de fechas.

**Parametros**:
- **Cuenta** (o grupo de cuenta).
- **Etiqueta**.
- **Rango de fechas** (desde mes/ano hasta mes/ano).

### Gastos por proveedor y etiqueta

Muestra los gastos asociados a una etiqueta, agrupados por proveedor (beneficiario).

**Parametros**:
- **Etiqueta**.
- Opcionalmente por mes y año.

### Balance etiquetado

Muestra un balance corrido (tipo estado de cuenta) de todas las transacciones etiquetadas con un tag especifico. Util para llevar el control financiero de un proyecto o area.

**Parametros**:
- **Etiqueta**.

### Gastos agrupados por documento fuente

Muestra los gastos de una etiqueta agrupados por numero de factura o documento fuente en un rango de fechas.

**Parametros**:
- **Etiqueta**.
- **Fecha de inicio** y **Fecha de fin**.

### Gastos fiscales mensuales

Muestra los gastos mensuales agrupados por proveedor para transacciones que tienen factura asociada, en la moneda local de la entidad.

**Parametros**:
- **Ano y mes** de inicio.
- **Cantidad de meses** a mostrar.

### Gastos mensuales por proveedor y cuenta

Desglose de gastos mensuales por proveedor y ademas por cuenta contable.

**Parametros**:
- **Ano y mes** de inicio.
- **Cantidad de meses** a mostrar.

### Gastos por categoria de beneficiario

Muestra los gastos asociados a una etiqueta, agrupados por categoria de beneficiario.

**Parametros**:
- **Categoria de beneficiario**.

## Reportes por categoria de etiqueta

Todos los reportes por etiqueta tienen su contraparte por **categoria de etiqueta**, que abarca todas las etiquetas hijas de una categoria. Son utiles para ver resultados consolidados de areas o departamentos completos.

### Reportes disponibles por categoria de etiqueta

- Gastos mensuales por categoria de etiqueta.
- Gastos acumulados por categoria de etiqueta.
- Detalle por cuenta y categoria de etiqueta (con rango de fechas).
- Balance por categoria de etiqueta.
- Gastos por documento fuente y categoria de etiqueta.
- Gastos por proveedor y categoria de etiqueta.

## Reportes por proyecto

### Movimientos en cuentas de proyecto

Muestra las transacciones y balance corrido de una cuenta de proyecto (activo, pasivo o capital) filtradas por etiqueta.

**Parametros**:
- **Cuenta**: cuenta contable del proyecto.
- **Etiqueta**: tag asociado al proyecto.

### Ingresos etiquetados de cliente

Muestra los ingresos asociados a un cliente (beneficiario), agrupados por etiqueta.

**Parametros**:
- **Beneficiario** (cliente).

### Gastos etiquetados a proveedor

Muestra los gastos asociados a un proveedor (beneficiario), agrupados por etiqueta.

**Parametros**:
- **Beneficiario** (proveedor).
- **Etiqueta** (opcional, para filtrar aun mas).

## Verificacion de cuentas

### Verificacion de transacciones dentro del mes de creacion

Muestra para una cuenta especifica, las transacciones creadas en un mes y si fueron verificadas dentro del mismo mes.

**Parametros**:
- **Cuenta**: cuenta a verificar.
- **Mes y año**: mes de creacion de las transacciones.

## Corregir cuentas con valores incorrectos

Herramienta de mantenimiento que recalcula los saldos de todas las cuentas basandose en las transacciones existentes. Se ejecuta en segundo plano y se utiliza cuando se detecta que alguna cuenta no refleja su valor real.
