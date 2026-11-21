
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050B1C] text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:px-10">

        {/* BRAND */}
        <div className="text-center md:text-left">
          <a
            href="/"
            className="text-3xl font-extrabold tracking-tight"
          >
            <span className="text-[#FBBF24]">G3</span>
            <span className="text-white"> Global Giant Girls</span>
          </a>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
            Empowering girls to discover their purpose,
            build confidence and become the best versions
            of themselves.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
          <a href="#books" className="transition hover:text-[#FBBF24]">
            Books
          </a>

          <a href="#mentorship-registration" className="transition hover:text-[#FBBF24]">
            Mentorship
          </a>

          <a href="#faq" className="transition hover:text-[#FBBF24]">
            FAQs
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/presidentofgirlss/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#FBBF24] hover:text-[#FBBF24]"
          >
            <Instagram size={19} />
          </a>

          <a
            href="https://www.facebook.com/precious.ogbonnaya.96"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#FBBF24] hover:text-[#FBBF24]"
          >
            <Facebook size={19} />
          </a>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:px-10">

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Global Giant Girls (G3).
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#top"
              className="flex items-center gap-1 transition hover:text-white"
            >
              Back to top
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}