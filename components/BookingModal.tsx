'use client';

import { useState, useEffect } from 'react';
import { SERVICES, LOCATIONS, TIME_SLOTS, buildWhatsAppLink } from '@/lib/constants';
import { BookingFormData } from '@/lib/types';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialServiceId?: string;
    initialSubServiceName?: string;
}

export default function BookingModal({ isOpen, onClose, initialServiceId, initialSubServiceName }: BookingModalProps) {
    const [formData, setFormData] = useState<BookingFormData>({
        nombre: '',
        whatsapp: '',
        servicio: initialServiceId || '',
        subServicio: initialSubServiceName || '',
        modalidad: '',
        local: '',
        fecha: '',
        hora: '',
        tipo_pago: '',
    });

    // Update service if initial inputs change
    useEffect(() => {
        if (initialServiceId) {
            setFormData(prev => ({ 
                ...prev, 
                servicio: initialServiceId,
                subServicio: initialSubServiceName || '' 
            }));
        }
    }, [initialServiceId, initialSubServiceName]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    if (!isOpen) return null;

    const getTodayString = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate fields based on modality
        if (!formData.nombre || !formData.whatsapp || !formData.servicio || !formData.subServicio || !formData.modalidad || !formData.local || !formData.fecha || !formData.hora || !formData.tipo_pago) {
            alert('Por favor, completa todos los campos requeridos.');
            setIsSubmitting(false);
            return;
        }

        // Generate link and redirect
        let localName = formData.local;
        if (formData.modalidad === 'estudio') {
            localName = LOCATIONS.find((l) => l.id === formData.local)?.name || formData.local;
        }

        const selectedCategory = SERVICES.find((s) => s.id === formData.servicio);
        const selectedSubService = selectedCategory?.subServices?.find((sub) => sub.name === formData.subServicio);
        
        const categoriaName = selectedCategory?.name || formData.servicio;
        const subServicioName = formData.subServicio;
        const precioTotal = selectedSubService?.numericPrice || 0;

        const url = buildWhatsAppLink(
            formData.nombre,
            categoriaName,
            subServicioName,
            precioTotal,
            formData.tipo_pago,
            formData.modalidad,
            localName,
            formData.fecha,
            formData.hora
        );

        setShowSuccess(true);

        // Slight delay so the user reads the success message
        setTimeout(() => {
            window.open(url, '_blank');
            setIsSubmitting(false);
            setShowSuccess(false);
            onClose();
            // Reset form
            setFormData({
                nombre: '',
                whatsapp: '',
                servicio: '',
                subServicio: '',
                modalidad: '',
                local: '',
                fecha: '',
                hora: '',
                tipo_pago: '',
            });
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-[#050810]/40 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            <div className="relative bg-white/95 backdrop-blur-2xl w-full max-w-lg rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(180,130,50,0.15)] border border-white/50 p-6 sm:p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-amber-600 transition-colors p-2"
                    aria-label="Cerrar"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {!showSuccess ? (
                    <>
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-heading font-black text-gray-900 mb-2">Reserva tu hora</h2>
                            <p className="text-gray-600 font-body">Completa los datos para coordinar por WhatsApp.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Nombre y Apellido *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    required
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-gray-900 bg-white"
                                    placeholder="María Pérez"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp *</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-gray-900 bg-white"
                                    placeholder="+56 9 1234 5678"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Categoría *</label>
                                    <select
                                        name="servicio"
                                        required
                                        value={formData.servicio}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setFormData(prev => ({ ...prev, servicio: val, subServicio: '' }));
                                        }}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all bg-white text-gray-900"
                                    >
                                        <option value="" disabled>Selecciona...</option>
                                        {SERVICES.map((s) => (
                                            <option key={s.id} value={s.id}>
                                                {s.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Tratamiento *</label>
                                    <select
                                        name="subServicio"
                                        required
                                        disabled={!formData.servicio}
                                        value={formData.subServicio}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all bg-white text-gray-900 disabled:opacity-50 disabled:bg-gray-50"
                                    >
                                        <option value="" disabled>
                                            {!formData.servicio ? 'Primero elige categoría' : 'Selecciona tratamiento...'}
                                        </option>
                                        {formData.servicio && SERVICES.find(s => s.id === formData.servicio)?.subServices?.map((sub, i) => (
                                            <option key={i} value={sub.name}>
                                                {sub.name} - ${sub.price}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">¿Dónde te atiendo? *</label>
                                <select
                                    name="modalidad"
                                    required
                                    value={formData.modalidad}
                                    onChange={(e) => {
                                        handleChange(e);
                                        // Reset local/comuna when modality changes
                                        setFormData(prev => ({ ...prev, local: '' }));
                                    }}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all bg-white text-gray-900"
                                >
                                    <option value="" disabled>Elige opción...</option>
                                    <option value="estudio">🏢 En el Estudio</option>
                                    <option value="domicilio">🚗 A Domicilio (+ Recargo)</option>
                                </select>
                            </div>

                            {formData.modalidad === 'estudio' && (
                                <div className="animate-fade-in">
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Sede *</label>
                                    <select
                                        name="local"
                                        required
                                        value={formData.local}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all bg-white text-gray-900"
                                    >
                                        <option value="" disabled>Selecciona el estudio...</option>
                                        {LOCATIONS.map((l) => (
                                            <option key={l.id} value={l.id}>
                                                {l.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {formData.modalidad === 'domicilio' && (
                                <div className="animate-fade-in space-y-1">
                                    <label className="block text-sm font-bold text-gray-700">Comuna *</label>
                                    <input
                                        type="text"
                                        name="local"
                                        required
                                        value={formData.local}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-gray-900 bg-white"
                                        placeholder="Ej. Providencia, Las Condes..."
                                    />
                                    <p className="text-xs text-amber-600 font-bold">
                                        * El servicio a domicilio tiene un recargo por movilización que se confirmará por WhatsApp.
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Fecha *</label>
                                    <input
                                        type="date"
                                        name="fecha"
                                        required
                                        min={getTodayString()}
                                        value={formData.fecha}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all text-gray-900 bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Hora sugerida *</label>
                                    <select
                                        name="hora"
                                        required
                                        value={formData.hora}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all bg-white text-gray-900"
                                    >
                                        <option value="" disabled>Hora...</option>
                                        {TIME_SLOTS.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {formData.subServicio && (
                                <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 animate-slide-up space-y-3">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Forma de Pago para Asegurar Reserva *</label>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <label className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm focus:outline-none transition-all ${formData.tipo_pago === 'abono' ? 'border-amber-500 bg-white ring-1 ring-amber-500' : 'border-gray-200 bg-white/50 hover:bg-white'}`}>
                                            <input type="radio" name="tipo_pago" value="abono" className="sr-only" onChange={handleChange} checked={formData.tipo_pago === 'abono'} required />
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <span className="block text-sm font-medium text-gray-900">Abonar 50%</span>
                                                    <span className="mt-1 flex items-center">
                                                        <span className="font-heading font-black text-amber-600 text-lg flex items-center gap-1">
                                                            ${((SERVICES.find(s => s.id === formData.servicio)?.subServices?.find(sub => sub.name === formData.subServicio)?.numericPrice || 0) * 0.5).toLocaleString('es-CL')} <span className="text-xs text-gray-400 font-normal">CLP</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>

                                        <label className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm focus:outline-none transition-all ${formData.tipo_pago === 'total' ? 'border-amber-600 bg-white ring-1 ring-amber-600' : 'border-gray-200 bg-white/50 hover:bg-white'}`}>
                                            <input type="radio" name="tipo_pago" value="total" className="sr-only" onChange={handleChange} checked={formData.tipo_pago === 'total'} required />
                                            <span className="flex flex-1">
                                                <span className="flex flex-col">
                                                    <span className="block text-sm font-medium text-gray-900">Pagar 100%</span>
                                                    <span className="mt-1 flex items-center">
                                                        <span className="font-heading font-black text-amber-700 text-lg flex items-center gap-1">
                                                            ${(SERVICES.find(s => s.id === formData.servicio)?.subServices?.find(sub => sub.name === formData.subServicio)?.numericPrice || 0).toLocaleString('es-CL')} <span className="text-xs text-gray-400 font-normal">CLP</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            )}

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-whatsapp w-full py-4 text-lg flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        'Procesando...'
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Continuar a WhatsApp
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="py-12 text-center animate-fade-in">
                        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl text-emerald-500">✓</span>
                        </div>
                        <h3 className="text-2xl font-heading font-black text-gray-900 mb-3">¡Casi listo!</h3>
                        <p className="text-gray-600 font-body text-lg">
                            Redirigiendo a WhatsApp para confirmar tu hora... 🌸
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
