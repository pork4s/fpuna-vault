import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfFiles = [
    'Unidad 1 -Fuerzas y Campos Eléctricos.pdf',
    'Unidad 2 - Potencial Eléctrico.pdf',
    'Unidad 3 - Circuitos de Corriente Continua.pdf'
];

async function extractTextFromPDF(filePath) {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const data = new Uint8Array(fs.readFileSync(filePath));
    const doc = await pdfjsLib.getDocument({ data }).promise;
    let fullText = '';
    
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map(item => item.str);
        fullText += strings.join(' ') + '\n';
    }
    
    return fullText;
}

function extractFormulas(text) {
    const lines = text.split('\n');
    const formulas = [];
    
    // Buscar patrones de fórmulas específicas
    const formulaPatterns = [
        /𝑞\s*=\s*[±𝑛𝑒]/,
        /𝐹\s*=\s*[𝐾𝑞𝑄]/,
        /𝐸\s*=\s*[𝐾𝑞]/,
        /Φ\s*=\s*[𝐸𝐴]/,
        /𝑉\s*=\s*[𝐾𝑄]/,
        /𝐶\s*=\s*[𝑄𝑉]/,
        /𝑊\s*=\s*[∫]/,
        /𝑇\s*=\s*[½𝑚𝑣]/,
        /𝑈\s*=\s*[𝐾𝑞𝑄]/
    ];
    
    for (const line of lines) {
        const trimmed = line.trim();
        // Buscar líneas que contengan símbolos matemáticos
        if (trimmed.match(/[=∑∫∂∇×·±∞√∑∏∫]/) && 
            trimmed.match(/[A-Za-z]/) && 
            trimmed.length > 5 &&
            !trimmed.includes('http') &&
            !trimmed.includes('www') &&
            !trimmed.includes('Fuente')) {
            formulas.push(trimmed);
        }
    }
    
    return formulas;
}

function extractKeyFormulas(text) {
    const keyFormulas = [];
    
    // Buscar fórmulas específicas por nombre o contexto
    const patterns = [
        { name: 'Ley de Coulomb', pattern: /𝐹\s*=\s*𝐾\s*𝑞1\s*𝑞2\s*\/\s*𝑟2/ },
        { name: 'Campo Eléctrico', pattern: /𝐸\s*=\s*𝐾\s*𝑞\s*\/\s*𝑟2/ },
        { name: 'Flujo Eléctrico', pattern: /Φ\s*=\s*𝐸\s*⋅\s*𝐴/ },
        { name: 'Ley de Gauss', pattern: /Φ\s*=\s*∮\s*𝐸\s*⋅\s*𝑑𝐴\s*=\s*𝑞\s*\/\s*𝜖0/ },
        { name: 'Potencial', pattern: /𝑉\s*=\s*𝐾\s*𝑄\s*\/\s*𝑟/ },
        { name: 'Capacitancia', pattern: /𝐶\s*=\s*𝑄\s*\/\s*𝑉/ },
        { name: 'Energía Cinética', pattern: /𝑇\s*=\s*½\s*𝑚\s*𝑣2/ },
        { name: 'Densidad de Carga', pattern: /[𝜌σλ]\s*=\s*[𝑄]\s*\/\s*[𝑉𝐴𝑙]/ }
    ];
    
    const lines = text.split('\n');
    for (const line of lines) {
        for (const p of patterns) {
            if (line.match(p.pattern)) {
                keyFormulas.push({ name: p.name, formula: line.trim() });
            }
        }
    }
    
    return keyFormulas;
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
            // Tomar solo las primeras 10 fórmulas más relevantes
            const topFormulas = formulas.slice(0, 10);
            for (const formula of topFormulas) {
                mdContent += `- ${formula}\n`;
            }
            if (formulas.length > 10) {
                mdContent += `- ... y ${formulas.length - 10} fórmulas más\n`;
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
