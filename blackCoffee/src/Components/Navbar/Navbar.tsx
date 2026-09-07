export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-[#0f0b09] text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-xl">
            ☕
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              Black Coffee
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              You Need Black Coffee
            </p>
          </div>

        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-sm font-medium text-amber-400 transition hover:text-amber-300"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            Menu
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-400 transition hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#181310] text-gray-400 transition hover:border-amber-500/40 hover:text-amber-400 sm:flex">
            🔍
          </button>

          {/* Cart */}
          <button className="relative flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-[#181310] px-3 text-gray-300 transition hover:border-amber-500/40 hover:text-amber-400">

            <span className="text-lg">
              🛒
            </span>

            <span className="hidden text-sm font-medium sm:block">
              Cart
            </span>

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-black">
              2
            </span>

          </button>

          {/* Mobile Menu */}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#181310] text-gray-300 transition hover:text-amber-400 md:hidden">
            ☰
          </button>

        </div>

      </div>
    </nav>
  );
}