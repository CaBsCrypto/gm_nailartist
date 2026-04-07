import { WHATSAPP_NUMBER } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function CorporateEvents() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        'Hola GM NailArtist 👋 Quisiera cotizar un evento corporativo o clase grupal (Nail Party). Me gustaría recibir más información. 🌸'
    )}`;

    return (
        <section id="eventos" className="py-24 bg-brand-pink/5 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <FadeIn delay={200} direction="up" className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(255,105,180,0.15)] border border-brand-pink/10 grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/10 text-brand-pink font-bold rounded-full mb-6 text-sm">
                            <span className="text-lg">🎉</span>
                            Eventos & Nail Parties
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6 leading-tight tracking-tight">
                            Lleva la experiencia <br />
                            <span className="text-brand-pink">a tu empresa o grupo.</span>
                        </h2>

                        <p className="text-lg font-body text-gray-600 mb-8 leading-relaxed">
                            ¿Buscas una actividad diferente para el Día de la Mujer, pausas activas corporativas, o un cumpleaños inolvidable? Llevamos el estudio a donde estés con servicios express y clases grupales de Nail Art.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 font-heading font-bold text-white bg-gray-900 rounded-full transition-all hover:bg-black hover:-translate-y-1 hover:shadow-xl active:translate-y-0 text-lg gap-3"
                        >
                            Cotizar Evento
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="aspect-square bg-gradient-to-br from-brand-blue/20 to-brand-pink/20 rounded-3xl p-6 flex flex-col justify-end transition-transform hover:-translate-y-2 cursor-default border border-white/50 group shadow-sm hover:shadow-lg">
                                <span className="text-3xl mb-2 transform transition-transform group-hover:scale-110">🏢</span>
                                <h4 className="font-heading font-black text-gray-900 leading-tight">Empresas</h4>
                                <p className="font-body text-sm text-gray-600">Pausas activas y beneficios</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-4">
                            <div className="aspect-square bg-gradient-to-br from-brand-yellow/20 to-brand-green/20 rounded-3xl p-6 flex flex-col justify-end transition-transform hover:-translate-y-2 cursor-default border border-white/50 group shadow-sm hover:shadow-lg">
                                <span className="text-3xl mb-2 transform transition-transform group-hover:scale-110">🎈</span>
                                <h4 className="font-heading font-black text-gray-900 leading-tight">Cumpleaños</h4>
                                <p className="font-body text-sm text-gray-600">Nail Parties privadas</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-20">
                            <div className="aspect-square bg-gradient-to-br from-brand-pink/20 to-brand-yellow/20 rounded-3xl p-6 flex flex-col justify-end transition-transform hover:-translate-y-2 cursor-default border border-white/50 group shadow-sm hover:shadow-lg">
                                <span className="text-3xl mb-2 transform transition-transform group-hover:scale-110">🥂</span>
                                <h4 className="font-heading font-black text-gray-900 leading-tight">Privados</h4>
                                <p className="font-body text-sm text-gray-600">Coffee breaks & talleres</p>
                            </div>
                        </div>
                    </div>

                </FadeIn>
            </div>
        </section>
    );
}
