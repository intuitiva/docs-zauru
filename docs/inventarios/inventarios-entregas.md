---
title: "Entregas"
sidebar_label: "Entregas"
sidebar_position: 3.3
---

La entrega es el estado final de un envío: el producto llegó a la bodega destino y las existencias se transfirieron. Para llegar a entrega hay dos caminos: despachar y recibir un envío con transporte ([Tránsitos](/inventarios/inventarios-transitos)) o entregar directamente una reservación sin transporte.

## Entregar una reservación sin transporte

Para un envío sin transporte, la reservación se entrega directamente desde su detalle:

1. Ir a "Inventarios".
2. Seleccionar "Reservaciones".
3. Abrir la reservación que desea entregar.
4. Presionar "Entregar.

![imagen3](/img/inventarios/envios-3.jpg)

El envío pasa a la pestaña "Entregas" y los productos aparecen en la bodega destino.

![imagen4](/img/inventarios/envios-4.jpg)

## Vista de Entregas

Los pasos para ver las entregas son:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".

La tabla muestra las columnas "ID", "Reservación #", "Referencia", "Necesita Transporte", "Entrega Estimada", "Entregado el", "Origen", "Destino", "Tipo", "Items" y "Memo". Los filtros de alcance, rango de fechas y etiquetas se describen en [Envíos](/inventarios/envios).

## Editar una entrega

Una vez entregado el envío, puede editar ciertos campos sin afectar la contabilidad ni el inventario:

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Buscar la entrega que desea editar.
4. Seleccionar "Editar.

Podrá modificar:

- **Referencia**
- **Transportista**
- **Entregado el** (fecha de entrega)
- **Memo** (notas)
- **Etiquetas**
- **Imagen** del envío

## Imprimir una entrega

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Abrir la entrega que desea imprimir.
4. Seleccionar "Imprimir.

## Exportar movimientos a Excel

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Abrir la entrega cuyos movimientos desea exportar.
4. Seleccionar "Exportar a Excel".

Se descarga un archivo XLS con el detalle de todos los productos y cantidades del envío.

## Documentos electrónicos para entregas

Zauru soporta la emisión de documentos fiscales electrónicos para entregas en países como El Salvador (FEL) y República Dominicana (DGII). Estas opciones aparecen en el detalle de la entrega cuando la entidad tiene configurado un servicio de almacenaje externo de documentos.

### Emitir documento electrónico

1. Ir a "Inventarios".
2. Seleccionar "Entregas".
3. Abrir la entrega para la cual desea emitir el documento.
4. Seleccionar "Emitir documento externo.

### Consultar respuesta certificada

Después de emitir un documento electrónico, puede consultar la respuesta certificada del sistema de facturación electrónica:

1. Abrir la entrega.
2. Seleccionar "Respuesta Certificada del Almacenaje Externo".

La respuesta se devuelve en formato JSON (El Salvador) o XML (resto de países).

### Consultar respuesta certificada para anulación

1. Abrir la entrega.
2. Seleccionar "Respuesta Certificada del Almacenaje Externo de la Anulación".

## API (llamadas desde sistemas externos)

### Entregar una reservación sin transporte
Convierte una reservación sin transporte en un envío entregado. No aplica para reservaciones con transporte ni para envíos en tránsito. Lo que se reservó es lo que se entrega; no se puede escoger cuánto se entregó realmente.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bookings/1/deliver.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "16421816",
  "zid": "599",
  "id_number": "INGRESO-177",
  "reference": "INGRESO INVENTARIO 29.04.2026",
  "needs_transport": false,
  "delivered": true,
  "delivered_at": "2026-04-29 16:38:14",
  "voided": false,
  "returned": false,
  "agency_from_id": "8248",
  "agency_to_id": "8246",
  "movements_count": "1"
}
```

### Obtener el detalle de una entrega
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1.json
```

### Actualizar una entrega
Actualiza los campos editables de una entrega: referencia, transportista, fecha de entrega, notas, etiquetas e imagen.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "shipment": {
      "reference": "Referencia de la entrega",
      "transporter_id": "1",
      "delivered_at": "2026-08-10",
      "memo": "Notas de la entrega",
      "tag_ids": [""]
    }
  }' \
  https://app.zauru.com/inventories/deliveries/1.json
```

### Emitir documento electrónico externo de una entrega
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/issue_external_document.json
```

### Consultar la respuesta certificada de una entrega
Devuelve la respuesta certificada del sistema de facturación electrónica. La respuesta se devuelve en formato JSON (El Salvador) o XML (resto de países).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/external_storage_certified_response.json
```

### Consultar la respuesta certificada para anulación de una entrega
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/deliveries/1/external_storage_certified_response_for_voiding.json
```
