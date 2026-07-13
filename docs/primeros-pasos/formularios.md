---
title: "Formularios"
sidebar_label: "Formularios"
sidebar_position: 8
---

Los formularios han sido diseñados en Zauru, con el propósito de generar formatos personalizados que abarcan una amplia gama de aplicaciones, tales como fichas clínicas para pacientes, formularios para el seguimiento de garantías, así como instrumentos de control, entre otros.

## Nuevo Formulario
Los pasos para crear un nuevo Formularios son:

1. Ir a “Configuraciones”.
2. Seleccionar “Formularios”.
3. Seleccionar “Nuevo Formulario”

![Formularios](/img/primeros-pasos/formularios-1.png)

A continuación, se detallan los pasos para crear un nuevo formulario, destacando los campos esenciales a completar:

![Nuevo formulario](/img/primeros-pasos/formularios-2.png)

0. __Variables de impresión editables:__ En la mayoría de los casos, esta opción permanecerá desmarcada, siendo seleccionada únicamente cuando sea necesario asignar un nombre a la variable generada al crear un campo (Paso No. 4).

1. __Tipo de Documento:__ Indique el módulo para el cual se va a crear el formulario. Es posible generar formularios para todos los módulos disponibles en Zauru.

2. __Nombre del Formulario:__ Complete el nombre del formulario.

3. __Descripción (Opcional):__ Ingrese una descripción del formulario (opcional).

4. __Campos del Formulario:__

4.1 __Nombre del Campo:__ Defina el nombre del campo tal como aparecerá en el formulario.

4.2 __Tipo de Campo:__ Seleccione el tipo de campo entre las opciones disponibles, que incluyen texto, número, correo electrónico, nacionalidades, tablas y filas con columnas fijas, entre otros.

4.3 __Obligatorio:__ Marque esta opción para hacer obligatorio el llenado del campo.

4.4 __Opciones:__ Habilitado según el Tipo de Campo seleccionado.

4.5 __Predefinido:__ Permita la inclusión de un texto que se mostrará automáticamente como predeterminado en el formulario.

4.6 __Pista:__ Proporcione información adicional o ayuda que aparecerá como una pista en el campo del formulario.

4.7 __Grupo:__ Es factible crear grupos con el propósito de organizar la información de manera estructurada..

4.8 __.+.:__ Posibilita la adición de filas adicionales al formulario.

4.9 __Insertar en Posición:__ Permite la inserción de filas en la siguiente posición o en una ubicación específica.

4.10 __Crear Formulario:__ Presione este botón para finalizar y crear el formulario.


---

## Versiones de Formularios

Zauru maneja un sistema de versiones para formularios. Cada vez que edita un formulario existente, se crea una nueva versión del mismo, manteniendo el historial completo de cambios. Esto permite:

- Mantener un historial de todas las modificaciones realizadas a un formulario.
- Restaurar una versión anterior del formulario si es necesario.
- Comparar cambios entre versiones.

### Ver Historial de Versiones

Para ver el historial de versiones de un formulario:

1. Ir a "Configuraciones".
2. Seleccionar "Formularios".
3. En el listado, seleccionar "Versiones" en el formulario deseado.

![Versiones de formulario](/img/primeros-pasos/formularios-3.jpg)

Aparecerá un listado con todas las versiones del formulario, mostrando el número de versión, la fecha de creación y el usuario que la creó. Desde aquí usted puede:

- **Ver una versión específica:** Haga click en "Ver" para ver el detalle de esa versión.
- **Restaurar una versión:** Haga click en "Hacer versión actual" para crear una nueva versión basada en la versión seleccionada, restaurando efectivamente esa configuración.

### Duplicar un Formulario

Zauru le permite duplicar un formulario existente para crear uno nuevo basado en él sin afectar el original. La forma de duplicar es:

1. Ir a "Configuraciones".
2. Seleccionar "Formularios".
3. En el listado, seleccionar "Duplicar" en el formulario deseado.

Zauru creará un nuevo formulario con un ZID diferente, permitiéndole modificarlo independientemente del original.

## Vista Previa del Formulario

Zauru le permite previsualizar cómo se verá un formulario antes de usarlo. Esta funcionalidad es útil para verificar que la disposición de los campos y grupos es la correcta.

Para previsualizar un formulario:

1. Ir a "Configuraciones".
2. Seleccionar "Formularios".
3. En el listado, seleccionar "Vista Previa" en el formulario deseado.

La vista previa mostrará el formulario tal como lo verán los usuarios, con todos los campos, grupos, validaciones y valores predeterminados configurados.

## Grupos en Formularios

Los formularios pueden tener grupos que organizan los campos en secciones lógicas. Los grupos pueden ser:

- **Grupos estáticos:** Agrupan campos relacionados visualmente.
- **Grupos dinámicos:** Permiten agrupar campos que se repiten según una variable. Por ejemplo, un grupo "Dirección" que contenga los campos "Dirección", "Ciudad" y "Código Postal", y que se repita si el formulario tiene una variable de grupo dinámico.

## API (llamadas desde sistemas externos)

### Obtener listado de formularios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/forms.json
```

### Obtener detalle de un formulario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/forms/1.json
```

### Crear formulario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "settings_form": {
      "name": "Ficha de Cliente",
      "document_type": "payee",
      "description": "Formulario para capturar datos adicionales del cliente",
      "active": true,
      "editable_print_var_names": false,
      "form_fields_attributes": [
        {
          "name": "Nombre Completo",
          "field_type": "text",
          "required": true,
          "position": 1
        }
      ]
    }
  }' \
  https://app.zauru.com/settings/forms.json
```

### Ver versiones de un formulario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/forms/1/versions.json
```
