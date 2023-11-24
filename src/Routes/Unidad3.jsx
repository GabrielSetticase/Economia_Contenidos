import Importaciones from "../assets/Importaciones.png"
import CadenaValor from "../assets/CadenaValor.png"

export const Unidad3 = () => {
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
                            Clase Nº 1: Exportaciones e importaciones
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Exportaciones</h6>
                            <p>Las <strong>exportaciones</strong> son las ventas que se realizan desde nuestro país al resto del mundo. Por ejemplo, si en Córdoba se fabrican autos y se venden en Brasil, éste sería un claro caso de exportaciones</p>
                            <p>Desde el punto de vista de la producción y el empleo nacional, siempre es conveniente favorecer las exportaciones de los diferentes bienes y servicios que se producen en el país, ya que además de multiplicar la demanda (no vendemos sólo acá, sino también afuera) representa una fuente genuina de generación de divisas (dólares).</p>
                            <h6>Importaciones</h6>
                            <p>Las <strong>importaciones</strong> son las compras que hacemos desde Argentina al resto del mundo. Por ejemplo, si desde Argentina compramos motocicletas fabricadas en la India, éste sería un ejemplo de importaciones</p>
                            <p>Existen distintos paradigmas sobre la administración de las importaciones que veremos más adelante en la clase sobre "modelos de comercio exterior", pero desde el punto de vista de la producción y el empleo local, sólo sería conveniente importar bienes y servicios que NO se producen en Argentina, ya que NO afectan la producción ni el empleo local.</p>
                            <br />
                            <p>Las exportaciones e importaciones son comunes y frecuentes y casi todos los países del mundo participan del concierto del comercio internacional vendiendo y comprando entre sí diferentes bienes y servicios</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Clase Nº 2: Ventajas competitivas y ventajas comparativas
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Ventajas comparativas</h6>
                            <p>El término <strong>ventajas comparativas</strong> fue acuñado por el economísta clásico David Ricardo y refería a la ventaja natural que posee un país sobre otro para producir un determinado bien. Por ejemplo, en Argentina se produce más trigo que en el desierto del Sahara (Africa) debido a las diferencias climáticas y de fertilidad del suelo.</p>
                            <p>El hecho de que un país sea más propicio para la producción de un bien por sobre otro lo hace acreedor de una <i>ventaja comparativa</i> respecto de los otros.</p>
                            <p>Siguiendo el ejemplo anterior, para cultivar trigo en Argentina con la siembra plana obtenemos producción, ya que el riego, el suelo y otros factores <u>naturalmente</u> favorecen el cultivo; mientras que en el desierto hay que incurrir en gastos extra que hacen que el precio al final del proceso sea mayor (acondicionar el terreno, productos para prevenir que se quemen los cultivos, productos que permitan el crecimiento en ese tipo de terreno, sistemas de riego, etc)</p>
                            <p>Por este motivo, contar con ventajas comparativas en la producción de algun bien nos permite ofrecer un precio competitivo naturalmente, y por lo tanto nos garantiza vender y ganar en el comercio internacional</p>
                            <h6>Ventajas competitivas</h6>
                            <p>Las <strong>ventajas competitivas</strong> surgen por mayor productividad derivada principalmente de dos factores:</p>
                            <li><u>Curva de aprendizaje</u>: Se entiende que si un país viene en la senda de desarrollo de algún bien o servicio específico ha acumulado a base de ensayo, error, investigación y desarrollo, etc un acervo de experiencia que le permite ofrecer dichos productos con una calidad estandar y a precios competitivos</li>
                            <li><u>Desarrollo tecnológico:</u> Por decisión estratégica, un país puede marcar su desarrollo inclinándose por la producción de un determinado bien o servicio. Para ello el país puede lograr un <i>salto tecnológico</i> cerrando el "gap" (brecha) con sus competidores incorporando tecnología (desarrollada o importada) que le permita ganar en productividad, para vender dicho producto con calidad standar y a precios competitivos</li>
                            <br />
                            <p className="recuadro">Las <strong>commodities</strong> son productos cuya calidad es homogenea a nivel mundial y cuyo precio internacional ya viene dado por el mercado. Por ejemplo el trigo que se hace en Argentina es igual al Australiano (son de calidad homegenea) y ambos venden al mercado internacional a U$430 la tonelada, independientemente de los costos que tenga cada país</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Clase Nº 3: Modelos de comercio exterior PROTECCIONISMO
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>¿Qué es el proteccionismo?</h6>
                            <p>El Proteccionismo económico es una doctrina basada en la preservación de la producción nacional ante la competencia de productos extranjeros, con el propósito principal de favorecer el desarrollo económico y la generación de empleo interno.</p>
                            <h6>Ventajas del proteccionismo</h6>
                            <li><u>Favorece el desarrollo de industrias incipientes:</u> Cuando nace una industria, al principio es normal que su funcionamiento no sea el más adecuado, que se incurra en costos y precisos ineficientes, que no utilice la tecnología necesaria, que la calidad de los productos no sea la requerida por el mercado y que los precios sean más elevados que el de sus competidores. Pero esto representa un rasgo normal cuando emprendemos cualquier actividad nueva. Por ejemplo, si nos volcamos a tocar la guitarra, lo más normal es que al principio nos cueste posicionar las manos, hacer sonar bien las cuerdas, llevar el ritmo de una canción, etc. pero con el tiempo y la experiencia, seguramente iremos mejorando la práctica, nos daremos cuenta de que es más fácil y práctico mover la mano de tal forma que de otra, etc. En la industria ocurre lo mismo, la clave es el tiempo y la experiencia. Con el tiempo, las industrias mejoran sus procesos, su logística, ahorran costos, incorporan tecnología, mejoran sus productos y elevan su nivel de competitividad (precios más bajos). Pero para que este desarrollo pueda llevarse a cabo, es necesario que los gobiernos las protejan al menos en su fase de despegue, de la competencia externa, de otro modo, los productos importados con precios más bajos (más competitivos) las “ahogarían” antes de alcanzar dicho desarrollo.</li>
                            <li><u>Contribuye a la generación de empleo y riqueza nacional:</u> El proteccionismo puede generar nuevos emprendimientos productivos que reemplacen la oferta importada y generen fuentes de trabajo a nivel local. Se trata de la sustitución de productos importados por productos nacionales. Si el precio de los importados se eleva por efecto de impuestos y aranceles, eso genera las condiciones de posibilidad para la producción local de estos productos y por lo tanto del empleo de mano de obra local.</li>
                            <li><u>Permite orientar el desarrollo hacia sectores más dinámicos:</u> Argentina se especializa en la producción de alimentos (sector primario), cuyo valor agregado es más bajo que el de productos con mayor contenido tecnológico (industriales, de la información y la comunicación, etc.). A través de la protección de estas actividades, el país puede reorientar su patrón de especialización productiva hacia sectores que le reportarían más rentabilidad.</li>
                            <br />
                            <h6>Desventajas del proteccionismo:</h6>
                            <li><u>Puede generar estancamiento tecnológico:</u> Si protegemos la industria de la competencia externa, puede ocurrir que el empresario “se sienta cómodo” trabajando de la forma en que lo hace, aunque ésta sea una forma ineficiente, debido a que como goza de protección, puede seguir vendiendo de todos modos. Se trata de un riesgo real, los empresarios perciben que están protegidos y no se sienten incentivados a innovar e ir ganando competitividad ya que como no hay competencia, venden igual aunque sus precios sean elevados.</li>
                            <li><u>El consumidor puede enfrentar precios más elevados:</u> Tal y como se planteó en el apartado anterior, en las fases iniciales de la industria, puede ser que los consumidores  tengan que pagar precios más elevados debido a las ineficiencias iniciales que planteamos más arriba.</li>
                            <li><u>Oferta poco diversificada:</u> Si se impide la entrada de productos extranjeros, los consumidores locales sólo podrán acceder a una variedad limitada de los productos. Por ejemplo, si se impide la importación de sillas, sólo se podrán comprar los modelos que se producen en el país y no los modelos que puedan venir del exterior, que quizás se ajustan más a los gustos y preferencias de algunos consumidores.</li>
                            <br />
                            <h6>Medidas de políticas económicas del proteccionismo</h6>
                            <u>Medidas arancelarias: </u>
                            <p>Se trata de impuestos, tasas u otras imposiciones tarifarias a la entrada de productos extranjeros, con un doble propósito. </p>
                            <li><i>Un propósito fiscal:</i> con el cobro de aranceles, el estado recauda impuestos para afrontar sus obligaciones e inversiones.</li>
                            <li><i>Un propósito de protección:</i> con el cobro del arancel, el precio interno del bien importado termina siendo más elevado, lo que lo pone en igualdad de condiciones frente a los precios de la industria nacional. Ejemplo: si el producto vale $10 y tiene un arancel de 50%, entonces en las tiendas argentinas este producto se estará vendiendo a $15. </li>
                            <br />
                            <u>Medidas para-arancelarias: </u>
                            <p>A diferencia de las medidas arancelarias, estas medidas no afectan el precio sino la oferta (cantidad) de productos importados. Este tipo de medidas puede resumirse en lo que sigue:</p>
                            <li><i>Cuotas de importación:</i> el gobierno decide que sólo puede ingresar una cierta cantidad de un bien importado, superada esa cifra, el gobierno no permitirá el ingreso de cantidades adicionales.</li>
                            <li><i>Prohibición:</i> el gobierno prohíbe el ingreso de ciertos productos, por considerar que afectan los intereses nacionales o porque representan una amenaza para la seguridad de la nación.</li>
                            <li><i>Requerimiento de estándares nacionales:</i> el gobierno puede establecer que los productos que ingresan al país deben cumplimentar determinados estándares (requisitos) tanto de calidad, como sanitarios, etc. sin los cuales, el ingreso de dichos productos queda denegado.</li>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                            Clase Nº 4: Modelos de comercio exterior LIBRECAMBIO
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>¿Qué es el liberalismo?</h6>
                            <p>El liberalismo económico es una doctrina basada en la libre concurrencia de productos entre los distintos países. Esto implica la comercialización sin imposiciones tarifarias de productos entre los países. </p>
                            <h6>Ventajas del librecambismo</h6>
                            <li><u>Eficiencia en la asignación de recursos y ganancia mundial del comercio:</u> Esto significa que si cada país se concentra en producir aquellos bienes en donde es más competitivo (vende al precio mas bajo), y abandona las producciones en donde no es competitivo (donde es más caro que los otros) habrá entonces una ganancia mundial por cuanto venderá a todo el mundo sus productos competitivos (todos le van a comprar dado que ofrece los precios más bajos para esos bienes) y se abastecerá del resto de los productos de aquellos países que ofrezcan cada cosa a los precios más bajos. Por ejemplo: si vende la soja más barata del mundo, entonces todos los países del mundo le van a comprar soja (porque la ofrece al precio más competitivo), en tanto que las sillas las va a comprar a Brasil porque es el país que las ofrece al mejor precio y comprará televisores a Indonesia porque ese país lo ofrece al precio más bajo del mercado mundial, etc.</li>
                            <li><u>Los consumidores enfrentan precios más bajos:</u> Como no hay impuestos a la importación, los consumidores van a comprar cada producto al país que lo produzca con los precios más bajos (más competitivos).</li>
                            <li><u>Mayor diversificación:</u> Al no existir barreras al comercio, el consumidor puede acceder a distintas variedades de un producto en función de sus gustos y preferencias</li>
                            <li><u>Mercado mundial:</u> Los empresarios pueden competir con sus productos en nuevos mercados en los cuales hubiese sido imposible hacerlo ante la existencia de aranceles y barreras para-arancelarias. </li>
                            <br />
                            <h6>Desventajas del librecambismo</h6>
                            <li><u>No permite el desarrollo económico de los países sub-desarrollados hacia actividades más dinámicas:</u> Esto significa que si un país produce bananas, le será muy difícil dejar de ser un país productor de bananas para pasar a ser un productor de automóviles. Para poder serlo necesitarían gozar de protección, pero en un contexto de librecomercio, la industria incipiente no sobreviviría ante la competencia de productores de países desarrollados cuya industria ya ha madurado y son altamente competitivos.</li>
                            <li><u>Puede afectar el nivel de producción y empleo local:</u> La entrada de productos importados que compitan con productos nacionales puede afectar la producción y el empleo local por dos vías
                                <i>a) La vía de la oferta:</i> el hecho de que entren productos importados, ya sea que sus precios sean iguales a los nacionales o incluso más caros hace que bajen las ventas de los productores nacionales debido a que algunos consumidores pueden optar por los importados por una cuestión de gustos o preferencias
                                <i>b) La vía de los precios:</i> si además el importado tiene un precio menor que el nacional, lo más probable es que los consumidores dejen de comprar a productor nacional, que caigan sus ventas, su producción y que despida empleados.
                            </li>
                            <img src={Importaciones} />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Clase Nº 5: Cadenas de Valor, Valor Agregado, Valor Bruto de Producción y Términos de Intercambio
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Observemos el siguiente cuadro...</h6>
                            <img src={CadenaValor} />
                            <br />
                            <p><i>VBP: </i>Valor Bruto de Producción, se refiere al valor total del producto, que se compone del costo (Valor Intermedio) + el valor agregado (VA)</p>
                            <p><i>Costo intermedio: </i>Es el costo en el que incurre la empresa para producir, es decir, la suma de costos fijos y variables (materiales, materias primas, herramientas, etc.)</p>
                            <p><i>Valor Agregado: </i>Es el valor "nuevo" que se agrega en la producción a los costos intermedios, es decir, el valor que le sumó la empresa a estos costos intermedios, transformándolos en otra cosa. Por ejemplo: Un tablon de madera, clavos, hierro y pintura transformados en una silla terminada; en este caso, el valor de la silla es mayor a la suma del valor de los costos de estos materiales. Esa diferencia es el costo agregado.</p>
                            <h6>Cadena de valor</h6>
                            <p>La <i>cadena de valor</i> de un producto es la suma del trabajo incurrido para su producción, de principio a fin. Como tal, engloba actividades diferentes que pueden repartirse entre varias empresas. Incluso entre empresas que se encuentran en países diferentes.</p>
                            <p>En el ejemplo del cuadro, para producir la silla interviene el trabajo realizado por 3 (tres) empresas. Por definición, <u>cuanto mayor sean las actividades y las empresas involucradas en la producción de un bien, mayor es la cadena de valor del mismo</u></p>
                            <h6>Interpretamos el cuadro</h6>
                            <p>En el cuadro, la empresa <strong>Extracción de hierro</strong> vende el hierro extraído a $30, para simplificar, suponemos que no hay costos intermedios derivados del uso de otros recursos para producir hierro, ya que éste es un mineral que se extrae de la tierra y es brindado por la naturaleza.</p>
                            <p>Por lo tanto, la empresa tiene costo intermedio 0 (cero) y el valor agregado es $30 (pues generó un valor donde antes no habia, es decir, que el hierro en la montaña no vale en sí, pero una vez extraído tiene valor ya que se puede usar en la producción)</p>
                            <p>La empresa <strong>Metalúrgica</strong> "compra" el hierro a la empresa de Extracción de hierro a $30 (VBP devenido CI) y trabaja el hierro para darle forma de "varillas" para que usen otras empresas añadiéndole un valor por $40 (VA). Finalmente, el precio de venta de las "varillas" será de $70</p>
                            <p>La empresa <strong>Fabrica de sillas</strong> "compra" las "varillas" a la empresa Metalúrgica a $70 (VBP devenido CI) y lo usa para producir las sillas, añadiéndoles un valor por $30 y cuyo precio de venta al consumidor final será por $100</p>
                            <p>En suma...</p>
                            <h6> VBP = CI + VA</h6>
                            <p>El Valor agregado representa la suma de la generación de riqueza de un país, ya que suma el valor que cada empresa genera en la producción. Si tomáramos la suma del VBP (es decir, el valor de la producción de cada empresa) estaríamos sumando junto con el valor que genera la empresa (su VA), el valor agregado que generó la anterior, duplicando (sobreestimando) la generación de riqueza.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}