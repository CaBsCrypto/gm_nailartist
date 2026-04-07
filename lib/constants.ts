import { Service, Location, GalleryItem } from './types';

export const WHATSAPP_NUMBER = '56985895687';

export const SERVICES: Service[] = [
    {
        id: 'category-manicure',
        name: 'Manicure',
        description: 'Esmaltado permanente, nail art, acrílicas y más.',
        price: 'desde 10.000',
        numericPrice: 10000,
        icon: '💅',
        color: 'pink',
        subServices: [
            { name: 'Solo limpieza', price: '10.000', numericPrice: 10000, duration: '30 minutos' },
            { name: 'Manicure hombre', price: '10.000', numericPrice: 10000, duration: '35 minutos' },
            { name: 'Limpieza con endurecedor', price: '11.000', numericPrice: 11000, duration: '35 minutos' },
            { name: 'Esmaltado permanente 1 color', price: '14.000', numericPrice: 14000, duration: '1 hora' },
            { name: 'Esmaltado permanente 3 colores max', price: '16.000', numericPrice: 16000, duration: '1 hora 15 minutos' },
            { name: 'Esmaltado permanente maximo 2 diseños', price: '17.000', numericPrice: 17000, duration: '1 hora 30 minutos' },
            { name: 'Esmaltado permante con efectos', price: '18.000', numericPrice: 18000, duration: '1 hora 30 minutos' },
            { name: 'Esmaltado permanente full diseños', price: '22.000', numericPrice: 22000, duration: '2 horas' },
            { name: 'Soft gel o gelX', price: 'desde 26.000', numericPrice: 26000, duration: '3 horas' },
            { name: 'Agregar hard gel', price: '3.000', numericPrice: 3000, duration: '15 minutos', isAddon: true },
            { name: 'Agregar kapping de acrilico', price: '5.000', numericPrice: 5000, duration: '20 minutos', isAddon: true },
            { name: 'Agregar baño de polygel', price: '7.000', numericPrice: 7000, duration: '20 minutos', isAddon: true },
            { name: 'Agregar baño de acrilico', price: '7.000', numericPrice: 7000, duration: '20 minutos', isAddon: true },
            { name: 'Parche de gel', price: '2.500', numericPrice: 2500, duration: '15 minutos', isAddon: true },
        ]
    },
    {
        id: 'category-pedicure',
        name: 'Pedicure',
        description: 'Cuidado integral para tus pies con estilo.',
        price: 'desde 14.000',
        numericPrice: 14000,
        icon: '🦶',
        color: 'yellow',
        subServices: [
            { name: 'Solo limpieza', price: '14.000', numericPrice: 14000, duration: '1 hora' },
            { name: 'Esmaltado permanente 2 colores max', price: '18.000', numericPrice: 18000, duration: '1 hora 30 minutos' },
            { name: 'Esmaltado permanente con cristales', price: '22.000', numericPrice: 22000, duration: '2 horas' },
        ]
    },
    {
        id: 'category-retiro',
        name: 'Retiro de Esmalte',
        description: 'Retiro profesional y seguro de sistemas.',
        price: 'desde 2.000',
        numericPrice: 2000,
        icon: '✨',
        color: 'blue',
        subServices: [
            { name: 'Retiro de esmalte tradicional', price: '2.000', numericPrice: 2000, duration: '5 minutos' },
            { name: 'Retiro de esmalte permanente', price: '3.000', numericPrice: 3000, duration: '20 minutos' },
            { name: 'Retiro de esmaltado con hard gel o kapping', price: '4.000', numericPrice: 4000, duration: '25 minutos' },
            { name: 'Retiro de soft gel', price: '8.000', numericPrice: 8000, duration: '40 minutos' },
            { name: 'Retiro de acrilicas o polygel', price: '9.000', numericPrice: 9000, duration: '40 minutos' },
        ]
    },
    {
        id: 'category-clases',
        name: 'Cursos & Clases',
        description: 'Aprende las mejores técnicas de Nail Art.',
        price: 'desde 45.000',
        numericPrice: 45000,
        icon: '🎓',
        color: 'green',
        subServices: [
            { name: 'Esmaltado permanente basico', price: '50.000', numericPrice: 50000, duration: '5 horas' },
            { name: 'Esmaltado permanente tecnicas mixtas', price: '60.000', numericPrice: 60000, duration: '6 horas' },
            { name: 'Uso y manejo de torno', price: '45.000', numericPrice: 45000, duration: '3 horas' },
        ]
    },
    {
        id: 'category-empresas',
        name: 'Empresas',
        description: 'Eventos corporativos y pausas activas.',
        price: 'Cotizar',
        numericPrice: 0,
        icon: '🏢',
        color: 'purple',
        subServices: [
            { name: 'Servicio de Manicure', price: 'Cotizar', numericPrice: 0, duration: 'A convenir', note: 'Para eventos y empresas' },
            { name: 'Servicio de Masajes', price: 'Cotizar', numericPrice: 0, duration: 'A convenir', note: 'Pausas activas y bienestar' },
        ]
    },
    {
        id: 'category-otros',
        name: 'Otros Servicios',
        description: 'Boutique, peluquería y estética integral.',
        price: 'Ver más',
        numericPrice: 0,
        icon: '🛍️',
        color: 'orange',
        subServices: [
            { name: 'Alisado bioplastica con laser fotónico', price: 'desde 30.000', numericPrice: 30000, duration: '3 horas', note: 'Atendido por Gabi / Carola' },
            { name: 'Botox capilar con NANO-BTX de richee', price: 'desde 25.000', numericPrice: 25000, duration: '3 horas', note: 'Atendido por Gabi / Carola' },
            { name: 'Corte de cabello (incluye lavado y peinado)', price: '16.000', numericPrice: 16000, duration: '1 hora', note: 'Atendido por Carola' },
            { name: 'Lavado de cabello (incluye peinado)', price: '12.000', numericPrice: 12000, duration: '1 hora', note: 'Atendido por Carola' },
            { name: 'Masaje de hidratacion + peinado', price: 'desde 18.000', numericPrice: 18000, duration: '1 hora 30 minutos', note: 'Atendido por Carola' },
            { name: 'Masaje + corte + peinado', price: '26.000', numericPrice: 26000, duration: '1 hora 30 minutos', note: 'Atendido por Carola' },
            { name: 'Perfilado de cejas', price: '6.000', numericPrice: 6000, duration: '20 minutos' },
            { name: 'Depilacion de bozo', price: '4.000', numericPrice: 4000, duration: '10 minutos' },
            { name: 'Sesión de Masajes', price: 'Cotizar', numericPrice: 0, duration: 'Variable' },
        ]
    }
];

