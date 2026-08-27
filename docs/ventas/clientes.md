---
title: "Clientes"
sidebar_label: "Clientes"
sidebar_position: 2
---

Piense en cuántas veces al día necesita el nombre, el NIT o la dirección de alguien para poder facturarle. Este tutorial le muestra cómo crear, editar y desactivar clientes para tener toda esa información a la mano en cada venta. Los clientes se usan para los siguientes tipos de documentos:
1. Ordenes de ventas (ventas o POS)
2. Facturas (ventas o POS)
3. Pagos (ventas o POS)
4. Cotratos (preliminares, activos o cerrados)
5. Casos (abiertos o cerrados)

## Características del Cliente (campos)

Un cliente puede tener muchas características como por ejemplo su NIT, la moneda en que se le factura, su teléfono, dirección, etc. Para especificar estas características deberá colocárselas al momento de crear o editar al cliente. El formulario agrupa los campos en las siguientes secciones:

**Datos generales**

- **¿Activo?**: indica si el cliente está activo para usarse en ventas.
- **Número de cliente**: número generado automáticamente por la numeración automática de documentos; no se puede editar.
- **Nombre**: nombre comercial del cliente, por ejemplo "Industria de Hamburguesas, S.A.".
- **Número de identificación personal (PIN)**: documento de identificación personal del cliente. Si la entidad tiene configurado un servicio externo de almacenamiento de documentos, se muestra un botón para buscar el PIN en ese servicio.
- **Referencia**: nombre común o sobrenombre, por ejemplo "McDonald's".
- **Categoría**: categoría previamente creada para el cliente, por ejemplo "Mayorista" o "Minorista". Se puede vincular con un listado de precios para manejar diferentes precios entre clientes o proveedores. Aparece solo si está habilitada la variable "enable_client_category_altering" en la entidad.
- **Término de pago predeterminado**: término de pago que se asigna al cliente por defecto. Aparece si la entidad tiene términos de pago activos.
- **Vendedor exclusivo**: empleado vendedor asignado al cliente.
- **Etiquetas**: etiquetas para clasificar y filtrar clientes. Aparece si la entidad tiene etiquetas creadas.

**Fiscal**

- **NIT**: número de identificación de impuestos. Si la entidad tiene configurado un servicio externo de almacenamiento de documentos, se muestra un botón para buscar el NIT en ese servicio.
- **Registro de contribuyente**: número de identificación del contribuyente. Visible solo en entidades de El Salvador y Costa Rica.
- **Actividad económica**: actividad del contribuyente. Visible solo en entidades de El Salvador.
- **Moneda**: moneda en que se factura al cliente.

**Ubicación**

- **Dirección**: dirección del cliente.
- **Dirección línea 2**: segunda línea para la dirección del cliente.
- **¿Extranjero?**: indica si el cliente es extranjero; al marcarla se muestra el campo "País".
- **País**: país del cliente; se usa cuando el cliente es extranjero.
- **Distrito**: distrito de la dirección del cliente. Visible si la entidad usa distritos.
- **Ciudad**: ciudad de la dirección del cliente.
- **Latitud**: latitud de la ubicación del cliente.
- **Longitud**: longitud de la ubicación del cliente.
- **Cliente para exportación**: marca al cliente para operaciones de exportación.
- **Dirección de entrega**: dirección donde se entregan los productos.

**Comunicación**

- **Teléfono**: número de teléfono del cliente.
- **Correo electrónico**: correo electrónico del cliente.
- **Contacto**: nombre de la persona de contacto.

**Notas**: notas referentes al cliente.

Para guardar sus cambios haga click sobre “Crear beneficiario” o "Editar Beneficiario"

## Listar Clientes
Para consultar la lista de clientes hay que entrar a Ventas >> Clientes se desplegara los clientes previamente creados. Las opciones son las siguientes:

a. Ver
b. Editar

Los clientes no se deben borrar porque tienen un historial; se recomienda solo desactivarlos.

## Crear Nuevo Cliente
Los pasos para crear un nuevo clientes son sencillos.

1. Ventas
2. Clientes
3. Nuevo Cliente

![imagen 1](/img/ventas/clientes-1.png)

Aparecerán los distintos campos que se pueden llenar para editar al cliente.

## Tarjetas de Crédito del Cliente

Zauru permite asociar tarjetas de crédito a los clientes para procesar pagos a través de pasarelas de pago. Para más detalles, consulte el tutorial completo de **"Tarjetas de Crédito de Clientes"**.

Para agregar una tarjeta de crédito:

