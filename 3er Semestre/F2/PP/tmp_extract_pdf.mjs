import fs from 'fs';
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
const filePath = 'Unidad 1 -Fuerzas y Campos Eléctricos.pdf';
const data = new Uint8Array(fs.readFileSync(filePath));
const doc = await pdfjsLib.getDocument({ data }).promise;
let out = '';
for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    let pageText = '';
    for (const it of content.items) {
        pageText += it.str;
        pageText += it.hasEOL ? '\n' : ' ';
    }
    out += `\n===== PAGE ${i} =====\n` + pageText;
}
fs.writeFileSync('tmp_unidad1.txt', out, 'utf8');
console.log('pages:', doc.numPages, 'chars:', out.length);
