---
title: "Crear un Caso"
sidebar_label: "Crear un Caso"
sidebar_position: 2
---

Este tutorial esta enfocado en la creacion y edicion de un caso en el modulo de Soporte.

Los pasos para crear un nuevo caso son los siguientes:

1. Ir a **"Soporte"**.
2. Seleccionar **"Casos Abiertos"**.
3. Seleccionar **"Nuevo Caso"**.

![imagen1](/img/casos-de-soporte/casos-crear-un-caso-1.jpg)


Le apareceran las opciones para crear un nuevo caso, los campos que debe llenar son los siguientes:

a. Coloque una breve **referencia** sobre el caso que esta creando.

b. Si necesita registrar un **numero de serie**, coloquelo aqui. Para que le aparezcan los numeros de serie disponibles, primero debe seleccionar el cliente y luego **refrescar** la pantalla.

c. Coloque si el caso es por **garantia** o por **cortesia**. La diferencia entre Garantia y Cortesia es que la garantia cubre los costos de reparacion o reemplazo por defectos de fabrica, mientras que la cortesia es una atencion gratuita por decision comercial. Si el caso no es ni garantia ni cortesia, se generara una **factura automatica** al crear el caso.

d. Si el caso es **critico**, marque la casilla correspondiente para priorizarlo en el listado.

e. Coloque la **fecha** en que se emite el caso.

f. Coloque la **fecha esperada de cierre**.

g. Coloque el **metodo de contacto** al cliente (telefono, correo, presencial, etc.).

h. Coloque el nombre del **cliente** existente o agregue uno nuevo.

i. Seleccione el **termino de pago** acordado con el cliente. Los terminos disponibles dependen de la categoria del cliente seleccionado.

j. Coloque el **sintoma** por el cual se esta creando el caso.

k. Coloque la **prioridad** del caso, esto solo servira de referencia.

l. Coloque al **responsable** por atender el caso. Solo apareceran empleados marcados como agentes de soporte.

m. Coloque **quien vendio** el producto o servicio.

n. Coloque el **punto de soporte** (agencia/taller) en donde sera atendido el caso.

o. Si el caso esta relacionado a un **contrato**, seleccionelo del listado.

p. **Etiquetas (Tags)**: Puede asignar una o varias etiquetas al caso para categorizarlo y facilitar su busqueda posterior.

q. **Contrato**: Si el cliente tiene un contrato activo, puede asociar el caso a dicho contrato.

r. En los **Detalles** del caso debe colocar el producto o servicio que se dara al cliente, la cantidad y el precio unitario. Para agregar otra linea presione "+". Tambien puede:
   - Agregar paquetes (bundles) seleccionando un item cuyo codigo empiece con "b".
   - Asignar un numero de serie o lote especifico al suministro.
   - Colocar una referencia por linea de suministro.

s. **Descuentos**: Puede aplicar un descuento general a toda la factura del caso y/o descuentos por linea de suministro. Los descuentos disponibles dependen de la categoria del cliente.

t. **Horas de Agentes de Soporte**: Puede registrar las horas estimadas de trabajo para cada agente de soporte en tres categorias:
   - Horas ordinarias
   - Horas extraordinarias diurnas
   - Horas extraordinarias nocturnas

u. Seleccione **"Crear Caso"**.

![imagen2](/img/casos-de-soporte/casos-crear-un-caso-2.png)



Le aparecera un mensaje de exito en la pantalla. Aun puede actualizar el caso antes de cerrarlo.

Presione **"Editar"** (Lapiz) para colocar mas informacion sobre el caso atendido.

![imagen3](/img/casos-de-soporte/casos-crear-un-caso-3.jpg)



Le apareceran las opciones para editar el caso con nuevos campos para llenar. Los campos que puede llenar son:

a. Coloque el **diagnostico** referente al caso que se recibio.

b. Coloque la **solucion** que se le dio al caso.

c. Coloque si se debera dar un **reembolso** o **reemplazo** de la mercaderia.

d. Puede agregar o quitar **suministros**, modificar cantidades, precios y referencias.

e. Actualice las **horas de agentes** realmente trabajadas.

f. Agregue o modifique **etiquetas**.

g. Puede agregar una **imagen** relacionada al caso.

Por ultimo presione **"Actualizar Caso"**.

![imagen4](/img/casos-de-soporte/casos-crear-un-caso-4.png)



Le aparecera un mensaje de exito en la pantalla notificandole que el caso fue actualizado exitosamente.

![imagen5](/img/casos-de-soporte/casos-crear-un-caso-5.jpg)

## API (llamadas desde sistemas externos)

### solicitar listado de casos abiertos
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
  https://app.zauru.com/support/cases/datatables.json
```

`length` es cuantos casos desea mostrar
`order["0"]["column"]` es por que columna quiero ordenar
`order["0"]["dir"]` es la direccion del orden en la columna seleccionada
`search["value"]` es el filtro que vamos a usar en los resultados

esto devolveria un JSON similar a este:
```json
{
  "draw":0,
  "recordsTotal":83,
  "recordsFiltered":83,
  "data":[
    {
      "zid":"<a href=\"/support/cases/1\">1</a>",
      "cn":"caso # 1",
      "ref":"referencia",
      "dte":"07 de ene de 2019",
      "srl":"# de serie",
      "sym":"sintoma observado",
      "res":"responsable@zauru.com",
      "cli":"<a href=\"/sales/clients/1\">Cliente con Queja</a>",
      "ra":"<a href=\"/support/cases/1\" title=\"Detalles\"><i class=\"fa fa-eye\"></i></a><a href=\"/support/cases/1/edit\" title=\"Editar\"><i class=\"fa fa-edit\"></i></a><a href=\"/support/cases/1?destroy=true\" data-confirm=\"\u00bfEsta seguro de destruirlo?\" data-method=\"delete\" rel=\"nofollow\" title=\"Destruirlo\"><i class=\"fa fa-trash-o\"></i></a>",
      "ra2":"<a href=\"/support/cases/1/close\" title=\"Cerrar Caso\"><i class=\"fa fa-check-square-o\"></i></a>",
      "DT_RowId":"support-case-1"
    },
    ...
  ]
}
```

### solicitar items disponibles con precios para caso nuevo y #s de serie asignables un nuevo caso
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/support/cases/new.json
```

