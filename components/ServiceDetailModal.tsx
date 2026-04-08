'use client';

import { Service } from '@/lib/types';
import FadeIn from './FadeIn';

interface ServiceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
    onBooking: (serviceId: string, subServiceName?: string) => void;
}

export default function ServiceDetailModal({ isOpen, onClose, service, onBooking }: ServiceDetailModalProps) {
    if (!isOpen || !service) return null;

    const colorClasses = {
        blue: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
        pink: 'text-brand-pink bg-brand-pink/10 border-brand-pink/20',
        yellow: 'text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20',
        green: 'text-brand-green bg-brand-green/10 border-brand-green/20',
        purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    };

    const gradientClasses = {
        blue: 'from-brand-blue/20 to-purple-500/20',
        pink: 'from-brand-pink/20 to-rose-400/20',
        yellow: 'from-brand-yellow/20 to-orange-400/20',
        green: 'from-brand-green/20 to-emerald-500/20',
        purple: 'from-purple-500/20 to-indigo-600/20',
        orange: 'from-orange-400/20 to-red-500/20',
    };

    const mainServices = service.subServices?.filter(s => !s.isAddon) || [];
    const addons = service.subServices?.filter(s => s.isAddon) || [];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative bg-white/95 backdrop-blur-2xl w-full max-w-2xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden animate-slide-up my-8`}>
                {/* Decorative background gradient */}
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${gradientClasses[service.color]} -z-10`} />

                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-white/50 backdrop-blur p-2 rounded-full border border-white/50 z-10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 sm:p-10 pt-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl border ${colorClasses[service.color]}`}>
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-heading font-black text-gray-900 leading-tight">
                                {service.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${service.color === 'blue' ? 'text-brand-blue' : service.color === 'pink' ? 'text-brand-pink' : service.color === 'yellow' ? 'text-brand-yellow' : 'text-brand-green'}`}>
                                    Cruelty-Free
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-base sm:text-lg font-body text-gray-600 leading-relaxed mb-6">
                        {service.description}
                    </p>

                    {service.subServices ? (
                        <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                            {/* Main List */}
                            {mainServices.length > 0 && (
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Servicios Disponibles</h4>
                                    <div className="grid gap-2">
                                        {mainServices.map((sub, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-pink/30 hover:bg-white transition-all group">
                                                <div className="flex flex-col flex-1">
                                                    <span className="font-bold text-gray-800 text-sm sm:text-base">{sub.name}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-amber-600 font-bold">{sub.duration}</span>
                                                        {sub.note && (
                                                            <span className="text-[10px] text-gray-400 italic font-medium leading-none">({sub.note})</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-heading font-black text-gray-900 text-sm sm:text-lg tracking-tight group-hover:scale-110 transition-transform">
                                                        ${sub.price}
                                                    </span>
                                                    <button 
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            onBooking(service.id, sub.name);
                                                            onClose();
                                                        }}
                                                        className="p-2 rounded-lg bg-amber-500/10 text-amber-600 hover:bg-amber-500 hover:text-white transition-all shadow-sm border border-amber-500/20"
                                                        title="Agendar este servicio"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Addons List */}
                            {addons.length > 0 && (
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Complementos / Adicionales</h4>
                                    <div className="grid gap-2">
                                        {addons.map((sub, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-amber-50/20 border border-amber-100/30 hover:border-amber-200 transition-all group">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-700 text-sm">{sub.name}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] text-amber-500 font-bold uppercase">{sub.duration}</span>
                                                        {sub.note && (
                                                            <span className="text-[9px] text-gray-400 italic">({sub.note})</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="font-bold text-amber-600 text-sm">
                                                    +${sub.price}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Duración aprox.</p>
                                <p className="text-gray-900 font-bold">Variable</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Precio</p>
                                <p className="text-gray-900 font-bold font-heading text-xl">{service.price}</p>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button 
                            onClick={() => {
                                onBooking(service.id);
                                onClose();
                            }}
                            className="btn-primary flex-1 py-4 text-base sm:text-lg justify-center shadow-lg"
                        >
                            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Agenda tu hora</span>
                        </button>
                        <button 
                            onClick={onClose}
                            className="btn-ghost py-4 text-base sm:text-lg justify-center sm:w-1/3"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
