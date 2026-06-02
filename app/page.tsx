import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import CalendlyEmbed from "@/components/CalendlyEmbed";

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
        

        {/* 📅 DEMO BOOKING SECTION */}
      <section id="demo" className="py-24 px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">
            Book Your Free AI Automation Demo
          </h2>

          <p className="text-gray-400 mt-3">
            See how SoleristicAI can automate your business in 30 minutes
          </p>
        </div>

        {/* Value bullets */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-white font-semibold text-lg mb-4">
            🔥 What you’ll get in this call:
          </h3>

          <div className="text-gray-400 space-y-2">
            <p>✔ AI automation audit of your business</p>
            <p>✔ Lead leakage & conversion breakdown</p>
            <p>✔ PropFlowAI / EduFlowAI implementation plan</p>
            <p>✔ Revenue improvement roadmap</p>
          </div>
        </div>

        {/* Calendly Embed */}
        <CalendlyEmbed />

        {/* WhatsApp fallback */}
        <div className="text-center mt-8 text-gray-400">
          Prefer WhatsApp?{" "}
          <a
            href="https://wa.me/919813146729"
            className="text-green-400 underline"
          >
            Chat with us
          </a>
        </div>

      </section>

      <Testimonials />
      <Footer />
      </main>

    </div>
  );
}
