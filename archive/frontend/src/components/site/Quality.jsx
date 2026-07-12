import React from "react";
import { Sprout, Microscope, ShieldX, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "Direct from Farmers",
    body: "We hand-pick our farmers and buy the freshest, sweetest, A-grade produce direct from the field — no middleman, no compromise on grade.",
  },
  {
    icon: Microscope,
    title: "Perfect Blanch Test",
    body: "Every batch is blanch-tested for colour retention, tenderness and texture before freezing — naturally green, perfectly cooked, never overdone.",
  },
  {
    icon: ShieldX,
    title: "Zero Added Colour. Zero Preservatives.",
    body: "No artificial colours. No preservatives. No artificial dyes. What you see on the pack is what came off the farm — quickly frozen to lock it in.",
  },
  {
    icon: CheckCircle2,
    title: "Export-Level Quality Standards",
    body: "Stainless-steel lines, mandatory PPE, batch traceability and routine sanitation cycles — built for international audit standards.",
  },
];

export default function Quality() {
  return (
    <section id="quality" data-testid="quality-section" className="border-b border-[#DCE6DF] bg-[#0F1A12] text-[#FDFDF9] mf-grain">
      <div className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="mf-eyebrow" style={{ color: "#E6B325" }}>03 — Quality standards</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
              Best quality at the source.<br />
              <span className="text-[#E6B325]">Tested before it ships.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[#FDFDF9]/75 leading-relaxed">
            <p className="mb-4">Every batch clears <span className="text-[#FDFDF9] font-semibold">three checkpoints</span> before it leaves the floor:</p>
            <ol className="space-y-2 text-sm" data-testid="quality-checkpoints">
              <li className="flex items-start gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6B325] mt-1">01</span>
                <span><span className="text-[#FDFDF9] font-semibold">Farmer&apos;s lot graded</span> <span className="text-[#E6B325]">→</span> only A-grade produce moves forward.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6B325] mt-1">02</span>
                <span><span className="text-[#FDFDF9] font-semibold">Blanch test cleared</span> <span className="text-[#E6B325]">→</span> perfect colour, texture and professionally tested and approved.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6B325] mt-1">03</span>
                <span><span className="text-[#FDFDF9] font-semibold">Random samples pass</span> <span className="text-[#E6B325]">→</span> freeze, colour and nutrition tested before packing.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#FDFDF9]/15">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                data-testid={`quality-pillar-${i}`}
                className={`p-8 border-b border-[#FDFDF9]/15 ${
                  i !== pillars.length - 1 ? "lg:border-r" : ""
                } border-[#FDFDF9]/15 hover:bg-[#FDFDF9]/[0.04] transition-colors`}
              >
                <Icon className="w-6 h-6 text-[#E6B325]" />
                <h3 className="mt-6 font-heading text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-[#FDFDF9]/75 leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
