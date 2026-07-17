---
title: "Crear caso"
sidebar_label: "Crear caso"
sidebar_position: 5
---

Este tutorial esta enfocado en crear casos desde el punto de venta.

Los pasos para crear un nuevo caso son los siguientes:

1. Seleccione “P.D.V”.
2. Seleccione “Nuevo Caso”.


Le aparecerán las opciones para crear un nuevo caso, los campos que debe llenar son los siguientes:

a. Seleccione si desea que se emita factura, si desea que se emita un recibo deje en blanco esta casilla.

b. Coloque el síntoma o el motivo por el que se esta registrando este caso.

c. Coloque el nombre del cliente por el que se registra el caso, a este nombre saldrá también la factura o recibo.

d. Aquí le aparecerán los números de serie relacionados a este cliente. Es decir los números de serie que este cliente haya comprado.

e. Podrá agregar productos o servicios con el código de barras, o colocar el código manualmente para agregarlos.

f. Si no utiliza códigos, puede seleccionar los productos o servicios aquí. Luego especifique la cantidad del producto o servicio.

Presione “Guardar” para crear el caso.

![imagen1](/img/punto-de-venta/crear-caso-1.png)



Le aparecerá un mensaje de éxito en la pantalla notificándole que el caso fue creado exitosamente.  Podrá verificar los detalles del caso, editarlo, cerrarlo o cobrarlo en los iconos que aparecen al lado derecho.

![imagen2](/img/punto-de-venta/crear-caso-2.jpg)

## Editar un caso

Para modificar un caso existente que aun no ha sido cerrado:

1. Ir a "P.D.V."
2. Seleccionar "Casos".
3. Seleccionar el icono de "Editar" en el caso que desea modificar.

Podra modificar los siguientes campos:

a. **Sintoma**: Actualice el motivo o sintoma del caso.

b. **Diagnostico**: Agregue o modifique el diagnostico del tecnico.

c. **Solucion**: Agregue o modifique la solucion aplicada.

d. **Productos y servicios**: Agregue o quite productos y servicios del caso.

e. **Descuento**: Aplique un descuento global al caso.

f. **Garantia**: Marque si el caso esta cubierto por garantia.

g. **Cortesia**: Marque si es un caso de cortesia (sin costo).

h. **Critico**: Marque si el caso es critico o urgente.

i. **Fecha esperada de cierre**: Modifique la fecha en que se espera cerrar el caso.

j. **Etiquetas (Tags)**: Asigne etiquetas para categorizar el caso.

Presione "Guardar" para actualizar el caso.

## Cerrar un caso

Cuando el servicio tecnico ha sido completado:

1. Ir a "P.D.V."
2. Seleccionar "Casos".
3. Seleccionar el icono de "Cerrar" en el caso que desea cerrar.

El sistema le pedira confirmacion. Una vez cerrado, el caso no podra ser editado nuevamente.

**Nota**: Si el caso tiene una factura asociada, asegurese de que la factura haya sido cobrada antes de cerrar el caso.

## API (llamadas desde sistemas externos)

### Crear caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case": {
      "symptom": "Pantalla rota",
      "client_id": "1",
      "taxable": "1",
      "case_supplies_attributes": {
        "0": {
          "item_id": "1",
          "quantity": "1",
          "unit_price": "150"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/cases.json
  ```

### Listar casos (datatables)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "order": {
      "0": {
        "column": "3",
        "dir": "desc"
      }
    },
    "start": "0",
    "length": "40",
    "search": {
      "value": "",
      "regex": "false"
    }
  }' \
  https://app.zauru.com/pos/cases/datatables.json
  ```

### Ver caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1.json
  ```

### Nuevo caso (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/new.json
  ```

### Editar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1/edit.json
  ```

### Actualizar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "case": {
      "symptom": "Pantalla rota editada",
      "diagnosis": "Cambio de pantalla",
      "case_supplies_attributes": {
        "0": {
          "id": "1",
          "quantity": "2"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/cases/1.json
  ```

### Cerrar caso

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/cases/1/close.json
  ```
