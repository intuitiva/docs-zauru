---
title: "Facturas Electrónicas en Guatemala"
sidebar_label: "Facturas Electrónicas en Guatemala"
sidebar_position: 7
format: md
---

# Facturas Electrónicas en Guatemala

## Historia de FACE
A partir del 2007 en Guatemala se empezó a implementar la factura electrónica FACE, este esquema involucraba a obligatoriamente a terceros (generadores de facturas electrónicas - __GFACE__) a ser intermediarios entre la Superintendencia de Administración Tributaria __SAT__ y el contribuyente emisor de facturas.

Este esquema FACE arrastraba muchas restricciones/condiciones que se utilizaban en el esquema viejo de facturas emitidas manualmente, entre eso un número de resolución y correlativo (serie) de facturas que era proporcionado por la SAT y que el GFACE utilizaba para generar o aprobar números de factura válidos. Cada Serie de facturas debía ir asociado a una sucursal que también era autorizada por la SAT. Además, el GFACE definía el esquema que los emisores tenían que utilizar, y el de todos los GFACEs eran distintos, haciendo el desarrollo de la integración mucho más dificil. En resumen, solo digitalizaron el esquema anterior y obligaron a los GFACE a utilizar tecnología relativamente obsoleta (SOAP).

La SAT podía conectarse a los GFACE para obtener información de los contribuyentes, o sea, la SAT no recibía esta información y solo utilizaba a los GFACEs a ser su base de datos. Algunos dicen que hay GFACEs donde la SAT nunca se pudo conectar... ¯\_(ツ)_/¯

A partir del 2019, la SAT ya no está aprobando solicitudes de emisores de facturas electrónicas con el esquema FACE.

## Historia de FEL
A partir del 2018, se hicieron muchos cambios en las legislaciones y se implementó el esquema FEL (Factura Electrónica En Linea) lo cual corrigió muchos de los errores y aperturó un poco más las limitantes de tecnología que se habían impuesto con FACE.

Ahora los GFACEs son opcionales, uno puede generar sus facturas electrónicas directamente desde el portal de la SAT. Y los GFACEs están obligados en enviar en menos de 48 horas los documentos tributarios electrónicos (__DTE__) que recibieron de los Emisores de Facturas Electrónicas por lo que este esquema es "casi" en Línea.

Ahora la SAT tiene un portal donde se pueden corroborar la existencia y los detalles de los DTEs [Verificador público de DTE](https://portal.sat.gob.gt/portal/verificador-publico-de-dte/).

La integración entre Emisores de Factura Electrónica y los GFACEs ahora es más estandarizada, ya que todos exigen el mismo XML que es el que se le envía a la SAT. Todavía hay varios métodos de comunicación entre el Emisor de Factura Electrónica y el GFACE (SOAP, REST + Headers, REST + oAuth, etc.) pero el contenido es el mismo.

## Configuración de Zauru para la integración con algún GFACE FEL

Las partes más importantes para configurar un servicio FEL son los siguientes:

### Firma Electrónica del Emisor emitido por la SAT
Este es un archivo *.pfx* que adentro contiene un certificado con su llave privada que está protegido por una contraseña que también se asigna al generar este certificado en la SAT.

Con este archivo se firma cada documento tributario electrónico que la SAT verifica su autenticidad ya que la misma SAT generó ese certificado.

![certificado con contrasenia](/img/ventas/facturas-electronicas-en-guatemala-1.png)

### Credenciales para comunicarse al GFACE
Estas credenciales usualmente son un usuario y contraseña (a veces se refieren al mismo como un APIKEY). Estas credenciales le van a permitir a Zauru enviarle documentos al GFACE para que los procese y nos responda.

![credenciales gface](/img/ventas/facturas-electronicas-en-guatemala-2.png)

### Número de sucursal registrada en la SAT para las agencias vigentes
Usualmente es un número correlativo empezando por 1. El portal del GFACE usualmente tiene esa información.

### Representación gráfica de los DTEs (PDF)
Este es el documento que se le va a enviar al cliente, ya sea una factura, una factura especial o una nota de crédito.

## Proceso típico para configurar la factura electrónica

1. Solicitar a SAT que uno pueda ser emisor de factura electrónica en linea FEL
2. Acreditar al GFACE como el certificador que se utilizará para la factura electrónica en línea FEL
3. Generar el certificado de la firma electrónica en la SAT (recordar la contraseña)
4. Enviarle el certificado y la contraseña del certificado de firma electrónica al GFACE y a Zauru
5. Probar las credenciales recibidas en el __portal del GFACE__
6. Enviar las credenciales del GFACE a Zauru
7. Enviar la representación gráfica PDF de los documentos tributarios electrónicos a emitir al GFACE (para su verificación) y a Zauru para su implementación.
8. Revisar las pruebas generadas por Zauru en el portal del GFACE y los PDFs generados
9. Aprobar implementión del GFACE y de Intuitiva.
