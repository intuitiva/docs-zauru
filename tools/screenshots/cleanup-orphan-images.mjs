#!/usr/bin/env node
/** Informe de archivos sin referencias. Nunca borra imágenes automáticamente. */
import { REPO_ROOT } from './lib/env.mjs';
import { loadSources } from './lib/sources.mjs';
import { auditSources } from './lib/inventory.mjs';
const report = auditSources(REPO_ROOT, loadSources(REPO_ROOT, 'https://zauru.herokuapp.com'));
for (const ref of report.orphans) console.log(ref);
console.log(`${report.orphans.length} archivos sin referencias en el manual. Revisar antes de eliminarlos.`);
