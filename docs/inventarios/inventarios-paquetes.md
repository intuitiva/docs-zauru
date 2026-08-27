---
title: "Paquetes"
sidebar_label: "Paquetes"
sidebar_position: 6
---

Si usted arma combos para la venta, como un kit escolar o una promoción de temporada, los paquetes le evitan buscar cada producto por separado en cada factura. Un paquete agrupa varios productos para venderlos como una sola unidad, y Zauru calcula por usted cuántos paquetes puede armar con el stock que tiene. Este tutorial le muestra cómo crearlos, configurarlos y consultar sus existencias.

## ¿Qué es un paquete?

Un paquete (bundle) es un conjunto de productos que se venden juntos como una unidad: piense en un kit escolar o en un combo promocional que arma con varios ítems. Zauru soporta dos tipos de paquetes:

1. **Paquetes estáticos**: Conjunto predefinido de productos específicos con cantidades fijas.
2. **Paquetes dinámicos (por categoría)**: Paquete que se arma automáticamente con productos de una categoría, permitiendo flexibilidad en la composición según disponibilidad.

## Crear un paquete estático

Los pasos para crear un paquete en Zauru son los siguientes:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".

![imagen1](/img/inventarios/inventarios-paquetes-1.jpg)

Le aparecerán los opciones para crear un nuevo paquete, los campos que debe llenar son los siguientes:

a. Coloque el código del paquete.

b. Coloque el código de barras (EAN13) para que pueda ser escaneado el producto.

c. Coloque el nombre del paquete.

d. Seleccione el primer producto que llevara el paquete y coloque la cantidad. Para agregar mas productos presione "+".

![imagen2](/img/inventarios/inventarios-paquetes-2.png)

Cuando termine de agregar todos los productos que desea que lleve el paquete, presione "Crear paquete".

![imagen3](/img/inventarios/inventarios-paquetes-3.jpg)

Le aparecerá un mensaje de éxito en la pantalla notificándole que se creo el paquete exitosamente. Ahora podrá seleccionar este paquete al momento de hacer una reservación en el inventario. Para poder vender el paquete hay que ponerle un precio sugerido, este tutorial lo podrá en encontrar en "Ventas".

## Crear un paquete dinámico (por categoría)

Un paquete dinámico permite que los productos que lo componen se seleccionen automáticamente de una categoría de ítems. Esto es útil cuando:

- Los productos específicos pueden variar según disponibilidad.
- Quiere ofrecer un paquete que se adapte al stock disponible en una bodega.
- Maneja productos similares que pueden sustituirse entre sí.

Para crear un paquete dinámico:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Crear nuevo paquete".
4. Active la opción de "Paquete por categoría" (category_bundle).
5. Seleccione la categoría de ítems que agrupará los productos del paquete.
6. Los productos se seleccionarán automáticamente de esa categoría.

### Consultar ítems dinámicos con stock

Para paquetes dinámicos, puede consultar qué ítems de la categoría tienen stock disponible en una bodega específica:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar el paquete dinámico.
4. El sistema mostrará automáticamente los ítems de la categoría que tienen existencias disponibles.

## Configuración adicional del paquete

Al crear o editar un paquete, puede configurar opciones adicionales:

- **Código EAN13**: Código de barras estándar para identificar el paquete en puntos de venta.
- **Unidad de medida**: Especifique la unidad de medida del paquete (unidad, caja, kit, etc.).
- **Comercio electrónico (Ecommerce)**: Marque el paquete como disponible para venta en línea.
- **Imágenes del paquete**: Agregue imágenes para identificar visualmente el paquete.

## Agregar imágenes a un paquete

Para agregar o modificar las imágenes de un paquete:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Buscar el paquete que desea editar.
4. Seleccionar "Editar imágenes".
5. Cargue las imágenes deseadas.
6. Presione "Actualizar imágenes".

## Exportar paquetes

Puede exportar el listado completo de paquetes a formato Excel:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Exportar".

Esto descargará un archivo XLS con todos los paquetes, sus componentes y cantidades.

## Importar paquetes

