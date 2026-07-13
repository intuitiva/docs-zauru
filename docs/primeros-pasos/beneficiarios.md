---
title: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_label: "Crear Clientes y/o Proveedores (Beneficiarios)"
sidebar_position: 6
---

Los beneficiarios son clientes o proveedores de productos o servicios. Pueden ser categorizados de varias maneras, de acuerdo a la necesidad de su empresa. A continuación veremos como se manejan en Zauru.

## Nuevo Beneficiario
Antes de poder comprar o vender tenemos que especificar a quien le estamos comprando o a quien le estamos vendiendo. Para llevar este registro debemos de crear un nuevo beneficiario. Los pasos para crear un beneficiario son los siguientes:


1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click en “Nuevo Beneficiario”.

![imagen 1](/img/primeros-pasos/beneficiarios-1.png)


## Tipos de Beneficiarios

Hay tres tipos de beneficiarios:


1. Los beneficiarios que son proveedores. *Los proveedores pueden ser "Proveedores de Bienes" o "Proveedores de Servicios" (que servirá en el libro de compras)*
2. Los beneficiarios que son clientes.
3. Los beneficiarios que son clientes y proveedores a la vez.


Para especificar el tipo de beneficiario en Zauru simplemente hay que seleccionar una de estas casillas, o ambas si aplica, al momento de crear un nuevo beneficiario.

![imagen 2](/img/primeros-pasos/beneficiarios-2.png)


## Otras Características del Beneficiario

Un beneficiario puede tener muchas características como por ejemplo su nit, la moneda en que se le factura o se le compra, su teléfono, dirección, etc. Para especificar estas características deberá colocárselas al momento de crear el beneficiario, las características son las siguientes:

1. Nombre comercial de su cliente o proveedor, Ejemplo: (Industria de Hamburguesas, S.A.)
2. Nombre común de su cliente o proveedor, Ejemplo: (McDonald´s)
3. Seleccione una categoría previamente creada para su cliente o Proveedor, Ejemplo: (Mayorista, Minorista). Esta categoría se puede vincular con un listado de precios, para manejar diferentes precios entre sus clientes o proveedores.
4. Coloque el NIT de su cliente o proveedor.
5. Coloque la moneda en que factura o compra a este beneficiario.
6. Coloque la dirección del beneficiario.
7. Segunda línea para la dirección del beneficiario.
8. Dirección de entrega de productos al beneficiario.
9. Dirección de la pagina web del beneficiario.
10. Coloque el numero de teléfono del beneficiario.
11. Coloque el correo electrónico del beneficiario.
12. Establezca el limite de crédito de su beneficiario, sin moneda, solo números.
13. Establezca un numero máximo de facturas al crédito no pagadas.
14. pendiente
15. Coloque el nombre del contacto de su cliente o proveedor.
16. Coloque el teléfono del contacto de su cliente o proveedor.
17. Coloque el correo electrónico del contacto de su cliente o proveedor.
18. Si tiene un segundo contacto de su cliente o proveedor coloque el nombre.
19. Si tiene un segundo contacto de su cliente o proveedor coloque el teléfono.
20. Si tiene un segundo contacto de su cliente o proveedor coloque su correo electrónico.
21. Coloque alguna nota referente a su cliente o proveedor.
22. Si tiene algún vendedor exclusivo para este cliente, selecciónelo de la lista de empleados.
23. Para guardar sus cambios haga click sobre “Crear beneficiario”

![imagen 3](/img/primeros-pasos/beneficiarios-3.png)


## Importar un Grupo de Beneficiarios
Es probable que cuando comience a usar Zauru tenga tantos clientes y proveedores que sea casi imposible ingresarlos manualmente. Zauru le permite importar su listado de clientes y proveedores por medio de plantillas predefinidas de Excel, en donde usted puede colocar todas las características de sus clientes o proveedores. Los pasos para importar beneficiarios son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click en “Importar”

![imagen 4](/img/primeros-pasos/beneficiarios-4.png)


A continuación encontrara un listado con los campos permitidos para importar un listado de clientes o proveedores y las reglas permitidas para importar. Los pasos para importar un archivo de Excel son los siguientes:

4.Descargar la plantilla de Excel con los campos predefinidos. Los únicos campos obligatorios que debe llenar son:


1. Nombre (Name).
2. Moneda(Currency_id).
3. limite de crédito (credit_limit).


Las entradas de texto permitidas para cada campo están especificadas en la imagen de abajo y son las siguientes:

- Booleano: TRUE or FALSE, si no se especifica una de las dos variables en la importación el sistema asumirá que es FALSE.
- Numero Entero: Solo se permiten números sin punto decimal o separador de miles (comas).
- Numero con Decimales: Solo numero sin separador de miles (comas).
- Texto: Cualquier carácter es permitido.
- Cadena de texto: Cualquier carácter dentro de la cadena es permitido, pero que no sea mayor a 256 caracteres.



4.Al terminar de colocar los campos que desee importar en la plantilla de Excel deberá seleccionar el archivo a importar.

5.Seleccione el botón de “Importar beneficiarios” y espere a que Zauru suba sus beneficiarios, si aparece algún error en la importación, revise si su plantilla de Excel cumple las normas de importación.

![imagen 5](/img/primeros-pasos/beneficiarios-5.png)



## Categorizar Beneficiarios
Puede que tus clientes o proveedores tengan alguna categoría, por ejemplo, cantidad de días de crédito, cliente mayorista o proveedor mayorista, etc. Y puede que esta categoría este vinculada con un termino de pago. Los pasos para categorizar un beneficiario en Zauru son los siguientes:

1. Ir a “Configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Seleccionar la pestaña de “Categoría de Beneficiarios”.
4. Click sobre “Nueva Categoría de Beneficiario”.

![imagen 6](/img/primeros-pasos/beneficiarios-6.png)


A continuación deberá crear la categoría de su cliente o proveedor, los pasos son los siguientes:

1. Colocar el nombre de la categoría, Ejemplo: Mayorista.
2. Especifique si es una categoría para un cliente o un proveedor.
3. Agregue una nota sobre su categoría, Ejemplo: Esta categoría pertenece a los clientes que compran más de Q10,000 al mes.
4. Para guardar los cambios de click en “Crear categoría de beneficiario”.

![imagen 7](/img/primeros-pasos/beneficiarios-7.png)


Le deberá aparecer un mensaje de éxito en la pantalla.

![imagen 8](/img/primeros-pasos/beneficiarios-8.png)


Después de crear la categoría de beneficiario deberá colocársela a el cliente o proveedor que desea categorizar, los pasos para colocar una categoría a un beneficiario existente son los siguientes:

1. Ir a “configuraciones”.
2. Seleccionar “Beneficiarios”.
3. Click sobre “Editar” en el beneficiario que desea  categorizar.

![imagen 9](/img/primeros-pasos/beneficiarios-9.png)

4. Seleccionar la categoría a la que pertenece este beneficiario y click en “Actualizar Beneficiario”.

![imagen 10](/img/primeros-pasos/beneficiarios-10.png)

## API (llamadas desde sistemas externos)

### Crear beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "payee": {
      "name": "Cliente Prueba",
      "tin": "12345678-9",
      "reference": "alguna referencia",
      "address_line_1": "1 calle 1-11",
      "currency_id": "1",
      "vendor": false,
      "buyer": true
    }
  }' \
  https://app.zauru.com/settings/payees.json
```

### Editar beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "payee": {
      "id": "1",
      "name": "Cliente Prueba 2",
      "tin": "12345678-9",
      "reference": "referencia actualizada",
      "address_line_1": "1 calle 2-22",
      "currency_id": "1"
    }
  }' \
  https://app.zauru.com/settings/payees/1.json
```

### Obtener detalles del beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X get \
  https://app.zauru.com/settings/payees/1.json
```

### Obtener listado de categorías de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X get \
  https://app.zauru.com/settings/payees/payee_categories.json
```


---

## Filtrar Beneficiarios por Etiquetas

Zauru le permite filtrar sus beneficiarios utilizando etiquetas (Tags). En el listado de beneficiarios aparecerá una nube de etiquetas donde podrá seleccionar una para filtrar rápidamente los beneficiarios que tengan esa etiqueta asignada.

Puede filtrar por tipo de beneficiario:
- **Todos:** Muestra todos los beneficiarios sin distinción.
- **Clientes:** Muestra solo los beneficiarios marcados como clientes.
- **Proveedores:** Muestra solo los beneficiarios marcados como proveedores.
- **Clientes y Proveedores:** Muestra los beneficiarios que son tanto clientes como proveedores.

## Sincronizar Beneficiario con CRM

Si su entidad tiene activo el módulo de CRM, Zauru le permite sincronizar un beneficiario con el CRM. En la vista de detalle del beneficiario, seleccione la opción "Sincronizar con CRM" para crear o actualizar el contacto correspondiente en el módulo de CRM.

## Búsqueda de Beneficiarios por NIT o CUI

Zauru le permite buscar beneficiarios por su NIT (Número de Identificación Tributaria) o CUI (Código Único de Identificación) desde servicios externos configurados para su entidad. Esta funcionalidad es útil para validar la información tributaria de sus clientes o proveedores al momento de crearlos.

## Campos Adicionales del Beneficiario

Además de los campos básicos, un beneficiario puede tener las siguientes características adicionales:

- **Actividad económica:** Seleccione la actividad económica del beneficiario (payee_activity_id).
- **Tipo de contribuyente:** Puede marcar si el beneficiario es Pequeño Contribuyente, Gran Contribuyente, o Exento.
- **Agente de retención:** Marque esta opción si el beneficiario es agente de retención de impuestos.
- **Sujeto a retención de impuestos:** Marque si este beneficiario está sujeto a retenciones.
- **Cliente para exportación:** Marque si este beneficiario es un cliente para operaciones de exportación.
- **País:** Seleccione el país del beneficiario (útil para beneficiarios extranjeros).
- **Extranjero:** Marque esta opción si el beneficiario es del extranjero.
- **Ciudad y Distrito:** Seleccione la ciudad y distrito donde se ubica el beneficiario.
- **Término de pago por defecto:** Puede asignar un término de pago predeterminado para este beneficiario.
- **Latitud y Longitud:** Coordenadas geográficas para ubicación en mapa.
- **Número de identificación personal (CUI):** Para personas individuales.

## Exportar Beneficiarios

Zauru le permite exportar su listado de beneficiarios en formato CSV, XLS o JSON. Para exportar:

1. Ir a "Configuraciones".
2. Seleccionar "Beneficiarios".
3. Seleccionar el formato de exportación deseado (CSV, XLS o JSON).

Si tiene un filtro de etiquetas activo, la exportación incluirá solamente los beneficiarios de esa etiqueta.

## API (llamadas desde sistemas externos)

### Obtener listado de beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees.json
```

### Búsqueda de beneficiario por NIT
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{"tin": "12345678-9"}' \
  https://app.zauru.com/settings/payees/search_payee.json
```

### Autocompletar beneficiario
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/autocomplete.json?term=cliente
```

### Exportar beneficiarios
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/settings/payees/export.csv
```
