---
title: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_label: "Recepción de solicitudes de e-commerce (pedidos)"
sidebar_position: 2
---

Cuando un sistema de e-commerce (tienda en linea) le manda a Zauru un pedido entra a travez del módulo de e-commerce en la sección de solicitudes de e-commerce.

Las solicitudes de e-commerce registran la información pertinente que permite darle seguimiento al proceso completo. Los datos que quedan registrados son:
1. Los envíos entre bodegas que se generan automáticamente para poder completar el pedido desde la bodega de donde se están consolidando los pedidos.
2. La orden de ventas asociada con su pago pertinente (si aplica)
3. El cliente (encontrado o creado) asociado a la orden de venta.

## Solicitudes no procesadas
Cuando por alguna razón, las solicitudes no han sido procesadas el error va a aparecer en la sección de errores y esto me va a permitir tomar acción para corregirla y reprocesarla o destruirla.
![errores y acciones de solicitudes de ecommerce](/img/e-commerce/recepcion-de-solicitudes-de-e-commerce-pedidos-1.png)

El volver a procesar la solicitud intentará:
1. Validar que el pedido coincida con la información en Zauru, específicamente códigos del item (SKUs) y existencias disponibles
2. Crear o encontrar el cliente basado en el __Nombre EXACTO__
3. Realizar los envíos a la bodega de despacho desde las otras bodegas para poder procesar la orden de venta
4. Realizar la orden de venta
5. Realizar el pago pertinente (si fue enviado)
