import React from "react";
import { Play, ShieldCheck } from "lucide-react";

const VIDEO = {
  src: "/media/hygiene.mp4",
  poster: "/media/hygiene-poster.jpg",
  type: "video/mp4",
  title: "Hygiene Protocol",
  sub: "Head caps · foot covers · sorting line",
};

export default function FactoryTour() {
  return (
    <section id="tour" data-testid="factory-tour-section" className="border-b border-[#DCE6DF] bg-[#FDFDF9]">
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="mf-eyebrow">05 — On the floor</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05]">
              Step inside. See how we work.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[#475E4D] leading-relaxed">
            A short, unedited loop of our PPE-first hygiene line &mdash; head
            caps, foot covers, gloves and hand-sorting on every batch.
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div
            data-testid="factory-tour-video-hygiene"
            className="lg:col-span-8 relative overflow-hidden border border-[#DCE6DF] bg-[#0F1A12] group lift"
          >
            <div className="aspect-[16/9] w-full">
              <video
                src={VIDEO.src}
                poster={VIDEO.poster}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A12]/85 via-[#0F1A12]/10 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#FDFDF9] text-[#0F1A12] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
              <Play className="w-3 h-3" /> Live loop
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-[#FDFDF9]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E6B325]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDFDF9]/80">{VIDEO.sub}</p>
              </div>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-semibold leading-tight">{VIDEO.title}</h3>
            </div>
          </div>

          <div className="lg:col-span-4 border border-[#DCE6DF] bg-[#FFFFFF] p-6 md:p-8 flex flex-col gap-5">
            <p className="mf-eyebrow">What you&apos;re seeing</p>
            <ul className="space-y-4 text-sm text-[#475E4D] leading-relaxed">
              <li className="flex gap-3 border-t border-[#DCE6DF] pt-3"><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#1E5631] mt-0.5">01</span> <span><span className="text-[#0F1A12] font-medium">Full PPE.</span> Hair caps, masks, gloves and dedicated work coats &mdash; mandatory on the floor.</span></li>
              <li className="flex gap-3 border-t border-[#DCE6DF] pt-3"><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#1E5631] mt-0.5">02</span> <span><span className="text-[#0F1A12] font-medium">Hand-sorting.</span> Every batch is hand-sorted for size, colour and quality before it moves down the line.</span></li>
              <li className="flex gap-3 border-t border-[#DCE6DF] pt-3"><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#1E5631] mt-0.5">03</span> <span><span className="text-[#0F1A12] font-medium">No staging.</span> What you see in the loop is exactly how the line runs every day &mdash; no edits, no setup.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
