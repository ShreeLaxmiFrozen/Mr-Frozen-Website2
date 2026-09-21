import React from "react";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="border-b border-[#DCE6DF]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="mf-eyebrow">01 — Who we are</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
            Backed by a 35-year family legacy.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 text-[#475E4D] text-base md:text-lg leading-relaxed space-y-5">
          <p>
            Mr. Frozen is among India&apos;s leading manufacturers and suppliers of premium frozen green peas, with a production capacity exceeding <span className="text-[#0F1A12] font-medium">8,000 metric tonnes</span>. Backed by over <span className="text-[#0F1A12] font-medium">35 years of family experience</span> in the cold storage industry, we have built our business on trust, consistency, and long-term relationships with farmers, distributors and retailers.
          </p>
          <p>
            Building upon this legacy, Mr. Frozen, the frozen-food brand by Shree Laxmi Frozen Foods, was created with a singular purpose &mdash; to offer premium frozen vegetables that meet high-quality standards and preserve freshness, nutrition, and taste. Through modern processing techniques, stringent quality standards, and a commitment to continuous improvement, we strive to bring the finest products to customers across India.
          </p>
          <p>
            Our factory supplies vegetables and chaap to restaurants across India &mdash; including a branch of <span className="text-[#0F1A12] font-medium">Moti Mahal</span>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#DCE6DF] mt-8">
            {[
              { k: "8,000+", v: "Metric tonnes · annual capacity" },
              { k: "35+",    v: "Years family experience" },
              { k: "0",      v: "Chemicals · 0 added colour" },
            ].map((s) => (
              <div key={s.v} data-testid={`about-stat-${s.v.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <p className="font-heading text-3xl font-semibold text-[#1E5631] tracking-tight">{s.k}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#475E4D] mt-1">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
