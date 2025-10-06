const { exec } = require('child_process');
const path = require('path');

function generatePDF() {
    const htmlPath = path.join(__dirname, 'Sprint6_Q3_Report.html');
    const pdfPath = path.join(__dirname, 'Sprint6_Q3_Report.pdf');
    
    const command = `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="${pdfPath}" --print-to-pdf-no-header --run-all-compositor-stages-before-draw --virtual-time-budget=5000 "file://${htmlPath}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        if (stderr) {
            console.error('Stderr:', stderr);
            return;
        }
        console.log('✅ PDF generado exitosamente: Sprint6_Q3_Report.pdf');
    });
}

generatePDF();
