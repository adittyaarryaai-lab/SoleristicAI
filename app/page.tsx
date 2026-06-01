import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import BackgroundGlow from "@/components/BackgroundGlow";

<BackgroundGlow />

export default function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Products />
        <CTA />
        <Testimonials />
        <Footer />
      </main>

    </div>
  );
}