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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    
    // Dragging state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Modal States
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);
    const [preSelectedSubService, setPreSelectedSubService] = useState<string | undefined>(undefined);

    const filteredItems = GALLERY_ITEMS.filter(
        item => activeFilter === 'Todos' || item.category === activeFilter
    );

    // Update scroll buttons state
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [filteredItems]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 400 : 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Mouse Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        checkScroll();
    };

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

                {/* Carousel/Grid Wrapper */}
                <div className="relative group/gallery">
                    {/* Navigation Buttons (Visible on mobile if needed, but primarily desktop) */}
                    {canScrollLeft && (
                        <button 
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:scale-110 transition-all hidden md:flex"
                            aria-label="Anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {canScrollRight && (
                        <button 
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:scale-110 transition-all hidden md:flex"
                            aria-label="Siguiente"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Drag and Scroll Container: Mobile horizontal 2-row grid, Desktop vertical responsive grid */}
                    <div 
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onScroll={checkScroll}
                        className={`
                            grid gap-4 sm:gap-6 pb-8 transition-all select-none
                            grid-rows-2 grid-flow-col overflow-x-auto snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0
                            md:grid-rows-none md:grid-flow-row md:grid-cols-3 lg:grid-cols-4 md:overflow-visible
                            ${isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-default'}
                        `}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            #galeria .overflow-x-auto::-webkit-scrollbar { display: none; }
                        `}} />

                        {filteredItems.map((item, index) => (
                            <FadeIn 
                                key={item.id} 
                                delay={(index % 4) * 100} 
                                direction="up" 
                                className="w-[70vw] sm:w-[220px] md:w-auto aspect-square snap-center"
                            >
                                <div
                                    onClick={() => handleItemClick(item.category)}
                                    className={`relative group rounded-2xl md:rounded-3xl overflow-hidden h-full w-full border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-all duration-300 ${item.imagePlaceholderColor} cursor-pointer group`}
                                >
                                    {/* Main "Full" Image (object-contain ensures NO cropping) */}
                                    <div className="absolute inset-1.5 flex items-center justify-center">
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            fill 
                                            sizes="(max-width: 768px) 70vw, 260px"
                                            className="object-contain transition-transform duration-700 group-hover:scale-105" 
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

