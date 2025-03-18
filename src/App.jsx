import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import EggBrands from './components/EggGallery' // Actualizado el nombre pero manteniendo el mismo archivo
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ShakeDetector from './components/ShakeDetector'

function App() {
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
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Features />
                <ProductShowcase />
                <EggBrands />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            {isMobile && <ShakeDetector />}
        </div>
    )
}

export default App
