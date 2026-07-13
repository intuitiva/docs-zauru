---
title: "Contabilidad"
sidebar_label: "Contabilidad"
sidebar_position: 0
---

Este módulo sirve para el control de dinero de la empresa mediante un sistema de partida doble, permitiendo llevar la contabilidad de forma completa. Incluye las siguientes funcionalidades:

## Configuración y catálogo de cuentas

1. **Configuraciones generales**: establecimiento de cuentas contables para IVA, inventario, cierre de resultados, fechas de cierre, prioridades de centro de costos y configuraciones del libro de compras.
2. **Nomenclatura contable**: creación y gestión de cuentas patrimoniales (activos, pasivos, capital) y cuentas de gestión (ingresos, gastos), con soporte para múltiples monedas.
3. **Grupos de cuentas**: agrupación jerárquica de cuentas contables con códigos, tipos y monedas, incluyendo importación masiva por CSV.
4. **Tipos de cuenta**: administración de tipos de cuenta (activo, pasivo, capital, ingresos, gastos) para clasificar la naturaleza contable.
5. **Cuentas sugeridas**: catálogo de cuentas sugeridas por tipo de entidad para facilitar la creación del catálogo contable.
6. **Tipificación de cuentas de egresos**: clasificación de cuentas como gastos o costos para que aparezcan correctamente en el estado de resultados.

## Beneficiarios y centro de costos

7. **Beneficiarios**: gestión de clientes, proveedores y ambos, con categorías, datos fiscales, etiquetas, formularios personalizados y términos de pago.
8. **Centro de costos**: creación de categorías y centros de costo para asignar transacciones a proyectos, departamentos o unidades de negocio.

## Manejo de impuestos indirectos

9. **Manejo de IVA**: registro automático de IVA por pagar (débito fiscal) e IVA por cobrar (crédito fiscal), con opción de agregar IVA manualmente en transacciones y proceso de regularización mensual.

## Transacciones y operaciones contables

10. **Transacciones (partidas contables)**: creación, edición, borrado, verificación, auditoría, impresión individual y múltiple, descarga de PDF, delegación de tareas, etiquetado, adjunto de imágenes y asignación a centro de costos. Las ediciones generan una bitácora de historial.
11. **Liquidaciones**: registro de pagos o cobros consolidados contra una cuenta reconciliable, seleccionando múltiples partidas para saldarlas en una sola operación.
12. **Importación de transacciones**: carga masiva de partidas contables desde archivos CSV.

## Conciliaciones y Reconciliaciones

13. **Conciliación bancaria**: comparación entre el estado de cuenta del banco y los registros en Zauru, identificando cheques en circulación y partidas no registradas. Permite cerrar conciliaciones y generar reportes.
14. **Enlazar partidas (reconciliar)**: vinculación de transacciones relacionadas (ej. factura con su pago) para llevar un control detallado de cuentas por cobrar y por pagar.
15. **Verificar partidas contables**: marcado de transacciones como verificadas para evitar su edición o borrado posterior, facilitando la auditoría contra estados de cuenta.

## Presupuestos

16. **Presupuestos mensuales**: presupuestos de ingresos o gastos por mes, con detalle por cuenta contable o grupo de cuenta, montos dinámicos basados en otras cuentas, duplicación de presupuestos y vista de ejecutado vs presupuestado.
17. **Presupuestos por etiqueta**: presupuestos de gastos o ingresos asociados a una etiqueta (tag), con detalle por cuenta contable.
18. **Presupuestos por categoría de etiqueta**: presupuestos asociados a una categoría de etiquetas, abarcando todas sus etiquetas hijas, con visualización jerárquica de gráfico de árbol y ejecución por etiqueta.

## Cierres

19. **Cierre mensual del estado de resultados**: proceso automático que consolida los saldos de ingresos y gastos del mes, trasladando la utilidad o pérdida a una cuenta de capital.
20. **Cierre temporal mensual y anual**: generación de cierres temporales que se procesan en segundo plano para no interrumpir la operación.

## Libros fiscales y reportes

21. **Balance General**: reporte multi-mes de activos, pasivos y capital, con desglose por moneda, liquidez y grupos de cuenta. Incluye balance en moneda local con generación asíncrona.
22. **Estado de Resultados**: reporte de ingresos, costos y gastos para un período, con utilidad bruta y neta por moneda, versión por grupos de cuenta.
23. **Flujo de Efectivo**: estado de flujo de efectivo mensual que muestra cambios en activos líquidos, cuentas por cobrar/pagar y movimientos de capital.
24. **Libro de Ventas**: reporte fiscal mensual de facturas emitidas, con desglose de bienes, servicios, exportaciones, IVA y otros impuestos. Incluye versiones consolidada, sin impuestos y diaria.
25. **Libro de Compras**: reporte fiscal mensual de compras, con versiones estándar y para El Salvador, generación asíncrona.
26. **Libro Diario**: registro cronológico de todas las transacciones del mes, con versión consolidada y generación de Excel en segundo plano.
27. **Libro Mayor**: mayor contable por cuenta para un mes, con generación asíncrona y versión diaria.
28. **Balanza de Comprobación**: sumas y saldos de todas las cuentas para un rango de fechas personalizado.
29. **Reportes por etiqueta**: gastos mensuales, acumulados, por proveedor, por documento fuente, balance etiquetado, y versiones por categoría de etiqueta.
30. **Reportes de cuenta**: balance mensual de cuenta, movimientos de beneficiario en cuenta, partidas no conciliadas, activos correlativos imprimibles.

## Tipos de documento fuente mensual

31. **Tipos de documento fuente mensual**: numeración secuencial mensual para documentos fuente que se asignan automáticamente a las transacciones del mes.

## API

32. **API REST**: endpoints para consultar y crear cuentas contables, categorías y transacciones, con autenticación por token.
