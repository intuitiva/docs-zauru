---
title: "Envíos"
sidebar_label: "Envíos"
sidebar_position: 0
---

Un envío mueve mercadería entre bodegas o recibe producto de un proveedor. Cada envío sigue un ciclo de estados que va desde la reservación hasta la entrega, con dos caminos según necesite transporte o no.

## Estados de un envío

- **Reservación**: los productos están reservados en la bodega origen pero aún no se han movido.
- **Tránsito**: el envío fue despachado de la bodega origen pero aún no se ha recibido en la bodega destino. Solo aplica para envíos con transporte.
- **Entrega**: el envío fue recibido en la bodega destino y las existencias se transfirieron.
- **Anulado**: la reservación fue cancelada y las reservas se liberaron.
- **Devuelto**: un envío que ya había sido entregado fue revertido, regresando las existencias a la bodega origen.

## Flujos

Sin transporte:
```
Reservación → Entrega
```

Con transporte:
```
Reservación → Tránsito → Entrega
```

## Tutoriales

1. **[Reservaciones](/inventarios/envios/reservaciones)**: crear, editar, imprimir y exportar reservaciones; reservas con números de serie, paquetes, solicitudes de traslado y vínculos con contratos, facturas y órdenes de compra.
2. **[Tránsitos](/inventarios/envios/transitos)**: despachar un envío con transporte y recibirlo en la bodega destino.
3. **[Entregas](/inventarios/envios/entregas)**: entregar un envío sin transporte, editar e imprimir entregas, exportar movimientos y emitir documentos electrónicos.
4. **[Devoluciones](/inventarios/envios/devoluciones)**: devolver una entrega que llegó con errores y ver el historial de entregas devueltas.
5. **[Anulaciones](/inventarios/envios/anulaciones)**: anular una reservación que ya no se necesita y ver el historial de reservaciones anuladas.
6. **[Reemplazar items de un envío](/inventarios/envios/reemplazar-items-de-un-envio)**: importar desde Excel los movimientos de una reservación, reemplazando los items y cantidades cargados manualmente.

## Filtros compartidos

Las vistas de Reservaciones, Tránsitos y Entregas comparten estos filtros:

- **Alcance**: "Ingresos" (envíos que entran a las bodegas), "Salidas" (envíos que salen), "Transferencias" (envíos entre bodegas) o "Todos".
- **Rango de fechas**: filtra por fecha de entrega estimada, con los campos "Desde" y "Hasta".
- **Bodega origen** y **Bodega destino**: filtrado por bodega específica.
- **Etiquetas**: filtrado por etiquetas asignadas a los envíos, con nube de etiquetas.
