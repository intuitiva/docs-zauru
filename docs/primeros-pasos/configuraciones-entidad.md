---
title: "Configuraciones de la Entidad"
sidebar_label: "Configuraciones de la Entidad"
sidebar_position: 12
---

Zauru le permite configurar variables globales de su entidad (empresa) que afectan el comportamiento del sistema en distintos módulos. Estas configuraciones se encuentran en la sección de Variables de Entidad.

## Acceder a las Configuraciones de Entidad

Para acceder a las configuraciones de su entidad:

1. Ir a "Configuraciones".
2. Seleccionar "Configuraciones de Entidad".

![imagen1](/img/primeros-pasos/configuraciones-entidad-1.png)

## Variables de Entidad Disponibles

### Webhook para Creación de Ítems

Zauru puede enviar una notificación a una URL externa (webhook) cada vez que se crea un nuevo ítem en el sistema.

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

![imagen2](/img/primeros-pasos/configuraciones-entidad-1.png)

## API (llamadas desde sistemas externos)

### Obtener configuraciones de la entidad

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/settings_settings/new.json
```

### Actualizar configuraciones de la entidad

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "date_format": "DD/MM/AAAA",
    "boolean_format": "SI / NO",
    "show_empty_fields": "1"
  }' \
  https://app.zauru.com/settings/settings_settings.json
```
