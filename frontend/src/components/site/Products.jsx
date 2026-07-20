import React from "react";
import products from "../../data/products";


export default function Products() {
  return (
    <section id="products" data-testid="products-section" className="border-b border-[#DCE6DF] bg-[#FDFDF9]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6">
            <p className="mf-eyebrow">02 — Product range</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Farm-sourced, frozen at peak — no added colour, no preservatives.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 text-[#475E4D]">
            We buy direct from farmers, hand-grade every batch and freeze it
            quickly to lock in the sweetness, the green and the nutrition.
            Available in retail packs and bulk packs to suit distributor,
            restaurant and export demand.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.name}
                data-testid={`product-card-${i}`}
                className="group bg-[#FDFDF9] flex flex-col"
              >
                {/* Image area — blends into section background, no inner container colour */}
                <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden">
                  {p.kind === "pack" ? (
                    <img
                      src={p.img}
                      alt={`${p.name} packaging`}
                      loading="lazy"
                      className="max-h-[92%] max-w-[92%] w-auto h-auto object-contain drop-shadow-[0_18px_40px_rgba(15,26,18,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  )}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#0F1A12] text-[#FDFDF9] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">
                    <Icon className="w-3 h-3" /> {p.tag}
                  </span>
                </div>

                {/* Text — highlights on hover */}
                <div className="mt-5 px-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold leading-tight text-[#0F1A12] transition-colors duration-300 group-hover:text-[#1E5631]">
                    {p.name}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed text-[#475E4D] transition-colors duration-300 group-hover:text-[#0F1A12]">
                    {p.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#1E5631] border border-[#1E5631]/30 bg-[#FDFDF9] px-2 py-0.5 transition-all duration-300 group-hover:bg-[#1E5631] group-hover:text-[#FDFDF9] group-hover:border-[#1E5631]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {p.packs && (
                    <div className="mt-4 border-t border-[#DCE6DF] pt-3" data-testid={`product-packs-${i}`}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475E4D]">Available pack sizes</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.packs.map((w) => (
                          <span
                            key={w}
                            className="inline-flex items-center bg-[#0F1A12] text-[#FDFDF9] px-2.5 py-1 text-[11px] font-heading font-semibold tracking-tight transition-colors duration-300 group-hover:bg-[#1E5631]"
                          >
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
