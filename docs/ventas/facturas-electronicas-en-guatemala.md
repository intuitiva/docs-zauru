---
title: "Facturas Electrónicas en Guatemala"
sidebar_label: "Facturas Electrónicas en Guatemala"
sidebar_position: 8
---

¿Va a empezar a emitir factura electrónica en Guatemala y no sabe por dónde comenzar? Aquí encontrará el contexto y el proceso completo: qué son FACE y FEL, qué necesita preparar con la SAT y con su certificador, y cuáles son los pasos para dejar su empresa facturando electrónicamente. Este documento le sirve cuando está por implementar la facturación FEL o cuando necesita entender las piezas que Zauru requiere para conectarse.

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

Siguiendo esta lista de principio a fin, su empresa queda autorizada y facturando electrónicamente con Zauru. Una vez en producción, cada factura que emita saldrá firmada, certificada y con su representación gráfica lista para entregarle al cliente, ya sea impresa o por correo.

## API (llamadas desde sistemas externos)

### Consultar respuesta certificada de una factura electrónica
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response.json
```

### Consultar respuesta certificada de anulación de una factura electrónica
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/1/external_storage_certified_response_for_voiding.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Reenviar factura electrónica por correo electrónico
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  https://app.zauru.com/sales/unpaid_invoices/1/resend_mail.json
```

