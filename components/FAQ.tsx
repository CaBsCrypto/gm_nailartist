'use client';

import FadeIn from './FadeIn';

const POLICIES = [
    {
        title: 'Políticas & Condiciones',
        icon: '📋',
        color: 'pink',
        bg: 'bg-pink-50/50',
        border: 'border-pink-100',
        hoverBorder: 'hover:border-brand-pink',
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
        bg: 'bg-blue-50/50',
        border: 'border-blue-100',
        hoverBorder: 'hover:border-brand-blue',
        items: [
            'Todos nuestros trabajos están 100% garantizados.',
            'La garantía dura 5 días desde el día del servicio.',
            'Pasados los 5 días, cualquier arreglo deberá ser cancelado.',
            'Para validarla, envía foto y descripción del problema.'
        ]
    },
    {
        title: 'Info Importante',
        icon: '💡',
        color: 'yellow',
        bg: 'bg-amber-50/50',
        border: 'border-amber-100',
        hoverBorder: 'hover:border-brand-yellow',
        items: [
            'Servicios a domicilio aplican recargo por movilización.',
            'Abono estándar del 20% para reservar tu cupo.',
            'El abono se descuenta del total final del servicio.',
            'Utilizamos productos 100% Cruelty-Free y profesionales.'
        ]
    }
];

const FAQS = [
    {
        question: '¿Cuánto dura un set de uñas?',
        answer: 'Con los cuidados adecuados y nuestra preparación profesional, un set puede durar entre 3 a 5 semanas antes de necesitar mantenimiento (relleno).',
    },
    {
        question: '¿Qué productos utilizan?',
        answer: 'Utilizamos marcas profesionales de alta gama. El 100% de nuestros insumos son libres de crueldad animal y veganos.',
    },
    {
        question: '¿Cómo funciona el domicilio?',
        answer: 'Llevamos todo el equipo a tu casa. Solo se cobra un pequeño recargo por movilización dependiendo de la comuna.',
    },
];

export default function FAQ() {
    const iconColors: Record<string, string> = {
        pink: 'text-brand-pink bg-brand-pink/10 border border-brand-pink/20',
        blue: 'text-brand-blue bg-brand-blue/10 border border-brand-blue/20',
        yellow: 'text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20',
    };

    const dotColors: Record<string, string> = {
        pink: 'bg-brand-pink',
        blue: 'bg-brand-blue',
        yellow: 'bg-brand-yellow',
    };

    return (
        <section id="faq" className="py-24 pb-32 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <FadeIn className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink font-bold rounded-full mb-6 text-xs uppercase tracking-widest">
                        <span className="text-sm">💬</span>
                        Información a considerar
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Políticas & FAQ
                    </h2>
                    <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
                        Todo lo que necesitas saber antes de agendar tu próxima cita.
                    </p>
                </FadeIn>

                {/* Blended Grid of Policies and FAQs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Render Policies first */}
                    {POLICIES.map((policy, i) => (
                        <FadeIn key={`policy-${i}`} delay={i * 100} direction="up">
                            <div className={`${policy.bg} ${policy.border} ${policy.hoverBorder} backdrop-blur rounded-[2.5rem] p-8 md:p-10 h-full border-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:shadow-2xl transition-all duration-500 group relative hover:-translate-y-2`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${iconColors[policy.color]} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                        {policy.icon}
                                    </div>
                                    <h3 className="text-2xl font-heading font-black text-gray-900 leading-none">
                                        {policy.title}
                                    </h3>
                                </div>
                                <ul className="space-y-4">
                                    {policy.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-gray-600 font-body text-[15px] leading-snug">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 shadow-sm ${dotColors[policy.color]}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}

                    {/* Render FAQs */}
                    {FAQS.map((faq, i) => (
                        <FadeIn key={`faq-${i}`} delay={(POLICIES.length + i) * 100} direction="up">
                            <div className="bg-gray-50/50 border-gray-100 hover:border-brand-pink backdrop-blur rounded-[2.5rem] p-8 md:p-10 h-full border-2 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:shadow-2xl transition-all duration-500 group relative overflow-hidden hover:-translate-y-2">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                                
                                <div className="flex items-center gap-2 mb-8 text-brand-pink font-bold font-body text-xs uppercase tracking-widest bg-white/50 w-max px-3 py-1.5 rounded-full">
                                    <span>❓</span> FAQS
                                </div>
                                
                                <h3 className="text-xl md:text-2xl font-heading font-black text-gray-900 mb-6 leading-tight pr-4">
                                    {faq.question}
                                </h3>
                                
                                <div className="mt-auto">
                                    <div className="w-12 h-1 bg-gray-200 rounded-full mb-6" />
                                    <p className="text-gray-600 font-body leading-relaxed text-[15px]">
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