Puede importar paquetes desde un archivo:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Importar paquetes".
4. Seleccione el archivo con los datos de los paquetes.
5. Presione "Importar".

## Nube de etiquetas (Tag Cloud)

En la vista de paquetes, puede filtrar por etiquetas usando la nube de etiquetas:

1. Ir a "Inventarios".
2. Seleccionar "Paquetes".
3. Seleccionar "Nube de etiquetas".

Esto mostrará las etiquetas disponibles para filtrar los paquetes.

## Existencias de paquetes

Las existencias de paquetes se consultan desde la pantalla "Existencias", en la pestaña "Existencias de paquetes". Zauru calcula el disponible de cada paquete a partir del stock de sus componentes y muestra el desglose por componente al abrir el detalle; la exportación a Excel está disponible en la misma pantalla. El procedimiento completo está en [Existencias de paquetes](/inventarios/existencias/existencias-de-paquetes).

Con el paquete creado, ya puede seleccionarlo en una reservación y venderlo como una sola unidad, mientras Zauru descuenta cada componente de su bodega. Para cerrar el ciclo, asigne el precio sugerido del paquete en el módulo de Ventas.

## API (llamadas desde sistemas externos)

### Obtener todos los paquetes
Devuelve la lista de paquetes (bundles). Puede filtrar por etiqueta usando el parámetro `tag`.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles.json
```

Esto devolverá un JSON similar a este:
```json
[
  {
    "id": 1,
    "active": true,
    "code": "COMBO-1",
    "ean13": null,
    "name": "Combo Oficina",
    "description": "Paquete de útiles",
    "entity_id": 2,
    "updater_id": 3,
    "created_at": "2026-08-06T04:13:42.654Z",
    "updated_at": "2026-08-06T04:13:42.654Z",
    "bundle_details_count": 2,
    "pays_vat": true,
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "item_category_id": null,
    "quotable": true,
    "ecommerce": false,
    "sellable": true,
    "weight": null,
    "volume": null,
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
    "color": "#CCCCCC",
    "zid": 4,
    "measurement_unit": null,
    "purchasable": false,
    "force_as_service_for_document_external_storage_service": false,
    "category_bundle": false,
    "item_country_code_id": null,
    "youtube_video_url": null,
    "gemma_q4f16_embedding": null,
    "extra_description": null
  },
  {
    "id": 5,
    "active": true,
    "code": "base",
    "ean13": "",
    "name": "Modulo Base",
    "description": "",
    "entity_id": 2,
    "updater_id": 6,
    "created_at": "2014-11-05T22:58:16.287Z",
    "updated_at": "2014-11-05T22:58:16.287Z",
    "bundle_details_count": 4,
    "pays_vat": true,
    "image": {
      "url": null,
      "thumbnail_fill": {
        "url": null
      }
    },
    "item_category_id": 7,
    "quotable": true,
    "ecommerce": false,
    "sellable": true,
    "weight": null,
    "volume": null,
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
    "color": "#CCCCCC",
    "zid": 2,
    "measurement_unit": null,
    "purchasable": false,
    "force_as_service_for_document_external_storage_service": false,
    "category_bundle": false,
    "item_country_code_id": null,
    "youtube_video_url": null,
    "gemma_q4f16_embedding": "[-0.0068092346,-0.02760315,-0.018051147,-0.005718231,0.0289917,0.007873535,-0.012329102,-0.015731812,-0.0036449432,-0.019515991,0.051849365,-0.03161621,0.012023926,0.020385742,0.0096206665,0.016555786,0.0007715225,0.08123779,-0.008422852,-0.0071792603,-0.021942139,-0.010139465,0.050811768,-0.023757935,0.05960083,-0.036254883,0.012275696,0.06738281,-0.015045166,-0.027359009,0.028335571,-0.05102539,0.008079529,0.030349731,-0.014312744,0.06341553,-0.013061523,-0.026489258,0.003709793,-0.003047943,-0.0068473816,0.04067993,-0.0044441223,0.013641357,0.02192688,-0.03387451,-0.064208984,0.045074463,0.027633667,0.024490356,-0.011909485,0.007045746,-0.034698486,0.01537323,-0.047424316,-0.0463562,-0.031585693,-0.0463562,-0.05078125,-0.005203247,-0.048980713,0.0026569366,-0.020446777,0.0284729,-0.004711151,0.020217896,-0.013458252,-0.0010652542,0.02961731,0.08862305,-0.0073051453,0.03604126,-0.027816772,0.014793396,0.09423828,0.119506836,-0.03778076,-0.008033752,-0.009719849,0.02734375,-0.042633057,-0.030380249,-0.04815674,0.00623703,0.08026123,-0.025619507,-0.019042969,0.020111084,0.033111572,-0.021835327,0.03475952,-0.02986145,-0.0129470825,-0.0049209595,0.00031733513,0.011108398,-0.02067566,-0.041290283,0.038848877,0.0029392242,0.013877869,-0.004432678,-0.017700195,-0.04598999,-0.027542114,0.010757446,0.026992798,0.042297363,-0.0057907104,0.055847168,-0.06500244,-0.0023231506,-0.019088745,-0.031951904,-0.037506104,0.0025310516,-0.023712158,0.033813477,-0.008407593,0.041015625,0.010887146,-0.016448975,-0.00023162365,-0.010520935,-0.0030975342,-0.014266968,-0.068603516,0.011993408,-0.061950684,-0.0050849915,-0.027236938,0.07006836,-0.032470703,-0.033843994,-0.005771637,0.04559326,0.028747559,0.08135986,-0.009117126,0.032989502,-0.028320312,-0.056121826,0.034423828,0.003112793,0.024612427,-0.021850586,0.018081665,0.045318604,-0.03289795,0.048034668,-0.0020103455,0.037475586,0.025024414,-0.0056648254,0.014808655,0.013725281,0.024963379,-0.014717102,-0.037353516,0.022506714,-0.066589355,-0.051361084,0.0513916,-0.013404846,-0.03967285,0.041625977,-0.017288208,0.06933594,-0.045959473,0.037872314,0.029418945,-0.020904541,0.019104004,0.019012451,-0.026535034,0.02658081,0.029647827,-0.0040740967,-0.08886719,-0.028808594,0.008255005,0.04611206,0.013885498,0.03353882,-0.035858154,0.07550049,-0.001502037,0.0119018555,0.04837036,-0.019943237,-0.06939697,0.03842163,-0.01600647,-0.061920166,0.010650635,-0.042266846,-0.051208496,0.030136108,-0.004234314,0.07122803,-0.017654419,-0.0049362183,0.047912598,-0.018829346,0.005508423,0.017318726,-0.049041748,0.015640259,-0.026275635,-0.002735138,-0.059143066,0.01687622,-0.012001038,0.007247925,-0.02154541,-0.052459717,-0.011070251,0.016677856,-0.019165039,-0.02658081,0.023132324,-0.036224365,-0.01361084,0.031921387,0.013618469,-0.005214691,-0.0051231384,-0.016204834,-0.036193848,0.0078048706,0.052734375,-0.052764893,-0.07281494,-0.047546387,-0.030593872,-0.0033397675,-0.04827881,0.0044174194,0.03616333,0.031143188,-0.034362793,-0.01486969,-0.026290894,-0.011444092,0.041137695,-0.0079956055,0.016799927,-0.027770996,0.039398193,-0.007598877,-0.0015163422,-0.03918457,-0.0082092285,0.018341064,-0.049957275,0.020446777,-0.009155273,0.007461548,-0.0289917,-0.023620605,-0.040649414,-0.051696777,-0.0035324097,0.02432251,-0.05053711,-0.0006546974,-0.014526367,0.03253174,-0.025817871,0.0057296753,0.05307007,-0.039245605,0.08148193,0.05657959,0.059143066,-0.032562256,0.023773193,-0.013183594,0.015991211,-0.04071045,-0.07348633,0.03967285,-0.051513672,-0.008934021,0.021469116,0.020645142,0.01637268,-0.05041504,-0.0012311935,-0.027770996,-0.026855469,0.013725281,0.0178833,-0.07293701,0.014862061,0.0546875,-0.04498291,0.02999878,0.019805908,0.02243042,0.07873535,-0.0057907104,0.07550049,0.0066337585,0.012916565,-0.07745361,0.03265381,0.033966064,-0.061828613,-0.051940918,-0.015296936,-0.004837036,-0.0015668869,-0.013771057,-0.05456543,0.018066406,-0.012161255,-0.040039062,0.037841797,0.00642395,-0.034210205,0.013664246,-0.0015869141,-0.007080078,0.030761719,-0.028182983,0.00011301041,0.042175293,0.0034828186,0.04006958,0.017440796,0.0038661957,0.0003554821,-0.019729614,-0.00605011,0.051239014,0.051086426,-0.020309448,-0.03829956,-0.04220581,0.009010315,3.3974648e-05,-0.0184021,-0.008155823,-0.026809692,0.066345215,-0.016830444,0.006958008,-0.05090332,0.015037537,0.032226562,-0.03463745,0.045318604,0.017852783,-0.05239868,0.002658844,0.03604126,0.0056419373,0.029342651,-0.022644043,-0.004131317,0.06768799,0.00053691864,-0.019088745,0.021377563,0.018661499,0.014694214,0.036987305,0.08862305,0.035888672,0.015434265,0.026565552,-0.068359375,0.046295166,-0.006526947,0.024383545,-0.048217773,0.044311523,0.07299805,-0.02192688,-0.032562256,0.010009766,-0.053588867,-0.024291992,0.001709938,0.0010080338,0.019638062,-0.018569946,-0.053253174,0.032714844,-0.040222168,-0.0030117035,-0.028961182,-0.05783081,0.05432129,-0.064819336,0.024917603,0.04067993,-0.02671814,-0.06384277,-0.018615723,-0.015434265,-0.06173706,-0.010665894,0.0050354004,-0.042907715,-0.010643005,0.03152466,-0.0044059753,-0.0960083,0.00983429,-0.01675415,0.02444458,0.0074882507,-0.018798828,-0.008468628,0.013893127,0.013053894,-0.041534424,0.00081825256,0.044128418,0.02935791,-0.029449463,0.09484863,0.026870728,-0.025314331,-0.0029125214,0.033355713,0.024414062,-0.010063171,-0.053833008,-0.07672119,-0.0074043274,-0.0090789795,0.023788452,-0.07861328,-0.045135498,0.03866577,-0.046691895,0.025604248,0.042144775,-0.046783447,0.02468872,-0.032836914,-0.011756897,-0.046875,-0.013832092,0.0635376,0.023498535,-0.019638062,0.027999878,0.027648926,-0.0914917,0.007896423,0.06549072,0.028198242,0.016021729,0.010299683,-0.046722412,-0.040130615,0.0023155212,-0.011108398,-0.03378296,-0.025253296,-0.034973145,0.018661499,-0.014945984,0.047454834,-0.035339355,-0.061676025,-0.0019264221,-0.007980347,0.022613525,0.03552246,0.0121536255,0.0013122559,-0.0134887695,-0.036071777,-0.037200928,0.036865234,0.054595947,0.039855957,-0.004169464,-0.001499176,0.017593384,-0.038360596,0.020584106,0.04800415,-0.0096206665,0.048065186,-0.036376953,0.02192688,0.018112183,-0.0023555756,0.076538086,0.021148682,0.07366943,0.055755615,0.007835388,-0.04537964,0.021896362,0.004386902,-0.011352539,-0.044189453,0.07727051,0.04824829,-0.015853882,-0.04107666,0.02758789,-0.05621338,0.018157959,0.015777588,-0.015945435,-0.00024139881,-0.00041127205,0.018859863,-0.017807007,0.0137786865,-0.009033203,-0.013648987,-0.01625061,0.05419922,-0.056274414,0.0440979,0.01586914,-0.0026855469,0.0546875,0.04827881,0.011650085,0.022628784,-0.0758667,0.046203613,0.0034046173,0.049316406,0.09057617,-0.05303955,-0.0418396,0.00041031837,0.11456299,0.016601562,-0.000497818,0.0038642883,0.042236328,-0.0059318542,-0.0017766953,0.02116394,0.029083252,0.009223938,-0.018859863,-0.0023593903,-0.00017106533,0.032073975,-0.018157959,-0.0055274963,-0.010604858,-0.042297363,-0.030654907,-0.015106201,0.022888184,-0.05126953,0.03753662,0.05090332,0.0032043457,-0.018875122,-0.0069618225,-0.009742737,-0.07092285,0.010192871,0.008934021,-0.0395813,-0.040985107,0.0491333,0.074523926,0.019042969,0.04095459,-0.01612854,0.023208618,0.019744873,0.026138306,0.015541077,0.019241333,0.0034675598,0.05517578,0.019927979,0.0052261353,-0.010810852,0.023468018,0.033203125,-0.017120361,0.07318115,0.025100708,-0.06915283,-0.042419434,0.028427124,-0.06530762,-0.030273438,-0.013198853,0.034851074,0.015991211,-0.06561279,0.04119873,-0.021270752,0.04611206,-0.015670776,0.05819702,-0.013420105,0.07873535,0.014976501,-0.061157227,0.06451416,0.0067634583,0.057922363,-0.017578125,-0.0042381287,0.068603516,0.046875,-0.012527466,-0.0418396,0.043945312,0.033325195,0.02482605,0.010749817,0.068359375,0.0064811707,0.0072250366,-0.022232056,0.013328552,-0.04324341,-0.049346924,-0.013053894,0.04953003,0.04071045,0.01309967,-0.0055656433,0.0042877197,0.01737976,0.005405426,-0.0060653687,-0.05630493,-0.0357666,0.015945435,-0.0048942566,0.04916382,0.032073975,-0.045684814,-0.02470398,-0.020507812,0.025146484,-0.06262207,0.027908325,0.064208984,-0.04019165,-0.0056381226,-0.107543945,0.07043457,-0.005886078,-0.03616333,-0.013954163,0.041503906,-0.0051002502,-0.036468506,0.018569946,0.0060272217,-0.01184845,0.012786865,-0.032806396,0.0064811707,-0.0040664673,-0.0023593903,-0.029632568,-0.021224976,0.06311035,-0.026870728,0.07299805,0.039154053,0.05871582,0.00712204,-0.043548584,0.028930664,-0.0031280518,-0.008003235,-0.0132369995,-0.011039734,0.040100098,0.021759033,0.02128601,0.037109375,-0.022888184,0.020019531,-0.011131287,0.015449524,-0.00919342,0.049560547,-0.021759033,0.014205933,-9.995699e-05,0.011688232,-0.0149002075,-0.013084412,-0.0023002625,-0.018951416,-0.04095459,-0.0031375885,-0.02684021,-0.0088272095,-0.057128906,-0.034454346,0.023452759,0.012550354,0.025238037,-0.019500732,-0.01424408,-0.015510559,0.006263733,0.0181427,0.0362854,-0.002878189,0.026245117,-0.04031372,-0.03390503,0.03643799,-0.025466919,0.022018433,-0.0026168823,0.040649414,0.043701172,-0.0037250519,0.113464355,-0.037109375,0.04284668,-0.052337646,0.017990112,-0.004005432,-0.00046277046,0.012840271,0.0053367615,0.06707764,-0.07537842,0.00079250336,0.0038433075,0.021392822,-0.020767212,-0.008972168,-0.02532959,0.06542969,0.03439331,-0.08239746,-0.008216858,-0.01121521,-0.033203125,0.0068092346,0.0066452026,-0.021514893,0.031707764,0.036621094,0.00566864,-0.08984375,0.058288574,-0.046966553,0.0024757385,-0.09289551,-0.008171082,0.02696228,-0.0050697327,0.078308105,0.013389587,-0.013549805,0.0006046295]",
    "extra_description": null
  }
]
```

### Obtener el detalle de un paquete
Devuelve los datos del paquete, sus componentes (bundle_details) y los formularios asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34004",
  "active": true,
  "code": "ARM-CLOSET-ARM",
  "ean13": null,
  "name": "ARMONIA-CLOSET-ARMADO",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-03-10 13:24:35.435826",
  "updated_at": "2026-03-10 13:24:35.435826",
  "bundle_details_count": "6",
  "pays_vat": true,
  "image": null,
  "item_category_id": null,
  "quotable": true,
  "ecommerce": true,
  "sellable": true,
  "weight": null,
  "volume": null,
  "image2": null,
  "image3": null,
  "image4": null,
  "image5": null,
  "color": "#cccccc",
  "zid": "34",
  "measurement_unit": null,
  "purchasable": false,
  "force_as_service_for_document_external_storage_service": false,
  "category_bundle": false,
  "item_country_code_id": null,
  "youtube_video_url": null,
  "gemma_q4f16_embedding": null,
  "extra_description": null
}
```

