---
title: "Beneficiarios"
sidebar_label: "Beneficiarios"
sidebar_position: 4
---

Este tutorial explica como gestionar beneficiarios (clientes, proveedores y ambos) en Zauru. Los beneficiarios son las personas o empresas con las que se realizan transacciones comerciales.

## Listado de beneficiarios

El listado de beneficiarios permite filtrar por:
- **Todos**: muestra todos los beneficiarios.
- **Clientes**: muestra solo los beneficiarios marcados como compradores.
- **Proveedores**: muestra solo los beneficiarios marcados como vendedores.
- **Clientes y Proveedores**: muestra los beneficiarios marcados como ambos.

Tambien se pueden filtrar por etiquetas (tags) utilizando la nube de etiquetas.

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
- **Es proveedor de servicios**: marcar si es especificamente proveedor de servicios.
- **Es cliente**: marcar si el beneficiario es cliente.
- **Categoria de beneficiario**: clasificacion del beneficiario (ej. nacional, extranjero, empleado, etc.).
- **NIT**: numero de identificacion tributaria.
- **Moneda**: moneda en la que opera el beneficiario.
- **Etiquetas**: etiquetas para clasificar y filtrar al beneficiario.
- **Termino de pago por defecto**: plazo de pago que se asigna automaticamente en transacciones.

### Datos fiscales

- **Exento**: marcar si el beneficiario esta exento de IVA.
- **Pequeno contribuyente**: marcar si aplica el regimen de pequeno contribuyente.
- **Gran contribuyente**: marcar si es gran contribuyente.
- **Cliente para exportacion**: marcar si es un cliente en el extranjero.
- **Registro tributario**: numero de registro fiscal extendido.

### Datos de contacto y ubicacion

- **Direccion** (linea 1 y 2): direccion fisica del beneficiario.
- **Pais**: pais de residencia fiscal.
- **Ciudad**: ciudad de ubicacion.
- **Actividad economica**: giro o actividad del beneficiario.
- **Telefono**: numero de contacto.
- **Correo electronico**: email de contacto.
- **Pagina web**: sitio web del beneficiario.
- **Contacto**: nombre de la persona de contacto.
- **Telefono del contacto**: telefono directo del contacto.
- **Email del contacto**: correo del contacto.
- **DPI**: documento personal de identificacion (para personas individuales).
- **Es extranjero**: marcar si el beneficiario es del extranjero.

### Documentos y notas

- **Imagen**: adjuntar una imagen o logotipo del beneficiario.
- **PDF**: adjuntar un documento PDF relacionado.
- **Notas**: notas internas sobre el beneficiario.

### Formularios personalizados

Los beneficiarios pueden tener formularios personalizados asociados, que permiten capturar informacion adicional especifica para su empresa.

## Ver detalle del beneficiario

Al ver el detalle de un beneficiario se muestra:
- Toda la informacion registrada del beneficiario.
- El listado de transacciones contables asociadas a este beneficiario.
- Los formularios personalizados enviados para este beneficiario.

![Vista de detalle del beneficiario con transacciones asociadas](/img/contabilidad/beneficiarios-3.png)

## Editar un beneficiario

Desde la vista de detalle, haga clic en "Editar" para modificar cualquier campo del beneficiario.

## Numeracion automatica

Los beneficiarios pueden tener numeracion automatica configurada en el sistema para asignarles un ID unico secuencial.

## Filtros y busqueda

En el listado de beneficiarios puede buscar por:
- Nombre
- Referencia
- NIT
- Direccion
- Telefono
- Email
- Categoria de beneficiario

La busqueda utiliza coincidencias parciales con soporte para busqueda por similitud (trigram).

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

### Obtener el formulario de nuevo beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/payees/new.json
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
