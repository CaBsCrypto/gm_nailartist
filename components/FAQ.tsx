'use client';

import { useState, useRef, useEffect } from 'react';
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
        question: '¿Cuánto dura un set de uñas acrílicas o gel?',
        answer: 'Con los cuidados adecuados y nuestra preparación profesional, un set puede durar entre 3 a 5 semanas antes de necesitar mantenimiento (relleno).',
    },
    {
        question: '¿Qué productos utilizan? ¿Son Cruelty-Free?',
        answer: 'Utilizamos marcas profesionales de alta gama aprobadas internacionalmente. El 100% de nuestros insumos son libres de crueldad animal y veganos.',
    },
    {
        question: '¿Cómo funciona la atención a domicilio?',
        answer: 'Llevamos todo el equipo necesario a tu casa. Solo se cobra un pequeño recargo por movilización dependiendo de la comuna.',
    },
];

export default function FAQ() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    
    // Dragging state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 420 : 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Mouse Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        checkScroll();
    };

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
            {/* Soft decorative background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <FadeIn className="text-center mb-16">
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

                {/* Carousel with Arrows */}
                <div className="relative group/faq">
                    {/* Navigation Buttons (Desktop Only) */}
                    {canScrollLeft && (
                        <button 
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:scale-110 transition-all hidden md:flex"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {canScrollRight && (
                        <button 
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:scale-110 transition-all hidden md:flex"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    <div 
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onScroll={checkScroll}
                        className={`flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-12 -mx-6 px-6 sm:mx-0 sm:px-0 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-default'}`}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            #faq .overflow-x-auto::-webkit-scrollbar { display: none; }
                        `}} />

                        {/* Render Policies */}
                        {POLICIES.map((policy, i) => (
                            <FadeIn key={`policy-${i}`} delay={i * 100} direction="left" className="shrink-0 snap-center">
                                <div className={`${policy.bg} ${policy.border} ${policy.hoverBorder} backdrop-blur rounded-[2.5rem] p-8 md:p-10 w-[85vw] sm:w-[420px] h-[450px] border-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-2xl transition-all duration-500 group relative`}>
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
                            <FadeIn key={`faq-${i}`} delay={(POLICIES.length + i) * 100} direction="left" className="shrink-0 snap-center">
                                <div className="w-[85vw] sm:w-[420px] h-[450px] bg-blue-50/30 border-blue-100 hover:border-brand-blue backdrop-blur rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 flex flex-col hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                                    
                                    <div className="flex items-center gap-2 mb-8 text-brand-pink font-bold font-body text-xs uppercase tracking-widest bg-white/50 w-max px-3 py-1.5 rounded-full">
                                        <span>❓</span> Pregunta Frecuente
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
                
                {/* Drag hint */}
                <div className="text-center mt-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        ← Desliza para ver más →
                    </p>
                </div>
            </div>
        </section>
    );
}
