---
title: "Importaciones de Datos"
sidebar_label: "Importaciones de Datos"
sidebar_position: 10
---

Zauru le permite importar datos de forma masiva desde archivos de Excel (CSV o XLS), con un sistema de mapeo de columnas flexible que le permite indicar qué columna de su archivo corresponde a qué campo de Zauru. Este sistema unificado de importación soporta múltiples tipos de documentos y le permite validar cada fila antes de importarla definitivamente.

## Tipos de Documentos Soportados para Importación

Zauru soporta la importación de los siguientes tipos de documentos:

- **Crear Ítems con Precios:** Importa productos nuevos con sus precios de venta.
- **Actualizar Ítems:** Actualiza campos de productos existentes.
- **Crear Beneficiarios:** Importa nuevos clientes y/o proveedores.
- **Actualizar Beneficiarios:** Actualiza campos de clientes y/o proveedores existentes.
- **Reemplazar Movimientos:** Reemplaza los movimientos de inventario de un envío existente.
- **Reemplazar Detalles de Órdenes de Compra:** Reemplaza los detalles de una orden de compra existente.
- **Crear Empleados:** Importa nuevos empleados.
- **Crear Agencias:** Importa nuevas agencias.
- **Crear Contratos de Trabajo:** Importa contratos de trabajo para empleados existentes.
- **Crear Empleados y Contratos de Trabajo:** Importa empleados nuevos junto con sus contratos de trabajo.
- **Crear Gastos:** Importa gastos (detalles de órdenes de compra con cuentas contables).

## Nueva Importación de Datos

Los pasos para crear una nueva importación de datos son:

1. Ir a "Configuraciones".
2. Seleccionar "Importaciones de Datos".
3. Seleccionar "Nueva Importación de Datos".

![imagen1](/img/primeros-pasos/importaciones-datos-1.jpg)

Le deberán aparecer las opciones para crear una nueva importación:

a. Seleccione el tipo de documento que desea importar de la lista desplegable.

b. Si el tipo de documento lo requiere (por ejemplo, "Reemplazar Movimientos" o "Reemplazar Detalles de Órdenes de Compra"), deberá seleccionar el objeto padre al que se asociarán los datos importados.

c. Adjunte el archivo Excel (CSV o XLS) que contiene los datos a importar.

d. Puede agregar una nota o memo para identificar esta importación.

e. Presione "Crear Data import" para iniciar el proceso.

![imagen2](/img/primeros-pasos/importaciones-datos-2.jpg)

## Mapeo de Columnas

Después de crear la importación, Zauru procesará el archivo y le mostrará una tabla con las primeras filas de datos y un panel para mapear las columnas de su archivo a los campos de Zauru.

Los pasos para mapear las columnas son:

1. Para cada columna de su archivo, seleccione en el panel derecho el campo de Zauru al que corresponde.

2. Todos los campos disponibles para el tipo de documento seleccionado aparecerán en la lista desplegable.

3. Si tiene campos que son referencias a otros objetos (como `brand_id`, `item_category_id`, `payee_id`), identifíquelos con el sufijo `_id` en las opciones.

![imagen3](/img/primeros-pasos/importaciones-datos-3.jpg)

Una vez mapeadas las columnas, presione "Actualizar Data import" para guardar la configuración de mapeo.

## Gestión de Datos

En la vista de edición de datos usted podrá:

1. **Validar filas individualmente:** Cada fila puede ser validada para verificar que los datos cumplen con las reglas del modelo. Las filas validadas aparecerán marcadas.

2. **Importar filas individualmente:** Una vez validada una fila, puede importarla para crear o actualizar el registro en Zauru.

3. **Editar datos de filas:** Puede modificar los valores de cualquier celda antes de importar.

4. **Eliminar filas:** Puede eliminar filas que no desee importar.

5. **Eliminar columnas:** Puede eliminar columnas completas que no necesite mapear.

![imagen4](/img/primeros-pasos/importaciones-datos-4.jpg)

## Proceso de Validación e Importación

El flujo de trabajo recomendado para una importación exitosa es:

1. Cree una nueva importación seleccionando el tipo de documento y adjuntando su archivo.

2. Mapee las columnas de su archivo a los campos de Zauru.

3. Valide las filas una por una para detectar errores. Las filas con errores mostrarán los mensajes correspondientes para que pueda corregirlos.

4. Corrija los datos de las filas que tengan errores.

5. Importe las filas validadas una por una o en lote.

6. Verifique en el módulo correspondiente que los datos se hayan importado correctamente.

## API (llamadas desde sistemas externos)

### Obtener listado de importaciones de datos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/data_imports.json
```

### Obtener detalles de una importación de datos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/data_imports/1.json
```

### Crear importación de datos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "data_import": {
      "file_type": "payees_create",
      "memo": "Importación de clientes mayo 2024"
    }
  }' \
  https://app.zauru.com/settings/data_imports.json
```
