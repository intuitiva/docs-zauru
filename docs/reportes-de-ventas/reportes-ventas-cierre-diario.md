---
title: "Cierre Diario"
sidebar_label: "Cierre Diario"
sidebar_position: 7
---

Cuando termina el día de ventas, toca el corte de caja: verificar cuánto dinero entró, ya sea en efectivo, con tarjeta o por los créditos que dio la empresa. Hacerlo a mano significa sumar facturas una por una y comparar contra el efectivo, el POS y demás instrumentos de pago. Con el Cierre Diario, Zauru le presenta toda esa información de ventas y pagos apenas usted entra, y el corte queda listo en minutos.

Para ingresar es necesario hacer lo siguiente:

1. Seleccionar Módulo de Ventas
2. Hacer click en Reportes
3. Seleccionar al lado izquierdo Cierre Diario

![imagen1](/img/reportes-de-ventas/reportes-ventas-cierre-diario-1.jpg)


Después de seleccionar el día, aparecerán dos cuadros. El primero es el cuadro de ventas que las facturas, al cliente que se le vendió, el método de pago que utilizo y el total de la venta.

El segundo cuadro aparecerá la información de los pagos que se recibieron ese día, con la respectiva información de la factura que se pagó.

![imagen2](/img/reportes-de-ventas/reportes-ventas-cierre-diario-2.jpg)

El reporte de cierre diario incluye facturas, órdenes, pagos y facturas anuladas agrupados por vendedor y punto de venta. Permite seleccionar si se usa la fecha de emisión o la fecha de creación.

## API (llamadas desde sistemas externos)

### Obtener el cierre diario

Se puede obtener el cierre del día indicado con `date` (formato `YYYY-MM-DD` o `DD/MM/YYYY`). El parámetro `point_of_sale_id` acepta el ID del punto de venta o `all` para incluirlos todos, `seller` filtra por vendedor y `invoice_date` acepta `1` para usar la fecha de creación y `2` para la fecha de emisión.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/sales/reports/daily_close.json?date=2026-08-10&point_of_sale_id=1&invoice_date=2"
```

Esto devolverá un JSON similar a este:
```json
{
  "date": "2026-08-10",
  "point_of_sale_id": 1,
  "point_of_sale_name": "Punto de Venta Ejemplo",
  "seller_id": 2,
  "seller_name": "Vendedor Ejemplo",
  "invoice_date": 2,
  "currency_prefix": "Q",
  "show_tags": true,
  "orders": [],
  "orders_sum": {},
  "orders_total": {
    "active": 0.0,
    "voided": 0.0
  },
  "invoices": [
    {
      "id": 1,
      "voided": false,
      "invoice_number": "1",
      "id_number": 1,
      "order_number": 15,
      "reference": "Factura de ejemplo",
      "taxable": true,
      "created_at": "2026-08-10T14:00:00.000Z",
      "date": "2026-08-10",
      "payee_code": "44314-9",
      "payee_tin": "44314-9",
      "payee_name": "Cliente Ejemplo, S.A.",
      "payee_info": "Cliente Ejemplo, S.A.",
      "seller_name": "Vendedor Ejemplo",
      "tags": [
        "Etiqueta Ejemplo"
      ],
      "payment_term": "Contado",
      "total": 1250.0
    }
  ],
  "invoices_sum": {
    "1": {
      "active": 1250.0,
      "voided": 0.0
    }
  },
  "invoices_total": {
    "active": 1250.0,
    "voided": 0.0
  },
  "payments": [
    {
      "id": 20,
      "voided": false,
      "date": "2026-08-10",
      "draft_number": null,
      "id_number": 5,
      "reference": "Pago de factura",
      "receipt": null,
      "order_number": 15,
      "invoice_id_number": 1,
      "invoice_number": "1",
      "invoice_reference": "Factura de ejemplo",
      "invoice_date": "2026-08-10",
      "seller_name": "Vendedor Ejemplo",
      "tags": [],
      "client": "Cliente Ejemplo, S.A.",
      "payment_term": "Contado",
      "payment_method": "Efectivo",
      "charger": "Cajero Ejemplo",
      "invoice_amount": 1250.0,
      "amount_paid": 1250.0,
      "amount_paid_local": 1250.0,
      "exchange_rate": 1.0
    }
  ],
  "payments_sum": {
    "1": 1250.0
  },
  "payments_sum_local_currency": {
    "1": 1250.0
  },
  "payments_total": 1250.0,
  "voided_invoices": []
}
```

En `orders_sum` e `invoices_sum` las llaves son los IDs de término de pago, y en `payments_sum` los IDs de método de pago.
