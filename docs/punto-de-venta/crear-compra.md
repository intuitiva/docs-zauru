---
title: "Crear compra"
sidebar_label: "Crear compra"
sidebar_position: 7
---

Los pasos para crear una nueva compra desde el Punto de Venta permiten registrar ordenes de compra de productos o gastos. Al crear una compra de productos, estos ingresaran a la bodega actual del usuario una vez recibidos.

## Crear una orden de compra de productos

1. Ir a "P.D.V."
2. Seleccionar "Nueva Compra".

![listado de items por comprar](/img/punto-de-venta/crear-compra-1.png)

Le apareceran las opciones para crear una nueva orden de compra. Los campos que puede colocar son:

a. **Referencia**: Coloque una breve referencia para identificar facilmente la orden de compra.

b. **Proveedor**: Seleccione el proveedor al que se le esta comprando. Puede buscar por nombre.

c. **Comprador**: Seleccione el empleado que esta realizando la compra. Por defecto se asigna el usuario actual si esta configurado como comprador.

d. **Termino de cargo**: Seleccione el termino de cargo (condiciones de pago al proveedor). Por defecto se asigna el configurado en las preferencias del punto de venta.

e. **Sujeto a impuestos**: Marque esta casilla si la compra esta sujeta a impuestos. Por defecto toma el valor configurado en las preferencias.

f. **Fecha de envio** (si esta visible segun configuracion): Fecha estimada en que el proveedor enviara los productos.

g. **Codigo de barras / Codigo del producto**: Escanee el codigo de barras del producto o coloque el codigo manualmente para agregarlo a la orden de compra.

h. **Seleccion de productos**: Si no utiliza codigos, puede navegar por las categorias y seleccionar los productos haciendo click sobre ellos. Luego especifique la cantidad y el costo unitario.

i. **Cantidad**: Ajuste la cantidad del producto a comprar usando los botones "+" y "-".

j. **Costo unitario**: Especifique el costo unitario al que esta comprando el producto. Si el sistema tiene registrado el ultimo costo de compra, se mostrara como referencia.

k. **Descuento** (si esta visible segun configuracion): Puede aplicar un descuento global a la orden de compra.

l. **Impuestos adicionales** (si estan configurados): Puede agregar impuestos extra como shipping, otros cargos, y hasta 4 tipos de impuestos adicionales.

m. **Carga de imagen y PDF** (si esta habilitado): Puede adjuntar una imagen o PDF de la factura del proveedor.

Presione "Guardar" para crear la orden de compra. Al guardar, el sistema automaticamente autorizara la orden de compra y creara una recepcion pendiente para que los productos puedan ser recibidos posteriormente.

## Crear una compra de gastos

Si necesita registrar una compra que no es de productos de inventario (gastos como servicios, alquileres, etc.), seleccione "Nueva Compra de Gastos". Los campos son similares a la compra de productos, con las siguientes diferencias:

a. En lugar de seleccionar productos del inventario, selecciona **cuentas contables** de gasto.

b. Las cuentas se organizan por grupos y tipos de cuenta para facilitar la busqueda.

c. Puede especificar el costo, cantidad y referencia para cada linea de gasto.

d. Si la configuracion "mostrar referencia en lineas de compras de gastos" esta activa, aparecera un campo de referencia adicional en cada linea.

## Gestionar la orden de compra

Una vez creada la orden de compra, usted podra:

a. **Ver detalles**: Revise los productos, cantidades, costos y totales de la orden.

b. **Recibir productos**: Vaya a la seccion de "Recepciones" del Punto de Venta para recibir los productos comprados. Vea el tutorial "Recibir compra".

c. **Pagar al proveedor**: Registre el pago (descargo) al proveedor desde la vista de detalles de la orden de compra.

d. **Imprimir**: Imprima la orden de compra utilizando las plantillas de impresion configuradas.

## Pagar una orden de compra (Descargo)

Para registrar el pago a un proveedor:

1. Desde el detalle de la orden de compra, seleccione la opcion de "Pagar".
2. Seleccione el metodo de descargo (forma de pago).
3. Coloque una referencia (opcional).
4. Verifique el monto a pagar.
5. Presione "Crear descargo".

## API (llamadas desde sistemas externos)

### Listar ordenes de compra (datatables)

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
  https://app.zauru.com/pos/purchases/datatables.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "draw": 0,
  "recordsTotal": 0,
  "recordsFiltered": 0,
  "data": []
}
```

### Ver orden de compra

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/1.json
  ```

Esto devolverá un JSON similar a este:
```json
{}
```

