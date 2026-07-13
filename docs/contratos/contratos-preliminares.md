---
title: "Contratos Preliminares"
sidebar_label: "Contratos Preliminares"
sidebar_position: 1
format: md
---

# Contratos Preliminares
Los Contratos preliminares son la primera fase de los contratos, acá se crean, se editan y se borran los contratos pero no van a generar documentos automáticamente.

## Conceptos de los contratos
### Tipos de Documentos que Generan los Contratos

1. __Orden__: Orden de venta o prefactura (ver detalles [aquí](https://docs.zauru.com/ventas/ordenes-de-venta-o-facturas)). Permite editar, consolidar y recibir anticipos por la misma. Ideal para negocios que deben cambiar los montos de algunas cuotas por distintas razones.
2. __Factura no Pagada__: Factura inamomible (ver detalles [aquí](https://docs.zauru.com/ventas/ordenes-de-venta-o-facturas)). Genera cuentas por cobrar al cliente y despacha inventarios (si se vendió un producto). Ideal para negocios que no cambian cuotas ni precios durante todo el contrato con el cliente. Son los únicos documentos a los que se les puede asociar una transacción adicional a la que generan automáticamente (ya sea porque el término de pago lo requiera o porque se agregó "transacciones del contrato").
3. __Caso__: Caso de soporte (ver detalles [aquí](https://docs.zauru.com/casos-de-soporte/casos-crear-un-caso)). Genera una orden de venta asociada, se le puede agregar ordenes de compra asociadas. Ideal para servicios preventivos a máquinas o equipo del cliente.
4. __Orden de Compra__: Orden de Compra (ver detalles [aquí](https://docs.zauru.com/compras/ordenes-de-compra)). Genera un borrador de orden de compra (no autorizada) que solo puede generarse con items y no cuentas. Ideal para contratos de compra que deben estar sincronizados con los contratos de venta.

### Recurrencias
Hay varias configuraciones que el contrato toma para generar las recurrencias (cuotas).

> Fecha de proxima cuota = Fecha inicio + ((Cuota actual - Cuotas adelantadas) * tiempo entra cada cuota)

1. __Fecha de inicio__: Es la fecha donde se va a generar la primera recurrencia (cuota). Si se quisiera cambiar la fecha de una cuota futura, solo se cambia esta fecha para que coincida con la fecha que queremos cambiar la generación de la cuota.
2. __Tiempo entre cada cuota__: Establece la cantidad de tiempo entre cada cuota siendo el tiempo mínimo 1 día. 
3. __Fecha final indefinida__: Establece que para siempre se van a seguir generando cuotas sin fin. Todos los contratos activos se pueden cerrar en cualquier momento para no generar nuevas cuotas de todos modos.
4. __Cantidad de cuotas__: Si la fecha final NO es indefinida, se coloca la cantidad de cuotas (recurrencias) a generar, luego de generar la última recurrencia (cuota), el sistema cerrará automáticamente el contrato activo.
5. __Cuotas iniciales extrañas__: Son cuotas que no se toman en cuenta en la generación y sirven exclusivamente de referencia y para calcular algunas fórmulas en el detalle de los contratos o las transacciones asociadas. El cambiar este número no va a cambiar nada en la forma como se calcula que número de cuota que toca. Es ideal para registrar contratos ya empezados donde no queremos sincronizarlos con la realidad sino que quede claro que ANTES se registraron cuotas pero no están en el sistema.
6. __Cuotas adelantadas__: Son cuotas que sucedieron antes de la fecha de inicio del contrato, usualmente para pagar anticipos o similar. Las cuotas (recurrencias) que se generen manualmente o automáticamente van a empezar a partir de este número; eso significa que si cambia el número de cuota que se toca.
7. __Anticipo__: Es una referencia que no cambia la forma de calcular las cuotas, solo sirve para el cálculo de algunas fórmulas.
8. __Monto Total__: Es una referencia del monto del contrato completo. Se utiliza como referencia para algunas fórmulas.
9. __Tasa de Interés__: Es una referencia que de la tasa de interés en la que incurren algunos contratos. Se utiliza como referencia para algunas fórmulas.

### Moras (penalizaciones)
Las moras son un proceso complejo. Lo más complejo es describir la mora correctamente porque "5% de mora" no me especifica, si es sobre el saldo vencido, sobre el saldo del contrato o sobre el monto del contrato, y tampoco me dice periodicidad; si son 5% diario, mensual, anual, total, etc. Las moras solo funcionan en contratos de ordenes de venta o de facturas.

1. __Activa__: Las moras empiezan desactivadas, hay que seleccionar esta casilla para que se habiliten.
2. __Moras detalladas__: Al generar un reporte de moras actuales del contrato, este muestra las moras por cada cuota vencida, al generar la orden de venta (pre-factura) de la mora, puede aparecer una sola linea por todas las cuotas vencidas (moras detalladas deshabilitadas) o una linea por cada cuota vencida (moras detalladas habilitadas).
3. __Mora se genera a partir de cuantos días de deuda__: Cantidad de días a partir de la fecha esperada de pago de cada factura emitida para empezar a calcular moras.
4. __Re calcular moras cada__: Periodicidad con que se recalculan las moras. Primer ejemplo: hay moras de 5% de lo vencido mensual el 5 de cada mes, lo que significa que el 6 del mes si no ha pagado 2 meses, se calcula el 5% de ambas cuotas + el 5% de la mora del mes anterior. Segundo ejemplo: hay moras de Q10.00 por día a partir del 5 de mes, lo que significa que el 10 del mes, van a aparecer Q50.00 de mora por cada día de mora.
5. __Mora con monto fijo__: Es el monto que se va a aplicar cada periodicidad (re calcular moras cada).
6. __Mora basada en fórmula__: Es la fórmula que se utilizará para calcular la mora, la mora más común es la _"moras lineales por pagos pendientes del contrato (no de saldo)"_ que agarra la tasa de interés descrita más adelante para colocar un porcentaje de la deuda de los pagos vencidos.
7. __Tasa de interés__: Es la referencia de la tasa de interés para las fórmulas de moras.

### Fórmulas en el detalle de los contratos y las transacciones asociadas
Las fórmulas son una de las partes más complejas y versátiles que tiene el sistema para calcular montos en los detalles de las facturas y en las transacciones asociadas de las facturas generadas.

Tenemos varias fórmulas básicas que ayudan a calcular capital e interés de una cuota nivelada. Estas fórmulas se pueden utilizar en el detalle de los contratos y las transacciones asociadas. Algunas fórmulas que ya manejamos, ideal para empresas que dan préstamos u ofrecen leasing:

1. __Conversión de $ a moneda local del item__: Me convierte el número en el precio unitario/costo unitario que está en $ en su equivalente en la moneda local y lo sustituye en el precio unitario del documento generado. Ejemplo: Si el precio unitario dice 10, cantidad 2 y el tipo de cambio el día que se genera la cuota es 8.00 el precio unitario que generará será 80.00 y el precio de la linea 160.00.
2. __PMT de anualidad (cuota nivelada)__: Utiliza la función de *pago* (excel en español) o *pmt* (excel en inglés) de una cuota nivelada (constante) y en una tasa de interés constante para conocer el monto del pago períodico. Los parámetros son: la tasa de interés con su temporalidad ([Ver referencia punto 9](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)), el número de cuotas menos las cuotas iniciales extrañas ([Ver referencias punto 4 y 5](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias)), monto del contrato menos el anticipo ([Ver referencia punto 7 y 8](https://docs.zauru.com/contratos/contratos-preliminares#recurrencias))
3. __Diferencia de saldos de capital entre períodos (capital a pagar)__: Calcula el monto de capital que conforma la cuota nivelada (constante) en una cuota específica. Utiliza como parámetros: la cuota actual y todos los parámetros de la cuota nivelada (PMT de anualidad).
4. __Diferencia de cuota nivelada y capital a pagar (intereses)__: Calcula el monto de intereses que conforma la cuota nivelada (constante) en una cuota específica. Utiliza como parámetros: la cuota actual y todos los parámetros de la cuota nivelada (PMT de anualidad).

Hay muchas más fórmulas que se pueden utilizar y cada vez agregamos nuevas para poder utilizar con clientes nuevos.

NOTA: Las transacciones asociadas a los documentos generados solo aplican al generar FACTURAS, no aplican para ordenes de venta, ni casos, ni ordenes de compra.

## Crear Contratos

Para crear nuevos contratos hay que ingresar al módulo de contratos y contratos preliminares.

Solo se pueden crear "contratos preliminares", los "contratos activos" son "contratos preliminares" activados.

![nuevo contrato](/img/contratos/contratos-preliminares-1.png)

El hecho de crear un contrato preliminar no lo activa para generar cuotas automáticamente. Hay que activarlo manualmente para que esto suceda (ver [activar contratos preliminares](https://docs.zauru.com/contratos/contratos-preliminares#activar-contratos-preliminares)

## Detalles del Contrato Preliminar

En esta sección mostramos los detalles del contrato en cuestión.

## Editar Contratos Preliminares

El editar un contrato presenta el formulario de Nuevo Contrato exactamente igual. Por lo que podemos cambiar parámetros en donde hubo un error o un cambio solicitado.

## Destruir Contratos Preliminares

El destruir un contrato preliminar lo borra permanentemente de la base de datos. Es un proceso destructivo que no se puede deshacer.

## Activar Contratos Preliminares

Para que los contratos empiecen a generar recurrencias (cuotas) hay que activarlos con este botón dentro de los detalles del Contrato Preliminar.
![activar contrato preliminar](/img/contratos/contratos-preliminares-2.png)

## Detalle de las cuotas del contrato

Los detalles de las cuotas me muestra por linea las cuotas de todo el contrato (un contrato finito) o 10 cuotas de un contrato infinito. Me muestra el detalle de todas las lineas del contrato como columnas para ver el monto de cada linea y si se calcula con fórmulas, el monto del resultado de la fórmula. Esto funciona ideal en un escenario donde se coloca el capital y el interés como lineas distintas en el contrato y utilizan las fórmulas respectivas y este detalle me generaría una tabla de amortización de deuda prácticamente.

## Asociar documentos al Contrato

Una de las razones del contrato es agrupar la información de una forma coherente dentro de Zauru y que se asemeje a la realidad. Es por eso que permitimos adjuntar documentos al contrato fuera de las cuotas, solo los relacionamos para que quede de referencia que . Las cuotas solo se pueden asociar al contrato al generar un documento, automática o manualmente.

![asociar documentos](/img/contratos/contratos-preliminares-3.png)

Los documentos que se pueden asociar:
1. Nueva Transacción
2. Nuevo Envío
3. Nueva Orden de Venta
4. Nueva Factura
5. Nuevo Caso

## API (llamadas desde sistemas externos)

### Crear Contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "contract": {
      "document_type": "1",
      "reference": "prueba",
      "taxable": "1",
      "payment_term_id": "1",
      "payee_id": "1",
      "responsible_id": "1",
      "start_date": "2018-09-02",
      "periodicity": "1",
      "periodicity_measure": "3",
      "infinite": "0",
      "fees": "20",
      "initial_foreign_fees": "0",
      "advanced_fees": "0",
      "upfront_payment": "0.0",
      "total_amount": "1000",
      "interest_rate_periodicity_measure": "4",
      "arrears_active": "1",
      "arrears_detailed": "0",
      "arrears_starts_in_days": "30",
      "arrears_periodicity": "1",
      "arrears_periodicity_measure": "1",
      "arrears_amount": "10",
      "arrears_interest_rate_periodicity_measure": "4",
      "contract_details_attributes": {
        "0": {
          "avoid_on_advance_generate": "0",
          "item_id": "1",
          "quantity": "1",
          "unit_price_cost": "50",
          "contract_formula_id": "",
          "reference": ""
        }
      },
      "memo": "generado desde el API"
    }
  }' \
  https://app.zauru.com/contracts/draft_contracts.json
```

### Actualizar Contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "contract": {
      "id": "1",
      "reference": "prueba editada",
      "contract_details_attributes": {
        "0": {
          "id": "1",
          "quantity": "2",
          "reference": "editado"
        }
      },
      "memo": "editado desde el API"
    }
  }' \
  https://app.zauru.com/contracts/draft_contracts/1.json
```

### Activar Contratos Preliminares
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/contracts/draft_contracts/1/activate.json
```
