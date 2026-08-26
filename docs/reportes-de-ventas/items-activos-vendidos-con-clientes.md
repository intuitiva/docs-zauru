---
title: "Ítems Activos Vendidos con Clientes"
sidebar_label: "Ítems Activos Vendidos con Clientes"
sidebar_position: 30
---

Si quiere saber qué productos de su catálogo siguen saliendo y quiénes los compran, este listado se lo muestra con nombre y apellido. Reúne los ítems activos que han sido vendidos junto a los clientes que los compraron, ideal cuando revisa qué tiene rotación real o prepara una oferta dirigida.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ítems Activos Vendidos con Clientes".

Con el reporte en pantalla sabrá qué productos vale la pena seguir impulsando y con qué clientes conviene hablar primero.

## API (llamadas desde sistemas externos)

### Ítems activos vendidos con sus clientes

Se puede obtener el listado de ítems y paquetes activos vendidos entre `date_from` y `date_to` (formato `YYYY-MM-DD` o `DD/MM/YYYY`), opcionalmente filtrado por punto de venta con `point_of_sale_id`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/reports/sold_active_items_with_clients.json?date_from=2026-08-01&date_to=2026-08-31&point_of_sale_id=1
```

Esto devolverá un JSON similar a este:

```json
[
  {
    "id": 1,
    "invoice_id": 2,
    "invoice_number": "A-0001",
    "order_number": "1",
    "point_of_sale_id": 1,
    "invoice_date": "2026-08-01",
    "item_name": "Producto Ejemplo A",
    "item_code": "PROD-001",
    "item_id": 3,
    "item_category_name": "Categoría Ejemplo",
    "quantity": 10.0,
    "unit_price": 25.0,
    "price": 250.0,
    "client_name": "Cliente Ejemplo, S.A.",
    "client_id": 1,
    "client_code": "3333333-3"
  },
  {
    "id": 2,
    "invoice_id": 3,
    "invoice_number": "A-0002",
    "order_number": "2",
    "point_of_sale_id": 1,
    "invoice_date": "2026-08-02",
    "item_name": "Producto Ejemplo B",
    "item_code": "PROD-002",
    "item_id": 4,
    "item_category_name": "Categoría Ejemplo",
    "quantity": 5.0,
    "unit_price": 10.0,
    "price": 50.0,
    "client_name": "Cliente Ejemplo Dos, S.A.",
    "client_id": 2,
    "client_code": "4444444-4"
  }
]
```
