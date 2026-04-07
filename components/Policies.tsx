'use client';

import { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const POLICIES = [
    {
        title: 'Políticas & Condiciones',
        icon: '📋',
        color: 'pink',
        items: [
            'No se devuelve el abono bajo ninguna circunstancia.',
            'Cambios de hora con al menos 24 horas de anticipación.',
            'Tolerancia de 15 minutos de espera o se pierde el abono.',
            'No se realizan mantenimientos sobre trabajos de otros salones.',
            'Por favor, ven a tu cita con tiempo y puntualidad.'
        ]
    },
    {
        title: 'Garantías del Servicio',
        icon: '🛡️',
        color: 'blue',
        items: [
            'Todos nuestros trabajos están 100% garantizados.',
            'La garantía dura 3 días desde el día del servicio.',
            'Pasado los 3 días, cualquier arreglo deberá cancelarse.',
            'Para validarla, envía foto y descripción del problema.',
            'Indicar nombre y datos personales para identificar el caso.'
        ]
    },
    {
        title: 'Información Adicional',
        icon: '💡',
        color: 'yellow',
        items: [
            'Servicios a domicilio disponibles para 3 o más personas.',
            'Abono estándar de $10.000 para reservar.',
            'Productos menores a $10.000 requieren abono del 50%.',
            'Consulta por disponibilidad para eventos especiales.'
        ]
    }
];

export default function Policies() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % POLICIES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const colors = {
        pink: 'from-brand-pink/20 to-brand-pink/5 border-brand-pink/20 text-brand-pink',
        blue: 'from-brand-blue/20 to-brand-blue/5 border-brand-blue/20 text-brand-blue',
        yellow: 'from-brand-yellow/20 to-brand-yellow/5 border-brand-yellow/20 text-brand-yellow'
    };

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/50 shadow-xl min-h-[400px] flex flex-col">
                    
                    {/* Slides */}
                    <div className="flex-1 relative">
                        {POLICIES.map((policy, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 ease-in-out flex flex-col justify-center ${
                                    index === activeIndex 
                                    ? 'opacity-100 translate-x-0 scale-100' 
                                    : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-3xl shadow-inner ${colors[policy.color as keyof typeof colors]}`}>
                                        {policy.icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight">
                                        {policy.title}
                                    </h3>
                                </div>

                                <ul className="space-y-4">
                                    {policy.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125 ${
                                                policy.color === 'pink' ? 'bg-brand-pink' : 
                                                policy.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-yellow'
                                            }`} />
                                            <p className="text-lg font-body text-gray-700 leading-relaxed italic">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/30 bg-white/20">
                        <div className="flex gap-3">
                            {POLICIES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2.5 rounded-full transition-all duration-500 ${
                                        index === activeIndex ? 'w-10 bg-brand-pink shadow-[0_0_10px_rgba(236,72,153,0.3)]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <button 
                                onClick={() => setActiveIndex((current) => (current - 1 + POLICIES.length) % POLICIES.length)}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
                            >
                                ←
                            </button>
                            <button 
                                onClick={() => setActiveIndex((current) => (current + 1) % POLICIES.length)}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-white transition-colors"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