export const FEATURED_SERVICES = [
    {
        id: 'feat-esmaltado-2',
        name: 'Esmaltado Permanente Máximo 2 Diseños',
        description: 'Manicure completa con limpieza profunda y hasta 2 diseños a elección.',
        price: '17.000',
        icon: '💅',
        color: 'pink'
    },
    {
        id: 'feat-esmaltado-full',
        name: 'Esmaltado Permanente Full Diseños',
        description: 'Arte sin límites en todas tus uñas. Elige los diseños que más te gusten.',
        price: '22.000',
        icon: '✨',
        color: 'pink'
    },
    {
        id: 'feat-botox',
        name: 'Botox Capilar Nano-BTX Richee',
        description: 'Reconstrucción profunda y brillo tipo espejo para tu cabello.',
        price: '25.000',
        icon: '🧪',
        color: 'orange'
    },
    {
        id: 'feat-combo-pelu',
        name: 'Masaje + Corte + Peinado',
        description: 'Renovación completa: hidratación, corte profesional y acabado perfecto.',
        price: '26.000',
        icon: '✂️',
        color: 'purple'
    },
    {
        id: 'feat-masajes',
        name: 'Sesión de Masajes',
        description: 'Bienestar y relajación profunda para desconectarte del estrés diario.',
        price: 'Cotizar',
        icon: '🕯️',
        color: 'blue'
    },
    {
        id: 'feat-cursos',
        name: 'Cursos & Capacitación',
        description: 'Aprende Nail Art y estética con formación profesional personalizada.',
        price: 'desde 45.000',
        icon: '🎓',
        color: 'green'
    }
];