### Nueva orden de compra (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/new.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id": null,
    "zid": null,
    "id_number": "",
    "reference": null,
    "charge_term_id": 1,
    "authorized": false,
    "issue_date": "2026-08-06",
    "shipping_date": null,
    "delivery_date": null,
    "subtotal": "0.0",
    "discount": null,
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "0.0",
    "due": null,
    "purchaser_id": 2,
    "payee_id": null,
    "entity_id": 3,
    "receiver_id": null,
    "received": false,
    "received_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": null,
    "updater_id": null,
    "payment_expected_at": null,
    "paid": false,
    "paid_at": null,
    "memo": null,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "consolidate_id": null,
    "agency_id": 4,
    "import": false,
    "incoterm_destination": null,
    "origin": null,
    "transport_type": null,
    "forwarder": null,
    "incoterm_id": null,
    "created_at": null,
    "updated_at": null,
    "purchase_order_details_count": 0,
    "currency_id": null,
    "exchange_rate": null,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": null,
    "discharge_details_count": 0,
    "charges_count": 0,
    "taxable": false,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": null,
    "authorizer_id": null,
    "authorized_at": null,
    "not_included_vat": null,
    "exempt": false,
    "small_taxpayer": false,
    "external_image_url": null,
    "tax3": null,
    "tax4": null,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": null,
    "document_external_storage_certified_response": null,
    "pos": true,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  },
  "items": [
    {
      "id": 5,
      "zid": 6,
      "active": true,
      "stockable": true,
      "sellable": true,
      "manufacturable": false,
      "purchasable": true,
      "code": "H106",
      "ean13": "",
      "name": "Cajón Bematech, 5 posiciones de billetes, 6 posiciones de monedas; interfase RJ12 (para impresora de recibos), color negro",
      "image": {
        "url": "http://res.cloudinary.com/hurynnu8i/image/upload/v1636123240/item_espma78rfumoszhxyamy.png",
        "thumbnail_fill": {
          "url": "http://res.cloudinary.com/hurynnu8i/image/upload/b_rgb:fff,c_pad,g_center,h_80,w_80/v1636123240/item_espma78rfumoszhxyamy.png"
        }
      },
      "item_category_id": 7,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "",
      "reorder_point": null,
      "economic_order_quantity": null,
      "months_warranty": null,
      "entity_id": 3,
      "updater_id": 3,
      "created_at": "2021-11-05T14:40:40.137Z",
      "updated_at": "2022-05-10T19:44:20.686Z",
      "pays_vat": true,
      "tariff_rate": 0.0,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "product_type": 1,
      "payee_id": null,
      "average_cost": "0.0",
      "fifo_cost": "486.61",
      "lifo_cost": null,
      "extra_tax_1": 0.0,
      "extra_tax_2": 0.0,
      "quotable": true,
      "ecommerce": false,
      "image2": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image3": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image4": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image5": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "msrp": null,
      "tax1_use_msrp": false,
      "tax2_use_msrp": false,
      "vendor_code": null,
      "stocks_only_integer": true,
      "brand_id": null,
      "color": "#cccccc",
      "item_country_code_id": null,
      "youtube_video_url": null,
      "inventory_account_id": null,
      "master_item_id": null,
      "gemma_q4f16_embedding": "[-0.037078857,-0.057922363,-0.00077676773,0.01701355,0.020996094,0.028015137,-0.070495605,0.03881836,-0.012176514,-0.04800415,-0.005672455,-0.0006184578,-0.030731201,0.0040893555,0.031982422,-0.01071167,0.051208496,0.043273926,0.0077705383,-0.048065186,-0.022567749,-0.020355225,-0.05380249,0.011398315,0.05505371,0.026550293,-0.039093018,0.060424805,0.019592285,0.0058937073,0.010093689,-0.03062439,0.06048584,0.013694763,0.031341553,0.07458496,-0.003932953,-0.024353027,-0.017868042,-0.0848999,-0.015563965,0.08270264,-0.013198853,-0.0024528503,-0.028823853,-0.019241333,-0.00844574,0.00919342,0.006313324,0.068725586,0.023239136,0.022827148,-0.009422302,0.04055786,-0.004360199,-0.052886963,-0.008583069,-0.016296387,-0.062469482,-0.016937256,0.013404846,-0.03277588,0.02041626,0.009765625,-0.039489746,-0.034332275,-0.040496826,0.03302002,0.0048980713,0.10412598,0.023849487,0.0010519028,-0.011650085,0.021759033,0.10003662,0.12841797,-0.011749268,-0.024612427,0.020706177,0.018997192,-0.013679504,-0.032348633,-0.00970459,0.022903442,0.032440186,-0.010948181,-0.006549835,0.005130768,0.036712646,0.010772705,-0.0044059753,-0.0043563843,-0.0050582886,0.010124207,0.044403076,-0.020736694,-0.05633545,-0.00374794,0.025283813,0.014968872,-0.015296936,-0.031097412,0.010299683,-0.023605347,-0.038269043,0.020187378,-0.007762909,0.021896362,-0.02104187,0.05053711,-0.035247803,-0.03439331,0.015640259,0.019088745,0.0026721954,0.02861023,-0.09210205,0.043121338,0.012535095,-0.01260376,0.06945801,0.035125732,0.027999878,0.0023078918,-0.032165527,-0.0026893616,-0.048736572,-0.023895264,-0.03805542,0.0044670105,0.0102005005,0.076416016,-0.051879883,-0.013839722,-0.021469116,0.009162903,0.027374268,0.013320923,-0.00095033646,0.07354736,0.009735107,-0.02746582,-0.035247803,0.025268555,-0.054656982,-0.020233154,0.03253174,-0.018295288,-0.017593384,0.042999268,-0.011955261,0.049926758,0.059143066,-0.08001709,0.01939392,0.032440186,-0.0060043335,0.009902954,-0.046966553,0.022384644,-0.04940796,-0.036834717,0.06750488,-0.008148193,0.012466431,0.06390381,0.014808655,0.038024902,-0.0038261414,0.039154053,0.025939941,-0.05987549,0.0034503937,0.0013141632,0.005142212,0.0072288513,0.035003662,0.0011720657,-0.013877869,-0.05496216,-0.015625,0.091308594,0.012756348,0.09790039,0.019104004,0.008583069,-0.08081055,-0.045959473,0.017150879,-0.04940796,0.031921387,-0.013244629,-7.325411e-05,-0.00063705444,-0.010070801,-0.023162842,-0.0037117004,-0.017929077,0.018875122,0.04071045,0.020614624,0.022628784,0.009262085,0.049072266,-0.0014810562,-0.037902832,-0.019363403,-0.030715942,0.018127441,0.034942627,-0.0524292,-0.009994507,0.017913818,-0.029129028,0.039642334,-0.0211792,-0.027313232,0.006412506,-0.023345947,-0.030838013,0.0064926147,0.027160645,-0.060760498,-0.055541992,-0.011306763,0.036895752,-0.016159058,0.017593384,0.05996704,0.013847351,0.0010108948,-0.051452637,-0.032409668,-0.033294678,-0.062683105,-0.021774292,0.005317688,-0.025634766,0.013702393,0.030181885,-0.0036754608,0.0062942505,0.0435791,-0.04647827,0.06921387,-0.0052223206,0.011169434,-0.038726807,-0.004398346,0.01348114,0.017166138,-0.05001831,-0.002412796,-0.00076818466,0.008293152,-0.0055236816,0.013450623,0.009414673,0.033477783,0.017044067,-0.0418396,-0.058654785,0.026977539,-0.04232788,-0.03744507,-0.042633057,0.018737793,-0.01461792,0.0053138733,0.03503418,0.010025024,-0.024230957,0.04244995,0.011581421,0.02444458,-0.00667572,-0.043060303,0.024993896,-0.04736328,-0.03451538,-0.00983429,-0.020874023,-0.053253174,0.009117126,0.062347412,0.078125,-0.00022792816,-0.0005469322,0.016464233,-0.039978027,-0.07208252,-0.0052719116,-0.023117065,-0.035949707,-0.017410278,-0.0063209534,-0.049621582,-0.026031494,-0.0390625,0.038269043,0.08514404,-0.030166626,-0.00079870224,0.013427734,0.02067566,-0.0524292,0.05038452,-0.007858276,-0.09765625,0.01374054,0.03387451,-0.006511688,-0.061431885,-0.02885437,-0.0113220215,0.022155762,-0.016555786,0.0036735535,-0.00032925606,0.0005965233,-0.0071640015,-0.032592773,0.016082764,0.004638672,0.0029716492,-0.03149414,0.028076172,0.018356323,-0.08917236,0.06365967,-0.044006348,-0.012580872,-0.0048103333,0.04425049,-0.02003479,0.036254883,0.022827148,-0.03930664,-0.057373047,0.008163452,-0.0423584,0.030059814,0.005455017,-0.03100586,-0.09539795,0.013206482,-0.011192322,0.027114868,0.02482605,-0.069885254,-0.019012451,-0.05606079,0.031097412,-0.015899658,0.05255127,0.024719238,-0.039276123,0.06222534,-0.020706177,-0.027114868,-0.00806427,0.023544312,0.08862305,-0.010986328,-0.03869629,-0.06378174,0.0027751923,0.022003174,0.008522034,-0.0046844482,0.047790527,0.025375366,0.008659363,0.0109939575,0.02684021,0.049346924,-0.015640259,-0.021606445,-0.0061035156,0.037963867,0.033447266,-0.016540527,-0.016159058,-0.011154175,0.047546387,-0.009796143,0.03390503,-0.047088623,0.024917603,0.043670654,-0.038238525,0.044311523,0.01826477,-0.053009033,0.034576416,-0.052124023,0.025634766,-0.01727295,-0.041229248,0.028289795,0.02897644,-0.038116455,-0.046722412,-0.04815674,0.047729492,-0.06530762,0.01524353,0.007183075,-0.037353516,-0.012489319,-0.011810303,-0.0015821457,0.011650085,0.0051651,0.030456543,-0.030380249,0.028213501,-0.018814087,-0.013771057,0.065979004,0.035491943,0.02168274,0.037200928,0.02659607,-0.007381439,-0.04345703,0.009590149,-0.013137817,-0.025634766,-0.020050049,-0.031799316,-0.07183838,-0.014221191,0.05697632,-0.04321289,-0.05593872,-0.01876831,0.01663208,-0.03765869,-0.009437561,0.013618469,0.028945923,-0.013267517,0.028015137,-0.07092285,-0.06628418,0.051696777,0.015075684,0.026947021,0.015129089,-0.0065956116,0.0050964355,-0.009567261,0.004055023,0.034851074,-0.025787354,0.03616333,0.01777649,-0.0124435425,0.041534424,0.04559326,0.006439209,-0.016708374,-0.031585693,0.05392456,-0.032318115,0.025390625,-0.045074463,-0.09265137,0.04711914,-0.02848816,0.029800415,0.028060913,-0.030532837,0.041412354,0.012268066,0.01008606,-0.0124053955,0.0491333,0.049682617,0.036956787,-0.021377563,-0.017593384,0.047668457,0.009300232,-0.07336426,0.015319824,0.020309448,0.038513184,0.0074768066,0.04751587,-0.008682251,-0.02494812,-0.0129470825,0.02432251,0.01977539,0.06378174,0.012496948,0.055786133,0.06732178,0.008918762,-0.017440796,0.01576233,0.05831909,0.07287598,-0.052825928,0.0046463013,0.012702942,0.045288086,0.032440186,-0.0019874573,0.012237549,-0.059265137,-0.01486969,0.056854248,0.056854248,-0.069885254,-0.0041923523,0.002450943,0.035491943,-0.025787354,0.02230835,-0.0026416779,0.06939697,0.020950317,0.023651123,0.0022468567,-0.016204834,-0.05923462,0.015045166,-0.029327393,0.012252808,0.037261963,0.08673096,0.009391785,0.003293991,-0.041656494,0.015159607,-0.018692017,0.017959595,-0.016113281,-0.032409668,0.011238098,-0.013206482,0.037719727,-0.04660034,-0.06732178,-0.03564453,0.053375244,-0.090270996,-0.034820557,0.0022468567,-0.0065193176,-0.00010037422,-0.008003235,0.034301758,-0.036865234,-0.020462036,0.027755737,0.01626587,-0.011016846,0.015167236,0.007904053,0.04159546,-0.008781433,-0.0040245056,0.035949707,0.029541016,-0.043701172,0.008934021,-0.05126953,0.056396484,0.0836792,-0.03930664,0.0284729,0.029754639,0.04660034,0.083618164,-0.020935059,-0.034240723,0.049194336,0.0037956238,-0.010467529,0.01802063,0.04852295,-0.014572144,-0.0036373138,-0.01399231,-0.031707764,-0.0020999908,0.012718201,-0.0047721863,-0.024169922,0.089660645,-0.03414917,0.05130005,0.013923645,0.028808594,0.0803833,-0.0037631989,0.053100586,0.034118652,0.10229492,-0.03326416,0.01828003,-0.007762909,0.06311035,0.024032593,-0.07702637,0.010169983,8.237362e-05,0.04055786,-0.056518555,-0.010421753,0.0045928955,0.015640259,-0.015007019,0.008651733,0.04220581,-0.019058228,0.03503418,-0.008956909,-0.0052375793,0.028640747,0.030273438,-0.020431519,0.014091492,0.03503418,-0.037597656,0.011520386,0.055389404,0.0141067505,-0.021102905,0.0032997131,0.014602661,-0.017929077,-0.018920898,0.02368164,-0.0067253113,0.0057258606,0.011169434,-0.07305908,0.03152466,0.022735596,0.0032539368,0.011444092,-0.093688965,-0.01651001,-0.007545471,-0.0079956055,0.048309326,-0.0045776367,-0.054718018,-0.10974121,0.025970459,0.020828247,-0.044799805,-0.0019207001,0.0020961761,0.008026123,-0.0047073364,-0.026504517,-0.020996094,-0.03414917,0.029373169,0.028366089,-0.0010652542,-0.031951904,0.07733154,-0.01966858,0.03567505,0.042419434,0.02017212,-0.015655518,-0.004940033,0.011367798,0.07635498,-0.0041770935,-0.004722595,0.011497498,0.0385437,-0.051971436,-0.030654907,0.040222168,0.027816772,-0.0019216537,-0.007434845,-0.053741455,-0.04550171,0.022583008,-0.01876831,-0.046203613,0.0102005005,0.022598267,-0.035095215,0.023986816,-0.03869629,0.008682251,0.04864502,0.003047943,-0.02029419,-0.012779236,0.0038280487,0.0041999817,-0.02519226,-0.0026512146,-0.033355713,-0.0069084167,0.060791016,-0.03793335,-0.00819397,-0.038238525,-0.003358841,-0.00057029724,0.008666992,-0.0020141602,0.035095215,-0.0002937317,-0.043426514,-0.03326416,-0.013290405,-0.01058197,-0.006336212,-0.013221741,0.02949524,0.015975952,-0.05697632,0.036712646,-0.010032654,-0.008628845,-0.04046631,0.073791504,-0.02468872,-0.037841797,0.06781006,0.08972168,0.039245605,-0.023071289,-0.039276123,-0.02166748,0.023132324,-0.05291748,-0.043121338,-0.03375244,-0.01398468,0.0047912598,-0.08917236,-0.028808594,-0.03302002,0.023498535,0.020523071,0.038024902,-0.020874023,0.023086548,-0.051208496,-0.031204224,-0.049438477,-0.028396606,0.022109985,0.057037354,-0.008529663,0.043701172,0.011154175,-0.0357666,0.0154418945,-0.034576416,0.044555664,-0.044952393]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": [],
      "item_category": {
        "id": 7,
        "name": "Hardware",
        "notes": "",
        "updater_id": 3,
        "entity_id": 3,
        "created_at": "2017-08-29T16:30:21.921Z",
        "updated_at": "2017-08-29T16:30:21.921Z",
        "items_count": 24,
        "bundles_count": 0,
        "item_super_category_id": null,
        "color": "#ff0000",
        "image": {
          "url": null,
          "thumbnail_fill": {
            "url": null
          }
        },
        "zid": 8
      }
    },
    {
      "id": 9,
      "zid": 10,
      "active": true,
      "stockable": false,
      "sellable": true,
      "manufacturable": false,
      "purchasable": true,
      "code": "CINF",
      "ean13": "",
      "name": "Carga de información",
      "image": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "item_category_id": null,
      "measurement_unit": "",
      "weight": null,
      "volume": null,
      "description": "",
      "reorder_point": null,
      "economic_order_quantity": null,
      "months_warranty": null,
      "entity_id": 3,
      "updater_id": 11,
      "created_at": "2026-06-18T16:55:28.497Z",
      "updated_at": "2026-06-18T16:55:28.497Z",
      "pays_vat": true,
      "tariff_rate": 0.0,
      "pdf": {
        "url": null,
        "thumbnail": {
          "url": null
        }
      },
      "product_type": 1,
      "payee_id": null,
      "average_cost": null,
      "fifo_cost": null,
      "lifo_cost": null,
      "extra_tax_1": 0.0,
      "extra_tax_2": 0.0,
      "quotable": true,
      "ecommerce": false,
      "image2": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image3": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image4": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "image5": {
        "url": null,
        "thumbnail_fill": {
          "url": null
        }
      },
      "msrp": null,
      "tax1_use_msrp": false,
      "tax2_use_msrp": false,
      "vendor_code": "",
      "stocks_only_integer": true,
      "brand_id": null,
      "color": "#cccccc",
      "item_country_code_id": null,
      "youtube_video_url": "",
      "inventory_account_id": null,
      "master_item_id": null,
      "gemma_q4f16_embedding": "[-0.13745117,-0.008041382,0.030517578,-0.0038661957,-0.051208496,0.06964111,-0.018157959,0.014389038,0.031677246,-0.021011353,0.0058135986,0.016601562,0.02748108,-0.037628174,0.10028076,-0.005355835,0.024551392,0.059539795,-0.033477783,0.013328552,-0.014595032,0.004085541,-0.0625,-0.0021018982,-0.0034275055,0.035705566,0.009803772,-0.012008667,-0.022628784,-0.062286377,0.005821228,-0.0284729,0.032104492,0.040802002,0.014152527,0.01222229,0.0061454773,-0.095581055,0.031311035,-0.016159058,-0.015068054,0.03616333,-0.051086426,0.029418945,-0.047027588,-0.021514893,-0.044403076,0.024124146,0.031677246,0.019851685,-0.032684326,0.005382538,-0.01727295,0.021697998,-0.041992188,0.0016622543,-0.005214691,-0.039764404,-0.038085938,0.028900146,-0.017028809,0.014961243,-0.011978149,-0.03375244,0.06311035,-0.01828003,0.0048446655,0.011894226,0.019744873,0.14440918,0.048217773,-0.074645996,0.00030255318,-0.070495605,0.20861816,0.054473877,-0.027862549,-0.059326172,-0.041503906,0.003534317,0.029190063,0.054840088,-0.027008057,-0.0075035095,0.10736084,-0.0020065308,-0.004005432,0.03677368,0.02607727,-0.0064735413,0.028381348,-0.0038051605,0.011756897,0.030136108,0.0051956177,-0.05392456,-0.022842407,-0.019836426,0.0008215904,0.023666382,-0.03967285,0.013412476,0.0029354095,0.092285156,-0.008361816,-0.038116455,0.004016876,0.022521973,0.012687683,0.01386261,0.0064582825,-0.025482178,0.0065727234,-0.0713501,0.022079468,-0.02947998,-0.060516357,0.028137207,-0.017410278,0.037506104,0.037017822,0.0025806427,0.029296875,0.01965332,-0.018997192,-0.023742676,-0.06530762,0.021575928,-0.0051078796,-0.0135269165,0.02458191,0.043304443,-0.027877808,0.0385437,-0.029754639,-0.004878998,0.014373779,-0.021774292,0.001080513,0.010223389,-0.03540039,-0.02104187,-0.03225708,0.044036865,0.0022201538,-0.010536194,-0.03579712,0.01486969,-0.026535034,-0.033813477,0.06097412,0.008392334,0.052947998,-0.013061523,-9.649992e-05,-0.0066986084,0.010017395,-0.026260376,-0.03488159,-0.042114258,-0.062408447,-0.023361206,0.078308105,0.05697632,-0.002412796,0.01687622,0.080322266,0.009643555,-0.017700195,-0.050354004,-0.040618896,-0.04849243,0.026565552,-0.024902344,-0.0569458,0.03050232,0.009719849,0.06335449,-0.020431519,0.009429932,0.0104522705,0.043395996,-0.068359375,0.008079529,-0.0005431175,-0.0007004738,-0.009170532,-0.0051574707,0.051483154,-0.07763672,0.054595947,0.015975952,0.042144775,0.0020980835,-0.02204895,-0.037628174,0.066833496,0.009628296,-0.008934021,-0.018798828,0.007873535,-0.026550293,-0.034423828,-0.002401352,-0.05227661,-0.0030727386,-0.008483887,0.009780884,-0.022109985,0.0137786865,0.043914795,0.011856079,0.0037670135,-0.04321289,-0.011634827,-0.01713562,-0.048950195,-0.015975952,-0.012413025,0.043762207,0.006542206,0.03665161,0.025268555,-0.017929077,-0.03616333,0.038330078,-0.03778076,0.01626587,0.047027588,0.0077056885,0.04046631,-0.01121521,-0.008850098,-0.027755737,-0.03265381,0.05807495,-0.041809082,-0.0012559891,0.04559326,0.038970947,-0.053100586,-0.014884949,0.010650635,-0.028625488,0.038726807,-0.054626465,0.040130615,0.039489746,0.02809143,-0.012268066,0.006828308,0.06591797,0.00028252602,0.015014648,-0.002603531,0.06585693,0.032196045,0.019332886,-0.0011863708,0.0035324097,0.020645142,0.011230469,0.0018720627,0.006023407,0.044555664,0.03161621,0.012207031,0.013793945,-0.021713257,-0.043060303,-0.010047913,-0.0033683777,-0.03265381,-0.01676941,0.008605957,0.03640747,0.024246216,0.05166626,-0.025268555,-0.06347656,-0.005607605,0.0016889572,0.018463135,0.056121826,0.0109939575,0.03793335,-0.004802704,-0.02810669,-0.033050537,0.0019798279,-0.0014781952,0.032043457,0.037963867,0.06286621,-0.011871338,-0.0012998581,0.0033550262,-0.022109985,0.040374756,0.066223145,0.016738892,-0.056671143,-0.04043579,0.003917694,0.048980713,-0.06390381,0.06048584,-0.017745972,-0.03503418,0.04055786,-0.013336182,-0.013069153,-0.0010023117,-0.03149414,0.068847656,0.010604858,-0.002040863,0.008613586,-0.037994385,-0.015060425,0.025177002,-0.02407837,0.031082153,-0.024902344,0.0056610107,0.056365967,0.001493454,0.021621704,-0.09857178,0.074279785,0.016143799,-0.018707275,0.058258057,0.030776978,-0.029190063,0.064331055,-0.007904053,-0.002986908,-0.03756714,-0.024780273,-0.04220581,-0.03326416,0.018569946,-0.001750946,0.041870117,0.040863037,-0.020507812,0.009338379,0.051879883,-0.0075912476,0.033721924,-0.021514893,-0.008331299,0.0065231323,-0.019104004,-0.018737793,0.019119263,0.010375977,0.066345215,-0.0104904175,0.08465576,0.005065918,0.04385376,-0.05142212,0.013153076,-0.019256592,-0.019332886,-0.033172607,0.07751465,-0.053833008,0.038330078,-0.043914795,-0.02015686,-0.041992188,-0.038879395,-0.024887085,0.017318726,0.07342529,0.04611206,0.0084991455,-0.047454834,-0.042144775,-0.0385437,-0.025177002,0.0077400208,0.046325684,0.0670166,-0.0011749268,-0.06286621,0.0010271072,-0.03704834,0.0018596649,-0.031341553,-0.0009288788,-0.01977539,-0.018630981,0.057495117,0.020736694,0.025817871,-0.046203613,0.03289795,-0.04397583,0.045562744,-0.008331299,-0.00017535686,0.020477295,0.02810669,0.01210022,0.027404785,-0.101257324,-0.041259766,-0.045806885,-0.032806396,0.012756348,-0.013153076,-0.0060424805,0.03286743,0.025817871,-0.02470398,-0.00667572,-0.037994385,0.04336548,0.009338379,0.061706543,0.047302246,0.0021591187,-0.046905518,0.0060310364,-0.004901886,-0.021591187,0.00084638596,-0.024093628,0.05029297,0.022079468,0.02645874,-0.025512695,-0.03604126,-0.021820068,0.044403076,0.04437256,0.043945312,-0.09765625,-0.017456055,-0.008361816,0.0046653748,0.0050201416,-0.00242424,-0.0012683868,-0.003929138,0.05596924,0.03137207,0.053100586,0.06921387,-0.010131836,0.010528564,0.012580872,-0.047729492,0.0058555603,-0.029296875,0.014587402,-0.008430481,0.0070495605,0.011657715,-0.07019043,0.021713257,0.041259766,-0.029846191,-0.06719971,-0.07885742,0.023025513,-0.046081543,0.008430481,-0.019439697,0.038726807,-0.01058197,-0.010353088,0.012916565,-0.054260254,0.017425537,0.06085205,-0.015403748,0.03894043,-0.00063323975,-0.013381958,0.02659607,0.0155181885,-0.0027809143,0.022247314,0.032165527,0.07147217,-0.03062439,0.06506348,0.0259552,-0.005783081,0.04034424,0.033294678,-0.02357483,-0.03024292,-0.041748047,-0.011924744,-0.025161743,0.045410156,0.027954102,0.078308105,0.018981934,0.028656006,0.0113220215,-0.00085401535,-0.0017414093,-0.0574646,0.03463745,0.006340027,-0.026031494,0.0018939972,0.014518738,-0.02720642,-0.07409668,0.066345215,0.004360199,-0.010231018,0.06616211,0.019500732,0.0013237,0.012008667,-0.0026664734,0.053466797,0.0037021637,-0.00484848,-0.01146698,-0.018981934,0.00083732605,-0.019226074,0.012802124,0.017807007,-0.037994385,-0.05984497,-0.06390381,0.030273438,0.013923645,0.024719238,0.00806427,-0.019302368,0.022537231,0.010787964,0.020233154,-0.03616333,0.010772705,0.028396606,0.032836914,0.066589355,0.025009155,0.00018751621,-0.0058403015,0.072631836,0.008171082,0.032196045,-0.017105103,0.025863647,0.005882263,-0.022323608,-0.06695557,-0.01512146,-0.011154175,-0.022094727,0.04071045,-0.0025138855,0.011421204,-0.025146484,0.024520874,-0.00040984154,0.013191223,-0.018341064,0.054992676,0.008132935,-0.018447876,0.0126571655,0.02168274,-0.031585693,0.08380127,0.0016803741,0.015716553,0.027557373,0.077941895,0.045166016,-0.066833496,0.06781006,-0.012794495,0.030426025,0.036071777,0.01826477,-0.042938232,0.017623901,0.028793335,0.010917664,-0.009628296,-0.027633667,0.04623413,0.035888672,0.053955078,-0.051757812,-0.035491943,-0.062561035,-0.013511658,0.017242432,0.010604858,0.05441284,-0.004573822,0.017028809,0.045074463,0.061431885,-0.06390381,-0.024963379,-0.011657715,0.029556274,0.0066986084,0.07684326,-0.01927185,-0.00466156,0.037750244,-0.026184082,-0.0132369995,0.035339355,0.017868042,-0.027557373,0.003791809,-0.03591919,0.0008006096,-0.06518555,-0.023849487,-0.027633667,-0.0050086975,0.043640137,0.03829956,-0.0044555664,-0.012168884,0.012435913,0.025283813,0.0033035278,-0.005519867,-0.026931763,-0.0038871765,-0.020324707,-0.011413574,0.021255493,-0.02508545,0.01360321,-0.023040771,-0.013923645,0.027053833,0.0026187897,-0.021453857,0.07745361,0.0042648315,-0.048431396,0.01146698,0.00012886524,0.024902344,0.011161804,0.048950195,0.036102295,0.013763428,0.015670776,-0.011199951,0.03086853,0.02949524,-0.024261475,0.01033783,-0.022750854,-0.018325806,-0.012054443,-0.03274536,0.023117065,0.0034866333,-0.057739258,0.0028533936,0.0017318726,0.0037975311,0.024932861,-0.013916016,0.08093262,-0.025161743,-0.0035591125,-0.04348755,-0.05441284,-0.025863647,-0.06793213,0.033050537,-0.00073575974,-0.017028809,-0.03591919,-0.062561035,0.013763428,0.008171082,-0.021606445,0.042144775,-0.02949524,0.0077171326,0.018188477,0.009178162,0.018859863,-0.011505127,-0.01322937,0.09637451,0.0064888,0.0101623535,-0.027908325,-0.017501831,-0.02949524,0.04977417,0.010192871,-0.031173706,-0.041778564,0.0005569458,-0.05947876,0.026565552,0.0012464523,0.010505676,-0.039886475,-0.043273926,0.008308411,-0.0059394836,0.0032749176,0.04437256,-0.024765015,0.047058105,0.027557373,0.026779175,0.037261963,-0.066467285,-0.013046265,-0.005756378,-0.022994995,-0.009628296,-0.032226562,0.006832123,0.07232666,-0.0068206787,-0.046203613,0.00957489,0.070373535,-0.0019359589,0.007709503,0.025634766,-0.008155823,-0.040649414,-0.054870605,-0.020980835,0.028152466,-0.024307251,0.07684326,0.00015354156,-0.0019512177,0.0058403015,-0.014480591,-0.046936035,-0.00014781952,-0.040802002,0.027236938,-0.031219482,-0.014190674,-0.0066490173,0.016098022,0.07556152,-0.030075073,0.030899048,-0.042938232,-0.0014238358,0.05050659]",
      "force_as_good_for_document_external_storage_service": false,
      "extra_description": null,
      "tags": []
    }
  ]
}
```

### Nueva compra de gastos (prellenado)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/new_expense_purchase.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "id": null,
    "zid": null,
    "id_number": "",
    "reference": null,
    "charge_term_id": 1,
    "authorized": false,
    "issue_date": "2026-08-06",
    "shipping_date": null,
    "delivery_date": null,
    "subtotal": "0.0",
    "discount": null,
    "tax1": null,
    "tax2": null,
    "shipping": null,
    "total": "0.0",
    "due": null,
    "purchaser_id": 2,
    "payee_id": null,
    "entity_id": 3,
    "receiver_id": null,
    "received": false,
    "received_at": null,
    "voider_id": null,
    "voided": false,
    "voided_at": null,
    "creator_id": null,
    "updater_id": null,
    "payment_expected_at": null,
    "paid": false,
    "paid_at": null,
    "memo": null,
    "image": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "consolidate_id": null,
    "agency_id": 4,
    "import": false,
    "incoterm_destination": null,
    "origin": null,
    "transport_type": null,
    "forwarder": null,
    "incoterm_id": null,
    "created_at": null,
    "updated_at": null,
    "purchase_order_details_count": 0,
    "currency_id": null,
    "exchange_rate": null,
    "other_charges": null,
    "image_reception": {
      "url": null,
      "standard": {
        "url": null
      }
    },
    "invoice": null,
    "discharge_details_count": 0,
    "charges_count": 0,
    "taxable": false,
    "pdf": {
      "url": null,
      "thumbnail": {
        "url": null
      }
    },
    "contract_id": null,
    "authorizer_id": null,
    "authorized_at": null,
    "not_included_vat": null,
    "exempt": false,
    "small_taxpayer": false,
    "external_image_url": null,
    "tax3": null,
    "tax4": null,
    "resolution": null,
    "resolution_date": null,
    "authorized_serial": null,
    "electronic_authorization_supporting_document": null,
    "electronic_tax_document": null,
    "uuid": null,
    "document_external_storage_certified_response": null,
    "pos": true,
    "income_taxes_withheld": "0.0",
    "vat_withheld": "0.0",
    "document_external_storage_certified_response_for_voiding": null,
    "shipment_reference": null
  },
  "accounts": [
    {
      "id": 5,
      "zid": 6,
      "active": true,
      "code": "",
      "name": "abogado",
      "description": "",
      "value": "312.5",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": 7,
      "currency_id": 2,
      "account_type_id": 8,
      "entity_id": 3,
      "updater_id": 3,
      "created_at": "2012-12-06T16:05:14.000Z",
      "updated_at": "2026-05-16T02:21:53.903Z",
      "splits_count": 29,
      "entries_count": 1,
      "cost": false,
      "color": "#CCCCCC"
    },
    {
      "id": 9,
      "zid": 10,
      "active": true,
      "code": "",
      "name": "abono al seguro del vehículo",
      "description": "",
      "value": "-8179.78",
      "credit_limit": null,
      "liquid": false,
      "reconciliable": false,
      "account_group_id": 11,
      "currency_id": 2,
      "account_type_id": 2,
      "entity_id": 3,
      "updater_id": 3,
      "created_at": "2023-01-05T21:51:24.944Z",
      "updated_at": "2026-05-16T02:21:53.875Z",
      "splits_count": 12,
      "entries_count": 14,
      "cost": false,
      "color": "#CCCCCC"
    }
  ]
}
```

