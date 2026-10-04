---
title: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_label: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_position: 6
---

Los beneficiarios son los clientes y proveedores con los que su empresa compra o vende. Antes de emitir su primera factura o registrar su primera compra debe tenerlos registrados.

## Nuevo beneficiario

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Click en "Nuevo Beneficiario".

Al crearlo, marque el tipo: **Proveedor** (de bienes o de servicios), **Cliente** o ambos. Complete los datos principales:

- **Nombre**: nombre comercial del cliente o proveedor.
- **Referencia**: nombre común o sobrenombre.
- **Categoría de Beneficiario**: categoría previamente creada para clasificarlo.
- **NIT**: número de identificación tributaria.
- **Moneda**: moneda en la que se le factura o compra.
- **Dirección**, **Teléfono**, **Correo Electrónico** y **Página Web**.
- **Límite de Crédito**: monto máximo y cantidad de facturas al crédito sin pagar. Marque **Término de pago vencido** para permitir facturas con saldo vencido.
- **Contactos**: nombre, teléfono y correo de hasta dos contactos.
- **Notas** y **Vendedor Exclusivo**.

Guardar con "Crear beneficiario". Si su entidad tiene activo el CRM, desde el detalle puede usar "Sincronizar con CRM".

Para el resto de campos (fiscales y de ubicación), consulte [Crear un nuevo beneficiario](/contabilidad/beneficiarios/crear-un-nuevo-beneficiario).

![Formulario de nuevo beneficiario](/img/primeros-pasos/beneficiarios-3.png)

## Categorías de beneficiarios

Agrupan clientes o proveedores con condiciones distintas, por ejemplo mayoristas.

1. Ir a "Configuraciones" y seleccionar "Beneficiarios".
2. Seleccionar la pestaña "Categoría de Beneficiarios".
3. Click en "Nueva Categoría de Beneficiario".
4. Completar nombre, tipo (cliente o proveedor) y nota. Guardar con "Crear categoría de beneficiario".

Asigne la categoría al editar el beneficiario y guarde con "Actualizar Beneficiario".

![Categorías de beneficiarios](/img/primeros-pasos/beneficiarios-6.png)

## Importar beneficiarios

Para cargar un listado desde Excel, use el botón "Importar" del listado o [Importaciones de Datos](/primeros-pasos/importaciones-de-datos) con el tipo "Crear Beneficiarios".

## Filtrar y exportar

El listado filtra por "Todos", "Clientes", "Proveedores", "Clientes y Proveedores" y por etiquetas. "Exportar a CSV" y "Exportar a Excel" descargan el listado y respetan el filtro de etiquetas activo.

## API

Todas las llamadas usan `https://app.zauru.com` y los encabezados `X-User-Email` y `X-User-Token`.

Beneficiarios:
- `GET /settings/payees.json`: listado.
- `POST /settings/payees.json`: crear.
- `GET /settings/payees/:id.json`: detalle.
- `PUT /settings/payees/:id.json`: editar.
- `DELETE /settings/payees/:id.json`: eliminar.
- `POST /settings/payees/datatables.json`: listado por tipo (`scope`: `all`, `clients`, `providers`, `clients_providers`).
- `GET /settings/payees/export.csv`: exportar.
- `POST /settings/payees/search_payee.json`: buscar por NIT.
- `GET /settings/payees/get_payee.json`: obtener por NIT o CUI.
- `GET /settings/payees/autocomplete.json`: autocompletar.
- `GET /settings/payees/:id/sync_payee_to_crm.json`: sincronizar con CRM.

Categorías:
- `GET /settings/payees/payee_categories.json`: listado.
- `POST /settings/payees/payee_categories.json`: crear.
- `GET /settings/payees/payee_categories/:id.json`: detalle.
- `PUT /settings/payees/payee_categories/:id.json`: editar.
- `DELETE /settings/payees/payee_categories/:id.json`: eliminar.

Con sus beneficiarios registrados, continúe con [Ítems](/primeros-pasos/items).
