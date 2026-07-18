---
title: "Clientes con Números de Serie"
sidebar_label: "Clientes con Series"
sidebar_position: 13
---

Este tutorial esta enfocado en como consultar los clientes que poseen numeros de serie y los numeros de serie que cada cliente tiene.

## Ver Clientes con Numeros de Serie

1. Ir a **"Soporte"**.
2. Seleccionar **"Clientes con #s de Serie"** (o acceder a `/support/clients_with_serials`).

![imagen1](/img/casos-de-soporte/casos-clientes-con-series-1.png)

Le aparecera un listado de clientes que tienen numeros de serie en su poder (es decir, productos con numero de serie que les fueron entregados). Para cada cliente se muestra:

- **Nombre** del cliente
- **Categoria** del cliente (Mayorista, Minorista, etc.)
- **Cantidad de series** que posee

## Ver Detalle de un Cliente y sus Numeros de Serie

1. Haga click sobre **"Verificar"** (ojo) en el cliente deseado.

![imagen2](/img/casos-de-soporte/casos-clientes-con-series-2.png)

En la pagina de detalle encontrara:

### Datos del Cliente

Informacion general del cliente: nombre, categoria, NIT, direccion, telefono, correo, etiquetas.

### Numeros de Serie del Cliente

Listado de todos los numeros de serie que el cliente posee, mostrando:
- **Numero de Serie** (nombre)
- **Producto** asociado
- **Cantidad de casos** de soporte en los que ha sido atendido

### Acciones Disponibles

Desde el detalle del cliente, puede:
- **Crear un nuevo caso** de soporte para un numero de serie especifico haciendo click en el enlace del numero de serie.
- **Ver formularios** y envios asociados al cliente.

## Flujo de Trabajo Recomendado

1. Un cliente llama reportando un problema con un producto.
2. Busca al cliente en **"Clientes con #s de Serie"**.
3. Identifica el numero de serie del producto que presenta el problema.
4. Hace click sobre el numero de serie para **crear un caso de soporte** directamente con el cliente y el numero de serie pre-seleccionados.
5. Procede a llenar los datos del caso como se describe en **"Crear un Caso"**.

## API (llamadas desde sistemas externos)

### detalle de un cliente con sus numeros de serie

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/clients_with_serials/1.json
```

La respuesta incluye los datos del cliente, su categoria, las series que posee y los formularios asociados:

```json
{
  "id": 1,
  "name": "Cliente con Series",
  "tin": "123456-7",
  "payee_category": {
    "vendor": false,
    "name": "Minorista"
  },
  "submissions": []
}
```
