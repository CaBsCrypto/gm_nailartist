import FadeIn from './FadeIn';

export default function StatsBar() {
    const stats = [
        { label: 'Clientas', value: '+300' },
        { label: 'Diseños Únicos', value: '100+' },
        { label: 'Rating Promedio', value: '5.0 ⭐' },
        { label: 'Años de Experiencia', value: '8+' },
    ];

    return (
        <section className="bg-brand-blue py-12 md:py-16 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {stats.map((stat, i) => (
                        <FadeIn key={stat.label} delay={i * 100} direction="up">
                            <div>
                                <p className="font-heading font-black text-4xl md:text-5xl text-brand-yellow mb-2 tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="font-body font-bold text-white/90 text-sm md:text-base uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
