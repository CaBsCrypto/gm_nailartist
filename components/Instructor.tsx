'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import FadeIn from './FadeIn';

export default function Instructor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courses = [
        { title: '🎨 Nail Art Básico', desc: 'Fundamentos del diseño a mano alzada', color: 'text-brand-yellow', border: 'border-brand-yellow/30' },
        { title: '💎 Técnica Avanzada', desc: 'Pedrería, 3D y encapsulados', color: 'text-brand-blue', border: 'border-brand-blue/30' },
        { title: '🧪 Gel & Acrílico', desc: 'Esculpido perfecto y nivelación', color: 'text-brand-pink', border: 'border-brand-pink/30' },
        { title: '🌿 Belleza Cruelty-Free', desc: 'Protocolos y productos éticos', color: 'text-brand-green', border: 'border-brand-green/30' },
    ];

    return (
        <section id="instructora" className="py-24 bg-[#111111] text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Bio & Philosophy */}
                    <FadeIn delay={100} direction="right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green border border-brand-green/30 font-bold rounded-full mb-8 text-sm">
                            <span className="text-lg">🐇</span>
                            100% Cruelty-Free
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
                            Más que uñas,<br />
                            <span className="text-brand-pink">Arte y Cuidado Ético.</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 font-body text-lg mb-10">
                            <p>
                                Soy <strong className="text-white">GM NailArtist</strong>, instructora certificada y apasionada por la belleza integral. Mi filosofía se basa en realzar tu estilo cuidando la salud de tus uñas y respetando a los animales.
                            </p>
                            <p>
                                Además de servicios de salón, ofrezco <strong>Capacitaciones 1 a 1 y Talleres Grupales</strong> para quienes buscan iniciar o perfeccionar su técnica. Aprenderás con atención personalizada y productos estrictamente cruelty-free.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary"
                        >
                            📅 Agenda tu sesión
                        </button>
                    </FadeIn>

                    {/* Right: Courses Grid */}
                    <FadeIn delay={300} direction="left" className="grid sm:grid-cols-2 gap-4">
                        {courses.map((course, i) => (
                            <div
                                key={course.title}
                                className={`bg-white/5 border ${course.border} rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm`}
                            >
                                <h3 className={`font-heading font-bold text-xl mb-2 ${course.color}`}>
                                    {course.title}
                                </h3>
                                <p className="text-gray-400 font-body text-sm">
                                    {course.desc}
                                </p>
                            </div>
                        ))}
                    </FadeIn>

                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
