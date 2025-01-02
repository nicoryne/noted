import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CatalogSection from '@/components/CatalogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="h-screen overflow-scroll scroll-smooth">
        <HeroSection />

        <AboutSection />

        <CatalogSection />
      </main>

      <Footer />
    </div>
  );
}
