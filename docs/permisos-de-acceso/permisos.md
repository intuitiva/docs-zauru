---
title: "Permisos personalizados"
sidebar_label: "Permisos personalizados"
sidebar_position: 2
---

Zauru le permite asignar permisos por rol para controlar el acceso de sus usuarios.

Existen más de 600 permisos distintos para personalizar cualquier proceso y limitar o permitir cualquier restricción de visualizar o crear información que se necesite.

A continuación se mostrara un ejemplo de como dar permisos a un rol creado previamente llamado “Contabilidad”. Después de darle permisos a este rol, se puede asignar a uno o varios usuarios. Los pasos para asignar permisos son los siguientes:

1. Ir a “Control de Accesos”.
2. Seleccionar “Permisos”.

![imagen7](/img/permisos-de-acceso/permisos-1.jpg)

En este ejemplo le asignaremos permisos de facturación y cobro de facturas al rol de contabilidad, no le daremos permisos para que pueda eliminar facturas ni pagos, solo crearlos. También se le dara permisos para crear clientes nuevos y editarlos, pero no podrá destruirlos. Los permisos son los siguientes:

*Ventas*

- __Index__: Asignar este permiso permitirá que el usuario pueda ver el modulo de ventas en su pantallas.

*Clientes*

- __Index__: Asignar este permiso permitirá que el usuario pueda ver el listado de clientes.
- __Show__: Asignar este permiso permitirá al usuario entrar a ver los detalles del cliente.
- __New__: Asignar este permiso permitirá al usuario crear un nuevo cliente.
- __Edit__: Asignar este permiso permitirá al usuario editar el cliente.

![imagen8](/img/permisos-de-acceso/permisos-2.png)

*Facturas Pagadas*

- __Index__: Asignar este permiso permitirá al usuario ver el listado de facturas pagadas.
- __Show__: Asignar este permiso permitirá al usuario ver el detalle de la factura pagada.
- __Destroy__: Asignar este permiso le permitirá al usuario anular facturas pagadas.

*Metodos de Pago*

- __Index__: Asignar este permiso permitirá al usuario ver el listado de Métodos de Pago.
- __Show__: Asignar este permiso permitirá al usuario ver el detalle de Métodos de Pago.
- __New__: Asignar este permiso permitirá al usuario crear un nuevo Método de Pago.
- __Edit__:  Asignar este permiso permitirá al usuario editar el Método de Pago.
- __Destroy__: Asignar este permiso permitirá al usuario destruir el Método de Pago.

![imagen9](/img/permisos-de-acceso/permisos-3.jpg)

*Pagos*

- __Index__: Asignar este permiso permitirá al usuario ver el listado de Pagos.
- __Show__: Asignar este permiso permitirá al usuario ver el detalle de Pagos.
- __New__: Asignar este permiso permitirá al usuario crear un nuevo Pago.
- __Edit__:  Asignar este permiso permitirá al usuario editar el Pago.
- __Destroy__: Asignar este permiso permitirá al usuario destruir el Pago.
- __Print__: Asignar este permiso permitirá al usuario imprimir el pago.
- __New_unconfirmed__: Asignar este permiso permitirá al usuario crear un nuevo pago sin confirmar.
- __New_advance__: Asignar este permiso permitirá al usuario crear un nuevo pago provisional o anticipo.

Términos de Pago

- __Index__: Asignar este permiso permitirá al usuario ver el listado de Término de Pago.
- __Show__: Asignar este permiso permitirá al usuario ver el detalle de Término de Pago.
- __New__: Asignar este permiso permitirá al usuario crear un nuevo Método de Pago.
- __Edit__:  Asignar este permiso permitirá al usuario editar el Método de Pago.
- __Destroy__: Asignar este permiso permitirá al usuario destruir el Método de Pago.

![imagen10](/img/permisos-de-acceso/permisos-4.jpg)


*Facturas no Pagadas*

- __Index__: Asignar este permiso permitirá al usuario ver el listado de Facturas no Pagadas.
- __Show__: Asignar este permiso permitirá al usuario ver el detalle de Facturas no Pagadas.
- __New__: Asignar este permiso permitirá al usuario crear una nueva Factura no Pagada.
- __Edit__:  Asignar este permiso permitirá al usuario emitir una factura desde una Orden de Venta.
- __Destroy__: Asignar este permiso permitirá al usuario destruir la Factura no Pagada.
- __Print__: Asignar este permiso permitirá al usuario imprimir la Factura no Pagada.
- __Voided__: Asignar este permiso permitira al usuario ver el listado de Facturas Anuladas.
- __Export__: Asignar este permiso permitira al usuario exportar las Facturas no Pagadas.


Para actualizar los permisos presione “Actualizar”.

![imagen11](/img/permisos-de-acceso/permisos-5.jpg)



Debera aparecer en la pantalla un mensaje de exito notificandole que los permisos se actualizaron exitosamente. Debe esperar el tiempo especificado para que los cambios de permisos tengan efecto. En este caso se debe esperar 2 minutos para que se actualizen los permisos.

![imagen12](/img/permisos-de-acceso/permisos-6.jpg)

## API (llamadas desde sistemas externos)

### Obtener permisos por rol de una aplicación
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/permissions.json
```

Para obtener los permisos de una aplicación específica, agregue el id de la aplicación:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/permissions/1.json
```

### Actualizar permisos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "permissions": {
      "1,2": "1",
      "2,2": "1",
      "3,2": "1"
    }
  }' \
  https://app.zauru.com/access_control/permissions.json
```

Donde la clave es `"operation_id,role_id"` y el valor es `"1"` para asignar el permiso.
