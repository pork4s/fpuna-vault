const fs = require('fs');
const { PDFParse } = require('pdf-parse');
const path = require('path');

const pdfFiles = [
    'Unidad 1 -Fuerzas y Campos Eléctricos.pdf',
    'Unidad 2 - Potencial Eléctrico.pdf',
    'Unidad 3 - Circuitos de Corriente Continua.pdf'
];

async function extractTextFromPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const parser = new PDFParse();
    const data = await parser.parseBuffer(dataBuffer);
    return data.text || '';
}

function extractFormulas(text) {
    const lines = text.split('\n');
    const formulas = [];
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.match(/[=∑∫∂∇×·±∞√∑∏∫]/) && trimmed.length > 0) {
            formulas.push(trimmed);
        }
    }
    
    return formulas;
}

async function main() {
    let allFormulas = {};
    
    for (const pdfFile of pdfFiles) {
        const filePath = path.join(__dirname, pdfFile);
        console.log(`Processing: ${pdfFile}`);
        
        try {
            const text = await extractTextFromPDF(filePath);
            const formulas = extractFormulas(text);
            allFormulas[pdfFile] = formulas;
            console.log(`Found ${formulas.length} formulas in ${pdfFile}`);
        } catch (error) {
            console.error(`Error processing ${pdfFile}:`, error.message);
        }
    }
    
    let mdContent = '# Resumen de Fórmulas - F2\n\n';
    
    for (const [pdfFile, formulas] of Object.entries(allFormulas)) {
        const title = pdfFile.replace('.pdf', '');
        mdContent += `## ${title}\n\n`;
        
        if (formulas.length > 0) {
            for (const formula of formulas) {
                mdContent += `- ${formula}\n`;
            }
        } else {
            mdContent += '_No se encontraron fórmulas específicas_\n';
        }
        
        mdContent += '\n---\n\n';
    }
    
    fs.writeFileSync('Fórmulas F2.md', mdContent, 'utf8');
    console.log('\nArchivo "Fórmulas F2.md" creado exitosamente');
}

main().catch(console.error);
