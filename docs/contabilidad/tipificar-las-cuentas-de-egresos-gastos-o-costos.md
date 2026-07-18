---
title: "Tipificar las cuentas de egresos (Gastos o Costos)"
sidebar_label: "Tipificar las cuentas de egresos (Gastos o Costos)"
sidebar_position: 3
---

Este tutorial esta enfocado a diferenciar las cuentas de egresos para que aparezcan en el lugar correcto en el estado de resultados y demas reportes.

## Diferencia entre Costo y Gasto

En Zauru, las cuentas de tipo "Gastos" (tipo 3) se subdividen en dos categorias:

1. **Costos**: egresos directamente relacionados con la produccion o venta de bienes y servicios (ej. costo de mercaderia vendida, materia prima, mano de obra directa).
2. **Gastos**: egresos operativos y administrativos (ej. alquileres, salarios administrativos, servicios basicos, papeleria).

La diferencia es importante porque el estado de resultados muestra:

1. **Ingresos**
2. **Costos** (para calcular la utilidad bruta)
3. **Gastos** (para calcular la utilidad neta)

## Como afecta el estado de resultados

El estado de resultados muestra el siguiente orden principal (tipo de cuenta):

1. Ingresos
2. Costos
3. Gastos

El estado de resultados muestra como orden secundario (grupo de cuenta) el orden alfabetico de los mismos de la nomenclatura:

1. Ingresos
    1. Ingresos por ventas
    2. Otros ingresos
2. Costos
    1. Costos de mercadeo
    2. Costos de ventas
3. Gastos
    1. Alquileres
    2. Otros gastos
    3. Salarios

Es por eso que es importante que se tipifique correctamente la cuenta para que el estado de resultados muestre lo que necesita: ingresos, margenes brutos (ingresos - costos) y margenes netos (margen bruto - gastos).

## Marcar una cuenta como Costo

Al crear o editar una cuenta contable de tipo "Gastos", debe marcar la casilla **"Es costo"** (atributo `cost`) si desea que esa cuenta aparezca en la seccion de Costos del estado de resultados. Si no la marca, aparecera en la seccion de Gastos operativos.

Por ejemplo:

- Cuenta "Costo de mercaderia vendida": marcar "Es costo" = SI
- Cuenta "Materia prima": marcar "Es costo" = SI
- Cuenta "Salarios administrativos": marcar "Es costo" = NO
- Cuenta "Alquiler de oficina": marcar "Es costo" = NO
- Cuenta "Comisiones de venta": marcar "Es costo" = SI (si es un costo de ventas)

## Revisar que la cuenta este correctamente tipificada

Se requiere entrar a cada cuenta. Ya dentro de la cuenta se puede revisar si esta correcta la tipificacion de la cuenta.

![Vista de detalle de una cuenta contable mostrando la tipificación de costo](/img/contabilidad/tipificar-las-cuentas-de-egresos-gastos-o-costos-2.png)

![Listado de cuentas contables en Zauru](/img/contabilidad/tipificar-las-cuentas-de-egresos-gastos-o-costos-1.png)

Si esta incorrecto, editar la cuenta y cambiarla.

## Tipificacion en presupuestos

La clasificacion de costo vs. gasto tambien afecta los reportes de presupuestos. Al crear un presupuesto de egresos, puede elegir cuentas de gastos o de costos segun lo que necesite presupuestar. Los presupuestos usan el tipo de cuenta 3 (Gastos) y filtran segun el atributo `cost`.

![Listado de presupuestos contables en Zauru](/img/contabilidad/tipificar-las-cuentas-de-egresos-gastos-o-costos-4.png)

## Exportacion de nomenclatura

Al exportar la nomenclatura contable a Excel, las cuentas de tipo 3 (Gastos) se separan en dos grupos:
- Gastos operativos (`cost = false`)
- Costos (`cost = true`)

Esto permite revisar facilmente que cuentas estan correctamente clasificadas.
