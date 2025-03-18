import { GiChicken, GiOlive, GiEggClutch, GiWheat, GiCookingPot, GiFarmTractor } from 'react-icons/gi';
import { TbInfoCircle } from 'react-icons/tb';

const Features = () => {
    const features = [
        {
            icon: <GiChicken className="text-4xl text-farm-cafeClaro" />,
            title: "Gallinas Libres",
            description: "Nuestras gallinas viven en libertad, alimentándose naturalmente y sin estrés, lo que resulta en huevos de mayor calidad y sabor."
        },
        {
            icon: <GiOlive className="text-4xl text-farm-cafeClaro" />,
            title: "100% Orgánico",
            description: "Utilizamos alimento orgánico cultivado sin químicos ni pesticidas, respetando el medio ambiente y tu salud."
        },
        {
            icon: <GiEggClutch className="text-4xl text-farm-cafeClaro" />,
            title: "Frescura Garantizada",
            description: "Recogemos y distribuimos los huevos diariamente para asegurar la máxima frescura cuando llegan a tu mesa."
        },
        {
            icon: <GiWheat className="text-4xl text-farm-cafeClaro" />,
            title: "Sostenibilidad",
            description: "Practicamos la agricultura regenerativa para cuidar nuestro suelo y medio ambiente, pensando en las futuras generaciones."
        },
        {
            icon: <GiCookingPot className="text-4xl text-farm-cafeClaro" />,
            title: "Sabor Auténtico",
            description: "Huevos con yemas de color intenso y sabor como los de antes, una experiencia culinaria incomparable."
        },
        {
            icon: <GiFarmTractor className="text-4xl text-farm-cafeClaro" />,
            title: "Tradición Familiar",
            description: "Tres generaciones dedicadas a la producción de huevos de calidad superior, manteniendo vivas nuestras raíces."
        }
    ]

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-2xl text-farm-cafeClaro">Por qué elegirnos</span>
                    <h2 className="text-3xl md:text-4xl font-display extra-bold mb-4 text-farm-cafeOscuro">LA DIFERENCIA DE LA CANASTA</h2>
                    <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                    <p className="text-xl text-farm-700 max-w-3xl mx-auto">
                        Nuestro compromiso con la calidad y el bienestar animal nos distingue, 
                        ofreciéndote lo mejor de la naturaleza en cada huevo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white hover:bg-farm-50 p-8 rounded-xl border border-farm-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-farm-beige/20 group-hover:bg-farm-beige/40 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-farm-cafeOscuro mb-3 group-hover:text-farm-cafeClaro transition-colors duration-300">
                                {feature.title}
                            </h3>
                            
                            <p className="text-farm-700">
                                {feature.description}
                            </p>
                            
                            <div className="mt-4 h-1 w-12 bg-farm-beige group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 max-w-4xl mx-auto bg-farm-beige/10 rounded-xl p-8 border border-farm-beige/30">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-16 h-16 bg-farm-cafeClaro rounded-full flex items-center justify-center flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                            <TbInfoCircle className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-farm-cafeOscuro mb-2">¿Sabías que...?</h3>
                            <p className="text-farm-700">
                                Los huevos de gallinas que se alimentan naturalmente contienen hasta <span className="font-bold">7 veces más beta-caroteno</span>, 
                                <span className="font-bold"> 3 veces más vitamina E</span>, y <span className="font-bold">2 veces más ácidos grasos omega-3</span> que los huevos convencionales. 
                                En La Canasta nos aseguramos que cada huevo sea una fuente de nutrición excepcional para tu familia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
