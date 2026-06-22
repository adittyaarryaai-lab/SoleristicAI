import GlassCard from "@/components/ui/GlassCard";
import {
  GraduationCap,
  Building2
} from "lucide-react";

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-8 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* EduFlowAI */}

          <GlassCard>

            <a href="https://eduflowai-iota.vercel.app/" target="_blank" rel="noreferrer">

              <div className="text-blue-400 text-sm font-medium mb-3">
                EDUCATION
              </div>
  
              <GraduationCap size={50} />
  
              <h3 className="text-4xl font-bold">
                EduFlowAI
              </h3>
  
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Modern school management platform for
                attendance, communication, academics,
                administration, and parent engagement.
              </p>
  
              <button className="mt-8 text-blue-400 font-medium">
                Learn More →
              </button>

            </a>

          </GlassCard>

          {/* PropFlowAI */}

          <GlassCard>

            <a href="https://propflowai-iota.vercel.app/" target="_blank" rel="noreferrer">

            <div className="text-cyan-400 text-sm font-medium mb-3">
              REAL ESTATE
            </div>

            <Building2 size={50} />

            <h3 className="text-4xl font-bold">
              PropFlowAI
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              AI-powered lead qualification and
              WhatsApp automation system designed
              for real estate consultants, builders,
              and property businesses.
            </p>

            <button className="mt-8 text-cyan-400 font-medium">
              Learn More →
            </button>

            </a>

          </GlassCard>

        </div>

      </div>
    </section>
  );
}