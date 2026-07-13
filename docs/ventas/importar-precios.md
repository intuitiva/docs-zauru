---
title: "Precios sugeridos"
sidebar_label: "Precios sugeridos"
sidebar_position: 2
format: md
---

# Precios de los ítems o paquetes

Antes de comenzar a vender sus productos tiene que ponerle precios sugeridos de venta. Si algún item o paquete no tiene precio no va a aparecer en el listado de items o paquetes disponibles para la venta.

## Importar excel con precios
Zauru le permite importar los precios de todos sus productos por medio de una plantilla de Excel para no tener que ponerlos manualmente. Los pasos para importar precios de los ítems son los siguientes:

1. Ir a ventas
2. Seleccionar “Precios Sugeridos”.
3. Seleccionar "Item o paquete (según sea el caso).
3. Seleccionar “Importar”.

![imagen1](/img/ventas/importar-precios-1.jpg)

A continuación deberá descargar la plantilla de Excel para colocar los datos que quiere importar.

4.Descargar plantilla de Excel.

Los campos permitidos para importar son:

- currency_id
- amount
- notes
- flexible_price
- item_id
- bundle_id


Los campos obligatorios son:

- currency_id
- amount
- item_id o bundle_id

![imagen2](/img/ventas/importar-precios-2.png)

Esta es la plantilla de Excel donde deberá colocar los datos del ítem y su precio.

![imagen3](/img/ventas/importar-precios-3.png)

Al terminar de llenar el archivo de Excel con todos los precios de sus productos deberá guardar el archivo y adjuntarlo para importar sus precios, como se muestra en el paso.

5.Seleccione la ubicación de su plantilla de Excel.

6.Para Importar los precios presióne “Importar Precios”.

![imagen4](/img/ventas/importar-precios-4.jpg)

## API (llamadas desde sistemas externos)

### crear precios sugeridos flexibles
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: pruebas@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "suggested_price": {
      "price_list_id": "",
      "item_id": "165750",
      "currency_id": "1",
      "flexible_price": "1",
      "amount": "0",
      "notes": "creado desde el API"
    }
  }' \
  https://app.zauru.com/sales/suggested_prices.json
```


