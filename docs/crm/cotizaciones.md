---
title: "API de Cotizaciones (CRM)"
sidebar_label: "API de Cotizaciones"
sidebar_position: 1
---

Cuando un cliente le pide una cotización desde su página web, o su equipo de ventas trabaja con una herramienta propia que necesita hablar con Zauru, estos endpoints son el puente. El módulo de CRM de Zauru expone una serie de endpoints JSON que le permiten integrar sus aplicaciones externas con las funcionalidades de cotización, catálogo de productos, creación de órdenes de venta y gestión de contactos.

## Obtener ítems disponibles para la venta

Devuelve el catálogo de ítems y paquetes (bundles) disponibles para la venta, agrupados por categoría, junto con sus precios, existencias y descuentos aplicables.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/get_items_for_sale.json?client=1
```

Esto devolverá un JSON similar a este:
```json
{
  "": {
    "958866": [
      "Carga de información - CINF",
      {
        "flexible": true,
        "price": null
      },
      "infinite",
      [],
      "",
      "",
      {
        "payee_id": null
      }
    ],
    "22986": [
      "cheque rechazado - O29",
      {
        "flexible": true,
        "price": "100.0"
      },
      "infinite",
      [],
      "",
      "",
      {
        "payee_id": null
      }
    ]
  },
  "cuotas mensuales": {
    "101018": [
      "10 usuarios - CM62",
      {
        "flexible": false,
        "price": "931.0"
      },
      "infinite",
      [
        {
          "discount_id": 1,
          "discount_name": "2 módulos",
          "discount_amount": null,
          "discount_percent": 0.2872,
          "remove_decimals": true,
          "min_quantity_threshold": 2
        },
        {
          "discount_id": 2,
          "discount_name": "3 módulos",
          "discount_amount": null,
          "discount_percent": 0.398,
          "remove_decimals": true,
          "min_quantity_threshold": 3
        }
      ],
      "",
      "",
      {
        "payee_id": null
      }
    ],
    "101019": [
      "11 usuarios - CM63",
      {
        "flexible": false,
        "price": "982.0"
      },
      "infinite",
      [
        {
          "discount_id": 1,
          "discount_name": "2 módulos",
          "discount_amount": null,
          "discount_percent": 0.2872,
          "remove_decimals": true,
          "min_quantity_threshold": 2
        },
        {
          "discount_id": 2,
          "discount_name": "3 módulos",
          "discount_amount": null,
          "discount_percent": 0.398,
          "remove_decimals": true,
          "min_quantity_threshold": 3
        }
      ],
      "",
      "",
      {
        "payee_id": null
      }
    ]
  }
}
```

### Obtener ítems disponibles para la venta con imágenes

Igual que el anterior, pero incluye las imágenes codificadas de cada ítem.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/get_items_for_sale_with_images.json?client=1
```

Esto devolverá un JSON similar a este:
```json
{
  "": {
    "958866": [
      "Carga de información - CINF",
      {
        "flexible": true,
        "price": null
      },
      "infinite",
      [],
      {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "",
      {
        "payee_id": null
      }
    ],
    "22986": [
      "cheque rechazado - O29",
      {
        "flexible": true,
        "price": "100.0"
      },
      "infinite",
      [],
      {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "",
      {
        "payee_id": null
      }
    ]
  },
  "cuotas mensuales": {
    "101018": [
      "10 usuarios - CM62",
      {
        "flexible": false,
        "price": "931.0"
      },
      "infinite",
      [
        {
          "discount_id": 1,
          "discount_name": "2 módulos",
          "discount_amount": null,
          "discount_percent": 0.2872,
          "remove_decimals": true,
          "min_quantity_threshold": 2
        },
        {
          "discount_id": 2,
          "discount_name": "3 módulos",
          "discount_amount": null,
          "discount_percent": 0.398,
          "remove_decimals": true,
          "min_quantity_threshold": 3
        }
      ],
      {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1498690031/item101018_lkbbwdodsywwtb9mq5xb.png",
        "thumbnail_fill": {
          "url": "http://res.cloudinary.com/hurynnu8i/image/upload/b_rgb:fff,c_pad,g_center,h_80,w_80/v1498690031/item101018_lkbbwdodsywwtb9mq5xb.png"
        }
      },
      "",
      {
        "payee_id": null
      }
    ],
    "101019": [
      "11 usuarios - CM63",
      {
        "flexible": false,
        "price": "982.0"
      },
      "infinite",
      [
        {
          "discount_id": 1,
          "discount_name": "2 módulos",
          "discount_amount": null,
          "discount_percent": 0.2872,
          "remove_decimals": true,
          "min_quantity_threshold": 2
        },
        {
          "discount_id": 2,
          "discount_name": "3 módulos",
          "discount_amount": null,
          "discount_percent": 0.398,
          "remove_decimals": true,
          "min_quantity_threshold": 3
        }
      ],
      {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1498690131/item101019_whyopb33ssir5mlvwp20.png",
        "thumbnail_fill": {
          "url": "http://res.cloudinary.com/hurynnu8i/image/upload/b_rgb:fff,c_pad,g_center,h_80,w_80/v1498690131/item101019_whyopb33ssir5mlvwp20.png"
        }
      },
      "",
      {
        "payee_id": null
      }
    ]
  }
}
```

