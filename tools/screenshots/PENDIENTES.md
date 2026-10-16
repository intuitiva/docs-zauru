# Pendientes de capturas

El runner usa las figuras del manual como fuente. Para actualizar este inventario:

```bash
npm run screenshots -- audit
npm run screenshots -- report --out /tmp/capturas-pendientes.xlsx
```

El detalle, con documentos y líneas actuales, queda en
`tools/screenshots/review/audit-report.json`.

## Asociaciones que requieren corrección manual

- `/img/nominas/configuraciones-de-nomina-6.png` aparece tanto en
  `docs/nominas/configuraciones/configuraciones-generales-de-nomina.md` como en
  `docs/nominas/configuraciones/metodos-de-pago.md`, con URLs distintas. Corregir
  el nombre de imagen o el enlace según corresponda. Se bloquean ambos usos
  mientras el mismo archivo represente dos pantallas.
- Las imágenes fuera de `<figure>` conservan su archivo actual. La auditoría
  las enumera como `unmapped`; agregar un enlace solo cuando corresponda a una
  pantalla capturable de Zauru.
- [MIGRACION.md](MIGRACION.md) enumera instrucciones de encuadre del proceso
  anterior que no se trasladaron porque el enlace actual es distinto.

## Sesión y ejecución

El piloto del 16 de octubre de 2026 inició sesión y generó cinco candidatas de
`cargos-pagados` (listado, detalle, formulario y encuadres). Las dos imágenes de
`casos-bitacora` se bloquearon porque `/support/cases/65084` respondió HTTP 500
en staging. Ninguna candidata se incorporó a `static/img/` durante el piloto.

La autenticación se comprueba al capturar. Si falla el callback OAuth, la corrida
registra el motivo y no guarda una captura del login como si fuera la pantalla
solicitada. Una vez corregida la sesión, ejecutar `capture --retry-failed`.

Las candidatas necesitan revisión visual antes de `promote`; el proceso no crea
registros del ERP para producir avisos de éxito ni estados posteriores a escrituras.
