---
title: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_label: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_position: 6
---

Los beneficiarios son las personas o empresas con las que su negocio vende y compra: sus clientes y proveedores. Este tutorial cubre cómo crearlos, importarlos, filtrarlos y consultarlos. Para agruparlos por condiciones comerciales, vea [Categorías de Beneficiarios](/primeros-pasos/categorias-de-beneficiarios).

## Crear un beneficiario

No puede emitir una factura ni registrar una compra sin tener registrado antes al beneficiario.

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Click en "Nuevo Beneficiario".

![Listado de beneficiarios con el botón Nuevo Beneficiario](/img/primeros-pasos/beneficiarios-1.png)

## Tipos de beneficiario

Un beneficiario puede ser proveedor, cliente o ambos:

- **Proveedor**: beneficiario al que le compra. Puede ser proveedor de bienes o de servicios; los proveedores de servicios se usan en el libro de compras.
- **Cliente**: beneficiario al que le vende.
- **Cliente y proveedor**: marque ambas casillas.

Las casillas "Proveedor" y "Cliente" se marcan al crear el beneficiario.

![Casillas Proveedor y Cliente del formulario](/img/primeros-pasos/beneficiarios-2.png)

## Campos del formulario

Estos son los campos del nuevo beneficiario, en el orden del formulario:

1. **Nombre**: nombre comercial del cliente o proveedor (ej. Industrias de Hamburguesas, S.A.).
2. **Referencia**: nombre común o sobrenombre (ej. McDonald's).
3. **Categoría de Beneficiario**: categoría creada previamente (ej. Mayorista, Minorista). Puede vincularse a un listado de precios para manejar precios distintos.
4. **NIT**: número de identificación tributaria.
5. **Moneda**: moneda en que se factura o compra.
6. **Dirección**: dirección del beneficiario.
7. **Dirección (Línea 2)**: segunda línea de la dirección.
8. **Dirección de Entrega**: dirección de entrega de los productos.
9. **Página Web**: sitio web del beneficiario.
10. **Teléfono**: número de teléfono del beneficiario.
11. **Correo Electrónico**: correo del beneficiario.
12. **Límite de Crédito (Monto)**: máximo saldo no pagado de las facturas al crédito; sin moneda, solo números.
13. **Facturas**: cantidad de facturas al crédito no pagadas permitidas.
14. **Término de pago vencido**: no permite nuevas facturas al crédito si hay saldo vencido no pagado.
15. **Contacto**: nombre del contacto.
16. **Teléfono del Contacto**: teléfono del contacto.
17. **Correo Electrónico del Contacto**: correo del contacto.
18. **Contacto 2**: nombre del segundo contacto.
19. **Teléfono de Contacto 2**: teléfono del segundo contacto.
20. **Correo Electrónico del Contacto 2**: correo del segundo contacto.
21. **Notas**: notas sobre el beneficiario.
22. **Vendedor Exclusivo**: vendedor asignado, se selecciona de la lista de empleados.
23. Click en "Crear beneficiario" para guardar.

![Formulario de nuevo beneficiario con los campos numerados](/img/primeros-pasos/beneficiarios-3.png)

## Campos adicionales

Además de los campos del formulario, un beneficiario puede tener:

- **Actividad económica**: actividad del beneficiario.
- **Tipo de contribuyente**: Pequeño Contribuyente, Gran Contribuyente o Exento.
- **Agente de retención**: si el beneficiario es agente de retención de impuestos.
- **Sujeto a retención de impuestos**: si el beneficiario está sujeto a retenciones.
- **Cliente para exportación**: si el beneficiario es cliente de exportación.
- **País**: país del beneficiario, útil para extranjeros.
- **Extranjero**: si el beneficiario es del extranjero.
- **Ciudad y Distrito**: ubicación del beneficiario.
- **Término de pago por defecto**: plazo que se asigna en las transacciones.
- **Latitud y Longitud**: coordenadas del beneficiario.
- **Número de identificación personal (CUI)**: para personas individuales.

## Importar beneficiarios

Si tiene demasiados clientes o proveedores para ingresarlos uno por uno, use las plantillas predefinidas de Excel:

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Click en "Importar".
4. Descargar la plantilla y llenar los campos; los obligatorios son "Nombre", "Moneda" y "Límite de crédito".
5. Seleccionar el archivo de Excel.
6. Click en "Importar beneficiarios". Si aparece algún error, revise que la plantilla cumpla las reglas de abajo.

![Botón Importar en el listado de beneficiarios](/img/primeros-pasos/beneficiarios-4.png)

Cada campo de la plantilla acepta:

- **Booleano**: TRUE o FALSE; si no se especifica, Zauru asume FALSE.
- **Número entero**: sin punto decimal ni separador de miles.
- **Número con decimales**: sin separador de miles.
- **Texto**: cualquier carácter.
- **Cadena de texto**: cualquier carácter, máximo 256.

![Página de importación con las reglas y el botón Importar beneficiarios](/img/primeros-pasos/beneficiarios-5.png)

## Filtrar beneficiarios

El listado tiene filtros por tipo y una nube de etiquetas:

- **Todos**: todos los beneficiarios.
- **Clientes**: solo clientes.
- **Proveedores**: solo proveedores.
- **Clientes y Proveedores**: clientes y proveedores a la vez.

También puede seleccionar una etiqueta de la nube para mostrar solo los beneficiarios que la tengan asignada.

## Exportar beneficiarios

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Click en "Exportar a CSV" o "Exportar a Excel".

Si hay un filtro de etiquetas activo, la exportación incluye solo esos beneficiarios.

## Sincronizar con CRM

Si su entidad tiene activo el módulo de CRM, en el detalle del beneficiario seleccione "Sincronizar con CRM" para crear o actualizar su contacto en el CRM.

## Buscar por NIT o CUI

Con un servicio externo configurado para su entidad, puede buscar beneficiarios por NIT o CUI al crearlos y así validar sus datos tributarios.

## API (llamadas desde sistemas externos)

### Obtener listado de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "zid": 2,
    "id_number": null,
    "active": true,
    "name": "Proveedor Ejemplo A, S.A.",
    "vendor": true,
    "buyer": false,
    "tin": "1111111-1",
    "reference": "Referencia Ejemplo",
    "address_line_1": "9 Avenida 34-00, zona 11 Guatemala, Guatemala",
    "address_line_2": null,
    "delivery_address": null,
    "currency_id": 3,
    "credit_limit": "0.0",
    "payee_category_id": null,
    "web": null,
    "phone": "",
    "email": "",
    "contact": "",
    "contact_phone": null,
    "contact_email": null,
    "contact2": null,
    "contact2_phone": null,
    "contact2_email": null,
    "notes": "",
    "entity_id": 4,
    "updater_id": 5,
    "created_at": "2016-06-17T20:54:25.123Z",
    "updated_at": "2016-06-17T20:54:25.123Z",
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
    "country_id": 6
  },
  {
    "id": 7,
    "zid": 8,
    "id_number": null,
    "active": true,
    "name": "Proveedor Ejemplo B, S.A.",
    "vendor": true,
    "buyer": false,
    "tin": "2222222-0",
    "reference": "",
    "address_line_1": "21 Avenida 5-67, zona 11 Colonia El Mirador 1, Guatemala, Guatemala",
    "address_line_2": null,
    "delivery_address": null,
    "currency_id": 3,
    "credit_limit": "0.0",
    "payee_category_id": null,
    "web": null,
    "phone": "5555-0005",
    "email": "www.ejemplo.com",
    "contact": "",
    "contact_phone": null,
    "contact_email": null,
    "contact2": null,
    "contact2_phone": null,
    "contact2_email": null,
    "notes": "",
    "entity_id": 4,
    "updater_id": 5,
    "created_at": "2016-11-08T16:53:48.880Z",
    "updated_at": "2016-11-08T16:53:48.880Z",
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
    "country_id": 6
  }
]
```

### Obtener listado de beneficiarios por tipo (datatables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"start": "0", "length": "25", "scope": "clients"}' \
  https://app.zauru.com/settings/payees/datatables.json
```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 569,
  "recordsFiltered": 569,
  "data": [
    {
      "zid": "<a href=\"/settings/payees/109202\">521</a>",
      "id_number": "<a href=\"/settings/payees/109202\"></a>",
      "reference": "<a href=\"/settings/payees/109202\">RzM corp</a>",
      "active": "<span style=\"color: red;\"><i class=\"fa fa-times\" alt=\"times\"></i></span>",
      "name": "<a href=\"/settings/payees/109202\">Transemsa, S.A.</a>",
      "tin": "3333333-3",
      "address": "5 Avenida Ejemplo 19-96, Zona 14",
      "payee_category": "4 a 6",
      "phone": "5555-0006",
      "email": "contabilidad@ejemplo.com",
      "record_actions": "<a title=\"Detalles\" href=\"/settings/payees/109202\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/payees/109202/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Destruirlo\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/settings/payees/109202?destroy=true\"><i class=\"fa fa-trash-o\"></i></a>",
      "DT_RowId": "settings-payee-109202"
    },
    {
      "zid": "<a href=\"/settings/payees/258696\">725</a>",
      "id_number": "<a href=\"/settings/payees/258696\"></a>",
      "reference": "<a href=\"/settings/payees/258696\">Romar</a>",
      "active": "<span style=\"color: red;\"><i class=\"fa fa-times\" alt=\"times\"></i></span>",
      "name": "<a href=\"/settings/payees/258696\">Servicios Empresariales Mercantiles, S.A. </a>",
      "tin": "4444444-4",
      "address": "Ciudad ",
      "payee_category": "",
      "phone": "5555-0007",
      "email": "info@ejemplo.com",
      "record_actions": "<a title=\"Detalles\" href=\"/settings/payees/258696\"><i class=\"fa fa-eye\"></i></a><a title=\"Editar\" href=\"/settings/payees/258696/edit\"><i class=\"fa fa-edit\"></i></a><a title=\"Destruirlo\" data-confirm=\"¿Está seguro de destruirlo?\" rel=\"nofollow\" data-method=\"delete\" href=\"/settings/payees/258696?destroy=true\"><i class=\"fa fa-trash-o\"></i></a>",
      "DT_RowId": "settings-payee-258696"
    }
  ]
}
```

### Crear beneficiario
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
      "currency_id": "1",
      "vendor": false,
      "buyer": true
    }
  }' \
  https://app.zauru.com/settings/payees.json
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
  "created_at": "2026-08-06T04:16:49.555Z",
  "updated_at": "2026-08-06T04:16:49.555Z",
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

### Editar beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee": {
      "name": "Cliente Prueba 2",
      "tin": "12345678-9",
      "reference": "referencia actualizada",
      "address_line_1": "1 calle 2-22",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/settings/payees/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2080191",
  "zid": "87",
  "id_number": null,
  "active": true,
  "name": "Cliente CRM",
  "vendor": false,
  "buyer": true,
  "tin": "12345678-9",
  "reference": null,
  "address_line_1": null,
  "address_line_2": null,
  "delivery_address": null,
  "currency_id": "1",
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
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:12:08.19016",
  "updated_at": "2026-08-06 04:12:08.19016",
  "employee_id": null,
  "service_provider": true,
  "invoices_in_credit_limit": null,
  "payment_delay_in_credit_limit": false,
  "pdf": null,
  "image": null,
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

### Obtener detalles del beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "2080191",
  "zid": "87",
  "id_number": null,
  "active": true,
  "name": "Cliente CRM",
  "vendor": false,
  "buyer": true,
  "tin": "12345678-9",
  "reference": null,
  "address_line_1": null,
  "address_line_2": null,
  "delivery_address": null,
  "currency_id": "1",
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
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:12:08.19016",
  "updated_at": "2026-08-06 04:12:08.19016",
  "employee_id": null,
  "service_provider": true,
  "invoices_in_credit_limit": null,
  "payment_delay_in_credit_limit": false,
  "pdf": null,
  "image": null,
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

### Eliminar beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/payees/1.json
```

