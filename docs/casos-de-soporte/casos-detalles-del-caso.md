---
title: "Detalles del Caso"
sidebar_label: "Detalles del Caso"
sidebar_position: 3
---

Este tutorial esta enfocado en la pagina de detalles de un caso, donde puede consultar toda la informacion relacionada.

Para ver los detalles de un caso:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"** (o **"Casos Cerrados"**).
3. Hacer click sobre **"Verificar"** (icono de ojo) en el caso deseado.
4. O bien, hacer click sobre el **ID** del caso.

![imagen1](/img/casos-de-soporte/casos-detalles-del-caso-1.png)

## Informacion Mostrada en los Detalles

En la pagina de detalles del caso encontrara las siguientes secciones:

### Datos Generales del Caso

- **ID** y **numero de caso**
- **Referencia**
- **Fecha** de creacion
- **Fecha de cierre** (si ya fue cerrado)
- **Cliente** asociado
- **Responsable** del caso
- **Estado**: Abierto o Cerrado
- **Garantia / Cortesia**: Indica si el caso es por garantia o cortesia
- **Sintoma** reportado
- **Diagnostico** realizado
- **Solucion** aplicada
- **Reembolso / Reemplazo**: Indica si se dio reembolso o reemplazo de mercaderia

### Suministros del Caso

Listado de los productos o servicios utilizados en el caso, mostrando:
- **Producto o servicio** (con codigo y EAN13)
- **Cantidad**
- **Precio unitario**
- **Numero de serie** o **lote** asignado (si aplica)

### Horas de Agentes de Soporte

Detalle de las horas trabajadas por cada agente de soporte, desglosadas en:
- Horas ordinarias
- Horas extraordinarias diurnas
- Horas extraordinarias nocturnas

### Facturas Asociadas

En la parte inferior de la pagina encontrara las **facturas** que se generaron para este caso. Si el caso fue facturado, aqui podra ver:
- Numero de factura
- Fecha
- Total
- Estado (emitida, pagada, anulada)

### Ordenes de Compra Asociadas

Si se generaron ordenes de compra relacionadas al caso (por ejemplo, para adquirir repuestos), estas se mostraran en la seccion de ordenes de compra.

### Bitacora del Caso

Registro cronologico de las actividades realizadas en el caso. Cada entrada puede incluir:
- Fecha
- Texto descriptivo
- Imagenes
- PDFs adjuntos

Para agregar una nueva entrada, vea el tutorial de **"Bitacora del Caso"**.

### Formularios y Envios

Si la entidad utiliza formularios personalizados para casos de soporte, en esta seccion se mostraran los formularios disponibles y los envios realizados.

### Plantillas de Impresion

En la parte superior de la pagina, si tiene plantillas de impresion configuradas, podra seleccionar una para imprimir o descargar el caso en PDF.

## API (llamadas desde sistemas externos)

### obtener detalles de un caso

Este API retorna toda la informacion del caso incluyendo cliente, facturas, ordenes de compra, etiquetas, horas de agentes y suministros.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/support/cases/1.json
```

La respuesta incluye:

```json
{
  "id": 1,
  "zid": 1,
  "reference": "referencia del caso",
  "date": "2024-01-15",
  "closed": false,
  "symptom": "sintoma reportado",
  "diagnosis": "diagnostico",
  "solution": "solucion aplicada",
  "client": {
    "id": 1,
    "name": "Nombre del Cliente"
  },
  "invoices": [
    {
      "id": 10,
      "total": "150.0"
    }
  ],
  "purchase_orders": [
    {
      "id": 5,
      "total": "80.0"
    }
  ],
  "tags": [
    {
      "id": 1,
      "name": "Urgente"
    }
  ],
  "case_support_agents_hours": [
    {
      "employee": {
        "zid": 5,
        "name": "Juan Perez",
        "email": "juan@zauru.com"
      },
      "ordinary_hours": 2.0,
      "daytime_extraordinary_hours": 0.0,
      "nighttime_extraordinary_hours": 0.0
    }
  ],
  "case_supplies": [
    {
      "item": {
        "name": "Fuente de Poder",
        "code": "FP-001",
        "ean13": "1234567890123",
        "zid": 45
      },
      "quantity": 1,
      "unit_price": "75.0",
      "serial": {
        "name": "SN-12345",
        "id_number": "001",
        "description": "Numero de serie del repuesto"
      },
      "lot": {
        "name": "LOTE-A",
        "description": "Lote recibido en enero"
      }
    }
  ],
  "submissions": [
    {
      "zid": 100,
      "reference": "Envio de formulario",
      "form_id": 2,
      "version": 3
    }
  ]
}
```
