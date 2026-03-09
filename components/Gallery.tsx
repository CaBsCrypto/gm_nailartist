'use client';

import { useState } from 'react';
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
                        Explora el estilo y nivel de detalle de nuestros trabajos. (Pronto actualizaremos con nuestras mejores fotos).
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
                <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
                    {filteredItems.map((item, index) => {
                        // Make the first item take up more space for asymmetry
                        const isFeatured = index === 0;
                        return (
                            <FadeIn key={item.id} delay={index * 100} direction="up" className={`${isFeatured ? 'col-span-2 row-span-2' : ''}`}>
                                <div
                                    className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br h-full w-full ${item.imagePlaceholderColor}`}
                                >
                                    {/* 
                                        TODO PARA EL USUARIO:
                                        Cuando tengas las fotos reales de tus trabajos, debes borrar el div "absolute inset-0..." de abajo 
                                        y descomentar o reemplazar por el componente <Image /> de Next.js, de la siguiente manera:
                                        
                                        <Image 
                                            src={`/images/gallery/tu-foto-${item.id}.jpg`} // Guarda las fotos en la carpeta public/images/gallery/
                                            alt={item.title} 
                                            fill 
                                            className="object-cover" 
                                        /> 
                                    */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 font-bold font-body text-center p-4">
                                        <span className="text-2xl mb-2">📸</span>
                                        <span>Espacio reservado para:<br />{item.title}</span>
                                    </div>

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
