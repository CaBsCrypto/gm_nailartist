import { Service, Location, GalleryItem } from './types';

export const WHATSAPP_NUMBER = '56985895687';

export const SERVICES: Service[] = [
    {
        id: 'nail-art-personalizado',
        name: 'Nail Art Personalizado',
        description: 'Diseños a mano alzada, pedrería y efectos especiales únicos para ti.',
        price: '15.000',
        numericPrice: 15000,
        icon: '💅',
        color: 'blue',
    },
    {
        id: 'semipermanente',
        name: 'Semipermanente',
        description: 'Esmaltado duradero con nivelación perfecta para un acabado impecable.',
        price: '12.000',
        numericPrice: 12000,
        icon: '✨',
        color: 'pink',
    },
    {
        id: 'acrilicas-gel',
        name: 'Acrílicas & Gel',
        description: 'Extensiones esculpidas con estructura perfecta y máxima duración.',
        price: '25.000',
        numericPrice: 25000,
        icon: '💎',
        color: 'yellow',
    },
    {
        id: 'manicure-spa',
        name: 'Manicure Spa',
        description: 'Limpieza profunda, exfoliación, hidratación y esmaltado tradicional.',
        price: '10.000',
        numericPrice: 10000,
        icon: '🌸',
        color: 'green',
    },
    {
        id: 'pedicure',
        name: 'Pedicure',
        description: 'Cuidado integral para tus pies, remoción de durezas y esmaltado.',
        price: '14.000',
        numericPrice: 14000,
        icon: '👣',
        color: 'blue',
    },
    {
        id: 'cursos',
        name: 'Cursos Profesionales',
        description: 'Aprende y perfecciona tus técnicas conmigo. Personalizados y grupales.',
        price: '80.000',
        numericPrice: 80000,
        icon: '🎓',
        color: 'pink',
    },
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

export const GALLERY_FILTERS = ['Todos', 'Nail Art', 'Acrílicas', 'Gel', 'Cursos'];

export const GALLERY_ITEMS: GalleryItem[] = [
    { id: '1', title: 'Diseño 3D Cromo', category: 'Nail Art', imagePlaceholderColor: 'from-brand-blue to-purple-500' },
    { id: '2', title: 'Acrílicas Francesa', category: 'Acrílicas', imagePlaceholderColor: 'from-brand-pink to-rose-400' },
    { id: '3', title: 'Gel Esculpido', category: 'Gel', imagePlaceholderColor: 'from-brand-yellow to-orange-400' },
    { id: '4', title: 'Clase de Nivelación', category: 'Cursos', imagePlaceholderColor: 'from-brand-green to-emerald-500' },
    { id: '5', title: 'Nail Art Minimalista', category: 'Nail Art', imagePlaceholderColor: 'from-sky-400 to-brand-blue' },
    { id: '6', title: 'Baby Boomer', category: 'Acrílicas', imagePlaceholderColor: 'from-pink-300 to-brand-pink' },
    { id: '7', title: 'Efecto Aurora', category: 'Nail Art', imagePlaceholderColor: 'from-indigo-400 to-purple-600' },
];

export const buildWhatsAppLink = (nombre: string, servicioName: string, precioBase: number, tipoPago: string, modalidad: string, localOComuna: string, fecha: string, hora: string) => {
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

    const mensaje = encodeURIComponent(
        `Hola! Soy ${nombre} 👋 Quisiera agendar una hora para *${servicioName}* ${ubicacionTexto} el día *${fecha}* a las *${hora}*. \n\nMe gustaría ${intencionPago}. ¿Me compartes los datos de transferencia o link de pago? 🌸`
    );
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${mensaje}&type=phone_number&app_absent=0`;
};
