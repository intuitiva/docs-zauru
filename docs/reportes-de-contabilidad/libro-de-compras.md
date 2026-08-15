---
title: "Libro de Compras"
sidebar_label: "Libro de Compras"
sidebar_position: 12
---

El libro de compras y gastos es un documento que informa de todas las compras realizadas, así como de los gastos derivados de la actividad.

Para localizar el libro de compras nos vamos a:

  - Contabilidad
  - Reportes
  - Libro de compras

![Libro de Compras](/img/reportes-de-contabilidad/libro-de-compras-1.png)

Es un reporte fiscal que lista todas las compras y gastos del mes.

**Parametros**:

- **Mes y año**: mes a reportar.

**Informacion mostrada**:

- Numero de documento.
- NIT del proveedor.
- Nombre del proveedor.
- Monto de la compra.
- IVA credito fiscal.
- Impuestos extra (combustible, etc.).
- Total.

El libro de compras utiliza las cuentas configuradas en [Configuraciones](../contabilidad/configuraciones) para identificar gastos de combustible, impuestos al combustible y otros impuestos extra.

**Generacion asincrona**: Para meses con muchas transacciones, el reporte se genera en segundo plano. El sistema mostrara el progreso y, al finalizar, permitira descargar el Excel.
