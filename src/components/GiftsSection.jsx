import React from 'react';
import { Heart, CameraOff, Users } from 'lucide-react';

export default function GiftsSection({ t }) {
  return (
    <section className="relative px-6 py-12 text-center">
      {/* Icon header */}
      <img
        src="/templates/olive-whisper/art/spine/icon-gifts.webp"
        alt=""
        aria-hidden="true"
        className="mx-auto mb-3 block h-14 w-auto object-contain opacity-90 select-none"
      />

      {/* Title */}
      <div className="mb-1.5 flex items-center justify-center gap-2.5 text-[#c49a5a]">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
        <h2 className="font-tenor text-[0.82rem] uppercase tracking-[0.34em] text-[#7e8b5e] font-semibold nw-letterpress">
          {t.giftsTitle}
        </h2>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2 L18 8 L12 14 L6 8 Z" />
          <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
          <path d="M12 14 L12 22" />
        </svg>
      </div>

      <div className="mx-auto max-w-sm mt-4">
        {/* Wash artwork */}
        <div className="relative overflow-hidden rounded-xl my-4">
          <img
            src="/templates/olive-whisper/art/spine/wash-gifts.webp"
            alt="Gifts illustration"
            className="w-full h-auto object-cover rounded-xl border border-[#7e8b5e]/20 shadow-sm select-none"
          />
        </div>

        <p className="font-body text-base text-[#26231d] leading-relaxed max-w-xs mx-auto">
          {t.giftsBody}
        </p>

        {/* Kindly Note Card */}
      </div>
    </section>
  );
}

