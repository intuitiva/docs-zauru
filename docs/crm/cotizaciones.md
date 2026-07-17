---
title: "API de Cotizaciones (CRM)"
sidebar_label: "API de Cotizaciones"
sidebar_position: 1
---

El módulo de CRM de Zauru expone una serie de endpoints JSON que le permiten integrar sus aplicaciones externas con las funcionalidades de cotización, catálogo de productos, creación de órdenes de venta y gestión de contactos.

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

## Obtener vendedores activos

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_sellers.json
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

## Obtener monedas activas

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/active_currencies.json
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

## Obtener categorías de beneficiarios

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/payee_categories.json
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

## Obtener descuentos por término de pago

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/discounts.json?payment_term=1
```

## Obtener nombre de una entidad

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/crm/quotes/entity_name/1.json
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
    "date": "2024-05-01",
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
      "date": "2024-05-01",
      "contract_details_attributes": [
        {"item_id": "1", "quantity": "2", "unit_price": "100.00"}
      ]
    }
  }' \
  https://app.zauru.com/crm/quotes/draft_contracts.json
```
