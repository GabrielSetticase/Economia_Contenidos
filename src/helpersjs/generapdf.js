import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generarPDF = async () => {
    const elemento = document.getElementById('componente-a-pdf');
    const escala = window.devicePixelRatio;
    const canvas = await html2canvas(elemento, { scale: escala });
    const imageData = canvas.toDataURL('image/png');
    const anchoPDF = 210;
    const altoPDF = 297;
    const pdf = new jsPDF('p', 'mm', [anchoPDF, altoPDF]);
    pdf.addImage(imageData, 'PNG', 0, 0,);
    pdf.save('EquivalenciaPEA.pdf');
};