### Crear un paquete
Crea un nuevo paquete con sus componentes y cantidades.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle": {
      "code": "COMBO-1",
      "name": "Combo Oficina",
      "description": "Paquete de útiles",
      "bundle_details_attributes": {
        "0": { "item_id": "2", "quantity": "2" },
        "1": { "item_id": "3", "quantity": "1" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles.json
```

Esto devolverá un JSON similar a este:
```json
{
  "code": [
    "ya ha sido tomado"
  ]
}
```

### Actualizar un paquete
Actualiza los datos y componentes de un paquete existente.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X PATCH \
  -d '{
    "bundle": {
      "name": "Combo Oficina actualizado",
      "bundle_details_attributes": {
        "0": { "id": "1", "quantity": "3" }
      }
    }
  }' \
  https://app.zauru.com/inventories/bundles/1.json
```

Esto devolverá un JSON similar a este:
```json
{
  "id": "34004",
  "active": true,
  "code": "ARM-CLOSET-ARM",
  "ean13": null,
  "name": "ARMONIA-CLOSET-ARMADO",
  "description": null,
  "entity_id": "1303",
  "updater_id": "1274",
  "created_at": "2026-03-10 13:24:35.435826",
  "updated_at": "2026-03-10 13:24:35.435826",
  "bundle_details_count": "6",
  "pays_vat": true,
  "image": null,
  "item_category_id": null,
  "quotable": true,
  "ecommerce": true,
  "sellable": true,
  "weight": null,
  "volume": null,
  "image2": null,
  "image3": null,
  "image4": null,
  "image5": null,
  "color": "#cccccc",
  "zid": "34",
  "measurement_unit": null,
  "purchasable": false,
  "force_as_service_for_document_external_storage_service": false,
  "category_bundle": false,
  "item_country_code_id": null,
  "youtube_video_url": null,
  "gemma_q4f16_embedding": null,
  "extra_description": null
}
```

### Eliminar un paquete
Elimina un paquete. Solo es posible si no tiene movimientos asociados.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X DELETE \
  https://app.zauru.com/inventories/bundles/1.json
```

En caso de exito, retorna un codigo HTTP `204 No Content` (sin cuerpo).

### Consultar ítems dinámicos con stock de un paquete
Para paquetes dinámicos (por categoría), devuelve los ítems de la categoría que tienen stock disponible en una bodega específica.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  https://app.zauru.com/inventories/bundles/get_dynamic_items_with_stock.json?agency_id=1&bundle_id=2
```

Esto devolverá un JSON similar a este:
```json
[]
```

Los endpoints de existencias de paquetes (`bundle_stocks`) se documentan en [Existencias de paquetes](/inventarios/existencias/existencias-de-paquetes).

### Importar paquetes
Importa paquetes desde un archivo. El cuerpo de la petición debe incluir el archivo a importar.
```bash
curl -v \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -H "X-User-Email: prueba@zauru.com" \
  -H "X-User-Token: XSDFKK09238487DLFS" \
  -X POST \
  -d '{
    "bundle_import": {
      "file": "archivo_de_importacion.xlsx"
    }
  }' \
  https://app.zauru.com/inventories/bundles/bundle_imports.json
```

Esto devolverá un JSON similar a este:
```json
{}
```
