#!/usr/bin/env node
/**
 * Sanitize personal information in JSON blocks within modified markdown docs.
 * Replaces names, emails, phones, addresses, tax IDs, and remaps numeric IDs to 1, 2, 3...
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const STRING_REPLACEMENTS = [
  // Person names
  ['Luis Pedro Sarti Paz', 'Usuario Ejemplo Uno'],
  ['Luis Pedro Sarti', 'Usuario Ejemplo Uno'],
  ['Julio Enrique Perez Gudiel', 'Empleado Ejemplo Dos'],
  ['Leonel Velasquez', 'Juan Perez'],
  ['"first_name\\":\\"Leonel\\"', '"first_name\\":\\"Juan\\"'],
  ['"last_name\\":\\"Velasquez\\"', '"last_name\\":\\"Perez\\"'],
  ['"first_name":"Leonel"', '"first_name":"Juan"'],
  ['"last_name":"Velasquez"', '"last_name":"Perez"'],
  ['"name": "Brian"', '"name": "Carlos"'],

  // Company / entity names
  ['INTUITIVA, SOCIEDAD ANONIMA', 'Empresa Ejemplo, S.A.'],
  ['INTUITIVASOCIEDADANONIMA', 'EMPRESAEJEMPLO'],
  ['Intuitiva, S.A.', 'Empresa Ejemplo, S.A.'],
  ['Kurago SRL', 'Cliente Ejemplo, SRL'],
  ['Texmo S.A.', 'Cliente Ejemplo, S.A.'],
  ['Cetanos, S.A.', 'Proveedor Ejemplo A, S.A.'],
  ['Denta, S.A.', 'Proveedor Ejemplo B, S.A.'],
  ['Krezco', 'Empresa Demo'],

  // Emails
  ['sartip@gmail.com', 'usuario@ejemplo.com'],
  ['sartip@zauru.com', 'vendedor@ejemplo.com'],
  ['julio@zauru.com', 'empleado@ejemplo.com'],
  ['leonel@zauru.com', 'cliente@ejemplo.com'],
  ['ogaldez@texmo.com.gt', 'contacto@ejemplo.com'],
  ['stewart.brian@gmail.com', 'invitado@ejemplo.com'],
  ['contabilidad4@rzmcorp.com', 'contabilidad@ejemplo.com'],
  ['info@glcorporacion.com', 'info@ejemplo.com'],
  ['bodega@kreaspacios.com', 'bodega@ejemplo.com'],
  ['info@krezco.com.gt', 'info@ejemplo.com'],
  ['www.dentasonrisas.com', 'www.ejemplo.com'],
  ['alto@bajo.com', 'cliente@ejemplo.com'],

  // Phones
  ['41514565', '5555-0001'],
  ['47590080', '5555-0002'],
  ['40108307', '5555-0003'],
  ['2434-7711', '5555-0004'],
  ['2320-5600 Ext. 1', '5555-0005'],
  ['2305-0900', '5555-0006'],
  ['2363-2660', '5555-0007'],
  ['32223323', '5555-0008'],
  ['51335931', '5555-0009'],
  ['2329-3992', '5555-0010'],

  // Addresses
  [
    'Km 21.5 carretera a el salvador cumbres de la arboleda manzana 30 casa 9',
    'Calle Ejemplo 123, Zona 10',
  ],
  ['15 av. A 14-71 Prados del Tabacal II', 'Avenida Ejemplo 456, Zona 15'],
  ['5 Avenida 19-96, zona 14 ', '5 Avenida Ejemplo 19-96, Zona 14'],
  ['"address_1\\":\\"5 calle\\"', '"address_1\\":\\"Calle Ficticia 10\\"'],
  ['"address_1":"5 calle"', '"address_1":"Calle Ficticia 10"'],

  // Tax IDs / identification
  ['29923549', '12345678'],
  ['8005046-8', '1234567-8'],
  ['2403 82684 0101', '1234 56789 0101'],
  ['2403826840101', '1234567890101'],
  ['2496346511401', '1234567890101'],
  ['201004450870', '123456789012'],
  ['8005046-8 | Intuitiva, S.A. # 6646-4658', '1234567-8 | Empresa Ejemplo, S.A. # 5555-0000'],

  // Bank / legal rep
  ['024-0016215-6', '000-0000000-0'],
  ['"legal_representative_name": "Usuario Ejemplo Uno"', '"legal_representative_name": "Representante Legal Ejemplo"'],
  ['"legal_representative_identification": "1234 56789 0101"', '"legal_representative_identification": "1234 56789 0101"'],
  ['"legal_representative_birthday": "1983-09-20"', '"legal_representative_birthday": "1990-01-01"'],
  ['"birthday": "1983-09-20"', '"birthday": "1990-01-01"'],

  // IP / tokens in embedded JSON
  ['181.209.233.94', '192.168.1.1'],
  ['97NyJA125yynTqwrrsSU', 'TOKEN_EJEMPLO_123'],
  ['wc_order_YDusWSEaReqbI', 'wc_order_EJEMPLO001'],
  ['wc_order_LhBShwgzs0JMf', 'wc_order_EJEMPLO002'],

  // HTML snippets in JSON
  [
    '<a title="12345678" href="/purchases/vendors/348">Usuario Ejemplo Uno</a>',
    '<a title="12345678" href="/purchases/vendors/1">Usuario Ejemplo Uno</a>',
  ],
  [
    'cuentas por pagar Luis Pedro Sarti',
    'cuentas por pagar Usuario Ejemplo',
  ],
  ['"external_storage_service_name": "INTUITIVA"', '"external_storage_service_name": "EMPRESA_EJEMPLO"'],
  [
    '"additional_worker_id": "1084518234 -1627224- RL1108646739 -3297752-"',
    '"additional_worker_id": "1000000001 -1000002- RL1000000003 -1000004-"',
  ],
  ['intuitiva.biz', 'ejemplo.com'],
  ['8005046-8 | Intuitiva, S.A. # 6646-4658', '1234567-8 | Empresa Ejemplo, S.A. # 5555-0000'],
  ['Cetanos Las Charcas', 'Referencia Ejemplo'],
  ['2256 15517 0101', '2345 67890 0101'],
  ['180277923', '987654321'],
  ['12173851', '87654321'],
  ['2566185-K', '1234567-K'],
  ['7539876-1', '1111111-1'],
  ['726536-0', '2222222-0'],
  ['api@zauru.com', 'api@ejemplo.com'],
  ['vendedor@zauru.com', 'vendedor@ejemplo.com'],
  ['"birthday": "1980-08-19"', '"birthday": "1990-01-01"'],
];

const ID_KEY_PATTERN =
  /"(id|[_a-z]*_id|zid|customer_id|parent_id|product_id|variation_id|creator_id|updater_id|user_id|entity_id|agency_id|membership_id|account_id|vendor_id|client_id|employee_id|item_id|order_id|invoice_id|project_id|category_id|cost_center_id|supervisor_id|employee_category_id|payee_id|beneficiary_id|warehouse_id|currency_id|entity_type_id|country_id|distributor|selected_entity_id|number|instance_id|entry_id)":\s*(\d+)/g;

const HREF_ID_PATTERN = /(\/(?:purchases\/vendors|accounting\/accounts|sales\/clients|employees|items|orders|invoices|projects|warehouses|agencies)\/)(\d+)/g;

function applyStringReplacements(text) {
  let result = text;
  for (const [from, to] of STRING_REPLACEMENTS) {
    result = result.split(from).join(to);
  }
  return result;
}

function remapIdsInJsonBlock(jsonText) {
  const idMap = new Map();
  let nextId = 1;

  function mapId(value) {
    if (!idMap.has(value)) {
      idMap.set(value, nextId++);
    }
    return idMap.get(value);
  }

  let result = jsonText.replace(ID_KEY_PATTERN, (match, key, numStr) => {
    const num = parseInt(numStr, 10);
    if (num <= 3 && ['id', 'zid'].includes(key)) {
      return match;
    }
    return `"${key}": ${mapId(num)}`;
  });

  result = result.replace(HREF_ID_PATTERN, (match, prefix, numStr) => {
    const num = parseInt(numStr, 10);
    return `${prefix}${mapId(num)}`;
  });

  // Remaining standalone large IDs in embedded escaped JSON strings
  result = result.replace(/\\"id\\":(\d+)/g, (match, numStr) => {
    const num = parseInt(numStr, 10);
    if (num <= 3) return match;
    return `\\"id\\":${mapId(num)}`;
  });

  result = result.replace(/\\"customer_id\\":(\d+)/g, (match, numStr) => {
    const num = parseInt(numStr, 10);
    if (num <= 3) return match;
    return `\\"customer_id\\":${mapId(num)}`;
  });

  result = result.replace(/\\"product_id\\":(\d+)/g, (match, numStr) => {
    const num = parseInt(numStr, 10);
    if (num <= 3) return match;
    return `\\"product_id\\":${mapId(num)}`;
  });

  result = result.replace(/\\"parent_id\\":(\d+)/g, (match, numStr) => {
    const num = parseInt(numStr, 10);
    return `\\"parent_id\\":${num === 0 ? 0 : mapId(num)}`;
  });

  return result;
}

function sanitizeContent(content) {
  const parts = content.split(/(```json[\s\S]*?```)/g);

  return parts
    .map((part, index) => {
      if (index % 2 === 0) {
        return part;
      }

      const fenceMatch = part.match(/^```json\n?([\s\S]*?)```$/);
      if (!fenceMatch) return part;

      let jsonBlock = fenceMatch[1];
      jsonBlock = applyStringReplacements(jsonBlock);
      jsonBlock = remapIdsInJsonBlock(jsonBlock);

      return '```json\n' + jsonBlock + '```';
    })
    .join('');
}

function getModifiedFiles() {
  const output = execSync('git diff --name-only', {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  return output
    .trim()
    .split('\n')
    .filter((f) => f.endsWith('.md'));
}

const files = getModifiedFiles();
let changed = 0;

for (const file of files) {
  const fullPath = resolve(repoRoot, file);
  const original = readFileSync(fullPath, 'utf8');
  const sanitized = sanitizeContent(original);

  if (sanitized !== original) {
    writeFileSync(fullPath, sanitized, 'utf8');
    changed++;
    console.log(`Sanitized: ${file}`);
  }
}

console.log(`\nDone. ${changed} of ${files.length} files updated.`);
