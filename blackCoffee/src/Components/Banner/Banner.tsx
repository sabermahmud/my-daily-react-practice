export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#0f0b09] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[550px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

        <div className="max-w-2xl">

          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/30 px-4 py-2 backdrop-blur-sm">
            <span className="text-amber-400">☕</span>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
              Freshly Brewed
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Your Perfect Cup
            <span className="block text-amber-400">
              Starts Here.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Discover rich flavors, freshly roasted beans, and handcrafted
            coffee made especially for your perfect moment.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button className="rounded-xl bg-amber-500 px-7 py-3.5 font-semibold text-black transition hover:bg-amber-400">
              Explore Menu
            </button>

            <button className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Our Story
            </button>

          </div>

          {/* Bottom Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-6">

            <div>
              <p className="text-2xl font-bold text-amber-400">
                20+
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Coffee Varieties
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-amber-400">
                4.9
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Customer Rating
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-amber-400">
                100%
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Fresh Beans
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0b09] to-transparent" />

    </section>
  );
}