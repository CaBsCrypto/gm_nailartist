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
    metadataBase: new URL('https://gmnailartist.cl'),
    title: 'GM NailArtist — Nail Art & Belleza Integral Cruelty-Free | Santiago',
    description: 'GM Belleza & Boutique. Nail art profesional, manicure, pedicure y cursos de uñas en Santiago. Instructora certificada, 100% Cruelty-Free. Locales en Metro Las Torres y Metro Ñuñoa. ¡Agenda tu hora online!',
    openGraph: {
        title: 'GM NailArtist — Nail Art & Belleza Integral',
        description: 'GM Belleza & Boutique. Nail art profesional y belleza integral en Santiago.',
        url: 'https://gmnailartist.cl',
        siteName: 'GM NailArtist',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'GM NailArtist - Nail Art',
            },
        ],
        locale: 'es_CL',
        type: 'website',
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
                            name: "GM NailArtist",
                            image: "https://gmnailartist.cl/images/og-image.jpg",
                            "@id": "https://gmnailartist.cl",
                            url: "https://gmnailartist.cl",
                            telephone: "+56912345678",
                            priceRange: "$$",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Santiago",
                                addressRegion: "RM",
                                addressCountry: "CL"
                            }
                        })
                    }}
                />
                {children}
            </body>
        </html>
    );
}
