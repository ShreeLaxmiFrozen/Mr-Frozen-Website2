import React, { useRef, useState } from "react";
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react";

const SRC = "/media/tour.mp4";
const POSTER = "/media/tour-poster.jpg";

export default function FullTour() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    v.muted = muted;
    v.play().then(() => setPlaying(true)).catch(() => {});
  };

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const fullscreen = () => {
    const v = ref.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
  };

  return (
    <section id="full-tour" data-testid="full-tour-section" className="border-b border-[#DCE6DF] bg-[#0F1A12] text-[#FDFDF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Shree Laxmi Frozen Foods Factory Tour",
            "description": "A complete walk through the Shree Laxmi Frozen Foods production facility, from raw produce arrival through sorting, blanching, IQF freezing, packing and date-coding.",
            "thumbnailUrl": "https://shreelaxmifrozenfoods.com/media/tour-poster.jpg",
            "contentUrl": "https://shreelaxmifrozenfoods.com/media/tour.mp4",
            "duration": "PT1M30S",
            "uploadDate": "2026-07-13"
          })
        }}
      />
      <div className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="mf-eyebrow" style={{ color: "#E6B325" }}>07 — The full tour</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
              A complete walk through the factory.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 text-[#FDFDF9]/75 leading-relaxed">
            From raw produce on arrival, through sorting, blanching, IQF
            freezing, packing and date-coding &mdash; the entire production
            floor in one uncut tour. Press play when you&apos;re ready.
          </div>
        </div>

        <div
          data-testid="full-tour-video-wrap"
          className="relative w-full max-w-[1600px] mx-auto border border-[#FDFDF9]/15 bg-black aspect-video group"
        >
          <video
            ref={ref}
            src={SRC}
            poster={POSTER}
            preload="metadata"
            playsInline
            controls={started}
            onClick={(e) => { if (!started) { e.preventDefault(); start(); } }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="w-full h-full object-contain bg-black"
            data-testid="full-tour-video"
          />

          {!started && (
            <button
              type="button"
              data-testid="full-tour-play-btn"
              onClick={start}
              aria-label="Play factory tour"
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-[#0F1A12]/70 via-transparent to-[#0F1A12]/30 transition-opacity group-hover:from-[#0F1A12]/55" />
              <span className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#E6B325] text-[#0F1A12] shadow-[0_10px_40px_rgba(230,179,37,0.45)] lift">
                <Play className="w-9 h-9 sm:w-10 sm:h-10 ml-1" fill="currentColor" />
              </span>
              <span className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 text-left">
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDFDF9]/70">Click to play</span>
                <span className="block mt-1 font-heading text-xl sm:text-2xl font-semibold text-[#FDFDF9]">Full Factory Tour</span>
              </span>
            </button>
          )}

          {started && (
            <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={toggle}
                data-testid="full-tour-toggle"
                aria-label={playing ? "Pause" : "Play"}
                className="bg-[#FDFDF9]/90 hover:bg-[#FDFDF9] text-[#0F1A12] p-2 lift"
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" fill="currentColor" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                data-testid="full-tour-mute"
                aria-label={muted ? "Unmute" : "Mute"}
                className="bg-[#FDFDF9]/90 hover:bg-[#FDFDF9] text-[#0F1A12] p-2 lift"
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={fullscreen}
                data-testid="full-tour-fullscreen"
                aria-label="Fullscreen"
                className="bg-[#FDFDF9]/90 hover:bg-[#FDFDF9] text-[#0F1A12] p-2 lift"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDFDF9]/55">
          Unedited footage · Shree Laxmi Frozen Foods · Farrukhabad
        </p>
      </div>
    </section>
  );
}
