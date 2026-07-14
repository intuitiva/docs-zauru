---
title: "Preparación de Zauru para conectarlo a cualquier software de tienda en linea"
sidebar_label: "Preparación de Zauru para conectarlo a cualquier software de tienda en linea"
sidebar_position: 1
---

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
Para que los items se puedan sincronizar desde el módulo de [e-commerce](https://docs.zauru.com/e-commerce/solicitar-los-items-disponibles-con-el-api "solicitar items") es habilitar en cada item que se quiera mostrar en la tienda en linea.

## Agregar la responsabilidad de e-commerce en las agencias de donde se va a obtener producto para la tienda en linea

Usualmente las tiendas en linea mantienen un registro de existencias, para eso debemos decirle a Zauru de donde puede obtener ese detalle, para eso se [editan las agencias](https://docs.zauru.com/primeros-pasos/agencias "manual de agencias") y se les coloca la responsabilidad de e-commerce.

Además de mostrar de donde se obtendrá el producto para la tienda en linea, al momento de colocar un pedido de la tienda en linea, se obtendrán los productos de todas esas tiendas para consolidarlo y poder crear la factura.

## Configuraciones del módulo e-commerce

La configuración del módulo e-commerce permite automatizar el procesamiento de los pedidos entrantes. Para una explicación detallada de cada campo de configuración, consultar el manual de [configuración avanzada del módulo de e-commerce](/e-commerce/configuracion-avanzada-del-modulo-de-e-commerce).

![configuración e-commerce](/img/e-commerce/preparacion-de-zauru-para-conectarlo-a-cualquier-tienda-en-linea-1.png)

Los campos principales que se configuran en esta sección son:

1. **Método de pago predeterminado** — El método de pago que se asignará automáticamente a los pagos generados desde pedidos de e-commerce.
2. **Plazo de pago predeterminado** — El plazo de pago que se asignará a las órdenes de venta generadas.
3. **Bodega de despacho predeterminada** — La bodega desde donde se consolidarán y despacharán los pedidos.
4. **Vendedor predeterminado** — El vendedor asignado a las órdenes de venta generadas.
5. **Forzar que los pedidos requieran envío** — Si se activa, todos los pedidos requerirán envío entre bodegas.
6. **Permitir pagos sin confirmar** — Si se activa, se registrarán pagos aunque no estén confirmados.
7. **Usuario de e-commerce** — El usuario asignado para procesar las solicitudes de e-commerce.
8. **URL de producción** — La URL de la tienda en línea en producción.
9. **URL de pruebas** — La URL de la tienda en línea en pruebas.
