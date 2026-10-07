---
title: "Crear compra"
sidebar_label: "Crear compra"
sidebar_position: 7
---

Cuando su bodega se queda corta de mercadería o hay que pagar el alquiler del local, aquí es donde registra la orden de compra, sea de productos para vender o de gastos del negocio. Al crear una compra de productos, estos ingresarán a su bodega una vez que los reciba, y el sistema le deja lista una recepción pendiente para confirmarla cuando el proveedor entregue. Los pasos para crear una nueva compra desde el punto de venta son los siguientes:

## Crear una orden de compra de productos

1. Ir a "P.D.V."
2. Seleccionar "Nueva Compra".

![listado de items por comprar](/img/punto-de-venta/crear-compra-1.png)

Complete los campos de la orden de compra:

a. **Referencia**: coloque una breve referencia para identificar la orden.

b. **Proveedor**: seleccione el proveedor al que le está comprando; puede buscar por nombre.

c. **Comprador**: empleado que realiza la compra. Por defecto se asigna el usuario actual si está configurado como comprador.

d. **Término de cargo**: condiciones de pago al proveedor. Por defecto se asigna el configurado en las preferencias del punto de venta.

e. **Sujeto a impuestos**: marque si la compra está sujeta a impuestos. Por defecto toma el valor configurado en las preferencias.

f. **Fecha de envío** (si está visible según configuración): fecha estimada en que el proveedor enviará los productos.

g. **Código de barras / código del producto**: escanee el código de barras o coloque el código manual para agregar el producto.

h. **Selección de productos**: si no usa códigos, navegue por las categorías y haga click sobre los productos.

i. **Cantidad**: ajuste la cantidad con los botones "+" y "-".

j. **Costo unitario**: costo al que compra el producto. Si el sistema tiene registrado el último costo, lo muestra como referencia.

k. **Descuento** (si está visible según configuración): aplique un descuento global a la orden.

l. **Impuestos adicionales** (si están configurados): agregue impuestos extra como shipping u otros cargos; admite hasta 4.

m. **Carga de imagen y PDF** (si está habilitado): adjunte una imagen o PDF de la factura del proveedor.

Presione "Guardar". El sistema autoriza la orden y crea una recepción pendiente para recibir los productos.

## Crear una compra de gastos

Para registrar gastos o servicios que no son productos de inventario (alquileres, servicios, etc.), seleccione "Nueva Compra de Gastos". Los campos son los mismos de la compra de productos, con estas diferencias:

a. En lugar de productos del inventario, seleccione **cuentas contables** de gasto.

b. Las cuentas se organizan por grupos y tipos para facilitar la búsqueda.

c. Especifique el costo, la cantidad y la referencia de cada línea de gasto.

d. Si la configuración "mostrar referencia en líneas de compras de gastos" está activa, cada línea muestra un campo de referencia adicional.

## Qué puede hacer con la orden de compra

Una vez creada la orden de compra puede:

a. **Recibir los productos**: regístrelos en "Recepciones" cuando el proveedor los entregue (vea "Recibir los productos de una orden de compra").

b. **Pagar al proveedor**: registre el descargo desde el detalle de la orden (vea "Pagar una orden de compra").

c. **Imprimir**: use las plantillas de impresión configuradas.

## Recibir los productos de una orden de compra

Cuando el proveedor entregue la mercadería:

1. Ir a "P.D.V."
2. Seleccionar "Recepciones".
3. Seleccionar la orden de compra pendiente de recibir.
4. Confirme las cantidades recibidas (y lotes o números de serie si el producto lo requiere) y guarde la recepción.

Al guardar, los productos ingresan al inventario y la orden queda recibida, total o parcialmente. Vea [Recibir compra](recibir-compra.md) para el detalle del proceso.

## Pagar una orden de compra (Descargo)

Para registrar el pago a un proveedor:

1. Desde el detalle de la orden de compra, seleccione la opción "Pagar".
2. Seleccione el método de descargo (forma de pago).
3. Coloque una referencia (opcional).
4. Verifique el monto a pagar.
5. Presione "Crear descargo".

## API (llamadas desde sistemas externos)

