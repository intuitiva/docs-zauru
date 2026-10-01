---
title: "Grupos de Cuentas"
sidebar_label: "Grupos de Cuentas"
sidebar_position: 4
---

Un grupo de cuentas reúne cuentas bajo un mismo rubro: activos corrientes, cuentas por pagar, gastos operativos. Cada cuenta pertenece a un grupo y hereda de él su tipo de cuenta y su moneda, de modo que el grupo es la unidad con la que se ordena el catálogo y con la que el balance general y el estado de resultados agrupan sus totales.

## Qué define un grupo de cuentas

Cada grupo tiene:

- **Código**: identificador del grupo (ej. "1", "1.1"). Ordena las cuentas y los subtotales en los reportes.
- **Nombre**: nombre del rubro (ej. "Activos Corrientes").
- **Tipo de cuenta**: activo, pasivo, capital, gastos o ingresos.
- **Moneda**: moneda de las cuentas del grupo.
- **Descripción**: opcional.
- **Color**: opcional, para identificar el grupo visualmente.

El tipo de cuenta y la moneda del grupo se aplican a todas sus cuentas: al asignar una cuenta a un grupo, Zauru toma esos dos valores del grupo aunque la cuenta tenga otros cargados.

## Crear un grupo de cuentas

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Seleccionar la pestaña "Grupo de Cuentas".
4. Click sobre "Nuevo Grupo de Cuentas".

![Formulario de nuevo grupo de cuentas](/img/contabilidad/cuentas-contables-5.jpg)

Los campos a llenar son:

- **Nombre**: nombre del rubro.
- **Código**: código del grupo, que sirve de prefijo a las cuentas que agrupa.
- **Tipo de cuenta**: a la que pertenece el grupo (activo, pasivo, capital, gastos o ingresos).
- **Moneda**: en que se manejan las cuentas del grupo.
- **Descripción**: nota sobre el uso del grupo.
- **Color**: opcional.

Para guardar los cambios presione "Crear grupo de cuenta".

![Listado de grupos de cuentas](/img/contabilidad/cuentas-contables-6.jpg)

## Asignar cuentas al grupo

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Crear una nueva cuenta y seleccionar el grupo en "Grupo de cuenta".

![Cuenta contable asignada a un grupo](/img/contabilidad/cuentas-contables-8.jpg)

La cuenta toma el tipo de cuenta y la moneda del grupo. El nombre de la cuenta debe ser único dentro del grupo, y una cuenta con movimientos no permite cambiar de tipo de cuenta ni de moneda.

## Cómo ordenan los reportes

El código y el nombre del grupo ordenan el catálogo y los subtotales. En el balance general y en el estado de resultados las cuentas se agrupan por grupo y el orden es: código del grupo, nombre del grupo y código de la cuenta. Las cuentas sin grupo aparecen primero.

Conviene entonces usar códigos jerárquicos ("1", "1.1", "1.1.1") y nombres consistentes: de eso depende que los rubros salgan en el orden esperado.

## Importar grupos de cuentas

Los grupos de cuentas se pueden cargar masivamente desde un archivo. Ver [Importaciones](/contabilidad/importaciones#importacion-de-grupos-de-cuentas) para el detalle de formatos y columnas.

## Editar y eliminar

- **Editar**: un grupo se puede editar en cualquier momento desde el listado.
- **Eliminar**: solo se puede eliminar un grupo que no tenga cuentas. Si tiene, primero hay que mover o borrar sus cuentas.

## API (llamadas desde sistemas externos)

### Consultar listado de grupos de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/account_groups.json
```

Devuelve un arreglo con los grupos de la empresa. Cada grupo tiene esta forma:
```json
{
  "id": "7854",
  "zid": "16",
  "name": "OTRAS CUENTAS POR PAGAR",
  "description": null,
  "account_type_id": "2",
  "updater_id": "1106",
  "entity_id": "351",
  "currency_id": "1",
  "created_at": "2019-08-10 15:36:49.896725",
  "updated_at": "2020-02-25 15:27:47.552578",
  "code": "213",
  "accounts_count": "11",
  "color": "#FF0000"
}
```

### Obtener detalle de un grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/account_groups/1.json
```

Devuelve un objeto con los mismos campos del listado.

### Crear un grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "account_group": {
      "code": "1.1",
      "name": "Activos Corrientes",
      "account_type_id": 1,
      "currency_id": 1
    }
  }' \
  https://app.zauru.com/accounting/accounts/account_groups.json
```

Devuelve el grupo creado con los mismos campos del listado.

### Actualizar un grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "account_group": {
      "name": "Activos Corrientes Actualizado"
    }
  }' \
  https://app.zauru.com/accounting/accounts/account_groups/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Borrar un grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/accounts/account_groups/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
