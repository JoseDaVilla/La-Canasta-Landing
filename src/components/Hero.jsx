import { useState, useEffect } from 'react'

const Hero = () => {
    const [imageError, setImageError] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        // Check if user is on a mobile device
        const checkMobile = () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    return (
        <section id='hero' className="relative bg-farm-pattern bg-cover bg-center py-20 overflow-hidden">
            <div className="absolute inset-0 bg-farm-cafeOscuro/40"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center bg-white/95 p-8 md:p-12 rounded-lg shadow-xl border-4 border-farm-beige">
                    <span className="font-handwriting text-farm-cafeClaro text-2xl">Bienvenidos a</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-farm-cafeClaro leading-tight mb-4 extra-bold">
                        LA CANASTA
                    </h1>
                    <p className="text-xl text-farm-700 mb-8 max-w-2xl mx-auto">
                        Huevos frescos, directo del campo a tu mesa. Producidos con amor, 
                        en un ambiente natural y sostenible.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#showcase"
                            className="farm-button text-center"
                        >
                            Ver Productos
                        </a>
                        <a
                            href="#contact"
                            className="farm-button-outline text-center"
                        >
                            Contáctanos
                        </a>
                    </div>
                    {isMobile && (
                        <div className="mt-8 bg-farm-cafeClaro/10 border border-farm-cafeClaro/20 rounded-lg p-4 animate-pulse">
                            <p className="text-farm-cafeOscuro flex items-center justify-center">
                                <span className="mr-2 text-xl">🥚</span>
                                ¡Agita tu teléfono para una sorpresa!
                                <span className="ml-2 text-xl">🥚</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64">
                <img 
                    src="/canasta-huevo.webp" 
                    alt="Huevos Frescos" 
                    className="w-48 h-48 object-cover rounded-full border-4 border-white/80 shadow-xl transform rotate-12 absolute top-0 right-0"
                    onError={(e) => {e.target.style.display = 'none'}}
                />
            </div>
            

        </section>
    )
}

export default Hero
