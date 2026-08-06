---
title: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_label: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_position: 6
---

Los beneficiarios son clientes o proveedores de productos o servicios. Pueden ser categorizados de varias maneras, de acuerdo a la necesidad de su empresa. A continuación veremos como se manejan en Zauru.

## Nuevo Beneficiario
Antes de poder comprar o vender tenemos que especificar a quien le estamos comprando o a quien le estamos vendiendo. Para llevar este registro debemos de crear un nuevo beneficiario. Los pasos para crear un beneficiario son los siguientes:


1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click en “Nuevo Beneficiario”.

![imagen 1](/img/primeros-pasos/beneficiarios-1.png)


## Tipos de Beneficiarios

Hay tres tipos de beneficiarios:


1. Los beneficiarios que son proveedores. *Los proveedores pueden ser "Proveedores de Bienes" o "Proveedores de Servicios" (que servirá en el libro de compras)*
2. Los beneficiarios que son clientes.
3. Los beneficiarios que son clientes y proveedores a la vez.


Para especificar el tipo de beneficiario en Zauru simplemente hay que seleccionar una de estas casillas, o ambas si aplica, al momento de crear un nuevo beneficiario.

![imagen 2](/img/primeros-pasos/beneficiarios-2.png)


## Otras Características del Beneficiario

Un beneficiario puede tener muchas características como por ejemplo su nit, la moneda en que se le factura o se le compra, su teléfono, dirección, etc. Para especificar estas características deberá colocárselas al momento de crear el beneficiario, las características son las siguientes:

1. Nombre comercial de su cliente o proveedor, Ejemplo: (Industria de Hamburguesas, S.A.)
2. Nombre común de su cliente o proveedor, Ejemplo: (McDonald´s)
3. Seleccione una categoría previamente creada para su cliente o Proveedor, Ejemplo: (Mayorista, Minorista). Esta categoría se puede vincular con un listado de precios, para manejar diferentes precios entre sus clientes o proveedores.
4. Coloque el NIT de su cliente o proveedor.
5. Coloque la moneda en que factura o compra a este beneficiario.
6. Coloque la dirección del beneficiario.
7. Segunda línea para la dirección del beneficiario.
8. Dirección de entrega de productos al beneficiario.
9. Dirección de la pagina web del beneficiario.
10. Coloque el numero de teléfono del beneficiario.
11. Coloque el correo electrónico del beneficiario.
12. Establezca el limite de crédito de su beneficiario, sin moneda, solo números.
13. Establezca un numero máximo de facturas al crédito no pagadas.
14. pendiente
15. Coloque el nombre del contacto de su cliente o proveedor.
16. Coloque el teléfono del contacto de su cliente o proveedor.
17. Coloque el correo electrónico del contacto de su cliente o proveedor.
18. Si tiene un segundo contacto de su cliente o proveedor coloque el nombre.
19. Si tiene un segundo contacto de su cliente o proveedor coloque el teléfono.
20. Si tiene un segundo contacto de su cliente o proveedor coloque su correo electrónico.
21. Coloque alguna nota referente a su cliente o proveedor.
22. Si tiene algún vendedor exclusivo para este cliente, selecciónelo de la lista de empleados.
23. Para guardar sus cambios haga click sobre “Crear beneficiario”

![imagen 3](/img/primeros-pasos/beneficiarios-3.png)


## Importar un Grupo de Beneficiarios
Es probable que cuando comience a usar Zauru tenga tantos clientes y proveedores que sea casi imposible ingresarlos manualmente. Zauru le permite importar su listado de clientes y proveedores por medio de plantillas predefinidas de Excel, en donde usted puede colocar todas las características de sus clientes o proveedores. Los pasos para importar beneficiarios son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click en “Importar”

![imagen 4](/img/primeros-pasos/beneficiarios-4.png)


A continuación encontrara un listado con los campos permitidos para importar un listado de clientes o proveedores y las reglas permitidas para importar. Los pasos para importar un archivo de Excel son los siguientes:

