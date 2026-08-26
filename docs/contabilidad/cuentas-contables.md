---
title: "Cuentas Contables"
sidebar_label: "Cuentas Contables"
sidebar_position: 2
---

Cada empresa lleva su contabilidad a su manera, y en Zauru usted arma la nomenclatura de cuentas como mejor le convenga: aquí le mostramos cómo crearla, ordenarla y dejarla lista desde el primer día. Este es el punto de partida natural cuando está montando su empresa en el sistema o cuando abre una cuenta nueva en el banco y necesita reflejarla contablemente. Zauru mantiene un registro de todas las transacciones contables de compra, venta y pagos de productos y servicios, así como un registro de las cuentas bancarias de la empresa.

A continuacion vera como se maneja la contabilidad en Zauru.

![imagen1](/img/contabilidad/cuentas-contables-1.png)

## Cuentas Patrimoniales

Para saber dónde va a parar cada movimiento, conviene empezar por conocer los tres tipos de cuentas patrimoniales, que reflejan lo que la empresa posee y lo que debe:

1. **Activos** (tipo 1): Bienes o servicios que posee la empresa con los cuales se obtienen beneficios.
2. **Pasivos** (tipo 2): Deudas u obligaciones de la empresa.
3. **Capital** (tipo 5): Es la diferencia entre el valor de todas las propiedades de la empresa y el total de sus deudas.

![imagen2](/img/contabilidad/cuentas-contables-2.png)

## Cuentas de Gestion (Categorias de Cuentas)

![imagen3](/img/contabilidad/cuentas-contables-3.png)

Existen 2 tipos de cuentas de gestion en Zauru (categorias):

1. **Gastos** (tipo 3): Representan los egresos de la empresa, tanto costos como gastos operativos.
2. **Ingresos** (tipo 4): Representan los ingresos por ventas y otros ingresos.

![imagen4](/img/contabilidad/cuentas-contables-4.jpg)

Cada tipo de cuenta define su comportamiento contable:
- **Cuentas de debito** (activos y gastos): aumentan con debitos y disminuyen con creditos.
- **Cuentas de credito** (pasivos, capital e ingresos): aumentan con creditos y disminuyen con debitos.

## Tipos de Cuenta

Los tipos de cuenta son administrados a nivel de sistema y definen la naturaleza de cada cuenta. Los tipos predefinidos son:

| ID | Nombre | Categoria | Debito |
|----|--------|-----------|--------|
| 1 | Activos | No | Si |
| 2 | Pasivos | No | No |
| 3 | Gastos | Si | Si |
| 4 | Ingresos | Si | No |
| 5 | Capital | No | No |

Un tipo de cuenta con `categoria = true` (Gastos e Ingresos) significa que es una cuenta de gestion y aparecera en el estado de resultados. Si `categoria = false`, es una cuenta patrimonial y aparecera en el balance general.

## Grupos de Cuentas

Cuando su catálogo crece con decenas de cuentas, los grupos le ayudan a mantenerlas ordenadas por rubros, como si fueran las gavetas de un archivero. Cada grupo de cuentas tiene:

- **Codigo**: identificador del grupo (ej. "1", "1.1").
- **Nombre**: nombre descriptivo (ej. "Activos Corrientes", "Gastos Operativos").
- **Tipo de cuenta**: a que tipo pertenece (activo, pasivo, capital, gastos, ingresos).
- **Moneda**: en que moneda se manejan las cuentas del grupo.
- **Descripcion**: opcional.
- **Color**: opcional, para identificacion visual.

### Importar grupos de cuentas

Los grupos de cuentas pueden importarse masivamente desde un archivo CSV. Ver el tutorial de [Importaciones](importaciones) para mas detalle.

## Nomenclatura de Cuentas

Zauru le permite tener la nomenclatura de cuentas que usted desee, con los rubros de cuentas que usted prefiera. Los pasos para crear su propia nomenclatura de activos, pasivos o capital son los siguientes:

1. Crear el Grupo de Cuentas.
2. Crear una Cuenta y categorizarla en el grupo de Cuenta Creado.

### Crear un nuevo Grupo de Cuentas

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Seleccionar la pestana "Grupo de Cuentas".
4. Click sobre "Nuevo Grupo de Cuentas".

