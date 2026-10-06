---
title: "Fórmulas de Contratos"
sidebar_label: "Fórmulas"
sidebar_position: 4
---

Los contratos no siempre cobran un precio fijo. A veces la cuota depende del capital, de los intereses o del tipo de cambio, y es ahí donde las fórmulas entran a jugar: en lugar de escribir un monto a mano en cada línea, usted le asigna una fórmula y deja que Zauru calcule el valor cuando corresponda.

Las fórmulas son una de las partes más potentes y versátiles del sistema. Se usan en los detalles del contrato y en las transacciones asociadas a las facturas que el contrato genera.

## Fórmulas básicas

Estas fórmulas ya vienen listas y cubren el caso más común: calcular el capital y el interés de una cuota nivelada (constante). Son ideales para empresas que dan préstamos u ofrecen leasing.

1. **Conversión de $ a moneda local del item**: Toma el precio unitario/costo que está en dólares y lo convierte a la moneda local usando el tipo de cambio del día en que se genera la cuota. **Ejemplo:** si el precio unitario es USD 10, la cantidad es 2 y el tipo de cambio del día es 8.00, la línea se genera con un precio unitario de 80.00 y un total de 160.00.

2. **PMT de anualidad (cuota nivelada)**: Calcula el monto del pago periódico de una cuota nivelada (constante) a una tasa de interés constante. Es la misma función *pago* (Excel en español) o *pmt* (Excel en inglés). Sus parámetros son:
   - La tasa de interés con su periodicidad (ver el punto 11 de [Recurrencias](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)).
   - El número de cuotas menos las cuotas iniciales extrañas (ver los puntos 4 y 5).
   - El monto total del contrato menos el anticipo (ver los puntos 9 y 10).

   **Ejemplo:** un préstamo de Q10,000 a 12 meses con un interés mensual del 1% produce una cuota nivelada de Q888.49.

3. **Diferencia de saldos de capital entre períodos (capital a pagar)**: Calcula cuánto capital —no intereses— conforma una cuota específica de la cuota nivelada. Usa la cuota actual y todos los parámetros de la cuota nivelada. **Ejemplo:** en el préstamo anterior, la primera cuota incluye Q788.49 de capital.

4. **Diferencia de cuota nivelada y capital a pagar (intereses)**: Calcula cuánto interés conforma una cuota específica. **Ejemplo:** en la primera cuota del préstamo anterior, el interés es de Q100.00.

Hay muchas más fórmulas disponibles y seguimos agregando nuevas para cubrir casos de clientes específicos.

## Tipos de Fórmulas

Las fórmulas se agrupan según dónde se aplican:

1. **Detalles del Contrato (contract_details)**: Calculan el precio unitario de los items y bundles del contrato.
2. **Entradas Extra (extra_entries)**: Calculan los montos de las entradas adicionales del término de pago.
3. **Splits Extra (extra_splits)**: Calculan los montos de los desgloses contables adicionales.
4. **Moras (arrears)**: Calculan los montos de mora.

> **Nota:** Las transacciones asociadas a los documentos generados solo aplican cuando el contrato genera FACTURAS. No aplican para órdenes de venta, casos ni órdenes de compra.
