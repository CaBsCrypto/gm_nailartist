import { SERVICES } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Services() {
    const colorMap = {
        blue: 'border-t-brand-blue hover:shadow-brand-blue/20',
        pink: 'border-t-brand-pink hover:shadow-brand-pink/20',
        yellow: 'border-t-brand-yellow hover:shadow-brand-yellow/20',
        green: 'border-t-brand-green hover:shadow-brand-green/20'
    };

    const textMap = {
        blue: 'text-brand-blue',
        pink: 'text-brand-pink',
        yellow: 'text-brand-yellow',
        green: 'text-brand-green'
    };

    return (
        <section id="servicios" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Servicios Destacados
                    </h2>
                    <p className="text-lg font-body text-gray-600">
                        Desde cuidado integral hasta formaciones profesionales. Selecciona el servicio que deseas y agenda tu hora en pocos minutos.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <FadeIn key={service.id} delay={index * 150} direction="up" className="h-full">
                            <div className={`bg-white rounded-2xl p-8 shadow-lg border-t-8 border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] h-full flex flex-col ${colorMap[service.color]}`}>
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-heading font-black text-gray-900 mb-3">
                                    {service.name}
                                </h3>
                                <p className="text-gray-600 font-body mb-6 min-h-[48px]">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm font-bold text-gray-400">Desde</span>
                                    <span className={`text-xl font-heading font-black ${textMap[service.color]}`}>
                                        ${service.price}
                                    </span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
