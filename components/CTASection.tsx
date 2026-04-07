'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function CTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative py-24 pb-32 md:pb-24 bg-white overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-pink/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center animate-fadeUp">
                <h2 className="text-5xl md:text-6xl font-heading font-black text-gray-900 mb-6 tracking-tight">
                    Agenda tu hora <span className="text-brand-blue">hoy mismo.</span>
                </h2>

                <p className="text-xl md:text-2xl font-body text-gray-600 mb-12 max-w-2xl mx-auto">
                    No dejes para mañana las uñas que puedes lucir hoy. Reserva tu espacio y vive la experiencia integral.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto btn-primary text-lg"
                    >
                        📅 Agenda tu hora
                    </button>

                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Tengo%20una%20consulta%20rápida%20antes%20de%20agendar...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-whatsapp text-lg"
                    >
                        💬 Escríbenos directo
                    </a>
                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
