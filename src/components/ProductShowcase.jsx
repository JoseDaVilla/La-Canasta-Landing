import { useState } from 'react'

const ProductShowcase = () => {
    const [imageError, setImageError] = useState(false)

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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                            
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <a href="#contact" className="farm-button inline-block text-center">
                                    Pedidos y Distribución
                                </a>
                                <a href="#recipes" className="bg-farm-50 hover:bg-farm-100 text-farm-cafeClaro border border-farm-cafeClaro/30 px-5 py-2 rounded-lg transition-colors inline-block text-center">
                                    Ver Recetas
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
            </div>
        </section>
    )
}

export default ProductShowcase
