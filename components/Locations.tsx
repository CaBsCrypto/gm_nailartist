import { LOCATIONS } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Locations() {
    const mapColors = {
        blue: 'bg-brand-blue/10 border-brand-blue/20',
        pink: 'bg-brand-pink/10 border-brand-pink/20',
    };

    const badgeColors = {
        blue: 'bg-brand-blue text-white',
        pink: 'bg-brand-pink text-white',
    };

    const shadowHover = {
        blue: 'hover:shadow-brand-blue/30',
        pink: 'hover:shadow-brand-pink/30',
    };

    return (
        <section id="ubicaciones" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Nuestras Sedes
                    </h2>
                    <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
                        Dos ubicaciones conectadas para entregarte el mejor servicio. Selecciona tu preferida al agendar.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {LOCATIONS.map((loc, i) => (
                        <FadeIn key={loc.id} delay={i * 200} direction="up" className="h-full">
                            <div
                                className={`h-full bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${shadowHover[loc.color]}`}
                            >
                                {/* Fake Map Generator */}
                                <div className={`w-full h-64 rounded-2xl mb-8 relative overflow-hidden flex items-center justify-center border ${mapColors[loc.color]}`}>
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 to-transparent background-size-200 background-position-center animate-pulse-slow"></div>

                                    {/* Pin Map Animado */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-float ${badgeColors[loc.color]} shadow-lg`}>
                                            📍
                                        </div>
                                        <div className={`w-6 h-2 rounded-[50%] bg-black/20 mt-2 blur-[2px]`}></div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 text-center">
                                        <span className="text-xs font-bold font-body text-gray-500 uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                                            Mapa de referencia
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold font-body ${badgeColors[loc.color]}`}>
                                        {loc.metro}
                                    </span>
                                    <h3 className="text-3xl font-heading font-black text-gray-900">
                                        {loc.name}
                                    </h3>
                                    <p className="text-gray-600 font-body text-lg">
                                        {loc.description}
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
