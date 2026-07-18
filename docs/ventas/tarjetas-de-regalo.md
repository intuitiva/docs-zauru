---
title: "Tarjetas de Regalo (Gift Cards)"
sidebar_label: "Tarjetas de Regalo"
sidebar_position: 13
---

Este tutorial está enfocado en la gestión de tarjetas de regalo (gift cards) en Zauru, incluyendo la configuración de tipos de tarjeta de regalo y la administración de las tarjetas emitidas.

Las tarjetas de regalo permiten a los clientes adquirir un saldo prepagado que puede ser utilizado posteriormente como método de pago en facturas y órdenes de venta.

---

## Tipos de Tarjeta de Regalo

Antes de poder emitir tarjetas de regalo, es necesario configurar los tipos de tarjeta de regalo. Cada tipo de tarjeta define las características de las tarjetas que se emitirán bajo ese tipo.

### Listar Tipos de Tarjeta de Regalo

Para consultar la lista de tipos de tarjeta de regalo:

1. Ir a **"Ventas"**.
2. Seleccionar **"Configuraciones"**.
3. Seleccionar la pestaña de **"Tipos de Tarjeta de Regalo"**.

![imagen1](/img/ventas/tarjetas-de-regalo-1.png)

En esta vista podrá ver:
- El nombre del tipo de tarjeta.
- El valor fijo configurado (si aplica).
- La moneda en la que opera.
- El código del tipo de tarjeta.
- El estado (activo/inactivo).
- El stock disponible del ítem asociado en bodega.

### Crear un Nuevo Tipo de Tarjeta de Regalo

Los pasos para crear un nuevo tipo de tarjeta de regalo son los siguientes:

1. Ir a **"Ventas"** > **"Configuraciones"** > **"Tipos de Tarjeta de Regalo"**.
2. Presionar **"Nuevo Tipo de Tarjeta de Regalo"**.

![imagen2](/img/ventas/tarjetas-de-regalo-2.png)

Le aparecerán las opciones para crear un nuevo tipo de tarjeta de regalo. Los campos que debe llenar son los siguientes:

a. **Activo**: Marque esta opción para que el tipo de tarjeta esté disponible para su uso.

b. **Nombre**: Coloque el nombre del tipo de tarjeta de regalo (ej. "Gift Card Navideña", "Tarjeta de Regalo Corporativa").

c. **Ítem asociado**: Seleccione el ítem/producto que representa físicamente la tarjeta de regalo. Este ítem debe ser de tipo **no vendible** y **almacenable** (product_type: 1), y debe estar previamente creado en el módulo de inventario.

d. **Código**: Coloque un código único para identificar el tipo de tarjeta de regalo.

e. **Moneda**: Seleccione la moneda en la que operará este tipo de tarjeta de regalo.

f. **Valor fijo**: Si la tarjeta de regalo tiene un valor predefinido (ej. Q100, Q200), coloque el valor aquí. Si se deja en blanco, el valor será definido al momento de la venta.

Para guardar presione **"Crear Tipo de Tarjeta de Regalo"**.

![imagen3](/img/ventas/tarjetas-de-regalo-2.png)

### Editar y Eliminar Tipos de Tarjeta de Regalo

Puede editar o eliminar tipos de tarjeta de regalo desde la lista, utilizando los botones de **"Editar"** y **"Destruirlo"** respectivamente. Solo se pueden eliminar tipos de tarjeta que no tengan tarjetas de regalo asociadas.

---

## Tarjetas de Regalo Emitidas

Una vez configurados los tipos de tarjeta de regalo, las tarjetas se emiten automáticamente al vender el ítem asociado en una factura u orden de venta. Al incluir una tarjeta de regalo como ítem en una factura, Zauru genera automáticamente una tarjeta de regalo con el saldo correspondiente.

### Listar Tarjetas de Regalo

Para consultar la lista de tarjetas de regalo emitidas:

1. Ir a **"Ventas"**.
2. Seleccionar **"Tarjetas de Regalo"**.

![imagen4](/img/ventas/tarjetas-de-regalo-4.png)

Las tarjetas de regalo pueden filtrarse por estado:
- **Activas**: Tarjetas con saldo disponible y listas para usar.
- **Redimidas**: Tarjetas cuyo saldo ya fue utilizado completamente.
- **Anuladas**: Tarjetas que han sido anuladas.
- **Pendientes**: Tarjetas generadas pero aún no emitidas (ej. desde una orden de venta no facturada).
- **Todas**: Muestra todas las tarjetas sin filtrar.

Para cada tarjeta se muestra:
- El número de identificación (ID).
- El tipo de tarjeta de regalo.
- El saldo actual disponible.
- La fecha de creación.

### Ver Detalles de una Tarjeta de Regalo

Para ver los detalles de una tarjeta de regalo:

1. Ir a **"Ventas"** > **"Tarjetas de Regalo"**.
2. Hacer click sobre el número de identificación de la tarjeta que desea consultar.

En la página de detalles podrá ver:
- El tipo de tarjeta de regalo.
- El saldo actual.
- El saldo original.
- La factura u orden de venta que originó la tarjeta.
- El historial de redenciones.

![imagen5](/img/ventas/tarjetas-de-regalo-5.png)

### Consultar Saldo de una Tarjeta de Regalo (Lookup)

Para consultar rápidamente el saldo y estado de una tarjeta de regalo por su número de identificación:

1. Ir a **"Ventas"** > **"Tarjetas de Regalo"**.
2. Utilizar el campo de búsqueda por número de identificación.

El sistema retornará la información de la tarjeta si es válida:
- Número de identificación.
- Saldo disponible.
- Tipo de tarjeta de regalo.
- Factura original.

Si la tarjeta no es válida, se mostrará un mensaje indicando el motivo (tarjeta no encontrada, anulada, sin saldo, no emitida).

### Redimir una Tarjeta de Regalo

Para redimir (usar) una tarjeta de regalo como método de pago en una factura:

1. Al momento de crear un pago para una factura u orden de venta, seleccione un método de pago configurado para aceptar tarjetas de regalo.
2. Durante el proceso de pago, el sistema aplicará automáticamente el saldo de la tarjeta de regalo si corresponde.

---

## API (llamadas desde sistemas externos)

### Listar tipos de tarjeta de regalo activos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/gift_card_types.json
```

### Ver detalle de un tipo de tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/gift_card_types/1.json
```

### Obtener plantilla para crear un tipo de tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/settings/gift_card_types/new.json
```

### Crear tipo de tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "sales_gift_card_type": {
      "name": "Gift Card Navideña",
      "currency_id": "1",
      "fixed_value": "100",
      "active": "1",
      "item_id": "50",
      "code": "GC-NAV"
    }
  }' \
  https://app.zauru.com/sales/settings/gift_card_types.json
```

### Actualizar un tipo de tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "sales_gift_card_type": {
      "name": "Gift Card Navideña Actualizada",
      "fixed_value": "150",
      "active": "1"
    }
  }' \
  https://app.zauru.com/sales/settings/gift_card_types/1.json
```

### Eliminar un tipo de tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/sales/settings/gift_card_types/1.json
```

### Listar tarjetas de regalo activas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/gift_cards.json?scope=active
```

### Consultar saldo de una tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/gift_cards/lookup.json?id_number=GC-12345
```

### Ver detalle de una tarjeta de regalo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/sales/gift_cards/1.json
```