![imagen5](/img/contabilidad/cuentas-contables-5.jpg)

Los campos a llenar:

- **Codigo** del grupo de la cuenta.
- **Nombre** del grupo de la cuenta.
- **Tipo de cuenta** a la que pertenece (Activo, Pasivo, Capital).
- **Moneda** en que se maneja el grupo.
- **Descripcion** del grupo de cuentas.
- **Color** (opcional).

Para guardar los cambios presione "Crear grupo de cuenta".

![imagen6](/img/contabilidad/cuentas-contables-6.jpg)

### Crear una nueva Cuenta

Ahora debera crear las cuentas que desee categorizar en este grupo de cuenta. Los pasos para hacerlo son los siguientes:

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Crear una nueva cuenta y adjuntarla al grupo de cuenta que se creo previamente.

![imagen8](/img/contabilidad/cuentas-contables-8.jpg)

Los campos para crear una cuenta son los siguientes:

- **Tipo de cuenta**: Activo, Pasivo, Capital, Gastos o Ingresos.
- **Activa**: si la cuenta esta activa para uso.
- **Liquida**: si es una cuenta corriente o con disponibilidad inmediata (30 dias). Afecta como se muestra en el balance general (corriente vs no corriente) y en el flujo de efectivo.
- **Balance 0**: si es una cuenta que deberia tener balance 0, como cuentas por cobrar, cuentas por pagar, adelantos. Las cuentas marcadas con balance 0 mostraran una alerta si quedan con saldo despues de una reconciliacion.
- **Reconciliable**: si la cuenta puede ser utilizada para reconciliaciones y liquidaciones. Por defecto, las cuentas por pagar y por cobrar son reconciliables.
- **Es costo**: para cuentas de gastos, marcar si es un costo (en lugar de un gasto operativo). Los costos aparecen en una seccion separada del estado de resultados.
- **Codigo**: codigo de la cuenta, que deberia de comenzar con el codigo del grupo de cuentas.
- **Nombre**: nombre de la cuenta.
- **Grupo de cuenta**: a que grupo de cuentas pertenece.
- **Moneda**: en que moneda se maneja la cuenta.
- **Limite de credito**: monto maximo de credito para cuentas por cobrar.
- **Descripcion**: breve descripcion de la cuenta.
- **Color**: color opcional para identificacion visual de la cuenta.

Para guardar los cambios presione click en "Crear cuenta".

![imagen9](/img/contabilidad/cuentas-contables-9.jpg)

### Exportar nomenclatura contable

Desde el listado de cuentas, puede exportar toda la nomenclatura contable a un archivo Excel (.xls). El archivo incluye todas las cuentas activas organizadas por tipo de cuenta, liquidez (corriente/no corriente), grupo de cuenta y moneda.

### Filtrar cuentas

El listado de cuentas permite filtrar por:
- **Activas**: muestra solo cuentas activas.
- **Inactivas**: muestra cuentas desactivadas.
- **Todas**: muestra todas las cuentas sin filtrar.

### Importar cuentas

Las cuentas contables pueden importarse masivamente desde un archivo CSV. Ver el tutorial de [Importaciones](importaciones).

## Cuentas Sugeridas

Zauru incluye un catalogo de cuentas sugeridas que facilita la creacion del catalogo contable para nuevos usuarios. Las cuentas sugeridas estan organizadas por:

- **Tipo de cuenta**: activo, pasivo, capital, ingresos, gastos.
- **Grupo**: agrupacion dentro del tipo.
- **Tipo de entidad**: segun el giro del negocio.

Estas cuentas sugeridas son administradas a nivel de sistema y ayudan a estandarizar la nomenclatura contable para empresas de distintos sectores.

## Saldos Iniciales

Para comenzar a usar Zauru con sus cuentas contables cuadradas se deben ingresar saldos iniciales para que sus bancos, cuentas por pagar y cuentas por cobrar esten al dia. La manera contable de hacerlo es la siguiente:

1. Ir a "Contabilidad".
2. Ir a "Transacciones".
3. Crear una nueva transaccion para colocar el gasto o el ingreso a la cuenta contable a la que desee ingresar el saldo inicial.

