'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import FadeIn from './FadeIn';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-light">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-3xl animate-morph -translate-y-1/2 pointer-events-none" />
            <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Text Content */}
                    <FadeIn delay={100} className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green font-bold rounded-full mb-6 text-sm">
                            <span className="text-lg">🌿</span>
                            Cruelty-Free · Belleza Integral
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-heading font-black text-gray-900 leading-[1.1] mb-2">
                            Eleva tu estilo con <span className="text-brand-blue block mt-2 text-[1.1em]">GM NailArtist.</span>
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-heading font-black text-brand-pink mb-6">
                            Belleza & Boutique
                        </h2>

                        <p className="text-xl font-body text-gray-600 mb-8 max-w-xl leading-relaxed">
                            <span className="font-bold text-gray-800">Nail Art Profesional.</span> Belleza integral consciente en Santiago. Diseño de uñas, manicure spa y cursos para perfeccionar tu talento.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-primary text-lg"
                            >
                                📅 Agenda tu hora
                            </button>
                            <a href="#galeria" className="btn-secondary text-lg">
                                Ver galería &rarr;
                            </a>
                        </div>
                    </FadeIn>

                    {/* Right Visual Grid */}
                    <FadeIn delay={300} direction="left" className="relative">
                        {/* Floating Badges */}
                        <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur glass-card px-4 py-3 rounded-2xl animate-float z-20 flex items-center gap-3">
                            <span className="text-2xl">⭐</span>
                            <div>
                                <p className="font-heading font-black text-brand-blue leading-none">+500</p>
                                <p className="font-body text-xs text-gray-500 font-bold">Clientas felices</p>
                            </div>
                        </div>

                        <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur glass-card px-4 py-3 rounded-2xl animate-float z-20 shadow-xl" style={{ animationDelay: '1.5s' }}>
                            <p className="font-body font-bold text-brand-green flex items-center gap-2">
                                <span>🐇</span> 100% Cruelty-Free
                            </p>
                        </div>

                        {/* Nail Art Moodboard Grid */}
                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                            <div className="space-y-4 pt-12">
                                <div className="w-full aspect-[3/4] rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br from-brand-pink to-rose-400 overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Cromo</div>
                                </div>
                                <div className="w-full aspect-square rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br from-brand-yellow to-orange-300 overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Nail Art</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="w-full aspect-square rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br from-brand-blue to-purple-500 overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Acrílicas</div>
                                </div>
                                <div className="w-full aspect-[3/4] rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br from-brand-green to-emerald-400 overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm">Gel</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
