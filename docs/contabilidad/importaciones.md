---
title: "Importaciones"
sidebar_label: "Importaciones"
sidebar_position: 6
---

Este tutorial explica como importar datos masivamente al modulo de contabilidad de Zauru mediante archivos CSV.

## Importacion de cuentas contables

Permite cargar masivamente cuentas contables desde un archivo CSV. Util para cuando se esta configurando la empresa por primera vez y se necesita migrar el catalogo de cuentas desde otro sistema.

### Pasos para importar cuentas

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas".
3. Hacer clic en "Importar Cuentas".
4. Seleccionar el archivo CSV con el formato requerido.
5. Hacer clic en "Importar".

El sistema procesara el archivo y creara las cuentas contables automaticamente. Se mostrara un mensaje con la cantidad de cuentas importadas exitosamente.

## Importacion de transacciones (partidas contables)

Permite cargar masivamente transacciones contables desde un archivo CSV. Util para migrar historial contable desde otros sistemas.

### Pasos para importar transacciones

1. Ir a "Contabilidad".
2. Seleccionar "Transacciones".
3. Hacer clic en "Importar Transacciones".
4. Seleccionar el archivo CSV con el formato requerido.
5. Hacer clic en "Importar".

El sistema procesara el archivo y creara las transacciones. Si alguna fila no puede ser importada, se mostrara un mensaje indicando cuantas filas no se pudieron procesar correctamente.

## Importacion de grupos de cuentas

Permite cargar masivamente grupos de cuentas desde un archivo CSV.

### Pasos para importar grupos de cuentas

1. Ir a "Contabilidad".
2. Seleccionar "Cuentas", luego la pestana "Grupo de Cuentas".
3. Hacer clic en "Importar".
4. Seleccionar el archivo CSV.
5. Hacer clic en "Importar".

### Formato del CSV para grupos de cuentas

El archivo CSV debe contener las siguientes columnas:
- `code`: codigo del grupo de cuenta
- `name`: nombre del grupo
- `description`: descripcion
- `account_type_id`: ID del tipo de cuenta (1=Activo, 2=Pasivo, 3=Gastos, 4=Ingresos, 5=Capital)
- `currency_id`: ID de la moneda

La primera fila del archivo se considera encabezado y se omite durante la importacion.