Se pueden crear saldos iniciales de:

- Cuentas Bancarias.
- Cuentas por Pagar por Proveedor o completa.
- Cuentas por Cobrar por Proveedor o completa.
- IVA por pagar.
- IVA por cobrar.

La forma de hacerlo es la siguiente:

![imagen11](/img/contabilidad/cuentas-contables-11.png)

Los pasos para crear una nueva transaccion de saldos iniciales son los siguientes:

1. Colocar el nombre del cliente o proveedor existente.
2. Si es un nuevo cliente o proveedor, crear un nuevo beneficiario.
3. Colocar una referencia del saldo inicial.
4. Colocar la fecha en que se espera pagar o recibir el pago.
5. Seleccionar desde donde se realizara la transaccion, si es un saldo a proveedores seleccionar cuentas por pagar (Proveedores), si es un saldo a clientes seleccionar ventas contado o credito (clientes).
6. Colocar la cantidad de la transaccion.
7. Si es un saldo a proveedores colocar el gasto, si es un saldo de clientes colocar cuentas por cobrar.
8. Si lleva IVA seleccione el boton de +IVA, el sistema automaticamente calculara su IVA por cobrar (Proveedores) o IVA por pagar (Clientes).
9. Para Guardar sus cambios seleccione el boton de "Crear transaccion".

![imagen12](/img/contabilidad/cuentas-contables-12.jpg)

Con su nomenclatura creada y sus saldos iniciales registrados, la contabilidad queda lista para recibir cada transacción del día a día, y sus reportes reflejarán la realidad de la empresa desde el primer momento. Si en el camino necesita más cuentas o más grupos, puede agregarlos siguiendo los mismos pasos.

## API (llamadas desde sistemas externos)

### Obtener detalle de la cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "77705",
  "zid": "4",
  "active": true,
  "code": null,
  "name": "cuentas por pagar credito",
  "description": null,
  "value": "0.00",
  "credit_limit": null,
  "liquid": false,
  "reconciliable": false,
  "account_group_id": null,
  "currency_id": "1",
  "account_type_id": "2",
  "entity_id": "1303",
  "updater_id": "1",
  "created_at": "2026-02-06 18:10:09.707434",
  "updated_at": "2026-02-06 18:10:09.707434",
  "splits_count": "0",
  "entries_count": "0",
  "cost": false,
  "color": "#CCCCCC"
}
```

### Consultar listado de cuentas patrimoniales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts.json
```

