import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        interest: 'individual'
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real application, you would submit the form data to your backend here
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
            interest: 'individual'
        })

        // Reset submission status after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false)
        }, 5000)
    }

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-farm-beige/20 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-farm-beige/20 rounded-full -ml-20 -mb-20"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="font-handwriting text-2xl text-farm-cafeClaro">Contáctanos</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-farm-cafeOscuro">¿QUIERES NUESTROS HUEVOS?</h2>
                        <div className="w-24 h-1 bg-farm-beige mx-auto mb-6"></div>
                        <p className="text-xl text-farm-700 max-w-3xl mx-auto">
                            ¿Interesado en nuestros productos? ¿Tienes preguntas o deseas hacer un pedido?
                            ¡Nos encantaría saber de ti!
                        </p>
                    </div>

                    <div className="bg-farm-50 rounded-xl p-8 md:p-10 shadow-lg border border-farm-200">
                        {isSubmitted ? (
                            <div className="text-center py-10">
                                <div className="text-farm-cafeClaro text-5xl mb-4">✓</div>
                                <h3 className="text-2xl font-display font-bold mb-2 text-farm-cafeOscuro">¡GRACIAS!</h3>
                                <p className="text-farm-700">Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 font-medium text-farm-700">Tu Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-farm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-cafeClaro shadow-sm"
                                            placeholder="Juan Pérez"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 font-medium text-farm-700">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-farm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-cafeClaro shadow-sm"
                                            placeholder="tu@correo.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="interest" className="block mb-2 font-medium text-farm-700">Me interesa</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-farm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-cafeClaro shadow-sm bg-white"
                                    >
                                        <option value="individual">Compra Individual</option>
                                        <option value="wholesale">Pedido al Por Mayor</option>
                                        <option value="distribution">Distribución</option>
                                        <option value="other">Otra Consulta</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 font-medium text-farm-700">Tu Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-farm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-cafeClaro shadow-sm"
                                        placeholder="Por favor, dinos cómo podemos ayudarte..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="farm-button w-full md:w-auto"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
