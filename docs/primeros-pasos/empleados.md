---
title: "Empleados"
sidebar_label: "Empleados"
sidebar_position: 2
---

Zauru le permite tener un registro de todos sus empleados, asignar responsabilidades distintas a cada empleado y asignar una agencia para el punto de venta o para que registre casos en el modulo de soporte.

Los pasos para crear un nuevo empleado son:

1. Ir a “Configuraciones”.
2. Seleccionar “Empleados”.
3. Seleccionar “Nuevo Empleado”.

![imagen8](/img/primeros-pasos/empleados-1.png)

Le deberán aparecer las opciones para crear un nuevo empleado, los campos mas importantes a colocar son los siguientes:

a. Si quita el cheque del recuadro, el empleado estará inactivo en el sistema.

b. Para que cada vez que cree un nuevo empleado se le asigne un numero automático deberá crear una numeración automática de documentos.

c. Coloque el nombre del empleado

![imagen9](/img/primeros-pasos/empleados-2.jpg)

d. La agencia que coloque definirá que agencia tendrá el empleado en el modulo de soporte y punto de venta.

e. Aquí podrá colocar las responsabilidades del empleado, las responsabilidades que usted le coloque permitirán seleccionar al empleado en las transacciones que esa responsabilidad conlleve, por ejemplo:

- Contador: Sera responsable de realizar transacciones contables.
- Controlador de inventarios: Sera responsable de reservaciones de inventario.
- Vendedor: Sera responsable de ventas.
- Comprador: Sera responsable de compras.
- Agente de soporte: Sera responsable de registrar casos.

Para guardar los cambios presione “Crear empleado”.

![imagen10](/img/primeros-pasos/empleados-3.jpg)

Le deberá aparecer un mensaje de éxito en la pantalla notificándole que se creo el empleado. Ahora podrá ver este empleado en su listado y lo podrá seleccionar en las transacciones que haga de acuerdo a las responsabilidades del empleado.

![imagen11](/img/primeros-pasos/empleados-4.png)

## Categoría de Empleados
Zauru le permite tener un registro de todos sus empleados y categorizarlos para tenerlos organizados de una forma más eficiente.

Los pasos para crear una nueva categoría de empleado son:

1. Ir a “Configuraciones”.
2. Seleccionar “Empleados”.
3. Seleccionar "Categoría de Empleado".
4. Seleccionar “Nueva categoría de Empleado”.

![Categoría de Empleado](/img/primeros-pasos/empleados-5.png)

Le deberán aparecer las opciones para crear una nueva categoría de empleado, los campos mas importantes a colocar son los siguientes:

1. Colocar el __Nombre__ de la categoría.

2. Puede colocar alguna descripción de la categoría en el segmento de Notas.

3. Presionar el botón __Crear Categoría de empleado__.

![Nueva categoría de empleado](/img/primeros-pasos/empleados-6.png)

### API (llamadas desde sistemas externos)

#### Obtener listado del empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees.json
```

#### Obtener detalles del empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/employees/1.json
```
#### Crear empleado
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "employee": {
      "name": "Empleado Vendedor",
      "updater_id": "1",
      "seller": "1",
      "email": "vendedor@zauru.com",
      "phone": "32223323"
    }
  }' \
  https://app.zauru.com/settings/employees.json
```
