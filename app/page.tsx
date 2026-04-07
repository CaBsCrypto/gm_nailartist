import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import BrandMarquee from '@/components/BrandMarquee';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Instructor from '@/components/Instructor';
import CorporateEvents from '@/components/CorporateEvents';
import Locations from '@/components/Locations';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <BrandMarquee />
            <Services />
            <Gallery />
            <StatsBar />
            <Instructor />
            <CorporateEvents />
            <Testimonials />
            <Locations />
            <FAQ />
            <CTASection />
            <Footer />
            <WhatsAppFloating />
        </main>
    );
}
