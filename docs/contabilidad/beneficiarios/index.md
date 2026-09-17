---
title: "Beneficiarios"
sidebar_label: "Beneficiarios"
sidebar_position: 4
---

Cada vez que le vende a un cliente nuevo o le compra a un proveedor por primera vez, conviene tenerlo registrado como beneficiario antes de hacer la primera transacción. También es el momento de revisarlo cuando un contacto cambia de teléfono, de dirección o de datos fiscales. Los beneficiarios son las personas o empresas con las que usted realiza transacciones comerciales, y en Zauru pueden ser clientes, proveedores o ambos a la vez.

## Listado de beneficiarios

El listado de beneficiarios permite filtrar por:
- **Todos**: muestra todos los beneficiarios.
- **Clientes**: muestra solo los beneficiarios marcados como compradores.
- **Proveedores**: muestra solo los beneficiarios marcados como vendedores.
- **Clientes y Proveedores**: muestra los beneficiarios marcados como ambos.

También se pueden filtrar por etiquetas (tags) utilizando la nube de etiquetas.

![Listado de beneficiarios con filtros Todos, Clientes, Proveedores y Clientes y Proveedores](/img/contabilidad/beneficiarios-1.png)

## Crear un nuevo beneficiario

Los pasos para crear un nuevo beneficiario son:

1. Ir a "Contabilidad".
2. Seleccionar "Beneficiarios".
3. Hacer clic en "Nuevo Beneficiario".

![Formulario de nuevo beneficiario](/img/contabilidad/beneficiarios-2.png)

### Campos del beneficiario

- **Nombre**: nombre de la persona o empresa.
- **Referencia**: texto de referencia interna para identificar al beneficiario.
- **Es proveedor**: marcar si el beneficiario es proveedor de bienes o servicios.
- **Es proveedor de servicios**: marcar si es específicamente proveedor de servicios.
- **Es cliente**: marcar si el beneficiario es cliente.
- **Categoría de beneficiario**: clasificación del beneficiario (ej. nacional, extranjero, empleado, etc.).
- **NIT**: número de identificación tributaria.
- **Moneda**: moneda en la que opera el beneficiario.
- **Etiquetas**: etiquetas para clasificar y filtrar al beneficiario.
- **Término de pago por defecto**: plazo de pago que se asigna automáticamente en transacciones.

### Datos fiscales

- **Exento**: marcar si el beneficiario está exento de IVA.
- **Pequeño contribuyente**: marcar si aplica el régimen de pequeño contribuyente.
- **Gran contribuyente**: marcar si es gran contribuyente.
- **Cliente para exportación**: marcar si es un cliente en el extranjero.
- **Registro tributario**: número de registro fiscal extendido.

### Datos de contacto y ubicacion

- **Dirección** (línea 1 y 2): dirección física del beneficiario.
- **País**: país de residencia fiscal.
- **Ciudad**: ciudad de ubicación.
- **Actividad económica**: giro o actividad del beneficiario.
- **Teléfono**: número de contacto.
- **Correo electrónico**: email de contacto.
- **Página web**: sitio web del beneficiario.
- **Contacto**: nombre de la persona de contacto.
- **Teléfono del contacto**: teléfono directo del contacto.
- **Email del contacto**: correo del contacto.
- **DPI**: documento personal de identificación (para personas individuales).
- **Es extranjero**: marcar si el beneficiario es del extranjero.

### Documentos y notas

- **Imagen**: adjuntar una imagen o logotipo del beneficiario.
- **PDF**: adjuntar un documento PDF relacionado.
- **Notas**: notas internas sobre el beneficiario.

### Formularios personalizados

Los beneficiarios pueden tener formularios personalizados asociados, que permiten capturar información adicional específica para su empresa.

## Ver detalle del beneficiario

Al ver el detalle de un beneficiario se muestra:
- Toda la informacion registrada del beneficiario.
- El listado de transacciones contables asociadas a este beneficiario.
- Los formularios personalizados enviados para este beneficiario.

![Vista de detalle del beneficiario con transacciones asociadas](/img/contabilidad/beneficiarios-3.png)

## Editar un beneficiario

1. Ir a "Contabilidad".
2. Seleccionar "Beneficiarios".
3. Seleccionar el beneficiario que desea modificar.
4. Hacer clic en "Editar".
5. Actualizar la información necesaria.
6. Guardar los cambios.

## Numeración automática

Los beneficiarios pueden tener numeración automática configurada en el sistema para asignarles un ID único secuencial.

## Filtros y búsqueda

En el listado de beneficiarios puede buscar por:
- Nombre
- Referencia
- NIT
- Dirección
- Teléfono
- Email
- Categoría de beneficiario

La búsqueda utiliza coincidencias parciales con soporte para búsqueda por similitud (trigram).

Con su listado de beneficiarios completo y bien clasificado, cada transacción que registre quedará asociada a la persona o empresa correcta, y podrá filtrar sus movimientos por cliente o proveedor cuando lo necesite. El siguiente paso natural es crear las cuentas contables donde se registrarán esas transacciones.

## API (llamadas desde sistemas externos)

### Consultar listado de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/payees.json
```

Esto devolverá un JSON similar a este:
```json
[
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
]
```

### Listado de beneficiarios (datatables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40,
    "scope": "all"
  }' \
  https://app.zauru.com/accounting/payees/datatables.json
```

### Obtener detalle de un beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/payees/1.json
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

### Obtener el formulario de nuevo beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/payees/new.json
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

### Obtener el formulario de edicion de un beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/payees/1/edit.json
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

### Crear un beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "vendor": true,
      "buyer": false,
      "name": "Proveedor Prueba, S.A.",
      "tin": "1234567-8",
      "payee_category_id": 1,
      "currency_id": 1,
      "address_line_1": "Ciudad",
      "country_id": 1,
      "phone": "2222-2222",
      "email": "proveedor@ejemplo.com"
    }
  }' \
  https://app.zauru.com/accounting/payees.json
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

### Actualizar un beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee": {
      "name": "Proveedor Prueba Actualizado, S.A.",
      "email": "nuevo@ejemplo.com"
    }
  }' \
  https://app.zauru.com/accounting/payees/1.json
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
