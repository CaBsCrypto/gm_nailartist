'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const FAQS = [
    {
        question: '¿Cuánto dura un set de uñas acrílicas o gel?',
        answer: 'Con los cuidados adecuados y nuestra preparación profesional, un set puede durar entre 3 a 5 semanas antes de necesitar mantenimiento (relleno).',
    },
    {
        question: '¿Tienen garantía los servicios?',
        answer: '¡Sí! Ofrecemos 5 días de garantía gratuita en caso de algún desprendimiento prematuro injustificado. Queremos que tus uñas luzcan perfectas siempre.',
    },
    {
        question: '¿Qué productos utilizan? ¿Son Cruelty-Free?',
        answer: 'Utilizamos marcas profesionales de alta gama aprobadas internacionalmente. El 100% de nuestros insumos son libres de crueldad animal y veganos.',
    },
    {
        question: '¿Cómo funciona la opción de atención a domicilio?',
        answer: 'Puedes agendar a domicilio pagando un pequeño recargo por movilización (dependiendo de tu comuna). Llevamos todo el equipo necesario, solo necesitamos una mesa bien iluminada para trabajar cómodamente en tu espacio.',
    },
    {
        question: '¿Es necesario abonar para agendar una hora?',
        answer: 'Sí, solicitamos un abono del 20% del valor del servicio para confirmar y asegurar tu reserva. Este monto se descuenta del total el día de tu cita.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-brand-light relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <FadeIn className="text-center mb-14">
                    <h2 className="text-4xl font-heading font-black text-brand-blue mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-gray-600 font-body">
                        Resolvemos todas tus dudas para que agendes con total tranquilidad.
                    </p>
                </FadeIn>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <FadeIn key={index} delay={index * 100} direction="up">
                            <div
                                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${openIndex === index ? 'shadow-brand-blue/10 border-brand-blue/20' : 'border border-gray-100 hover:border-gray-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className={`font-heading font-bold pr-4 transition-colors ${openIndex === index ? 'text-brand-pink' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-brand-pink text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-600 font-body leading-relaxed border-t pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
