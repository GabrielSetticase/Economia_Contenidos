import Cbt from "../assets/Cbt.png"
import Pobreza from "../assets/Pobreza.png"
import Equidad from "..//assets/Equidad.png"
import Gini from "../assets/Gini.png"

export const Unidad4 = () => {
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
                            Clase Nº 1: Canasta Básica Total y Canasta Básica Alimentaria; medición de la pobreza por ingresos
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Existen diferentes modos de medir las condiciones de vida de la sociedad. La forma más usada por los países es hacerlo por el <i>nivel de ingreso de los hogares</i>. Entendiendo que aquellos hogares que tienen mayores ingresos gozan de mayor <strong>bienestar económico</strong> ya que pueden acceder a una cantidad mayor de bienes y servicios para satisfacer sus necesidades. Pero como mencionábamos recien, esta no es la única forma de medir el bienestar de un hogar, existen otros indicadores como el de <strong>NBI</strong> necesidades básicas insatisfechas, que mide otra serie de cuestiones más allá de los ingresos dinerarios de las familias, como por ejemplo, el acceso a servicios básicos, el estado general del hogar, condiciones de hacinamiento, etc.</p>
                            <p>En Argentina medimos el bienestar por ingresos del hogar, clasificando a los hogares como No Pobre / Pobre / Indigente según el nivel de ingresos de los mismos.</p>
                            <h6>Canasta Básica Total (CBT)</h6>
                            <p> La CBT es el conjunto de bienes y servicios representativos del consumo mensual del hogar argentino, es decir, una canasta que contiene las diferentes cosas en las que el hogar destina la plata. Los artículos de esta canasta se agrupan en 12 (doce) items o capítulos:</p>
                            <img src={Cbt} />
                            <br />
                            <br />
                            <p>Claramente, esta canasta tiene un precio, es decir, para consumir todos los artículos de la canasta necesitamos cierto monto de dinero. Ahí entran en juego los ingresos y los salarios del hogar: en conclusión, el sueldo nos tiene que alcanzar para comprar dicha canasta, y el consumo de esta canasta nos garantiza un piso de <strong>bienestar económico.</strong></p>
                            <h6>Canasta Básica Alimentaria (CBA)</h6>
                            <p>La CBA incluye sólo los alimentos que se consume mensualmente en una hogar, es decir, es sólo el capítulo "Alimentos y bebidas" de los 12 (doce) capitulos de la CBT. Esta CBA tiene un costo y su consumo garantiza un piso alimentario para que la gente se alimente correctamente.</p>
                            <h6>Pobreza e indigencia</h6>
                            <p>Consideramos un hogar como <strong>No Pobre</strong> si la suma de los ingresos del mismo es superior al precio de la Canasta Básica Total (CBT). Esto implica que en dicho hogar se consumen los bienes y servicios que garantizan el piso de bienestar económico, es decir, los bienes y servicios incluídos dentro de la CBT</p>
                            <p>Cuando los ingresos del hogar se situan entre el precio de la CBT y el precio de la CBA estamos ante un hogar <strong>Pobre</strong>. Esto significa que en ese hogar alcanza para la alimentación (es decir, les alcanza para comer) pero hay ciertos bienes y servicios a los cuales no pueden acceder, por lo tanto su <u>bienestar económico está disminuído</u>. Por ejemplo, se alimentan pero no les alcanza para comprar ropa nueva, o no les alcanza para ir al cine, etc.</p>
                            <p>Mientras que cuando el ingreso del hogar es inferior al precio de la Canasta Básica Alimentaria (CBT) estamos ante un hogar <strong>Indigente</strong>. Esto significa que en ese hogar el ingreso ni siquiera alcanza para los alimentos, por lo cual el bienestar económico se encuentra muy disminuído.</p>
                            <img src={Pobreza} />
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Clase Nº 2: Variación de los precios; INFLACION
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>La <strong>inflación</strong> es el aumento generalizado y sostenido de los precios en una economía. Es generalizado porque incluye todos los precios, es decir que si aumentan algunos precios y otros no entonces NO seria un caso de inflación. Además debe ser un proceso de aumentos sostenidos, es decir, que deben ser aumentos que se dan por periodos largos de tiempo. NO seria inflación si aumentan los precios de ayer a hoy pero no se registrara ningún otro aumento en adelante.</p>
                            <p>Existen básicamente 4 (cuatro) causas por las cuales se genera inflación, especialmente en economias con estructuras productivas desequilibradas, a saber ...</p>
                            <li><strong>Exceso de demanda:</strong> Sucede cuando una economía funciona al límite de su capacidad instalada y sobreviene una demanda adicional (es decir, hay tantos compradores que la cantidad no alcanza para todos), razón por la cual los empresarios ajustan dicha demanda aumentando los precios. De esta forma la oferta no cambia pero el precio al cual se vende cada unidad aumenta. Vale aclarar que para la corriente liberal ésta es la única causa de inflación que se reconoce.</li>
                            <li><strong>Cambiaria: </strong> Esta causa esta vinculada al <u>tipo de cambio</u>, es decir al valor del dólar y tiene que ver con los componentes importados que se utilizan en la producción nacional: si una fábrica de autos importa los motores desde EEUU a U$10 y el dólar vale $10 por unidad, a la empresa le sale $100 traer el motor de EEUU (u$10 x $10 = $100). Si el tipo de cambio varía y pasa a valer $20 por dólar a la empresa le sale el doble traer ese mismo motor (u$10 x $20 = $200) y este aumento en los costos de la producción puede pasar directamente (parte del costo puede ser absorbido por la empresa) a los precios, incrementando el valor que los consumidores locales pagan por dicho automóvil.</li>
                            <li><strong>Costos: </strong> Comunmente se la denomina inflación por puja distributiva, ya que tiene que ver con el aumento del salario en la distribución de la riqueza. Por ejemplo, si el gobierno da un aumento de $50.000 para las empresas representa un aumento del costo laboral, razón por la cual pueden trasladar dicho aumento de costo al precio del producto final, generando el aumento de precios. Hay puja distributiva cuando el empleador "absorbe" parte del aumento del costo de manera tal de evitar un aumento mayor de precios y correr riesgos de no poder vender: Si el costo de un producto es $100 y aumentan los sueldos $10 el empleador bien puede <i>aumentar el precio del producto a $110</i>(trasladar el 100% del aumento al precio), o bien puede "resignar su ganancia" absorviendo parte del aumento del costo sin generar aumentos mayores en los precios. Por ejemplo, si de los $100 (costo del producto) $30 es el salario y $70 la ganancia del empresario, un aumento de $10 en los sueldos llevaria el precio del producto a $110, no obstante, si el empresario "absorbe" parte del aumento del costo salarial pasaría a ganar $65 en vez de $70 y el precio del producto quedaría en $105 EN LUGAR DE $110. La PUJA en este caso es entre salario y ganancia, de ahi el nombre.</li>
                            <li><strong>Extrangulamiento en un rubro específico de la oferta: </strong>es cuando aumenta el precio de un insumo cuyo uso es transversal para la producción del resto de los bienes y servicios. Por ejemplo, si aumenta la tarifa de Luz: como es un insumo utilizado por todas las industrias, es esperable que dicho aumento se traslade al precio de todos los bienes y servicios. </li>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Clase Nº 3: Variación de los salarios
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>Los salarios y su evolución son, junto con los precios, las dos variables más importantes en la determinación del bienestar económico de los hogares. Respecto a la determinación de los salarios, la indexación (actualización) nominal (esto es, en cantidad de billetes pesos) depende básicamente de varios factores: </p>
                            <li><strong>Poder relativo de los gremios: </strong>Aquellos gremios que tienen más poder relativo respecto al empresariado, por lo general obtienen mejores aumentos salariales para sus representados. Esto depende de varios factores como por ejemplo la concentración de cada actividad, la cantidad de representados (volumen del gremio), la capacidad de convocatoria para paralizar la actividad, etc. Todos factores que inclinan la puja distributiva en favor de los trabajadores.</li>
                            <li><strong>El nivel general de actividad: </strong>En general, cuando mayor es el nivel de actividad, menor disponibilidad de trabajadores en relación de la demanda va a haber, lo cual va a presionar los niveles salariales hacia arriba</li>
                            <li><strong>El estado y los subsidios: </strong>Por decisión del autor, agrego la intervención del Estado sobre los ingresos de los trabajadores a partir del "salario indirecto" que representan los subsidios al transporte, los servicios, la educación, salud, etc. Este es un tema bastande en discusión por estos tiempos pero es innegable que pagar un boleto de colectivo a $100 es preferible a pagarlo $700 y además les permite a los usuarios "liberar ingresos" para ser destinados a otros gastos o menesteres.</li>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                            Clase Nº 4: Crecimiento y desarrollo económico
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <p>El principal propósito de los estados es propender al bienestar económico, social, ambiental, etc de los ciudadanos. Podemos suponer que cuanto mayor cantidad de bienes y servicios pueda acceder la población, mayor sera el bienestar de la misma. Lo cierto es que para que los ciudadanos accedan a este "bienestar" el país debe generar dicha riqueza.</p>
                            <p>Aquí es donde entra en juego el concepto de <strong>crecimiento y desarrollo económico</strong></p>
                            <h6>Crecimiento económico</h6>
                            <p>Hay crecimiento económico cuando un país <i>aumenta</i> la cantidad de bienes y servicios que ésta produce. Por supuesto, el <u>valor</u> de dicha riqueza dependerá de la cantidad de <u>Valor Agregado</u> que estos posean, lo que a su vez dependerá de otros factores como por ejemplo el desarrollo tecnológico, la inversión de cada país en I&D (investigación y desarrollo), la curva de experiencia de cada país en la produccción de los distintos bienes y servicios, etc.</p>
                            <p>Lo importante es destacar que a mayor riqueza generada, mayor debería ser el bienestar económico. Pero <i>esto puede no ser así</i>, ya que puede haya más riqueza general, pero que la misma <u>no esté distribuída</u>equitativamente entre la población; por ejemplo, puede que sólo el 5% de la población se quede con los frutos del crecimiento económico y el resto de la población no se vea afectada por el mismo (es decir, que no reciba nada).</p>
                            <p>En este caso, <i>hay crecimiento económico pero no aumento de bienestar entre la población</i>.</p>
                            <h6>Desarrollo económico</h6>
                            <p>De lo anterior vamos a inferir que sólo habrá bienestar para la población cuando haya crecimiento económico <i>siempre que dicho crecimiento sea distribuído equitativamente entre los miembros de la población</i></p>
                            <p>Llamamos <strong>desarrollo económico</strong> al proceso por el cual el país crece económicamente (produce más bienes y servicios) y los frutos de dicho crecimiento se distribuyen equitativamente entre los miembros de su población. en sintesis, hay desarrollo económico cuando <i>todos participan de los beneficios del crecimiento económico</i></p>
                            <div className="recuadro">
                                <h6>PBI vs PBI per cápita</h6>
                                <p>El Producto Bruto Interno (PBI) mide la cantidad de bienes y servicios finales que produce una economía en un determinado periodo de tiempo, por lo general se referencia anualmente. Es decir, el PBI mide el <i>crecimiento económico</i>.</p>
                                <p>El PBI per cápita toma el PBI y lo divide por la cantidad de habitantes que tiene el país para tener una idea de cuanta riqueza le toca a cada habitante. Pero tomar el PBI pér cápita como medida del bienestar de la población es un ERROR, ya que este indicador "dice" la riqueza que le correspondería a cada habitante pero no implica que los mismos la están recibiendo efectivamente.</p>
                            </div>
                            <br />
                            <br />
                            <h6>Igualdad y equidad</h6>
                            <p>Hay <i>igualdad</i> cuando cada habitante recibe las mismas oportunidades y goza de los mismos derechos sin distinción de género, raza y religión que cualquier otro ciudadano</p>
                            <p>Hay <i>Equidad</i> cuando se garantiza un piso de igualdad, partiendo desde la base de que no todos somos iguales ni partimos desde el mismo lugar. Aquí el rol del Estado es fundamental para garantizar dicha igualdad a través de políticas de equidad.</p>
                            <img src={Equidad} alt="Equidad" />
                            <h6>Medidas de la desigualdad: el coeficiente de Gini</h6>
                            <p>La medida que usualmente se utiliza para medir la distribución de la riqueza entre la población (medida más aproximada del bienestar económico) es el coeficiente de Gini; este indicador mide la distribución de la riqueza entre deciles de la población.</p>
                            <img src={Gini} alt="" />
                            <br />
                            <br />
                            <p>En este gráfico por ejemplo el 10% de la población se lleva el 45% de los ingresos mientras que el 90% de la población se lleva el 55%. En este caso la distribución es inequitativa ya que un porcentaje mínimo de la población se lleva casi la mitad de la riqueza generada.</p>
                            <p>Lo deseable para una sociedad es que haya crecimiento económico y que este se distribuya equitativamente entre los miembros de la población; en el gráfico de Gini, la situación ideal sería la recta diagonal de igualdad perfecta, en donde cada miembro de la población recibe equitativamente la misma riqueza que los demás.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                            Clase Nº 5: Desarrollo sustentable, desarrollo sostenible y los efectos ambientales del desarrollo económico
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                        <div class="accordion-body" style={estiloTexto}>
                            <h6>Desarrollo sostenible</h6>
                            <p>Entendemos por desarrollo sostenible a aquel que no compromete la continuidad del mismo en el tiempo, entendiéndo por ello que implica el uso racional y no predatorio de los recursos. Por ejemplo: si tenemos una empresa de forestación (corte de arboles para producir maderas) un uso sostenible de los recursos sería ir plantando arboles nuevos allí donde se cortaron otros, en los que el ritmo de la producción respete el de reposición de los recursos para evitar acabar con los recursos naturales.</p>
                            <h6>Desarrollo sustentable</h6>
                            <p>Tiene que ver con la preservación de los recursos y el medio ambiente en condiciones habitables para las generaciones venideras, implica por este motivo el uso de recursos no agresivos al medioambiente, como el reemplazo de energía fósil por solar, eólica y otras que no contaminan el mundo y lo hacen menos habitable para las futuras generaciones. Implica estudios de impacto ambiental para considerar la viablidad de actividades productivas.</p>
                            <p>Lo cierto es que existen acuerdos internacionales tendientes a promover el desarrollo sustentable, pero en la práctica la lógica del negocio hace que no se respeten y no llegan a formar parte de la agenda de los gobiernos; la contaminación de los ríos por el cianuro vertido para la extracción de minerales de la montaña, o la contaminacion de los océanos por el petróleo vertido son una clara muestra de ello.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}