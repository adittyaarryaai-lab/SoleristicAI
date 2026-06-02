export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">

      <div
        className="
        max-w-5xl
        mx-auto
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-[40px]
        p-12
        md:p-20
        text-center
        "
      >

        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
          Start Your AI Journey
        </div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Ready To Automate
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Your Business?
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          SoleristicAI helps businesses automate lead handling,
          customer conversations, follow-ups, and operations
          through intelligent software systems.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

          <a
            href="https://calendly.com/adittyaarrya-ai/30min"
            target="_blank"
            className="px-8 py-4 bg-gradient-to-r from-[#00A3FF] to-[#39FF14] text-black font-bold rounded-lg hover:scale-105 transition"
          >
            Book Free Demo
          </a>

          <a
            href="#products"
            className="
            px-8
            py-4
            rounded-xl
            border
            border-white/10
            hover:border-white/30
            transition
            "
          >
            Explore Products
          </a>

        </div>

      </div>

    </section>
  );
}