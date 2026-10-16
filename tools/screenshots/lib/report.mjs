import fs from 'node:fs';
import path from 'node:path';
import ExcelJS from 'exceljs';
import { captureFingerprint } from './results.mjs';

export async function writeMissingReport({ repoRoot, sources, report, results, settings, out }) {
  const book = new ExcelJS.Workbook();
  const sheet = book.addWorksheet('Pendientes');
  sheet.columns = [
    { header: 'Documento', key: 'docPath', width: 65 },
    { header: 'Línea', key: 'line', width: 8 },
    { header: 'Imagen', key: 'imageRef', width: 65 },
    { header: 'URL del manual', key: 'manualUrl', width: 65 },
    { header: 'URL de origen', key: 'sourceUrl', width: 65 },
    { header: 'URL de staging', key: 'targetUrl', width: 65 },
    { header: 'Motivo', key: 'cause', width: 90 },
  ];
  const config = fs.readFileSync(path.join(repoRoot, 'docusaurus.config.js'), 'utf8');
  const siteUrl = config.match(/\burl:\s*['"]([^'"]+)['"]/)?.[1] || 'https://docs.zauru.com';
  const basePath = config.match(/\bbaseUrl:\s*['"]([^'"]+)['"]/)?.[1] || '/';
  const missing = new Set(report.missing.map((r) => r.docPath + ':' + r.line));
  const current = new Map(sources.targets.map((r) => [r.imageRef, r]));
  for (const row of sources.rows) {
    const result = results.images[row.imageRef];
    const issues = sources.issues.filter((i) => i.docPath === row.docPath && i.line === row.line);
    const causes = issues.map((i) => i.message);
    if (missing.has(row.docPath + ':' + row.line)) causes.push('falta el archivo de imagen');
    const target = current.get(row.imageRef);
    const stale = result && (!target || result.fingerprint !== captureFingerprint(target, settings));
    if (stale) causes.push('resultado anterior; pendiente de capturar con el enlace y configuración actuales');
    else {
      if (result?.cause) causes.push(result.cause);
      if (result?.visualReview === 'rejected') causes.push('revisión visual rechazada');
    }
    if (!causes.length) continue;
    const manualPath = row.docPath.replace(/^docs\//, '').replace(/(?:\/index)?\.mdx?$/, '');
    const manualUrl = new URL(basePath.replace(/\/$/, '') + '/' + manualPath, siteUrl).href;
    const item = sheet.addRow({ ...row, manualUrl, cause: [...new Set(causes)].join('; ') });
    for (const key of ['manualUrl', 'sourceUrl', 'targetUrl']) if (item.getCell(key).value) item.getCell(key).value = { text: item.getCell(key).value, hyperlink: item.getCell(key).value };
  }
  // Los errores de parseo pueden no producir ninguna fila de imagen.
  for (const issue of sources.issues.filter((i) => i.code === 'document')) sheet.addRow({ ...issue, cause: issue.message });
  sheet.getRow(1).font = { bold: true };
  sheet.views = [{ state: 'frozen', ySplit: 1 }];
  sheet.autoFilter = { from: 'A1', to: `G${Math.max(1, sheet.rowCount)}` };
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await book.xlsx.writeFile(out);
}
