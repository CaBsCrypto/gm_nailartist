'use client';

import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import LocationsModal from './LocationsModal';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Galería', href: '#galeria' },
        { name: 'Instructora', href: '#instructora' },
        { name: 'Eventos', href: '#eventos' },
        { name: 'Sedes', action: () => setIsLocationsOpen(true) },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/50 py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                    <a href="#" className="font-heading font-black text-2xl text-gray-900 tracking-tight flex items-center gap-2">
                        <span className="text-brand-blue">GM</span>
                        <span>NailArtist</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            className="font-body font-bold text-gray-600 hover:text-amber-600 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={link.action}
                                            className="font-body font-bold text-gray-600 hover:text-amber-600 transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary py-2.5 px-6 text-sm"
                        >
                            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Agenda tu hora</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-amber-600 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in">
                        <ul className="flex flex-col py-4 px-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            className="block py-3 font-body font-bold text-gray-800 border-b border-gray-100 hover:text-amber-600 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                link.action?.();
                                            }}
                                            className="w-full text-left py-3 font-body font-bold text-gray-800 border-b border-gray-100 hover:text-amber-600 transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                            <li className="pt-6 pb-2">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsModalOpen(true);
                                    }}
                                    className="btn-primary w-full py-4"
                                >
                                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Agenda tu hora</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </header>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <LocationsModal isOpen={isLocationsOpen} onClose={() => setIsLocationsOpen(false)} />
        </>
    );
}
