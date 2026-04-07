'use client';

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
        question: '¿Cuánto dura un set?',
        answer: 'Entre 3 a 5 semanas antes de mantenimiento.',
        span: 'md:col-span-1',
    },
    {
        question: '¿Los productos son profesionales?',
        answer: 'Usamos marcas de alta gama 100% Cruelty-Free y Veganas. Cuidamos tu salud y el planeta.',
        span: 'md:col-span-2',
    },
    {
        question: '¿Vas a domicilio?',
        answer: 'Llevamos todo el equipo a tu casa. Solo se cobra un pequeño recargo por movilización.',
        span: 'md:col-span-1',
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-24 pb-32 bg-brand-light/30 relative overflow-hidden">
            {/* Background Accents (Glassy Blurs) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <FadeIn className="text-center mb-16">
                    <span className="px-4 py-1.5 bg-white shadow-sm border border-gray-100 text-brand-pink text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
                        Centro de Información
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Todo lo que <span className="text-brand-pink">necesitas saber</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto">
                        Claridad y confianza antes de tu primera cita.
                    </p>
                </FadeIn>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Top Row: Policies */}
                    {POLICIES.map((policy, i) => (
                        <FadeIn key={`policy-${i}`} delay={i * 100} className={`${policy.span} h-full`}>
                            <div className="group h-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-700 relative overflow-hidden flex flex-col">
                                {/* Subtle Hover Glow */}
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

                    {/* Bottom Row: FAQs Integrated into Bento */}
                    {FAQS.map((faq, i) => (
                        <FadeIn key={`faq-${i}`} delay={(POLICIES.length + i) * 100} className={`${faq.span} h-full`}>
                            <div className="group h-full bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col">
                                <span className="absolute top-4 right-6 text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-brand-pink/40 transition-colors">
                                    FAQ #{i + 1}
                                </span>
                                
                                <h4 className="text-lg font-heading font-black text-gray-900 mb-4 group-hover:text-brand-pink transition-colors">
                                    {faq.question}
                                </h4>
                                
                                <p className="text-gray-500 font-body text-sm leading-relaxed mt-auto border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Footer Hint */}
                <FadeIn delay={800} className="mt-16 text-center">
                    <p className="text-sm font-body text-gray-400 italic">
                        ¿Tienes más dudas? No dudes en contactarnos directamente.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
