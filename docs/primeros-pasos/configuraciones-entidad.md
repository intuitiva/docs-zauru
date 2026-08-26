---
title: "Configuraciones de la Entidad"
sidebar_label: "Configuraciones de la Entidad"
sidebar_position: 12
---

Cuando nota que sus documentos impresos no se ven como usted espera — la fecha en un orden distinto, campos vacíos de más o textos que no cuadran —, muy probablemente la solución está en las configuraciones de su entidad. Desde esta sección puede ajustar variables globales de su empresa que afectan el comportamiento del sistema en distintos módulos. Estas configuraciones se encuentran en la sección de Variables de Entidad.

## Acceder a las Configuraciones de Entidad

Para acceder a las configuraciones de su entidad:

1. Ir a "Configuraciones".
2. Seleccionar "Configuraciones de Entidad".

![imagen1](/img/primeros-pasos/configuraciones-entidad-1.png)

## Variables de Entidad Disponibles

No es necesario modificarlas todas: ajuste únicamente las que apliquen a su operación. A continuación encontrará cada variable con una breve explicación de lo que cambia al configurarla.

### Webhook para Creación de Ítems

Si su catálogo también vive en otro sistema o desea enterarse al instante cuando alguien crea un producto nuevo, esta variable es para usted. Zauru puede enviar una notificación a una URL externa (webhook) cada vez que se crea un nuevo ítem en el sistema.

- **Activar envío de webhook:** Marque esta casilla para activar el envío de notificaciones cuando se crea un ítem.
- **URL del webhook:** Especifique la URL a la que Zauru enviará la notificación. La notificación incluirá los datos del ítem creado.

### Expandir Claves con Guiones Bajos

Cuando se activa esta opción, el sistema expandirá las claves que contienen guiones bajos en los nombres de variables de impresión de formularios. Por ejemplo, una variable `nombre_cliente` se mostrará como "Nombre Cliente" en lugar de "nombre_cliente".

### Formato de Fecha en Formularios

Define cómo se mostrarán las fechas en los formularios y sus impresiones. Las opciones disponibles son:

- **DD/MM/AAAA:** Día, mes y año (ej. 31/12/2024).
- **MM/DD/AAAA:** Mes, día y año (ej. 12/31/2024).

### Formato de Valores Booleanos en Formularios

Define cómo se mostrarán los valores de tipo booleano (verdadero/falso) en los formularios. Las opciones disponibles son:

- **SI / NO:** Muestra "SI" para verdadero y "NO" para falso.
- **SÍ / NO:** Muestra "SÍ" (con tilde) para verdadero y "NO" para falso.
- **VERDADERO / FALSO:** Muestra "VERDADERO" y "FALSO".
- **X / (vacío):** Muestra "X" para verdadero y deja vacío para falso.

### Mostrar Campos Vacíos en Formularios

Por defecto, Zauru muestra todos los campos del formulario aunque no tengan valor. Si desmarca esta opción, los campos que estén vacíos se ocultarán en la vista del formulario.

### Formato de Departamentos de Guatemala

Define cómo se mostrarán los nombres de los departamentos de Guatemala en los formularios. Las opciones disponibles incluyen diferentes formatos de nomenclatura.

### Formato de Municipios de Guatemala

Define cómo se mostrarán los nombres de los municipios de Guatemala en los formularios. Las opciones disponibles incluyen diferentes formatos de nomenclatura.

### Mostrar Todos los Ítems al Editar Variaciones

Cuando se activa esta opción, al editar las variaciones de un ítem se mostrarán todos los ítems del sistema (no solo los similares), permitiendo vincular cualquier ítem como variación.

## Guardar Configuraciones

Después de realizar los cambios deseados, presione "Actualizar Variable" para guardar la configuración. Le aparecerá un mensaje de éxito confirmando que las variables se actualizaron correctamente.

![imagen2](/img/primeros-pasos/configuraciones-entidad-2.png)

Ha dejado las configuraciones de su entidad a la medida de su operación. Puede volver a esta pantalla en cualquier momento para ajustarlas cuando sus necesidades cambien.