Esto devolverá un JSON similar a este:
```json
[
  null,
  [
    {
      "id": 1,
      "zid": 2,
      "active": true,
      "code": "",
      "name": "bolsón tarjeta de crédito",
      "description": "",
      "value": "237.08",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 3,
      "account_type_id": 3,
      "entity_id": 4,
      "updater_id": 5,
      "created_at": "2019-04-05T18:01:57.190Z",
      "updated_at": "2026-07-06T16:23:48.787Z",
      "splits_count": 268,
      "entries_count": 284,
      "cost": false,
      "color": "#CCCCCC"
    },
    {
      "id": 6,
      "zid": 7,
      "active": true,
      "code": "",
      "name": "cuentas por cobrar a tecno soluciones",
      "description": "",
      "value": "-170.0",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 4,
      "account_type_id": 3,
      "entity_id": 4,
      "updater_id": 4,
      "created_at": "2023-08-11T17:49:20.792Z",
      "updated_at": "2026-02-01T01:53:15.265Z",
      "splits_count": 1,
      "entries_count": 2,
      "cost": false,
      "color": "#CCCCCC"
    }
  ],
  [
    {
      "id": 8,
      "zid": 9,
      "active": true,
      "code": "",
      "name": "cuentas por pagar tecno soluciones $",
      "description": "",
      "value": "257.64",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 4,
      "account_type_id": 4,
      "entity_id": 4,
      "updater_id": 5,
      "created_at": "2025-05-27T23:14:17.875Z",
      "updated_at": "2025-06-02T16:07:26.687Z",
      "splits_count": 0,
      "entries_count": 1,
      "cost": false,
      "color": "#CCCCCC"
    },
    {
      "id": 10,
      "zid": 11,
      "active": true,
      "code": "",
      "name": "tarjeta de credito AMEX $",
      "description": "",
      "value": "-4.65",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 4,
      "account_type_id": 4,
      "entity_id": 4,
      "updater_id": 5,
      "created_at": "2024-05-23T21:11:12.179Z",
      "updated_at": "2026-06-24T14:52:44.339Z",
      "splits_count": 31,
      "entries_count": 105,
      "cost": false,
      "color": "#CCCCCC"
    }
  ],
  null,
  null,
  [
    {
      "id": 12,
      "zid": 13,
      "active": true,
      "code": "",
      "name": "capital",
      "description": "",
      "value": "45000.0",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": 14,
      "currency_id": 3,
      "account_type_id": 15,
      "entity_id": 4,
      "updater_id": 4,
      "created_at": "2013-01-03T01:50:31.000Z",
      "updated_at": "2016-09-04T16:15:06.784Z",
      "splits_count": 0,
      "entries_count": 11,
      "cost": false,
      "color": "#CCCCCC"
    },
    {
      "id": 16,
      "zid": 17,
      "active": true,
      "code": "",
      "name": "cuenta cuadradora de IVA (facturas regaladas)",
      "description": "",
      "value": "53132.88",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": 14,
      "currency_id": 3,
      "account_type_id": 15,
      "entity_id": 4,
      "updater_id": 4,
      "created_at": "2014-02-27T15:43:28.137Z",
      "updated_at": "2023-01-14T13:08:13.594Z",
      "splits_count": 44,
      "entries_count": 68,
      "cost": false,
      "color": "#CCCCCC"
    }
  ]
]
```

### consultar listado de cuentas de gestion
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/categories.json
```

Esto devolverá un JSON similar a este:
```json
[
  null,
  null,
  null,
  [
    {
      "id": 1,
      "zid": 2,
      "active": true,
      "code": "",
      "name": "costos implementaciones Infile",
      "description": "",
      "value": "0.0",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 3,
      "account_type_id": 4,
      "entity_id": 5,
      "updater_id": 6,
      "created_at": "2026-05-21T02:04:05.073Z",
      "updated_at": "2026-05-21T02:04:05.073Z",
      "splits_count": 0,
      "entries_count": 0,
      "cost": false,
      "color": "#cccccc"
    },
    {
      "id": 7,
      "zid": 8,
      "active": true,
      "code": "",
      "name": "desarrollo freelance importado",
      "description": "",
      "value": "0.0",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 5,
      "account_type_id": 4,
      "entity_id": 5,
      "updater_id": 5,
      "created_at": "2011-08-03T21:05:56.000Z",
      "updated_at": "2021-09-28T01:16:43.053Z",
      "splits_count": 13,
      "entries_count": 0,
      "cost": true,
      "color": "#CCCCCC"
    }
  ],
  [
    {
      "id": 9,
      "zid": 10,
      "active": true,
      "code": "",
      "name": "capitalización de intereses",
      "description": "",
      "value": "22.47",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 3,
      "account_type_id": 11,
      "entity_id": 5,
      "updater_id": 5,
      "created_at": "2012-12-08T19:44:43.000Z",
      "updated_at": "2026-07-01T19:00:47.349Z",
      "splits_count": 225,
      "entries_count": 151,
      "cost": false,
      "color": "#CCCCCC"
    },
    {
      "id": 12,
      "zid": 13,
      "active": true,
      "code": "",
      "name": "Otros Ingresos",
      "description": "",
      "value": "0.01",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": null,
      "currency_id": 3,
      "account_type_id": 11,
      "entity_id": 5,
      "updater_id": 5,
      "created_at": "2014-02-21T15:09:55.813Z",
      "updated_at": "2025-03-17T22:16:59.822Z",
      "splits_count": 34,
      "entries_count": 35,
      "cost": false,
      "color": "#CCCCCC"
    }
  ]
]
```

### Crear una cuenta contable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "account": {
      "active": true,
      "code": "1.1.1",
      "name": "Cuenta Bancaria BAC",
      "account_type_id": 1,
      "account_group_id": 1,
      "currency_id": 1,
      "liquid": true,
      "reconciliable": false
    }
  }' \
  https://app.zauru.com/accounting/accounts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "name": [
    "ya ha sido tomado"
  ]
}
```

