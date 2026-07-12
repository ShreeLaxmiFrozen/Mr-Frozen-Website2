import React from "react";
import { Stamp, ShieldCheck, FileCheck2 } from "lucide-react";

// Best-guess pick (HEIC) — user can swap to PNG/JPG via Visual Edits
const LABEL_IMG = "/media/labels.jpg";

export default function Labelling() {
  return (
    <section id="labelling" data-testid="labelling-section" className="border-b border-[#DCE6DF] bg-[#FFFFFF]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[4/3] overflow-hidden border border-[#DCE6DF] bg-[#F4F6F1]">
            <img
              src={LABEL_IMG}
              alt="Digital, tamper-proof labelling on Mr. Frozen packs"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#475E4D]">
            Govt-compliant digital labelling · unalterable ink
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="mf-eyebrow">06</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
            Tamper-proof date, time and batch codes.
          </h2>
          <p className="mt-5 text-[#475E4D] leading-relaxed">
            Every pack is printed with a <span className="text-[#0F1A12] font-medium">digital, government-compliant
            label</span> using a permanent ink that physically cannot be
            scratched off or re-printed. The manufacturing date, time and batch code we print on the day of packing stay on the bag for life &mdash; so you (and your customers) can always trust what&apos;s on the pack.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                icon: Stamp,
                t: "Unalterable ink",
                d: "Industrial digital coder; permanent on film — no smudge, no rewrite.",
              },
              {
                icon: FileCheck2,
                t: "Govt protocol-compliant",
                d: "Manufacturing date, Expiry date, batch code and FSSAI registration number printed per Indian + export labelling norms.",
              },
              {
                icon: ShieldCheck,
                t: "Built for buyer trust",
                d: "Exporters, distributors and modern retail can audit any pack — the date on it is the truth.",
              },
            ].map((it) => {
              const Icon = it.icon;
              return (
                <li key={it.t} data-testid={`labelling-pt-${it.t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="flex items-start gap-3 border-t border-[#DCE6DF] pt-4">
                  <Icon className="w-5 h-5 text-[#1E5631] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading text-base font-semibold text-[#0F1A12] leading-snug">{it.t}</p>
                    <p className="text-sm text-[#475E4D] mt-1 leading-relaxed">{it.d}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