### Crear orden de compra

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "purchase_order": {
      "reference": "prueba",
      "charge_term_id": "1",
      "purchaser_id": "1",
      "taxable": "1",
      "purchase_order_details_attributes": {
        "0": {
          "item_id": "1",
          "booked_quantity": "5",
          "unit_cost": "100"
        }
      }
    }
  }' \
  https://app.zauru.com/pos/purchases.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "purchase_order": {
    "issue_date": [
      "no puede estar en blanco"
    ],
    "payee_info": [
      "no puede estar en blanco"
    ]
  },
  "purchase_order_details": []
}
```

### Nueva descargo (pago al proveedor)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/pos/purchases/1/new_discharge.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "369566",
  "zid": "9",
  "id_number": null,
  "date": "2026-03-09",
  "reference": "TRANSF. 307112394",
  "receipt": null,
  "amount": "3538.83",
  "memo": null,
  "voided": false,
  "voided_at": null,
  "payee_id": "1957270",
  "entity_id": "1303",
  "creator_id": "1274",
  "voider_id": null,
  "discharge_method_id": "2979",
  "created_at": "2026-03-09 20:18:26.671889",
  "updated_at": "2026-03-09 20:18:26.671889",
  "discharge_details_count": "2",
  "image": null,
  "draft": false,
  "authorizer_id": null,
  "authorized_at": null,
  "external_image_url": null
}
```

### Crear descargo (pago al proveedor)

```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "discharge": {
      "payment_method_id": "1",
      "reference": "pago prueba"
    }
  }' \
  https://app.zauru.com/pos/purchases/create_discharge.json
  ```

Esto devolverá un JSON similar a este:
```json
{
  "id": "369566",
  "zid": "9",
  "id_number": null,
  "date": "2026-03-09",
  "reference": "TRANSF. 307112394",
  "receipt": null,
  "amount": "3538.83",
  "memo": null,
  "voided": false,
  "voided_at": null,
  "payee_id": "1957270",
  "entity_id": "1303",
  "creator_id": "1274",
  "voider_id": null,
  "discharge_method_id": "2979",
  "created_at": "2026-03-09 20:18:26.671889",
  "updated_at": "2026-03-09 20:18:26.671889",
  "discharge_details_count": "2",
  "image": null,
  "draft": false,
  "authorizer_id": null,
  "authorized_at": null,
  "external_image_url": null
}
```
