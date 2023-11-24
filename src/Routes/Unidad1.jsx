import "../Styles/Acordeones.css"
import CategoriasOcupacionales from "../assets/CategoriasOcupacionales.png"
import Mercado from "../assets/Mercado.png"

export const Unidad1 = () => {
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
                            Clase Nº 1: Economia, definición y objeto de estudio
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Economía y su objeto de estudio</h6>
                            <p>La <strong>economía</strong> es la ciencia que estudia la forma en que la sociedad se organiza para producir, distribuir y consumir en las diferentes etapas históricas. En etapas previas al surgimiento del modo de producción capitalista, existieron otras formas de organizar estos procesos, como la <i>mita</i>, el <i>esclavismo</i> o el <i>feudalismo</i>. La <strong>mita</strong> era un sistema de producción basada en la reciprocidad, de la época pre-hispánica por la que las personas brindaban su trabajo para el desarrollo de las comunidades y asistencia a otros como una especie de "tributación" de la cual todos participaban y se beneficiaban. En el <strong>esclavismo</strong> tanto el propio esclavo como lo que producía ese esclavo pertenecian a su amo, quienes se ocupaban sólo de consumir y administrar lo producido. En el <strong>feudalismo</strong> existian tres estratos sociales: el clero (la iglesia), los señores feudales y los siervos. Los siervos ocupaban tierras pertenecientes a los señores y producian en ella para su propio consumo. El excedente producido era entregado al señor feudal por el uso de la tierra y por brindarle protección a estos. Los miembros del clero recibían parte del excedente por sostener la fe.</p>
                            <p>Bajo el <i>modo de producción capitalista</i> la producción se organiza a través de la <strong>empresa</strong>, en la cual trabajador y dueño se distribuyen la riqueza producida bajo la forma concreta de salario (trabajador) y ganancia (empresario). La principal diferencia entre el modelo de producción capitalista y los anteriores radica en su propósito: mientras que en los anteriores el objetivo era producir para satisfacer las necesidades de las personas, en éste el principal propósito es multiplicar el capital.</p>
                            <h6>La teoría del valor trabajo</h6>
                            <p>Para entender el proceso de multiplicación del capital seguimos el siguiente esquema: D - M - D` donde D = Dinero M = Mercancia y D` es mayor a D. Esto significa que en el capitalismo el empresario invierte su dinero inicial (D), compra una mercancía (M), la vende y obtiene (D`). Este ciclo se denomina "comprar para vender" en donde yo compro algo a $10 y lo vendo mas caro a $20 multiplicando el capital original.</p>
                            <p>Si profundizamos el análisis llegaremos a la conclusión de que <strong>sólo el trabajo multiplica la riqueza</strong> en el proceso productivo: D - M - M` - D` donde D = dinero; M = Mercancia y donde ademas M` es distinto a M. ¿Esto que quiere decir? Que el empresario invierte su dinero en mercancías (en mano de obra, materiales, insumos, etc.) y como resultado obtiene otra mercancía (por ejemplo una silla) cuyo valor D` es mayor al importe original invertido D. Ahora nos podemos preguntar ¿Cómo puede ser que el valor de M` (silla) sea mayor al valor de M (mano de obra, insumos, materiales)? La respuesta es que dentro de M hay un elemento que en el proceso productivo genera mas valor del que cuesta, y este elemento es la mano de obra (el trabajo). El trabajo es el elemento que multiplica el capital (D` mayor a D) bajo el modo de producción capitalista para esta corriente de pensamiento económico.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Clase Nº 2: Bienes y servicios
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Los <strong>bienes y servicios</strong> son todas aquellas cosas, elementos o productos del trabajo que satisfacen una necesidad humana. Por ejemplo una milanesa en un "bien" que satisface la necesidad de alimentación, mientras que un hotel brinda un servicio que satisface la necesidad de descanso.</p>
                            <h6>Bienes</h6>
                            <p>Con la definición brindada más arriba ya nos podemos empezar a hacer una idea sobre la distinción entre bienes y servicios, ambos satisfacen necesidades pero tienen caracteristicas propias y particulares: </p>
                            <li>Son <strong>tangibles</strong>, es decir, los podemos ver y tocar; un auto, una milanesa, una silla, una lapicera y una banana son ejemplos de diferentes bienes existentes</li>
                            <li>Su propiedad se puede transferir: yo puedo vender un auto y este deja de pertenecerme para pasar a ser propiedad de otra persona.</li>
                            <br />
                            <h6>Servicios</h6>
                            <p>Los servicios en cambio tienen las siguientes caracteristicas:</p>
                            <li>Son <strong>intangibles</strong>, es decir, no poseen existencia material, no se pueden ver o tocar, simplemente son gozados por quien los consume, quien a través de esto satisface alguna necesidad. Por ejemplo, el <i>transporte público de pasajeros</i> es un servicio porque satisface la necesidad de trasladarse, pero no consumis el colectivo (bien) sino el transporte (servicio).</li>
                            <li>No podemos separar el servicio de la persona que lo brinda: el dentista brinda el servicio para la salud vucal, no se brinda por si sola.</li>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Clase Nº 3: Valor de uso y valor de cambio
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Valor de uso</h6>
                            <p>Los bienes y servicios poseen por definición <strong>valor de uso</strong> ya que satisfacen necesidades. Por ejemplo, una silla posee valor de uso ya que satisface la necesidad de descanso. El aire posee valor de uso ya que satisface la necesidad de respirar y vivir.</p>
                            <h6>Valor de cambio</h6>
                            <p>Los bienes y servicios que tienen <strong>valor de cambio</strong> son aquellos que tienen precio. Para que tengan precio deben cumplir dos condiciones:</p>
                            <li>Deben tener valor de uso, es decir, satisfacer necesidades.</li>
                            <li>Deben ser escasos.</li>
                            <br />
                            <p>Siguiendo el ejemplo anterior, el "aire" tiene valor de uso (satisface necesidades) pero no tiene valor de cambio, ya que es ilimitado (no es escaso). En cambio la silla tiene valor de uso (satisface necesidades) y al mismo tiempo tiene valor de cambio (hay una cantidad limitada de sillas, las que produce el hombre)</p>
                            <p>Cuando un bien o servicio posee <i>valor de uso y valor de cambio</i> estamos ante una <strong>mercancía</strong>.</p>
                            <br />
                            <p className="recuadro">Para la teoría heterodoxa, las mercancías tienen valor cuando son productos del TASNPI: trabajo abstracto socialmente necesario, hecho de manera privada e independiente. Ya que por ejemplo si yo soy carpintero y mi hijo me encarga una silla, la misma no tiene precio <u>pese a cumplir los requisitos de ser valor de uso y valor de cambio</u>. Del mismo modo, un plato de fideos en un restaurante tiene valor de uso y valor de cambio y tiene un precio, sin embargo el mismo plato de fideos que la madre le da al hijo en la casa tiene tambien valor de uso y valor de cambio pero <u>no tiene precio</u></p>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                            Clase Nº 4: Agentes económicos; la Empresa.
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Las organizaciones</h6>
                            <p>Una <strong>organización</strong> constituye un conjunto de personas y elementos que trabajan en forma articulada con el propósito de lograr algún fin determinado.</p>
                            <p>Allí donde existan dos o más personas trabajando para lograr algún cometido puede ser señalado como una organización y existen muchisimas con las que nos vinculamos a diario, Por ejemplo, la Policía es una organización cuyo principal propósito es brindar seguridad a la ciudadanía. Greenpeace es una organización cuyo principal objetivo es preservar el medioambiente de la acción de los hombres. Por otra parte <i>una fabrica de autos</i> es una organización cuyo principal objetivo es obntener una ganancia a partir de la producción y comercialización de automóviles.</p>
                            <h6>Las empresas</h6>
                            <p>Lo que distingue a las empresas de otras organizaciones es su propósito: <u>una organización se constituye como empresa cuando su objetivo es obtener ganancias a partir de la producción de un bien o servicio determinado.</u></p>
                            <h6>Clasificación de las empresas</h6>
                            <p>Las EMPRESAS cubren un amplio espectro de sectores productivos pero podemos clasificarlas bajo muchos criterios, uno de ellos es por explotación principal según sea del <strong>sector primario</strong> (extracción de recursos naturales, producción agropecuaria), del <strong>sector secundario</strong> (nos referimos al sector industrial: transforma las materias primas en productos elaborados) o del <strong>sector terciario</strong> (la producción de servicios). También podemos clasificar las empresas por origen de los capitales, en este caso podemos clasificarlas como empresas de capital nacional o empresas de capital extranjero. Otra clasificación estaría dada por la naturaleza del capital de las mismas, pudiendo ser privadas, públicas o mixtas.</p>
                            <h6>El proceso productivo</h6>
                            <p>Dentro de la empresa se conjugan diferentes elementos, recursos y acciones que dan lugar a la producción de los bienes o servicios. Llamamos a esta secuencia <strong>proceso productivo</strong>. Pensémoslo como una suerte de "caja negra" por la que ingresan una serie de elementos y por las que luego sale uno diferente</p>
                            <p>Entre los elementos que <i>entran</i> a esta caja negra podemos mencionar:</p>
                            <ul><strong>Insumos:</strong> Son aquellos elementos que se utilizan para producir algo, agotándose durante el proceso productivo. Por ejemplo: un electrodo de soldadura, la electricidad que mueve las máquinas, etc</ul>
                            <ul><strong>Materia Prima:</strong> Es el material que se utiliza para producir algo pero que a diferencia de los insumos, no desaparecen en el proceso productivo sino que <i>cambain su forma original</i>. Es decir, permanecen pero cambian. Por ejemplo, un tablon de madera que se transforma en una silla, polietileno que se transforma en una bolsa de supermercado, etc.</ul>
                            <ul><strong>Herramientas:</strong> Las herramientas son auxiliares en la producción, a menudo son consideradas un apéndice del cuerpo del trabajador, facilitando una labor determinada. Por ejemplo, una llave de tuercas es una herrmaienta así como también lo es un martillo: son prolongaciones que facilitan una determinada tarea como sacar una tuerca o clavar un clavo.</ul>
                            <ul><strong>Máquinas:</strong> Son un complejo de piezas fijas o dinámicas que realizan una o más tareas determinadas. <i>La diferencia con las herramientas</i> es la fuente de energía que las acciona: mientras que las herramientas las mueve la fuerza del hombre, las máquinas son accionadas por fuentes externas a él: electricidad, viento, agua, etc.</ul>
                            <ul><strong>Mano de obra:</strong> Es el trabajo que ofrece el obrero que se "gasta" durante el proceso de trabajo y se repone con descanso y alimentación.</ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Clase Nº 5: Agentes económicos; los Trabajadores
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Los trabajadores</h6>
                            <p>¿Quiénes son los trabajadores? Dentro de una “FAMILIA” (madre, padre, hijos, abuelos) algunos integrantes están en condiciones de trabajar y otros no. Si consideramos al país en su conjunto, la totalidad (sumatoria) de las “FAMILIAS” dentro de los límites de un país conforma su población total (PT). Dentro de ella, el conjunto de los integrantes que está en condiciones de trabajar formalmente se denomina Población Económicamente Activa (PEA), en tanto que el resto de los integrantes que no está en condiciones de trabajar formalmente se llama Población No Activa (PNoA). </p>
                            <img src={CategoriasOcupacionales} alt="" />
                            <p>Dentro de la PEA hay trabajadores que están efectivamente empleados, llamamos a esta población como “ocupados”. También hay trabajadores que no poseen empleo pero buscan activamente ocuparse, a este grupo se lo denomina “desocupados”.
                                La PNoA la conforman aquellos quienes no pueden trabajar (niños menores de 14 años, jubilados, incapacitados) y aquellos quienes no trabajan pero tampoco buscan trabajo. A estos últimos llamaremos “inactivos voluntarios”. </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                            Clase Nº 6: Relaciones entre el capital y el trabajo
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Las relaciones entre el capital y el trabajo en la producción</h6>
                            <p>Como mencionamos más arriba, las empresas son organizaciones, es decir, un conjunto de elementos o recursos que actúan en forma articulada con la finalidad de obtener un bien o un servicio con el objetivo de venderlo y obtener una ganancia. Para pensar la empresa imaginemos un reloj: en él se combinan distintos engranajes y piezas que funcionando articuladamente logran un objetivo común y esperado, que es marcar la hora del día. En una empresa, las personas vendrían a ser cada uno de esos engranajes, que cumplen cada uno una función específica y actuando en conjunto logran el objetivo de la empresa. Por ejemplo: en una fábrica de sillas, algunos operarios se encargan de cortar la madera, otros de ensamblarla y otros de pintarla y como resultado de la acción conjunta, se obtiene finalmente la silla terminada. </p>
                            <p>Los trabajadores cuentapropistas, en cambio, constituyen una empresa en sí mismos, ya que de inicio a fin, se encargan de realizar cada paso en el proceso productivo. Por ejemplo: en el caso de la fábrica de sillas, el mismo trabajador realiza las tareas de corte, armado y pintado.
                                No obstante, la mayoría de las cosas que compramos, ya sean bienes o servicios, provienen de las empresas.</p>
                            <h6>¿Cómo se relacionan familias y empresas en la economía?</h6>
                            <p>La familia ofrece su trabajo a la panadería. La panadería se sirve de ese trabajo para producir pan que ofrece al mercado para el consumo de la población. A su vez, la familia recibe un salario de la panadería, que utiliza para comprar tanto el pan, como así también el resto de los bienes y servicios que ofrecen el resto de las empresas que operan en el mercado. </p>
                            <img src={Mercado} alt="" />
                            <p>Podríamos decir que existe una relación de cooperación entre la empresa y la familia, dado que se necesitan mutuamente: la familia necesita el salario para subsistir y la empresa necesita el trabajo para echar a andar la fábrica. Pero por otro lado, hay quienes afirman que no existe tal relación de cooperación, sino más bien de conflicto y tensión constante: la familia quiere entregar la menor cantidad de trabajo a cambio de la mayor cantidad de salario posible y por su parte la empresa quiere entregar la menor cantidad de salario a cambio de la mayor cantidad de trabajo posible. Y esa tensión constante marca el pulso de los principales conflictos entre familias y empresas que se ven a diario en la economía. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


