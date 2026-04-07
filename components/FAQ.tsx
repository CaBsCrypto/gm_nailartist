'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const POLICIES = [
    {
        title: 'Políticas & Condiciones',
        icon: '📋',
        color: 'pink',
        span: 'md:col-span-2',
        gradient: 'from-pink-500 to-rose-500',
        items: [
            'No se devuelve el abono bajo ninguna circunstancia.',
            'Cambios de hora con al menos 24 horas de anticipación.',
            'Tolerancia de 15 minutos de espera o se pierde el abono.',
            'No se realizan mantenimientos sobre trabajos de otros salones.',
            'Por favor, ven a tu cita con tiempo y puntualidad.'
        ]
    },
    {
        title: 'Garantías',
        icon: '🛡️',
        color: 'blue',
        span: 'md:col-span-1',
        gradient: 'from-blue-500 to-indigo-500',
        items: [
            'Nuestros trabajos están 100% garantizados.',
            'Garantía de 5 días post-servicio.',
            'Arreglos posteriores con costo.',
            'Validación vía foto del problema.'
        ]
    },
    {
        title: 'Info & Abono',
        icon: '💡',
        color: 'yellow',
        span: 'md:col-span-1',
        gradient: 'from-amber-400 to-orange-500',
        items: [
            'Abono del 20% para reservar.',
            'Se descuenta del total final.',
            'Productos 100% Cruelty-Free.',
            'Domicilios aplicarán recargo.'
        ]
    }
];

const FAQS = [
    {
        question: '¿Cuánto dura un set de uñas?',
        answer: 'Dependiendo del servicio, entre 1.5 a 2.5 horas. Con los cuidados adecuados, un set puede durar entre 3 a 5 semanas antes de necesitar mantenimiento.',
    },
    {
        question: '¿Qué medios de pago aceptan?',
        answer: 'Aceptamos efectivo, transferencias bancarias y todas las tarjetas de crédito/débito a través de Webpay o Transbank.',
    },
    {
        question: '¿Puedo llevar mi propio diseño de referencia?',
        answer: '¡Por supuesto! Nos encanta la creatividad. Puedes enviarnos la foto por WhatsApp antes de tu cita para confirmar materiales y tiempo.',
    },
    {
        question: '¿Cómo funcionan los servicios a domicilio?',
        answer: 'Llevamos todo el equipo necesario a la comodidad de tu hogar. El costo del servicio incluye un recargo por movilización dependiendo de tu comuna.',
    },
    {
        question: '¿Tienen estacionamiento en sus sucursales?',
        answer: 'Sí, tanto en la sede de Providencia como en Las Condes contamos con espacios de estacionamiento para nuestras clientas o zonas seguras muy cercanas.',
    },
    {
        question: '¿Qué pasa si necesito reagendar mi cita?',
        answer: 'Puedes reagendar sin costo avisando con al menos 24 horas de anticipación. Si avisas el mismo día, se pierde el abono de reserva.',
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 pb-32 bg-brand-light/30 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="px-4 py-1.5 bg-white shadow-sm border border-gray-100 text-brand-pink text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
                        Centro de Información
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Todo lo que <span className="text-brand-pink">debes saber</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto">
                        Claridad y confianza absoluta antes de tu próxima experiencia GM.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Top Row: Policies Bento */}
                    {POLICIES.map((policy, i) => (
                        <FadeIn key={`policy-${i}`} delay={i * 100} className={`${policy.span} h-full`}>
                            <div className="group h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-700 relative overflow-hidden flex flex-col">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${policy.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
                                
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${policy.gradient} flex items-center justify-center text-xl text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                                        {policy.icon}
                                    </div>
                                    <h3 className="text-xl font-heading font-black text-gray-900 group-hover:text-brand-pink transition-colors">
                                        {policy.title}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {policy.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-gray-600 font-body text-sm leading-snug">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${policy.gradient} shrink-0`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}

                    {/* Bottom Row: FAQ Accordion Bento Hub */}
                    <FadeIn delay={400} className="md:col-span-4">
                        <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-white p-6 md:p-12 shadow-sm relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-100">
                                <span className="w-10 h-10 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center text-xl">❓</span>
                                <h3 className="text-2xl font-heading font-black text-gray-900">Preguntas Frecuentes</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
                                {FAQS.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 last:border-0 md:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-12 md:[&:nth-child(even)]:pl-6">
                                        <button
                                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                            className="w-full py-6 flex items-center justify-between text-left group"
                                        >
                                            <span className={`text-base md:text-lg font-heading font-bold transition-colors ${activeIndex === index ? 'text-brand-pink' : 'text-gray-700 group-hover:text-brand-pink'}`}>
                                                {faq.question}
                                            </span>
                                            <span className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-brand-pink border-brand-pink text-white rotate-45' : 'border-gray-200 text-gray-400 group-hover:border-brand-pink group-hover:text-brand-pink'}`}>
                                                +
                                            </span>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-gray-500 font-body text-sm md:text-base leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Footer Hint */}
                <FadeIn delay={800} className="mt-16 text-center">
                    <p className="text-sm font-body text-gray-400 italic">
                        ¿No encuentras lo que buscas? Chatea directamente con nosotros vía WhatsApp.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
