---
title: "Eliminar un Caso"
sidebar_label: "Eliminar un Caso"
sidebar_position: 5
---

A veces un caso se crea por error, se duplica, o el cliente cancela la atención antes de que se haga nada; en esos momentos conviene saber eliminar el registro para no ensuciar los listados. Este tutorial le muestra cómo eliminar un caso de soporte y las precauciones que debe tomar antes de hacerlo.

## Consideraciones antes de Eliminar

Antes de eliminar un caso, tome en cuenta lo siguiente:

- Solo se pueden eliminar casos **abiertos** (no cerrados).
- Al eliminar un caso, el sistema automaticamente **anula** todas las facturas asociadas que esten en estado **no emitido** y **no anulado**.
- Las facturas que ya fueron emitidas no pueden ser anuladas automaticamente; debera anularlas manualmente antes de eliminar el caso.
- Las ordenes de compra asociadas al caso **no** se eliminan ni se anulan.
- Esta accion **no se puede deshacer**.

## Pasos para Eliminar un Caso

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Localizar el caso que desea eliminar.
4. Hacer click sobre el icono de **"Eliminar"** (basurero).

![imagen1](/img/casos-de-soporte/casos-eliminar-un-caso-1.png)

5. El sistema le mostrara un mensaje de confirmacion: **"Esta seguro de destruirlo?"**
6. Confirme la eliminacion.

Si las facturas asociadas fueron anuladas exitosamente, el caso se eliminara y aparecera un mensaje de exito.

Ya sabe cómo mantener limpios sus listados de soporte. Recuerde que esta acción no se puede deshacer, así que conviene confirmar bien antes de borrar; si en realidad lo que necesita es atender al cliente, el siguiente paso natural es crear un caso nuevo y registrarlo desde cero.

## API (llamadas desde sistemas externos)

### eliminar un caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/support/cases/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content`.
