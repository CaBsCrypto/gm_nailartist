export interface BookingFormData {
    nombre: string;
    whatsapp: string;
    servicio: string; // Categoría ID
    subServicio: string; // Nombre del tratamiento específico
    modalidad: 'estudio' | 'domicilio' | '';
    local: string;
    fecha: string;
    hora: string;
    tipo_pago: 'abono' | 'total' | '';
}

export interface SubService {
    name: string;
    price: string;
    numericPrice: number;
    duration: string;
    isAddon?: boolean;
    note?: string;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    price: string;
    numericPrice: number;
    icon: string;
    color: 'blue' | 'pink' | 'yellow' | 'green' | 'purple' | 'orange';
    subServices?: SubService[];
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
    image: string;
    imagePlaceholderColor: string;
}
