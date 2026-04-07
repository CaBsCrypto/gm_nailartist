'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_FILTERS, SERVICES } from '@/lib/constants';
import { Service } from '@/lib/types';
import FadeIn from './FadeIn';
import ServiceDetailModal from './ServiceDetailModal';
import BookingModal from './BookingModal';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    
    // Modal States
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);
    const [preSelectedSubService, setPreSelectedSubService] = useState<string | undefined>(undefined);

    const filteredItems = GALLERY_ITEMS.filter(
        item => activeFilter === 'Todos' || item.category === activeFilter
    );

    const handleItemClick = (category: string) => {
        let serviceIndex = 0; // Manicure por defecto
        if (category === 'Peluquería') serviceIndex = 5; 
        if (category === 'Eventos') serviceIndex = 4; 

        setSelectedService(SERVICES[serviceIndex]);
        setIsServiceDetailOpen(true);
    };

    const handleBookingFromService = (serviceId: string, subServiceName?: string) => {
        setPreSelectedServiceId(serviceId);
        setPreSelectedSubService(subServiceName);
        setIsBookingOpen(true);
    };

    return (
        <section id="galeria" className="py-24 bg-brand-light relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Nuestra Galería
                    </h2>
                    <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto mb-8">
                        Explora nuestro trabajo. Haz clic para ver servicios.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {GALLERY_FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full font-body font-bold text-sm transition-all ${activeFilter === filter
                                    ? 'bg-brand-blue text-white shadow-md'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-blue/50 hover:text-brand-blue'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Vertical Grid Display */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {filteredItems.map((item, index) => (
                        <FadeIn 
                            key={item.id} 
                            delay={(index % 4) * 100} 
                            direction="up" 
                            className="aspect-square"
                        >
                            <div
                                onClick={() => handleItemClick(item.category)}
                                className={`relative group rounded-2xl md:rounded-3xl overflow-hidden h-full w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 ${item.imagePlaceholderColor} cursor-pointer group`}
                            >
                                {/* Layer 1: Blurred Background (to fill gaps in the square) */}
                                <div className="absolute inset-0 scale-110">
                                    <Image 
                                        src={item.image} 
                                        alt="" 
                                        fill 
                                        className="object-cover blur-xl opacity-40 grayscale-[20%]" 
                                    />
                                </div>

                                {/* Layer 2: Main "Full" Image (object-contain ensures NO cropping) */}
                                <div className="absolute inset-2 flex items-center justify-center">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 260px"
                                        className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                                        loading={index < 8 ? "eager" : "lazy"}
                                    />
                                </div>
                                
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 border border-white/20">
                                        <span className="text-lg">➔</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12 text-gray-500 font-body">
                        No hay imágenes en esta categoría aún.
                    </div>
                )}
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

