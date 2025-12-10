import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TimingsSection from "@/components/TimingsSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <TimingsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
