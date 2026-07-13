---
title: "Cuentas Contables"
sidebar_label: "Cuentas Contables"
sidebar_position: 2
---

El Modulo de Contabilidad almacena la nomenclatura de cuentas que usted desee, comprendemos que la contabilidad puede ser muy variable en cada empresa, y le permitimos a usted manejarla de la forma que usted prefiera. Zauru mantiene un registro de todas las transacciones contables de compra, venta y pagos de productos y servicios. Al igual que un registro de las cuentas bancarias de la empresa.

A continuacion vera como se maneja la contabilidad en Zauru.

![imagen1](/img/contabilidad/cuentas-contables-1.png)

## Cuentas Patrimoniales

Existen 3 tipos de cuentas patrimoniales en Zauru:

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

Los grupos de cuentas permiten organizar jerarquicamente las cuentas contables. Cada grupo de cuentas tiene:

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

### Consultar listado de cuentas patrimoniales
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/accounting/accounts.json
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
