---
title: "Números de Serie Atendidos"
sidebar_label: "Números de Serie Atendidos"
sidebar_position: 4
format: md
---

# Números de Serie Atendidos

Este tutorial esta enfocado en la creación de casos con números de serie y su verificación.

Para registrar un numero de serie cuando usted crea un caso, primero debe colocar el nombre del cliente y la información del caso que se esta atendiendo y luego refrescar la pantalla, como se muestra en la siguiente imagen.

![imgen1](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-1.jpg)

Luego de refrescar, podrá seleccionar el numero de serie de el producto que el cliente compro. Solo le aparecerán los números de serie que ese cliente haya comprado.

![imagen2](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-2.jpg)

Después de crear el caso automáticamente quedara un registro de los números de serie que se han atendido.

![imagen3](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-3.jpg)

Para ver el registro de los números de serie atendidos deberá seleccionar “Números de Serie Atendidos”

![imagen4](/img/casos-de-soporte/casos-numeros-de-serie-atendidos-4.jpg)

## API (llamadas desde sistemas externos)

### Crear un número de serie para un caso (en bodega destino Cliente)
```bash
curl -v "Accept: application/json" -H "Content-type: application/json" -H "X-User-Email: prueba@zauru.com" -H "X-User-Token: XSDFKK09238487DLFS" -X POST -d '{"serial":{"name":"serie654321", "item_id":"1", "description":"Producto especial y único ya vendido", "payee_id":"1"}}' https://app.zauru.com/support/serials_attended.json
```

