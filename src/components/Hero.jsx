export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-sky-700 bg-sky-100 rounded-full px-3 py-1">
              New drop • Limited stock
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Effortless layers for breezy days
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Windstruck blends coastal minimalism with technical comfort. Built for movement, styled for everyday.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#featured" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                Shop featured
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                Learn more
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop"
                alt="Windstruck apparel"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 ring-1 ring-slate-900/5">
              <p className="text-sm font-medium text-slate-900">Designed for motion</p>
              <p className="text-xs text-slate-500">Breathable. Durable. Refined.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
