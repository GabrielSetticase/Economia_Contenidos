import { generarPDF } from '../helpersjs/generapdf';


export const Equivalencia = () => {
    return (
        <div>
            <div id='componente-a-pdf'>
                <p>cuerpo del examen</p>
            </div>
            <div>
                <button onClick={generarPDF}>Descargar PDF</button>
            </div>
        </div>
    );
};