1. Ir a **"Ventas"** > **"Clientes"**.
2. Seleccionar el cliente y hacer click sobre **"Verificar"** (El ojo).
3. En la página de detalles del cliente, busque la sección de **"Tarjetas de Crédito"**.
4. Presione **"Nueva Tarjeta de Crédito"**.

Los datos de la tarjeta (PAN, CVV) son enviados al gateway para tokenización y nunca se almacenan en Zauru. Solo se guardan los últimos 4 dígitos y la marca de la tarjeta.

## Exportar Clientes

Zauru permite exportar la lista de clientes a formato CSV o XLS desde la vista de listado de clientes. La exportación incluye todos los campos relevantes del cliente y respeta los filtros de búsqueda y etiquetas aplicados en el momento de la exportación.

## Filtrar Clientes por Etiquetas

El listado de clientes incluye una nube de etiquetas (tag cloud) en la barra lateral que permite filtrar a los clientes por sus etiquetas asignadas. Al hacer click en una etiqueta, el listado se filtra para mostrar solo los clientes que tienen esa etiqueta. La opción "Sin categorizar" muestra los clientes que no tienen ninguna etiqueta asignada.

## Ver Facturas de un Cliente

En la página de detalles de un cliente puede consultar el historial completo de facturas asociadas.

1. Ir a **"Ventas"** > **"Clientes"**.
2. Hacer click sobre **"Verificar"** (El ojo) en el cliente deseado.

En la página de detalles se muestra:

- **Totales**: Monto total facturado, monto total ordenado y monto total pagado.
- **Facturas**: Un listado paginado con todas las facturas del cliente, incluyendo número de factura, fecha, total, saldo pendiente y estado. El listado soporta búsqueda y ordenamiento por columnas.
- **Formularios y envíos**: Información sobre formularios y envíos asociados al cliente.

Con el cliente creado y sus datos completos, facturar y cobrar será mucho más rápido: cada vez que lo seleccione en una orden o en una factura, Zauru ya tendrá su NIT, su moneda y su dirección. El siguiente paso natural es asignarle sus precios y emitir su primera venta.

## API (llamadas desde sistemas externos)

### Listado de clientes (pocos campos)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/sales/clients.json
```

Esto devolverá un JSON similar a este:
```json
[
  [
    109202,
    "3333333-3",
    "",
    "Transemsa, S.A.",
    "5 Avenida 19-96, zona 14",
    "contabilidad@ejemplo.com",
    "5555-0006"
  ],
  [
    258696,
    "4444444-4",
    "",
    "Servicios Empresariales Mercantiles, S.A. ",
    "Ciudad",
    "info@ejemplo.com",
    "5555-0007"
  ]
]
```

esto me retornará un JSON como el siguiente:

```json
[
    [
        1,
        "44314-9",
        "Nombre del Cliente",
        "Dirección del cliente",
        "Correo del Cliente"
    ],
    [
        2,
        "",
        "Nombre del Cliente sin NIT ni dirección ni correo",
        "",
        ""
    ],
    ...
  ]
```

En donde el primer campo es el ID único de Zauru, el 2do es el NIT (opcional), el tercero es el nombre, el cuarto la dirección y el quinto el correo.

### Crear cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "name": "Cliente Prueba",
      "tin": "12345678-9",
      "reference": "alguna referencia",
      "address_line_1": "1 calle 1-11",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/sales/clients.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
  "id_number": null,
  "active": true,
  "name": "Cliente Prueba",
  "vendor": false,
  "buyer": true,
  "tin": "12345678-9",
  "reference": "alguna referencia",
  "address_line_1": "1 calle 1-11",
  "address_line_2": null,
  "delivery_address": null,
  "currency_id": 3,
  "credit_limit": "0.0",
  "payee_category_id": null,
  "web": null,
  "phone": null,
  "email": null,
  "contact": null,
  "contact_phone": null,
  "contact_email": null,
  "contact2": null,
  "contact2_phone": null,
  "contact2_email": null,
  "notes": null,
  "entity_id": 4,
  "updater_id": 5,
  "created_at": "2026-08-06T04:16:26.386Z",
  "updated_at": "2026-08-06T04:16:26.386Z",
  "employee_id": null,
  "service_provider": true,
  "invoices_in_credit_limit": null,
  "payment_delay_in_credit_limit": false,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "image": {
    "url": null,
    "standard": {
      "url": null
    },
    "thumbnail": {
      "url": null
    },
    "pos": {
      "url": null
    }
  },
  "excempt": false,
  "small_taxpayer": false,
  "foreign": false,
  "latitude": null,
  "longitude": null,
  "great_contributor": null,
  "tax_withholding_agent": false,
  "subject_to_withholding_taxes": false,
  "personal_identification_number": null,
  "client_for_export": false,
  "payee_activity_id": null,
  "city_id": null,
  "taxpayer_registry": null,
  "district_id": null,
  "default_payment_term_id": null,
  "country_id": null
}
```