export const LOCATIONS: Location[] = [
    {
        id: 'las-torres',
        name: 'Estudio Principal',
        metro: '📍 Metro Las Torres',
        description: 'A pasos del metro. Espacio acogedor y equipado para todas las técnicas.',
        color: 'blue',
    },
    {
        id: 'nunoa',
        name: 'Sede Ñuñoa',
        metro: '📍 Metro Ñuñoa / Chile España',
        description: 'Ubicación céntrica con excelente conectividad y ambiente exclusivo.',
        color: 'pink',
    },
];

export const TIME_SLOTS = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00'
];

export const GALLERY_FILTERS = ['Todos', 'Manicure', 'Peluquería', 'Eventos'];

const generateGalleryItems = (category: string, folder: string, count: number, placeholderColors: string[]) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: `${folder}-${i + 1}`,
        title: `${category} ${i + 1}`,
        category,
        image: `/images/gallery/${folder}/${folder}_${i + 1}.jpg`,
        imagePlaceholderColor: placeholderColors[i % placeholderColors.length]
    }));
};

const manicureColors = ['from-brand-pink to-rose-400', 'from-pink-300 to-brand-pink', 'from-rose-400 to-pink-500'];
const peluqueriaColors = ['from-brand-blue to-purple-500', 'from-sky-400 to-brand-blue', 'from-indigo-400 to-purple-600'];
const eventosColors = ['from-brand-yellow to-orange-400', 'from-orange-300 to-amber-500'];

export const GALLERY_ITEMS: GalleryItem[] = [
    ...generateGalleryItems('Manicure', 'manicure', 16, manicureColors),
    ...generateGalleryItems('Peluquería', 'peluqueria', 8, peluqueriaColors),
    ...generateGalleryItems('Eventos', 'eventos', 2, eventosColors),
];

export const buildWhatsAppLink = (nombre: string, categoriaName: string, subServicioName: string, precioBase: number, tipoPago: string, modalidad: string, localOComuna: string, fecha: string, hora: string) => {
    let ubicacionTexto = '';

    if (modalidad === 'estudio') {
        ubicacionTexto = `en el local de *${localOComuna}*`;
    } else if (modalidad === 'domicilio') {
        ubicacionTexto = `*a domicilio* en la comuna de *${localOComuna}* (entiendo que puede aplicar recargo por movilización)`;
    } else if (modalidad === 'evento') {
        ubicacionTexto = `para un *evento corporativo/clase* en *${localOComuna}*`;
    }

    const montoPago = tipoPago === 'abono' ? (precioBase * 0.5) : precioBase;
    const intencionPago = tipoPago === 'abono' ? `abonar el 50% ($${montoPago.toLocaleString('es-CL')}) para asegurar la reserva` : `pagar el 100% ($${montoPago.toLocaleString('es-CL')}) por adelantado`;

    const subServicioTexto = subServicioName ? `*${subServicioName}*` : `*${categoriaName}*`;

    const mensaje = encodeURIComponent(
        `Hola! Soy ${nombre} 👋 Quisiera agendar una hora para ${subServicioTexto} (${categoriaName}) ${ubicacionTexto} el día *${fecha}* a las *${hora}*. \n\nMe gustaría ${intencionPago}. ¿Me compartes los datos de transferencia o link de pago? 🌸`
    );
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${mensaje}&type=phone_number&app_absent=0`;
};
