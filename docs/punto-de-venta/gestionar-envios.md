---
title: "Gestionar envios"
sidebar_label: "Gestionar envios"
sidebar_position: 11
---

Este tutorial esta enfocado en gestionar los envios (transitos) de productos entre bodegas desde el punto de venta. Un envio ocurre cuando una reserva ha sido despachada y los productos estan en transito hacia su destino. En esta seccion usted puede ver los envios en transito y registrar la entrega cuando los productos llegan a su destino.

## Listado de envios en transito

Para ver los envios que estan en transito:

1. Ir a "P.D.V."
2. Seleccionar "Envios".

Le aparecera un listado con todos los envios que estan en estado "transito" (enviados pero no entregados, no anulados y no devueltos). Puede filtrar por:

a. **Todos**: Muestra todos los envios donde la agencia del usuario es origen o destino.

b. **Salidas (Outcomes)**: Muestra solo los envios donde la agencia del usuario es el origen.

c. **Entradas (Incomes)**: Muestra solo los envios donde la agencia del usuario es el destino.

Desde el listado usted podra:

a. **Ver detalle**: Haga click sobre un envio para ver sus productos, cantidades y estado.

b. **Recibir/Entregar**: Registre la entrega de los productos cuando llegan a su destino.

c. **Imprimir**: Imprima el documento de envio utilizando las plantillas configuradas.

## Entregar un envio (recepcion de transito)

Cuando un envio llega a su destino, debe registrar la entrega para que los productos ingresen al inventario de la agencia destino. Los pasos son:

1. En el listado de envios, localice el envio que desea entregar.
2. Haga click en el boton de "Editar" o "Entregar".

Le aparecera el formulario de entrega con los productos del envio. Para cada producto:

a. **Cantidad entregada**: Especifique la cantidad que efectivamente llego. Por defecto se muestra la cantidad reservada (booked). Si no se entrega la cantidad completa, el sistema generara un "back order" con la cantidad faltante.

b. **Lotes**: Si el producto es perecedero, se mostrara el lote asociado.

c. **Referencia**: Puede agregar una referencia para cada linea (opcional).

**Importante**: No puede entregar mas cantidad de la que fue reservada. Si intenta sobre-entregar, el sistema mostrara un error.

Presione "Guardar" para registrar la entrega. Al guardar:

- Los productos entregados ingresaran al inventario de la agencia destino.
- Si se entrego la cantidad completa, el envio se marcara como "entregado".
- Si se entrego una cantidad parcial, se creara un nuevo movimiento con la cantidad faltante (back order) y el envio original se marcara como entregado.

## Ver detalles de un envio

Al hacer click sobre un envio en el listado, usted podra ver:

a. **Datos generales**: Agencia origen, agencia destino, fecha de creacion, fecha planificada de entrega.

b. **Productos**: Listado de productos con cantidades reservadas y entregadas.

c. **Estado**: Estado actual del envio (reservado, en transito, entregado, etc.).

d. **Imprimir**: Acceso a las plantillas de impresion configuradas para ese estado.

## API (llamadas desde sistemas externos)

### Listar envios en transito

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/shipments.json
```