En caso de éxito, retorna un código HTTP `204 No Content` (sin cuerpo).

### Exportar beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/export.csv
```

El mismo endpoint acepta `export.xls` y `export.json`.

Esto devolverá un JSON similar a este:
```json
{
  "id": "2080191",
  "zid": "87",
  "id_number": null,
  "active": true,
  "name": "Cliente CRM",
  "vendor": false,
  "buyer": true,
  "tin": "12345678-9",
  "reference": null,
  "address_line_1": null,
  "address_line_2": null,
  "delivery_address": null,
  "currency_id": "1",
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
  "entity_id": "1303",
  "updater_id": "23",
  "created_at": "2026-08-06 04:12:08.19016",
  "updated_at": "2026-08-06 04:12:08.19016",
  "employee_id": null,
  "service_provider": true,
  "invoices_in_credit_limit": null,
  "payment_delay_in_credit_limit": false,
  "pdf": null,
  "image": null,
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

### Obtener nube de etiquetas de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/tag_cloud.json
```

### Búsqueda de beneficiario por NIT
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"tin": "12345678-9"}' \
  https://app.zauru.com/settings/payees/search_payee.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": null,
  "id": null,
  "address": "Ciudad",
  "tin": "12345678-9",
  "err": "No se pudo conectar con certificador",
  "phone": null,
  "pin": null
}
```

### Buscar beneficiario por NIT o CUI (devuelve nombre)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"tin": "12345678-9"}' \
  https://app.zauru.com/settings/payees/search_payee_name.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": "",
  "error": "no encontrado"
}
```

### Obtener beneficiario por NIT o CUI
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/get_payee.json?payee=12345678-9&pin=0
```

Esto devolverá un JSON similar a este:
```json
{
  "name": null,
  "id": null,
  "address": null,
  "tin": null,
  "email": null,
  "phone": null,
  "pin": null,
  "foreign": false,
  "client_for_export": false,
  "country_code": null
}
```

### Autocompletar beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/autocomplete.json?term=cliente
```

Esto devolverá un JSON similar a este:
```json
[
  "Buscar NIT cliente en Infile FEL"
]
```

### Autocompletar beneficiario por CUI
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/autocomplete_pin.json?term=123456789
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Autocompletar beneficiario extranjero
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/autocomplete_foreign_payee.json?term=cliente
```

Esto devolverá un JSON similar a este:
```json
[]
```

### Sincronizar beneficiario con CRM
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/1/sync_payee_to_crm.json
```

### Crear importación de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee_import": {
      "file": "archivo_excel.xlsx"
    }
  }' \
  https://app.zauru.com/settings/payees/payee_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
