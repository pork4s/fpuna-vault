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

function extractKeyFormulas(text) {
    const formulas = new Map();
    
    // Definir fórmulas clave por buscar
    const keyPatterns = [
        { name: 'Carga elemental', pattern: /𝑒\s*=\s*1,6\s*×\s*10\s*−19\s*𝐶/ },
        { name: 'Cuantización de carga', pattern: /𝑞\s*=\s*±\s*𝑛𝑒/ },
        { name: 'Ley de Coulomb', pattern: /𝐹\s*=\s*𝐾\s*𝑞1\s*𝑞2\s*\/\s*𝑟2|𝐹\s*=\s*𝐾\s*𝑞1\s*𝑞2\s*𝑟2/ },
        { name: 'Campo eléctrico puntual', pattern: /𝐸\s*=\s*𝐾\s*𝑞\s*\/\s*𝑟2|𝐸\s*=\s*𝐾\s*𝑞\s*𝑟2/ },
        { name: 'Flujo eléctrico', pattern: /Φ\s*=\s*𝐸\s*⋅\s*𝐴|Φ\s*=\s*𝐸𝐴𝑐𝑜𝑠𝜃/ },
        { name: 'Ley de Gauss', pattern: /∮\s*𝐸\s*⋅\s*𝑑𝐴\s*=\s*𝑞\s*\/\s*𝜖0|Φ\s*=\s*𝑞\s*\/\s*𝜖0/ },
        { name: 'Densidad volumétrica', pattern: /𝜌\s*=\s*𝑄\s*\/\s*𝑉/ },
        { name: 'Densidad superficial', pattern: /𝜎\s*=\s*𝑄\s*\/\s*𝐴/ },
        { name: 'Densidad lineal', pattern: /𝜆\s*=\s*𝑄\s*\/\s*𝑙/ },
        { name: 'Energía cinética', pattern: /𝑇\s*=\s*½\s*𝑚\s*𝑣2|𝑇\s*=\s*1\s*2\s*𝑚𝑣2/ },
        { name: 'Trabajo eléctrico', pattern: /𝑊\s*=\s*∫\s*𝐹\s*⋅\s*𝑑𝑟/ },
        { name: 'Energía potencial', pattern: /𝑈\s*=\s*𝐾\s*𝑞𝑄\s*\/\s*𝑟|𝑈\s*=\s*𝐾𝑞𝑄\s*𝑟/ },
        { name: 'Potencial eléctrico', pattern: /𝑉\s*=\s*𝐾\s*𝑄\s*\/\s*𝑟|𝑉\s*=\s*𝐾𝑄\s*𝑟/ },
        { name: 'Diferencia de potencial', pattern: /∆𝑉\s*=\s*−\s*∫\s*𝐸\s*⋅\s*𝑑𝑠/ },
        { name: 'Campo-potencial', pattern: /𝐸\s*=\s*−\s*𝑑𝑉\s*\/\s*𝑑𝑠/ },
        { name: 'Capacitancia', pattern: /𝐶\s*=\s*𝑄\s*\/\s*𝑉/ },
        { name: 'Capacitor placas paralelas', pattern: /𝐶\s*=\s*𝜖0\s*𝐴\s*\/\s*𝑑/ },
        { name: 'Energía capacitor', pattern: /𝑈\s*=\s*½\s*𝐶\s*𝑉2|𝑈\s*=\s*½\s*𝑄\s*𝑉/ },
        { name: 'Ley de Ohm', pattern: /𝑉\s*=\s*𝐼\s*𝑅|∆𝑉\s*=\s*𝐼\s*𝑅/ },
        { name: 'Resistencia', pattern: /𝑅\s*=\s*𝜌\s*𝑙\s*\/\s*𝐴|𝑅\s*=\s*𝑙\s*\/\s*𝜎𝐴/ },
        { name: 'Potencia eléctrica', pattern: /𝑃\s*=\s*𝐼\s*𝑉|𝑃\s*=\s*𝐼2\s*𝑅/ },
        { name: 'Resistencia serie', pattern: /𝑅𝑒𝑞\s*=\s*𝑅1\s*\+\s*𝑅2/ },
        { name: 'Resistencia paralelo', pattern: /1\s*\/\s*𝑅𝑒𝑞\s*=\s*1\s*\/\s*𝑅1\s*\+\s*1\s*\/\s*𝑅2/ },
        { name: 'Ley de Kirchhoff nodos', pattern: /∑\s*𝐼𝑒𝑛𝑡𝑟𝘢𝑑𝑎\s*=\s*∑\s*𝐼𝑠𝑎𝑙𝑖𝑑𝑎/ },
        { name: 'Ley de Kirchhoff mallas', pattern: /∑\s*𝜀\s*=\s*∑\s*𝐼\s*𝑅/ },
        { name: 'Constante de tiempo RC', pattern: /𝜏\s*=\s*𝑅\s*𝐶/ },
        { name: 'Carga en RC', pattern: /𝑞\s*=\s*𝑄𝑓\s*\(\s*1\s*−\s*𝑒\s*−\s*𝑡\s*\/\s*𝑅𝐶\s*\)/ },
        { name: 'Corriente en RC', pattern: /𝑖\s*=\s*𝐼0\s*𝑒\s*−\s*𝑡\s*\/\s*𝑅𝐶/ }
    ];
    
    const lines = text.split('\n');
    for (const line of lines) {
        for (const p of keyPatterns) {
            if (line.match(p.pattern) && !formulas.has(p.name)) {
                // Extraer solo la fórmula, no todo el texto
                const match = line.match(p.pattern);
                if (match) {
                    formulas.set(p.name, match[0]);
                }
            }
        }
    }
    
    return Array.from(formulas.entries());
}

async function main() {
    let mdContent = '# Resumen de Fórmulas - F2\n\n';
    
    for (const pdfFile of pdfFiles) {
        const filePath = path.join(__dirname, pdfFile);
        const title = pdfFile.replace('.pdf', '');
        console.log(`Processing: ${pdfFile}`);
        
        try {
            const text = await extractTextFromPDF(filePath);
            const formulas = extractKeyFormulas(text);
            
            mdContent += `## ${title}\n\n`;
            
            if (formulas.length > 0) {
                for (const [name, formula] of formulas) {
                    mdContent += `- **${name}:** ${formula}\n`;
                }
            } else {
                mdContent += '_Fórmulas en el archivo PDF_\n';
            }
            
            mdContent += '\n---\n\n';
            console.log(`Found ${formulas.length} key formulas in ${pdfFile}`);
        } catch (error) {
            console.error(`Error processing ${pdfFile}:`, error.message);
        }
    }
    
    fs.writeFileSync('Fórmulas F2.md', mdContent, 'utf8');
    console.log('\nArchivo "Fórmulas F2.md" creado exitosamente');
}

main().catch(console.error);