esto devolveria un JSON similar a este:

```json
{
	"case":
		{
			"agency_id":1,
			"case_supplies_count":0,
			"client_id":1,
			"closed":false,
			"closed_at":null,
			"closer_id":null,
			"closing_expected_at":null,
			"contact_method_id":1,
			"contract_id":null,
			"courtesy":false,
			"created_at":null,
			"creator_id":null,
			"critical":false,
			"crm_url":null,
			"date":"2018-12-15",
			"diagnosis":null,
			"discount_id":null,
			"entity_id":1,
			"external_image_url":null,
			"extra_discount":null,
			"id":null,
			"id_number":"",
			"image":{
				"url":null,
				"standard":{"url":null}
			},
			"memo":null,
			"not_included_vat":null,
			"payment_term_id":91,
			"pos":false,
			"reference":null,
			"refund":false,
			"replace":false,
			"responsible_id":1,
			"seller_id":null,
			"serial_id":null,
			"solution":null,
			"subtotal":"0.0",
			"symptom":null,
			"taxable":false,
			"total":"0.0",
			"updated_at":null,
			"updater_id":null,
			"warranty":false,
			"zid":null
		},
	"items":
		[
			{
				"active":true,
				"average_cost":null,
				"code":"",
				"created_at":"2013-11-14T17:30:31Z",
				"description":"",
				"ean13":"",
				"ecommerce":false,
				"economic_order_quantity":null,
				"entity_id":1,
				"extra_tax_1":0.0,
				"extra_tax_2":0.0,
				"fifo_cost":null,
				"id":1,
				"image":{
            "url":"https://res.cloudinary.com/h43/image/upload/v146/item1_vge.png",
				},
				"item_category_id":1,
				"lifo_cost":null,
				"manufacturable":false,
				"measurement_unit":"Unidad",
				"months_warranty":null,
				"name":"Habitacion tarifa alta",
				"payee_id":null,
				"pays_vat":true,
				"pdf":{
					"url":null
				},
				"product_type":1,
				"purchasable":false,
				"quotable":true,
				"reorder_point":null,
				"sellable":true,
				"stockable":false,
				"tariff_rate":0.0,
				"updated_at":"2017-12-31T01:32:38Z",
				"updater_id":1,
				"volume":null,
				"weight":null,
				"zid":1
			},
			{
				...
			}
		],
	"prices":
		{
			"1":"85.0",
			...
		},
	"serials":
		[
			{
				"agency_future_id":null,
				"agency_id":305,
				"created_at":"2013-10-29T03:05:48Z",
				"description":"",
				"entity_id":1,
				"id":1,
				"id_number":null,
				"item_id":24,
				"name":"MAQUINA X",
				"updated_at":"2017-10-29T03:05:48Z"
			},
			{
				...
			}
		]
}
```

### crear caso nuevo
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "case": {
      "taxable": "1",
      "payee_info": "Cliente que necesita soporte pagado, S.A.",
      "responsible_id": "55",
      "agency_id": "44",
      "courtesy": "false",
      "payment_term_id": "22",
      "contact_method_id": "33",
      "date": "2018-12-24T16:23:46.620891Z",
      "closing_expected_at": "2018-12-24T16:24:02.000006914Z",
      "symptom": "el sintoma por el cual se abrio el caso originalmente",
      "case_supplies_attributes": {
        "1": {
          "item_id": "243",
          "_destroy": "false",
          "quantity": "2",
          "reference": "referencia de porque se necesita este insumo para resolver el caso"
        }
      },
      "case_support_agents_hours_attributes": {
        "1": {
          "employee_id": "5",
          "ordinary_hours": "2",
          "daytime_extraordinary_hours": "0",
          "nighttime_extraordinary_hours": "0",
          "reference": "Horas estimadas de trabajo"
        }
      },
      "tag_ids": ["1", "3"]
    }
  }' \
  https://app.zauru.com/support/cases.json
```

### obtener detalles de un caso

Este API nos permitiria obtener la informacion del caso y ademas las facturas asociadas y las ordenes de compra asociadas
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X GET \
  https://app.zauru.com/support/cases/1.json
```

### editar un caso
En este caso estamos agregando un suministro al caso, pero se puede editar cualquier parte del caso
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "case": {
      "case_supplies_attributes": {
        "1396979779308": {
          "_destroy": "false",
          "item_id": "2",
          "quantity": "3"
        }
      }
    }
  }' \
  https://app.zauru.com/support/cases/1.json
```

### editar un caso (agregando diagnostico, solucion y reembolso)
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PUT \
  -d '{
    "case": {
      "diagnosis": "El producto presentaba una falla en la fuente de poder",
      "solution": "Se reemplazo la fuente de poder por una nueva",
      "refund": "false",
      "replace": "false"
    }
  }' \
  https://app.zauru.com/support/cases/1.json
```
