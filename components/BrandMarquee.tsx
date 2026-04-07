'use client';

import Image from 'next/image';

const BRAND_IMAGES = [
    '/images/brand/brand-1.jpg',
    '/images/brand/brand-2.jpg',
    '/images/brand/brand-3.jpg',
    '/images/brand/brand-4.jpg',
    '/images/brand/brand-5.jpg',
];

export default function BrandMarquee() {
    // Triplicamos para asegurar que el loop sea infinito sin cortes visuales en pantallas grandes
    const marqueeImages = [...BRAND_IMAGES, ...BRAND_IMAGES, ...BRAND_IMAGES];

    return (
        <section className="py-16 bg-white overflow-hidden border-y border-gray-50">
            <div className="relative flex items-center">
                {/* Overlay degradado para suavizar los bordes */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex whitespace-nowrap animate-marquee">
                    {marqueeImages.map((src, index) => (
                        <div 
                            key={index} 
                            className="mx-4 flex-shrink-0 w-[260px] h-[320px] relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,105,180,0.15)]"
                        >
                            <Image
                                src={src}
                                alt={`GM NailArtist Brand ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="260px"
                                priority={index < 5}
                            />
                            {/* Sutil overlay rosa al hacer hover */}
                            <div className="absolute inset-0 bg-brand-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="mt-8 text-center">
                <span className="text-xs font-heading font-bold tracking-[0.2em] text-brand-pink/40 uppercase">
                    GM NailArtist Studio • Our Vibe
                </span>
            </div>
        </section>
    );
}
