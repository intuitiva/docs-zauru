---
title: "Proveedores"
sidebar_label: "Proveedores"
sidebar_position: 15
---

Antes de registrar su primera orden de compra necesita tener al proveedor en el sistema, con su NIT, su dirección y sus datos de contacto. Cada vez que le compre a alguien nuevo, o cuando necesite actualizar los datos de un proveedor existente o revisar el estado de sus facturas, este tutorial le muestra cómo hacerlo.

## Proveedores

Cada vez que empieza a comprarle a alguien nuevo, ese contacto se convierte en un proveedor en Zauru. Aquí aprenderá a crear y editar proveedores de bienes o servicios, y a mantener sus datos al día para ubicarlos fácilmente en cada compra.

Para guardar sus cambios haga click sobre “Crear beneficiario” o "Editar Beneficiario"

## Características del Proveedor:

Un proveedor puede tener muchas características como por ejemplo si es un proveedor de bienes o servicios, su nit, teléfono, dirección, etc. Para especificar estas características deberá colocárselas al momento de crear o editar el proveedor, las características son las siguientes:

    Proveedor de Bienes o Servicios,
    Nombre (Comercial), Ejemplo: (Industria de Hamburguesas, S.A.)
    CUI (Código Único de Identificación) Se utilizará en algunos casos especiales, como en las Facturas de compras a proveedores si es el caso que el proveedor no posee NIT.
    Referencia (Nombre común o sobrenombre), Ejemplo: (McDonald´s).
    Notas referente al proveedor.
    NIT (Numero de identificación de impuestos).
    Excento, Pequeño o Gran contribuyente (Son registros opcionales)
    Coloque la dirección.
    Segunda línea para la dirección del beneficiario.
    Latitud.
    Longitud.
    Segmento de Comunicación (Campos opcionales para guardar información información de la empresa).
    Segmento de Contacto (Campos opcionales para guardar información información de contacto con el proveedor).

## Listar Proveedores:

Para consultar la lista de proveedores seleccione el menú Compras >> selecciones Proveedores y se desplegaran los proveedores previamente creados en Zauru. Las opciones son las siguientes:

a. Ver
b. Editar

Al entrar a ver el detalle de un proveedor nos mostrará información general del proveedor y nos mostrará el histórico de compras y el estatus de cada factura de compra (Facturas pagadas y facturas con saldos pendientes de pago).

Como norma general no recomendamos eliminar ningún proveedor debido a su historial; Se recomienda solo desactivarlos.

## Crear nuevo Proveedor:

Los pasos para crear un nuevo proveedor son los siguientes:

1. Seleccionar "compras"
2. Seleccionar "proveedores"
3. Seleccionar "nuevo proveedor"

![Proveedores](/img/compras/proveedores-1.png)

Le deberán aparecer las siguientes opciones para crear un nuevo proveedor:

![Nuevo proveedor](/img/compras/proveedores-2.png)

1. Proveedor de Bienes o Servicios (Seleccionar una de las dos opciones sobre el tipo de proveedor).
2. Nombre (Comercial), Ejemplo: (Industria de Hamburguesas, S.A.)
3. CUI (Código Único de Identificación), se utilizará en algunos casos especiales, como en las facturas de compras a proveedores si es el caso que el proveedor no posee NIT.
4. Referencia (Nombre común o sobrenombre), Ejemplo: (McDonald´s).
5. Notas referente al proveedor.
6. NIT (Numero de identificación de impuestos).
7. Puede seleccionar una de esas opciones: Excento, Pequeño o Gran contribuyente (Son registros opcionales).
8. Llenar la dirección del proveedor.
9. Segunda línea para la dirección del proveedor.
10. Latitud y Longitud, utilizando herramientas para encontrar esta información basándose en la ubicación o dirección de su proveedor, puede llenar la información para ubicarlos posteriormente de una forma más sencilla.
11. Segmento de Comunicación (Campos opcionales para guardar información información de la empresa).
12. Segmento de Contacto (Campos opcionales para guardar información información de contacto con el proveedor).
13. Seleccionar "Crear beneficiario" para completar el proceso de crear el proveedor.

Con el proveedor creado, ya puede seleccionarlo al momento de hacer sus órdenes de compra, y Zauru irá acumulando su historial de facturas pagadas y saldos pendientes para que lo consulte cuando quiera. Si un proveedor deja de trabajar con usted, no lo elimine: es preferible desactivarlo, así conserva todo su historial contable intacto.

## API (llamadas desde sistemas externos)

### Obtener el listado de proveedores
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/vendors.json
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

### Ver detalles de un proveedor
El 1 al final de la URL es el ID del proveedor
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/vendors/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Obtener datos para un proveedor nuevo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/vendors/new.json
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
  "country_id": 2
}
```

### Obtener datos para editar un proveedor
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/purchases/vendors/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Crear nuevo proveedor
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "name": "Proveedor Prueba, S.A.",
      "reference": "Proveedor prueba",
      "tin": "1234567-8",
      "service_provider": "0",
      "address_line_1": "1 calle 1-11 zona 1",
      "phone": "22222222",
      "email": "proveedor@prueba.com",
      "contact": "Contacto de prueba"
    }
  }' \
  https://app.zauru.com/purchases/vendors.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

### Actualizar un proveedor
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
      "phone": "33333333"
    }
  }' \
  https://app.zauru.com/purchases/vendors/1.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