esto me retornará un JSON como el siguiente:

```json
{
    "active": true,
    "address_line_1": "1 calle 1-11",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 1,
    "excempt": false,
    "foreign": false,
    "id": 1,
    "id_number": null,
    "image": {
        "url": null,
        "standard": {
            "url": null
        },
        "thumbnail": {
            "url": null
        },
        "pos": {
            "url": null
        }
    },
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "alguna referencia",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:26:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 1
}
```

### Editar cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee": {
      "id": "1",
      "name": "Cliente Prueba 2",
      "tin": "12345678-9",
      "reference": "referencia actualizada",
      "address_line_1": "1 calle 2-22",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/sales/clients/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

esto me retornará un JSON como el siguiente:

```json
{
    "active": true,
    "address_line_1": "1 calle 2-22",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 1,
    "excempt": false,
    "foreign": false,
    "id": 1,
    "id_number": null,
    "image": {
        "url": null,
        "standard": {
            "url": null
        },
        "thumbnail": {
            "url": null
        },
        "pos": {
            "url": null
        }
    },
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba 2",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "referencia actualizada",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:31:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 1
}
```

### Obtener detalles del cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/sales/clients/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

esto retornará un JSON como el siguiente:
```json
{
    "active": true,
    "address_line_1": "1 calle 2-22",
    "address_line_2": null,
    "buyer": true,
    "contact": null,
    "contact2": null,
    "contact2_email": null,
    "contact2_phone": null,
    "contact_email": null,
    "contact_phone": null,
    "created_at": "2020-12-19T19:26:08Z",
    "credit_limit": "0.0",
    "currency_id": 1,
    "delivery_address": null,
    "email": null,
    "employee_id": null,
    "entity_id": 2,
    "excempt": false,
    "foreign": false,
    "id": 3,
    "id_number": null,
    "image": {
        "url": null,
        "standard": {
            "url": null
        },
        "thumbnail": {
            "url": null
        },
        "pos": {
            "url": null
        }
    },
    "invoices_in_credit_limit": null,
    "latitude": null,
    "longitude": null,
    "name": "Cliente Prueba 2",
    "notes": null,
    "payee_category_id": null,
    "payment_delay_in_credit_limit": false,
    "pdf": {
        "url": null
    },
    "phone": null,
    "reference": "referencia actualizada",
    "service_provider": true,
    "small_taxpayer": false,
    "tin": "12345678-9",
    "updated_at": "2020-12-19T19:31:08Z",
    "updater_id": 1,
    "vendor": false,
    "web": null,
    "zid": 4
}
```

### Obtener plantilla para crear un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/clients/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "id_number": "",
  "active": true,
  "name": null,
  "vendor": false,
  "buyer": true,
  "tin": null,
  "reference": null,
  "address_line_1": null,
  "address_line_2": null,
  "delivery_address": null,
  "currency_id": null,
  "credit_limit": "0.0",
  "payee_category_id": null,
  "web": null,
  "phone": null,
  "email": null,
  "contact": null,
  "contact_phone": null,
  "contact_email": null,
  "contact2": null,
  "contact2_phone": null,
  "contact2_email": null,
  "notes": null,
  "entity_id": 1,
  "updater_id": null,
  "created_at": null,
  "updated_at": null,
  "employee_id": null,
  "service_provider": true,
  "invoices_in_credit_limit": null,
  "payment_delay_in_credit_limit": false,
  "pdf": {
    "url": null,
    "thumbnail": {
      "url": null
    }
  },
  "image": {
    "url": null,
    "standard": {
      "url": null
    },
    "thumbnail": {
      "url": null
    },
    "pos": {
      "url": null
    }
  },
  "excempt": false,
  "small_taxpayer": false,
  "foreign": null,
  "latitude": null,
  "longitude": null,
  "great_contributor": null,
  "tax_withholding_agent": false,
  "subject_to_withholding_taxes": false,
  "personal_identification_number": null,
  "client_for_export": false,
  "payee_activity_id": null,
  "city_id": null,
  "taxpayer_registry": null,
  "district_id": null,
  "default_payment_term_id": null,
  "country_id": 2
}
```

### Obtener plantilla para editar un cliente
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/clients/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Exportar clientes a CSV
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/clients/export.csv
```

### Exportar clientes a XLS
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/clients/export.xls
```
