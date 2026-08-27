---
title: "Tránsitos"
sidebar_label: "Tránsitos"
sidebar_position: 2
---

El tránsito es el estado intermedio de un envío con transporte: el producto ya salió de la bodega origen pero aún no llegó a la bodega destino. Para llegar a tránsito se despacha la reservación; para salir de tránsito se recibe en la bodega destino, lo que convierte el envío en entrega.

## Despachar una reservación

Para crear un envío que necesite transporte, se marca la casilla "Necesita Transporte" al crear la reservación. El procedimiento para crear la reservación se detalla en [Reservaciones](/inventarios/envios/reservaciones).

![imagen6](/img/inventarios/envios-6.png)

Los campos adicionales para un envío con transporte son:

- **Transportista**: empleado responsable del transporte.
- **Necesita Transporte**: casilla marcada.
- **Despacho Estimado**: fecha prevista de despacho.

Presionar "Crear envío".

![imagen7](/img/inventarios/envios-7.jpg)

Para sacar el producto de la bodega origen, abrir la reservación y presionar "Despachar". El envío pasa a tránsito.

![imagen8](/img/inventarios/envios-8.jpg)

## Vista de Tránsitos

Los pasos para ver los envíos en tránsito son:

1. Ir a "Inventarios".
2. Seleccionar "Tránsitos".

La tabla muestra las columnas "ID", "Reservación #", "Referencia", "Entrega Estimada", "Despachado el", "Origen", "Destino", "Tipo" e "Items". El filtro de alcance se describe en [Envíos](/inventarios/envios/).

## Recibir un envío en tránsito

Para recibir el envío en la bodega destino:

1. Ir a "Inventarios".
2. Seleccionar "Tránsitos".
3. Presionar el icono del camión sobre el envío a recibir.

![imagen9](/img/inventarios/envios-9.jpg)

Se abre la vista "Entregar Envío en Tránsito", que muestra los items reservados y un campo "Entregados" por cada uno. Colocar la cantidad que realmente se recibió.

Si recibe menos de lo reservado, Zauru genera automáticamente una reservación para solicitar el faltante. Si recibe más, Zauru genera una reservación para devolver el excedente.

Presionar "Actualizar envío" para confirmar la recepción.

![imagen10](/img/inventarios/envios-10.jpg)

El envío pasa a entregado y los productos aparecen en la bodega destino.

![imagen11](/img/inventarios/envios-11.jpg)

## API (llamadas desde sistemas externos)

### Despachar una reservación con transporte
Convierte una reservación con transporte en un envío en tránsito. Solo aplica para reservaciones con "Necesita Transporte" activado.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1/ship.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "16421816",
  "zid": "599",
  "id_number": "INGRESO-177",
  "reference": "INGRESO INVENTARIO 29.04.2026",
  "needs_transport": true,
  "shipped": true,
  "shipped_at": "2026-04-29 16:38:14",
  "delivered": false,
  "delivered_at": null,
  "voided": false,
  "returned": false,
  "agency_from_id": "8248",
  "agency_to_id": "8246",
  "movements_count": "1"
}
```

### Obtener el detalle de un envío en tránsito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/transits/1.json
```

### Recibir un envío en tránsito
Convierte un envío en tránsito en un envío entregado. Se envían las cantidades realmente recibidas en `delivered_quantity` por cada movimiento.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "movements_attributes": {
        "0": {
          "delivered_quantity": 99,
          "id": "1"
        }
      },
      "tag_ids": [""],
      "memo": "no vinieron los 100 productos solicitados",
      "transporter_id": 1
    }
  }' \
  https://app.zauru.com/inventories/transits/1.json
```
