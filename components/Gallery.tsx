'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_FILTERS } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredItems = GALLERY_ITEMS.filter(
        item => activeFilter === 'Todos' || item.category === activeFilter
    );

    return (
        <section id="galeria" className="py-24 bg-brand-light">
            <div className="container mx-auto px-6 max-w-6xl">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-6">
                        Nuestra Galería
                    </h2>
                    <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto mb-8">
                        Explora el estilo y nivel de detalle de nuestros trabajos.
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

                {/* Masonry / Asymmetric Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
                    {filteredItems.map((item, index) => {
                        // Create an interesting dynamic pattern for the masonry grid
                        const isLarge = index === 0 || index === 7 || index === 14 || index === 21;
                        const isTall = index === 2 || index === 9 || index === 16 || index === 23;
                        const isWide = index === 4 || index === 11 || index === 18 || index === 25;

                        let spanClass = '';
                        if (isLarge) spanClass = 'col-span-2 row-span-2';
                        else if (isTall) spanClass = 'row-span-2';
                        else if (isWide) spanClass = 'col-span-2';

                        return (
                            <FadeIn key={item.id} delay={(index % 8) * 100} direction="up" className={spanClass}>
                                <div
                                    className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br h-full w-full ${item.imagePlaceholderColor}`}
                                >
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
                                        <span className="text-white font-heading font-black text-xl md:text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">
                                            {item.title}
                                        </span>
                                        <span className="text-brand-pink font-body font-bold text-sm tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {item.category}
                                        </span>
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
        </section>
    );
}
