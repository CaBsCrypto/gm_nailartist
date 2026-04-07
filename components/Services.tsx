'use client';

import { FEATURED_SERVICES, WHATSAPP_NUMBER } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Services() {
    const colorMap: Record<string, string> = {
        blue: 'border-t-brand-blue hover:shadow-brand-blue/20',
        pink: 'border-t-brand-pink hover:shadow-brand-pink/20',
        yellow: 'border-t-brand-yellow hover:shadow-brand-yellow/20',
        green: 'border-t-brand-green hover:shadow-brand-green/20',
        purple: 'border-t-purple-500 hover:shadow-purple-500/20',
        orange: 'border-t-orange-400 hover:shadow-orange-400/20'
    };

    const textMap: Record<string, string> = {
        blue: 'text-brand-blue',
        pink: 'text-brand-pink',
        yellow: 'text-brand-yellow',
        green: 'text-brand-green',
        purple: 'text-purple-600',
        orange: 'text-orange-500'
    };

    const handleWhatsAppDirect = (serviceName: string) => {
        const message = encodeURIComponent(`¡Hola GM! 👋 Vi el servicio de *[${serviceName}]* en tu web y me gustaría consultar disponibilidad / agendar. ¿Me puedes ayudar? 🌸`);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <section id="servicios" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-4">
                        Servicios Destacados
                    </h2>
                    <div className="w-24 h-2 bg-brand-pink mx-auto mb-8 rounded-full" />
                    <p className="text-lg font-body text-gray-600">
                        Seleccionamos lo mejor para ti. Haz clic en el servicio que deseas y habla conmigo directamente por <span className="font-bold text-brand-green">WhatsApp</span> para agendar tu momento de belleza.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_SERVICES.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 100} direction="up" className="h-full">
                            <div 
                                onClick={() => handleWhatsAppDirect(service.name)}
                                className="bg-white rounded-[2rem] p-8 transition-all duration-500 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-brand-pink/20 relative group overflow-hidden cursor-pointer"
                                style={{ borderTop: `6px solid ${service.color === 'pink' ? '#ec4899' : service.color === 'blue' ? '#3b82f6' : service.color === 'yellow' ? '#f59e0b' : service.color === 'purple' ? '#a855f7' : service.color === 'green' ? '#10b981' : '#f97316'}` }}
                            >
                                {/* Glass Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl drop-shadow-sm filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                                        {service.icon}
                                    </span>
                                    <div className="p-2 bg-brand-green/10 rounded-full text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-heading font-black text-gray-900 mb-3 leading-tight">
                                    {service.name}
                                </h3>
                                <p className="text-gray-600 font-body mb-8 min-h-[48px] leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Inversión</span>
                                        <span className={`text-2xl font-heading font-black ${textMap[service.color]}`}>
                                            {service.price.startsWith('desde') || service.price === 'Cotizar' ? '' : '$'}{service.price}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className={`text-sm font-bold flex items-center gap-2 ${textMap[service.color]} group-hover:translate-x-1 transition-transform`}>
                                            Agendar <span className="text-lg">➔</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 font-body italic mb-6">
                        ¿No encuentras lo que buscas? Revisa nuestro catálogo completo o consúltame.
                    </p>
                    <button 
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola GM! 👋 Quisiera ver tu catálogo completo de servicios por favor.')}`, '_blank')}
                        className="btn-secondary px-8 py-3"
                    >
                        Ver Catálogo Completo
                    </button>
                </div>
            </div>
        </section>
    );
}
