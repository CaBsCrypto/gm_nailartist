'use client';

import { FEATURED_SERVICES, WHATSAPP_NUMBER } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Services() {
    const colorStyles: Record<string, { bg: string, border: string, text: string, hoverBorder: string, hoverShadow: string }> = {
        blue: { bg: 'bg-blue-50/50', border: 'border-blue-100', text: 'text-brand-blue', hoverBorder: 'hover:border-brand-blue', hoverShadow: 'hover:shadow-brand-blue/20' },
        pink: { bg: 'bg-pink-50/50', border: 'border-pink-100', text: 'text-brand-pink', hoverBorder: 'hover:border-brand-pink', hoverShadow: 'hover:shadow-brand-pink/20' },
        yellow: { bg: 'bg-amber-50/50', border: 'border-amber-100', text: 'text-brand-yellow', hoverBorder: 'hover:border-brand-yellow', hoverShadow: 'hover:shadow-brand-yellow/20' },
        green: { bg: 'bg-green-50/50', border: 'border-green-100', text: 'text-brand-green', hoverBorder: 'hover:border-brand-green', hoverShadow: 'hover:shadow-brand-green/20' },
        purple: { bg: 'bg-purple-50/50', border: 'border-purple-100', text: 'text-purple-600', hoverBorder: 'hover:border-purple-500', hoverShadow: 'hover:shadow-purple-500/20' },
        orange: { bg: 'bg-orange-50/50', border: 'border-orange-100', text: 'text-orange-500', hoverBorder: 'hover:border-orange-400', hoverShadow: 'hover:shadow-orange-400/20' }
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
                    {FEATURED_SERVICES.map((service, index) => {
                        const style = colorStyles[service.color] || colorStyles.pink;
                        return (
                            <FadeIn key={service.id} delay={index * 100} direction="up" className="h-full">
                                <div 
                                    onClick={() => handleWhatsAppDirect(service.name)}
                                    className={`${style.bg} ${style.border} ${style.hoverBorder} ${style.hoverShadow} rounded-[2rem] p-8 transition-all duration-500 border-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2 relative group overflow-hidden cursor-pointer h-full flex flex-col`}
                                >
                                    {/* Glass Glow Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="relative">
                                            <span className="text-5xl drop-shadow-sm transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 block">
                                                {service.icon}
                                            </span>
                                            <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-white ${style.text.replace('text-', 'bg-')} animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        </div>
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
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100/50">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Valor</span>
                                            <span className={`text-2xl font-heading font-black ${style.text}`}>
                                                {service.price.startsWith('desde') ? (
                                                    <>
                                                        <span className="text-sm font-bold lowercase mr-1">desde</span>
                                                        ${service.price.replace('desde ', '')}
                                                    </>
                                                ) : service.price === 'Cotizar' || service.price === 'A consultar' || service.price === 'Ver más' ? (
                                                    service.price
                                                ) : (
                                                    `$${service.price}`
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className={`text-sm font-bold flex items-center gap-2 ${style.text} group-hover:translate-x-1 transition-transform`}>
                                                Agendar <span className="text-lg">➔</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 font-body italic mb-6">
                        ¿No encuentras lo que buscas? Revisa nuestro catálogo completo o consúltame.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => window.open('https://instagram.com/gm.nailartist', '_blank')}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-heading font-black rounded-full hover:shadow-[0_10px_25px_-5px_rgba(219,39,119,0.3)] hover:scale-[1.03] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer border-0"
                        >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                            <span>Ver Diseños en Instagram</span>
                        </button>
                        <button 
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola GM! 👋 Quisiera ver tu catálogo completo de servicios por favor.')}`, '_blank')}
                            className="w-full sm:w-auto btn-secondary px-8 py-4"
                        >
                            Ver Catálogo Completo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