### Actualizar una cuenta contable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "account": {
      "name": "Cuenta Bancaria BAC Actualizada",
      "active": true
    }
  }' \
  https://app.zauru.com/accounting/accounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "77705",
  "zid": "4",
  "active": true,
  "code": null,
  "name": "cuentas por pagar credito",
  "description": null,
  "value": "0.00",
  "credit_limit": null,
  "liquid": false,
  "reconciliable": false,
  "account_group_id": null,
  "currency_id": "1",
  "account_type_id": "2",
  "entity_id": "1303",
  "updater_id": "1",
  "created_at": "2026-02-06 18:10:09.707434",
  "updated_at": "2026-02-06 18:10:09.707434",
  "splits_count": "0",
  "entries_count": "0",
  "cost": false,
  "color": "#CCCCCC"
}
```

### Borrar una cuenta contable
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/accounts/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Consultar el balance de una cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/1/balance.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "77705",
  "zid": "4",
  "active": true,
  "code": null,
  "name": "cuentas por pagar credito",
  "description": null,
  "value": "0.00",
  "credit_limit": null,
  "liquid": false,
  "reconciliable": false,
  "account_group_id": null,
  "currency_id": "1",
  "account_type_id": "2",
  "entity_id": "1303",
  "updater_id": "1",
  "created_at": "2026-02-06 18:10:09.707434",
  "updated_at": "2026-02-06 18:10:09.707434",
  "splits_count": "0",
  "entries_count": "0",
  "cost": false,
  "color": "#CCCCCC"
}
```

### Obtener el formulario de nueva cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": null,
  "zid": null,
  "active": true,
  "code": null,
  "name": null,
  "description": null,
  "value": "0.0",
  "credit_limit": null,
  "liquid": false,
  "reconciliable": false,
  "account_group_id": null,
  "currency_id": 1,
  "account_type_id": 2,
  "entity_id": 3,
  "updater_id": null,
  "created_at": null,
  "updated_at": null,
  "splits_count": 0,
  "entries_count": 0,
  "cost": false,
  "color": "#CCCCCC"
}
```

### Obtener el formulario de edicion de una cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "77705",
  "zid": "4",
  "active": true,
  "code": null,
  "name": "cuentas por pagar credito",
  "description": null,
  "value": "0.00",
  "credit_limit": null,
  "liquid": false,
  "reconciliable": false,
  "account_group_id": null,
  "currency_id": "1",
  "account_type_id": "2",
  "entity_id": "1303",
  "updater_id": "1",
  "created_at": "2026-02-06 18:10:09.707434",
  "updated_at": "2026-02-06 18:10:09.707434",
  "splits_count": "0",
  "entries_count": "0",
  "cost": false,
  "color": "#CCCCCC"
}
```

### Listado de transacciones de una cuenta (datatables)
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
  https://app.zauru.com/accounting/accounts/1/datatables_show.json
```

### Balance corrido de una cuenta (datatables)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "start": 0,
    "length": 40
  }' \
  https://app.zauru.com/accounting/accounts/1/datatables_balance.json
```

### Formulario de cierre mensual automatico del estado de resultados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/automatic_monthly_close.json
```

### Formulario de cierre anual automatico del estado de resultados
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/automatic_annual_close.json
```

## API de grupos de cuentas (llamadas desde sistemas externos)

### Consultar listado de grupos de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/account_groups.json
```

Esto devolverá un JSON similar a este:
```json
[
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
]
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

Esto devolverá un JSON similar a este:
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

### Obtener el formulario de nuevo grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/account_groups/new.json
```

Esto devolverá un JSON similar a este:
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

### Obtener el formulario de edicion de un grupo de cuentas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts/account_groups/1/edit.json
```

Esto devolverá un JSON similar a este:
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

Esto devolverá un JSON similar a este:
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

Esto devolverá un JSON similar a este:
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

## API de tipos de cuenta (llamadas desde sistemas externos)

