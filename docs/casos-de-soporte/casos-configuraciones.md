---
title: "Configuraciones de Soporte"
sidebar_label: "Configuraciones"
sidebar_position: 15
---

¿Le gustaría que su propio sistema se enterara solo cada vez que se crea, actualiza o cierra un caso? ¿Y que los correos de soporte salieran a nombre de su empresa, con su asunto y su saludo? Este tutorial le muestra la configuración de webhooks y correos electrónicos del módulo de casos de soporte, para que la comunicación con sus clientes y sus sistemas funcione sin trabajo manual.

Para acceder a las configuraciones:

1. Ir a **"Soporte"**.
2. Seleccionar **"Configuraciones"** (o acceder a `/support/support_settings/new`).

![imagen1](/img/casos-de-soporte/casos-configuraciones-1.png)

## Configuracion de Webhooks

Si su taller usa otro sistema para el inventario o la mensajería, los webhooks le evitan estar copiando datos a mano: Zauru notifica a ese sistema externo cada vez que ocurre un evento en los casos de soporte. Puede configurar webhooks para tres eventos:

### Webhook al Crear un Caso

- **Enviar Webhook al Crear**: Active esta casilla para habilitar el envio de webhooks cuando se crea un nuevo caso.
- **URL del Webhook (crear)**: La URL a la que Zauru enviara una solicitud HTTP con los datos del caso recien creado.

### Webhook al Actualizar un Caso

- **Enviar Webhook al Actualizar**: Active esta casilla para habilitar el envio de webhooks cuando se actualiza un caso existente.
- **URL del Webhook (actualizar)**: La URL a la que Zauru enviara una solicitud HTTP con los datos del caso actualizado.

### Webhook al Cerrar un Caso

- **Enviar Webhook al Cerrar**: Active esta casilla para habilitar el envio de webhooks cuando se cierra un caso.
- **URL del Webhook (cerrar)**: La URL a la que Zauru enviara una solicitud HTTP con los datos del caso cerrado.

## Configuracion de Correo Electronico

Cuando el cliente reciba el correo con el resumen de su caso, conviene que el remitente sea su empresa y que la respuesta llegue a la persona correcta. Estas opciones controlan el envio de correos electronicos al utilizar la funcion **"Enviar por Correo"** en un caso.

### Remitente del Correo

- **Remitente**: Seleccione entre:
  - **Zauru**: El correo se envia desde la direccion de correo configurada en Zauru.
  - **Ninguno**: Deshabilita el envio de correos.

### Direccion de Respuesta (Reply-To)

- **Reply-To**: Direccion de correo a la que el cliente podra responder. Si se deja vacio, se usa la direccion del remitente.

### CC al Responsable

- **CC al Responsable**: Si se activa, el agente de soporte responsable del caso recibira una copia del correo enviado al cliente.

### Plantilla del Correo

- **Asunto**: El asunto del correo electronico. Puede usar variables del sistema que seran reemplazadas con los datos del caso.
- **Saludo**: Texto de saludo inicial del correo (Ej: "Estimado cliente,").
- **Cuerpo del Mensaje**: El contenido principal del correo. Puede usar variables del sistema y texto libre.

### Copias del Correo

- **CC**: Direcciones de correo adicionales que recibiran copia del correo (separadas por comas).
- **BCC**: Direcciones de correo que recibiran copia oculta del correo (separadas por comas).

## Guardar Configuraciones

Despues de realizar los cambios, presione el boton de guardar. Las configuraciones se aplican de inmediato y afectan a todos los casos de soporte de la entidad.

Con las configuraciones guardadas, cada correo y cada notificación saldrá con la identidad de su empresa sin que tenga que escribirla cada vez. El siguiente paso natural es probar el flujo completo: cree un caso de prueba y envíe el correo al cliente para ver cómo queda con su plantilla.

## API (llamadas desde sistemas externos)

No hay endpoints API directos para las configuraciones de soporte, ya que estas se almacenan como variables de entidad y se gestionan exclusivamente desde la interfaz web.
