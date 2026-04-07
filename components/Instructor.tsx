'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import FadeIn from './FadeIn';

export default function Instructor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courses = [
        { title: '🎨 Nail Art Básico', desc: 'Fundamentos del diseño a mano alzada', color: 'text-amber-600', border: 'border-amber-200' },
        { title: '💎 Técnica Avanzada', desc: 'Pedrería, 3D y encapsulados', color: 'text-blue-600', border: 'border-blue-100' },
        { title: '🧪 Gel & Acrílico', desc: 'Esculpido perfecto y nivelación', color: 'text-amber-600', border: 'border-amber-200' },
        { title: '🌿 Belleza Cruelty-Free', desc: 'Protocolos y productos éticos', color: 'text-blue-600', border: 'border-blue-100' },
    ];

    return (
        <section id="instructora" className="py-24 bg-[#FDFCF9] text-gray-800 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Bio & Philosophy */}
                    <FadeIn delay={100} direction="right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 border border-blue-100 font-bold rounded-full mb-8 text-sm">
                            <span className="text-lg">🐇</span>
                            100% Cruelty-Free
                        </div>

                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight text-gray-900">
                            Más que uñas,<br />
                            <span className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent">Arte y Cuidado.</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 font-body text-lg mb-10">
                            <p>
                                Soy <strong className="text-gray-900">GM NailArtist</strong>, instructora certificada y apasionada por la belleza integral. Mi filosofía se basa en realzar tu estilo cuidando la salud de tus uñas y respetando a los animales.
                            </p>
                            <p>
                                Además de servicios de salón, ofrezco <strong>Capacitaciones 1 a 1 y Talleres Grupales</strong> para quienes buscan iniciar o perfeccionar su técnica. Aprenderás con atención personalizada y productos estrictamente cruelty-free.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-heading font-black rounded-2xl shadow-[0_10px_25px_-5px_rgba(180,130,50,0.3)] transition-all hover:-translate-y-1 flex items-center gap-2 active:scale-95"
                        >
                            📅 Agenda tu sesión
                        </button>
                    </FadeIn>

                    {/* Right: Courses Grid */}
                    <FadeIn delay={300} direction="left" className="grid sm:grid-cols-2 gap-4">
                        {courses.map((course, i) => (
                            <div
                                key={course.title}
                                className={`bg-white border ${course.border} rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all hover:-translate-y-1 group relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                                <h3 className={`font-heading font-bold text-xl mb-2 transition-colors relative ${course.color} group-hover:text-amber-700`}>
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 font-body text-sm relative">
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
