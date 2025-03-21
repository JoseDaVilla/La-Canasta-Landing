import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [logoError, setLogoError] = useState(false)

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-farm-cafeClaro">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    {logoError ? (
                        <div className="h-10 w-10 mr-2 bg-farm-beige rounded-full flex items-center justify-center text-farm-cafeOscuro font-bold text-xs">
                            LG
                        </div>
                    ) : (
                        <a href="#hero">
                            <img
                            src="/logo.webp"
                            alt="La Canasta Logo"
                            className="h-14 w-14 mr-2"
                            onError={() => setLogoError(true)}
                        />
                        </a>
                    )}
                    <div>
                        <span className="font-display text-2xl text-farm-cafeClaro extra-bold">LA CANASTA</span>
                        <p className="text-xs text-farm-cafeOscuro -mt-1">Huevos Frescos del Campo</p>
                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-farm-cafeOscuro" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="font-medium hover:text-farm-cafeClaro transition text-farm-700">Características</a>
                    <a href="#showcase" className="font-medium hover:text-farm-cafeClaro transition text-farm-700">Productos</a>
                    <a href="#gallery" className="font-medium hover:text-farm-cafeClaro transition text-farm-700">Marcas</a>
                    <a href="#recipes" className="font-medium hover:text-farm-cafeClaro transition text-farm-700">Recetas</a>
                    <a href="#testimonials" className="font-medium hover:text-farm-cafeClaro transition text-farm-700">Testimonios</a>
                    <a href="#contact" className="farm-button">Contáctanos</a>
                </nav>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-farm-50 px-4 py-2 shadow-lg border-t border-farm-200">
                    <nav className="flex flex-col space-y-4 pb-4">
                        <a href="#features" className="font-medium hover:text-farm-cafeClaro transition text-farm-700" onClick={() => setIsMenuOpen(false)}>Características</a>
                        <a href="#showcase" className="font-medium hover:text-farm-cafeClaro transition text-farm-700" onClick={() => setIsMenuOpen(false)}>Productos</a>
                        <a href="#gallery" className="font-medium hover:text-farm-cafeClaro transition text-farm-700" onClick={() => setIsMenuOpen(false)}>Marcas</a>
                        <a href="#recipes" className="font-medium hover:text-farm-cafeClaro transition text-farm-700" onClick={() => setIsMenuOpen(false)}>Recetas</a>
                        <a href="#testimonials" className="font-medium hover:text-farm-cafeClaro transition text-farm-700" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
                        <a href="#contact" className="farm-button text-center" onClick={() => setIsMenuOpen(false)}>Contáctanos</a>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
