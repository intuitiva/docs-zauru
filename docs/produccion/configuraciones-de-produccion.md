---
title: "Configuraciones de Produccion"
sidebar_label: "Configuraciones de Produccion"
sidebar_position: 1
---

Antes de comenzar a utilizar el modulo de produccion, es necesario configurar los parametros contables y operativos que regiran el comportamiento del modulo. Los pasos para configurar la produccion son los siguientes:

1. Ir a **"Produccion"**.
2. Seleccionar **"Configuraciones"**.

![imagen1](/img/produccion/configuraciones-de-produccion-1.png)

Le aparecera un formulario con los siguientes campos:

a. **Bodega Virtual de Produccion**: Seleccione la bodega virtual que se utilizara como bodega de produccion. Esta bodega es donde se consumiran las materias primas y se generaran los productos terminados durante el proceso productivo.

b. **Pagador de Produccion**: Seleccione el pagador (payee) asociado a las operaciones de produccion.

c. **Cuenta de Inventario de Producto Terminado**: Seleccione la cuenta contable de activo donde se registrara el inventario de productos terminados al cerrar una orden de produccion.

d. **Cuenta de Destino de Costos de Ordenes de Trabajo**: Seleccione la cuenta contable de activo a donde se transferiran los costos al cerrar una orden de trabajo.

e. **Cuenta de Inventario de Materia Prima**: Seleccione la cuenta contable de activo de donde se debitara el consumo de materia prima en las ordenes de produccion.

f. **Cuenta de Gasto por Desperdicio**: Seleccione la cuenta contable de gasto donde se registrara la diferencia cuando la cantidad completada de una orden de produccion sea menor a la cantidad objetivo (desperdicio de producto).

g. **Habilitar Campo Extra en Ordenes Cerradas**: Active este cheque si desea agregar un campo adicional al momento de cerrar ordenes de produccion (por ejemplo, para registrar peso, volumen u otra medida relevante).

h. **Nombre del Campo Extra**: Si habilito el campo extra, defina aqui el nombre que se mostrara en el formulario de cierre.

i. **Tipo de Campo Extra**: Seleccione el tipo de dato del campo extra. Las opciones disponibles son: entero, decimal, fecha o texto.

j. **Politica de Generacion de Sub-ensamblajes**: Determine cuando se deben generar automaticamente ordenes hijas para sub-ensamblajes. Las opciones son:
   - **Nunca**: No se generan ordenes hijas automaticamente.
   - **Siempre**: Siempre se generan ordenes hijas para cada sub-ensamblaje.
   - **Faltante de Stock Actual**: Se generan ordenes hijas solo si no hay suficiente stock del sub-ensamblaje.
   - **Faltante de Stock Actual con Ordenes Planificadas Existentes**: Similar a la anterior, pero tambien considera las ordenes planificadas existentes.

k. **Metrica de Progreso para Ordenes en Ejecucion**: Seleccione como se medira el progreso de las ordenes de produccion en ejecucion:
   - **Tiempo**: Basado en el tiempo acumulado de ejecucion.
   - **Conteo Parcial**: Basado en los conteos parciales registrados manualmente.

l. **Metrica de Progreso para Lotes de Produccion**: Seleccione como se medira el progreso de los lotes de produccion:
   - **Tiempo**: Basado en el tiempo acumulado de ejecucion de todas las ordenes del lote.
   - **Conteo Parcial**: Basado en los conteos parciales de las ordenes del lote.
   - **Ordenes**: Basado en la proporcion de ordenes cerradas dentro del lote.

![imagen2](/img/produccion/configuraciones-de-produccion-2.png)

Una vez que haya completado todos los campos, presione **"Guardar Configuraciones"**.

Le aparecera un mensaje de exito notificandole que las configuraciones de produccion fueron guardadas correctamente.
