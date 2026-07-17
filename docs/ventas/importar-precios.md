---
title: "Precios sugeridos"
sidebar_label: "Precios sugeridos"
sidebar_position: 3
---

Antes de comenzar a vender sus productos tiene que ponerle precios sugeridos de venta. Si algun item o paquete no tiene precio no va a aparecer en el listado de items o paquetes disponibles para la venta.

## Listar Precios Sugeridos

Para consultar los precios sugeridos de sus items y paquetes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccione la pestana de **"Items"** o **"Paquetes"** segun corresponda.

![imagen1](/img/ventas/importar-precios-0.png)

### Pestana de Items

En el listado de items podra ver:

- El nombre y codigo del item.
- La categoria del item.
- El precio actual en cada listado de precios configurado.
- La moneda del precio.

La tabla cuenta con busqueda integrada por texto, que busca tanto en el nombre y codigo del item como en el nombre de los listados de precios. Los resultados se muestran paginados de 40 registros por pagina. Puede ordenar por ZID, codigo o nombre del item.

### Pestana de Paquetes

La pestana de paquetes funciona de manera similar a la de items, pero muestra los paquetes (bundles) activos con sus precios sugeridos. La busqueda y paginacion funcionan de la misma manera. Puede ordenar por ID, codigo o nombre del paquete.

## Ver Detalles de un Precio Sugerido

Para ver el historial completo de precios de un item o paquete:

1. En el listado de precios sugeridos, haga click sobre el precio que desea consultar.
2. Se mostrara el historial completo de precios para ese item o paquete dentro del mismo listado de precios.

![imagen2](/img/ventas/importar-precios-0b.png)

El historial de precios incluye:

- Todos los precios anteriores y el actual.
- El monto de cada precio historico.
- La moneda de cada precio.
- Si el precio era flexible o no.
- Notas asociadas a cada precio.
- Fecha de creacion de cada precio.
- Usuario que creo cada precio.

El sistema determina automaticamente si esta consultando un item o un paquete y muestra el historial correspondiente al listado de precios asociado.

## Crear un Precio Sugerido Manualmente

Si desea crear un precio sugerido para un item o paquete de forma manual:

1. Ir a **"Ventas"**.
2. Seleccionar **"Precios Sugeridos"**.
3. Seleccionar **"Nuevo"**.

![imagen3](/img/ventas/importar-precios-0c.png)

Los campos necesarios son:

a. **Item o Paquete**: Seleccione el item o paquete al que desea asignar el precio. Los paquetes se identifican con el prefijo "b" en el codigo (ej. "b123"). Los items aparecen agrupados por categoria y tambien se muestran items sin categoria.

b. **Listado de precios**: Seleccione el listado de precios al que pertenecera este precio. Solo aparecen los listados de precios activos.

c. **Moneda**: Seleccione la moneda del precio.

d. **Monto**: Coloque el precio de venta sugerido.

e. **Precio flexible**: Marque esta opcion si desea que el precio pueda ser modificado al momento de facturar.

f. **Notas**: Coloque notas adicionales sobre el precio.

Para guardar presione **"Crear Precio"**.

### Creacion con Pre-llenado de Campos desde la URL

Zauru permite pre-llenar el formulario de creacion de precios pasando parametros por URL. Esto es util para integraciones o accesos directos. Los parametros disponibles son:

| Parametro | Descripcion |
|-----------|-------------|
| `i` | ID del item |
| `p` | ID del listado de precios |
| `a` | Monto del precio |
| `b` | ID del paquete (bundle) |
| `c` | ID de la moneda |
| `f` | Precio flexible (use "f" para activarlo) |

Ejemplo de URL con pre-llenado:
```
/sales/suggested_prices/new?i=150&p=3&a=99.99&c=1&f=f
```

### Deteccion Automatica de Paquetes

Al crear un precio, si el ID del item comienza con "b", el sistema detecta automaticamente que se trata de un paquete y asigna el precio al bundle correspondiente en lugar de a un item regular.

## Desactivar un Precio Sugerido

Para desactivar un precio sugerido (no se elimina, solo se marca como no vigente):

1. En el listado de precios sugeridos, localice el precio que desea desactivar.
2. Haga click sobre **"Destruirlo"**.

Esto alterna la marca de `current` del precio a `false`, por lo que ya no sera el precio vigente. El nuevo precio activo sera el siguiente en el historial (si existe). El historial de precios se mantiene para referencia. Este mecanismo de soft-delete permite mantener trazabilidad completa de los cambios de precios.

Despues de desactivar, sera redirigido automaticamente al listado correspondiente (items o paquetes) segun el tipo de precio desactivado.

## Exportar Precios Sugeridos

Zauru permite exportar los precios sugeridos en diferentes formatos:

### Exportar Precios de Items a Excel

Desde el listado de items, puede exportar a formato XLS. El archivo incluira:
- Todos los items activos y vendibles con sus categorias.
- Los precios actuales en cada listado de precios activo.
- La moneda de cada precio.

### Exportar Precios de Paquetes a Excel

Desde la pestana de paquetes, puede exportar los precios de los bundles activos a XLS con la misma estructura.

### Exportar Precios de Items a JSON

La exportacion a JSON de items retorna un arreglo con todos los items activos y vendibles que tienen precio en el listado de precios general (sin `price_list_id`). Incluye:

- Datos del item (excepto imagenes, timestamps).
- Etiquetas (tags) del item.
- Categoria del item.
- Marca del item.
- Precios sugeridos actuales (monto y moneda).

### Exportar Precios de Paquetes a JSON

La exportacion a JSON de paquetes retorna un hash donde la llave es el ID del paquete y el valor contiene los precios sugeridos actuales agrupados por listado de precios.

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

## API (llamadas desde sistemas externos)

### Listar precios sugeridos actuales (JSON)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices.json
```

### Obtener plantilla para crear un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/new.json
```

### Listar precios de ítems
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices.json
```

### Listar precios de paquetes (bundles)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices/bundles.json
```

### Ver detalle de un precio
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/prices/1.json
```

### Crear precios sugeridos (item)
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

### Crear precios sugeridos para paquetes
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "suggested_price": {
      "price_list_id": "1",
      "item_id": "b25",
      "currency_id": "1",
      "flexible_price": "0",
      "amount": "150.00",
      "notes": "precio de paquete desde API"
    }
  }' \
  https://app.zauru.com/sales/suggested_prices.json
```

### Ver detalle de un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/1.json
```

### Desactivar un precio sugerido
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/suggested_prices/1.json
```

### Exportar precios sugeridos de items a JSON
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/export.json
```

### Exportar precios sugeridos de items a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/export.xls
```

### Exportar precios sugeridos de paquetes a Excel
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/bundles_export.xls
```

### Exportar precios sugeridos de paquetes a JSON
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/bundles_export.json
```

### Obtener plantilla para importar precios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/suggested_prices/price_imports/new.json
```

### Importar precios desde un archivo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -F "price_import[file]=@/ruta/al/archivo.xlsx" \
  https://app.zauru.com/sales/suggested_prices/price_imports.json
```
