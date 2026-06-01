export default function Stats() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-zinc-400 mt-2">
              Automated Responses
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-zinc-400 mt-2">
              Lead Capture
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">2</h3>
            <p className="text-zinc-400 mt-2">
              Active Products
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">AI</h3>
            <p className="text-zinc-400 mt-2">
              Powered Systems
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}