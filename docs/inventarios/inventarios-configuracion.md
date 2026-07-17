---
title: "Configuración de Inventarios"
sidebar_label: "Configuración"
sidebar_position: 12
---

Este tutorial explica las opciones de configuración disponibles para el módulo de Inventarios. Estas configuraciones se establecen a nivel de entidad y afectan el comportamiento del módulo para todos los usuarios de la empresa.

## Acceder a la configuración

1. Ir a "Inventarios".
2. Seleccionar "Configuración".

Si es la primera vez que accede, verá el formulario para crear la configuración inicial. Si ya existe una configuración, podrá editarla.

## Opciones de configuración

### Permitir modificar tipo de producto (allow_item_type_modification)

**Descripción**: Controla si los usuarios pueden cambiar el tipo de producto de un ítem después de haber sido creado. Los tipos de producto son:
- Normal (product_type = 1)
- Identificable / Números de serie (product_type = 2)
- Perecedero / Lotes (product_type = 3)

**Valores**:
- **Activado**: Los usuarios pueden cambiar el tipo de producto de un ítem existente.
- **Desactivado**: El tipo de producto no se puede modificar una vez creado el ítem.

**Recomendación**: Se recomienda mantener esta opción desactivada para evitar cambios accidentales que puedan causar inconsistencias en el inventario, especialmente si el ítem ya tiene movimientos, números de serie o lotes asociados.

### Ocultar ítems inactivos (hide_inactive_items)

**Descripción**: Controla si los productos marcados como inactivos se muestran o se ocultan en las vistas de existencias del módulo de Inventarios.

**Valores**:
- **Activado**: Los ítems inactivos no aparecen en las listas de existencias, búsquedas ni reportes de inventario.
- **Desactivado**: Los ítems inactivos se muestran normalmente en todas las vistas.

**Recomendación**: Active esta opción si tiene muchos productos descontinuados y desea mantener limpias las vistas de inventario.

### Recomendar transporte para solicitudes de traslado aprobadas (recommend_needs_transport_for_approved_transfer_requests)

**Descripción**: Cuando se crea un envío desde una solicitud de traslado, esta opción controla si el campo "Necesita Transporte" se marca automáticamente.

**Valores**:
- **Activado**: Al crear un envío desde una solicitud de traslado, la opción "Necesita Transporte" aparece marcada por defecto.
- **Desactivado**: La opción "Necesita Transporte" no se marca automáticamente; el usuario debe decidir manualmente.

**Recomendación**: Active esta opción si en su operación la mayoría de traslados entre bodegas requieren transporte.

### Asientos contables de auditoría de inventario (inventory_audit_entries_enabled)

**Descripción**: Controla si al generar envíos de ajuste desde una auditoría de inventario se crean automáticamente los asientos contables correspondientes.

**Valores**:
- **Activado**: Se generan asientos contables automáticos para los ajustes de inventario.
- **Desactivado**: No se generan asientos contables automáticos (aunque pueden crearse manualmente después).

**Recomendación**: Active esta opción si desea que las diferencias de inventario se reflejen automáticamente en la contabilidad de la empresa.

### Cuentas contables para ajustes de inventario

Si la opción de asientos contables está activada, debe configurar las cuentas contables que se utilizarán para los asientos de ajuste:

#### Para envíos de entrada (ingreso de productos encontrados en auditoría)

- **Cuenta contable origen (from)**: Cuenta desde la cual se debita el monto del ajuste de entrada. Típicamente una cuenta de ajuste de inventario o cuenta puente.

- **Cuenta contable destino (to)**: Cuenta a la cual se acredita el monto del ajuste de entrada. Típicamente la cuenta de inventario del producto. Si el producto tiene configurada una cuenta de inventario específica (`inventory_account_id`), se utilizará esa cuenta en lugar de la configurada aquí.

#### Para envíos de salida (egreso de productos faltantes en auditoría)

- **Cuenta contable origen (from)**: Cuenta desde la cual se debita el monto del ajuste de salida. Típicamente la cuenta de inventario del producto. Si el producto tiene configurada una cuenta de inventario específica, se utilizará esa cuenta.

- **Cuenta contable destino (to)**: Cuenta a la cual se acredita el monto del ajuste de salida. Típicamente una cuenta de costo de ventas, merma o ajuste de inventario.

#### ¿Cómo funciona el asiento contable?

Cuando se genera un envío de ajuste desde una auditoría:

1. Se calcula la diferencia entre la cantidad observada y la cantidad del sistema.
2. Se multiplica la diferencia por el costo promedio del producto a la fecha de la auditoría.
3. Se crea un asiento contable con:
   - **Referencia**: Referencia del envío de ajuste o "Inventory audit #X".
   - **Fecha**: Fecha del envío o de la auditoría.
   - **Monto**: Diferencia × costo promedio.
   - **Cuentas**: Las configuradas en esta sección.

**Ejemplo**: Si en la auditoría se encontraron 5 unidades extra del Producto A con costo promedio de $10:
- Se crea un asiento de entrada por $50 (5 × $10).
- Se debita de la cuenta origen configurada.
- Se acredita a la cuenta de inventario del producto (o la cuenta destino configurada).

**Nota**: Si un producto no tiene un costo promedio mayor a cero, no se genera asiento contable para ese movimiento, ya que el monto sería cero.

## API (llamadas desde sistemas externos)

### Obtener la configuración de inventarios
Devuelve el valor actual de la opción `allow_item_type_modification` (si se permite modificar el tipo de producto de los ítems).
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/inventories_settings/new.json
```

### Guardar la configuración de inventarios
Guarda las opciones de configuración del módulo de Inventarios. Todos los parámetros son opcionales; solo se actualizaron los que se envíen.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "allow_item_type_modification": "0",
    "hide_inactive_items": "1",
    "recommend_needs_transport_for_approved_transfer_requests": "0",
    "inventory_audit_entries_enabled": "1",
    "inventory_audit_incoming_shipment_entry_account_from_id": "10",
    "inventory_audit_incoming_shipment_entry_account_to_id": "11",
    "inventory_audit_outgoing_shipment_entry_account_from_id": "11",
    "inventory_audit_outgoing_shipment_entry_account_to_id": "12"
  }' \
  https://app.zauru.com/inventories/inventories_settings.json
```
