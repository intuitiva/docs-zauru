---
title: "Importar compras con una sola cuenta (Talend)"
sidebar_label: "Importar compras con una sola cuenta (Talend)"
sidebar_position: 1
format: md
---

# Importar compras con una sola cuenta

En este caso vamos a utilizar [Talend](https://www.talend.com/products/data-integration/data-integration-open-studio/ "Talend Open Studio for Data Integration") para formatear el JSON que se va a enviar por el [API de Zauru](https://docs.zauru.com/compras/ordenes-de-compra#crear-nueva-orden-de-compra-de-gastos "API de Zauru") y enviarlo al correr el trabajo.

Este flujo de la información lo vamos a separar para aclarar mejor el proceso completo:

## 1. Llenar la plantilla (Cliente)
Primero y más importante es el excel de donde vamos a obtener los datos. Este excel debería de estar lo más ordenado posible para que podamos manipularlo rápidamente y dejarlo listo para que el proceso de digitalización con Talend sea lo más rápido posible.

Este es el Excel que el cliente debe de llenar:

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "textAlign": "center" }}>
  <a href="/files/6b4a15a4352f998fb3caba2aa6aa69ef/plantilla_para_importar_ordenes_de_compra_masivamente.xlsx" download="plantilla">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla para importar ordenes de compra masivamente
  </a>
</div>

## 2. Limpiar los datos y cambiar de nombres a IDs (Implementador)

Antes de utilizar Talend, hay que limpiar los datos obtenidos y cambiar algunos nombres que se ingresaron en el excel para cambiarlos a IDs. Esto incluye cambiar las columnas para que se asemeje al nombre de los campos en el API:

1. proveedor y nit proveedor por payee_id
2. moneda por currency_id
3. agencia por agency_id
4. termino de pago por charge_term_id
5. Las fechas con formato de fecha en excel (no texto)
6. Borrar las columnas que no se utilizaron (cosas de items)

Además se debe de cambiar el nombre de todas las columnas para que coincida con los nombres del API. Ver el [API de Zauru](https://docs.zauru.com/compras/ordenes-de-compra?no-cache=1#crear-nueva-orden-de-compra-de-gastos "API de Zauru") para referencia.

Esto nos dejará con un excel (xlx y no xlxs) similar a este:

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "textAlign": "center" }}>
  <a href="/files/c21cac74febfe41dbf57aa54a5b9274f/plantilla_de_compras_con_una_sola_cuenta_llena.xls" download="plantilla">
    <img src="/files/8f0c2f420f0a094da90200f0c2457d78/xlsx_icon.png" alt="excel_file" width="38" height="43" />
    <br />
    Plantilla de compras con una sola cuenta llena
  </a>
</div>

## 3. Utilizar talend para mandar por el API de Zauru cada compra (Implementador)

Con el poder de Talend Open Studio se pueden construir flujos de limpieza, manipulación y publicación de datos. El flujo que tuvimos que construir para cargar esta información a Zauru fue el siguiente:

![talend cusc disenio compras una sola cuenta](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-1.png)

A continuación vamos a revisar cada uno de los componentes que se utilizaron y algunas recomendaciones de cada componente para que funcione correctamente.

### FileInputExcel

Este es el componente que lee el excel y lo convierte en algo que entiende Talend (schema) y que puede enviar a los otros componentes para su proceso.
En este componente lo más importante es colocar el tipo de dato correcto en cada campo del esquema.

Esta imagen muestra los tipos de dato en cada columna por si hay necesidad de cambiarla.
![talend cusc excel schema](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-2.png)

> Nótese también que se agregó la columna "json" como un string para que allí se coloque la orden de compra de la forma que lo entiende Zauru según el API.

### WriteJSONField

Este componente convierte los datos del schema del Excel y los convierte en un JSON para que lo pueda entender el API de Zauru. Para utilizar este componente hay que hacer 2 cosas:

1. Seleccionar el campo destino donde vamos a escribir el JSON producido. En nuestro caso vamos a seleccionar el campo nuevo "json" que agregamos al schema en el componente de Excel.
![talend cusc WriteJsonField basic params](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-3.png)

2. Mapear los campos a los campos que entiende el API de Zauru.
![talend cusc WriteJsonField mapping](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-4.png)

> Nótese que hay que seleccionar al menos 1 elemento de "loop element" en la columna de Node Status
 
### Map
Al enlazar el componente de Map y con el siguiente componente de RESTClient automáticamente genera un schema de salida requerido para mandar los argumentos al RESTClient y nosotros tenemos que transformar el schema de entrada (que viene del WriteJSONField) a este formato requerido.
![talend cusc Map](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-5.png)

> Nótese que colocamos el campo y sustituimos la cadena de caracteres "asdf1" por "1" ya que el componente WriteJSONField no deja colocar nodos con nombres sin letras y que empiecen con letras, por eso decidimos colocar ese código raro en el nodo y cambiarlo con un "replace"

### RESTClient
Este módulo se encarga de enviar lo que viene en el schema de entrada (del componente Map) a la página que configuremos. La configuración necesaria debe ser:

1. URL: https://baculo.herokuapp.com no utilizamos https://app.zauru.com porque utilizamos un certificado [Lets Encrypt](https://letsencrypt.org "Lets Encrypt Link") y Talend todavía no soporta ese tipo de certificados para sitios HTTPS por lo que tendremos que utilizar la otra dirección de Zauru que utiliza un certificado wildcard de DigiCert.
2. HTTP Method: POST
3. Content Type: JSON
4. Accept Type: JSON

![talend cusc RestClient basic params](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-6.png)

Además, en las configuraciones avanzadas hay que ingresar las credenciales del API en los Headers para poder procesar la solicitud en Zauru:

1. X-User-Email
2. X-User-Token

![talend cusc RestClient advanced params](/img/importaciones-masivas/importar-compras-con-una-sola-cuenta-7.png)

### LogRow
Este componente sirver para mostrar el esquema con los datos que genera cada componente, coincidentemente, RESTClient puede generar 2 salidas, las 2 opciones que responde el servidor: respuesta correcta del servidor (HTTP Status 200) y la respuesta con error del servidor (HTTP status 50X, 40X, 30X, etc) después de mandar una solicitud. Al correr el trabajo va a mostrar cuantas respuestas salieron positivas y cuantas negativas.

### Pruebas recomendadas

1. Utilizar LogRow en cada componente, antes de agregar el siguiente componente para ver si lo que procesó el componente está correcto
2. Enviar los datos a nuestro servidor de pruebas https://zauru.herokuapp.com para ver como ingresaron los datos.

<div style={{ "backgroundColor": "Gainsboro", "border": "1px solid dimgray", "padding": "3px", "fontSize": "small", "width": "100px", "textAlign": "center" }}>
  <a href="/files/8d1a1f6f2d7d582b5ccc7f0681a18b1d/subir_compras_con_una_sola_cuenta.zip" download="plantilla">
    <img src="/files/c251f012c12cf758225cdefd1a4c93d7/TalendIcon.png" alt="talend_file" width="38" height="38" />
    <br />
    Job de Talend completo
  </a>
</div>

> Adjunto el archivo de Talend para que puedan jugar con todo lo que se discutió en este manual
