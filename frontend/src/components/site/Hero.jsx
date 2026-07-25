import React, { useState } from "react";
import { ArrowDownRight, Sprout, ShieldCheck, BadgeCheck } from "lucide-react";

const heroImg = "/media/hero-collage.jpg";

// Grid column ratios for the bidirectional hover effect.
const RATIOS = {
  idle:  "minmax(0, 1.4fr) minmax(0, 1fr)",
  image: "minmax(0, 0.55fr) minmax(0, 1.7fr)",
  text:  "minmax(0, 2fr) minmax(0, 1fr)",
};
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Hero() {
  const [hover, setHover] = useState("idle"); // 'idle' | 'image' | 'text'

  const cols = RATIOS[hover] || RATIOS.idle;
  const textActive = hover === "text";
  const imageActive = hover === "image";

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden border-b border-[#DCE6DF]"
    >
      <div className="px-6 md:px-12 lg:px-24 pt-12 md:pt-20 pb-20 md:pb-28">
        {/* Top row: text + image with bidirectional hover */}
        <div
          className="hidden lg:grid gap-10 lg:gap-16 items-stretch"
          style={{
            gridTemplateColumns: cols,
            transition: `grid-template-columns 700ms ${EASE}`,
          }}
          data-testid="hero-bento"
        >
          {/* TEXT PANEL */}
          <div
            data-testid="hero-text-panel"
            onMouseEnter={() => setHover("text")}
            onMouseLeave={() => setHover("idle")}
            className="reveal min-w-0"
            style={{ transition: `transform 700ms ${EASE}` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="mf-eyebrow">Farrukhabad · India → Global</span>
              <span className="h-px w-10 bg-[#1E5631]/40" />
              <span className="font-mono text-[11px] text-[#475E4D]">Sourced direct from farmers</span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-heading font-bold leading-[0.95] tracking-[-0.03em] text-[#0F1A12]"
              style={{
                fontSize: textActive ? "clamp(3.5rem, 6vw, 5.75rem)" : imageActive ? "clamp(2rem, 2.6vw, 2.75rem)" : "clamp(2.75rem, 4.2vw, 4.5rem)",
                transition: `font-size 700ms ${EASE}`,
              }}
            >
              Sweet. Green.<br />
              <span className="text-[#1E5631]">Naturally nutritious.</span><br />
              Frozen for the world.
            </h1>

            <p
              className="mt-6 text-[#475E4D] leading-relaxed"
              style={{
                maxWidth: textActive ? "44rem" : imageActive ? "20rem" : "32rem",
                fontSize: imageActive ? "0.875rem" : "1.0625rem",
                opacity: imageActive ? 0.6 : 1,
                transition: `max-width 700ms ${EASE}, font-size 700ms ${EASE}, opacity 500ms ease`,
              }}
            >
              Mr. Frozen sources the best produce direct from farmers and
              freezes it at its peak &mdash;{" "}
              <span className="text-[#0F1A12] font-medium">
                no added colour, no preservatives, no chemicals
              </span>. Export-grade green peas, American sweet corn, carrots,
              cauliflower and our signature protein-rich soya chaap.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              style={{
                opacity: imageActive ? 0 : 1,
                transform: imageActive ? "translateY(8px)" : "translateY(0)",
                transition: `opacity 400ms ease, transform 600ms ${EASE}`,
              }}
            >
              <a
                href="#inquiry"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 bg-[#1E5631] hover:bg-[#164024] text-[#FDFDF9] px-6 py-3.5 font-medium text-sm lift"
              >
                Start an inquiry <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-[#0F1A12] text-[#0F1A12] hover:bg-[#0F1A12] hover:text-[#FDFDF9] px-6 py-3.5 font-medium text-sm lift"
              >
                Explore products
              </a>
            </div>
          </div>

          {/* IMAGE PANEL */}
          <div
            data-testid="hero-image-panel"
            onMouseEnter={() => setHover("image")}
            onMouseLeave={() => setHover("idle")}
            className="reveal relative min-w-0"
            style={{
              transition: `transform 700ms ${EASE}`,
            }}
          >
            <div
              className="relative overflow-hidden border border-[#DCE6DF] bg-[#FDFDF9] group"
              style={{
                aspectRatio: "5 / 4",
              }}
            >
              <img
                src={heroImg}
                alt="Mr. Frozen — peas, sweet corn and soya chaap collage"
                className="w-full h-full object-contain"
                style={{
                  transform: imageActive ? "scale(1.06)" : "scale(1)",
                  transition: `transform 1200ms ${EASE}`,
                }}
                loading="eager"
                fetchPriority="high"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: imageActive
                    ? "linear-gradient(180deg, rgba(15,26,18,0) 60%, rgba(15,26,18,0.55) 100%)"
                    : "linear-gradient(180deg, rgba(15,26,18,0) 70%, rgba(15,26,18,0.25) 100%)",
                  transition: "background 600ms ease",
                }}
              />
              <div
                className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-[#FDFDF9]"
                style={{
                  opacity: imageActive ? 1 : 0,
                  transform: imageActive ? "translateY(0)" : "translateY(6px)",
                  transition: `opacity 500ms ease, transform 700ms ${EASE}`,
                }}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E6B325]">Our product family</p>
                  <p className="mt-1 font-heading text-xl font-semibold leading-tight">Peas · Sweet Corn · Soya Chaap</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 hidden xl:block bg-[#FDFDF9] border border-[#DCE6DF] p-5 max-w-[260px]"
              style={{
                opacity: imageActive ? 0 : 1,
                transform: imageActive ? "translate(8px, 8px)" : "translate(0,0)",
                transition: `opacity 400ms ease, transform 600ms ${EASE}`,
              }}
            >
              <p className="mf-eyebrow mb-2">Blanch Test · Batch QA</p>
              <p className="font-heading text-base text-[#0F1A12] leading-snug">
                Naturally green. Perfectly boiled. Frozen at peak nutrition.
              </p>
            </div>

            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-[#1E5631] text-[#FDFDF9] px-3 py-2 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-[#E6B325]" /> Among the top manufacturers
            </div>
          </div>
        </div>

        {/* Mobile / tablet: simple stacked layout (no hover) */}
        <div className="lg:hidden grid grid-cols-1 gap-10">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="mf-eyebrow">Farrukhabad · India → Global</span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-[0.95] tracking-[-0.03em] text-[#0F1A12]">
              Sweet. Green.<br />
              <span className="text-[#1E5631]">Naturally nutritious.</span><br />
              Frozen for the world.
            </h1>
            <p className="mt-6 max-w-xl text-base text-[#475E4D] leading-relaxed">
              Mr. Frozen sources the best produce direct from farmers and freezes it at its peak &mdash;{" "}
              <span className="text-[#0F1A12] font-medium">no added colour, no preservatives, no chemicals</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#inquiry" className="inline-flex items-center gap-2 bg-[#1E5631] text-[#FDFDF9] px-6 py-3.5 font-medium text-sm">
                Start an inquiry <ArrowDownRight className="w-4 h-4" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 border border-[#0F1A12] text-[#0F1A12] px-6 py-3.5 font-medium text-sm">
                Explore products
              </a>
            </div>
          </div>
          <div className="reveal aspect-[5/4] overflow-hidden border border-[#DCE6DF] bg-[#FDFDF9]">
            <img src={heroImg} alt="Mr. Frozen product family" className="w-full h-full object-contain" loading="eager" />
          </div>
        </div>

        {/* Trust strip — always visible, doesn't animate */}
        <div className="mt-14 lg:mt-16 grid grid-cols-3 gap-6 max-w-3xl">
          <Stat icon={<Sprout className="w-4 h-4" />} value="0" label="Added colour · 0 preservatives" />
          <Stat icon={<ShieldCheck className="w-4 h-4" />} value="✓" label="Protein-rich soya chaap" />
          <Stat icon={<BadgeCheck className="w-4 h-4" />} value="A+" label="Farmer-sourced grade" />
        </div>
      </div>
    </section>
  );
}

const Stat = ({ icon, value, label }) => (
  <div data-testid={`hero-stat-${label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="border-t border-[#DCE6DF] pt-3">
    <div className="flex items-center gap-1.5 text-[#1E5631]">{icon}<span className="font-heading text-2xl font-semibold tracking-tight">{value}</span></div>
    <p className="text-xs uppercase tracking-[0.18em] text-[#475E4D] mt-1">{label}</p>
  </div>
);
