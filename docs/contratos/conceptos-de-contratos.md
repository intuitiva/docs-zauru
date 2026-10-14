---
title: "Conceptos de Contratos"
sidebar_label: "Conceptos"
sidebar_position: 0.75
---

Antes de crear el primer contrato conviene recorrer estos conceptos: son la base de todo lo que verá en el formulario, y entenderlos ahora le ahorrará sorpresas cuando el contrato ya esté generando cuotas.

## Tipos de Documentos que Generan los Contratos

1. __Orden__: Orden de venta o prefactura (ver detalles [aquí](/ventas/ordenes-de-venta)). Permite editar, consolidar y recibir anticipos por la misma. Ideal para negocios que deben cambiar los montos de algunas cuotas por distintas razones.
2. __Factura no Pagada__: Factura inamovible (ver detalles [aquí](/ventas/facturas)). Genera cuentas por cobrar al cliente y despacha inventarios (si se vendió un producto). Ideal para negocios que no cambian cuotas ni precios durante todo el contrato con el cliente. Son los únicos documentos a los que se les puede asociar partidas contables (entries y splits) adicionales a las que generan automáticamente (ya sea porque el término de pago lo requiera o porque se agregó "entradas del contrato").
3. __Caso__: Caso de soporte (ver detalles [aquí](https://docs.zauru.com/casos-de-soporte/casos-crear-un-caso)). Genera una orden de venta asociada, se le puede agregar ordenes de compra asociadas. Ideal para servicios preventivos a máquinas o equipo del cliente. Permite marcar si es por Cortesía o Garantía, y permite asociar un serial de equipo y un síntoma.
4. __Orden de Compra__: Orden de Compra (ver detalles [aquí](/compras/ordenes-de-compra/crear-ordenes-de-compra)). Genera un borrador de orden de compra (no autorizada) que solo puede generarse con items y cuentas contables. Ideal para contratos de compra que deben estar sincronizados con los contratos de venta. Utiliza Términos de Carga (Charge Terms) en lugar de Términos de Pago.

## Recurrencias

Hay varias configuraciones que el contrato toma para generar las recurrencias (cuotas).

> Fecha de proxima cuota = Fecha inicio + ((Cuota actual - Cuotas adelantadas) * tiempo entra cada cuota)

1. __Fecha de inicio__: Es la fecha donde se va a generar la primera recurrencia (cuota). Si se quisiera cambiar la fecha de una cuota futura, solo se cambia esta fecha para que coincida con la fecha que queremos cambiar la generación de la cuota.
2. __Tiempo entre cada cuota__: Establece la cantidad de tiempo entre cada cuota siendo el tiempo mínimo 1 día. Se configura con la cantidad y la medida de periodicidad (días, semanas, meses, años).
3. __Fecha final indefinida__: Establece que para siempre se van a seguir generando cuotas sin fin. Todos los contratos activos se pueden cerrar en cualquier momento para no generar nuevas cuotas de todos modos.
4. __Cantidad de cuotas__: Si la fecha final NO es indefinida, se coloca la cantidad de cuotas (recurrencias) a generar, luego de generar la última recurrencia (cuota), el sistema cerrará automáticamente el contrato activo.
5. __Cuotas iniciales extrañas__: Son cuotas que no se toman en cuenta en la generación y sirven exclusivamente de referencia y para calcular algunas fórmulas en el detalle de los contratos o las transacciones asociadas. El cambiar este número no va a cambiar nada en la forma como se calcula que número de cuota que toca. Es ideal para registrar contratos ya empezados donde no queremos sincronizarlos con la realidad sino que quede claro que ANTES se registraron cuotas pero no están en el sistema.
6. __Cuotas adelantadas__: Son cuotas que sucedieron antes de la fecha de inicio del contrato, usualmente para pagar anticipos o similar. Las cuotas (recurrencias) que se generen manualmente o automáticamente van a empezar a partir de este número; eso significa que si cambia el número de cuota que se toca.
7. __Cuota Inicial (Start Fee)__: Número de cuota desde la cual se empieza a generar. Por defecto es 1. Permite iniciar la generación desde una cuota específica si se registra un contrato que ya tiene cuotas previas generadas fuera del sistema.
8. __Cuotas Históricas (Historical Fees)__: Cantidad de cuotas que ya fueron generadas históricamente (fuera del sistema). Es informativo y no afecta la generación.
9. __Anticipo__: Es una referencia que no cambia la forma de calcular las cuotas, solo sirve para el cálculo de algunas fórmulas.
10. __Monto Total__: Es una referencia del monto del contrato completo. Se utiliza como referencia para algunas fórmulas. Se puede tener un segundo monto total (`total_amount_2`) y una segunda tasa de interés (`interest_rate_2`) para cálculos más complejos.
11. __Tasa de Interés__: Es una referencia de la tasa de interés en la que incurren algunos contratos. Se utiliza como referencia para algunas fórmulas. La tasa de interés se puede expresar en diferentes medidas de periodicidad (diaria, semanal, mensual, anual) y el sistema la convierte a la medida de periodicidad del contrato automáticamente.
12. __Número de Contrato (Contract Number)__: Número correlativo automático por entidad para identificar el contrato. También se puede establecer manualmente.

## Configuración de Referencia Extra en Documentos Generados

Los contratos pueden incluir una referencia automática en los documentos que generan, basada en la configuración establecida en la sección de [Configuración de Contratos](https://docs.zauru.com/contratos/configuracion-de-contratos). Las opciones son: número de cuota, fecha, o fecha más número de cuota.

## Moras (penalizaciones)

Las moras son un proceso complejo. Lo más complejo es describir la mora correctamente porque "5% de mora" no me especifica, si es sobre el saldo vencido, sobre el saldo del contrato o sobre el monto del contrato, y tampoco me dice periodicidad; si son 5% diario, mensual, anual, total, etc. Las moras solo funcionan en contratos de ordenes de venta o de facturas.

1. __Activa__: Las moras empiezan desactivadas, hay que seleccionar esta casilla para que se habiliten.
2. __Moras detalladas__: Al generar un reporte de moras actuales del contrato, este muestra las moras por cada cuota vencida, al generar la orden de venta (pre-factura) de la mora, puede aparecer una sola linea por todas las cuotas vencidas (moras detalladas deshabilitadas) o una linea por cada cuota vencida (moras detalladas habilitadas).
3. __Mora se genera a partir de cuantos días de deuda__: Cantidad de días a partir de la fecha esperada de pago de cada factura emitida para empezar a calcular moras.
4. __Re calcular moras cada__: Periodicidad con que se recalculan las moras. Primer ejemplo: hay moras de 5% de lo vencido mensual el 5 de cada mes, lo que significa que el 6 del mes si no ha pagado 2 meses, se calcula el 5% de ambas cuotas + el 5% de la mora del mes anterior. Segundo ejemplo: hay moras de Q10.00 por día a partir del 5 de mes, lo que significa que el 10 del mes, van a aparecer Q50.00 de mora por cada día de mora.
5. __Mora con monto fijo__: Es el monto que se va a aplicar cada periodicidad (re calcular moras cada).
6. __Mora basada en fórmula__: Es la fórmula que se utilizará para calcular la mora, la mora más común es la _"moras lineales por pagos pendientes del contrato (no de saldo)"_ que agarra la tasa de interés descrita más adelante para colocar un porcentaje de la deuda de los pagos vencidos.
7. __Tasa de interés__: Es la referencia de la tasa de interés para las fórmulas de moras. También se puede expresar en diferentes medidas de periodicidad.

## Fórmulas en el detalle de los contratos y las transacciones asociadas

Los contratos pueden calcular montos por su cuenta usando fórmulas, por ejemplo para cuotas niveladas de préstamos o leasing. Es un tema amplio, así que lo separamos en su propio tutorial: [Fórmulas de Contratos](https://docs.zauru.com/contratos/formulas-de-contratos).

## Detalle de las cuotas del contrato (Contract Details In Time)

Los detalles de las cuotas me muestra por linea las cuotas de todo el contrato (un contrato finito) o 10 cuotas de un contrato infinito. Me muestra el detalle de todas las lineas del contrato como columnas para ver el monto de cada linea y si se calcula con fórmulas, el monto del resultado de la fórmula. Esto funciona ideal en un escenario donde se coloca el capital y el interés como lineas distintas en el contrato y utilizan las fórmulas respectivas y este detalle me generaría una tabla de amortización de deuda prácticamente.

La vista incluye:
- Diccionario con los parámetros del contrato (periodicidad, fecha de inicio, cuotas, tasa de interés, monto total, anticipo)
- Tabla de cuotas con: número de cuota, fecha estimada, monto por cada item o cuenta, total por cuota y acumulado

Esta vista está disponible tanto en contratos preliminares como activos.

## Asociar documentos al Contrato

Una de las razones del contrato es agrupar la información de una forma coherente dentro de Zauru y que se asemeje a la realidad. Es por eso que permitimos adjuntar documentos al contrato fuera de las cuotas, solo los relacionamos para que quede de referencia. Las cuotas solo se pueden asociar al contrato al generar un documento, automática o manualmente.

![asociar documentos](/img/contratos/contratos-preliminares-3.png)

Los documentos que se pueden asociar:
1. Nueva Transacción
2. Nuevo Envío
3. Nueva Orden de Venta
4. Nueva Factura
5. Nuevo Caso

En el detalle del contrato se muestran todos los documentos previamente asociados, organizados por tipo:
- **Entradas Asociadas**: Con número de entrada, fecha, referencia, beneficiario, cuentas y montos.
- **Envíos Asociados**: Con número de booking, referencia, estado, agencias, items.
- **Facturas Asociadas**: Con estado, número de factura, referencia, fecha, items, monto.
- **Órdenes de Compra Asociadas**: Con estado, número, referencia, fecha, items, monto.
- **Casos Asociados**: Con estado, número de caso, referencia, síntoma, fecha, monto.

Con el contrato preliminar revisado y sus documentos de respaldo asociados, solo queda dar el paso que pone todo en movimiento: activarlo. Al activarlo, el contrato pasará a la sección de Contratos Activos y Zauru empezará a generar cada cuota en la fecha que usted configuró.
