import React from 'react';

export default function DressCodeSection({ t }) {
  return (
    <section className="relative px-6 py-12 text-center">
      {/* Icon header */}
      <img
        src="/templates/olive-whisper/art/spine/icon-dress.webp"
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
          {t.dressTitle}
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
            src="/templates/olive-whisper/art/spine/wash-dress.webp"
            alt="Dress code attire"
            className="w-full h-auto object-cover rounded-xl border border-[#7e8b5e]/20 shadow-sm select-none"
          />
        </div>

        <h3 className="font-serif text-2xl font-medium text-[#26231d]">
          {t.dressStyle}
        </h3>
        <p className="font-body text-sm text-[#26231d]/75 mt-1 max-w-xs mx-auto leading-relaxed">
          {t.dressDescription}
        </p>

        {/* Color Palette Swatches */}
        <div className="mt-6 flex justify-center items-center gap-3">
          {t.palette.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 group">
              <div
                className="h-10 w-10 rounded-full border-2 border-white shadow-md transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: item.hex }}
                title={`${item.name} (${item.hex})`}
              />
              <span className="font-tenor text-[9px] uppercase tracking-wider text-[#26231d]/70 max-w-[50px] truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

