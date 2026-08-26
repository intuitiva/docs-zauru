---
title: "Facturar un Caso"
sidebar_label: "Facturar un Caso"
sidebar_position: 6
---

Es probable que en ciertas ocasiones, cuando usted le dé mantenimiento al producto que vende o atienda un caso de sus clientes, les cobre por el servicio; por ejemplo, una reparación fuera de garantía o una visita técnica con repuestos. Zauru le da la opción de facturar cuando usted crea un caso, y este tutorial le muestra cómo hacerlo para que el cobro quede registrado desde el primer momento.

Los pasos para facturar un caso son los siguientes:

1. Ir a “Soporte”.
2. Seleccionar “Casos Abiertos”.
3. Seleccionar “Nuevo Caso”.

![imagen1](/img/casos-de-soporte/casos-facturar-un-caso-1.jpg)


Le aparecerán las opciones para crear un nuevo caso, para que se facture cuando usted cree el caso, tiene que colocar si el caso es por garantía o cortesía, esto hara que al mismo tiempo que se crea el caso, se emita una factura a nombre del cliente por la cantidad que usted coloque en los “Detalles” del caso.

![imagen2](/img/casos-de-soporte/casos-facturar-un-caso-2.jpg)



Luego de crear el caso usted puede verificar la factura asociada haciendo click en “Verificar”.

![imagen3](/img/casos-de-soporte/casos-facturar-un-caso-3.jpg)



Le aparecerán los detalles del caso, en la parte inferior de la pagina podrá encontrar las facturas asociadas, en donde podrá ver la factura que se creo automáticamente luego de crear el caso. La factura saldrá por la cantidad que usted coloque en los detalles del caso.

![imagen4](/img/casos-de-soporte/casos-facturar-un-caso-4.jpg)

Con la factura emitida desde el mismo caso, el cobro queda amarrado a la atención sin pasos extra. El siguiente paso natural es registrar el avance del trabajo en la bitácora y, cuando el cliente pague, cerrar el caso sabiendo que la facturación ya quedó resuelta.

## API (llamadas desde sistemas externos)

### Obtener datos para un nuevo caso
Devuelve la plantilla de un caso con los datos precargados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "CASO-0001",
  "reference": null,
  "date": "2026-08-01",
  "closing_expected_at": "2026-08-01",
  "contact_method_id": 1,
  "responsible_id": 1,
  "client_id": null,
  "agency_id": 1,
  "warranty": false,
  "courtesy": false,
  "refund": false,
  "replace": false,
  "closed": false,
  "payment_term_id": 1,
  "entity_id": 1,
  "case_supplies": []
}
```

### Crear un caso facturable
Crea el caso y emite automaticamente la factura por la cantidad colocada en los detalles. Las banderas `warranty` y `courtesy` controlan si el caso se factura.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case": {
      "client_id": "1",
      "agency_id": "1",
      "contact_method_id": "1",
      "responsible_id": "1",
      "payment_term_id": "1",
      "date": "2026-08-01",
      "closing_expected_at": "2026-08-15",
      "symptom": "Falla en el equipo",
      "warranty": "0",
      "courtesy": "1",
      "case_supplies_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1",
          "unit_price": "250.00"
        }
      }
    }
  }' \
  https://app.zauru.com/support/cases.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "CASO-0001",
  "reference": null,
  "date": "2026-08-01",
  "closing_expected_at": "2026-08-15",
  "contact_method_id": 1,
  "symptom": "Falla en el equipo",
  "responsible_id": 1,
  "client_id": 1,
  "agency_id": 1,
  "payment_term_id": 1,
  "warranty": false,
  "courtesy": true,
  "closed": false,
  "subtotal": "250.00",
  "total": "250.00",
  "entity_id": 1,
  "creator_id": 1,
  "updater_id": 1,
  "case_supplies_count": 1,
  "case_supplies": [
    {
      "id": 1,
      "case_id": 1,
      "item_id": 1,
      "serial_id": null,
      "quantity": "1.0",
      "unit_price": "250.00",
      "price": "250.00",
      "entity_id": 1
    }
  ],
  "created_at": "2026-08-01T10:00:00Z",
  "updated_at": "2026-08-01T10:00:00Z"
}
```

### Ver un caso y sus facturas asociadas
El 1 al final de la URL es el ID del caso. Incluye las facturas creadas automaticamente al facturar el caso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "CASO-0001",
  "date": "2026-08-01",
  "symptom": "Falla en el equipo",
  "courtesy": true,
  "closed": false,
  "client_id": 1,
  "total": "250.00",
  "case_supplies": [
    {
      "id": 1,
      "case_id": 1,
      "item_id": 1,
      "quantity": "1.0",
      "unit_price": "250.00",
      "price": "250.00",
      "item": {
        "name": "Producto Ejemplo A",
        "code": "PROD-001"
      }
    }
  ],
  "invoices": [
    {
      "id": 1,
      "zid": 2,
      "order_number": "0001",
      "invoice_number": "A-0001",
      "date": "2026-08-01",
      "total": "250.00",
      "due": "250.00",
      "issued": true,
      "voided": false
    }
  ]
}
```

### Actualizar un caso
El 1 al final de la URL es el ID del caso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "case": {
      "diagnosis": "Componente daniado",
      "solution": "Reemplazo de componente"
    }
  }' \
  https://app.zauru.com/support/cases/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "CASO-0001",
  "date": "2026-08-01",
  "diagnosis": "Componente daniado",
  "solution": "Reemplazo de componente",
  "closed": false,
  "updated_at": "2026-08-01T11:00:00Z"
}
```

### Cerrar un caso
El 1 al final de la URL es el ID del caso.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/close.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": "CASO-0001",
  "closed": true,
  "closed_at": "2026-08-01T12:00:00Z"
}
```

### Eliminar un caso
El 1 al final de la URL es el ID del caso. Las facturas asociadas no emitidas se anulan.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/support/cases/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
