import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#export", label: "Export" },
  { href: "#contact", label: "Contact" },
];

// Pale-green tone sampled from the brand logo background so the logo borders
// disappear into the header bar.
const HEADER_BG =
  "linear-gradient(180deg, #EAF1D6 0%, #EEF3DD 60%, #F2F6E4 100%)";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      style={{ background: HEADER_BG }}
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(15,26,18,0.08)]" : ""
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#top" data-testid="brand-logo" className="flex items-center gap-3 group">
            <img
              src="/media/MrFrozenLogoD.png"
              alt="Mr. Frozen — Every season's happiness"
              className="h-10 md:h-12 w-auto block mix-blend-multiply"
              style={{ background: "transparent" }}
            />
            <span className="hidden sm:flex flex-col leading-tight border-l border-[#0F1A12]/20 pl-3">
              <span className="font-heading text-xs md:text-sm font-semibold text-[#0F1A12] tracking-tight">Shree Laxmi Frozen Foods</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-sm text-[#2C3E2E] hover:text-[#0F1A12] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#inquiry"
              data-testid="nav-cta-inquiry"
              className="inline-flex items-center gap-1.5 bg-[#1E5631] hover:bg-[#164024] text-[#FDFDF9] px-4 py-2 text-sm font-medium lift"
            >
              Request Quote <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            className="md:hidden p-2 text-[#0F1A12]"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-[#0F1A12]/15 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="text-sm text-[#2C3E2E] hover:text-[#0F1A12]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta"
              className="inline-flex items-center justify-center gap-1.5 bg-[#1E5631] text-[#FDFDF9] px-4 py-2 text-sm font-medium"
            >
              Request Quote <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
      {/* soft fade from header tint into page background so the bar dissolves naturally */}
      <div
        aria-hidden="true"
        className="h-2 w-full"
        style={{ background: "linear-gradient(180deg, #F2F6E4 0%, rgba(253,253,249,0) 100%)" }}
      />
    </header>
  );
}