Los tipos de cuenta son administrados a nivel de sistema y requieren permisos de administrador.

### Consultar listado de tipos de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/account_types.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "1",
    "name": "Assets",
    "debit": true,
    "category": false,
    "created_at": "2013-02-11 06:39:57.216807",
    "updated_at": "2013-02-11 06:39:57.216807"
  }
]
```

### Obtener detalle de un tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/account_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "Assets",
  "debit": true,
  "category": false,
  "created_at": "2013-02-11 06:39:57.216807",
  "updated_at": "2013-02-11 06:39:57.216807"
}
```

### Obtener el formulario de nuevo tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/account_types/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "Assets",
  "debit": true,
  "category": false,
  "created_at": "2013-02-11 06:39:57.216807",
  "updated_at": "2013-02-11 06:39:57.216807"
}
```

### Obtener el formulario de edicion de un tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/account_types/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "Assets",
  "debit": true,
  "category": false,
  "created_at": "2013-02-11 06:39:57.216807",
  "updated_at": "2013-02-11 06:39:57.216807"
}
```

### Crear un tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "account_type": {
      "name": "Nuevo Tipo",
      "category": false,
      "debit": true
    }
  }' \
  https://app.zauru.com/accounting/account_types.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "Assets",
  "debit": true,
  "category": false,
  "created_at": "2013-02-11 06:39:57.216807",
  "updated_at": "2013-02-11 06:39:57.216807"
}
```

### Actualizar un tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "account_type": {
      "name": "Nuevo Tipo Actualizado"
    }
  }' \
  https://app.zauru.com/accounting/account_types/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "Assets",
  "debit": true,
  "category": false,
  "created_at": "2013-02-11 06:39:57.216807",
  "updated_at": "2013-02-11 06:39:57.216807"
}
```

### Borrar un tipo de cuenta
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/account_types/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

## API de cuentas sugeridas (llamadas desde sistemas externos)

Las cuentas sugeridas son administradas a nivel de sistema y requieren permisos de administrador.

### Consultar listado de cuentas sugeridas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/suggested_accounts.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": "1",
    "name": "efectivo",
    "group_name": null,
    "account_type_id": "1",
    "entity_type_id": "1",
    "created_at": "2013-02-11 06:39:57.380434",
    "updated_at": "2013-02-11 06:39:57.380434"
  }
]
```

### Obtener detalle de una cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/suggested_accounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "efectivo",
  "group_name": null,
  "account_type_id": "1",
  "entity_type_id": "1",
  "created_at": "2013-02-11 06:39:57.380434",
  "updated_at": "2013-02-11 06:39:57.380434"
}
```

### Obtener el formulario de nueva cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/suggested_accounts/new.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "efectivo",
  "group_name": null,
  "account_type_id": "1",
  "entity_type_id": "1",
  "created_at": "2013-02-11 06:39:57.380434",
  "updated_at": "2013-02-11 06:39:57.380434"
}
```

### Obtener el formulario de edicion de una cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/suggested_accounts/1/edit.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "efectivo",
  "group_name": null,
  "account_type_id": "1",
  "entity_type_id": "1",
  "created_at": "2013-02-11 06:39:57.380434",
  "updated_at": "2013-02-11 06:39:57.380434"
}
```

### Crear una cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "suggested_account": {
      "name": "Caja",
      "group_name": "Activos",
      "account_type_id": 1,
      "entity_type_id": 1
    }
  }' \
  https://app.zauru.com/accounting/suggested_accounts.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "efectivo",
  "group_name": null,
  "account_type_id": "1",
  "entity_type_id": "1",
  "created_at": "2013-02-11 06:39:57.380434",
  "updated_at": "2013-02-11 06:39:57.380434"
}
```

### Actualizar una cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "suggested_account": {
      "name": "Caja General"
    }
  }' \
  https://app.zauru.com/accounting/suggested_accounts/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "1",
  "name": "efectivo",
  "group_name": null,
  "account_type_id": "1",
  "entity_type_id": "1",
  "created_at": "2013-02-11 06:39:57.380434",
  "updated_at": "2013-02-11 06:39:57.380434"
}
```

### Borrar una cuenta sugerida
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/accounting/suggested_accounts/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
