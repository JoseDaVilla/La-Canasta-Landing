import { useState } from 'react'

const EggBrands = () => {
    // Datos de marcas de huevos que distribuye La Canasta
    const eggBrands = [
        {
            name: "Yelko",
            distributor: "La Canasta S.A.",
            manufacturer: "Granja Huevos Yelko",
            description: "Yelko es una marca de huevos comprometida con la frescura, calidad y nutrición. Nuestros huevos provienen de gallinas cuidadosamente criadas, garantizando un producto natural y saludable para nuestros clientes. Yelko representa confianza y excelencia en cada huevo, ideal para hogares y negocios que buscan lo mejor en alimentación.",
            slogan: "Ponle huevos a tus comidas",
            features: ["Sin hormonas", "Gallinas libres", "Yema color intenso", "Empaque reforzado"],
            image: "",
            logo: "yelko-sin-fondo.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-100"
        },
        {
            name: "YEMA DORADA",
            distributor: "La Canasta S.A.",
            manufacturer: "Productos Orgánicos S.A.",
            description: "En Yema Dorada, nos especializamos en ofrecer huevos frescos y de la más alta calidad, con un sabor auténtico y nutritivo. Criamos nuestras gallinas en un ambiente natural y saludable, garantizando huevos con yemas firmes, doradas y llenas de nutrientes esenciales.",
            slogan: "Calidad y frescura en cada huevo",
            features: ["Recolectados diariamente", "Yemas más brillantes y ricas en vitaminas", "Producción artesanal", "Alimentación natural"],
            image: "",
            logo: "yemadorada.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-50"
        },
        {
            name: "Ponle huevos",
            distributor: "La Canasta S.A.",
            manufacturer: "Sauce DI",
            description: "Ponle Huevos es una marca comprometida con ofrecer huevos frescos y de alta calidad, ideales para una alimentación saludable.",
            slogan: "Naturalmente sostenibles",
            features: ["Frescura garantizada", "Origen natural", "Ricos nutrientes", "Diferentes representaciones", "Compromiso con la calidad"],
            image: "",
            logo: "ponle-huevos-sin-fondo.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/30"
        },
        {
            name: "Inquebrantables",
            distributor: "La Canasta S.A.",
            manufacturer: "Incubadora Santander S.A.",
            description: " 'Inquebrantables' ofrece huevos de calidad superior, con cáscaras resistentes y yemas vibrantes. Nuestra marca se compromete con la frescura y el sabor excepcional, brindando a las familias la confianza de un producto nutritivo y delicioso en cada comida.",
            slogan: "La fuerza que alimenta tu día",
            features: ["Cáscara Reforzada", "Yema de Color Intenso", "Frescura Garantizada", "Alto Valor Nutricional", "Sabor Excepcional"],
            image: "",
            logo: "newinquebrantables.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/50"
        },
        {
            name: "Econido",
            distributor: "La Canasta S.A.",
            manufacturer: "Nutrizen S.A.",
            description: "Econido es una marca colombiana de huevos 100% orgánicos, comprometida con la sostenibilidad y el bienestar animal. Sus gallinas son criadas en libertad, alimentadas con una dieta natural y libre de químicos, lo que garantiza huevos de alta calidad, ricos en nutrientes y con un sabor auténtico.",
            slogan: "Huevos 100% orgánicos, frescura y bienestar en cada cáscara.",
            features: ["Huevo AA", "100% Orgánicos"],
            image: "",
            logo: "econido.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/30"
        },
        {
            name: "HUEVIX",
            distributor: "La Canasta S.A.",
            manufacturer: "NutriSabana",
            description: "HUEVIX es una marca especializada en la distribución de huevos criollos provenientes de gallinas criadas en libertad en la sabana Sucreña. Su compromiso con la calidad y el bienestar animal garantiza huevos más frescos, nutritivos y con un sabor auténtico. Con un enfoque sostenible y natural, HUEVIX ofrece un producto ideal para quienes buscan una alimentación más saludable y responsable.",
            slogan: "La excelencia en cada cáscara",
            features: ["Cáscara resistente y natural", "Sabor auténtico", "Alto valor nutriciona", "Producción libre de químicos", "Sostenibles y frescos"],
            image: "",
            logo: "huevix.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/50"
        }
    ]

    const [activeBrand, setActiveBrand] = useState(0)
    const [imageError, setImageError] = useState(false)

    return (
        <section id="gallery" className="py-20 bg-white relative">
            <div className="absolute w-full h-32 top-0 bg-[url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-repeat-x opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-2xl text-farm-cafeClaro">Nuestras Marcas</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-farm-cafeOscuro">Marcas de Calidad que Distribuimos</h2>
                    <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                    <p className="text-xl text-farm-700 max-w-3xl mx-auto">
                        En La Canasta nos asociamos con los mejores productores locales para ofrecerte
                        una variedad de huevos de primera calidad con diferentes características.
                    </p>
                </div>

                {/* Mobile Brand Selector - Horizontal scrollable buttons - FIXED EQUAL SIZE */}
                <div className="md:hidden mb-8">
                    <div className="overflow-x-auto pb-4 -mx-4 px-4">
                        <div className="flex w-max">
                            {eggBrands.map((brand, index) => (
                                <button 
                                    key={index}
                                    className={`flex flex-col items-center px-4 py-3 rounded-lg whitespace-nowrap min-w-[100px] mx-1 ${
                                        activeBrand === index
                                            ? 'bg-farm-cafeClaro text-white shadow-md'
                                            : 'bg-farm-50 text-farm-700 border border-farm-200'
                                    }`}
                                    onClick={() => setActiveBrand(index)}
                                >
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 border border-farm-200">
                                        {brand.logo ? (
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                className="w-11 h-11 object-contain"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        ) : (
                                            <span className="text-lg font-bold">{brand.name.charAt(0)}</span>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium line-clamp-1">{brand.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Large detailed brand view - REMOVED LOGO ON MOBILE */}
                    <div className="min-h-80 w-full lg:w-1/2 order-2 lg:order-1">
                        <div className={`rounded-2xl overflow-hidden shadow-xl h-auto relative ${eggBrands[activeBrand].color}`}>
                            {/* Logo de la marca en la esquina superior - VISIBLE ONLY ON DESKTOP */}
                            <div className="absolute top-4 right-4 p-3 z-10 hidden lg:block">
                                <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                                    {eggBrands[activeBrand].logo ? (
                                        <img
                                            src={eggBrands[activeBrand].logo}
                                            alt={`Logo de ${eggBrands[activeBrand].name}`}
                                            className="max-w-full max-h-full p-1 object-contain"
                                            onError={(e) => { e.target.style.display = 'none' }}
                                        />
                                    ) : (
                                        <span className="text-3xl font-bold text-farm-cafeClaro">{eggBrands[activeBrand].name.charAt(0)}</span>
                                    )}
                                </div>
                            </div>

                            {imageError ? (
                                <div className="min-h-60 w-full aspect-video flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">{eggBrands[activeBrand].fallbackEmoji}</div>
                                        <h3 className="text-xl font-bold">{eggBrands[activeBrand].name}</h3>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={eggBrands[activeBrand].image}
                                    alt={eggBrands[activeBrand].name}
                                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                                    onError={() => setImageError(true)}
                                />
                            )}

                            <div className="p-6 md:p-8 bg-white">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-farm-cafeOscuro">{eggBrands[activeBrand].name}</h3>
                                </div>

                                {/* Slogan destacado en la vista detallada */}
                                <div className="bg-farm-50 border-l-4 border-farm-cafeClaro p-3 md:p-4 rounded-r-lg mb-6 italic">
                                    <p className="text-farm-700 text-base md:text-lg">"{eggBrands[activeBrand].slogan}"</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <div className="flex-1 bg-farm-50 p-3 md:p-4 rounded-lg">
                                        <span className="bg-farm-cafeClaro text-white text-xs md:text-sm px-3 py-1 rounded-full">Distribuido por</span>
                                        <p className="text-farm-700 font-medium mt-2 md:mt-3">{eggBrands[activeBrand].distributor}</p>
                                    </div>

                                    <div className="flex-1 bg-farm-50 p-3 md:p-4 rounded-lg">
                                        <span className="bg-farm-cafeOscuro text-white text-xs md:text-sm px-3 py-1 rounded-full">Fabricado por</span>
                                        <p className="text-farm-700 font-medium mt-2 md:mt-3">{eggBrands[activeBrand].manufacturer}</p>
                                    </div>
                                </div>

                                <p className="text-farm-700 mb-6 text-base md:text-lg">{eggBrands[activeBrand].description}</p>

                                <div className="mt-6">
                                    <h4 className="font-bold text-farm-cafeOscuro mb-3 text-lg md:text-xl">Características:</h4>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {eggBrands[activeBrand].features.map((feature, idx) => (
                                            <span key={idx} className="bg-farm-50 border border-farm-200 text-farm-700 rounded-full px-3 py-1 text-sm">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile - Call to action */}
                        <div className="mt-8 text-center lg:hidden">
                            <a href="#contact" className="farm-button inline-block w-full">
                                Consultar Disponibilidad
                            </a>
                        </div>
                    </div>

                    {/* Desktop - Brand selection grid */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 hidden lg:block">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                            {eggBrands.map((brand, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl p-6 cursor-pointer transition-all duration-300 h-full flex flex-col justify-between ${activeBrand === index
                                            ? 'border-2 border-farm-cafeClaro shadow-lg'
                                            : 'border border-farm-200 hover:border-farm-beige'
                                        }`}
                                    onClick={() => setActiveBrand(index)}
                                >
                                    <div>
                                        <div className="flex items-center mb-4">
                                            {/* Logo pequeño - MOVIDO A LA IZQUIERDA */}
                                            <div className="w-22 h-22 flex items-center justify-center p-1 mr-3">
                                                {brand.logo ? (
                                                    <img
                                                        src={brand.logo}
                                                        alt={`Logo de ${brand.name}`}
                                                        className="w-20 h-20 object-contain"
                                                        onError={(e) => { e.target.style.display = 'none' }}
                                                    />
                                                ) : (
                                                    <span className="text-lg font-bold text-farm-cafeClaro">{brand.name.charAt(0)}</span>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-xl text-farm-cafeOscuro">{brand.name}</h3>
                                        </div>

                                        <div className="flex flex-col w-fit gap-2 mb-5 text-xs">
                                            <span className="bg-farm-100 text-sm text-farm-700 px-2 py-1 rounded-md">
                                                Dist: {brand.distributor}
                                            </span>
                                            <span className="bg-farm-200 text-sm text-farm-800 px-2 py-1 rounded-md">
                                                Fab: {brand.manufacturer}
                                            </span>
                                        </div>

                                        {/* Slogan en lugar de descripción */}
                                        <p className="text-base italic text-farm-700 border-l-2 border-farm-cafeClaro pl-2 py-1">
                                            "{brand.slogan}"
                                        </p>
                                    </div>
                                    <div className="mt-5 text-farm-cafeClaro text-sm font-medium">
                                        {activeBrand === index ? "Detalles mostrados" : "Ver detalles"}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EggBrands
