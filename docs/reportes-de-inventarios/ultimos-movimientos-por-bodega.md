---
title: "Ultimos Movimientos por Bodega"
sidebar_label: "Ultimos Movimientos por Bodega"
sidebar_position: 13
---

Cuando quiere saber qué está pasando en su bodega sin revisar cientos de movimientos, este reporte le muestra el último movimiento registrado de cada producto. Así descubre en segundos si un producto se movió hace poco o si lleva tiempo sin actividad.

Para generar el reporte:

1. Ir a "Inventarios" > "Reportes".
2. Seleccionar "Ultimos movimientos por bodega".
3. Seleccionar la bodega y el rango de fechas.
4. Presionar "Generar reporte".

**Filtros**:

- **Bodega**: seleccione la bodega a consultar.
- **Rango de fechas**: filtre por fecha de creacion.

**Funcionamiento**:

- La primera vez que consulta este reporte, se inicia la generacion en segundo plano.
- Puede monitorear el progreso en pantalla.
- Una vez generado, el reporte queda disponible en cache.
- Puede refrescar el reporte para regenerarlo con datos actualizados.

**Exportacion**: disponible en formato XLS.

Es el reporte ideal para un vistazo rápido al estado de su bodega o para detectar productos que llevan demasiado tiempo sin moverse.

## API (llamadas desde sistemas externos)

### Consultar el estado de generacion del reporte

Al abrir la pagina del reporte en el sistema, la generacion en segundo plano se inicia y se obtiene un `zid`. Con ese identificador puede consultar el estado por API:

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/reports/check_last_movements_per_agency.json?zid=2
```

Esto devolverá un JSON similar a este:

```json
{
  "status": "completed",
  "percentage": 100,
  "message": null,
  "redirect_url": "http://app.zauru.com/inventories/reports/last_movements_per_agency?warehouse_id=1&before_date=2026-08-01"
}
```

Los valores posibles de `status` son `pending`, `processing`, `completed`, `failed` y `expired`. El campo `redirect_url` solo aparece cuando el reporte esta listo. Si el `zid` no existe, devuelve `{"status": "not_found"}`.
