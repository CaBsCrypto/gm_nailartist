import { LOCATIONS } from '@/lib/constants';

interface LocationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LocationsModal({ isOpen, onClose }: LocationsModalProps) {
    if (!isOpen) return null;

    const mapColors: Record<string, string> = {
        blue: 'bg-brand-blue/10 border-brand-blue/20',
        pink: 'bg-brand-pink/10 border-brand-pink/20',
    };

    const badgeColors: Record<string, string> = {
        blue: 'bg-brand-blue text-white',
        pink: 'bg-brand-pink text-white',
    };

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white/95 backdrop-blur-2xl w-full max-w-4xl rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] overflow-hidden animate-slide-up my-8 p-6 sm:p-10 border border-white/50">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors bg-white hover:bg-gray-50 border border-gray-100 shadow-sm p-2 rounded-full z-10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-8 pt-4">
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-2">
                        Nuestras Sedes
                    </h2>
                    <p className="text-gray-600 font-body">
                        Dos ubicaciones conectadas para entregarte el mejor servicio.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {LOCATIONS.map((loc) => (
                        <div key={loc.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-brand-pink/20 transition-all group">
                            {/* Fake Map */}
                            <div className={`w-full h-48 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border ${mapColors[loc.color]}`}>
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 to-transparent background-size-200 background-position-center animate-pulse-slow"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${badgeColors[loc.color]} shadow-lg group-hover:-translate-y-2 transition-transform`}>
                                        📍
                                    </div>
                                    <div className="w-6 h-2 rounded-[50%] bg-black/20 mt-2 blur-[2px]"></div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-wider ${badgeColors[loc.color]}`}>
                                    {loc.metro}
                                </span>
                                <h3 className="text-2xl font-heading font-black text-gray-900">
                                    {loc.name}
                                </h3>
                                <p className="text-gray-600 font-body text-base">
                                    {loc.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
