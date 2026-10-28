import React from 'react';

export default function AnnouncementCard({ t }) {
  return (
    <section className="relative mx-auto w-full max-w-[24rem] px-4 py-8">
      {/* Ornate cartouche container */}
      <div className="relative shadow-sm">
        {/* Top border ornament */}
        <img
          src="/templates/olive-whisper/art/spine/cart-top.webp"
          alt=""
          aria-hidden="true"
          className="relative z-10 block w-full select-none"
        />

        {/* Middle text area with textured background */}
        <div
          className="relative text-center px-8 py-6 -my-1"
          style={{
            backgroundImage: 'url(/templates/olive-whisper/art/spine/cart-mid.webp)',
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y',
            backgroundColor: '#fbf8f1'
          }}
        >
          {/* Subtle inner decorative border */}
          <div className="absolute inset-x-6 inset-y-2 border border-[#7e8b5e]/25 pointer-events-none rounded-[1px]" />

          <p className="font-tenor text-[0.68rem] md:text-xs uppercase tracking-[0.28em] text-[#7e8b5e] font-medium mb-4">
            {t.graceNotice}
          </p>

          {/* Central gold ornament */}
          <div className="my-3 flex justify-center text-[#c49a5a]">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2 L18 8 L12 14 L6 8 Z" />
              <path d="M12 5.5 L15 8 L12 10.5 L9 8 Z" fill="currentColor" opacity="0.85" />
              <path d="M12 14 L12 22" />
              <path d="M9.5 19 L12 21.5 L14.5 19" />
            </svg>
          </div>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#26231d] mt-3">
            {t.familiesAnnouncement}
          </p>
        </div>

        {/* Bottom border ornament */}
        <img
          src="/templates/olive-whisper/art/spine/cart-bottom.webp"
          alt=""
          aria-hidden="true"
          className="relative z-10 block w-full select-none"
        />
      </div>
    </section>
  );
}

