---
title: "Cuentas Contables"
sidebar_label: "Cuentas Contables"
sidebar_position: 2
format: md
---

# Cuentas Contables

El Módulo de Contabilidad almacena la nomenclatura de cuentas que usted desee, comprendemos que la contabilidad puede ser muy variable en cada empresa, y le permitimos a usted manejarla de la forma que usted prefiera. Zauru mantiene un  registro de todas las transacciones contables de compra, venta y pagos de productos y servicios. Al igual que un registro de las cuentas bancarias de la empresa.

A continuación vera como se maneja la contabilidad en Zauru.

![imagen1](/img/contabilidad/cuentas-contables-1.png)

## Cuentas Patrimoniales

Existen 3 tipos de cuentas patrimoniales en Zauru:

1. Activos: Bienes o servicios que posee la empresa con los cuales se obtienen beneficios.
2. Pasivos: Deudas u obligaciones de la empresa.
3. Capital: Es la diferencia entre el valor de todas las propiedades de la empresa y el total de sus deudas.

![imagen2](/img/contabilidad/cuentas-contables-2.png)


## Cuentas de Gestión (Categorías de Cuentas)

![imagen3](/img/contabilidad/cuentas-contables-3.png)


Existen 2 tipos de cuentas de gestión en Zauru (categorías).

1. Gastos
2. Ingresos

![imagen4](/img/contabilidad/cuentas-contables-4.jpg)


## Nomenclatura de Cuentas
Zauru le permite tener la nomenclatura de cuentas que usted desee, con los rubros de cuentas que usted prefiera. Los pasos para crear su propia nomenclatura de activos, pasivos o capital son los siguientes:

1. Crear el Grupo de Cuentas
2. Crear una Cuenta y categorizarla en el grupo de Cuenta Creado


Los pasos para crear un nuevo Grupo de Cuentas son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar Cuentas”
3. Seleccionar la pestaña “Grupo de Cuentas”.
4. Click sobre “Nuevo Grupo de Cuentas”.

![imagen5](/img/contabilidad/cuentas-contables-5.jpg)


A continuación le aparecerán los detalles para crear el nuevo grupo de cuentas:

5.Colocar el código del grupo de la cuenta

6.Colocar el nombre del grupo de la cuenta

7.Seleccionar a que tipo de cuenta pertenece el grupo de cuenta  (Activo, Pasivo, Capital)

8.Coloque en que moneda se maneja el grupo de cuentas.

9.Coloque una descripción del grupo de cuentas.

10.Para guardar los cambios presione “Crear grupo de cuenta”.

![imagen6](/img/contabilidad/cuentas-contables-6.jpg)


Le deberá aparecer un mensaje de éxito en la pantalla.


![imagen7](/img/contabilidad/cuentas-contables-7.jpg)


Ahora deberá editar o crear las cuentas que desee categorizar en este grupo de cuenta. Los pasos para hacerlo son los siguientes:

1. Ir a “Contabilidad”.
2. Seleccionar “Cuentas”.
3. Crear una nueva cuenta y adjuntarla al grupo de cuenta que se creo previamente.

![imagen8](/img/contabilidad/cuentas-contables-8.jpg)


Los pasos para adjuntar una nueva cuenta a un grupo de cuentas son los siguientes:

1. Colocar que tipo de cuenta es la que se desea adjuntar (Activo, Pasivo, Capital).
2. Si es una cuenta corriente o con disponibilidad inmediata (30 días) colocar el cheque en el recuadro.
3. Si es una cuenta que debería tener balance 0, como cuentas por cobrar, cuentas por pagar, adelantos, colocar el cheque en el recuadro.
4. Si la cuenta esta activa colocar el cheque en el recuadro.
5. Colocar el código de la cuenta, que debería de comenzar con el código del grupo de cuentas.
6. Colocar el nombre de la cuenta.
7. Seleccionar a que grupo de cuentas se quiere adjuntar la cuenta.
8. Seleccionar la moneda en que se maneja la cuenta.
9. Colocar una breve descripción de la cuenta.
10. Para guardar los cambios presione click en “Crear cuenta”.

![imagen9](/img/contabilidad/cuentas-contables-9.jpg)


Le deberá aparecer un mensaje de éxito en la pantalla y la cuenta quedara categorizada como se muestra en la imagen.  Esta es la forma en que Zauru le permite crear la nomenclatura de cuentas que usted necesite para llevar la contabilidad de la forma que usted prefiera.


![imagen10](/img/contabilidad/cuentas-contables-10.jpg)

## Saldos Iniciales
Para comenzar a usar Zauru con sus cuentas contables cuadradas se deben ingresar saldos iniciales para que sus bancos, cuentas por pagar y cuentas por cobrar estén al día. La manera contable de hacerlo es la siguiente:

1. Ir a “Contabilidad”.
2. Ir a “Transacciones”.
3. Crear una nueva transacción para colocar el gasto o el ingreso a la cuenta contable a la que desee ingresar el saldo inicial.


Se pueden crear saldos iniciales de:

- Cuentas Bancarias.
- Cuentas por Pagar por Proveedor o completa.
- Cuentas por Cobrar por Proveedor o completa.
- IVA por pagar.
- IVA por cobrar.

La forma de hacerlo es la siguiente.

![imagen11](/img/contabilidad/cuentas-contables-11.png)

Los pasos para crear una nueva transacción de saldos iniciales son los siguientes:

1. Colocar el nombre del cliente o proveedor existente.
2. Si es un nuevo cliente o proveedor, crear un nuevo beneficiario.
3. Colocar una referencia del saldo inicial.
4. Colocar la fecha en que se espera pagar o recibir el pago.
5. Seleccionar desde donde se realizara la transacción, si es un saldo a proveedores seleccionar cuentas por pagar (Proveedores),  si es un saldo a clientes seleccionar ventas contado o crédito (clientes).
6. Colocar la cantidad de la transacción
7. Si es un saldo a proveedores colocar el gasto, si es un saldo de clientes colocar cuentas por cobrar.
8. Si lleva IVA seleccione el botón de +IVA, el sistema automáticamente calculara su IVA por cobrar (Proveedores) o IVA por pagar (Clientes).
9. Para Guardar sus cambios seleccione el botón de “Crear transacción”.

![imagen12](/img/contabilidad/cuentas-contables-12.jpg)

## API (llamadas desde sistemas externos)

### Obtener detalle de la cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/1.json
```

### Consultar listado de cuentas patrimoniales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts.json
```

### consultar listado de cuentas de gestión
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/categories.json
```
