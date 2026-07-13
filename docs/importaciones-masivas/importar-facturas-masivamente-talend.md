---
title: "Importar facturas masivamente (Talend)"
sidebar_label: "Importar facturas masivamente (Talend)"
sidebar_position: 102
---

En este caso vamos a utilizar [Talend](https://www.talend.com/products/data-integration/data-integration-open-studio/ "Talend Open Studio for Data Integration") para formatear el JSON que se va a enviar por el [API de Zauru](https://docs.zauru.com/compras/ordenes-de-compra#crear-nueva-orden-de-compra-de-gastos "API de Zauru") y enviarlo al correr el trabajo.

Este flujo de la información lo vamos a separar para aclarar mejor el proceso completo:

## 1. Llenar la plantilla (Cliente)
Primero y más importante son los exceles de donde vamos a obtener los datos. Estos exceles deberían de estar lo más ordenado posible para que podamos manipularlos facilmente y dejarlos listos para que el proceso de digitalización con Talend sea lo más rápido posible.

En el siguiente ejercicio hemos usado de ejemplo la importación de facturas masivas con datos separados en 4 exceles (Brindados así por el cliente). Al evaluar este caso aprenderemos a importar facturas que vienen en una estructura de datos diferente a la que maneja Zauru.

Estos son los Exceles que el cliente debe de llenar:

### a. Plantilla para importar cabecera de facturas de venta

En este excel se encuentran los datos de la cabecera de la factura de cada beneficiario. En este archivo podemos encontrar datos como "`invoice_number`", `"payee_name"`, `"payee_code"` y `"total"`. 

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "height": "auto", "textAlign": "center" }}>
  <a href="https://assets.ctfassets.net/29uzlfbx33dq/5PlWOPEhpXxECGsrKwcDgi/68638a6769ee324b8e78def4d3fc5458/plantilla-factura-venta-cabecera.xls">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla para importar cabecera de facturas de venta
  </a>
</div>

<br />

### b. Plantilla para importar cuerpo de facturas de venta 

En este excel se encuentran los datos del cuerpo de la factura de cada beneficiario. En este archivo podemos encontrar datos como `"invoice_number"`, `"item_bundle_name"`, `"quantity"` y `"price"`. 

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "height": "auto", "textAlign": "center" }}>
  <a href="/files/f0e5a3de26ab5a2e26783df6a459ab8c/plantilla-factura-venta-cuerpo.xls">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla para importar cuerpo de facturas de venta
  </a>
</div>

<br />

### c. Plantilla para importar id de clientes

En este excel se encuentran los datos del beneficiario de la factura. En este archivo podemos encontrar datos como `"payee_id"`, `"payee_code"` y `"payment_term_name"`. 

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "height": "auto", "textAlign": "center" }}>
  <a href="/files/5034757328611f58216772c3a5195640/plantilla-payee-id.xls">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla para importar id de clientes
  </a>
</div>

<br />

### d. Plantilla para importar id de terminos de pago

En este excel se encuentran los datos del termino de pago de la factura. En este archivo podemos encontrar datos como `"payment_term_name"` y `"payment_term_id"`.

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "height": "auto", "textAlign": "center" }}>
  <a href="/files/6c6bffd09d65652731a66a5581480843/plantilla-payment-terms-id.xls">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla para importar id de términos de pago
  </a>
</div>

<br />

## 2. Utilizar talend para mandar por el API de Zauru cada venta (Implementador)

Con el poder de Talend Open Studio se pueden construir flujos de limpieza, manipulación y publicación de datos. El flujo que tuvimos que construir para cargar esta información a Zauru fue el siguiente:

![importar-facturas-masivamente](/img/importaciones-masivas/importar-facturas-masivamente-talend-1.png)

A continuación vamos a revisar cada uno de los componentes que se utilizaron y algunas recomendaciones de cada componente para que funcione correctamente.

### tFileInputExcel

Este es el componente que lee el excel y lo convierte en algo que entiende Talend (schema) y que puede enviar a los otros componentes para su proceso.
En este componente lo más importante es colocar el tipo de dato correcto en cada campo del esquema.

Esta imagen muestra los tipos de dato en cada columna por si hay necesidad de cambiarla.
![file-input-excel-factura-venta-cuerpo](/img/importaciones-masivas/importar-facturas-masivamente-talend-2.png)

> Nótese también que se agregó la columna "json" como un string para que allí se coloque la orden de compra de la forma que lo entiende Zauru según el API.

### tMap_1
Al enlazar el componente de tMap con el siguiente componente de tWriteJSONfield_1 automáticamente genera un schema de salida requerido para mandar los argumentos al RESTClient. Nosotros tenemos que transformar el schema de entrada (que viene de los tFileInputExcel) a este formato requerido.

![t-map-1-factura-ventas](/img/importaciones-masivas/importar-facturas-masivamente-talend-3.png)

