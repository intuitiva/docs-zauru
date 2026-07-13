---
title: "Facturas electrónicas en contingencia en Guatemala"
sidebar_label: "Facturas electrónicas en contingencia en Guatemala"
sidebar_position: 30
---

Las facturas electrónicas en contingencia se utilizan en situaciones en las que no es posible emitir una factura electrónica estándar debido a problemas técnicos o de conectividad con el certificador. Estas facturas permiten a los contribuyentes continuar con sus operaciones comerciales sin interrupciones mientras se resuelven los problemas técnicos.

## Proceso operativo de emitir facturas electrónicas en contingencia

Para la persona que está emitiendo una factura, el proceso de contingencia es __totalmente transparente__, eso significa que el operador no tendrá que realizar ninguna acción distinta a lo que usualmente hace para generar una factura electrónica.

Sabiendo que el proceso es el mismo, la diferencia está en la representación gráfica de la factura que sufre los siguientes cambios:

![Diferencia facturas FEL en contingencia](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-1.png)

Los cambios que se deben de mostrar en la representación gráfica son 3:
1. Debe mostrarse el texto "DOCUMENTO EN CONTINGENCIA"
2. El número de autorización debe cambiar a número de acceso, al emitir una factura en contingencia no genera número de contingencia sino número de acceso.
3. No debe salir el número de factura (no la serie).

En el momento que se emite ya se le puede imprimir la factura al cliente o mandarla por correo aunque no tenga número de factura. Esto es permitido por la SAT porque el verificador de facturas de SAT permite buscar el documento por número de acceso.

![Verificador de la SAT](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-2.png)

Si una factura es generada en contingencia, Zauru intentará enviar la factura al certificador cada 5 minutos para que el certificador nos asigne un número de factura. De igual manera, al cliente ya se le dio la representación gráfica solo con número de acceso y sin número de autorización o número de factura, por lo que el cliente, para obtener el número de factura tendrá que entrar al validador de la SAT y utilizar el número de acceso para obtener el número de factura generado posterior a la entrega del documento impreso o el correo.

## Proceso administrativo para notificar a la SAT que se emitieron facturas en contingencia.

Se desarrolló un reporte nuevo que muestra todas las facturas en contingencia entre fechas, el reporte se encuentra en ventas -> reportes -> Documentos emitidos en contingencia:

![Reporte de documentos emitidos en contingencia](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-3.png)

Si todavía no tiene número de factura es porque todavía no se le han enviado al certificador para que nos otorgue el número de factura, en el caso de la imagen, ya se certificaron todas las facturas en contingencia.

Cuando las facturas en contingencia se logran enviar al certificador (con los intentos cada 5 minutos), se le enviará un correo a todos los usuarios suscritos en Zauru, notificando que ya se lograron emitir las facturas en contingencia y mostrará las horas en lo que se emitieron esas facturas y cuantas facturas en contingencia se emitieron desde cada agencia/tienda/sucursal. El correo será similar a este:

![Correo de notificación de contingencia](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-4.png)

NOTA: Recomendamos confirmar lo que dice el correo con el reporte de "Documentos emitidos en contingencia"

Ya con la información del correo ya podemos notificar a la SAT de que se emitieron facturas en contingencia en el agencia virtual de la SAT:

![Menú de Agencia virtual de la SAT](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-5.png)

Y dentro de esa opción tendremos que registrar cada una de las agencias/tiendas/sucursales con facturas en contingencia.

![Registrar la contingencia](/img/ventas/facturas-electronicas-en-contingencia-en-guatemala-6.png)

A pesar de que es tedioso el proceso de registrar las contingencias en la SAT, solo es 1 proceso adicional lo que hay que realizar con tal de beneficiarnos de la continuidad operativa del negocio y no dejar de facturar.
