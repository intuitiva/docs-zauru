---
title: "Configuraciones"
sidebar_label: "Configuraciones"
sidebar_position: 1
---

Este tutorial esta enfocado en configurar el modulo de Contabilidad para establecer las transacciones contables que se generan automaticamente y parametros generales del modulo. Zauru le permite a usted especificar las siguientes configuraciones:

## Cuentas contables automaticas

### IVA de ventas (IVA por Pagar)
Seleccione la cuenta contable a donde deberan ir todas las transacciones de IVA por Pagar generadas automaticamente al emitir facturas de venta.

### IVA de compras (IVA por Cobrar)
Seleccione la cuenta contable a donde deberan ir todas las transacciones de IVA por Cobrar generadas automaticamente al registrar compras.

### Activo de Inventario
Seleccione la cuenta de activo que registra el monto del inventario cuando se compra mercaderia. El activo de inventario se incrementa cada vez que usted compra producto y se debita cuando lo vende.

### Gasto del Costo de Inventario
Seleccione la cuenta de gasto que registra el costo del inventario cuando se genera una venta. Al vender un producto se genera automaticamente una transaccion desde Activo de Inventario hacia Costo del Inventario.

### Cuenta de Resultados (Capital)
Seleccione la cuenta de capital (patrimonio) a donde se trasladaran los resultados del cierre mensual y anual del estado de resultados. Generalmente se utiliza una cuenta como "Utilidades del periodo" o "Resultados acumulados".

## Cierre contable

### Fecha de cierre (closed until date)
Establezca una fecha hasta la cual el sistema considera cerrada la contabilidad. Las transacciones con fecha anterior a esta fecha no podran ser editadas ni borradas. Esto protege periodos contables ya revisados y declarados.

## Prioridad de centro de costos

### Prioridad en ventas
Define el orden de prioridad para asignar automaticamente el centro de costo en las transacciones generadas por ventas. Las opciones son combinaciones de:
- Termino de pago
- Agencia
- Empleado

Ejemplo: "Payment Term > Agency > Employee" significa que primero se busca el centro de costo del termino de pago; si no tiene, el de la agencia; si no tiene, el del empleado.

### Prioridad en compras
Define el orden de prioridad para asignar automaticamente el centro de costo en las transacciones generadas por compras, con las mismas opciones de combinacion.

## Configuracion del libro de compras

Estas configuraciones permiten personalizar el libro de compras para adaptarse a los requisitos fiscales de cada pais:

### Cuenta de gasto de combustible
Seleccione la cuenta contable que registra el gasto de combustible para que aparezca identificado en el libro de compras.

### Cuenta de gasto de combustible 2
Cuenta secundaria de gasto de combustible para identificacion adicional.

### Cuenta de impuesto de combustible
Cuenta que registra el impuesto especifico al combustible para su desglose en el libro de compras.

### Cuenta de impuesto de combustible 2
Cuenta secundaria de impuesto al combustible.

### Cuentas de impuestos extra (1, 2 y 3)
Cuentas contables para impuestos adicionales que requieran ser identificados por separado en el libro de compras.

### Columna de serial en libro de compras
Active esta opcion si necesita mostrar una columna con el numero de serie o correlativo interno en el libro de compras.

## Pasos para configurar

Los pasos para establecer las configuraciones de contabilidad son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar el Icono de "Configuraciones".
3. Seleccione a que cuenta contable deberan ir todas las transacciones de IVA por Pagar (VENTAS).
4. Selecciona a que cuenta contable deberan ir todas las transacciones de IVA por Cobrar (COMPRAS).
5. Seleccione a que cuenta contable deberan ir todas las transacciones de Activo de Inventario (COMPRA).
6. Seleccione a que cuenta contable deberan ir las transacciones de gasto del Costo de Inventario (VENTAS).
7. Seleccione la cuenta de capital para cierre de resultados.
8. Establezca la fecha de cierre contable si lo desea.
9. Configure las prioridades de centro de costos para ventas y compras.
10. Configure las cuentas del libro de compras segun sus necesidades fiscales.
11. Seleccione "Actualizar Configuraciones" para aplicar los cambios.

![imagen1](/img/contabilidad/configuraciones-1.jpg)
