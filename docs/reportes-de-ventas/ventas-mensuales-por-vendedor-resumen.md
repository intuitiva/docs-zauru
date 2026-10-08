---
title: "Ventas Mensuales por Vendedor (Resumen)"
sidebar_label: "Ventas Mensuales por Vendedor (Resumen)"
sidebar_position: 11
---

Cuando su jefe o su socio piden las ventas del mes por vendedor, este resumen le da los totales al instante. Sin detalle que sobre: solo las cifras de cada vendedor, listas para compartir.

Para ingresar al reporte:

1. Hacer click en "Ventas".
2. Seleccionar "Reportes".
3. Seleccionar "Ventas Mensuales por Vendedor (Resumen)".

Con estos totales puede cerrar el mes, calcular comisiones y tomar decisiones sobre su equipo de ventas.

## API (llamadas desde sistemas externos)

### Obtener el resumen de ventas por vendedor

Se puede obtener el resumen del mes indicado por `year` y `month` (números enteros). El parámetro `invoice_order` acepta `1` para facturas, `2` para órdenes y `3` para ambos; `creation_date` acepta `1` para la fecha de creación y `2` para la fecha de emisión; `sellers` acepta IDs separados por coma o `all`, y `tags` filtra por etiquetas.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/sales/reports/seller_monthly_sales.json?year=2026&month=8&invoice_order=1&creation_date=2&sellers=all"
```

Esto devolverá un JSON similar a este:
```json
{
  "total_services": 178.57,
  "total_products": 714.29,
  "total_vat": 107.14,
  "total": 1000.0,
  "total_credit_notes": 0.0,
  "invoice_amounts": {
    "1": {
      "services": 178.57,
      "products": 714.29,
      "vat": 107.14,
      "vat_display": 0.0,
      "total": 1000.0
    }
  },
  "invoices": [
    {
      "id": 1,
      "zid": 2,
      "invoice_number": "1",
      "date": "2026-08-10",
      "payee_id": 5,
      "seller_id": 2,
      "currency_id": 1,
      "subtotal": "1000.0",
      "total": "1000.0",
      "voided": false,
      "reference": "Factura de ejemplo"
    }
  ],
  "credit_notes": []
}
```

En `invoice_amounts` las llaves son los IDs de las facturas y sus montos se separan en servicios, productos, IVA y total.
