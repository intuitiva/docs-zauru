---
title: "Rentabilidad del Caso"
sidebar_label: "Rentabilidad"
sidebar_position: 8
---

Este tutorial esta enfocado en el analisis de rentabilidad de un caso de soporte. Esta funcionalidad le permite comparar los ingresos generados por el caso contra los costos incurridos, para determinar el margen de ganancia.

## Acceder al Analisis de Rentabilidad

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Hacer click sobre **"Verificar"** (ojo) en el caso deseado.
4. En la pagina de detalles, seleccione la opcion **"Rentabilidad"** (o acceda directamente a la URL `/support/cases/1/profit`).

![imagen1](/img/casos-de-soporte/casos-rentabilidad-1.jpg)

## Componentes del Analisis

El analisis de rentabilidad muestra las siguientes secciones:

### Ingresos

Se calculan a partir de las **facturas emitidas** asociadas al caso. Se muestra:
- Total facturado (incluyendo IVA si aplica)
- Total facturado sin IVA
- Notas de credito asociadas (restadas de los ingresos)

Si una factura esta asociada a multiples casos, el ingreso se prorratea proporcionalmente al total del caso respecto al total de todos los casos de la factura.

### Suministros (Costo de Mercaderia)

Se calcula a partir de los **detalles de las facturas** del caso. Para cada producto vendido en la factura:
- Se muestra el costo promedio del item en la fecha de la factura
- Se descuenta la mercaderia que fue adquirida via ordenes de compra asociadas al caso

### Ordenes de Compra (Compras)

Listado de todas las **ordenes de compra** asociadas al caso que esten recibidas y no anuladas. Para cada orden se muestra:
- Producto o cuenta contable
- Referencia
- Costo prorrateado (descontando descuentos e IVA si aplica)
- Cantidad despachada

## Interpretacion

El analisis le permite responder preguntas como:
- Cuanto se facturo por el caso?
- Cuanto costo resolverlo (en productos y compras)?
- Cual fue el margen de ganancia?

Los costos mostrados son estimados basados en los datos contables disponibles en el sistema.

## API (llamadas desde sistemas externos)

### consultar rentabilidad de un caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/1/profit
```

Esta llamada retorna la pagina HTML con el analisis de rentabilidad.
