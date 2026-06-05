import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['700', '800', '900'],
    display: 'swap',
});

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://gmbelleza.com'),
    title: 'GM Belleza & Boutique — Manicure, Estética & Cuidado Integral | Santiago',
    description: 'GM Belleza & Boutique. Nail art profesional, manicure, pedicure y cursos de uñas en Santiago. Instructora certificada, 100% Cruelty-Free. Sede en Metro Ñuñoa / Chile España. ¡Agenda tu hora online!',
    keywords: ['nail art', 'manicure', 'pedicure', 'santiago', 'cruelty free', 'cursos de uñas', 'ñuñoa', 'eventos belleza', 'uñas acrílicas', 'esmaltado permanente', 'belleza integral', 'colorimetría', 'asesoría de imagen'],
    authors: [{ name: 'GM Belleza' }],
    creator: 'GM Belleza',
    publisher: 'GM Belleza',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'GM Belleza & Boutique — Manicure, Estética & Cuidado Integral',
        description: 'GM Belleza & Boutique. Nail art profesional, esmaltado permanente y belleza integral en Santiago.',
        url: 'https://gmbelleza.com',
        siteName: 'GM Belleza',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'GM Belleza - Nail Art & Estética',
            },
        ],
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GM Belleza & Boutique — Manicure, Estética & Cuidado Integral',
        description: 'GM Belleza & Boutique. Nail art profesional y belleza integral en Santiago.',
        images: ['/images/og-image.jpg'],
    },
    other: {
        'geo.position': '-33.4533;-70.6033',
        'geo.region': 'CL-RM',
        'geo.placename': 'Ñuñoa, Santiago, Chile',
        'ICBM': '-33.4533, -70.6033',
    },
    verification: {
        google: '1M5wKfaE-StdD87cdSPNRpgJz4JpUroDlmkX7JGoUD8',
    },
};

export default function RootLayout({
    children,
    }: {
        children: React.ReactNode;
    }) {
        return (
            <html lang="es" className={`${poppins.variable} ${lato.variable}`}>
                <body className="antialiased min-h-screen flex flex-col">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "HealthAndBeautyBusiness",
                                name: "GM Belleza",
                                image: "https://gmbelleza.com/images/og-image.jpg",
                                "@id": "https://gmbelleza.com",
                                url: "https://gmbelleza.com",
                                telephone: "+56985895687",
                                priceRange: "$$",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "Santiago",
                                    addressRegion: "RM",
                                    addressCountry: "CL",
                                    postalCode: "7750000"
                                },
                                geo: {
                                    "@type": "GeoCoordinates",
                                    latitude: -33.4533,
                                    longitude: -70.6033
                                },
                                areaServed: [
                                    {
                                        "@type": "City",
                                        name: "Ñuñoa"
                                    },
                                    {
                                        "@type": "City",
                                        name: "Santiago"
                                    },
                                    {
                                        "@type": "City",
                                        name: "Providencia"
                                    },
                                    {
                                        "@type": "City",
                                        name: "Macul"
                                    },
                                    {
                                        "@type": "City",
                                        name: "La Reina"
                                    }
                                ],
                                openingHoursSpecification: [
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        opens: "09:00",
                                        closes: "20:00"
                                    }
                                ],
                                sameAs: [
                                    "https://www.instagram.com/gm.nailartist"
                                ]
                            })
                        }}
                    />
                    {children}
                </body>
            </html>
        );
    }
