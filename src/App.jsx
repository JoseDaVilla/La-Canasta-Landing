import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import EggBrands from './components/EggGallery' // Actualizado el nombre pero manteniendo el mismo archivo
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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
        </div>
    )
}

export default App