## Obtener agencias válidas para un conjunto de ítems

Dado un listado de ítems y cantidades, devuelve las agencias que tienen existencias suficientes para cumplir con el pedido.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "items": [
      {"id": "1", "quantity": 5},
      {"id": "b2", "quantity": 3}
    ]
  }' \
  https://app.zauru.com/crm/quotes/get_valid_agencies_for_items.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 500,
  "data": [
    {
      "id": 1,
      "name": "Tienda",
      "items": [
        {
          "max": 0,
          "item": "b2"
        }
      ]
    },
    {
      "id": 2,
      "name": "central",
      "items": [
        {
          "max": 0,
          "item": "b2"
        }
      ]
    }
  ]
}
```

## Obtener vendedores activos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_sellers.json
```

Esto devolverá un JSON similar a este:
```json
{
  "1": "Empleado Vendedor Senior",
  "93": "Brian"
}
```

## Obtener etiquetas activas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_tags.json
```

Esto devolverá un JSON similar a este:
```json
{
  "90": "implementaciones zauru",
  "2005": "ingreso de póliza(s)"
}
```

## Obtener monedas activas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_currencies.json
```

Esto devolverá un JSON similar a este:
```json
{
  "1": [
    "Quetzal",
    "Q",
    "GTQ"
  ],
  "3": [
    "Lempira",
    "L",
    "LHN"
  ]
}
```

## Obtener métodos de contacto

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/contact_methods.json
```

Esto devolverá un JSON similar a este:
```json
{
  "4": "telefono",
  "85": "presencial"
}
```

## Obtener categorías de beneficiarios

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/payee_categories.json
```

Esto devolverá un JSON similar a este:
```json
{
  "453": "4 a 6",
  "5931": "Cliente Ejemplo, SRL"
}
```

## Obtener información del vendedor

Devuelve la información del vendedor y de su entidad (empresa).

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/seller_info.json?seller_id=1
```

Esto devolverá un JSON similar a este:
```json
{
  "seller": {
    "id": 1,
    "name": "Empleado Vendedor Senior",
    "email": "vendedor@ejemplo.com",
    "phone_number": "5555-0001"
  },
  "entity": {
    "id": 2,
    "name": "Empresa Ejemplo, S.A.",
    "logo": {
      "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png",
      "thumb": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_scale,h_50,w_50/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
      },
      "standard": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_400/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
      },
      "header": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/c_fit,h_200,w_1000/v1484748859/logo2_rgtgpkt22jsgrvyjxcii.png"
      }
    }
  }
}
```

## Obtener términos de pago activos

Devuelve los términos de pago aplicables a un cliente específico según su categoría.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_payment_terms.json?client=1
```

Esto devolverá un JSON similar a este:
```json
{
  "3444": "implementaciones ejemplo",
  "3443": "mensualidades ejemplo"
}
```

## Obtener descuentos por término de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/discounts.json?payment_term=1
```

Esto devolverá un JSON similar a este:
```json
{}
```

## Obtener nombre de una entidad

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/1/entity_name.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": "Entidad Ejemplo, S.A."
}
```

