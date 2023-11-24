import "../Styles/Acordeones.css"

export const Unidad2 = () => {
    const estiloTexto = {
        overflow: 'hidden',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap'
    };

    return (
        <>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Clase Nº 1: Visiones sobre el rol del Estado en la economía
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Desde la conformación de los estado-nacion la participación del Estado en la economía como un agente más entre los trabajadores y las empresas ha sido materia de discusión. Lo cierto es que el status-quo en la economía sólo es puesto a discusión posteriormente a la sucesión de una crisis económica: nadie cuestionaba el liberalismo sino hasta después de la crisis de 1930, así como tampoco se discutía la participación del Estado sino hasta la crisis del petróleo de 1973. A nivel local, nadie cuestionaba la convertibilidad de los años 90` sino hasta el colapso del sistema en 2001 con el recordado estallido socio-económico. A grandes rasgos, existen distintas cosmovisiones respecto a cuál debería ser la participación del Estado en la economía, señalaremos 3 (tres): <i>liberalismo, keynesianismo y socialismo</i>: </p>
                            <h6>Liberalismo</h6>
                            <p>Esta sería dentro del desarrollo histórico del capitalismo la primera cosmovisión, básicamente plantea que es Estado <u>no debe</u> participar en la economía sino sólamente para la provisión de <strong>bienes públicos</strong> en tanto que el resto de la actividad económica debe ser dirigida exclusivamente por el sector privado en base a las leyes oferta y demanda del mercado.</p>
                            <div className="recuadro">
                                <p>Los bienes públicos son aquellos bienes que ya sea por la escala de la inversión o por razones de interés económico, el sector privado no se ocupa de producir. Se caracterizan por: </p>
                                <ul><strong>No hay competencia/rivalidad en su consumo: </strong>Esto significa que el hecho de que consuma una persona, no implica que otro no lo pueda consumir (no se agota por el consumo)</ul>
                                <ul><strong>No se puede excluir a alguien de su consumo: </strong>Es decir, cualquier persona lo puede consumir y acceder sin restricciones</ul>
                                <p>Ejemplos de bienes públicos: </p>
                                <ul>Seguridad: por ejemplo si hay un policia en la calle, este brinda seguridad en la cuadra a los que transitan; todos gozan de este servicio (no se excluye a nadie ni nadie se queda sin ella por el hecho de que se la estén brindando a otros)</ul>
                                <ul>Calle (pavimento): Todos pueden transitar (no se excluye a nadie) y el hecho de que transite una persona implica que otro no lo pueda hacer (no hay competencia para el consumo)</ul>
                            </div>
                            <br />
                            <br />
                            <h6>Keynesianismo</h6>
                            <p>Para esta corriente económica (John M Keynes) el Estado debe intervenir en la economía estimulando la demanda a través del consumo y la inversión, para que ésta crezca y haya más producción y empleo: Por ejemplo, el Estado debe favorecer la <u>inversión en obras públicas</u> (puertos, carreteras, etc.) así como en <u>sectores estratégicos de la economía</u> (a través de subsidios, impuestos diferenciales, régimenes de promoción, etc) considerados centrales para el desarrollo económico y el bienestar de los ciudadanos</p>
                            <h6>Comunismo</h6>
                            <p>El comunismo plantea la <i>asignación de cada cuota de trabajo individual, como cuota del trabajo social</i>, es decir, una economía centralmente planificada en donde el Estado juega un rol central decidiendo qué actividades se van a realizar (no el mercado a través de la oferta y demanda) y quién (asigna trabajadores por cada actividad). Para esta corriente de pensamiento, al asignar tareas y recursos, el Estado se asegura de que nadie queda excluído de la unidad de la producción y consumo (todos hacen, todos reciben).</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Clase Nº 2: Fuentes de financiamiento del Estado
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Los Estados tienen básicamente 4 (cuatro) fuentes principales de financiamiento:</p>
                            <li>
                                <u>Impuestos:</u> son la principal fuente de financiamiento de los estados y se cobran por igual tanto a las personal como a las empresas. Los impuestos pueden ser Nacionales, Provinciales y Municipales o Comunales y por lo general no son específicos en su uso; es decir, NO es que lo recaudado por tal impuesto financia ESTE gasto específico, sino que conforma un fondo comun cuya asignación específica depende de lo acordado en el presupuesto, ya sea Nacional, Provincial o municipal.
                            </li>
                            <br />
                            <div className="recuadro">
                                <p>Las <strong>tasas</strong> en cambio se cobran por la prestación de un servicio público específico y son para financiamiento exclusivo del mismo, es decir hay especificidad en su uso. Por ejemplo, se cobra una tasa municipal de barrido y limpieza para financiar específicamente este servicio.</p>
                            </div>
                            <br />
                            <br />
                            <li><u>Ingresos de empresas públicas:</u> El estado posee empresas públicas que generan ingresos que sirven para financiaciarse. Por ejemplo, YPF, Astillero Rio Santiago, Aerolíneas Argentinas, etc.</li>
                            <li><u>Endeudamiento:</u> El Estado puede tomar dinero del sistema financiero a través de emisiones de titulos de deuda (bonos) en moneda extranjera o soberana, con acreedores internos o externos, de forma intraestatal o con el mercado.</li>
                            <li><u>Venta de activos:</u> El estado puede obtener financiamiento a partir de la venta de terrenos fiscales, empresas estatales, etc. Las privatizaciones de empresas públicas de los años 90` son un ejemplo de ello</li>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Clase Nº 3: Los gastos del Estado
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Existen diferentes "partidas" a las que se puede asignar el gasto del Estado que se vota y se determina en el presupuesto nacional anual. Por mencionar algunos...</p>
                            <li>Gastos para el funcionamiento del Estado: Estos son gastos para sostener el funcionamiento del Estado en sus tres poderes <strong>poder legislativo, poder judicial y poder ejecutivo</strong> en sueldos del personal, recursos, etc.</li>
                            <li>Gastos en Educación</li>
                            <li>Gastos en Salud</li>
                            <li>Gastos en Seguridad</li>
                            <li>Inversión pública: son los gastos que realiza el Estado para favorecer el desarrollo económico, por ejemplo: la construcción de hospitales, carreteras, puertos, etc. </li>
                            <li>Gastos previsionales y seguridad social: son las jubilaciones y el conjunto de programas de promoción y ayuda social.</li>
                            <br />
                            <p className="recuadro">El <i>poder ejecutivo</i> es el encargado de conducir la política económica para favorecer el desarrollo y el bienestar dentro del marco de la constitución y las leyes. El <i>poder judicial</i> es el que se encarga de hacer cumplir las leyes y sancionar a quienes las transgreden. Por último, el <i>poder legislativo</i> es el encargado de promulgar nuevas leyes y/o modificar existentes en aras lograr el bienestar económico y social del país.</p>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                            Clase Nº 4: Déficit y superávit fiscal
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>El <strong>Estado</strong> tiene como principal propósito lograr el bienestar general de la sociedad a partir de la administración de parte de los recursos de la misma.</p>
                            <p>La administración de los recursos del Estado es sometida a escrutinio del pueblo, quien a través de sus representantes en el <u>poder legislativo</u> aprueban o desaprueban dicha administración: El estado presenta ante el poder legislativo el <strong>presupuesto nacional</strong>, que es el <i>plan de ingresos y gastos anuales en los que se incurrirá para lograr avanzar sobre el bienestar general</i>, el mismo, por votación del poder legislativo puede ser aprobado o sometido a corrección.</p>
                            <h6>Déficit fiscal</h6>
                            <p>Cuando en el presupuesto se prevee que ingresos fiscales serán <i>inferiores</i> a los gastos estaremos ante un Déficit fiscal</p>
                            <h6>Superávit fiscal</h6>
                            <p>Cuando en el presupuesto se prevee que ingresos fiscales serán <i>superiores</i> a los gastos estaremos ante un Superávit fiscal</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}