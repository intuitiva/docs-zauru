---
title: "Contratos (Membresías)"
sidebar_label: "Contratos (Membresías)"
sidebar_position: 5
---

Los contratos en Zauru representan las membresías de su entidad con los diferentes planes y aplicaciones contratados. Cada contrato define qué aplicaciones (módulos) tiene disponibles su entidad y por cuánto tiempo.

## Planes Disponibles

Zauru ofrece diferentes planes que agrupan conjuntos de aplicaciones:

- **Servicios:** Incluye Control de Acceso, Configuraciones, Contabilidad, Inventarios y Ventas.
- **Distribución:** Incluye además de lo anterior, Compras.

## Crear o Renovar un Contrato

Dependiendo de su membresía actual, Zauru le mostrará las opciones de:

- **Renovar:** Si su membresía está por expirar.
- **Mejorar (Upgrade):** Si desea agregar más aplicaciones.
- **Rebajar (Downgrade):** Si desea reducir las aplicaciones.

Los pasos para crear o renovar un contrato son:

1. Ir a "Control de Acceso".
2. Seleccionar "Contratos".
3. Seleccionar "Nuevo Contrato".
4. Elegir el plan deseado y presionar el botón correspondiente.

## Exportar Contratos

Zauru le permite exportar su historial de contratos en formato CSV o XLS. Para exportar:

1. Ir a "Control de Acceso".
2. Seleccionar "Contratos".
3. Seleccionar el formato de exportación deseado (CSV o XLS).

## API (llamadas desde sistemas externos)

### Obtener listado de contratos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/contracts.json
```

### Obtener detalle de un contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/contracts/1.json
```

### Eliminar un contrato
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/access_control/contracts/1.json
```

### Exportar contratos
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/access_control/contracts/export.csv
```
