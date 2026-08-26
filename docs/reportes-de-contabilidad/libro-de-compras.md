---
title: "Libro de Compras"
sidebar_label: "Libro de Compras"
sidebar_position: 12
---

Cada mes, al preparar la declaración del IVA, su contador necesita el detalle de todo lo que la empresa compró y gastó. El libro de compras le entrega esa lista completa, con el IVA crédito fiscal y los impuestos extra de cada documento, lista para revisar y compartir.

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

Una vez descargado el Excel, podrá revisarlo con calma y entregárselo a su contador para la declaración del IVA.
