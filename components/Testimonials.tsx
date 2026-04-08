import FadeIn from './FadeIn';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Camila Rojas',
            role: 'Clienta Frecuente',
            text: '¡Las mejores uñas que me he hecho! El nivel de detalle en el Nail Art es impresionante y la atención es un 10/10. Mis uñas con kapping duran intactas semanas.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Valentina Soto',
            role: 'Alumna del Curso Básico',
            text: 'Tomé el curso de manicure inicial y fue una experiencia increíble. La profesora es muy paciente, explica cada detalle y el ambiente es súper acogedor.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Daniela Miranda',
            role: 'Evento Corporativo',
            text: 'Contratamos el servicio para un evento de la empresa por el Día de la Mujer y fue un éxito total. Todas quedaron felices con el servicio express.',
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-blue mb-4">
                        Lo que dicen <span className="text-brand-pink">nuestras clientas</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
                        Más de 500 manos felices avalan nuestro trabajo. Cada set es creado con amor, paciencia y los mejores productos cruelty-free.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={index * 200} className="h-full">
                            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-brand-pink/10 transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 flex-grow">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-pink to-brand-blue rounded-full p-0.5">
                                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-heading font-bold text-lg text-brand-blue">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-black text-gray-900">{testimonial.name}</h4>
                                        <p className="font-body text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
