import React from 'react';

export default function HeroSection({ t }) {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-between px-6 pt-16 pb-12 text-center overflow-hidden">
      {/* Background scene video & texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <video
          src="/templates/olive-whisper/art/scene.mp4"
          poster="/templates/olive-whisper/art/scene-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f1]/30 via-transparent to-[#fbf8f1]/80" />
      </div>

      {/* Floating drifting leaves & blossoms */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        <img
          src="/templates/olive-whisper/art/spine/drift-leaf-1.webp"
          alt=""
          className="nw-sway absolute top-12 left-4 w-7 opacity-75"
        />
        <img
          src="/templates/olive-whisper/art/spine/drift-blossom-1.webp"
          alt=""
          className="nw-breathe absolute top-28 right-6 w-6 opacity-80"
        />
        <img
          src="/templates/olive-whisper/art/spine/drift-leaf-3.webp"
          alt=""
          className="nw-sway absolute top-1/2 -left-3 w-8 opacity-65"
          style={{ animationDelay: '2s' }}
        />
        <img
          src="/templates/olive-whisper/art/spine/drift-leaf-5.webp"
          alt=""
          className="nw-breathe absolute top-[60%] right-3 w-7 opacity-70"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Bismillah Header */}
      <div className="relative z-10 pt-4">
        <p className="font-amiri text-lg md:text-xl text-[#7e8b5e] tracking-wide">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </div>

      {/* Couple's Names */}
      <div className="relative z-10 my-auto flex flex-col items-center gap-2 py-6">
        <h1
          className="font-serif text-[clamp(2.8rem,11vw,4.5rem)] leading-none font-semibold italic text-gray-900 drop-shadow-sm transition-all duration-700"
          style={{ fontFamily: "'Cormorant Garamond', 'Amiri', serif" }}
        >
          {t.bride}
        </h1>

        <div className="my-1 flex items-center justify-center">
          <span className="font-serif text-3xl md:text-4xl italic text-[#7e8b5e]">
            {t.and}
          </span>
        </div>

        <h1
          className="font-serif text-[clamp(2.8rem,11vw,4.5rem)] leading-none font-semibold italic text-gray-900 drop-shadow-sm transition-all duration-700"
          style={{ fontFamily: "'Cormorant Garamond', 'Amiri', serif" }}
        >
          {t.groom}
        </h1>

        {/* Quranic Tagline */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <p className="font-tenor text-xs md:text-sm uppercase tracking-[0.28em] text-gray-900 font-medium">
            {t.tagline}
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gray-900 font-tenor">
            {t.taglineRef}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pt-6">
        <div className="nw-scroll-bob flex flex-col items-center gap-1 text-[#7e8b5e]/70">
          <svg viewBox="0 0 24 16" width="22" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 2 l7 6 7 -6" opacity="0.45" />
            <path d="M5 7 l7 6 7 -6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

