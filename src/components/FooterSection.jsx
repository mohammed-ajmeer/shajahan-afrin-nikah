import React from 'react';

export default function FooterSection({ t }) {
  return (
    <footer className="relative px-6 pt-12 pb-24 text-center">
      <div className="mx-auto max-w-sm">
        {/* Farewell wash illustration */}
        <div className="mb-6 flex justify-center">
          <img
            src="/templates/olive-whisper/art/spine/wash-farewell.webp"
            alt=""
            aria-hidden="true"
            className="w-48 h-auto opacity-85 select-none"
          />
        </div>

        {/* Traditional Islamic Blessing */}
        <p
          lang="ar"
          dir="rtl"
          className="font-amiri text-xl md:text-2xl text-[#7e8b5e] leading-relaxed"
        >
          {t.blessingAr}
        </p>

        {t.lang === 'en' && (
          <p className="mt-2 font-body text-xs italic text-[#26231d]/75 max-w-xs mx-auto">
            {t.blessingEn}
          </p>
        )}

        {/* Brand Lockup & Signature */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <img
            // src="/images/brand/logo-lockup.webp"
            // alt="NoorWeds — Invite with Noor"
            className="h-7 w-auto opacity-80 select-none transition-opacity hover:opacity-100"
          />
          <span className="font-tenor text-[9px] uppercase tracking-[0.35em] text-gray-900/50">
            {t.madeWithLove}
          </span>
        </div>
      </div>
    </footer>
  );
}
