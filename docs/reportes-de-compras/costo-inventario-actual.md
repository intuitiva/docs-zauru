---
title: "Costo Inventario Actual"
sidebar_label: "Costo Inventario Actual"
sidebar_position: 2
---

En el momento de poner un precio, es importante tomar en cuenta el margen de ganancia que necesita la empresa. Para realizar el cálculo de margen de ganancia es importante tener el costo del producto al momento de ingresar a la empresa. Para esto, Zauru ofrece el servicio de poder observar el costo unitario del inventario.

Para ingresar es necesario realizar lo siguiente:

1. Hacer click en Modulo de Ventas
2. Seleccionar Reportes
3. Hacer click en Costo del Inventario Actual

![imagen1](/img/reportes-de-compras/costo-inventario-actual-1.jpg)


Aparecerán todos los productos que están en el inventario de la empresa. A un lado se enlista el número de existencias, el costo unitario y el costo total.

![imagen2](/img/reportes-de-compras/costo-inventario-actual-2.png)

## API (llamadas desde sistemas externos)

### Obtener costos promedio ponderado por agencia
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    },
    "point_of_sale": "null"
  }' \
  https://app.zauru.com/purchases/reports/datatables_inventory_cost_by_agency.json
```
