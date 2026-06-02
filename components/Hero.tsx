export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-32 text-center relative">

        <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 mb-8 bg-zinc-900/60 backdrop-blur">
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          AI Automation Company
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Building Practical
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            AI Systems
          </span>
          For Growing Businesses
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-xl">
          SoleristicAI develops AI-powered software and automation
          products that help businesses automate operations,
          customer conversations, lead qualification, and follow-ups.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://calendly.com/adittyaarrya-ai/30min"
            target="_blank"
            className="px-8 py-4 bg-gradient-to-r from-[#00A3FF] to-[#39FF14] text-black font-bold rounded-lg hover:scale-105 transition"
          >
            Book Free Demo
          </a>

          <a
            href="#products"
            className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
          >
            Explore Products
          </a>
        </div>

      </div>
    </section>
  );
}