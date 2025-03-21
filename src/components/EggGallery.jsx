import { useState, useEffect, useRef } from 'react'

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
            image: "yelko-portada.webp", 
            logo: "yelko-sin-fondo.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-100",
            bannerImage: "yelko-box.webp",
            additionalInfo: "El empaque de huevo Yelko está elaborado con cartón corrugado, un material resistente que brinda protección y amortiguación durante el transporte, y acetato, que permite visualizar el producto mientras lo resguarda de contaminantes externos, garantizando calidad y seguridad."
        },
        {
            name: "YEMA DORADA",
            distributor: "La Canasta S.A.",
            manufacturer: "Productos Orgánicos S.A.",
            description: "En Yema Dorada, nos especializamos en ofrecer huevos frescos y de la más alta calidad, con un sabor auténtico y nutritivo. Criamos nuestras gallinas en un ambiente natural y saludable, garantizando huevos con yemas firmes, doradas y llenas de nutrientes esenciales.",
            slogan: "Calidad y frescura en cada huevo",
            features: ["Recolectados diariamente", "Yemas más brillantes y ricas en vitaminas", "Producción artesanal", "Alimentación natural"],
            image: "yema-dorada-portada.webp", 
            logo: "yemadorada.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-50",
            bannerImage: "yema-dorada-box.webp",
            additionalInfo: "El empaque utiliza cartón corrugado, esponja y cartón cartulina para absorber impactos, brindar estabilidad y proteger eficazmente el huevo."
        },
        {
            name: "Ponle huevos",
            distributor: "La Canasta S.A.",
            manufacturer: "Sauce DI",
            description: "Ponle Huevos es una marca comprometida con ofrecer huevos frescos y de alta calidad, ideales para una alimentación saludable.",
            slogan: "Naturalmente sostenibles",
            features: ["Frescura garantizada", "Origen natural", "Ricos nutrientes", "Diferentes representaciones", "Compromiso con la calidad"],
            image: "ponle-huevos-portada.webp", 
            logo: "ponle-huevos-sin-fondo.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/30",
            bannerImage: "ponle-huevos-box.webp",
            additionalInfo: `La elección del cartón corrugado y la espuma para el empaque de huevos se basa en la necesidad de ofrecer una protección integral. El cartón corrugado, con su estructura de ondas, proporciona una excelente resistencia a los golpes y la compresión, protegiendo los huevos de posibles roturas durante el transporte y la manipulación. Por otro lado, la espuma actúa como un amortiguador suave, envolviendo cada huevo y minimizando el impacto de vibraciones y movimientos bruscos. Esta combinación de materiales asegura que los huevos lleguen a su destino en óptimas condiciones, manteniendo su frescura y calidad.`
        },
        {
            name: "Inquebrantables",
            distributor: "La Canasta S.A.",
            manufacturer: "Incubadora Santander S.A.",
            description: " 'Inquebrantables' ofrece huevos de calidad superior, con cáscaras resistentes y yemas vibrantes. Nuestra marca se compromete con la frescura y el sabor excepcional, brindando a las familias la confianza de un producto nutritivo y delicioso en cada comida.",
            slogan: "La fuerza que alimenta tu día",
            features: ["Cáscara Reforzada", "Yema de Color Intenso", "Frescura Garantizada", "Alto Valor Nutricional", "Sabor Excepcional"],
            image: "inquebrantable-portada.webp", 
            logo: "newinquebrantables.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/50",
            bannerImage: "inquebrantables-box.webp",
            additionalInfo: "El diseño del empaque prioriza la protección y presentación óptima de los huevos. El cartón corrugado ofrece resistencia y amortiguación ante golpes, mientras que la espuma crea un lecho suave que previene roturas. La cápsula de plástico individual asegura que cada huevo permanezca fijo, evitando movimientos indeseados y garantizando una presentación impecable al abrir el empaque."
        },
        {
            name: "Econido",
            distributor: "La Canasta S.A.",
            manufacturer: "Nutrizen S.A.",
            description: "Econido es una marca colombiana de huevos 100% orgánicos, comprometida con la sostenibilidad y el bienestar animal. Sus gallinas son criadas en libertad, alimentadas con una dieta natural y libre de químicos, lo que garantiza huevos de alta calidad, ricos en nutrientes y con un sabor auténtico.",
            slogan: "Huevos 100% orgánicos, frescura y bienestar en cada cáscara.",
            features: ["Huevo AA", "100% Orgánicos"],
            image: "econido-fondo.webp", 
            logo: "econido.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/30",
            bannerImage: "econido-box.webp",
            additionalInfo: "La cartulina de medio gramaje es el material principal del empaque debido a su equilibrio entre resistencia y flexibilidad, proporcionando estabilidad durante el transporte y almacenamiento. Su estructura interna cuenta con compartimentos individuales que protegen al huevos evitando así el contacto directo y reducir el riesgo de fracturas. Además, su ligereza y capacidad para absorber impactos leves lo hacen funcional, mientras que su carácter biodegradable y reciclable lo convierte en una opción sostenible frente a materiales plásticos."
        },
        {
            name: "HUEVIX",
            distributor: "La Canasta S.A.",
            manufacturer: "NutriSabana",
            description: "HUEVIX es una marca especializada en la distribución de huevos criollos provenientes de gallinas criadas en libertad en la sabana Sucreña. Su compromiso con la calidad y el bienestar animal garantiza huevos más frescos, nutritivos y con un sabor auténtico. Con un enfoque sostenible y natural, HUEVIX ofrece un producto ideal para quienes buscan una alimentación más saludable y responsable.",
            slogan: "La excelencia en cada cáscara",
            features: ["Cáscara resistente y natural", "Sabor auténtico", "Alto valor nutriciona", "Producción libre de químicos", "Sostenibles y frescos"],
            image: "huevix-portada.webp", 
            logo: "huevix.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/50",
            bannerImage: "huevix-box.webp",
            additionalInfo: "El cartón corrugado es ideal para el empaque de huevos porque ofrece protección, resistencia y sostenibilidad. Su estructura amortigua golpes y vibraciones, reduciendo el riesgo de rotura durante el transporte. Además, es un material ligero, reciclable y biodegradable, lo que lo convierte en una opción ecológica. Su diseño permite una buena ventilación, manteniendo la frescura del producto, y facilita el almacenamiento y apilamiento eficiente."
        },
        {
            name: "EGGYES",
            distributor: "La Canasta S.A.",
            manufacturer: "Morales S.A.",
            description: "Nuestra marca ofrece huevos frescos y de alta calidad, producidos con amor y dedicación en nuestras granjas locales. Nuestros huevos criollos son el resultado de una tradición familiar y una pasión por la agricultura sostenible. Disfruta del sabor auténtico y la textura suave de nuestros huevos, perfectos para cualquier receta.",
            slogan: "EGGYES Criollos: Sabor y Tradición",
            features: ["Alto valor nutricional ", "Sabor auténtico", "Producción libre de químicos"],
            image: "eggyes-portada.webp", 
            logo: "eggyes.webp",
            fallbackEmoji: "🥚",
            color: "bg-farm-beige/50",
            bannerImage: "eggyes-box.webp",
            additionalInfo: "El cartón corrugado de dos milímetros de grosor me permite relalizar dobleces resistentes y limpios que permite  que mi diseño sea más resistente a caídas y golpes"
        }
    ]

    const [activeBrand, setActiveBrand] = useState(0)
    const [imageErrors, setImageErrors] = useState({})
    const [bannerErrors, setBannerErrors] = useState({})
    const carouselRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)
    
    // Check if active brand has an image error
    const hasImageError = (index) => {
        return imageErrors[index] || !eggBrands[index].image;
    }
    
    // Check if active brand has a banner error
    const hasBannerError = (index) => {
        return bannerErrors[index] || !eggBrands[index].bannerImage;
    }
    
    // Scroll to active brand in vertical carousel
    useEffect(() => {
        if (carouselRef.current) {
            const brandElements = carouselRef.current.querySelectorAll('.brand-item');
            if (brandElements[activeBrand]) {
                brandElements[activeBrand].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }
        }
    }, [activeBrand]);
    
    // Handle mouse events for custom scrolling in carousel
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.pageY - carouselRef.current.offsetTop);
        setScrollTop(carouselRef.current.scrollTop);
    }
    
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const y = e.pageY - carouselRef.current.offsetTop;
        const walk = (y - startY) * 2; // Scroll multiplier
        carouselRef.current.scrollTop = scrollTop - walk;
    }
    
    const handleMouseUp = () => {
        setIsDragging(false);
    }

    // Add CSS styles to head
    useEffect(() => {
        // Create a style element
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #f8f9fa;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: #d2b48c;
                border-radius: 20px;
            }
        `;
        
        // Append style to head
        document.head.appendChild(styleElement);
        
        // Cleanup function to remove style when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

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

                {/* Mobile Brand Selector - Improved horizontal scrollable cards */}
                <div className="lg:hidden mb-8">
                    <div className="overflow-x-auto pb-4 -mx-4 px-4">
                        <div className="flex w-max gap-4">
                            {eggBrands.map((brand, index) => (
                                <div 
                                    key={index}
                                    className={`flex flex-col items-center rounded-lg min-w-[150px] max-w-[150px] shadow-sm transition-all duration-300 ${
                                        activeBrand === index
                                            ? 'bg-white border-2 border-farm-cafeClaro transform -translate-y-1 shadow-md'
                                            : 'bg-farm-50 border border-farm-200'
                                    }`}
                                    onClick={() => setActiveBrand(index)}
                                >
                                    {/* Logo Container */}
                                    <div className="w-full h-20 bg-white rounded-t-lg flex items-center justify-center relative overflow-hidden p-2">
                                        {activeBrand === index && (
                                            <div className="absolute top-0 right-0">
                                                <div className="bg-farm-cafeClaro text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                                    Seleccionado
                                                </div>
                                            </div>
                                        )}
                                        {brand.logo ? (
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                className="h-16 object-contain"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-farm-cafeClaro">{brand.name.charAt(0)}</span>
                                        )}
                                    </div>
                                    
                                    {/* Brand Info */}
                                    <div className="p-3 text-center w-full">
                                        <h3 className="font-bold text-sm text-farm-cafeOscuro line-clamp-1 mb-1">{brand.name}</h3>
                                        <p className="text-xs text-farm-700 italic line-clamp-2 mb-2">"{brand.slogan}"</p>
                                        <div className="mt-auto">
                                            <button 
                                                className={`text-xs px-3 py-1 rounded-full w-full ${
                                                    activeBrand === index ? 'bg-farm-cafeClaro text-white' : 'bg-white text-farm-cafeClaro border border-farm-cafeClaro/30'
                                                }`}
                                            >
                                                Ver detalles
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Scroll indicator */}
                    <div className="flex justify-center mt-2">
                        <div className="flex space-x-1">
                            {eggBrands.map((_, index) => (
                                <button
                                    key={index} 
                                    className={`w-2 h-2 rounded-full transition-all ${index === activeBrand ? 'w-4 bg-farm-cafeClaro' : 'bg-farm-200'}`}
                                    onClick={() => setActiveBrand(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Large detailed brand view - Made larger */}
                    <div className="min-h-80 w-full lg:w-2/3 order-2 lg:order-1">
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

                            {hasImageError(activeBrand) ? (
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
                                    className="w-full h-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                                    onError={() => setImageErrors(prev => ({...prev, [activeBrand]: true}))}
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
                                
                                {/* Nueva sección con banner horizontal y párrafo adicional */}
                                <div className="mt-8 pt-8 border-t border-farm-200">
                                    <h4 className="font-bold text-farm-cafeOscuro mb-4 text-lg md:text-xl">Troquel - {eggBrands[activeBrand].name}</h4>
                                    
                                    {/* Banner horizontal */}
                                    <div className="w-full rounded-lg overflow-hidden mb-4 shadow-md">
                                        {hasBannerError(activeBrand) ? (
                                            <div className="w-full h-44 bg-farm-50 flex items-center justify-center">
                                                <span className="text-farm-700">Imagen no disponible</span>
                                            </div>
                                        ) : (
                                            <img 
                                                src={eggBrands[activeBrand].bannerImage} 
                                                alt={`${eggBrands[activeBrand].name} banner`}
                                                className="w-full h-full object-cover"
                                                onError={() => setBannerErrors(prev => ({...prev, [activeBrand]: true}))}
                                            />
                                        )}
                                    </div>
                                    
                                    {/* Párrafo adicional */}
                                    <p className="text-farm-700 text-base md:text-lg bg-farm-50 p-4 rounded-lg">
                                        {eggBrands[activeBrand].additionalInfo}
                                    </p>
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

                    {/* Desktop - Vertical Carousel with Slider */}
                    <div className="w-full lg:w-1/5 order-1 lg:order-2 hidden lg:block">
                        <div className="h-1200 relative border border-farm-200 rounded-2xl overflow-hidden shadow-md bg-white">
                            {/* Slider track */}
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-farm-50">
                                
                            </div>

                            {/* Vertical Carousel */}
                            <div 
                                ref={carouselRef}
                                className="h-full overflow-y-auto custom-scrollbar pr-4"
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                {eggBrands.map((brand, index) => (
                                    <div
                                        key={index}
                                        className={`brand-item p-6 cursor-pointer transition-all duration-300 border-b border-farm-200 ${
                                            activeBrand === index
                                                ? 'bg-gradient-to-r from-farm-beige/20 to-farm-50 shadow-md'
                                                : 'hover:bg-farm-50/50'
                                        }`}
                                        onClick={() => setActiveBrand(index)}
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 flex items-center justify-center mr-3 bg-white rounded-full shadow-sm">
                                                {brand.logo ? (
                                                    <img
                                                        src={brand.logo}
                                                        alt={`Logo de ${brand.name}`}
                                                        className="w-12 h-12 object-contain"
                                                        onError={(e) => { e.target.style.display = 'none' }}
                                                    />
                                                ) : (
                                                    <span className="text-lg font-bold text-farm-cafeClaro">{brand.name.charAt(0)}</span>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-xl text-farm-cafeOscuro">{brand.name}</h3>
                                            

                                        </div>

                                        <p className="text-sm italic text-farm-700 border-l-2 border-farm-cafeClaro pl-2 py-1 mb-3">
                                            "{brand.slogan}"
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {brand.features.slice(0, 2).map((feature, idx) => (
                                                <span key={idx} className="bg-farm-50 border border-farm-200 text-farm-700 rounded-full px-2 py-0.5 text-xs">
                                                    {feature}
                                                </span>
                                            ))}
                                            {brand.features.length > 2 && (
                                                <span className="text-farm-cafeClaro text-xs">+{brand.features.length - 2} más</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Desktop - Call to action */}
                        <div className="mt-6 text-center">
                            <a href="#contact" className="farm-button inline-block">
                                Consultar Disponibilidad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EggBrands
