import React from "react";
import { Globe2, Container, Handshake } from "lucide-react";

const items = [
  { icon: Container, title: "Own temperature-controlled shipping", body: "We have our own temperature-controlled shipping facilities available — dispatch sized around your demand, not ours." },
  { icon: Globe2, title: "Ready for international buyers", body: "Building relationships with exporters and HoReCa buyers across geographies." },
  { icon: Handshake, title: "Private label for exporters", body: "We will pack to your brand, your bag size, your retail specifications." },
];

export default function Export() {
  return (
    <section id="export" data-testid="export-section" className="border-b border-[#DCE6DF] bg-[#FDFDF9]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="mf-eyebrow">08 — Export readiness</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Built for exporters, distributors and HoReCa buyers &mdash; globally.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[#475E4D] leading-relaxed">
            We are actively expanding to international expos and direct exports. Our factory and paperwork are sized for what global buyers expect &mdash; clean spec sheets, predictable batches, and no surprises in the box.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#DCE6DF]">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`export-item-${i}`}
                className={`p-6 md:p-8 border-b border-[#DCE6DF] ${i !== items.length - 1 ? "lg:border-r" : ""} border-[#DCE6DF] hover:bg-[#FFFFFF] transition-colors`}
              >
                <Icon className="w-5 h-5 text-[#1E5631]" />
                <p className="mt-5 font-heading text-base font-semibold text-[#0F1A12] leading-snug">{it.title}</p>
                <p className="mt-2 text-sm text-[#475E4D] leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="#inquiry"
            data-testid="export-cta"
            className="inline-flex items-center gap-2 bg-[#1E5631] hover:bg-[#164024] text-[#FDFDF9] px-6 py-3.5 text-sm font-medium lift"
          >
            Discuss an export order
          </a>
        </div>
      </div>
    </section>
  );
}
