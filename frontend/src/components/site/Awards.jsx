import React from "react";
import { Award } from "lucide-react";

const clients = [
  "Golden Crown",
  "Pan-India Distributors",
  "Restaurants & HoReCa",
  "White-Label Brands",
];

export default function Awards() {
  return (
    <section data-testid="awards-section" className="border-b border-[#DCE6DF] bg-[#FFFFFF]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="mf-eyebrow">09 — Recognition</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
            Recognised by media, trusted by industry.
          </h2>
          <div className="mt-8 border border-[#DCE6DF] p-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#E6B325]" />
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#475E4D]">Amar Ujala · Madhyanchal ki Shaan 2025</p>
            </div>
            <h3 className="mt-4 font-heading text-xl font-semibold leading-snug">
              Felicitated for excellence in frozen food manufacturing — honored by <span className="text-[#1E5631]">Shri Keshav Prasad Maurya, Deputy Chief Minister, Uttar Pradesh</span>, at the Amar Ujala recognition ceremony.
            </h3>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <figure className="border border-[#DCE6DF] bg-[#FDFDF9] overflow-hidden">
            <div className="aspect-[3/2] overflow-hidden bg-[#F4F6F1]">
              <img
                src="/media/award-news.jpg"
                alt="Award ceremony — Deputy Chief Minister Keshav Prasad Maurya presenting the recognition"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="p-5 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475E4D]">Amar Ujala coverage · 2025</p>
              <p className="mt-2 font-heading text-base md:text-lg text-[#0F1A12] leading-snug">
                Vasudev Agrawal (Shree Laxmi Frozen Foods / Mr. Frozen) receiving the award from Deputy Chief Minister Shri Keshav Prasad Maurya.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
