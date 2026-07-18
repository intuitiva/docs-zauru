---
title: "Reportes Entregables"
sidebar_label: "Reportes Entregables"
sidebar_position: 11
---

Zauru le permite programar el envío automático de reportes por correo electrónico. Los Reportes Entregables son configuraciones que definen qué reporte se envía, a quién, con qué frecuencia y en qué formato. También puede realizar envíos inmediatos de reportes a usted mismo o a sus beneficiarios (clientes/proveedores).

## Nuevo Reporte Entregable

Los pasos para crear un nuevo reporte entregable son:

1. Ir a "Configuraciones".
2. Seleccionar "Reportes Entregables".
3. Seleccionar "Nuevo Reporte Entregable".

![imagen1](/img/primeros-pasos/reportes-entregables-1.png)

Le deberán aparecer las opciones para crear un nuevo reporte entregable:

a. Si quita el cheque en este recuadro el reporte entregable no estará Activo.

b. Seleccione el usuario que recibirá el reporte por correo electrónico. Aparecerán los usuarios que tienen suscripción activa a su entidad y los usuarios administradores.

c. Seleccione la operación de reporte. Las operaciones disponibles son todos los reportes del sistema agrupados por módulo. Por ejemplo: "Reportes de Ventas > Facturas Emitidas", "Reportes de Contabilidad > Balance General", etc.

d. En el campo de argumentos puede especificar parámetros adicionales para el reporte, como filtros por fecha, agencia, u otros criterios que el reporte seleccionado acepte.

e. Configuración de repetición:

- **Repetir cada hora:** Seleccione la hora del día en que se enviará el reporte diariamente (formato 24 horas). Por ejemplo: 8 para las 8:00 AM.

- **Repetir cada semana:** Seleccione el día de la semana en que se enviará el reporte (0=Domingo, 1=Lunes, ..., 6=Sábado).

- **Repetir cada mes:** Seleccione el día del mes en que se enviará el reporte (1-31).

f. **Zoom:** Ajuste el nivel de zoom del reporte PDF generado.

g. **Orientación:** Seleccione la orientación de la página: Vertical (Portrait) u Horizontal (Landscape).

h. **Tamaño de Página:** Seleccione el tamaño de página: Carta (Letter), Oficio (Legal), A4, etc.

i. **Asunto del correo:** Especifique el asunto que llevará el correo electrónico al ser enviado.

Para guardar los cambios presione "Crear Reporte entregable".

![imagen2](/img/primeros-pasos/reportes-entregables-2.png)

Le deberá aparecer un mensaje de éxito en la pantalla indicándole que el reporte entregable se creó exitosamente.

![imagen3](/img/primeros-pasos/reportes-entregables-3.png)

## Enviar Reporte de Prueba

Una vez creado el reporte entregable, puede enviar un correo de prueba para verificar que la configuración es correcta:

1. En el listado de reportes entregables, localice el reporte que desea probar.
2. Haga click en "Enviar Email".

El sistema generará el reporte y lo enviará al usuario configurado. Si el envío es exitoso recibirá una notificación de éxito; en caso contrario, se mostrará el error correspondiente.

## Envío Inmediato de Reportes

Zauru también le permite enviar reportes de forma inmediata sin necesidad de programarlos. Existen dos modalidades:

### Envío Inmediato a Usted Mismo

Esta funcionalidad está disponible desde cualquier reporte del sistema y le permite enviarse el reporte actual a su correo electrónico en formato PDF. Los parámetros del reporte se toman de la vista actual, incluyendo los filtros aplicados.

### Envío Inmediato a un Beneficiario

Esta funcionalidad le permite enviar un reporte directamente al correo electrónico de un cliente o proveedor. Los parámetros requeridos son:

- **Payee ID:** El identificador del beneficiario al que se enviará el reporte.
- **URL del reporte:** La ruta del reporte que desea enviar.
- **Parámetros del reporte:** Los filtros y parámetros aplicados al reporte (opcional).
- **Destinatario:** La dirección de correo electrónico a la que se enviará (si no se especifica, se usan los correos registrados del beneficiario).
- **Asunto:** El asunto del correo electrónico (opcional, por defecto "Reporte desde Zauru").
- **Cuerpo del mensaje:** Un texto adicional que se incluirá en el cuerpo del correo (opcional).

## API (llamadas desde sistemas externos)

### Obtener listado de reportes entregables

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/deliverable_reports.json
```

### Crear reporte entregable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "deliverable_report": {
      "user_id": "1",
      "operation_id": "1",
      "repeat_daily_hour": "8",
      "orientation": "portrait",
      "page_size": "letter",
      "subject": "Reporte diario de ventas",
      "active": true
    }
  }' \
  https://app.zauru.com/settings/deliverable_reports.json
```

### Actualizar reporte entregable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "deliverable_report": {
      "subject": "Reporte mensual de ventas",
      "repeat_monthly_day": "1"
    }
  }' \
  https://app.zauru.com/settings/deliverable_reports/1.json
```

### Eliminar reporte entregable

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/settings/deliverable_reports/1.json
```

### Enviar reporte de prueba por correo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/deliverable_reports/1/send_email.json
```

### Envío inmediato a usted mismo

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "r_url": "reports/sales/invoices",
    "r_params": {"start_date": "2024-01-01", "end_date": "2024-01-31"},
    "r_name": "Facturas de Enero 2024",
    "r_body": "Adjunto el reporte de facturas del mes de enero."
  }' \
  https://app.zauru.com/settings/deliverable_reports/immediate_delivery_to_me
```

### Envío inmediato a un beneficiario

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "p_id": "1",
    "r_url": "reports/sales/invoices",
    "r_params": {"start_date": "2024-01-01", "end_date": "2024-01-31"},
    "r_to": "cliente@ejemplo.com",
    "r_name": "Sus facturas de Enero 2024"
  }' \
  https://app.zauru.com/settings/deliverable_reports/immediate_delivery_to_payee
```
