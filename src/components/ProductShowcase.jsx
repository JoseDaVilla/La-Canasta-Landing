import { useState } from 'react'

const ProductShowcase = () => {
    const [imageError, setImageError] = useState(false)
    const [activeRecipe, setActiveRecipe] = useState(0)
    
    // Recipes data
    const recipes = [
        {
            name: "Huevos Revueltos Perfectos",
            time: "10 min",
            difficulty: "Fácil",
            description: "Cremosos, suaves y llenos de sabor. La técnica perfecta para disfrutar nuestros huevos en su máxima expresión.",
            steps: [
                "Rompe 2-3 huevos en un recipiente y bátelos ligeramente con un tenedor.",
                "Calienta una sartén a fuego medio con una cucharada de mantequilla.",
                "Vierte los huevos y espera 10 segundos antes de empezar a moverlos.",
                "Con una espátula, mueve suavemente los huevos desde los bordes hacia el centro.",
                "Retira del fuego cuando estén apenas cuajados pero aún cremosos.",
                "Sazona con sal, pimienta y hierbas frescas al gusto."
            ]
        },
        {
            name: "Huevos al Horno con Vegetales",
            time: "20 min",
            difficulty: "Media",
            description: "Una receta nutritiva y colorida que resalta el sabor natural de nuestros huevos con vegetales frescos.",
            steps: [
                "Precalienta el horno a 180°C y engrasa 2 ramequines o moldes pequeños.",
                "Saltea en una sartén espinacas, champiñones y tomates cherry en aceite de oliva.",
                "Reparte los vegetales en los moldes y haz un hueco en el centro.",
                "Rompe un huevo en cada molde sobre los vegetales.",
                "Hornea por 10-12 minutos hasta que la clara esté cuajada pero la yema aún cremosa.",
                "Sirve inmediatamente con un poco de queso rallado y hierbas frescas."
            ]
        },
        {
            name: "Tortilla Española",
            time: "30 min",
            difficulty: "Media",
            description: "Un clásico español con nuestros huevos frescos, patatas y cebolla. Perfecta para cualquier momento del día.",
            steps: [
                "Corta 3 patatas medianas y 1 cebolla en rodajas finas.",
                "Fríe las patatas y cebolla a fuego lento en aceite de oliva hasta que estén tiernas.",
                "Escurre el exceso de aceite y mezcla con 5 huevos batidos, sal y pimienta.",
                "Vierte la mezcla en una sartén antiadherente a fuego medio-bajo.",
                "Cuando esté cuajada por abajo, dale la vuelta con ayuda de un plato.",
                "Cocina por el otro lado hasta que esté dorada y firme pero jugosa por dentro."
            ]
        }
    ]

    return (
        <section id="showcase" className="py-20 bg-farm-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-farm-beige/30 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-farm-100 rounded-full -ml-32 -mb-32 opacity-50"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-2xl text-farm-cafeClaro">Nuestros Productos</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-farm-cafeOscuro">Del Campo a Tu Mesa</h2>
                    <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-farm-200 relative mt-14 md:mt-0">
                            <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-farm-cafeClaro text-white rounded-full w-auto py-2 px-4 font-bold shadow-md">
                                ¡100% Natural!
                            </div>
                            <h3 className="text-2xl font-bold text-farm-cafeOscuro mb-4 mt-6">Huevos de Gallinas Felices</h3>
                            <p className="text-farm-700 mb-4">
                                Nuestras gallinas deambulan libremente en pastos verdes, recibiendo luz solar natural, 
                                alimentándose de plantas frescas e insectos. Esto resulta en huevos con:
                            </p>
                            
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-farm-cafeClaro" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Yemas de color amarillo intenso</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-farm-cafeClaro" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Mayor contenido de vitaminas y ácidos grasos</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-farm-cafeClaro" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Sabor incomparable y textura cremosa</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-farm-cafeClaro" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Cáscaras fuertes y naturalmente protectoras</span>
                                </li>
                            </ul>
                            
                            <div className="mt-6">
                                <a 
                                    href="#contact" 
                                    className="farm-button inline-block"
                                >
                                    Pedidos y Distribución
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {imageError ? (
                                <div className="aspect-square rounded-xl bg-farm-beige/50 flex items-center justify-center border-8 border-white shadow-xl">
                                    <div className="text-center p-8">
                                        <div className="text-7xl mb-4">🥚</div>
                                        <h3 className="text-xl font-bold text-farm-cafeOscuro">Huevos Frescos</h3>
                                        <p className="text-farm-600">Del gallinero a tu hogar</p>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src="huevo-frito.webp"
                                    alt="Huevos Frescos de La Canasta"
                                    className="w-full h-[400px] md:h-[450px] object-cover rounded-xl shadow-xl border-8 border-white"
                                    onError={() => setImageError(true)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Recipes Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <span className="font-handwriting text-2xl text-farm-cafeClaro">Ideas Culinarias</span>
                        <h2 className="text-3xl font-display font-bold mb-4 text-farm-cafeOscuro">Recetas con Nuestros Huevos</h2>
                        <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                        <p className="text-xl text-farm-700 max-w-3xl mx-auto">
                            Descubre deliciosas recetas para disfrutar al máximo nuestros huevos frescos.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {recipes.map((recipe, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full transition ${
                                    activeRecipe === index
                                        ? 'bg-farm-cafeClaro text-white'
                                        : 'bg-farm-100 text-farm-700 hover:bg-farm-200'
                                }`}
                                onClick={() => setActiveRecipe(index)}
                            >
                                {recipe.name}
                            </button>
                        ))}
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-farm-200">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-farm-cafeOscuro mb-2 md:mb-0">{recipes[activeRecipe].name}</h3>
                                <div className="flex gap-4">
                                    <span className="bg-farm-100 text-farm-700 px-3 py-1 rounded-full text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {recipes[activeRecipe].time}
                                    </span>
                                    <span className="bg-farm-beige/30 text-farm-800 px-3 py-1 rounded-full text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        {recipes[activeRecipe].difficulty}
                                    </span>
                                </div>
                            </div>
                            
                            <p className="text-farm-700 text-lg mb-6 italic border-l-4 border-farm-beige pl-4 py-2 bg-farm-50/50">
                                {recipes[activeRecipe].description}
                            </p>
                            
                            <h4 className="text-xl font-bold text-farm-cafeOscuro mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                                </svg>
                                Instrucciones
                            </h4>
                            
                            <ol className="space-y-4">
                                {recipes[activeRecipe].steps.map((step, idx) => (
                                    <li key={idx} className="flex">
                                        <span className="bg-farm-cafeClaro text-white w-7 h-7 rounded-full flex items-center justify-center shrink-0 mr-3">
                                            {idx + 1}
                                        </span>
                                        <p className="text-farm-700">{step}</p>
                                    </li>
                                ))}
                            </ol>
                            
                            <div className="mt-8 text-center">
                                <p className="text-farm-500 italic mb-4">¿Te gustó esta receta? ¡Compártela con tus amigos!</p>
                                <div className="flex justify-center space-x-4">
                                    <button className="text-farm-cafeClaro hover:text-farm-cafeOscuro">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button className="text-farm-cafeClaro hover:text-farm-cafeOscuro">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </button>
                                    <button className="text-farm-cafeClaro hover:text-farm-cafeOscuro">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
