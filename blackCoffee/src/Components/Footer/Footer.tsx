export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0b09] text-white">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-xl">
                ☕
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Brew Haven
                </h2>

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Coffee & More
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              Freshly roasted beans, handcrafted coffee, and good moments
              served in every cup.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#181310] text-sm text-gray-400 transition hover:border-amber-500/40 hover:text-amber-400"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#181310] text-sm text-gray-400 transition hover:border-amber-500/40 hover:text-amber-400"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#181310] text-sm text-gray-400 transition hover:border-amber-500/40 hover:text-amber-400"
              >
                𝕏
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">

              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Coffee Menu
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-400">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between gap-5">
                <span className="text-gray-500">
                  Mon - Fri
                </span>

                <span className="text-gray-300">
                  7:00 AM - 10:00 PM
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-gray-500">
                  Saturday
                </span>

                <span className="text-gray-300">
                  8:00 AM - 11:00 PM
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="text-gray-500">
                  Sunday
                </span>

                <span className="text-gray-300">
                  8:00 AM - 9:00 PM
                </span>
              </div>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-amber-400">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-500">

              <p className="flex items-start gap-3">
                <span className="text-amber-400">📍</span>
                <span>
                  123 Coffee Street,
                  <br />
                  Downtown City
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-amber-400">📞</span>
                <span>+1 234 567 890</span>
              </p>

              <p className="flex items-center gap-3">
                <span className="text-amber-400">✉</span>
                <span>hello@brewhaven.com</span>
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Brew Haven. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-gray-300">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-gray-300">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}