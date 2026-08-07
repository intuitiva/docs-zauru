---
title: "Contratos con Generación Pendiente"
sidebar_label: "Contratos con Generación Pendiente"
sidebar_position: 2
---

Este reporte identifica contratos que tienen cuotas que debieron haberse generado pero por alguna razón no se generaron (huecos o duplicaciones en las recurrencias).

Por cada contrato muestra:

- ID, Beneficiario, Referencia.
- Cuota Esperada (la que debería haberse generado).
- Cuota Actual (la última generada).
- Cuotas Generadas.

**Cómo funciona:** el sistema compara la suma esperada de números de recurrencia contra la suma real de recurrencias generadas. Si hay diferencia (huecos o duplicados), el contrato aparece en este reporte. También compara la cuota esperada según la fecha actual contra la cuota efectiva actual.

Para ingresar al reporte:

1. Ir a "Contratos".
2. Seleccionar "Reportes".
3. Seleccionar "Contratos con Generación Pendiente".

**Filtro disponible:** Tipo de Documento.
