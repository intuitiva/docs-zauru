---
title: "Precios sugeridos"
sidebar_label: "Precios sugeridos"
sidebar_position: 2
---

Antes de comenzar a vender sus productos tiene que ponerle precios sugeridos de venta. Si algun item o paquete no tiene precio no va a aparecer en el listado de items o paquetes disponibles para la venta.

## Listar Precios Sugeridos

Para consultar los precios sugeridos de sus items y paquetes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccione la pestana de **"Items"** o **"Paquetes"** segun corresponda.

![imagen1](/img/ventas/importar-precios-0.png)

En el listado podra ver:
- El nombre y codigo del item o paquete.
- El precio actual en cada listado de precios configurado.
- La moneda del precio.

## Ver Detalles de un Precio Sugerido

Para ver el historial de precios de un item o paquete:

1. En el listado de precios sugeridos, haga click sobre el item o paquete que desea consultar.
2. Se mostrara el historial completo de precios, incluyendo cambios anteriores, fechas de modificacion y usuarios que realizaron los cambios.

![imagen2](/img/ventas/importar-precios-0b.png)

## Crear un Precio Sugerido Manualmente

Si desea crear un precio sugerido para un item o paquete de forma manual:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar **"Nuevo"**.

Los campos necesarios son:

a. **Item o Paquete**: Seleccione el item o paquete al que desea asignar el precio. Los paquetes se identifican con el prefijo "b" en el codigo.

b. **Listado de precios**: Seleccione el listado de precios al que pertenecera este precio.

c. **Moneda**: Seleccione la moneda del precio.

d. **Monto**: Coloque el precio de venta sugerido.

e. **Precio flexible**: Marque esta opcion si desea que el precio pueda ser modificado al momento de facturar.

f. **Notas**: Coloque notas adicionales sobre el precio.

Para guardar presione **"Crear Precio"**.

![imagen3](/img/ventas/importar-precios-0c.png)

## Desactivar un Precio Sugerido

Para desactivar un precio sugerido (no se elimina, solo se marca como no vigente):

1. En el listado de precios sugeridos, localice el precio que desea desactivar.
2. Haga click sobre **"Destruirlo"**.

Esto quitara la marca de "actual" del precio, por lo que ya no sera el precio vigente. El historial de precios se mantiene para referencia.

## Importar Excel con Precios

Zauru le permite importar los precios de todos sus productos por medio de una plantilla de Excel para no tener que ponerlos manualmente. Los pasos para importar precios de los items son los siguientes:

1. Ir a ventas
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar **"Item"** o **"Paquete"** segun sea el caso.
4. Seleccionar **"Importar"**.

![imagen4](/img/ventas/importar-precios-1.jpg)

A continuacion debera descargar la plantilla de Excel para colocar los datos que quiere importar.

5. Descargar plantilla de Excel.

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

![imagen5](/img/ventas/importar-precios-2.png)

Esta es la plantilla de Excel donde debera colocar los datos del item y su precio.

![imagen6](/img/ventas/importar-precios-3.png)

Al terminar de llenar el archivo de Excel con todos los precios de sus productos debera guardar el archivo y adjuntarlo para importar sus precios, como se muestra en el paso.

6. Seleccione la ubicacion de su plantilla de Excel.

7. Para Importar los precios presione **"Importar Precios"**.

![imagen7](/img/ventas/importar-precios-4.jpg)

### Exportar Precios Sugeridos

Tambien puede exportar los precios sugeridos actuales a Excel o JSON desde las opciones de exportacion en el listado.

## API (llamadas desde sistemas externos)

### Crear precios sugeridos flexibles
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

### Exportar precios sugeridos de items
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/export.json
```
