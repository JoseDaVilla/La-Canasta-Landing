import { useState } from 'react'

const Testimonials = () => {
    const [avatarErrors, setAvatarErrors] = useState({})
    
    const testimonials = [
        {
            name: "María González",
            role: "Chef de Restaurante",
            quote: "\"Los huevos de La Canasta son excepcionales. El sabor y color de las yemas es incomparable, y mis clientes siempre notan la diferencia en mis platos.\"",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg",
            initials: "MG"
        },
        {
            name: "Carlos Rodríguez",
            role: "Cliente Habitual",
            quote: "\"Desde que descubrí La Canasta, no compro huevos en ningún otro lugar. La frescura y el sabor son como los que recordaba de la casa de mi abuela en el campo.\"",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg",
            initials: "CR"
        },
        {
            name: "Ana Martínez",
            role: "Nutricionista",
            quote: "\"Recomiendo los huevos de La Canasta a todos mis pacientes. El bienestar de sus gallinas se refleja en la calidad nutricional de sus huevos, ricos en omega-3 y vitaminas.\"",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg",
            initials: "AM"
        }
    ]
    
    const handleAvatarError = (index) => {
        setAvatarErrors(prev => ({
            ...prev,
            [index]: true
        }))
    }

    return (
        <section id="testimonials" className="py-20 bg-farm-50 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-32 bg-farm-beige/20 rounded-full -ml-10 -mt-10"></div>
            <div className="absolute right-0 bottom-0 w-40 h-40 bg-farm-beige/20 rounded-full -mr-10 -mb-10"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-2xl text-farm-cafeClaro">Opiniones</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-farm-cafeOscuro">LO QUE DICEN NUESTROS CLIENTES</h2>
                    <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                    <p className="text-xl text-farm-700 max-w-3xl mx-auto">
                        No solo nos creas a nosotros. Descubre lo que piensan quienes disfrutan de nuestros huevos frescos cada día.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-farm-100">
                            <div className="flex items-center mb-6">
                                {avatarErrors[index] ? (
                                    <div className="w-16 h-16 rounded-full mr-4 bg-farm-beige/50 flex items-center justify-center text-farm-cafeOscuro font-bold text-xl">
                                        {testimonial.initials}
                                    </div>
                                ) : (
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-farm-beige"
                                        onError={() => handleAvatarError(index)}
                                    />
                                )}
                                <div>
                                    <h3 className="font-bold text-lg text-farm-cafeOscuro">{testimonial.name}</h3>
                                    <p className="text-farm-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-farm-700 italic">
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <a href="#contact" className="farm-button inline-block">
                        Comparte Tu Experiencia
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