4.Descargar la plantilla de Excel con los campos predefinidos. Los únicos campos obligatorios que debe llenar son:


1. Nombre (Name).
2. Moneda(Currency_id).
3. limite de crédito (credit_limit).


Las entradas de texto permitidas para cada campo están especificadas en la imagen de abajo y son las siguientes:

- Booleano: TRUE or FALSE, si no se especifica una de las dos variables en la importación el sistema asumirá que es FALSE.
- Numero Entero: Solo se permiten números sin punto decimal o separador de miles (comas).
- Numero con Decimales: Solo numero sin separador de miles (comas).
- Texto: Cualquier carácter es permitido.
- Cadena de texto: Cualquier carácter dentro de la cadena es permitido, pero que no sea mayor a 256 caracteres.



4.Al terminar de colocar los campos que desee importar en la plantilla de Excel deberá seleccionar el archivo a importar.

5.Seleccione el botón de “Importar beneficiarios” y espere a que Zauru suba sus beneficiarios, si aparece algún error en la importación, revise si su plantilla de Excel cumple las normas de importación.

![imagen 5](/img/primeros-pasos/beneficiarios-5.png)



## Categorizar Beneficiarios
Puede que tus clientes o proveedores tengan alguna categoría, por ejemplo, cantidad de días de crédito, cliente mayorista o proveedor mayorista, etc. Y puede que esta categoría este vinculada con un termino de pago. Los pasos para categorizar un beneficiario en Zauru son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Seleccionar la pestaña de “Categoría de Beneficiarios”.
4. Click sobre “Nueva Categoría de Beneficiario”.

![imagen 6](/img/primeros-pasos/beneficiarios-6.png)


A continuación deberá crear la categoría de su cliente o proveedor, los pasos son los siguientes:

1. Colocar el nombre de la categoría, Ejemplo: Mayorista.
2. Especifique si es una categoría para un cliente o un proveedor.
3. Agregue una nota sobre su categoría, Ejemplo: Esta categoría pertenece a los clientes que compran más de Q10,000 al mes.
4. Para guardar los cambios de click en “Crear categoría de beneficiario”.

![imagen 7](/img/primeros-pasos/beneficiarios-7.png)


Le deberá aparecer un mensaje de éxito en la pantalla.

![imagen 8](/img/primeros-pasos/beneficiarios-8.png)


Después de crear la categoría de beneficiario deberá colocársela a el cliente o proveedor que desea categorizar, los pasos para colocar una categoría a un beneficiario existente son los siguientes:

1. Ir a “configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click sobre “Editar” en el beneficiario que desea  categorizar.

![imagen 9](/img/primeros-pasos/beneficiarios-9.png)

4. Seleccionar la categoría a la que pertenece este beneficiario y click en “Actualizar Beneficiario”.

![imagen 10](/img/primeros-pasos/beneficiarios-10.png)

## API (llamadas desde sistemas externos)

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

