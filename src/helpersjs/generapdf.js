import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generarPDF = async () => {
    const elemento = document.getElementById('componente-a-pdf'); // Reemplaza 'componente-a-pdf' con el ID de tu componente
    const escala = window.devicePixelRatio; // Obtiene el factor de escala del dispositivo
    const canvas = await html2canvas(elemento, { scale: escala });
    const imageData = canvas.toDataURL('image/png');
    const anchoPDF = 210; // Ancho en milímetros para formato A4
    const altoPDF = 297; // Alto en milímetros para formato A4
    const pdf = new jsPDF('p', 'mm', [anchoPDF, altoPDF]);
    pdf.addImage(imageData, 'PNG', 0, 0,); // Escala el PDF si es necesario
    pdf.save('EquivalenciaPEA.pdf');
};
