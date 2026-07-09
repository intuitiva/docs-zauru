---
title: "Preparación de Zauru para conectarlo a cualquier software de tienda en linea"
sidebar_label: "Preparación de Zauru para conectarlo a cualquier software de tienda en linea"
sidebar_position: 1
format: md
---

# Preparación de Zauru para conectarlo a cualquier software de tienda en linea
Para que Zauru se pueda conectar a cualquier e-commerce debemos configurar algunas cosas para que la comunicación fluya sin problemas entre los 2 sistemas.
## Habilitar el módulo de e-commerce
Este paso es solicitarlo a su distribuidor de Zauru porque puede incurrir en costos adicionales.

## Crear un usuario de e-commerce
### Invitación
Este paso implica invitar a un usuario nuevo por medio de un correo electrónico. Ver manual de [invitaciones](https://docs.zauru.com/permisos-de-acceso/invitaciones "invitaciones")

En este caso, por no ser un usuario que pertenece a un ser humano, no necesita existir realmente el correo, en el caso de que el correo es ficticio, se puede entrar a la invitación, copiar el URL de la invitación, salir de zauru y pegarlo en la barra de navegación para aceptarla.
### Rol
Es necesario crear un rol nuevo para este usuario recién invitado para que pueda tener sus permisos personalizados. Ver el manual de [roles](https://docs.zauru.com/permisos-de-acceso/roles "roles")

### Suscripción
Luego que se haya aceptado la invitación y creado el rol, podemos unirlos por medio de la suscripción. Ver el manual de [suscripciones](https://docs.zauru.com/permisos-de-acceso/suscripciones "suscripciones")

### Permisos
Este usuario debe tener TODOS los permisos disponibles del módulo de e-commerce. Ver el manual de [permisos personalizados](https://docs.zauru.com/permisos-de-acceso/permisos "permisos").

## Habilitar e-commerce en los Items
Para que los items se puedan sincronizar desde el módulo de [e-commerce](https://docs.zauru.com/e-commerce/solicitar-los-items-disponibles-con-el-API "solicitar items") es habilitar en cada item que se quiera mostrar en la tienda en linea.

## Agregar la responsabilidad de e-commerce en las agencias de donde se va a obtener producto para la tienda en linea

Usualmente las tiendas en linea mantienen un registro de existencias, para eso debemos decirle a Zauru de donde puede obtener ese detalle, para eso se [editan las agencias](https://docs.zauru.com/primeros-pasos/agencias "manual de agencias") y se les coloca la responsabilidad de e-commerce.

Además de mostrar de donde se obtendrá el producto para la tienda en linea, al momento de colocar un pedido de la tienda en linea, se obtendrán los productos de todas esas tiendas para consolidarlo y poder crear la factura.

## Configuraciones del módulo e-commerce
La configuración del módulo e-commerce es muy sencilla y ayuda a la automatización del módulo. Prácticamente hay que llenar estos campos que estan muy bien descritos:
![configuración e-commerce](/img/e-commerce/preparacion-de-zauru-para-conectarlo-a-cualquier-tienda-en-linea-1.png)
