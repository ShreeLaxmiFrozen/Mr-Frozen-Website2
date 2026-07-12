import React from "react";

const items = [
  "Frozen Green Peas",
  "American Sweet Corn",
  "A-Grade Carrots",
  "Snow-White Cauliflower",
  "Protein-Rich Soya Chaap",
  "No Added Colour · No Preservatives",
  "Direct from Farmer · Export Grade",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section data-testid="marquee" aria-hidden="true" className="border-b border-[#DCE6DF] bg-[#0F1A12] text-[#FDFDF9] overflow-hidden">
      <div className="marquee-track py-4 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-[0.25em] mx-8 inline-flex items-center gap-8">
            {t}
            <span className="w-1.5 h-1.5 bg-[#E6B325]" />
          </span>
        ))}
      </div>
    </section>
  );
}