### Obtener listado de categorías de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/payee_categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "vendor": false,
    "name": "4 a 6",
    "notes": "",
    "updater_id": 2,
    "entity_id": 2,
    "created_at": "2016-04-13T20:43:05.677Z",
    "updated_at": "2016-04-29T23:53:50.077Z",
    "price_list_id": 3,
    "payees_count": 4
  },
  {
    "id": 4,
    "vendor": false,
    "name": "Cliente Ejemplo, SRL",
    "notes": "",
    "updater_id": 5,
    "entity_id": 2,
    "created_at": "2026-05-21T01:44:53.134Z",
    "updated_at": "2026-05-21T01:44:53.134Z",
    "price_list_id": null,
    "payees_count": 3
  }
]
```


---

## Filtrar Beneficiarios por Etiquetas

Zauru le permite filtrar sus beneficiarios utilizando etiquetas (Tags). En el listado de beneficiarios aparecerá una nube de etiquetas donde podrá seleccionar una para filtrar rápidamente los beneficiarios que tengan esa etiqueta asignada.

Puede filtrar por tipo de beneficiario:
- **Todos:** Muestra todos los beneficiarios sin distinción.
- **Clientes:** Muestra solo los beneficiarios marcados como clientes.
- **Proveedores:** Muestra solo los beneficiarios marcados como proveedores.
- **Clientes y Proveedores:** Muestra los beneficiarios que son tanto clientes como proveedores.

## Sincronizar Beneficiario con CRM

Si su entidad tiene activo el módulo de CRM, Zauru le permite sincronizar un beneficiario con el CRM. En la vista de detalle del beneficiario, seleccione la opción "Sincronizar con CRM" para crear o actualizar el contacto correspondiente en el módulo de CRM.

## Búsqueda de Beneficiarios por NIT o CUI

Zauru le permite buscar beneficiarios por su NIT (Número de Identificación Tributaria) o CUI (Código Único de Identificación) desde servicios externos configurados para su entidad. Esta funcionalidad es útil para validar la información tributaria de sus clientes o proveedores al momento de crearlos.

## Campos Adicionales del Beneficiario

Además de los campos básicos, un beneficiario puede tener las siguientes características adicionales:

- **Actividad económica:** Seleccione la actividad económica del beneficiario (payee_activity_id).
- **Tipo de contribuyente:** Puede marcar si el beneficiario es Pequeño Contribuyente, Gran Contribuyente, o Exento.
- **Agente de retención:** Marque esta opción si el beneficiario es agente de retención de impuestos.
- **Sujeto a retención de impuestos:** Marque si este beneficiario está sujeto a retenciones.
- **Cliente para exportación:** Marque si este beneficiario es un cliente para operaciones de exportación.
- **País:** Seleccione el país del beneficiario (útil para beneficiarios extranjeros).
- **Extranjero:** Marque esta opción si el beneficiario es del extranjero.
- **Ciudad y Distrito:** Seleccione la ciudad y distrito donde se ubica el beneficiario.
- **Término de pago por defecto:** Puede asignar un término de pago predeterminado para este beneficiario.
- **Latitud y Longitud:** Coordenadas geográficas para ubicación en mapa.
- **Número de identificación personal (CUI):** Para personas individuales.

## Exportar Beneficiarios

Zauru le permite exportar su listado de beneficiarios en formato CSV, XLS o JSON. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Seleccionar el formato de exportación deseado (CSV, XLS o JSON).

Si tiene un filtro de etiquetas activo, la exportación incluirá solamente los beneficiarios de esa etiqueta.

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

### Exportar beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/export.csv
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

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Sincronizar beneficiario con CRM
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/1/sync_payee_to_crm.json
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

### API de Categorías de Beneficiarios

#### Obtener detalle de una categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5999",
  "vendor": false,
  "name": "VIP",
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-07-01 16:54:50.167055",
  "updated_at": "2026-07-01 16:55:13.539278",
  "price_list_id": "3936",
  "payees_count": "1"
}
```

#### Crear categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee_category": {
      "name": "Mayorista",
      "vendor": false,
      "notes": "Clientes mayoristas"
    }
  }' \
  https://app.zauru.com/settings/payees/payee_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ],
  "entity": [
    "es inválido"
  ]
}
```

#### Actualizar categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee_category": {
      "name": "Mayorista Premium"
    }
  }' \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "5999",
  "vendor": false,
  "name": "VIP",
  "notes": null,
  "updater_id": "1",
  "entity_id": "1303",
  "created_at": "2026-07-01 16:54:50.167055",
  "updated_at": "2026-07-01 16:55:13.539278",
  "price_list_id": "3936",
  "payees_count": "1"
}
```

#### Eliminar categoría de beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/payees/payee_categories/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### API de Importación de Beneficiarios

#### Crear importación de beneficiarios
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
