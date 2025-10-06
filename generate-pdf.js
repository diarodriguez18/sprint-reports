const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'Sprint6_Q3_Report.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Wait for Chart.js to render
    await page.waitForTimeout(2000);
    
    // Generate PDF
    const pdf = await page.pdf({
        path: 'Sprint6_Q3_Report.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '15mm',
            bottom: '20mm',
            left: '15mm'
        },
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #666;">Sprint 6 - Q3 2025 | Generado el 6 de Octubre, 2025</div>'
    });
    
    await browser.close();
    console.log('✅ PDF generado exitosamente: Sprint6_Q3_Report.pdf');
}

generatePDF().catch(console.error);
