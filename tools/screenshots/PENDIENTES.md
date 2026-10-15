# Pendientes de capturas

Informe de la reparación de `tools/screenshots/`. No se publicaron archivos del sitio y no se modificó ningún registro de Zauru.

## Hecho

- El inventario cruza referencias, archivos y manifiesto, incluidos documentos anidados, `index.md` y nombres sin numeración.
- El manifiesto ya no apunta al documento movido `consolidar-varias-ordenes-de-compra`. Las rutas `rebound` y `return_to_running` quedan como vista previa del botón, sin navegarlas.
- Hay 13 anclas alineadas con la línea real del manual. El validador queda en 0 errores. W1 solo avisa por imágenes que el .md todavía no referencia.
- Las capturas candidatas se escriben en `tools/screenshots/runs/` y solo `--promote` las copia al manual, y únicamente si la revisión visual está aceptada.
- `npm test` en `tools/screenshots`: 25 pruebas. `npm run build` en la raíz: correcto. El build no detecta imágenes ausentes; la auditoría sí.

## Auditoría

| Dato | Cantidad |
| --- | ---: |
| Referencias `/img/` | 761 |
| Sin archivo | 99 |
| Grupos de archivos idénticos | 17 |
| Destinos incompatibles en el manifiesto | 0 |
| Documentos sin ninguna imagen | 180 |
| Errores del validador | 0 |
| Advertencias del validador | 1 |

Los 180 documentos sin imágenes no recibieron capturas nuevas. Las referencias rotas se conservaron.

## Por qué no hay capturas nuevas

La cuenta de `tools/screenshots/.env` entra en `zauru-oauth-staging`, pero el regreso `GET /users/auth/zauru/callback` responde 404. Un POST al mismo callback responde 422 o redirige a `/users/sign_in`. No llega a abrirse ninguna pantalla del manual.

`results.json` clasifica 133 pasos, ninguno como éxito:

- 98 bloqueados por esa autenticación. Incluye el piloto de soporte, cargos pagados y contratos.
- 32 bloqueados porque el documento no tiene una ruta de consulta inequívoca. No se inventó la pantalla.
- 3 bloqueados porque el paso solo muestra el aviso de éxito de crear o cerrar un registro. Esa escritura no se ejecuta.

No se reemplazó ninguna imagen del manual. Los 17 grupos de archivos idénticos siguen en `static/img/` hasta que la sesión permita recapturarlos.

## Manifiesto recuperado tras `--gaps`

Una corrida de `3-generate-manifest.mjs --gaps` reescribió 62 documentos ya curados y dejó 67 errores. Se restauraron 60 desde la versión curada. Se conservó la del LLM en `configuracion-de-contratos`, que antes no tenía shots, y en `nominas-individuales`, rehecho a mano. `--gaps` ya no pisa entradas existentes.

Estado actual: 246 docs, 446 shots (45 bloqueados, 14 en vista previa), 0 errores y 1 advertencia.

## Decisiones para revisar

- **Mismo reporte en dos documentos.** `partidas-faltantes-en-destajos` y `destajos-sin-partida-contable` documentan `/payroll/reports/missing_entry_in_pieceworks`. Conviene unificarlos.
- **Reportes sin identificar.** No se encontró en baculo qué acción corresponde. Quedan bloqueados:
  - `balance-detallado-de-cuentas-por-cobrar`
  - `items-no-entregados-de-envios`
  - `montos-de-facturas-en-aging-detallado`
  - `subtotales-en-aging-detallado`
  - `movimientos-con-serial-o-lote-diferente`
- **Reportes que escriben al abrirse.**
  - `incidencias-no-descontadas-correctamente` solo tiene `GET fix_deducted_incidents`, que ejecuta `update_all`. Se fotografía el enlace en el menú de reportes, sin abrirlo.
  - En los dos documentos de destajos, "Corregir" (`fix_missing_entry_in_pieceworks`) se fotografía como vista previa.
- **Datos que no se inventan.** Quedan bloqueados los pasos que necesitan elegir un registro concreto:
  - `nominas-por-corrida-de-nomina` 2 (una corrida)
  - `item-por-cliente` 2 (un ítem)
  - `facturas-provisionales` 2 (una factura anulada)
  - `nominas-individuales` 2: una nómina individual no tiene listado propio.
- **Valores de filtro del LLM.** 15 shots de documentos sin imágenes rellenan filtros con valores probablemente inventados (fechas de 2024, ids como 123):
  - `categorias-de-productos-comprados-entre-fechas` 2
  - `movimientos-de-costo-de-inventario` 1
  - `ordenes-de-compra-recibidas-por-mes` 1
  - `proveedores-saldos-pendientes-a-una-fecha` 2
  - `movimientos-de-beneficiario-en-cuenta` 2
  - `totales-de-beneficios-y-deducciones-por-agencia-entre-fechas` 2
  - `cierre-diario` 2
  - `asientos-contables-de-ventas-diarias-consolidados` 1
  - `costos-de-items-en-facturas-en-una-fecha` 1
  - `documentos-emitidos-por-cliente` 2
  - `item-mensual` 2
  - `item-por-cliente-con-alcance-de-factura` 1
  - `items-ordenados-diariamente-por-cliente` 1
  - `ordenes-mensuales-por-punto-de-venta` 2
  - `paquetes-vendidos-entre-fechas` 1

  Son de solo lectura y el runner aborta si la opción no existe, pero conviene revisarlos antes de capturar. Los reportes de baculo ya muestran resultados con el rango por defecto, y `focusSelector: "table:not(.dictionary)"` enfoca la tabla de resultados.

## Para continuar

Cuando el callback OAuth acepte el GET y deje la sesión dentro de la app:

```bash
cd tools/screenshots
node 5-run-screenshots.mjs --retry-failed
```

Revisar cada candidata en la carpeta de la corrida. Marcar `visualReview: "accepted"` solo en las que correspondan al paso y luego `node 5-run-screenshots.mjs --promote`.
