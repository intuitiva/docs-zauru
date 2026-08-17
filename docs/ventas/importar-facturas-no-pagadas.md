---
title: "Importar Facturas no Pagadas"
sidebar_label: "Importar Facturas no Pagadas"
sidebar_position: 22
---

¿Acaba de mudarse a Zauru desde otro sistema y necesita traer consigo todas las facturas pendientes de cobro? ¿O quiere registrar muchas facturas de una sola vez sin digitarlas una por una? Este tutorial le muestra cómo importar facturas no pagadas desde un archivo externo, para que su historial de cobros no empiece en cero.

## Importar Facturas no Pagadas

Los pasos para importar facturas no pagadas son los siguientes:

1. Ir a **"Ventas"**.
2. Seleccionar **"Facturas no Pagadas"**.
3. Seleccionar **"Importar"**.

![imagen1](/img/ventas/importar-facturas-no-pagadas-1.png)

Le aparecerá el formulario de importación donde deberá:

a. Seleccionar el archivo a importar (formato CSV, XLS o XLSX).

b. Presionar **"Importar Facturas"**.

![imagen2](/img/ventas/importar-facturas-no-pagadas-2.png)

El sistema procesará el archivo y creará las facturas no pagadas según los datos proporcionados. Al finalizar, será redirigido al listado de facturas no pagadas donde podrá verificar las facturas importadas.

### Recomendaciones para la Importación

- Verifique que los datos del archivo estén correctamente formateados antes de importar.
- Asegúrese de que los clientes, ítems, vendedores y puntos de venta referenciados en el archivo ya existan en Zauru.
- Se recomienda hacer una importación de prueba con pocos registros antes de importar el archivo completo.

Con la importación hecha, sus facturas pendientes ya viven en Zauru y podrá cobrarlas e imprimirlas como si las hubiera creado aquí. Haga primero una prueba con pocos registros y, cuando confirme que todo salió bien, importe el archivo completo con tranquilidad.

## API (llamadas desde sistemas externos)

### Obtener plantilla para importar facturas no pagadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/unpaid_invoices/unpaid_invoice_imports/new.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Importar facturas no pagadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -F "unpaid_invoice_import[file]=@/ruta/al/archivo.xlsx" \
  https://app.zauru.com/sales/unpaid_invoices/unpaid_invoice_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
