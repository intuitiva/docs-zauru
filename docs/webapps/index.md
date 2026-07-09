---
title: "Webapps"
sidebar_label: "Webapps"
sidebar_position: 0
format: md
---

# Webapps (desarrollo a la medida)
Este módulo potencializa la creación de aplicaciones a la medida integradas con Zauru para que se sientan como aplicaciones nativas de Zauru.

## Historia de las Webapps
Las aplicaciones web son aplicaciones hechas con tecnologías abiertas que permiten la interacción con el usuario a traves de un navegador como Firefox, Chrome, Safari o Edge.

Estas aplicaciones se pueden realizar con un sin fin de tecnologías, a continuación mencionamos algunas tecnologías que cumplen ese propósito:

1. __LAMP stack (Linux, Apache, MySQL y PHP):__ Conjunto de teconlogías Open-source que permitieron la democratización del internet, es una tecnología que requería de un servidor y cierta configuración para orquestrar todo el proceso de mostrar las páginas web dinámicas. Todavía es un esquema muy utilizado, adquirió notoriedad entre el 2005 y 2015, un porcentaje muy alto de páginas web fueron creadas y se mantienen usando esta tecnología (hasta facebook empezó con estas tecnologías).
2. __JAM stack (Javascript, APIs, Markup):__ Conjunto de tecnologías Open-source que permiten utilizar las tecnologías serverless (sin servidor) en donde todo el trabajo computacional se realiza en el navegador (con javascript) y la interacción con bases de datos se realizan a traves de APIs (como los APIs de Zauru). Usualmente, las webapps realizadas con esta tecnología se sienten mucho más rápidas que utilizando LAMP stack ya que toda la interactividad se desarrolla directamente en el navegador y no en el servidor.


## Recomendaciones de como crear una webapp (JAM stack)

1. Utilizar un __hosting gratis__ (para ahorrar), recomendamos [Netlify](https://www.netlify.com "Netlify link")
2. Que __utilice el API de Zauru para obtener y guardar la información__, para no reinventar el agua azucarada y ahorrarse estar usando otro servicio para almacenar datos. Además se pueden utilizar las bases de datos personalizables de Zauru: [webapp_vars](https://docs.zauru.com/webapps/variables-webapp "Variables para webapps") y webapps_dbs
3. Todas __las llamadas GET en el API de Zauru no tienen restricción CORS__ ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing "CORS wikipedia")) habilitada, por lo que pueden ser llamadas desde el javascript del navegador, pero todas __las llamadas POST, PUT y DELETE si tienen CORS habilitado__ por lo que hay que hacer estas llamadas desde una función serverless lambda (o desde cualquier otro servidor) como las [Netlify Functions](https://www.netlify.com/docs/functions/)
4. Recuerden de __no exponer las credenciales para ingreso a Zauru en el código__, favor utilizar variables de entorno como las de [netlify](https://www.netlify.com/docs/continuous-deployment/#environment-variables).
5. Por favor __siempre colocar contraseña para ingresar a la aplicación web__, de esta manera estarán menos propensos a que les roben sus credenciales y las utilicen de forma maliciosa. Una herramienta como [netlify identity](https://www.netlify.com/docs/identity/) funciona a la perfección.
6. __Aprovechar las bondades de la tecnología serverles__ con provedores como [Amazon Lambda](https://aws.amazon.com/lambda/), [Standard Library](https://stdlib.com), [Azure Functions](https://azure.microsoft.com/es-mx/services/functions/), [Google Cloud Functions](https://cloud.google.com/functions/) y [IBM Cloud Functions](https://www.ibm.com/cloud/functions)

## APIs de almacenamiento de datos personalizados

Para catapultar estas aplicaciones externas, agregamos 2 tipos de almacenaje de datos para crear y consultar información que no esté relacionada con nada del ERP/CRM.

Estos tipos de almacenaje son:

1. Variables para Webapps (una variable con un valor)
2. Base de datos para Webapps (tablas con filas y columnas)

El poder almacenar cualquier tipo de información nos permite:
1. el control de cualquier proceso operativo (con web apps interactivas hechas a la medida dentro de Zauru)
2. el registro de datos de algún dispositivo conectado a internet (IoT para ver estadísticas de control cruzado o para KPI)

Al tener esta información almacenada en Zauru ya podríamos utilizar tableau (el módulo de análisis) para generar reportes dinámicos e interactivos para analizar lo registrado.

## Resumen

La imaginación es el límite.
