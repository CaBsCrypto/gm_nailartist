export interface BookingFormData {
    nombre: string;
    whatsapp: string;
    servicio: string;
    modalidad: 'estudio' | 'domicilio' | '';
    local: string; // Se usará para Sede o Comuna dependiendo de la modalidad
    fecha: string;
    hora: string;
    tipo_pago: 'abono' | 'total' | '';
}

export interface Service {
    id: string;
    name: string;
    description: string;
    price: string;
    numericPrice: number; // For payment deposits
    icon: string;
    color: 'blue' | 'pink' | 'yellow' | 'green';
}

export interface Location {
    id: string;
    name: string;
    metro: string;
    description: string;
    color: 'blue' | 'pink';
}

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    imagePlaceholderColor: string;
}
