import React from 'react';

export default function VerseSection({ t }) {
  return (
    <section className="relative px-6 py-10 text-center">
      <div className="mx-auto max-w-[21rem]">
        {/* Top gold icon */}
        <div className="mb-5 flex items-center justify-center text-[#c49a5a]">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2 L18 8 L12 14 L6 8 Z" />
            <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
            <path d="M12 14 L12 22" />
            <path d="M9.5 19 L12 21.5 L14.5 19" />
          </svg>
        </div>

        {/* Arabic verse */}
        <p
          lang="ar"
          dir="rtl"
          className="font-amiri text-[1.45rem] md:text-[1.65rem] leading-[2.1] text-[#2b3320] font-normal"
        >
          {t.verseArabic}
        </p>

        {/* Translation if in English mode */}
        {t.lang === 'en' && (
          <p className="mt-4 font-body text-sm md:text-base italic leading-relaxed text-[#26231d]/85">
            {t.verseTranslation}
          </p>
        )}

        {/* Citation */}
        <p className="mt-4 font-tenor text-[0.62rem] md:text-xs uppercase tracking-[0.24em] text-[#7e8b5e]">
          {t.verseCitation}
        </p>

        {/* Center decorative divider */}
        <div className="mt-8 flex justify-center">
          <img
            src="/templates/olive-whisper/art/spine/divider-knot.webp"
            alt=""
            aria-hidden="true"
            className="h-5 w-auto opacity-75 select-none"
          />
        </div>
      </div>
    </section>
  );
}

