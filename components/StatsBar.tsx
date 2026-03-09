import FadeIn from './FadeIn';

export default function StatsBar() {
    const stats = [
        { label: 'Clientas Felices', value: '+500' },
        { label: 'Diseños Únicos', value: '+200' },
        { label: 'Rating Promedio', value: '5.0 ⭐' },
        { label: 'Locales Oficiales', value: '2' },
    ];

    return (
        <section className="bg-brand-blue py-12 md:py-16">
            <div className="container mx-auto px-6 max-w-6xl">
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
