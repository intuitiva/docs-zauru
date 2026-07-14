---
title: "Reportes de Contratos"
sidebar_label: "Reportes de Contratos"
sidebar_position: 0
---

Estos reportes permiten llevar control de los contratos que no generaron recurrencias, estadísticas generales, contratos por expirar y contratos pendientes de cierre.

## Reportes Disponibles

### 1. Estado Consolidado de Contratos Activos

Este reporte muestra un resumen del estado de todos los contratos activos, indicando por cada contrato:
- ID, Beneficiario, Referencia
- Total de Cuotas y Cuota Actual
- Monto Total del contrato
- Cantidad de cuotas no generadas y su monto
- Cantidad y monto de documentos en cada estado de flujo de trabajo (Borrador, Ordenado, Autorizado, Pagado, etc.)

**Filtros disponibles:**
- Tipo de Documento (Orden, Factura no Pagada, Caso, Orden de Compra)
- Incluir Contratos Cerrados (checkbox)

El reporte se puede exportar a Excel para análisis externo.

### 2. Contratos con Generación Pendiente

Este reporte identifica contratos que tienen cuotas que debieron haberse generado pero por alguna razón no se generaron (huecos o duplicaciones en las recurrencias).

Por cada contrato muestra:
- ID, Beneficiario, Referencia
- Cuota Esperada (la que debería haberse generado)
- Cuota Actual (la última generada)
- Cuotas Generadas

**Cómo funciona:** El sistema compara la suma esperada de números de recurrencia contra la suma real de recurrencias generadas. Si hay diferencia (huecos o duplicados), el contrato aparece en este reporte. También compara la cuota esperada según la fecha actual contra la cuota efectiva actual.

**Filtro disponible:** Tipo de Documento.

### 3. Contratos por Expirar

Este reporte muestra los contratos que están próximos a vencer (finalizar su cantidad de cuotas) dentro del período seleccionado.

Por cada contrato muestra:
- Número, Beneficiario, ID, Referencia
- Fecha de Inicio, Total de Cuotas, Cuota Actual
- Periodicidad, Fecha de Finalización

**Filtro disponible:** Fecha hasta la cual buscar (por defecto fin del mes actual).

**Nota:** Los contratos infinitos no aplican para este reporte ya que no tienen fecha de expiración.

### 4. Contratos Pendientes de Cierre

Este reporte muestra los contratos que ya generaron todas sus cuotas pero aún no han sido cerrados (siguen apareciendo como activos).

Por cada contrato muestra:
- Número, Beneficiario, ID, Referencia
- Fecha de Inicio, Total de Cuotas, Cuota Actual
- Periodicidad, Fecha Esperada de Cierre

**Cómo funciona:** Identifica contratos donde la cuota actual (`current_fee`) es mayor o igual al total de cuotas configuradas (`fees`) y cuya fecha de próxima cuota ya pasó.

**Filtro disponible:** Tipo de Documento.