### Exportar respuestas certificadas de facturas y notas de crédito
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  "https://app.zauru.com/sales/reports/export_certified_responses.json?date=2024-01-01&end_date=2024-01-31&include_credit_notes=1"
```

Esto devolverá un JSON similar a este:
```json
{
  "8F7F85CF-50349735": null,
  "38D1CED1-1283935951": null,
  "33BCDA9E-1799441048": null,
  "F6003291-2221228856": null,
  "A1028DD3-4078388238": null,
  "8771CB00-296896111": null,
  "FF29F083-2640595144": null,
  "DD50BD74-1823952351": null,
  "11C113A6-1643662908": null,
  "C123A3D0-2471775689": null,
  "D2C36517-1068780954": null,
  "191ED6B0-2756594692": null,
  "913987E4-2350598816": null,
  "55CA3D24-890128044": null,
  "4883B539-1601129534": null,
  "FC19EC88-862341981": null,
  "04DCEB87-2423801729": null,
  "50224A08-745557496": null,
  "FAE27F25-3591848524": null,
  "65EA3806-3610264789": null,
  "21A4EF5F-3392228777": null,
  "A27B4640-415779188": null,
  "2CC0B307-2883340970": null,
  "5DF782A2-3905766720": null,
  "E4EE520F-2790605769": null,
  "ABBD4A12-2748859813": null,
  "A6594197-41961409": null,
  "D1D0722B-1259751196": null,
  "09B1A565-2934391573": null,
  "FE913563-2096645996": null,
  "9C4466E5-717508120": null,
  "17B3B068-2827833081": null,
  "DD114C48-1293503996": null,
  "612C87C8-2074692415": null,
  "C76BEF3C-1241203436": null,
  "9AC55700-3772731071": null,
  "64C4C033-1649626332": null,
  "3D92B84D-3757199218": null,
  "704DEEFE-2057651672": null,
  "05316157-673466502": null,
  "3E3B3584-322587973": null,
  "533A97AF-3650440093": null,
  "CB44D559-1377913216": null,
  "4D5348AB-2621721249": null,
  "A4CACE52-4277292565": null,
  "D9B89B79-3317582976": null,
  "F9075923-2346863377": null,
  "439750AD-4232725020": null,
  "2FE1289F-1117538767": null,
  "031C63D5-2055818038": null,
  "C5DC65CC-2148811546": null,
  "FE5D79C2-1808812709": null,
  "43B146AC-2194620937": null,
  "E77943EB-1920090806": null,
  "1F2B535C-76890793": null,
  "8A001FFB-2903130336": null,
  "0192631B-1145323944": null,
  "B3CB1A98-597641148": null,
  "59BAC0A4-3618458881": null,
  "CF99FFC3-3248836438": null,
  "F53CEF59-135546220": null,
  "1F833B1A-1411403232": null,
  "A12E5EC0-1030638617": null,
  "12566A9F-2283619699": null,
  "34D48C86-1732005585": null,
  "79F81502-1966623430": null,
  "31ECEA09-2370194099": null,
  "642767F8-1095651262": null,
  "4F352DF6-206523737": null,
  "03926B39-3270526668": null,
  "A480CF6D-3354609284": null,
  "541678F3-2421050133": null,
  "63A81F35-4213984865": null,
  "DAE1205C-1548108008": null,
  "1435D386-693060559": null,
  "C620254E-3831975376": null,
  "A3EB8007-251937621": null,
  "F3A1AF58-3371910205": null,
  "7D45507E-3521004734": null,
  "C7A76207-3273476300": null,
  "C2B8A615-1457473352": null,
  "5440116D-1800683754": null,
  "A3E5C680-2024490199": null,
  "EE635736-1863794931": null,
  "A0BEC7C6-1973046782": null,
  "985FBB58-3954265393": null,
  "19C88578-2519420026": null,
  "B5D28FF2-3499967217": null,
  "00762A0E-424297239": null,
  "36BDB5FB-1146112454": null,
  "BE402D47-1866613442": null,
  "850BDA75-494226353": null,
  "FFFFB429-3429843532": null,
  "B4F97E9C-4018291549": null,
  "D6342FA4-142035786": null,
  "C9EF16D0-2832353360": null,
  "1600F7B2-2815052261": null,
  "D43879A2-30952532": null,
  "37747545-3368830366": null,
  "A055BB35-3933226475": null,
  "14413A26-2814594364": null,
  "A909B9C8-3627106541": null,
  "8DEF3DCA-3555083455": null,
  "DEDEFAEE-184565838": null,
  "15BB5874-3720300153": null,
  "3A8A8707-2084914538": null,
  "BB0F42D7-3852289655": null,
  "2EACC93D-1147487097": null,
  "E97711F8-2539670288": null,
  "B71C36FE-1525956961": null,
  "D51EBEAB-2465221956": null,
  "30554928-1413172867": null,
  "7D3893EE-300960288": null,
  "99FD63C7-4066920274": null,
  "ED7A6D2D-4115153932": null,
  "960B2195-471614979": null,
  "F09EC544-1963738393": null,
  "83522171-466373226": null,
  "4A147B2F-4233186004": null,
  "3612111E-3365552898": null,
  "2AAD5EBB-4023337523": null,
  "72403ADC-3646177473": null,
  "5E1C56D5-602884437": null,
  "53F9967B-3799139281": null,
  "BCFCB0A5-928402582": null,
  "5AF80443-2204779052": null,
  "9768C861-3429388222": null,
  "0F1AFB6A-3478408200": null,
  "3E0610A8-3569828108": null,
  "1A8154CA-2700232229": null,
  "2DBCD4CB-3450946238": null,
  "DE98C5D5-2826129374": null,
  "13FD39CF-1030243601": null,
  "0525C39D-1237336508": null,
  "789E3AAF-1686784356": null,
  "50D2E212-3673442089": null,
  "DDEFA3A6-2320780018": null,
  "59781A65-327829198": null,
  "86ED082C-3326623957": null,
  "853C1AB6-602622400": null,
  "0373652C-1828211960": null,
  "87239437-59198413": null,
  "B45D6C01-1032408400": null,
  "01E1E8B6-4191375293": null,
  "540F7DD0-765742547": null,
  "FFD76A43-85344314": null,
  "5565CFE2-289621979": null,
  "40BE3AFA-158810853": null,
  "F9552F3F-922699199": null,
  "C39D1F79-3615506469": null,
  "E17B4160-2571716195": null,
  "3AB5412D-1010057249": null,
  "BE5E2A26-4004399349": null,
  "95ED919A-2225095462": null
}
```
