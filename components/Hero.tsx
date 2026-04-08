'use client';

import { useState } from 'react';
import BookingModal from './BookingModal';
import ServiceDetailModal from './ServiceDetailModal';
import FadeIn from './FadeIn';
import { Service } from '@/lib/types';
import { SERVICES } from '@/lib/constants';

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);
    const [preSelectedSubService, setPreSelectedSubService] = useState<string | undefined>(undefined);

    const openServiceDetail = (service: Service) => {
        setSelectedService(service);
        setIsServiceDetailOpen(true);
    };

    const handleBookingFromService = (serviceId: string, subServiceName?: string) => {
        setPreSelectedServiceId(serviceId);
        setPreSelectedSubService(subServiceName);
        setIsBookingOpen(true);
    };

    const gradients = {
        pink: 'from-brand-pink to-rose-400',
        yellow: 'from-brand-yellow to-orange-300',
        blue: 'from-brand-blue to-purple-500',
        green: 'from-brand-green to-emerald-400',
        purple: 'from-purple-500 to-indigo-600',
        orange: 'from-orange-400 to-red-500'
    };

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
                                onClick={() => {
                                    setPreSelectedServiceId(undefined);
                                    setPreSelectedSubService(undefined);
                                    setIsBookingOpen(true);
                                }}
                                className="btn-primary px-8 py-4 text-lg"
                            >
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Agenda tu hora</span>
                            </button>
                            <a href="#servicios" className="btn-secondary px-8 py-4 text-lg">
                                Ver destacados &rarr;
                            </a>
                        </div>
                    </FadeIn>

                    {/* Right Visual Grid (Category Mosaic) */}
                    <FadeIn delay={300} direction="left" className="relative">
                        {/* Floating Badges */}
                        <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur glass-card px-4 py-3 rounded-2xl animate-float z-20 flex items-center gap-3 border-amber-200 shadow-amber-900/10">
                            <span className="text-2xl">⭐</span>
                            <div>
                                <p className="font-heading font-black text-amber-600 leading-none">+300</p>
                                <p className="font-body text-xs text-gray-500 font-bold">Clientas</p>
                            </div>
                        </div>

                        <div className="absolute -right-4 bottom-10 bg-white/90 backdrop-blur glass-card px-4 py-3 rounded-2xl animate-float z-20 shadow-xl" style={{ animationDelay: '1.5s' }}>
                            <p className="font-body font-bold text-brand-green flex items-center gap-2">
                                <span>🐇</span> 100% Cruelty-Free
                            </p>
                        </div>

                        {/* Mosaic Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                            <div className="space-y-3 sm:gap-4 pt-12">
                                {/* Manicure */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[0])}
                                    className={`w-full aspect-[3/4] rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.pink} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[0].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[0].name}
                                        </span>
                                    </div>
                                </div>

                                {/* Pedicure */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[1])}
                                    className={`w-full aspect-square rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.yellow} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[1].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[1].name}
                                        </span>
                                    </div>
                                </div>

                                {/* Retiro */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[2])}
                                    className={`w-full aspect-[3/4] rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.blue} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[2].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[2].name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 sm:gap-4">
                                {/* Clases */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[3])}
                                    className={`w-full aspect-square rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.green} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[3].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[3].name}
                                        </span>
                                    </div>
                                </div>

                                {/* Empresas */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[4])}
                                    className={`w-full aspect-[3/4] rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.purple} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[4].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[4].name}
                                        </span>
                                    </div>
                                </div>

                                {/* Otros */}
                                <div 
                                    onClick={() => openServiceDetail(SERVICES[5])}
                                    className={`w-full aspect-square rounded-[30px] sm:rounded-[40px] border-4 border-white shadow-xl bg-gradient-to-br ${gradients.orange} overflow-hidden relative group cursor-pointer transition-transform hover:-translate-y-2`}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                        <span className="text-3xl mb-2">{SERVICES[5].icon}</span>
                                        <span className="font-heading font-black text-xl leading-none">Ver más</span>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pb-8 group-hover:opacity-0 transition-opacity px-2 pointer-events-none">
                                        <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-xs font-bold border border-white/40 uppercase tracking-[0.2em] block truncate shadow-lg">
                                            {SERVICES[5].name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
                initialServiceId={preSelectedServiceId}
                initialSubServiceName={preSelectedSubService}
            />

            <ServiceDetailModal 
                isOpen={isServiceDetailOpen} 
                onClose={() => setIsServiceDetailOpen(false)} 
                service={selectedService}
                onBooking={handleBookingFromService}
            />
        </section>
    );
}
