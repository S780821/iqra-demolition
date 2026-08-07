import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import GoogleMap from "@/components/GoogleMap";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import CallbackModal from "@/components/CallbackModal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <GoogleMap />
      </main>

      <Footer />

      {/* Floating Buttons */}
      <FloatingWhatsapp />
      <CallbackModal />
    </>
  );
}