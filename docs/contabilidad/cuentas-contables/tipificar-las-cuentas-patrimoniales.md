---
title: "Tipificar las cuentas patrimoniales (Activos, Pasivos o Capital)"
sidebar_label: "Tipificar las cuentas patrimoniales"
sidebar_position: 4
---

El balance general se arma con las cuentas patrimoniales: activos, pasivos y capital. Al crear o revisar una de estas cuentas, dos decisiones definen su lugar en el reporte: el tipo de cuenta y si es líquida o no. El tipo la coloca en su sección y la liquidez la separa entre corriente y no corriente.

## Activos, pasivos y capital

1. **Activos** (tipo 1): bienes y derechos de la empresa, como caja, bancos, cuentas por cobrar, mobiliario y equipo.
2. **Pasivos** (tipo 2): deudas u obligaciones, como cuentas por pagar, préstamos e impuestos por pagar.
3. **Capital** (tipo 5): aportes de los socios y resultados acumulados.

Las tres son cuentas patrimoniales: se reportan en el [Balance General](/reportes-de-contabilidad/balance-general) y no en el estado de resultados.

![Tipos de cuentas patrimoniales: Activos, Pasivos y Capital](/img/contabilidad/cuentas-contables-2.png)

## Cuenta líquida o no líquida

Al crear o editar una cuenta de activo, pasivo o capital, el campo **"Líquido"** indica si la cuenta es corriente o con disponibilidad inmediata (30 días):

- **Líquido = Sí**: dinero en caja y bancos, cuentas por cobrar a corto plazo, cuentas por pagar a proveedores, impuestos por pagar del período.
- **Líquido = No**: mobiliario y equipo, vehículos, inversiones a largo plazo, préstamos bancarios a varios años.

El campo solo está disponible en cuentas patrimoniales; en las cuentas de gestión (ingresos y gastos) no aplica. En capital no cambia la presentación del balance general.

![Formulario de cuenta con el campo Líquido](/img/contabilidad/cuentas-contables-9.jpg)

## Cómo se refleja en el balance general

Los activos y los pasivos se separan por liquidez:

- Activos líquidos → **"Activos corrientes"**.
- Activos no líquidos → **"Activos no corrientes"**.
- Pasivos líquidos → **"Pasivos corrientes"**.
- Pasivos no líquidos → **"Pasivos no corrientes"**.

El capital aparece completo en su sección. El resumen del reporte calcula la liquidez (activos líquidos - pasivos líquidos) y el patrimonio neto (activos totales - pasivos totales), por moneda.

![Balance general con la sección Activos corrientes](/img/reportes-de-contabilidad/balance-general-1.png)

## Revisar y corregir la tipificación

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Entrar a la cuenta desde el listado.
4. En el detalle aparece el renglón **"Líquido"** con Sí o No.
5. Si está incorrecto, seleccionar "Editar", cambiar el campo **"Líquido"** y guardar con "Actualizar cuenta".

El tipo de cuenta y la moneda quedan bloqueados cuando la cuenta tiene movimientos; la liquidez se puede cambiar en cualquier momento.

## API (llamadas desde sistemas externos)

### Actualizar la liquidez de una cuenta contable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "account": {
      "liquid": true
    }
  }' \
  https://app.zauru.com/accounting/accounts/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).