> Nótese cómo tomamos las 4 tablas que contienen los datos de la factura separados y lo expresamos en una sola linea simplemente haciendo "Drag and Drop" del valor izquierdo hacia la expresión del lado derecho.

Con las diferentes tablas de Excel enlazadas ahora debemos convertir este resultado en el formato JSON que utilizamos para enviar información a Zauru por el tRESTclient_1. 

Aprenderemos más en el siguiente paso.

### tWriteJSONfield_1
Este componente convierte los datos del schema del tMAP y los convierte en un JSON para que lo pueda entender el API de Zauru. Para utilizar este componente hay que hacer 2 cosas:

1. Seleccionar el campo destino donde vamos a escribir el JSON producido. En nuestro caso vamos a seleccionar el campo nuevo "json" que agregamos al schema en el componente de Excel.
![component-twrite-json-field-1-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-4.jpg)

2. Mapear los campos a los campos que entiende el API de Zauru.
![twrite-json-field-1-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-5.png)

> Nótese que hay que seleccionar al menos 1 elemento de "loop element" en la columna de Node Status

### tMap_2
En este paso tomamos la expresión generada por el twriteJSONfield_1 y la volvimos a mapear uniendo esta vez el numero de correlativo de la factura y los detalles del json generado en un solo string de texto.
![t-map-2-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-6.png)


### tDenormalize_1
Este componente nos permite unir dos valores de diferentes tablas de datos en una sola, por ejemplo: si tenemos los valores de "nombre" y "apellido" en dos tablas separadas y deseamos unirlos en una sola tabla, Talend nos permite hacer una Denormalización despues del Map para unir estos valores y obtener un solo string.
![t-denormalize-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-7.jpg)

### tMap_3
Tomamos el string de texto que nos dio de resultado la denormalización del paso anterior y fusionamos el campo "Serie" con "Numero de Factura" porque Zauru solo permite guardar un campo con los dos datos. 

> Nótese que usamos corchetes corchetes para  `"details_json"` porque ya lo habíamos fusionado anteriormente en el tDenormalize_1.

![t-map-3-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-8.png)

### tWriteJSONField_2
Colocamos el resultado de la expresión anterior ("tMap_3") dentro del siguiente tWriteJSONField para convertirlo en un JSON  que lo pueda entender el API de Zauru. 

![t-write-json-field-2-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-9.png)

> Nótese que hay que seleccionar al menos 1 elemento de "loop element" en la columna de Node Status

### tMap_4

Cuando Talend encuentra una o más celdas vacias dentro de un JSON las remplaza con el valor de "[]" en lugar de "null". 

Es por eso que realizamos este paso, para quitar la celda completa del resultado de la expresión anterior (JSON) en el caso de que esta esté vacia con la excepción de que el campo vacio sea "order_number".

![t-map-4-facturas-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-10.png)

### tRESTClient
Este módulo se encarga de enviar lo que viene en el schema de entrada (del componente Map) a la página que configuremos. La configuración necesaria debe ser:

1. URL: https://baculo.herokuapp.com no utilizamos https://app.zauru.com porque utilizamos un certificado [Lets Encrypt](https://letsencrypt.org "Lets Encrypt Link") y Talend todavía no soporta ese tipo de certificados para sitios HTTPS por lo que tendremos que utilizar la otra dirección de Zauru que utiliza un certificado wildcard de DigiCert.
2. HTTP Method: POST
3. Content Type: JSON
4. Accept Type: JSON

![t-rest-client-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-11.png)

Además, en las configuraciones avanzadas hay que ingresar las credenciales del API en los Headers para poder procesar la solicitud en Zauru:

1. X-User-Email
2. X-User-Token

![t-rest-advanced-factura-venta](/img/importaciones-masivas/importar-facturas-masivamente-talend-12.png)

### tLogRow
Este componente sirver para mostrar el esquema con los datos que genera cada componente, coincidentemente, RESTClient puede generar 2 salidas, las 2 opciones que responde el servidor: respuesta correcta del servidor (HTTP Status 200) y la respuesta con error del servidor (HTTP status 50X, 40X, 30X, etc) después de mandar una solicitud. Al correr el trabajo va a mostrar cuantas respuestas salieron positivas y cuantas negativas.

## Pruebas recomendadas

1. Utilizar LogRow en cada componente, antes de agregar el siguiente componente para ver si lo que procesó el componente está correcto
2. Enviar los datos a nuestro servidor de pruebas https://zauru.herokuapp.com para ver como ingresaron los datos.

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "textAlign": "center" }}>
  <a href="/files/041739b89017643512ab5cdbbbdaa2a1/IMPORTAR_FACTURAS_CONTENTFUL.zip" download="plantilla">

    <img src="/files/c251f012c12cf758225cdefd1a4c93d7/TalendIcon.png" alt="talend_file" width="38" height="38" />
    <br />
    Job de Talend completo
  </a>
</div>

> Adjunto el archivo de Talend para que puedan jugar con todo lo que se discutió en este manual