### Listar órdenes de compra (datatables)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/pos/purchases/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 0,
  "recordsFiltered": 0,
  "data": []
}
```

### Ver orden de compra

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Nueva orden de compra (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id": null,
    "zid": null,
    "id_number": "",
    "reference": null,
    "charge_term_id": 1,
    "authorized": false,
    "issue_date": "2026-08-06",
    "shipping_date": null,
    "delivery_date": null,
    "subtotal": "0.0",
    "discount": null,
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "0.0",
    "due": null,
    "purchaser_id": 2,
    "payee_id": null,
    "entity_id": 3,
    "receiver_id": null,
    "received": false,
    "received_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": null,
    "updater_id": null,
    "payment_expected_at": null,
    "paid": false,
    "paid_at": null,
    "memo": null,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "consolidate_id": null,
    "agency_id": 4,
    "import": false,
    "incoterm_destination": null,
    "origin": null,
    "transport_type": null,
    "forwarder": null,
    "incoterm_id": null,
    "created_at": null,
    "updated_at": null,
    "purchase_order_details_count": 0,
    "currency_id": null,
    "exchange_rate": null,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": null,
    "discharge_details_count": 0,
    "charges_count": 0,
    "taxable": false,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": null,
    "authorizer_id": null,
    "authorized_at": null,
    "not_included_vat": null,
    "exempt": false,
    "small_taxpayer": false,
    "external_image_url": null,
    "tax3": null,
    "tax4": null,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": null,
    "document_external_storage_certified_response": null,
    "pos": true,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  },
  "items": [
    {
      "id": 5,
      "zid": 6,
      "active": true,
      "stockable": true,
      "sellable": true,
      "manufacturable": false,
      "purchasable": true,
      "code": "H106",
      "ean13": "",
      "name": "Cajón Bematech, 5 posiciones de billetes, 6 posiciones de monedas; interfase RJ12 (para impresora de recibos), color negro",
      "image": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1636123240/item_espma78rfumoszhxyamy.png",
        "thumbnail_fill": {
          "url": "http://res.cloudinary.com/hurynnu8i/image/upload/b_rgb:fff,c_pad,g_center,h_80,w_80/v1636123240/item_espma78rfumoszhxyamy.png"
        }
      },
      "item_category_id": 7,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "",
      "reorder_point": null,
      "economic_order_quantity": null,
      "months_warranty": null,
      "entity_id": 3,
      "updater_id": 3,
      "created_at": "2021-11-05T14:40:40.137Z",
      "updated_at": "2022-05-10T19:44:20.686Z",
      "pays_vat": true,
      "tariff_rate": 0.0,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "product_type": 1,
      "payee_id": null,
      "average_cost": "0.0",
      "fifo_cost": "486.61",
      "lifo_cost": null,
      "extra_tax_1": 0.0,
      "extra_tax_2": 0.0,
      "quotable": true,
      "ecommerce": false,
      "image2": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image3": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image4": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image5": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "msrp": null,
      "tax1_use_msrp": false,
      "tax2_use_msrp": false,
      "vendor_code": null,
      "stocks_only_integer": true,
      "brand_id": null,
      "color": "#cccccc",
      "item_country_code_id": null,
      "youtube_video_url": null,
      "inventory_account_id": null,
      "master_item_id": null,
      "gemma_q4f16_embedding": "[-0.09899902]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": [],
      "item_category": {
        "id": 7,
        "name": "Hardware",
        "notes": "",
        "updater_id": 3,
        "entity_id": 3,
        "created_at": "2017-08-29T16:30:21.921Z",
        "updated_at": "2017-08-29T16:30:21.921Z",
        "items_count": 24,
        "bundles_count": 0,
        "item_super_category_id": null,
        "color": "#ff0000",
        "image": {
          "url": null,
          "thumbnail_fill": {
            "url": null
          }
        },
        "zid": 8
      }
    }
  ]
}
```

### Nueva compra de gastos (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/new_expense_purchase.json
  ```

El objeto `purchase_order` es igual al del prellenado de productos; la respuesta agrega la lista de cuentas de gasto:

```json
{
  "accounts": [
    {
      "id": 5,
      "zid": 6,
      "active": true,
      "code": "",
      "name": "abogado",
      "description": "",
      "value": "312.5",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": 7,
      "currency_id": 2,
      "account_type_id": 8,
      "entity_id": 3,
      "updater_id": 3,
      "created_at": "2012-12-06T16:05:14.000Z",
      "updated_at": "2026-05-16T02:21:53.903Z",
      "splits_count": 29,
      "entries_count": 1,
      "cost": false,
      "color": "#CCCCCC"
    }
  ]
}
```

### Crear orden de compra

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_order": {
      "reference": "prueba",
      "payee_info": "Proveedor de prueba",
      "issue_date": "2026-08-06",
      "charge_term_id": "1",
      "purchaser_id": "1",
      "taxable": "1",
      "purchase_order_details_attributes": {
        "0": {
          "item_id": "1",
          "booked_quantity": "5",
          "unit_cost": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/purchases.json
  ```

Devuelve la orden de compra creada, con el mismo objeto `purchase_order` del prellenado. La recepción pendiente se genera automáticamente.

### Nuevo descargo (pago al proveedor)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/1/new_discharge.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "369566",
  "zid": "9",
  "id_number": null,
  "date": "2026-03-09",
  "reference": "TRANSF. 307112394",
  "receipt": null,
  "amount": "3538.83",
  "memo": null,
  "voided": false,
  "voided_at": null,
  "payee_id": "1957270",
  "entity_id": "1303",
  "creator_id": "1274",
  "voider_id": null,
  "discharge_method_id": "2979",
  "created_at": "2026-03-09 20:18:26.671889",
  "updated_at": "2026-03-09 20:18:26.671889",
  "discharge_details_count": "2",
  "image": null,
  "draft": false,
  "authorizer_id": null,
  "authorized_at": null,
  "external_image_url": null
}
```

### Crear descargo (pago al proveedor)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge": {
      "discharge_method_id": "1",
      "reference": "pago prueba",
      "discharge_details_attributes": {
        "0": {
          "purchase_order_id": "1",
          "amount": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/purchases/create_discharge.json
  ```

Devuelve el descargo creado, con el mismo JSON que "Nuevo descargo".
