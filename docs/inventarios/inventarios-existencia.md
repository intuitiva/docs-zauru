---
title: "Subir existencias iniciales"
sidebar_label: "Subir existencias iniciales"
sidebar_position: 5
---

Cuando empieza a trabajar con Zauru, o cuando abre una bodega nueva, el primer reto es registrar todo lo que ya tiene sin contar producto por producto a mano. Para eso existe la importación de existencias iniciales: con una plantilla predefinida se cargan las cantidades de todos los productos en un solo paso. Antes de importar existencias debe haber creado los ítems de sus productos.

Los pasos para importar existencias son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Existencias".
3. Seleccionar "Importar".

![imagen1](/img/inventarios/inventarios-existencia-1.jpg)

4. Descargar la plantilla con los campos predefinidos para importar existencias. Hay plantillas disponibles para CSV, Excel (.xls) y OpenOffice/LibreOffice (.ods).

![imagen2](/img/inventarios/inventarios-existencia-2.png)

Los campos de la plantilla son los siguientes:

- **quantity**: cantidad existente del producto.
- **item_zid**: ID del ítem generado automáticamente por Zauru.
- **item_code**: código asignado al ítem.
- **lot_id**: ID del lote, si el producto pertenece a uno.

Los campos obligatorios son:

- **quantity**
- uno de los dos: **item_zid** o **item_code**

Luego de terminar la plantilla, guardarla para importarla más adelante.

![imagen3](/img/inventarios/inventarios-existencia-3.png)

Después de preparar la plantilla, los pasos para continuar con la importación son:

5. Seleccionar la bodega a la que desea importar las existencias.
6. Seleccionar el archivo creado; conviene revisar que las cantidades sean correctas.
7. Presionar "Importar existencias".

![imagen4](/img/inventarios/inventarios-existencia-4.png)

Con la importación hecha, sus productos ya tienen existencias en la bodega y están listos para moverse: puede reservarlos en un envío, venderlos o auditarlos. Si más adelante abre otra bodega, el mismo procedimiento le sirve para dejarla con existencias al día.

## API (llamadas desde sistemas externos)

### Importar existencias iniciales
Importa existencias de productos a una bodega desde un archivo predefinido.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "stock_import": {
      "file": "existencias.xlsx",
      "agency_id": "1"
    }
  }' \
  https://app.zauru.com/inventories/stocks/stock_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
