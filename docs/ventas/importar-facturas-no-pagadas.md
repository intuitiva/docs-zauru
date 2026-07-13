---
title: "Importar Facturas no Pagadas"
sidebar_label: "Importar Facturas no Pagadas"
sidebar_position: 21
---

Este tutorial está enfocado en como importar facturas no pagadas desde un archivo externo hacia Zauru. Esta funcionalidad es útil cuando se necesita migrar facturas desde otro sistema o registrar facturas en lote.

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

## API (llamadas desde sistemas externos)

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
