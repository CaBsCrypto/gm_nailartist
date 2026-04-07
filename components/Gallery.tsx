'use client';

import { useState } from 'react';
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
        if (category === 'Peluquería') serviceIndex = 5; // category-otros
        if (category === 'Eventos') serviceIndex = 4; // category-empresas

        setSelectedService(SERVICES[serviceIndex]);
        setIsServiceDetailOpen(true);
    };

    const handleBookingFromService = (serviceId: string, subServiceName?: string) => {
        setPreSelectedServiceId(serviceId);
        setPreSelectedSubService(subServiceName);
        setIsBookingOpen(true);
    };

    return (
        <section id="galeria" className="py-24 bg-brand-light">
            <div className="container mx-auto px-6 max-w-6xl">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Nuestra Galería
                    </h2>
                    <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto mb-8">
                        Explora el estilo y nivel de detalle de nuestros trabajos. Haz clic para ver servicios.
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

                {/* Modern Horizontal Carousel */}
                <div 
                    className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 sm:mx-0 sm:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Hack to hide scrollbar for webkit (Chrome/Safari) */}
                    <style dangerouslySetInnerHTML={{__html: `
                        #galeria .overflow-x-auto::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    {filteredItems.map((item, index) => {
                        return (
                            <FadeIn 
                                key={item.id} 
                                delay={(index % 4) * 100} 
                                direction="left" 
                                className="w-[42vw] sm:w-[220px] md:w-[260px] h-[220px] sm:h-[250px] md:h-[280px] snap-center cursor-pointer"
                            >
                                <div
                                    onClick={() => handleItemClick(item.category)}
                                    className={`relative group rounded-2xl md:rounded-3xl overflow-hidden h-full w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 ${item.imagePlaceholderColor}`}
                                >
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        sizes="(max-width: 768px) 45vw, 260px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                        loading={index < 4 ? "eager" : "lazy"}
                                    />
                                    
                                    {/* Subtle Overlay to indicate it's clickable */}
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                                            <span className="text-xl">➔</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
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