## Obtener plantillas de impresión disponibles para cotizaciones

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/print_templates.json
```

Esto devolverá un JSON similar a este:
```json
{
  "811": "Cotización de Contratos",
  "973": "Cotización de Factura"
}
```

## Crear una cotización efímera

Crea un objeto de cotización efímero (no se guarda permanentemente) útil para previsualizar o calcular totales.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "taxable": "1",
    "contact_tin": "C/F",
    "contact_name": "CONSUMIDOR FINAL",
    "date_raw": "2024-05-01",
    "subtotal": "100.00",
    "total": "100.00",
    "payment_term_id": "2",
    "entity_id": "1",
    "creator_id": "1",
    "quote_details_attributes": [
      {"item_id": "1", "quantity": "1", "unit_price": "100.00"}
    ]
  }' \
  https://app.zauru.com/crm/quotes/new_quote.json
```

## Generar HTML de una cotización desde una plantilla

Genera el HTML de la cotización usando una plantilla de impresión específica. Requiere el encabezado `Quote-Type` con valor `INVOICE`, `CONTRACT` o `CASE`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -H "Quote-Type: INVOICE" \
  -X POST \
  -d '{
    "print_template_id": "1",
    "quote": {
      "taxable": "1",
      "date": "2024-05-01",
      "subtotal": "100.00",
      "total": "100.00"
    },
    "payee": {
      "name": "Cliente Prueba",
      "tin": "C/F"
    }
  }' \
  https://app.zauru.com/crm/quotes/get_html_from_print_template.json
```

Esto devolverá un JSON similar a este:
```json
{
  "quote_html": "",
  "error": "undefined method `date=' for #<Quote:0x00000001181379c8 @taxable=\"1\">\n\n        send(\"#{name}=\", value)\n        ^^^^\nDid you mean?  date"
}
```

## Generar PDF de una cotización desde una plantilla

Genera un PDF de la cotización usando una plantilla de impresión. Requiere el encabezado `Quote-Type`.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -H "Quote-Type: INVOICE" \
  -X POST \
  -d '{
    "print_template_id": "1",
    "quote": {
      "taxable": "1",
      "date": "2024-05-01",
      "subtotal": "100.00",
      "total": "100.00"
    },
    "payee": {
      "name": "Cliente Prueba",
      "tin": "C/F"
    }
  }' \
  https://app.zauru.com/crm/quotes/get_pdf_from_print_template.json
```

## Enviar cotización por correo

Envía una cotización en formato PDF por correo electrónico usando una plantilla de impresión.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -H "Quote-Type: INVOICE" \
  -X POST \
  -d '{
    "id": "INVOICEQUOTE1231",
    "print_template_id": "1",
    "mail_template_name": "cotizacion",
    "mail_title": "Su cotización",
    "mail_body_message": "Adjunto su cotización",
    "recipient_email": "cliente@ejemplo.com",
    "attachment_name": "cotizacion.pdf",
    "quote": {
      "taxable": "1",
      "date": "2024-05-01",
      "subtotal": "100.00",
      "total": "100.00"
    },
    "payee": {
      "name": "Cliente Prueba",
      "tin": "C/F"
    }
  }' \
  https://app.zauru.com/crm/quotes/send_print_template_mail.json
```

## Obtener URL de un PDF generado desde una plantilla

Genera un PDF temporal de la cotización y devuelve una URL de acceso.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -H "Quote-Type: INVOICE" \
  -X POST \
  -d '{
    "print_template_id": "1",
    "quote": {
      "taxable": "1",
      "date": "2024-05-01",
      "subtotal": "100.00",
      "total": "100.00"
    },
    "payee": {
      "name": "Cliente Prueba",
      "tin": "C/F"
    }
  }' \
  https://app.zauru.com/crm/quotes/get_url_from_template.json
```

Esto devolverá un JSON similar a este:
```json
{
  "status": 5,
  "message": "undefined method `date=' for #<Quote:0x0000000117ad6c00 @taxable=\"1\">\n\n        send(\"#{name}=\", value)\n        ^^^^\nDid you mean?  date"
}
```

## Enviar correo con archivo adjunto

Envía un correo electrónico con uno o más archivos adjuntos desde URLs externas.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "id": "INVOICEQUOTE1231",
    "mail_template_name": "cotizacion",
    "mail_title": "Su documento",
    "mail_body_message": "Adjunto su documento",
    "recipient_email": "cliente@ejemplo.com",
    "attached_file_url": "https://ejemplo.com/archivo.pdf",
    "attachment_name": "documento.pdf",
    "client_name": "Cliente Prueba"
  }' \
  https://app.zauru.com/crm/quotes/send_attachment_mail.json
```

