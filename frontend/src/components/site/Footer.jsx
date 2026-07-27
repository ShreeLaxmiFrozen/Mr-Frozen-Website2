import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="bg-[#0F1A12] text-[#FDFDF9]">
      <div className="px-6 md:px-12 lg:px-24 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="bg-[#FDFDF9] p-2 inline-flex items-center justify-center">
              <img
                src="/media/MrFrozenLogoD.png"
                alt="Mr. Frozen logo"
                className="h-9 w-auto"
              />
            </div>
            <div className="flex flex-col leading-tight border-l border-[#FDFDF9]/20 pl-3">
              <span className="font-heading text-sm font-semibold text-[#FDFDF9] tracking-tight">Shree Laxmi Frozen Foods</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-[#FDFDF9]/70 max-w-sm leading-relaxed">
            Premium frozen vegetables and high-protein soya chaap &mdash;
            sourced direct from farmers, made in Farrukhabad, delivered worldwide.
            No added colour. No preservatives.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FDFDF9]/55">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Products", "Quality", "Capabilities", "Export", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-[#FDFDF9]/80 hover:text-[#E6B325]">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FDFDF9]/55">Reach us</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-[#E6B325]" href="mailto:shreelaxmifrozenfoods1@gmail.com">shreelaxmifrozenfoods1@gmail.com</a></li>
            <li><a className="hover:text-[#E6B325]" href="tel:+918935024024">+91 89350 24024</a></li>
            <li className="text-[#FDFDF9]/70">Farrukhabad · Uttar Pradesh · India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#FDFDF9]/10 px-6 md:px-12 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#FDFDF9]/55 font-mono">
          © {year} Shree Laxmi Frozen Foods. All Rights Reserved.
        </p>

        <a
          href="/privacy-policy"
          className="text-xs text-[#FDFDF9]/55 font-mono hover:text-[#E6B325] transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
