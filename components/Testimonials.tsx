import GlassCard from "@/components/ui/GlassCard";

export default function Testimonials() {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl md:text-6xl font-bold mb-6">
          What Businesses Say
        </h2>

        <p className="text-center text-zinc-400 mb-14 max-w-2xl mx-auto">
          Businesses use SoleristicAI products to automate operations,
          improve response times, and streamline customer interactions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <GlassCard>
            <p className="text-lg leading-relaxed">
              "The automation reduced our response time dramatically and helped us handle more enquiries efficiently."
            </p>

            <div className="mt-6">
              <p className="font-semibold">
                Real Estate Consultant
              </p>

              <p className="text-zinc-500 text-sm">
                Property Industry
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <p className="text-lg leading-relaxed">
              "Lead handling became much easier and our team spent less time answering repetitive questions."
            </p>

            <div className="mt-6">
              <p className="font-semibold">
                School Administrator
              </p>

              <p className="text-zinc-500 text-sm">
                Education Sector
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <p className="text-lg leading-relaxed">
              "The system saved hours every week and improved our follow-up process significantly."
            </p>

            <div className="mt-6">
              <p className="font-semibold">
                Business Owner
              </p>

              <p className="text-zinc-500 text-sm">
                Service Business
              </p>
            </div>
          </GlassCard>

        </div>

      </div>

    </section>
  );
}