## Crear beneficiario (cliente) desde CRM

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "name": "Cliente CRM",
      "tin": "12345678-9",
      "buyer": true,
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/crm/quotes/create_payee.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": 1,
  "zid": 2,
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
  "created_at": "2026-08-06T04:16:46.229Z",
  "updated_at": "2026-08-06T04:16:46.229Z",
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

## Actualizar beneficiario desde CRM

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "payee": {
      "name": "Cliente CRM Actualizado",
      "email": "cliente@ejemplo.com"
    }
  }' \
  https://app.zauru.com/crm/quotes/update_payee/1.json
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

## Crear orden de venta (Sales Order)

Crea una orden de venta (factura no pagada) a partir de los detalles de la cotización.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "invoice": {
      "payee_id": "1",
      "agency_id": "1",
      "taxable": "1",
      "date": "2024-05-01",
      "payment_term_id": "2",
      "invoice_details_attributes": [
        {"item_id": "1", "quantity": "2", "unit_price": "100.00"}
      ]
    }
  }' \
  https://app.zauru.com/crm/quotes/sales_orders.json
```

Esto devolverá un JSON similar a este:
```json
{}
```

## Crear contrato en borrador (Draft Contract)

Crea un contrato en estado borrador a partir de los detalles de la cotización.

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "contract": {
      "payee_id": "1",
      "taxable": "1",
      "start_date": "2024-05-01",
      "contract_details_attributes": [
        {"item_id": "1", "quantity": "2", "unit_price_cost": "100.00"}
      ]
    }
  }' \
  https://app.zauru.com/crm/quotes/draft_contracts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "10830",
  "zid": "54",
  "document_type": "1",
  "reference": null,
  "taxable": false,
  "entity_id": "717",
  "active": true,
  "payee_id": "545676",
  "infinite": false,
  "start_date": "2020-11-19",
  "fees": "8",
  "current_fee": "8",
  "periodicity": "14",
  "periodicity_measure": "1",
  "interest_rate": null,
  "interest_rate_periodicity_measure": "1",
  "total_amount": "1500.00",
  "upfront_payment": "0.00",
  "responsible_id": "5316",
  "arrears_active": false,
  "arrears_item_id": null,
  "arrears_detailed": false,
  "arrears_starts_in_days": "0",
  "arrears_amount": null,
  "arrears_interest_rate": null,
  "arrears_interest_rate_periodicity_measure": "4",
  "arrears_formula_id": null,
  "arrears_periodicity": "1",
  "arrears_periodicity_measure": "1",
  "running": false,
  "runner_id": "1601",
  "running_since": "2021-02-04 00:00:00",
  "autogenerated_documents_count": "8",
  "closed": true,
  "closer_id": "1601",
  "closed_since": "2021-03-11 11:00:50",
  "updater_id": "1601",
  "image": null,
  "pdf": null,
  "memo": null,
  "payment_term_id": "1891",
  "charge_term_id": null,
  "extra_splits_accounts": null,
  "extra_splits_accounts_amounts": null,
  "extra_splits_accounts_amounts_formula": null,
  "created_at": "2021-02-04 03:42:00.840953",
  "updated_at": "2021-03-11 11:00:50.630916",
  "symptom": null,
  "serial_id": null,
  "courtesy": false,
  "warranty": false,
  "discount": null,
  "advanced_fees": "0",
  "voided": false,
  "voider_id": null,
  "voided_at": null,
  "start_fee": "0",
  "initial_foreign_fees": "0",
  "crm_url": null,
  "not_included_vat": null,
  "external_image_url": null,
  "interest_rate_2": null,
  "interest_rate_periodicity_measure_2": "4",
  "total_amount_2": null,
  "id_number": null,
  "import": false,
  "historical_fees": "0",
  "needs_payment": false,
  "payment_method_id": null,
  "payment_after_days": "0"
}
```
