import React from "react";
import { Sprout, Factory, PackageCheck, Truck } from "lucide-react";

const caps = [
  {
    icon: Sprout,
    k: "Sourcing",
    title: "Direct farmer network",
    body: "Long-standing relationships with growers across India. We buy only A-grade, peak-season produce — the same quality our family has been buying for 35 years.",
  },
  {
    icon: Factory,
    k: "Manufacturing",
    title: "High-hygiene factory",
    body: "Stainless-steel lines, traceability per batch. Built for international audit standards and large-volume production.",
  },
  {
    icon: PackageCheck,
    k: "White-label",
    title: "Contract packing & white labelling",
    body: null,
    partner: {
      logo: "/media/golden-crown.png",
      name: "Golden Crown",
      note: "Holyland Group",
    },
    render: () => (
      <>
        We white-label frozen vegetables, peas, corn and chaap for brands &mdash; including trusted names like{" "}
        <strong className="text-[#0F1A12] font-semibold">Holyland Marketing Pvt. Ltd.</strong> which is India&apos;s leading brand for canned foods by the name of <strong className="text-[#0F1A12] font-semibold">Golden Crown</strong>. Your brand, our quality and consistency on every pack.
      </>
    ),
  },
  {
    icon: Truck,
    k: "Dispatch",
    title: "Own temperature-controlled shipping",
    body: "We have our own temperature-controlled shipping facilities available — sized around your demand, delivered without breaking the chill.",
  },
];

const factoryImg = "/media/factory.jpg";

export default function Capabilities() {
  return (
    <section id="capabilities" data-testid="capabilities-section" className="border-b border-[#DCE6DF]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 mb-14 items-end">
          <div className="lg:col-span-6">
            <p className="mf-eyebrow">04 — Capabilities</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Sourcing, manufacturing, white-labelling, dispatch &mdash; under one roof.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 text-[#475E4D]">
            Backed by 35 years of food-business muscle, we scale the order from
            sample carton to full export container without compromising on
            quality or your timeline.
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 border border-[#DCE6DF] bg-[#FFFFFF] overflow-hidden lift" data-testid="capability-logistics-card">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={factoryImg} alt="High-hygiene factory floor" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 md:p-8">
              <p className="mf-eyebrow">Manufacturing</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight">High-hygiene, export-ready factory</h3>
              <p className="mt-3 text-[#475E4D]">
                Stainless-steel production lines and routine sanitation cycles &mdash; built for international audit standards and consistent large-volume output.
              </p>
            </div>
            <div className="border-t border-[#DCE6DF]" data-testid="factory-map-block">
              <div className="p-6 md:p-8 pb-3 flex items-end justify-between gap-4">
                <div>
                  <p className="mf-eyebrow">Locate us</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">Shree Laxmi Frozen Foods · Farrukhabad</h3>
                </div>
                <a
                  href="https://www.google.com/maps/place/Shree+Laxmi+Frozen+Foods/@27.3597985,79.5451316,17z"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="factory-map-open"
                  className="hidden sm:inline-flex items-center gap-1.5 border border-[#0F1A12] text-[#0F1A12] hover:bg-[#0F1A12] hover:text-[#FDFDF9] px-3 py-1.5 text-xs font-medium lift"
                >
                  Open in Maps
                </a>
              </div>
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="Shree Laxmi Frozen Foods — Farrukhabad"
                  data-testid="factory-map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.509523035033!2d79.54513159999999!3d27.359798500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e2f046585aa73%3A0x1e2618db1b918490!2sShree%20Laxmi%20Frozen%20Foods!5e0!3m2!1sen!2sin!4v1782138545177!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {caps.slice(1).map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  data-testid={`capability-card-${i}`}
                  className="border border-[#DCE6DF] bg-[#FFFFFF] p-6 lift hover:border-[#1E5631]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#FDFDF9] border border-[#DCE6DF]">
                      <Icon className="w-5 h-5 text-[#1E5631]" />
                    </span>
                    <div>
                      <p className="mf-eyebrow">{c.k}</p>
                      <h3 className="font-heading text-lg font-semibold tracking-tight mt-1">{c.title}</h3>
                      <p className="text-sm text-[#475E4D] mt-2 leading-relaxed">
                        {c.render ? c.render() : c.body}
                      </p>
                      {c.partner && (
                        <div className="mt-4 inline-flex items-center gap-3 border border-[#DCE6DF] bg-[#FDFDF9] pl-2 pr-4 py-2" data-testid="capability-partner">
                          <img
                            src="/media/golden-crown.png"
                            alt={`${c.partner.name} logo`}
                            className="h-10 w-auto object-contain"
                            loading="lazy"
                          />
                          <div className="flex flex-col leading-tight">
                            <span className="font-heading text-sm font-semibold text-[#0F1A12]">{c.partner.name}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
